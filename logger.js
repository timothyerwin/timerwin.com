const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      filename: 'app.log',
      json: false,
      timestamp: () => new Date()
    }),
    new winston.transports.Console({
      colorize: true,
      timestamp: () => new Date()
    })
  ]
});

const safeLog = (method, ...args) => {
  try {
    logger[method](...args);
  } catch (e) {
    console.error('Fatal exception occured during logging.', e.message, e);
  }
};

module.exports = {
  debug: (...args) => safeLog('debug', ...args),
  trace: (...args) => safeLog('trace', ...args),
  info: (...args) => safeLog('info', ...args),
  error: (...args) => safeLog('error', ...args)
};
