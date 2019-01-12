# vue-easy-localForage

This repo is a [localForage](https://github.com/localForage/localForage) storage driver for [Vue](https://github.com/vuejs/vue).

To use vue-easy-localForage, just drop a single JavaScript file after `vue.js` and `localforage.js` into your page:

```html
<script src="vue/dist/vue.js"></script>
<script src="localforage/dist/localforage.js"></script>
<script src="vue-easy-localforage/dist/vue-easy-localforage.js"></script>
<script>
  var vm = new Vue({
    el: '#app'
  })

  vm.$localforage.getItem('something', myCallback);
</script>
```

If you want to install with npm:
```bash
npm install vue-easy-localforage
```

ES Module:
```js
import Vue from 'vue'
import VueEasyLocalForage from 'vue-easy-localforage'

Vue.use(VueEasyLocalForage)
```

> When used with a module system, you must explicitly install Vue-easy-localforage via `Vue.use()`, but you don't need to do this when using global script tags.

CommonJS: 
```js
const Vue = require('Vue')
const VueEasyLocalForage = require('vue-easy-localforage')

Vue.use(VueEasyLocalForage)
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

The other api are same as [localForage](https://github.com/localForage/localForage), you can see the [documentation](https://localforage.github.io/localForage/).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
