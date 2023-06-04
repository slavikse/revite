import type { Component } from 'vue'
import type { ComponentsTypes, Versions } from '../component-versions'
import { TestServiceContract } from '../TestServiceContract'

export class MockFetchVersionsService extends TestServiceContract {
  // eslint-disable-next-line func-call-spacing
  components: ComponentsTypes = {}

  registerComponents(components: ComponentsTypes): void {
    Object.keys(components).forEach((key) => {
      this.components[key] = components[key]
    })
  }

  getComponent(version: Versions): () => Component {
    return this.components[version as string]
  }
}
