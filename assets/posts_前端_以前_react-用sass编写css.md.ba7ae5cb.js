import{_ as s,c as a,o as n,N as e}from"./chunks/framework.1f285265.js";const h=JSON.parse('{"title":"react - 用sass编写css","description":"","frontmatter":{"title":"react - 用sass编写css","date":"2017-07-19T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-用sass编写css.md"}'),l={name:"posts/前端/以前/react-用sass编写css.md"},p=e(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><blockquote><p>这适用于create-react-app配置的react开发环境，</p></blockquote><h1 id="第一步安装编译所需的依赖" tabindex="-1">第一步安装编译所需的依赖 <a class="header-anchor" href="#第一步安装编译所需的依赖" aria-label="Permalink to &quot;第一步安装编译所需的依赖&quot;">​</a></h1><blockquote><p>npm install sass-loader node-sass --save-dev</p></blockquote><h1 id="在node-modules-react-scripts-config下找到-webpack-config-dev-js-文件" tabindex="-1">在node_modules/react-scripts/config下找到 webpack.config.dev.js 文件 <a class="header-anchor" href="#在node-modules-react-scripts-config下找到-webpack-config-dev-js-文件" aria-label="Permalink to &quot;在node_modules/react-scripts/config下找到 webpack.config.dev.js 文件&quot;">​</a></h1><h1 id="在exculde中添加scss-用来匹配scss文件" tabindex="-1">在exculde中添加scss，用来匹配scss文件 <a class="header-anchor" href="#在exculde中添加scss-用来匹配scss文件" aria-label="Permalink to &quot;在exculde中添加scss，用来匹配scss文件&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">exclude: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.(js|jsx)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.json$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.bmp$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.gif$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.jpe?g$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.png$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          /\\.scss$/,//这里添加</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="这里添加sass配置文件" tabindex="-1">这里添加sass配置文件 <a class="header-anchor" href="#这里添加sass配置文件" aria-label="Permalink to &quot;这里添加sass配置文件&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: require.resolve(&#39;url-loader&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          limit: 10000,</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;static/media/[name].[hash:8].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//  编译sass</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">         test:/\\.scss$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">         loaders: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>这是开发环境的配置，如需在生产环境开发只需在webpack.config.prod.js做同样的配置</p></blockquote><blockquote><p>配置完成后记得重新运行命令 npm start or yarn start</p></blockquote>`,11),c=[p];function o(t,r,i,d,C,A){return n(),a("div",null,c)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
