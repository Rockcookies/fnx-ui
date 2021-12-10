(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{HMO9:function(n,a){n.exports={attributes:{},html:'<h1 id="skeleton-gu-jia-ping" tabindex="-1">Skeleton \u9aa8\u67b6\u5c4f</h1>\n<p>\u7528\u4e8e\u5728\u5185\u5bb9\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u5c55\u793a\u4e00\u7ec4\u5360\u4f4d\u56fe\u5f62\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u901a\u8fc7 <code v-pre>title</code> \u5c5e\u6027\u663e\u793a\u6807\u9898\u5360\u4f4d\u56fe\uff0c\u901a\u8fc7 <code v-pre>rows</code> \u5c5e\u6027\u914d\u7f6e\u5360\u4f4d\u6bb5\u843d\u884c\u6570\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-shi-tou-xiang" tabindex="-1">\u663e\u793a\u5934\u50cf</h2>\n<p>\u901a\u8fc7 <code v-pre>avatar</code> \u5c5e\u6027\u663e\u793a\u5934\u50cf\u5360\u4f4d\u56fe\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zhan-shi-zi-zu-jian" tabindex="-1">\u5c55\u793a\u5b50\u7ec4\u4ef6</h2>\n<p>\u5c06 <code v-pre>loading</code> \u5c5e\u6027\u8bbe\u7f6e\u6210 <code v-pre>false</code> \u8868\u793a\u5185\u5bb9\u52a0\u8f7d\u5b8c\u6210\uff0c\u6b64\u65f6\u4f1a\u9690\u85cf\u5360\u4f4d\u56fe\uff0c\u5e76\u663e\u793a <code v-pre>Skeleton</code> \u7684\u5b50\u7ec4\u4ef6\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">title</span> <span class="token attr-name">avatar</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Children\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Skeleton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>\u6bb5\u843d\u5360\u4f4d\u56fe\u884c\u6570 \u6bb5\u843d\u5360\u4f4d\u56fe\u884c\u6570</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rowWidth</td>\n<td>\u6bb5\u843d\u5360\u4f4d\u56fe\u5bbd\u5ea6\uff0c\u53ef\u4f20\u6570\u7ec4\u6765\u8bbe\u7f6e\u6bcf\u4e00\u884c\u7684\u5bbd\u5ea6</td>\n<td><code v-pre>number | string | string[] | number[]</code></td>\n<td><code v-pre>100%</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u662f\u5426\u663e\u793a\u6807\u9898\u5360\u4f4d\u56fe</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>titleWidth</td>\n<td>\u6807\u9898\u5360\u4f4d\u56fe\u5bbd\u5ea6</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>avatar</td>\n<td>\u662f\u5426\u663e\u793a\u5934\u50cf\u5360\u4f4d\u56fe</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662f\u5426\u663e\u793a\u9aa8\u67b6\u5c4f\uff0c\u4f20 <code v-pre>false</code> \u65f6\u4f1a\u5c55\u793a\u5b50\u7ec4\u4ef6\u5185\u5bb9</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>\u662f\u5426\u5f00\u542f\u52a8\u753b</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>titleWidth</td>\n<td>\u6807\u9898\u5360\u4f4d\u56fe\u5bbd\u5ea6</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>40%</code></td>\n</tr>\n<tr>\n<td>avatarSize</td>\n<td>\u5934\u50cf\u5360\u4f4d\u56fe\u5927\u5c0f.\u5355\u4f4d\u9ed8\u8ba4 <code v-pre>px</code></td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>32</code></td>\n</tr>\n<tr>\n<td>avatarShape</td>\n<td>\u5934\u50cf\u5360\u4f4d\u56fe\u5f62\u72b6</td>\n<td><code v-pre>\'round\' | \'square\'</code></td>\n<td><code v-pre>\'round\'</code></td>\n</tr>\n</tbody>\n</table>\n'}}}]);