import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const b=JSON.parse('{"title":"es6-数组新增功能与改进","description":"","frontmatter":{"title":"es6-数组新增功能与改进","date":"2018-03-15T20:59:40.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-数组新增功能与改进.md"}'),e={name:"posts/前端/以前/es6-数组新增功能与改进.md"},p=l(`<h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><blockquote><p>es6加入了一些数组的新功能，以及改进了旧功能</p></blockquote><h4 id="保证永远传的是数组的元素" tabindex="-1">保证永远传的是数组的元素 <a class="header-anchor" href="#保证永远传的是数组的元素" aria-label="Permalink to &quot;保证永远传的是数组的元素&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let items = Array.of(20);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items.length) //1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items[0]) //20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">itmes = Array.of(2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(itmes.length);//1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(itmes[0]); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">itmes = Array.of(&#39;2&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(itmes.length); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(itmes[0]); //&#39;2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="将类对象转换成数组的方式" tabindex="-1">将类对象转换成数组的方式 <a class="header-anchor" href="#将类对象转换成数组的方式" aria-label="Permalink to &quot;将类对象转换成数组的方式&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function translate(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Array.from(arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let number = translate(1,3,4,5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(number); //[ 1, 3, 4, 5 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>映射转换(第二个参数的转换)</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function translate(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Array.from(arguments,(value) =&gt; value+1)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let number = translate(1,3,4,5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(number); //[ 2, 4, 5, 6 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>第三个值是this</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">let helper = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    diff:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    add(value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value+this.diff;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function translate(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Array.from(arguments,helper.add,helper)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let number = translate(1,3,4,5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(number); // [ 2, 4, 5, 6 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Array.from可以用来转换可迭代对象</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let number = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    *[Symbol.iterator](){</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let number2 = Array.from(number,(value) =&gt; value+1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(number2); //[ 2, 3, 4, 5 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="新增方法find-方法和findindex-方法" tabindex="-1">新增方法find()方法和findIndex()方法 <a class="header-anchor" href="#新增方法find-方法和findindex-方法" aria-label="Permalink to &quot;新增方法find()方法和findIndex()方法&quot;">​</a></h4><blockquote><p>两个方法的一个函数接受一个回调函数，以及一个this作为参数</p></blockquote><blockquote><p>find返回的是return为true的值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let numbers = [1,34,4,44,33,56];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers.find((item,index,arr) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(item&gt;33){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(item,index,arr);  //34 1 [ 1, 34, 4, 44, 33, 56 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})) //34</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>findIndex()返回的是满足true的值的位置(第一个)</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let numbers = [1,34,4,44,33,56];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers.findIndex((item,index,arr) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(item&gt;33){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(item,index,arr);  //34 1 [ 1, 34, 4, 44, 33, 56 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})) //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="fill-方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素" tabindex="-1">fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素 <a class="header-anchor" href="#fill-方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素" aria-label="Permalink to &quot;fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素&quot;">​</a></h3><blockquote><p>接受三个参数一个是要填充的值，一个是填充的起始位置，一个是结结束位置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let numbers = [1,34,4,44,33,56];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers.fill(1)) //[ 1, 1, 1, 1, 1, 1 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers) //[ 1, 1, 1, 1, 1, 1 ]  //改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let nums  = [2,3,4,5,2,4,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums.fill(1,2)) //[ 2, 3, 1, 1, 1, 1, 1 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums.fill(6,2,5)); //[ 2, 3, 6, 6, 6, 1, 1 ]  //作闭右开</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="copywith方法浅复制数组的一部分到同一数组中的另一个位置-并返回它-而不修改其大小" tabindex="-1">copyWith方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小 <a class="header-anchor" href="#copywith方法浅复制数组的一部分到同一数组中的另一个位置-并返回它-而不修改其大小" aria-label="Permalink to &quot;copyWith方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小&quot;">​</a></h3><blockquote><p>该方法接受3个值，一个是开始填充的位置，一个是开始复制的位置位置,改变原数组,一个是复制结束的位置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let numbers = [1,34,4,44,33,56];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers.copyWithin(2,3)); //[ 1, 34, 44, 33, 56, 56 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers.copyWithin(2,0,1)); //[ 1, 34, 1, 33, 56, 56 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="定型数组" tabindex="-1">定型数组 <a class="header-anchor" href="#定型数组" aria-label="Permalink to &quot;定型数组&quot;">​</a></h3><blockquote><p>定型数组是一种用于处理数值类型(正如其名，不是所有类型)数据的专用数组，最早是在WebGL中使用的，WebGL是OpenGL ES 2.0的移植版，在Web 页面中通过 &lt;canvas&gt; 元素来呈现它。定型数组也被一同移植而来，其可为JS提供快速的按位运算</p></blockquote><blockquote><p>在JS中，数字是以64位浮点格式存储的，并按需转换为32位整数，所以算术运算非常慢，无法满足WebGL的需求。因此在ES6中引入定型数组来解决这个问题，并提供更高性能的算术运算。所谓定型数组，就是将任何数字转换为一个包含数字比特的数组，随后就可以通过我们熟悉的JS数组方法来进一步处理</p></blockquote><h4 id="数组缓冲区" tabindex="-1">数组缓冲区 <a class="header-anchor" href="#数组缓冲区" aria-label="Permalink to &quot;数组缓冲区&quot;">​</a></h4><blockquote><p>ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 不能直接操作，而是要通过类型数组对象或 DataView 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let buffer = new ArrayBuffer(10);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(buffer.byteLength); //10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//也可以使用数组的方法（类似）</span></span>
<span class="line"><span style="color:#A6ACCD;">let buffer2 = buffer.slice(1,3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(buffer2.byteLength) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不能修改缓存区的大小，只能修改数据缓冲区内的数据</p></blockquote><h3 id="通过视图操作数组缓冲区" tabindex="-1">通过视图操作数组缓冲区 <a class="header-anchor" href="#通过视图操作数组缓冲区" aria-label="Permalink to &quot;通过视图操作数组缓冲区&quot;">​</a></h3><blockquote><p>数组缓冲区是内存中的一段地址，视图是用来操作内存的接口。视图可以操作数组缓冲区或缓冲区字节的子集，并按照其中一种数值型数据类型来读取和写入数据。DataView类型是一种通用的数组缓冲区视图，其支持所有8种数值型数据类型</p></blockquote><ul><li>有符号的8位整数(int8)</li><li>无符号的8位整数(uint8)</li><li>有符号的16位整数(int16)</li><li>无符号的16位整数(uint16)</li><li>有符号的32位整数(int32)</li><li>无符号的32位整数(uint32)</li><li>32位浮点数(float32)</li><li>64位浮点数(float64)</li></ul><blockquote><p>可以通过以下几种只读属性来获取视图的信息</p></blockquote><ul><li>buffer 视图绑定的数组缓冲区</li><li>byteOffset DataView构造函数的第二个参数，默认是0，只有传入参数时才有值</li><li>byteLength DataView构造函数的第三个参数，默认是缓冲区的长度byteLength</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let buffer = new ArrayBuffer(10),</span></span>
<span class="line"><span style="color:#A6ACCD;">//使用DataView创建视图的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    view1 = new DataView(buffer),</span></span>
<span class="line"><span style="color:#A6ACCD;">    view2 = new DataView(buffer,5,2);  // 第一个参数是创建的缓冲区，第二个是操作缓冲区的起始位置，第三个参数是缓冲区的长度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.buffer === buffer); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.buffer === buffer); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.byteOffset); //0</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.byteOffset); //5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.byteLength); //10</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.byteLength); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="读取和写入数据" tabindex="-1">读取和写入数据 <a class="header-anchor" href="#读取和写入数据" aria-label="Permalink to &quot;读取和写入数据&quot;">​</a></h3><blockquote><p>js的8中数值型数据类型，在DataView的原型上都能找到</p></blockquote><ul><li>读方法 DataView.prototype.getInt8() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(一个字节). DataView.prototype.getUint8() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(无符号字节). DataView.prototype.getInt16() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(短整型). DataView.prototype.getUint16() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(无符号短整型). DataView.prototype.getInt32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(长整型). DataView.prototype.getUint32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(无符号长整型). DataView.prototype.getFloat32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(浮点型). DataView.prototype.getFloat64() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个64-bit数(双精度浮点型).</li><li>写方法 DataView.prototype.setInt8() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(一个字节). DataView.prototype.setUint8() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(无符号字节). DataView.prototype.setInt16() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(短整型). DataView.prototype.setUint16() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(无符号短整型). DataView.prototype.setInt32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(长整型). DataView.prototype.setUint32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(无符号长整型). DataView.prototype.setFloat32() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(浮点型). DataView.prototype.setFloat64() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个64-bit数(双精度浮点型).</li><li>用法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let buffer = new ArrayBuffer(10),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //使用DataView创建视图的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    view = new DataView(buffer);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    view.setInt8(0,5);</span></span>
<span class="line"><span style="color:#A6ACCD;">    view.setInt8(1,-1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view.getInt8(0)); //5</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view.getInt8(1)); //-1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //也可以用getInt16的字节调用，这样使用的话，两个8比特的字符就会合并成一个16bit字符,于是得到的值就是这个了</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view.getInt16()) //1535</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="定型数组—特殊的视图类型" tabindex="-1">定型数组—特殊的视图类型 <a class="header-anchor" href="#定型数组—特殊的视图类型" aria-label="Permalink to &quot;定型数组—特殊的视图类型&quot;">​</a></h3><blockquote><p>上面的缓冲区类型视图是可以随意更变的，但是我们只希望处理一种数据类型，这让我们很容易选择和判断</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let buffer = new ArrayBuffer(10),</span></span>
<span class="line"><span style="color:#A6ACCD;">//使用DataView创建视图的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    view1 = new Int8Array(buffer),</span></span>
<span class="line"><span style="color:#A6ACCD;">    view2 = new Int8Array(buffer,5,2);  // 第一个参数是创建的缓冲区，第二个是操作缓冲区的起始位置，第三个参数是缓冲区的长度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.buffer === buffer); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.buffer === buffer); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.byteOffset); //0</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.byteOffset); //5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view1.byteLength); //10</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(view2.byteLength); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不用数组缓冲区创建数组，利用定型数组的创建</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array(2),</span></span>
<span class="line"><span style="color:#A6ACCD;">    floats = new Float32Array(5);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(ints.byteLength); //4</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(ints.length); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(floats.byteLength); //20</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(floats.length); //5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不给定型参数传值，则不能使用缓存区，因为它的容量默认为0</p></blockquote><h3 id="第三种创建定型数组的方法是调用构造函数时-将以下任一对象作为唯一的参数传入" tabindex="-1">第三种创建定型数组的方法是调用构造函数时，将以下任一对象作为唯一的参数传入 <a class="header-anchor" href="#第三种创建定型数组的方法是调用构造函数时-将以下任一对象作为唯一的参数传入" aria-label="Permalink to &quot;第三种创建定型数组的方法是调用构造函数时，将以下任一对象作为唯一的参数传入&quot;">​</a></h3><p>1、一个定型数组</p><p>&gt;该数组中的每个元素会作为新的元素被复制到新的定型数组中。例如，如果将一个int8数组传入到Int16Array构造函数中，int8的值会被复制到一个新的int16数组中，新的定型数组使用新的数组缓冲区</p><p>2、一个可迭代对象</p><p>&gt; 对象的迭代器会被调用，通过检索所有条目来选取插入到定型数组的元素，如果所有元素都是不适用于该视图类型的无效类型，构造函数将会抛出一个错误</p><p>3、一个数组</p><p>&gt; 数组中的元素会被复制到一个新的定型数组中，如果所有元素都是不适用于该视图类型的无效类型，构造函数将会抛出一个错误</p><p>4、一个类数组对象</p><p>&gt; 与传入数组的行为一致</p><pre><code>    \`\`\`
            let int1 = new Int16Array([15,25]),
    int2 = new Int32Array(int1);

console.log(int1.buffer === int2.buffer); //4
console.log(int1.byteLength);   //15
console.log(int1[0])    //25
console.log(int1[1])    //8
console.log(int2.byteLength)    //2
console.log(int2.length)    //15

console.log(int2[0]);   //15
console.log(int2[1]);   //25
    \`\`\`
</code></pre><h4 id="元素大小" tabindex="-1">元素大小 <a class="header-anchor" href="#元素大小" aria-label="Permalink to &quot;元素大小&quot;">​</a></h4><blockquote><p>每种定型数组由多个元素组成，元素大小,元素大小指的每个元素表示的字节数，该值存储在每个构造函数和每个实例的BYTES_PRE_ELEMENT属性</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(UInt8Array.BYTES_PRE_ELEMENT);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(UInt16Array.BYTES_PRE_ELEMENT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let ints = new Int8Array(5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints.BYTES_PER_ELEMENT);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>定型数组也适用于数组的通用方法，但也有区别</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//原型不同</span></span>
<span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array([20,50]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints instanceof Array); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Array.isArray(ints));  //false</span></span>
<span class="line"><span style="color:#A6ACCD;">//行为差异，数组的元素尺寸大小一致,且不能被扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array([25,50]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints.length); //2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints[0]); //25</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints[1]); //50</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ints[2] = 5; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints.length); //2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints[0]); //25</span></span>
<span class="line"><span style="color:#A6ACCD;">//0被用于代替所有非法值</span></span>
<span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array([&#39;hi&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints.length); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints[0]);   //0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="缺失的方法" tabindex="-1">缺失的方法 <a class="header-anchor" href="#缺失的方法" aria-label="Permalink to &quot;缺失的方法&quot;">​</a></h3><ul><li>concat()</li><li>shift()</li><li>pop()</li><li>splice()</li><li>push()</li><li>unshift()</li></ul><h3 id="附加方法" tabindex="-1">附加方法 <a class="header-anchor" href="#附加方法" aria-label="Permalink to &quot;附加方法&quot;">​</a></h3><ul><li>set():将其他数组复制到已有的定型数组</li><li>subarray():提取已有定型数组的一部分作为新的定型数组</li></ul><h4 id="set-一个是数组-定型数组或普通数组-一个是可选的偏移量-表示开始插入数据的位置" tabindex="-1">set() 一个是数组(定型数组或普通数组),一个是可选的偏移量，表示开始插入数据的位置， <a class="header-anchor" href="#set-一个是数组-定型数组或普通数组-一个是可选的偏移量-表示开始插入数据的位置" aria-label="Permalink to &quot;set() 一个是数组(定型数组或普通数组),一个是可选的偏移量，表示开始插入数据的位置，&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array(4);</span></span>
<span class="line"><span style="color:#A6ACCD;">ints.set([25,50]);</span></span>
<span class="line"><span style="color:#A6ACCD;">ints.set([125,50],1);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ints.toString()); //25,50,75,0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="subarray-一个是可选的开始位置-一个是可选的结束" tabindex="-1">subArray()一个是可选的开始位置,一个是可选的结束 <a class="header-anchor" href="#subarray-一个是可选的开始位置-一个是可选的结束" aria-label="Permalink to &quot;subArray()一个是可选的开始位置,一个是可选的结束&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let ints = new Int16Array([25,50,75,100]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    subint1 = ints.subarray(), </span></span>
<span class="line"><span style="color:#A6ACCD;">    subint2 = ints.subarray(2), </span></span>
<span class="line"><span style="color:#A6ACCD;">    subint3 = ints.subarray(1,3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(subint1.toString());//25,50,75,100</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(subint2.toString());//75,100</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(subint3.toString());//75,100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,70),o=[p];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{b as __pageData,D as default};
