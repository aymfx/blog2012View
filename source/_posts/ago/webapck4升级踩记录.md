---
title: webapck4升级踩记录
categories: 技术
tags: webpack
date: 2018-07-11 14:42:49
---

> 记录一些webpack 4 的坑啊 

<!-- more -->   

## 问题1. (node:49596) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead

> 原因: 由于 extract-text-webpack-plugin 目前还没有 webpack4 版本。

> 解决方案:cnpm install --save-dev extract-text-webpack-plugin@next

