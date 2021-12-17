(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[73],{"BZU+":function(n,a){n.exports={attributes:{},html:'<h1 id="cell-dan-yuan-ge" tabindex="-1">Cell \u5355\u5143\u683c</h1>\n<p>\u5355\u5143\u683c\u4e3a\u5217\u8868\u4e2d\u7684\u5355\u4e2a\u5c55\u793a\u9879\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>Cell \u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4e0e Cell.Group \u642d\u914d\u4f7f\u7528\uff0cCell.Group \u53ef\u4ee5\u4e3a Cell \u63d0\u4f9b\u4e0a\u4e0b\u5916\u8fb9\u6846\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span> <span class="token attr-name">border</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Content\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="qia-pian-feng-ge" tabindex="-1">\u5361\u7247\u98ce\u683c</h2>\n<p>\u901a\u8fc7 Cell.Group \u7684 <code v-pre>inset</code> \u5c5e\u6027\uff0c\u53ef\u4ee5\u5c06\u5355\u5143\u683c\u8f6c\u6362\u4e3a\u5706\u89d2\u5361\u7247\u98ce\u683c\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span> <span class="token attr-name">inset</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-tu-biao" tabindex="-1">\u81ea\u5b9a\u4e49\u56fe\u6807</h2>\n<p>\u901a\u8fc7 <code v-pre>leftIcon</code> \u548c <code v-pre>rightIcon</code> \u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5de6\u4fa7\u548c\u53f3\u4fa7\u56fe\u6807\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="ji-jian-mo-shi" tabindex="-1">\u6781\u7b80\u6a21\u5f0f</h2>\n<p>\u53ea\u8bbe\u7f6e <code v-pre>children</code> \u65f6\uff0c\u5185\u5bb9\u4f1a\u9760\u5de6\u5bf9\u9f50\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="ke-dian-ji-de" tabindex="-1">\u53ef\u70b9\u51fb\u7684</h2>\n<p>\u901a\u8fc7 <code v-pre>clickable</code> \u5c5e\u6027\u53ef\u4ee5\u4f7f Cell \u7ec4\u4ef6\u6709\u70b9\u51fb\u6548\u679c\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="fen-zu-biao-ti" tabindex="-1">\u5206\u7ec4\u6807\u9898</h2>\n<p>\u901a\u8fc7 Cell.Group \u7684 <code v-pre>title</code> \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u5206\u7ec4\u6807\u9898\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Group 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Group 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="dui-qi" tabindex="-1">\u5bf9\u9f50</h2>\n<p>\u901a\u8fc7 <code v-pre>itemsAlign</code> \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e <code v-pre>top</code> \u3001<code v-pre>middle</code> \u6216 <code v-pre>bottom</code> \u5206\u522b\u8868\u793a\u5782\u76f4\u65b9\u5411\u4e0a\u3001\u4e2d\u3001\u4e0b\u5bf9\u9f50\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">itemsAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">itemsAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">itemsAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<h3 id="cell-props" tabindex="-1">Cell Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n<th>\u7248\u672c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u5de6\u4fa7\u6807\u9898</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>titleProps</td>\n<td>\u5de6\u4fa7\u6807\u9898\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>content</td>\n<td>\u53f3\u4fa7\u5185\u5bb9</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>contentProps</td>\n<td>\u53f3\u4fa7\u5185\u5bb9\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u6807\u9898\u4e0b\u65b9\u7684\u63cf\u8ff0\u4fe1\u606f</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>descriptionProps</td>\n<td>\u6807\u9898\u4e0b\u65b9\u7684\u63cf\u8ff0\u4fe1\u606f\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>leftIcon</td>\n<td>\u5de6\u4fa7\u81ea\u5b9a\u4e49\u56fe\u6807</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>leftIconProps</td>\n<td>\u5de6\u4fa7\u81ea\u5b9a\u4e49\u56fe\u6807\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>rightIcon</td>\n<td>\u53f3\u4fa7\u81ea\u5b9a\u4e49\u56fe\u6807</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>rightIconProps</td>\n<td>\u53f3\u4fa7\u81ea\u5b9a\u4e49\u56fe\u6807\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662f\u5426\u663e\u793a\u5185\u8fb9\u6846</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>itemsAlign</td>\n<td>\u5bf9\u9f50\u65b9\u5f0f</td>\n<td><code v-pre>\'top\'</code> | <code v-pre>\'middle\'</code> | <code v-pre>\'bottom\'</code></td>\n<td><code v-pre>\'top\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>\u662f\u5426\u53ef\u70b9\u51fb</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id="cell.group-props" tabindex="-1">Cell.Group Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n<th>\u7248\u672c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u5206\u7ec4\u6807\u9898</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>titleProps</td>\n<td>\u5206\u7ec4\u6807\u9898\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662f\u5426\u663e\u793a\u5916\u8fb9\u6846</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>inset</td>\n<td>\u662f\u5426\u5c55\u793a\u4e3a\u5706\u89d2\u5361\u7247\u98ce\u683c</td>\n<td><code v-pre>boolean</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>bodyProps</td>\n<td>\u5185\u5bb9\u5c5e\u6027</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n'}}}]);