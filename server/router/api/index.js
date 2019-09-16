/*
 * 这里放的是api接口层
 *
 * */
const Router = require('koa-router')
let Api = new Router()
Api.get('/app', async (ctx) => {
    ctx.body = '获取成功l'
})

module.exports = Api
