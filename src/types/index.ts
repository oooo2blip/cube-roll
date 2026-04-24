export enum TileType {
  EMPTY = 'empty',
  FLOOR = 'floor',
  START = 'start',
  GOAL = 'goal',
  PRESSURE_PLATE = 'pressure_plate',
  DIRECTION_SWITCH = 'direction_switch',
  COLOR_BARRIER = 'color_barrier',
  KEY = 'key',
  PUSHABLE = 'pushable',
  PORTAL = 'portal',
  FRAGILE = 'fragile',
  BRIDGE = 'bridge',
  DOOR = 'door'
}

export enum Direction {
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west',
  UP = 'up',
  DOWN = 'down'
}

export enum CubeFace {
  FRONT = 'front',
  BACK = 'back',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom'
}

export interface LevelTile {
  type: TileType
  x: number
  y: number
  z: number
  id?: string
  linkedTo?: string[]
  color?: string
  direction?: Direction
  portalPair?: string
  targetFace?: CubeFace
  activated?: boolean
  fragile?: boolean
  broken?: boolean
}

export interface LevelData {
  name: string
  description: string
  width: number
  height: number
  depth: number
  tiles: LevelTile[]
  startPosition: { x: number; y: number; z: number }
  goalPosition: { x: number; y: number; z: number }
  keysRequired: number
}

export interface GameEvent {
  type: 'keysChanged' | 'levelComplete' | 'gameOver' | 'plateActivated' | 'switchActivated' | 'portalUsed'
  data?: any
}

export interface GameState {
  currentLevel: number
  keysCollected: number
  totalKeys: number
  isPaused: boolean
  isMoving: boolean
  cubePosition: { x: number; y: number; z: number }
  cubeFaceColors: Record<CubeFace, string>
  activePlates: string[]
  brokenTiles: string[]
}
