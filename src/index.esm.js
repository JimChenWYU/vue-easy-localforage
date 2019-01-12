'use strict'

import { install } from './install'
import { inBrowser } from './dom'

if (inBrowser && window.localforage === undefined) {
  window.localforage = require('localforage')
}

export default {
  version: '__VERSION__',
  install
}

export {
  install
}
