import Vue from 'vue'
import App from './App'

import VueEasyLocalforage from 'vue-easy-localforage'
Vue.use(VueEasyLocalforage)

new Vue({
  el: '#app',
  render: h => h(App)
})
