import Vue from 'vue'
import _ from 'lodash'
import { ISODate } from './demo/types'
import * as utils from './utils'

// const { Request } = utils

export default class Model {
  static schema() {
    return {
      id: String,
      created: ISODate,
      updated: ISODate
    }
  }
  constructor(attributes = {}, options = {}) {
    const schema = this.constructor.schema()
    const default_attributes = utils.getDefaultsFromSchema(schema)

    // make sure options is an array and then merge items
    let _options = !(options instanceof Array) ? [ options ] : options
    _options = _.reduce(_options, (sum, n) => {
      return _.merge({}, sum, n)
    })

    const default_options = {
      name: 'model',
      created() {
        this.set(attributes)
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
          return this.id === undefined
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
          return _.get(this._vm, '$request') || utils.Request
        }
      },
      data() {
        return default_attributes()
      },
      methods: {
        async fetch() {
          const response = await this.$request(this.urlRoot)
          this.set(response)
          return response
        },
        destroy() {
          // return new Request(this.urlRoot, {
          return this.$request(this.urlRoot, {
            method: 'DELETE'
          })
        },
        save(_body, options) {
          const _options = {
            path: ''
          }
          _.merge(_options, options)
          const changed = utils.getDiff(this.$data, _body)
          if (_.isEmpty(changed)) {
            return Promise.resolve()
          }
          const body = this.encode(changed)
          const method = this.isNew ? 'POST' : 'PUT'
          const path = _options.path ? '/' + _options.path : ''
          // const req = new Request(this.url + path, {
          const req = this.$request(this.url + path, {
            method,
            body
          })
          req.then(() => {
            this.set(body)
          })
          return req
        },
        set(data) {
          // console.log('set', data)
          const data_decoded = this.decode(data)
          _.merge(this, data_decoded)
          return this
        },
        reset(defaults) {
          return utils.resetState(this.$data, default_attributes())
        },
        toJSON() {
          return utils.modelToJSON(this)
        },
        decode(data = this.$data) {
          return utils.decodeData(utils.removeUnderscores(data), schema)
        },
        encode(data = this.$data) {
          return utils.addUnderscores(utils.encodeData(data, schema))
        },
        schema() {
          return schema
        }
      }
    }

    const model_options = _.merge({}, default_options, _options)

    return new Vue(model_options)
  }
}
