<template>
  <div id="app">
    <h1>vue-models</h1>

    <table class="top">
      <!-- <thead>
        <tr>
          <td>Card</td>
          <td>Data</td>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <td width="75%">
            <p>
              Below is an example of binding a model to a Vue instance. Use the buttons
              to mutate the user data in the model, and the user card will update.
              Below that is an example of using custom types in a model schema to decode 
              <a href="https://docs.mongodb.com/manual/reference/mongodb-extended-json/" target="_blank">extended json</a> 
              from MongoDB. The data is flattened for use client-side, and then re-encoded
              to extended json when saving, or as otherwise needed.
            </p>
          </td>
          <td>
            <div v-if="$user.role">
              <button @click="resetUser">Clear Model</button>
              <button @click="setUser('one')" :disabled="current_user === 'one'">Set User One</button>
              <button @click="setUser('two')" :disabled="current_user === 'two'">Set User Two</button>
              <button @click="setUser('three')" :disabled="current_user === 'three'">Set User Three</button>
            </div>
            <div v-else>
              <button @click="setUser()">Populate Model</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Vue Binding</h2>

    <card :model="$user" />

    <h2>Schema Transformation</h2>

    <table>
      <thead>
        <tr>
          <td>
            <h2>raw user data</h2>
          </td>
          <td>
            <h2>decoded user model</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre>{{ encoded }}</pre>
          </td>
          <td>
            <pre>{{ $user }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import card from './card'
import User from './user'

import users from './users_data'

export default {
  name: 'app',
  models: {
    user() {
      return new User()
    }
  },
  components: {
    card
  },
  created() {
    this.setUser()
  },
  data() {
    return {
      current_user: undefined
    }
  },
  computed: {
    encoded() {
      return this.$user.encode()
    }
  },
  methods: {
    setUser(number = 'one') {
      this.current_user = number
      this.$user = users()[number]
    },
    resetUser() {
      this.$user.reset()
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  padding: 0 30px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
}

p {
  margin: 0;
  padding-right: 40px;
}

table {
  width: 100%;
  margin-top: 30px;
}

table tbody {
  vertical-align: top;
}

td {
  padding: 0 12px;
  border: 1px solid #ccc;
}

.top {
  padding: 0;
}

.top td {
  padding: 0;
  border: 0;
}
</style>
