import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import gsap from 'gsap'
import { TileType, LevelTile, CubeFace } from '@/types'

export interface Tile {
  id: string
  type: TileType
  mesh: THREE.Object3D
  body?: CANNON.Body
  position: { x: number; y: number; z: number }
  data: LevelTile
  activated: boolean
  broken: boolean
  collected: boolean
  
  activate?(): void
  deactivate?(): void
  break?(): Promise<void>
  collect?(): Promise<void>
  getLinkedTiles?(): string[]
  getPortalPair?(): string
  getColor?(): string
  getRequiredFace?(): CubeFace
  isPassable?(): boolean
}

export default class TileFactory {
  private static createStandardMaterials(): {
    floor: THREE.MeshStandardMaterial
    start: THREE.MeshStandardMaterial
    goal: THREE.MeshStandardMaterial
  } {
    return {
      floor: new THREE.MeshStandardMaterial({
        color: 0x1a1a2e,
        roughness: 0.8,
        metalness: 0.2,
        transparent: true,
        opacity: 0.95
      }),
      start: new THREE.MeshStandardMaterial({
        color: 0x4cc9f0,
        roughness: 0.5,
        metalness: 0.3,
        emissive: 0x4cc9f0,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.95
      }),
      goal: new THREE.MeshStandardMaterial({
        color: 0xf72585,
        roughness: 0.5,
        metalness: 0.3,
        emissive: 0xf72585,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.95
      })
    }
  }

  static createTile(tileData: LevelTile, tileSize: number = 1): Tile {
    const materials = this.createStandardMaterials()
    const position = {
      x: tileData.x * tileSize,
      y: tileData.y * tileSize + tileSize * 0.1,
      z: tileData.z * tileSize
    }

    let tile: Tile

    switch (tileData.type) {
      case TileType.START:
        tile = this.createStartTile(tileData, position, materials.start, tileSize)
        break
      case TileType.GOAL:
        tile = this.createGoalTile(tileData, position, materials.goal, tileSize)
        break
      case TileType.PRESSURE_PLATE:
        tile = this.createPressurePlate(tileData, position, tileSize)
        break
      case TileType.DIRECTION_SWITCH:
        tile = this.createDirectionSwitch(tileData, position, tileSize)
        break
      case TileType.COLOR_BARRIER:
        tile = this.createColorBarrier(tileData, position, tileSize)
        break
      case TileType.KEY:
        tile = this.createKey(tileData, position, tileSize)
        break
      case TileType.PUSHABLE:
        tile = this.createPushable(tileData, position, tileSize)
        break
      case TileType.PORTAL:
        tile = this.createPortal(tileData, position, tileSize)
        break
      case TileType.FRAGILE:
        tile = this.createFragileTile(tileData, position, tileSize)
        break
      case TileType.BRIDGE:
        tile = this.createBridge(tileData, position, tileSize)
        break
      case TileType.DOOR:
        tile = this.createDoor(tileData, position, tileSize)
        break
      default:
        tile = this.createFloorTile(tileData, position, materials.floor, tileSize)
    }

    return tile
  }

