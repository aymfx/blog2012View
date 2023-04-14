import{_ as l,c as i,o as e,N as a}from"./chunks/framework.1f285265.js";const f=JSON.parse('{"title":"javascipt数据类型","description":"","frontmatter":{"title":"javascipt数据类型","date":"2016-07-21T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/javascipt数据类型.md"}'),n={name:"posts/前端/以前/javascipt数据类型.md"},t=a(`<h1 id="javascript数据类型" tabindex="-1">javaScript数据类型 <a class="header-anchor" href="#javascript数据类型" aria-label="Permalink to &quot;javaScript数据类型&quot;">​</a></h1><h2 id="undefined" tabindex="-1">undefined <a class="header-anchor" href="#undefined" aria-label="Permalink to &quot;undefined&quot;">​</a></h2><ul><li>使用var声明变量但未初始化,或者直接未声明</li></ul><blockquote><pre><code>var a;
alert(a);//undefined
alert(b);//控制台输出b is not defined(这是会报错）
</code></pre></blockquote><ul><li><p>区分空对象指针与尚未定义的变量</p><pre><code> 	var a=null;
 	alert(a);//null
 	alert(typeof a);//object
 	
 	var b;
 	alert(a);//undefined
</code></pre></li><li><p>对未初始化的变量以及未声明的变量使用typeof运算符均会返回undefined</p><p>var a;</p><p>alert(typeof a);//undefined</p><p>alert(typeof b);//undefined</p></li></ul><h2 id="null" tabindex="-1">null <a class="header-anchor" href="#null" aria-label="Permalink to &quot;null&quot;">​</a></h2><ul><li><p>逻辑上null表示一个空对象的指针</p><p>var a=null;</p><p>alert(a);//null</p></li><li><p>使用typeof检测会返回object</p><p>alert(typeof a);//object</p></li></ul><h2 id="undefined与null的关系" tabindex="-1">undefined与null的关系 <a class="header-anchor" href="#undefined与null的关系" aria-label="Permalink to &quot;undefined与null的关系&quot;">​</a></h2><ul><li><p>undefinded派生于null因此在使用“==”进行比较 会返回一个人true;</p><pre><code>  alert(undefined==null);//true
  alert(undefined===null);//false，数据类型不同
</code></pre></li><li><p>没必要将变量声明为undefined,声明空对象应将值赋给null</p><pre><code> var a=null;
</code></pre></li></ul><h2 id="boolean" tabindex="-1">boolean <a class="header-anchor" href="#boolean" aria-label="Permalink to &quot;boolean&quot;">​</a></h2><ul><li><p>true为真，false为假</p></li><li><p>true不一定为1，false不一定为0，会发生转换类型但不同</p><pre><code> 	 alert(true==1);//true
 	 alert(true===1);//false
 	 alert(false==0);//true
 	 alert(false===0);//false
</code></pre></li><li><p>使用Boolean()进行转换</p><ul><li><p>转换为true</p><pre><code>  任何非空字符串

  任何非0数值

  任何非空对象 null和undefined会转换为false
  
   alert(Boolean(undefined));

   alert(Boolean(null));
</code></pre></li><li><p>转换为false</p><pre><code> 空字符串
 
 0以及NaN
 
 null以及undefined
</code></pre></li></ul></li></ul><h2 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h2><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ul><li><p>由0个或多个16位Unicode字符组成</p></li><li><p>单引号和双引号不能交叉</p></li><li><p>可以使用.length属性访问字符串长度</p><ul><li><p>转义序列表示一个字符</p></li><li><p>无法精确返回双字符长度(汉字占两个字节)</p><pre><code> 	str=&quot;abc a\\x675&quot;;
 	alert(str);//abc ag5
 	alert(str.length);//7  \\x67为16进制转义字符
</code></pre></li></ul></li><li><p>字符串一旦被创建，其值不能改变，若要改变必须销毁原有的字符串</p><pre><code> var lang = “Java”;
 lang = lang + “Script”
 实现这个操作的过程如下：首先创建一个能容纳10个字符的新字符串，然后在这个字符串中填充“Java”和“Script”,最后一步是销毁原来的字符串“Java”和“Script”,因为这两个字符串已经没用了。但是在低版本的浏览器(如IE6)中，字符串拼接速度是很消耗一个性能的过程。
</code></pre></li></ul><h3 id="转义序列" tabindex="-1">转义序列 <a class="header-anchor" href="#转义序列" aria-label="Permalink to &quot;转义序列&quot;">​</a></h3><ul><li>\\n 换行 \\t 制表符</li><li>\\b 空格 \\r 回车</li><li>\\f 分页符 \\反斜杠\\</li><li>&#39;单引号 &quot; 双引号</li><li>\\xnn 十六进制数,n 代表0~F</li><li>\\unnnn 以十六进制表示一个Unicode字符</li></ul><h3 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h3><ul><li><p>toString</p><ul><li><p>使用的类型：number boolean String object;</p></li><li><p>参数:2,8,16,10 进制转换后变字符串</p><pre><code> /*var a=289;
 alert(a.toString());
 alert(a.toString(2));
 alert(a.toString(8));
 alert(a.toString(10));
 alert(a.toString(16));*/
 var a=null;
 var b=undefined;
 var c=NaN;
 var d=new Object();
 var e=true;

 //alert(a.toString())// Cannot read property &#39;toString&#39; of null
 //alert(b.toString())// Cannot read property &#39;toString&#39; of undefined
 alert(c.toString())//NaN
 alert(d.toString())//object
 alert(e.toString())//true
</code></pre></li></ul></li><li><p>String()</p><ul><li><p>null</p></li><li><p>nudefined</p><pre><code> var b=undefined;
 var c=NaN;
 var d=new Object();
 var e=true;

 alert(String(1));//1
 alert(String(b));//undefined
 alert(String(c));//NaN
 alert(String(d));//object
 alert(String(e));//true
</code></pre></li></ul></li><li><p>eval()</p><ul><li><p>计算字符串表达式的值或代码片段并以<strong>数值</strong>的形式返回</p><pre><code> eval(&quot;x=10;y=20;document.write(x*y)&quot;);//200

 document.write(&quot;&lt;br&gt;&quot; + eval(&quot;2+2&quot;));//4

 document.write(&quot;&lt;br&gt;&quot; + eval(x+17));//27
</code></pre></li></ul></li></ul><h2 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-label="Permalink to &quot;number&quot;">​</a></h2><h3 id="进制" tabindex="-1">进制 <a class="header-anchor" href="#进制" aria-label="Permalink to &quot;进制&quot;">​</a></h3><ul><li>十进制</li><li>八进制 <ul><li>前导：0</li><li>有效序列：0~7</li><li>超出范围 <ul><li>前导0被忽略</li><li>后续数值以十进制计数</li></ul></li></ul></li><li>十六进制 <ul><li>前导：0x或者0X</li><li>有效序列0~F</li></ul></li></ul><h3 id="浮点数" tabindex="-1">浮点数 <a class="header-anchor" href="#浮点数" aria-label="Permalink to &quot;浮点数&quot;">​</a></h3><ul><li>小数后面至少一位</li><li>科学计数法 <ul><li>小数点后有6个0的浮点数</li><li>以e或者E为底*10的N次幂</li></ul></li><li>最高的进度 <ul><li>17位小数</li></ul></li><li>缺陷 <ul><li>存在舍入误差</li><li>无法测试特定的浮点数值</li></ul></li></ul><h3 id="数值范围" tabindex="-1">数值范围 <a class="header-anchor" href="#数值范围" aria-label="Permalink to &quot;数值范围&quot;">​</a></h3><ul><li>最小大值 <ul><li>Number.MIN_VALUE;</li><li>Number.Max_VALUE;</li></ul></li><li>超出范围 <ul><li>正无穷 <ul><li>Infinity</li><li>Number.POSITIVE_INFINITY</li></ul></li><li>负无穷 <ul><li>-Infinity</li><li>Number.NEGATIVE_INFINITY</li></ul></li><li>缺陷 <ul><li>无法参与下一次计算</li></ul></li><li>检测方法 <ul><li>isFinite() <ul><li>超出：false</li><li>合法:true</li></ul></li></ul></li></ul></li></ul><h3 id="nan" tabindex="-1">NaN <a class="header-anchor" href="#nan" aria-label="Permalink to &quot;NaN&quot;">​</a></h3><ul><li>含义 <ul><li>Not a Number</li><li>非数值</li></ul></li><li>特性 <ul><li>任何涉及NaN操作都将返回NaN</li><li>NaN与任何数值都不等（包括自己）</li></ul></li><li>检测 <ul><li>isNaN() <ul><li>可转换数值:(false)</li><li>不能:true</li></ul></li></ul></li></ul><h3 id="数值转换" tabindex="-1">数值转换 <a class="header-anchor" href="#数值转换" aria-label="Permalink to &quot;数值转换&quot;">​</a></h3><h4 id="number-1" tabindex="-1">Number() <a class="header-anchor" href="#number-1" aria-label="Permalink to &quot;Number()&quot;">​</a></h4><ul><li><p>Boolean</p><ul><li>true:1</li><li>false:0</li></ul></li><li><p>null</p><ul><li>0</li></ul></li><li><p>undefined</p><ul><li>NaN</li></ul></li><li><p>String</p><ul><li>只包含数字或有效浮点格式 <ul><li>十进制数</li><li>前导0忽略</li></ul></li><li>包含有效十六进制数格式 <ul><li>相同大小的十进制数</li></ul></li><li>空字符串 <ul><li>0</li></ul></li><li>其他格式字符串 <ul><li><p>NaN</p><pre><code> var a=&quot;12asd&quot;;

 alert(Number(a));//NaN
</code></pre></li></ul></li></ul></li><li><p>object</p><ul><li>valueOf()：返回对象的原始值</li><li>toString()</li></ul></li></ul><h3 id="paseint" tabindex="-1">paseInt() <a class="header-anchor" href="#paseint" aria-label="Permalink to &quot;paseInt()&quot;">​</a></h3><ul><li>特性 <ul><li>忽略前置空格</li><li>直接找到第一个非空格字符 <ul><li>不是数值或负号：NaN</li><li>数字字符 <ul><li>解析数字字符</li><li>遇到非数字字符结束</li></ul></li></ul></li></ul></li><li>参数 <ul><li>参数1:解析的字符</li><li>参数2：转换时的进制</li></ul></li></ul><h4 id="parseint" tabindex="-1">parseInt() <a class="header-anchor" href="#parseint" aria-label="Permalink to &quot;parseInt()&quot;">​</a></h4><ul><li>从第一个字符开始解析</li><li>遇到无效字符结束</li><li>只有第一个小数点有效</li><li>忽略前导0</li><li>十六进制始终为0</li><li>没有小数点或者小数点后全为0：转换整数</li></ul><h1 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;object&quot;">​</a></h1><ul><li>定义：一组数据或功能的集合</li><li>声明: var o=new Object();</li><li>属性与方法 <ul><li><p>Constructor:用于返回创建的当前对象的函数</p><pre><code> 	var d=new Date(); 
 	alert(d.constructor);//function Date() { [native code] }
</code></pre></li><li><p>hasOwnProperty(propertyName):是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员</p></li><li><p>isPrototypeOf(object):检测传入的对象是否是另一额对象的原型</p></li><li><p>propertyIsEnumerable(propertyName):检测给定属性能否用for-in语句枚举</p></li><li><p>toLocalString():返回对象的字符串表示，该字符串与执行环境的地区对应</p></li><li><p>toString()返回对象的字符串表示</p></li><li><p>valueOf()返回对象的字符串，数值或者布尔值：通常与toString()的值相同</p></li></ul></li></ul>`,36),r=[t];function u(o,d,p,c,s,h){return e(),i("div",null,r)}const q=l(n,[["render",u]]);export{f as __pageData,q as default};
