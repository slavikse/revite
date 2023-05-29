import { TestServiceContract } from '../TestServiceContract'

export class MockFetchButtonVersionsService extends TestServiceContract {
  async fetchButtonVersions(): Promise<void> {
    // Эмулиция получения данных типа кнопки с сервера.
    const componentPath: string = await new Promise(getComponentPath)
    const component = await import(/* @vite-ignore */ componentPath)

    this.buttonComponent = component.default
  }
}

// todo нужна доработка, что делать с путём до компонента?
function getComponentPath(resolve: (arg0: string) => void): void {
  // "получено с сервера"
  const buttonVersions = [1, 2]
  const version = buttonVersions[Math.round(Math.random() * (buttonVersions.length - 1))]
  // "получено с сервера" - строка сразу будет с цифрой?
  const componentPath = `/~/dynamicComponents/buttons/button-basic/versions/button-basic-v${version}.vue`

  setTimeout(() => resolve(componentPath), 1000)
}
