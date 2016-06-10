var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [
  new ExtractTextPlugin('bundle.css')
];

if (process.env.PRODUCTION) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
	entry: './app/index.js',
	output: {
    path: 'public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url?limit=10000'
      }
		]
	},
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'app/shared')
    }
  },
  plugins: plugins
};
