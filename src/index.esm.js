import makeMixin from './mixin'
import { Model } from './model'
import Type from './type'

export default class VueModel {
  static install(Vue, options) {
    Vue.mixin(makeMixin(Vue))
    Model.init(Vue)
  }
}

export { Model }
export { Type }
