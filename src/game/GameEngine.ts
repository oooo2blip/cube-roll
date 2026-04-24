import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import gsap from 'gsap'
import Renderer from './Renderer'
import PhysicsEngine from './PhysicsEngine'
import Cube from './Cube'
import TileFactory, { Tile } from './TileFactory'
import LevelLoader from './LevelLoader'
import { LevelData, LevelTile, TileType, Direction, GameEvent, CubeFace } from '@/types'

interface EngineState {
  isRunning: boolean
  isPaused: boolean
  currentLevel: number
  keysCollected: number
  totalKeys: number
  cube: Cube | null
  tiles: Map<string, Tile>
  levelData: LevelData | null
  eventListeners: Map<string, Function[]>
  lastTime: number
  animationId: number | null
}

export default class GameEngine {
  private container: HTMLElement
  private renderer: Renderer
  private physicsEngine: PhysicsEngine
  private state: EngineState
  private tileSize: number = 1

  constructor() {
    this.container = this.createContainer()
    
    this.renderer = new Renderer(this.container)
    this.physicsEngine = new PhysicsEngine()
    
    this.state = {
      isRunning: false,
      isPaused: false,
      currentLevel: 1,
      keysCollected: 0,
      totalKeys: 0,
      cube: null,
      tiles: new Map(),
      levelData: null,
      eventListeners: new Map(),
      lastTime: 0,
      animationId: null
    }

    this.setupControls()
    this.createBackground()
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div')
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.position = 'absolute'
    container.style.top = '0'
    container.style.left = '0'
    container.style.pointerEvents = 'auto'
    
    document.body.appendChild(container)
    return container
  }

  private createBackground(): void {
    const particleCount = 1000
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200

      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.3 + 0.5, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(geometry, material)
    this.renderer.getScene().add(particles)
  }

