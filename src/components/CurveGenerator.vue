<template>
    <div class="curve-container">
      <svg viewBox="0 0 868 617" class="curve-svg">
        <rect width="100%" height="100%" fill="#fff" />
        <line x1="70" y1="550" x2="820" y2="550" stroke="#ccc" stroke-width="2" />
        <path 
          :d="curvePath"
          fill="none" 
          stroke="#555" 
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
  
      <div class="slider-wrapper">
        <input 
          type="range" 
          min="0" 
          max="100" 
          v-model="internalSpread"
          :class="{ 'danger': internalSpread < 30 }"
          data-testid="spread-slider"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  spread: {
    type: Number,
    default: 50,
  }
})

const emit = defineEmits(['update:spread'])

// Ensure emitted value is a number
const internalSpread = computed({
  get: () => props.spread,
  set: (val) => emit('update:spread', Number(val))
})

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
    max-width: 900px;
    margin: auto;
    padding: 16px;
    font-family: sans-serif;
  }
  
  .curve-svg {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
    background: #fff;
  }
  
  .slider-wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  
  input[type="range"] {
    width: 200px;
    accent-color: #666;
  }
  
  input[type="range"].danger {
    accent-color: red;
  }
  </style>
  