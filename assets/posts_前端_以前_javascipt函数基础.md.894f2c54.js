import{_ as i,c as t,o as e,x as l,a,N as n}from"./chunks/framework.1f285265.js";const x=JSON.parse('{"title":"javascipt函数基础","description":"","frontmatter":{"title":"javascipt函数基础","date":"2016-07-25T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/javascipt函数基础.md"}'),r={name:"posts/前端/以前/javascipt函数基础.md"},o=l("h1",{id:"javascript函数基础",tabindex:"-1"},[a("JavaScript函数基础 "),l("a",{class:"header-anchor",href:"#javascript函数基础","aria-label":'Permalink to "JavaScript函数基础"'},"​")],-1),u=l("h2",{id:"定义方法",tabindex:"-1"},[a("定义方法 "),l("a",{class:"header-anchor",href:"#定义方法","aria-label":'Permalink to "定义方法"'},"​")],-1),c=l("ul",null,[l("li",null,[a("静态方法 "),l("ul",null,[l("li",{"函数体；[return":"","[返回值；]]":""},"function 函数名([参数列表])")])]),l("li",null,[a("动态匿名方法 "),l("ul",null,[l("li",null,[l("p",null,'var 函数名=new Function(["虚参列表"]，"函数体");'),l("pre",null,[l("code",null,` var add = new Function(x,y, var sum; sum=x+y;return sum;);
 var s = add(100,39);
 alert(s=+s);
`)])])])]),l("li",{"函数体；[return":"","[返回值；]]":""},"直接量方法 函数名=function([参数列表])")],-1),s=n(`<h2 id="调用方法" tabindex="-1">调用方法 <a class="header-anchor" href="#调用方法" aria-label="Permalink to &quot;调用方法&quot;">​</a></h2><ul><li>直接调用： 函数名(实参列表)</li><li>在连接中调用：<a href="javascript:函数名()">描述文字</a></li><li>在事件中调用：事件类型=&quot;函数名()&quot;</li><li>递归调用</li><li>自执行 (function(){})()</li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li><p>apply:将函数作为对象的方法来调用将指定参数传递给该方法</p></li><li><p>call:将函数作为对象的方法来调用将指定参数传递给该方法</p><pre><code> &lt;script type=&quot;text/javascript&quot;&gt;
 function A(){
 this.flag = &#39;A&#39;;
 this.tip = function(){
 alert(this.flag);
 };
 }
 function B(){
 this.flag = &#39;B&#39;;
 }
 var a = new A();
 var b = new B();
 //a.tip.call(b);
 a.tip.apply(b);
 &lt;/script&gt;
</code></pre></li><li><p>toString：返回函数的字符串表示</p><pre><code> 	function a(){
 	alert(a)
 	}
 	
 	document.write(a.toString());//function a(){ alert(a) }
</code></pre></li></ul><h2 id="arguments对象" tabindex="-1">arguments对象 <a class="header-anchor" href="#arguments对象" aria-label="Permalink to &quot;arguments对象&quot;">​</a></h2><ul><li>功能:存放实参的参数列表</li><li>特性 <ul><li>在函数体内使用</li><li>带有下标属性，但并非数组</li><li>函数声明时自动初始化</li></ul></li><li>属性 <ul><li><p>length:获取函数实参的长度</p></li><li><p>callee:返回当前正在指向的函数</p><pre><code> function a(){
 	document.write(arguments.callee);

 }

 a();//function a(){ document.write(arguments.callee); }
</code></pre></li><li><p>caler返回调用当前正在执行函数的函数名</p></li></ul></li></ul><h2 id="函数参数" tabindex="-1">函数参数 <a class="header-anchor" href="#函数参数" aria-label="Permalink to &quot;函数参数&quot;">​</a></h2><ul><li>参数类型 <ul><li>形参 <ul><li>定义函数时使用的参数</li><li>接收调用该函数时传递的参数</li></ul></li><li>实参 <ul><li>调用函数时传递给函数的实际参数</li></ul></li></ul></li><li>特性 <ul><li>参数个数没有限制 <ul><li>实参&lt;形参 ：多余形参=undefined;</li><li>实参&gt;形参 ：多余的被忽略</li></ul></li><li>参数的类型没有限制</li><li>通过arguments对象访问参数数组</li><li>参数始终按值传递 <ul><li>基本类型：传值</li><li>引用类型:地址</li></ul></li></ul></li></ul><h2 id="指针标识" tabindex="-1">指针标识 <a class="header-anchor" href="#指针标识" aria-label="Permalink to &quot;指针标识&quot;">​</a></h2><ul><li>this:指向当前操作的对象</li><li>callee:指向参数集合所属函数</li><li>prototype:指向函数附带的函数原型对象</li><li>constructor:指向创建该对象的构造函数</li></ul>`,10),p=[o,u,c,s];function d(h,_,f,m,v,g){return e(),t("div",null,p)}const q=i(r,[["render",d]]);export{x as __pageData,q as default};
