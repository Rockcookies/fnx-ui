!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var t=document.createElement("style");t.innerHTML=".components{padding:32px}.components__article{padding-right:352px}.components__device-container{position:fixed;top:96px;right:0;box-sizing:border-box;max-width:100%;padding:0 32px;transition:right .3s}.components__device{position:relative;float:right;box-sizing:border-box;width:324px;max-width:100%;padding:26px 2px;background:var(--fnx-gray-200);border-radius:20px;transition:transform .3s}.components__simulator{width:100%;height:500px;overflow:hidden;background:var(--fnx-page-color);-webkit-overflow-scrolling:touch}.components__simulator iframe{display:block;width:100%;height:100%;border:none}.components__action-list{position:absolute;top:50px;left:-32px;display:none;width:32px;overflow:hidden;line-height:32px;background-color:var(--fnx-gray-200);border-radius:5px 0 0 5px}.components__action{display:flex;align-items:center;justify-content:center;height:32px;color:var(--fnx-white-color);font-size:18px;background-color:var(--fnx-primary-color)}.components__action:active{opacity:.7}.components--mobile .components__article{padding-right:0}.components--mobile .components__device-container{right:-32px}.components--mobile .components__device-container--expanded{right:0}.components--mobile .components__device{transform:translate(100%)}.components--mobile .components__device--expanded{transform:translate(0)}.components--mobile .components__action-list{display:block}\n",document.head.appendChild(t),System.register(["./vendor-legacy.8abf57f5.js","./scroll-legacy.a10306e2.js","./index-legacy.7308b9a9.js","./index-legacy.3ce3dfe4.js","./index-legacy.8254ed1c.js","./history-utils-legacy.110e5e10.js","./use-theme-legacy.11e698e2.js"],(function(n){"use strict";var t,o,r,i,a,c,l,s,d;return{setters:[function(e){t=e.r,o=e.i},function(e){r=e.s},function(e){i=e.a,a=e.j,c=e.b},function(e){l=e.M},function(e){s=e.S},function(e){d=e.a},function(){}],execute:function(){var p=c("components");n("default",(function(){var n=t.exports.useContext(s),c=n.locale,u=n.menu,m=n.theme,f=n.responsive,h=t.exports.useMemo((function(){if(u)return d("".concat(window.location.pathname,"#/demo"),{component:u.key,locale:c,theme:m})}),[c,u,m]),x=e(t.exports.useState(!1),2),v=x[0],g=x[1],y=e(t.exports.useState(),2),b=y[0],_=y[1];return t.exports.useEffect((function(){if(u){var e=!1;return("zh-CN"===c?u.markdownCN():u.markdown()).then((function(n){e||(n=null!=n.default?n.default:n,r(window,0),_(n.html))})),function(){e=!0}}}),[u,c]),u?a("div",{className:p({mobile:!f.md}),children:[i("div",{className:p("article"),children:i(l,{html:b})}),h&&i("div",{className:p("device-container",{expanded:v}),children:a("div",{className:p("device",{expanded:v}),children:[i("div",{className:p("action-list"),children:i("a",{className:p("action"),onClick:function(){return g(!v)},children:a("svg",{viewBox:"0 0 1024 1024",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:[i("path",{d:"M537.7536 795.88864c-26.40896 0-47.89248 21.4784-47.89248 47.89248s21.48352 47.89248 47.89248 47.89248 47.89248-21.4784 47.89248-47.89248-21.48352-47.89248-47.89248-47.89248z"}),i("path",{d:"M774.69696 42.07104H300.81536c-39.86432 0-72.29952 32.43008-72.29952 72.29952v795.264c0 39.86944 32.43008 72.29952 72.29952 72.29952h473.87136c39.86944 0 72.29952-32.43008 72.29952-72.29952V114.36544c0.00512-39.86432-32.42496-72.2944-72.28928-72.2944zM300.81536 90.2656h473.87136a24.12544 24.12544 0 0 1 24.09984 24.09984v595.80928H276.72064V114.36544a24.12544 24.12544 0 0 1 24.09472-24.09984z m473.8816 843.46368H300.81536a24.12544 24.12544 0 0 1-24.09984-24.09984v-147.12832h522.07104v147.12832a24.1152 24.1152 0 0 1-24.0896 24.09984z"})]})})}),i("div",{className:p("simulator"),children:i("iframe",{src:h},h)})]})})]}):i(o,{to:"/"})})).displayName="Components"}}}))}();