!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy.6c72ba7c.js","./use-demo-translate-legacy.a40470d5.js","./index-legacy.a2a3e447.js","./index-legacy.7308b9a9.js","./vendor-legacy.8abf57f5.js","./use-theme-legacy.11e698e2.js","./scroll-legacy.a10306e2.js","./history-utils-legacy.110e5e10.js"],(function(t){"use strict";var n,a,r,o,l,c,u;return{setters:[function(e){n=e.D},function(e){a=e.u},function(e){r=e.t,o=e.h},function(e){l=e.j,c=e.F,u=e.a},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(a(i,"en-US"),1)[0];return l(c,{children:[u(n,{title:t.basicUsage,cardMode:!0,children:u(r,{defaultValue:3})}),u(n,{title:t.customIcon,cardMode:!0,children:u(r,{character:"好",defaultValue:3})}),u(n,{title:t.customStyle,cardMode:!0,children:u(r,{color:"var(--fnx-primary-color)",defaultValue:2})}),u(n,{title:t.halfStar,cardMode:!0,children:u(r,{defaultValue:2.5,allowHalf:!0})}),u(n,{title:t.customCount,cardMode:!0,children:u(r,{defaultValue:4,count:6})}),u(n,{title:t.disabled,cardMode:!0,children:u(r,{defaultValue:3,disabled:!0})}),u(n,{title:t.readonly,cardMode:!0,children:u(r,{defaultValue:3,readonly:!0})}),u(n,{title:t.changeEvent,cardMode:!0,children:u(r,{defaultValue:2,onChange:function(e){o.show(t.toastContent(e))}})})]})}));var i={"zh-CN":{basicUsage:"基础用法",halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",changeEvent:"监听 change 事件",toastContent:function(e){return"当前值：".concat(e)}},"en-US":{basicUsage:"Basic usage",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:function(e){return"current value：".concat(e)}}}}}}))}();