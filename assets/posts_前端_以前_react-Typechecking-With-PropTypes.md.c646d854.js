import{_ as s,c as n,o as a,N as p}from"./chunks/framework.1f285265.js";const d=JSON.parse('{"title":"react-Typechecking With PropTypes","description":"","frontmatter":{"title":"react-Typechecking With PropTypes","date":"2017-07-14T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"posts/前端/以前/react-Typechecking-With-PropTypes.md"}'),l={name:"posts/前端/以前/react-Typechecking-With-PropTypes.md"},e=p(`<h1 id="利用类型检查限制属性的类型-防止出现类型不准确的情况" tabindex="-1">利用类型检查限制属性的类型，防止出现类型不准确的情况 <a class="header-anchor" href="#利用类型检查限制属性的类型-防止出现类型不准确的情况" aria-label="Permalink to &quot;利用类型检查限制属性的类型，防止出现类型不准确的情况&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//类型的匹配</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Greeting extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log();</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                Hello,{this.props.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Greeting.PropTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:PropTypes.string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="proptypes" tabindex="-1">PropTypes <a class="header-anchor" href="#proptypes" aria-label="Permalink to &quot;PropTypes&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import PropTypes from &#39;prop-types&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MyComponent.propTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can declare that a prop is a specific JS primitive. By default, these</span></span>
<span class="line"><span style="color:#A6ACCD;">  // are all optional.</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalArray: PropTypes.array,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalBool: PropTypes.bool,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalFunc: PropTypes.func,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalNumber: PropTypes.number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalObject: PropTypes.object,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalString: PropTypes.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalSymbol: PropTypes.symbol,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // Anything that can be rendered: numbers, strings, elements or an array</span></span>
<span class="line"><span style="color:#A6ACCD;">  // (or fragment) containing these types.</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalNode: PropTypes.node,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // A React element.</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalElement: PropTypes.element,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can also declare that a prop is an instance of a class. This uses</span></span>
<span class="line"><span style="color:#A6ACCD;">  // JS&#39;s instanceof operator.</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalMessage: PropTypes.instanceOf(Message),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can ensure that your prop is limited to specific values by treating</span></span>
<span class="line"><span style="color:#A6ACCD;">  // it as an enum.</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalEnum: PropTypes.oneOf([&#39;News&#39;, &#39;Photos&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // An object that could be one of many types</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalUnion: PropTypes.oneOfType([</span></span>
<span class="line"><span style="color:#A6ACCD;">    PropTypes.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    PropTypes.number,</span></span>
<span class="line"><span style="color:#A6ACCD;">    PropTypes.instanceOf(Message)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // An array of a certain type</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // An object with property values of a certain type</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalObjectOf: PropTypes.objectOf(PropTypes.number),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // An object taking on a particular shape</span></span>
<span class="line"><span style="color:#A6ACCD;">  optionalObjectWithShape: PropTypes.shape({</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: PropTypes.string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    fontSize: PropTypes.number</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can chain any of the above with \`isRequired\` to make sure a warning</span></span>
<span class="line"><span style="color:#A6ACCD;">  // is shown if the prop isn&#39;t provided.</span></span>
<span class="line"><span style="color:#A6ACCD;">  requiredFunc: PropTypes.func.isRequired,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // A value of any data type</span></span>
<span class="line"><span style="color:#A6ACCD;">  requiredAny: PropTypes.any.isRequired,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can also specify a custom validator. It should return an Error</span></span>
<span class="line"><span style="color:#A6ACCD;">  // object if the validation fails. Don&#39;t \`console.warn\` or throw, as this</span></span>
<span class="line"><span style="color:#A6ACCD;">  // won&#39;t work inside \`oneOfType\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  customProp: function(props, propName, componentName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!/matchme/.test(props[propName])) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Error(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Invalid prop \`&#39; + propName + &#39;\` supplied to&#39; +</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39; \`&#39; + componentName + &#39;\`. Validation failed.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // You can also supply a custom validator to \`arrayOf\` and \`objectOf\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  // It should return an Error object if the validation fails. The validator</span></span>
<span class="line"><span style="color:#A6ACCD;">  // will be called for each key in the array or object. The first two</span></span>
<span class="line"><span style="color:#A6ACCD;">  // arguments of the validator are the array or object itself, and the</span></span>
<span class="line"><span style="color:#A6ACCD;">  // current item&#39;s key.</span></span>
<span class="line"><span style="color:#A6ACCD;">  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!/matchme/.test(propValue[key])) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Error(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Invalid prop \`&#39; + propFullName + &#39;\` supplied to&#39; +</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39; \`&#39; + componentName + &#39;\`. Validation failed.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="必须存在一个子元素-requiring-single-child" tabindex="-1">必须存在一个子元素 Requiring Single Child <a class="header-anchor" href="#必须存在一个子元素-requiring-single-child" aria-label="Permalink to &quot;必须存在一个子元素 Requiring Single Child&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import PropTypes from &#39;prop-types&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class MyComponent extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // This must be exactly one element or it will warn.</span></span>
<span class="line"><span style="color:#A6ACCD;">    const children = this.props.children;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {children}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MyComponent.propTypes = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  children: PropTypes.element.isRequired</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="default-prop-values-默认的属性值" tabindex="-1">Default Prop Values 默认的属性值 <a class="header-anchor" href="#default-prop-values-默认的属性值" aria-label="Permalink to &quot;Default Prop Values 默认的属性值&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Greeting extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Specifies the default values for props:</span></span>
<span class="line"><span style="color:#A6ACCD;">Greeting.defaultProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;Stranger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Renders &quot;Hello, Stranger&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Greeting /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.getElementById(&#39;example&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>属性检查发生在默认属性值完成之后，所以他也可以对默认属性进行检查类型</p></blockquote>`,9),o=[e];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{d as __pageData,u as default};
