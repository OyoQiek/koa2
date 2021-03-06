/**
 * 日志存储
 * @author xbz
 */
const log4js = require('log4js')

const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
}

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    debug: {
      type: 'file',
      filename: 'logs/DEBUG/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true // 设置文件名称为filename + pattern
    },
    info: {
      type: 'file',
      filename: 'logs/all.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/ERROR/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true // 设置文件名称为filename + pattern
    }
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'debug'
    },
    debug: {
      appenders: ['debug', 'console'],
      level: 'debug'
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    }
  }
})

/**
 * 日志输出，level未debug
 * @param {string} content 
 */
exports.debug = (content) => {
  let logger = log4js.getLogger('debug')
  logger.level = levels.debug
  logger.debug(content)
}

/**
 * 日志输出，level未error
 * @param {string} content 
 */
exports.error = (content) => {
  let logger = log4js.getLogger('error')
  logger.level = levels.error
  logger.error(content)
}


/**
 * 日志输出，level未info
 * @param {string} content 
 */
 exports.info = (content) => {
  let logger = log4js.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}