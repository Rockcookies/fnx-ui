!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t,a,r,c,i=[],u=!0,o=!1;try{if(r=(l=l.call(e)).next,0===n){if(Object(l)!==l)return;u=!1}else for(;!(u=(t=r.call(l)).done)&&(i.push(t.value),i.length!==n);u=!0);}catch(s){o=!0,a=s}finally{try{if(!u&&null!=l.return&&(c=l.return(),Object(c)!==c))return}finally{if(o)throw a}}return i}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return n(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,t=new Array(n);l<n;l++)t[l]=e[l];return t}System.register(["./index-legacy-56dc3fc1.js","./index-legacy-3b87e241.js","./index-legacy-beb27a6d.js","./use-demo-translate-legacy-bf4e5813.js","./index-legacy-8feccfbe.js","./index-legacy-caf5c264.js","./index-legacy-28c2c5e7.js","./index-legacy-be3247ea.js","./index-legacy-3ebb067c.js","./index-legacy-472b780c.js","./use-theme-legacy-7ae47e66.js","./config-component-props-legacy-b5279410.js","./index-legacy-06892120.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./constants-legacy-732fdcb2.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js","./use-creation-legacy-f9f9ce08.js","./use-get-state-legacy-1240d36d.js","./use-merged-prop-ref-legacy-0d908859.js","./use-merged-prop-legacy-58e913d1.js","./use-update-effect-legacy-e8b7885c.js","./index-legacy-13e453d7.js","./use-on-popup-open-legacy-fd933c08.js","./scroll-legacy-32145838.js","./raf-legacy-b5db696e.js","./index-legacy-7054d98a.js","./use-controlled-state-legacy-3a5af549.js","./use-focus-legacy-bbb9366d.js","./CSSTransition-legacy-b6da4c78.js","./touch-helper-legacy-732fd97d.js","./index-legacy-b6aa574e.js"],(function(n,l){"use strict";var t,a,r,c,i,u,o,s,d,y,f,g,m,j,h,p,b=document.createElement("style");return b.textContent=".demo-config-provider__submit{margin-top:var(--fnx-padding-md)}\n",document.head.appendChild(b),{setters:[function(e){t=e.b,a=e.F,r=e.j,c=e.r,i=e.a},function(e){u=e.C,o=e.e,s=e.z},function(e){d=e.D},function(e){y=e.u},function(e){f=e.B},function(e){g=e.C},function(e){m=e.F},function(e){j=e.F},function(e){h=e.P},function(e){p=e.R},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){n("default",(function(){return t(a,{children:[r(u,{locale:o,children:r(S,{})}),r(u,{locale:s,transitionDuration:1e3,children:r(S,{})})]})}));var l=i("demo-config-provider"),b={"zh-CN":{locale:"语言"},"en-US":{locale:"Language"}},x={"zh-CN":{submit:"提交",rate:"评分",transition:"动画时常",calendarLabel:"日历",calendarPlaceholder:"点击选择日期",locale:"zh-CN"},"en-US":{submit:"Submit",rate:"Rate",transition:"Transition",calendarLabel:"Calendar",calendarPlaceholder:"Select date",locale:"en-US"}},S=function(){var n=c.useContext(u.Context),a=n.locale,i=n.transitionDuration,o=e(y(b,"en-US"),1)[0],s=x["zh-CN"===a.locale?"zh-CN":"en-US"];return r(d,{title:"".concat(o.locale,": ").concat(s.locale),cardMode:!0,children:t(j,{initialValues:{rate:3},children:[t(j.Item,{label:s.transition,children:[i,"ms"]}),r(j.Item,{label:s.rate,name:"rate",children:r(p,{count:6})}),r(j.Item,{name:"calendar",plain:!0,children:r(h.Select,{round:!0,select:r(g,{}),children:function(e){return r(m,{label:s.calendarLabel,clickable:!0,children:r(m.Input,{readOnly:!0,value:e,placeholder:s.calendarPlaceholder})})}})}),r(f,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:l("submit"),children:s.submit})]})})};S.displayName="Demo"}}}))}();
