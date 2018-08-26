import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'cheap-eval-source-map',
	entry: path.join(process.cwd(), 'src/index'),
	output: {
		filename: 'bundle.js',
		path: path.join(process.cwd(), 'build', 'js'),
		publicPath: '/js',
	},
	// plugins: [
	// 	webpack.NoEmitOnErrorsPlugin,
	// ],
	// resolve: {
	// 	extensions: ['.js', '.jsx']
	// },
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'eslint-loader',
			},
			{
				test: /\.js?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(s)?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	target: 'web',
	devServer: {
		contentBase: path.resolve(__dirname), // New
		historyApiFallback: true,
		publicPath: "/js/" // Both publicPath options should be the same as what is in your html loading the scripts
	},
};