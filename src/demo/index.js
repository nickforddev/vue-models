import Vue from 'vue'
import App from './App'

import VueModels from '../index'
Vue.config.productionTip = false

Vue.use(VueModels)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
