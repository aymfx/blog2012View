import{_ as e,c as n,o,N as r}from"./chunks/framework.1f285265.js";const v=JSON.parse('{"title":"promise的用法深入1","description":"","frontmatter":{"title":"promise的用法深入1","date":"2017-02-04T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/promise的用法深入1.md"}'),s={name:"posts/前端/以前/promise的用法深入1.md"},t=r(`<h1 id="promise-的含义" tabindex="-1">Promise 的含义 <a class="header-anchor" href="#promise-的含义" aria-label="Permalink to &quot;Promise 的含义&quot;">​</a></h1><p>Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。</p><p>所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。</p><p>Promise对象有以下两个特点。</p><p>（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。</p><p>（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。</p><p>有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。</p><p>Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</p><p>如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。 来自阮一峰的es6</p><h1 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h1><p>ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。</p><p>下面代码创造了一个Promise实例。</p><pre><code>var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
</code></pre><p>Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。</p><p>resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 Pending 变为 Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 Pending 变为 Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</p><p>Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。</p><pre><code>promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
</code></pre><p>then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为Resolved时调用，第二个回调函数是Promise对象的状态变为Rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。</p><p>下面是一个Promise对象的简单例子。</p><pre><code>function timeout(ms) {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(resolve, ms, &#39;done&#39;);
  });
}

timeout(100).then((value) =&gt; {
  console.log(value);
});
</code></pre><p>上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为Resolved，就会触发then方法绑定的回调函数。</p><p>Promise 新建后就会立即执行。</p><pre><code>let promise = new Promise(function(resolve, reject) {
  console.log(&#39;Promise&#39;);
  resolve();
});

promise.then(function() {
  console.log(&#39;Resolved.&#39;);
});

console.log(&#39;Hi!&#39;);

// Promise
// Hi!
// Resolved
</code></pre><p>上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以Resolved最后输出。</p><p>下面是异步加载图片的例子。</p><pre><code>function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error(&#39;Could not load image at &#39; + url));
    };

    image.src = url;
  });
}
</code></pre><p>上面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。</p><p>下面是一个用Promise对象实现的 Ajax 操作的例子。</p><pre><code>var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open(&quot;GET&quot;, url);
    client.onreadystatechange = handler;
    client.responseType = &quot;json&quot;;
    client.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON(&quot;/posts.json&quot;).then(function(json) {
  console.log(&#39;Contents: &#39; + json);
}, function(error) {
  console.error(&#39;出错了&#39;, error);
});
</code></pre><p>上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。</p><p>如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误；resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例，表示异步操作的结果有可能是一个值，也有可能是另一个异步操作，比如像下面这样。</p><pre><code>var p1 = new Promise(function (resolve, reject) {
  // ...
});

var p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
</code></pre><p>上面代码中，p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。</p><p>注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行。</p><pre><code>var p1 = new Promise(function (resolve, reject) {
  setTimeout(() =&gt; reject(new Error(&#39;fail&#39;)), 3000)
})

var p2 = new Promise(function (resolve, reject) {
  setTimeout(() =&gt; resolve(p1), 1000)
})

p2
  .then(result =&gt; console.log(result))
  .catch(error =&gt; console.log(error))
// Error: fail
</code></pre><p>上面代码中，p1是一个Promise，3秒之后变为rejected。p2的状态在1秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了2秒，p1变为rejected，导致触发catch方法指定的回调函数。</p>`,36),i=[t];function p(c,l,m,a,d,u){return o(),n("div",null,i)}const f=e(s,[["render",p]]);export{v as __pageData,f as default};
