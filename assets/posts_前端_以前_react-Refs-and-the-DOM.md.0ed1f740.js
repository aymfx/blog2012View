import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"react-Refs and the DOM","description":"","frontmatter":{"title":"react-Refs and the DOM","date":"2017-07-14T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Refs-and-the-DOM.md"}'),p={name:"posts/前端/以前/react-Refs-and-the-DOM.md"},e=l(`<h1 id="有时候我们需要修改子元素-我们必须通过父元素的传递-props-来重新渲染-reac-提供了方便修改子元素的方法-那就是采用-refs-属性进行操作-dom-但是我们不要随便操作-dom" tabindex="-1">有时候我们需要修改子元素，我们必须通过父元素的传递 props 来重新渲染，reac 提供了方便修改子元素的方法，那就是采用 refs 属性进行操作 dom，但是我们不要随便操作 dom <a class="header-anchor" href="#有时候我们需要修改子元素-我们必须通过父元素的传递-props-来重新渲染-reac-提供了方便修改子元素的方法-那就是采用-refs-属性进行操作-dom-但是我们不要随便操作-dom" aria-label="Permalink to &quot;有时候我们需要修改子元素，我们必须通过父元素的传递 props 来重新渲染，reac 提供了方便修改子元素的方法，那就是采用 refs 属性进行操作 dom，但是我们不要随便操作 dom&quot;">​</a></h1><h2 id="什么时候使用-refs" tabindex="-1">什么时候使用 refs <a class="header-anchor" href="#什么时候使用-refs" aria-label="Permalink to &quot;什么时候使用 refs&quot;">​</a></h2><blockquote><p>管理焦点，文本，媒体播放</p></blockquote><blockquote><p>需要触发的命令动画</p></blockquote><blockquote><p>继承的第三方 dom 库</p></blockquote><h1 id="举一个例子" tabindex="-1">举一个例子 <a class="header-anchor" href="#举一个例子" aria-label="Permalink to &quot;举一个例子&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// ref</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class CustomTextInput extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.focus = this.focus.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    focus(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.textInput.focus();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ref={(input) =&gt; {this.textInput = input}}</span></span>
<span class="line"><span style="color:#A6ACCD;">            /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>我们必须在 class 定义的组件使用 ref，是 function 将不起作用的，那是因为他们不存在实例，但是我们可以在 function 中具体的 html 元素或者类组件使用 ref</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function CustomTextInput(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // textInput must be declared here so the ref callback can refer to it</span></span>
<span class="line"><span style="color:#A6ACCD;">  let textInput = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function handleClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    textInput.focus();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ref={(input) =&gt; { textInput = input; }} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        value=&quot;Focus the text input&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={handleClick}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="暴露-refs-给父组件" tabindex="-1">暴露 refs 给父组件 <a class="header-anchor" href="#暴露-refs-给父组件" aria-label="Permalink to &quot;暴露 refs 给父组件&quot;">​</a></h1><blockquote><p>在一些情况下，我们想访问父组件下的子组件，但是通常是不允许的，这会破坏组件的封装性，但是我们可以传一个特殊的属性给子元素，从而操作子元素的 dom</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function CustomTextInput(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(props.inputRef);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;input ref={props.inputRef} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Parent extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(this.inpsstElement);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;CustomTextInput</span></span>
<span class="line"><span style="color:#A6ACCD;">                inputRef={el =&gt; this.inputElement  =el}</span></span>
<span class="line"><span style="color:#A6ACCD;">            /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>以上的方式既适合 class 组件也是 function 组件</p></blockquote>`,13),t=[e];function o(c,r,i,C,A,u){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
