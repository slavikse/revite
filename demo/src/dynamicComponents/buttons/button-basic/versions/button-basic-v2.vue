<script lang="ts" setup>
import { defineProps, onMounted } from 'vue'
import ComponentProps from '../button-basic.props'

const props = defineProps(ComponentProps)

onMounted(() => {
  console.log('onMounted dynamic button v2 ', props) // подсказки параметров для props включены
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
