<template>
  <!-- Main container, background turns red when spread < 20 -->
  <div
    class="curve-container"
    :class="{ 'danger-bg': internalSpread < 20 }"
  >
    <!-- Title -->
    <h2 class="text-xl font-bold mb-2 text-center">Dynamic Curve</h2>

    <!-- Subtitle showing current spread value -->
    <p class="text-gray-600 text-center mb-4">
      This curve changes based on the <strong>spread</strong> value ({{ internalSpread }}%)
    </p>

    <!-- SVG curve drawing -->
    <svg viewBox="0 0 868 617" class="curve-svg">
      <!-- Background fill changes color in danger zone -->
      <rect width="100%" height="100%" :fill="internalSpread < 20 ? '#fff1f2' : '#f6ffe9'" />

      <!-- Bottom baseline -->
      <line x1="70" y1="550" x2="820" y2="550" stroke="#ccc" stroke-width="2" />

      <!-- Main curve: green normally, red when value < 20 -->
      <path
        :d="curvePath"
        fill="none"
        :stroke="internalSpread < 20 ? '#f87171' : '#4ade80'"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>

    <!-- Slider to control spread -->
    <input
      type="range"
      min="0"
      max="100"
      v-model="internalSpread"
      class="slider"
    />

    <!-- Warning text shown when spread is below minimum -->
    <p v-if="internalSpread < 20" class="error-message text-center mt-2">
      ⚠ The value is below the minimum threshold (20%).
    </p>
  </div>
</template>

<script setup lang="ts">
// Vue composition functions
import { computed, defineProps, defineEmits } from 'vue'

// Accept `spread` as a prop
const props = defineProps({
  spread: {
    type: Number,
    default: 50,
  },
})

// Emit updates to support v-model:spread
const emit = defineEmits(['update:spread'])

// Local computed variable for v-model binding
const internalSpread = computed({
  get: () => props.spread,
  set: (val) => emit('update:spread', Number(val)),
})

// Define SVG curve dimensions
const startX = 80
const endX = 750
const startY = 545
const height = 500

// Calculate SVG quadratic bezier curve path
const curvePath = computed(() => {
  const controlX = startX + ((endX - startX) * (internalSpread.value / 100))
  const controlY = startY - height
  return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${startY}`
})
</script>

<style scoped>
/* Container styling */
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

/* Background turns soft red in danger */
.curve-container.danger-bg {
  background-color: #fff1f2;
}

/* SVG sizing */
.curve-svg {
  width: 100%;
  height: auto;
  background-color: transparent;
  border-radius: 12px;
}

/* Slider appearance */
input.slider {
  width: 80%;
  margin: 16px auto 0;
  display: block;
  accent-color: #84cc16; /* green slider */
}

/* Error message style */
.error-message {
  color: #dc2626;
  font-weight: 500;
  font-size: 14px;
}
</style>
