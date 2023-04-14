import{_ as l,c as n,o as s,N as a}from"./chunks/framework.1f285265.js";const y=JSON.parse('{"title":"jQuery源码学习（1）-总体架构","description":"","frontmatter":{"title":"jQuery源码学习（1）-总体架构","date":"2017-07-28T00:00:00.000Z","tags":["jQuery"]},"headers":[],"relativePath":"posts/前端/以前/jQuery源码学习（1）-总体架构.md"}'),e={name:"posts/前端/以前/jQuery源码学习（1）-总体架构.md"},o=a(`<h1 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h1><blockquote><p>jquery技术内幕书籍</p></blockquote><blockquote><p>jquery1.7.1源码</p></blockquote><h1 id="总体架构" tabindex="-1">总体架构 <a class="header-anchor" href="#总体架构" aria-label="Permalink to &quot;总体架构&quot;">​</a></h1><h2 id="jquery的三个部分" tabindex="-1">jquery的三个部分 <a class="header-anchor" href="#jquery的三个部分" aria-label="Permalink to &quot;jquery的三个部分&quot;">​</a></h2><blockquote><p>入口模块</p></blockquote><ul><li>构造jQuery对象的jquery()</li></ul><blockquote><p>底层支持模块</p></blockquote><ul><li>工具方法Utilities</li><li>回调函数列表 Callbacks Object</li><li>异步队列Deferred Object</li><li>浏览器功能测试Support</li><li>数据缓存Data</li><li>队列Queue</li><li>选择器Sizzle</li></ul><blockquote><p>功能模块</p></blockquote><ul><li>属性操作 Attributes</li><li>事件系统 Events</li><li>DOM遍历Traversing</li><li>样式操作css <ul><li>计算机样式&amp; 内联样式</li><li>坐标Offset</li><li>尺寸Dimension</li></ul></li><li>异步请求Ajax</li><li>动画Effects</li></ul><h2 id="整体的结构" tabindex="-1">整体的结构 <a class="header-anchor" href="#整体的结构" aria-label="Permalink to &quot;整体的结构&quot;">​</a></h2><blockquote><p>源码整体结构 LY ===Jquery 自己改了下</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(function(window, undefind) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //构造jQuery对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    var LY = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var LY = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new LY.fn.init();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return LY;</span></span>
<span class="line"><span style="color:#A6ACCD;">    })();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //一些基础的功能</span></span>
<span class="line"><span style="color:#A6ACCD;">    .....</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //将ly对象挂载到window下面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    window.LY = window.ly = LY;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">})(window)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>三种自执行匿名函数</p></blockquote><ul><li>(function(){})() //jquery采用的这种</li><li></li><li>(function(){}())</li><li></li><li>!function(){}();</li></ul><blockquote><p>为什么要传入 window以及undefined 在匿名函数里面</p></blockquote><ul><li><p>传入 window 变量，使得 window 由全局变量变为局部变量，当在 jQuery 代码块中访问 window时，不需要将作用域链回退到顶层作用域，这样可以更快的访问 window</p></li><li><p>将 window 作为参数传入，可以在压缩代码时进行优化</p></li><li><p>对于undefind也是如此，但是它最重要的原因是undefined的可能被重写值(在某些浏览器)</p></li></ul><blockquote><p>为什么在自执行函数前面加分号</p></blockquote><ul><li>保障浏览器正确识别</li></ul>`,20),i=[o];function p(t,c,r,u,d,A){return s(),n("div",null,i)}const _=l(e,[["render",p]]);export{y as __pageData,_ as default};
