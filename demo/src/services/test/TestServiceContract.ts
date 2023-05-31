import type { Component } from 'vue'

export abstract class TestServiceContract {
  abstract components: Map<string, () => Component>
  abstract registerComponents(components: Record<string, () => Component>): void
  abstract getComponent(version: string): () => Component
}
