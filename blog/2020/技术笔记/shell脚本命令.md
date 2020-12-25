---
title: shell命令学习
date: 2020-12-22
categories:
  - 技术笔记
tags:
  - shell
---

:::tip

这个只是给我自己参考的，不是正式的博客文章，可能会看的莫不着头脑

:::

<!-- more -->

## 常见的命令

- echo   用于输出 

  ```shell
  echo 'aymfx最帅'
  ```

  

- 变量使用

  ```shell
  your_name="aymfx"
  echo $your_name
  echo ${your_name}
  ```

- 只读变量

  ```shell
  myname="aymfx"
  echo $myname
  readonly myname
  myname="赋值不能出现空格" #myname: readonly variable
  echo $myname 
  ```

  

- 删除变量

  ```sh
  myname="aymfx"
  echo $myname
  unset myname
  echo $myname # 没有输出
  ```

- 单引号

  - 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
  - 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。

- 双引号

  - 双引号里可以有变量
  - 双引号里可以出现转义字符

  ```shell
  myname="aymfx"
  str="hello \"$myname\""
  echo $str hello "aymfx"
  ```

- 获取字符串长度

  ```shell
  string="aymfx"
  echo ${#string} #输出 5
  ```

- 提取子字符串

  ```shell
  string="aymfx"
  echo ${string:1:3} #输出 ymf
  ```

- 查找子字符串

  - 在这种情况下使用“ expr”命令 只用在linux命令上

    ```
    STRING="this is a string"
    SUBSTRING="hat"
    expr index "$STRING" "$SUBSTRING"     # 1 is the position of the first 't' in $STRING
    ```

