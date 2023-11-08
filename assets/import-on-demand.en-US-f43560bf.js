const n={},s='<h1 id="import-on-demand" tabindex="-1">Import on demand</h1>\n<p>FNX UI support tree shaking for components and locales.</p>\n<p>By default the component locale is enUS, no extra imports is needed.</p>\n<h2 id="demand-import-less-css" tabindex="-1">Demand import LESS/CSS</h2>\n<p>Use <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> to import components on demand.</p>\n<pre class="language-bash"><code class="language-bash" v-pre><span class="token comment"># Install plugin</span>\n$ <span class="token function">npm</span> i babel-plugin-import <span class="token parameter variable">-D</span>\n</code></pre>\n<p>Set babel config in .babelrc or babel.config.js.</p>\n<pre class="language-json"><code class="language-json" v-pre><span class="token punctuation">{</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">"import"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"fnx-ui"</span><span class="token punctuation">,</span>\n        <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>\n        <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>Then you can import components from fnx-ui.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token comment">// Input</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Output</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'fnx-ui/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'fnx-ui/es/button/style\'</span><span class="token punctuation">;</span>\n</code></pre>\n';export{n as attributes,s as html};
