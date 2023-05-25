<script lang="ts" setup>
import { revite } from 'revite'
import { onMounted, ref } from 'vue'
import { TestState } from '/~/views/test'
import TitleComponent from './components/title.vue'

const title = ref('')

onMounted(async () => {
  const state = await revite.resolve(TestState)

  state.registerTitle('заголовок введённый и отображён через систему revite!')

  title.value = state.title
})
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <div>{{ title }}</div>

    <title-component />
  </div>
</template>
