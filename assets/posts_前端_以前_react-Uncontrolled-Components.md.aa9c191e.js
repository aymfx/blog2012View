import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const y=JSON.parse('{"title":"react-Uncontrolled Components","description":"","frontmatter":{"title":"react-Uncontrolled Components","date":"2017-07-17T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Uncontrolled-Components.md"}'),e={name:"posts/前端/以前/react-Uncontrolled-Components.md"},t=l(`<blockquote><p>引用文字</p></blockquote><h1 id="不受控制的组件" tabindex="-1">不受控制的组件 <a class="header-anchor" href="#不受控制的组件" aria-label="Permalink to &quot;不受控制的组件&quot;">​</a></h1><blockquote><p>受控制的组件表单数据由一个 react 组件处理，而不受控制的组件由 dom 元素自己处理</p></blockquote><blockquote><p>我们可以通过控制 ref 来跟新组件状态</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class NameForm extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleSubmit = this.handleSubmit.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSubmit(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;A name was submitted:&#39;+this.input.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;A age was submitted:&#39;+this.refs.age.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return ( &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">               Name: &lt;input type=&quot;text&quot; ref={(input) =&gt;this.input = input}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">               age: &lt;input type=&quot;text&quot; ref=&quot;age&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;input type=&quot;submit&quot; value=&quot;提交&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/form&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h1><blockquote><p>对于 checkbox 和 radio 采用 defaultChecked,对于 select 和 textarea 采用 defaultValue</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Name:</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">          defaultValue=&quot;Bob&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          ref={(input) =&gt; this.input = input} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),p=[t];function o(c,r,i,C,A,u){return a(),n("div",null,p)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
