'use strict'

import { install } from './install'
import { inBrowser } from './dom'

const VueLocalForage = {
  version: '__VERSION__',
  install
}

if (inBrowser && window.Vue) {
  window.Vue.use(VueLocalForage)
}

export default VueLocalForage
