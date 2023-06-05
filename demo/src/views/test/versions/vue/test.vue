<script lang="ts" setup>
import { revite } from 'revite'
import { shallowRef, onMounted } from 'vue'
import { TestState } from '/~/views/test'
// import TitleComponent from './components/title.vue'
import ButtonBasicComponent from '/~/dynamicComponents/buttons/button-basic/button-basic.vue'

const state = shallowRef<TestState>()

onMounted(async () => {
  state.value = await revite.resolve(TestState)
  state.value.registerIcon('home')
})

// function titleMounted(value: number): void {
//   console.log('titleMounted', value)
// }
</script>

<template>
  <div v-if="state">
    <!-- <title-component
      title="test"
      @title-mounted="titleMounted"
    /> -->
    TEST

    <button-basic-component>
      <template #icon>
        <base-icon name="plus" />
      </template>
    </button-basic-component>
  </div>

  <div v-else>
    loading...
  </div>
</template>
