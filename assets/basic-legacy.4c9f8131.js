!function(){function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function e(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],p=!0,u=!1;try{for(n=n.call(t);!(p=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);p=!0);}catch(c){u=!0,r=c}finally{try{p||null==n.return||n.return()}finally{if(u)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}System.register(["./vendor-legacy.1b768d64.js","./index-legacy.3b71b887.js","./use-demo-translate-legacy.83525397.js","./index-legacy.371033d6.js","./index-legacy.a6b53cdb.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(t){"use strict";var n,r,i,p,u,c,l,a,s;return{setters:[function(t){n=t.r},function(t){r=t.D},function(t){i=t.u},function(t){p=t.C,u=t.I,c=t.P},function(t){l=t.j,a=t.F,s=t.a},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=o(i(f,"en-US"),1)[0];return l(a,{children:[s(r,{cardMode:!0,title:t.basicUsage,children:s(d,{cell:{title:t.popupBasic},popup:{children:t.content,style:{padding:"30px 50px"}}})}),l(r,{cardMode:!0,title:t.position,children:[s(d,{cell:{title:t.popupTop},popup:{position:"top",style:{height:"30%"}}}),s(d,{cell:{title:t.popupBottom},popup:{position:"bottom",style:{height:"30%"}}}),s(d,{cell:{title:t.popupLeft},popup:{position:"left",style:{width:"30%",height:"100%"}}}),s(d,{cell:{title:t.popupRight},popup:{position:"right",style:{width:"30%",height:"100%"}}})]}),s(r,{cardMode:!0,title:t.roundCorner,children:s(d,{cell:{title:t.roundCorner},popup:{round:!0,position:"bottom",style:{height:"30%"}}})}),s(r,{cardMode:!0,title:t.teleport,children:s(d,{cell:{title:t.teleport},popup:{children:t.content,style:{padding:"30px 50px"},mountTo:function(){return document.body}}})})]})}));var f={"zh-CN":{basicUsage:"基础用法",position:"弹出位置",popupBasic:"展示弹出层",popupTop:"顶部弹出",popupBottom:"底部弹出",popupLeft:"左侧弹出",popupRight:"右侧弹出",teleport:"指定挂载节点",roundCorner:"圆角弹窗",content:"内容"},"en-US":{basicUsage:"Basic Usage",position:"Position",popupBasic:"Show Popup",popupTop:"From Top",popupBottom:"From Bottom",popupLeft:"From Left",popupRight:"From Right",teleport:"Get Container",roundCorner:"Round Corner",content:"Content"}},d=function(t){var r=o(n.exports.useState(!1),2),i=r[0],f=r[1];return l(a,{children:[s(p,e(e({onClick:function(){return f(!0)},clickable:!0},t.cell),{},{rightIcon:s(u,{name:"arrow-right"})})),s(c,e({mountTo:function(){return document.body},visible:i,onClose:function(){return f(!1)}},t.popup))]})}}}}))}();