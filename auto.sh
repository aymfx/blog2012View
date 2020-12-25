#!/bin/bash
filename='README.md'
if [ ! -f "${filename}" ];then
    touch "${filename}"
fi
if [ -r "${filename}" ];then
    echo 有可读权限
else
    echo 没有权限
fi
