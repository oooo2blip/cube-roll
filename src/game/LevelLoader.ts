import { LevelData, LevelTile, TileType, Direction, CubeFace } from '@/types'

const level1: LevelData = {
  name: "第1关：初识滚动",
  description: "学习基本的滚动控制，到达终点",
  width: 5,
  height: 1,
  depth: 5,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 4, y: 1, z: 4 },
  keysRequired: 0,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 1, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 1 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 3, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 3 },
    { type: TileType.GOAL, x: 4, y: 0, z: 4 }
  ]
}

const level2: LevelData = {
  name: "第2关：压力板与桥梁",
  description: "踩下压力板激活桥梁",
  width: 7,
  height: 1,
  depth: 7,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 6, y: 1, z: 6 },
  keysRequired: 0,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 1, y: 0, z: 0 },
    { type: TileType.PRESSURE_PLATE, x: 2, y: 0, z: 0, id: 'plate1', linkedTo: ['bridge1'] },
    { type: TileType.FLOOR, x: 2, y: 0, z: 1 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 2 },
    { type: TileType.BRIDGE, x: 3, y: 0, z: 2, id: 'bridge1', activated: false },
    { type: TileType.FLOOR, x: 4, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 3 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 4 },
    { type: TileType.FLOOR, x: 5, y: 0, z: 4 },
    { type: TileType.FLOOR, x: 5, y: 0, z: 5 },
    { type: TileType.GOAL, x: 6, y: 0, z: 6 }
  ]
}

const level3: LevelData = {
  name: "第3关：收集钥匙",
  description: "收集钥匙打开屏障",
  width: 8,
  height: 1,
  depth: 8,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 7, y: 1, z: 7 },
  keysRequired: 2,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 1, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 0 },
    { type: TileType.KEY, x: 2, y: 0, z: 1, id: 'key1' },
    { type: TileType.FLOOR, x: 2, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 3, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 2 },
    { type: TileType.KEY, x: 4, y: 0, z: 3, id: 'key2' },
    { type: TileType.FLOOR, x: 4, y: 0, z: 4 },
    { type: TileType.FLOOR, x: 5, y: 0, z: 4 },
    { type: TileType.DOOR, x: 6, y: 0, z: 4, id: 'door1', activated: false },
    { type: TileType.FLOOR, x: 6, y: 0, z: 5 },
    { type: TileType.FLOOR, x: 6, y: 0, z: 6 },
    { type: TileType.GOAL, x: 7, y: 0, z: 7 }
  ]
}

const level4: LevelData = {
  name: "第4关：易碎方块",
  description: "小心！这些方块只能踩一次",
  width: 7,
  height: 1,
  depth: 7,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 6, y: 1, z: 6 },
  keysRequired: 0,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FRAGILE, x: 1, y: 0, z: 0, id: 'fragile1', fragile: true, broken: false },
    { type: TileType.FRAGILE, x: 2, y: 0, z: 0, id: 'fragile2', fragile: true, broken: false },
    { type: TileType.FLOOR, x: 2, y: 0, z: 1 },
    { type: TileType.FRAGILE, x: 2, y: 0, z: 2, id: 'fragile3', fragile: true, broken: false },
    { type: TileType.FRAGILE, x: 3, y: 0, z: 2, id: 'fragile4', fragile: true, broken: false },
    { type: TileType.FLOOR, x: 4, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 3 },
    { type: TileType.FRAGILE, x: 4, y: 0, z: 4, id: 'fragile5', fragile: true, broken: false },
    { type: TileType.FRAGILE, x: 5, y: 0, z: 4, id: 'fragile6', fragile: true, broken: false },
    { type: TileType.FRAGILE, x: 5, y: 0, z: 5, id: 'fragile7', fragile: true, broken: false },
    { type: TileType.FLOOR, x: 5, y: 0, z: 6 },
    { type: TileType.GOAL, x: 6, y: 0, z: 6 }
  ]
}

