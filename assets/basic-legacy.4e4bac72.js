!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy.fbda9b43.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.bbceece0.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(t,r){"use strict";var n,o,l,i,a,c,u;return{setters:[function(e){n=e.C,o=e.b},function(e){l=e.D},function(e){i=e.u},function(e){a=e.j,c=e.F,u=e.a},function(){},function(){}],execute:function(){t("default",(function(){var t=e(i(r,"en-US"),1)[0];return a(c,{children:[u(l,{cardMode:!0,title:t.basicUsage,children:s.map((function(e){return u(n,{title:"".concat(e," ").concat(t.type),children:u(o,{type:e,children:t.tag})},e)}))}),a(l,{cardMode:!0,title:t.tagStyle,children:[d.map((function(e){return u(n,{title:e,children:u(o,{type:"primary",theme:e,children:t.tag})},e)})),u(n,{title:t.closeable,children:u(o,{type:"primary",closeable:!0,children:t.tag})})]}),u(l,{cardMode:!0,title:t.customSize,children:m.map((function(e){return u(n,{title:t["".concat(e,"Size")],children:u(o,{size:e,type:"primary",children:t.tag})},e)}))}),a(l,{cardMode:!0,title:t.customColor,children:[u(n,{title:t.customBgColor,children:u(o,{color:"#7232dd",children:t.tag})}),u(n,{title:t.customTextColor,children:u(o,{color:"#ffe1e1",textColor:"#ad0000",children:t.tag})}),u(n,{title:t.customTextColor,children:u(o,{color:"#7232dd",theme:"plain",children:t.tag})})]})]})}));var r={"zh-CN":{basicUsage:"基础用法",tag:"标签",type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smSize:"小号标签",lgSize:"大号标签",mdSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{basicUsage:"Basic Usage",tag:"Tag",type:"",mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smSize:"Small Size",lgSize:"Large Size",mdSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},s=["default","primary","success","danger","warning"],d=["plain","round","mark"],m=["sm","md","lg"]}}}))}();
