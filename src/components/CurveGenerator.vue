<template>
    <div
      class="curve-container"
      :class="{ 'danger-bg': internalSpread < 20 }"
    >
      <!-- Title & Description -->
      <Title />
      <Description />
  
      <!-- SVG Curve -->
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
  
      <!-- SliderScale Component -->
      <SliderScale v-model="internalSpread" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps, defineEmits } from 'vue'
  import Title from '../components/Title.vue'
  import Description from '../components/Description.vue'
  import SliderScale from '../components/SliderScale.vue'
  
  const props = defineProps({
    spread: {
      type: Number,
      default: 50
    }
  })
  
  const emit = defineEmits(['update:spread'])
  
  const internalSpread = computed({
    get: () => props.spread,
    set: (val) => emit('update:spread', Number(val))
  })
  
  // Curve logic
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
  </style>
  