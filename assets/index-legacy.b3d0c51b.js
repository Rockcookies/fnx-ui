!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);a=!0);}catch(i){c=!0,o=i}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.bbceece0.js","./scroll-legacy.6c8a6853.js","./index-legacy.574a5cd4.js","./index-legacy.a905d840.js","./use-theme-legacy.2614fe81.js"],(function(e,n){"use strict";var r,o,u,a,c,i,l,f=document.createElement("style");return f.innerHTML=".docs{padding:32px}\n",document.head.appendChild(f),{setters:[function(t){r=t.r,o=t.a,u=t.N,a=t.c},function(t){c=t.s},function(t){i=t.M},function(t){l=t.S},function(){}],execute:function(){var n=a("docs");e("default",(function(){var e=r.exports.useContext(l),a=e.locale,f=e.menu,s=t(r.exports.useState(),2),d=s[0],y=s[1];return r.exports.useEffect((function(){if(f){var t=!1,e="zh-CN"===a?f.markdownCN():f.markdown();return y(void 0),e.then((function(e){t||(e=null!=e.default?e.default:e,c(window,0),y(e.html))})),function(){t=!0}}}),[f,a]),f?o("div",{className:n(),children:o(i,{html:d})}):o(u,{to:"/"})})).displayName="Docs"}}}))}();
