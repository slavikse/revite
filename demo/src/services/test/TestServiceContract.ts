import type { Component } from 'vue'
import type { ComponentsTypes, Versions } from './component-versions'

// todo rename DynamicComponentsServiceContract?
export abstract class TestServiceContract {
  abstract components: ComponentsTypes
  abstract registerComponents(components: ComponentsTypes): void
  abstract getComponent(version: Versions): () => Component
}
