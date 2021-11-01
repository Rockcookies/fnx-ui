const n={},a='<h1 id="loading" tabindex="-1">Loading</h1>\n<p>Used to show the status of the load.</p>\n<h2 id="custom-color" tabindex="-1">Custom Color</h2>\n<p>Set the color of the load icon via the <code v-pre>Color</code> property.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1989fa<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-size" tabindex="-1">Custom Size</h2>\n<p>Set the size of the load icon via the <code v-pre>size</code> property, the default unit is <code v-pre>px</code>.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="text" tabindex="-1">Text</h2>\n<p>Can be loaded with the <code v-pre>Text</code> or <code v-pre>children</code> attribute setting.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Loading</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="vertical" tabindex="-1">Vertical</h2>\n<p>After setting the <code v-pre>vertical</code> property, the icon and the copy will be arranged vertically.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">vertical</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Loading...\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Loading</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="color" tabindex="-1">Color</h2>\n<p>Set the color of the copy copy via <code v-pre>Color</code> or<code v-pre> TextColor</code> property.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0094ff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Loading</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token attr-name">textColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0094ff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Loading</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>vertical</td>\n<td>Whether vertical arrangement icons and text content</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Load the icon size, the default unit is <code v-pre>px</code></td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>24</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>colour</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>rgb(179, 179, 179)</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>Word</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>textColor</td>\n<td>Text color</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>rgb(110, 110, 110)</code></td>\n</tr>\n<tr>\n<td>textSize</td>\n<td>Text size, default unit is <code v-pre>px</code></td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>14</code></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,a as html};
