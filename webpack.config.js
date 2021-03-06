/**
 * webpack configure for exblog
 * Author: umiyo
 * Date: 2016-11-25
 */
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: {
		'index': path.resolve(ROOT_PATH, 'src/app.js')
	},
	output: {
		path: path.resolve(ROOT_PATH, 'dist/assets'),
		filename: 'js/[name].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test:/\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('css/[name].css')
	]
}
