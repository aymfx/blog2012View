import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"es6-函数","description":"","frontmatter":{"title":"es6-函数","date":"2018-04-06T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-函数.md"}'),p={name:"posts/前端/以前/es6-函数.md"},e=l(`<p><img src="http://upload-images.jianshu.io/upload_images/10843623-f6bc1326e758c851.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="i.jpg"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>杭州这周温度达到-5度了，温度下降的蛮快，年会排舞感觉好悬啊，不知到能拍出啥道道来,现在唯一的心愿就是，早点回家，冷也阻止不了我回家的脚步，嗯哼。</p></blockquote><blockquote><p>我的博客地址 ：<a href="http://www.aymfx.cn/" target="_blank" rel="noreferrer">http://www.aymfx.cn/</a></p></blockquote><h3 id="引子" tabindex="-1">引子 <a class="header-anchor" href="#引子" aria-label="Permalink to &quot;引子&quot;">​</a></h3><blockquote><p>ES6函数的改变不算太大，都是一些其他语言早就有的功能，而Javascript一直比较欠缺的，比如函数参数默认值，任意参数的表示法，最大的变化应该是支持箭头函数(其他语言称之为LAMBDA表达式)，一种对匿名函数的一种简写方式</p></blockquote><h4 id="函数形参的默认值" tabindex="-1">函数形参的默认值 <a class="header-anchor" href="#函数形参的默认值" aria-label="Permalink to &quot;函数形参的默认值&quot;">​</a></h4><blockquote><p>es5 模拟默认参数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function sendAjax(url,timeout,callback){</span></span>
<span class="line"><span style="color:#A6ACCD;">    timeout = timeout || 2000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    callback = callback || $.noop(); //默认参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    $.ajax(url).done(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(callback,timeout)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>上面的赋值操作会存在问题，你懂的，所以引入了es6的默认参数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function add(a=200,b=2){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a+b;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add()); //202</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(2)); //4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(null,2)); //2  null是合法值 被当成0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(undefined,2)); //202</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="默认参数对arguments对象的影响" tabindex="-1">默认参数对arguments对象的影响 <a class="header-anchor" href="#默认参数对arguments对象的影响" aria-label="Permalink to &quot;默认参数对arguments对象的影响&quot;">​</a></h4><blockquote><p>非严格模式下</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function temp(first,second){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    first = &#39;c&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    second = &#39;d&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temp(&#39;a&#39;,&#39;b&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:3 true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:6 true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:7 true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>严格模式下</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function temp(first,second){</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    first = &#39;c&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    second = &#39;d&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temp(&#39;a&#39;,&#39;b&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:3 true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:6 false</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:7 false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>非严格模式下，参数与argument的值保持一致,严格模式下arguments与传进来的初始参数保持一致，看看es6默认值存在的话</p></blockquote><blockquote><p>非严格模式下</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function temp(first,second=&#39;b&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arguments.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    first = &#39;c&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    second = &#39;b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temp(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;">//true</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:3 false</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:6 false</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM264:7 false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>严格模式下</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function temp(first,second=&#39;b&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arguments.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    first = &#39;c&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    second = &#39;d&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(first=== arguments[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(second=== arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temp(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Illegal &#39;use strict&#39; directive in function with non-simple parameter list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//hhhhhhhhhhhh,不能用，尴尬</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="默认参数表达式-可以传函数" tabindex="-1">默认参数表达式,可以传函数 <a class="header-anchor" href="#默认参数表达式-可以传函数" aria-label="Permalink to &quot;默认参数表达式,可以传函数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function getValue(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function add(first,second=getValue()){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return first+second;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(1,2)); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(10));  //15</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>可以将先前定义好的形参当默认值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function add(first,second=first){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return first+second;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(1,2)); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(10));  //20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">反之不行哈</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function add(first=second,second){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return first+second;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(1,2)); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(undefined,10));  //second is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//这就是所谓的临时死区TDZ，未初始化之前不可被引用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="不定参数-keys" tabindex="-1">不定参数 （...keys） <a class="header-anchor" href="#不定参数-keys" aria-label="Permalink to &quot;不定参数 （...keys）&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//模仿Underscore.js pick()方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function pick(object,...keys){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arguments.length); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = Object.create(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i=0,len=keys.length;i&lt;len;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        result[keys[i]]= object[keys[i]]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = pick({name:&#39;ly&#39;,age:&#39;18&#39;,sex:&#39;mael&#39;},&#39;age&#39;,&#39;sex&#39;); </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.name); //undefind</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.age); //18</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.sex); //mael</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不定参数的要求</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function pick(obj,...keys,last){} //报错，不定参数必须放在最后后面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//不定参数不能用于对象字面量setter之中</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let object = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    set name(...values){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //执行逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="function-构造函数功能增强-可以使用默认参数和不定参数" tabindex="-1">Function 构造函数功能增强 可以使用默认参数和不定参数 <a class="header-anchor" href="#function-构造函数功能增强-可以使用默认参数和不定参数" aria-label="Permalink to &quot;Function 构造函数功能增强 可以使用默认参数和不定参数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const add = new Function(&#39;first&#39;,&#39;second = first&#39;,&#39;return first+second&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(1,2),add(1))  //3 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var pick = new Function(&quot;...args&quot;,&quot;return args[0]&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(pick(1,2));  //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="展开运算符" tabindex="-1">展开运算符 <a class="header-anchor" href="#展开运算符" aria-label="Permalink to &quot;展开运算符&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//之前求最大值的时候</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let values = [25,100,75,56];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Math.max.apply(this,values));  //100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//有点麻烦，但是用展开运算符的话</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Math.max(...values)); //100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//开不开心，我们可以拿其他值和数组值比较</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Math.max(...values,200)); //200</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="函数中可以获取函数名称的的属性-name" tabindex="-1">函数中可以获取函数名称的的属性 name <a class="header-anchor" href="#函数中可以获取函数名称的的属性-name" aria-label="Permalink to &quot;函数中可以获取函数名称的的属性 name&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var func1 = function () {};</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES5</span></span>
<span class="line"><span style="color:#A6ACCD;">func1.name // &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6</span></span>
<span class="line"><span style="color:#A6ACCD;">func1.name // &quot;func1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">//上面代码中，变量func1等于一个匿名函数， ES5 和 ES6 的name属性返回的值不一样。</span></span>
<span class="line"><span style="color:#A6ACCD;">//如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。</span></span>
<span class="line"><span style="color:#A6ACCD;">const bar = function baz() {};</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES5</span></span>
<span class="line"><span style="color:#A6ACCD;">bar.name // &quot;baz&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ES6</span></span>
<span class="line"><span style="color:#A6ACCD;">bar.name // &quot;baz&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">//Function构造函数返回的函数实例，name属性的值为 “anonymous” 。</span></span>
<span class="line"><span style="color:#A6ACCD;">(new Function).name // &quot;anonymous&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">//bind返回的函数，name属性值会加上 “bound ” 前缀。</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {};</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.bind({}).name // &quot;bound foo&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function(){}).bind({}).name // &quot;bound &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//还有几个es6的情况</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var dosomething = function(){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(dosomething.bind().name);  //bound dosomething</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((new Function()).name);    //anonymous</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="明确函数的多重用途" tabindex="-1">明确函数的多重用途 <a class="header-anchor" href="#明确函数的多重用途" aria-label="Permalink to &quot;明确函数的多重用途&quot;">​</a></h4><blockquote><p>js函数有两种内部方式 [[Call]]和[[Construct]],当通过new关键字调用函数时，执行的是[[Construct]]函数,他负责创建一个通常被称作实例的新对象，然后再执行函数体,将this绑定到实例上;如果不同过new则执行[[Call]]函数,从而直接执行代码中的函数体</p></blockquote><h4 id="es5判断函数被调用的方法" tabindex="-1">es5判断函数被调用的方法 <a class="header-anchor" href="#es5判断函数被调用的方法" aria-label="Permalink to &quot;es5判断函数被调用的方法&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Person(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(this instanceof Person){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else{</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;必须new才行，嘿嘿&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var person = new Person(&quot;ly&quot;); //</span></span>
<span class="line"><span style="color:#A6ACCD;">var notperson =Person(&quot;ll&quot;); // 必须new才行，嘿嘿</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//但是可以蒙混过关</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var notperson =Person.call(peson,&quot;ll&quot;); //</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="new-target-精准判断" tabindex="-1">new.target 精准判断 <a class="header-anchor" href="#new-target-精准判断" aria-label="Permalink to &quot;new.target 精准判断&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Person(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(typeof new.target !== &#39;undefined&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else{</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;必须new才行，嘿嘿&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var person = new Person(&quot;ly&quot;); //</span></span>
<span class="line"><span style="color:#A6ACCD;">var notperson =Person.call(person,&quot;ll&quot;); //</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="块级作用域" tabindex="-1">块级作用域 <a class="header-anchor" href="#块级作用域" aria-label="Permalink to &quot;块级作用域&quot;">​</a></h4><blockquote><p>在es5的时代，当启用严格模式时，下列代码会报错,es6则不会,因为产生了块级作用域，该函数可以在这个if条件语句内部使用，外部依旧是undefined</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> &quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> if(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(typeof add); //function</span></span>
<span class="line"><span style="color:#A6ACCD;">    function add(a,b){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return a+b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(typeof add);  //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>但是在非严格模式下，该函数还是会被提升到全局作用域顶部</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> if(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(typeof add); //function</span></span>
<span class="line"><span style="color:#A6ACCD;">    function add(a,b){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return a+b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(typeof add);  //function</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="重要改变-箭头函数" tabindex="-1">重要改变 箭头函数 <a class="header-anchor" href="#重要改变-箭头函数" aria-label="Permalink to &quot;重要改变 箭头函数&quot;">​</a></h3><blockquote><p>一些好玩的改变（兴奋状）</p></blockquote><ul><li>没有this,spuer,arguments和new.target绑定</li><li>不能通过new关键字调用</li><li>没有原型</li><li>不可以改变this的绑定</li><li>不支持arguments对象</li><li>不支持重复的命名参数</li></ul><h4 id="箭头函数的语法" tabindex="-1">箭头函数的语法 <a class="header-anchor" href="#箭头函数的语法" aria-label="Permalink to &quot;箭头函数的语法&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let add = (a,b) =&gt; a+b;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//实际类似于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let add = function(a,b){return a+b}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//当箭头函数只有一个参数时，不需要括号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let reflrct = value =&gt; value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//类似于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let reflrct = function(value){return value}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//不写参数时要加括号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let name = () =&gt; &#39;ly&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//类似于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let name = function(){return &#39;ly&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//如果需要写复杂的函数体，则必须这样写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let getName = (fisrtName,secondName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return firstName+&#39; &#39;+ secondName;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//类似于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let getName = function(fisrtName,secondName){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return firstName+&#39; &#39;+ secondName;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//如果想反回一个字面量对象则需要这样写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = () =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;ly&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//类似于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;ly&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//创建一个立即表达函数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = ((name) =&gt; ({getName:() =&gt; name}))(&#39;ly&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//自己还原下看看，嘿嘿</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="箭头函数没有this绑定" tabindex="-1">箭头函数没有this绑定 <a class="header-anchor" href="#箭头函数没有this绑定" aria-label="Permalink to &quot;箭头函数没有this绑定&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let PageHandler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     id:&#39;13579&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     init:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         document.addEventListener(&#39;click&#39;,function(event){</span></span>
<span class="line"><span style="color:#A6ACCD;">             this.doSomething(event.type)  //会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">     },</span></span>
<span class="line"><span style="color:#A6ACCD;">     doSomething:function(type){</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(type);</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>es5的做法，将会这么做</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let PageHandler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     id:&#39;13579&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     init:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         document.addEventListener(&#39;click&#39;,(function(event){</span></span>
<span class="line"><span style="color:#A6ACCD;">             this.doSomething(event.type)  </span></span>
<span class="line"><span style="color:#A6ACCD;">         }).bind(this))</span></span>
<span class="line"><span style="color:#A6ACCD;">     },</span></span>
<span class="line"><span style="color:#A6ACCD;">     doSomething:function(type){</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(type);</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>但是有了箭头函数的话，就帅多了</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let PageHandler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     id:&#39;13579&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     init:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         document.addEventListener(&#39;click&#39;,event =&gt; this.doSomething(event.type) </span></span>
<span class="line"><span style="color:#A6ACCD;">         )</span></span>
<span class="line"><span style="color:#A6ACCD;">     },</span></span>
<span class="line"><span style="color:#A6ACCD;">     doSomething:function(type){</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(type);</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>因为箭头函数是没有this的,所以在处理的过程中，它里面的this取决函数外部非箭头函数的this值</p></blockquote><h3 id="箭头函数不存在arguments绑定所以可以这么操作" tabindex="-1">箭头函数不存在arguments绑定所以可以这么操作 <a class="header-anchor" href="#箭头函数不存在arguments绑定所以可以这么操作" aria-label="Permalink to &quot;箭头函数不存在arguments绑定所以可以这么操作&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> function outer(){</span></span>
<span class="line"><span style="color:#A6ACCD;">     return () =&gt; arguments[0];</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> let inner = outer(18)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(inner()); //18  就是这么骚气，直接访问箭头函数体外函数的arguments</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>call(),bind(),apply() 都是可以用的，但是改变不了this的值的哈</p></blockquote><h4 id="尾调用的优化-tail-call" tabindex="-1">尾调用的优化(Tail Call) <a class="header-anchor" href="#尾调用的优化-tail-call" aria-label="Permalink to &quot;尾调用的优化(Tail Call)&quot;">​</a></h4><blockquote><p>尾调用指的是函数做为另一个函数最后一条语句被调用,它不会在调用栈上增加新的堆栈帧，而是直接更新调用栈，调用栈所占空间始终是常量，节省了内存，避免了爆栈的可能性,但是es5存在调用栈变得过大则会造成程序问题</p></blockquote><blockquote><p>尾调用实例</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> function add(a,b){</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> function max(a,b,c,d){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    //......</span></span>
<span class="line"><span style="color:#A6ACCD;">     return add(a,c);</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>优化需要满足以下条件,尾调用才不会创建新栈帧,而是清除并重用当前栈帧</p></blockquote><ul><li>尾调用不访问当前栈的变量(不形成闭包)</li><li>尾调用是函数内部的最后一句</li><li>尾调用的结果将作为函数值返回 (必须有return fn())</li></ul><blockquote><p>使用场景 尾递归</p></blockquote><blockquote><p>错误方式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.time(&#39;testForEach&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">function factorial(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(n&lt;=1){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return n*factorial(n-1)  //如果n很大，在不断递归的情况下，会栈溢出，这也不是尾递归</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var a =factorial(5000);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); </span></span>
<span class="line"><span style="color:#A6ACCD;">console.timeEnd(&#39;testForEach&#39;); // 1.55322265625ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>正确写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.time(&#39;testForEach&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">function factorial(n,p=1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(n&lt;=1){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 1*p;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let result = p*n;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return factorial(n-1,result)  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">factorial(5000);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.timeEnd(&#39;testForEach&#39;); //0.492919921875ms    测 了10000 居然栈溢出  搞不懂</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,72),o=[e];function c(t,i,C,A,r,y){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
