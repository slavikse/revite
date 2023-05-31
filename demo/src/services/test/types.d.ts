declare namespace Service {
  namespace Test {
    type TestService = import('./TestService').TestService
    type TestServiceContract = import('./TestServiceContract').TestServiceContract

    interface Config {
      service: Revite.ImportConstructor<TestServiceContract>
    }

    enum ButtonVersions {
      ButtonDefault = 'buttonDefault',
      ButtonGosuslugi = 'buttonGosuslugi',
    }
  }
}
