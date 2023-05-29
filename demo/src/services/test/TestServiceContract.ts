export abstract class TestServiceContract {
  buttonComponent!: object
  abstract fetchButtonVersions(): Promise<void>
}
