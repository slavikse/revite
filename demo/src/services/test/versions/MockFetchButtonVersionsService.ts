import { TestServiceContract } from '../TestServiceContract'

export class MockFetchButtonVersionsService extends TestServiceContract {
  components = new Map<string, any>()

  async registerComponents(components: Record<string, any>): Promise<void> {
    Object.keys(components).forEach(key => {
      this.components.set(key, components[key])
    })
  }

  getComponent(name) {
    return this.components.get(name)
  }
}
