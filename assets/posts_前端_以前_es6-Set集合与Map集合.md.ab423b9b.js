import{_ as a,c as l,o as p,x as s,a as n,N as e}from"./chunks/framework.1f285265.js";const b=JSON.parse('{"title":"es6-Set集合与Map集合","description":"","frontmatter":{"title":"es6-Set集合与Map集合","date":"2018-03-24T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-Set集合与Map集合.md"}'),o={name:"posts/前端/以前/es6-Set集合与Map集合.md"},c=s("h3",{id:"前言",tabindex:"-1"},[n("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),t=s("blockquote",null,[s("p",null,"离回家的时间越来越近了，突然觉得自己很差劲，分享一首歌，道出心声啊")],-1),C=s("blockquote",null,[s("p",null,[n("我的博客地址 ："),s("a",{href:"http://www.aymfx.cn/",target:"_blank",rel:"noreferrer"},"http://www.aymfx.cn/")])],-1),A=s("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:"//music.163.com/outchain/player?type=2&id=518904754&auto=1&height=66"},null,-1),i=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">大概过去的就真的已过去</span></span>
<span class="line"><span style="color:#A6ACCD;">偶尔想起还有几分怀念气息</span></span>
<span class="line"><span style="color:#A6ACCD;">遇上快乐遇上心酸遇上分离</span></span>
<span class="line"><span style="color:#A6ACCD;">生活终究得让人继续</span></span>
<span class="line"><span style="color:#A6ACCD;">衣身太长遮住大半个身体</span></span>
<span class="line"><span style="color:#A6ACCD;">学不会平淡幸福无从说起</span></span>
<span class="line"><span style="color:#A6ACCD;">可到最后 原谅背叛原谅任性</span></span>
<span class="line"><span style="color:#A6ACCD;">其实该原谅眼里的自己</span></span>
<span class="line"><span style="color:#A6ACCD;">那年的自己讨厌的自己如今的自己</span></span>
<span class="line"><span style="color:#A6ACCD;">风一直不停</span></span>
<span class="line"><span style="color:#A6ACCD;">乱了旅行 残喘下去</span></span>
<span class="line"><span style="color:#A6ACCD;">我除了祝福你没有其他目的</span></span>
<span class="line"><span style="color:#A6ACCD;">但却害怕往事再重提</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">大概过去的就真的已过去</span></span>
<span class="line"><span style="color:#A6ACCD;">偶尔想起还有几分怀念气息</span></span>
<span class="line"><span style="color:#A6ACCD;">遇上快乐遇上心酸遇上分离</span></span>
<span class="line"><span style="color:#A6ACCD;">生活终究得让人继续</span></span>
<span class="line"><span style="color:#A6ACCD;">衣身太长遮住大半个身体</span></span>
<span class="line"><span style="color:#A6ACCD;">学不会平淡幸福无从说起</span></span>
<span class="line"><span style="color:#A6ACCD;">可到最后 原谅背叛原谅任性</span></span>
<span class="line"><span style="color:#A6ACCD;">其实该原谅眼里的自己</span></span>
<span class="line"><span style="color:#A6ACCD;">那年的自己讨厌的自己如今的自己</span></span>
<span class="line"><span style="color:#A6ACCD;">风一直不停</span></span>
<span class="line"><span style="color:#A6ACCD;">乱了旅行 残喘下去</span></span>
<span class="line"><span style="color:#A6ACCD;">我除了祝福你没有其他目的</span></span>
<span class="line"><span style="color:#A6ACCD;">但却害怕往事再重提</span></span>
<span class="line"><span style="color:#A6ACCD;">我安慰我自己 恨自己 伤感记忆</span></span>
<span class="line"><span style="color:#A6ACCD;">只能用意志慢慢的去抚平冬季</span></span>
<span class="line"><span style="color:#A6ACCD;">我除了祝福你没有其他目的</span></span>
<span class="line"><span style="color:#A6ACCD;">我也可以带着青涩 美好回忆</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="set-对象允许你存储任何类型的唯一值-无论是原始值或者是对象引用" tabindex="-1">Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用 <a class="header-anchor" href="#set-对象允许你存储任何类型的唯一值-无论是原始值或者是对象引用" aria-label="Permalink to &quot;Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用&quot;">​</a></h3><blockquote><p>创建Set集合并添加元素,对于字符串和数字不会发生强制转换，因此时两个值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(5)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.size) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>对象如果做属性名的话，es5中会发生这种事</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var set = Object.create(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set[obj1] = &#39;foo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set[obj2])  //foo 因为不能识别对象他们全部转换成这个了 [object object]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key1 = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    key2 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(key1)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(key2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.size) //2 说明不是调用tostring方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>set是会忽略重复值的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(5)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(5)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.size) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>利用has() 检查值是否存在 清除所有元素 clear()</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;6&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;7&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(&#39;5&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(5)) //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(&#39;6&#39;)) false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>移除元素</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;5&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(&#39;6&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(&#39;5&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">set.delete(&#39;5&#39;) //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(&#39;5&#39;)) //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>使用Foreach循环,他和数组的方式的基本一样，我们来看看栗子，他们的不同</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var arr = new Array(1,2,3,4),</span></span>
<span class="line"><span style="color:#A6ACCD;">    set = new Set([1,2,3,4]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let pocess = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    output (value,index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(value,index);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    arrObj (arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arr.forEach((value,index,own) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.output(value,index);</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(arr === own);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    setObj (arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arr.forEach((value,index,own) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.output(value,index);</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(arr === own);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pocess.arrObj(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">pocess.setObj(set)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//第一种结果</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:0 1 0</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:12 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:6 2 1</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:12 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:6 3 2</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:12 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:6 4 3</span></span>
<span class="line"><span style="color:#A6ACCD;">VM163:12 true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//第二种结果</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">VM173: 12 1 1</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:19 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:6 2 2</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:19 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:6 3 3</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:19 true</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:6 4 4</span></span>
<span class="line"><span style="color:#A6ACCD;">VM173:19 true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>将Set集合转换成数组，下列演示去重</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//第一种方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1,5,58,6,7,8,9,5]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr = [...set];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr); //[1, 5, 58, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//第二种</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Array.from(new Set([1,5,58,6,7,8,9,5]))); // [1, 5, 58, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="weak-set集合" tabindex="-1">Weak Set集合 <a class="header-anchor" href="#weak-set集合" aria-label="Permalink to &quot;Weak Set集合&quot;">​</a></h4><blockquote><p>set 是一个强引用集合，不信看栗子</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.size); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">//移除原始引用</span></span>
<span class="line"><span style="color:#A6ACCD;">key = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.size); //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//重新取回引用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">key = [...set][0]; //{}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这种情况会造成内存的泄露，所以我们可以用以下的方法，弱引用的Set集合</p></blockquote><h4 id="创建weak-set集合" tabindex="-1">创建Weak Set集合 <a class="header-anchor" href="#创建weak-set集合" aria-label="Permalink to &quot;创建Weak Set集合&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new WeakSet(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//向集合set添加对象</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(key)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.delete(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(key)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>我们试试这个</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new WeakSet(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(key)); //true set.size不能用在weakset</span></span>
<span class="line"><span style="color:#A6ACCD;">//移除原始引用</span></span>
<span class="line"><span style="color:#A6ACCD;">key = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(key)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="两者的不同" tabindex="-1">两者的不同 <a class="header-anchor" href="#两者的不同" aria-label="Permalink to &quot;两者的不同&quot;">​</a></h4><blockquote><p>WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以.</p></blockquote><blockquote><p>WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素</p></blockquote><blockquote><p>WeakSet 不可迭代 于是 for of foreach keys() values() 方法都没有</p></blockquote><h4 id="map集合-map-对象保存键值对。任何值-对象或者原始值-都可以作为一个键或一个值。" tabindex="-1">Map集合 Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。 <a class="header-anchor" href="#map集合-map-对象保存键值对。任何值-对象或者原始值-都可以作为一个键或一个值。" aria-label="Permalink to &quot;Map集合  Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。&quot;">​</a></h4><blockquote><p>基本用法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let map = new Map(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key1 = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    key2 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;name&#39;,&#39;ly&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(key1,&quot;ly1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(key2,&#39;2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.get(&#39;name&#39;),map.get(key1),map.get(key2)); //ly ly1 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Map集合支持的方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let map = new Map(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    key1 = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    key2 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;name&#39;,&#39;ly&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(key1,&quot;ly1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(key2,&#39;2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.size);  //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(key2)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.get(key2));2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.delete(key2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(key2)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(key1)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.size);  //0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Map集合的初始化方法,可以传一个数组，数组包含一个个子数组，子数组包含两个值，键和值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let map = new Map([[&quot;name&quot;,&#39;ly&#39;],[&quot;age&quot;,&#39;18&#39;]]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(&#39;name&#39;)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.get(&#39;name&#39;)); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.size);  //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>可以使用ForEach()</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let map = new Map([[&quot;name&quot;,&#39;ly&#39;],[&quot;age&quot;,&#39;18&#39;]]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.forEach((value,key,own) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value,key,own);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//ly name Map(2) {&quot;name&quot; =&gt; &quot;ly&quot;, &quot;age&quot; =&gt; &quot;18&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">18 age Map(2) {&quot;name&quot; =&gt; &quot;ly&quot;, &quot;age&quot; =&gt; &quot;18&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="weakmap-对象是一组键-值对的集合-其中的键是弱引用的。其键必须是对象-而值可以是任意的。" tabindex="-1">WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。 <a class="header-anchor" href="#weakmap-对象是一组键-值对的集合-其中的键是弱引用的。其键必须是对象-而值可以是任意的。" aria-label="Permalink to &quot;WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。&quot;">​</a></h3><blockquote><p>适用场景 保存dom元素对象，便于销毁和创建</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let map = new WeakMap(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ele = document.querySelector(&#39;div&#39;)[0];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(ele,&#39;Original&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let value = map.get(&#39;ele&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(value); //Original</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ele.parentNode.removeChild(ele);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ele = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>WeakMap支持的方法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let key1 = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    key2 = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    map = new WeakMap([[key1,&#39;ly&#39;],[key2,&#39;18&#39;]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(map.has(key1)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(map.get(key1)); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;">    map.delete(key1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(map.has(key1)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(map.get(key1)); //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>私有对象数据</p></blockquote><blockquote><p>es5创建接近有私有数据的对象</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var Person = (function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var privateData = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">        privateId = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Person(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.defineProperty(this,&quot;_id&quot;,{value:privateId++})</span></span>
<span class="line"><span style="color:#A6ACCD;">        privateData[this._id] = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name:name</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    Person.prototype.getName = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return privateData[this._id].name</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Person</span></span>
<span class="line"><span style="color:#A6ACCD;">}())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这种方式的弊端就是对象数据永远不会消失,而WeakUp可以处理这种情况</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let Person = (function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let privateData = new WeakMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Person(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        privateData.set(this,{name:name})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    Person.prototype.getName = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return privateData.get(this).name</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Person</span></span>
<span class="line"><span style="color:#A6ACCD;">}())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,47),r=[c,t,C,A,i];function y(D,u,d,g,h,k){return p(),l("div",null,r)}const q=a(o,[["render",y]]);export{b as __pageData,q as default};
