import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"react-Lifting State Up","description":"","frontmatter":{"title":"react-Lifting State Up","date":"2017-07-16T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Lifting-State-Up.md"}'),p={name:"posts/前端/以前/react-Lifting-State-Up.md"},e=l(`<h1 id="案例一" tabindex="-1">案例一 <a class="header-anchor" href="#案例一" aria-label="Permalink to &quot;案例一&quot;">​</a></h1><blockquote><p>通过输入温度改变条件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function BoilingVerdict(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(props.celsius&gt;=100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;p&gt;水开了&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;p&gt;水没开&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Calculator extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleChange = this.handleChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state  = {temperature:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleChange(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({temperature:e.target.value})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        const temperature = this.state.temperature;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;fieldest&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    输入温度吧</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                       value={temperature}</span></span>
<span class="line"><span style="color:#A6ACCD;">                       onChange={this.handleChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;BoilingVerdict</span></span>
<span class="line"><span style="color:#A6ACCD;">                    celsius={parseFloat(temperature)}</span></span>
<span class="line"><span style="color:#A6ACCD;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/fieldest&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>通过输入温度改变不同的的状态,共享状态是通过将其移动到需要它的组件的最接近的共同祖先来完成的，通过 event up 改变父组件状态值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const scaleNames = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    c: &#39;Celsius&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    f: &#39;Fahrenheit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function toCelsius(fahrenheit) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (fahrenheit - 32) * 5 / 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function toFahrenheit(celsius) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (celsius * 9 / 5) + 32;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function tryConvert(temperature, convert) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const input = parseFloat(temperature);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Number.isNaN(input)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const output = convert(input);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const rounded = Math.round(output * 1000) / 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return rounded.toString();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function BoilingVerdict(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (props.celsius &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;p&gt;The water would boil.&lt;/p&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;p&gt;The water would not boil.&lt;/p&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class TemperatureInput extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleChange = this.handleChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleChange(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.props.onTemperatureChange(e.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const temperature = this.props.temperature;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const scale = this.props.scale;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;legend&gt;Enter temperature in {scaleNames[scale]}:&lt;/legend&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;input value={temperature}</span></span>
<span class="line"><span style="color:#A6ACCD;">                       onChange={this.handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/fieldset&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Calculator extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.state = {temperature: &#39;&#39;, scale: &#39;c&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleCelsiusChange(temperature) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({scale: &#39;c&#39;, temperature});</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleFahrenheitChange(temperature) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setState({scale: &#39;f&#39;, temperature});</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const scale = this.state.scale;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const temperature = this.state.temperature;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const celsius = scale === &#39;f&#39; ? tryConvert(temperature, toCelsius) : temperature;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const fahrenheit = scale === &#39;c&#39; ? tryConvert(temperature, toFahrenheit) : temperature;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;TemperatureInput</span></span>
<span class="line"><span style="color:#A6ACCD;">                    scale=&quot;c&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    temperature={celsius}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    onTemperatureChange={this.handleCelsiusChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;TemperatureInput</span></span>
<span class="line"><span style="color:#A6ACCD;">                    scale=&quot;f&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    temperature={fahrenheit}</span></span>
<span class="line"><span style="color:#A6ACCD;">                    onTemperatureChange={this.handleFahrenheitChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;BoilingVerdict</span></span>
<span class="line"><span style="color:#A6ACCD;">                    celsius={parseFloat(celsius)} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>在任何一个 react 对象中，任何数据都应该是单一来源。</p></blockquote><blockquote><p>这个状态需要第一时间被添加到它需要的组件上，如果其他组件也需要它，我们可以把他的状态提升到它最近的组件上，而不是试图在不同组件同步,这就是自相而下的数据流。</p></blockquote>`,7),t=[e];function o(c,r,C,i,A,y){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{u as __pageData,h as default};
