!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["className","children"];function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",d="suspendedYield",g="executing",v="completed",m={};function j(){}function b(){}function w(){}var x={};f(x,u,(function(){return this}));var O=Object.getPrototypeOf,L=O&&O(O(R([])));L&&L!==o&&i.call(L,u)&&(x=L);var E=w.prototype=j.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(o,a,c,u){var l=p(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function k(t,r,n){var o=y;return function(i,a){if(o===g)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?v:d,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function T(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function R(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},P(S.prototype),f(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),f(E,s,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},n}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-1bd67aeb.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-2e96c741.js","./use-safe-state-legacy-aa82aec4.js","./index-legacy-9193fde6.js","./index-legacy-a3abde2a.js","./misc-legacy-f59b2e17.js","./config-component-props-legacy-b5279410.js","./use-merged-prop-ref-legacy-7929f994.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-2d265d79.js","./index-legacy-184360dc.js","./event-legacy-359ec6a3.js","./scroll-legacy-32145838.js","./style-legacy-d9487b87.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./constants-legacy-732fdcb2.js","./use-unmounted-ref-legacy-0c7689ef.js","./use-merged-prop-legacy-58e913d1.js","./touch-helper-legacy-732fd97d.js","./use-controlled-state-legacy-c2785d55.js","./use-creation-legacy-9d7fb02d.js","./index-legacy-b06911b5.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./index-legacy-99ec861d.js","./use-on-popup-open-legacy-8b2802da.js","./raf-legacy-b5db696e.js","./react-legacy-8aa83272.js","./use-get-state-legacy-ade4366f.js","./index-legacy-c68971b2.js"],(function(t,n){"use strict";var i,c,s,f,h,p,y,d,g,v,m,j,b,w,x,O,L,E,P,S;return{setters:[function(t){i=t.r,c=t.j,s=t.c,f=t.a},function(t){h=t.u},function(t){p=t.C},function(t){y=t.u},function(t){d=t.P},function(t){g=t.T},function(t){v=t.n,m=t.s},function(t){j=t.c},function(t){b=t.u},function(t){w=t.u},function(t){x=t.L},function(t){O=t.u},function(t){L=t.b},function(t){E=t.g},function(t){P=t.g,S=t.i},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("default",(function(){var t=l(h(_,"en-US"),1)[0],e=l(y("default"),2),n=e[0],i=e[1],a=l(y(),2),u=a[0],s=a[1],f=function(){var t=o(r().mark((function t(){var e,n=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:[],i("loading"),t.next=4,m(1e3);case 4:e=C(e.length+8),s(e),i(e.length>=24?"finished":"default");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=l(y("default"),2),j=v[0],b=v[1],w=l(y(),2),x=w[0],O=w[1],L=function(){var t=o(r().mark((function t(){var e,n=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:[],b("loading"),t.next=4,m(1e3);case 4:e=C(e.length+8),O(e),e.length<=8?b("error"):b(e.length>=24?"finished":"default");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=l(y("default"),2),P=E[0],S=E[1],k=l(y(!1),2),T=k[0],R=k[1],A=l(y(),2),I=A[0],G=A[1],U=function(){var t=o(r().mark((function t(){var e,n,o=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]?o[0]:[],!(n=o.length>1?o[1]:void 0)){t.next=6;break}if(R(!0),"loading"!==P){t.next=6;break}return t.abrupt("return");case 6:return S("loading"),e=C(n?8:e.length+8),t.next=10,m(1e3);case 10:G(e),R(!1),S(e.length>=24?"finished":"default");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.jsx(c.Fragment,{children:c.jsxs(g,{children:[c.jsx(g.Panel,{title:t.basicUsage,children:c.jsx(N,{status:n,onLoad:function(){f(u)},children:(u||[]).map((function(t){return c.jsx(p,{title:t},t)}))})},"basicUsage"),c.jsx(g.Panel,{title:t.errorTip,children:c.jsx(N,{status:j,slots:{error:c.jsx("span",{onClick:function(){L(x)},children:t.errorText})},onLoad:function(){L(x)},children:(x||[]).map((function(t){return c.jsx(p,{title:t},t)}))})},"errorTip"),c.jsx(g.Panel,{title:t.pullRefresh,children:c.jsx(d,{refreshing:T,onRefresh:function(){return U(I,!0)},children:c.jsx(N,{status:P,onLoad:function(){return U(I,!1)},children:(I||[]).map((function(t){return c.jsx(p,{title:t},t)}))})})},"pullRefresh")]})})}));var n=f("fnx-list"),k=j({status:"default",offset:50,direction:"down",slots:{},onLoad:v,immediateCheck:!0,scrollListenTo:null}),T=i.forwardRef((function(t,r){var o=O("list"),f=l(k(t),2),h=f[0],p=f[1],y=p.className,d=p.children,v=u(p,e),m=h.status,j=h.direction,T=h.slots,N=b(h),_=i.useRef(null),C=i.useRef(),R=i.useRef(null),A=i.useContext(g.PanelContext).active,I=b(A),G=i.useCallback((function(){if("default"===N.current.status){var t=_.current,e=C.current,r=R.current;if(e&&r&&t&&!1!==I.current){var n=P(e);if(!(n.height<=0||S(t))){var o=P(r),i=N.current,a=i.direction,c=i.offset;("up"===a?n.top-o.top<=c:o.bottom-n.bottom<=c)&&N.current.onLoad()}}}}),[N,I]),U=i.useMemo((function(){return{element:_.current,scrollParent:C.current||null,check:G}}),[G]);i.useImperativeHandle(r,(function(){return U}),[U]),i.useEffect((function(){var t=_.current;if(t){var e=N.current,r=e.scrollListenTo,n=e.immediateCheck;"function"==typeof r?C.current=r():r&&(C.current=r);var o=C.current||E(t);return C.current=o,L(o,"scroll",G,{passive:!0}),n&&G(),function(){o.removeEventListener("scroll",G)}}}),[G,N]),w((function(){G()}),[G,A,m]);var F=c.jsx("div",{ref:R,className:n("placeholder")});return c.jsxs("div",a(a({className:s(n([m]),y),role:"feed","aria-busy":"loading"===m},v),{},{ref:_,children:["down"===j?d:F,function(){var t=T[m];if("loading"===m&&null==t&&(t=c.jsx(x,{size:16,text:o.loading})),t)return c.jsx("div",{className:n("indicator"),children:t})}(),"up"===j?d:F]}))}));T.displayName="List";var N=T,_={"zh-CN":{basicUsage:"基础用法",errorTip:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},C=function(t){return new Array(t).fill(0).map((function(t,e){var r=e+1;return r<10?"0".concat(r):"".concat(r)}))}}}}))}();
