!function(){function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function n(n){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);o=!0);}catch(l){a=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./manifest-legacy.1df8d73b.js","./index-legacy.62b6300c.js","./use-demo-translate-legacy.38f06560.js","./vendor-legacy.ea70b7e5.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(e,t){"use strict";var i,c,o,a,l,s,d,u,m,f=document.createElement("style");return f.innerHTML=".demo-icon__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.demo-icon .fnx-icon{font-size:32px}.demo-icon__icon-desc{display:block;margin:var(--fnx-padding-xs) 0 0 0;font-size:12px;line-height:18px;text-align:center}\n",document.head.appendChild(f),{setters:[function(e){i=e.j,c=e.F,o=e.a,a=e.T,l=e.G,s=e.I,d=e.c},function(e){u=e.D},function(e){m=e.u},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=r(m(f,"en-US"),1)[0];return i(c,{children:o(a,{children:[o(a.Panel,{title:e.tabDemo,children:[i(u,{cardMode:!0,title:e.basicUsage,children:i(l,n(n({},b),{},{children:i(l.Item,{className:t("item"),children:i(s,{name:"success"})})}))}),i(u,{cardMode:!0,title:e.iconColor,children:o(l,n(n({},b),{},{children:[i(l.Item,{className:t("item"),children:i(s,{name:"success",color:"var(--fnx-success-color)"})}),i(l.Item,{className:t("item"),children:i(s,{name:"fail",color:"var(--fnx-danger-color)"})})]}))}),i(u,{cardMode:!0,title:e.iconSize,children:o(l,n(n({},b),{},{children:[i(l.Item,{className:t("item"),children:i(s,{name:"arrow-right",size:20})}),i(l.Item,{className:t("item"),children:i(s,{name:"arrow-left",size:"3rem"})})]}))}),i(u,{cardMode:!0,title:e.iconSpin,children:i(l,n(n({},b),{},{children:i(l.Item,{className:t("item"),children:i(s,{name:"star",spin:!0})})}))}),i(u,{cardMode:!0,title:e.iconSpinner,children:i(l,n(n({},b),{},{children:i(l.Item,{className:t("item"),children:i(s.Spinner,{})})}))})]}),i(a.Panel,{title:e.tabBasic,children:i(u,{cardMode:!0,children:i(l,n(n({},b),{},{children:h.map((function(e){return o(l.Item,{className:t("item"),children:[i(s,{name:e}),i("p",{className:t("icon-desc"),children:e})]},e)}))}))})}),i(a.Panel,{title:e.tabOutline,children:i(u,{cardMode:!0,children:i(l,n(n({},b),{},{children:p.map((function(e){return o(l.Item,{className:t("item"),children:[i(s,{name:e}),i("p",{className:t("icon-desc"),children:e})]},e)}))}))})}),i(a.Panel,{title:e.tabFilled,children:i(u,{cardMode:!0,children:i(l,n(n({},b),{},{children:y.map((function(e){return o(l.Item,{className:t("item"),children:[i(s,{name:e}),i("p",{className:t("icon-desc"),children:e})]},e)}))}))})})]})})}));var t=d("demo-icon"),f={"zh-CN":{basicUsage:"基础用法",iconColor:"图标颜色",iconSize:"图标尺寸",iconSpin:"旋转动画",iconSpinner:"Icon.Spinner",iconList:"图标列表",tabDemo:"用法示例",tabBasic:"基础图标",tabOutline:"线框风格",tabFilled:"实底风格"},"en-US":{basicUsage:"Basic Usage",iconColor:"Icon color",iconSize:"Icon size",iconSpin:"Spin animation",iconSpinner:"Icon.Spinner",iconList:"Icon list",tabDemo:"Demo",tabBasic:"Basic",tabOutline:"Outline",tabFilled:"Filled"}},b={border:!1,columnSize:4,gutter:4,square:!0},h=["arrow-up","arrow-down","arrow-left","arrow-right","success","cross","plus","minus","fail","circle"],p=["close-o","star-o","file-o"],y=["close","star","photo","photo-fail"]}}}))}();
