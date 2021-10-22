System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1>Checkbox</h1>\n<p>Used to switch between selected and non-selected states.</p>\n<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>\n<p>Check status through <code>checkd</code> bind check box, <code>defaultChecked</code> is a checkbox default check status.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="disabled" tabindex="-1">Disabled</h2>\n<p>You can disable the checkbox by setting the <code>disabled</code> property.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-shape" tabindex="-1">Custom Shape</h2>\n<p>Set the <code>iconshape</code> property to <code>Square</code> , the shape of the check box will become square.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-color" tabindex="-1">Custom color</h2>\n<p>Set the icon color selected by the <code>iconCheckedColor</code> property setting.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconCheckedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="customize" tabindex="-1">Customize</h2>\n<p>Customize the size of the icon via the <code>iconsize</code> property.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-icon" tabindex="-1">Custom Icon</h2>\n<p>Customized Icon, <code>checkedIcon</code> custom selection icon.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>\n      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">checkedIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Custom Icon</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="labeldisabled" tabindex="-1">Labeldisabled</h2>\n<p>After setting the <code>labeldisabled</code> property, click on the content other than the icon without trigger the check box to switch.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">labelDisabled</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Option value</td>\n<td><code>string | number | boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>Specify whether it is currently selected</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>Initiality is selected</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Failure state</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>skipGroup</td>\n<td>Whether it is not being checked by <code>checkboxgroup</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Customize unchecked icon</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>Customize icon</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>Check the icon size, the default unit is <code>px</code></td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>Select the status color</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>Icon location</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>Icon shape</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>Disable text Click</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkbox-event" tabindex="-1">Checkbox Event</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Events triggered when binding</td>\n<td><code>(checked: boolean)</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-api" tabindex="-1">CheckboxGroup API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Specify the selected option</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>Options selected by default</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Control arrangement</td>\n<td><code>\'vertical\' | \'horizontal\'</code></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>maxCheckedCount</td>\n<td>Maximum number of numbers</td>\n<td><code>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable all check boxes</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>All check box icons, default units for <code>px</code></td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>All check box icons</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>All checkbox Disable text Click</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>Set all icons position</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>Set all selected status colors</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Set all custom icons</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>Set all custom selection icons</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-events" tabindex="-1">checkboxGroup Events</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Events triggered when binding</td>\n<td><code>v:T[]</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxgroupref-instance-method" tabindex="-1">checkboxGroupRef Instance Method</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggleAll()</td>\n<td>Switch selection, pass the <code>true</code> to select,<code>false</code> to cancel the selection, do not call the refuse</td>\n<td><code>(options?: { checkAll?: boolean })}</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxref-instance-method" tabindex="-1">checkboxRef Instance Method</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle()</td>\n<td>Switch<code> Checkbox</code> State</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>')}}}));
