import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const A=JSON.parse('{"title":"css3-渐变，动画过度，2d基础","description":"","frontmatter":{"title":"css3-渐变，动画过度，2d基础","date":"2016-07-14T00:00:00.000Z","tags":["css"]},"headers":[],"relativePath":"posts/前端/以前/css3-渐变，动画过度，2d基础.md"}'),p={name:"posts/前端/以前/css3-渐变，动画过度，2d基础.md"},o=l(`<h1 id="_1-css3-渐变的语法及应用" tabindex="-1">1.CSS3 渐变的语法及应用 <a class="header-anchor" href="#_1-css3-渐变的语法及应用" aria-label="Permalink to &quot;1.CSS3 渐变的语法及应用&quot;">​</a></h1><pre><code>## 线性渐变，从左到右，或者从上倒下，线性变化
</code></pre><p>linear-gradient:值1,值2 [值3],值4</p><pre><code>     值1:
     		top,to bottom,180deg 表示从上到下

     		bottom,to top,0deg 表示从下到上

     		left,to right,90deg 表示从左到右

     		right,to left,270deg 表示从右到左

     		45deg,to top right 从左上到右上

     		135deg,to top right 从左上到右上

     		等等
	值2：  起始颜色
	值3：  可以设置设置颜色的过度的距离，如50%，就是0到50%
	值4：  终止颜色
	注：起始位置和终止位置可设置多个颜色；

## 径向渐变，从内而外扩散（圆）

radial-gradient:值1,值2 [值3],值4

    值1:
     		ellipse:椭圆效果，当元素宽高一致时为正圆
     		circle:正圆

	值2：  起始颜色
	值3：  可以设置设置颜色的过度的距离，如50%，就是0到50%
	值4：  终止颜色
	注：起始位置和终止位置可设置多个颜色；

## 重复渐变，按照规律一层一层循环

repeating-radial-gradient值1,值2 [值3],值4

    值1:
     		ellipse:椭圆效果，当元素宽高一致时为正圆
     		circle:正圆

	值2：  起始颜色
	值3：  可以设置设置颜色的过度的距离，如50%，就是0到50%
	值4：  终止颜色
	注：起始位置和终止位置可设置多个颜色；

repeating-linear-gradient值1,值2 [值3],值4

    值1:
     		ellipse:椭圆效果，当元素宽高一致时为正圆
     		circle:正圆

	值2：  起始颜色
	值3：  可以设置设置颜色的过度的距离，如50%，就是0到50%
	值4：  终止颜色
	注：起始位置和终止位置可设置多个颜色；
</code></pre><h1 id="_2-css3-过渡的用法" tabindex="-1">2.CSS3 过渡的用法 <a class="header-anchor" href="#_2-css3-过渡的用法" aria-label="Permalink to &quot;2.CSS3 过渡的用法&quot;">​</a></h1><pre><code>transition:值1,值2,值3,值4
	值1:
			transition-property:all 或者其他属性值

	值2：   transition-duration:设置时间 如：2s
	值3：   transition-timing-function:设置速度
									linear 匀速	
									ease 慢快慢
									ease-in 慢开始	
									ease-out 慢结束
									ease-in-out  慢开始慢结束
									cubic-bezier 自定义贝兹尔曲线

	值4：  transition-delay:设置延时 如2s
</code></pre><h1 id="_3-css3-2d-转换的应用" tabindex="-1">3.CSS3 2D 转换的应用 <a class="header-anchor" href="#_3-css3-2d-转换的应用" aria-label="Permalink to &quot;3.CSS3 2D 转换的应用&quot;">​</a></h1><pre><code> transform属性的属性值的运用

	translate(x,y):设置位移量
		x:横向位移
		y:纵向位移

	scale(倍数):设置放大和缩小

	rotate(角度):设置顺时针旋转的角度

	skew(x角度,y角度):设置倾斜角度
		当角度为90deg时，消失

	matrix()合体写法
	matrix() 方法把所有 2D 转换方法组合在一起。
	matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。
	缩放X, tan(X度), tan(Y度),缩放Y,位置X,位置Y
</code></pre><h1 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h1><h2 id="渐变" tabindex="-1">渐变 <a class="header-anchor" href="#渐变" aria-label="Permalink to &quot;渐变&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">DOCTYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">htm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">meta</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">title&gt;css3元素学习&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">/*线性渐变*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">200px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">margin-bottom:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">50px</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right,red,blue</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">radial-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">circle,red,blue</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">radial-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ellipse,red,blue</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repeating-radial-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">circle,red,blue</span><span style="color:#89DDFF;">);</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">200px</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repeating-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right,red,blue</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">div:nth-child(6</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repeating-radial-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">circle,red</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#C3E88D;">%,blue</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#C3E88D;">%,green</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">);}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;线性渐变&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;镜像渐变--circle&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;镜像渐变--ellipse&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;重复渐变--repeating-radial-gradient&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;重复渐变--repeating-linear-gradient&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">div&gt;重复渐变,多个颜色以及设置范围--repeating-radial-gradient&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="动画过度" tabindex="-1">动画过度 <a class="header-anchor" href="#动画过度" aria-label="Permalink to &quot;动画过度&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">DOCTYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">htm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">meta</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">title&gt;动画过度&lt;/title&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">600px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">600px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#99f;position: relative;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p{</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">20px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">20px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">border-radius:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">10px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#f99;position: absolute;left: 0;top:0;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">/*transition:2s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ease</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">2s</span><span style="color:#89DDFF;">;*</span><span style="color:#A6ACCD;">/ opacity: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">transition-property:all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">transition-duration:2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">transition-delay:2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">transition-timing-function:ease-in-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">div:hover</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p{left:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">200px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">top:500px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">opacity:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_2d元素转换" tabindex="-1">2d元素转换 <a class="header-anchor" href="#_2d元素转换" aria-label="Permalink to &quot;2d元素转换&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">DOCTYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">htm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">meta</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">title&gt;动画过度&lt;/title&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">600px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">600px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#99f;position: relative;}</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p{</span></span>
<span class="line"><span style="color:#A6ACCD;">		    	</span><span style="color:#FFCB6B;">width:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">height:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#FFCB6B;">background:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#00f;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">/*transform:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">100px,200px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">60deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">skew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">20deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;*</span><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">transform:matrix(1,2,2,1,100,200</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		  </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/style&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,15),t=[o];function e(c,r,D,y,F,C){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