const level5: LevelData = {
  name: "第5关：传送门",
  description: "找到正确的传送门到达终点",
  width: 9,
  height: 1,
  depth: 9,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 8, y: 1, z: 8 },
  keysRequired: 0,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 1, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 2, y: 0, z: 0 },
    { type: TileType.PORTAL, x: 2, y: 0, z: 1, id: 'portal1a', portalPair: 'portal1b', color: '#4cc9f0' },
    { type: TileType.FLOOR, x: 2, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 3, y: 0, z: 2 },
    { type: TileType.PORTAL, x: 4, y: 0, z: 2, id: 'portal1b', portalPair: 'portal1a', color: '#4cc9f0' },
    { type: TileType.FLOOR, x: 5, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 5, y: 0, z: 3 },
    { type: TileType.PORTAL, x: 5, y: 0, z: 4, id: 'portal2a', portalPair: 'portal2b', color: '#f72585' },
    { type: TileType.FLOOR, x: 5, y: 0, z: 5 },
    { type: TileType.PORTAL, x: 7, y: 0, z: 7, id: 'portal2b', portalPair: 'portal2a', color: '#f72585' },
    { type: TileType.FLOOR, x: 7, y: 0, z: 8 },
    { type: TileType.GOAL, x: 8, y: 0, z: 8 }
  ]
}

const level6: LevelData = {
  name: "第6关：综合挑战",
  description: "运用所有技巧通关",
  width: 10,
  height: 1,
  depth: 10,
  startPosition: { x: 0, y: 1, z: 0 },
  goalPosition: { x: 9, y: 1, z: 9 },
  keysRequired: 1,
  tiles: [
    { type: TileType.START, x: 0, y: 0, z: 0 },
    { type: TileType.FLOOR, x: 1, y: 0, z: 0 },
    { type: TileType.PRESSURE_PLATE, x: 2, y: 0, z: 0, id: 'plate1', linkedTo: ['bridge1'] },
    { type: TileType.FLOOR, x: 2, y: 0, z: 1 },
    { type: TileType.FRAGILE, x: 2, y: 0, z: 2, id: 'fragile1', fragile: true, broken: false },
    { type: TileType.BRIDGE, x: 3, y: 0, z: 2, id: 'bridge1', activated: false },
    { type: TileType.FLOOR, x: 4, y: 0, z: 2 },
    { type: TileType.FLOOR, x: 4, y: 0, z: 3 },
    { type: TileType.KEY, x: 4, y: 0, z: 4, id: 'key1' },
    { type: TileType.FLOOR, x: 5, y: 0, z: 4 },
    { type: TileType.PORTAL, x: 6, y: 0, z: 4, id: 'portal1a', portalPair: 'portal1b', color: '#4cc9f0' },
    { type: TileType.PORTAL, x: 6, y: 0, z: 7, id: 'portal1b', portalPair: 'portal1a', color: '#4cc9f0' },
    { type: TileType.FLOOR, x: 7, y: 0, z: 7 },
    { type: TileType.DOOR, x: 8, y: 0, z: 7, id: 'door1', activated: false },
    { type: TileType.FLOOR, x: 8, y: 0, z: 8 },
    { type: TileType.GOAL, x: 9, y: 0, z: 9 }
  ]
}

const levels: Record<number, LevelData> = {
  1: level1,
  2: level2,
  3: level3,
  4: level4,
  5: level5,
  6: level6
}

export default class LevelLoader {
  static loadLevel(levelNumber: number): LevelData | null {
    const level = levels[levelNumber]
    if (!level) return null
    return JSON.parse(JSON.stringify(level))
  }

  static getTotalLevels(): number {
    return Object.keys(levels).length
  }

  static getLevelInfo(levelNumber: number): { name: string; description: string } | null {
    const level = levels[levelNumber]
    if (!level) return null
    return { name: level.name, description: level.description }
  }
}
