# vue-models
https://api.travis-ci.org/nickforddesign/vue-models.svg?branch=master
[![Build](https://travis-ci.org/nickforddesign/vue-models.svg?branch=master)](#)
[![Coverage Status](https://coveralls.io/repos/github/nickforddesign/vue-models/badge.svg?branch=master)](https://coveralls.io/github/nickforddesign/vue-models?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A better models plugins for Vue.js

## Installation

``` bash
npm install vue-models
```

## Setup

```js
import Vue from 'vue'
import VueModels from 'vue-models'

Vue.use(VueModels)
```

## Models

The Model class returns a Vue instance with some default helper methods and computed properties. The following is an example of extending the Model class:

```js
import { Model } from 'vue-models'

const defaults = {
  name: 'user',
  computed: {
    full_name() {
      return `${this.first_name} ${this.last_name}`
    }
  }
}

export default class User extends Model {
  static schema() {
    return {
      id: String,
      first_name: String,
      last_name: String
    }
  }
  constructor(attributes, options) {
    super(attributes, [defaults, options])
  }
}

```

```js
import UserModel from './models/user'
const user = new UserModel({
  first_name: 'Jane',
  last_name: 'Doe'
})

console.log(user.full_name) // returns 'Jane Doe'

```

The Model class has some default methods and computed attributes that are useful for basic CRUD operations:

### Model.basePath

An overwriteable attribute that either uses the name of the model, or the urlRoot property from the options parameter.

### Model.url

An overwriteable attribute that is used for XHR requests. This will override the construction of the urls used for all CRUD operations.

### Model.isNew

Based on whether or not the model has an id. Affects whether or not Model.save is a POST or PUT.

### Model.fetch()

Fetches the model via a GET at Model.url

### Model.save(data, options)

Data must be valid json, options may contain a `path` property in order to deviate from the standard urlRoot.

### Model.destroy()

Sends a DELETE request for the model.

### Model.reset()

Uses the schema definition to reset all values to their default values.

### Model.toJSON()

Returns all approved data attributes, in addition to all computed properties as json.


Models can be bound to a Vue component using the following syntax:

```js
export default {
  models: {
    user() {
      return new UserModel(data)
    }
  },
  created() {
    console.log(this.$user.full_name);
  }
}
```

NOTE: By default, models are reset when the parent component is destroyed. To disable this, the `persist: true` option can be provided in the model options.


## Build Setup

``` bash
# install dependencies
npm install

# serve demo at localhost:8080
npm start

# run tests with jest
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).