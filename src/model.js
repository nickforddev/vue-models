import {
  path,
  mergeDeepRight,
  isEmpty
} from 'ramda'

import { ISODate } from './demo/types'
import * as utils from './utils'

let Vue

class Model {
  static init (_Vue) {
    Vue = process.env.NODE_ENV === 'test'
      ? require('vue')
      : _Vue
  }
  static schema() {
    return {
      id: {
        type: String
      },
      created: {
        type: ISODate
      },
      updated: {
        type: ISODate
      }
    }
  }
  static defaults() {
    return {}
  }
  constructor(attributes = {}, options = {}) {
    const schema = this.constructor.schema()
    const default_attributes = utils.getDefaultsFromSchema(schema)

    const _options = mergeDeepRight(this.constructor.defaults(), options)

    const default_options = {
      name: 'model',
      created() {
        this.set(attributes)
      },
      data() {
        return default_attributes()
      },
      computed: {
        basePath() {
          const basePath = this.$options.basePath
          return basePath || this.$options.name + 's'
        },
        urlRoot() {
          return `${this.basePath}/${this.id}`
        },
        isNew() {
          return [undefined, ''].includes(this.id)
        },
        url() {
          const url = _options.url
            ? _options.url
            : this.isNew
              ? this.basePath
              : this.urlRoot
          return url
        },
        $request() {
          return path(['$request'], this._vm) || utils.Request
        }
      },
      methods: {
        async fetch() {
          const response = await this.$request(this.urlRoot)
          this.set(response)
          return response
        },
        destroy() {
          return this.$request(this.urlRoot, {
            method: 'DELETE'
          })
        },
        save(_body, options = {}) {
          let _options = {
            path: ''
          }
          _options = mergeDeepRight(_options, options)
          const changed = utils.getDiff(this.$data, _body)
          if (isEmpty(changed)) {
            return Promise.resolve()
          }
          const body = this.encode(changed)
          const method = this.isNew ? 'POST' : 'PUT'
          const path = _options.path ? '/' + _options.path : ''
          const req = this.$request(this.url + path, {
            method,
            body
          })
          req.then(() => {
            this.set(body)
          })
          return req
        },
        data() {
          let data = {}
          for (let key in schema) {
            data[key] = this[key]
          }
          return mergeDeepRight({}, data)
        },
        set(data) {
          const data_decoded = this.decode(data)
          console.log({data_decoded})
          for (let key in data_decoded) {
            this[key] = data_decoded[key]
          }
          return this
        },
        reset() {
          return utils.resetState(this, default_attributes())
        },
        toJSON() {
          return utils.modelToJSON(this)
        },
        decode(data = this.data()) {
          return utils.decodeData(utils.removeUnderscores(data), schema)
        },
        encode(data = this.data()) {
          return utils.addUnderscores(utils.encodeData(data, schema))
        },
        schema() {
          return schema
        }
      }
    }

    const model_options = mergeDeepRight(default_options, _options)

    return new Vue(model_options)
  }
}

export { Model }
