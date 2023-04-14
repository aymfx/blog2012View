import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const d=JSON.parse('{"title":"jQuery源码学习（2）-构造jquery对象（1）","description":"","frontmatter":{"title":"jQuery源码学习（2）-构造jquery对象（1）","date":"2017-07-29T00:00:00.000Z","tags":["jQuery"]},"headers":[],"relativePath":"posts/前端/以前/jQuery源码学习（2）-构造jquery对象（1）.md"}'),e={name:"posts/前端/以前/jQuery源码学习（2）-构造jquery对象（1）.md"},o=l(`<h1 id="构造函数jquery" tabindex="-1">构造函数jQuery <a class="header-anchor" href="#构造函数jquery" aria-label="Permalink to &quot;构造函数jQuery&quot;">​</a></h1><blockquote><p>jQuery(select [,context])</p></blockquote><ul><li>第一个参数是选择器，用于选择docunment里面的html元素，当传入的参数不是选择器时，会返回一个空的jquery对象</li><li>第二个是上下文对象，也就是限制从哪个范围开始查找元素，默认从document</li><li>当指定了第二个参数，实际上就是调用了$(selsect).find(xxx)</li></ul><blockquote><p>jQuery(html[,ownerDocument])、jQuery(html,props)</p></blockquote><ul><li>html 表示如果是html代码，jquery将其转换成一个jquery对象，可以进行插入dom 操作 <ul><li>类似于:$(&quot;<div>ly</div>&quot;).appendTo(&#39;body&#39;),可以是单标签</li></ul></li><li>ownerDocument 表示可以创建新的文档对象，默认当前文档</li><li>props 必须是单标签写法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$(&quot;&lt;div/&gt;&quot;, {　　　　</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;class&quot;: &quot;test&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            　　　　text: &quot;Click me!&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            　　　　click: function() {　　　　</span></span>
<span class="line"><span style="color:#A6ACCD;">                $(this).toggleClass(&quot;bar&quot;);　　　</span></span>
<span class="line"><span style="color:#A6ACCD;">            }　　</span></span>
<span class="line"><span style="color:#A6ACCD;">        }).appendTo(&quot;body&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>jQuery(element) jQuery(elementArray)</p></blockquote><ul><li>该方法是将dom元素封装成jquery元素然年调用jquery方法</li><li>多用于事件的监听</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$(&#39;div&#39;).click(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $(this).show();</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>jQuery(object)</p></blockquote><ul><li>对于普通的js对象也可以包装成jquery对象的</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var names = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            first: &#39;liu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            last: &#39;yang&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var $names = $(names);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log($names);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $names.on(&#39;binds&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;我叫&#39;, $names[0].first + $names[0].last);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    $names.trigger(&#39;binds&#39;); //自动触发</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>jQuery(callback)</p></blockquote><ul><li>如果传入一个函数，在document绑定一个ready事件监听函数，当dom加载时执行</li><li>ready比load早执行，不是原生函数,它由DOMContentLoaded事件onreadystatechange事件以及函数doScrollCheck()的统称</li></ul><blockquote><p>jQuery(jQuery object)</p></blockquote><ul><li>如归传入的是jquery对象，会创建一个一样的副本，并且返回，他们引用的同一个地址</li></ul><blockquote><p>jQuery()</p></blockquote><ul><li>不传参则返回一个空的jquery对象</li></ul><h2 id="jquery-fn-init-selector-context-rootjquery" tabindex="-1">jQuery.fn.init(selector,context,rootjQuery) <a class="header-anchor" href="#jquery-fn-init-selector-context-rootjquery" aria-label="Permalink to &quot;jQuery.fn.init(selector,context,rootjQuery)&quot;">​</a></h2><blockquote><p>12个分支</p></blockquote><ul><li>也就是有12种处理方式的写法，具体参考书吧</li><li>以下也有讲解</li></ul><blockquote><p>selector:接收的是dom对象</p></blockquote><blockquote><p>context : 上下文对象</p></blockquote><blockquote><p>rootjQuery</p></blockquote><ul><li>用于以下情况</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//id查找失败</span></span>
<span class="line"><span style="color:#A6ACCD;">if (elem.id !== match[2]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return rootjQuery.find(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//selector是选择器且没有context</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (!context || context.jquery) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (context || rootjQuery).find(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//selector是函数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (jQuery.isFunction(selector)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return rootjQuery.ready(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//怎么定义rootjQuery？</span></span>
<span class="line"><span style="color:#A6ACCD;"> rootjQuery = jQuery(document);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//如果判断选择器是false，返回的是空的$();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!selector) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">//如果字符串是body，则获取document.body</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (selector === &quot;body&quot; &amp;&amp; !context &amp;&amp; document.body) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;是我呀&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.context = document;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this[0] = document.body;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.selector = selector;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//用于匹配html代码以及id,第一个是selector 第二个是html或者undefind </span></span>
<span class="line"><span style="color:#A6ACCD;">    quickExpr = /^(?:[^#&lt;]*(&lt;[\\w\\W]+&gt;)[^&gt;]*$|#([\\w\\-]*)$)/,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//  匹配单标记</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> rsingleTag = /^&lt;(\\w+)\\s*\\/?&gt;(?:&lt;\\/\\1&gt;)?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,26),p=[o];function t(c,r,i,u,C,A){return a(),n("div",null,p)}const D=s(e,[["render",t]]);export{d as __pageData,D as default};
