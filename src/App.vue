<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div>
      <CurveGraph v-model:spread="spread" />
    </div>
  </div>
</template>

<script setup>
import CurveGraph from "./components/CurveGenerator.vue";
import { ref } from 'vue'
const spread = ref(50)
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
</style>
