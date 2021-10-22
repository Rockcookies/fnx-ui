System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1>Dialog</h1>\n<p>The map is pop-up, which is often used for message prompts, messages confirm, or complete specific interactions within the current page.</p>\n<p>The pop-up frame component support function calls and components call two ways.</p>\n<h2 id="function-call" tabindex="-1">Function Call</h2>\n<p><code>Dialog.show</code> as a function, the corresponding modal frame is popped up directly to the page.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">\'Dialog\'</span><span class="token punctuation">,</span>\n  message<span class="token operator">:</span> <span class="token string">\'Dialog Content\'</span><span class="token punctuation">,</span>\n  messageAlign<span class="token operator">:</span> <span class="token string">\'Left\'</span><span class="token punctuation">,</span>\n  confirmText<span class="token operator">:</span> <span class="token string">\'Confirm\'</span><span class="token punctuation">,</span>\n  cancelText<span class="token operator">:</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>；\n\n</code></pre>\n<h2 id="component-call" tabindex="-1">Component Call</h2>\n<p>When you call the <code>Dialog by the component, you can display hidden via</code> Visible` control.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="asynchronous-close" tabindex="-1">Asynchronous close</h2>\n<p>Through <code>onConfirm</code>,<code>onCancel</code> property can be passed into a callback function, you need to perform it to turn it off, and return to <code>false</code>.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">timeoutsMs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeoutsMs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">\'Dialog\'</span><span class="token punctuation">,</span>\n  message<span class="token operator">:</span> <span class="token string">\'Dialog Content\'</span><span class="token punctuation">,</span>\n  messageAlign<span class="token operator">:</span> <span class="token string">\'Left\'</span><span class="token punctuation">,</span>\n  confirmText<span class="token operator">:</span> <span class="token string">\'Confirm\'</span><span class="token punctuation">,</span>\n  cancelText<span class="token operator">:</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">onCancel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">\'Stopped!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="customize" tabindex="-1">Customize</h2>\n<p><code>Children</code> type is <code>ReactNode</code>, accept custom content.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">\'Dialog\'</span><span class="token punctuation">,</span>\n  message<span class="token operator">:</span> <span class="token string">\'Dialog Content\'</span><span class="token punctuation">,</span>\n  messageAlign<span class="token operator">:</span> <span class="token string">\'Left\'</span><span class="token punctuation">,</span>\n  confirmText<span class="token operator">:</span> <span class="token string">\'Confirm\'</span><span class="token punctuation">,</span>\n  cancelText<span class="token operator">:</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="dynamically-loading" tabindex="-1">Dynamically Loading</h2>\n<p>The corresponding <code>Dialog</code> instance will be returned when performing a <code>Dialog</code> method, modify the <code>message</code> attribute on the instance via the<code> update</code> method to realize the effect of dynamic update prompts.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dialog <span class="token operator">=</span> Dialog<span class="token punctuation">.</span><span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//DialogContext</span>\n\n<span class="token keyword">const</span> timerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>NodeJS<span class="token punctuation">.</span>Timeout<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleCountdown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> toast <span class="token operator">=</span> dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  timerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    second<span class="token operator">--</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      toast<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Now it is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      toast<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleCountdown<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Dynamic Loading</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<p><code>Buttonprops</code> Type Reference<code> Button</code> components.</p>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>title</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>Footage</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>width</td>\n<td><code>number | string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>message</td>\n<td>content</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>messageAlign</td>\n<td>Content alignment</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>confirmButton</td>\n<td>Confirm button</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>Confirm button</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirmLoading</td>\n<td>Click to confirm if the load icon is displayed.</td>\n<td><code>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirmButtonProps</td>\n<td>Confirm button properties</td>\n<td><code>ButtonProps</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>cancelButton</td>\n<td>Cancel button</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>Cancel button</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancelLoading</td>\n<td>Confirm that the load is completed</td>\n<td><code>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancelButtonProps</td>\n<td>Cancel button properties</td>\n<td><code>ButtonProps</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>bodyProps</td>\n<td>Content package layer properties</td>\n<td><code>HTMLAttributes</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Whether it is displayed</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show the fillet</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Location</td>\n<td><code>top` | `bottom` | `middle</code></td>\n<td><code>middle</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to display a mask layer</td>\n<td><code>boolean</code></td>\n<td><code>fill</code></td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>Mask layer class name</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>Mask layer style</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayCloseable</td>\n<td>Whether to click the mask layer close</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>renderOnShow</td>\n<td>Whether to render load</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>destroyOnHide</td>\n<td>Whether to close the destruction</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>mountTo</td>\n<td>Specify a mounted node</td>\n<td><code>boolean | element | ()=&gt;element </code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>Transition animation</td>\n<td><code>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionName</td>\n<td>Transition animation name</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>Whether it is forbidden to scroll</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safeAreaInsetBottom</td>\n<td>Do you open the bottom security area adaptation</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="events" tabindex="-1"><Dialog /> Events</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Method Name</th>\n<th>Description</th>\n<th>Parameter</th>\n<th>Return Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onConfirm</td>\n<td>Confirm callback</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>Cancel</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>Trigger when opening the pop-up layer</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onOverlayClick</td>\n<td>Click on the mask layer trigger</td>\n<td><code>(e: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;)</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>Mask layer can click on the mask layer to trigger</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeHide</td>\n<td>Executive trigger before the animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onHide</td>\n<td>Executive trigger in the animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterHide</td>\n<td>Executive trigger after the animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>Execute trigger before entering the field</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>Implementing triggers in the input animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterShow</td>\n<td>Imported animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="dialog-method" tabindex="-1">Dialog Method</h2>\n<p><code>Dialogprops</code> Type as component API.</p>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Method Name</th>\n<th>Description</th>\n<th>Parameter</th>\n<th>Return Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Dialog.show()</td>\n<td>Display pop-up window</td>\n<td><code>DialogProps</code></td>\n<td>Dialog Instance</td>\n</tr>\n<tr>\n<td>Dialog.clearAll()</td>\n<td>Destroy pop-up example</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="dialog-instance-method" tabindex="-1">Dialog Instance Method</h3>\n<pre><code>const useDialog = Dialog.useDialog();\nconst dialog=useDialog.show()\ndialog.update();\ndialog.clear();\n\n</code></pre>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Method Name</th>\n<th>Description</th>\n<th>Parameter</th>\n<th>Return Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialog.update()</td>\n<td>Update display prompt</td>\n<td><code>({ visible: boolean | undefined, ...props }) </code></td>\n<td>toast instance</td>\n</tr>\n<tr>\n<td>dialog.clear()</td>\n<td>Destruction example</td>\n<td>-</td>\n<td>toast instance</td>\n</tr>\n</tbody>\n</table>\n</div>')}}}));
