var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './app/index.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    modulesDirectories: ['node_modules', 'vendor']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    )
  ]
};
