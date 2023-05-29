import { BeforeBootContext, RegisterContext, ServiceProvider } from 'revite'
import { RouterServiceContract } from '/~/services/router'
import { TestService } from '/~/services/test'
import { TestState } from './TestState'

export class VueTestViewProvider extends ServiceProvider {
  register(ctx: RegisterContext): void {
    ctx.bind(TestState).to({
      reactive: false,
      singleton: true,
      async factory({ Service }) {
        const testService = await ctx.resolve(TestService)

        return () => new Service({ testService })
      },
    })
  }

  async beforeBoot(ctx: BeforeBootContext): Promise<void> {
    const routerService = await ctx.resolve(RouterServiceContract)

    routerService.addRoute({
      path: '/test',
      name: 'test',
      component: () => import('./versions/vue/test.vue'),
    })
  }
}
