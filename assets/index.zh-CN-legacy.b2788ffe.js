System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1 id="skeleton-gu-jia-ping" tabindex="-1">Skeleton 骨架屏</h1>\n<p>用于在内容加载过程中展示一组占位图形。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<p>通过 <code v-pre>title</code> 属性显示标题占位图，通过 <code v-pre>rows</code> 属性配置占位段落行数。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-shi-tou-xiang" tabindex="-1">显示头像</h2>\n<p>通过 <code v-pre>avatar</code> 属性显示头像占位图。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zhan-shi-zi-zu-jian" tabindex="-1">展示子组件</h2>\n<p>将 <code v-pre>loading</code> 属性设置成 <code v-pre>false</code> 表示内容加载完成，此时会隐藏占位图，并显示 <code v-pre>Skeleton</code> 的子组件。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>段落占位图行数 段落占位图行数</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rowWidth</td>\n<td>段落占位图宽度，可传数组来设置每一行的宽度</td>\n<td><code v-pre>number | string | string[] | number[]</code></td>\n<td><code v-pre>100%</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>是否显示标题占位图</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>titleWidth</td>\n<td>标题占位图宽度</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>avatar</td>\n<td>是否显示头像占位图</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>是否显示骨架屏，传 <code v-pre>false</code> 时会展示子组件内容</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>titleWidth</td>\n<td>标题占位图宽度</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>40%</code></td>\n</tr>\n<tr>\n<td>avatarSize</td>\n<td>头像占位图大小.单位默认 <code v-pre>px</code></td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>32</code></td>\n</tr>\n<tr>\n<td>avatarShape</td>\n<td>头像占位图形状</td>\n<td><code v-pre>\'round\' | \'square\'</code></td>\n<td><code v-pre>\'round\'</code></td>\n</tr>\n</tbody>\n</table>\n')}}}));