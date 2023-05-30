
import { revite } from 'revite'
import { defineAsyncComponent } from 'vue'
import { TestServiceContract } from '/~/services/test'

export default defineAsyncComponent(async () => {
  const testService = await revite.resolve(TestServiceContract)

  const component = testService.getComponent('button')

  return component()
})
