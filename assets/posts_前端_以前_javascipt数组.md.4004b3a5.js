import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"javascipt数组","description":"","frontmatter":{"title":"javascipt数组","date":"2016-07-28T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/javascipt数组.md"}'),t={name:"posts/前端/以前/javascipt数组.md"},p=l(`<h1 id="javascript数组" tabindex="-1">JavaScript数组 <a class="header-anchor" href="#javascript数组" aria-label="Permalink to &quot;JavaScript数组&quot;">​</a></h1><h2 id="创建方法" tabindex="-1">创建方法 <a class="header-anchor" href="#创建方法" aria-label="Permalink to &quot;创建方法&quot;">​</a></h2><ul><li><p>构造函数对象创建</p><ul><li>空数组：var obj=new Array();</li><li>指定长度:var obj=new Array(size);</li><li>指定元素：var obj=new Array(value1,....,valuen);</li></ul></li><li><p>字面量对象创建</p><ul><li>单维数组：var obj=[value1,value2,....,valuen];</li><li>多维数组：var obj=[[v1,v2],[v1,v2],[v1,v2]]；</li></ul></li></ul><h2 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h2><ul><li>存取数组 <ul><li>单维数组:数组名[下标索引]</li><li>多维数组:数组名[外层下标][内层下标]</li><li>特性 <ul><li>数组长度是弹性的,可以自由伸缩</li><li>数组下标从零开始</li><li>下标类型 <ul><li>数值</li><li>非数值 <ul><li>转换成字符串(数字字符会转成数字)</li></ul></li></ul></li></ul></li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			  var arr=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr[&quot;10&quot;]=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    			  alert(arr.length);//11</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">				  alert(arr[10]);//0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			      var arr1=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;a&quot;]=&quot;hah&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;b&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  alert(arr1.length);//0</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  alert(arr1[&quot;b&quot;])//asd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>			 - 生成关联数组
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">					arr[&quot;name&quot;] = &quot;mary&quot;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">					arr[&quot;age&quot;] = &quot;3&quot;;  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">					arr[&quot;sex&quot;] = &quot;man&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>			 - 下标将作为对象属性的名字
			 
			 - Javascript数组下标值的范围为0到2的32次方。对于任意给定的数字下标值，如果不在此范围内，js会将它转换为一个字符串，并将该下标对应的值作为该数组对象的一个属性值而不是数组元素，例如array[-1] = &quot;yes&quot; 其实就相当于给array对象添加了一个名为-1的属性，属性值为yes。如果该下标值在合法范围内，则无论该下标值是数字还是数字字符串，都一律会被转化为数字使用，即 array[&quot;100&quot;] = 0 和 array[100] = 0 执行的是相同的操作。 
	 - 数组元素可以添加到对象中
