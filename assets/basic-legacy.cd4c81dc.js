!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var c,a,i=[],r=!0,o=!1;try{for(e=e.call(t);!(r=(c=e.next()).done)&&(i.push(c.value),!n||i.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==e.return||e.return()}finally{if(o)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);"Object"===c&&t.constructor&&(c=t.constructor.name);if("Map"===c||"Set"===c)return Array.from(t);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,c=new Array(n);e<n;e++)c[e]=t[e];return c}var e=document.createElement("style");e.innerHTML=".demo-tabs{padding-bottom:100vh}.demo-tabs .fnx-tabs{background-color:var(--fnx-gray-100)}.demo-tabs .fnx-tabs__content{height:74px}.demo-tabs .fnx-tabs__panel{padding:0 20px;font-size:var(--fnx-font-size-lg);line-height:74px}\n",document.head.appendChild(e),System.register(["./index-legacy.32c99374.js","./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(n){"use strict";var e,c,a,i,r,o,l;return{setters:[function(t){e=t.s,c=t.T},function(t){a=t.D},function(t){i=t.u},function(t){r=t.j,o=t.F,l=t.a},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=t(i(s,"en-US"),1)[0];return r(o,{children:[l(a,{title:n.basicUsage,children:l(e,{defaultActiveKey:"3",children:[1,2,3,4].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))})}),l(a,{title:n.swipeTabs,children:l(e,{children:[1,2,3,4,5,6,7,8].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))})}),l(a,{title:n.disabledTabs,children:l(e,{children:[1,2,3].map((function(t){return l(e.Panel,{disabled:2===t,title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))})}),l(a,{title:n.clickEvent,children:r(e,{onTabClick:function(t,e){c.show("".concat(n.tab," ").concat(e.key))},children:[" ",[1,2].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))]})}),l(a,{title:n.sticky,children:l(e,{sticky:!0,children:[1,2,3,4].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))})}),l(a,{title:n.switchAnimation,children:l(e,{animated:!0,children:[1,2,3,4].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},t)}))})}),l(a,{title:n.swipe,children:l(e,{swipeable:!0,defaultActiveKey:"2",children:[1,2,3,4].map((function(t){return l(e.Panel,{title:"".concat(n.tab," ").concat(t),children:"".concat(n.content," ").concat(t)},"".concat(t))}))})})]})}));var s={"zh-CN":{basicUsage:"基础用法",tab:"标签",content:"内容",swipeTabs:"标签栏滚动",disabledTabs:"禁用标签",clickEvent:"点击事件",sticky:"粘性布局",title7:"自定义标签",switchAnimation:"切换动画",swipe:"滑动切换"},"en-US":{basicUsage:"basic Usage",tab:"Tab",content:"content of tab",swipeTabs:"Swipe Tabs",disabledTabs:"Disabled Tab",clickEvent:"Click Event",sticky:"Sticky",title7:"Custom Tab",switchAnimation:"Switch Animation",swipe:"Swipeable"}}}}}))}();
