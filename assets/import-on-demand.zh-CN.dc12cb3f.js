const n={},s='<h1 id="an-xu-yin-ru" tabindex="-1">按需引入</h1>\n<p>FNX UI 支持 tree shaking，组件、语言、均可 tree-shaking。</p>\n<p>默认情况组件语言为英文，无需额外导入。</p>\n<h2 id="an-xu-yin-ru-less-css" tabindex="-1">按需引入 LESS/CSS</h2>\n<p><a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。</p>\n<pre class="language-bash"><code class="language-bash" v-pre><span class="token comment"># 安装插件</span>\n$ <span class="token function">npm</span> i babel-plugin-import -D\n</code></pre>\n<p>在.babelrc 或 babel.config.js 中添加配置。</p>\n<pre class="language-json"><code class="language-json" v-pre><span class="token punctuation">{</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">"import"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"fnx-ui"</span><span class="token punctuation">,</span>\n        <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>\n        <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>接着你可以在代码中直接引入 FNX UI 组件，插件会自动将代码转化为按需引入的形式。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token comment">// 原始代码</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 编译后代码</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'fnx-ui/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'fnx-ui/es/button/style\'</span><span class="token punctuation">;</span>\n</code></pre>\n';export{n as attributes,s as html};
