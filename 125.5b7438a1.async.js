(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{"97fC":function(n,s){n.exports={attributes:{},html:'<h1 id="sticky-nian-xing-bu-ju" tabindex="-1">Sticky \u7c98\u6027\u5e03\u5c40</h1>\n<p><code v-pre>Sticky</code> \u7ec4\u4ef6\u4e0e CSS \u4e2d position: sticky \u5c5e\u6027\u5b9e\u73b0\u7684\u6548\u679c\u4e00\u81f4\uff0c\u5f53\u7ec4\u4ef6\u5728\u5c4f\u5e55\u8303\u56f4\u5185\u65f6\uff0c\u4f1a\u6309\u7167\u6b63\u5e38\u7684\u5e03\u5c40\u6392\u5217\uff0c\u5f53\u7ec4\u4ef6\u6eda\u51fa\u5c4f\u5e55\u8303\u56f4\u65f6\uff0c\u59cb\u7ec8\u4f1a\u56fa\u5b9a\u5728\u5c4f\u5e55\u9876\u90e8\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u5c06\u5185\u5bb9\u5305\u88f9\u5728 <code v-pre>Sticky</code> \u7ec4\u4ef6\u5185\u5373\u53ef\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xi-ding-ju-chi" tabindex="-1">\u5438\u9876\u8ddd\u79bb</h2>\n<p>\u901a\u8fc7 <code v-pre>offsetTop</code> \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u7ec4\u4ef6\u5728\u5438\u9876\u65f6\u4e0e\u9876\u90e8\u7684\u8ddd\u79bb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zhi-ding-rong-qi" tabindex="-1">\u6307\u5b9a\u5bb9\u5668</h2>\n<p>\u901a\u8fc7 <code v-pre>containerRef</code> \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u7ec4\u4ef6\u7684\u5bb9\u5668\uff0c\u9875\u9762\u6eda\u52a8\u65f6\uff0c\u7ec4\u4ef6\u4f1a\u59cb\u7ec8\u4fdd\u6301\u5728\u5bb9\u5668\u8303\u56f4\u5185\uff0c\u5f53\u7ec4\u4ef6\u5373\u5c06\u8d85\u51fa\u5bb9\u5668\u5e95\u90e8\u65f6\uff0c\u4f1a\u56fa\u5b9a\u5728\u5bb9\u5668\u7684\u5e95\u90e8\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">\'150px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">containerRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="di-duan-pian-yi" tabindex="-1">\u5e95\u7aef\u504f\u79fb</h2>\n<p>\u901a\u8fc7 <code v-pre>offsetBottom</code> \u5c5e\u6027\u8bbe\u7f6e\u5e95\u7aef\u504f\u79fb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>zIndex</td>\n<td>\u5438\u9876\u65f6\u7684 z-index</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>container</td>\n<td>\u5bb9\u5668\u5bf9\u5e94\u7684 HTML \u8282\u70b9</td>\n<td><code v-pre>Element | (() =&gt; Element undefined null) | null</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>offsetTop</td>\n<td>\u5438\u9876\u65f6\u4e0e\u9876\u90e8\u7684\u8ddd\u79bb</td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>\u5438\u5e95\u65f6\u4e0e\u5e95\u90e8\u7684\u8ddd\u79bb</td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>\u5438\u9644\u4f4d\u7f6e</td>\n<td><code v-pre>\'top\' | \'bottom\'</code></td>\n<td><code v-pre>top</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">\u4e8b\u4ef6</h2>\n<table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u5f53\u5438\u9876\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1</td>\n<td><code v-pre>option: { fixed: boolean }</code></td>\n</tr>\n<tr>\n<td>onScroll</td>\n<td>\u6eda\u52a8\u65f6\u89e6\u53d1</td>\n<td><code v-pre>option: { fixed: boolean; scrollTop: number }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="stickyref-shi-li-fang-fa" tabindex="-1">stickyRef \u5b9e\u4f8b\u65b9\u6cd5</h3>\n<table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u63cf\u8ff0</th>\n<th>\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>isFixed()</td>\n<td>\u8fd4\u56de\u7ec4\u4ef6\u7684\u72b6\u6001</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n'}}}]);