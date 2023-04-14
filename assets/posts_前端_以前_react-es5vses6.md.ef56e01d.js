import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const d=JSON.parse('{"title":"react-es5vses6","description":"","frontmatter":{"title":"react-es5vses6","date":"2017-07-19T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-es5vses6.md"}'),e={name:"posts/前端/以前/react-es5vses6.md"},p=l(`<h1 id="create-react-app" tabindex="-1">create react APP <a class="header-anchor" href="#create-react-app" aria-label="Permalink to &quot;create react APP&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Greeting extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var createReactClass = require(&#39;create-react-class&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var Greeting = createReactClass({</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="declaring-default-props" tabindex="-1">Declaring Default Props <a class="header-anchor" href="#declaring-default-props" aria-label="Permalink to &quot;Declaring Default Props&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Greeting extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Greeting.defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;Mary&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var Greeting = createReactClass({</span></span>
<span class="line"><span style="color:#A6ACCD;">  getDefaultProps: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;Mary&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="setting-the-initial-state" tabindex="-1">Setting the Initial State <a class="header-anchor" href="#setting-the-initial-state" aria-label="Permalink to &quot;Setting the Initial State&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Counter extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {count: props.initialCount};</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var Counter = createReactClass({</span></span>
<span class="line"><span style="color:#A6ACCD;">  getInitialState: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {count: this.props.initialCount};</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="autobind" tabindex="-1">AutoBind <a class="header-anchor" href="#autobind" aria-label="Permalink to &quot;AutoBind&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class SayHello extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {message: &#39;Hello!&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;">    // This line is important!</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.handleClick = this.handleClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  handleClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(this.state.message);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Because \`this.handleClick\` is bound, we can use it as an event handler.</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Say hello</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var SayHello = createReactClass({</span></span>
<span class="line"><span style="color:#A6ACCD;">  getInitialState: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {message: &#39;Hello!&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  handleClick: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(this.state.message);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Say hello</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),t=[p];function o(c,i,r,C,A,y){return n(),a("div",null,t)}const h=s(e,[["render",o]]);export{d as __pageData,h as default};
