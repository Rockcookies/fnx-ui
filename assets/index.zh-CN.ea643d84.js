const n={},s='<h1 id="sticky-nian-xing-bu-ju" tabindex="-1">Sticky 粘性布局</h1>\n<p><code v-pre>Sticky</code> 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<p>将内容包裹在 <code v-pre>Sticky</code> 组件内即可。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xi-ding-ju-chi" tabindex="-1">吸顶距离</h2>\n<p>通过 <code v-pre>offsetTop</code> 属性可以设置组件在吸顶时与顶部的距离。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zhi-ding-rong-qi" tabindex="-1">指定容器</h2>\n<p>通过 <code v-pre>containerRef</code> 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">\'150px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">containerRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="di-duan-pian-yi" tabindex="-1">底端偏移</h2>\n<p>通过 <code v-pre>offsetBottom</code> 属性设置底端偏移。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sticky</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Offset Bottom</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sticky</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>zIndex</td>\n<td>吸顶时的 z-index</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>container</td>\n<td>容器对应的 HTML 节点</td>\n<td><code v-pre>Element | (() =&gt; Element undefined null) | null</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>offsetTop</td>\n<td>吸顶时与顶部的距离</td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>吸底时与底部的距离</td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>吸附位置</td>\n<td><code v-pre>\'top\' | \'bottom\'</code></td>\n<td><code v-pre>top</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">事件</h2>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当吸顶状态改变时触发</td>\n<td><code v-pre>option: { fixed: boolean }</code></td>\n</tr>\n<tr>\n<td>onScroll</td>\n<td>滚动时触发</td>\n<td><code v-pre>option: { fixed: boolean; scrollTop: number }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="stickyref-shi-li-fang-fa" tabindex="-1">stickyRef 实例方法</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>isFixed()</td>\n<td>返回组件的状态</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,s as html};
