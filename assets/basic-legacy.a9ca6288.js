!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,l=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy.62b6300c.js","./use-demo-translate-legacy.38f06560.js","./manifest-legacy.1df8d73b.js","./vendor-legacy.ea70b7e5.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(t,r){"use strict";var n,i,l,o,a,c,s,u,d,f=document.createElement("style");return f.innerHTML=".demo-notice-bar__notice{padding-top:0;padding-bottom:0}.demo-notice-bar__swipe{height:var(--fnx-notice-bar-height);line-height:var(--fnx-notice-bar-height)}\n",document.head.appendChild(f),{setters:[function(e){n=e.D},function(e){i=e.u},function(e){l=e.a,o=e.F,a=e.j,c=e.V,s=e.I,u=e.S,d=e.c},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(i(f,"en-US"),1)[0];return l(o,{children:[a(n,{title:t.basicUsage,children:a(c,{marquee:!0,leftIcon:a(s,{name:"arrow-left"}),children:t.text})}),a(n,{title:t.marqueeMode,children:a(c,{marquee:!0,children:t.text})}),a(n,{title:t.ellipsis,children:a(c,{ellipsis:!0,children:t.text})}),a(n,{title:t.wrap,children:a(c,{children:t.text})}),a(n,{title:t.rightIcon,children:a(c,{ellipsis:!0,rightIcon:a(s,{name:"arrow-right"}),children:t.shortText})}),a(n,{title:t.closeable,children:a(c,{marquee:!0,closeable:!0,children:t.text})}),a(n,{title:t.customStyle,children:a(c,{marquee:!0,background:"var(--fnx-primary-color)",children:t.text})}),a(n,{title:t.swipe,children:a(c,{className:r("notice"),leftIcon:a(s,{name:"arrow-left"}),children:a(u,{autoplay:3e3,indicator:!1,vertical:!0,className:r("swipe"),children:h.map((function(e){return a(u.Item,{children:e},e)}))})})})]})}));var r=d("demo-notice-bar"),f={"zh-CN":{text:"人生就像各种各样的巧克力，你永远不会知道那一块属于你",shortText:"生生不息，繁荣昌盛",basicUsage:"基础用法",marqueeMode:"滚动播放",ellipsis:"单行省略",wrap:"多行展示",rightIcon:"右侧图标",closeable:"可关闭",customStyle:"自定义样式",swipe:"垂直滚动"},"en-US":{text:"Life was like a box of chocolates, you never know what you’re gonna get.",shortText:"Live long and prosper",basicUsage:"Basic usage",marqueeMode:"Marquee Mode",ellipsis:"Ellipsis",wrap:"Wrap Mode",rightIcon:"Right Icon",closeable:"Closeable",customStyle:"Custom Style",swipe:"Vertical Scroll"}},h=["In My Life","No Reply","Rock And Roll Music","Words of Love"]}}}))}();
