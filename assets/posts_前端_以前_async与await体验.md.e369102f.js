import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const D=JSON.parse('{"title":"async与await体验","description":"","frontmatter":{"title":"async与await体验","date":"2017-02-11T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/async与await体验.md"}'),e={name:"posts/前端/以前/async与await体验.md"},p=l(`<h1 id="async与await体验" tabindex="-1">async与await体验 <a class="header-anchor" href="#async与await体验" aria-label="Permalink to &quot;async与await体验&quot;">​</a></h1><blockquote><p>第一次用es7的语法，在实际的开发中可能用的比较少，但是作为前端这也算是一个趋势，先留个坑，以后慢慢学习</p></blockquote><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h2><blockquote><p>async是一个异步的函数，通过它进行定义</p></blockquote><blockquote><p>await只能用在async函数的里面，它的出现必须要等到一个promise返回结构才能继续执行</p></blockquote><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const sleep = (time) =&gt; new Promise((resolve,reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			  resolve(&quot;ok&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		},time)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const test = async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&quot;start&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">       const ok = await sleep(3000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(ok);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&quot;end&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test();  //start   ok  end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="捕捉错误" tabindex="-1">捕捉错误 <a class="header-anchor" href="#捕捉错误" aria-label="Permalink to &quot;捕捉错误&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const sleep = (time) =&gt; new Promise((resolve,reject) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">		setTimeout(() =&gt; reject(&quot;你错了&quot;),time)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const run = async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	 try{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	 	console.log(&#39;start&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	 	await sleep(3000);</span></span>
<span class="line"><span style="color:#A6ACCD;">	 	console.log(&#39;end&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	 }catch(err){</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(err);</span></span>
<span class="line"><span style="color:#A6ACCD;">	 }finally{</span></span>
<span class="line"><span style="color:#A6ACCD;">	 	console.log(&#39;over&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	 }</span></span>
<span class="line"><span style="color:#A6ACCD;">	 console.log(&#39;over1&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">run();//	start  你错了  over  over1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="循环多个await-它类似于同步代码-不用担心需要闭包才能解决问题" tabindex="-1">循环多个await 它类似于同步代码 不用担心需要闭包才能解决问题 <a class="header-anchor" href="#循环多个await-它类似于同步代码-不用担心需要闭包才能解决问题" aria-label="Permalink to &quot;循环多个await 它类似于同步代码 不用担心需要闭包才能解决问题&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const sleep = (time) =&gt; new Promise((resolve,reject) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">		setTimeout(() =&gt; resolve(true),time)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var run = async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		for (let i = 0;i&lt;3;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			  console.log(\`当前是第\${i}次等待..\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">			  await sleep(1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">run();//当前是第0次等待..	当前是第1次等待..	当前是第2次等待..</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="async返回的是什么-返回的是promise对象" tabindex="-1">async返回的是什么 返回的是promise对象！！！！ <a class="header-anchor" href="#async返回的是什么-返回的是promise对象" aria-label="Permalink to &quot;async返回的是什么  返回的是promise对象！！！！&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const add =async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return &quot;hello world&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add()); //Promise {[[PromiseStatus]]: &quot;resolved&quot;, [[PromiseValue]]: &quot;hello world&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">add().then((value)=&gt;console.log(value));  //hello world</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),o=[p];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
