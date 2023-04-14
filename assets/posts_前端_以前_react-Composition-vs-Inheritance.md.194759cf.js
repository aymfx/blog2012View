import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const g=JSON.parse('{"title":"react-Composition vs Inheritance","description":"","frontmatter":{"title":"react-Composition vs Inheritance","date":"2017-07-13T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Composition-vs-Inheritance.md"}'),p={name:"posts/前端/以前/react-Composition-vs-Inheritance.md"},e=l(`<h1 id="组合-vs-继承" tabindex="-1">组合 vs 继承 <a class="header-anchor" href="#组合-vs-继承" aria-label="Permalink to &quot;组合 vs 继承&quot;">​</a></h1><blockquote><p>react 推荐使用组合，组合可以提高重复利用性，减少模块间的耦合</p></blockquote><h1 id="包含" tabindex="-1">包含 <a class="header-anchor" href="#包含" aria-label="Permalink to &quot;包含&quot;">​</a></h1><blockquote><p>react 组件不知道有没有子元素，对那些像盒子一样的公共组件，它通过一个特殊的 children 属性来添加子组件输出</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//包含</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function FancyBorder(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return (</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;p&gt;{props.color}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function WelcomeDialog() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (&lt;FancyBorder color=&quot;blue&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1&gt;我是标题啊&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;我是内容啊&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/FancyBorder&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在 FancyBorder 组件里面的内容将被传递给它的 props.children 属性，按原样输出</p></blockquote><h1 id="我们可以自定义自己传入的子组件" tabindex="-1">我们可以自定义自己传入的子组件 <a class="header-anchor" href="#我们可以自定义自己传入的子组件" aria-label="Permalink to &quot;我们可以自定义自己传入的子组件&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Contacts() {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return (&lt;div&gt;我是Contacts&lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Chat() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (&lt;div&gt;我是Chat&lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function SplitPane(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;显示啊&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {props.left}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {props.right}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Just() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;SplitPane left={&lt;Contacts/&gt;} right={&lt;Chat/&gt;}/&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="被定义为类的组件在组合方面同样优秀" tabindex="-1">被定义为类的组件在组合方面同样优秀 <a class="header-anchor" href="#被定义为类的组件在组合方面同样优秀" aria-label="Permalink to &quot;被定义为类的组件在组合方面同样优秀&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//类的组合</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function FancyBorder(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div style={{background:&quot;#f99&quot;}}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;{props.color}Dialog&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 {props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Dialog(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;FancyBorder color=&quot;blue&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h2&gt;我是Dialog&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1 className=&quot;Dialog-title&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {props.title}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p className=&quot;Dialog-message&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {props.message}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/FancyBorder&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class SignUpDailog extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleChange = this.handleChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleSignUp= this.handleSignUp.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {login:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;Dialog title=&quot;我是真标题&quot; message=&quot;我是假信息&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input type=&quot;text&quot; value={this.state.login} onChange={this.handleChange}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={this.handleSignUp}&gt;点我&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Dialog&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleChange(e){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({login:e.target.value})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSignUp(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(\`hahah ,\${this.state.login}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),t=[e];function o(c,i,r,C,A,y){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{g as __pageData,h as default};
