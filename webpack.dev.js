const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
		module: {
		rules: [
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				loader: 'css-loader',
				options: {
				minimize: false
			}
		})
		}
		]
	},
		plugins: [
	new ExtractTextPlugin('css/bundle.css')
	]
});