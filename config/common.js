/*
 * 公共的的配置文件
 * */
const path = require('path')
module.exports = {
    env: process.env.NODE_ENV, //环境
    port: '4000', //端口号
    baseLogUrl: path.resolve(__dirname, '../logs'),
}
