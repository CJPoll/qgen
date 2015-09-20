var path, webpack, config;

path = require('path');
webpack = require('webpack');

config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: './app/javascripts/components.js'
};

config.module = {
  loaders: [
    {
      test: /\.jsx$/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    }
  ]
}

config.output = {
  path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  filename: 'bundle.js',
  public_path: '/assets'
};

config.resolve = {
  extensions: ['', '.js', '.jsx', '.coffee'],
  modulesDirectories: [ 'node_modules', 'bower_components' ]
},

config.plugins = [
  new webpack.ResolverPlugin([
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
  ])
];
