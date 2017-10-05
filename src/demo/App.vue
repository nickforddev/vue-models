<template>
  <div id="app">
    <h1>vue-models</h1>
    <button @click="setUser">Set User</button>
    <button @click="resetUser">Reset User</button>
    <h2>decoded model:</h2>
    <pre>{{ $user }}</pre>
    <h2>encoded model:</h2>
    <pre>{{ encoded }}</pre>
  </div>
</template>

<script>
import User from './user'
export default {
  name: 'app',
  models: {
    user() {
      return new User()
    }
  },
  computed: {
    encoded() {
      return this.$user.encode()
    }
  },
  methods: {
    setUser() {
      this.$user = {
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
              $oid: '09a11c25c5cb7a7b57d65324"'
            },
            created: {
              $date: '2016-12-16T00:00:00'
            }
          }
        ]
      }
    },
    resetUser() {
      this.$user.reset()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  padding: 30px;
}
</style>
