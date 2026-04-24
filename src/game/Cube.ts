import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import gsap from 'gsap'
import { CubeFace, Direction } from '@/types'

interface CubeState {
  position: { x: number; y: number; z: number }
  faceColors: Record<CubeFace, string>
  isMoving: boolean
}

const FACE_COLORS: Record<CubeFace, string> = {
  [CubeFace.TOP]: '#f72585',
  [CubeFace.BOTTOM]: '#4361ee',
  [CubeFace.FRONT]: '#4cc9f0',
  [CubeFace.BACK]: '#f8961e',
  [CubeFace.LEFT]: '#7209b7',
  [CubeFace.RIGHT]: '#f9c74f'
}

export default class Cube {
  private mesh: THREE.Mesh
  private body: CANNON.Body
  private size: number
  private state: CubeState
  private animationInProgress: boolean = false
  private eventListeners: Map<string, Function[]> = new Map()

  constructor(initialPosition: { x: number; y: number; z: number }, size: number = 1) {
    this.size = size
    this.state = {
      position: { ...initialPosition },
      faceColors: { ...FACE_COLORS },
      isMoving: false
    }

    this.mesh = this.createMesh()
    this.body = this.createBody(initialPosition)
  }

  private createMesh(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(this.size, this.size, this.size)
    
    const materials: THREE.MeshPhysicalMaterial[] = []
    
    Object.values(this.state.faceColors).forEach((color) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.85,
        transmission: 0.3,
        roughness: 0.1,
        metalness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        reflectivity: 0.9,
        ior: 1.5,
        side: THREE.FrontSide
      })
      materials.push(material)
    })

    const mesh = new THREE.Mesh(geometry, materials)
    mesh.castShadow = true
    mesh.receiveShadow = true
    
    const edges = new THREE.EdgesGeometry(geometry)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.3 
    })
    const lineSegments = new THREE.LineSegments(edges, lineMaterial)
    mesh.add(lineSegments)

    mesh.position.set(this.state.position.x, this.state.position.y, this.state.position.z)

    return mesh
  }

  private createBody(position: { x: number; y: number; z: number }): CANNON.Body {
    const shape = new CANNON.Box(new CANNON.Vec3(this.size / 2, this.size / 2, this.size / 2))
    const body = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape,
      linearDamping: 0.5,
      angularDamping: 0.5
    })
    return body
  }

  getMesh(): THREE.Mesh {
    return this.mesh
  }

  getBody(): CANNON.Body {
    return this.body
  }

  getPosition(): { x: number; y: number; z: number } {
    return { ...this.state.position }
  }

  isMoving(): boolean {
    return this.animationInProgress || this.state.isMoving
  }

  getFaceColor(face: CubeFace): string {
    return this.state.faceColors[face]
  }

  getCurrentBottomFace(): CubeFace {
    const euler = new THREE.Euler().setFromQuaternion(
      this.mesh.quaternion,
      'XYZ'
    )
    
    const up = new THREE.Vector3(0, 1, 0)
    up.applyQuaternion(this.mesh.quaternion)
    
    const tolerance = 0.8
    
    if (up.y > tolerance) return CubeFace.TOP
    if (up.y < -tolerance) return CubeFace.BOTTOM
    if (up.x > tolerance) return CubeFace.RIGHT
    if (up.x < -tolerance) return CubeFace.LEFT
    if (up.z > tolerance) return CubeFace.FRONT
    if (up.z < -tolerance) return CubeFace.BACK
    
    return CubeFace.BOTTOM
  }

  canMove(direction: Direction): boolean {
    return !this.animationInProgress
  }

  move(direction: Direction, targetPosition: { x: number; y: number; z: number }): Promise<void> {
    if (this.animationInProgress) {
      return Promise.reject('Animation already in progress')
    }

    this.animationInProgress = true
    this.state.isMoving = true

    const rotationAxis = new THREE.Vector3()
    const rotationAngle = Math.PI / 2

    switch (direction) {
      case Direction.NORTH:
        rotationAxis.set(1, 0, 0)
        break
      case Direction.SOUTH:
        rotationAxis.set(-1, 0, 0)
        break
      case Direction.EAST:
        rotationAxis.set(0, 0, -1)
        break
      case Direction.WEST:
        rotationAxis.set(0, 0, 1)
        break
    }

    const pivotOffset = {
      [Direction.NORTH]: { x: 0, y: -this.size / 2, z: this.size / 2 },
      [Direction.SOUTH]: { x: 0, y: -this.size / 2, z: -this.size / 2 },
      [Direction.EAST]: { x: this.size / 2, y: -this.size / 2, z: 0 },
      [Direction.WEST]: { x: -this.size / 2, y: -this.size / 2, z: 0 }
    }

    const offset = pivotOffset[direction]
    const startPosition = { ...this.state.position }

    return new Promise((resolve) => {
      gsap.to(this.mesh.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 0.3,
        ease: 'power2.inOut'
      })

      const pivot = new THREE.Vector3(
        startPosition.x + offset.x,
        startPosition.y + offset.y,
        startPosition.z + offset.z
      )

      const startQuaternion = this.mesh.quaternion.clone()
      const rotationQuaternion = new THREE.Quaternion().setFromAxisAngle(
        rotationAxis,
        rotationAngle
      )
      const targetQuaternion = rotationQuaternion.multiply(startQuaternion)

      gsap.to({}, {
        duration: 0.3,
        ease: 'power2.inOut',
        onUpdate: (progress: number) => {
          const interpolated = startQuaternion.clone().slerp(targetQuaternion, progress)
          this.mesh.quaternion.copy(interpolated)
        },
        onComplete: () => {
          this.mesh.quaternion.copy(targetQuaternion)
          this.state.position = { ...targetPosition }
          this.animationInProgress = false
          this.state.isMoving = false
          this.emit('moveComplete', { direction, position: targetPosition })
          resolve()
        }
      })
    })
  }

  teleport(position: { x: number; y: number; z: number }, rotation?: { x: number; y: number; z: number }): void {
    this.state.position = { ...position }
    this.mesh.position.set(position.x, position.y, position.z)
    
    if (rotation) {
      const euler = new THREE.Euler(
        rotation.x * Math.PI / 180,
        rotation.y * Math.PI / 180,
        rotation.z * Math.PI / 180
      )
      this.mesh.quaternion.setFromEuler(euler)
    }
    
    this.emit('teleported', { position, rotation })
  }

  applyTeleportEffect(): Promise<void> {
    return new Promise((resolve) => {
      const originalOpacity = this.mesh.material instanceof THREE.Material 
        ? this.mesh.material.opacity 
        : 0.85

      gsap.to(this.mesh.scale, {
        x: 0.1,
        y: 0.1,
        z: 0.1,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(this.mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: resolve
          })
        }
      })
    })
  }

  playFallAnimation(): Promise<void> {
    return new Promise((resolve) => {
      gsap.to(this.mesh.position, {
        y: this.mesh.position.y - 10,
        duration: 0.8,
        ease: 'power2.in'
      })
      
      gsap.to(this.mesh.rotation, {
        x: this.mesh.rotation.x + Math.PI * 2,
        z: this.mesh.rotation.z + Math.PI * 2,
        duration: 0.8,
        ease: 'power2.in',
        onComplete: resolve
      })
    })
  }

  on(event: string, callback: Function): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, [])
    }
    this.eventListeners.get(event)!.push(callback)
  }

  off(event: string, callback: Function): void {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      const index = listeners.indexOf(callback)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }

  private emit(event: string, data?: any): void {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      listeners.forEach((callback) => callback(data))
    }
  }

  reset(position: { x: number; y: number; z: number }): void {
    this.state.position = { ...position }
    this.state.isMoving = false
    this.animationInProgress = false
    this.mesh.position.set(position.x, position.y, position.z)
    this.mesh.rotation.set(0, 0, 0)
    this.mesh.scale.set(1, 1, 1)
  }
}
