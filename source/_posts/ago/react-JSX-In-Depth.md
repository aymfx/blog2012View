---
title: react -JSX In Depth
date: 2017-07-13
tags: react
---

> react-JSX In Depth

<!-- more --> 

# JSX 的语法糖是以下格式

> React.createElement(component,props,..childeren)

```
compiles before:
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

compiles into:

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

# 使用点作为 jsx 的类型 Using Dot Notation for JSX Type

```
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

# 自定义的组件必须大写，否则 jsx 认为元素是 html 标签

```
import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}


import React from 'react';

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correct! React knows <Hello /> is a component because it's capitalized.
  return <Hello toWhat="World" />;
}
```

# JSX 的类型不能是一个不能是一个表达式

```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Wrong! JSX type can't be an expression.
  return <components[props.storyType] story={props.story} />;
}

import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}

```

# Props in JSX

> 在 jsx 中只能存在表达式，if 和 for 都不属于表达式，所以在里面不能用他们，但是有替代方法

```
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

> 使用字面量以及符号转义

```
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />

<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />
```

# 属性默认为 true，一般不推荐使用，与 es6 的{foo}({foo:foo})省略很相近

```
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

# 利用 es6 的...传播属性（props）

```
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

# false null undefind true 这些不会被渲染出来但是他们将可以作为 boolean 值判断

```
<div>
  {showHeader && <Header />}
  <Content />
</div>
```
