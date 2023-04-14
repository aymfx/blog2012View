import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"sass基本语法","description":"","frontmatter":{"title":"sass基本语法","date":"2018-05-08T20:13:00.000Z","tags":["css"]},"headers":[],"relativePath":"posts/前端/以前/sass基本语法.md"}'),p={name:"posts/前端/以前/sass基本语法.md"},e=l(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>Sass的学名叫“CSS预处理器”，就是在CSS的基础上，引入了变量、嵌套、mixin（混合）、运算以及函数等功能，增加了代码的灵活性，可以让我们以更少的代码实现同样的效果，而且代码的整洁度、可读性更强。</p></blockquote><h3 id="环境-参考" tabindex="-1">环境 参考 <a class="header-anchor" href="#环境-参考" aria-label="Permalink to &quot;环境 参考&quot;">​</a></h3><blockquote><p>我是放在vue脚手架中操作的，不需要装，大致的语法是一样的，编译参考上文</p></blockquote><blockquote><p>本文是参考Sass中文网的，我只是个精简版的</p></blockquote><blockquote><p>Sass中文网</p></blockquote><h4 id="使用变量" tabindex="-1">使用变量 <a class="header-anchor" href="#使用变量" aria-label="Permalink to &quot;使用变量&quot;">​</a></h4><blockquote><p>变量声明用 $作为前缀</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$text-Size = 30px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$plain-font: &quot;Myriad Pro&quot;、Myriad、&quot;Helvetica Neue&quot;、Helvetica、&quot;Liberation Sans&quot;、Arial和sans-serif; sans-serif;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$hight-color:#fff;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="变量使用" tabindex="-1">变量使用 <a class="header-anchor" href="#变量使用" aria-label="Permalink to &quot;变量使用&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">编译前:</span></span>
<span class="line"><span style="color:#A6ACCD;">  $h1-Size:36px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $plain-font: &quot;Myriad Pro&quot;,Myriad,&quot;Helvetica Neue&quot;,Helvetica,&quot;Liberation Sans&quot;,Arial和sans-serif,sans-serif;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $h1-color:#f99;</span></span>
<span class="line"><span style="color:#A6ACCD;">  h1{</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: $h1-Size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: $plain-font;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: $h1-color;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">编译后:</span></span>
<span class="line"><span style="color:#A6ACCD;">font-size: 36px;</span></span>
<span class="line"><span style="color:#A6ACCD;">font-family: &quot;Myriad Pro&quot;, Myriad, &quot;Helvetica Neue&quot;, Helvetica, &quot;Liberation Sans&quot;, Arial和sans-serif, sans-serif;</span></span>
<span class="line"><span style="color:#A6ACCD;">color: #f99;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>可能看起来代码量反而增多了，但是在写大型项目的时候会让我们加快速度编码 $link-color与$ink_color指向的是同一变量，使用时小心</p></blockquote><h3 id="嵌套规则" tabindex="-1">嵌套规则 <a class="header-anchor" href="#嵌套规则" aria-label="Permalink to &quot;嵌套规则&quot;">​</a></h3><blockquote><p>大家肯定经历过这种事情</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.container h1{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  .container a{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  .container img{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  .container span{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  .container div{}</span></span>
<span class="line"><span style="color:#A6ACCD;">//需要重复写同一个选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">sass的嵌套可以避免这种情况</span></span>
<span class="line"><span style="color:#A6ACCD;">  $box-size:600px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // $box-background:$h1-color-125;   //颜色可以进行加减乘除 但是变量一定要先声明在使用啊</span></span>
<span class="line"><span style="color:#A6ACCD;">  $h1-Size:36px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $plain-font: &quot;Myriad Pro&quot;,Myriad,&quot;Helvetica Neue&quot;,Helvetica,&quot;Liberation Sans&quot;,Arial和sans-serif,sans-serif;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $h1-color:#f99;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $h1_color:#99d;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $box-background:$h1-color - 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #container{</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: $box-background;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: $box-size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: $box-size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin: 0 auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    h1{</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: $h1-Size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: $plain-font;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: $h1-color;</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ul{</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &amp; &gt; li{  //&amp;表示父级元素 最靠近他的那个</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a{</span></span>
<span class="line"><span style="color:#A6ACCD;">          text-decoration: underline;</span></span>
<span class="line"><span style="color:#A6ACCD;">&amp;:hover{</span></span>
<span class="line"><span style="color:#A6ACCD;">color:#f999;</span></span>
<span class="line"><span style="color:#A6ACCD;">text-decoration:none;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">群组选择器的嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;">#container{</span></span>
<span class="line"><span style="color:#A6ACCD;">div,span.ul{color:#f88;}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">这种嵌套不要超过三层，不然降低网站的浏览速度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">配合 &gt; + ~ 三种选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">article {</span></span>
<span class="line"><span style="color:#A6ACCD;">~artlice {color:#f99}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; section {background:#f00;}</span></span>
<span class="line"><span style="color:#A6ACCD;">dl &gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">dt{color:#f99}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">嵌套属性</span></span>
<span class="line"><span style="color:#A6ACCD;"> nav {</span></span>
<span class="line"><span style="color:#A6ACCD;">border: {</span></span>
<span class="line"><span style="color:#A6ACCD;">style:solid;</span></span>
<span class="line"><span style="color:#A6ACCD;">width:1px;</span></span>
<span class="line"><span style="color:#A6ACCD;">color:#9ff;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&amp; 表示 父级元素也可以这样用</span></span>
<span class="line"><span style="color:#A6ACCD;">编译前</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#main {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: black;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;-sidebar { border: 1px solid; }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">编译后</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#main {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: black; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  #main-sidebar {</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="导入sass文件" tabindex="-1">导入sass文件 <a class="header-anchor" href="#导入sass文件" aria-label="Permalink to &quot;导入sass文件&quot;">​</a></h4><blockquote><p>当我们不需要把导入的文件生成一个单独的css时，我们仅需在在文件名前面加一个_</p></blockquote><blockquote><p>@import &#39;/sass/_sigle.css&#39; //这就会将内容导出到这个引用的地方</p></blockquote><ul><li>被导入文件的名字以.css结尾；</li><li>被导入文件的名字是一个URL地址（例如<a href="http://www.sass.hk/css/css.css" target="_blank" rel="noreferrer">http://www.sass.hk/css/css.css</a> ），由此可用谷歌字体API提供的相应服务；</li><li>被导入文件的名字是CSS的url()值。</li></ul><blockquote><p>设置默认值 加 !default</p></blockquote><blockquote><p>当多个文件导入，有重名的变量时，保证引用的时重新定义过的，如果没有重新定义则使用预先定义好的默认值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ defalut-color:red !default;</span></span>
<span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">color:$ defalut-color;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>####嵌入导入</p><blockquote><p>你的局部sass文件在哪里被引用，就会导出到那个地方</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">aside{</span></span>
<span class="line"><span style="color:#A6ACCD;">div{@import &#39;_div.css&#39;}  //css被导入了，很强大呀</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*!  我是强力注释 我会出现在css文件里面*/</span></span>
<span class="line"><span style="color:#A6ACCD;">div{</span></span>
<span class="line"><span style="color:#A6ACCD;">color:#f09; // 我不会出现在css里面</span></span>
<span class="line"><span style="color:#A6ACCD;">font-size:36px; /*我也不会*/</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">插值语句用于注释</span></span>
<span class="line"><span style="color:#A6ACCD;">$version: &quot;1.2.3&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">/* This CSS is generated by My Snazzy Framework version #{$version}. */</span></span>
<span class="line"><span style="color:#A6ACCD;">编译后</span></span>
<span class="line"><span style="color:#A6ACCD;">/* This CSS is generated by My Snazzy Framework version 1.2.3. */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="混合器" tabindex="-1">混合器 <a class="header-anchor" href="#混合器" aria-label="Permalink to &quot;混合器&quot;">​</a></h4><blockquote><p>当一组css在多个地方使用时，可以使用这种方式</p></blockquote><blockquote><p>先定义一个混合器 @mixin</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  @mixin imgradius{</span></span>
<span class="line"><span style="color:#A6ACCD;">       display: inline;</span></span>
<span class="line"><span style="color:#A6ACCD;">       text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">       width: 120px;</span></span>
<span class="line"><span style="color:#A6ACCD;">       height: 120px;</span></span>
<span class="line"><span style="color:#A6ACCD;">       border-radius: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="使用-include" tabindex="-1">使用 @include <a class="header-anchor" href="#使用-include" aria-label="Permalink to &quot;使用 @include&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">img{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @include imgradius;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="给混合器传参数" tabindex="-1">给混合器传参数 <a class="header-anchor" href="#给混合器传参数" aria-label="Permalink to &quot;给混合器传参数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">定义下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> @mixin li-style($type,$position){</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style-type:$type;</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style-position:$position;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">使用下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">li:first-child{</span></span>
<span class="line"><span style="color:#A6ACCD;">      @include li-style(circle,inside)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    li:last-child{</span></span>
<span class="line"><span style="color:#A6ACCD;">      @include li-style(square,inside)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="可以指定默认参数" tabindex="-1">可以指定默认参数 <a class="header-anchor" href="#可以指定默认参数" aria-label="Permalink to &quot;可以指定默认参数&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@mixin li-style($type:decimal,$position:inside){</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style-type:$type;</span></span>
<span class="line"><span style="color:#A6ACCD;">        list-style-position:$position;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> li:last-child{</span></span>
<span class="line"><span style="color:#A6ACCD;">      @include li-style();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="选择器继承-extend" tabindex="-1">选择器继承 @extend <a class="header-anchor" href="#选择器继承-extend" aria-label="Permalink to &quot;选择器继承 @extend&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.biaoti{</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: $h1-Size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-family: $plain-font;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: $h1-color;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @extend .biaoti;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="颜色函数" tabindex="-1">颜色函数 <a class="header-anchor" href="#颜色函数" aria-label="Permalink to &quot;颜色函数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$box-color: red;        </span></span>
<span class="line"><span style="color:#A6ACCD;">ul {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: $box-color;      </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">li {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: darken($box-color,30%);       </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//编译后：</span></span>
<span class="line"><span style="color:#A6ACCD;">ul {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">li {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: #660000;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="另外几种颜色函数" tabindex="-1">另外几种颜色函数 <a class="header-anchor" href="#另外几种颜色函数" aria-label="Permalink to &quot;另外几种颜色函数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lighten(#cc3, 10%) // #d6d65c</span></span>
<span class="line"><span style="color:#A6ACCD;">grayscale(#cc3) // #808080</span></span>
<span class="line"><span style="color:#A6ACCD;">complement(#cc3) // #33c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="数据类型-data-types" tabindex="-1">数据类型 (Data Types) <a class="header-anchor" href="#数据类型-data-types" aria-label="Permalink to &quot;数据类型 (Data Types)&quot;">​</a></h4><blockquote><p>数字，1, 2, 13, 10px 字符串，有引号字符串与无引号字符串，&quot;foo&quot;, &#39;bar&#39;, baz SassScript 支持 CSS 的两种字符串类型：有引号字符串 (quoted strings)，如 &quot;Lucida Grande&quot; &#39;<a href="http://sass-lang.com" target="_blank" rel="noreferrer">http://sass-lang.com</a>&#39;；与无引号字符串 (unquoted strings)，如 sans-serif bold，在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{} (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@mixin firefox-message($selector) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  body.firefox #{$selector}:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;Hi, Firefox users!&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@include firefox-message(&quot;.header&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">编译后</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">body.firefox .header:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &quot;Hi, Firefox users!&quot;; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>颜色，blue, #04a3f9, rgba(255,0,0,0.5) 布尔型，true, false 空值，null 数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)</p></blockquote><h3 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-label="Permalink to &quot;运算&quot;">​</a></h3><blockquote><p>支持数字算数，支持关系运算</p></blockquote><blockquote><p>/ 除法是特例，通常在这几种种情况下展现 如果值，或值的一部分，是变量或者函数的返回值 如果值被圆括号包裹 如果值是算数表达式的一部分</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font: 10px/8px;             // Plain CSS, no division</span></span>
<span class="line"><span style="color:#A6ACCD;">  $width: 1000px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: $width/2;            // Uses a variable, does division</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: round(1.5)/2;        // Uses a function, does division</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: (500px/2);          // Uses parentheses, does division</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin-left: 5px + 8px/2px; // Uses +, does division</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">编译后</span></span>
<span class="line"><span style="color:#A6ACCD;">p {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font: 10px/8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: 500px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 250px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin-left: 9px; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">保证变量不做除法运算的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">p {</span></span>
<span class="line"><span style="color:#A6ACCD;">  $font-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $line-height: 30px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font: #{$font-size}/#{$line-height};</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">编译后</span></span>
<span class="line"><span style="color:#A6ACCD;">p {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font: 12px/30px; }</span></span>
<span class="line"><span style="color:#A6ACCD;">加号链接符的秘密</span></span>
<span class="line"><span style="color:#A6ACCD;">如果有引号字符串（位于 + 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 + 左侧）连接有引号字符串，运算结果则没有引号。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &quot;Foo &quot; + Bar;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-family: sans- + &quot;serif&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">编译为</span></span>
<span class="line"><span style="color:#A6ACCD;">p:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &quot;Foo Bar&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-family: sans-serif; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><blockquote><p><a href="https://www.sass.hk/docs/#t7-3-6" target="_blank" rel="noreferrer">https://www.sass.hk/docs/#t7-3-6</a> 这是比较齐全的地址 仅供学习之用。</p></blockquote>`,53),o=[e];function c(t,i,r,C,A,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