</code></pre><ul><li>增加数组：使用[]运算符指定新的下标</li><li>删除数组:delete 数组名[下标]</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    		 	  var arr1=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;a&quot;]=&quot;hah&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;b&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  console.log(arr1)//[a: &quot;hah&quot;, b: &quot;asd&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  delete arr1[&quot;a&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  alert(typeof arr1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  console.log(arr1);//[b: &quot;asd&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>遍历数组:for(var 数组元素变量 in 数组)</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    	var arr1=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    	arr1[&quot;a&quot;]=&quot;hah&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	arr1[&quot;b&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	arr1[&quot;c&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span></span>
<span class="line"><span style="color:#A6ACCD;">    	for (var x in arr1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	document.write(x+&quot;:&quot;+arr1[x]);//a:hahb:asdc:asd</span></span>
<span class="line"><span style="color:#A6ACCD;">    	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="数组属性" tabindex="-1">数组属性 <a class="header-anchor" href="#数组属性" aria-label="Permalink to &quot;数组属性&quot;">​</a></h2><ul><li>constructor:引用数组对象的构造函数</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			var arr=new Array();</span></span>
<span class="line"><span style="color:#A6ACCD;">    			var arr1=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(arr.constructor)//function Array() { [native code] }</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(arr1.constructor)//function Array() { [native code] }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>length:返回数组的长度 <ul><li>数组下标必须是数字，或者数字字符，否则length为0</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			  var arr1=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;a&quot;]=&quot;hah&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    			  arr1[&quot;b&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  arr1[&quot;c&quot;]=&quot;asd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr1.length)//0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>prototype:通过增加属性和方法扩展数组定义</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    function array_max( )</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">       var i, max = this[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">       for (i = 1; i &lt; this.length; i++)</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">       if (max &lt; this[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">       max = this[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       return max;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Array.prototype.max = array_max;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var x = new Array(1, 2, 3, 4, 5, 6);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var y = x.max( );//y=6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ecmascript-3方法" tabindex="-1">ECMAScript 3方法 <a class="header-anchor" href="#ecmascript-3方法" aria-label="Permalink to &quot;ECMAScript 3方法&quot;">​</a></h2><h3 id="添加" tabindex="-1">添加 <a class="header-anchor" href="#添加" aria-label="Permalink to &quot;添加&quot;">​</a></h3><ul><li>push():在数组末尾添加元素</li><li>unshift():在数组头部添加元素</li><li>cancat() 合并两个数组</li></ul><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h3><ul><li>pop() 删除并返回最后一个元素</li><li>shift()删除并返回第一个元素</li></ul><h3 id="子数组" tabindex="-1">子数组 <a class="header-anchor" href="#子数组" aria-label="Permalink to &quot;子数组&quot;">​</a></h3><ul><li>splice() <ul><li>删除任意数量的项 <ul><li>要删除的起始下标</li><li>要删除的项数</li></ul></li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">      			 var arr=[1,2,3,4,5,6];</span></span>
<span class="line"><span style="color:#A6ACCD;">     			   alert(arr.splice(1,2));//23</span></span>
<span class="line"><span style="color:#A6ACCD;">     			   alert(arr);//1456</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>-  在指定位置插入指定项
	 - 起始下标
	 - 0(不删除)
	 - 要插入的项
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			  var arr=[1,2,3,4,5,6];</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr.splice(2,0,&quot;a&quot;));//</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr);//12a3456</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code> - 替换任意数量的项
	 - 起始下标
	 - 要删除的项数
	 - 要插入的项
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    				var arr=[1,2,3,4,5,6];</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr.splice(2,2,&quot;a&quot;,&quot;b&quot;));//34</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr)//12ab56</span></span>
<span class="line"><span style="color:#A6ACCD;"> - slice</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code> - 功能：从已有的数组中选取部分元素构成新数组
 - 参数：起始位置，结束位置
 - 特性:
	 - 如果是负数，则用数组长度加上该值的确定位置
	 - 起始位置开始截取
	 - 结束位置的前一个
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			  var arr=[1,2,3,4,5,6];</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  var newarr=arr.slice(-5,-3);</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(newarr);//23</span></span>
<span class="line"><span style="color:#A6ACCD;">     			  alert(arr);//12345</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="数组排序" tabindex="-1">数组排序 <a class="header-anchor" href="#数组排序" aria-label="Permalink to &quot;数组排序&quot;">​</a></h3><ul><li>reverse()颠倒数组中元素的顺序</li><li>sort():对字符数组或者数字数组进行排序 <ul><li>特性 <ul><li>默认按字符串进行比较</li><li>按数值大小比较需要函数支持</li></ul></li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			var arr=[1,5,8,5,6,7];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">     			 arr.sort(function(a,b){</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 	return a-b;</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 })</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 alert(arr);//155678</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="数组转换" tabindex="-1">数组转换 <a class="header-anchor" href="#数组转换" aria-label="Permalink to &quot;数组转换&quot;">​</a></h3><ul><li>toString()转换为字符串并返回</li><li>toLocaleString()转换为本地格式字符串并且返回</li><li>join() 用于指定分割数组并将其转换成字符串</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     			 var arr=[1,5,8];</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 alert(arr);//1,5,8</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 alert(arr.join(&quot;&quot;));//158</span></span>
<span class="line"><span style="color:#A6ACCD;">     			 alert(arr);//1,5,8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>split()分割字符串转换成数组</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			var str=&quot;abd&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(str);//abd</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(str.split(&quot;&quot;));//a,b,d</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(str);//abd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ecmascript-5-方法" tabindex="-1">ECMAScript 5 方法 <a class="header-anchor" href="#ecmascript-5-方法" aria-label="Permalink to &quot;ECMAScript 5 方法&quot;">​</a></h2><h3 id="位置方法" tabindex="-1">位置方法 <a class="header-anchor" href="#位置方法" aria-label="Permalink to &quot;位置方法&quot;">​</a></h3><ul><li>indexOf:从数组的起始位置开始查找</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			var arr=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(arr.indexOf(&quot;c&quot;,1));//2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>lastIndexOf:从数组的结束位置开始查找</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			var arr=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			alert(arr.lastIndexOf(&quot;a&quot;,1));//0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>参数: <ul><li>要查找的项</li><li>表示查找起点的位置索引</li></ul></li></ul><h3 id="迭代方法" tabindex="-1">迭代方法 <a class="header-anchor" href="#迭代方法" aria-label="Permalink to &quot;迭代方法&quot;">​</a></h3><ul><li>every：如果该函数对每一项都返回true,则返回true</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	 		var ages = [32, 33, 16, 40];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			function checkAdult(age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return age &gt;= 18;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>		document.write(ages.every(checkAdult)+&quot; &quot;);//fasle
</code></pre><ul><li>filter:返回值为true的所有数组成员</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">			var ages = [32, 33, 16, 40];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			function checkAdult(age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return age &gt;= 18;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">					document.write(ages.filter(checkAdult)+&quot; &quot;);//32,33,40</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>foreach：无返回值 <ul><li>第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    	[1, 2 ,3, 4].forEach(alert);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>map:返回每次函数调用的结果数组</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">			 var ages = [32, 33, 16, 40];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			function checkAdult(age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return age+=18;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">			document.write(ages.map(checkAdult)+&quot; &quot;);//50,51,34,58</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>some:有任意一项返回true,则返回true</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">			var ages = [32, 33, 16, 40];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			function checkAdult(age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return age&gt;18;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			document.write(ages.some(checkAdult)+&quot; &quot;);//true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>参数 <ul><li>接收参数 <ul><li>要在每一项上运行的函数</li><li>运行该函数的作用域对象</li></ul></li><li>传入参数 <ul><li>数组项的值item</li><li>该项在数组中的位置index</li><li>数组对象本身array</li></ul></li></ul></li></ul><h3 id="缩小方法" tabindex="-1">缩小方法 <a class="header-anchor" href="#缩小方法" aria-label="Permalink to &quot;缩小方法&quot;">​</a></h3><ul><li>reduce:从数组起始位开始遍历 <ul><li>previousValue（上一次调用回调函数时的返回值，或者初始值）</li><li>currentValue（当前正在处理的数组元素）</li><li>currentIndex（当前正在处理的数组元素下标）</li><li>array（调用reduce()方法的数组）</li></ul></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">alert(arr.reduce(function(pre,cur</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pre</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cur}</span><span style="color:#A6ACCD;">) )</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span></code></pre></div><pre><code> - 对比:
</code></pre><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">arr.forEach(function(e</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">just</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">arr.map(function(obj</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">obj}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">//</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">array.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span></code></pre></div><ul><li>reduceRight:从数组末尾开始遍历</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    			</span><span style="color:#FFCB6B;">alert(arr.reduceRight(function(pre,cur</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pre</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cur}</span><span style="color:#A6ACCD;">) )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>参数 <ul><li>接收参数 <ul><li>每一项上调用的函数</li><li>作为缩小基础的初始值</li></ul></li><li>传入参数 <ul><li>当前一值 prev</li><li>当前值 cur</li><li>项的索引 index</li><li>数组对象 array</li></ul></li></ul></li></ul>`,72),e=[p];function o(r,c,i,C,A,u){return n(),a("div",null,e)}const d=s(t,[["render",o]]);export{D as __pageData,d as default};
