<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('onMounted dynamic button v2')
})
</script>

<template>
  <div class="flex">
    <div class="w-6 h-6">
      <slot name="icon" />
    </div>

    <button class="ml-2">
      Кнопка v2
    </button>
  </div>
</template>
