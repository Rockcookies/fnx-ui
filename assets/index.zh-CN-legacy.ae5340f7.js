System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1>Overlay 遮罩层</h1>\n<p>创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="qian-ru-nei-rong" tabindex="-1">嵌入内容</h2>\n<p>可以在遮罩层上嵌入任意内容。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Overlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Overlay</span></span> <span class="token attr-name">visible</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Overlay</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visible</td>\n<td>是否展示遮罩层</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>z-index 层级</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>动画时长，单位秒，设置为 0 可以禁用动画</td>\n<td><code>number | string</code></td>\n<td><code>300</code></td>\n</tr>\n</tbody>\n</table>\n</div>')}}}));
