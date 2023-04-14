import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"es6-块级作用域绑定","description":"","frontmatter":{"title":"es6-块级作用域绑定","date":"2018-01-24T21:32:33.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-块级作用域绑定.md"}'),e={name:"posts/前端/以前/es6-块级作用域绑定.md"},p=l(`<p><img src="http://upload-images.jianshu.io/upload_images/10843623-82935528251fe29d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="timg.jpg"></p><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>花点时间重新复习一遍es6的语法</p></blockquote><blockquote><p>我的博客地址 ：<a href="http://www.aymfx.cn/" target="_blank" rel="noreferrer">http://www.aymfx.cn/</a></p></blockquote><h3 id="var-let-const-三者的区别" tabindex="-1">var，let, const 三者的区别 <a class="header-anchor" href="#var-let-const-三者的区别" aria-label="Permalink to &quot;var，let, const 三者的区别&quot;">​</a></h3><blockquote><p>var 声明的变量会有变量提升的过程，将被提升到作用域的顶部，或者函数的顶部</p></blockquote><blockquote><p>let 声明的变量，只能在声明的块作用域中访问和使用，存在于函数内部以及花括号之间的区域</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); //a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); //a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="const-是用来声明静态变量的-一但设置了值之后就不可改变" tabindex="-1">const 是用来声明静态变量的，一但设置了值之后就不可改变 <a class="header-anchor" href="#const-是用来声明静态变量的-一但设置了值之后就不可改变" aria-label="Permalink to &quot;const 是用来声明静态变量的，一但设置了值之后就不可改变&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">a= 60;</span></span>
<span class="line"><span style="color:#A6ACCD;">//Assignment to constant variable.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="const在对象中是绑定了这个对象-但是对象的内容是可以改变的" tabindex="-1">const在对象中是绑定了这个对象，但是对象的内容是可以改变的 <a class="header-anchor" href="#const在对象中是绑定了这个对象-但是对象的内容是可以改变的" aria-label="Permalink to &quot;const在对象中是绑定了这个对象，但是对象的内容是可以改变的&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = {length:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a.length = 6;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="var-可以重复声明变量-let和const声明的变量不能重新声明" tabindex="-1">var 可以重复声明变量 let和const声明的变量不能重新声明 <a class="header-anchor" href="#var-可以重复声明变量-let和const声明的变量不能重新声明" aria-label="Permalink to &quot;var 可以重复声明变量 let和const声明的变量不能重新声明&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var count = 30;</span></span>
<span class="line"><span style="color:#A6ACCD;">let count = 40;</span></span>
<span class="line"><span style="color:#A6ACCD;">VM49:2 Uncaught SyntaxError: Identifier &#39;count&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="临时死区" tabindex="-1">临时死区 <a class="header-anchor" href="#临时死区" aria-label="Permalink to &quot;临时死区&quot;">​</a></h3><p>let和const不会出现变量提升的情况，未定义的值将直接报错,也就产生所谓的临时死区</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(typeof value);  //alue is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">    let value = &quot;blue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>注意这种情况</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(typeof value);  //alue is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">if(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    let value = &quot;blue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="循环中的块级作用域绑定" tabindex="-1">循环中的块级作用域绑定 <a class="header-anchor" href="#循环中的块级作用域绑定" aria-label="Permalink to &quot;循环中的块级作用域绑定&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fun = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i = 0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">    fun.push(function(){console.log(i)})</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fun.forEach(function(f){f()})  //0VM118:3 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>上面代码输出了10个10,不对的，我们期待是0-9，改成这样的话</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let fun = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">    fun.push(function(){console.log(i)})</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fun.forEach(function(f){f()})  //0VM118:3 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>以上写法对于 for-in 以及for-of 同样适用</p></blockquote><blockquote><p>循环中使用const声明</p></blockquote><blockquote><p>这样会报错</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var f = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">for(const i =0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">    f.push(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">} //Assignment to constant variable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>但是 for-in 和for-of，由于是绑定元素不会报错，上面在第二次循环修改了变量的值导致报错</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var f = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    b:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    c:3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(const key in obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">    f.push(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">f.forEach(function(f){f()}) </span></span>
<span class="line"><span style="color:#A6ACCD;">//a</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM184:10 b</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM184:10 c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">f= [&#39;1&#39;,2,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(const key of f){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//VM204:4 1</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM204:4 2</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM204:4 4</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM204:4 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="全局作用域的绑定" tabindex="-1">全局作用域的绑定 <a class="header-anchor" href="#全局作用域的绑定" aria-label="Permalink to &quot;全局作用域的绑定&quot;">​</a></h3><blockquote><p>var 在全局中相当于添加了window对象的属性，但是有可能误操作覆盖了已有的全局属性</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(window.RegExp); //ƒ RegExp() { [native code] }</span></span>
<span class="line"><span style="color:#A6ACCD;">var RegExp = &quot;正则表达式&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.RegExp); //正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>相对于var来说let和const不会创建一个新的绑定,他会屏蔽window的属性，而不是添加或者覆盖window的属性</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(window.RegExp); //ƒ RegExp() { [native code] }</span></span>
<span class="line"><span style="color:#A6ACCD;">let RegExp = &quot;正则表达式&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.RegExp); //ƒ RegExp() { [native code] }</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(RegExp) //正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,36),o=[p];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};
