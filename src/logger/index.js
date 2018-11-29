class Logger {
  // Log levels as per https://tools.ietf.org/html/rfc5424
  static get ERROR () { return 0 }
  static get WARN () { return 1 }
  static get INFO () { return 2 }
  static get DEBUG () { return 3 }

  static get LEVEL_NAMES () { return ['ERROR', 'WARN', 'INFO', 'DEBUG'] }

  constructor (options) {
    this.level = options.level || Logger.INFO;
    this.filename = options.filename || 'unknown';
  }

  log (level, consoleArgs) {
    let message = consoleArgs.shift();

    if (level <= this.level) {
      let log = [`[${new Date().toISOString()}] [${this.filename}] [${Logger.LEVEL_NAMES[this.level]}] - ${message}`];

      if (consoleArgs.length > 0) {
        log = log.concat(consoleArgs);
      }
      console.log.apply(console, log);
    }
  }

  error (consoleArgs) {
    this.log(Logger.ERROR, consoleArgs);
  }

  warn (consoleArgs) {
    this.log(Logger.WARN, consoleArgs);
  }

  info (consoleArgs) {
    this.log(Logger.INFO, consoleArgs);
  }

  debug (consoleArgs) {
    this.log(Logger.DEBUG, consoleArgs);
  }
}

export default function (filename) {
  let logger = new Logger({ filename });

  return {
    error: function () { logger.error(Array.from(arguments)) },
    warn: function () { logger.warn(Array.from(arguments)) },
    info: function () { logger.info(Array.from(arguments)) },
    debug: function () { logger.debug(Array.from(arguments)) }
  };

}
