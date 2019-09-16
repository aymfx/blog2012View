/*
 * 存放路由的位置
 * */
const Router = require('koa-router')
const Api = require('./api/index')
let router = new Router()
router.use('/api', Api.routes(), Api.allowedMethods())

module.exports = router
