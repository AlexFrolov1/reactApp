const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
	new CleanWebpackPlugin(['dist']),
	new HtmlWebpackPlugin({
		title: 'Output Management'
	})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			loader: "babel-loader",
			test: /\.js$/, 
			exclude: /node_modules/
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}  
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'fonts/',
				publicPath: '../'
			}  
		}
		]
	}
};