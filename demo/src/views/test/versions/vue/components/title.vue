<script lang="ts" setup>
import { defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps<{ title: string }>()
const emits = defineEmits<{(e: 'titleMounted', value: number): void }>()

// onMounted(() => {
//   emits('titleMounted', 123)
// })
</script>

<template>
  заголовок:
  {{ props.title }}
</template>
