(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{krN6:function(n,a){n.exports={attributes:{},html:'<h1 id="datepicker-shi-jian-xuan-ze-qi" tabindex="-1">DatePicker \u65f6\u95f4\u9009\u62e9\u5668</h1>\n<p>\u65f6\u95f4\u9009\u62e9\u5668\uff0c\u652f\u6301\u65e5\u671f\u3001\u5e74\u6708\u3001\u65f6\u5206\u7b49\u7ef4\u5ea6\uff0c\u901a\u5e38\u4e0e\u5f39\u51fa\u5c42\u7ec4\u4ef6\u914d\u5408\u4f7f\u7528\u3002</p>\n<h2 id="xuan-ze-nian-yue-ri" tabindex="-1">\u9009\u62e9\u5e74\u6708\u65e5</h2>\n<p><code v-pre>DatePicker</code> \u901a\u8fc7 <code v-pre>columnsLayout</code> \u5c5e\u6027\u6765\u5b9a\u4e49\u9700\u8981\u9009\u62e9\u7684\u65f6\u95f4\u7c7b\u578b\uff0c <code v-pre>columnsLayout</code> \u4e3a <code v-pre>year,month,day</code> \u8868\u793a\u9009\u62e9\u5e74\u6708\u65e5\u3002\u901a\u8fc7 <code v-pre>maxDate</code> \u548c <code v-pre>minDate</code> \u5c5e\u6027\u53ef\u4ee5\u786e\u5b9a\u53ef\u9009\u7684\u65f6\u95f4\u8303\u56f4\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day<span class="token punctuation">"</span></span>\n      <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2050</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2010</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-nian-yue" tabindex="-1">\u9009\u62e9\u5e74\u6708</h2>\n<p>\u5c06 <code v-pre>columnsLayout</code> \u8bbe\u7f6e\u4e3a <code v-pre>year,month</code> \u5373\u53ef\u9009\u62e9\u5e74\u4efd\u548c\u6708\u4efd\u3002\u901a\u8fc7\u4f20\u5165 <code v-pre>formatter</code> \u51fd\u6570\uff0c\u53ef\u4ee5\u5bf9\u9009\u9879\u6587\u5b57\u8fdb\u884c\u683c\u5f0f\u5316\u5904\u7406\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'year\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'month\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'month\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'day\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'day\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'hour\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'hour\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month<span class="token punctuation">"</span></span>\n      <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-shi-jian" tabindex="-1">\u9009\u62e9\u65f6\u95f4</h2>\n<p>\u5c06 <code v-pre>columnsLayout</code> \u8bbe\u7f6e\u4e3a <code v-pre>hour,minute</code> \u5373\u53ef\u9009\u62e9\u65f6\u95f4\uff08\u5c0f\u65f6\u548c\u5206\u949f\uff09\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hour,minute<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-ze-wan-zheng-shi-jian" tabindex="-1">\u9009\u62e9\u5b8c\u6574\u65f6\u95f4</h2>\n<p>\u5c06 <code v-pre>columnsLayout</code> \u8bbe\u7f6e\u4e3a <code v-pre>year,month,day,hour,minute</code> \u5373\u53ef\u9009\u62e9\u5b8c\u6574\u65f6\u95f4\uff0c\u5305\u62ec\u5e74\u3001\u6708\u3001\u65e5\u548c\u5c0f\u65f6\u3001\u5206\u949f\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span>\n      <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year,month,day,hour,minute<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xuan-xiang-guo-lu-qi" tabindex="-1">\u9009\u9879\u8fc7\u6ee4\u5668</h2>\n<p>\u901a\u8fc7\u4f20\u5165 <code v-pre>filter</code> \u51fd\u6570\uff0c\u53ef\u4ee5\u5bf9\u9009\u9879\u6570\u7ec4\u8fdb\u884c\u8fc7\u6ee4\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u65f6\u95f4\u95f4\u9694\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> values</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'minute\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> values<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> values<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-lie-pai-xu" tabindex="-1">\u81ea\u5b9a\u4e49\u5217\u6392\u5e8f</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'year\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'month\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'month\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'day\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'day\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'hour\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token string">\'hour\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker.TimePicker</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select Time<span class="token punctuation">"</span></span>\n        <span class="token attr-name">columnsLayout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minute,hour,day,month,year<span class="token punctuation">"</span></span>\n        <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>formatter<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>defaultValue</td>\n<td>\u521d\u59cb\u5316\u7684\u65f6\u95f4</td>\n<td><code v-pre>string | number | Date</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td>\u53ef\u9009\u7684\u6700\u5927\u65f6\u95f4\uff0c\u7cbe\u786e\u5230\u5206\u949f</td>\n<td><code v-pre>Date | number | string</code></td>\n<td><code v-pre>\u5341\u5e74\u540e</code></td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>\u53ef\u9009\u7684\u6700\u5c0f\u65f6\u95f4\uff0c\u7cbe\u786e\u5230\u5206\u949f</td>\n<td><code v-pre>Date | number | string</code></td>\n<td><code v-pre>\u5341\u5e74\u524d</code></td>\n</tr>\n<tr>\n<td>columnsLayout</td>\n<td>\u81ea\u5b9a\u4e49\u65f6\u95f4\u7c7b\u578b</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>\'year,month,day\'</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90e8\u680f\u6807\u9898</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662f\u5426\u663e\u793a\u52a0\u8f7d\u72b6\u6001</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>toolbar</td>\n<td>\u81ea\u5b9a\u4e49\u5de5\u5177\u680f</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>toolbarPosition</td>\n<td>\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u4f4d\u7f6e</td>\n<td><code v-pre>top bottom</code></td>\n<td><code v-pre>top</code></td>\n</tr>\n<tr>\n<td>optionHeight</td>\n<td>\u9009\u9879\u9ad8\u5ea6,\u5355\u4f4d\u9ed8\u8ba4 <code v-pre>px</code></td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>44</code></td>\n</tr>\n<tr>\n<td>visibleOptionsCount</td>\n<td>\u53ef\u89c1\u7684\u9009\u9879\u4e2a\u6570</td>\n<td><code v-pre>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>\u5207\u6362\u9009\u9879\u52a8\u753b\u65f6\u95f4</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>confirmButton</td>\n<td>\u786e\u8ba4\u6309\u94ae</td>\n<td><code v-pre>ReactNode</code></td>\n<td><code v-pre>\u786e\u8ba4</code></td>\n</tr>\n<tr>\n<td>cancelButton</td>\n<td>\u53d6\u6d88\u6309\u94ae</td>\n<td><code v-pre>ReactNode</code></td>\n<td><code v-pre>\u53d6\u6d88</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="timepicker-api" tabindex="-1">TimePicker API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>maxHour</td>\n<td>\u53ef\u9009\u7684\u6700\u5927\u5c0f\u65f6</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>23</code></td>\n</tr>\n<tr>\n<td>minHour</td>\n<td>\u53ef\u9009\u7684\u6700\u5c0f\u5c0f\u65f6</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>minMinute</td>\n<td>\u53ef\u9009\u7684\u6700\u5c0f\u5206\u949f</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>maxMinute</td>\n<td>\u53ef\u9009\u7684\u6700\u5927\u5206\u949f</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>59</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u9876\u90e8\u680f\u6807\u9898</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662f\u5426\u663e\u793a\u52a0\u8f7d\u72b6\u6001</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>toolbar</td>\n<td>\u81ea\u5b9a\u4e49\u5de5\u5177\u680f</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>toolbarPosition</td>\n<td>\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u4f4d\u7f6e</td>\n<td><code v-pre>top bottom</code></td>\n<td><code v-pre>top</code></td>\n</tr>\n<tr>\n<td>optionHeight</td>\n<td>\u9009\u9879\u9ad8\u5ea6,\u9ed8\u8ba4 px</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>44</code></td>\n</tr>\n<tr>\n<td>visibleOptionsCount</td>\n<td>\u53ef\u89c1\u7684\u9009\u9879\u4e2a\u6570</td>\n<td><code v-pre>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>transitionDuration</td>\n<td>\u5207\u6362\u9009\u9879\u52a8\u753b\u65f6\u95f4</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>confirmButton</td>\n<td>\u786e\u8ba4\u6309\u94ae</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancelButton</td>\n<td>\u53d6\u6d88\u6309\u94ae</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>\u521d\u59cb\u5316\u7684\u65f6\u95f4</td>\n<td><code v-pre>string |number | Date</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="datepicker-shi-jian" tabindex="-1">DatePicker \u4e8b\u4ef6</h2>\n<p>\u7c7b\u578b <code v-pre>DatePickerField</code> \u7684\u503c\u53ef\u4ee5\u662f <code v-pre>\'year\' | \'month\' | \'day\' | \'hour\' | \'minute\'</code>;</p>\n<table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filter</td>\n<td>\u9009\u9879\u8fc7\u6ee4\u5668\u51fd\u6570</td>\n<td><code v-pre>(type: DatePickerField, value: number[])</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>\u9009\u9879\u683c\u5f0f\u5316\u51fd\u6570</td>\n<td><code v-pre>(type: DatePickerField, value: string)</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5f53\u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>\u9762\u677f\u5f53\u524d\u7684 Date</td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>\u9762\u677f\u5f53\u524d\u7684 Date</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="timepicker-shi-jian" tabindex="-1">TimePicker \u4e8b\u4ef6</h2>\n<table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filter</td>\n<td>\u9009\u9879\u8fc7\u6ee4\u5668\u51fd\u6570</td>\n<td><code v-pre>(type: DatePickerField, value: number[]) =&gt; number[]</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>\u9009\u9879\u683c\u5f0f\u5316\u51fd\u6570</td>\n<td><code v-pre>(type: DatePickerField, value: string) =&gt; string;</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5f53\u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>\u9762\u677f\u5f53\u524d\u7684 Date</td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>\u9762\u677f\u5f53\u524d\u7684 Date</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id="datepickerref-shi-li-fang-fa" tabindex="-1">DatePickerRef \u5b9e\u4f8b\u65b9\u6cd5</h3>\n<table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u63cf\u8ff0</th>\n<th>\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getValue()</td>\n<td>\u83b7\u53d6\u5f53\u524d\u9009\u9879\u7684\u503c</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n'}}}]);