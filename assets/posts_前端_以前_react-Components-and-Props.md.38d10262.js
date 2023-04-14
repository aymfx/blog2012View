import{_ as p,c as e,x as n,a as s,C as o,N as a,o as t,D as c}from"./chunks/framework.1f285265.js";const _=JSON.parse('{"title":"react-Components and Props","description":"","frontmatter":{"title":"react-Components and Props","date":"2017-07-03T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Components-and-Props.md"}'),r={name:"posts/前端/以前/react-Components-and-Props.md"},C=a(`<h1 id="定义组件-functional-and-class-components" tabindex="-1">定义组件 Functional and Class Components <a class="header-anchor" href="#定义组件-functional-and-class-components" aria-label="Permalink to &quot;定义组件 Functional and Class Components&quot;">​</a></h1><blockquote><p>组件类似于一个函数，可以是 function 也可以是 class 他们返回的结果是一个组件（jsx）</p></blockquote><blockquote><p>第一种写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Welcome(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>第二种写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Welcome extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="渲染组件" tabindex="-1">渲染组件 <a class="header-anchor" href="#渲染组件" aria-label="Permalink to &quot;渲染组件&quot;">​</a></h1><blockquote><p>通过 ReactDOM.render()方法进行渲染 Rendering a Component,</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Welcome(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const element = &lt;Welcome name=&quot;Sara&quot; /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  element,</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),i=n("div",null,null,-1),A=a(`<h1 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h1><blockquote><p>组件之间是可以重复使用的，看下面这个例子 Composing Components</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function formatDate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Date.now()+Math.random();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function DateNow(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return (</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;h1&gt;Hello1,{props.date}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function tick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setInterval(tick,1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>组件与组件之间的提取与嵌套 Extracting Components</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//渲染页面</span></span>
<span class="line"><span style="color:#A6ACCD;">function formatDate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Date.now()+Math.random();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function DateNow(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return (</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;h1&gt;Hello1,{props.date}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;DateNow date={formatDate()}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Show/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function tick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setInterval(tick,1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="组件传入的的属性必须是纯的-props-are-read-only" tabindex="-1">组件传入的的属性必须是纯的 Props are Read-Only <a class="header-anchor" href="#组件传入的的属性必须是纯的-props-are-read-only" aria-label="Permalink to &quot;组件传入的的属性必须是纯的 Props are Read-Only&quot;">​</a></h1><blockquote><p>正确的写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function sum(a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>错误的写法 不能改变 props 的值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function withdraw(account, amount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  account.total -= amount;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>All React components must act like pure functions with respect to their props. react 的另一个属性 state 将可以间接的改变状态值，但是不违背它的初衷。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12);function D(y,d,u,m,g,h){const l=c("Welcome");return t(),e("div",null,[C,n("blockquote",null,[i,s("只是一个普通的dom元素，但是"),o(l),s("这是一个具有自己作用域的组件 ")]),A])}const k=p(r,[["render",D]]);export{_ as __pageData,k as default};
