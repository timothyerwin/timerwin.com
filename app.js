const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'web')));
app.use(webpackDevMiddleware(compiler, { quiet: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(require('./routes/contact'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/web') });
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
