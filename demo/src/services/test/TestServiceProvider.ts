import { BootContext, RegisterContext, ServiceProvider } from 'revite'
import { TestService, TestServiceContract } from '/~/services/test'

export class TestServiceProvider extends ServiceProvider {
  register(ctx: RegisterContext): void {
    ctx.bind(TestService).to({
      reactive: false,
      singleton: true,
    })

    ctx.bind(TestServiceContract).to({
      service: () => import('./versions/MockFetchVersionsService'),
      reactive: false,
      singleton: true,
    })
  }

  async beforeBoot(ctx: BootContext) {
    const testService = await ctx.resolve(TestServiceContract)
    const buttonBasicPath = '/~/dynamicComponents/buttons/button-basic/versions/button-basic'

    // todo как это разрезолвить?
    testService.registerComponents({
      buttonDefault: () => import(`${buttonBasicPath}-v1.vue`),
      buttonGosuslugi: () => import(`${buttonBasicPath}-v2.vue`),
    })
  }
}
