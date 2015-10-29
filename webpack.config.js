var path = require('path');
var webpack = require('webpack');
var plugins = [];

if (process.env.PRODUCTION) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'app/shared')
    }
  },
  plugins: plugins
};
