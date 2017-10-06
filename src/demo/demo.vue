<template>
  <div id="app">
    <h1>vue-models</h1>
    <p>
      Below is a demonstration of using custom types in a model schema to decode 
      <a href="https://docs.mongodb.com/manual/reference/mongodb-extended-json/" target="_blank">extended json</a> 
      from MongoDB. The data is flattened for use client-side, and then re-encoded
      to extended json when saving, or as otherwise needed.
    </p>
    <div v-if="$user.role">
      <button @click="resetUser">Clear Model</button>
    </div>
    <div v-else>
      <button @click="setUser">Populate Model</button>
    </div>

    <h2>Vue Binding</h2>

    <card :model="$user" />

    <div v-if="$user.things.length">
      <h2>$user.things</h2>
      <div class="item" v-for="(item, index) in $user.things" :key="index">
        {{ item }}
      </div>
    </div>

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

const defaults = {
  id: {
    $oid: '586e6d75b7a7bc5c852c60a5'
  },
  created: {
    $date: '2016-12-16T00:00:00'
  },
  updated: '2016-12-16T00:00:00',
  role: 'admin',
  first_name: 'Tony',
  last_name: 'Tiger',
  email: 'tonytiger@gmail.com',
  notifications: {
    alarm: {
      $date: '2016-12-16T00:00:00'
    },
    test: {
      one: {
        $date: '2016-12-16T00:00:00'
      },
      two: {
        three: {
          $date: '2016-12-16T00:00:00'
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
        $date: '2016-12-16T00:00:00'
      }
    },
    {
      id: {
        $oid: '09a11c25c5cb7a7b57d65324'
      },
      created: {
        $date: '2016-12-16T00:00:00'
      }
    }
  ]
}

export default {
  name: 'app',
  models: {
    user() {
      return new User(defaults)
    }
  },
  components: {
    card
  },
  computed: {
    encoded() {
      return this.$user.encode()
    }
  },
  methods: {
    setUser() {
      this.$user = defaults
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
</style>
