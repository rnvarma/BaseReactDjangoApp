var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var local_path = require('./mac-pc-compatability.js')

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve(local_path + '/assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: local_path + '/webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets:['react'] }}, // to transform JSX into JS
      { test: /\.css$/, loaders: ["style", "css", "postcss"]},
      { test: /\.scss$/, loaders: ["style", "css", "postcss", "sass"]},
      { test: /\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'},
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000"},
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file'},
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components', 'assets'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
}
