<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps(['title'])
</script>

<template>
  заголовок:
  {{ props.title }}
</template>
