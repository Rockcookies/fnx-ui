!function(){var e=["className","title","children","cardMode"];function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=document.createElement("style");c.innerHTML=".demo-block__title{margin:0;padding:32px 16px 16px;color:var(--fnx-gray-800);font-weight:normal;font-size:14px;line-height:16px}.demo-block--card-mode .demo-block__content{margin:12px 12px 0}.demo-block--card-mode .demo-block__title+.demo-block__content{margin-top:0}.demo-block:first-of-type .demo-block__title{padding-top:20px}.demo-block:last-of-type .demo-block__content{padding-bottom:20px}\n",document.head.appendChild(c),System.register(["./vendor-legacy.1b768d64.js","./index-legacy.a6b53cdb.js"],(function(t){"use strict";var n,c,i,l,a;return{setters:[function(e){n=e.b},function(e){c=e.a,i=e.j,l=e.c,a=e.b}],execute:function(){var d=a("demo-block"),b=function(t){var a=t.className,b=t.title,p=t.children,s=t.cardMode,m=o(t,e);return c(n.StrictMode,{children:i("div",r(r({className:l(d({"card-mode":s}),a)},m),{},{children:[b&&c("div",{className:d("title"),children:b}),c("div",{className:d("content"),children:p})]}))})};b.displayName="DemoBlock";t("D",b)}}}))}();