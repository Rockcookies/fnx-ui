!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,a,o,t,i=[],c=!0,s=!1;try{if(o=(l=l.call(e)).next,0===n){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=o.call(l)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=l.return&&(t=l.return(),Object(t)!==t))return}finally{if(s)throw a}}return i}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return n(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,r=new Array(n);l<n;l++)r[l]=e[l];return r}System.register(["./index-legacy-1bd67aeb.js","./index-legacy-83ea2db0.js","./demo-doge-reverse-legacy-81457475.js","./demo-doge-legacy-e77d121b.js","./index-legacy-21a5cae2.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-2e96c741.js","./use-checkbox-render-legacy-e981e1bf.js","./use-merged-prop-legacy-58e913d1.js","./index-legacy-c68971b2.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js","./config-component-props-legacy-b5279410.js","./use-controlled-state-legacy-c2785d55.js","./use-merged-prop-ref-legacy-7929f994.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./constants-legacy-732fdcb2.js"],(function(n,l){"use strict";var r,a,o,t,i,c,s,d,u;return{setters:[function(e){r=e.r,a=e.j,o=e.a},function(e){t=e.R},function(e){i=e.d},function(e){c=e.d},function(e){s=e.D},function(e){d=e.u},function(e){u=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".demo-radio .fnx-radio{margin-bottom:var(--fnx-padding-md)}.demo-radio .fnx-radio:last-of-type{margin-bottom:0}.demo-radio .fnx-radio--horizontal{margin-bottom:0}.demo-radio__icon{display:block;width:1.5em;height:1.5em}.demo-radio .fnx-cell .fnx-radio{margin:0}\n",document.head.appendChild(l),n("default",(function(){var n=e(d(f,"en-US"),1)[0],l=e(r.useState(1),2),o=l[0],j=l[1];return a.jsxs(a.Fragment,{children:[a.jsx(s,{cardMode:!0,title:n.basicUsage,children:a.jsxs(t.Group,{defaultValue:1,children:[a.jsxs(t,{value:1,children:[n.radio," 1"]}),a.jsxs(t,{value:2,children:[n.radio," 2"]})]})}),a.jsx(s,{cardMode:!0,title:n.disabled,children:a.jsxs(t.Group,{defaultValue:2,disabled:!0,children:[a.jsxs(t,{value:1,children:[n.radio," 1"]}),a.jsxs(t,{value:2,children:[n.radio," 2"]})]})}),a.jsx(s,{cardMode:!0,title:n.customShapeColor,children:a.jsxs(t.Group,{defaultValue:1,children:[a.jsxs(t,{value:1,iconShape:"square",iconCheckedColor:"var(--fnx-danger-color)",children:[n.radio," 1"]}),a.jsxs(t,{value:2,children:[n.radio," 2"]})]})}),a.jsx(s,{cardMode:!0,title:n.customIconSize,children:a.jsx(t,{iconSize:20,defaultChecked:!0,children:n.customIconSize})}),a.jsx(s,{cardMode:!0,title:n.customIcon,children:a.jsxs(t.Group,{defaultValue:2,iconShape:"plain",icon:a.jsx("img",{className:h("icon"),src:c}),checkedIcon:a.jsx("img",{className:h("icon"),src:i}),children:[a.jsxs(t,{value:1,children:[n.radio," 1"]}),a.jsxs(t,{value:2,children:[n.radio," 2"]})]})}),a.jsx(s,{cardMode:!0,title:n.disableLabel,children:a.jsx(t,{labelDisabled:!0,defaultChecked:!0,children:n.radio})}),a.jsx(s,{cardMode:!0,title:n.horizontal,children:a.jsxs(t.Group,{defaultValue:2,direction:"horizontal",children:[a.jsxs(t,{value:1,children:[n.radio," 1"]}),a.jsxs(t,{value:2,children:[n.radio," 2"]})]})}),a.jsx(s,{title:n.insideACell,children:a.jsx(u.Group,{inset:!0,children:[1,2,3].map((function(e){return a.jsx(u,{clickable:!0,title:"".concat(n.radio," ").concat(e),rightIcon:a.jsx(t,{checked:o===e}),onClick:function(){j(e)}},e)}))})})]})}));var h=o("demo-radio"),f={"zh-CN":{basicUsage:"基础用法",disabled:"禁用状态",radio:"单选框",customShapeColor:"自定义形状与颜色",customIcon:"自定义图标",customIconSize:"自定义大小",horizontal:"水平排列",disableLabel:"禁用文本点击",insideACell:"搭配单元格组件使用"},"en-US":{basicUsage:"Basic Usage",disabled:"Disable",radio:"Radio",customShapeColor:"Custom Shape & Color",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",horizontal:"Horizontal",disableLabel:"Disable label click",insideACell:"Inside a Cell"}}}}}))}();