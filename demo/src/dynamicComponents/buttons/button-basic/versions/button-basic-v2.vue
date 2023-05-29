<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('onMounted v2')
})
</script>

<template>
  <button>Кнопка v2</button>
</template>

<style scoped>
button {
  color: red;
}
</style>
