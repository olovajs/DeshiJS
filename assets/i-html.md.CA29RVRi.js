import{p as s,c as n,a0 as a,j as i,o as l}from"./chunks/framework.Dvj3iZjQ.js";const r=JSON.parse('{"title":"i-html","description":"","frontmatter":{"0":"i","1":"-","2":"h","3":"t","4":"m","5":"l"},"headers":[],"relativePath":"i-html.md","filePath":"i-html.md"}'),h={name:"i-html.md"},p=Object.assign(h,{setup(o){s(0);const t="<h1>0</h1>";return(d,e)=>(l(),n("div",null,[e[0]||(e[0]=a(`<h1 id="i-html" tabindex="-1">i-html <a class="header-anchor" href="#i-html" aria-label="Permalink to &quot;i-html&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>In this example, we are using the <code>i-html</code> directive in Olova.js to dynamically bind raw HTML content to an element. This is useful when you want to inject HTML content directly into your page and automatically reflect changes to reactive variables, such as <code>{count}.</code></p><p>The example demonstrates how to bind HTML content with the current value of a reactive variable <code>(count)</code> and render it inside a <code>div</code>.</p><h3 id="example-code" tabindex="-1">Example Code <a class="header-anchor" href="#example-code" aria-label="Permalink to &quot;Example Code&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Reactive variable to track count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    showHtml: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;h1&gt;{count}&lt;/h1&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// HTML content with dynamic placeholder</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;div i-html=&quot;showHtml&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6)),i("div",{class:"demo"},[i("div",{innerHTML:t})]),e[1]||(e[1]=a(' ## Breakdown <h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><ol><li>The data object holds the application&#39;s reactive state:</li></ol><ul><li><code>count</code>: A reactive property initialized to<code> 0</code>. It tracks the current count.</li><li><code>showHtml</code>: A string representing the raw HTML content. The placeholder <code>{count} </code>is automatically replaced with the current value of <code>count</code>.</li></ul><h3 id="i-html-directive" tabindex="-1">i-html Directive <a class="header-anchor" href="#i-html-directive" aria-label="Permalink to &quot;i-html Directive&quot;">​</a></h3><ul><li><code>i-html</code> is a custom directive that binds raw HTML to an element. Unlike a regular text binding, this directive allows you to inject and render HTML into the DOM.</li></ul><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template&quot;">​</a></h3><ul><li>The<code> template</code> uses the <code>i-html</code> directive to bind the <code>showHtml</code> data property to the <code>div</code> element. The <code>{count}</code> placeholder inside <code>showHtml</code> is dynamically replaced with the current value of <code>count</code>, and it is re-rendered whenever <code>count</code> changes.</li></ul><h3 id="key-features" tabindex="-1">Key Features <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;Key Features&quot;">​</a></h3><ul><li><p>Dynamic HTML Injection: Using <code>i-html</code>, you can inject and bind HTML content directly into the DOM.</p></li><li><p>Reactive HTML Binding: The placeholder <code>{count}</code> within the <code>showHtml</code> string is automatically updated when the <code>count </code>value changes. No manual updates are needed; the reactivity system ensures that the HTML content updates dynamically.</p></li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The <code>i-html</code> directive in Olova.js not only injects HTML into the DOM but also automatically reflects updates to reactive variables inside the HTML content. This makes it a powerful tool for handling dynamic content within your application, allowing you to build more interactive UIs.</p><p>No Manual Updates Required Unlike traditional template rendering, where you&#39;d manually update the HTML when variables change, Olova.js handles this automatically. When the <code>count</code> changes, the framework ensures the HTML inside <code>i-html</code> is re-rendered with the new value.</p>',13))]))}});export{r as __pageData,p as default};
