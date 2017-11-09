import { mergeDeepRight } from 'ramda'
import makeMixin from './mixin'
import { Model } from './model'
import Type from './type'

export default class VueModel {
  static install(Vue, _options = {}) {
    const defaults = {
      schemaWarnings: true
    }
    const options = mergeDeepRight(defaults, _options)
    Vue.mixin(makeMixin(Vue))
    Model.init(Vue, options)
  }
  static Model = Model
  static Type = Type
}
