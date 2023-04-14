import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"react-Optimizing Performance","description":"","frontmatter":{"title":"react-Optimizing Performance","date":"2017-07-18T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Optimizing-Performance.md"}'),p={name:"posts/前端/以前/react-Optimizing-Performance.md"},e=l(`<h1 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h1><blockquote><p>react 做了很多处理，最大限度的减少了 dom 的操作，使我们能快速的开发，而不需要做很多操作，但是有些地方需要我们手动去操作 react 应用，提高性能</p></blockquote><ul><li>使用生产环境下的 react.js,这样可以减少体积以及在生产环境下不需要的提示</li><li>创建 reactAPP ---&gt; npm run build 进行打包压缩</li><li>利用 branch 创建更高效的生产版本 <ul><li>npm install --save-dev uglify-js-brunch 或者 yarn add --dev uglify-js-brunch</li><li>brunch build -p</li></ul></li><li>利用 webpack 创建，如果是用 create-react 创建的可以不考虑重新建</li></ul><h1 id="虚拟节点-避免重复渲染" tabindex="-1">虚拟节点，避免重复渲染 <a class="header-anchor" href="#虚拟节点-避免重复渲染" aria-label="Permalink to &quot;虚拟节点，避免重复渲染&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>第一种方式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class CounterButton extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {count:1}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    shouldComponentUpdate(nextProps,nextState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(this.props.color !== nextProps.color){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(this.state.count !==nextState.count){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">                color={this.props.color}</span></span>
<span class="line"><span style="color:#A6ACCD;">                onClick={()=&gt;this.setState(state =&gt; ({count:state.count+1}))}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            Count:{this.state.count}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>第二种方式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class CounterButton extends React.PureComponent {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {count:1}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">                color={this.props.color}</span></span>
<span class="line"><span style="color:#A6ACCD;">                onClick={()=&gt;this.setState(state =&gt; ({count:state.count+1}))}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                Count:{this.state.count}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>第二种适合复杂的情况下的浅比较，但是在某些情况下浅比较也会错失，如数据的突变情况</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class ListOfWords extends React.PureComponent{</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;{this.props.words.join(&#39;,&#39;)}&lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class WordAdder extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {words:[&#39;maodan&#39;]};</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleClick = this.handleClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         //这是造成不跟新的原因</span></span>
<span class="line"><span style="color:#A6ACCD;">        const words  =this.state.words;</span></span>
<span class="line"><span style="color:#A6ACCD;">        words.push(&#39;iloveyou&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({words:words})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return(&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={this.handleClick}&gt;确定&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;ListOfWords words={this.state.words}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//可以使用concat链接解决、</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handleClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState(prevState =&gt;({words:[...prevState.words,&#39;iloveyou&#39;]}))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不可变的数据结构为您提供了一种跟踪对象变化的廉价方法，这就是我们需要实现的组件。这通常会给你带来一个很好的性能提升</p></blockquote><blockquote><p>没怎么看懂 <a href="https://facebook.github.io/react/docs/optimizing-performance.html" target="_blank" rel="noreferrer">https://facebook.github.io/react/docs/optimizing-performance.html</a></p></blockquote>`,14),t=[e];function o(c,r,i,C,A,y){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
