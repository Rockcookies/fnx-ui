!function(){function e(e,n,r,t,i,a,u){try{var o=e[a](u),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,i)}function n(n){return function(){var r=this,t=arguments;return new Promise((function(i,a){var u=n.apply(r,t);function o(n){e(u,i,a,o,c,"next",n)}function c(n){e(u,i,a,o,c,"throw",n)}o(void 0)}))}}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,i,a=[],u=!0,o=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);u=!0);}catch(c){o=!0,i=c}finally{try{u||null==r.return||r.return()}finally{if(o)throw i}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./use-demo-translate-legacy.a40470d5.js","./index-legacy.a2a3e447.js","./use-theme-legacy.11e698e2.js","./index-legacy.7308b9a9.js","./vendor-legacy.8abf57f5.js","./scroll-legacy.a10306e2.js","./history-utils-legacy.110e5e10.js"],(function(e){"use strict";var t,i,a,u,o,c,l,s,f,h;return{setters:[function(e){t=e.u},function(e){i=e.u,a=e.T,u=e.j,o=e.C,c=e.k},function(e){l=e.s},function(e){s=e.a,f=e.F,h=e.j},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=r(t(d,"en-US"),1)[0],p=r(i("default"),2),v=p[0],y=p[1],m=r(i(),2),b=m[0],x=m[1],w=function(){var e=n(regeneratorRuntime.mark((function e(){var n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:[],y("loading"),e.next=4,l(1e3);case 4:n=g(n.length+8),x(n),y(n.length>=24?"finished":"default");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=r(i("default"),2),j=R[0],T=R[1],k=r(i(),2),S=k[0],U=k[1],A=function(){var e=n(regeneratorRuntime.mark((function e(){var n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:[],T("loading"),e.next=4,l(1e3);case 4:n=g(n.length+8),U(n),n.length<=8?T("error"):T(n.length>=24?"finished":"default");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=r(i("default"),2),C=P[0],I=P[1],L=r(i(!1),2),E=L[0],O=L[1],q=r(i(),2),z=q[0],B=q[1],F=function(){var e=n(regeneratorRuntime.mark((function e(){var n,r,t=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:[],!(r=t.length>1?t[1]:void 0)){e.next=6;break}if(O(!0),"loading"!==C){e.next=6;break}return e.abrupt("return");case 6:return I("loading"),n=g(r?8:n.length+8),e.next=10,l(1e3);case 10:B(n),O(!1),I(n.length>=24?"finished":"default");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s(f,{children:h(a,{children:[s(a.Panel,{title:e.basicUsage,children:s(u,{status:v,onLoad:function(){w(b)},children:(b||[]).map((function(e){return s(o,{title:e},e)}))})},"basicUsage"),s(a.Panel,{title:e.errorTip,children:s(u,{status:j,slots:{error:s("span",{onClick:function(){A(S)},children:e.errorText})},onLoad:function(){A(S)},children:(S||[]).map((function(e){return s(o,{title:e},e)}))})},"errorTip"),s(a.Panel,{title:e.pullRefresh,children:s(c,{refreshing:E,onRefresh:function(){return F(z,!0)},children:s(u,{status:C,onLoad:function(){return F(z,!1)},children:(z||[]).map((function(e){return s(o,{title:e},e)}))})})},"pullRefresh")]})})}));var d={"zh-CN":{basicUsage:"基础用法",errorTip:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},g=function(e){return new Array(e).fill(0).map((function(e,n){var r=n+1;return r<10?"0".concat(r):"".concat(r)}))}}}}))}();