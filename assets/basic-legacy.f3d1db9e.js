!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.fbda9b43.js","./index-legacy.270a4a13.js","./use-demo-translate-legacy.8e39ce93.js","./index-legacy.bbceece0.js","./use-theme-legacy.2614fe81.js","./scroll-legacy.6c8a6853.js"],(function(e,n){"use strict";var o,c,a,i,u,l,s,f,d,m;return{setters:[function(e){o=e.C,c=e.P,a=e.A,i=e.h,u=e.I},function(e){l=e.D},function(e){s=e.u},function(e){f=e.j,d=e.F,m=e.a},function(){},function(){}],execute:function(){e("default",(function(){var e=r(s(n,"en-US"),1)[0],y=function(e,t){return m(o,{title:e,content:t,clickable:!0,rightIcon:m(u,{name:"arrow-right"})})};return f(d,{children:[m(l,{title:e.basicUsage,cardMode:!0,children:f(o.Group,{children:[m(c.Select,{round:!0,select:m(a,{}),children:function(t){return y(e.selectSingle,g(t))}}),m(c.Select,{round:!0,select:m(a.Multi,{}),children:function(t){return y(e.selectMultiple,function(t){if(t&&t.length)return e.selectCount(t.length)}(t))}}),m(c.Select,{round:!0,select:m(a.Range,{}),children:function(t){return y(e.selectRange,h(t))}})]})}),m(l,{title:e.customCalendar,cardMode:!0,children:f(o.Group,{children:[m(c.Select,{round:!0,select:m(a.Range,{color:"var(--fnx-success-color)"}),children:function(t){return y(e.customColor,h(t))}}),m(c.Select,{round:!0,select:m(a,{minDate:"2010-1-1",maxDate:"2010-1-31"}),children:function(t){return y(e.customRange,g(t))}}),m(c.Select,{round:!0,select:m(a.Range,{confirmText:e.confirmText,confirmDisabledText:e.confirmDisabledText}),children:function(t){return y(e.customConfirm,h(t))}}),m(c.Select,{round:!0,select:m(a.Range,{minDate:"2010-5-1",maxDate:"2010-5-31",slots:{day:function(n){return m(a.Day,t({},function(n){var r=(n=t({},n)).date.getMonth()+1,o=n.date.getDate();return 5===r&&(1===o?n.topInfo=e.laborDay:4===o?n.topInfo=e.youthDay:11===o&&(n.content=e.today)),"start"===n.type?n.bottomInfo=e.in:"end"===n.type&&(n.bottomInfo=e.out),n}(n)))}}}),children:function(t){return y(e.customDayText,h(t))}}),m(c.Select,{position:"right",style:{width:"95%",height:"100%"},select:m(a,{style:{height:"100%"}}),children:function(t){return y(e.customPosition,g(t))}}),m(c.Select,{round:!0,select:m(a.Range,{maxSize:3,onMaxSize:function(){i.show(e.maxSizePrompt(3))}}),children:function(t){return y(e.customRange,h(t))}}),m(c.Select,{select:m(a,{firstDayOfWeek:1}),children:function(t){return y(e.firstDayOfWeek,g(t))}})]})}),m(l,{title:e.tiledDisplay,cardMode:!0,children:m(a,{title:e.calendar})})]})}));var n={"zh-CN":{basicUsage:"基础用法",calendar:"日历",in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",maxRange:"日期区间最大范围",selectCount:function(e){return"选择了 ".concat(e," 个日期")},selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",maxSizePrompt:function(e){return"最多选择 ".concat(e," 天")},tiledDisplay:"平铺展示"},"en-US":{basicUsage:"Basic usage",calendar:"Calendar",in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:function(e){return"".concat(e," dates selected")},selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",maxSizePrompt:function(e){return"Choose no more than ".concat(e," days")},tiledDisplay:"Tiled display"}},y=function(e){if(e)return"".concat(e.getMonth()+1,"/").concat(e.getDate())},g=function(e){if(e)return"".concat(e.getFullYear(),"/").concat(y(e))},h=function(e){if(e&&e.length){var t=r(e,2),n=t[0],o=t[1];return"".concat(y(n)," - ").concat(y(o))}}}}}))}();
