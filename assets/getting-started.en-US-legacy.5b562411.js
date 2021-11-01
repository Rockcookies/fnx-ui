System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1 id="quick-start" tabindex="-1">Quick Start</h1>\n<p>This guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step.</p>\n<h2 id="installation" tabindex="-1">Installation</h2>\n<p>Use npm or yarn to install.</p>\n<pre class="language-bash"><code class="language-bash" v-pre><span class="token comment"># npm</span>\n$ <span class="token function">npm</span> i fnx-ui -S\n\n<span class="token comment"># yarn</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> fnx-ui\n</code></pre>\n<h2 id="usage" tabindex="-1">Usage</h2>\n<p>Run the App.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'fnx-ui/es/locale/en-US\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">\'fnx-ui/dist/fnx.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// light mode</span>\n<span class="token keyword">import</span> <span class="token string">\'fnx-ui/dist/fnx-theme-light.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// dark mode</span>\n<span class="token comment">// import \'fnx-ui/dist/fnx-theme-dark.css\';</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token operator">:</span> <span class="token string">\'100px auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello World!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n')}}}));
