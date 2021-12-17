(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{h8Ns:function(n,a){n.exports={attributes:{},html:'<h1 id="configprovider" tabindex="-1">ConfigProvider</h1>\n<p>ConfigProvider provides a uniform configuration support for components.</p>\n<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>\n<p>This component provides a configuration to all React components underneath itself via the <a href="https://facebook.github.io/react/docs/context.html">context API</a>. In the render tree all components will have access to the provided config.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">transitionDuration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="locale" tabindex="-1">Locale</h2>\n<p>Use ConfigProvider config locale.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'fnx-ui/lib/locale/zh-CN\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Version</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>locale</td>\n<td>Language package setting, you can find the packages in <a href="https://unpkg.com/browse/fnx-ui/lib/locale">fnx-ui/lib/locale</a></td>\n<td><code v-pre>object</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>safeAreaInsetBottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>Animation transition duration</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>300</code></td>\n<td></td>\n</tr>\n<tr>\n<td>mountTo</td>\n<td>To set the container of the popup element. The default is to create a <code v-pre>div</code> element in <code v-pre>body</code></td>\n<td></td>\n<td><code v-pre>() =&gt; HTMLElement</code></td>\n<td><code v-pre>() =&gt; document.body</code></td>\n</tr>\n</tbody>\n</table>\n'}}}]);