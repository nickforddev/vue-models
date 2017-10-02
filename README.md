# vue-request

[![Build](https://travis-ci.org/nickforddesign/vue-req.svg?branch=master)](#)
[![Coverage Status](https://coveralls.io/repos/github/nickforddesign/vue-req/badge.svg?branch=master)](https://coveralls.io/github/nickforddesign/vue-req?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A modern fetch plugin for Vue.js with easy config config and hooks

## Installation

``` bash
npm install vue-req
```

## Setup

```js
import Vue from 'vue'
import VueRequest from 'vue-req'

Vue.use(VueRequest, options)
```

## Options

### headers [Object]
Headers can contain any custom headers you'd like to include in your requests. The values can be properties or methods (ie. their values can either be functions, literals, or references). Use functions for values that may change over time, such as Vuex getters.

```js
import store from './store'

const Identity = {
  $oid: '4234c0a877ccf94401baz'
}

const options = {
  headers: {
    Authorization() {
      return store.getters.auth_token
    },
    Refresh: 'example_refresh_token',
    Identity
  }
}

Vue.use(VueRequest, options)
```

### before [Function]
Before hook to fire before each request. The hook uses async/await, so asynchronous hooks will complete before the actual request is made. This is particularly useful for checking if you have expired tokens and refreshing them before a request.

Here's an example of a before hook checking for expired tokens and attempting to refresh before the original request:

```js
import moment from 'moment'
import store from './store'

const token = {
  id: '1234567890',
  expires: '2017-09-30T01:44:19.273Z'
}
const options = {
  async before() {
    if (moment.utc(token.expires) >= moment.utc()) {
      store.dispatch('refresh_tokens')
    }
  }
}

Vue.use(VueRequest, options)
```

### timeout [Function]
Timeout hook to fire in the event of a timeout.

```js
const options = {
  timeout() {
    alert('The request timed out.')
  }
}

Vue.use(VueRequest, options)
```

### timeout_duration [Number]
Duration in ms for fetch timeout limit.

```js
const options = {
  timeout_duration: 25000
}

Vue.use(VueRequest, options)
```

## Usage

```js
import Vue from 'vue'
export default {
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const response = await this.$request('/data')
      this.$store.dispatch('set_data', response)
    },
    save() {
      const response = await this.$request('/data', {
        method: 'put',
        body: {
          foo: 'bar'
        }
      })
      this.$store.dispatch('saved_data', response)
    }
  }
}
```

## Requests
The request function accepts the following parameters:

### url [String]
The base url to make relative requests from. If an absolute url is passed to the request function, this will be overriden.

### options [Object]
The options parameter accepts the following parameters:
#### method [String]
The method of the request (get (default), put, post, delete, options)
#### body [Object|String]
The body of the request
### headers [Headers]
Custom headers to add to the request


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