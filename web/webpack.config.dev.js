const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, '..', 'src');

const indexHtmlPath = path.resolve(__dirname, 'index.html');

const faviconPath = path.resolve(__dirname, 'favicon.ico');

const buildPath = path.join(__dirname, 'build');

module.exports = {
	devServer: {
		port: 3000,
	},
	devtool: 'source-map',
	entry: [path.join(srcPath, 'index')],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		alias: {
			contracts: path.resolve('contracts'),
		},
		extensions: ['.web.js', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					srcPath,
					path.resolve(__dirname, '../node_modules/react-native-typography'),
				],
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['babel-preset-react-native'],
						plugins: ['react-native-web'],
					},
				},
			},
			{
				test: /\.(gif|jpe?g|png|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			},
			{
				test: /\.sol/,
				use: [
					{
						loader: 'json-loader',
					},
					{
						loader: 'truffle-solidity-loader',
						options: {
							migrations_directory: path.resolve(__dirname, '../migrations'),
							network: 'development',
							contracts_build_directory: path.resolve(
								__dirname,
								'../dist/contracts'
							),
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: indexHtmlPath,
			favicon: faviconPath,
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	},
		// }),
		new webpack.ProvidePlugin({
			Web3: 'web3',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"',
		}),
	],
};
