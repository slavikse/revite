import type { Component } from 'vue'
import { TestServiceContract } from '../TestServiceContract'

export class MockFetchButtonVersionsService extends TestServiceContract {
  // eslint-disable-next-line func-call-spacing
  components = new Map<string, () => Component>()

  registerComponents(components: Record<string, () => Component>): void {
    Object.keys(components).forEach((key) => {
      this.components.set(key, components[key])
    })
  }

  getComponent(version: string): () => Component {
    return this.components.get(version) as () => Component
  }
}
