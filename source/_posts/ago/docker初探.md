---
title: docker初探
categories:
  - 技术
tags: docker
date: 2018-07-21 15:58:53
---

>docker初探

 <!-- more -->   

## 安装

> sudo yum install docker

### 启动 Docker 后台服务

> service docker start

### 停止 Docker 后台服务

> service docker stop

### 安装加速镜像

> vi /etc/docker/daemon.json

```js
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
```

### 测试运行 hello-world

## 警告

WARNING: IPv4 forwarding is disabled. Networking will not work.

> vi /etc/sysctl.conf

```js
net.ipv4.ip_forward = 1;
```

> 重启 network 服务 systemctl restart network

> 查看是否修改成功 sysctl net.ipv4.ip_forward

> 成功返回 net.ipv4.ip_forward = 1

## 命令

### 查看容器是否在运行

> docker ps

### 在 ubuntu:15.10 的镜像下用 /bin/echo 输出 "Hello world" 如果不存在镜像，先下载再运行

> docker run ubuntu:15.10 /bin/echo "Hello world"

### docker run -i -t ubuntu:15.10 /bin/bash

- t:在新容器内指定一个伪终端或终端。
- i:允许你对容器内的标准输入(STDIN) 进行交互。

ctrl+D 退出新容器创建的终端

### 在容器内使用 docker logs 命令，查看容器内的标准输出

> docker ps

| CONTAINER ID |        IMAGE |                COMMAND |       CREATED |       STATUS | PORTS |        NAMES |
| ------------ | -----------: | ---------------------: | ------------: | -----------: | ----: | -----------: |
| 22e838e0b7a9 | ubuntu:15.10 | "/bin/sh -c 'while..." | 8 minutes ago | Up 8 minutes |       | sharp_darwin |

通过 CONTAINER ID 或者 NAMES 查看运行日志

> docker logs 22e838e0b7a9

> docker logs sharp_darwin

### 停止容器

> docker stop 22e838e0b7a9

> docker stop sharp_darwin

## 创建一个 node web 服务

### 拉取 node 镜像

> docker pull node

### 查看镜像是否下载

> docker image

### 创建 package.json

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3"
  }
}
```

### Dockerfile

```js
FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start
```

### app.js

```js
"use strict";

var express = require("express");

var PORT = 3000;

var app = express();
app.get("/", function(req, res) {
  res.send("Hello Docker\n");
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
```

### 建一个文件夹

> mkdir app

> cd app

> 把所有文件放到里面

### 当前文件夹执行下列命令

> docker build -t mynodeapp . 创建 image

> docker image 查看我们创建的镜像

### 运行镜像

> docker run -d -p 3000:3000 297513a264fd

- -d 容器会在后台运行
- -p 表示端口映射，把本机的 3000 映射到容器的 3000 端口这样外网就能通过本机的 3000 访问我们的 web 了
- 297513a264fd 我们的 image id

### 可以访问成功

-\_-开心
