!function(){var a=["className","html"];function n(a,n){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),o.push.apply(o,e)}return o}function o(a){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){e(a,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(r,n))}))}return a}function e(a,n,o){return n in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o,a}function r(a,n){if(null==a)return{};var o,e,r=function(a,n){if(null==a)return{};var o,e,r={},d=Object.keys(a);for(e=0;e<d.length;e++)o=d[e],n.indexOf(o)>=0||(r[o]=a[o]);return r}(a,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(e=0;e<d.length;e++)o=d[e],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(r[o]=a[o])}return r}System.register(["./vendor-legacy.ea70b7e5.js","./manifest-legacy.1df8d73b.js","./index-legacy.6d649f1e.js"],(function(n,e){"use strict";var d,t,l,c,i,m=document.createElement("style");return m.innerHTML='.markdown{color:var(--fnx-gray-800);font-size:14px;line-height:1.60625}.markdown:not(:first-child):empty{min-height:32px}.markdown h1,.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{margin:42px 0 18px;color:var(--fnx-gray-900);font-weight:500;line-height:1.40625;outline:none}.markdown h1:hover>a[aria-hidden],.markdown h2:hover>a[aria-hidden],.markdown h3:hover>a[aria-hidden],.markdown h4:hover>a[aria-hidden],.markdown h5:hover>a[aria-hidden],.markdown h6:hover>a[aria-hidden]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;width:20px;margin-top:.06em;margin-left:-20px;padding-right:4px;line-height:1}.markdown h1:hover>a[aria-hidden]:after,.markdown h2:hover>a[aria-hidden]:after,.markdown h3:hover>a[aria-hidden]:after,.markdown h4:hover>a[aria-hidden]:after,.markdown h5:hover>a[aria-hidden]:after,.markdown h6:hover>a[aria-hidden]:after{display:inline-block;font-size:20px;vertical-align:middle;content:"#"}.markdown h1:hover>a[aria-hidden] span,.markdown h2:hover>a[aria-hidden] span,.markdown h3:hover>a[aria-hidden] span,.markdown h4:hover>a[aria-hidden] span,.markdown h5:hover>a[aria-hidden] span,.markdown h6:hover>a[aria-hidden] span{display:none}.markdown h1+h1,.markdown h2+h1,.markdown h3+h1,.markdown h4+h1,.markdown h5+h1,.markdown h6+h1,.markdown h1+h2,.markdown h2+h2,.markdown h3+h2,.markdown h4+h2,.markdown h5+h2,.markdown h6+h2,.markdown h1+h3,.markdown h2+h3,.markdown h3+h3,.markdown h4+h3,.markdown h5+h3,.markdown h6+h3,.markdown h1+h4,.markdown h2+h4,.markdown h3+h4,.markdown h4+h4,.markdown h5+h4,.markdown h6+h4,.markdown h1+h5,.markdown h2+h5,.markdown h3+h5,.markdown h4+h5,.markdown h5+h5,.markdown h6+h5,.markdown h1+h6,.markdown h2+h6,.markdown h3+h6,.markdown h4+h6,.markdown h5+h6,.markdown h6+h6{margin-top:16px}.markdown h1{font-size:30px}.markdown h1:first-child{margin-top:0;margin-bottom:32px}.markdown h2{font-size:22px}.markdown h3{font-size:18px}.markdown h4{font-size:16px}.markdown h5,.markdown h6{font-size:14px}.markdown p{margin:16px 0}.markdown *:not(pre) code{padding:2px 5px;color:var(--fnx-danger-color);background-color:var(--fnx-gray-75)}.markdown code{font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace}.markdown hr{margin:16px 0;border:0;border-top:1px solid var(--fnx-gray-800)}.markdown blockquote{margin:16px 0;padding:0 24px;overflow:hidden;color:var(--fnx-gray-700);border-left:4px solid var(--fnx-gray-200)}.markdown ul,.markdown ol{margin:8px 0 8px 32px;padding:0}.markdown ul li,.markdown ol li{margin-bottom:4px}.markdown table{width:100%;border-collapse:collapse}.markdown table th,.markdown table td{padding:10px 24px;border:1px solid var(--fnx-gray-200)}.markdown table th{font-weight:600;white-space:nowrap;background:var(--fnx-gray-100)}.markdown table td:first-child{font-weight:500}.markdown table a svg{display:none}.markdown__table{width:100%;overflow-x:auto}.markdown a{color:var(--fnx-primary-color);text-decoration:none;outline:none;-webkit-transition:opacity .2s;transition:opacity .2s}.markdown a:hover{text-decoration:underline;opacity:.7}.markdown a:active{opacity:.9}.markdown img{max-width:100%}.markdown pre[class*=language-]{position:relative;margin:0;overflow:auto;color:var(--fnx-gray-800);font-size:14px;background-color:var(--fnx-gray-75);border:1px solid var(--fnx-gray-200)}.markdown pre[class*=language-] .token-line:not(:last-child) .plain:empty{display:inline-block;min-height:1em}.markdown pre[class*=language-]+pre[class*=language-],.markdown pre[class*=language-]+table{margin-top:16px}.markdown code[class*=language-]{display:block;margin:1em 0;padding:0 1em;white-space:pre}.markdown code[class*=language-] .token.comment,.markdown code[class*=language-] .token.block-comment,.markdown code[class*=language-] .token.prolog,.markdown code[class*=language-] .token.doctype,.markdown code[class*=language-] .token.cdata{color:var(--fnx-gray-500)}.markdown code[class*=language-] .token.punctuation{color:var(--fnx-gray-600)}.markdown code[class*=language-] .token.property,.markdown code[class*=language-] .token.tag,.markdown code[class*=language-] .token.boolean,.markdown code[class*=language-] .token.number,.markdown code[class*=language-] .token.function-name,.markdown code[class*=language-] .token.constant,.markdown code[class*=language-] .token.symbol,.markdown code[class*=language-] .token.deleted{color:var(--fnx-danger-color)}.markdown code[class*=language-] .token.selector,.markdown code[class*=language-] .token.attr-name,.markdown code[class*=language-] .token.string,.markdown code[class*=language-] .token.char,.markdown code[class*=language-] .token.function,.markdown code[class*=language-] .token.builtin,.markdown code[class*=language-] .token.inserted{color:var(--fnx-success-color)}.markdown code[class*=language-] .token.operator,.markdown code[class*=language-] .token.entity,.markdown code[class*=language-] .token.url,.markdown code[class*=language-] .token.variable{color:#2680eb}.markdown code[class*=language-] .token.atrule,.markdown code[class*=language-] .token.attr-value,.markdown code[class*=language-] .token.keyword,.markdown code[class*=language-] .token.class-name,.markdown code[class*=language-] .token.regex,.markdown code[class*=language-] .token.important{color:#4b9cf5}.markdown code[class*=language-] .language-css .token.string,.markdown code[class*=language-] .style .token.string{color:#2680eb;background:var(--fnx-gray-400)}.markdown code[class*=language-] .token.important{font-weight:400}.markdown code[class*=language-] .token.bold{font-weight:700}.markdown code[class*=language-] .token.italic{font-style:italic}.markdown code[class*=language-] .token.entity{cursor:help}.markdown code[class*=language-] .token.namespace{opacity:.7}\n',document.head.appendChild(m),{setters:[function(a){d=a.r},function(a){t=a.j,l=a.b,c=a.c},function(a){i=a.S}],execute:function(){var e=c("markdown"),m={"zh-CN":{loading:"加载中..."},"en-US":{loading:"Loading..."}};n("M",(function(n){var c=n.className,s=n.html,k=r(n,a),h=d.exports.useContext(i).locale,g=m[h],w=d.exports.useMemo((function(){if(s)return s.replace(/<table>(.|\n)*?<\/table>/g,(function(a){return'<div class="'.concat(e("table"),'">').concat(a,"</div>")}))}),[s]);return t("div",o(o({className:l(e(),c)},k),w?{dangerouslySetInnerHTML:{__html:w}}:{children:g.loading}))})).displayName="Markdown"}}}))}();
