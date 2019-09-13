---
title: 实现nodejs+express+nginx+mysql线上环境配置1
categories:
  - 技术
tags: linux
date: 2018-07-16 15:15:38
---



> 想学习下 nodejs 服务器的搭建全过程，毕竟这也是迈向后端的一大步，用的是 centos 服务器需要实现 nodejs 环境配置 nginx 反向代理 mysql 的环境配置及使用 express 服务器的使用,防火墙的策略开关

 <!-- more -->   

## 创建 ssh

> https://cloud.tencent.com/developer/article/1157620

## 安装 node

1.  安装 git

> yum install git -y

2.  安装 nvm 服务，这个是用来管理 node 版本的工具，可以在服务器上切换不同的 node 环境

> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash

注：安装 nvm 后如果是使用 xshell 等工具连接服务器，则需要重新连接一次，不然会提示没有 nvm

3.  使用 nvm 进行安装 nodejs

> nvm install vxxxx xxx 表示版本

4.  如果没有自动启用当前下载的版本，使用下面命令

> nvm use vxxx

5.  当然如果要是没有自动配置成默认的 node 版本的话，执行下面命令

> nvm alias default vxxx

6.  使用淘宝源安装最新的 npm

> npm install -g cnpm --registry=https://registry.npm.taobao.org

## nginx 配置

1.  cd /usr/local

2.  运行以下命令安装 PCRE 和 zlib 库。

> yum -y install pcre pcre-devel zlib-devel

3.  下载 Nginx

> wget http://nginx.org/download/nginx-1.12.2.tar.gz

4.  解压安装包

> tar -xvzf nginx-1.12.2.tar.gz

5.  下载 OpenSSL

> wget https://www.openssl.org/source/openssl-1.1.0g.tar.gz

6.  解压安装包

> tar -xvzf openssl-1.1.0g.tar.gz

7.  cd nginx-1.12.2

8.  执行下列命令

```vim
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_ssl_module --with-openssl=/usr/local/openssl-1.1.0g
```

报错:./configure: error: C compiler cc is not found

> yum install gcc

> 继续安装

```vim
make && make install
```

9.  生成证书

> openssl req -new -x509 -nodes -out server.crt -keyout server.key

```nginx
server {
        listen 443;
        server_name www.ldyldy.cn; #填写绑定证书的域名
        ssl on;
        ssl_certificate 1_www.ldyldy.com_bundle.crt;
        ssl_certificate_key 2_www.ldyldy.com.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
        ssl_prefer_server_ciphers on;
        location / {
            root   html; #站点目录
            index  index.html index.htm;
        }
    }
```

## 添加防火墙配置

查看防火墙状态是否开启

> firewall-cmd --state

启动服务

> systemctl start firewalld

设为开机启动

> systemctl enable firewalld

查看端口列表

> firewall-cmd --permanent --list-port

添加防火墙端口号

> firewall-cmd --permanent --zone=public --add-port=80/tcp

移除防火墙端口号

> firewall-cmd --permanent --zone=public --remove-port=80/tcp

重启

> firewall-cmd --reload

命令含义：

```nginx
--zone #作用域

--add-port=80/tcp  #添加端口，格式为：端口/通讯协议

--permanent   #永久生效，没有此参数重启后失效
```

查看防火墙状态

> systemctl status firewalld.service

启动防火墙

> systemctl start firewalld.service

关闭防火墙

> systemctl stop firewalld.service

重新启动防火墙

> systemctl restart firewalld.service

查看端口占用

> lsof -i:8080
