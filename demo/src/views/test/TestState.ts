export class TestState {
  constructor(
    private options: {
      testService: Service.Test.TestService
    },
  ) {}

  get title(): string {
    return this.options.testService.titleName
  }

  registerTitle(title: string): void {
    this.options.testService.registerTitle({ name: title })
  }
}
