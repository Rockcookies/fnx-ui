!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){o=!0,i=c}finally{try{l||null==n.return||n.return()}finally{if(o)throw i}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./use-demo-translate-legacy.38f06560.js","./manifest-legacy.1df8d73b.js","./vendor-legacy.ea70b7e5.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(t,n){"use strict";var r,i,a,l,o,c,u=document.createElement("style");return u.innerHTML=".demo-stepper{padding:20px 10px}\n",document.head.appendChild(u),{setters:[function(e){r=e.u},function(e){i=e.a,a=e.F,l=e.j,o=e.f,c=e.D},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(r(n,"en-US"),1)[0];return i(a,{children:[l(o,{title:t.basicUsage,content:l(c,{})}),l(o,{title:t.step,content:l(c,{step:2})}),l(o,{title:t.range,content:l(c,{min:5,max:8})}),l(o,{title:t.integer,content:l(c,{precision:0})}),l(o,{title:t.disabled,content:l(c,{disabled:!0})}),l(o,{title:t.disableInput,content:l(c,{disableInput:!0})}),l(o,{title:t.decimalLength,content:l(c,{precision:1,defaultValue:1})}),l(o,{title:t.customSize,content:l(c,{buttonSize:32,inputWidth:40})})]})}));var n={"zh-CN":{basicUsage:"基础用法",step:"步长设置",range:"限制输入范围",integer:"限制输入整数",disabled:"禁用状态",disableInput:"禁用输入框",decimalLength:"固定小数位数",customSize:"自定义大小"},"en-US":{basicUsage:"Basic Usage",step:"Step",range:"Range",integer:"Integer",disabled:"Disabled",disableInput:"Disable Input",decimalLength:"Decimal Length",customSize:"Custom Size"}}}}}))}();
