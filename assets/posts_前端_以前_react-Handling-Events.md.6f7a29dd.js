import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const h=JSON.parse('{"title":"react-Handling Events","description":"","frontmatter":{"title":"react-Handling Events","date":"2017-07-06T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Handling-Events.md"}'),p={name:"posts/前端/以前/react-Handling-Events.md"},e=l(`<h1 id="事件处理函数" tabindex="-1">事件处理函数 <a class="header-anchor" href="#事件处理函数" aria-label="Permalink to &quot;事件处理函数&quot;">​</a></h1><blockquote><p>采用驼峰命名</p></blockquote><blockquote><p>使用 JSX，将一个函数作为事件处理程序传递，而不是一个字符串</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Button extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;button onClick={changeColor}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        我是按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function changeColor (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;我被执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在 jsx 语法中，必须要小心 this，我们如果不绑定 this。这个 this 将为 undefined</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Toggle extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isToggleOn:true}</span></span>
<span class="line"><span style="color:#A6ACCD;">     // This binding is necessary to make \`this\` work in the callback</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.handleClick = this.handleClick.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         // var that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">             isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">         }));</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         return (</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="两种方式解决-this-的指向问题" tabindex="-1">两种方式解决 this 的指向问题 <a class="header-anchor" href="#两种方式解决-this-的指向问题" aria-label="Permalink to &quot;两种方式解决 this 的指向问题&quot;">​</a></h1><blockquote><p>属性初始化语法 property initializer syntax</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Toggle extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isToggleOn:true}</span></span>
<span class="line"><span style="color:#A6ACCD;">     // This binding is necessary to make \`this\` work in the callback</span></span>
<span class="line"><span style="color:#A6ACCD;">     //     this.handleClick = this.handleClick.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /*handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         // var that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">             isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">         }));</span></span>
<span class="line"><span style="color:#A6ACCD;">     }*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleClick = () =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">            isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">        }));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         return (</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>arrow function 箭头函数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Toggle extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isToggleOn:true}</span></span>
<span class="line"><span style="color:#A6ACCD;">     // This binding is necessary to make \`this\` work in the callback</span></span>
<span class="line"><span style="color:#A6ACCD;">     //     this.handleClick = this.handleClick.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         // var that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">             isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">         }));</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         return (</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;button onClick={(e) =&gt;this.handleClick(e)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//这种箭头函数方法每次执行都会创建不同的回调，大多数情况下是好的，但是在向子组件传递时，会导致子组件的再一次渲染。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,12),t=[e];function o(c,i,C,r,A,y){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{h as __pageData,g as default};
