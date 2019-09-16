/*
 * 日志的记录
 *
 * */
const { baseLogUrl } = require('../config/index.js')
const log4js = require('log4js')
const path = require('path')
const levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal']
const baseLog = {
    appenders: {
        console: {
            type: 'console',
        },
        info: {
            type: 'dateFile',
            filename: path.resolve(baseLogUrl, 'info/info.log'),
            pattern: '.yyyy-MM-dd',
            daysToKeep: 30,
            keepFileExt: true,
            compress: true,
        },
    },
    categories: {
        default: {
            appenders: ['console', 'info'],
            level: levels[0],
        },
        access: {
            appenders: ['console', 'info'],
            level: levels[1],
        },
    },
}

log4js.configure(baseLog)

//普通输出
let log_console = log4js.getLogger()

module.exports = log = {
    log: (type, ...message) => {
        if (levels.includes(type)) {
            log_console[type](...message)
        } else {
            log_console.trace(...message)
        }
    },
}
