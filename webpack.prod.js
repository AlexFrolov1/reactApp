const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common.js');


module.exports = merge(common, {
	devtool: 'source-map',
			module: {
		rules: [
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				loader: 'css-loader',
				options: {
				minimize: true || {/* CSSNano Options */}
			}
		})
		}
		]
	},
	plugins: [
	new ExtractTextPlugin('css/bundle.css'),
	new UglifyJSPlugin({
		sourceMap: true
	})
	]
})