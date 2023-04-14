import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const g=JSON.parse('{"title":"react- react-Conditional Rendering","description":"","frontmatter":{"title":"react- react-Conditional Rendering","date":"2017-07-09T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-react-Conditional-Rendering.md"}'),p={name:"posts/前端/以前/react-react-Conditional-Rendering.md"},e=l(`<h1 id="条件渲染-通过某些条件加载不同功能的组件" tabindex="-1">条件渲染，通过某些条件加载不同功能的组件 <a class="header-anchor" href="#条件渲染-通过某些条件加载不同功能的组件" aria-label="Permalink to &quot;条件渲染，通过某些条件加载不同功能的组件&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Toggle extends Component{</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isToggleOn:true}</span></span>
<span class="line"><span style="color:#A6ACCD;">     // This binding is necessary to make \`this\` work in the callback</span></span>
<span class="line"><span style="color:#A6ACCD;">     //     this.handleClick = this.handleClick.bind(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /*handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         // var that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">             isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">         }));</span></span>
<span class="line"><span style="color:#A6ACCD;">     }*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleClick = () =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState(prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">            isToggleOn:!prevState.isToggleOn</span></span>
<span class="line"><span style="color:#A6ACCD;">        }));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(this.state.isToggleOn){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;UserGreeting/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            )</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            return (</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;button onClick={this.handleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;GuestGreeting/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            )</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function UserGreeting(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                Welcome back!</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function GuestGreeting(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                sign up</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="element-variables-元素变量-通过条件展示适合的组件" tabindex="-1">Element Variables 元素变量 通过条件展示适合的组件 <a class="header-anchor" href="#element-variables-元素变量-通过条件展示适合的组件" aria-label="Permalink to &quot;Element Variables 元素变量 通过条件展示适合的组件&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class LoginControl extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.handleLoginClick = this.handleLoginClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.handleLogoutClick = this.handleLogoutClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isLoggedIn:false}</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     handleLoginClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState({isLoggedIn:true})</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleLogoutClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState({isLoggedIn:false})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        const isLoggedIn = this.state.isLoggedIn;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let button = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if(isLoggedIn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            button = &lt;LogoutButton onClick ={this.handleLogoutClick} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            button = &lt;LoginButton onClick ={this.handleLoginClick} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Greeting isLoggedIn={isLoggedIn} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {button}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function UserGreeting() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;h1&gt;Welcome back!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function GuestGreeting() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;h1&gt;please sign up&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Greeting(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isLoggedIn = props.isLoggedIn;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(isLoggedIn){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;UserGreeting/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;GuestGreeting/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function LoginButton(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={props.onClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            Login</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function LogoutButton(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button onClick={props.onClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            logout</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="inline-if-with-logical-operator" tabindex="-1">Inline If with Logical &amp;&amp; Operator <a class="header-anchor" href="#inline-if-with-logical-operator" aria-label="Permalink to &quot;Inline If with Logical &amp;&amp; Operator&quot;">​</a></h1><blockquote><p>在 jsx 中可以插入任何表达式在花括号中，当然也包括元素</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Mailbox (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const unreadMessages  = props.unreadMessages;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                Hello!</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                unreadMessages.length &gt;2 &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        you have {unreadMessages.length} unread messages.</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            //表达式为真输出元素</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const messages = [&#39;React&#39;,&#39;re:react&#39;,&#39;react:React&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="nline-if-else-with-conditional-operator" tabindex="-1">nline If-Else with Conditional Operator <a class="header-anchor" href="#nline-if-else-with-conditional-operator" aria-label="Permalink to &quot;nline If-Else with Conditional Operator&quot;">​</a></h1><blockquote><p>改写上面的例子</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class LoginControl extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">     constructor(props){</span></span>
<span class="line"><span style="color:#A6ACCD;">         super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.handleLoginClick = this.handleLoginClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.handleLogoutClick = this.handleLogoutClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.state = {isLoggedIn:false}</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     handleLoginClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState({isLoggedIn:true})</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleLogoutClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.setState({isLoggedIn:false})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        const isLoggedIn = this.state.isLoggedIn;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let button = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /*if(isLoggedIn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            button = &lt;LogoutButton onClick ={this.handleLogoutClick} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            button = &lt;LoginButton onClick ={this.handleLoginClick} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;Greeting isLoggedIn={isLoggedIn} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    isLoggedIn ? (&lt;LogoutButton onClick ={this.handleLogoutClick} /&gt;) :</span></span>
<span class="line"><span style="color:#A6ACCD;">                        (&lt;LoginButton onClick ={this.handleLoginClick} /&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="preventing-component-from-rendering-阻止组件的渲染" tabindex="-1">Preventing Component from Rendering 阻止组件的渲染 <a class="header-anchor" href="#preventing-component-from-rendering-阻止组件的渲染" aria-label="Permalink to &quot;Preventing Component from Rendering 阻止组件的渲染&quot;">​</a></h1><p>//阻止组件的渲染</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function WaringBanner(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!props.warn){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;nihao &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return (&lt;div className=&quot;waring&quot;&gt;警告&lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Page extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {showWarning:true}</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleToggleClick = this.handleToggleClick.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleToggleClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState(</span></span>
<span class="line"><span style="color:#A6ACCD;">            prevState =&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">                showWarning:!prevState.showWarning</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    render (){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;WaringBanner warn={this.state.showWarning}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;button onClick={this.handleToggleClick}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                {this.state.showWarning ? &#39;Hide&#39; : &#39;Show&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),o=[e];function t(c,i,C,r,A,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{g as __pageData,d as default};
