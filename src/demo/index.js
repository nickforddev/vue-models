import Vue from 'vue'
import App from './demo.vue'

import VueModels from '../index.esm'
// import VueModels from '../../dist/vue-models'

Vue.config.productionTip = false

Vue.use(VueModels)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
