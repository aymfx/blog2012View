import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"react -JSX In Depth","description":"","frontmatter":{"title":"react -JSX In Depth","date":"2017-07-13T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-JSX-In-Depth.md"}'),p={name:"posts/前端/以前/react-JSX-In-Depth.md"},e=l(`<h1 id="jsx-的语法糖是以下格式" tabindex="-1">JSX 的语法糖是以下格式 <a class="header-anchor" href="#jsx-的语法糖是以下格式" aria-label="Permalink to &quot;JSX 的语法糖是以下格式&quot;">​</a></h1><blockquote><p>React.createElement(component,props,..childeren)</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">compiles before:</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyButton color=&quot;blue&quot; shadowSize={2}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Click Me</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/MyButton&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">compiles into:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">React.createElement(</span></span>
<span class="line"><span style="color:#A6ACCD;">  MyButton,</span></span>
<span class="line"><span style="color:#A6ACCD;">  {color: &#39;blue&#39;, shadowSize: 2},</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;Click Me&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="使用点作为-jsx-的类型-using-dot-notation-for-jsx-type" tabindex="-1">使用点作为 jsx 的类型 Using Dot Notation for JSX Type <a class="header-anchor" href="#使用点作为-jsx-的类型-using-dot-notation-for-jsx-type" aria-label="Permalink to &quot;使用点作为 jsx 的类型 Using Dot Notation for JSX Type&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const MyComponents = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  DatePicker: function DatePicker(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;Imagine a {props.color} datepicker here.&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function BlueDatePicker() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;MyComponents.DatePicker color=&quot;blue&quot; /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="自定义的组件必须大写-否则-jsx-认为元素是-html-标签" tabindex="-1">自定义的组件必须大写，否则 jsx 认为元素是 html 标签 <a class="header-anchor" href="#自定义的组件必须大写-否则-jsx-认为元素是-html-标签" aria-label="Permalink to &quot;自定义的组件必须大写，否则 jsx 认为元素是 html 标签&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Wrong! This is a component and should have been capitalized:</span></span>
<span class="line"><span style="color:#A6ACCD;">function hello(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Correct! This use of &lt;div&gt; is legitimate because div is a valid HTML tag:</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function HelloWorld() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Wrong! React thinks &lt;hello /&gt; is an HTML tag because it&#39;s not capitalized:</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;hello toWhat=&quot;World&quot; /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Correct! This is a component and should be capitalized:</span></span>
<span class="line"><span style="color:#A6ACCD;">function Hello(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Correct! This use of &lt;div&gt; is legitimate because div is a valid HTML tag:</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function HelloWorld() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Correct! React knows &lt;Hello /&gt; is a component because it&#39;s capitalized.</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;Hello toWhat=&quot;World&quot; /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="jsx-的类型不能是一个不能是一个表达式" tabindex="-1">JSX 的类型不能是一个不能是一个表达式 <a class="header-anchor" href="#jsx-的类型不能是一个不能是一个表达式" aria-label="Permalink to &quot;JSX 的类型不能是一个不能是一个表达式&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { PhotoStory, VideoStory } from &#39;./stories&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const components = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  photo: PhotoStory,</span></span>
<span class="line"><span style="color:#A6ACCD;">  video: VideoStory</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Story(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Wrong! JSX type can&#39;t be an expression.</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;components[props.storyType] story={props.story} /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { PhotoStory, VideoStory } from &#39;./stories&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const components = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  photo: PhotoStory,</span></span>
<span class="line"><span style="color:#A6ACCD;">  video: VideoStory</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Story(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Correct! JSX type can be a capitalized variable.</span></span>
<span class="line"><span style="color:#A6ACCD;">  const SpecificStory = components[props.storyType];</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;SpecificStory story={props.story} /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="props-in-jsx" tabindex="-1">Props in JSX <a class="header-anchor" href="#props-in-jsx" aria-label="Permalink to &quot;Props in JSX&quot;">​</a></h1><blockquote><p>在 jsx 中只能存在表达式，if 和 for 都不属于表达式，所以在里面不能用他们，但是有替代方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function NumberDescriber(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let description;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.number % 2 == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    description = &lt;strong&gt;even&lt;/strong&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    description = &lt;i&gt;odd&lt;/i&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;div&gt;{props.number} is an {description} number&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>使用字面量以及符号转义</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;MyComponent message=&quot;hello world&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyComponent message={&#39;hello world&#39;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyComponent message=&quot;&amp;lt;3&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyComponent message={&#39;&lt;3&#39;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="属性默认为-true-一般不推荐使用-与-es6-的-foo-foo-foo-省略很相近" tabindex="-1">属性默认为 true，一般不推荐使用，与 es6 的{foo}({foo:foo})省略很相近 <a class="header-anchor" href="#属性默认为-true-一般不推荐使用-与-es6-的-foo-foo-foo-省略很相近" aria-label="Permalink to &quot;属性默认为 true，一般不推荐使用，与 es6 的{foo}({foo:foo})省略很相近&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;MyTextBox autocomplete /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyTextBox autocomplete={true} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="利用-es6-的-传播属性-props" tabindex="-1">利用 es6 的...传播属性（props） <a class="header-anchor" href="#利用-es6-的-传播属性-props" aria-label="Permalink to &quot;利用 es6 的...传播属性（props）&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function App1() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;Greeting firstName=&quot;Ben&quot; lastName=&quot;Hector&quot; /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App2() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const props = {firstName: &#39;Ben&#39;, lastName: &#39;Hector&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;Greeting {...props} /&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="false-null-undefind-true-这些不会被渲染出来但是他们将可以作为-boolean-值判断" tabindex="-1">false null undefind true 这些不会被渲染出来但是他们将可以作为 boolean 值判断 <a class="header-anchor" href="#false-null-undefind-true-这些不会被渲染出来但是他们将可以作为-boolean-值判断" aria-label="Permalink to &quot;false null undefind true 这些不会被渲染出来但是他们将可以作为 boolean 值判断&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {showHeader &amp;&amp; &lt;Header /&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Content /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
