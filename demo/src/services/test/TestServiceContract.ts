export abstract class TestServiceContract {
  abstract components: Map<string, any>
  abstract getComponent(name: string): any
  abstract registerComponents(components: Record<string, any>): void
}
