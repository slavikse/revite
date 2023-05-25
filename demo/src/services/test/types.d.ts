declare namespace Service {
  namespace Test {
    type Contract = import('./TestService').TestService

    interface Title {
      name: string
    }
  }
}
