import{p as t,c as r,a0 as p,j as i,a1 as l,a6 as o,Z as d,a2 as E,t as g,o as c}from"./chunks/framework.Dvj3iZjQ.js";const u={class:"demo"},y={class:"demo"},C=JSON.parse('{"title":"i-show","description":"","frontmatter":{"0":"i","1":"-","2":"s","3":"h","4":"o","5":"w"},"headers":[],"relativePath":"i-show.md","filePath":"i-show.md"}'),F={name:"i-show.md"},f=Object.assign(F,{setup(m){const e=t(!0),n=t(!1),a=t(""),k=()=>{a.value&&(n.value=!0)};return(b,s)=>(c(),r("div",null,[s[3]||(s[3]=p(`<h1 id="i-show" tabindex="-1">i-show <a class="header-anchor" href="#i-show" aria-label="Permalink to &quot;i-show&quot;">​</a></h1><p>The i-show directive in Olova is a simple yet effective way to control the visibility of elements based on a boolean condition. Unlike i-if, which removes the element from the DOM entirely when the condition is false, i-show only toggles the CSS display property of the element. This makes i-show ideal for cases where you want to toggle visibility without affecting the layout of the page.</p><h2 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h2><h3 id="toggle-visibility-with-i-show" tabindex="-1">Toggle Visibility with i-show <a class="header-anchor" href="#toggle-visibility-with-i-show" aria-label="Permalink to &quot;Toggle Visibility with i-show&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isVisible: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1 i-show=&quot;isVisible&quot;&gt;This will toggle when you click the button&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;button @click=&quot;isVisible = !isVisible&quot;&gt;Toggle&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-it-works" tabindex="-1">How It Works: <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works:&quot;">​</a></h2><p><strong>1.</strong> The <code>data</code> Object:</p><ul><li>We have a single <code>isVisible</code> property in the <code>data</code> object, which is initially set to <code>true</code>. This property controls whether the <code>&lt;h1&gt;</code> element is visible.</li></ul><p><strong>2.</strong> Using i-show:</p><ul><li><p>The i-show directive is applied to the <code>&lt;h1&gt;</code> element: <code>&lt;h1 i-show=&quot;isVisible&quot;&gt;</code>.</p></li><li><p>When isVisible is true, the <code>&lt;h1&gt;</code> element is shown. When isVisible is false, the element&#39;s display style is set to none, making it invisible but still present in the DOM.</p></li></ul><p><strong>3.</strong> Toggle Button:</p><ul><li><p>The button is used to toggle the value of <code>isVisible</code> between <code>true</code> and <code>false</code>.</p></li><li><p>The <code>@click</code> event handler toggles the <code>isVisible</code> state whenever the button is clicked: <code>@click=&quot;isVisible = !isVisible&quot;</code>.</p></li></ul>`,12)),i("div",u,[l(i("h1",null,"This will toggle when you click the button",512),[[o,e.value]]),i("button",{onClick:s[0]||(s[0]=h=>e.value=!e.value)},"Toggle")]),s[4]||(s[4]=p(`<h2 id="toggle-alert-message-with-i-show" tabindex="-1">Toggle Alert Message with i-show <a class="header-anchor" href="#toggle-alert-message-with-i-show" aria-label="Permalink to &quot;Toggle Alert Message with i-show&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    showAlert: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    submitForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.userName) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.showAlert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Show alert if username is filled</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.showAlert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hide alert if username is empty</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;form @submit.prevent=&quot;submitForm&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &lt;input i-model=&quot;userName&quot; placeholder=&quot;Enter your name&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;/form&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;div i-show=&quot;showAlert&quot; class=&quot;alert&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      Thank you, {userName}, for submitting the form!</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-it-works-1" tabindex="-1">How It Works: <a class="header-anchor" href="#how-it-works-1" aria-label="Permalink to &quot;How It Works:&quot;">​</a></h2><ol><li>Data Properties:</li></ol><p><code>showAlert:</code> Controls whether the alert message should be displayed. Initially set to <code>false</code>. <code>userName:</code> Captures the user&#39;s input from the form.</p><ol start="2"><li>Form Submission Logic:</li></ol><p>The form uses <code>@submit.prevent=&quot;submitForm&quot;</code> to handle the form submission. Inside the <code>submitForm</code> method, if the <code>userName</code> is filled in, it sets <code>showAlert</code> to <code>true</code>, which triggers the alert message to be displayed.</p><ol start="3"><li>Using <code>i-show</code>:</li></ol><p>The alert message <code>(&lt;div class=&quot;alert&quot;&gt;)</code> is wrapped with <code>i-show=&quot;showAlert&quot;</code>. When <code>showAlert</code> is <code>true</code>, the alert message will be shown with the entered <code>userName</code> in the message. When <code>showAlert</code> is <code>false</code>, the alert message is hidden.</p><h2 id="css-for-alert-optional" tabindex="-1">CSS for Alert (Optional): <a class="header-anchor" href="#css-for-alert-optional" aria-label="Permalink to &quot;CSS for Alert (Optional):&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#4caf50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="use-case" tabindex="-1">Use Case: <a class="header-anchor" href="#use-case" aria-label="Permalink to &quot;Use Case:&quot;">​</a></h2><p>This example shows how i-show can be useful in form validation or feedback. It dynamically toggles the visibility of an alert message based on user interaction, keeping the alert in the DOM but only showing it when the condition is met.</p>`,13)),i("div",y,[i("form",{onSubmit:d(k,["prevent"]),style:{display:"flex",gap:"10px"}},[l(i("input",{"onUpdate:modelValue":s[1]||(s[1]=h=>a.value=h),placeholder:"Enter your name"},null,512),[[E,a.value]]),s[2]||(s[2]=i("button",{type:"submit"},"Submit",-1))],32),l(i("div",{class:"alert"}," Thank you, "+g(a.value)+", for submitting the form! ",513),[[o,n.value]])])]))}});export{C as __pageData,f as default};
