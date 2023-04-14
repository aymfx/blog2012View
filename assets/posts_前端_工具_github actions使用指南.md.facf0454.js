import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const F=JSON.parse('{"title":"github actions 基础","description":"github actions 基础","frontmatter":{"title":"github actions 基础","date":"2023-02-19T00:00:00.000Z","description":"github actions 基础","tags":["工具"]},"headers":[],"relativePath":"posts/前端/工具/github actions使用指南.md"}'),p={name:"posts/前端/工具/github actions使用指南.md"},o=l(`<blockquote><p>具体的学习，这里比较详细，可以参照这里理解，通过这个 再也不用自己打包后上传了，直接提交就能部署了</p></blockquote><ul><li><a href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">GitHub Actions 入门教程</a></li><li><a href="https://juejin.cn/post/7008847699919241229" target="_blank" rel="noreferrer">GIthub 部署</a></li></ul><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前工作流的名称</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">博客 CI</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ci触发的条件</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 什么请求触发</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 作用在哪些分支上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 构建的任务，一个工作流有多个构建任务，</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在什么服务器上面执行这些任务，这里使用最新版本的ubuntu</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 构建任务的步骤，一个任务可分为多个步骤</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 拉取仓库代码</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 名称</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 给当前服务器安装node</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use node</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># node版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 下载项目依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 打包node项目</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn run build</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 此处是你node项目的构建脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 部署项目</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Push To Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">working-directory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">          git init</span></span>
<span class="line"><span style="color:#C3E88D;">          git checkout -b main</span></span>
<span class="line"><span style="color:#C3E88D;">          git add -A</span></span>
<span class="line"><span style="color:#C3E88D;">          git -c user.name=&#39;aymfx&#39; -c user.email=&#39;xxx@qq.com&#39; commit -m &#39;deploy&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">          git remote add origin https://\${{secrets.BLOG_TOKEN}}@github.com/aymfx/xxxx.git</span></span>
<span class="line"><span style="color:#C3E88D;">          git push origin main -f -q</span></span>
<span class="line"></span></code></pre></div>`,3),t=[o];function e(c,r,y,i,D,C){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{F as __pageData,u as default};
