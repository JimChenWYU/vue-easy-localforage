import Vue from 'vue'
import App from './App'

import VueLocalforage from 'vue-localforage'
Vue.use(VueLocalforage)

new Vue({
  el: '#app',
  render: h => h(App)
})
