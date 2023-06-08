<script lang="ts">
import { revite } from 'revite'
import { defineComponent, shallowRef, defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import { TestServiceContract } from '/~/services/test'
import PropsAsTypes from './button-basic.props'

// todo импортирован от куда то
const theme = 'default'

export default defineComponent({
  props: PropsAsTypes,

  data: () => ({
    asyncComponent: shallowRef<Component>(),
  }),

  async mounted() {
    this.asyncComponent = await this.getAsyncComponent()
  },

  methods: {
    async getAsyncComponent(): Promise<Component> {
      const dynamicComponents = await revite.resolve(TestServiceContract)
      const component = dynamicComponents.getComponent('buttonDefault', theme)

      return defineAsyncComponent(async () => component())
    },
  },
})
</script>

<template>
  <component
    :is="asyncComponent"
    v-bind="$props"
  >
    <template #icon>
      <slot name="icon" />
    </template>
  </component>
</template>
