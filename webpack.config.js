/*

  ./webpack.config.js

*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = {
    entry: './client/index.js',
    output: {
	path: path.resolve('dist'),
	filename: '[name].bundle.js'
    },
    module: {
	loaders: [
	    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	    { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
	    { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader', exclude: /node_modules/ },
	    { test: /\.css$/,
	      use: ExtractTextPlugin.extract({
		  fallback: "style-loader",
		  use: [
		      { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
		      'postcss-loader'
		  ]
	      }), exclude: /node_modules/
	    }
	]
    },
    plugins: [
	CleanWebpackPluginConfig,
	HtmlWebpackPluginConfig,
	ExtractTextPluginConfig
    ]
}
