<template>
  <div
    class="curve-container"
    :class="{ 'danger-bg': internalSpread < 20 }"
  >
    <h2 class="text-xl font-bold mb-2 text-center">Dynamic Curve</h2>
    <p class="text-gray-600 text-center mb-4">
      This curve changes based on the <strong>spread</strong> value ({{ internalSpread }}%)
    </p>

    <svg viewBox="0 0 868 617" class="curve-svg">
      <rect width="100%" height="100%" :fill="internalSpread < 20 ? '#fff1f2' : '#f6ffe9'" />
      <line x1="70" y1="550" x2="820" y2="550" stroke="#ccc" stroke-width="2" />
      <path
        :d="curvePath"
        fill="none"
        :stroke="internalSpread < 20 ? '#f87171' : '#4ade80'"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>

    <input
      type="range"
      min="0"
      max="100"
      v-model="internalSpread"
      class="slider"
    />

    <p v-if="internalSpread < 20" class="error-message text-center mt-2">
      ⚠ The value is below the minimum threshold (20%).
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  spread: {
    type: Number,
    default: 50,
  },
})

const emit = defineEmits(['update:spread'])

const internalSpread = computed({
  get: () => props.spread,
  set: (val) => emit('update:spread', Number(val)),
})

// SVG Curve Generator
const startX = 80
const endX = 750
const startY = 545
const height = 500

const curvePath = computed(() => {
  const controlX = startX + ((endX - startX) * (internalSpread.value / 100))
  const controlY = startY - height
  return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${startY}`
})
</script>

<style scoped>
.curve-container {
  max-width: 700px;
  margin: auto;
  padding: 24px;
  font-family: 'Inter', sans-serif;
  background-color: #f6ffe9;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.curve-container.danger-bg {
  background-color: #fff1f2;
}

.curve-svg {
  width: 100%;
  height: auto;
  background-color: transparent;
  border-radius: 12px;
}

input.slider {
  width: 80%;
  margin: 16px auto 0;
  display: block;
  accent-color: #84cc16;
}

.error-message {
  color: #dc2626;
  font-weight: 500;
  font-size: 14px;
}
</style>
