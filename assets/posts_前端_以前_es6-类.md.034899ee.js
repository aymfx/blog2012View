import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"es6-类","description":"","frontmatter":{"title":"es6-类","date":"2018-03-17T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/es6-类.md"}'),p={name:"posts/前端/以前/es6-类.md"},e=l(`<p><img src="http://upload-images.jianshu.io/upload_images/10843623-71a29ec16eb69664.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="timg.jpg"></p><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>最近这两天有点不在状态，感觉有种无形的压力压在身上，变的异常的暴躁了，唉，前端这条路真的走对了吗？算了，敲代码吧。</p></blockquote><h4 id="类声明" tabindex="-1">类声明 <a class="header-anchor" href="#类声明" aria-label="Permalink to &quot;类声明&quot;">​</a></h4><blockquote><p>要声明一个类,首先使用 class 关键字，紧接着是类的名字，然后其他内部方法和属性类似于对象的字面量写法</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> class PersonClass{</span></span>
<span class="line"><span style="color:#A6ACCD;">        //定义一个类似es5写法的构造函数，通过关键字constructor</span></span>
<span class="line"><span style="color:#A6ACCD;">            constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">                      this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">       //定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          sayName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">                  console.log(this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new PersonClass(&quot;ly&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.sayName();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person instanceof PersonClass);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person instanceof Object);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof PersonClass);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof  PersonClass.prototype.sayName);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-83d30f20fab6f12f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><blockquote><p>es5 对应的等价代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let PersonType2 = (function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;use strict&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const PersonType2 = function(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //确保通过关键字new调用该函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(typeof new.target === &quot;undefined&quot;){</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&quot;必须通过new来创建&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(PersonType2.prototype,&#39;sayName&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            //确保不通过关键字new调用该函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(typeof new.target !== &quot;undefined&quot;){</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&quot;不能通过new来创建&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        enumerable:false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        writable:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        configurable:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    return PersonType2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="类表达式" tabindex="-1">类表达式 <a class="header-anchor" href="#类表达式" aria-label="Permalink to &quot;类表达式&quot;">​</a></h4><blockquote><p>跟函数一样他也存在表达式写法，好像还很雷同</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> let PersonClass = class {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //定义一个类似es5写法的构造函数，通过关键字constructor</span></span>
<span class="line"><span style="color:#A6ACCD;">            constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">                      this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">       //定义方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          sayName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">                  console.log(this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new PersonClass(&quot;ly&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.sayName();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person instanceof PersonClass);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person instanceof Object);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof PersonClass);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof  PersonClass.prototype.sayName);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>上述两种类的写法，它不会出现变量提升的现象，所以我们的那种写法，对结果没啥太大区别</p></blockquote><h4 id="类也将作为一等公民" tabindex="-1">类也将作为一等公民 <a class="header-anchor" href="#类也将作为一等公民" aria-label="Permalink to &quot;类也将作为一等公民&quot;">​</a></h4><blockquote><p>一等公民是指一个可以传入的函数，可以从函数返回，并且可以赋值给变量的值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//像这样的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">function createObject(classDef){</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new ClassDef();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let objClass = createObject(class {</span></span>
<span class="line"><span style="color:#A6ACCD;">      sayHi() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;hi&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//函数表达式还有一种调用方式，就是通过立即调用类构造函数可以创建单例</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new class{</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">              this.name = name;  </span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">       sayName() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}(&#39;ly&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">person.sayName() //ly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="访问器属性" tabindex="-1">访问器属性 <a class="header-anchor" href="#访问器属性" aria-label="Permalink to &quot;访问器属性&quot;">​</a></h3><blockquote><p>类支持在构造函数下创建自己的属性，但是类也支持直接在原型上定义访问器的属性,通过 get 和 set 来获得值或者设置值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    set ages(age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    get ages() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.age+10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new Person(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person.ages = 18</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.ages);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.agess = 18</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.agess);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var descriptor = Object.getOwnPropertyDescriptor(Person.prototype,&#39;ages&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&quot;get&quot; in descriptor); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&quot;set&quot; in descriptor);//true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(descriptor.enumerable); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="生成器方法与类的结合" tabindex="-1">生成器方法与类的结合 <a class="header-anchor" href="#生成器方法与类的结合" aria-label="Permalink to &quot;生成器方法与类的结合&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class MyClass {</span></span>
<span class="line"><span style="color:#A6ACCD;">    * createIterator() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new MyClass()</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = b.createIterator();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-bb30ba005f00fc95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h4 id="我们可以通过-symbol-iterator-属性定义一个默认的类迭代器" tabindex="-1">我们可以通过 Symbol.iterator 属性定义一个默认的类迭代器 <a class="header-anchor" href="#我们可以通过-symbol-iterator-属性定义一个默认的类迭代器" aria-label="Permalink to &quot;我们可以通过 Symbol.iterator 属性定义一个默认的类迭代器&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Collection {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    *[Symbol.iterator]() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield * this.items.entries();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var collection = new Collection();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">collection.items.push(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">collection.items.push(12)</span></span>
<span class="line"><span style="color:#A6ACCD;">collection.items.push(16)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (const x of collection) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/10843623-8e8e1426697003fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="a.png"></p><h3 id="静态成员" tabindex="-1">静态成员 <a class="header-anchor" href="#静态成员" aria-label="Permalink to &quot;静态成员&quot;">​</a></h3><blockquote><p>es5 来模拟静态成员</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function PersonType(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//静态方法</span></span>
<span class="line"><span style="color:#A6ACCD;">PersonType.create = function(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new PersonType(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//实例方法</span></span>
<span class="line"><span style="color:#A6ACCD;">PersonType.prototype.sayName = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var person = PersonType.create(&quot;ly&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.name = &quot;li&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person); //ly  （不是很懂静态成员是干嘛的，就是为了让构造函数也能像普通函数一样挂在函数吗？）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在 es 可以通过 static 来创建静态成员</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class PersonClass {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    sayName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;hi&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    static create(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new PersonClass(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = PersonClass.create(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.name); //ly</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="继承与派生类" tabindex="-1">继承与派生类 <a class="header-anchor" href="#继承与派生类" aria-label="Permalink to &quot;继承与派生类&quot;">​</a></h3><blockquote><p>在 es6 之前继承需要这么长的代码，而且 haibuyi</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Reactangle(length,width){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">     this.width = width;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Reactangle.prototype.getArea = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.length*this.width;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Square(length){</span></span>
<span class="line"><span style="color:#A6ACCD;">    Reactangle.call(this,length,length)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Square.prototype = Object.create(Reactangle.prototype,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value:Square,</span></span>
<span class="line"><span style="color:#A6ACCD;">        enumerable:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        writeable:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        configurable:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var square = new Square(4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square.getArea()); //16</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Square);//true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Reactangle);//true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这样的类继承更加 清晰</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(length, width) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.width = width;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.length,this.width);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length * this.width</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(length) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        super(length, length)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var square = new Square(3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square.getArea()); //9</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Square); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这是 super 的默认是设置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Squery extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//等价于</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(...args){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(...args);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="类方法遮蔽" tabindex="-1">类方法遮蔽 <a class="header-anchor" href="#类方法遮蔽" aria-label="Permalink to &quot;类方法遮蔽&quot;">​</a></h4><blockquote><p>派生类中的方法总会覆盖基类中的同名方法。这种覆盖只是屏蔽</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(length, width) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.width = width;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.length,this.width);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length * this.width</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">     getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return this.length*this.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>我们也可以屏蔽之后在调用</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(length, width) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.width = width;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.length,this.width);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length * this.width</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">     getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return super.getArea();</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var square = new Square(3,3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square.getArea()); //9</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Square); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="静态成员继承" tabindex="-1">静态成员继承 <a class="header-anchor" href="#静态成员继承" aria-label="Permalink to &quot;静态成员继承&quot;">​</a></h3><blockquote><p>通过 static 创建的静态成员,静态变量不能被子类继承</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(length, width) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.width = width;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.length,this.width);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length * this.width</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    static create(length,width){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Reactangle(length,width)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">     getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return super.getArea();</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var square = Square.create(3,4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square.getArea()); //9</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Square); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>类相当于实例的原型， 所有在类中定义的方法， 都会被实例继承。 如果在一个方法前， 加上 static 关键字， 就表示该方法不会被实例继承， 而是直接通过类来调用， 这就称为“ 静态方法” (好像理解了点)</p></blockquote><h3 id="派生自表达式的类" tabindex="-1">派生自表达式的类 <a class="header-anchor" href="#派生自表达式的类" aria-label="Permalink to &quot;派生自表达式的类&quot;">​</a></h3><blockquote><p>只要一个函数具有[Constuctor]属性和原型</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Reactangle(length,length){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.width  = width;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Reactangle.prototype.getArea = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.length*this.width</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends Reactangle {</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor (length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(length,length)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var square = new Square(3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square.getArea()); //9</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(square instanceof Square); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="继承的高级用法" tabindex="-1">继承的高级用法 <a class="header-anchor" href="#继承的高级用法" aria-label="Permalink to &quot;继承的高级用法&quot;">​</a></h3><blockquote><p>下面的栗子可以动态确定使用那个基类，更好的辅助开发</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let SerializableMixin = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    serialize(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return JSON.stringify(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let AreaMixin = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getArea() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length*this.width;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function mixin(...mixins){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var base = function(){};</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.assign(base.prototype,...mixins);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return base;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Square extends mixin (AreaMixin,SerializableMixin) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor (length){</span></span>
<span class="line"><span style="color:#A6ACCD;">          super();</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.length = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.width = length;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var x = new Square(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x.getArea())  //9</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x.serialize()) //{&quot;length&quot;:3,&quot;width&quot;:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="类的-symbol-species-属性" tabindex="-1">类的 Symbol.species 属性 <a class="header-anchor" href="#类的-symbol-species-属性" aria-label="Permalink to &quot;类的 Symbol.species 属性&quot;">​</a></h3><blockquote><p>Symbol.species 是指定一个构造函数创建派生对象的函数值属性,比如当我们继承一个 Array 时，我们调用其方法产生的对象将不再是原始的类而是派生出来的类，比如</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class MyArray extends Array {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let items = new MyArray(1,3,4,5),</span></span>
<span class="line"><span style="color:#A6ACCD;">    subitems = items.map(item =&gt; item*2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items instanceof MyArray); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(subitems instanceof MyArray); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items instanceof Array);  //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(subitems instanceof Array); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>但是实际上也不是这么一回事，于是我加了这段代码</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class MyArray extends Array {</span></span>
<span class="line"><span style="color:#A6ACCD;">    static get [Symbol.species](){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return RegExp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let items = new MyArray(1,3,4,5),</span></span>
<span class="line"><span style="color:#A6ACCD;">    subitems = items.map(item =&gt; item*2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items instanceof MyArray); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(subitems instanceof MyArray); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(items instanceof Array);  //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(subitems instanceof Array); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>mdn 的解释一下代码参考下</p></blockquote><blockquote><p>你可能想在扩展数组类 MyArray 上返回 Array 对象。 例如，当使用例如 map() 这样的方法返回默认的构造函数时，你希望这些方法能够返回父级的 Array 对象，以取代 MyArray 对象。Symbol.species 允许你这么做</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class MyArray extends Array {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 覆盖 species 到父级的 Array 构造函数上</span></span>
<span class="line"><span style="color:#A6ACCD;">    static get [Symbol.species]() { return Array; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  var a = new MyArray(1,2,3);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var mapped = a.map(x =&gt; x * x);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(mapped instanceof MyArray); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(mapped instanceof Array);   // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>但是即使不这么做我也是可以返回他的父级方法，有点鸡肋？ 再说</p></blockquote><h3 id="在累的构造函数使用-new-target" tabindex="-1">在累的构造函数使用 new.target <a class="header-anchor" href="#在累的构造函数使用-new-target" aria-label="Permalink to &quot;在累的构造函数使用 new.target&quot;">​</a></h3><blockquote><p>之前在构造函数如果要求必须通过 new 来创建是这样写的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Add(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(new.target=== Add) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(typeof new.target==&quot;undefined&quot;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;必须通过new创建&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var a = new Add(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>现在可以怎么写</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Add {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(new.target=== Add) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var a = new Add(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>构造函数不通过 new 创建的实例，new.target 为 undefined</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Add(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(new.target) //true</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(typeof new.target==&quot;undefined&quot;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;必须通过new创建&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var a =Add(&#39;ly&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>类则是无论如何都有值，因为必须 new 啊 不然报错</p></blockquote><blockquote><p>我们可以用这样的方式定义基类，基类不可被创建，只能被继承</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Add {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(new.target===Add){</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;基类不可被继承&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class SubAdd extends Add {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name){</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(name)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// var a = new Add(&#39;ly&#39;); //报错   基类不可被继承</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var b= new SubAdd(&#39;hh&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,71),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{u as __pageData,g as default};
