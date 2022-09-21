System.register([],(function(n,s){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1 id="notify-xiao-xi-tong-zhi" tabindex="-1">Notify 消息通知</h1>\n<p>在页面顶部展示消息提示，支持函数调用和组件调用两种方式。</p>\n<h2 id="han-shu-diao-yong" tabindex="-1">函数调用</h2>\n<p><code v-pre>Notify</code> 是一个函数，调用后会直接在页面中弹出相应的消息提示。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">\'Message\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zu-jian-diao-yong" tabindex="-1">组件调用</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notify</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notify</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="tong-zhi-lei-xing" tabindex="-1">通知类型</h2>\n<p>支持 <code v-pre>primary</code>、<code v-pre>success</code>、<code v-pre>warning</code>、<code v-pre>danger</code> 四种通知类型，默认为 <code v-pre>danger</code>。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">\'Message\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">\'Message\'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">\'primary\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-tong-zhi" tabindex="-1">自定义通知</h2>\n<p>自定义消息通知的颜色和展示时长。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        Notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token operator">:</span> <span class="token string">\'Message\'</span><span class="token punctuation">,</span>\n          duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n          color<span class="token operator">:</span> <span class="token string">\'#ad0000\'</span><span class="token punctuation">,</span>\n          background<span class="token operator">:</span> <span class="token string">\'#ffe1e1\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="dong-tai-geng-xin-ti-shi" tabindex="-1">动态更新提示</h2>\n<p>执行 <code v-pre>Notify</code> 方法时会返回对应的 <code v-pre>Notify</code> 实例，通过<code v-pre>update</code>方法修改实例上的 <code v-pre>message</code> 属性可以实现动态更新提示的效果。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Notify<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> notify <span class="token operator">=</span> Notify<span class="token punctuation">.</span><span class="token function">useToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> clearCountdown <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> loading <span class="token operator">=</span> notify<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    second<span class="token operator">--</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      loading<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">clearCountdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      loading<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="notifyprops-api" tabindex="-1">NotifyProps API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>类型</td>\n<td><code v-pre>\'primary\' | \'success\' | \'warning\' | \'danger\'</code></td>\n<td><code v-pre>danger</code></td>\n</tr>\n<tr>\n<td>message</td>\n<td>文本内容，支持通过<code v-pre>\\n</code>换行</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>danger</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>类型</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>danger</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>类型</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>danger</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>类型</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>danger</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示弹出层</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>是否展示圆角</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>位置</td>\n<td><code v-pre>top` | `bottom` | `middle </code></td>\n<td><code v-pre>middle</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>是否显示遮罩层</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>遮罩层类名</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>遮罩层样式</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayCloseable</td>\n<td>是否点击遮罩层关闭</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>renderOnShow</td>\n<td>是否渲染加载</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>destroyOnHide</td>\n<td>是否关闭销毁</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>mountTo</td>\n<td>指定挂载的节点</td>\n<td><code v-pre>boolean | element | ()=&gt;element </code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>过渡动画</td>\n<td><code v-pre>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionName</td>\n<td>过渡动画类名</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>是否禁止滚动</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>safeAreaInsetBottom</td>\n<td>是否开启底部安全区适配</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1"><Notify /> 事件</h2>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onShow</td>\n<td>打开弹出层时触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onOverlayClick</td>\n<td>点击遮罩层触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>(遮罩层可点击时)点击遮罩层触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeHide</td>\n<td>出场动画前执行触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onHide</td>\n<td>出场动画中执行触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterHide</td>\n<td>出场动画后执行触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>进场动画前执行触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>进场动画中执行触发</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterShow</td>\n<td>进场动画后执行触发</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id="notify-fang-fa" tabindex="-1">Notify 方法</h3>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Toast.show</td>\n<td>展示加载提示</td>\n<td><code v-pre>(message: string | NotifyProps, container?: HTMLElement)</code></td>\n<td><code v-pre>toast 实例</code></td>\n</tr>\n<tr>\n<td>Toast.clearAll</td>\n<td>关闭提示</td>\n<td>-</td>\n<td><code v-pre>void</code></td>\n</tr>\n<tr>\n<td>Toast.allowMultiple</td>\n<td>允许同时存在多个 <code v-pre>Toast</code></td>\n<td><code v-pre>(allow: boolean)</code></td>\n<td><code v-pre>void</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="notify-shi-li-fang-fa" tabindex="-1">Notify 实例方法</h3>\n<pre><code v-pre>const notify = Notify.useNotify();\nconst loading=notify.show()\nloading.update();\nloading.clear();\n\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Toast.update()</td>\n<td>更新展示提示</td>\n<td><code v-pre>ToastProps</code></td>\n<td>toast 实例</td>\n</tr>\n<tr>\n<td>Toast.clear()</td>\n<td>销毁 <code v-pre>Toast</code> 实例</td>\n<td>-</td>\n<td>toast 实例</td>\n</tr>\n</tbody>\n</table>\n')}}}));
