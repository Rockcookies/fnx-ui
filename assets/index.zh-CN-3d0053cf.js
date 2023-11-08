const n={},a='<h1 id="datepicker-shi-jian-xuan-ze-qi" tabindex="-1">DatePicker 时间选择器</h1>\n<p>时间选择器，支持日期、年月、时分等维度，通常与 <a href="#/zh-CN/components/popup">弹出层</a> 组件配合使用。</p>\n<h2 id="xuan-ze-nian-yue-ri" tabindex="-1">选择年月日</h2>\n<p>DatePicker 通过 <code v-pre>columnsLayout</code> 属性来定义需要选择的时间类型，<code v-pre>columnsLayout</code> 为 <code v-pre>year,month,day</code> 表示选择年月日。通过 <code v-pre>maxDate</code> 和 <code v-pre>minDate</code> 属性可以确定可选的时间范围。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day<span class="token punctuation">"</span></span>\n      <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2050</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2010</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-nian-yue" tabindex="-1">选择年月</h2>\n<p>将 <code v-pre>columnsLayout</code> 设置为 <code v-pre>year,month</code> 即可选择年份和月份。通过传入 <code v-pre>formatter</code> 函数，可以对选项文字进行格式化处理。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'year\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'month\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'month\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'day\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'day\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day<span class="token punctuation">"</span></span>\n      <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-shi-jian" tabindex="-1">选择时间</h2>\n<p>使用 TimePicker 即可选择时间（小时和分钟）。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-wan-zheng-shi-jian" tabindex="-1">选择完整时间</h2>\n<p>将 <code v-pre>columnsLayout</code> 设置为 <code v-pre>year,month,day,hour,minute</code> 即可选择完整时间，包括年、月、日和小时、分钟。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day,hour,minute<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-xiang-guo-lu-qi" tabindex="-1">选项过滤器</h2>\n<p>通过传入 <code v-pre>filter</code> 函数，可以对选项数组进行过滤，实现自定义时间间隔。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> values<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'minute\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> values<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> values<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-lie-pai-xu" tabindex="-1">自定义列排序</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'year\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'month\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'month\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'day\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'day\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Date<span class="token punctuation">"</span></span>\n        <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minute,hour,day,month,year<span class="token punctuation">"</span></span>\n        <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3>\n<p>DatePicker 继承类型 <a href="#/zh-CN/components/popup"><code v-pre>PickerBaseProps</code></a>，并新增了如下属性：</p>\n<p>类型 <code v-pre>DatePickerField</code> 的值可以是 <code v-pre>\'year\'</code> | <code v-pre>\'month\'</code> | <code v-pre>\'day\'</code> | <code v-pre>\'hour\'</code> | <code v-pre>\'minute\'</code>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>columnsLayout</td>\n<td>自定义时间类型</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>\'year,month,day\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>初始化日期</td>\n<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>可选的最小时间，精确到分钟</td>\n<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>\n<td>十年前</td>\n<td></td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td>可选的最大时间，精确到分钟</td>\n<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>\n<td>十年后</td>\n<td></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>选项过滤器函数</td>\n<td><code v-pre>(type: DatePickerField, value: number[]) =&gt; number[]</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>选项格式化函数</td>\n<td><code v-pre>(type: DatePickerField, value: string) =&gt; string</code></td>\n<td>-</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h2 id="datepicker-shi-jian" tabindex="-1">DatePicker 事件</h2>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>类型</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当值变化时触发的事件</td>\n<td><code v-pre>(value: Date) =&gt; void</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>点击完成按钮时触发的事件</td>\n<td><code v-pre>(value: Date) =&gt; void</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>点击取消按钮时触发的事件</td>\n<td><code v-pre>() =&gt; void</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id="datepicker-shi-li-fang-fa" tabindex="-1">DatePicker 实例方法</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getValue</td>\n<td>获取当前选项值</td>\n<td><code v-pre>() =&gt; Date</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h2 id="timepicker-props" tabindex="-1">TimePicker Props</h2>\n<p>TimePicker 继承类型 <a href="#/zh-CN/components/popup"><code v-pre>PickerBaseProps</code></a>，并新增了如下属性。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>defaultValue</td>\n<td>初始化日期</td>\n<td><code v-pre>Date</code> | <code v-pre>number</code> | <code v-pre>string</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>minHour</td>\n<td>可选的最小小时</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maxHour</td>\n<td>可选的最大小时</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>23</code></td>\n<td></td>\n</tr>\n<tr>\n<td>minMinute</td>\n<td>可选的最小分钟</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maxMinute</td>\n<td>可选的最大分钟</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>59</code></td>\n<td></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>选项过滤器函数</td>\n<td><code v-pre>(type: \'hour\' | \'minute\', value: number[]) =&gt; number[]</code></td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>选项格式化函数</td>\n<td><code v-pre>(type: \'hour\' | \'minute\', value: string) =&gt; string</code></td>\n<td>-</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h2 id="timepicker-shi-jian" tabindex="-1">TimePicker 事件</h2>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>类型</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当值变化时触发的事件</td>\n<td><code v-pre>(value: string) =&gt; void</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>点击完成按钮时触发的事件</td>\n<td><code v-pre>(value: string) =&gt; void</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>点击取消按钮时触发的事件</td>\n<td><code v-pre>() =&gt; void</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id="timepicker-shi-li-fang-fa" tabindex="-1">TimePicker 实例方法</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>类型</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getValue</td>\n<td>获取当前选项值</td>\n<td><code v-pre>() =&gt; string</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,a as html};
