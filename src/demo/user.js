import { Model } from '../index.esm'
// import { Model } from '../../dist/vue-models.esm'
import { ObjectId, ISODate } from './types'

export default class User extends Model {
  static defaults() {
    return {
      name: 'user',
      computed: {
        basePath() {
          if (this.role) {
            const basePath = this.$options.basePath
            return basePath || this.role + 's'
          } else {
            return ''
          }
        },
        full_name() {
          return this.role
            ? `${this.first_name} ${this.last_name}`
            : ``
        },
        initials() {
          return this.role
            ? `${this.first_name[0]}${this.last_name[0]}`.toUpperCase()
            : ``
        }
      }
    }
  }
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
      avatar_color: {
        type: String
      },
      notifications: {
        type: Object,
        properties: {
          alarm: {
            type: ISODate
          },
          test: {
            type: Object,
            properties: {
              one: {
                type: ISODate
              },
              two: {
                type: Object,
                properties: {
                  three: {
                    type: ISODate
                  }
                }
              }
            }
          }
        }
      },
      status: {
        type: Object,
        properties: {
          one: {
            type: Object
          }
        }
      },
      friends: {
        type: Array,
        items: {
          type: ObjectId
        }
      },
      things: {
        type: Array,
        items: {
          type: Object,
          properties: {
            id: {
              type: ObjectId
            },
            created: {
              type: ISODate
            }
          }
        }
      },
      periods: {
        type: Array,
        items: {
          type: Object,
          properties: {
            _id: {
              type: ObjectId
            },
            start_date: {
              type: ISODate
            }
            // amount: {
            //   type: Number
            // }
          }
        }
      }
    }
  }
}
