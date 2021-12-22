import { reactive } from '@MyVue/reactivity/src'
import { reduce } from '@MyVue/shared/src'

export const transform = () => {
  const result1 = reactive()
  const result2 = reduce(2, 1)
  return result1 + result2
}
