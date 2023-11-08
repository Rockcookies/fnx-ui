const n={},s='<h1 id="circle-huan-xing-jin-du-tiao" tabindex="-1">Circle 环形进度条</h1>\n<p>圆环形的进度条组件，支持进度渐变动画。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<p><code v-pre>progress</code> 属性表示动画过程中的实时进度。当 <code v-pre>progress</code> 发生变化时会以 <code v-pre>speed</code> 的速度变化到新的值。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="kuan-du-ding-zhi" tabindex="-1">宽度定制</h2>\n<p>通过 <code v-pre>strokeWidth</code> 属性来控制进度条宽度。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">strokeWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="yan-se-ding-zhi" tabindex="-1">颜色定制</h2>\n<p>通过 <code v-pre>strokeColor</code> 属性来控制进度条颜色， <code v-pre>trailColor</code> 属性来控制轨道颜色。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span> <span class="token attr-name">trailColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff0000<span class="token punctuation">"</span></span> <span class="token attr-name">strokeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ffc0cb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jian-bian-se" tabindex="-1">渐变色</h2>\n<p><code v-pre>strokeColor</code> 属性支持传入对象格式来定义渐变色。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span>\n      <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">strokeColor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token string-property property">\'0%\'</span><span class="token operator">:</span> <span class="token string">\'#3fecff\'</span><span class="token punctuation">,</span>\n        <span class="token string-property property">\'100%\'</span><span class="token operator">:</span> <span class="token string">\'#6149f6\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="ni-shi-zhen-fang-xiang" tabindex="-1">逆时针方向</h2>\n<p>将 <code v-pre>clockwise</code> 设置为 <code v-pre>false</code>，进度会从逆时针方向开始。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">clockwise</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="da-xiao-ding-zhi" tabindex="-1">大小定制</h2>\n<p>通过 <code v-pre>size</code> 属性设置圆环直径。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Circle</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Circle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>progress</td>\n<td>当前进度</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>100</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>圆环直径，默认单位为 px</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>100px</code></td>\n</tr>\n<tr>\n<td>strokeColor</td>\n<td>进度条颜色，传入对象格式可以定义渐变色</td>\n<td><code v-pre>string | object</code></td>\n<td><code v-pre>#1989fa</code></td>\n</tr>\n<tr>\n<td>strokeLinecap</td>\n<td>进度条端点的形状</td>\n<td><code v-pre>\'butt\' | \'round\' | \'square\'</code></td>\n<td><code v-pre>round</code></td>\n</tr>\n<tr>\n<td>trailColor</td>\n<td>轨道颜色</td>\n<td><code v-pre>string</code></td>\n<td><code v-pre>-</code></td>\n</tr>\n<tr>\n<td>fill</td>\n<td>填充颜色</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>speed</td>\n<td>动画速度</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>-</code></td>\n</tr>\n<tr>\n<td>strokeWidth</td>\n<td>进度条宽度</td>\n<td><code v-pre>string | number</code></td>\n<td><code v-pre>5</code></td>\n</tr>\n<tr>\n<td>clockWise</td>\n<td>是否顺时针增加</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>gapDegree</td>\n<td>进度条缺口角度</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>0</code></td>\n</tr>\n<tr>\n<td>gapPosition</td>\n<td>进度条缺口位置</td>\n<td><code v-pre>\'top\' |\'right\' | \'bottom\' | \'left\'</code></td>\n<td><code v-pre>top</code></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,s as html};
