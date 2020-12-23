---
title: HTML面试题
date: 2017-12-28
categories:
  - 面试
tags:
  - html
---

Doctype 作用？标准模式与兼容模式各有什么区别?

- 声明处于文档的第一行，告诉浏览器用文档标准什么解析 html
- 标准模式按照浏览器的最高标准运行
- 兼容模式 使用向后兼容的方式运行

### HTML5 为什么只需要写 `<!DOCTYPE HTML>`？

- html5 不是基于 SGML 标准来写的，不需要对 DTD 的引用
- html4 以及以下都是基于 SGML 的，所以需要对 DTD 的引用

### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些

- 行内元素，dispaly:inline 的元素：主要有 span em i strong
- 块级元素，display:block 的元素：div ul ol dl dt dd h1~h6 p
- 空元素 br hr img input link meta

### 页面导入样式时，使用 link 和@import 有什么区别？

- link 是 html 标签兼容性好 @import 是 css2.1 提出的 只能被 ie5 以上识别
- link 还能加载除 css 以外的 rss，定义 rel 链接属性，而@import 只能导入 css
- 页面被加载时 link 会被同时加载，而@important 要等到页面加载完才加载
- link 支持 js 操作 dom 改变样式 而@important 不行

### 介绍一下你对浏览器内核的理解？

- 分成两部分:渲染引擎和 js 引擎
- 渲染引擎 ：主要负责获取页面内容 整理信息，计算页面的显示方式，输出到页面
- js 引擎: 解析和执行 js 代码
- 由于 js 引擎越来越来越独立，一般说的内核指的都是渲染引擎

### 常见的浏览器内核有哪些？

- trident:ie 内核
- gecko：火狐的内核
- presto：欧朋的内核
- webkit：谷歌和 safari 的内核

### html5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

- 新特性
  - 支持 canvas
  - 支持 audio 和 video
  - 支持离线存储以及 localstorage
  - 新表单 date time emal url 等
  - webworker websocket geolocation
- 移除的元素
  - 纯表现的元素 s u tt big 等
  - 产生负面的元素 frame frameset 等
- 支持的新标签
  - legned
  - section atricle main header footer
- 主要通过文档声明判断 一般来说 sgml 标准的都是 h5 之前的

### 简述一下你对 HTML 语义化的理解？

- 让标签做正确的事
- 是结构更清晰，没有 css 也能阅读
- 便于 seo
- 便于维护代码

### HTML5 的离线储存怎么使用，工作原理能不能解释一下？

- 离线存储使使用

  1. 页面头部需要加入 manifest 的属性
  2. 在 cache.manifest 文件编写离线存储的资源
  3. 在离线状态，操作 window.applicationCache 进行需求实现

- 原理:HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，通过

- 这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

  [资源展示]: https://yanhaijing.com/html/2014/12/28/html5-manifest/ "离线介绍"
  [离线]: https://segmentfault.com/a/1190000000732617 "哈哈萨达"

### 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？

- 在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

- 离线的情况下，浏览器就直接使用离线存储的资源。

### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

```js
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
  cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
  sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

  存储大小：
  	cookie数据大小不能超过4k。
  	sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

  有期时间：
  	localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
  	sessionStorage  数据在当前浏览器窗口关闭后自动删除。
  	cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

### Label 的作用是什么？是怎么用的？

```
label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
```

### HTML5 的 form 如何关闭自动完成功能？

```
给不想要提示的 form 或某个 input 设置为 autocomplete=off。
```

### 如何实现浏览器内多个标签页之间的通信? (阿里)

```
1.调用websocket
2.localStorage
3.webworker
```

### webSocket 如何兼容低浏览器？(阿里)

```
Adobe Flash Socket 、
  ActiveX HTMLFile (IE) 、
  基于 multipart 编码发送 XHR 、
  基于长轮询的 XHR
```

### 页面可见性（Page Visibility API） 可以有哪些用途？

```
通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
  在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
```

### 如何在页面上实现一个圆形的可点击区域？

```
  1、map+area或者svg
  2、border-radius
  3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
```

### 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果

```
<div style="height:1px;overflow:hidden;background:red"></div>
```
