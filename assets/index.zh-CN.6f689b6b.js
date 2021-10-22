const n={},a='<h1>Checkbox 复选框</h1>\n<p>用于在选中和非选中状态之间进行切换。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<p>通过 <code>checked</code> 绑定复选框的勾选状态，<code>defaultChecked</code> 是复选框默认的勾选状态。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h2>\n<p>通过设置 <code>disabled</code> 属性可以禁用复选框。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-xing-zhuang-yan-se" tabindex="-1">自定义形状颜色</h2>\n<p>将 <code>iconShape</code> 属性设置为 <code>square</code> ，复选框的形状会变成方形。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h2>\n<p>通过 <code>iconCheckedColor</code> 属性设置选中状态的图标颜色。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconCheckedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h2>\n<p>通过 <code>iconSize</code> 属性可以自定义图标的大小。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h2>\n<p>通过 <code>icon</code> 自定义未选中图标，<code>checkedIcon</code> 自定义选中图标。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>\n      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">checkedIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Custom Icon</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-wen-ben-dian-ji" tabindex="-1">禁用文本点击</h2>\n<p>设置 <code>labelDisabled</code> 属性后，点击图标以外的内容不会触发复选框切换。</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">labelDisabled</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选项的值</td>\n<td><code>string | number | boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>skipGroup</td>\n<td>是否不受 CheckboxGroup 控制</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>失效状态</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定未选中图标</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>自定义选中图标</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>复选框的图标大小，默认单位为 px</td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>选中状态颜色</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>图标位置</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>图标形状</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>禁用文本点击</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkbox-shi-jian" tabindex="-1">Checkbox 事件</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当绑定值变化时触发的事件</td>\n<td><code>(checked: boolean)</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-api" tabindex="-1">CheckboxGroup API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>指定选中的选项</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认选中的选项</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>控制排列方向</td>\n<td><code>\'vertical\' | \'horizontal\'</code></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>maxCheckedCount</td>\n<td>最多选中个数</td>\n<td><code>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用所有复选框</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>所有复选框的图标大小，默认单位为 <code>px</code></td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>所有复选框的图标形状</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>所有复选框禁用文本点击</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>设置所有图标位置</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>设置所有选中状态颜色</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>设置所有自定未选中图标</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>设置所有自定义选中图标</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-shi-jian" tabindex="-1">checkboxGroup 事件</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当绑定值变化时触发的事件</td>\n<td><code>v: string[] | number[] | boolean[]</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxgroupref-shi-li-fang-fa" tabindex="-1">checkboxGroupRef 实例方法</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggleAll()</td>\n<td>切换选中状态，传 <code>true</code> 为选中，<code>false</code> 为取消选中，不传参为取反</td>\n<td><code>(options?: { checkAll?: boolean })}</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxref-shi-li-fang-fa" tabindex="-1">checkboxRef 实例方法</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle()</td>\n<td>切换 checkbox 状态</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>';export{n as attributes,a as html};
