<script setup lang="ts">
import { ref } from 'vue'
import Button from "./Button.vue"

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

<div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-xl">{{ msg }}</h1>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <Button type="button" @click="count++" :label="'count is ' + count" />
    </div>
  </div>
</template>
