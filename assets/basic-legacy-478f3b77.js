!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var c,l,a,i,r=[],o=!0,s=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;o=!1}else for(;!(o=(c=a.call(t)).done)&&(r.push(c.value),r.length!==n);o=!0);}catch(u){s=!0,l=u}finally{try{if(!o&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw l}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);"Object"===c&&e.constructor&&(c=e.constructor.name);if("Map"===c||"Set"===c)return Array.from(e);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,c=new Array(n);t<n;t++)c[t]=e[t];return c}System.register(["./index-legacy-56dc3fc1.js","./index-legacy-3c2c7238.js","./index-legacy-beb27a6d.js","./use-demo-translate-legacy-bf4e5813.js","./index-legacy-5bb84cd6.js","./index-legacy-3b87e241.js","./use-theme-legacy-7ae47e66.js","./config-component-props-legacy-b5279410.js","./use-controlled-state-legacy-3a5af549.js","./use-merged-prop-ref-legacy-0d908859.js","./use-merged-prop-legacy-58e913d1.js","./use-update-effect-legacy-e8b7885c.js","./use-creation-legacy-f9f9ce08.js","./index-legacy-0727cc2a.js","./event-legacy-359ec6a3.js","./detect-legacy-199d634d.js","./misc-legacy-f59b2e17.js","./scroll-legacy-32145838.js","./style-legacy-d9487b87.js","./format-legacy-4dfc8f09.js","./index-legacy-8cc58786.js","./use-on-popup-open-legacy-fd933c08.js","./touch-helper-legacy-732fd97d.js","./raf-legacy-b5db696e.js","./react-legacy-74217e46.js","./use-safe-state-legacy-530cd51c.js","./use-unmounted-ref-legacy-7d62d2d9.js","./use-get-state-legacy-1240d36d.js","./constants-legacy-732fdcb2.js","./index-legacy-06892120.js","./popup-helper-legacy-18bc0660.js","./index-legacy-3ebb067c.js","./index-legacy-b6aa574e.js","./CSSTransition-legacy-b6da4c78.js"],(function(n,t){"use strict";var c,l,a,i,r,o,s,u=document.createElement("style");return u.textContent=".demo-tabs{padding-bottom:100vh}.demo-tabs .fnx-tabs{background-color:var(--fnx-gray-100)}.demo-tabs .fnx-tabs__content{height:74px}.demo-tabs .fnx-tabs__panel{padding:0 20px;font-size:var(--fnx-font-size-lg);line-height:74px}\n",document.head.appendChild(u),{setters:[function(e){c=e.b,l=e.F,a=e.j},function(e){i=e.T},function(e){r=e.D},function(e){o=e.u},function(e){s=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){n("default",(function(){var n=e(o(t,"en-US"),1)[0];return c(l,{children:[a(r,{title:n.basicUsage,children:a(i,{defaultActiveKey:"3",children:[1,2,3,4,5].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))})}),a(r,{title:n.swipeTabs,children:a(i,{children:[1,2,3,4,5,6,7,8].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))})}),a(r,{title:n.disabledTabs,children:a(i,{children:[1,2,3].map((function(e){return a(i.Panel,{disabled:2===e,title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))})}),a(r,{title:n.clickEvent,children:c(i,{onTabClick:function(e,t){s.show("".concat(n.tab," ").concat(t.key))},children:[" ",[1,2].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))]})}),a(r,{title:n.sticky,children:a(i,{sticky:!0,children:[1,2,3,4].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))})}),a(r,{title:n.switchAnimation,children:a(i,{animated:!0,children:[1,2,3,4].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},e)}))})}),a(r,{title:n.swipe,children:a(i,{swipeable:!0,defaultActiveKey:"2",children:[1,2,3,4].map((function(e){return a(i.Panel,{title:"".concat(n.tab," ").concat(e),children:"".concat(n.content," ").concat(e)},"".concat(e))}))})})]})}));var t={"zh-CN":{basicUsage:"基础用法",tab:"标签",content:"内容",swipeTabs:"标签栏滚动",disabledTabs:"禁用标签",clickEvent:"点击事件",sticky:"粘性布局",title7:"自定义标签",switchAnimation:"切换动画",swipe:"滑动切换"},"en-US":{basicUsage:"basic Usage",tab:"Tab",content:"content of tab",swipeTabs:"Swipe Tabs",disabledTabs:"Disabled Tab",clickEvent:"Click Event",sticky:"Sticky",title7:"Custom Tab",switchAnimation:"Switch Animation",swipe:"Swipeable"}}}}}))}();
