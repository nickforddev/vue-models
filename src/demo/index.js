import Vue from 'vue'
import App from './app.vue'

import VueModels from '../../dist/vue-models.esm'
// import VueModels from '../index'
Vue.config.productionTip = false

Vue.use(VueModels)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
