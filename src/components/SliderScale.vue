<!-- components/SliderScale.vue -->
<template>
      <div class="slider-wrapper">
        <p v-if="internalValue < 20" class="error-message">
        ⚠ The value is below the minimum threshold (20%).
      </p>
      <input
        type="range"
        min="0"
        max="100"
        v-model="internalValue"
        :class="{ danger: internalValue < 30 }"
        data-testid="spread-slider"
      />
      <p class="percentage-label">{{ internalValue }}%</p>
    
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: Number,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const internalValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', Number(val))
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
  }
  
  .slider-wrapper {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input[type='range'] {
    width: 80%;
    height: 8px;
    border-radius: 5px;
    appearance: none;
    background: linear-gradient(to right, #a3e635 0%, #4ade80 100%);
    outline: none;
    accent-color: #84cc16;
  }
  
  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #dc2626;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #84cc16;
    cursor: pointer;
  }
  
  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: #dc2626;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #84cc16;
    cursor: pointer;
  }
  
  input[type='range'].danger {
    background: linear-gradient(to right, #facc15, #f87171);
  }
  
  .percentage-label {
    margin-top: 8px;
    background: black;
    color: white;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
  }
  
  .error-message {
    color: #dc2626;
    font-size: 14px;
    margin-top: 6px;
    font-weight: 500;
  }
  </style>
  