- 最短子串匹配

  - ${string#substring}
  - ${string%substring}

  ```sh
  filename="bash.string.txt"
  
  echo ${filename#*.} #string.txt 
  echo ${filename%.*} #bash.string
  ```

- 最短子串匹配

  - ${string##substring}
  - ${string%%substring}

  ```sh
  filename="bash.string.txt"
  echo "After deletion of longest match from front:" ${filename##*.} # txt
  echo "After deletion of longest match from back:" ${filename%%.*}# bash
  ```

  

- 子串替换

  - 用替换替换第一次出现的子字符串

    ```
    str='to be or not to be'
    echo ${str[@]/be/cat} #to cat or not to be
    ```

    

     - 替换所有出现的子串

       ```shell
       str='to be or not to be'
       echo ${str[@]//be/cat} #to cat or not to cat
       ```

       

     - 删除所有出现的子字符串(替换为空字符串)

       ```shell
       str='to be or not to be'
       echo ${str[@]// not/} #to be or not to be
       ```

  - 如果在$str开头替换子字符串的出现

    ```sh
    str='to be or not to be'
    echo ${str[@]/#to be/eat now} #eat now or not to be
    ```

  - 如果在$str结尾,则替换子字符串的出现

    ```sh
    str="to be or not to be"
    echo ${str[@]/%be/eat}  # to be or not to eat
    ```

- 数组

  - 初始化 （一个数组可以用一个名称保存多个值。数组命名与变量命名相同。 通过分配()中包含的以空格分隔的值来初始化数组）

    ```sh
    apple=1
    my_array=($apple banana "fruit basket" orange)
    echo ${#my_array[@]} #4
    echo ${my_array[3]} #orange
    echo aymfx #aymfx
    echo ${my_array[0]} #1
    ```

  - 数组成员不必是连续的或连续的。数组的某些成员可以保留为未初始化。

  - 数组中元素的总数由$ {#arrayname [@]}引用

- 算术运算符

  - **a + b**加法(a加b)
  - **a-b**减(a减b)
  - **a \* b**乘法(a乘以b)
  - **a / b**除法(整数)(a除以b)
  - **a%b**取模(除以b的整数余数)
  - **a\**\**\*\*\****b**取幂(a等于b的幂)

- 条件语句

  ```sh
  #第一种
  
  name='aymfx'
  if [ $name = 'aymfx' ];then
      echo "${name} 真帅" # aymfx 真帅
  fi
  
  #第二种
  
  name='aymfx'
  if [ $name = 'ly' ];then
      echo "${name} 真帅" # aymfx 真帅
  else
      echo "没有比${name}再帅的了" 
  fi
  
  #第三种
  
  name='aymfx'
  if [ $name = 'ly' ]; then
      echo "${name} 真帅" # aymfx 真帅
  elif [ $name = 'aymfx' ]; then
      echo "${name} 帅爆了" # aymfx 帅爆了
  else
      echo "没有比${name}再帅的了" 
  fi
  
  # 数值比较类型
  comparison    Evaluated to true when
  $a -lt $b    $a < $b
  $a -gt $b    $a > $b
  $a -le $b    $a <= $b
  $a -ge $b    $a >= $b
  $a -eq $b    $a is equal to $b
  $a -ne $b    $a is not equal to $b
  
  # 字符串比较的类型
  
  comparison    Evaluated to true when
  "$a" = "$b"     $a is the same as $b
  "$a" == "$b"    $a is the same as $b
  "$a" != "$b"    $a is different from $b
  -z "$a"         $a is empty
  
  
  # case
  
  mycase=1
  case $mycase in
      1) echo "You selected bash";;
      2) echo "You selected perl";;
      3) echo "You selected phyton";;
      4) echo "You selected c++";;
      5) exit
  esac
  ```

  		  -  =周围必须有空格
  		  -  在字符串变量周围使用“”,以避免将特殊字符的shell扩展为*

- 循环结构

  ```sh
  
  
  # for循环
  
  # for
  for arg in [list]
  do
   command(s)...
  done
  
  #!/bin/bash
  names=(aymfx liya zhangmeng)
  for name in ${names[@]};do
      echo $name
  done
  
  # while
  while [ condition ]
  do
   command(s)...
  done
  
  COUNT=4
  while [ $COUNT -gt 0 ];do
      echo "value of count ${COUNT}"
      COUNT=$(($COUNT-1))
  done
  
  #bash直到循环
  
  until [ condition ]
  do
   command(s)...
  done
  
  COUNT=1
  until [ $COUNT -gt 5 ];do
      echo "value of count ${COUNT}"
      COUNT=$(($COUNT+1))
  done
  
  NUMBERS=(951 402 984 651 360 69 408 319 601 485 980 507 725 547 544 615 83 165 141 501 263 617 865 575 219 390 237 412 566 826 248 866 950 626 949 687 217 815 67 104 58 512 24 892 894 767 553 81 379 843 831 445 742 717 958 609 842 451 688 753 854 685 93 857 440 380 126 721 328 753 470 743 527)
  for value in ${NUMBERS[@]};do
      if [ $value -eq 237 ]; then
          break;
      elif [ $(($value % 2)) == 0 ]; then
          echo $value
      fi
  done
  
  # break和continue可用于控制for,while和直到构造的循环执行。continue用于跳过特定循环迭代的其余部分,而break用于跳过整个循环的其余部分。
  
  ```

- shell函数

  - 函数调用等效于命令。通过在函数名称后面指定参数,可以将参数传递给函数。函数中的第一个参数称为$ 1,第二个参数称为$ 2等

  ```shell
  function function_B {
    echo "Function B."
  }
  function function_A {
    echo "$1"
  }
  function adder {
    echo "$(($1 + $2))"
  }
  
  
  function_A "Function A."     # Function A.
  function_B                   # Function B.
  adder 12 56                  # 68
  ```

  

## 一些解释

- **#!** 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。
  - *#! /bin/bash*
- 运行脚本的方法
  - chmod +x ./test.sh  #使脚本具有执行权限 
  - ./test.sh   #执行脚本
  - /bin/sh test.sh
- 变量类型
  - **局部变量** 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
  - **环境变量** 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。
  - **shell变量** shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行

- 命令输出的值

  - 可以通过用``(称为反引号)或$()封装命令来完成替换

    ```shell
    FILELIST=`ls`
    
    FileWithTimeStamp=/tmp/my-dir/file_$(/bin/date +%Y-%m-%d).txt
    ```

- $1变量引用命令行中的第一个参数,$2引用第二个参数,依此类推。 变量$0引用当前脚本。

  ```shell
  命令 
  sh auto.sh apple banner
  
  执行后
  echo $0 #auto.sh
  echo $1 #apple
  echo $# #2
  ```

- 特殊变量

  - `$0`-当前脚本的文件名|
  - `$n`-调用传递给脚本的第N个参数或调用函数|
  - `$#`-传递给脚本或函数的参数数量|
  - `$@`-所有传递给脚本或函数的参数|
  - `$*`-所有传递给脚本或函数的参数|
  - `$?`-最后执行的命令的退出状态|
  - `$$`-当前shell的进程ID。对于shell脚本,这是它们正在执行的进程ID.|
  - `$!`-最后一个后台命令的进程号|

  ```shell
  echo "Script Name: $0"
  function func {
      for var in $*
      do
          let i=i+1
          echo "The \$${i} argument is: ${var}"
      done
      echo "Total count of arguments: $#"
  }
  func We are argument
  
  #Script Name: auto.sh
  #The $1 argument is: We
  #The $2 argument is: are
  #The $3 argument is: argument
  #Total count of arguments: 3
  
  function func {
      echo "--- \"\$*\""
      for ARG in "$*"
      do
          echo $ARG
      done
  
      echo "--- \"\$@\""
      for ARG in "$@"
      do
          echo $ARG
      done
  }
  func We are argument
  
  #--- "$*"
  #We are argument
  #--- "$@"
  #We
  #are
  #argument
  
  
  ```

- 常见信号类型

  - `SIGINT`:用户发送中断信号(Ctrl + C)
  - `SIGQUIT`:用户发送退出信号(Ctrl + C)
  - `SIGFPE`:尝试了非法的数学运算

  > HUP INT QUIT ILL TRAP ABRT EMT FPE KILL BUS SEGV SYS PIPE ALRM TERM URG STOP TSTP CONT CHLD TTIN TTOU IO XCPU XFSZ VTALRM PROF WINCH INFO USR1 USR2

  ```sh
  trap "echo Booh!" SIGINT SIGTERM
  echo "it's going to run until you hit Ctrl+Z"
  echo "hit Ctrl+C to be blown away!"
  
  while true        
  do
      sleep 60       
  done
  
  trap booh 2 15
  
  trap "rm -f folder; exit" 2
  
  ```

- 文件测试（通常,您将需要对正在运行的文件系统进行一些文件测试。在这种情况下,shell将为您提供一些有用的命令来实现它。）

  - `-<command> [filename]`

  - `[filename1] -<command> [filename2]`

    ```sh
    #使用“ -e”测试文件是否存在
    
    #!/bin/bash
    filename="package.json"
    if [ -e "$filename" ]; then
        echo "$filename exists as a file"
    fi
    
    #使用“ -d”测试目录是否存在
    directory_name="public"
    if [ -d "$directory_name" ]; then
        echo "$directory_name exists as a directory"
    fi
    
    #使用“ -r”测试文件是否对运行脚本/测试的用户具有读取权限
    filename='README.md'
    if [ ! -f "${filename}" ];then
        touch "${filename}"
    fi
    if [ -r "${filename}" ];then
        echo 有可读权限
    else
        echo 没有权限
    fi
    ```

    

