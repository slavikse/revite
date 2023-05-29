<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('onMounted v1')
})
</script>

<template>
  <button>Кнопка v1</button>
</template>

<style scoped>
button {
  color: blue;
}
</style>
