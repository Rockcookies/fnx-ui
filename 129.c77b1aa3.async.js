(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{WDdT:function(n,a){n.exports={attributes:{},html:'<h1 id="switch-kai-guan" tabindex="-1">Switch \u5f00\u5173</h1>\n<p>\u7528\u4e8e\u5728\u6253\u5f00\u548c\u5173\u95ed\u72b6\u6001\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u901a\u8fc7 <code v-pre>checked</code> \u7ed1\u5b9a\u5f00\u5173\u7684\u9009\u4e2d\u72b6\u6001\uff0c<code v-pre>true</code> \u8868\u793a\u5f00\uff0c<code v-pre>false</code> \u8868\u793a\u5173\u3002<code v-pre>defaultChecked</code>\u8868\u793a\u5f00\u5173\u9ed8\u8ba4\u7684\u72b6\u6001\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">defaultChecked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72b6\u6001</h2>\n<p>\u901a\u8fc7 <code v-pre>disabled</code> \u5c5e\u6027\u6765\u7981\u7528\u5f00\u5173\uff0c\u7981\u7528\u72b6\u6001\u4e0b\u5f00\u5173\u4e0d\u53ef\u70b9\u51fb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jia-zai-zhuang-tai" tabindex="-1">\u52a0\u8f7d\u72b6\u6001</h2>\n<p>\u901a\u8fc7 <code v-pre>loading</code> \u5c5e\u6027\u8bbe\u7f6e\u5f00\u5173\u4e3a\u52a0\u8f7d\u72b6\u6001\uff0c\u52a0\u8f7d\u72b6\u6001\u4e0b\u5f00\u5173\u4e0d\u53ef\u70b9\u51fb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81ea\u5b9a\u4e49\u5927\u5c0f</h2>\n<p>\u901a\u8fc7 <code v-pre>size</code> \u5c5e\u6027\u81ea\u5b9a\u4e49\u5f00\u5173\u7684\u5927\u5c0f\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81ea\u5b9a\u4e49\u989c\u8272</h2>\n<p><code v-pre>activeColor</code> \u5c5e\u6027\u8868\u793a\u6253\u5f00\u65f6\u7684\u80cc\u666f\u8272\uff0c<code v-pre>inactiveColor</code> \u8868\u793a\u5173\u95ed\u65f6\u7684\u80cc\u666f\u8272\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ee0a24<span class="token punctuation">"</span></span> <span class="token attr-name">inactiveColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0000ff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="wen-zi-yu-tu-biao" tabindex="-1">\u6587\u5b57\u4e0e\u56fe\u6807</h2>\n<p>\u8bbe\u7f6e\u6587\u5b57\u4e0e\u56fe\u6807</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NO<span class="token punctuation">"</span></span> <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>OFF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="yi-bu-kong-zhi" tabindex="-1">\u5f02\u6b65\u63a7\u5236</h2>\n<p>\u9700\u8981\u5f02\u6b65\u63a7\u5236\u5f00\u5173\u65f6\u53ef\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u624b\u52a8\u5904\u7406\u5f00\u5173\u72b6\u6001\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>syncChecked<span class="token punctuation">,</span> setSyncChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleSyncChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setSyncChecked</span><span class="token punctuation">(</span><span class="token operator">!</span>syncChecked<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>syncChecked<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSyncChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSyncChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>\u5f00\u5173\u5c3a\u5bf8\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code v-pre>px</code></td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>30</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>\u5f00\u5173\u9009\u4e2d\u72b6\u6001</td>\n<td><code v-pre>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>\u662f\u5426\u9ed8\u8ba4\u9009\u4e2d</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662f\u5426\u4e3a\u52a0\u8f7d\u72b6\u6001</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>checkedColor</td>\n<td>\u6253\u5f00\u65f6\u7684\u80cc\u666f\u8272</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>unCheckedColor</td>\n<td>\u5173\u95ed\u65f6\u7684\u80cc\u666f\u8272</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedChildren</td>\n<td>\u9009\u4e2d\u65f6\u7684\u5185\u5bb9</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>unCheckedChildren</td>\n<td>\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">\u4e8b\u4ef6</h2>\n<table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onClick</td>\n<td>\u70b9\u51fb\u5f00\u5173\u65f6\u89e6\u53d1</td>\n<td><code v-pre>(checked: boolean)</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5f00\u5173\u72b6\u6001\u5207\u6362\u65f6\u89e6\u53d1</td>\n<td><code v-pre>(checked: boolean, event: MouseEvent&lt;HTMLDivElement&gt;)</code></td>\n</tr>\n</tbody>\n</table>\n'}}}]);