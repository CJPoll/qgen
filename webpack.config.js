var path, webpack, config;

path = require('path');
webpack = require('webpack');

config = module.exports = {
	// the base path which will be used to resolve entry points
	context: __dirname,
	// the main entry point for our application's frontend JS
	entry: {
		bundle: './app/javascripts/components.js',
		create_character: './app/javascripts/routerSetup.js'
	}
};

config.module = {
	loaders: [
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
		}
	]
};

config.output = {
	path: path.join(__dirname, 'app', 'assets', 'javascripts'),
	filename: '[name].entry.js',
	public_path: '/assets'
};

config.resolve = {
	extensions: ['', '.js', '.jsx', '.coffee'],
	modulesDirectories: [ 'node_modules', 'bower_components' ]
};

config.plugins = [
	new webpack.ResolverPlugin([
		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
	])
];
