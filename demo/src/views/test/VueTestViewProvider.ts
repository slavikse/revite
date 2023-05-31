import { BeforeBootContext, RegisterContext, ServiceProvider } from 'revite'
import { RouterServiceContract } from '/~/services/router'
import { TestService } from '/~/services/test'
import { TestState } from './TestState'
import { UiService } from '/~/services/ui'

export class VueTestViewProvider extends ServiceProvider {
  register(ctx: RegisterContext): void {
    ctx.bind(TestState).to({
      reactive: false,
      singleton: true,
      async factory({ Service }) {
        const testService = await ctx.resolve(TestService)

        return () => new Service(testService)
      },
    })
  }

  async beforeBoot(ctx: BeforeBootContext): Promise<void> {
    const routerService = await ctx.resolve(RouterServiceContract)
    const uiService = await ctx.resolve(UiService)

    routerService.addRoute({
      path: '/test',
      name: 'test',
      component: () => import('./versions/vue/test.vue'),
    })

    uiService.addMenuItem('main', {
      title: 'Test',
      icon: 'plus',
      order: 30,
      route: {
        name: 'test',
      },
    })
  }
}
