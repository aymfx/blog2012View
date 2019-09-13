---
title: react-Composition vs Inheritance
date: 2017-07-13
tags: react
---

> react 推荐使用组合，组合可以提高重复利用性，减少模块间的耦合

<!-- more --> 

# 组合 vs 继承

> react 推荐使用组合，组合可以提高重复利用性，减少模块间的耦合

# 包含

> react 组件不知道有没有子元素，对那些像盒子一样的公共组件，它通过一个特殊的 children 属性来添加子组件输出

```
//包含

function FancyBorder(props) {
     return (
         <div>
                <p>{props.color}</p>
                {props.children}
         </div>
     )
}

function WelcomeDialog() {
    return (<FancyBorder color="blue">
            <h1>我是标题啊</h1>
            <p>我是内容啊</p>
    </FancyBorder>)
}
```

> 在 FancyBorder 组件里面的内容将被传递给它的 props.children 属性，按原样输出

# 我们可以自定义自己传入的子组件

```
function Contacts() {
     return (<div>我是Contacts</div>)
}

function Chat() {
    return (<div>我是Chat</div>)
}

function SplitPane(props) {
    return (
        <div>
            <p>显示啊</p>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}

function Just() {
        return (<SplitPane left={<Contacts/>} right={<Chat/>}/>)
}
```

# 被定义为类的组件在组合方面同样优秀

```
//类的组合

function FancyBorder(props) {
    return (
        <div style={{background:"#f99"}}>
            <p>{props.color}Dialog</p>
             <p>
                 {props.children}
             </p>
        </div>
    )
}



function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h2>我是Dialog</h2>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDailog extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp= this.handleSignUp.bind(this);
        this.state = {login:''}
    }

    render(){
        return (<Dialog title="我是真标题" message="我是假信息">
            <input type="text" value={this.state.login} onChange={this.handleChange}/>
            <button onClick={this.handleSignUp}>点我</button>
        </Dialog>)
    }

    handleChange(e){
        this.setState({login:e.target.value})
    }

    handleSignUp(){
        alert(`hahah ,${this.state.login}`)
    }

}
```
