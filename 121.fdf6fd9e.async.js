(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{yiN4:function(n,a){n.exports={attributes:{},html:'<h1>Radio \u5355\u9009\u6846</h1>\n<p>\u7528\u4e8e\u5728\u591a\u4e2a\u5907\u9009\u9879\u4e2d\u9009\u4e2d\u5355\u4e2a\u72b6\u6001\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72b6\u6001</h2>\n<p>\u901a\u8fc7 <code>disabled</code> \u5c5e\u6027\u7981\u6b62\u9009\u9879\u5207\u6362\uff0c\u5728 <code>Radio</code> \u4e0a\u8bbe\u7f6e <code>disabled</code> \u53ef\u4ee5\u7981\u7528\u5355\u4e2a\u9009\u9879\uff0c<code>Radio.Group</code>\u53ef\u4ee5\u7981\u7528\u7ec4\u9009\u9879\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-xing-zhuang-yu-yan-se" tabindex="-1">\u81ea\u5b9a\u4e49\u5f62\u72b6\u4e0e\u989c\u8272</h2>\n<p>\u901a\u8fc7 <code>iconShape</code> \u6539\u53d8\u5f62\u72b6\uff1b\u901a\u8fc7 <code>iconCheckedColor</code> \u6539\u53d8\u989c\u8272\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">iconCheckedColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Content\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81ea\u5b9a\u4e49\u5927\u5c0f</h2>\n<p><code>iconSize</code>\u4f20\u5165\u6570\u5b57\u7c7b\u578b\uff0c\u8bbe\u7f6e\u5b57\u4f53\u5927\u5c0f\uff0c\u5355\u4f4d <code>px</code>\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-tu-biao" tabindex="-1">\u81ea\u5b9a\u4e49\u56fe\u6807</h2>\n<p><code>icon</code> \u4e3a <code>ReactNode</code> \u7c7b\u578b\uff0c\u81ea\u5b9a\u4e49\u56fe\u6807\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span>\n      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">iconShape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span>\n      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">}</span></span>\n      <span class="token attr-name">checkedIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-wen-ben-dian-ji" tabindex="-1">\u7981\u7528\u6587\u672c\u70b9\u51fb</h2>\n<p>\u8bbe\u7f6e <code>labelDisabled</code> \u5c5e\u6027\uff0c\u7981\u7528\u6587\u672c\u70b9\u51fb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">labelDisabled</span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="shui-ping-pai-lie" tabindex="-1">\u6c34\u5e73\u6392\u5217</h2>\n<p><code>direction</code> \u63a7\u5236\u6587\u672c\u8ddf\u9009\u6846\u7684\u663e\u793a\u65b9\u5411\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">\u642d\u914d\u5355\u5143\u683c\u7ec4\u4ef6\u4f7f\u7528</h2>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span>\n            <span class="token attr-name">clickable</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Radio Cell<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>radio <span class="token operator">===</span> key<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cell.Group</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="radio-api" tabindex="-1">Radio API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u6839\u636e <code>value</code> \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d</td>\n<td><code>string | number | boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>\u521d\u59cb\u5316\u662f\u5426\u9009\u4e2d</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>skipGroup</td>\n<td>\u662f\u5426\u63a5\u53d7 <code>RadioGroup Props</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662f\u5426\u7981\u7528\u6240\u6709\u590d\u9009\u6846</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>\u590d\u9009\u6846\u7684\u56fe\u6807\u5927\u5c0f\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code>px</code></td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>\u590d\u9009\u6846\u7684\u56fe\u6807\u5f62\u72b6</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>\u590d\u9009\u6846\u7981\u7528\u6587\u672c\u70b9\u51fb</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>\u8bbe\u7f6e\u56fe\u6807\u4f4d\u7f6e</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>\u8bbe\u7f6e\u9009\u4e2d\u72b6\u6001\u989c\u8272</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u8bbe\u7f6e\u81ea\u5b9a\u672a\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="radiogroup-api" tabindex="-1">RadioGroup API</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u6839\u636e <code>value</code> \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d</td>\n<td><code>string | number | boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>\u521d\u59cb\u5316\u662f\u5426\u9009\u4e2d</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u63a7\u5236\u6392\u5217\u65b9\u5411</td>\n<td><code>\'vertical\' | \'horizontal\'</code></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662f\u5426\u7981\u7528\u6240\u6709\u590d\u9009\u6846</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7684\u56fe\u6807\u5927\u5c0f\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a px</td>\n<td><code>string | number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>iconShape</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7684\u56fe\u6807\u5f62\u72b6</td>\n<td><code>\'square\' | \'round\' | \'plain\'</code></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>labelDisabled</td>\n<td>\u6240\u6709\u590d\u9009\u6846\u7981\u7528\u6587\u672c\u70b9\u51fb</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPosition</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u56fe\u6807\u4f4d\u7f6e</td>\n<td><code>\'left\' | \'right\'</code></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>iconCheckedColor</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u9009\u4e2d\u72b6\u6001\u989c\u8272</td>\n<td><code>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u81ea\u5b9a\u672a\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checkedIcon</td>\n<td>\u8bbe\u7f6e\u6240\u6709\u81ea\u5b9a\u4e49\u9009\u4e2d\u56fe\u6807</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="shi-jian" tabindex="-1">\u4e8b\u4ef6</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u9009\u4e2d\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1</td>\n<td><code>(checked: boolean)</code></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="radiogroup-shi-jian" tabindex="-1">RadioGroup \u4e8b\u4ef6</h2>\n<div class=\'markdown__table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u503c\u6539\u53d8\u65f6\u89e6\u53d1\uff0c\u7c7b\u578b\u53d6\u51b3\u4e8e <code>value</code> \u7684\u7c7b\u578b</td>\n<td><code>(v: T)</code></td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/radio/index.zh-CN.md"}}}}]);