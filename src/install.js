'use strict'
/* global localforage */
export function install (_Vue, options = {}) {
  if (localforage === undefined) {
    throw new Error("global 'localforage' is undefined.")
  }

  const factory = {
    instance: null,
    createInstance (options) {
      if (this.instance === null) {
        this.instance = localforage.createInstance(options)
      }
      return this.instance
    }
  }

  Object.defineProperty(_Vue.prototype, '$localforage', {
    get () {
      return factory.createInstance(options)
    }
  })

  Object.defineProperty(_Vue, 'localforage', {
    get () {
      return factory.createInstance(options)
    }
  })
}
