import Vue from 'vue'
import VueModel, { Model } from '../../dist/vue-models.esm'
import VueRequests from 'vue-requests'
import User from '../demo/user'
import tenant_data from './tenant_data'

Vue.use(VueRequests)
Vue.use(VueModel)

fetch.mockResponse(JSON.stringify(tenant_data), {
  status: 200
})

describe('VueModel basics', () => {
  it('should have access to static schema method', () => {
    expect(Model.schema())
      .toBeInstanceOf(Object)
  })

  const model = new User({
    id: '123'
  })
  it('should properly set id', () => {
    expect(model.id)
      .toBe('123')
  })

  it('should fetch a model', () => {
    expect.assertions(1)
    return model.fetch()
      .then((res) => {
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

describe('Extended JSON', () => {
  const user = new User({
    id: {
      $oid: '586e6d75b7a7bc5c852c60a5'
    },
    created: {
      $date: '2016-12-16T00:00:00.000Z'
    },
    updated: '2016-12-16T00:00:00.000Z',
    role: 'admin',
    first_name: 'Tony',
    last_name: 'Tiger',
    email: 'tonytiger@gmail.com',
    notifications: {
      alarm: {
        $date: '2016-12-16T00:00:00.000Z'
      },
      test: {
        one: {
          $date: '2016-12-16T00:00:00.000Z'
        },
        two: {
          three: {
            $date: '2016-12-16T00:00:00.000Z'
          }
        }
      }
    },
    things: [
      {
        id: {
          $oid: '42356d75b7a7bc5c52c11a90'
        },
        created: {
          $date: '2016-12-16T00:00:00.000Z'
        }
      },
      {
        id: {
          $oid: '09a11c25c5cb7a7b57d65324"'
        },
        created: {
          $date: '2016-12-16T00:00:00.000Z'
        }
      }
    ]
  })
  it('should decode extended json ISODate', () => {
    expect(user.created)
      .toBe('2016-12-16T00:00:00.000Z')
  })

  it('should handle regular ISODates', () => {
    expect(user.updated)
      .toBe('2016-12-16T00:00:00.000Z')
  })

  it('should handle nested extended json', () => {
    expect(user.notifications.alarm)
      .toBe('2016-12-16T00:00:00.000Z')
  })

  it('should handle very nested extended json', () => {
    expect(user.notifications.test.two.three)
      .toBe('2016-12-16T00:00:00.000Z')
  })

  it('should process object arrays with extended json properties', () => {
    expect(user.things[0].id)
      .toBe('42356d75b7a7bc5c52c11a90')
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
