!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,c,a=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(o){l=!0,c=o}finally{try{i||null==n.return||n.return()}finally{if(l)throw c}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.32c99374.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(e){"use strict";var n,r,c,a,i,l,o;return{setters:[function(t){n=t.D},function(t){r=t.u},function(t){c=t.g,a=t.I},function(t){i=t.a,l=t.j,o=t.F},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(r(u,"en-US"),1)[0],s=new Array(3).fill(0).map((function(t,n){return i(c.Item,{title:"".concat(e.title," 1"),children:e.paragraph},n)}));return l(o,{children:[i(n,{title:e.basicUsage,children:i(c,{defaultActiveKey:"0",children:s})}),i(n,{title:e.accordion,children:i(c,{accordion:!0,defaultActiveKey:"0",children:s})}),i(n,{title:e.ghost,children:i(c,{ghost:!0,defaultActiveKey:"0",children:s})}),i(n,{title:e.disable,children:l(c,{children:[i(c.Item,{title:"".concat(e.title," 1"),children:e.paragraph}),i(c.Item,{disabled:!0,title:"".concat(e.title," 2"),children:e.paragraph}),i(c.Item,{disabled:!0,title:"".concat(e.title," 3"),children:e.paragraph})]})}),i(n,{title:e.custom,children:l(c,{children:[i(c.Item,{title:"".concat(e.title," 1"),headerProps:{leftIcon:i(a,{name:"success"})},children:e.paragraph}),i(c.Item,{title:"".concat(e.title," 2"),headerProps:{leftIcon:i(a,{name:"success"}),content:e.content},children:e.paragraph})]})})]})}));var u={"zh-CN":{paragraph:"一去二三里烟村四五家亭台六七座八九十支花",title:"标题",basicUsage:"基础用法",accordion:"手风琴",disable:"禁用状态",ghost:"幽灵模式",custom:"自定义内容",content:"内容"},"en-US":{paragraph:"The quick brown fox jumps over the lazy dog",title:"Title",basicUsage:"Basic Usage",accordion:"Accordion",disable:"Disabled",ghost:"Ghost Mode",custom:"Custom Content",content:"content"}}}}}))}();
