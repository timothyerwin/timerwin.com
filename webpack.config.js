const webpack = require('webpack');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const entry = ['app.jsx'];

if (dev) {
  entry.push('webpack-hot-middleware/client');
}

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'app.js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: dev ? 'eval' : 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/, // Transform all .js files required somewhere with Babel
        loaders: dev ? ['react-hot', 'babel-loader'] : ['babel-loader'],
        exclude: /node_modules/
      }, {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader', {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      // stop trying to make fetch happen! it's not happening!
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
      validator: 'exports-loader?self.validator!validator'
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname, 'react'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  }
};
