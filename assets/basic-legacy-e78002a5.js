!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,l,a,i,c=[],o=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;o=!1}else for(;!(o=(r=a.call(t)).done)&&(c.push(r.value),c.length!==n);o=!0);}catch(s){u=!0,l=s}finally{try{if(!o&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-56dc3fc1.js","./index-legacy-beb27a6d.js","./use-demo-translate-legacy-bf4e5813.js","./index-legacy-8feccfbe.js","./index-legacy-b6aa574e.js","./index-legacy-3b87e241.js","./use-theme-legacy-7ae47e66.js","./config-component-props-legacy-b5279410.js","./index-legacy-06892120.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./constants-legacy-732fdcb2.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js","./use-merged-prop-legacy-58e913d1.js","./CSSTransition-legacy-b6da4c78.js"],(function(n,t){"use strict";var r,l,a,i,c,o,u,s,d,y=document.createElement("style");return y.textContent=".demo-overlay__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.demo-overlay__block{width:120px;height:120px;background-color:var(--fnx-primary-color);border-radius:4px}\n",document.head.appendChild(y),{setters:[function(e){r=e.r,l=e.b,a=e.F,i=e.j,c=e.a},function(e){o=e.D},function(e){u=e.u},function(e){s=e.B},function(e){d=e.O},null,null,null,null,null,null,null,null,null,null,null],execute:function(){n("default",(function(){var n=e(u(y,"en-US"),1)[0],c=e(r.useState(!1),2),f=c[0],m=c[1],g=e(r.useState(!1),2),b=g[0],p=g[1];return l(a,{children:[i(o,{cardMode:!0,title:n.basicUsage,children:i(s,{type:"primary",onClick:function(){return m(!0)},children:n.showOverlay})}),i(o,{cardMode:!0,title:n.embeddedContent,children:i(s,{type:"primary",onClick:function(){return p(!0)},children:n.embeddedContent})}),i(d,{visible:f,onClick:function(){return m(!1)}}),i(d,{visible:b,onClick:function(){return p(!1)},children:i("div",{className:t("wrapper"),children:i("div",{className:t("block")})})})]})}));var t=c("demo-overlay"),y={"zh-CN":{basicUsage:"基础用法",showOverlay:"显示遮罩层",embeddedContent:"嵌入内容"},"en-US":{basicUsage:"Basic Usage",showOverlay:"Show Overlay",embeddedContent:"Embedded Content"}}}}}))}();
