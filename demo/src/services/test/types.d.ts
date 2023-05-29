declare namespace Service {
  namespace Test {
    type TestService = import('./TestService').TestService
    type TestServiceContract = import('./TestServiceContract').TestServiceContract

    interface Title {
      name: string
    }

    interface Config {
      service: Revite.ImportConstructor<TestServiceContract>
    }
  }
}
