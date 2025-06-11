<template>
  <svg :width="width" :height="height" viewBox="0 0 500 200">
    <polyline :points="curvePoints" fill="none" stroke="blue" stroke-width="2" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  scale: number
  functionName: 'sin' | 'cos' | 'log' | 'exp'
}>()

const width = 500
const height = 200

const curvePoints = computed(() => {
  const points: string[] = []
  for (let x = 0; x <= width; x++) {
    const normX = (x / width) * Math.PI * 2 * props.scale
    let y = 0
    switch (props.functionName) {
      case 'sin': y = Math.sin(normX); break
      case 'cos': y = Math.cos(normX); break
      case 'log': y = Math.log(normX + 1) / Math.log(10); break
      case 'exp': y = Math.exp(normX * 0.1) / 10; break
    }
    const yPos = height / 2 - y * (height / 2)
    points.push(`${x},${yPos.toFixed(2)}`)
  }
  return points.join(' ')
})
</script>
