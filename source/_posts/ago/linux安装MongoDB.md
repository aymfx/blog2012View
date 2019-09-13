---
title: linux安装MongoDB
categories:
  - 技术
tags: mongose
date: 2018-07-01 15:01:15
---

> linux安装MongoDB

 <!-- more -->   

## 下载

> 官网地址

- https://www.mongodb.com/download-center#atlas

> 我下的版本

- curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-4.0.0.tgz

## 解压存放

> 我的存放位置 /usr/local/mongose

- cp -r mongodb-linux-x86_64-rhel62-4.0.0.tgz /usr/local/mongose

> 解压

- tar -zxvf mongodb-linux-x86_64-rhel62-4.0.0.tgz

## 配置全局变量

- vi /etc/profile

```js
export MONGODB_HOME=/usr/local/mongose
export PATH=$PATH:$MONGODB_HOME/bin
```

> 保存后，重启系统配置

- source /etc/profile

## mongodb 启动配置

- cd /usr/local/mongose/bin

- vi mongodb.conf

```js
dbpath = /usr/local/mongodb/data/db #数据文件存放目录
logpath = /usr/local/mongodb/logs/mongodb.log #日志文件存放目录
port = 27017  #端口
fork = true  #以守护程序的方式启用，即在后台运行
```

## 启动数据库

- ./mongod -f mongodb.conf

## 进入数据库

- ./mongo

## mongodb 开机启动

- cd /lib/systemd/system

- vi mongodb.service

```
[Unit]
Description=mongodb
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/usr/local/mongose/bin/mongod --config /usr/local/mongodb/bin/mongodb.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/usr/local/mongose/bin/mongod --shutdown --config /usr/local/mongodb/bin/mongodb.conf
PrivateTmp=true
bind_ip = 0.0.0.0

[Install]
WantedBy=multi-user.target
```

> 赋值权限

- chmod 754 mongodb.service

## 启动命令

#### 启动服务

- systemctl start mongodb.service

#### 关闭服务

- systemctl stop mongodb.service

#### 开机启动

- systemctl enable mongodb.service

## 可视化操作工具

- https://robomongo.org/download

## 关闭

> https://www.cnblogs.com/joshua317/articles/5190385.html
