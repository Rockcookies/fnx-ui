!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./vendor-legacy.ea70b7e5.js","./manifest-legacy.1df8d73b.js","./index-legacy.043aff08.js","./index-legacy.6d649f1e.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(e,n){"use strict";var r,o,a,u,i,c,l,f=document.createElement("style");return f.innerHTML=".docs{padding:32px}\n",document.head.appendChild(f),{setters:[function(t){r=t.r,o=t.N},function(t){a=t.a1,u=t.j,i=t.c},function(t){c=t.M},function(t){l=t.S},function(){},function(){}],execute:function(){var n=i("docs");e("default",(function(){var e=r.exports.useContext(l),i=e.locale,f=e.menu,s=t(r.exports.useState(),2),d=s[0],y=s[1];return r.exports.useEffect((function(){if(f){var t=!1,e="zh-CN"===i?f.markdownCN():f.markdown();return y(void 0),e.then((function(e){t||(e=null!=e.default?e.default:e,a(window,0),y(e.html))})),function(){t=!0}}}),[f,i]),f?u("div",{className:n(),children:u(c,{html:d})}):u(o,{to:"/"})})).displayName="Docs"}}}))}();
