import type { Component } from 'vue'

export type ComponentsType = Record<string, () => Component>

export abstract class TestServiceContract {
  abstract components: ComponentsType
  abstract registerComponents(components: ComponentsType): void
  abstract getComponent(version: string): () => Component
}
