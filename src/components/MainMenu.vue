<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LevelLoader from '@/game/LevelLoader'

const emit = defineEmits<{
  (e: 'start', level: number): void
}>()

const levels = ref<Array<{ id: number; name: string; description: string }>>([])

onMounted(() => {
  const totalLevels = LevelLoader.getTotalLevels()
  for (let i = 1; i <= totalLevels; i++) {
    const info = LevelLoader.getLevelInfo(i)
    if (info) {
      levels.value.push({
        id: i,
        name: info.name,
        description: info.description
      })
    }
  }
})

function startLevel(level: number) {
  emit('start', level)
}
</script>

<template>
  <div class="main-menu">
    <div class="menu-content">
      <div class="title-container">
        <h1 class="game-title">CUBE ROLL</h1>
        <p class="game-subtitle">3D 滚动解谜游戏</p>
      </div>
      
      <div class="level-select">
        <h2>选择关卡</h2>
        <div class="level-grid">
          <div 
            v-for="level in levels" 
            :key="level.id"
            class="level-card"
            @click="startLevel(level.id)"
          >
            <div class="level-number">{{ level.id }}</div>
            <div class="level-info">
              <h3>{{ level.name }}</h3>
              <p>{{ level.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="controls-info">
        <h3>操作说明</h3>
        <div class="controls-grid">
          <div class="control-item">
            <span class="key">W / ↑</span>
            <span class="label">向北滚动</span>
          </div>
          <div class="control-item">
            <span class="key">S / ↓</span>
            <span class="label">向南滚动</span>
          </div>
          <div class="control-item">
            <span class="key">A / ←</span>
            <span class="label">向西滚动</span>
          </div>
          <div class="control-item">
            <span class="key">D / →</span>
            <span class="label">向东滚动</span>
          </div>
          <div class="control-item">
            <span class="key">R</span>
            <span class="label">重新开始</span>
          </div>
          <div class="control-item">
            <span class="key">ESC</span>
            <span class="label">暂停</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}

.menu-content {
  max-width: 900px;
  width: 100%;
}

.title-container {
  text-align: center;
  margin-bottom: 40px;
}

.game-title {
  font-size: 4em;
  font-weight: bold;
  background: linear-gradient(90deg, #4cc9f0, #f72585, #4361ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(76, 201, 240, 0.5);
  margin: 0;
  letter-spacing: 10px;
}

.game-subtitle {
  color: #a0a0c0;
  font-size: 1.2em;
  margin-top: 10px;
}

.level-select {
  margin-bottom: 40px;
}

.level-select h2 {
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.level-card {
  background: rgba(30, 30, 60, 0.8);
  border: 2px solid rgba(76, 201, 240, 0.3);
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.level-card:hover {
  border-color: #4cc9f0;
  background: rgba(76, 201, 240, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(76, 201, 240, 0.3);
}

.level-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4361ee, #4cc9f0);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
}

.level-info {
  flex: 1;
}

.level-info h3 {
  color: #ffffff;
  margin: 0 0 5px 0;
  font-size: 1em;
}

.level-info p {
  color: #a0a0c0;
  margin: 0;
  font-size: 0.85em;
  line-height: 1.4;
}

.controls-info {
  background: rgba(30, 30, 60, 0.6);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(76, 201, 240, 0.2);
}

.controls-info h3 {
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2em;
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
}

.control-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.key {
  background: linear-gradient(135deg, #2a2a4a, #1a1a3a);
  border: 2px solid #4cc9f0;
  border-radius: 8px;
  padding: 8px 15px;
  color: #4cc9f0;
  font-family: monospace;
  font-size: 0.9em;
  font-weight: bold;
}

.label {
  color: #a0a0c0;
  font-size: 0.85em;
}

@media (max-width: 768px) {
  .game-title {
    font-size: 2.5em;
    letter-spacing: 5px;
  }
  
  .level-grid {
    grid-template-columns: 1fr;
  }
  
  .controls-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
