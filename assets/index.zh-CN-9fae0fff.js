const n={},a=`<h1 id="radio-dan-xuan-kuang" tabindex="-1">Radio 单选框</h1>
<p>用于在多个备选项中选中单个状态。</p>
<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>
<p>通过 <code v-pre>value</code> 绑定单选框勾选状态。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h2>
<p>通过设置 <code v-pre>disabled</code> 属性可以禁用单选框。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-xing-zhuang-yu-yan-se" tabindex="-1">自定义形状与颜色</h2>
<p>将 <code v-pre>iconShape</code> 属性设置为 <code v-pre>square</code> ，单选框的形状会变成方形。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Option C
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h2>
<p>通过 <code v-pre>iconCheckedColor</code> 属性设置选中状态的图标颜色。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">iconCheckedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h2>
<p>通过 <code v-pre>iconSize</code> 属性可以自定义图标的大小。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">14</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Option A
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h2>
<p>通过 <code v-pre>icon</code> 自定义未选中图标，<code v-pre>checkedIcon</code> 自定义选中图标。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="jin-yong-wen-ben-dian-ji" tabindex="-1">禁用文本点击</h2>
<p>设置 <code v-pre>labelDisabled</code> 属性后，点击图标以外的内容不会触发单选框切换。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">labelDisabled</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="shui-ping-pai-lie" tabindex="-1">水平排列</h2>
<p>将 <code v-pre>direction</code> 属性设置为 <code v-pre>horizontal</code> 后，单选框组会变成水平排列。</p>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">labelDisabled</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Option C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">搭配单元格组件使用</h2>
<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fnx-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>radio<span class="token punctuation">,</span> setRadio<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token string">'C'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>
            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span>
            <span class="token attr-name">clickable</span>
            <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Option </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
            <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>radio <span class="token operator">===</span> key<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">setRadio</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="api" tabindex="-1">API</h2>
<h3 id="radio-basic-props" tabindex="-1">Radio Basic Props</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>是否禁用单选框</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>direction</td>
<td>选项排列方向</td>
<td><code v-pre>'vertical'</code> | <code v-pre>'horizontal'</code></td>
<td><code v-pre>'vertical'</code></td>
<td></td>
</tr>
<tr>
<td>checkedIcon</td>
<td>自定义选中图标</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>自定未选中图标</td>
<td><code v-pre>ReactNode</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>iconSize</td>
<td>图标大小，默认单位为 <code v-pre>px</code></td>
<td><code v-pre>string</code> | <code v-pre>number</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>iconPosition</td>
<td>图标位置</td>
<td><code v-pre>'left'</code> | <code v-pre>'right'</code></td>
<td><code v-pre>'left'</code></td>
<td></td>
</tr>
<tr>
<td>iconShape</td>
<td>图标形状</td>
<td><code v-pre>'square'</code> | <code v-pre>'round'</code> | <code v-pre>'plain'</code></td>
<td><code v-pre>'square'</code></td>
<td></td>
</tr>
<tr>
<td>iconCheckedColor</td>
<td>选中状态颜色</td>
<td><code v-pre>string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>labelDisabled</td>
<td>禁用文本点击</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="radio-props" tabindex="-1">Radio Props</h3>
<p>Radio Props 继承自 Radio Basic Props，并新增了如下 Props。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>选项标识</td>
<td><code v-pre>string</code> | <code v-pre>number</code> | <code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>checked</td>
<td>指定当前是否选中</td>
<td><code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultChecked</td>
<td>初始是否选中</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td></td>
</tr>
<tr>
<td>skipGroup</td>
<td>是否与复选框组绑定</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="radio-shi-jian" tabindex="-1">Radio 事件</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>当绑定值变化时触发的事件</td>
<td><code v-pre>(checked: boolean) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="radio.group-props" tabindex="-1">Radio.Group Props</h3>
<p>Radio.Group Props 继承自 Radio Basic Props，并新增了如下 Props。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>指定选中的选项</td>
<td><code v-pre>string</code> | <code v-pre>number</code> | <code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>默认选中的选项</td>
<td><code v-pre>string</code> | <code v-pre>number</code> | <code v-pre>boolean</code></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="radio.group-shi-jian" tabindex="-1">Radio.Group 事件</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>类型</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onChange</td>
<td>当绑定值变化时触发的事件</td>
<td><code v-pre>(value: string | number | boolean) =&gt; void</code></td>
<td></td>
</tr>
</tbody>
</table>
`;export{n as attributes,a as html};