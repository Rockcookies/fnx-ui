!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./vendor-legacy.ea70b7e5.js","./manifest-legacy.1df8d73b.js","./index-legacy.62b6300c.js","./use-demo-translate-legacy.38f06560.js","./index-legacy.f9880ffd.js","./index-legacy.1c1624a9.js","./use-theme-legacy.ea1a2525.js"],(function(t,r){"use strict";var n,o,a,i,u,l,y;return{setters:[function(e){n=e.r},function(e){o=e.a,a=e.F,i=e.j,u=e.W},function(e){l=e.D},function(e){y=e.u},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(y(r,"en-US"),1)[0],c=n.exports.useMemo((function(){return new Date}),[]),m=function(e,r){return"year"===e?r+t.year:"month"===e?r+t.month:"day"===e?r+t.day:"hour"===e?r+t.hour:r},f=function(e,t){return"minute"===e?t.filter((function(e){return Number(e)%5==0})):t};return o(a,{children:[i(l,{title:t.dateType,children:i(u,{title:t.dateType,defaultValue:c})}),i(l,{title:t.yearMonthType,children:i(u,{title:t.yearMonthType,defaultValue:c,columnsLayout:"year,month",formatter:m})}),i(l,{title:t.monthDayType,children:i(u,{title:t.monthDayType,defaultValue:c,columnsLayout:"month,day",formatter:m})}),i(l,{title:t.timeType,children:i(u.TimePicker,{title:t.timeType,defaultValue:c,formatter:m,minHour:19,maxMinute:30})}),i(l,{title:t.dateTimeType,children:i(u,{title:t.dateTimeType,defaultValue:c,columnsLayout:"year,month,day,hour,minute"})}),i(l,{title:t.optionFilter,children:i(u.TimePicker,{title:t.optionFilter,defaultValue:c,filter:f})}),i(l,{title:t.sortColumns,children:i(u,{title:t.sortColumns,defaultValue:c,columnsLayout:"minute,hour,day,month,year",filter:f,formatter:m})})]})}));var r={"zh-CN":{day:"日",year:"年",month:"月",hour:"时",timeType:"选择时间",dateType:"选择年月日",dateTimeType:"选择完整时间",dateHourType:"选择年月日小时",monthDayType:"选择月日",yearMonthType:"选择年月",optionFilter:"选项过滤器",sortColumns:"自定义列排序"},"en-US":{day:" Day",year:" Year",month:" Month",hour:"hour",timeType:"Choose Time",dateType:"Choose Date",dateTimeType:"Choose DateTime",dateHourType:"Choose DateHour",monthDayType:"Choose Month-Day",yearMonthType:"Choose Year-Month",optionFilter:"Option Filter",sortColumns:"Columns Order"}}}}}))}();
