import{_ as n,c as l,o as e,N as a,x as s,a as o}from"./chunks/framework.1f285265.js";const m=JSON.parse('{"title":"ES6-字符串和正则表达式","description":"","frontmatter":{"title":"ES6-字符串和正则表达式","date":"2018-01-25T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/ES6-字符串和正则表达式.md"}'),p={name:"posts/前端/以前/ES6-字符串和正则表达式.md"},t=a(`<p><img src="http://upload-images.jianshu.io/upload_images/10843623-c41e6ce3da1d0523.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="timg.jpg"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>入行这么久了，前端学习的成本感觉越来越高了，不会的东西一茬接一茬，在学校太忽视它，学的半吊子，现在要努力赶上才行，杭州的天气变冷了，我也想回家了，坚持，哎嘿，再上半个月班就要放假了开心。（这是从我自己博客移植过来的）</p></blockquote><blockquote><p>我的博客地址 ：<a href="http://www.aymfx.cn/%EF%BC%8C%E6%AC%A2%E8%BF%8E%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer">http://www.aymfx.cn/，欢迎访问</a></p></blockquote><h3 id="引子" tabindex="-1">引子 <a class="header-anchor" href="#引子" aria-label="Permalink to &quot;引子&quot;">​</a></h3><blockquote><p>这张理解起来比较费劲，慢慢看，慢慢练,天气比较冷啊，手敲这些好费劲</p></blockquote><h3 id="utf-16码位-基本多文种平面-到辅助平面字符的扩展" tabindex="-1">utf-16码位(基本多文种平面)到辅助平面字符的扩展 <a class="header-anchor" href="#utf-16码位-基本多文种平面-到辅助平面字符的扩展" aria-label="Permalink to &quot;utf-16码位(基本多文种平面)到辅助平面字符的扩展&quot;">​</a></h3><blockquote><p>在ES6之前， JS 的字符串以 16 位字符编码(UTF-16)为基础。每个 16 位序列(相当于2个字节)是一个编码单元(code unit)，可简称为码元，用于表示一个字符。字符串所有的属性与方法(如length属性与charAt() 方法等)都是基于16位序列</p></blockquote><blockquote><p>最常用的Unicode字符使用16位序列编码字符，属于“基本多语种平面”(Basic Multilingual Plane BMP)，也称为“零断面”(plan 0)， 是Unicode中的一个编码区段，编码介于\\u0000~\\uFFFF之间。超过这个范围的码位则要归属于某个辅助平面或称为扩展平面(supplementary plane)，其中的码位仅用16位就无法表示了 为此，UTF-16引入了代理对(surrogate pairs)，规定用两个16位编码来表示一个码位。这意味着，字符串里的字符有两种：一种由一个码元（共 16 位）来表示BMP字符，另一种用两个码元（共 32 位）来表示辅助平面字符</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let text = &#39;?&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.length); //2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(/^.$/.test(text)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charAt(0)); //�</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charAt(1)); //�</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charCodeAt(0)); //55362</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charCodeAt(1)); //57271</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这个字?（jí）其实就是一个两个16位字符组成的字,基于16位字符串的属性与方法便失效了</p></blockquote><h4 id="codepointat-只接受编码单元的位置而非字符位置作为参数-返回给定位置对应的码位" tabindex="-1">codePointAt() 只接受编码单元的位置而非字符位置作为参数,返回给定位置对应的码位 <a class="header-anchor" href="#codepointat-只接受编码单元的位置而非字符位置作为参数-返回给定位置对应的码位" aria-label="Permalink to &quot;codePointAt()  只接受编码单元的位置而非字符位置作为参数,返回给定位置对应的码位&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let text = &#39;a?&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charCodeAt(0)); //55362</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charCodeAt(1)); //57271</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.charCodeAt(2)); //57271</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.codePointAt(0)); //134071</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.codePointAt(1)); //57271</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.codePointAt(2)); //57271</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>通过这个方法我们可以检测字符是不是32位的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function is32Bit(char){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return char.codePointAt(0) &gt; 0xffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(is32Bit(&#39;?&#39;)); //ture</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(is32Bit(&#39;a&#39;));  //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="string-fromcodepoint-通过码位获得对应字符" tabindex="-1">String.fromCodePoint()通过码位获得对应字符 <a class="header-anchor" href="#string-fromcodepoint-通过码位获得对应字符" aria-label="Permalink to &quot;String.fromCodePoint()通过码位获得对应字符&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  console.log(String.fromCodePoint(134071)); //?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="normalize" tabindex="-1">normalize() <a class="header-anchor" href="#normalize" aria-label="Permalink to &quot;normalize()&quot;">​</a></h4><blockquote><p>许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\\u004F）和ˇ（\\u030C）合成Ǒ（\\u004F\\u030C）。 这两种表示方法，在视觉和语义上都等价，但是JavaScript不能识别。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&#39;\\u01D1&#39;===&#39;\\u004F\\u030C&#39; //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;\\u01D1&#39;.length // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;\\u004F\\u030C&#39;.length // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;\\u01D1&#39;.normalize() === &#39;\\u004F\\u030C&#39;.normalize() // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。</li><li>NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。</li><li>NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）</li><li>NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符</li></ul><h4 id="正则表达式u修饰符" tabindex="-1">正则表达式u修饰符 <a class="header-anchor" href="#正则表达式u修饰符" aria-label="Permalink to &quot;正则表达式u修饰符&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let text = &#39;?&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(/^.$/.test(text)); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(/^.$/u.test(text)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="计算码位的数量" tabindex="-1">计算码位的数量 <a class="header-anchor" href="#计算码位的数量" aria-label="Permalink to &quot;计算码位的数量&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function codePointLength(text){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = text.match(/[\\s\\S]/gu);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result ? result.length : 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(codePointLength(&quot;123a&quot;)); //4</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(codePointLength(&quot;?a&quot;)); //2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(codePointLength(&quot;?哦&quot;)); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//emmmmm。运行效率蛮低，听说有更简单的，后面演示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="字符串中子串的识别" tabindex="-1">字符串中子串的识别 <a class="header-anchor" href="#字符串中子串的识别" aria-label="Permalink to &quot;字符串中子串的识别&quot;">​</a></h3><h4 id="includes-x-y-检测指定字符串返回boolean值-第二参数是开始位置-0开始数" tabindex="-1">includes(x,y)检测指定字符串返回boolean值，第二参数是开始位置(0开始数) <a class="header-anchor" href="#includes-x-y-检测指定字符串返回boolean值-第二参数是开始位置-0开始数" aria-label="Permalink to &quot;includes(x,y)检测指定字符串返回boolean值，第二参数是开始位置(0开始数)&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let text = &quot;adsdasdasgsgwefsfs&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let subtext = &#39;asd&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.includes(subtext,4)) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.includes(subtext)) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.includes(&#39;sdadasda&#39;)) //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="startswith-x-y-和-endswith-x-y-检测字符串开头和结尾的是否与子串相匹配-第二参数是开始位置-0开始数" tabindex="-1">startsWith(x,y) 和 endsWith(x,y) 检测字符串开头和结尾的是否与子串相匹配,第二参数是开始位置(0开始数) <a class="header-anchor" href="#startswith-x-y-和-endswith-x-y-检测字符串开头和结尾的是否与子串相匹配-第二参数是开始位置-0开始数" aria-label="Permalink to &quot;startsWith(x,y) 和 endsWith(x,y) 检测字符串开头和结尾的是否与子串相匹配,第二参数是开始位置(0开始数)&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let text = &quot;adsdasdasgsgwefsfs&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let subtext1 = &#39;ads&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let subtext2 = &#39;sfs&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.startsWith(&#39;asd&#39;,4)) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.startsWith(subtext1)) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.startsWith(&#39;sdadasda&#39;)) //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.endsWith(&#39;gsgwefsfs&#39;,18)) //true 以最后一个字母的位置为准</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.endsWith(subtext2)) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text.endsWith(&#39;sdadasda&#39;)) //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="repeat-接受一个number-即将字符重复的次数" tabindex="-1">repeat() 接受一个number,即将字符重复的次数 <a class="header-anchor" href="#repeat-接受一个number-即将字符重复的次数" aria-label="Permalink to &quot;repeat() 接受一个number,即将字符重复的次数&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(&#39;x&#39;.repeat(6)); // xxxxxx</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;ly&#39;.repeat(3));  //lylyly</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;爱&#39;.repeat(2));  //爱爱</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="正则的语法变更-蛮头疼的-正则还是晕乎乎的" tabindex="-1">正则的语法变更 （蛮头疼的,正则还是晕乎乎的） <a class="header-anchor" href="#正则的语法变更-蛮头疼的-正则还是晕乎乎的" aria-label="Permalink to &quot;正则的语法变更 （蛮头疼的,正则还是晕乎乎的）&quot;">​</a></h3><h4 id="正则表达式y修饰符" tabindex="-1">正则表达式y修饰符 <a class="header-anchor" href="#正则表达式y修饰符" aria-label="Permalink to &quot;正则表达式y修饰符&quot;">​</a></h4><blockquote><p>除了u 修饰符，ES6还为正则表达式添加了 y 修饰符，叫做“粘连”修饰符。y 修饰符的作用与 g 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g 修饰符只要剩余位置中存在匹配就可，而 y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的含义，当为匹配到时，将会返回空，lastIndex将会置为0</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var s = &#39;aaa_aa_a&#39;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">var r1 = /a+/g;  </span></span>
<span class="line"><span style="color:#A6ACCD;">var r2 = /a+/y;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r1.exec(s)) //[&quot;aaa&quot;, index: 0, input: &quot;aaa_aa_a&quot;] console.log(r2.exec(s)) //[&quot;aaa&quot;, index: 0, input: &quot;aaa_aa_a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r1.lastIndex) //3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r2.lastIndex) //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r1.exec(s)) //[&quot;aa&quot;, index: 4, input: &quot;aaa_aa_a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r2.exec(s)) //null  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r1.lastIndex) //6</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r2.lastIndex) //0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r1.exec(s)) //[&quot;a&quot;, index: 7, input: &quot;aaa_aa_a&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r2.exec(s)) //[&quot;aaa&quot;, index: 0, input: &quot;aaa_aa_a&quot;] console.log(r1.lastIndex) //8</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(r2.lastIndex) //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>检测y修饰符是否存在</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let pattern = /hello\\d/y;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(pattern.sticky) //true  谷歌浏览器下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="正则表达式的复制" tabindex="-1">正则表达式的复制 <a class="header-anchor" href="#正则表达式的复制" aria-label="Permalink to &quot;正则表达式的复制&quot;">​</a></h4><blockquote><p>es5 如下复制</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var re1 = /ab/i</span></span>
<span class="line"><span style="color:#A6ACCD;">    re2 = new RegExp(re1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(re1.construct === re2.construct) //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>es6新增了可以添加传修饰符</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var re1 = /ab/i</span></span>
<span class="line"><span style="color:#A6ACCD;">    re2 = new RegExp(re1,&#39;g&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(re1.toString()) ///ab/i</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(re2.toString()) ///ab/g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="flags属性" tabindex="-1">flags属性 <a class="header-anchor" href="#flags属性" aria-label="Permalink to &quot;flags属性&quot;">​</a></h4><blockquote><p>source获取正则表达式文本 flags获取其修饰符</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let re = /ab/gi;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(re.source); //ab</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(re.flags);  //gi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="模板字面量" tabindex="-1">模板字面量 <a class="header-anchor" href="#模板字面量" aria-label="Permalink to &quot;模板字面量&quot;">​</a></h3><blockquote><p>JS 的字符串相对其他语言来说功能总是有限的，事实上，ES5中一直缺乏许多特性，如多行字符串、字符串格式化、HTML转义等。ES6通过模板字面量的方式进行了填补，模板字面量试着跳出JS已有的字符串体系，通过一些全新的方法来解决类似的问题</p></blockquote><h4 id="反引号" tabindex="-1">反引号（\`\`） <a class="header-anchor" href="#反引号" aria-label="Permalink to &quot;反引号（\`\`）&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const name = &#39;ly&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let message = \`\${name},is a man\`  //ly,is a man</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\${} 可以写变量  名叫字符串占位符</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(\`\\\`hh\\\`\`); //\`hh\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//es5 实现多行文本</span></span>
<span class="line"><span style="color:#A6ACCD;">var message = &quot; ly  \\n \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   love you&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//es6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var message = \` ly</span></span>
<span class="line"><span style="color:#A6ACCD;">   love you\`</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message); // ly</span></span>
<span class="line"><span style="color:#A6ACCD;">                      // love you</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,50),c=s("h4",{javascript表达式:"",id:"字符串占位符",tabindex:"-1"},[o("字符串占位符 $ "),s("a",{class:"header-anchor",href:"#字符串占位符","aria-label":'Permalink to "字符串占位符   ${javascript表达式}"'},"​")],-1),i=a(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let count = 15,</span></span>
<span class="line"><span style="color:#A6ACCD;">    price = .5,</span></span>
<span class="line"><span style="color:#A6ACCD;">    message = \`\${count} items cost $\${(count*price).toFixed(1)}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(message); //15 items cost $7.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="标签模板" tabindex="-1">标签模板 <a class="header-anchor" href="#标签模板" aria-label="Permalink to &quot;标签模板&quot;">​</a></h4><blockquote><p>标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的是函数，紧跟在后面的模板字符串就是它的参数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">tag \`Hello \${a+b} world \${a*b}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">//这个标识名tag,它是一个函数。整个表达式的返回值，就是tag函数处理模板字符串之后的返回值。函数tag会依次接收到多个参数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>tag函数的第一个参数是一个数组，该数组的成员时模板字符串中那些没有变量替换的部分，也就是说，变量替换只发生在数组的第一个成员和第二个成员之间，以此类推。tag函数的其他参数都是模板字符串各个变量被替换后的值，由于本例中，模板字符串含有两个变量，因此tag会接收到value1和value2两个参数。 tag函数所有参数的实际值如下： ——第一个参数：[&#39;Hello &#39;,&#39; world &#39;,&#39;&#39;] ——第二个参数：15 ——第三个参数：50 也就是说tag函数实际上是以下面的形式调用的 tag([&#39;Hello &#39;,&#39; world &#39;,&#39;&#39;],15,50); 我们可以按照需要编写tag 函数的代码。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var count = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">var price = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function tag(s,v1,v2,v3){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s[2]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(v1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(v2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;ok&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">tag\`q\${count} items cost $\${(count*price).toFixed(1)}.\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//VM173:5 </span></span>
<span class="line"><span style="color:#A6ACCD;">//VM173:6  items cost $</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM173:7  .</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM173:8 5</span></span>
<span class="line"><span style="color:#A6ACCD;">//VM173:9 50.0</span></span>
<span class="line"><span style="color:#A6ACCD;">//ok</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>标签函数的常用形式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function tag(literals,...substitutions){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //literals 值得是被\${}隔开的字符</span></span>
<span class="line"><span style="color:#A6ACCD;">    //substitutions，有几个\${}就有几个这个</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>利用 literals.length-1 === substitutions.length,拼接字符串</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function passthru(literals,...values){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var output =&quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(var index = 0;index&lt;values.length;index++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        output = literals[index]+values[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    output+=literals[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">    return output;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let count = 15,</span></span>
<span class="line"><span style="color:#A6ACCD;">    price = .5,</span></span>
<span class="line"><span style="color:#A6ACCD;">    message = passthru\`\${count} items cost $\${(count*price).toFixed(1)}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(message); //15 items cost $7.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>what?这样做的意义是啥？</p></blockquote><blockquote><p>emmm,过滤html字符串,还有一些转义字符的过滤</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function SaferHTML(templateData){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var s = templateData[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    var i;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(i = 1;i&lt;arguments.length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        var arg = String(arguments[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //sender里面可能有特殊字符，进行转义</span></span>
<span class="line"><span style="color:#A6ACCD;">        s += arg.replace(/&amp;/g,&quot;&amp;amp;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                .replace(/&lt;/g,&quot;&amp;lt;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                .replace(/&gt;/g,&quot;&amp;gt;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        s += templateData[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(i);//2，表示这个循环只执行了一次，因为templateData[0]=&quot;&lt;p&gt;&quot;,arguments这个数组只有\${sender}这个元素，后面一长串字符都是templateData[2];</span></span>
<span class="line"><span style="color:#A6ACCD;">    return s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var sender = &#39;&lt;script&gt;alert(&quot;abc&quot;)&lt;/script&gt;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var message = SaferHTML\`&lt;p&gt;\${sender} has sent you a message.&lt;/p&gt;\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="在模板字面量中使用原始值" tabindex="-1">在模板字面量中使用原始值 <a class="header-anchor" href="#在模板字面量中使用原始值" aria-label="Permalink to &quot;在模板字面量中使用原始值&quot;">​</a></h4><blockquote><p>使用内建对象String.raw访问</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let ms1 = \`ly\\n love you\`</span></span>
<span class="line"><span style="color:#A6ACCD;">let ms2 = String.raw\`ly\\n love you\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ms1); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;">                  //love you</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ms2); // ly\\n love you</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),r=[t,c,i];function C(A,u,y,d,g,D){return e(),l("div",null,r)}const b=n(p,[["render",C]]);export{m as __pageData,b as default};
