---
title: python基础
date: 2018-12-23
tags: python
---



##  python笔记

最新的python3的学习，放弃了之前的py2

## pathon3的基础函数

> print()  打印函数

> output() 允许用输入函数

> Math 数学函数

- abs()  去绝对值
- sqrt() 平方
- floor() 向下取整
- ceil() 向上取整

> pow() 函数乘方

### 字符串

> 拼接字符串

- str()   拼接字符串 是一个类
- repr()  拼接字符串 是一个函数

> 长字符串

- print(''' ssdfsf    '''')   三个引号
- print(r'c:\\\nsadadad')    r   不转义

这是个好玩的unioncode

- "his is a cat \N{dog}"

> py的三种编码方式

- ASCII
- UTF-8 （默认）
- UTF-32

通过encode可以转成各自的编码格式,然后用decode解码

```python
# 编码
'hello py'.encode('ASCII')
#  b'hello py'
'hello py'.encode('utf-8')
# b'hello py'
'hello py'.encode('utf-32')
# b'\xff\xfe\x00\x00h\x00\x00\x00e\x00\x00\x00l\x00\x00\x00l\x00\x00\x00o\x00\x00\x00 \x00\x00\x00p\x00\x00\x00y\x00\x00\x00'

# 解码
b'\xff\xfe\x00\x00h\x00\x00\x00e\x00\x00\x00l\x00\x00\x00l\x00\x00\x00o\x00\x00\x00 \x00\x00\x00p\x00\x00\x00y\x00\x00\x00'.decode('utf-32')
# 'hello py'

```

还有提供 bytes 和 str 来实现

```python
bytes('fix app',encoding='utf-8')
# b'fix app'
str(b'fix app',encoding='utf-8')
```

python还提供一种可变的，叫bytearray,类似数组形式的可变其中的字符，插入字符的话需要使用ord获取其序数值

```python
x= bytearray(b'i xeed you')
x[2] = ord(b'n')
x
# bytearray(b'i need you')
```



Python 默认是utf-8编码

> 设置字符编码

```python
# -*- coding: encoding name -*-
# 请将其中的encoding name替换为你要使用的编码(大小写都行)，如utf-8或latin-1
```

| abs(number)                     |                      返回指定数的绝对值                      |
| ------------------------------- | :----------------------------------------------------------: |
| bytes(string,encoding[,errors]) |        对指定的字符串进行编码，并以指定的方式处理错误        |
| cmath.sqrt(number)              |                    返回平方根;可用于负数                     |
| float(object)                   |                  将字符串或数字转换为浮点数                  |
| help([object])                  |                        提供交互式帮助                        |
| input(prompt)                   |                  以字符串的方式获取用户输入                  |
| int(object)                     |                    将字符串或数转换为整数                    |
| math.ceil(number)               |               以浮点数的方式返回向上圆整的结果               |
| math.floor(number)              |               以浮点数的方式返回向下圆整的结果               |
| math.sqrt(number)               |                   返回平方根;不能用于负数                    |
| pow(x, y[, z])                  |                  返回x的y次方对z求模的结果                   |
| print(object, ...)              |              将提供的实参打印出来，并用空格分隔              |
| repr(object)                    |                    返回指定值的字符串表示                    |
| round(number[, ndigits])        |          四舍五入为指定的精度，正好为5时舍入到偶数           |
| str(object)                     | 将指定的值转换为字符串。用于转换bytes时，可指定编码和错误处理方式 |

