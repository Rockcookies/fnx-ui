!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.73fb705b.js","./scroll-legacy.8bac01ad.js","./index-legacy.cfa090e4.js","./index-legacy.e623a065.js","./use-theme-legacy.98b6ae29.js"],(function(e,n){"use strict";var r,o,a,u,i,c,l,f=document.createElement("style");return f.innerHTML=".docs{padding:32px}\n",document.head.appendChild(f),{setters:[function(t){r=t.r,o=t.a,a=t.N,u=t.c},function(t){i=t.s},function(t){c=t.M},function(t){l=t.S},function(){}],execute:function(){var n=u("docs");e("default",(function(){var e=r.exports.useContext(l),u=e.locale,f=e.menu,s=t(r.exports.useState(),2),d=s[0],y=s[1];return r.exports.useEffect((function(){if(f){var t=!1,e="zh-CN"===u?f.markdownCN():f.markdown();return y(void 0),e.then((function(e){t||(e=null!=e.default?e.default:e,i(window,0),y(e.html))})),function(){t=!0}}}),[f,u]),f?o("div",{className:n(),children:o(c,{html:d})}):o(a,{to:"/"})})).displayName="Docs"}}}))}();
