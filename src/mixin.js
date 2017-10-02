import _ from 'lodash'
import { isDef } from './utils'

const makeComputedProp = (vm, key) => {
  if (vm.$options[`$${key}`]) {
    throw new ReferenceError(
      `Model '${key}' has a naming conflict
       with an existing computed property'`
    )
  }
  vm.$options.computed[`$${key}`] = {
    get() {
      return vm.$models[key]
    },
    set(data) {
      return vm.$models[key].set(data)
    }
  }
}

const init = (vm) => {
  vm._models = vm.$options.models || {}
  vm.$models = vm.$options.$models || {}
  for (let key in vm._models) {
    vm.$models[key] = vm._models[key]
  }
  if (isDef(vm.$models)) {
    if (!vm.$options.computed) {
      vm.$options.computed = {};
    }
    for (let key in vm.$models) {
      makeComputedProp(vm, key)
    }
  }
}

const init_models = (vm) => {
  for (let key in vm.$models) {
    vm.$models[key] = vm.$models[key].apply(vm)
    vm.$models[key]._vm = vm
  }
}

export default (Vue) => ({
  beforeCreate() {
    if (isDef(this.$options.models)) {
      init(this)
    }
  },
  created() {
    if (isDef(this.$options.models)) {
      init_models(this)
    }
  },
  beforeDestroy() {
    if (isDef(this.$models)) {
      for (let key in this.$models) {
        if (!_.get(this.$models[key], '$options.persist')) {
          this.$models[key].reset()
        }
      }
    }
  }
})
