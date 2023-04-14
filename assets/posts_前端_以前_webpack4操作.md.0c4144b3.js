import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1f285265.js";const A=JSON.parse('{"title":"webpack4操作","description":"","frontmatter":{"title":"webpack4操作","date":"2018-06-06T10:37:51.000Z","categories":"技术","tags":["webapck"]},"headers":[],"relativePath":"posts/前端/以前/webpack4操作.md"}'),p={name:"posts/前端/以前/webpack4操作.md"},o=l(`<p><img src="http://img.aymfx.cn/aymfx/2018/06/2018-06-06.jpg" alt="what-is-webpack.png"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>现在开始操作一波了，写了点理论的，该动手留点代码的印记了，嘿嘿</p></blockquote><h3 id="装webpack依赖" tabindex="-1">装webpack依赖 <a class="header-anchor" href="#装webpack依赖" aria-label="Permalink to &quot;装webpack依赖&quot;">​</a></h3><blockquote><p>打开命令行工具 <strong>cmd or gitbash</strong></p></blockquote><blockquote><p>创建一个一个文件夹</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkdir webapck4  </span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>进入文件夹</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cd</span><span style="color:#A6ACCD;"> webapck4</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>创建package.json</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> npm init -y</span></span>
<span class="line"></span></code></pre></div><blockquote><p>安装webpack依赖</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> npm install webpack webpack-cli --save-dev</span></span>
<span class="line"></span></code></pre></div><blockquote><p>好的，我们把项目放入编辑器来操作吧</p></blockquote><blockquote><p>在当前目录下创建</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webpack4</span></span>
<span class="line"><span style="color:#A6ACCD;">--package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">--src</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.</span><span style="color:#FFCB6B;">js</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><blockquote><p>index.js</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>运行 npx webapck,生成了一个输出目录dist</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webpack4</span></span>
<span class="line"><span style="color:#A6ACCD;">--package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">--src</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--dist</span></span>
<span class="line"><span style="color:#A6ACCD;">---main.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"></span></code></pre></div><blockquote><p>删除dist,创建webpack.config.js 配置文件</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webpack4</span></span>
<span class="line"><span style="color:#A6ACCD;">--package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">--src</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--webpack.config.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"></span></code></pre></div><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bundle.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>在运行 npx webpack</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webpack4</span></span>
<span class="line"><span style="color:#A6ACCD;">--package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">--src</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--webpack.config.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--build</span></span>
<span class="line"><span style="color:#A6ACCD;">---bundle.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"></span></code></pre></div><blockquote><p>方便起见，我们把命令行放在package.json的scripts</p></blockquote><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">Error: no test specified</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> &amp;&amp; exit 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack --config webpack.config.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.11.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack-cli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.0.2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>运行 npm start 效果和之前一样</p></blockquote><blockquote><p>我们增加一个HTML</p></blockquote><div class="language-vim"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webpack4</span></span>
<span class="line"><span style="color:#A6ACCD;">--package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">--src</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--webpack.config.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">--build</span></span>
<span class="line"><span style="color:#A6ACCD;">---bundle.</span><span style="color:#FFCB6B;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">---index.html</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./bundle.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>修改 index.js</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ly</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>安装 npm install --save lodash</p></blockquote><blockquote><p>运行 npm start 打开index.html 在浏览器，可以看到hello ly</p></blockquote><h4 id="下一篇介绍loader" tabindex="-1">下一篇介绍loader <a class="header-anchor" href="#下一篇介绍loader" aria-label="Permalink to &quot;下一篇介绍loader&quot;">​</a></h4>`,37),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
