!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var l,c,i=[],r=!0,o=!1;try{for(n=n.call(e);!(r=(l=n.next()).done)&&(i.push(l.value),!t||i.length!==t);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==n.return||n.return()}finally{if(o)throw c}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}System.register(["./index-legacy.32c99374.js","./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(t){"use strict";var n,l,c,i,r,o,a;return{setters:[function(e){n=e.C,l=e.I},function(e){c=e.D},function(e){i=e.u},function(e){r=e.j,o=e.F,a=e.a},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(i(d,"en-US"),1)[0];return r(o,{children:[r(c,{title:t.basicUsage,children:[a(n,{title:t.cell,children:t.content}),a(n,{title:t.cell,description:t.desc,children:t.content})]}),r(c,{cardMode:!0,title:t.groupTitle,children:[r(n.Group,{title:"".concat(t.groupTitle," 1"),children:[a(n,{title:t.cell,children:t.content}),a(n,{title:t.cell,description:t.desc,children:t.content})]}),r(n.Group,{title:"".concat(t.groupTitle," 2"),insert:!0,children:[a(n,{title:t.cell,children:t.content}),a(n,{title:t.cell,children:t.content})]})]}),a(c,{title:t.clickable,children:a(n,{title:t.cell,clickable:!0,children:t.content})}),r(c,{title:t.leftIcon,children:[a(n,{title:t.cell,leftIcon:a(l,{name:"success"}),children:t.content}),a(n,{title:t.cell,leftIcon:a(l,{name:"fail"}),children:t.content})]}),r(c,{title:t.rightIcon,children:[a(n,{title:t.cell,clickable:!0,rightIcon:a(l,{name:"arrow-up"}),children:t.content}),a(n,{title:t.cell,clickable:!0,rightIcon:a(l,{name:"arrow-right"}),children:t.content}),a(n,{title:t.cell,clickable:!0,rightIcon:a(l,{name:"arrow-down"}),children:t.content})]}),a(c,{title:t.childrenOnly,children:a(n,{children:t.content})}),r(c,{title:t.itemsAlign,children:[a(n,{itemsAlign:"middle",title:t.cell,description:t.desc,children:t.content}),a(n,{itemsAlign:"bottom",title:t.cell,description:t.desc,children:t.content})]})]})}));var d={"zh-CN":{content:"内容",cell:"单元格",groupTitle:"分组标题",desc:"描述信息",basicUsage:"基础用法",childrenOnly:"只设置 children",clickable:"可点击的",leftIcon:"左侧图标",rightIcon:"展示箭头",itemsAlign:"垂直居中"},"en-US":{content:"Content",cell:"Cell title",groupTitle:"Group Title",desc:"Description",basicUsage:"Basic Usage",clickable:"Clickable",childrenOnly:"Children only",leftIcon:"Left Icon",rightIcon:"Right Icon",itemsAlign:"Vertical center"}}}}}))}();
