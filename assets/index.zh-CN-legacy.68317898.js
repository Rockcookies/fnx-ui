System.register([],(function(n){"use strict";return{execute:function(){n("attributes",{}),n("html",'<h1 id="uploader-wen-jian-shang-chuan" tabindex="-1">Uploader 文件上传</h1>\n<p>用于将本地的图片或文件上传，并在上传过程中展示预览图和上传进度。</p>\n<h2 id="ji-ben-yong-fa" tabindex="-1">基本用法</h2>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="wen-jian-yu-lan" tabindex="-1">文件预览</h2>\n<p>通过 <code v-pre>value</code> 可以绑定已经上传的文件列表,并展示文件列表的预览图。<code v-pre>showFileList</code> 为 <code v-pre>false</code> 隐藏预览图。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> statusValue <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'failed\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'leaf\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'leaf\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span> <span class="token attr-name">showFileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="shang-chuan-zhuang-tai" tabindex="-1">上传状态</h2>\n<p>通过 <code v-pre>status</code> 属性可以标识上传状态，<code v-pre>uploading</code> 表示上传中，<code v-pre>failed</code> 表示上传失败，<code v-pre>done</code> 表示上传完成。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> statusValue<span class="token operator">:</span> detailFileProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'failed\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'uploading\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xian-zhi-shang-chuan-shu-liang" tabindex="-1">限制上传数量</h2>\n<p>通过 <code v-pre>maxCount</code> 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-shang-chuan-yang-shi" tabindex="-1">自定义上传样式</h2>\n<p>通过子元素可以自定义上传区域的样式。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">Custom Upload</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Uploader</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-yu-lan-yang-shi" tabindex="-1">自定义预览样式</h2>\n<p>通过 <code v-pre>slots</code> 插槽可以自定义覆盖在预览区域上方的内容。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> statusValue <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'failed\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'leaf\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'leaf\'</span><span class="token punctuation">,</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span>\n      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>statusValue<span class="token punctuation">}</span></span>\n      <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token function-variable function">filePreviewCover</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>file <span class="token operator">&amp;&amp;</span> file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n        fileList<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Custom Upload</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="shang-chuan-qian-zhi-chu-li" tabindex="-1">上传前置处理</h2>\n<p>通过传入 <code v-pre>onRead</code> 函数可以在上传前进行校验和处理，返回 <code v-pre>file[]</code> 表示校验通过，返回 <code v-pre>[]</code> 表示校验失败。支持返回 <code v-pre>Promise</code> 对 <code v-pre>file</code> 对象进行自定义处理，例如压缩图片，判断文件类型是否符合要求。</p>\n<pre class="language-tsx"><code class="language-tsx" v-pre><span class="token keyword">import</span> <span class="token punctuation">{</span> Uploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> defaultValue <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    url<span class="token operator">:</span> <span class="token string">\'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg\'</span><span class="token punctuation">,</span>\n    status<span class="token operator">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleBeforeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fileList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> file <span class="token operator">=</span> e<span class="token punctuation">.</span>file<span class="token punctuation">;</span>\n  file<span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>\n  <span class="token function">setChange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>change<span class="token punctuation">,</span> e<span class="token punctuation">.</span>file<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Uploader</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onRead</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleBeforeChange<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<p>组件<code v-pre>&lt;Uploader/&gt;</code> 类型是<code v-pre>UploaderProps</code>，继承 <code v-pre>UploaderFile</code>。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>accept</td>\n<td>允许上传的文件类型</td>\n<td><code v-pre>string |string[]</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否开启图片多选，部分安卓机型不支持</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用文件上传</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>false</code></td>\n</tr>\n<tr>\n<td>showFileList</td>\n<td>是否支持预览图</td>\n<td><code v-pre>boolean</code></td>\n<td><code v-pre>true</code></td>\n</tr>\n<tr>\n<td>maxCount</td>\n<td>文件上传数量限制</td>\n<td><code v-pre>number | string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>文件列表</td>\n<td><code v-pre>T[]</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认文件列表</td>\n<td><code v-pre>T[]</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>capture</td>\n<td>图片选取模式，可选值为 <code v-pre>camera</code> (直接调起摄像头)</td>\n<td><code v-pre>string | boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>slots</td>\n<td>自定义上传列表项</td>\n<td><code v-pre>UploaderSlots</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id="shi-jian" tabindex="-1">事件</h2>\n<p>类型 <code v-pre>UploaderFileItem</code> 继承 <code v-pre>UploaderFile</code> 且除去 <code v-pre>uid</code> 属性。\n类型 <code v-pre>UploaderMarkedFile</code> 继承 <code v-pre>UploaderFile</code> 且除去 <code v-pre>uid</code>，<code v-pre>file</code> 属性。</p>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>上传文件之前触发</td>\n<td><code v-pre>(e:UploaderMarkedFile)</code></td>\n</tr>\n<tr>\n<td>onRead</td>\n<td>点击上传文件时触发(已获取文件)</td>\n<td><code v-pre>(e:UploaderFileItem)</code></td>\n</tr>\n<tr>\n<td>onUpload</td>\n<td>上传文件时触发(已上传)</td>\n<td><code v-pre>(e:UploaderFileItem)</code></td>\n</tr>\n<tr>\n<td>onPreview</td>\n<td>点击预览图时触发</td>\n<td><code v-pre>(e:UploaderMarkedFile)</code></td>\n</tr>\n<tr>\n<td>onRemove</td>\n<td>删除文件预览时触发</td>\n<td><code v-pre>(e:UploaderMarkedFile)</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="slots-shu-ju-jie-gou" tabindex="-1">Slots 数据结构</h3>\n<p>类型 <code v-pre>UploaderSlots</code> 继承 <code v-pre>UploaderFile。</code></p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePreviewCover</td>\n<td>预览文件备注</td>\n<td><code v-pre>(item: UploaderMarkedFile&lt;T&gt;) =&gt; ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>fileList</td>\n<td>预览内容</td>\n<td><code v-pre>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id="uploaderfile-shu-ju-jie-gou" tabindex="-1">UploaderFile 数据结构</h3>\n<p>类型 <code v-pre>UploaderFileStatus</code> 中 <code v-pre>uploading</code> 表示上传中，<code v-pre>failed</code> 表示上传失败，<code v-pre>done</code> 表示上传完成。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uid</td>\n<td>唯一标识符，不设置时会自动生成</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>文件名</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>文件大小</td>\n<td><code v-pre>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>文件类型</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lastModified</td>\n<td>文件最后修改</td>\n<td><code v-pre>number</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>removable</td>\n<td>是否可移除</td>\n<td><code v-pre>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>content</td>\n<td>内容</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>status</td>\n<td>文件状态</td>\n<td><code v-pre>UploaderFileStatus</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>thumbnail</td>\n<td>缩略图地址</td>\n<td><code v-pre>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>message</td>\n<td>信息</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>file</td>\n<td>文件</td>\n<td><code v-pre>File</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>url</td>\n<td>下载地址</td>\n<td><code v-pre>string</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n')}}}));
