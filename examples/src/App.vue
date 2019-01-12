<template>
  <div class="text-center">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello Vue App'
    }
  },
  created () {
    this.$localforage.setItem('foo', 'bar')
  },
  async mounted () {
    const val1 = await this.$localforage.getItem('foo')
    const val2 = await Vue.localforage.getItem('foo')

    console.log(val1, val2)
  }
}
</script>
