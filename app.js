/*
 * 应用启动入口
 * */

const compose = require('koa-compose')
const koaStatic = require('koa-static')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const path = require('path')
const Koa = require('koa')
// require('./utils/spiders')
const app = (module.exports = new Koa())

const { port, env } = require('./config/index.js')

const { log } = require('./utils/log')

const router = require('./server/router/index')

// 创建一个数组 存放中间件
const list = []

// 获取body数据

list.push(bodyParser())

// 开启压缩

list.push(
    compress({
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH,
    })
)

// 设置模板目录

list.push(
    views(path.join(__dirname, './server/pages'), {
        extension: 'ejs',
    })
)

// 配置路由
list.push(router.routes())
list.push(router.allowedMethods())

// // // 设置静态目录
list.push(koaStatic(path.join(__dirname, 'blog')))

app.use(compose(list))

//监听4000端口

app.listen(port, () => {
    log('info', `目前监听在:${port},现在处于${env}`)
})
