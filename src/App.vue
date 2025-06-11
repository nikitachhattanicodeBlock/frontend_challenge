<template>
  <div class="app-container">
    <h1 class="app-title">📈 Interactive Curve Generator</h1>

    <div class="layout">
      <!-- Graph Section -->
      <div class="graph-panel">
        <CurveGraph :functionName="functionName" :scale="scale" />
      </div>

      <!-- Control Section -->
      <div class="controls-panel">
        <!-- Function Selector -->
        <section class="panel-section">
          <label class="section-label">Choose Function:</label>
          <div class="chip-container">
            <button
              v-for="option in options"
              :key="option.value"
              :class="['chip', { active: functionName === option.value }]"
              @click="functionName = option.value"
              :data-testid="`chip-${option.value}`"
            >
              {{ option.label }}
            </button>
          </div>
        </section>

        <!-- Code Preview -->
        <section class="panel-section">
          <label class="section-label">Code Preview:</label>
          <pre class="code-preview">{{ generatedCode }}</pre>
        </section>

        <!-- Scale Control -->
        <section class="panel-section">
          <label class="section-label">Adjust Scale: {{ scale }}</label>
          <input type="range" min="1" max="10" v-model="scale" class="slider" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CurveGraph from './components/CurveGraph.vue';

const scale = ref(1);
const functionName = ref<'sin' | 'cos' | 'log' | 'exp'>('sin');

const options = [
  { value: 'sin', label: 'Sine' },
  { value: 'cos', label: 'Cosine' },
  { value: 'log', label: 'Logarithm' },
  { value: 'exp', label: 'Exponential' }
];

const generatedCode = computed(() => {
  switch (functionName.value) {
    case 'sin': return 'y = Math.sin(x)';
    case 'cos': return 'y = Math.cos(x)';
    case 'log': return 'y = Math.log(x)';
    case 'exp': return 'y = Math.exp(x)';
  }
});
</script>

<style scoped>
.app-container {
  padding: 40px;
  background: linear-gradient(to bottom right, #f9fafe, #e6ecf5);
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.app-title {
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.graph-panel {
  width: 600px;
  height: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls-panel {
  width: 340px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.panel-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-label {
  font-weight: 600;
  color: #555;
}

.chip-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: #e0e7ff;
  color: #1e3a8a;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip:hover {
  background: #c7d2fe;
}

.chip.active {
  background: linear-gradient(to right, #3b82f6, #06b6d4);
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.code-preview {
  background: #f4f4f4;
  padding: 12px;
  border-radius: 10px;
  font-family: monospace;
  font-size: 0.95rem;
  color: #333;
}

.slider {
  width: 100%;
  accent-color: #3b82f6;
}
</style>
