var webpack = require('webpack');

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.es6$|\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=5']
      }
    ]
  },
  resolve: {
    //all these extensions will be resolved without specifying extension in the `require` function
    extensions: [
      '', '.js', '.jsx'
    ],
    //files in these directory can be required without a relative path
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [new CommonsChunkPlugin({name: 'commons', filename: 'commons.js', minChunks: 0})]
};
