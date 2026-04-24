<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  keysCollected: number
  totalKeys: number
  currentLevel: number
  isPaused: boolean
}>()

const emit = defineEmits<{
  (e: 'pause'): void
  (e: 'resume'): void
  (e: 'restart'): void
  (e: 'menu'): void
}>()

const showControls = ref(false)

const keysPercentage = computed(() => {
  if (props.totalKeys === 0) return 100
  return (props.keysCollected / props.totalKeys) * 100
})

const keysDisplay = computed(() => {
  return `${props.keysCollected} / ${props.totalKeys}`
})
</script>

<template>
  <div class="game-hud">
    <div class="top-bar">
      <div class="level-info">
        <span class="level-label">关卡</span>
        <span class="level-number">{{ currentLevel }}</span>
      </div>
      
      <div class="keys-info" v-if="totalKeys > 0">
        <div class="keys-icon">🔑</div>
        <div class="keys-text">
          <div class="keys-count">{{ keysDisplay }}</div>
          <div class="keys-bar">
            <div class="keys-bar-fill" :style="{ width: keysPercentage + '%' }"></div>
          </div>
        </div>
      </div>
      
      <div class="top-buttons">
        <button class="hud-button" @click="showControls = !showControls" title="操作说明">
          📖
        </button>
        <button class="hud-button" @click="$emit('restart')" title="重新开始">
          🔄
        </button>
        <button class="hud-button" @click="$emit('pause')" v-if="!isPaused" title="暂停">
          ⏸️
        </button>
        <button class="hud-button" @click="$emit('resume')" v-else title="继续">
          ▶️
        </button>
      </div>
    </div>
    
    <div class="controls-hint" v-if="showControls">
      <div class="hint-content">
        <h4>操作说明</h4>
        <div class="hint-grid">
          <div class="hint-item">
            <span class="hint-key">W / ↑</span>
            <span class="hint-text">向北滚动</span>
          </div>
          <div class="hint-item">
            <span class="hint-key">S / ↓</span>
            <span class="hint-text">向南滚动</span>
          </div>
          <div class="hint-item">
            <span class="hint-key">A / ←</span>
            <span class="hint-text">向西滚动</span>
          </div>
          <div class="hint-item">
            <span class="hint-key">D / →</span>
            <span class="hint-text">向东滚动</span>
          </div>
          <div class="hint-item">
            <span class="hint-key">R</span>
            <span class="hint-text">重新开始</span>
          </div>
          <div class="hint-item">
            <span class="hint-key">ESC</span>
            <span class="hint-text">暂停/继续</span>
          </div>
        </div>
        <button class="close-hint" @click="showControls = false">✕</button>
      </div>
    </div>
    
    <div class="pause-menu" v-if="isPaused">
      <div class="pause-content">
        <h2>游戏暂停</h2>
        <div class="pause-buttons">
          <button class="primary-button" @click="$emit('resume')">
            ▶️ 继续游戏
          </button>
          <button class="secondary-button" @click="$emit('restart')">
            🔄 重新开始
          </button>
          <button class="secondary-button" @click="$emit('menu')">
            🏠 返回菜单
          </button>
        </div>
      </div>
    </div>
    
    <div class="bottom-hint">
      <span class="hint-text">使用 WASD 或 方向键 控制立方体滚动</span>
    </div>
  </div>
</template>

<style scoped>
.game-hud {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
}

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(10, 10, 26, 0.9) 0%, rgba(10, 10, 26, 0) 100%);
  pointer-events: auto;
}

.level-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.level-label {
  color: #a0a0c0;
  font-size: 0.9em;
}

.level-number {
  font-size: 1.8em;
  font-weight: bold;
  color: #4cc9f0;
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.5);
}

.keys-info {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(30, 30, 60, 0.8);
  padding: 8px 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.keys-icon {
  font-size: 1.5em;
}

.keys-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.keys-count {
  color: #ffd700;
  font-weight: bold;
  font-size: 0.9em;
}

.keys-bar {
  width: 100px;
  height: 4px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.keys-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #ffaa00);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.top-buttons {
  display: flex;
  gap: 10px;
}

.hud-button {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(76, 201, 240, 0.5);
  background: rgba(30, 30, 60, 0.8);
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hud-button:hover {
  border-color: #4cc9f0;
  background: rgba(76, 201, 240, 0.2);
  transform: scale(1.05);
}

.controls-hint {
  position: absolute;
  top: 80px;
  right: 20px;
  pointer-events: auto;
}

.hint-content {
  background: rgba(20, 20, 40, 0.95);
  border: 2px solid rgba(76, 201, 240, 0.5);
  border-radius: 15px;
  padding: 20px;
  min-width: 300px;
  position: relative;
}

.hint-content h4 {
  color: #4cc9f0;
  margin: 0 0 15px 0;
  font-size: 1.1em;
}

.hint-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.hint-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hint-key {
  background: rgba(76, 201, 240, 0.2);
  border: 1px solid rgba(76, 201, 240, 0.5);
  border-radius: 5px;
  padding: 5px 10px;
  color: #4cc9f0;
  font-family: monospace;
  font-size: 0.85em;
  text-align: center;
}

.hint-text {
  color: #a0a0c0;
  font-size: 0.8em;
  text-align: center;
}

.close-hint {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: none;
  background: rgba(255, 100, 100, 0.3);
  color: #ff6b6b;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-hint:hover {
  background: rgba(255, 100, 100, 0.5);
}

.pause-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.pause-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #4cc9f0;
  box-shadow: 0 0 50px rgba(76, 201, 240, 0.3);
}

.pause-content h2 {
  color: #4cc9f0;
  font-size: 2em;
  margin: 0 0 30px 0;
  text-shadow: 0 0 10px #4cc9f0;
}

.pause-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.primary-button,
.secondary-button {
  padding: 15px 40px;
  font-size: 1.1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary-button {
  background: linear-gradient(135deg, #4361ee, #4cc9f0);
  color: white;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(76, 201, 240, 0.5);
}

.secondary-button {
  background: rgba(30, 30, 60, 0.8);
  color: #a0a0c0;
  border: 2px solid rgba(76, 201, 240, 0.3);
}

.secondary-button:hover {
  border-color: #4cc9f0;
  color: #4cc9f0;
}

.bottom-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: auto;
}

.hint-text {
  color: rgba(160, 160, 192, 0.7);
  font-size: 0.85em;
  background: rgba(20, 20, 40, 0.8);
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid rgba(76, 201, 240, 0.2);
}

@media (max-width: 768px) {
  .top-bar {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .keys-info {
    order: 3;
    width: 100%;
    justify-content: center;
  }
  
  .controls-hint {
    right: 10px;
    left: 10px;
  }
  
  .hint-content {
    min-width: auto;
  }
}
</style>
