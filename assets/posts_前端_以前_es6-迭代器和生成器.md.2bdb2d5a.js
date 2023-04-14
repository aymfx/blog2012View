import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"es6-迭代器和生成器","description":"","frontmatter":{"title":"es6-迭代器和生成器","date":"2018-03-20T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-迭代器和生成器.md"}'),e={name:"posts/前端/以前/es6-迭代器和生成器.md"},p=l(`<p><img src="http://upload-images.jianshu.io/upload_images/10843623-4adb688267c9f4d3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="timg.jpg"></p><h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><blockquote><p>从家里回来了，翻了翻书，发现es6的知识点，忘了不少，还好记了点笔记，今年需要更加努力，看着以前的同学都开始娶妻生子，买车买房，我也要努力为自己的未来考虑</p></blockquote><blockquote><p>我的博客地址 ：<a href="https://link.jianshu.com/?t=http%3A%2F%2Fwww.aymfx.cn%2F" target="_blank" rel="noreferrer">http://www.aymfx.cn/</a></p></blockquote><h3 id="迭代器" tabindex="-1">迭代器 <a class="header-anchor" href="#迭代器" aria-label="Permalink to &quot;迭代器&quot;">​</a></h3><blockquote><p>一个迭代器对象 ，知道如何每次访问集合中的一项， 并跟踪该序列中的当前位置。在 JavaScript 中 迭代器是一个对象，它提供了一个next() 方法，用来返回序列中的下一项。这个方法返回包含两个属性：done和 value。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//这是模仿es6迭代器的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">    function createIterator (items){</span></span>
<span class="line"><span style="color:#A6ACCD;">        var i =0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            next:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">                var done = (i&gt;=items.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">                var value = !done ? items[i++]:undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                return {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    done:done,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    value:value</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var iterator= createIterator([1,2,3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">//{done: false, value: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM42:18 {done: false, value: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM42:19 {done: false, value: 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM42:20 {done: true, value: undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM42:21 {done: true, value: undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这是个简单的es5的迭代器，在es6的迭代器更加复杂</p></blockquote><h3 id="什么是生成器" tabindex="-1">什么是生成器 <a class="header-anchor" href="#什么是生成器" aria-label="Permalink to &quot;什么是生成器&quot;">​</a></h3><blockquote><p>虽然自定义的迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。Generators提供了一个强大的选择：它允许你定义一个包含自有迭代算法的函数， 同时它可以自动维护自己的状态。它是这样表示的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//生成器</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//生成器的调用方式与普通函数相同，只不过返回的是一个迭代器</span></span>
<span class="line"><span style="color:#A6ACCD;"> var iterator= createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//{value: 1, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM55:12 {value: 2, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM55:13 {value: 3, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>每个yield相当于一个调用一次next方法，而且每次执行yield都会暂停一次。函数名前面的*代表它是一个生成器</p></blockquote><blockquote><p>yield只能在生成器中用，不能在普通函数使用,生成器的内部函数也不能使用（语法错误），另外yield关键字可以返回任何值或者表达式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function * createIterator(itmes){</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i = 0; i&lt; items.length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield items[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var iterator= createIterator([1,2,3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//{value: 1, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM98:8 {value: 2, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM98:9 {value: 3, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM98:10 {value: undefined, done: true}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM98:11 {value: undefined, done: true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="生成函数表达式" tabindex="-1">生成函数表达式 <a class="header-anchor" href="#生成函数表达式" aria-label="Permalink to &quot;生成函数表达式&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let createIterator = function *(items) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i&lt; items.length ; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield items[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var iterator= createIterator([1,2,3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//VM108:10 {value: 1, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM108:11 {value: 2, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM108:12 {value: 3, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM108:13 {value: undefined, done: true}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM108:14 {value: undefined, done: true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不能用箭头函数来创建生成器</p></blockquote><h4 id="生成器对象的方式" tabindex="-1">生成器对象的方式 <a class="header-anchor" href="#生成器对象的方式" aria-label="Permalink to &quot;生成器对象的方式&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createIterator:function *(items) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i&lt; items.length ; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield items[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let o.createIterator([1,2,3])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>也可以用es6的写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let o = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    *createIterator(items) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i&lt; items.length ; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield items[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let o.createIterator([1,2,3])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="可迭代对象和for-of循环" tabindex="-1">可迭代对象和for-of循环 <a class="header-anchor" href="#可迭代对象和for-of循环" aria-label="Permalink to &quot;可迭代对象和for-of循环&quot;">​</a></h4><blockquote><p>es6中所有的集合对象（数组，Set集合以及Map集合）和字符串都是可迭代对象，可迭代对象都是具有Symbol.iterator属性，通过指定的函数可以返回一个作用于附属对象的迭代器</p></blockquote><blockquote><p>由生成器创建的迭代器都是可迭代对象，因为它会默认为Symbol.iterator属性赋值。</p></blockquote><blockquote><p>for -of 每次执行都会调用next()方法，并将返回的结果对象的value存储在变量中，直到遇到对象的done属性为true</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> let values = [1,2,3];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(let value of values){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//返回结果</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">// 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="访问可迭代对象的默认的迭代器" tabindex="-1">访问可迭代对象的默认的迭代器 <a class="header-anchor" href="#访问可迭代对象的默认的迭代器" aria-label="Permalink to &quot;访问可迭代对象的默认的迭代器&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let values = [1,2,3];</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = values[Symbol.iterator]();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//运行结果</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//{value: 1, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM57:5 {value: 2, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM57:6 {value: 3, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM57:7 {value: undefined, done: true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="创建可以迭代的对象" tabindex="-1">创建可以迭代的对象 <a class="header-anchor" href="#创建可以迭代的对象" aria-label="Permalink to &quot;创建可以迭代的对象&quot;">​</a></h3><blockquote><p>默认情况下开发者定义的对象是不能迭代的，但是我们可以给Symbol.iterator属性加一个生成器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      items:[],</span></span>
<span class="line"><span style="color:#A6ACCD;">      *[Symbol.iterator](){</span></span>
<span class="line"><span style="color:#A6ACCD;">          for(let item of this.items){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield item;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                                            }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = [1,2,3];</span></span>
<span class="line"><span style="color:#A6ACCD;">a.forEach(value =&gt; arr.items.push(value));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(let x of arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">//2</span></span>
<span class="line"><span style="color:#A6ACCD;">//3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="内建迭代器" tabindex="-1">内建迭代器 <a class="header-anchor" href="#内建迭代器" aria-label="Permalink to &quot;内建迭代器&quot;">​</a></h3><blockquote><p>es6自己定义了一些迭代器，我们只有在无法用这些内建迭代器实现功能时才可能自己创建</p></blockquote><h4 id="集合对象迭代器" tabindex="-1">集合对象迭代器 <a class="header-anchor" href="#集合对象迭代器" aria-label="Permalink to &quot;集合对象迭代器&quot;">​</a></h4><blockquote><p>es6的三种对象数组，Set集合，Map集合都内置了下列三种迭代器</p></blockquote><ul><li>entries() 返回一个迭代器，其值为多个键值对</li><li>values() 返回一个迭代器，其值为集合的值</li><li>keys() 返回一个迭代器，其值为集合中的所有键名</li></ul><blockquote><p>entries()栗子 三种表现</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let colors = [&#39;red&#39;,&#39;blue&#39;,&#39;green&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let tracking = new Set([123,567,9012]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;title&#39;,&#39;es6教程&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;format&#39;,&#39;ebook&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of colors.entries()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of tracking .entries()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of data.entries()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-ac216eee2bd7b0b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="运行结果"></p><blockquote><p>values()迭代器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let colors = [&#39;red&#39;,&#39;blue&#39;,&#39;green&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let tracking = new Set([123,567,9012]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;title&#39;,&#39;es6教程&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;format&#39;,&#39;ebook&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of colors.values()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of tracking .values()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of data.values()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-3c3a015d2b46b429.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>数组的values()谷歌暂不支持，所以我们需要小心使用这些方法，有的浏览器还是支持的，谷歌不支持我肯定不会用</p></blockquote><blockquote><p>keys()迭代器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let colors = [&#39;red&#39;,&#39;blue&#39;,&#39;green&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let tracking = new Set([123,567,9012]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;title&#39;,&#39;es6教程&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;format&#39;,&#39;ebook&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of colors.keys()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of tracking .keys()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let entry of data.keys()){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-ff3457147502690e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>不同的集合类型在使用for-of迭代有各自默认的迭代器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let colors = [&#39;red&#39;,&#39;blue&#39;,&#39;green&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let tracking = new Set([123,567,9012]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;title&#39;,&#39;es6教程&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;format&#39;,&#39;ebook&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//与colors.values()方法相同</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let value of colors){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//与tracking .values()方法相同</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let value of tracking ){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//与data.entries()方法相同</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let value of data){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-5db145e4054950f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>WeakMap和WekSet因为需要管理弱引用，因此无法切确知道集合中存在的值，所以不能被迭代</p></blockquote><h4 id="解构的方式来用for-of" tabindex="-1">解构的方式来用for-of <a class="header-anchor" href="#解构的方式来用for-of" aria-label="Permalink to &quot;解构的方式来用for-of&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let data = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;title&#39;,&#39;es6教程&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">data.set(&#39;format&#39;,&#39;ebook&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(let [key,value] of  data){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(key+&quot;:&quot;+value);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//title:es6教程</span></span>
<span class="line"><span style="color:#A6ACCD;">//format:ebook</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="字符串迭代器" tabindex="-1">字符串迭代器 <a class="header-anchor" href="#字符串迭代器" aria-label="Permalink to &quot;字符串迭代器&quot;">​</a></h3><blockquote><p>es5发布以后，字符串的慢慢变的像数组，于是我们有些方式可以用了，例如我们可以通过[]来获取字符串的中的字符。但是我们怎么访问双字节，就如下面这种情况</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var message = &#39;A 𠮷 B&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0;i&lt;message.length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(message[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-057bb5d93c53e471.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>我们可以用 for-of来做迭代</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var message = &#39;A𠮷B&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i of message){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-227069880ae816f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h3 id="nodelist迭代器" tabindex="-1">NodeList迭代器 <a class="header-anchor" href="#nodelist迭代器" aria-label="Permalink to &quot;NodeList迭代器&quot;">​</a></h3><blockquote><p>虽然在es6之前Nodelist和数组在内部差异表现不一致，容易造成困扰，但是es6之后，nodelist也有了自己的默认的迭代器，并且实现方式一致，因此我们可以这样写了</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var divs = document.getElementsByTagName(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(let nodeEle of divs){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(nodeEle);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="展开运算符与非数组可迭代对象" tabindex="-1">展开运算符与非数组可迭代对象 <a class="header-anchor" href="#展开运算符与非数组可迭代对象" aria-label="Permalink to &quot;展开运算符与非数组可迭代对象&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//Set</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1,3,3,5,6]),arr = [...set];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr); // [1, 3, 5, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Map</span></span>
<span class="line"><span style="color:#A6ACCD;">let map= new Map([[&#39;name&#39;,&#39;ly&#39;],[&#39;sex&#39;,&#39;男&#39;]]),arr = [...map];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr); </span></span>
<span class="line"><span style="color:#A6ACCD;"> //0:(2) [&quot;name&quot;, &quot;ly&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">//1:(2) [&quot;sex&quot;, &quot;男&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//数组字面量</span></span>
<span class="line"><span style="color:#A6ACCD;">let small = [1,2.3,4],mid = [2,3,4,6],all = [0,...small,...mid];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(all); //[0, 1, 2.3, 4, 2, 3, 4, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="高级迭代器功能" tabindex="-1">高级迭代器功能 <a class="header-anchor" href="#高级迭代器功能" aria-label="Permalink to &quot;高级迭代器功能&quot;">​</a></h3><blockquote><p>给迭代器传参数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let first = yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let second = yield first+2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let third= yield second +3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(1));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(2));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(3));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(1));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-2346da44ba0629fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>第一个next和最后一个next,传的值都会被丢弃，因为之前和之后都不存在可以用的值，所以传参毫无意义，每次传的参数都是作为上一个定义参数的值.</p></blockquote><h3 id="在迭代器中抛出错误" tabindex="-1">在迭代器中抛出错误 <a class="header-anchor" href="#在迭代器中抛出错误" aria-label="Permalink to &quot;在迭代器中抛出错误&quot;">​</a></h3><blockquote><p>有时候我们需要增强生成器内部的编程弹性，需要将一些错误抛出去，让迭代器继续运行。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let first = yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let second = yield first+2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let third= yield second +3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(1));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.throw(new Error(&quot;boom&quot;)));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-37f34e63ac70e131.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>我们如何处理这些错误呢，可以这么写</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let first = yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let second;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try{</span></span>
<span class="line"><span style="color:#A6ACCD;">      second = yield first+2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}catch(x){</span></span>
<span class="line"><span style="color:#A6ACCD;">    second = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   yield second +3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(1));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.throw(new Error(&quot;boom&quot;)));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-45c1a600797830a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h4 id="通过return-可以提前结束函数的执行-再一次调用-属性done将会被置为true" tabindex="-1">通过return 可以提前结束函数的执行，再一次调用，属性done将会被置为true <a class="header-anchor" href="#通过return-可以提前结束函数的执行-再一次调用-属性done将会被置为true" aria-label="Permalink to &quot;通过return 可以提前结束函数的执行，再一次调用，属性done将会被置为true&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-0b7221c96e78f887.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>return 返回的值也可以作为一次执行的结果</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-af97635a515ca02a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h3 id="委托生成器" tabindex="-1">委托生成器 <a class="header-anchor" href="#委托生成器" aria-label="Permalink to &quot;委托生成器&quot;">​</a></h3><blockquote><p>如果我们需要将两个迭代器分别执行，但是又想只调用一个同样的生成器，我们可以用委托生成器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function *createIteratorOne(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function *createIteratorTwo(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield &#39;;white&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield *createIteratorOne();</span></span>
<span class="line"><span style="color:#A6ACCD;">          yield *createIteratorTwo();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>yield * 也可以用于字符串 例如 yield * &#39;hello&#39;,这时会调用字符串的默认迭代器</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> function *createIterator(){</span></span>
<span class="line"><span style="color:#A6ACCD;">       yield * &#39;hello&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let iterator = createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(iterator .next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-e847af8781dfa3e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h3 id="异步任务执行" tabindex="-1">异步任务执行 <a class="header-anchor" href="#异步任务执行" aria-label="Permalink to &quot;异步任务执行&quot;">​</a></h3><blockquote><p>生成器支持在代码中暂停代码的执行，因此我们可以挖掘一些用法</p></blockquote><h4 id="简单任务生成器" tabindex="-1">简单任务生成器 <a class="header-anchor" href="#简单任务生成器" aria-label="Permalink to &quot;简单任务生成器&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function run(taskDef){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //创建一个无使用限制的迭代器</span></span>
<span class="line"><span style="color:#A6ACCD;">    let task = taskDef();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //开始执行任务</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = task.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //循环调用next()的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    function step(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!result.done){</span></span>
<span class="line"><span style="color:#A6ACCD;">                result = task.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">                 step();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//开始执行迭代</span></span>
<span class="line"><span style="color:#A6ACCD;">  step();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用run()函数</span></span>
<span class="line"><span style="color:#A6ACCD;">run(function *(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield;</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield;</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(3);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//逐步输出 1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>####向任务执行器传递数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function run(taskDef){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //创建一个无使用限制的迭代器</span></span>
<span class="line"><span style="color:#A6ACCD;">    let task = taskDef();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //开始执行任务</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = task.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //循环调用next()的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    function step(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!result.done){</span></span>
<span class="line"><span style="color:#A6ACCD;">                result = task.next(result.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">                 step();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//开始执行迭代</span></span>
<span class="line"><span style="color:#A6ACCD;">  step();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用run()函数</span></span>
<span class="line"><span style="color:#A6ACCD;">run(function *(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let value =  yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value );</span></span>
<span class="line"><span style="color:#A6ACCD;">    value =  yield value + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value );</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//逐步输出 1 2 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="异步任务执行器" tabindex="-1">异步任务执行器 <a class="header-anchor" href="#异步任务执行器" aria-label="Permalink to &quot;异步任务执行器&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function run(taskDef){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //创建一个无使用限制的迭代器</span></span>
<span class="line"><span style="color:#A6ACCD;">    let task = taskDef();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //开始执行任务</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = task.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    //循环调用next()的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    function step(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!result.done){</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(typeof result.value ===&#39;function&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">                         result.value(function(err,data){</span></span>
<span class="line"><span style="color:#A6ACCD;">                          if(err){result = task.throw(err)};</span></span>
<span class="line"><span style="color:#A6ACCD;">                          return;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">               result = task.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">                 step();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//开始执行迭代</span></span>
<span class="line"><span style="color:#A6ACCD;">  step();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//读取文件函数</span></span>
<span class="line"><span style="color:#A6ACCD;">let fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function readFile(filename){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return function(callback){</span></span>
<span class="line"><span style="color:#A6ACCD;">                fs.readFile(filename.,callback)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用</span></span>
<span class="line"><span style="color:#A6ACCD;">run(function *(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let contents = yield readFile(&quot;config.json&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         doSomethingWith(contents);</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&quot;Done&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,96),o=[p];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{u as __pageData,d as default};
