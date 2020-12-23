---
title: http面试题
date: 2017-12-28
categories:
  - 面试
tags:
  - http
---

## 1.http 和 https 的区别

- http 访问的是 80 端口 https 访问的是 443
- http 传输是明文传输，https 对数据会进行加密处理
- http 不需要证书，https 需要 CA 机构颁发的证书

## 2.常见的状态码有哪些

- 1xx：请求已接收，正在处理
- 2xx：处理成功
  - 204：请求被受理但是没有资源返回
- 3xx：重定向
  - 301：永久重定向
  - 302：临时重定向
  - 304：使用缓存
  - 307：临时重定向 强制使用 POST
- 4xx：客户端错误
  - 401：需要认证
  - 403：禁止访问
  - 404：未找到地址
  - 405：方法错误
- 5xx：服务端错误
  502：错误的网关
  503：服务器忙

## http 请求方式有哪些

- get
- post
- put
- delete
- head
- options

## http 请求报文和相应报文格式

请求报文

- 请求行 包含请求方法、URI、HTTP 版本信息
- 请求首部字段
- 请求体
- 空行

响应报文

- 状态行 包含 HTTP 版本、状态码、状态码的原因短语
- 相应首部字段
- 相应实体内容
- 空行

## 常见的 http 首部字段

请求首部字段

- Cache-control
- Content-type
- Cookie
- Host
- Origin
- Referer
- User-Agent
- Accept

相应首部字段

- Access-Control-Allow-Origin
- Cache-Control
- server
- Date
- Content-Type
- status

## 什么是 Http 协议无状态协议?

- http 无状态协议指的是在完成一次 http 请求之后，当下一次请求依然来自这个客户端，服务器是无法感知的。

## 怎么解决 Http 协议无状态协议?

- 通过设置 jwt 来设置获取通行证
- 通过设置 header 增加 token 字段来判断
- 采用 auth2 的协议，通过第三方进行校验识别

## HTML css
