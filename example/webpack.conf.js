const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const packageConfig = require('../package.json')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const env = 'development'

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

const devWebpackConfig = {
  mode: env,
  context: path.resolve(__dirname, './'),
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.css$/, use: ['css-loader'] }
    ]
  },
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-easy-localforage$': resolve('../src/index.esm.js'),
      '@': resolve('src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${env}"`
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      inject: true
    })
  ],
  // these devServer options should be customized in /config/index.js
  devServer: {
    contentBase: path.join(__dirname, '../examples'),
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.publicPath, 'index.html') }
      ]
    },
    hot: true,
    compress: true,
    host: HOST || config.host,
    port: PORT || config.port,
    open: config.autoOpenBrowser,
    overlay: config.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.publicPath,
    quiet: true,
    watchOptions: {
      poll: config.poll
    }
  }
}

const createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

module.exports = new Promise((resolve) => {
  // Add FriendlyErrorsPlugin
  devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`]
    },
    onErrors: config.notifyOnErrors
      ? createNotifierCallback()
      : undefined
  }))
  resolve(devWebpackConfig)
})
