!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy.fbda9b43.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.bbceece0.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(t,r){"use strict";var n,o,l,a,i,u,c;return{setters:[function(e){n=e.n,o=e.I},function(e){l=e.D},function(e){a=e.u},function(e){i=e.j,u=e.F,c=e.a},function(){},function(){}],execute:function(){t("default",(function(){var t=e(a(r,"en-US"),1)[0];return i(u,{children:[c(l,{cardMode:!0,title:t.basicUsage,children:c(n,{total:80,defaultCurrent:1})}),c(l,{cardMode:!0,title:t.simpleMode,children:c(n,{total:60,mode:"simple"})}),c(l,{cardMode:!0,title:t.ellipses,children:c(n,{total:125,forceEllipses:!0,defaultCurrent:8,pageItemCount:3})}),c(l,{cardMode:!0,title:t.customButton,children:c(n,{total:80,slots:{prev:c(o,{name:"arrow-left"}),next:c(o,{name:"arrow-right"})}})})]})}));var r={"zh-CN":{basicUsage:"基本用法",simpleMode:"简单模式",ellipses:"状态",customButton:"自定义按钮"},"en-US":{basicUsage:"Basic Usage",simpleMode:"simple Mode",ellipses:"Show Ellipses",customButton:"Custom Button"}}}}}))}();
