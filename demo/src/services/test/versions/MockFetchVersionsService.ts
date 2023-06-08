import type { Component } from 'vue'
import { TestServiceContract, ComponentsType } from '../TestServiceContract'

export class MockFetchVersionsService extends TestServiceContract {
  components: ComponentsType = {}

  registerComponents(components: ComponentsType): void {
    Object.keys(components).forEach((key) => {
      this.components[key] = components[key]
    })
  }

  getComponent(version: string, theme: string): () => Component {
    console.log('ThemeType ', theme) // todo

    return this.components[version]
  }
}
