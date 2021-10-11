(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{pltG:function(n,s){n.exports={attributes:{},html:'<h1>List \u5217\u8868</h1>\n<p>\u7011\u5e03\u6d41\u6eda\u52a8\u52a0\u8f7d\uff0c\u7528\u4e8e\u5c55\u793a\u957f\u5217\u8868\uff0c\u5f53\u5217\u8868\u5373\u5c06\u6eda\u52a8\u5230\u5e95\u90e8\u65f6\uff0c\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u5e76\u52a0\u8f7d\u66f4\u591a\u5217\u8868\u9879\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>List \u7ec4\u4ef6\u901a\u8fc7 <code>status</code> \u63a7\u5236\u52a0\u8f7d\u72b6\u6001\uff0c\u5f53\u7ec4\u4ef6\u6eda\u52a8\u5230\u5e95\u90e8\u65f6\uff0c\u4f1a\u89e6\u53d1 <code>onLoad</code> \u4e8b\u4ef6\u3002\u6b64\u65f6\u53ef\u4ee5\u53d1\u8d77\u5f02\u6b65\u64cd\u4f5c\u5e76\u66f4\u65b0\u6570\u636e\uff0c\u6570\u636e\u66f4\u65b0\u5b8c\u6bd5\u540e\uff0c\u5c06 <code>status</code> \u8bbe\u7f6e\u6210 <code>default</code> \u5373\u53ef\u3002\u82e5\u6570\u636e\u5df2\u5168\u90e8\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u5219\u76f4\u63a5\u5c06 <code>status</code> \u8bbe\u7f6e\u6210 <code>finished</code> \u5373\u53ef\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>status<span class="token punctuation">,</span> setStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>listItems<span class="token punctuation">,</span> setListItem<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">\'loading\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setListItem</span><span class="token punctuation">(</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">\'finished\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span> <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoad<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>listItems<span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="cuo-wu-ti-shi" tabindex="-1">\u9519\u8bef\u63d0\u793a</h2>\n<p>\u82e5\u5217\u8868\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u5c06 <code>status</code> \u8bbe\u7f6e\u6210 <code>error</code> \u5373\u53ef\u663e\u793a\u9519\u8bef\u63d0\u793a\uff0c\u7528\u6237\u70b9\u51fb\u9519\u8bef\u63d0\u793a\u540e\u4f1a\u91cd\u65b0\u89e6\u53d1 <code>onLoad</code> \u4e8b\u4ef6\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">const</span> <span class="token function-variable function">errorIndicator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Error</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ListRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>ListRef<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span>\n      <span class="token attr-name">indicator</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> error<span class="token operator">:</span> errorIndicator <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ListRef<span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          ListRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span><span class="token plain-text">\n        Instance Trigger\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xia-la-shua-xin" tabindex="-1">\u4e0b\u62c9\u5237\u65b0</h2>\n<p><code>List</code> \u7ec4\u4ef6\u53ef\u4ee5\u4e0e <code>&lt;PullRefresh /&gt;</code> \u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u4e0b\u62c9\u5237\u65b0\u7684\u6548\u679c\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">const</span> <span class="token punctuation">[</span>refreshing<span class="token punctuation">,</span> setRefreshing<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>refreshStatus<span class="token punctuation">,</span> setRefreshStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>refreshListItems<span class="token punctuation">,</span> setRefreshListItem<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> refreshCountRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onRefresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setRefreshing</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  refreshCountRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token function">onLoadRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onLoadRefresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setRefreshStatus</span><span class="token punctuation">(</span><span class="token string">\'loading\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  refreshCountRef<span class="token punctuation">.</span>current <span class="token operator">=</span> refreshCountRef<span class="token punctuation">.</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setRefreshListItem</span><span class="token punctuation">(</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> refreshCountRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>refreshCountRef<span class="token punctuation">.</span>current <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setRefreshStatus</span><span class="token punctuation">(</span><span class="token string">\'finished\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">setRefreshStatus</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">setRefreshing</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PullRefresh</span></span> <span class="token attr-name">onRefresh</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onRefresh<span class="token punctuation">}</span></span> <span class="token attr-name">refreshing</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>refreshing<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>refreshStatus<span class="token punctuation">}</span></span> <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadRefresh<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>refreshListItems<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PullRefresh</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>status</td>\n<td>\u5217\u8868\u72b6\u6001</td>\n<td><code>\'default\' | \'loading\' | \'finished\' | \'error\'</code></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>\u6eda\u52a8\u6761\u4e0e\u5e95\u90e8\u8ddd\u79bb\u5c0f\u4e8e <code>offset</code> \u65f6\u89e6\u53d1<code>onLoad</code>\u4e8b\u4ef6</td>\n<td><code>number</code></td>\n<td><code>50</code></td>\n</tr>\n<tr>\n<td>slots</td>\n<td>\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u4e0d\u540c\u72b6\u6001\u7684\u63d0\u793a</td>\n<td><code>ListSlots</code></td>\n<td><code>{loading: \'\',finished:\'\',error:\'\'}</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u6eda\u52a8\u89e6\u53d1\u52a0\u8f7d\u7684\u65b9\u5411\uff0c\u53ef\u9009\u503c\u4e3a<code>up</code></td>\n<td><code> \'up\' | \'down\'</code></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>immediateCheck</td>\n<td>\u662f\u5426\u5728\u521d\u59cb\u5316\u65f6\u7acb\u5373\u6267\u884c\u6eda\u52a8\u4f4d\u7f6e\u68c0\u67e5</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>scrollListenTo</td>\n<td>\u662f\u5426\u5728\u521d\u59cb\u5316\u65f6\u7acb\u5373\u6267\u884c\u6eda\u52a8\u4f4d\u7f6e\u68c0\u67e5</td>\n<td><code> HTMLElement | Window | (() =&gt; HTMLElement | Window) | null</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="shi-jian" tabindex="-1">\u4e8b\u4ef6</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onLoad</td>\n<td>\u6eda\u52a8\u6761\u4e0e\u5e95\u90e8\u8ddd\u79bb\u5c0f\u4e8e <code>offset</code> \u65f6\u89e6\u53d1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="slots-shu-ju-jie-gou" tabindex="-1">slots \u6570\u636e\u7ed3\u6784</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u5217\u8868\u5185\u5bb9</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u81ea\u5b9a\u4e49\u5e95\u90e8\u52a0\u8f7d\u4e2d\u63d0\u793a</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>finished</td>\n<td>\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5b8c\u6210\u540e\u7684\u63d0\u793a\u6587\u6848</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>error</td>\n<td>\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5931\u8d25\u540e\u7684\u63d0\u793a\u6587\u6848</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="listref-shi-li-fang-fa" tabindex="-1">ListRef \u5b9e\u4f8b\u65b9\u6cd5</h3>\n<p>\u901a\u8fc7 <code>ref</code> \u53ef\u4ee5\u83b7\u53d6\u5230 <code>List</code> \u5b9e\u4f8b\u5e76\u8c03\u7528\u5b9e\u4f8b\u65b9\u6cd5\u3002</p>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u65b9\u6cd5\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u53c2\u6570</th>\n<th>\u8fd4\u56de\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>check()</td>\n<td>\u5f53 <code>status</code> \u4e0d\u7b49\u4e8e <code>false</code> \u65f6 \u68c0\u67e5\u5f53\u524d\u7684\u6eda\u52a8\u4f4d\u7f6e\uff0c\u82e5\u5df2\u6eda\u52a8\u81f3\u5e95\u90e8\uff0c\u5219\u4f1a\u89e6\u53d1 <code>onLload</code> \u4e8b\u4ef6</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/list/index.zh-CN.md"}}}}]);