export class TestState {
  constructor(
    private options: {
      testService: Service.Test.TestService
    },
  ) {}

  get titleName(): string {
    return this.options.testService.titleName
  }
}
