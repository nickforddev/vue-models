import _ from 'lodash'
import { Model } from '../index'
import { ObjectId, ISODate } from './types'

const defaults = {
  name: 'user',
  computed: {
    basePath() {
      const basePath = this.$options.basePath
      return basePath || this.role + 's'
    },
    full_name() {
      return `${this.first_name} ${this.last_name}`
    },
    initials() {
      return `${this.first_name[0]}${this.last_name[0]}`.toUpperCase()
    }
  }
}

export default class User extends Model {
  static schema() {
    return {
      id: {
        type: ObjectId
      },
      updated: {
        type: ISODate
      },
      created: {
        type: ISODate
      },
      company: {
        type: String
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      email: {
        type: String
      },
      role: {
        type: String
      },
      password: {
        type: String
      },
      avatar_color: {
        type: String
      },
      dwolla: {
        type: Object
      },
      notifications: {
        type: Object
      },
      status: {
        type: Object
      },
      leases: {
        type: Array
      },
      terms_accepted: {
        type: Object
      }
    }
  }
  constructor(attributes, options) {
    super(attributes, [defaults, options])
  }
}
