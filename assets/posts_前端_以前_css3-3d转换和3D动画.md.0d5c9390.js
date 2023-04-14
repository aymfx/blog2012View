import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const i=JSON.parse('{"title":"css3-3d转换和3D动画","description":"","frontmatter":{"title":"css3-3d转换和3D动画","date":"2016-07-18T00:00:00.000Z","tags":["css"]},"headers":[],"relativePath":"posts/前端/以前/css3-3d转换和3D动画.md"}'),p={name:"posts/前端/以前/css3-3d转换和3D动画.md"},o=l(`<h1 id="_3d转换" tabindex="-1">3D转换 <a class="header-anchor" href="#_3d转换" aria-label="Permalink to &quot;3D转换&quot;">​</a></h1><h2 id="_3d翻转方法" tabindex="-1">3D翻转方法 <a class="header-anchor" href="#_3d翻转方法" aria-label="Permalink to &quot;3D翻转方法&quot;">​</a></h2><pre><code>rotateX();沿x轴翻转
rotateY();沿Y轴翻转
rotateZ();沿Z轴翻转(类似于rotate()在水平旋转)
</code></pre><h2 id="_3d位置移动-的3种写法" tabindex="-1">3D位置移动 的3种写法 <a class="header-anchor" href="#_3d位置移动-的3种写法" aria-label="Permalink to &quot;3D位置移动 的3种写法&quot;">​</a></h2><pre><code>transform: translate3d(30px,30px,800px)
transform:translateZ(800px) translateX(30px) translateY(30px);
transform:translateZ(800px) translate(30px,30px);
</code></pre><h2 id="_3d视距" tabindex="-1">3D视距 <a class="header-anchor" href="#_3d视距" aria-label="Permalink to &quot;3D视距&quot;">​</a></h2><pre><code>perspective:value;
用于看3D效果
</code></pre><h2 id="_3d视角" tabindex="-1">3D视角 <a class="header-anchor" href="#_3d视角" aria-label="Permalink to &quot;3D视角&quot;">​</a></h2><pre><code>transform-style:preserve-3d;
用于子元素保持3d效果
transform-origin:left/right top/bottom
用于确定翻转位置,默认为center
</code></pre><h1 id="_3d动画" tabindex="-1">3D动画 <a class="header-anchor" href="#_3d动画" aria-label="Permalink to &quot;3D动画&quot;">​</a></h1><pre><code>1.创建动画的运动规则，并且取名
	@keyframes name{
		from{}
		to{}
		to{}
	}

2.绑定动画在某个元素上
动画属性
animation:(简写)name  5s  linear  2s  infinite alternate;

animation-name:		动画名

animation-duration:		时间 默认0

animation-timing-function:曲线 默认ease
		linear： 线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0) 
		ease： 平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0) 
		ease-in： 由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0) 
		ease-out： 由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0) 
		ease-in-out： 由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0) 
		cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)： 特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内 

animation-delay	:延时 默认0

animation-iteration-count:播放次数 默认1
		infinite： 无限循环 
		&lt;number&gt;： 指定对象动画的具体循环次数 

animation-direction:周期后是否倒放
		running： 运动 
		paused： 暂停 

animation-play-state:是否暂停 默认 running
		running： 运动 
		paused： 暂停 

animation-fill-mode:动画结束后的状态
		none： 默认值。不设置对象动画之外的状态 
		forwards： 设置对象状态为动画结束时的状态 
		backwards： 设置对象状态为动画开始时的状态 
		both： 设置对象状态为动画结束或开始的状态 
</code></pre><h1 id="例子" tabindex="-1">例子: <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子:&quot;">​</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">DOCTYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">htm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">meta</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">title&gt;正方体&lt;/title&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">style type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">margin:0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">padding:0</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">li</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">list-style:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">transform-style:preserve-3d</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transition:2s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">margin:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">80px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">width:100px</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul{transform:rotateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">45deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateY</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">45deg</span><span style="color:#89DDFF;">);</span><span style="color:#FFCB6B;">position:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">relative</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform-style:preserve-3d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li{width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">opacity:0.2</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">left:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">top:0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">position:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">absolute</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.down{background:#f00</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateZ</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-50px</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.up{background:#f00</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateZ</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">50px</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.left{background:#ff0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-50px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateY</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.right{background:#f0f</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">50px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateY</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.top{background:#f0f</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-50px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.top{background:#ff9</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">50px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">.wrap:hover</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">transform:rotateY(360deg</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ul&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">up</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">down</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/l</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">DOCTYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">htm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">meta</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">title&gt;3d导航&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	    </span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">padding:0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">margin:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">	    </span><span style="color:#FFCB6B;">li</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">list-style:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">1000px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">margin:50px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li{float:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform-style:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preserve-3d</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a{display:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">width:199px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:50px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">border-right:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">solid</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#666;position: relative; text-align: center;transform-style: preserve-3d;transition:1s all;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li:last-child</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a{border:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p{width:199px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:50px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">position:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">absolute</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">left:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">top:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">font:700</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">12px/50px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.a1{background:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#f99;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.a2{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">background-color:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#51938f;</span></span>
<span class="line"><span style="color:#A6ACCD;">			  </span><span style="color:#FFCB6B;">-webkit-background-size:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">			  </span><span style="color:#FFCB6B;">background-size:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">			  </span><span style="color:#FFCB6B;">background-position:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">30px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">			  </span><span style="color:#FFCB6B;">background-image:linear-gradient(45deg,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#478480 25%, transparent 25%, transparent 75%, #478480 75%, #478480),linear-gradient(45deg, #478480 25%, transparent 25%, transparent 75%, #478480 75%, #478480);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">transform-origin:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateX</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translateY</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">ul</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a:hover{transform-origin:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotateX</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">90deg</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/li&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/ul&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,14),t=[o];function e(r,c,D,y,C,F){return a(),n("div",null,t)}const B=s(p,[["render",e]]);export{i as __pageData,B as default};
