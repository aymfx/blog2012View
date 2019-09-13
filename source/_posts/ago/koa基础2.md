---
title: koa基础2
categories:
  - 技术
tags:
  - 编程
  - 感悟
date: 2018-10-09 09:27:51
---

>  koa如何实现静态资源访问

 <!-- more -->   

### 先用原生实现，实现以下方法
 - 可以访问文本 gif，png，css， js，html
 - 访问静态目录
 - 找不到抛出404

``` js
//app.js
const Koa = require('koa')
const path = require("path")
const content = require("./koa-static/content")
const mimes = require("./koa-static/mimes")

const app = new Koa();

// 静态资源的目录
const staticPath = "./static"


// 解析资源类型

function parseMime(url){
  let extName = path.extname(url)
  extName = extName ? extName.slice(1):'unknow';
  return mimes[extName]
}

app.use(async ctx =>{
  //静态目录的绝对路径
  let fullStaticPath = path.join(__dirname,staticPath)

  // 获取静态资源内容，有可能是文件内容，目录，或404
  let _content = await content(ctx,fullStaticPath)

  // 解析请求内容的类型
  let _mime = parseMime(ctx.url)

  //如果有对应的文件类型，就配置上下文的类型
  if(_mime){
    ctx.type = _mime
  }

  // 输出静态资源内容

  if(_mime && _mime.indexOf('image/')>=0){
      ctx.res.writeHead(200)
      ctx.res.write(_content,"binary")
      ctx.res.end()
  } else{
    ctx.body = _content;
  }

})

app.listen(3000)
console.log('[demo] static-server is starting at port 3000')

//koa-static/content.js
const path = require('path')
const fs = require("fs")

// 封装读取目录的方法

const dir = require('./dir')

// 封装读取文件内容方法

const file = require('./file')

/**
 * 获取静态资源内容
 * @param  {object} ctx koa上下文
 * @param  {string} 静态资源目录在本地的绝对路径
 * @return  {string} 请求获取到的本地内容
 */

async function content(ctx, fullStaicPath) {
  // 封装请求资源的完绝对径
  let reqPath = path.join(fullStaicPath, ctx.url)
  // 判断请求路径是否为存在目录或者文件
  let exist = fs.existsSync(reqPath)
  // 返回请求内容， 默认为空
  let content = '';

  if (!exist) {
    //如果请求路径不存在，返回404
    content = '404 Not Found! o(╯□╰)o！'
  } else {
    //判断访问地址是文件夹还是文件
    let state = fs.statSync(reqPath)
    if (state.isDirectory()) {
      content = dir(ctx.url, reqPath)
    } else {
      content = await file(reqPath)
    }
  }
  return content
}

module.exports = content

//koa-static/dir.js
const url = require('url')
const fs = require('fs')
const path = require('path')

// 遍历读取目录的方法
const walk = require('./walk')
/**
 * 封装目录内容
 * @param  {string} url 当前请求的上下文中的url，即ctx.url
 * @param  {string} reqPath 请求静态资源的完整本地路径
 * @return {string} 返回目录内容，封装成HTML
 */

 function dir (url,reqPath){
  // 遍历读取目下的文件子目录
   let contentList = walk(reqPath)
   let html = `<ull>`;
   for (const [index,item] of contentList.entries()) {
      html = ` ${html}<li><a href="${url === '/' ? '':url}/${item}">${item}</a></li>`
   }
   html = ` ${html}</ul>`;
   return html;
 }

 module.exports =dir;

//koa-static/file.js
const fs = require('fs')

/* 
 * 读取文件方法
 * @param  {string} 文件本地的绝对路径
 * @return {string|binary}
*/

function file (filePath){
    let content = fs.readFileSync(filePath,'binary')
    return content;
}

module.exports = file;
//koa-static/walk.js
const fs = require('fs')

const mimes = require('./mimes')

/* 
 遍历读取目录内容（子目录，文件名）
 * @param  {string} reqPath 请求资源的绝对路径
 * @return {array} 目录内容列表
*/

function walk(reqPath){
    let files = fs.readdirSync(reqPath);
    let dirList = [],fileList = [];
    for(let i='0',len=files.length;i<len;i++) {
      let item = files[i];
      let itemArr = item.split('\.') //当为文件时。
      let itemMime = (itemArr.length>1) ? itemArr[itemArr.length-1]:"undefined"; 
      if(typeof mimes[itemMime] === "undefined"){
          dirList.push(files[i])
      } else{
         fileList.push(files[i])
      }
    }
    let result = dirList.concat(fileList);
    return result;
}

module.exports = walk;
//koa-static/mime.js

let mimes = {
  'css': 'text/css',
  'less': 'text/css',
  'gif': 'image/gif',
  'html': 'text/html',
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'js': 'text/javascript',
  'json': 'application/json',
  'pdf': 'application/pdf',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'swf': 'application/x-shockwave-flash',
  'tiff': 'image/tiff',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'wma': 'audio/x-ms-wma',
  'wmv': 'video/x-ms-wmv',
  'xml': 'text/xml'
}
module.exports = mimes
```

## 使用中间件实现功能

``` js

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa();

app.use(static(
    path.resolve(__dirname,'./static')
))

app.use(async ctx =>{
  ctx.body = `<a href="/static">来玩呀</a>`;
})

app.listen(3000)
console.log('[demo] static-server is starting at port 3000')
 
```

## koa2 使用cookie
 - ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
 - ctx.cookies.set(name, value, [options]) 在上下文中写入cookie

``` js
const Koa = require('koa')
const app = new Koa();

app.use(async ctx=>{
  if(ctx.url === '/index'){
    ctx.cookies.set('name','ly',{
      domain:"localhost",
      path:ctx.url,
      maxAge:10*60*1000,
      expires: new Date('2018-10-10'),
      httpOnly:false,
      overwrite:false
    })
    ctx.body = "cookie is ok"
  }else{
     ctx.body = 'hello ly'
  }
})

app.listen(3000)

```

## koa实现session操作 
 - koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。
 - koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
 -将sessionId和对应的数据存到数据库

 ``` js
const Koa = require('koa')
const app = new Koa();
const crypto = require('crypto')
const md5 = crypto.createHash('md5')
md5.update("我是最帅的");
let mm = md5.digest("hex")
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')


// 配置存储session信息的mysql

let store = new MysqlSession({
  user: 'root',
  password: "1095731371ldy",
  database: 'session',
  host: "123.206.130.247"
})

// 存放sessionId的cookie配置
let cookie = {
  maxAge: '', // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',

}
app.use(session({
  key: 'Session_ID',
  store,
  cookie
}))
let i = 1;

app.use(async ctx => {
  if (ctx.url === '/set') {
    ctx.session = {
      user_id: mm+Math.random().toString(36).substr(2),
      count: i++
    }2
    ctx.body = ctx.session
  } else {
    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  }
})

app.listen(3000)

 ```


