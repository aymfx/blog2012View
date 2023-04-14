import{_ as e,c as o,o as r,N as n}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"promise的用法深入3","description":"","frontmatter":{"title":"promise的用法深入3","date":"2017-02-11T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/promise的用法深入3.md"}'),s={name:"posts/前端/以前/promise的用法深入3.md"},t=n(`<h1 id="promise-all" tabindex="-1">Promise.all() <a class="header-anchor" href="#promise-all" aria-label="Permalink to &quot;Promise.all()&quot;">​</a></h1><p>Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。</p><p>var p = Promise.all([p1, p2, p3]); 上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）</p><p>p的状态由p1、p2、p3决定，分成两种情况。</p><p>（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。</p><p>（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。</p><p>下面是一个具体的例子。</p><p>// 生成一个Promise对象的数组</p><pre><code>var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON(&#39;/post/&#39; + id + &quot;.json&quot;);
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
</code></pre><p>上面代码中，promises是包含6个 Promise 实例的数组，只有这6个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。</p><p>下面是另一个例子。</p><pre><code>const databasePromise = connectDatabase();

const booksPromise = databasePromise
  .then(findAllBooks);

const userPromise = databasePromise
  .then(getCurrentUser);

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) =&gt; pickTopRecommentations(books, user));
</code></pre><p>上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommentations这个回调函数。</p><p>注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。</p><pre><code>const p1 = new Promise((resolve, reject) =&gt; {
  resolve(&#39;hello&#39;);
})
.then(result =&gt; result)
.catch(e =&gt; e);

const p2 = new Promise((resolve, reject) =&gt; {
  throw new Error(&#39;报错了&#39;);
})
.then(result =&gt; result)
.catch(e =&gt; e);

Promise.all([p1, p2])
.then(result =&gt; console.log(result))
.catch(e =&gt; console.log(e));
// [&quot;hello&quot;, Error: 报错了]
</code></pre><p>上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。</p><p>如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。</p><pre><code>const p1 = new Promise((resolve, reject) =&gt; {
  resolve(&#39;hello&#39;);
})
.then(result =&gt; result);

const p2 = new Promise((resolve, reject) =&gt; {
  throw new Error(&#39;报错了&#39;);
})
.then(result =&gt; result);

Promise.all([p1, p2])
.then(result =&gt; console.log(result))
.catch(e =&gt; console.log(e));
// Error: 报错了
</code></pre><h1 id="promise-race" tabindex="-1">Promise.race() <a class="header-anchor" href="#promise-race" aria-label="Permalink to &quot;Promise.race()&quot;">​</a></h1><p>Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。</p><p>var p = Promise.race([p1, p2, p3]); 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。</p><p>Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。</p><p>下面是一个例子，如果指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve。</p><pre><code>const p = Promise.race([
  fetch(&#39;/resource-that-may-take-a-while&#39;),
  new Promise(function (resolve, reject) {
    setTimeout(() =&gt; reject(new Error(&#39;request timeout&#39;)), 5000)
  })
]);
p.then(response =&gt; console.log(response));
p.catch(error =&gt; console.log(error));
</code></pre><p>上面代码中，如果5秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。</p><h1 id="promise-resolve" tabindex="-1">Promise.resolve() <a class="header-anchor" href="#promise-resolve" aria-label="Permalink to &quot;Promise.resolve()&quot;">​</a></h1><p>有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。</p><p>var jsPromise = Promise.resolve($.ajax(&#39;/whatever.json&#39;)); 上面代码将jQuery生成的deferred对象，转为一个新的Promise对象。</p><p>Promise.resolve等价于下面的写法。</p><p>Promise.resolve(&#39;foo&#39;) // 等价于 new Promise(resolve =&gt; resolve(&#39;foo&#39;)) Promise.resolve方法的参数分成四种情况。</p><p>（1）参数是一个Promise实例</p><p>如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。</p><p>（2）参数是一个thenable对象</p><p>thenable对象指的是具有then方法的对象，比如下面这个对象。</p><pre><code>let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
</code></pre><p>Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。</p><pre><code>let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
</code></pre><p>上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出42。</p><p>（3）参数不是具有then方法的对象，或根本就不是对象</p><p>如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。</p><pre><code>var p = Promise.resolve(&#39;Hello&#39;);

p.then(function (s){
  console.log(s)
});
// Hello
</code></pre><p>上面代码生成一个新的Promise对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有then方法），返回Promise实例的状态从一生成就是Resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数。</p><p>（4）不带有任何参数</p><p>Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象。</p><p>所以，如果希望得到一个Promise对象，比较方便的方法就是直接调用Promise.resolve方法。</p><pre><code>var p = Promise.resolve();

p.then(function () {
  // ...
});
</code></pre><p>上面代码的变量p就是一个Promise对象。</p><p>需要注意的是，立即resolve的Promise对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。</p><pre><code>setTimeout(function () {
  console.log(&#39;three&#39;);
}, 0);

Promise.resolve().then(function () {
  console.log(&#39;two&#39;);
});

console.log(&#39;one&#39;);

// one
// two
// three
</code></pre><p>上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log(&#39;one&#39;)则是立即执行，因此最先输出。</p><h1 id="promise-reject" tabindex="-1">Promise.reject() <a class="header-anchor" href="#promise-reject" aria-label="Permalink to &quot;Promise.reject()&quot;">​</a></h1><p>Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。</p><pre><code>var p = Promise.reject(&#39;出错了&#39;);
// 等同于
var p = new Promise((resolve, reject) =&gt; reject(&#39;出错了&#39;))

p.then(null, function (s) {
  console.log(s)
});
</code></pre><p>// 出错了 上面代码生成一个Promise对象的实例p，状态为rejected，回调函数会立即执行。</p><p>注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。</p><pre><code>const thenable = {
  then(resolve, reject) {
    reject(&#39;出错了&#39;);
  }
};

Promise.reject(thenable)
.catch(e =&gt; {
  console.log(e === thenable)
})
// true
</code></pre><p>上面代码中，Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。</p><h1 id="两个有用的附加方法" tabindex="-1">两个有用的附加方法 <a class="header-anchor" href="#两个有用的附加方法" aria-label="Permalink to &quot;两个有用的附加方法&quot;">​</a></h1><p>ES6的Promise API提供的方法不是很多，有些有用的方法可以自己部署。下面介绍如何部署两个不在ES6之中、但很有用的方法。</p><p>done() Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。</p><pre><code>asyncFunc()
  .then(f1)
  .catch(r1)
  .then(f2)
  .done();
</code></pre><p>它的实现代码相当简单。</p><pre><code>Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() =&gt; { throw reason }, 0);
    });
};
</code></pre><p>从上面代码可见，done方法的使用，可以像then方法那样用，提供Fulfilled和Rejected状态的回调函数，也可以不提供任何参数。但不管怎样，done都会捕捉到任何可能出现的错误，并向全局抛出。</p><h1 id="finally" tabindex="-1">finally() <a class="header-anchor" href="#finally" aria-label="Permalink to &quot;finally()&quot;">​</a></h1><p>finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。</p><p>下面是一个例子，服务器使用Promise处理请求，然后使用finally方法关掉服务器。</p><pre><code>server.listen(0)
  .then(function () {
    // run test
  })
  .finally(server.stop);
</code></pre><p>它的实现也很简单。</p><pre><code>Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  =&gt; P.resolve(callback()).then(() =&gt; value),
    reason =&gt; P.resolve(callback()).then(() =&gt; { throw reason })
  );
};
</code></pre><p>上面代码中，不管前面的Promise是fulfilled还是rejected，都会执行回调函数callback。</p>`,71),l=[t];function p(c,i,a,m,h,P){return r(),o("div",null,l)}const v=e(s,[["render",p]]);export{u as __pageData,v as default};
