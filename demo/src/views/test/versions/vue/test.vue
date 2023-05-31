<script lang="ts" setup>
import { revite } from 'revite'
import { onMounted, shallowRef } from 'vue'
import { TestState } from '/~/views/test'
// import TitleComponent from './components/title.vue'
import ButtonBasicComponent from '/~/dynamicComponents/buttons/button-basic/button-basic'

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

    <button-basic-component>
      <template #icon>
        <base-icon
          :name="state.getIconName"
        />
      </template>
    </button-basic-component>
  </div>
</template>