  private setupControls(): void {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e))
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (!this.state.isRunning || this.state.isPaused) return
    if (!this.state.cube || this.state.cube.isMoving()) return

    let direction: Direction | null = null

    switch (e.key.toLowerCase()) {
      case 'w':
      case 'arrowup':
        direction = Direction.NORTH
        break
      case 's':
      case 'arrowdown':
        direction = Direction.SOUTH
        break
      case 'a':
      case 'arrowleft':
        direction = Direction.WEST
        break
      case 'd':
      case 'arrowright':
        direction = Direction.EAST
        break
      case 'escape':
        this.pause()
        return
      case 'r':
        this.resetLevel()
        return
    }

    if (direction) {
      e.preventDefault()
      this.tryMove(direction)
    }
  }

  private async tryMove(direction: Direction): Promise<void> {
    if (!this.state.cube || !this.state.levelData) return

    const currentPos = this.state.cube.getPosition()
    const currentGridPos = {
      x: Math.round(currentPos.x / this.tileSize),
      y: Math.round(currentPos.y / this.tileSize),
      z: Math.round(currentPos.z / this.tileSize)
    }

    const delta = {
      [Direction.NORTH]: { x: 0, y: 0, z: 1 },
      [Direction.SOUTH]: { x: 0, y: 0, z: -1 },
      [Direction.EAST]: { x: 1, y: 0, z: 0 },
      [Direction.WEST]: { x: -1, y: 0, z: 0 }
    }

    const d = delta[direction]
    const targetGridPos = {
      x: currentGridPos.x + d.x,
      y: currentGridPos.y,
      z: currentGridPos.z + d.z
    }

    const targetTile = this.getTileAt(targetGridPos.x, targetGridPos.y, targetGridPos.z)

    if (!targetTile) {
      await this.state.cube.move(direction, {
        x: targetGridPos.x * this.tileSize,
        y: targetGridPos.y * this.tileSize,
        z: targetGridPos.z * this.tileSize
      })
      
      await this.state.cube.playFallAnimation()
      this.emit('gameOver')
      return
    }

    if (!targetTile.isPassable || !targetTile.isPassable()) {
      return
    }

    const targetPosition = {
      x: targetGridPos.x * this.tileSize,
      y: targetGridPos.y * this.tileSize + this.tileSize / 2,
      z: targetGridPos.z * this.tileSize
    }

    await this.state.cube.move(direction, targetPosition)
    
    await this.processTileInteraction(targetTile, direction)
  }

  private async processTileInteraction(tile: Tile, direction: Direction): Promise<void> {
    if (!this.state.cube || !this.state.levelData) return

    switch (tile.type) {
      case TileType.GOAL:
        if (this.state.keysCollected >= this.state.levelData.keysRequired) {
          this.emit('levelComplete')
        }
        break

      case TileType.PRESSURE_PLATE:
        if (tile.activate) {
          tile.activate()
          this.emit('plateActivated', { tileId: tile.id })
          
          const linkedIds = tile.getLinkedTiles ? tile.getLinkedTiles() : []
          linkedIds.forEach((id) => {
            const linkedTile = this.state.tiles.get(id)
            if (linkedTile && linkedTile.activate) {
              linkedTile.activate()
            }
          })
        }
        break

      case TileType.KEY:
        if (!tile.collected && tile.collect) {
          await tile.collect()
          this.state.keysCollected++
          this.emit('keysChanged', this.state.keysCollected, this.state.totalKeys)
          
          if (this.state.keysCollected >= this.state.levelData.keysRequired) {
            this.state.tiles.forEach((t) => {
              if (t.type === TileType.DOOR && t.activate) {
                t.activate()
              }
            })
          }
        }
        break

      case TileType.PORTAL:
        const portalPair = tile.getPortalPair ? tile.getPortalPair() : ''
        const targetPortal = this.findTileById(portalPair)
        
        if (targetPortal) {
          await this.state.cube.applyTeleportEffect()
          
          const targetPos = {
            x: targetPortal.position.x,
            y: targetPortal.position.y + this.tileSize / 2,
            z: targetPortal.position.z
          }
          
          this.state.cube.teleport(targetPos)
          this.emit('portalUsed', { from: tile.id, to: portalPair })
          
          await this.state.cube.applyTeleportEffect()
        }
        break

      case TileType.FRAGILE:
        if (!tile.broken && tile.break) {
          setTimeout(async () => {
            await tile.break!()
          }, 500)
        }
        break
    }
  }

  private getTileAt(x: number, y: number, z: number): Tile | undefined {
    for (const tile of this.state.tiles.values()) {
      const tileX = Math.round(tile.position.x / this.tileSize)
      const tileY = Math.round(tile.position.y / this.tileSize)
      const tileZ = Math.round(tile.position.z / this.tileSize)
      
      if (tileX === x && tileY === y && tileZ === z) {
        return tile
      }
    }
    return undefined
  }

  private findTileById(id: string): Tile | undefined {
    return this.state.tiles.get(id)
  }

  loadLevel(levelNumber: number): boolean {
    const levelData = LevelLoader.loadLevel(levelNumber)
    if (!levelData) return false

    this.clearLevel()
    this.state.levelData = levelData
    this.state.currentLevel = levelNumber
    this.state.keysCollected = 0

    this.state.totalKeys = levelData.tiles.filter(t => t.type === TileType.KEY).length

    levelData.tiles.forEach((tileData) => {
      const tile = TileFactory.createTile(tileData, this.tileSize)
      this.state.tiles.set(tile.id, tile)
      this.renderer.addObject(tile.id, tile.mesh)
    })

    const startPos = {
      x: levelData.startPosition.x * this.tileSize,
      y: levelData.startPosition.y * this.tileSize + this.tileSize / 2,
      z: levelData.startPosition.z * this.tileSize
    }

    this.state.cube = new Cube(startPos, this.tileSize)
    this.renderer.addObject('player_cube', this.state.cube.getMesh())

    const center = this.calculateLevelCenter(levelData)
    this.renderer.setCameraPosition(
      center.x + 12,
      center.y + 15,
      center.z + 12,
      center
    )

    this.emit('keysChanged', this.state.keysCollected, this.state.totalKeys)

    return true
  }

  private calculateLevelCenter(levelData: LevelData): { x: number; y: number; z: number } {
    if (levelData.tiles.length === 0) {
      return { x: 0, y: 0, z: 0 }
    }

    let minX = Infinity, maxX = -Infinity
    let minY = Infinity, maxY = -Infinity
    let minZ = Infinity, maxZ = -Infinity

    levelData.tiles.forEach((tile) => {
      minX = Math.min(minX, tile.x)
      maxX = Math.max(maxX, tile.x)
      minY = Math.min(minY, tile.y)
      maxY = Math.max(maxY, tile.y)
      minZ = Math.min(minZ, tile.z)
      maxZ = Math.max(maxZ, tile.z)
    })

    return {
      x: ((minX + maxX) / 2) * this.tileSize,
      y: ((minY + maxY) / 2) * this.tileSize,
      z: ((minZ + maxZ) / 2) * this.tileSize
    }
  }

  private clearLevel(): void {
    this.state.tiles.forEach((tile) => {
      this.renderer.removeObject(tile.id)
    })
    this.state.tiles.clear()

    if (this.state.cube) {
      this.renderer.removeObject('player_cube')
      this.state.cube = null
    }

    this.physicsEngine.reset()
  }

  start(): void {
    if (this.state.isRunning) return

    this.state.isRunning = true
    this.state.isPaused = false
    this.state.lastTime = performance.now()
    this.gameLoop()
  }

  private gameLoop(): void {
    if (!this.state.isRunning) return

    const currentTime = performance.now()
    const deltaTime = Math.min((currentTime - this.state.lastTime) / 1000, 0.1)
    this.state.lastTime = currentTime

    if (!this.state.isPaused) {
      this.physicsEngine.update(deltaTime)
      this.syncPhysicsToRender()
    }

    this.renderer.render()

    this.state.animationId = requestAnimationFrame(() => this.gameLoop())
  }

  private syncPhysicsToRender(): void {
    if (this.state.cube) {
      const body = this.state.cube.getBody()
      const mesh = this.state.cube.getMesh()
      
      mesh.position.copy(body.position as any)
      mesh.quaternion.copy(body.quaternion as any)
    }
  }

  pause(): void {
    this.state.isPaused = true
  }

  resume(): void {
    this.state.isPaused = false
    this.state.lastTime = performance.now()
  }

  resetLevel(): void {
    if (!this.state.levelData) return
    this.loadLevel(this.state.currentLevel)
  }

  on(event: string, callback: Function): void {
    if (!this.state.eventListeners.has(event)) {
      this.state.eventListeners.set(event, [])
    }
    this.state.eventListeners.get(event)!.push(callback)
  }

  private emit(event: string, ...args: any[]): void {
    const listeners = this.state.eventListeners.get(event)
    if (listeners) {
      listeners.forEach((callback) => callback(...args))
    }
  }

  getState(): {
    currentLevel: number
    keysCollected: number
    totalKeys: number
    isPaused: boolean
  } {
    return {
      currentLevel: this.state.currentLevel,
      keysCollected: this.state.keysCollected,
      totalKeys: this.state.totalKeys,
      isPaused: this.state.isPaused
    }
  }

  dispose(): void {
    this.state.isRunning = false
    
    if (this.state.animationId !== null) {
      cancelAnimationFrame(this.state.animationId)
    }

    this.clearLevel()
    this.physicsEngine.dispose()
    this.renderer.dispose()
    
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container)
    }
  }
}
