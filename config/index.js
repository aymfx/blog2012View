/*
 * 配置文件
 * */
const baseConf = require('./common')
const devConf = require('./dev')
const proConf = require('./pro')

if (baseConf.env == 'development') {
    module.exports = devConf
} else {
    module.exports = proConf
}
