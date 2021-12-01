const n={},a='<h1 id="popup" tabindex="-1">Popup</h1>\n<p>Used to display popup windows, information prompts, etc., and supports multiple popup layers to display.</p>\n<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>\n<p>Use <code v-pre>visible</code> property to control the popup layer is displayed.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPopupVisible<span class="token punctuation">,</span> setIsPopupVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">showPopup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setIsPopupVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Open Popup<span class="token punctuation">"</span></span>\n        <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showPopup<span class="token punctuation">}</span></span>\n        <span class="token attr-name">clickable</span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPopupVisible<span class="token punctuation">}</span></span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Content\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="position" tabindex="-1">Position</h2>\n<p>Use <code v-pre>position</code> property to set popup position, which can be set to <code v-pre>top</code>, <code v-pre>bottom</code>,<code v-pre>left</code>,<code v-pre>right</code> or <code v-pre>center</code>.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">\'30%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="round" tabindex="-1">Round</h2>\n<p>Use <code v-pre>round</code> property to set popup rounded style, The popup will add different rounded patterns based on the popup position.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">round</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="mountto" tabindex="-1">MountTo</h2>\n<p>Use <code v-pre>mountTo</code> property to specified mount dom node.</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span>body<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popup</span></span> <span class="token attr-name">visible</span> <span class="token attr-name">mountTo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="use-with-popup.select" tabindex="-1">Use with Popup.Select</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Picker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'Monday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Tuesday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Wednesday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Thursday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Friday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Saturday\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'Sunday\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    &lt;Popup.Select&lt;string>\n      select=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Picker</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select date<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token plain-text">\n    >\n      </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>\n          <span class="token attr-name">clickable</span>\n          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">||</span> <span class="token string">\'Select date\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<h3 id="popup-props" tabindex="-1">Popup Props</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visible</td>\n<td>Whether to show popup</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>renderOnShow</td>\n<td>Whether to render util appeared</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>destroyOnHide</td>\n<td>Whether to unmount child components on hide</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>mountTo</td>\n<td>Specifies a target element where Popup will be mounted</td>\n<td><code v-pre>HTMLElement | () =&gt; HTMLElement | false</code></td>\n<td><code v-pre>() =&gt; document.body</code></td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>Transition duration, unit millisecond</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>300</code></td>\n</tr>\n<tr>\n<td>transitionName</td>\n<td>Transition class name</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>Whether to lock background scroll</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Popup position</td>\n<td><code v-pre>\'top\' | \'bottom\' | \'left\' | \'right\' |\'center\'</code></td>\n<td><code v-pre>\'center\'</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show round corner</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>safeAreaInsetBottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>Custom overlay class</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>Custom overlay style</td>\n<td><code v-pre>CSSProperties</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayCloseable</td>\n<td>Whether to close when overlay is clicked</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n</tbody>\n</table>\n<h4 id="note" tabindex="-1">Note</h4>\n<ul>\n<li>The state of Popup will be preserved at it’s component lifecycle by default, if you wish to open it with a brand new state everytime, set <code v-pre>destroyOnClose</code> on it.</li>\n</ul>\n<h2 id="events" tabindex="-1">Events</h2>\n<table>\n<thead>\n<tr>\n<th>Event name</th>\n<th>Description</th>\n<th>Callback Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onOverlayClick</td>\n<td>Emitted when overlay is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>Emitted when Popup is closing</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeHide</td>\n<td>Emitted when before the hide animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onHide</td>\n<td>Emitted when popup hiding</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterHide</td>\n<td>Emitted when after the hide animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>Emitted when before the show animation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>Execute when popup showing</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAfterShow</td>\n<td>Emitted when after the show animation</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="popup.select-props" tabindex="-1">Popup.Select Props</h2>\n<p>Popup.Select extends Popup props and add the following props:</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>Is it disabled?</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>Option value</td>\n<td><code v-pre>any</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>Default option value</td>\n<td><code v-pre>any</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>select</td>\n<td>popup layer content</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>selectDefaultValuePropName</td>\n<td>Default name</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>defaultValue</code></td>\n</tr>\n<tr>\n<td>selectConfirmTrigger</td>\n<td>Confirm button name</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>onConfirm</code></td>\n</tr>\n<tr>\n<td>selectCancelTrigger</td>\n<td>Cancel button name</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>onCancel</code></td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>Trigger behavior</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>onClick</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>Child element</td>\n<td><code v-pre>ReactNode | (value?: any) =&gt; ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="popupselect-events" tabindex="-1">PopupSelect Events</h2>\n<p>Popup.Select extends Popup events and add the following events:</p>\n<table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td><code v-pre>value</code> 发生改变时触发</td>\n<td><code v-pre>(value: any) =&gt; void</code></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,a as html};