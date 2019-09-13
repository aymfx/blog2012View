---

title: python循环

date: 2018-12-29

categories: 技术

tags: python

---

> 这是学习py的记录笔记 没啥参考意义

<!-- more -->  

## print

> 打印多个参数

```python
>>> print('age',18)
age 18
# 自定义
>>> print('2018','01','03',sep='-')
2018-01-03

# 不换行
>>> print('hello',end='')
hello>>> print('world!')
world!
```

## import

> 通常写法

```python
import module
from module import function
from module import fun1, fun2
from module import *

# 给导入的模块取名字
import math as mathName


# 给特定函数起名字
from math import sqrt as foobar


```



## 赋值

> 序列解包:将一个序列(或任何可迭代对象)解包，并将得到的值存储到一系列变量中

```python
>>> x,y,z = 1,2,3
>>> x
1
# 交换式
>>> x,y,z = 1,2,3
>>> x
1
>>> x,y = y,x
>>> x
2

# 字典的解包

person = {
    "age":18,
    "name":"ly"
}

key,value = person.popitem()

print(key,value) #('age', 18)

# 使用星号收集多余的值
a,b,*rest = [1,2,3,4,5,6]
print(rest)
##[3, 4, 5, 6]


```

> 链式赋值   x=y=12

> 增强赋值    x+=12  x*=12

> 代码块的缩进 :代码块是一组语句，可在满足条件时执行(if语句)，可执行多次(循环)，等等。代码块是过缩进代码(即在前面加空格)来创建的,在Python中，使用冒号(:)指出接下来是一个代码块，并将该代码块中的每行代码都缩进相同的程度。发现缩进量与之前相同时，你就知道当前代码块到此结束了

## 条件语句

> 在if语句中以下为假值

```python
False 
None
0
''
()
[]
{}

#标准值False和None、各种类型(包括浮点数、复数等)的数值0、空序列(如空 字符串、空元组和空列表)以及空映射(如空字典)都被视为假，而其他各种值都被视为真1， 包括特殊值True2

# bool 判断是不是真值

print(bool(True))  ## True

#虽然[]和""都为假(即bool([]) == bool("") == False)，但它们并不相等(即[] != "")。对其他各种为假的对象来说，情况亦如此(一个更显而易见的例子是() != False)。
```

> If eles

```python
name  =  input(''' what's your name? ''')

if name.endswith('ly'):
    print("hello",name)
else:
    print("再见了您")
```

> 三目运算符

```python
name = 'ly'
status = 'boyfriend' if name.endswith('ly') else 'stranger'
print(status)## boyfriend

```

> else if

```python
name = 'ly'
status = 'boyfriend' if name.endswith('ly') else 'stranger'
print(status)

if status == 'stranger':
    print('谢谢')
elif status == 'boyfriend':
    print('来吧')
else:
    print('凉凉')
    
    
    
name = input('What is your name? ') if name.endswith('Gumby'):
if name.startswith('Mr.'): print('Hello, Mr. Gumby') elif name.startswith('Mrs.'):
print('Hello, Mrs. Gumby') else:
print('Hello, Gumby') else:
print('Hello, stranger')
```

> ==用来检查两个对象是否相等，而is用来检查两个对象是否相同(是同一个对象) in表示是否存在这个序列中

```python
a = ord("王")
print(a)

s = chr(a)

print(s)


```

> 断言

```python
>>> count = 1
>>> assert 0<count <10
>>> age = 10
>>> assert 0 <age <10
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError
```

> while循环

```python
x=1
while x <= 100:
print(x) x += 1

# isspace()  是空格时返回真

>>> name.isspace()
False
>>> name = '12 '
>>> name.isspace()
False
>>> name = ' '
>>> name.isspace()
True

# 清除前后空格

>>> name.strip()
''
>>> name = 'casdada   adasdas '
>>> name.strip()
'casdada   adasdas'
```



> for循环

```python

age = [21,34,5,5,4343,3,3,4343,00]

for a in age:
    print(a)
    
# range  提供一定范围的数字

for num in range(1,11):
    print(num)
```

## 迭代工具

- 并行迭代

```python
>>> names = ['ly','md','zxj']
>>> ages = [12,23,45]
>>> list(zip(name,age))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'name' is not defined
>>> list(zip(names,age))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'age' is not defined
>>> list(zip(names,ages))
[('ly', 12), ('md', 23), ('zxj', 45)]
```



- 迭代时获取索引

```python
strings = ['A','A','a','sdsd','sdsd']
for index, string in enumerate(strings):
    if 'A' in string:
        strings[index] = "王者审判"


print(strings)

# ['王者审判', '王者审判', 'a', 'sdsd', 'sdsd']
```

- 反向迭代和排序后迭代

```python
from math import sqrt
for n in range(99, 0, -1):
    root = sqrt(n)
    if root == int(root):
        print(n)
        break
        
              
# reversed和sorted
>>> sorted([4, 3, 6, 8, 3])
[3, 3, 4, 6, 8]
>>> sorted('Hello, world!')
[' ', '!', ',', 'H', 'd', 'e', 'l', 'l', 'l', 'o', 'o', 'r', 'w'] >>> list(reversed('Hello, world!'))
['!', 'd', 'l', 'r', 'o', 'w', ' ', ',', 'o', 'l', 'l', 'e', 'H'] >>> ''.join(reversed('Hello, world!'))
'!dlrow ,olleH'
```

## 循环中的else语句

```python
from math import sqrt
for n in range(99,81,-1):
    root = sqrt(n)
    if root == int(root):
        print(n)
        break
else:
    print("还没找到")
```

## 简单的推导

> 列表推导是一种从其他列表创建列表的方式，类似于数学中的集合推导。

```python
>>> [x*x for x in range(10)]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

>>> count = [(x,y) for x in range(3) for y in range(3)]

[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]

>>>girls = ['alice', 'bernice', 'clarice'] 
boys = ['chris', 'arnold', 'bob'] 
letterGirls = {}
for girl in girls:
    letterGirls.setdefault(girl[0], []).append(girl)
    print(girl[0])
print([b+'+'+g for b in boys for g in letterGirls[b[0]]])

print(letterGirls)


```

## 三人行

- pass    类似占位符

```python
name = input("请输入您的名字:")

if name == 'ly':
    print('py 小菜鸡')
elif name=='none':
    pass
else:
    print('hhhh')
```

- del  删除

```python
>>> x = 1
>>> print(x)
1
>>> del x
>>> print(x)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'x' is not defined
```

- exec 和 eval  之行字符串及其结果

```python
>>> exec("print('hello,world')")
hello,world

# count = input("确实是")

# exec(count)


#命名空间
from math import sqrt
scope = {}

exec('sqrt = 1',scope)

print(sqrt(4))  #2.0

print(scope['sqrt']) #1

print(len(scope)) # 2 

print(scope.keys())  # dict_keys(['__builtins__', 'sqrt'])
```

- eval   eval是一个类似于exec的内置函数。exec执行一系列Python语句，而eval计算用字符串表示
  的Python表达式的值，并返回结果(exec什么都不返回，因为它本身是条语句)

```
# cont = eval(input("我们来做计算:"))

# print(cont)


```

