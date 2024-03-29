import{_ as e,c as n,o,N as r}from"./chunks/framework.1f285265.js";const f=JSON.parse('{"title":"promise的用法深入2","description":"","frontmatter":{"title":"promise的用法深入2","date":"2017-02-08T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/promise的用法深入2.md"}'),t={name:"posts/前端/以前/promise的用法深入2.md"},c=r(`<h1 id="promise-prototype-then" tabindex="-1">Promise.prototype.then() <a class="header-anchor" href="#promise-prototype-then" aria-label="Permalink to &quot;Promise.prototype.then()&quot;">​</a></h1><p>Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。</p><p>then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。</p><pre><code>getJSON(&quot;/posts.json&quot;).then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
</code></pre><p>上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。</p><p>采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。</p><pre><code>getJSON(&quot;/post/1.json&quot;).then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log(&quot;Resolved: &quot;, comments);
}, function funcB(err){
  console.log(&quot;Rejected: &quot;, err);
});
</code></pre><p>上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为Resolved，就调用funcA，如果状态变为Rejected，就调用funcB。</p><p>如果采用箭头函数，上面的代码可以写得更简洁。</p><pre><code>   getJSON(&quot;/post/1.json&quot;).then(
      post =&gt; getJSON(post.commentURL)
    ).then(
      comments =&gt; console.log(&quot;Resolved: &quot;, comments),
      err =&gt; console.log(&quot;Rejected: &quot;, err)
    );
# Promise.prototype.catch()

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

getJSON(&#39;/posts.json&#39;).then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log(&#39;发生错误！&#39;, error);
});
</code></pre><p>上面代码中，getJSON方法返回一个 Promise 对象，如果该对象状态变为Resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。</p><pre><code>p.then((val) =&gt; console.log(&#39;fulfilled:&#39;, val))
  .catch((err) =&gt; console.log(&#39;rejected&#39;, err));

// 等同于
p.then((val) =&gt; console.log(&#39;fulfilled:&#39;, val))
  .then(null, (err) =&gt; console.log(&quot;rejected:&quot;, err));
</code></pre><p>下面是一个例子。</p><pre><code>var promise = new Promise(function(resolve, reject) {
  throw new Error(&#39;test&#39;);
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test
</code></pre><p>上面代码中，promise抛出一个错误，就被catch方法指定的回调函数捕获。注意，上面的写法与下面两种写法是等价的。</p><pre><code>// 写法一
var promise = new Promise(function(resolve, reject) {
  try {
    throw new Error(&#39;test&#39;);
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
var promise = new Promise(function(resolve, reject) {
  reject(new Error(&#39;test&#39;));
});
promise.catch(function(error) {
  console.log(error);
});
</code></pre><p>比较上面两种写法，可以发现reject方法的作用，等同于抛出错误。</p><p>如果Promise状态已经变成Resolved，再抛出错误是无效的。</p><pre><code>var promise = new Promise(function(resolve, reject) {
  resolve(&#39;ok&#39;);
  throw new Error(&#39;test&#39;);
});
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok
</code></pre><p>上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。</p><p>Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。</p><pre><code>getJSON(&#39;/post/1.json&#39;).then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
</code></pre><p>上面代码中，一共有三个Promise对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。</p><p>一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。</p><pre><code>// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
</code></pre><p>上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）。因此，建议总是使用catch方法，而不使用then方法的第二个参数。</p><p>跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。</p><pre><code>var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log(&#39;everything is great&#39;);
});
</code></pre><p>上面代码中，someAsyncThing函数产生的 Promise 对象会报错，但是由于没有指定catch方法，这个错误不会被捕获，也不会传递到外层代码。正常情况下，运行后不会有任何输出，但是浏览器此时会打印出错误“ReferenceError: x is not defined”，不过不会终止脚本执行，如果这个脚本放在服务器执行，退出码就是0（即表示执行成功）。</p><p>var promise = new Promise(function (resolve, reject) { resolve(&#39;ok&#39;); setTimeout(function () { throw new Error(&#39;test&#39;) }, 0) }); promise.then(function (value) { console.log(value) }); // ok // Uncaught Error: test 上面代码中，Promise 指定在下一轮“事件循环”再抛出错误。到了那个时候，Promise 的运行已经结束了，所以这个错误是在 Promise 函数体外抛出的，会冒泡到最外层，成了未捕获的错误。</p><p>Node 有一个unhandledRejection事件，专门监听未捕获的reject错误。</p><pre><code>process.on(&#39;unhandledRejection&#39;, function (err, p) {
  console.error(err.stack)
});
</code></pre><p>上面代码中，unhandledRejection事件的监听函数有两个参数，第一个是错误对象，第二个是报错的 Promise 实例，它可以用来了解发生错误的环境信息。。</p><p>需要注意的是，catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。</p><pre><code>var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
  console.log(&#39;oh no&#39;, error);
})
.then(function() {
  console.log(&#39;carry on&#39;);
});
// oh no [ReferenceError: x is not defined]
// carry on
</code></pre><p>上面代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。如果没有报错，则会跳过catch方法。</p><pre><code>Promise.resolve()
.catch(function(error) {
  console.log(&#39;oh no&#39;, error);
})
.then(function() {
  console.log(&#39;carry on&#39;);
});
// carry on
</code></pre><p>上面的代码因为没有报错，跳过了catch方法，直接执行后面的then方法。此时，要是then方法里面报错，就与前面的catch无关了。</p><pre><code>catch方法之中，还能再抛出错误。

var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log(&#39;oh no&#39;, error);
  // 下面一行会报错，因为y没有声明
  y + 2;
}).then(function() {
  console.log(&#39;carry on&#39;);
});
</code></pre><p>// oh no [ReferenceError: x is not defined] 上面代码中，catch方法抛出一个错误，因为后面没有别的catch方法了，导致这个错误不会被捕获，也不会传递到外层。如果改写一下，结果就不一样了。</p><pre><code>someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log(&#39;oh no&#39;, error);
  // 下面一行会报错，因为y没有声明
  y + 2;
}).catch(function(error) {
  console.log(&#39;carry on&#39;, error);
});
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
</code></pre><p>上面代码中，第二个catch方法用来捕获，前一个catch方法抛出的错误。</p>`,42),s=[c];function p(i,h,a,l,u,m){return o(),n("div",null,s)}const g=e(t,[["render",p]]);export{f as __pageData,g as default};
