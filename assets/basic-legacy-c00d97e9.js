!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,c,i,r,o=[],a=!0,s=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;a=!1}else for(;!(a=(n=i.call(l)).done)&&(o.push(n.value),o.length!==t);a=!0);}catch(d){s=!0,c=d}finally{try{if(!a&&null!=l.return&&(r=l.return(),Object(r)!==r))return}finally{if(s)throw c}}return o}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return t(e,l);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}System.register(["./index-legacy-56dc3fc1.js","./index-legacy-7054d98a.js","./index-legacy-beb27a6d.js","./use-demo-translate-legacy-bf4e5813.js","./index-legacy-06892120.js","./index-legacy-564edbcc.js","./config-component-props-legacy-b5279410.js","./constants-legacy-732fdcb2.js","./index-legacy-3b87e241.js","./use-theme-legacy-7ae47e66.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./use-controlled-state-legacy-3a5af549.js","./use-merged-prop-ref-legacy-0d908859.js","./use-merged-prop-legacy-58e913d1.js","./use-update-effect-legacy-e8b7885c.js","./misc-legacy-f59b2e17.js","./CSSTransition-legacy-b6da4c78.js"],(function(t,l){"use strict";var n,c,i,r,o,a,s,d,u,g=document.createElement("style");return g.textContent=".demo-cell__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.demo-cell__title-tag{margin-left:var(--fnx-padding-xs)}\n",document.head.appendChild(g),{setters:[function(e){n=e.b,c=e.F,i=e.j,r=e.a},function(e){o=e.C},function(e){a=e.D},function(e){s=e.u},function(e){d=e.I},function(e){u=e.T},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){t("default",(function(){var t=e(s(g,"en-US"),1)[0];return n(c,{children:[n(a,{title:t.basicUsage,children:[i(o,{title:t.cell,children:t.content}),i(o,{title:n("div",{className:l("title"),children:[t.cell,i(u,{className:l("title-tag"),type:"danger",children:t.tag})]}),clickable:!0,rightIcon:i(d,{name:"arrow-right"}),children:t.content}),i(o,{leftIcon:i(d,{name:"success"}),title:t.cell,rightIcon:i(d,{name:"star"})}),i(o,{title:t.cell,description:t.desc,children:t.content}),n(o.Group,{title:t.inset,inset:!0,children:[i(o,{title:t.cell,children:t.content}),i(o,{title:t.cell,children:t.content})]})]}),i(a,{title:t.clickable,children:i(o,{title:t.cell,clickable:!0,children:t.content})}),n(a,{title:t.leftIcon,children:[i(o,{title:t.cell,leftIcon:i(d,{name:"success"}),children:t.content}),i(o,{title:t.cell,leftIcon:i(d,{name:"star"}),children:t.content})]}),n(a,{title:t.rightIcon,children:[i(o,{title:t.cell,clickable:!0,rightIcon:i(d,{name:"arrow-up"}),children:t.content}),i(o,{title:t.cell,clickable:!0,rightIcon:i(d,{name:"arrow-right"}),children:t.content}),i(o,{title:t.cell,clickable:!0,rightIcon:i(d,{name:"arrow-down"}),children:t.content})]}),i(a,{title:t.childrenOnly,children:i(o,{children:t.content})}),n(a,{title:t.groupTitle,children:[i(o.Group,{title:"".concat(t.groupTitle," 1"),children:i(o,{title:t.cell,children:t.content})}),i(o.Group,{title:"".concat(t.groupTitle," 2"),children:i(o,{title:t.cell,children:t.content})})]}),n(a,{title:t.itemsAlign,children:[i(o,{itemsAlign:"middle",title:t.cell,description:t.desc,children:t.content}),i(o,{itemsAlign:"bottom",title:t.cell,description:t.desc,children:t.content})]})]})}));var l=r("demo-cell"),g={"zh-CN":{content:"内容",tag:"标签",cell:"单元格",groupTitle:"分组标题",inset:"卡片风格",desc:"描述信息",basicUsage:"基础用法",childrenOnly:"只设置 children",clickable:"可点击的",leftIcon:"左侧图标",rightIcon:"展示箭头",itemsAlign:"垂直居中"},"en-US":{content:"Content",tag:"Tag",cell:"Cell title",groupTitle:"Group Title",inset:"Inset Grouped",desc:"Description",basicUsage:"Basic Usage",clickable:"Clickable",childrenOnly:"Children only",leftIcon:"Left Icon",rightIcon:"Right Icon",itemsAlign:"Vertical center"}}}}}))}();
