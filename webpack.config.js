var path, webpack, config;

path = require('path');
webpack = require('webpack');

config = module.exports = {
	// the base path which will be used to resolve entry points
	context: __dirname + '/app',
	// the main entry point for our application's frontend JS
	entry: {
		application: './javascripts/appSetup.js',
		devise: './javascripts/loginSetup.js'
	}
};

config.module = {
	loaders: [
		{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.css$/,
			loader: 'style!css'
		},
		{
			test: /\.jsx$/,
			loader: 'jsx-loader?insertPragma=React.DOM&harmony'
		},
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.jsx$/,
			loader: 'babel-loader'
		},
		{
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}
	]
};

config.output = {
	path: path.join(__dirname, 'public'),
	filename: '[name].js',
	public_path: 'javascripts/'
};

config.resolve = {
	root: path.join(__dirname),
	extensions: ['', '.js', '.jsx', '.coffee', '.css', '.scss'],
	modulesDirectories: [ 'node_modules', 'bower_components' ]
};

config.plugins = [
	new webpack.ResolverPlugin([
		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
	])
];
