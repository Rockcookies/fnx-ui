const n={},a='<h1 id="field-shu-ru-kuang" tabindex="-1">Field 输入框</h1>\n<p>用户可以在文本框内输入或编辑文字。</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">基础用法</h2>\n<p>可以通过 <code v-pre>value</code> 绑定输入框的值，通过 <code v-pre>placeholder</code> 设置占位提示文字。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Basic Usage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-lei-xing" tabindex="-1">自定义类型</h2>\n<p>根据 <code v-pre>type</code> 属性定义不同类型的输入框，默认值为 text 。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input Label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter tel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-shu-ru-kuang" tabindex="-1">禁用输入框</h2>\n<p>通过 <code v-pre>readOnly</code> 将输入框设置为只读状态，通过 <code v-pre>disabled</code> 将输入框设置为禁用状态。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input Label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">readOnly</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-shi-tu-biao" tabindex="-1">显示图标</h2>\n<p>通过 <code v-pre>leftIcon</code> 和 <code v-pre>rightIcon</code> 配置 <code v-pre>Cell</code> 单元格内两侧的图标，通过设置 <code v-pre>clearable</code> 在输入过程中展示清除图标。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input Label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span>\n        <span class="token attr-name">leftIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Left Icon<span class="token punctuation">"</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span>\n        <span class="token attr-name">clearable</span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span>\n        <span class="token attr-name">rightIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Right Icon<span class="token punctuation">"</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span>\n        <span class="token attr-name">clearable</span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="cuo-wu-ti-shi" tabindex="-1">错误提示</h2>\n<p>设置 <code v-pre>required</code> 属性表示这是一个必填项，可以配合 <code v-pre>help</code> 属性显示对应的错误提示。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input Label<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">help</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Error Prompt<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="cha-ru-an-niu" tabindex="-1">插入按钮</h2>\n<p>通过 <code v-pre>controlSuffix</code> 可以在输入框尾部插入按钮 ,<code v-pre>controlPrefix</code> 可以在输入框头部插入按钮。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span>\n        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Label<span class="token punctuation">"</span></span>\n        <span class="token attr-name">controlSuffix</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">}</span></span>\n        <span class="token attr-name">itemsAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span>\n  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Label<span class="token punctuation">"</span></span>\n  <span class="token attr-name">controlPrefix</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span></span>\n  <span class="token attr-name">itemsAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  mountNode,\n);\n</span></code></pre>\n<h2 id="gao-du-zi-gua-ying" tabindex="-1">高度自适应</h2>\n<p>对于 <code v-pre>&lt;Field.TextArea /&gt;</code>，可以通过 <code v-pre>autosize</code> 属性设置高度自适应。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Textarea label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.TextArea</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token attr-name">autoSize</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-shi-zi-shu-tong-ji" tabindex="-1">显示字数统计</h2>\n<p>设置 <code v-pre>maxlength</code> 和 <code v-pre>showCount</code> 属性后会在底部显示字数统计。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.TextArea</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span>\n            <span class="token attr-name">showCount</span>\n            <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">autoSize</span>\n        <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="shu-ru-kuang-nei-rong-dui-qi" tabindex="-1">输入框内容对齐</h2>\n<p>通过 <code v-pre>inputAlign</code> 属性可以设置输入框内容的对齐方式，可选值为 <code v-pre>left、center、right</code>。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Label<span class="token punctuation">"</span></span> <span class="token attr-name">inputAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>输入框左侧内容</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>labelWidth</td>\n<td>输入框左侧内容宽度</td>\n<td><code v-pre>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>labelAlign</td>\n<td>输入框左侧内容对齐方式</td>\n<td><code v-pre>\'left\' | \'center\' | \'right\'</code></td>\n<td><code v-pre>left</code></td>\n</tr>\n<tr>\n<td>labelProps</td>\n<td>输入框左侧属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>controlPrefix</td>\n<td>输入框头部插入内容</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>controlSuffix</td>\n<td>输入框尾部插入内容</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>controlProps</td>\n<td>输入框插入内容属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>colon</td>\n<td>是否显示 label 后面的冒号</td>\n<td><code v-pre>boolean&gt;</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>required</td>\n<td>是否显示表单必填星号</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用输入框</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>help</td>\n<td>底部错误提示文案，为空时不展示</td>\n<td><code v-pre>string | string[]</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>helpAlign</td>\n<td>底部错误提示文案对齐方式</td>\n<td><code v-pre>\'left\' | \'center\' | \'right\'</code></td>\n<td><code v-pre>left</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>titleProps</td>\n<td>标题属性</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>content</td>\n<td>右侧内容</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>contentProps</td>\n<td>右侧内容属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>标题下方的描述信息</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>descriptionProps</td>\n<td>标题下方的描述信息属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLDivElement</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>leftIcon</td>\n<td>左侧自定义图标</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>leftIconProps</td>\n<td>左侧自定义图标属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rightIcon</td>\n<td>右侧自定义图标</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rightIconProps</td>\n<td>右侧自定义图标属性</td>\n<td><code v-pre>HTMLAttributes&lt;HTMLSpanElement&gt;</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>border</td>\n<td>cell 边框</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>itemsAlign</td>\n<td>对齐方式</td>\n<td><code v-pre>\'top\' | \'middle\' | \'bottom\'</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>是否可点击</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="fieldinput-api" tabindex="-1">FieldInput API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入输入框内容</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认输入框内容</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>初始化的时间</td>\n<td><code v-pre>\'text\' | \'tel\' | \'digit\' | \'number\' | \'password\'</code></td>\n<td><code v-pre>text</code></td>\n</tr>\n<tr>\n<td>inputAlign</td>\n<td>输入框内容的对齐方式</td>\n<td><code v-pre>\'left\' | \'center\' | \'right\'</code></td>\n<td><code v-pre>left</code></td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>是否显示清除按钮</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>clearIcon</td>\n<td>自定义清除按钮</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clearTrigger</td>\n<td>显示清除图标的时机</td>\n<td><code v-pre>\'focus\' | \'always\'</code></td>\n<td><code v-pre>focus</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="fieldtextarea-api" tabindex="-1">FieldTextArea API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入输入框内容</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认输入框内容</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rows</td>\n<td>输入框高度</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>autoSize</td>\n<td>高度自适应</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>showCount</td>\n<td>是否展示字数</td>\n<td><code v-pre>boolean | FieldTextAreaCountFormatter</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">事件</h2>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>当值变化时触发的事件</td>\n<td><code v-pre>(value: string)</code></td>\n</tr>\n<tr>\n<td>onFocus</td>\n<td>输入框获得焦点时触发</td>\n<td><code v-pre>(value: string)</code></td>\n</tr>\n<tr>\n<td>onBlur</td>\n<td>输入框失去焦点时触发</td>\n<td><code v-pre>(value: string)</code></td>\n</tr>\n</tbody>\n</table>\n';export{n as attributes,a as html};
