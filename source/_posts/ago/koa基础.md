---
title: koa基础
categories:
  - 技术
tags: koa
date: 2018-10-08 14:40:33
---



> 作为express框架的继承者koa，好像拥有了更多的优势了，体积更小，没有绑定任何多余的中间件，提供了一套优雅的方式async await 来操作中间件（由于koa2是基于async/await操作中间件，目前node.js 7.x的harmony模式下才能使用），采用类似堆栈的方式，先进后出的方式，一步步处理数据，下面的洋葱图充分说明了问题 参考 ：https://chenshenhai.github.io/koa2-note/

 <!-- more -->   

![洋葱图](https://blog-1251605472.cos.ap-shanghai.myqcloud.com/aymfx/2018/06/a.jpg)

## 写一个hello world 

``` js

const koa = require('koa')
const app = new koa();


app.use(async (ctx)=>{
  ctx.body = "hello,world";
})

app.listen(4000)

```

## 洋葱处理图

> 下面这个例子很好的解释了为啥叫洋葱图了

``` js
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  console.log("1")
  await next();
  console.log("2")
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log("3")
  await next();
  console.log("4")
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  console.log(5)
  ctx.body = 'Hello World';
});

app.listen(3000);

/* 
1
3
5
4
2
GET / - 3ms
*/

```

> 先进入第一个中间件，然后输出1 ,调用了es6的语法，等待下一个中间件返回结果，然后进入了第二个中间件，这里执行了3，然后又进入了下一个中间件，执行了5，这个中间的代码执行完返回上一个中间件继续往下走于是输出4，又继续返回上一个中间件，输出2 ，结果就是 13542 ，这就是类似于洋葱的结构图了

> 看官方演示动图

![官方](https://blog-1251605472.cos.ap-shanghai.myqcloud.com/aymfx/2018/06/middleware.gif)

## 写一个简单的中间件

> 对于koa的中间件都必须采用es7的async await写法来写

``` js
//简单的打印日志

// --- log.js
function log(ctx){
      console.log("打印下",ctx.method,ctx.host,ctx.url)
}


module.exports = function(){
    return async function(ctx,next) {
          log(ctx);
          await next();
    }
}

// app.js

const Koa = require('koa');
const app = new Koa();

const log = require('./log')

app.use(log())


app.use(async ctx => {
  console.log(5)
  ctx.body = 'Hello World';
});

app.listen(3000);
```
> 对于generate语法，我们需要一个方法进行转换
 - const convert = require('koa-convert')

## 写一个原生的路由

``` js
//app.js

const Koa = require('koa');
const app = new Koa();

const route = require('./route')

app.use(async ctx => {
      let html = await route(ctx);
      console.log(html,1995)
      ctx.body =html;
});

app.listen(3000);

// route.js
const fs = require("fs")

function getHtml(ctx) {
  return new Promise((res, rej) => {
    console.log("dasdasd")
    console.log(ctx.request.url)
    let path = "./views"
    if (ctx.request.url == "/") {
      path += '/index.html'
    } else {
      path = `${path}${ctx.request.url}.html`
    }
    if (!(fsExistsSync(path))) {
      path = "./views/404.html"
    }
    console.log(path)

    fs.readFile(path,"utf-8", (err, data) => {
      if (err) {
        console.log("出错了")
        rej(err)
      }
      console.log(data)
      res(data)
    })

  })
}

// 检测目录是否存在

function fsExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = async function (ctx) {
 return  await getHtml(ctx);

}
//自己再写个views目录，下面放几个html
```

### koa的路由的写法

``` js
const Koa = require('koa');
const router = require("koa-router");
const app = new Koa();

// 一个子路由
const home = new router();
home.get('/',async(ctx)=>{
     let html = `<ul><li><a href="/">首页</a></li><li><a href="/page/about">关于</a></li></ul>`;
     ctx.body = html;
})

//第二个子路由


const about = new router();
about.get('/about',async(ctx)=>{
     let html = `我是about`;
     ctx.body = html;
}).get('/404',async(ctx)=>{
  let html = `我是404`;
  ctx.body = html;
}
)

// 装载两个路由

const route = new router();

route.use('/',home.routes(),home.allowedMethods())
route.use('/page',about.routes(),about.allowedMethods())


// 加载路由中间件
app.use(route.routes()).use(route.allowedMethods())

app.listen(3000);

```
## 获取get请求的参数

> 通过ctx.query,ctx.querystring,以及ctx.request.query,ctx.request.querystring来获取

``` js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    
  let url = ctx.url
  let requst_query = ctx.request.query
  let requst_querystring = ctx.request.querystring;
  let query = ctx.query;
  let querystring = ctx.querystring;
  ctx.body = {
    url,
    requst_query,
    requst_querystring,
    query,
    querystring
  }
})


app.listen(3000);
```

## 对于post请求，koa没有很好的处理，我们需要自己用原生方法将他封装自己想要的东西

``` js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  if (ctx.url == '/' && ctx.method==="GET") {
    let html = `
         <h1>koa2 request post demo</h1>
         <form method="POST" action="/api/data">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
          </form> 
          `;
      ctx.body = html
  }else if(ctx.url == '/api/data' && ctx.method==="POST"){
      let postData = await parsePostData(ctx);
      ctx.body =postData
  }else{
      ctx.body = "有错误啊"
  }
})

function parsePostData(ctx){
  return new Promise((res,rej)=>{
      try {
        let postdata = "";
        ctx.req.addListener('data',data=>{
          postdata +=data;
        })
        ctx.req.addListener('end',()=>{
          res(parseQueryStr(postdata))
        })
      } catch (error) {
          rej(error)
      }
  })
}

function parseQueryStr(querystr){
     let queryData = {};
     let queryStrList = querystr.split('&')
     console.log(queryStrList);

     for (const [index,queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
     }
     return queryData;
}


app.listen(3000);
```

### 第三方插件助力post请求

``` js
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')


app.use(bodyParser())

app.use(async ctx => {
  if (ctx.url == '/' && ctx.method==="GET") {
    let html = `
         <h1>koa2 request post demo</h1>
         <form method="POST" action="/api/data">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
          </form> 
          `;
      ctx.body = html
  }else if(ctx.url == '/api/data' && ctx.method==="POST"){
      let postData =ctx.request.body
      ctx.body =postData
  }else{
      ctx.body = "有错误啊"
  }
})
app.listen(3000);
```


