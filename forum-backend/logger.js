const winston = require("winston");

const consoleTransport = new winston.transports.Console({
  level: "silly",
  handleExceptions: true,
  handleRejections: true,
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.level} : ${info.message}`)
  ),
});

const logger = winston.createLogger({
  transports: [consoleTransport],
});

module.exports = logger;
