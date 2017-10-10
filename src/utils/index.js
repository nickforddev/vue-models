import _some from 'lodash.some'
import _merge from 'deep-extend'
import _reduce from 'lodash.reduce'
import _isEmpty from 'lodash.isempty'
import _isEqual from 'lodash.isequal'
import { Request } from 'vue-requests'

export { Request }

// is property defined

export function isDef (v) {
  if (v === undefined) return false
  return !_some(...v, _isEmpty)
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
  const updated = _merge({}, oldData, newData)
  const output = _reduce(oldData, function(result, value, key) {
    return _isEqual(value, updated[key]) ? result : result.concat(key)
  }, [])
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
    return _merge({}, default_attrs)
  }
  return immutable
}

// traverse data

const traverse = (data, schema, func) => {
  let output = {}
  if (data instanceof Array) {
    output = data.map(item => {
      for (let key in item) {
        if (schema.items && key in schema.items) {
          if ([Object, Array].includes(schema.items[key])) {
            item[key] = traverse(item[key], schema[key], func)
          } else {
            item[key] = func(item[key], schema.items[key])
          }
        }
      }
      return item
    })
  } else if (data instanceof Object) {
    for (let key in data) {
      if (schema[key] && schema[key].items) {
        output[key] = traverse(data[key], schema[key], func)
      } else if (schema[key] && schema[key].properties) {
        output[key] = traverse(data[key], schema[key].properties, func)
      } else if (key in schema) {
        output[key] = func(data[key], schema[key])
      } else {
        output[key] = data[key]
      }
    }
  } else {
    // found a normal key: value prop
    output = func(data, schema)
  }
  return output
}

// encode a model property

export const encodeProperty = (data, schema) => {
  let output
  const constructor = schema.type
  if (constructor && ![Object, Array].includes(constructor)) {
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

export const decodeProperty = (data, schema) => {
  let output
  const constructor = schema.type
  if (constructor && ![Object, Array].includes(constructor)) {
    output = new constructor(data).valueOf()
  } else {
    output = data
  }
  return output
}

// encode model data

export const encodeData = (_data, schema) => {
  const data = _merge({}, _data)
  return traverse(data, schema, encodeProperty)
}

// decode model data

export const decodeData = (_data, schema) => {
  const data = _merge({}, _data)
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
  let output = _merge({}, data, computed)
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
