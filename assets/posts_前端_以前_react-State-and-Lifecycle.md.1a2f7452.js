import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const d=JSON.parse('{"title":"react-State and Lifecycle","description":"","frontmatter":{"title":"react-State and Lifecycle","date":"2017-07-04T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-State-and-Lifecycle.md"}'),p={name:"posts/前端/以前/react-State-and-Lifecycle.md"},e=l(`<h1 id="利用定时器实现-ui-的刷新" tabindex="-1">利用定时器实现 UI 的刷新 <a class="header-anchor" href="#利用定时器实现-ui-的刷新" aria-label="Permalink to &quot;利用定时器实现 UI 的刷新&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Clock(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello, world!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h2&gt;It is {props.date.toLocaleTimeString()}.&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function tick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Clock date={new Date()} /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setInterval(tick, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这样的方法导致 ui 每秒都在更新，即时用户没有改变数据也在实时刷新，导致性能差，替代的方法是定义一个 state 作为一个定时器，他类似于 props，但是他是私有的，控制着整个组件。</p></blockquote><h1 id="从函数到类的转变-converting-a-function-to-a-class" tabindex="-1">从函数到类的转变 Converting a Function to a Class <a class="header-anchor" href="#从函数到类的转变-converting-a-function-to-a-class" aria-label="Permalink to &quot;从函数到类的转变 Converting a Function to a Class&quot;">​</a></h1><blockquote><p>function 的写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Add(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         {props.a}+{props.b}={props.a+props.b}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>es6 写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Add extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                这是es6的语法哦</span></span>
<span class="line"><span style="color:#A6ACCD;">                {this.props.a}+{this.props.b} = {this.props.a+this.props.b}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>新增一个 class constructor 来初始化 this.state</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Show extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state={</span></span>
<span class="line"><span style="color:#A6ACCD;">            name:&#39;ly&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;name:{this.state.name}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;age:{this.state.age}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="生命周期-adding-lifecycle-methods-to-a-class" tabindex="-1">生命周期 Adding Lifecycle Methods to a Class <a class="header-anchor" href="#生命周期-adding-lifecycle-methods-to-a-class" aria-label="Permalink to &quot;生命周期 Adding Lifecycle Methods to a Class&quot;">​</a></h1><blockquote><p>componentDidMount 执行的条件是在第一次加载组件完成时触发</p></blockquote><blockquote><p>componentWillUnmount 执行的条件是组件即将被销毁</p></blockquote><blockquote><p>利用这两个钩子函数可以实现时钟的实时更新，仅在局部的更新</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Show extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state={</span></span>
<span class="line"><span style="color:#A6ACCD;">            name:&#39;ly&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age:18,</span></span>
<span class="line"><span style="color:#A6ACCD;">            date: new Date().toLocaleString()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    componentDidMount(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.timer = setInterval(() =&gt; this.show(),1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    show () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            date:new Date().toLocaleString()</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //状态不能通过this.state.date=new Date().toLocalString() The only place where you can assign this.state is the constructor. 构造器可以直接操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    componentWillUnmount(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            clearInterval(this.timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;name:{this.state.name}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;age:{this.state.age}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;现在的时间:{this.state.date}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="state-状态的改变是异步的-state-updates-may-be-asynchronous" tabindex="-1">state 状态的改变是异步的 State Updates May Be Asynchronous <a class="header-anchor" href="#state-状态的改变是异步的-state-updates-may-be-asynchronous" aria-label="Permalink to &quot;state 状态的改变是异步的 State Updates May Be Asynchronous&quot;">​</a></h1><blockquote><p>我们在使用 props 和 state 时 不应该依赖它们的值来计算下一个状态</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//wrong</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">componentDidMount () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            counter1:this.state.counter1+this.state.counter2</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// correct</span></span>
<span class="line"><span style="color:#A6ACCD;">componentDidMount () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState(function (prevState,props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(prevState,props);</span></span>
<span class="line"><span style="color:#A6ACCD;">             return {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 counter1:prevState.counter1+props.counter2</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="父元素向子元素传递信息-the-data-flows-down" tabindex="-1">父元素向子元素传递信息 The Data Flows Down <a class="header-anchor" href="#父元素向子元素传递信息-the-data-flows-down" aria-label="Permalink to &quot;父元素向子元素传递信息 The Data Flows Down&quot;">​</a></h1><blockquote><p>A component may choose to pass its state down as props to its child components</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Down extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return (</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;p&gt;从父元素传数据过来了{this.props.data}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class App extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state={</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:&quot;飞呀飞呀&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Show/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Add/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Down data={this.state.data}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>This is commonly called a &quot;top-down&quot; or &quot;unidirectional&quot; data flow</p></blockquote>`,22),t=[e];function o(c,C,i,r,A,y){return a(),n("div",null,t)}const u=s(p,[["render",o]]);export{d as __pageData,u as default};
