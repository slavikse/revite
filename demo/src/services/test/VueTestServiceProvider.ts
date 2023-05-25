import { RegisterContext, ServiceProvider } from 'revite'
import { TestService } from '/~/services/test'

export class TestServiceProvider extends ServiceProvider {
  register(ctx: RegisterContext): void {
    ctx.bind(TestService).to({
      reactive: true,
      singleton: true,
    })
  }
}
