import Type from '../type'

export class ObjectId extends Type {
  constructor(value) {
    super(value, '$oid')
    return this
  }
  out() {
    return this.value || ''
  }
}

export class ISODate extends Type {
  constructor(value) {
    super(value, '$date')
    return this
  }
  in(value) {
    const parsed = new Date(value)
    if (!isNaN(parsed.getTime())) {
      this.value = value
    } else {
      throw new TypeError(`Invalid date: "${value}"`)
    }
  }
  out() {
    return this.value
      ? new Date(this.value).toISOString()
      : undefined
  }
}
