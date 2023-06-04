import type { Component } from 'vue'
import { ButtonsVersions } from './buttons'
import { TestVersions } from './test'

const ComponentVersions = Object.assign({}, ButtonsVersions, TestVersions)

export type Versions = keyof typeof ComponentVersions
export type ComponentsTypes = { [key in Versions]?: () => Component }

export default ComponentVersions
