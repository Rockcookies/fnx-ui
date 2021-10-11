(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{AI5K:function(n,a){n.exports={attributes:{},html:'<h1>Checkbox \u590d\u9009\u6846</h1>\n<p>\u7528\u4e8e\u5728\u9009\u4e2d\u548c\u975e\u9009\u4e2d\u72b6\u6001\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u901a\u8fc7 <code>checked</code> \u7ed1\u5b9a\u590d\u9009\u6846\u7684\u52fe\u9009\u72b6\u6001\uff0c<code>defaultChecked</code> \u662f\u590d\u9009\u6846\u9ed8\u8ba4\u7684\u52fe\u9009\u72b6\u6001\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72b6\u6001</h2>\n<p>\u901a\u8fc7\u8bbe\u7f6e <code>disabled</code> \u5c5e\u6027\u53ef\u4ee5\u7981\u7528\u590d\u9009\u6846\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-xing-zhuang-yan-se" tabindex="-1">\u81ea\u5b9a\u4e49\u5f62\u72b6\u989c\u8272</h2>\n<p>\u5c06 <code>iconShape</code> \u5c5e\u6027\u8bbe\u7f6e\u4e3a <code>square</code> \uff0c\u590d\u9009\u6846\u7684\u5f62\u72b6\u4f1a\u53d8\u6210\u65b9\u5f62\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81ea\u5b9a\u4e49\u989c\u8272</h2>\n<p>\u901a\u8fc7 <code>iconCheckedColor</code> \u5c5e\u6027\u8bbe\u7f6e\u9009\u4e2d\u72b6\u6001\u7684\u56fe\u6807\u989c\u8272\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconCheckedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81ea\u5b9a\u4e49\u5927\u5c0f</h2>\n<p>\u901a\u8fc7 <code>iconSize</code> \u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56fe\u6807\u7684\u5927\u5c0f\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">iconSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-tu-biao" tabindex="-1">\u81ea\u5b9a\u4e49\u56fe\u6807</h2>\n<p>\u901a\u8fc7 <code>icon</code> \u81ea\u5b9a\u4e49\u672a\u9009\u4e2d\u56fe\u6807\uff0c<code>checkedIcon</code> \u81ea\u5b9a\u4e49\u9009\u4e2d\u56fe\u6807\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span>\n      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">checkedIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Custom Icon</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-wen-ben-dian-ji" tabindex="-1">\u7981\u7528\u6587\u672c\u70b9\u51fb</h2>\n<p>\u8bbe\u7f6e <code>labelDisabled</code> \u5c5e\u6027\u540e\uff0c\u70b9\u51fb\u56fe\u6807\u4ee5\u5916\u7684\u5185\u5bb9\u4e0d\u4f1a\u89e6\u53d1\u590d\u9009\u6846\u5207\u6362\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Checkbox</span></span> <span class="token attr-name">labelDisabled</span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Checkbox</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u9009\u9879\u7684\u503c</td>\n<td><code>string | number | boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>\u521d\u59cb\u662f\u5426\u9009\u4e2d</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>skipGroup</td>\n<td>\u662f\u5426\u4e0d\u53d7 CheckboxGroup \u63a7\u5236</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u5931\u6548\u72b6\u6001</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u81ea\u5b9a\u672a\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>\u81ea\u5b9a\u4e49\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>\u590d\u9009\u6846\u7684\u56fe\u6807\u5927\u5c0f\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a px</td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>\u9009\u4e2d\u72b6\u6001\u989c\u8272</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>\u56fe\u6807\u4f4d\u7f6e</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>\u56fe\u6807\u5f62\u72b6</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>\u7981\u7528\u6587\u672c\u70b9\u51fb</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkbox-shi-jian" tabindex="-1">Checkbox \u4e8b\u4ef6</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u5f53\u7ed1\u5b9a\u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td><code>(checked: boolean)</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-api" tabindex="-1">CheckboxGroup API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u6307\u5b9a\u9009\u4e2d\u7684\u9009\u9879</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>\u9ed8\u8ba4\u9009\u4e2d\u7684\u9009\u9879</td>\n<td><code>string[] | number[] | boolean[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u63a7\u5236\u6392\u5217\u65b9\u5411</td>\n<td><code>\'vertical\' | \'horizontal\'</code></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>maxCheckedCount</td>\n<td>\u6700\u591a\u9009\u4e2d\u4e2a\u6570</td>\n<td><code>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662f\u5426\u7981\u7528\u6240\u6709\u590d\u9009\u6846</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7684\u56fe\u6807\u5927\u5c0f\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code>px</code></td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7684\u56fe\u6807\u5f62\u72b6</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7981\u7528\u6587\u672c\u70b9\u51fb</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u56fe\u6807\u4f4d\u7f6e</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u9009\u4e2d\u72b6\u6001\u989c\u8272</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u81ea\u5b9a\u672a\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u81ea\u5b9a\u4e49\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="checkboxgroup-shi-jian" tabindex="-1">checkboxGroup \u4e8b\u4ef6</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u5f53\u7ed1\u5b9a\u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6</td>\n<td><code>v: string[] | number[] | boolean[]</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxgroupref-shi-li-fang-fa" tabindex="-1">checkboxGroupRef \u5b9e\u4f8b\u65b9\u6cd5</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u63cf\u8ff0</th>\n<th>\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggleAll()</td>\n<td>\u5207\u6362\u9009\u4e2d\u72b6\u6001\uff0c\u4f20 <code>true</code> \u4e3a\u9009\u4e2d\uff0c<code>false</code> \u4e3a\u53d6\u6d88\u9009\u4e2d\uff0c\u4e0d\u4f20\u53c2\u4e3a\u53d6\u53cd</td>\n<td><code>(options?: { checkAll?: boolean })}</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="checkboxref-shi-li-fang-fa" tabindex="-1">checkboxRef \u5b9e\u4f8b\u65b9\u6cd5</h3>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u540d\u79f0</th>\n<th>\u63cf\u8ff0</th>\n<th>\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle()</td>\n<td>\u5207\u6362 checkbox \u72b6\u6001</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/checkbox/index.zh-CN.md"}}}}]);