!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==n.return||n.return()}finally{if(a)throw i}}return o}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.32c99374.js","./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(e){"use strict";var n,r,i,o,c,a;return{setters:[function(t){n=t.r},function(t){r=t.D},function(t){i=t.u},function(t){o=t.j,c=t.F,a=t.a},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(i(l,"en-US"),1)[0];return o(c,{children:[a(r,{cardMode:!0,title:e.basicUsage,children:a(n,{})}),a(r,{cardMode:!0,title:e.withText,children:a(n,{children:e.text})}),o(r,{cardMode:!0,title:e.contentPosition,children:[a(n,{contentPosition:"left",children:e.text}),a(n,{contentPosition:"right",children:e.text}),a(n,{contentPosition:"center",children:e.text})]}),a(r,{cardMode:!0,title:e.dashed,children:a(n,{dashed:!0,hairline:!1,children:e.text})}),a(r,{cardMode:!0,title:e.customStyle,children:a(n,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"},children:e.text})})]})}));var l={"zh-CN":{basicUsage:"基础用法",text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}}}}}))}();
