# vue-localForage

This repo is a [localForage](https://github.com/localForage/localForage) storage driver for [Vue](https://github.com/vuejs/vue)

To use vue-localForage, just drop a single JavaScript file after `vue.js` and `localforage.js` into your page:

```html
<script src="vue/dist/vue.js"></script>
<script src="localforage/dist/localforage.js"></script>
<script src="vue-localforage/dist/vue-localforage.js"></script>
<script>
  var vm = new Vue({
    el: '#app'
  })

  vm.$localforage.getItem('something', myCallback);
</script>
```

If you want to install with npm:
```bash
npm install vue-localforage
```

ES Module:
```js
import Vue from 'vue'
import VueLocalForage from 'vue-localforage'

Vue.use(VueLocalForage)
```

> When used with a module system, you must explicitly install Vue-localforage via `Vue.use()`, but you don't need to do this when using global script tags.

CommonJS: 
```js
const Vue = require('Vue')
const VueLocalForage = require('vue-localforage')

Vue.use(VueLocalForage)
```

## How to use

### Use by a vue instance
```js
let val1 = vm.$localforage.getItem('foo')
```

### Use by a vue global property
```js
let val2 = Vue.localforage.getItem('foo')
```

Two ways are equivalent.

The other api is same as [localForage](https://github.com/localForage/localForage), you can see the [documentation](https://localforage.github.io/localForage/).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
