---
title: mysql配置
categories:
  - 技术
tags: mysql
date: 2018-07-16 17:28:31
---

> mysql配置

<!-- more --> 

## mysql 安装以及配置

安装

1.  wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
2.  sudo rpm -Uvh mysql57-community-release-el7-11.noarch.rpm
3.  sudo yum install mysql-community-server

修改密码

1.获取密码

> sudo grep 'temporary password' /var/log/mysqld.log

2.似乎没有获取到，如果获取到了就跳过吧

> 执行这个 mysqld --initialize

> 在执行上面的，获取到密码

登录

> mysql -uroot -p 输入密码

1.报错 Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock

执行了下列命令好了

> 1、停止命令： sudo systemctl stop mysqld.service

> 2、启动命令： sudo systemctl start mysqld.service

不行的话再执行

> chown mysql:mysql -R /var/lib/mysql
> service mysqld start

按照网上的解释因为服务没重启，所以没有生成这个临时的套接字文件

输入密码，登录成功

修改密码

> ALTER USER 'root'@'localhost' IDENTIFIED BY '23456';

刷新下

> flush privileges;

设置外网访问

1.特定 ip 访问

> grant all privileges on _._ to 'root'@'192.168.1.1' identified by '123456' with grant option;

> flush privileges;

2.都可以链接

> grant all privileges on _._ to 'root'@'%' identified by '123456' with grant option;

> flush privileges;
