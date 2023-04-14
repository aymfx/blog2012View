import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"es6-Symbol","description":"","frontmatter":{"title":"es6-Symbol","date":"2018-04-04T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-Symbol.md"}'),p={name:"posts/前端/以前/es6-Symbol.md"},o=l(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>突然就断网了，hhhh</p></blockquote><blockquote><p>我的博客地址 ：<a href="http://www.aymfx.cn/" target="_blank" rel="noreferrer">http://www.aymfx.cn/</a></p></blockquote><h4 id="symbo" tabindex="-1">symbo <a class="header-anchor" href="#symbo" aria-label="Permalink to &quot;symbo&quot;">​</a></h4><blockquote><p>这是新的原始类型，一般是用于非字符串属性名称，利用其特性创建私有的变量</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var firstname = Symbol(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    person = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person[firstname] = &quot;ly&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person[firstname]); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>添加描述</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var firstname = Symbol(&#39;liuyang&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    person = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person[firstname] = &quot;ly&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;liuyang&#39; in person); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person[firstname]); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(firstname) //Symbol(liuyang)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>可以通过 typeof 来识别</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let symbol = Symbol(&quot;test&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof symbol)  //symbol</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-使用方式" tabindex="-1">Symbol 使用方式 <a class="header-anchor" href="#symbol-使用方式" aria-label="Permalink to &quot;Symbol 使用方式&quot;">​</a></h4><blockquote><p>可用于计算对象字面量属性名，Object.defineProperty()方法和 Object.defineProperties()方法的调用过程中</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let firstname = Symbol(&quot;first name&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//可用于计算对象字面量属性名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [firstname]:&#39;nicholas&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//将属性设置为只读</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(person,firstname,{writeable:false});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let lastName = Symbol(&#39;last name&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperties(person,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [lastName]:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value:&#39;zhaosi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        writeable:false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person[firstname],person[lastName]);  //nicholas zhaosi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-共享体系" tabindex="-1">Symbol 共享体系 <a class="header-anchor" href="#symbol-共享体系" aria-label="Permalink to &quot;Symbol 共享体系&quot;">​</a></h4><blockquote><p>当你的应用有两种不同的对象类型，但是你希望他们共享一个 Symbol,你可以使用 Symbol 注册表，通过 for 方法来操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let uid = Symbol.for(&#39;i am Object property&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [uid] :&#39;ly&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let uid2 = Symbol.for(&#39;i am Object property&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [uid2] : &#39;i am Object property&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(uid===uid2); true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj1[uid],obj2[uid2]); ly i am Object property</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(uid2) Symbol(i am Object property)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//通过Symbol.keyFor(),来查找Symbol的键</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Symbol.keyFor(uid),Symbol.keyFor(uid2))  //i am Object property i am Object property</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let uid3 = Symbol(&#39;uid3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Symbol.keyFor(uid3))  //undefined   ,因为没使用for方法进行注册</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-的类型强制转换" tabindex="-1">Symbol 的类型强制转换 <a class="header-anchor" href="#symbol-的类型强制转换" aria-label="Permalink to &quot;Symbol 的类型强制转换&quot;">​</a></h4><blockquote><p>似乎 Symbol 不能与其他的类型发生强制转换的操作，我们只能用 String 惊醒字符串的输出</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let uid = Symbol(&#39;useful message&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    desc = String(uid);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(desc); //Symbol(useful message)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//不能进行字符串的拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">let uid = Symbol(&#39;useful message&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let string = uid+&#39;!&#39;  //报错  Cannot convert a Symbol value to a string</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//不能进行运算</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let uid = Symbol(&#39;useful message&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let string = uid/1; //Cannot convert a Symbol value to a number</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//逻辑操作符可以,等价为布尔值true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let uid = Symbol(&#39;useful message&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let s = uid ? &#39;对的&#39;: &#39;错的&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s) //对的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-的检索属性" tabindex="-1">Symbol 的检索属性 <a class="header-anchor" href="#symbol-的检索属性" aria-label="Permalink to &quot;Symbol 的检索属性&quot;">​</a></h4><blockquote><p>Object.keys()方法，将会返回的是可枚举的属性名,Object.getOwnPropertyNames()方法将会枚举的可举性，将会全部返回,但是他们不支持枚举 Symbol 属性,es6 提供了 Object.getOwnPropertySymbols()方法枚举包含的 Symbol 的自有属性数组</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let uid = Symbol(&#39;a&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    uid2 = Symbol(&#39;a2&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    object = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        [uid]:&#39;12345&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        [uid2]:&#39;35487&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;hh&#39;:&quot;我应该排除在外的&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let symbols = Object.getOwnPropertySymbols(object);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(symbols); // [Symbol(a), Symbol(a2)]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(symbols[0]);// Symbol(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(object[symbols[0]]);  //12345</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="通过-well-known-symbol-暴露内部操作" tabindex="-1">通过 well-known Symbol 暴露内部操作 <a class="header-anchor" href="#通过-well-known-symbol-暴露内部操作" aria-label="Permalink to &quot;通过 well-known Symbol 暴露内部操作&quot;">​</a></h4><blockquote><p>除了自己创建的 symbol，JavaScript 还内建了一些在 ECMAScript 5 之前没有暴露给开发者的 symbol，它们代表了内部语言行为。它们可以使用以下属性访问：</p></blockquote><h4 id="迭代-symbols" tabindex="-1">迭代 symbols <a class="header-anchor" href="#迭代-symbols" aria-label="Permalink to &quot;迭代 symbols&quot;">​</a></h4><ul><li>Symbol.iterator</li></ul><blockquote><p>一个返回一个对象默认迭代器的方法。使用 for...of。</p></blockquote><ul><li>Symbol.asyncIterator</li></ul><blockquote><p>一个返回对象默认的异步迭代器的方法。使用 for await of。</p></blockquote><h4 id="正则表达式-symbols" tabindex="-1">正则表达式 symbols <a class="header-anchor" href="#正则表达式-symbols" aria-label="Permalink to &quot;正则表达式 symbols&quot;">​</a></h4><ul><li>Symbol.match</li></ul><blockquote><p>一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。使用 String.prototype.match().</p></blockquote><ul><li>Symbol.replace</li></ul><blockquote><p>一个替换匹配字符串的子串的方法. 使用 String.prototype.replace().</p></blockquote><ul><li>Symbol.search</li></ul><blockquote><p>一个返回一个字符串中与正则表达式相匹配的索引的方法。使用 String.prototype.search().</p></blockquote><ul><li>Symbol.split</li></ul><blockquote><p>一个在匹配正则表达式的索引处拆分一个字符串的方法.。使用 String.prototype.split().</p></blockquote><h4 id="其他-symbols" tabindex="-1">其他 symbols <a class="header-anchor" href="#其他-symbols" aria-label="Permalink to &quot;其他 symbols&quot;">​</a></h4><ul><li>Symbol.hasInstance</li></ul><blockquote><p>一个确定一个构造器对象识别的对象是否为它的实例的方法。使用 instanceof.</p></blockquote><ul><li>Symbol.isConcatSpreadable</li></ul><blockquote><p>一个布尔值，表明一个对象是否应该 flattened 为它的数组元素。使用 Array.prototype.concat().</p></blockquote><ul><li>Symbol.unscopables</li></ul><blockquote><p>拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。</p></blockquote><ul><li>Symbol.species</li></ul><blockquote><p>一个用于创建派生对象的构造器函数。</p></blockquote><ul><li>Symbol.toPrimitive</li></ul><blockquote><p>一个将对象转化为基本数据类型的方法。</p></blockquote><blockquote><p>Symbol.toStringTag</p></blockquote><ul><li>用于对象的默认描述的字符串值。使用 Object.prototype.toString().</li></ul><h4 id="symbol-hasinstance-方法" tabindex="-1">Symbol.hasInstance 方法 <a class="header-anchor" href="#symbol-hasinstance-方法" aria-label="Permalink to &quot;Symbol.hasInstance 方法&quot;">​</a></h4><blockquote><p>一个确定一个构造器对象识别的对象是否为它的实例的方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">obj = new Array();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj instanceof Array); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Array[Symbol.hasInstance](obj)) //VM187:5 true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>我可以用它定义一个无实例的函数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function myObject (){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(myObject,Symbol.hasInstance,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    value:function(v){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = new myObject();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj instanceof myObject); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>我们可以定制自己的实例，通过这种方式，可以修改内建对象但是尽量不要这么做，应该修改自己创建的构造函数</p></blockquote><h4 id="symbol-isconcatspreadable-属性" tabindex="-1">Symbol.isConcatSpreadable 属性 <a class="header-anchor" href="#symbol-isconcatspreadable-属性" aria-label="Permalink to &quot;Symbol.isConcatSpreadable 属性&quot;">​</a></h4><blockquote><p>Symbol.isConcatSpreadable 属性是一个布尔值，如果属性为 true，则表示对象有 length 属性和数字键,这样它就可以使用数组的 concat()方法了</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    0:&#39;a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    1:&#39;b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    length:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.isConcatSpreadable]:true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    1:&#39;a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    s:&#39;b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    length:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.isConcatSpreadable]:true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let message = [&#39;hi&#39;].concat(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let message2 = [&#39;hi&#39;].concat(obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-a176dfab66efd797.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="1.png"></p><blockquote><p>说明他会寻找数字下标，找不到就设置为空，并且从零开始</p></blockquote><h4 id="symbol-match-symbol-replace-symbol-search-symbol-split" tabindex="-1">Symbol.match,Symbol.replace,Symbol.search,Symbol.split <a class="header-anchor" href="#symbol-match-symbol-replace-symbol-search-symbol-split" aria-label="Permalink to &quot;Symbol.match,Symbol.replace,Symbol.search,Symbol.split&quot;">​</a></h4><ul><li>match()</li></ul><blockquote><p>match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。</p></blockquote><ul><li>replace()</li></ul><blockquote><p>replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。</p></blockquote><ul><li>split()</li></ul><blockquote><p>用于把一个字符串分割成字符串数组</p></blockquote><ul><li>search()</li></ul><blockquote><p>用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。</p></blockquote><blockquote><p>以上方法时 es5d 的正则表达式的字符串匹配，但是无法使用自定义的对象来替代正则表达式进行正则匹配，es6 这些方法就可以这么操作，我们来看他们的定义</p></blockquote><ul><li>Symbol.match 接受一个字符串的参数，如果匹配成功则返回匹配成功的数组，否则返回 null</li><li>Symbol.replace 接受一个字符串类型的参数和一个替换字符串，最终返回一个字符串</li><li>Symbol.search 接受一个字符串参数，如果匹配到内容，就返回数组的位置，否则返回-1</li><li>Symbol.split 接受一个字符串参数，根据内容匹配将字符串分解，并将返回分解后的数组</li></ul><blockquote><p>看看栗子</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let hasLengthOf10 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.match]:function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value.length === 10 ? [value]:null</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.replace]:function(value, replace) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value.length === 10 ? replace:value</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.search]:function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value.length === 10 ? 0:-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Symbol.split]:function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value.length === 10 ? [ , ]:[value]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let m1 = &#39;Hello world&#39; //11</span></span>
<span class="line"><span style="color:#A6ACCD;">let m2 = &#39;Hello john&#39;  //10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m1.replace(hasLengthOf10)); //[empty]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m2.replace(hasLengthOf10)); //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m1.match(hasLengthOf10));//null</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m2.match(hasLengthOf10));//[&quot;Hello john&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m1.search(hasLengthOf10)); //-1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m2.search(hasLengthOf10)); //0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m1.split(hasLengthOf10));[&quot;Hello world&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m2.split(hasLengthOf10)); //[empty]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-toprimitive-指将被调用的指定函数值的属性转换为相对应的原始值" tabindex="-1">Symbol.toPrimitive 指将被调用的指定函数值的属性转换为相对应的原始值 <a class="header-anchor" href="#symbol-toprimitive-指将被调用的指定函数值的属性转换为相对应的原始值" aria-label="Permalink to &quot;Symbol.toPrimitive 指将被调用的指定函数值的属性转换为相对应的原始值&quot;">​</a></h4><blockquote><p>在 Symbol.toPrimitive 属性(用作函数值)的帮助下，一个对象可被转换为原始值。该函数由字符串参数 hint 调用，目的是指定原始值转换结果的首选类型。 hint 参数可以是&quot;number&quot;、&quot;string&quot; 和 &quot;default&quot; 中的一种。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//话不多说看栗子</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Temp(degress){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.degress = degress</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Temp.prototype[Symbol.toPrimitive] = function(hint){</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch(hint){</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &quot;string&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.degress +&quot;\\u00b0&quot;;  //degress symbol</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        case &quot;number&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.degress;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &quot;default&quot; :</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.degress+&#39;ly&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var t = new Temp(8);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(t+&#39;5555&#39;) //8ly5555</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(t/&#39;2&#39;) //4</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(String(t)) //8°</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-tostringtag" tabindex="-1">Symbol.toStringTag <a class="header-anchor" href="#symbol-tostringtag" aria-label="Permalink to &quot;Symbol.toStringTag&quot;">​</a></h4><blockquote><p>Symbol.toStringTag 是一个内置 symbol，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签，通常只有内置的 Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值里。</p></blockquote><blockquote><p>我们识别数组还是对象，一般习惯用 toString 方法来实现，例如</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function isArray(arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Object.prototype.toString.call(arr) === &#39;[object Array]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>现在我们可以重写一个对象的类型</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Person(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name =name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Person.prototype[Symbol.toStringTag] = &#39;Person&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let people = new Person(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.prototype.toString.call(people)); //[object Person]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="symbol-unscopables-指用于指定对象值-其对象自身和继承的从关联对象的-with-环境绑定中排除的属性名称。" tabindex="-1">Symbol.unscopables 指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。 <a class="header-anchor" href="#symbol-unscopables-指用于指定对象值-其对象自身和继承的从关联对象的-with-环境绑定中排除的属性名称。" aria-label="Permalink to &quot;Symbol.unscopables 指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。&quot;">​</a></h4><blockquote><p>可以在任何对象上定义 @@unscopables symbol (Symbol.unscopables)，用于排除属性名称并与 with 环境绑定在一起作为词法变量公开。 请注意，如果使用 Strict mode，语句将不可用，并且可能也不需要 symbol。</p></blockquote><blockquote><p>在 unscopables 对象上设置属性为 true，将使其 unscopable 并且因此该属性也将不会在词法环境变量中出现。 如果设置属性为 false ，则将使其可 scopable 并且该属性会出现在词法环境变量中。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">我们在使用with时，如果用了对象属性作为变量则会报错，例如(es6数组存在values方法)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let values = [1,2],colors=[&#39;w&#39;, &#39;y&#39;, &#39;k&#39;, &#39;o&#39;, &#39;p&#39;],color=&#39;blue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(colors.values());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">with(colors){</span></span>
<span class="line"><span style="color:#A6ACCD;">    push(color)</span></span>
<span class="line"><span style="color:#A6ACCD;">    push(...values)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(values);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(colors); //[&quot;red&quot;, &quot;blue&quot;, 1, 2]  //emmmm,没报错的原因values()方法还没加上去</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//报错了就用这种方式,他是将词法排除在这个with环境中</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null),{</span></span>
<span class="line"><span style="color:#A6ACCD;"> copyWith:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> entries:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> fill:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> find:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> findIndex:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> keys:true,</span></span>
<span class="line"><span style="color:#A6ACCD;"> values:&#39;true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-2c5109c4f8e58e1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="2.png"></p>`,89),e=[o];function c(t,i,r,C,A,y){return a(),n("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
