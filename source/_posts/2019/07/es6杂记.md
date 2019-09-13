---

title: es6杂记

categories: 技术

tags: 面试

date: es6
---

> es6杂记

 <!-- more -->   

## let 和const

- let 和const存在块级作用域
- let和const不存在变量提升
- let和const会存在TDZ也就是临时性死区
- let和const不允许重复声明变量
- const可以声明常量，不可改变的量
- const在对象中不可改变的是指针，但是它的数据结构是可变的
- let和const声明的对象都不会挂在到顶级对象上

## 变量的解构赋值

- 满足解构赋值的必须是可迭代的数据结构(iterator)
- 结构不成功的变量的值为undefined
- ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于`undefined`，默认值才会生效
- 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
- 如果是对象的结构赋值，设置默认变量的话，真正赋值的将是默认变量，对应的变量将变成模式
- 非赋值语句的声明语句与模式都不能使用圆括号，赋值语句的非模式能使用圆括号

## 数据类型的扩展

- 模板函数 、标签模板、String.raw()

- Stirng新增的方法

  - String.fromCodePoint()
  - String.startsWith()
  - Stirng.endsWith()
  - Stirng.repeat()
  - String.padStart()
  - String.padEnd()
  - String.trimStart()
  - String.trimEnd()

- 数值的扩展

  - 二进制表示 0b 八进制便是 0o

  - Number.isFinite()

  - Number.isNaN()

     它们与传统的全局方法`isFinite()`和`isNaN()`的区别在于，传统方法先调用`Number()`将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，`Number.isFinite()`对于非数值一律返回`false`, `Number.isNaN()`只有对于`NaN`才返回`true`，非`NaN`一律返回`false`。

  - Number.parseInt()

  - Number.parseFloat()

  - Number.isInteger()

  - Number.EPSILON

  - Number.isSafeInteger()

  - Number.MAX_SAFE_INTEGER

  - Number.MIN_SAFE_INTEGER

  - Math.trunc()

  - Math.sign()

- 函数的扩展

  - 可以指定默认值
  - 参数变量是默认声明的，所以不能用`let`或`const`再次声明
  - 与解构赋值默认值结合使用
  - 指定了默认值后，`length`属性将失真
  - ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
  - 箭头函数有几个使用注意点
    - （1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。
    - （2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
    - （3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    - （4）不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数

- 数组的扩展

  - Array.from()
  - Array.of()
  - Array.copyWithin()
  - Array.find()
  - Array.findIndex()
  - fill()
  - 数组实例的 entries()，keys() 和 values()
  - Array.incluedes()
  - Array.flat()
  - Array.flatMap()

- 对象的新增方法

  - Object.is()
  - Object.assign()
  - Object.getOwnPropertyDescriptor()
  - Object.setPrototypeOf()
  - Object.getPrototypeOf()
  - Object.keys()，Object.values()，Object.entries()
  - Object.fromEntries()

## Symbol

- Symbol生成的类型都是独一无二的

- Symbol是新增的数据类型

- Symbol不能用new创建，可以传递参数 参数是它的描述

- Symbol可以转换成布尔值和字符串，其他不能转

- Symbol.prototype.description 描述

- Symbol.for()

- Symbol.keyFor()

- Symbol.hasInstance

  ```js
  class A {
      [Symbol.hasInstance](foo){
          console.log(foo)
          return true
      }
  }
  
  console.log([12,2,3,4] instanceof new A())
  
  ```

- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match
- Symbol.replace
- Symbol.search
- Symbol.split
- Symbol.iterator
- Symbol.toPrimitive
- Symbol.unscopables



## Set 和 Map结构

- set的方法有 add 、size 、 has 、 delete 、clear 。
- set列表不能有重复的值 NaN是重复的 5和‘5’不是
- weakSet只能存储对象，他是一个弱引用，当外界对象不存在引用它里面的对象时可能会被清除，因此导致了他不能被遍历
- weakSet有三个方法 add 、delete 、has
- Map的作用类似于对象，但是它的key可以是任意的类型
- Map的方法有 : size 、 set、get、has、delete、clear
- wekMap只接受对象作为key，null除外
- WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
- `WeakMap`只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。
- 

