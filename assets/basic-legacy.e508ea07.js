!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,c){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,l,t=[],r=!0,i=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(t.push(o.value),!c||t.length!==c);r=!0);}catch(a){i=!0,l=a}finally{try{r||null==n.return||n.return()}finally{if(i)throw l}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,c){(null==c||c>e.length)&&(c=e.length);for(var n=0,o=new Array(c);n<c;n++)o[n]=e[n];return o}System.register(["./vendor-legacy.ea70b7e5.js","./manifest-legacy.1df8d73b.js","./index-legacy.62b6300c.js","./use-demo-translate-legacy.38f06560.js","./demo-doge-reverse-legacy.eed77544.js","./demo-doge-legacy.deee3de8.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(c,n){"use strict";var o,l,t,r,i,a,d,u,h,s,b,f,m=document.createElement("style");return m.innerHTML=".demo-checkbox .fnx-checkbox{margin-bottom:var(--fnx-padding-md)}.demo-checkbox .fnx-checkbox:last-of-type{margin-bottom:0}.demo-checkbox .fnx-checkbox--horizontal{margin-bottom:0}.demo-checkbox__icon{display:block;width:1.5em;height:1.5em}.demo-checkbox__buttons{margin-top:var(--fnx-padding-md)}.demo-checkbox__buttons .fnx-button+.fnx-button{margin-left:var(--fnx-padding-md)}.demo-checkbox .fnx-cell .fnx-checkbox{margin:0}\n",document.head.appendChild(m),{setters:[function(e){o=e.r},function(e){l=e.a,t=e.F,r=e.j,i=e.h,a=e.e,d=e.f,u=e.c},function(e){h=e.D},function(e){s=e.u},function(e){b=e.d},function(e){f=e.d},function(){},function(){},function(){}],execute:function(){c("default",(function(){var c=e(s(m,"en-US"),1)[0],u=o.exports.useRef(null),x=o.exports.useRef({});return l(t,{children:[r(h,{cardMode:!0,title:c.basicUsage,children:r(i,{defaultChecked:!0,children:c.checkbox})}),l(h,{cardMode:!0,title:c.disabled,children:[l(i,{disabled:!0,children:[c.checkbox," 1"]}),l(i,{defaultChecked:!0,disabled:!0,children:[c.checkbox," 2"]})]}),l(h,{cardMode:!0,title:c.customShapeColor,children:[l(i,{iconShape:"round",defaultChecked:!0,iconCheckedColor:"var(--fnx-danger-color)",children:[c.checkbox," 1"]}),l(i,{defaultChecked:!0,children:[c.checkbox," 2"]})]}),r(h,{cardMode:!0,title:c.customIconSize,children:r(i,{iconSize:20,defaultChecked:!0,children:c.checkbox})}),r(h,{cardMode:!0,title:c.customIcon,children:r(i,{iconShape:"plain",icon:r("img",{className:n("icon"),src:f}),checkedIcon:r("img",{className:n("icon"),src:b}),children:c.checkbox})}),r(h,{cardMode:!0,title:c.disableLabel,children:r(i,{labelDisabled:!0,defaultChecked:!0,children:c.checkbox})}),r(h,{cardMode:!0,title:c.checkboxGroup,children:l(i.Group,{defaultValue:[1],children:[l(i,{value:1,children:[c.checkbox," 1"]}),l(i,{value:2,children:[c.checkbox," 2"]})]})}),r(h,{cardMode:!0,title:c.horizontal,children:l(i.Group,{defaultValue:[2],direction:"horizontal",children:[l(i,{value:1,children:[c.checkbox," 1"]}),l(i,{value:2,children:[c.checkbox," 2"]})]})}),r(h,{cardMode:!0,title:c.maxCount,children:l(i.Group,{maxCheckedCount:2,children:[l(i,{value:1,children:[c.checkbox," 1"]}),l(i,{value:2,children:[c.checkbox," 2"]}),l(i,{value:3,children:[c.checkbox," 3"]})]})}),l(h,{cardMode:!0,title:c.toggleAll,children:[l(i.Group,{ref:u,children:[l(i,{value:1,children:[c.checkbox," 1"]}),l(i,{value:2,children:[c.checkbox," 2"]}),l(i,{value:3,children:[c.checkbox," 3"]})]}),l("div",{className:n("buttons"),children:[r(a,{type:"primary",onClick:function(){var e;return null===(e=u.current)||void 0===e?void 0:e.toggleAll({checkAll:!0})},children:c.checkAll}),r(a,{type:"primary",onClick:function(){var e;return null===(e=u.current)||void 0===e?void 0:e.toggleAll()},children:c.inverse})]})]}),r(h,{title:c.insideACell,children:r(d.Group,{inset:!0,children:[1,2,3].map((function(e){return r(d,{clickable:!0,title:"".concat(c.checkbox," ").concat(e),rightIcon:r(i,{ref:function(c){x.current[e]=c},onClick:function(e){e.stopPropagation()}}),onClick:function(){var c=x.current[e];c&&c.toggle()}},e)}))})})]})}));var n=u("demo-checkbox"),m={"zh-CN":{basicUsage:"基础用法",disabled:"禁用状态",checkbox:"复选框",customShapeColor:"自定义形状与颜色",customIcon:"自定义图标",customIconSize:"自定义大小",checkboxGroup:"复选框组",maxCount:"限制最大可选数",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击",insideACell:"搭配单元格组件使用"},"en-US":{basicUsage:"Basic Usage",disabled:"Disable",checkbox:"Checkbox",customShapeColor:"Custom Shape & Color",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",checkboxGroup:"Checkbox Group",maxCount:"Maximum amount of checked options",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click",insideACell:"Inside a Cell"}}}}}))}();
