export class TestService {
  private content: {
    title: Service.Test.Title
  } = {
    title: { name: '' },
  }

  get titleName(): string {
    return this.content.title.name
  }

  registerTitle(title: Service.Test.Title): void {
    this.content.title = title
  }
}
