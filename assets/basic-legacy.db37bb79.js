!function(){var e=["tab"];function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.fbda9b43.js","./demo-doge-legacy.deee3de8.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.bbceece0.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(t,r){"use strict";var a,c,s,u,l,d,m,p,b,f,y=document.createElement("style");return y.innerHTML=".demo-empty__tab-panel{background:var(--fnx-tabs-header-background)}.demo-empty__button{width:140px}\n",document.head.appendChild(y),{setters:[function(e){a=e.M,c=e.T,s=e.a},function(e){u=e.d},function(e){l=e.D},function(e){d=e.u},function(e){m=e.j,p=e.F,b=e.a,f=e.c},function(){},function(){}],execute:function(){t("default",(function(){var t=i(d(j,"en-US"),1)[0];return m(p,{children:[b(l,{title:t.basicUsage,children:b(a,{description:t.description})}),b(l,{title:t.customImage,children:b(c,{children:["default","disconnected","empty","busy"].map((function(r){var i=t.tabs[r],s=i.tab,u=o(i,e);return b(c.Panel,{className:O("tab-panel"),title:s,children:b(a,n({},u))},r)}))})}),b(l,{title:t.customImageProps,children:b(a,{image:u,imageProps:{style:{borderRadius:"50%",background:"var(--fnx-gray-75)"}},description:t.description})}),b(l,{title:t.customChildren,children:b(a,{title:t.title,description:t.description,children:b(s,{type:"primary",className:O("button"),shape:"radius",children:t.button})})})]})}));var y=""+new URL("empty-busy.99be17e4.svg",r.meta.url).href,g=""+new URL("empty-disconnected.2b39e9c0.svg",r.meta.url).href,h=""+new URL("empty-not-found.a508f5b4.svg",r.meta.url).href,O=f("demo-empty"),j={"zh-CN":{basicUsage:"基础用法",title:"前方拥堵",description:"刷新试试",customImage:"自定义图片",customImageProps:"自定义图片属性",customChildren:"底部内容",button:"按钮",tabs:{default:{tab:"默认",description:"页面遇到一些小问题"},disconnected:{tab:"网络异常",description:"网络有点忙",image:g},empty:{tab:"未找到",description:"没有找到你需要的东西",image:h},busy:{tab:"繁忙",description:"前方拥堵",image:y}}},"en-US":{basicUsage:"Basic Usage",title:"Oops, not loading",description:"Try to refresh the page",customImage:"Custom Image",customImageProps:"Custom Image Props",customChildren:"Bottom Content",button:"Button",tabs:{default:{tab:"Default",description:"Oops, something went wrong"},disconnected:{tab:"Disconnected",description:"Network is busy",image:g},empty:{tab:"Empty",description:"Hmm, couldn't find that...",image:h},busy:{tab:"Busy",description:"Oops, not loading",image:y}}}}}}}))}();
