import Vue from 'vue'
import VueModel, { Model } from '../index'
import VueRequest from 'vue-req'
import User from '../demo/user'
import tenant_data from './tenant_data'

Vue.use(VueRequest)
Vue.use(VueModel)

fetch.mockResponse(JSON.stringify(tenant_data), {
  status: 200
})

describe('VueModel basics', () => {
  it('should access static schema property', () => {
    expect(Model.schema())
      .toBeInstanceOf(Object)
  })

  const model = new User({
    id: '123'
  })
  it('should fetch a model', () => {
    expect.assertions(1)
    return model.fetch()
      .then(() => {
        expect(model.full_name)
          .toBe('Taco Cat')
      })
  })

  it('should resolve toJSON', () => {
    expect(model.toJSON())
      .toBeInstanceOf(Object)
  })

  it('should resolve decode', () => {
    expect(model.decode())
      .toBeInstanceOf(Object)
  })

  it('should resolve schema', () => {
    expect(model.schema())
      .toBeInstanceOf(Object)
  })

  it('should destroy a model', () => {
    expect(model.destroy())
      .toBeInstanceOf(Promise)
  })
})

const test_component = new Vue({
  models: {
    user() {
      return new User()
    }
  },
  methods: {
    fetch() {
      return this.$user.fetch()
    }
  }
})

describe('VueModel binding', () => {
  it('should correctly bind models to vue instance', () => {
    expect(test_component.$user.first_name)
      .toBe('')
  })

  it('should correctly fetch model data', () => {
    expect.assertions(1)
    return test_component.$user.fetch()
      .then(() => {
        expect(test_component.$user.full_name)
          .toBe('Taco Cat')
      })
      .catch(err => {
        console.warn({err})
      })
  })

  it('should correctly save new model data', () => {
    expect.assertions(1)
    return test_component.$user.save({
      first_name: 'Robot',
      last_name: 'Obor'
    })
    .then(() => {
      expect(test_component.$user.full_name)
        .toBe('Robot Obor')
    })
  })

  it('should reset models on destroy', () => {
    test_component.$destroy()
    expect(test_component.$user.first_name)
      .toBe('')
  })
})
