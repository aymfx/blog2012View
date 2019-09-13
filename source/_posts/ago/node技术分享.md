---
title: node技术分享
categories:
  - 技术
tags:
  - 编程
  - 感悟
date: 2018-07-10 17:48:05
---



> Node.js 是 JavaScript 在服务器端的一个运行环境，也是一个工具库，用来与服务器端其他软件互动。它的 JavaScript 解释器，采用了 Google 公司的 V8 引擎。是由 Ryan Dahl 写的。他做 nodejs 的初衷是为了做一个高性能是 web 服务器 简单的说 Node.js 就是运行在服务端的 JavaScript,于是对于前端工程师也就可以接触后台的东西了

 <!-- more --> 

## node 特点有哪些

- 事件驱动
  
  > node 中，客户端的链接，提交数据等都会触发相应的事件,每个事件都会进入一个事件队列，在事件的循环中，执行一些异步操作，比如查询数据库，获取磁盘文件，最后成功后会执行回调函数，这一过程不会阻塞新的事件。

* 非阻塞 I/O（异步 I/O）
  
  > 当在访问数据库数据的时候，需要一段时间进行 I/O 操作，在传统的单线程处理机制中，在执行了访问数据库代码之后，这个线程都将先停下来，等待数据库返回数据结果，才能执行后面的代码，也就是说 I/O 阻塞了线程的执行，极大的降低了程序的执行效率。

> 由于 Node.js 执行了非阻塞 I/O 机制，因此在执行了访问数据库代码之后，将立即执行后面的代码，把数据库执行返回结果的处理放到了代码的执行回调函数中，从而以提高了函数的执行效率。

> 当某个 I/O 执行完毕时，将以事件的形式通知执行 I/O 操作的线程，线程执行这个事件的回调函数，是为了处理异步 I/O，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。

> 在传统阻塞模式下，一个线程只能处理一项任务，要想处理连接的吞吐量必须通过多线程。而在 Node.js 这种非阻塞模式下，一个线程永远在执行计算操作，这个线程的 CPU 利用率永远是 100%，所以这是一种也别有哲理的设计方案，人多，但是好多人都闲着，还不如人少，往死里干活。

- 单线程
  
  > Node.js 不为每个客户连接创建一个新的线程。而仅仅使用一个线程，当有用户连接了，就会触发一个内部事件，通过非阻塞 I/O，事件驱动机制，让 Node.js 程序宏观上也是并行的，使用 Node.js，一个 8GB 的内存条，理论上就可以支持 40000 个用户连接了。另外单线程的好处就是，还有操作系统不在由创建，销毁销毁线程的时间。

## node 的优缺点

- 优点
  - 高并发（最重要的优点）
  - 适合 I/O 密集型应用
- 缺点
  - 不适合 CPU 密集型应用,由于是单线程如果进行长时间的计算（大循环）会导致 cpu 无法释放，后续的 i/o 不能发起
  - 代码的健壮性不高，一旦代码某个环节崩溃，整个系统都崩溃

解决方案（1）: 在代码设计阶段我们需要将可能的大型运算分解成多个小任务，使得运算能够适时释放，不阻塞 I/O 调用的发起

解决方案（2）:

- 1.Nnigx 反向代理，负载均衡，开多个进程，绑定多个端口
- 2.开多个进程监听同一个端口，使用 cluster 模块；也可以使用 forever 或 pm2 模块

### 创建一个最简单的服务器

```js
const http = require("http");

http
  .createServer(function(req, res) {
    res.end("Hello Node.js\n");
  })
  .listen(3000, "127.0.0.1");

console.log("服务运行在 http://127.0.0.1:3000/");
```

### 用 express 搭建 node 服务器

- 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
- Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能

```js
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

var server = app.listen(3000, function() {
  console.log("服务运行在 http://127.0.0.1:3000/");
});
```

#### 利用这个框架操作数据库 mysql，实现增删查改

- 先介一个模板 ejs

```js
var express = require("express");
var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", {
    name: "ly",
    age: "18"
  });
});

app.listen(3000, function() {
  console.log("服务运行在 http://127.0.0.1:3000/");
});
```

