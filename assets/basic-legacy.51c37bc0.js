!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.32c99374.js","./index-legacy.19a397d9.js","./use-demo-translate-legacy.c00047bb.js","./index-legacy.15fc762f.js","./vendor-legacy.1b768d64.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(e){"use strict";var n,o,c,i,a,u,l,s,f,d;return{setters:[function(e){n=e.C,o=e.P,c=e.E,i=e.I,a=e.T},function(e){u=e.D},function(e){l=e.u},function(e){s=e.j,f=e.F,d=e.a},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=r(l(y,"en-US"),1)[0],m=function(e,t){return d(n,{title:e,content:t,clickable:!0,rightIcon:d(i,{name:"arrow-right"})})};return s(f,{children:[d(u,{title:e.basicUsage,cardMode:!0,children:s(n.Group,{insert:!0,children:[d(o.Select,{round:!0,select:d(c,{}),children:function(t){return m(e.selectSingle,g(t))}}),d(o.Select,{round:!0,select:d(c.Multi,{}),children:function(t){return m(e.selectMultiple,function(t){if(t&&t.length)return e.selectCount(t.length)}(t))}}),d(o.Select,{round:!0,select:d(c.Range,{}),children:function(t){return m(e.selectRange,h(t))}})]})}),d(u,{title:e.customCalendar,cardMode:!0,children:s(n.Group,{insert:!0,children:[d(o.Select,{round:!0,select:d(c.Range,{color:"var(--fnx-success-color)"}),children:function(t){return m(e.customColor,h(t))}}),d(o.Select,{round:!0,select:d(c,{minDate:"2010-1-1",maxDate:"2010-1-31"}),children:function(t){return m(e.customRange,g(t))}}),d(o.Select,{round:!0,select:d(c.Range,{confirmText:e.confirmText,confirmDisabledText:e.confirmDisabledText}),children:function(t){return m(e.customConfirm,h(t))}}),d(o.Select,{round:!0,select:d(c.Range,{minDate:"2010-5-1",maxDate:"2010-5-31",slots:{day:function(n){return d(c.Day,t({},function(n){var r=(n=t({},n)).date.getMonth()+1,o=n.date.getDate();return 5===r&&(1===o?n.topInfo=e.laborDay:4===o?n.topInfo=e.youthDay:11===o&&(n.content=e.today)),"start"===n.type?n.bottomInfo=e.in:"end"===n.type&&(n.bottomInfo=e.out),n}(n)))}}}),children:function(t){return m(e.customDayText,h(t))}}),d(o.Select,{position:"right",style:{width:"95%",height:"100%"},select:d(c,{style:{height:"100%"}}),children:function(t){return m(e.customPosition,g(t))}}),d(o.Select,{round:!0,select:d(c.Range,{maxSize:3,onMaxSize:function(){a.show(e.maxSizePrompt(3))}}),children:function(t){return m(e.customRange,h(t))}}),d(o.Select,{select:d(c,{firstDayOfWeek:1}),children:function(t){return m(e.firstDayOfWeek,g(t))}})]})}),d(u,{title:e.tiledDisplay,cardMode:!0,children:d(c,{title:e.calendar})})]})}));var y={"zh-CN":{basicUsage:"基础用法",calendar:"日历",in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",maxRange:"日期区间最大范围",selectCount:function(e){return"选择了 ".concat(e," 个日期")},selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",maxSizePrompt:function(e){return"最多选择 ".concat(e," 天")},tiledDisplay:"平铺展示"},"en-US":{basicUsage:"Basic usage",calendar:"Calendar",in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:function(e){return"".concat(e," dates selected")},selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",maxSizePrompt:function(e){return"Choose no more than ".concat(e," days")},tiledDisplay:"Tiled display"}},m=function(e){if(e)return"".concat(e.getMonth()+1,"/").concat(e.getDate())},g=function(e){if(e)return"".concat(e.getFullYear(),"/").concat(m(e))},h=function(e){if(e&&e.length){var t=r(e,2),n=t[0],o=t[1];return"".concat(m(n)," - ").concat(m(o))}}}}}))}();
