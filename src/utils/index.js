import {
  mergeDeepRight,
  clone,
  reduce,
  isEmpty,
  equals
} from 'ramda'

import { Request } from 'vue-requests'
export { Request }

let options

export function init(_options) {
  options = _options
}

// is property defined

export function isDef (obj) {
  if (obj === undefined) return false
  return !isEmpty(obj)
}

// get props that changed

export const getDiff = (oldData, newData) => {
  const keys = getChangedKeys(oldData, newData)
  let output = {}
  for (let index in keys) {
    const key = keys[index]
    output[key] = newData[key]
  }
  return output
}

// get keys of changed props

export const getChangedKeys = (oldData, newData) => {
  const updated = mergeDeepRight(oldData, newData)
  const output = reduce((result, key, index) => {
    return !(key in oldData)
      ? result.concat(key)
      : equals(updated[key], oldData[key])
        ? result
        : result.concat(key)
  }, [], Object.keys(updated))
  return output
}

// remove underscores from object keys for vue

export const removeUnderscores = (data) => {
  const output = {}
  for (let _key in data) {
    const key = _key.charAt(0) === '_'
      ? _key.substr(1)
      : _key
    output[key] = data[_key]
  }
  return output
}

// add underscores for mongo props

const underscore_properties = [
  'id'
]

export const addUnderscores = (data) => {
  const output = {}
  for (let _key in data) {
    const key = underscore_properties.includes(_key)
      ? `_${_key}`
      : _key
    output[key] = data[_key]
  }
  return output
}

// turn schema definitions into json

export const getDefaultsFromSchema = (schema) => {
  let default_attrs = {}
  for (let key in schema) {
    let constructor, value
    const attr = schema[key]
    if ('type' in attr) {
      constructor = attr.type
      value = 'default' in attr
        ? attr.default
        : ''
      let output
      if (constructor === Object) {
        output = attr.properties
          ? getDefaultsFromSchema(attr.properties)()
          : {}
      } else if (constructor === Array) {
        output = []
      } else {
        output = new constructor(value).valueOf()
      }
      default_attrs[key] = output
    } else {
      default_attrs[key] = getDefaultsFromSchema(attr)
    }
  }
  const immutable = () => {
    return mergeDeepRight({}, default_attrs)
  }
  return immutable
}

// traverse data

const traverse = (data, schema, func) => {
  let output = {}
  if (data instanceof Array) {
    output = data.map(item => {
      if ([Object, Array].includes(schema.items.type)) {
        item = traverse(item, schema.items, func)
      } else {
        item = func(item, schema.items)
      }
      return item
    })
  } else if (data instanceof Object) {
    for (let key in data) {
      if (key in schema) {
        if (schema[key].items) {
          output[key] = traverse(data[key], schema[key], func)
        } else if (schema[key].properties) {
          output[key] = traverse(data[key], schema[key].properties, func)
        } else {
          output[key] = func(data[key], schema[key])
        }
      } else if (schema.properties) {
        output = traverse(data, schema.properties, func)
      } else {
        if (options.schemaWarnings) {
          console.warn('Key missing from schema: ' + key)
        }
        output[key] = data[key]
      }
    }
  } else {
    output = func(data, schema)
  }
  return output
}

// encode a model property

export const encodeProperty = (data, schema = {}) => {
  let output
  const constructor = schema.type
  if (!isEmpty(schema) && constructor && ![Object, Array].includes(constructor)) {
    const instance = new constructor(data)
    output = instance.encode
      ? instance.encode()
      : instance.valueOf()
  } else {
    output = data
  }
  return output
}

// decode a model property

export const decodeProperty = (data, schema = {}) => {
  let output
  const constructor = schema.type
  if (!isEmpty(schema) && constructor && ![Object, Array].includes(constructor)) {
    output = new constructor(data).valueOf()
  } else {
    output = data
  }
  return output
}

// encode model data

export const encodeData = (_data, schema) => {
  const data = clone(_data)
  return traverse(data, schema, encodeProperty)
}

// decode model data

export const decodeData = (_data, schema) => {
  const data = clone(_data)
  return traverse(data, schema, decodeProperty)
}

// get all data and computed attributes from model

export const modelToJSON = (model) => {
  let computed = {}
  for (let key in model.$options.computed) {
    computed[key] = model[key]
  }
  let data = {}
  for (let key in model.schema()) {
    data[key] = model[key]
  }
  let output = mergeDeepRight(data, computed)
  delete output.errors
  delete output.fields
  return output
}

// reset collection or model state

export const resetState = (model, defaults) => {
  Object.keys(defaults).forEach(key => {
    model[key] = defaults[key]
  })
}

// reset all collection or model states

export const resetAllStates = (state, modules) => {
  Object.keys(modules).forEach(key => {
    resetState(state[key], modules[key].defaults())
  })
}

// assemble query string

export const makeQueryString = (obj) => {
  const arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return arr.join('&')
}
