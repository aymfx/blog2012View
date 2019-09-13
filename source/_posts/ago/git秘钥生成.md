---
title: git秘钥生成
categories: 技术
tags: git
date: 2018-08-09 17:49:00
---

# 前言

>重装系统是真的难过，每次环境都要自己配一遍，浪费了好多时间呀，有钱要买台macpro，专门用来敲代码，不装任何其他垃圾软件。系统慢了真拖延时间

 <!-- more -->   

## 记录 以后直接复制粘贴

### 配置name和email

> git config --global user.name 'aymfx'

> git config --global user.email '1095731371@qq.com'

### 获取公私key

> ssh-keygen -t rsa -C '1095731371@qq.com'

### 将公钥放入github的ssh

> 进入 C:\Users\aymfx\.ssh

> id_rsa中的内容便是私钥，id_rsa.pub中的内容便是公钥

> 将id_rsa.pub 上传

> https://github.com/settings/keys

> 好了,可以将自己的博客文章上传了。重装系统真麻烦，都要重头来，8月，对我和我妈都好点，希望她身体赶紧康复，我也尽快找到自己满意的工作。

### 问题，上传出现问题

> Host key verification failed.  fatal: Could not read from remote repository. 

> 删除 .deploy_git文件

> 没有丝毫作用 报错

> Error: ssh_exchange_identification: read: Connection reset by peer

> 看官网 https://hexo.io/docs/troubleshooting.html

> 没有  可能是秘钥不对 测试


> ssh -v git@github.com

> 确认之后有报错 Connection reset by 52.74.223.119 port 22











