<script lang="ts" setup>
import { revite } from 'revite'
import { onMounted, shallowRef } from 'vue'
import { TestServiceContract } from '/~/services/test'

const ButtonBasicComponent = shallowRef()

onMounted(async () => {
  const state = await revite.resolve(TestServiceContract)

  ButtonBasicComponent.value = state.buttonComponent
})
</script>

<template>
  <div>
    <component :is="ButtonBasicComponent" />
  </div>
</template>
