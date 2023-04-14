import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const y=JSON.parse('{"title":"js的严格模式总结","description":"","frontmatter":{"title":"js的严格模式总结","date":"2016-07-29T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/js的严格模式总结.md"}'),e={name:"posts/前端/以前/js的严格模式总结.md"},p=l(`<pre><code>//变量  要声明
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	a=&#39;liuynag&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(a);//Uncaught ReferenceError: a is not defined*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//不能调用delete 
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 	&quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">   	/*var color=&#39;red&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	console.log(color);</span></span>
<span class="line"><span style="color:#A6ACCD;">   	delete color;//Delete of an unqualified identifier in strict mode.</span></span>
<span class="line"><span style="color:#A6ACCD;">   	console.log(color);*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//不能将保留字作为变量名
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">   	 /*	&quot;use strict&quot;; 	</span></span>
<span class="line"><span style="color:#A6ACCD;">     	var public=&#39;hah&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     	console.log(public);//Unexpected strict mode reserved word*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//严格模式 对象重名属性报错
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    /*&quot;use strict&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">     var person={</span></span>
<span class="line"><span style="color:#A6ACCD;">     	 	name:&#39;hahhha&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     	 	name:&#39;greg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(person.name);//编辑器报错，浏览器没有*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//重名参数
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  /*&quot;use strict&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">    	function a(num,num){</span></span>
<span class="line"><span style="color:#A6ACCD;">    		  console.log(num);// Duplicate parameter name not allowed in this context</span></span>
<span class="line"><span style="color:#A6ACCD;">    		  console.log(arguments[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    		  console.log(a.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    		  </span></span>
<span class="line"><span style="color:#A6ACCD;">    	}</span></span>
<span class="line"><span style="color:#A6ACCD;">    	a(11,12);*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//arguments对象
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	//  &quot;use strict&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">    	/*function a(num,num1){</span></span>
<span class="line"><span style="color:#A6ACCD;">              num=2;</span></span>
<span class="line"><span style="color:#A6ACCD;">               console.log(arguments[0]);//严格11 不严格 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    	}</span></span>
<span class="line"><span style="color:#A6ACCD;">    	a(11,12);*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//淘汰了arguments.callee arguments.caller  
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//  &quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	/*function factorial(num){</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(num&lt;=1){</span></span>
<span class="line"><span style="color:#A6ACCD;">			 return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">			return num*arguments.callee(num-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(factorial(5));//&#39;caller&#39;, &#39;callee&#39;, and &#39;arguments&#39; properties may not be accessed on strict mode functions or the arguments objects for calls to them*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//严格模式下 if语句不能创建函数  预编译不会提到if语句外
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">		/*&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">			  function dosomething(){</span></span>
<span class="line"><span style="color:#A6ACCD;">			  	   console.log(&quot;好像没出错&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			  }</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">			  //写完</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		dosomething();//ReferenceError: dosomething is not defined*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//eval()，它将不再包含上下文中创建函数或者变量；
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	function dosomething(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		  eval(&quot;var x=10&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		  console.log(x);//: x is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	dosomething()*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//eval()在严格模式下只有在被求值的特殊作用域下有效，随后被销毁
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	var result=eval(&quot;var x=10,y=11;x+y&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	alert(result);//21*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//抑制this
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	var color=&#39;red&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	function color1(){</span></span>
<span class="line"><span style="color:#A6ACCD;">		  console.log(this.color);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	color1(null);//严格Cannot read property &#39;color&#39; of undefined 不严格 red*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//抛弃了with语句
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	   with(location){</span></span>
<span class="line"><span style="color:#A6ACCD;">	   	   alert(href);////严格Strict mode code may not include a with statement不严格  一段地址</span></span>
<span class="line"><span style="color:#A6ACCD;">	   }*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>//抛弃8进制，0开头不属于8进制
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*&quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">		var value=&#39;010&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(parseInt(value));//不严格8 严格10*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,26),t=[p];function o(c,r,i,C,A,d){return a(),n("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
