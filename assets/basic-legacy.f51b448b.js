!function(){function e(e,r,n,t,i,a,o){try{var u=e[a](o),c=u.value}catch(l){return void n(l)}u.done?r(c):Promise.resolve(c).then(t,i)}function r(r){return function(){var n=this,t=arguments;return new Promise((function(i,a){var o=r.apply(n,t);function u(r){e(o,i,a,u,c,"next",r)}function c(r){e(o,i,a,u,c,"throw",r)}u(void 0)}))}}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,i,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var i=document.createElement("style");i.innerHTML=".demo-list{position:relative;box-sizing:border-box;height:100vh;padding-top:60px}.demo-list__tab{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:space-around;width:100%;height:60px}.demo-list__list-container{display:none;height:100%;overflow-y:auto}.demo-list__list-container--active{display:block}\n",document.head.appendChild(i),System.register(["./vendor-legacy.1b768d64.js","./index-legacy.32c99374.js","./use-demo-translate-legacy.c00047bb.js","./use-theme-legacy.396131ed.js","./index-legacy.15fc762f.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(e){"use strict";var t,i,a,o,u,c,l,s,f,d,p,h;return{setters:[function(e){t=e.r},function(e){i=e.u,a=e.a,o=e.i,u=e.C,c=e.j},function(e){l=e.u},function(e){s=e.s},function(e){f=e.j,d=e.F,p=e.a,h=e.b},function(){},function(){}],execute:function(){e("default",(function(){var e=n(l(m,"en-US"),1)[0],h=n(t.exports.useState("basicUsage"),2),b=h[0],x=h[1],R=n(i("default"),2),w=R[0],j=R[1],T=n(i(),2),U=T[0],k=T[1],C=t.exports.useCallback(function(){var e=r(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(1e3);case 2:r=y(r.length+10),k(r),j(r.length>30?"finished":"default");case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[k,j]),S=n(i("default"),2),A=S[0],_=S[1],N=n(i(),2),I=N[0],L=N[1],z=t.exports.useCallback(function(){var e=r(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(1e3);case 2:r=y(r.length+10),L(r),r.length<=10?_("error"):_(r.length>30?"finished":"default");case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[L,_]),E=n(i("default"),2),P=E[0],M=E[1],O=n(i(),2),q=O[0],B=O[1],F=t.exports.useCallback(function(){var e=r(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(1e3);case 2:r=y(r.length+10),B(r),M(r.length>30?"finished":"default");case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[B,M]),H=function(e,r){"basicUsage"===e?(j("loading"),C(r)):"errorTip"===e?(_("loading"),z(r)):"pullRefresh"===e&&(M("loading"),F(r))};return f(d,{children:[p("div",{className:g("tab"),children:v.map((function(r){return p(a,{size:"sm",type:b===r?"primary":"default",onClick:function(){var e;b!==(e=r)&&(x(e),H(e,[]))},children:e[r]},r)}))}),p("div",{className:g("list-container",{active:"basicUsage"===b}),children:p(o,{status:w,onLoad:function(){return H("basicUsage",U||[])},children:(U||[]).map((function(e){return p(u,{title:e},e)}))})}),p("div",{className:g("list-container",{active:"errorTip"===b}),children:p(o,{status:A,onLoad:function(){return H("errorTip",I||[])},slots:{error:p("span",{onClick:function(){return H("errorTip",I||[])},children:e.errorText})},children:(I||[]).map((function(e){return p(u,{title:e},e)}))})}),p("div",{className:g("list-container",{active:"pullRefresh"===b}),children:p(c,{refreshing:"loading"===P,onRefresh:function(){return H("pullRefresh",[])},children:p(o,{status:P,onLoad:function(){return H("pullRefresh",q||[])},children:(q||[]).map((function(e){return p(u,{title:e},e)}))})})})]})}));var g=h("demo-list"),m={"zh-CN":{basicUsage:"基础用法",errorTip:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},y=function(e){return new Array(e).fill(0).map((function(e,r){var n=r+1;return n<10?"0".concat(n):"".concat(n)}))},v=["basicUsage","errorTip","pullRefresh"]}}}))}();
