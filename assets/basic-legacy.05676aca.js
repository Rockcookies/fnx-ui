!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,o,a=[],t=!0,l=!1;try{for(r=r.call(e);!(t=(i=r.next()).done)&&(a.push(i.value),!n||a.length!==n);t=!0);}catch(c){l=!0,o=c}finally{try{t||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}System.register(["./vendor-legacy.ea70b7e5.js","./manifest-legacy.1df8d73b.js","./demo-doge-reverse-legacy.eed77544.js","./demo-doge-legacy.deee3de8.js","./index-legacy.62b6300c.js","./use-demo-translate-legacy.38f06560.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(n,r){"use strict";var i,o,a,t,l,c,d,u,s,h,f,m=document.createElement("style");return m.innerHTML=".demo-radio .fnx-radio{margin-bottom:var(--fnx-padding-md)}.demo-radio .fnx-radio:last-of-type{margin-bottom:0}.demo-radio .fnx-radio--horizontal{margin-bottom:0}.demo-radio__icon{display:block;width:1.5em;height:1.5em}.demo-radio .fnx-cell .fnx-radio{margin:0}\n",document.head.appendChild(m),{setters:[function(e){i=e.r},function(e){o=e.a,a=e.F,t=e.j,l=e.M,c=e.f,d=e.c},function(e){u=e.d},function(e){s=e.d},function(e){h=e.D},function(e){f=e.u},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=e(f(m,"en-US"),1)[0],d=e(i.exports.useState(1),2),b=d[0],g=d[1];return o(a,{children:[t(h,{cardMode:!0,title:n.basicUsage,children:o(l.Group,{defaultValue:1,children:[o(l,{value:1,children:[n.radio," 1"]}),o(l,{value:2,children:[n.radio," 2"]})]})}),t(h,{cardMode:!0,title:n.disabled,children:o(l.Group,{defaultValue:2,disabled:!0,children:[o(l,{value:1,children:[n.radio," 1"]}),o(l,{value:2,children:[n.radio," 2"]})]})}),t(h,{cardMode:!0,title:n.customShapeColor,children:o(l.Group,{defaultValue:1,children:[o(l,{value:1,iconShape:"square",iconCheckedColor:"var(--fnx-danger-color)",children:[n.radio," 1"]}),o(l,{value:2,children:[n.radio," 2"]})]})}),t(h,{cardMode:!0,title:n.customIconSize,children:t(l,{iconSize:20,defaultChecked:!0,children:n.customIconSize})}),t(h,{cardMode:!0,title:n.customIcon,children:o(l.Group,{defaultValue:2,iconShape:"plain",icon:t("img",{className:r("icon"),src:s}),checkedIcon:t("img",{className:r("icon"),src:u}),children:[o(l,{value:1,children:[n.radio," 1"]}),o(l,{value:2,children:[n.radio," 2"]})]})}),t(h,{cardMode:!0,title:n.disableLabel,children:t(l,{labelDisabled:!0,defaultChecked:!0,children:n.radio})}),t(h,{cardMode:!0,title:n.horizontal,children:o(l.Group,{defaultValue:2,direction:"horizontal",children:[o(l,{value:1,children:[n.radio," 1"]}),o(l,{value:2,children:[n.radio," 2"]})]})}),t(h,{title:n.insideACell,children:t(c.Group,{inset:!0,children:[1,2,3].map((function(e){return t(c,{clickable:!0,title:"".concat(n.radio," ").concat(e),rightIcon:t(l,{checked:b===e}),onClick:function(){g(e)}},e)}))})})]})}));var r=d("demo-radio"),m={"zh-CN":{basicUsage:"基础用法",disabled:"禁用状态",radio:"单选框",customShapeColor:"自定义形状与颜色",customIcon:"自定义图标",customIconSize:"自定义大小",horizontal:"水平排列",disableLabel:"禁用文本点击",insideACell:"搭配单元格组件使用"},"en-US":{basicUsage:"Basic Usage",disabled:"Disable",radio:"Radio",customShapeColor:"Custom Shape & Color",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",horizontal:"Horizontal",disableLabel:"Disable label click",insideACell:"Inside a Cell"}}}}}))}();