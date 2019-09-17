#! /bin/bash
# 确保脚本抛出遇到的错误
set -e
git reset --hard origin/master
git clean -f
git pull
cnpm i
npm run build:hexo
pm2 startOrReload pm2.json