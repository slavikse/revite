export class TestState {
  constructor(private testService: Service.Test.TestService) {}

  get getIconName(): string {
    return this.testService.getIconName
  }

  registerIcon(name: string): void {
    this.testService.registerIcon(name)
  }
}
