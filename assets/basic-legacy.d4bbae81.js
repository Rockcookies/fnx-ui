!function(){function n(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,a,c=[],i=!0,l=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(c.push(t.value),!e||c.length!==e);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return c}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}System.register(["./index-legacy.fbda9b43.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.bbceece0.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(e,r){"use strict";var t,a,c,i,l,o,s,u=document.createElement("style");return u.innerHTML=".demo-layout .fnx-col{margin-bottom:10px;color:var(--fnx-white-color);font-size:13px;line-height:30px;text-align:center;background-clip:content-box}.demo-layout .fnx-col:nth-child(odd){background-color:var(--fnx-primary-color)}.demo-layout .fnx-col:nth-child(even){background-color:var(--fnx-warning-color)}\n",document.head.appendChild(u),{setters:[function(n){t=n.R,a=n.f},function(n){c=n.D},function(n){i=n.u},function(n){l=n.j,o=n.F,s=n.a},function(){},function(){}],execute:function(){e("default",(function(){var e=n(i(r,"en-US"),1)[0];return l(o,{children:[l(c,{cardMode:!0,title:e.basicUsage,children:[l(t,{children:[s(a,{span:8,children:"span: 8"}),s(a,{span:8,children:"span: 8"}),s(a,{span:8,children:"span: 8"})]}),l(t,{children:[s(a,{span:4,children:"span: 4"}),s(a,{span:10,offset:4,children:"offset: 4, span: 10"})]}),s(t,{children:s(a,{offset:12,span:12,children:"offset: 12, span: 12"})})]}),s(c,{cardMode:!0,title:e.columnSpacing,children:l(t,{gutter:20,children:[s(a,{span:8,children:"span: 8"}),s(a,{span:8,children:"span: 8"}),s(a,{span:8,children:"span: 8"})]})}),l(c,{cardMode:!0,title:e.justifyContent,children:[l(t,{justify:"center",children:[s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"})]}),l(t,{justify:"end",children:[s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"})]}),l(t,{justify:"space-between",children:[s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"})]}),l(t,{justify:"space-around",children:[s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"}),s(a,{span:6,children:"span: 6"})]})]})]})}));var r={"zh-CN":{basicUsage:"基础用法",columnSpacing:"在列元素之间增加间距",justifyContent:"对齐方式"},"en-US":{basicUsage:"Basic Usage",columnSpacing:"Column Spacing",justifyContent:"Justify Content"}}}}}))}();
