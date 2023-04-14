import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"es6学习--数组的扩展","description":"","frontmatter":{"title":"es6学习--数组的扩展","date":"2016-11-10T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6学习-数组的扩展.md"}'),p={name:"posts/前端/以前/es6学习-数组的扩展.md"},e=l(`<h1 id="array-from" tabindex="-1">Array.from() <a class="header-anchor" href="#array-from" aria-label="Permalink to &quot;Array.from()&quot;">​</a></h1><pre><code>Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
	必须具有length属性
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	let arrayLike = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;0&#39;: &#39;a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;1&#39;: &#39;b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;2&#39;: &#39;c&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    length: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ES5的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr1 = [].slice.call(arrayLike); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr2 = Array.from(arrayLike); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// NodeList对象</span></span>
<span class="line"><span style="color:#A6ACCD;">let ps = document.querySelectorAll(&#39;p&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(ps).forEach(function (p) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(p);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// arguments对象</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var args = Array.from(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.from(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	// [&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	let namesSet = new Set([&#39;a&#39;, &#39;b&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">	Array.from(namesSet) // [&#39;a&#39;, &#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>扩展运算符（...）也可以将某些数据结构转为数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// arguments对象</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var args = [...arguments];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// NodeList对象</span></span>
<span class="line"><span style="color:#A6ACCD;">[...document.querySelectorAll(&#39;div&#39;)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from({ length: 3 });</span></span>
<span class="line"><span style="color:#A6ACCD;">// [ undefined, undefined, undefined ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.from(arrayLike, x =&gt; x * x);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 等同于</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(arrayLike).map(x =&gt; x * x);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from([1, 2, 3], (x) =&gt; x * x)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [1, 4, 9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>#Array.of() Array.of方法用于将一组值，转换为数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.of(3, 11, 8) // [3,11,8]</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.of(3) // [3]</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.of(3).length // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.of() // []</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.of(undefined) // [undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.of(1) // [1]</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.of(1, 2) // [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>Array.of方法可以用下面的代码模拟实现。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function ArrayOf(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  return [].slice.call(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="数组实例的copywithin" tabindex="-1">数组实例的copyWithin() <a class="header-anchor" href="#数组实例的copywithin" aria-label="Permalink to &quot;数组实例的copyWithin()&quot;">​</a></h1><pre><code>数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	Array.prototype.copyWithin(target, start = 0, end = this.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">	它接受三个参数。</span></span>
<span class="line"><span style="color:#A6ACCD;">				target（必需）：从该位置开始替换数据。</span></span>
<span class="line"><span style="color:#A6ACCD;">				start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。</span></span>
<span class="line"><span style="color:#A6ACCD;">				end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4, 5].copyWithin(0, 3)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [4, 5, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 将3号位复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4, 5].copyWithin(0, 3, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// -2相当于3号位，-1相当于4号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4, 5].copyWithin(0, -2, -1)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将3号位复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[].copyWithin.call({length: 5, 3: 1}, 0, 3)</span></span>
<span class="line"><span style="color:#A6ACCD;">// {0: 1, 3: 1, length: 5}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将2号位到数组结束，复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">var i32a = new Int32Array([1, 2, 3, 4, 5]);</span></span>
<span class="line"><span style="color:#A6ACCD;">i32a.copyWithin(0, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Int32Array [3, 4, 5, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 对于没有部署TypedArray的copyWithin方法的平台</span></span>
<span class="line"><span style="color:#A6ACCD;">// 需要采用下面的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Int32Array [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 将3号位复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4, 5].copyWithin(0, 3, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// -2相当于3号位，-1相当于4号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3, 4, 5].copyWithin(0, -2, -1)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将3号位复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">[].copyWithin.call({length: 5, 3: 1}, 0, 3)</span></span>
<span class="line"><span style="color:#A6ACCD;">// {0: 1, 3: 1, length: 5}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将2号位到数组结束，复制到0号位</span></span>
<span class="line"><span style="color:#A6ACCD;">var i32a = new Int32Array([1, 2, 3, 4, 5]);</span></span>
<span class="line"><span style="color:#A6ACCD;">i32a.copyWithin(0, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Int32Array [3, 4, 5, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 对于没有部署TypedArray的copyWithin方法的平台</span></span>
<span class="line"><span style="color:#A6ACCD;">// 需要采用下面的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Int32Array [4, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="数组实例的find-和findindex" tabindex="-1">数组实例的find()和findIndex() <a class="header-anchor" href="#数组实例的find-和findindex" aria-label="Permalink to &quot;数组实例的find()和findIndex()&quot;">​</a></h1><pre><code>数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[1, 4, -5, 10].find((n) =&gt; n &lt; 0)//-5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
findIndex方法的用法与find方法非常类似返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[1, 5, 10, 15].findIndex(function(value, index, arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return value &gt; 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">}) // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[NaN].indexOf(NaN)</span></span>
<span class="line"><span style="color:#A6ACCD;">// -1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[NaN].findIndex(y =&gt; Object.is(NaN, y))</span></span>
<span class="line"><span style="color:#A6ACCD;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="数组实例的fill" tabindex="-1">数组实例的fill() <a class="header-anchor" href="#数组实例的fill" aria-label="Permalink to &quot;数组实例的fill()&quot;">​</a></h1><pre><code>fill方法使用给定值，填充一个数组。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].fill(7)</span></span>
<span class="line"><span style="color:#A6ACCD;">	// [7, 7, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	new Array(3).fill(7)</span></span>
<span class="line"><span style="color:#A6ACCD;">	// [7, 7, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="数组实例的entries-keys-和values" tabindex="-1">数组实例的entries()，keys()和values() <a class="header-anchor" href="#数组实例的entries-keys-和values" aria-label="Permalink to &quot;数组实例的entries()，keys()和values()&quot;">​</a></h1><pre><code>	ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (let index of [&#39;a&#39;, &#39;b&#39;].keys()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(index);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let elem of [&#39;a&#39;, &#39;b&#39;].values()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(elem);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// &#39;a&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// &#39;b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let [index, elem] of [&#39;a&#39;, &#39;b&#39;].entries()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(index, elem);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 0 &quot;a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1 &quot;b&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let letter = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let entries = letter.entries();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(entries.next().value); // [0, &#39;a&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(entries.next().value); // [1, &#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(entries.next().value); // [2, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="数组实例的includes" tabindex="-1">数组实例的includes() <a class="header-anchor" href="#数组实例的includes" aria-label="Permalink to &quot;数组实例的includes()&quot;">​</a></h1><pre><code>Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	[1, 2, 3].includes(2);     // true</span></span>
<span class="line"><span style="color:#A6ACCD;">	[1, 2, 3].includes(4);     // false</span></span>
<span class="line"><span style="color:#A6ACCD;">	[1, 2, NaN].includes(NaN); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相当运算符（===）进行判断，这会导致对NaN的误判。
</code></pre><h1 id="数组的空位" tabindex="-1">数组的空位 <a class="header-anchor" href="#数组的空位" aria-label="Permalink to &quot;数组的空位&quot;">​</a></h1><pre><code>数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// forEach方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].forEach((x,i) =&gt; console.log(i)); // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// filter方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[&#39;a&#39;,,&#39;b&#39;].filter(x =&gt; true) // [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// every方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].every(x =&gt; x===&#39;a&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// some方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].some(x =&gt; x !== &#39;a&#39;) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// map方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].map(x =&gt; 1) // [,1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// join方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;,undefined,null].join(&#39;#&#39;) // &quot;#a##&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;,undefined,null].toString() // &quot;,a,,&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">forEach(), filter(), every() 和some()都会跳过空位。</span></span>
<span class="line"><span style="color:#A6ACCD;">map()会跳过空位，但会保留这个值</span></span>
<span class="line"><span style="color:#A6ACCD;">join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.from([&#39;a&#39;,,&#39;b&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">// [ &quot;a&quot;, undefined, &quot;b&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>扩展运算符（...）也会将空位转为undefined。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[...[&#39;a&#39;,,&#39;b&#39;]]</span></span>
<span class="line"><span style="color:#A6ACCD;">// [ &quot;a&quot;, undefined, &quot;b&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>copyWithin()会连空位一起拷贝。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;,&#39;b&#39;,,].copyWithin(2,0) // [,&quot;a&quot;,,&quot;a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>fill()会将空位视为正常的数组位置。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">new Array(3).fill(&#39;a&#39;) // [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>for...of循环也会遍历空位。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = [, ,];</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// entries()</span></span>
<span class="line"><span style="color:#A6ACCD;">[...[,&#39;a&#39;].entries()] // [[0,undefined], [1,&quot;a&quot;]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// keys()</span></span>
<span class="line"><span style="color:#A6ACCD;">[...[,&#39;a&#39;].keys()] // [0,1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// values()</span></span>
<span class="line"><span style="color:#A6ACCD;">[...[,&#39;a&#39;].values()] // [undefined,&quot;a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// find()</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].find(x =&gt; true) // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// findIndex()</span></span>
<span class="line"><span style="color:#A6ACCD;">[,&#39;a&#39;].findIndex(x =&gt; true) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,55),o=[e];function c(t,i,r,C,A,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
