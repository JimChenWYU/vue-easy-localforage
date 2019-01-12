/**
* vue-easy-localforage v1.0.0
* (c) 2019 Jim Chen
* @license MIT
*/
/* global localforage */
function install (_Vue, options) {
  if ( options === void 0 ) options = {};

  if (localforage === undefined) {
    throw new Error("global 'localforage' is undefined.")
  }

  var factory = {
    instance: null,
    createInstance: function createInstance (options) {
      if (this.instance === null) {
        this.instance = localforage.createInstance(options);
      }
      return this.instance
    }
  };

  Object.defineProperty(_Vue.prototype, '$localforage', {
    get: function get () {
      return factory.createInstance(options)
    }
  });

  Object.defineProperty(_Vue, 'localforage', {
    get: function get () {
      return factory.createInstance(options)
    }
  });
}

/* @flow */

var inBrowser = typeof window !== 'undefined';

if (inBrowser && window.localforage === undefined) {
  window.localforage = require('localforage');
}

var index_esm = {
  version: '1.0.0',
  install: install
};

export default index_esm;
export { install };
