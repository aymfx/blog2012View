---

title: 列表和元组

date: 2019-1-06

categories: 技术

tags: python

---

> 这是学习py的记录笔记 没啥参考意义

<!-- more -->  

## 列表和元组

> python最基本的数据结构是序列 Python支持一种数据结构的基本概念，名为容器(container)。容器基本上就是可包含其
> 他对象的对象。两种主要的容器是序列(如列表和元组)和映射(如字典)。在序列中，每个元素都有编号，而在映射中，每个元素都有名称(也叫键)，有一种既不是序列也不是映射的容器，它就是集合(set)

## 序列的通用操作

- 索引

  ```python
  greeting = 'hello'
  greeting[0]
  greeting[-1]
  # 'H'  'o'
  ```

- 切片

- ```python
  tag = 'l love you ,just do it'
  tag[0:10]
  # l love you
  tag[0:-11]
  # l love you
  tag[-10:]
  # just do it
  
  # 步长
  numbers = [1,2,3,4,5,6,7,8,9,10]
  numbers[:10:2]
  
  # [1, 3, 5, 7, 9]
  
  #步长不能为零否则无法移动，可以为负数
  numbers = [1,2,3,4,5,6,7,8,9,10]
  numbers[10:0:-2]
  # [10, 8, 6, 4, 2]
  
  
  
  ```

- 序列相加

  ```python
  [1,2,3]+[4,5,6]
  # [1, 2, 3, 4, 5, 6]
  'hello'+'world'
  # 'helloworld'
  [1,2,3,4]+'hello'
  # 报错 因为不支持不同的序列进行拼接
  
  ```

- 乘法

- ```python
  [1,2,3]*5
  # [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
  "py"*5
  # 'pypypypypy'
  
  ```

- 成员资格

- ```python
  # 使用 in 操作符
  premissions = 'text'
  "w" in premissions
  #false
  
  # len min max  判断列表长度以及最大值和最小值
  >>> p = 'lenmaxmin'
  >>> len(p)
  9
  >>> max(p)
  'x'
  >>> min(p)
  'a'
  
  ```

- list 类似于js的split

  ```python
  s = 'adaddsdsdd'
  list(s)
  # ['a', 'd', 'a', 'd', 'd', 's', 'd', 's', 'd', 'd']
  # 合并
  ''.join(['a', 'd', 'a', 'd', 'd', 's', 'd', 's', 'd', 'd'])
  # 'adaddsdsdd'
  ```


## 列表的常用方法

```python
# append 将一个对象附加到列表的末尾
>>> lst = [1,2,3]
>>> lst.append(4)
>>> lst
[1, 2, 3, 4]
# clear 清空列表
>>> lst
[1, 2, 3, 4]
>>> lst
[1, 2, 3, 4]
>>> lst.clear()
>>> lst
[]
# copy 深拷贝列表

普通情况
>>> a = []
>>> a = [1,2,3]
>>> b = a
>>> b[2] = 4
>>> a
[1, 2, 4]

深拷贝

>>> a = []
>>> a = [1,2,3]
>>> b = a.copy()
>>> b[1] = 4
>>> a
[1, 2, 3]

# count 计算指定元素在列表中出现多少次
>>> c = ['a','b','c','a']
>>> c
['a', 'b', 'c', 'a']
>>> a.count('a')
0
>>> c.count('a')
2

# extend 类似于js的concat 将列表进行拼接
>>> a = [21,3,4,5]
>>> b = [2,3,4,5]
>>> a.extend(b)
>>> s = a.extend(b)
>>> s
>>> a
[21, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5]

# sort 对列表进行排序
>>> a
[21, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5]
>>> a.sort()
>>> a
[2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 21]

改变原数组，为了不变原数组我们需要使用sorted

>>> a
[21, 3, 4, 5, 2, 3, 4, 5]
>>> s = a.sorted()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'list' object has no attribute 'sorted'
>>> s = sorted(a)
>>> s
[2, 3, 3, 4, 4, 5, 5, 21]
>>> a
[21, 3, 4, 5, 2, 3, 4, 5]

# 高级排序 sort 可以接受两个参数一个是key另一个是reverse，这两个参数通常是按名称指定的，称为关键字 参数

## key 参数key类似于参数cmp:你将其设置为一个用于排序的函数。然而， 不会直接使用这个函数来判断一个元素是否比另一个元素小，而是使用它来为每个元素创建一个 键，再根据这些键对元素进行排序

>>> x = ['sasas','dad','dasdasdadasd','sd']
>>> x.sort(key=len)
>>> x
['sd', 'dad', 'sasas', 'dasdasdadasd']
>>>

## reverse 只需将其指定为一个真值(True或False，将在第5章详细介 绍)，以指出是否要按相反的顺序对列表进行排序

>>> a = [21,3,4,5]
>>> a.sort(reverse=True)
>>> a
[21, 5, 4, 3]





```

## 元组：不可修改的序列

```python
# 创建元组
1.
>>> 1,2,3,4,
(1, 2, 3, 4)
2.
>>> (1,2,3,4)
(1, 2, 3, 4)
3.
>>> (1,)
(1,)

# 转换元组 tuple

>>> tuple([1,2,3])
(1, 2, 3)

>>> tuple('abc')
('a', 'b', 'c')


```

### 作用

- 它们用作映射中的键(以及集合的成员)，而列表不行。
- 有些内置函数和方法返回元组，这意味着必须跟它们打交道。

| 新函数       |                              |
| ------------ | ---------------------------- |
| sorted(seq)  | 返回序列和一组参数中最小的值 |
| len(seq)     | 返回序列的长度               |
| list(seq)    | 将序列转换成列表             |
| max(args)    | 返回序列或一组参数中最大的值 |
| min(args)    | 返回序列或一组参数中最小的值 |
| reverse(seq) | 让你你能够返回迭代序         |
| tuple(seq)   | 将序列转换成元组             |
|              |                              |

