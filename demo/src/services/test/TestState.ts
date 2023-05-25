export class TestState {
  constructor(
    private options: {
      testService: Service.Test.Contract
    },
  ) {}

  get titleName(): string {
    return this.options.testService.titleName
  }
}
