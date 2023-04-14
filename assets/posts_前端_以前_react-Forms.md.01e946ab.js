import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const h=JSON.parse('{"title":"react -Forms","description":"","frontmatter":{"title":"react -Forms","date":"2017-07-11T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Forms.md"}'),e={name:"posts/前端/以前/react-Forms.md"},t=l(`<h1 id="react-中的表单" tabindex="-1">react 中的表单 <a class="header-anchor" href="#react-中的表单" aria-label="Permalink to &quot;react 中的表单&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Name:</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;text&quot; name=&quot;name&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="控制组件-controlled-components" tabindex="-1">控制组件 Controlled Components <a class="header-anchor" href="#控制组件-controlled-components" aria-label="Permalink to &quot;控制组件 Controlled Components&quot;">​</a></h1><blockquote><p>将用户操作输入框与 setState()状态值改变联合起来，从而实现单一数据流，这叫控制组件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class NameForm extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {value: &#39;&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    this.handleChange = this.handleChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.handleSubmit = this.handleSubmit.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  handleChange(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setState({value: event.target.value});</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  handleSubmit(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(&#39;A name was submitted: &#39; + this.state.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Name:</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;input type=&quot;text&quot; value={this.state.value} onChange={this.handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="the-textarea-tag" tabindex="-1">The textarea Tag <a class="header-anchor" href="#the-textarea-tag" aria-label="Permalink to &quot;The textarea Tag&quot;">​</a></h1><blockquote><p>对于文本框，react 依然通过 value 来进行操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Name:</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;textarea value={this.state.value} onChange={this.handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="the-select-tag" tabindex="-1">The select Tag <a class="header-anchor" href="#the-select-tag" aria-label="Permalink to &quot;The select Tag&quot;">​</a></h1><blockquote><p>对于下拉框，我们将默认值放在了 select 上,于是只要更新一个地方就好</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Pick your favorite La Croix flavor:</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;select value={this.state.value} onChange={this.handleChange}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;option value=&quot;grapefruit&quot;&gt;Grapefruit&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;option value=&quot;lime&quot;&gt;Lime&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;option value=&quot;coconut&quot;&gt;Coconut&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;option value=&quot;mango&quot;&gt;Mango&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Reservation extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state ={</span></span>
<span class="line"><span style="color:#A6ACCD;">            isGoing:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            numberOfGuests:2</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleInputChange = this.handleInputChange.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleInputChange(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const target =event.target;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const value =target.type == &#39;checkbox&#39; ? target.checked : target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const name =target.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(value,name,520)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">            [name]:value</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render () {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return (</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     Is going:</span></span>
<span class="line"><span style="color:#A6ACCD;">                     &lt;input type=&quot;checkbox&quot; name=&quot;isGoing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            checked={this.state.isGoing}</span></span>
<span class="line"><span style="color:#A6ACCD;">                            onChange={this.handleInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">                     /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;br/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;laber&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     Number of guests:</span></span>
<span class="line"><span style="color:#A6ACCD;">                     &lt;input type=&quot;number&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            name=&quot;numberOfGuests&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            value={this.state.numberValue}</span></span>
<span class="line"><span style="color:#A6ACCD;">                            onChange={this.handleInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">                     /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 &lt;/laber&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),p=[t];function o(c,i,C,r,A,u){return a(),n("div",null,p)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};
