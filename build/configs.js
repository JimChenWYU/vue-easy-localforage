const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const packageJson = require('../package.json')
const version = process.env.VERSION || packageJson.version
const name = process.env.NAME || packageJson.name

const banner =`/**
* ${name} v${version}
* (c) ${new Date().getFullYear()} Jim Chen
* @license MIT
*/`

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  umdDev: {
    input: resolve('src/index.js'),
    file: resolve(packageJson.unpkg),
    format: 'umd',
    env: 'development'
  },
  umdProd: {
    input: resolve('src/index.js'),
    file: resolve(packageJson.uglify),
    format: 'umd',
    env: 'production'
  },
  commonjs: {
    input: resolve('src/index.js'),
    file: resolve(packageJson.main),
    format: 'cjs'
  },
  esm: {
    input: resolve('src/index.esm.js'),
    file: resolve(packageJson.module),
    format: 'es'
  }
}

function genConfig (opts) {
  const config = {
    input: {
      input: opts.input,
      plugins: [
        replace({
          __VERSION__: version
        }),
        buble()
      ]
    },
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'VueLocalForage'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }
  
  return config
}

function mapValues (obj, fn) {
  const res = {}
  Object.keys(obj).forEach(key => {
    res[key] = fn(obj[key], key)
  })
  return res
}

module.exports = mapValues(config, genConfig)
