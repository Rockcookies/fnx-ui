const n={},a='<h1 id="overlay" tabindex="-1">Overlay</h1>\n<p>Create a mask layer to emphasize a specific page element and prevent the user from making other operations.</p>\n<h2 id="basic-usagec-usage" tabindex="-1">Basic usagec Usage</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="embedding" tabindex="-1">Embedding</h2>\n<p>An arbitrary content can be embedded on the mask layer.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Overlay</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visible</td>\n<td>Whether to show a mask layer</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>Z-index hierarchy</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>Whether to lock the background scroll, the content in the mashed in the lock will not scroll</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>Animation time, unit second, set to 0 can disable animation</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>300</code></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,a as html};
