<template>
  <!-- Wrapper that defines the dynamic CSS variable (--thumb-color) for the slider thumb -->
  <div>
     <!-- Error message shown if the slider value is below 20 -->
     <p v-if="internalValue < 20" class="error-message">
      ⚠ The value is below the minimum threshold (20%).
    </p>
    <div
    class="slider-wrapper"
    :style="{ '--thumb-color': internalValue < 20 ? '#f87171' : '#84cc16' }"
  >
  
    <!-- Slider input control -->
    <input
      type="range"
      min="0"
      max="100"
      v-model="internalValue"
      :class="{ danger: internalValue < 20 }"
      data-testid="spread-slider"
    />

    <!-- Percentage display -->
    <p class="percentage-label">{{ internalValue }}%</p>
  </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue helpers
import { computed, defineProps, defineEmits } from 'vue'

// Props: receives modelValue via v-model binding
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})

// Emits an event to update the modelValue
const emit = defineEmits(['update:modelValue'])

// Create a computed property for two-way binding
const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', Number(val)) // ensure it's always a number
})
</script>

<style scoped>
/* Slider container with vertical layout and center alignment */
.slider-wrapper {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  --thumb-color: #84cc16; /* Default color if JS doesn't set it */
}

/* Base slider track style */
input[type='range'] {
  width: 80%;
  height: 8px;
  border-radius: 5px;
  appearance: none;
  background: linear-gradient(to right, #a3e635 0%, #4ade80 100%);
  outline: none;
  accent-color: var(--thumb-color); /* fallback for browsers that support it */
  transition: all 0.3s ease;
}

/* Chrome/Safari slider thumb style using dynamic color */
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--thumb-color); /* dynamic thumb color */
  border-radius: 5%;
  box-shadow: 0 0 0 2px var(--thumb-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Firefox slider thumb style using dynamic color */
input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background-color: var(--thumb-color); /* dynamic thumb color */
  border-radius: 5%;
  box-shadow: 0 0 0 2px var(--thumb-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* When value is low (danger), apply red track background */
input[type='range'].danger {
  background: linear-gradient(to right, #facc15, #f87171);
}

/* Label showing the current percentage */
.percentage-label {
  margin-top: 8px;
  background: black;
  color: white;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}

/* Error message styling */
.error-message {
  color: #dc2626;
  font-size: 14px;
  margin-top: 6px;
  font-weight: 500;
}
</style>
