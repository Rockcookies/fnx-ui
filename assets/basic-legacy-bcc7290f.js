!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var s=r.call(t,n||"default");if("object"!==e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,c,i,o=[],l=!0,u=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=c.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){u=!0,s=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-1bd67aeb.js","./demo-doge-reverse-legacy-81457475.js","./demo-doge-legacy-e77d121b.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-d2f65a62.js","./misc-legacy-f59b2e17.js","./use-unmounted-ref-legacy-0c7689ef.js","./index-legacy-9193fde6.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./config-component-props-legacy-b5279410.js","./index-legacy-c68971b2.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./constants-legacy-732fdcb2.js","./event-legacy-359ec6a3.js","./use-merged-prop-legacy-58e913d1.js","./use-merged-prop-ref-legacy-7929f994.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-2d265d79.js","./index-legacy-184360dc.js","./scroll-legacy-32145838.js","./touch-helper-legacy-732fd97d.js"],(function(e,t){"use strict";var c,i,o,l,u,a,f,p,g,d;return{setters:[function(e){c=e.r,i=e.j,o=e.a},function(e){l=e.d},function(e){u=e.d},function(e){a=e.u},function(e){f=e.B},function(e){p=e.s},function(e){g=e.u},function(e){d=e.P},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".demo-pull-refresh{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;height:100vh;padding-top:60px}.demo-pull-refresh__tab{position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;width:100%;height:60px}.demo-pull-refresh__pull-refresh{display:none;height:100%;overflow-y:auto}.demo-pull-refresh__pull-refresh--active{display:block}.demo-pull-refresh__doge{width:100px;height:100px;margin:8px auto 0}.demo-pull-refresh__content{padding:var(--fnx-padding-md) 0 0 var(--fnx-padding-md)}\n",document.head.appendChild(t),e("default",(function(){var e=s(a(m,"en-US"),1)[0],t=s(c.useState("basicUsage"),2),o=t[0],h=t[1],j=s(c.useState(0),2),x=j[0],v=j[1],O=s(c.useState({}),2),S=O[0],w=O[1],T=x>0?"".concat(e.text,": ").concat(x):e.try,N=g(),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;w((function(t){return n(n({},t),{},r({},e,!0))})),p(t).then((function(){N.current||(v((function(e){return e+1})),w((function(t){return n(n({},t),{},r({},e,!1))})))}))};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:y("tab"),children:b.map((function(t){return i.jsx(f,{size:"sm",type:o===t?"primary":"default",onClick:function(){var e;o!==(e=t)&&h(e)},children:e[t]},t)}))}),i.jsx(d,{className:y("pull-refresh",{active:"basicUsage"===o}),refreshing:S.basicUsage,onRefresh:function(){return P("basicUsage")},children:i.jsx("p",{className:y("content"),children:T})}),i.jsx(d,{className:y("pull-refresh",{active:"successTip"===o}),refreshing:S.successTip,onRefresh:function(){return P("successTip")},slots:{success:e.successTip},children:i.jsx("p",{className:y("content"),children:T})}),i.jsx(d,{className:y("pull-refresh",{active:"customTips"===o}),refreshing:S.customTips,onRefresh:function(){return P("customTips")},indicatorHeight:80,slots:{pulling:function(e){return i.jsx("img",{className:y("doge"),src:u,style:{transform:"scale(".concat(e/80,")")}})},loosing:i.jsx("img",{className:y("doge"),src:u}),loading:i.jsx("img",{className:y("doge"),src:l})},children:i.jsx("p",{className:y("content"),children:T})})]})}));var y=o("demo-pull-refresh"),m={"zh-CN":{basicUsage:"基础用法",try:"下拉试试",text:"刷新次数",success:"刷新成功",successTip:"成功提示",customTips:"自定义提示"},"en-US":{basicUsage:"Basic Usage",try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}},b=["basicUsage","successTip","customTips"]}}}))}();
