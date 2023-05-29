<script lang="ts" setup>
import { revite } from 'revite'
import { onMounted, ref } from 'vue'
import { TestState } from '/~/views/test'
import TitleComponent from './components/title.vue'
import ButtonBasicComponent from '/~/dynamicComponents/buttons/button-basic/button-basic.vue'

const title = ref('')

onMounted(async () => {
  const state = await revite.resolve(TestState)

  state.registerTitle('заголовок введённый и отображён через систему revite!')

  title.value = state.title
})

function titleMounted(): void {
  // console.log('titleMounted')
}
</script>

<template>
  <div>
    <div>{{ title }}</div>

    <title-component
      title="test"
      @title-mounted="titleMounted"
    />

    <button-basic-component />
  </div>
</template>
