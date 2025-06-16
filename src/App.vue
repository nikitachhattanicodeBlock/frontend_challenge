<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div>
      <CurveGraph
        title="Performance Score"
        description="This is a description for this component. It is optional."
        :value="45"
        :min-value="50"
      />
    </div>
  </div>
</template>

<script setup>
import CurveGraph from "./components/CurveGenerator.vue";
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
</style>