### 通过并发处理检测 node 的性能,(事件的轮询)

- 测试工具:ab

> ab 是 apache bench 命令的缩写

> ab 的原理：ab 命令会创建多个并发访问线程，模拟多个访问者同时对某一 URL 地址进行访问。它的测试目标是基于 URL 的，因此，它既可以用来测试 apache 的负载压力，也可以测试 nginx、lighthttp、tomcat、IIS 等其它 Web 服务器的压力

> ab 命令对发出负载的计算机要求很低，它既不会占用很高 CPU，也不会占用很多内存。但却会给目标服务器造成巨大的负载，其原理类似 CC 攻击。自己测试使用也需要注意，否则一次上太多的负载。可能造成目标服务器资源耗完，严重时甚至导致死机。

> ab -n1000 -c10 http://localhost:3000/ -n 表示测试会话中所执行的请求个数，-c 表示 一次产生的请求个数

- 单独一个线程运行的情况

```js
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        7570 bytes

Concurrency Level:      10
Time taken for tests:   3.167 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      7774000 bytes
HTML transferred:       7570000 bytes
Requests per second:    315.77 [#/sec] (mean)
Time per request:       31.668 [ms] (mean)
Time per request:       3.167 [ms] (mean, across all concurrent requests)
Transfer rate:          2397.29 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       1
Processing:    17   31   8.6     29      67
Waiting:       16   30   8.6     28      67
Total:         17   31   8.6     29      67

Percentage of the requests served within a certain time (ms)
  50%     29
  66%     32
  75%     34
  80%     36
  90%     43
  95%     49
  98%     58
  99%     62
 100%     67 (longest request)
```

- 开启多进程的性能情况

> 安装一个 pm2 包，进行开启多线程操作

> pm2 是一个带有负载均衡功能的 Node 应用的进程管理器.当你要把你的独立代码利用全部的服务器上的所有 CPU,并保证进程永远都活着,0 秒的重载, PM2 是完美的,

> PM2 （github 上的源码）是开源的基于 Nodejs 的进程管理器，包括守护进程，监控，日志的一整套完整的功能，基本是 Nodejs 应用程序不二的守护进程选择

> 命令行: pm2 start app.js -i max max 表示启用最大核心数，PM2 则会根据你 CPU 核心的数量来生成对应的工作线程

```js
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        7570 bytes

Concurrency Level:      10
Time taken for tests:   2.196 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      7774000 bytes
HTML transferred:       7570000 bytes
Requests per second:    455.34 [#/sec] (mean)
Time per request:       21.961 [ms] (mean)
Time per request:       2.196 [ms] (mean, across all concurrent requests)
Transfer rate:          3456.88 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       1
Processing:    10   21  10.7     17      82
Waiting:       10   21  10.6     17      82
Total:         10   21  10.7     18      82

Percentage of the requests served within a certain time (ms)
  50%     18
  66%     20
  75%     23
  80%     25
  90%     33
  95%     48
  98%     58
  99%     65
 100%     82 (longest request)
```

#### 开启集群

> 任何时候，如果你需要增加工作线程的数量，可以通过 pm2 scale <app name> <n>来对集群进行扩展。参数<n>指定工作线程的数量，被用来增加或减少集群数。你也可以通过 pm2 scale app +3 的方式来指定要增加多少工作线程。

```js
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        7570 bytes

Concurrency Level:      10
Time taken for tests:   2.344 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      7774000 bytes
HTML transferred:       7570000 bytes
Requests per second:    426.59 [#/sec] (mean)
Time per request:       23.441 [ms] (mean)
Time per request:       2.344 [ms] (mean, across all concurrent requests)
Transfer rate:          3238.62 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       1
Processing:    13   23  13.5     20     318
Waiting:       12   22  13.4     19     318
Total:         13   23  13.5     20     318

Percentage of the requests served within a certain time (ms)
  50%     20
  66%     22
  75%     23
  80%     25
  90%     31
  95%     39
  98%     57
  99%     79
 100%    318 (longest request)
```
