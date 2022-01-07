(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{gCUr:function(n,s){n.exports={attributes:{},html:'<h1 id="stepper-bu-jin-qi" tabindex="-1">Stepper \u6b65\u8fdb\u5668</h1>\n<p>\u6b65\u8fdb\u5668\u7531\u589e\u52a0\u6309\u94ae\u3001\u51cf\u5c11\u6309\u94ae\u548c\u8f93\u5165\u6846\u7ec4\u6210\uff0c\u7528\u4e8e\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u8f93\u5165\u3001\u8c03\u6574\u6570\u5b57\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jian-ting-shi-jian" tabindex="-1">\u76d1\u542c\u4e8b\u4ef6</h2>\n<p>\u53ef\u4ee5\u901a\u8fc7 <code v-pre>onChange</code> \u4e8b\u4ef6\u76d1\u542c\u5230\u8f93\u5165\u503c\u7684\u53d8\u5316\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setValue</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="bu-chang-she-zhi" tabindex="-1">\u6b65\u957f\u8bbe\u7f6e</h2>\n<p>\u901a\u8fc7 <code v-pre>step</code> \u5c5e\u6027\u8bbe\u7f6e\u6bcf\u6b21\u70b9\u51fb\u589e\u52a0\u6216\u51cf\u5c11\u6309\u94ae\u65f6\u53d8\u5316\u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a <code v-pre>1</code>\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-zhi-shu-ru-fan-wei" tabindex="-1">\u9650\u5236\u8f93\u5165\u8303\u56f4</h2>\n<p>\u901a\u8fc7 <code v-pre>min</code> \u548c <code v-pre>max</code> \u5c5e\u6027\u9650\u5236\u8f93\u5165\u503c\u7684\u8303\u56f4\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-zhi-shu-ru-zheng-shu" tabindex="-1">\u9650\u5236\u8f93\u5165\u6574\u6570</h2>\n<p>\u8bbe\u7f6e <code v-pre>integer</code> \u5c5e\u6027\u540e\uff0c\u8f93\u5165\u6846\u5c06\u9650\u5236\u53ea\u80fd\u8f93\u5165\u6574\u6570\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">integer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72b6\u6001</h2>\n<p>\u901a\u8fc7\u8bbe\u7f6e <code v-pre>disabled</code> \u5c5e\u6027\u6765\u7981\u7528\u6b65\u8fdb\u5668\uff0c\u7981\u7528\u72b6\u6001\u4e0b\u65e0\u6cd5\u70b9\u51fb\u6309\u94ae\u6216\u4fee\u6539\u8f93\u5165\u6846\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jin-yong-shu-ru-kuang" tabindex="-1">\u7981\u7528\u8f93\u5165\u6846</h2>\n<p>\u901a\u8fc7\u8bbe\u7f6e <code v-pre>disableInput</code> \u5c5e\u6027\u6765\u7981\u7528\u8f93\u5165\u6846\uff0c\u6b64\u65f6\u6309\u94ae\u4ecd\u7136\u53ef\u4ee5\u70b9\u51fb\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">disableInput</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="gu-ding-xiao-shu-wei-shu" tabindex="-1">\u56fa\u5b9a\u5c0f\u6570\u4f4d\u6570</h2>\n<p>\u901a\u8fc7\u8bbe\u7f6e <code v-pre>precision</code> \u5c5e\u6027\u53ef\u4ee5\u4fdd\u7559\u56fa\u5b9a\u7684\u5c0f\u6570\u4f4d\u6570\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-da-xiao" tabindex="-1">\u81ea\u5b9a\u4e49\u5927\u5c0f</h2>\n<p>\u901a\u8fc7 <code v-pre>inputWidth</code> \u5c5e\u6027\u8bbe\u7f6e\u8f93\u5165\u6846\u5bbd\u5ea6\uff0c\u901a\u8fc7 <code v-pre>buttonSize</code> \u5c5e\u6027\u8bbe\u7f6e\u6309\u94ae\u5927\u5c0f\u548c\u8f93\u5165\u6846\u9ad8\u5ea6\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">inputWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">buttonSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="yuan-jiao-feng-ge" tabindex="-1">\u5706\u89d2\u98ce\u683c</h2>\n<p>\u5c06 <code v-pre>theme</code> \u8bbe\u7f6e\u4e3a <code v-pre>round</code> \u6765\u5c55\u793a\u5706\u89d2\u98ce\u683c\u7684\u6b65\u8fdb\u5668\u3002</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stepper</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stepper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>min</td>\n<td>\u6700\u5c0f\u503c</td>\n<td><code v-pre>number | string | null</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>max</td>\n<td>\u6700\u5927\u503c</td>\n<td><code v-pre>number | string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>\u521d\u59cb\u503c</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u5f53\u524d\u503c</td>\n<td><code v-pre>number | string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>\u8ba1\u6b65\u5668\u6a21\u5f0f\uff0c\u7c7b\u578b\u662f\u5b57\u7b26\u4e32</td>\n<td><code v-pre>\'number\' | \'string\'</code></td>\n<td><code v-pre>\'string\'</code></td>\n</tr>\n<tr>\n<td>step</td>\n<td>\u6b65\u957f\uff0c\u6bcf\u6b21\u70b9\u51fb\u65f6\u6539\u53d8\u7684\u503c</td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>inputWidth</td>\n<td>\u8f93\u5165\u6846\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code v-pre>px</code></td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>32px</code></td>\n</tr>\n<tr>\n<td>buttonSize</td>\n<td>\u6309\u94ae\u5927\u5c0f\u4ee5\u53ca\u8f93\u5165\u6846\u9ad8\u5ea6\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code v-pre>px</code></td>\n<td><code v-pre>number | string</code></td>\n<td><code v-pre>28</code></td>\n</tr>\n<tr>\n<td>precision</td>\n<td>\u56fa\u5b9a\u5c0f\u6570\u4f4d\u6570</td>\n<td><code v-pre>number</code></td>\n<td><code v-pre>1</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662f\u5426\u7981\u7528\u6b65\u8fdb\u5668</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>disablePlus</td>\n<td>\u662f\u5426\u7981\u7528\u589e\u52a0\u6309\u94ae</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>disableMinus</td>\n<td>\u662f\u5426\u7981\u7528\u51cf\u5c11\u6309\u94ae</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>disableInput</td>\n<td>\u662f\u5426\u7981\u7528\u8f93\u5165\u6846</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>showPlus</td>\n<td>\u662f\u5426\u663e\u793a\u589e\u52a0\u6309\u94ae</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>showMinus</td>\n<td>\u662f\u5426\u663e\u793a\u51cf\u5c11\u6309\u94ae</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>allowEmpty</td>\n<td>\u662f\u5426\u5141\u8bb8\u8f93\u5165\u7684\u503c\u4e3a\u7a7a</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>longPress</td>\n<td>\u662f\u5426\u5f00\u542f\u957f\u6309\u624b\u52bf</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>showInput</td>\n<td>\u662f\u5426\u663e\u793a\u8f93\u5165\u6846</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">\u4e8b\u4ef6</h2>\n<table>\n<thead>\n<tr>\n<th>\u4e8b\u4ef6\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u56de\u8c03\u53c2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>\u76d1\u542c\u8f93\u5165\u503c\u7684\u53d8\u5316</td>\n<td><code v-pre>(value: string | number | null)</code></td>\n</tr>\n<tr>\n<td>onStep</td>\n<td>\u70b9\u51fb\u52a0\u51cf\u6309\u94ae\u7684\u56de\u8c03</td>\n<td><code v-pre>(value: T,info: { offset: StepperValue; type: \'minus\' | \'plus\' })</code></td>\n</tr>\n</tbody>\n</table>\n'}}}]);