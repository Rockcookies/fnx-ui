!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s,a,l=[],c=!0,o=!1;try{if(s=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){o=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(o)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-1bd67aeb.js","./index-legacy-21a5cae2.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-d8f846ae.js","./index-legacy-d13587e9.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./config-component-props-legacy-b5279410.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-c68971b2.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./misc-legacy-f59b2e17.js","./use-merged-prop-ref-legacy-7929f994.js","./use-merged-prop-legacy-58e913d1.js"],(function(t,n){"use strict";var r,i,s,a,l,c,o;return{setters:[function(e){r=e.j,i=e.a},function(e){s=e.D},function(e){a=e.u},function(e){l=e.I},function(e){c=e.C,o=e.R},null,null,null,null,null,null,null,null,null,null],execute:function(){var d=document.createElement("style");d.textContent=".demo-image .fnx-col{margin-bottom:20px}.demo-image .text{margin-top:5px;font-size:14px;text-align:center}\n",document.head.appendChild(d),t("default",(function(){var t=e(a(x,"en-US"),1)[0],n=j.map((function(e,t){return r.jsxs(c,{span:8,children:[r.jsx(l,{fit:e,width:"100%",height:"27vw",src:u},"".concat(t,"-fit")),r.jsx("div",{className:"text",children:e})]},"".concat(t,"-col-fit"))})),i=j.map((function(e,t){return r.jsxs(c,{span:8,children:[r.jsx(l,{round:!0,fit:e,width:"100%",height:"27vw",src:u},"".concat(t,"-round")),r.jsx("div",{className:"text",children:e})]},"".concat(t,"-col-round"))}));return r.jsxs(r.Fragment,{children:[r.jsx(s,{cardMode:!0,title:t.basicUsage,children:r.jsx("div",{className:h("row"),children:r.jsx(l,{width:"100",height:"100",src:u})})}),r.jsx(s,{cardMode:!0,title:t.fitMode,children:r.jsx(o,{gutter:20,children:n})}),r.jsx(s,{cardMode:!0,title:t.position,children:f.map((function(t,n){var i=e(t,2),s=i[0],a=i[1];return r.jsx(o,{gutter:20,children:a.map((function(e){return r.jsxs(c,{span:8,children:[r.jsx(l,{position:e,width:"100%",height:"27vw",fit:s,src:u}),r.jsx("div",{className:"text",children:s}),r.jsx("div",{className:"text",children:e})]},e)}))},n)}))}),r.jsx(s,{cardMode:!0,title:t.round,children:r.jsx(o,{gutter:20,children:i})}),r.jsx(s,{cardMode:!0,title:t.radius,children:r.jsx(o,{gutter:20,children:r.jsxs(c,{span:8,children:[r.jsx(l,{radius:"10",width:"100%",height:"27vw",src:u}),r.jsx("div",{className:"text",children:t.radius})]})})}),r.jsx(s,{cardMode:!0,title:t.loading,children:r.jsxs(o,{gutter:20,children:[r.jsxs(c,{span:8,children:[r.jsx(l,{width:"100%",height:"27vw"}),r.jsx("div",{className:"text",children:t.defaultTip})]}),r.jsxs(c,{span:8,children:[r.jsx(l,{width:"100%",height:"27vw",slots:{loading:r.jsx("span",{className:"loading-text",children:"Loading..."})}}),r.jsx("div",{className:"text",children:t.customTip})]})]})}),r.jsx(s,{cardMode:!0,title:t.error,children:r.jsxs(o,{gutter:20,children:[r.jsxs(c,{span:8,children:[r.jsx(l,{width:"100%",height:"27vw",src:"x"}),r.jsx("div",{className:"text",children:t.defaultTip})]}),r.jsxs(c,{span:8,children:[r.jsx(l,{width:"100%",height:"27vw",src:"x",slots:{error:r.jsx("span",{className:"error-text",children:"Error"})}}),r.jsx("div",{className:"text",children:t.customTip})]})]})})]})}));var u=""+new URL("demo-dog-0bb2d1f4.jpg",n.meta.url).href,h=i("demo-image"),x={"zh-CN":{basicUsage:"基础用法",fitMode:"填充模式",position:"位置",round:"圆形图片",radius:"圆角",loading:"加载中提示",error:"加载失败提示",defaultTip:"默认提示",customTip:"自定义提示",loadFail:"加载失败"},"en-US":{basicUsage:"Basic Usage",fitMode:"Fit Mode",position:"Position",round:"Round",radius:"Radius",loading:"Load Tip",error:"Error Tip",defaultTip:"Default Tip",customTip:"Custom Tip",loadFail:"Load failed"}},j=["contain","cover","fill","none","scale-down"],f=[["cover",["left","center","right"]],["contain",["top","center","bottom"]],["contain",["10px","10px 80%","center -1em"]]]}}}))}();