  private static createFloorTile(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    material: THREE.MeshStandardMaterial,
    tileSize: number
  ): Tile {
    const geometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const mesh = new THREE.Mesh(geometry, material.clone())
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true
    mesh.castShadow = false

    const edges = new THREE.EdgesGeometry(geometry)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4cc9f0, transparent: true, opacity: 0.3 })
    const lineSegments = new THREE.LineSegments(edges, lineMaterial)
    mesh.add(lineSegments)

    return {
      id: tileData.id || `tile_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      isPassable: () => true
    }
  }

  private static createStartTile(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    material: THREE.MeshStandardMaterial,
    tileSize: number
  ): Tile {
    const baseTile = this.createFloorTile(tileData, position, material, tileSize)
    
    const indicatorGeometry = new THREE.CylinderGeometry(tileSize * 0.2, tileSize * 0.2, tileSize * 0.05, 8)
    const indicatorMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x4cc9f0,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    })
    const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial)
    indicator.position.y = tileSize * 0.15
    indicator.castShadow = true
    baseTile.mesh.add(indicator)

    gsap.to(indicator.rotation, {
      y: Math.PI * 2,
      duration: 4,
      repeat: -1,
      ease: 'none'
    })

    return baseTile
  }

  private static createGoalTile(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    material: THREE.MeshStandardMaterial,
    tileSize: number
  ): Tile {
    const baseTile = this.createFloorTile(tileData, position, material, tileSize)
    
    const indicatorGeometry = new THREE.TorusGeometry(tileSize * 0.25, tileSize * 0.05, 8, 16)
    const indicatorMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf72585,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.9
    })
    const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial)
    indicator.position.y = tileSize * 0.2
    indicator.rotation.x = Math.PI / 2
    indicator.castShadow = true
    baseTile.mesh.add(indicator)

    gsap.to(indicator.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return baseTile
  }

  private static createPressurePlate(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const geometry = new THREE.BoxGeometry(tileSize * 0.8, tileSize * 0.1, tileSize * 0.8)
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0xffd700,
      emissiveIntensity: 0.2
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true
    mesh.castShadow = true

    const outlineGeometry = new THREE.BoxGeometry(tileSize * 0.82, tileSize * 0.12, tileSize * 0.82)
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    })
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial)
    mesh.add(outline)

    return {
      id: tileData.id || `plate_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      getLinkedTiles: () => tileData.linkedTo || [],
      activate: function() {
        if (this.activated) return
        this.activated = true
        
        const plateMaterial = (this.mesh as THREE.Mesh).material as THREE.MeshStandardMaterial
        plateMaterial.emissiveIntensity = 0.8
        
        gsap.to(this.mesh.position, {
          y: this.position.y - 0.05,
          duration: 0.2,
          ease: 'power2.out'
        })
      },
      deactivate: function() {
        if (!this.activated) return
        this.activated = false
        
        const plateMaterial = (this.mesh as THREE.Mesh).material as THREE.MeshStandardMaterial
        plateMaterial.emissiveIntensity = 0.2
        
        gsap.to(this.mesh.position, {
          y: this.position.y,
          duration: 0.2,
          ease: 'power2.out'
        })
      },
      isPassable: () => true
    }
  }

  private static createDirectionSwitch(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const baseGeometry = new THREE.CylinderGeometry(tileSize * 0.35, tileSize * 0.35, tileSize * 0.15, 8)
    const material = new THREE.MeshStandardMaterial({
      color: 0x9b59b6,
      roughness: 0.4,
      metalness: 0.6,
      emissive: 0x9b59b6,
      emissiveIntensity: 0.3
    })
    const mesh = new THREE.Mesh(baseGeometry, material)
    mesh.position.set(position.x, position.y, position.z)
    mesh.castShadow = true
    mesh.receiveShadow = true

    const arrowGeometry = new THREE.ConeGeometry(tileSize * 0.1, tileSize * 0.15, 4)
    const arrowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x9b59b6,
      emissiveIntensity: 0.5
    })
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial)
    arrow.position.y = tileSize * 0.15
    arrow.rotation.z = Math.PI / 2
    mesh.add(arrow)

    return {
      id: tileData.id || `switch_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      getLinkedTiles: () => tileData.linkedTo || [],
      activate: function() {
        this.activated = true
        gsap.to(this.mesh.rotation, {
          y: this.mesh.rotation.y + Math.PI / 2,
          duration: 0.3,
          ease: 'power2.out'
        })
      },
      isPassable: () => true
    }
  }

  private static createColorBarrier(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const baseGeometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.8,
      metalness: 0.2,
      transparent: true,
      opacity: 0.95
    })
    const mesh = new THREE.Mesh(baseGeometry, baseMaterial)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true

    const barrierColor = tileData.color || '#ff0000'
    const barrierGeometry = new THREE.BoxGeometry(tileSize * 0.85, tileSize * 1.5, tileSize * 0.1)
    const barrierMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(barrierColor),
      transparent: true,
      opacity: 0.6,
      transmission: 0.5,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      emissive: new THREE.Color(barrierColor),
      emissiveIntensity: 0.3
    })
    const barrier = new THREE.Mesh(barrierGeometry, barrierMaterial)
    barrier.position.y = tileSize * 0.85
    barrier.castShadow = true
    mesh.add(barrier)

    gsap.to(barrierMaterial, {
      emissiveIntensity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return {
      id: tileData.id || `barrier_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: true,
      broken: false,
      collected: false,
      getColor: () => barrierColor,
      deactivate: function() {
        this.activated = false
        gsap.to(barrier.scale, {
          y: 0,
          duration: 0.5,
          ease: 'power2.in'
        })
      },
      isPassable: function() {
        return !this.activated
      }
    }
  }

  private static createKey(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const baseGeometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.8,
      metalness: 0.2,
      transparent: true,
      opacity: 0.95
    })
    const mesh = new THREE.Mesh(baseGeometry, baseMaterial)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true

    const keyGroup = new THREE.Group()
    
    const keyRingGeometry = new THREE.TorusGeometry(tileSize * 0.12, tileSize * 0.03, 8, 16)
    const keyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0xffd700,
      emissiveIntensity: 0.4
    })
    const keyRing = new THREE.Mesh(keyRingGeometry, keyMaterial)
    keyRing.rotation.x = Math.PI / 2
    keyGroup.add(keyRing)

    const keyStemGeometry = new THREE.BoxGeometry(tileSize * 0.02, tileSize * 0.15, tileSize * 0.02)
    const keyStem = new THREE.Mesh(keyStemGeometry, keyMaterial)
    keyStem.position.y = -tileSize * 0.075
    keyGroup.add(keyStem)

    keyGroup.position.y = tileSize * 0.5
    mesh.add(keyGroup)

    gsap.to(keyGroup.rotation, {
      y: Math.PI * 2,
      duration: 3,
      repeat: -1,
      ease: 'none'
    })

    gsap.to(keyGroup.position, {
      y: tileSize * 0.6,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return {
      id: tileData.id || `key_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      collect: function(): Promise<void> {
        return new Promise((resolve) => {
          if (this.collected) {
            resolve()
            return
          }
          this.collected = true
          
          gsap.to(keyGroup.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5,
            duration: 0.2,
            ease: 'power2.out'
          })

          gsap.to(keyGroup.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.3,
            delay: 0.2,
            ease: 'power2.in',
            onComplete: resolve
          })
        })
      },
      isPassable: () => true
    }
  }

  private static createPushable(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const baseGeometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.8,
      metalness: 0.2
    })
    const mesh = new THREE.Mesh(baseGeometry, baseMaterial)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true

    const blockGeometry = new THREE.BoxGeometry(tileSize * 0.8, tileSize * 0.8, tileSize * 0.8)
    const blockMaterial = new THREE.MeshStandardMaterial({
      color: 0x7f8c8d,
      roughness: 0.7,
      metalness: 0.3
    })
    const block = new THREE.Mesh(blockGeometry, blockMaterial)
    block.position.y = tileSize * 0.5
    block.castShadow = true
    block.receiveShadow = true
    mesh.add(block)

    const patternGeometry = new THREE.BoxGeometry(tileSize * 0.6, tileSize * 0.02, tileSize * 0.6)
    const patternMaterial = new THREE.MeshStandardMaterial({
      color: 0x95a5a6,
      roughness: 0.5,
      metalness: 0.5
    })
    const pattern = new THREE.Mesh(patternGeometry, patternMaterial)
    pattern.position.y = tileSize * 0.8
    block.add(pattern)

    return {
      id: tileData.id || `pushable_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      isPassable: () => false
    }
  }

  private static createPortal(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const portalColor = tileData.color || '#4cc9f0'
    
    const baseGeometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.8,
      metalness: 0.2
    })
    const mesh = new THREE.Mesh(baseGeometry, baseMaterial)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true

    const portalGroup = new THREE.Group()
    
    const portalRingGeometry = new THREE.TorusGeometry(tileSize * 0.35, tileSize * 0.05, 8, 24)
    const portalRingMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(portalColor),
      roughness: 0.3,
      metalness: 0.8,
      emissive: new THREE.Color(portalColor),
      emissiveIntensity: 0.5
    })
    const portalRing = new THREE.Mesh(portalRingGeometry, portalRingMaterial)
    portalRing.rotation.x = Math.PI / 2
    portalRing.position.y = tileSize * 0.15
    portalGroup.add(portalRing)

    const portalInnerGeometry = new THREE.CircleGeometry(tileSize * 0.3, 24)
    const portalInnerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(portalColor),
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    })
    const portalInner = new THREE.Mesh(portalInnerGeometry, portalInnerMaterial)
    portalInner.rotation.x = Math.PI / 2
    portalInner.position.y = tileSize * 0.15
    portalGroup.add(portalInner)

    mesh.add(portalGroup)

    gsap.to(portalRing.rotation, {
      z: Math.PI * 2,
      duration: 4,
      repeat: -1,
      ease: 'none'
    })

    gsap.to(portalInner.scale, {
      x: 0.8,
      y: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return {
      id: tileData.id || `portal_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: true,
      broken: false,
      collected: false,
      getPortalPair: () => tileData.portalPair || '',
      getColor: () => portalColor,
      isPassable: () => true
    }
  }

  private static createFragileTile(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const geometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const material = new THREE.MeshStandardMaterial({
      color: 0xe74c3c,
      roughness: 0.6,
      metalness: 0.2,
      transparent: true,
      opacity: 0.9,
      emissive: 0xe74c3c,
      emissiveIntensity: 0.1
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true
    mesh.castShadow = true

    const crackGeometry = new THREE.PlaneGeometry(tileSize * 0.8, tileSize * 0.8)
    const crackMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    })
    const crack = new THREE.Mesh(crackGeometry, crackMaterial)
    crack.rotation.x = -Math.PI / 2
    crack.position.y = tileSize * 0.11
    mesh.add(crack)

    gsap.to(material, {
      emissiveIntensity: 0.3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return {
      id: tileData.id || `fragile_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: false,
      broken: false,
      collected: false,
      break: function(): Promise<void> {
        return new Promise((resolve) => {
          if (this.broken) {
            resolve()
            return
          }
          this.broken = true
          
          gsap.to(mesh.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: resolve
          })
        })
      },
      isPassable: function() {
        return !this.broken
      }
    }
  }

  private static createBridge(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const geometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.15, tileSize * 0.9)
    const material = new THREE.MeshStandardMaterial({
      color: 0x2ecc71,
      roughness: 0.5,
      metalness: 0.3,
      emissive: 0x2ecc71,
      emissiveIntensity: 0.2
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true
    mesh.visible = tileData.activated || false

    const outlineGeometry = new THREE.BoxGeometry(tileSize * 0.92, tileSize * 0.17, tileSize * 0.92)
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0x2ecc71,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial)
    mesh.add(outline)

    return {
      id: tileData.id || `bridge_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: tileData.activated || false,
      broken: false,
      collected: false,
      activate: function() {
        if (this.activated) return
        this.activated = true
        this.mesh.visible = true
        
        const originalScale = this.mesh.scale.clone()
        this.mesh.scale.set(0, 0, 0)
        
        gsap.to(this.mesh.scale, {
          x: originalScale.x,
          y: originalScale.y,
          z: originalScale.z,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        })
      },
      deactivate: function() {
        if (!this.activated) return
        this.activated = false
        
        gsap.to(this.mesh.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            this.mesh.visible = false
          }
        })
      },
      isPassable: function() {
        return this.activated
      }
    }
  }

  private static createDoor(
    tileData: LevelTile,
    position: { x: number; y: number; z: number },
    tileSize: number
  ): Tile {
    const baseGeometry = new THREE.BoxGeometry(tileSize * 0.9, tileSize * 0.2, tileSize * 0.9)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.8,
      metalness: 0.2
    })
    const mesh = new THREE.Mesh(baseGeometry, baseMaterial)
    mesh.position.set(position.x, position.y, position.z)
    mesh.receiveShadow = true

    const doorGeometry = new THREE.BoxGeometry(tileSize * 0.85, tileSize * 1.8, tileSize * 0.2)
    const doorMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.7,
      metalness: 0.2
    })
    const door = new THREE.Mesh(doorGeometry, doorMaterial)
    door.position.y = tileSize * 0.9
    door.castShadow = true
    mesh.add(door)

    const handleGeometry = new THREE.CylinderGeometry(tileSize * 0.03, tileSize * 0.03, tileSize * 0.08, 8)
    const handleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.3,
      metalness: 0.8
    })
    const handle = new THREE.Mesh(handleGeometry, handleMaterial)
    handle.rotation.z = Math.PI / 2
    handle.position.set(tileSize * 0.25, tileSize * 0.9, tileSize * 0.11)
    door.add(handle)

    const lockGeometry = new THREE.BoxGeometry(tileSize * 0.15, tileSize * 0.1, tileSize * 0.1)
    const lockMaterial = new THREE.MeshStandardMaterial({
      color: 0xe74c3c,
      emissive: 0xe74c3c,
      emissiveIntensity: 0.3,
      roughness: 0.5,
      metalness: 0.5
    })
    const lock = new THREE.Mesh(lockGeometry, lockMaterial)
    lock.position.set(0, tileSize * 0.2, tileSize * 0.11)
    door.add(lock)

    return {
      id: tileData.id || `door_${tileData.x}_${tileData.y}_${tileData.z}`,
      type: tileData.type,
      mesh,
      position,
      data: tileData,
      activated: tileData.activated || false,
      broken: false,
      collected: false,
      activate: function() {
        if (this.activated) return
        this.activated = true
        
        const lockMaterial = lock.material as THREE.MeshStandardMaterial
        lockMaterial.color.setHex(0x2ecc71)
        lockMaterial.emissive.setHex(0x2ecc71)
        
        gsap.to(door.rotation, {
          y: -Math.PI * 0.9,
          duration: 0.8,
          ease: 'power2.out'
        })
      },
      isPassable: function() {
        return this.activated
      }
    }
  }
}
