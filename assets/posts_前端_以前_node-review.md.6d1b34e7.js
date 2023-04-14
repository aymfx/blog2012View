import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const h=JSON.parse('{"title":"node-review","description":"","frontmatter":{"title":"node-review","date":"2017-08-01T00:00:00.000Z","tags":["node"]},"headers":[],"relativePath":"posts/前端/以前/node-review.md"}'),p={name:"posts/前端/以前/node-review.md"},e=l(`<h1 id="建一个简单的-express" tabindex="-1">建一个简单的 express <a class="header-anchor" href="#建一个简单的-express" aria-label="Permalink to &quot;建一个简单的 express&quot;">​</a></h1><blockquote><p>对于学习 node 的人来说首先 node 安装是必备的，这里就跳过了</p></blockquote><blockquote><p><a href="http://expressjs.com/" target="_blank" rel="noreferrer">http://expressjs.com/</a> 它的官网</p></blockquote><blockquote><p>安装 express npm i express</p></blockquote><blockquote><p>新建一个 app.js 文件，写以下的代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//引入 \`express\` 模块</span></span>
<span class="line"><span style="color:#A6ACCD;">var express = require(&#39;express&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用get方法，当我们访问/这个根目录时，我们会执行回调，send用于向网页输出字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send(&#39;Hello,world&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义好我们 app 的行为之后，让它监听本地的 3000 端口。这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。</span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;app is listen at port 3000&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>参考</p></blockquote><blockquote><p>// app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 <code>/</code> 路径指定一个 handler 函数。</p></blockquote><blockquote><p>// 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。</p></blockquote><blockquote><p>// request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。</p></blockquote><blockquote><p>// res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的 #send 方法，向浏览器输出一个字符串。</p></blockquote><blockquote><p>执行 node app.js</p></blockquote><blockquote><p>然后在浏览器地址栏输出&gt; <a href="http://localhost:3000/" target="_blank" rel="noreferrer">http://localhost:3000/</a></p></blockquote><h1 id="学习使用外部模块" tabindex="-1">学习使用外部模块 <a class="header-anchor" href="#学习使用外部模块" aria-label="Permalink to &quot;学习使用外部模块&quot;">​</a></h1><blockquote><p>npm init 初始化</p></blockquote><blockquote><p>cnpm i express utility -S 安装两个依赖块</p></blockquote><blockquote><p><a href="https://github.com/node-modules/utility" target="_blank" rel="noreferrer">https://github.com/node-modules/utility</a> utility 是一个工具类，在这个地方用于加密哦</p></blockquote><blockquote><p>新建一个 app.js 文件，写以下的代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var express = require(&#39;express&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var utility = require(&#39;utility&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //query用来获取地址栏后面的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    var message = req.query.message;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //使用工具函数进行加密处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    var md5Value = utility.md5(message);</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send(md5Value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;app is running at port 3000&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>执行 node app.js</p></blockquote><blockquote><p>然后在浏览器地址栏输出&gt; <a href="http://localhost:3000/?message=&#39;liuyang&#39;" target="_blank" rel="noreferrer">http://localhost:3000/?message=&#39;liuyang&#39;</a></p></blockquote><h1 id="使用-superagent-与-cheerio-完成简单爬虫" tabindex="-1">使用 superagent 与 cheerio 完成简单爬虫 <a class="header-anchor" href="#使用-superagent-与-cheerio-完成简单爬虫" aria-label="Permalink to &quot;使用 superagent 与 cheerio 完成简单爬虫&quot;">​</a></h1><blockquote><p>superagent superagent(<a href="http://visionmedia.github.io/superagent/" target="_blank" rel="noreferrer">http://visionmedia.github.io/superagent/</a> ) 是个 http 方面的库，可以发起 get 或 post 请求。</p></blockquote><blockquote><p>cheerio (<a href="https://github.com/cheeriojs/cheerio" target="_blank" rel="noreferrer">https://github.com/cheeriojs/cheerio</a> ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。</p></blockquote><blockquote><p>新建一个 app.js 文件，写以下的代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var express = require(&#39;express&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var cheerio = require(&#39;cheerio&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, function(req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //用superagent去抓取页面内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    superagent.get(&#39;http://www.qdfuns.com/&#39;).end(function(err, sres) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return next(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //加载取到的页面，然后创建一个类似jquery的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        var $ = cheerio.load(sres.text);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        var items = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        $(&quot;.media-body&quot;).each(function(idx, ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var $ele = $(ele);</span></span>
<span class="line"><span style="color:#A6ACCD;">            items.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">                title: $ele.text()</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        res.send(items);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;app is running at port 3000&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>利用这两个模块，我们能抓取我们所需要的数据</p></blockquote><h1 id="使用-eventproxy-控制并发" tabindex="-1">使用 eventproxy 控制并发 <a class="header-anchor" href="#使用-eventproxy-控制并发" aria-label="Permalink to &quot;使用 eventproxy 控制并发&quot;">​</a></h1><blockquote><p>这一小节内容，利用 eventproxy，实现并发抓取 1+40,1 就是抓取 40 个主题，40 是抓取每个主题链接下面的评论，也就是说我们要发起 1+40 个请求，后四十个请求一起发起</p></blockquote><blockquote><p>eventproxy <a href="https://github.com/JacksonTian/eventproxy" target="_blank" rel="noreferrer">https://github.com/JacksonTian/eventproxy</a> 并发执行异步回调，移除被广为诟病的深度 callback 嵌套问题，将串行等待变成并行等待，提升多异步协作场景下的执行效率</p></blockquote><blockquote><p>eventproxy 提供了不少其他场景所需的 API，但最最常用的用法就是以上的这种，即：</p></blockquote><blockquote><p>先 var ep = new eventproxy(); 得到一个 eventproxy 实例。</p></blockquote><blockquote><p>告诉它你要监听哪些事件，并给它一个回调函数。ep.all(&#39;event1&#39;, &#39;event2&#39;, function (result1, result2) {})。</p></blockquote><blockquote><p>在适当的时候 ep.emit(&#39;event_name&#39;, eventData)。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var express = require(&#39;express&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var cheerio = require(&#39;cheerio&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var eventproxy = require(&#39;eventproxy&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var url = require(&#39;url&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var cnodeUrl = &#39;https://cnodejs.org/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">var app = express();</span></span>
<span class="line"><span style="color:#A6ACCD;">var topicUrls = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">var topicsS = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, function(req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    superagent.get(cnodeUrl).end(function(err, sres) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return next(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var $ = cheerio.load(sres.text);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        $(&quot;#topic_list .topic_title&quot;).each(function(idx, ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var $ele = $(ele);</span></span>
<span class="line"><span style="color:#A6ACCD;">            //url.resolve，可以补全前面的域名，进行拼接操作</span></span>
<span class="line"><span style="color:#A6ACCD;">            var href = url.resolve(cnodeUrl, $ele.attr(&#39;href&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">            topicUrls.push(href);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        topicUrls.forEach(function(topiculr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            superagent.get(topiculr).end(function(err, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&quot;fetch&quot; + topiculr + &#39;successful&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                ep.emit(&#39;topic_html&#39;, [topiculr, res.text])</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //创建一个eventproxy实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ep = new eventproxy();</span></span>
<span class="line"><span style="color:#A6ACCD;">        //这个表示重复监听topic_html事件40次后执行回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        ep.after(&#39;topic_html&#39;, topicUrls.length, function(topics) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(1212);</span></span>
<span class="line"><span style="color:#A6ACCD;">            //它将emit过来东西全部保存在数组里，然后用map将它遍历</span></span>
<span class="line"><span style="color:#A6ACCD;">            topicsS = topics.map(function(topicPair) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                var topicUrl = topicPair[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">                var topicHtml = topicPair[1];</span></span>
<span class="line"><span style="color:#A6ACCD;">                var $ = cheerio.load(topicHtml);</span></span>
<span class="line"><span style="color:#A6ACCD;">                return ({</span></span>
<span class="line"><span style="color:#A6ACCD;">                    title: $(&#39;.topic_full_title&#39;).text().trim(),</span></span>
<span class="line"><span style="color:#A6ACCD;">                    href: topicUrl,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    commit1: $(&#39;.reply_content&#39;).eq(0).text().trim()</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            res.send(topicsS);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(3000, function(req, res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;app is running at port 3000&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="使用-async-控制并发" tabindex="-1">使用 async 控制并发 <a class="header-anchor" href="#使用-async-控制并发" aria-label="Permalink to &quot;使用 async 控制并发&quot;">​</a></h1><blockquote><p>async <a href="https://github.com/caolan/async" target="_blank" rel="noreferrer">https://github.com/caolan/async</a> 用于延迟并发，减少一起并发导致网站出问题</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var async = require(&#39;async&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var concurrencyCount = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//模拟假的数据请求，返回一个callback值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var fetchUrl = function(url, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var delay = parseInt((Math.random() * 10000000) % 2000, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;">    concurrencyCount++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;现在的并发数是&#39;, concurrencyCount, &#39;，正在抓取的是&#39;, url, &#39;，耗时&#39; + delay + &#39;毫秒&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        concurrencyCount--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //用这个做拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">        callback(null, url + &#39;html content&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, delay)</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var urls = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (var i = 0; i &lt; 30; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    urls.push(&#39;http://datasource_&#39; + i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//限制并发的次数</span></span>
<span class="line"><span style="color:#A6ACCD;">async.mapLimit(urls, 5, function(url, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetchUrl(url, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, function(err, result) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;final:&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //最终结果汇总</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="测试用例-mocha-should-istanbul" tabindex="-1">测试用例：mocha，should，istanbul <a class="header-anchor" href="#测试用例-mocha-should-istanbul" aria-label="Permalink to &quot;测试用例：mocha，should，istanbul&quot;">​</a></h1><blockquote><p>学习使用测试框架 mocha : <a href="http://mochajs.org/" target="_blank" rel="noreferrer">http://mochajs.org/</a></p></blockquote><blockquote><p>学习使用断言库 should : <a href="https://github.com/tj/should.js" target="_blank" rel="noreferrer">https://github.com/tj/should.js</a></p></blockquote><blockquote><p>学习使用测试率覆盖工具 istanbul : <a href="https://github.com/gotwarlost/istanbul" target="_blank" rel="noreferrer">https://github.com/gotwarlost/istanbul</a></p></blockquote><blockquote><p>简单 Makefile 的编写 : <a href="http://blog.csdn.net/haoel/article/details/2886" target="_blank" rel="noreferrer">http://blog.csdn.net/haoel/article/details/2886</a></p></blockquote><blockquote><p>学习使用断言库 expect :<a href="https://github.com/LearnBoost/expect.js/" target="_blank" rel="noreferrer">https://github.com/LearnBoost/expect.js/</a></p></blockquote><blockquote><p>先建一个文件 main.js</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fibonacci = function(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return fibonacci(n - 1) + fibonacci(n - 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (require.main === module) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果是直接执行 main.js，则进入此处</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果 main.js 被其他文件 require，则此处不会执行。</span></span>
<span class="line"><span style="color:#A6ACCD;">    var n = Number(process.argv[2]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;fibonacci(&#39; + n + &#39;) is&#39;, fibonacci(n));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">exports.fibonacci = fibonacci;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在同级目录下建一个文件夹命名必须为 test 在它的子目录建一个文件 main-test.js</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var main = require(&#39;../main&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var should = require(&#39;should&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;test/main.test.js&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should equal 0 when n === 0&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        main.fibonacci(0).should.equal(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should equal 1 when n === 1&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        main.fibonacci(1).should.equal(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should equal 55 when n === 10&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        main.fibonacci(10).should.equal(55);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should throw when n &gt; 10&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            main.fibonacci(11);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }).should.throw(&#39;n should &lt;= 10&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should throw when n &lt; 0&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            main.fibonacci(-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }).should.throw(&#39;n should &gt;= 0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&#39;should throw when n isnt Number&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            main.fibonacci(&#39;呵呵&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }).should.throw(&#39;n should be a Number&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>由于 node 的计算能力以及边界值得原因后三个可能过不了，需要修补下代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fibonacci = function (n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof n !== &#39;number&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;n should be a Number&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (n &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;n should &gt;= 0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (n &gt; 10) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;n should &lt;= 10&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (n === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (n === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return fibonacci(n-1) + fibonacci(n-2);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>测试用例的覆盖率</p></blockquote><blockquote><p>安装 npm i istanbul -g</p></blockquote><blockquote><p>执行 $ istanbul cover _mocha （有大问题，window 有坑）</p></blockquote><h1 id="浏览器端测试-mocha-chai-phantomjs" tabindex="-1">浏览器端测试：mocha，chai，phantomjs <a class="header-anchor" href="#浏览器端测试-mocha-chai-phantomjs" aria-label="Permalink to &quot;浏览器端测试：mocha，chai，phantomjs&quot;">​</a></h1><blockquote><p>学习使用测试框架 mocha 进行前端测试 : <a href="http://mochajs.org/" target="_blank" rel="noreferrer">http://mochajs.org/</a></p></blockquote><blockquote><p>了解全栈的断言库 chai: <a href="http://chaijs.com/" target="_blank" rel="noreferrer">http://chaijs.com/</a></p></blockquote><blockquote><p>了解 headless 浏览器 phantomjs: <a href="http://phantomjs.org/" target="_blank" rel="noreferrer">http://phantomjs.org/</a></p></blockquote><blockquote><p>第一步需要安装 mocha cnpm i mocha -g</p></blockquote><blockquote><p>初始化 mocha mocha init .</p></blockquote><blockquote><p>会生成几个初始化的文件</p></blockquote><blockquote><p>引入 chai,在 index.html</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!--引入 断言库 chaijs --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&#39;https://cdn.rawgit.com/chaijs/chai/master/chai.js&#39;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--需要测试的代码--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var fibonacci = function(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (n === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (n === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            return fibonacci(n - 1) + fibonacci(n - 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在 test.js 中写测试用例</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var should = chai.should();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;我只是一个测试&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    it(&quot;测试是否等于0&quot;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        window.fibonacci(0).should.equal(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>运行 index 看结果</p></blockquote><blockquote><p>测试反馈</p></blockquote><blockquote><p>初始化 npm init</p></blockquote><blockquote><p>安装依赖 cnpm i mocha-phantomjs --save-dev</p></blockquote><blockquote><p>在 package.json 加入这么一句话</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;test&quot;: &quot;mocha-phantomjs index.html --ssl-protocol=any --ignore-ssl-errors=true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>npm test</p></blockquote>`,71),o=[e];function c(t,r,i,C,A,u){return a(),n("div",null,o)}const D=s(p,[["render",c]]);export{h as __pageData,D as default};
