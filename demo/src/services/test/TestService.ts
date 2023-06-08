export class TestService {
  private iconName = ''

  get getIconName(): string {
    return this.iconName
  }

  registerIcon(name: string): void {
    this.iconName = name
  }
}
