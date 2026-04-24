<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GameEngine from './game/GameEngine'
import MainMenu from './components/MainMenu.vue'
import GameHUD from './components/GameHUD.vue'

const gameState = ref<'menu' | 'playing' | 'paused' | 'win' | 'lose'>('menu')
let gameEngine: GameEngine | null = null

const keysCollected = ref(0)
const totalKeys = ref(0)
const currentLevel = ref(1)

function startGame(level: number = 1) {
  gameState.value = 'playing'
  currentLevel.value = level
  
  if (gameEngine) {
    gameEngine.dispose()
  }
  
  gameEngine = new GameEngine()
  gameEngine.loadLevel(level)
  
  gameEngine.on('keysChanged', (collected: number, total: number) => {
    keysCollected.value = collected
    totalKeys.value = total
  })
  
  gameEngine.on('levelComplete', () => {
    gameState.value = 'win'
  })
  
  gameEngine.on('gameOver', () => {
    gameState.value = 'lose'
  })
  
  gameEngine.start()
}

function pauseGame() {
  gameState.value = 'paused'
  gameEngine?.pause()
}

function resumeGame() {
  gameState.value = 'playing'
  gameEngine?.resume()
}

function returnToMenu() {
  gameState.value = 'menu'
  gameEngine?.dispose()
  gameEngine = null
}

function restartLevel() {
  startGame(currentLevel.value)
}

function nextLevel() {
  startGame(currentLevel.value + 1)
}

onMounted(() => {
  startGame(1)
})

onUnmounted(() => {
  gameEngine?.dispose()
})
</script>

<template>
  <div class="app-container">
    <MainMenu 
      v-if="gameState === 'menu'" 
      @start="startGame" 
    />
    
    <GameHUD 
      v-if="gameState === 'playing' || gameState === 'paused'"
      :keys-collected="keysCollected"
      :total-keys="totalKeys"
      :current-level="currentLevel"
      :is-paused="gameState === 'paused'"
      @pause="pauseGame"
      @resume="resumeGame"
      @restart="restartLevel"
      @menu="returnToMenu"
    />
    
    <div class="game-overlay" v-if="gameState === 'win'">
      <div class="overlay-content">
        <h2>关卡完成！</h2>
        <p>恭喜你通过了第 {{ currentLevel }} 关</p>
        <div class="overlay-buttons">
          <button @click="nextLevel">下一关</button>
          <button @click="restartLevel">重玩</button>
          <button @click="returnToMenu">返回菜单</button>
        </div>
      </div>
    </div>
    
    <div class="game-overlay" v-if="gameState === 'lose'">
      <div class="overlay-content">
        <h2>游戏结束</h2>
        <p>立方体掉落了！</p>
        <div class="overlay-buttons">
          <button @click="restartLevel">重新开始</button>
          <button @click="returnToMenu">返回菜单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
}

.game-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.overlay-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #4cc9f0;
  box-shadow: 0 0 30px rgba(76, 201, 240, 0.3);
}

.overlay-content h2 {
  color: #4cc9f0;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #4cc9f0;
}

.overlay-content p {
  color: #e0e0e0;
  font-size: 1.2em;
  margin-bottom: 30px;
}

.overlay-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.overlay-buttons button {
  padding: 12px 30px;
  font-size: 1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.overlay-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(76, 201, 240, 0.5);
}
</style>
