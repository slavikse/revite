import { revite } from 'revite'
import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'
import { TestServiceContract } from '/~/services/test'

export default defineAsyncComponent(async (): Promise<Component> => {
  const testService = await revite.resolve(TestServiceContract)
  const component = testService.getComponent('buttonGosuslugi')

  // todo почему ferenceError: Service is not defined?
  // console.log(Service.Test.ButtonVersions.ButtonDefault)

  return component()
})
