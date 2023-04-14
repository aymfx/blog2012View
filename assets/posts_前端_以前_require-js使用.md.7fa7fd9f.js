import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"require.js使用","description":"","frontmatter":{"title":"require.js使用","date":"2016-09-15T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/require-js使用.md"}'),p={name:"posts/前端/以前/require-js使用.md"},e=l(`<h1 id="问题-如何解决前端js出现的文件依赖和命名空间问题" tabindex="-1">问题：如何解决前端js出现的文件依赖和命名空间问题 <a class="header-anchor" href="#问题-如何解决前端js出现的文件依赖和命名空间问题" aria-label="Permalink to &quot;问题：如何解决前端js出现的文件依赖和命名空间问题&quot;">​</a></h1><pre><code>	可以通过命名空间和采用模块化的方式解决，今天学的require.js可以同时解决这两个问题.
</code></pre><h1 id="requirejs能带来什么好处" tabindex="-1">requirejs能带来什么好处 <a class="header-anchor" href="#requirejs能带来什么好处" aria-label="Permalink to &quot;requirejs能带来什么好处&quot;">​</a></h1><pre><code>1.异步加载，防止js加载阻塞页面渲染
2.不必引用很多js文件
3.以上两个问题可以解决
</code></pre><h1 id="掌握模块化的思想" tabindex="-1">掌握模块化的思想 <a class="header-anchor" href="#掌握模块化的思想" aria-label="Permalink to &quot;掌握模块化的思想&quot;">​</a></h1><pre><code>模块化思想就是指将页面根据内容的关联性分解成不同的且相互独立的模块进行开发，每个模块之间没有必然的联系，互不影响。
模块化思想的主要优势就体现在：提高重用性，提高开发效率，降低维护成本，提升代码质量等方面。
</code></pre><h1 id="amd-require-js-和cmd-sea-js-规范" tabindex="-1">AMD(require.js)和CMD(sea.js)规范 <a class="header-anchor" href="#amd-require-js-和cmd-sea-js-规范" aria-label="Permalink to &quot;AMD(require.js)和CMD(sea.js)规范&quot;">​</a></h1><pre><code>AMD是&quot;Asynchronous Module Definition&quot;的缩写，意思就是&quot;异步模块定义&quot;。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
CMD规范，全称”Common Module Definition”，称为 通用模块加载规范 。一般也是用在浏览器端。浏览器端异步加载库Sea.js实现的就是CMD规范。在CMD规范中，一个模块就是一个文件。
</code></pre><h1 id="引用require-js" tabindex="-1">引用require.js <a class="header-anchor" href="#引用require-js" aria-label="Permalink to &quot;引用require.js&quot;">​</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script data-main</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js/require.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/scrip</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">data-main:指定网页程序的主模块,意思是整个网页的入口代码,所有代码都从这儿开始运行.以后不用再引入js代码了，由于require.js默认的文件后缀名是js，所以可以把main.js简写成main。当我们在里面写了路径之后，以后引入js目录下面的直接写文件名不加后缀，否则不仅要加后缀还要加文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">require.js：引入模块</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">下载地址：http://requirejs.org/docs/release/2.3.3/minified/require.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 主程序入口（主模块main.js）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 测试是否引入成功</span></span>
<span class="line"><span style="color:#89DDFF;">![</span><span style="color:#A6ACCD;">一如</span><span style="color:#89DDFF;">](</span><span style="color:#FFCB6B;">http://img.blog.csdn.net/20170306193718505?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMjkxMDQ5OTk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 调用模块写法（放在mian.js中）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#82AAFF;">require([],function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C3E88D;">	</span><span style="color:#FFCB6B;">alert(1</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">require</span><span style="color:#C3E88D;"> 调用模块，接收二个参数。</span></span>
<span class="line"><span style="color:#FFCB6B;">第1个参数是一个数组，表示所依赖的模块</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">也就是js了</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;"> ；</span></span>
<span class="line"><span style="color:#FFCB6B;">第2个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 依赖模块写法（独立单独的js--module.js）</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">define([],function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C3E88D;">		</span><span style="color:#FFCB6B;">alert(1</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 在入口函数添加依赖(main.js)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">main.js</span></span>
<span class="line"><span style="color:#C3E88D;">	</span><span style="color:#FFCB6B;">require([&quot;js/module1.js&quot;,&quot;js/module2.js&quot;</span><span style="color:#C3E88D;">],function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">m1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#C3E88D;">		   </span><span style="color:#FFCB6B;">alert(&quot;我是入口函数&quot;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C3E88D;">	</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">module1.js</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">define([],function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">alert(&quot;我是模块一&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">module.js</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">define([],function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		 </span><span style="color:#FFCB6B;">alert(&quot;我是模块2&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>结果：我是模块一  我是模块2   我是入口函数
小结：由于依赖模块是异步的，所以必须先执行完，才能调用回调函数,两个依赖的顺序出现不一定按顺序来
</code></pre><h2 id="加载文件-加载服务器文件" tabindex="-1">加载文件（加载服务器文件） <a class="header-anchor" href="#加载文件-加载服务器文件" aria-label="Permalink to &quot;加载文件（加载服务器文件）&quot;">​</a></h2><p>//引入jquery</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">require.config(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#FFCB6B;">paths:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	  	</span><span style="color:#FFCB6B;">&quot;jquery&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">[&quot;http://libs.baidu.com/jquery/2.0.3/jquery&quot;</span><span style="color:#A6ACCD;">]//可引入多个</span></span>
<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">require([&quot;js/module1.js&quot;,&quot;js/module2.js&quot;</span><span style="color:#A6ACCD;">],function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">m1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	   </span><span style="color:#FFCB6B;">alert(&quot;我是入口函数&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">require([&quot;jquery&quot;</span><span style="color:#A6ACCD;">],function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">$</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">console.log(typeof</span><span style="color:#A6ACCD;"> $)</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">//function</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="其实当我们在data-main-js-main-这样设定其实相当于" tabindex="-1">其实当我们在data-main=“js/main&quot;这样设定其实相当于： <a class="header-anchor" href="#其实当我们在data-main-js-main-这样设定其实相当于" aria-label="Permalink to &quot;其实当我们在data-main=“js/main&quot;这样设定其实相当于：&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">require.config(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="引入第三方模块" tabindex="-1">引入第三方模块 <a class="header-anchor" href="#引入第三方模块" aria-label="Permalink to &quot;引入第三方模块&quot;">​</a></h3><pre><code>暂时没学，回头补充

补充：主模块的依赖模块是[&#39;jquery&#39;, &#39;module1&#39;, &#39;module2&#39;]。默认情况下，require.js假定这三个模块与main.js在同一个目录，文件名分别为 jquery.js，module1.js和module2.js，然后自动加载。
</code></pre>`,20),o=[e];function t(c,r,i,y,F,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
