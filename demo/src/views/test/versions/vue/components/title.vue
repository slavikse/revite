<script lang="ts" setup>
import { defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps<{ title: string }>()
const emits = defineEmits(['titleMounted'])

onMounted(() => {
  emits('titleMounted')
})
</script>

<template>
  заголовок:
  {{ props.title }}
</template>
