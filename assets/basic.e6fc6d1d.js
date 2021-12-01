var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,r=(e,r)=>{for(var l in r||(r={}))o.call(r,l)&&n(e,l,r[l]);if(t)for(var l of t(r))a.call(r,l)&&n(e,l,r[l]);return e};import{C as l,P as s,A as i,I as c,h as m}from"./index.5a6f04ce.js";import{D as u}from"./index.8050eaee.js";import{u as d}from"./use-demo-translate.aaf405bb.js";import{j as f,F as y,a as h}from"./index.b656186a.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const g={"zh-CN":{basicUsage:"基础用法",calendar:"日历",in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",maxRange:"日期区间最大范围",selectCount:e=>`选择了 ${e} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",maxSizePrompt:e=>`最多选择 ${e} 天`,tiledDisplay:"平铺展示"},"en-US":{basicUsage:"Basic usage",calendar:"Calendar",in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:e=>`${e} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",maxSizePrompt:e=>`Choose no more than ${e} days`,tiledDisplay:"Tiled display"}},p=e=>{if(e)return`${e.getMonth()+1}/${e.getDate()}`},D=e=>{if(e)return`${e.getFullYear()}/${p(e)}`},b=e=>{if(e&&e.length){const[t,o]=e;return`${p(t)} - ${p(o)}`}};function x(){const[e]=d(g,"en-US"),t=(e,t)=>h(l,{title:e,content:t,clickable:!0,rightIcon:h(c,{name:"arrow-right"})});return f(y,{children:[h(u,{title:e.basicUsage,cardMode:!0,children:f(l.Group,{insert:!0,children:[h(s.Select,{round:!0,select:h(i,{}),children:o=>t(e.selectSingle,D(o))}),h(s.Select,{round:!0,select:h(i.Multi,{}),children:o=>t(e.selectMultiple,(t=>{if(t&&t.length)return e.selectCount(t.length)})(o))}),h(s.Select,{round:!0,select:h(i.Range,{}),children:o=>t(e.selectRange,b(o))})]})}),h(u,{title:e.customCalendar,cardMode:!0,children:f(l.Group,{insert:!0,children:[h(s.Select,{round:!0,select:h(i.Range,{color:"var(--fnx-success-color)"}),children:o=>t(e.customColor,b(o))}),h(s.Select,{round:!0,select:h(i,{minDate:"2010-1-1",maxDate:"2010-1-31"}),children:o=>t(e.customRange,D(o))}),h(s.Select,{round:!0,select:h(i.Range,{confirmText:e.confirmText,confirmDisabledText:e.confirmDisabledText}),children:o=>t(e.customConfirm,b(o))}),h(s.Select,{round:!0,select:h(i.Range,{minDate:"2010-5-1",maxDate:"2010-5-31",slots:{day:t=>h(i.Day,r({},(t=>{const o=(t=r({},t)).date.getMonth()+1,a=t.date.getDate();return 5===o&&(1===a?t.topInfo=e.laborDay:4===a?t.topInfo=e.youthDay:11===a&&(t.content=e.today)),"start"===t.type?t.bottomInfo=e.in:"end"===t.type&&(t.bottomInfo=e.out),t})(t)))}}),children:o=>t(e.customDayText,b(o))}),h(s.Select,{position:"right",style:{width:"95%",height:"100%"},select:h(i,{style:{height:"100%"}}),children:o=>t(e.customPosition,D(o))}),h(s.Select,{round:!0,select:h(i.Range,{maxSize:3,onMaxSize:()=>{m.show(e.maxSizePrompt(3))}}),children:o=>t(e.customRange,b(o))}),h(s.Select,{select:h(i,{firstDayOfWeek:1}),children:o=>t(e.firstDayOfWeek,D(o))})]})}),h(u,{title:e.tiledDisplay,cardMode:!0,children:h(i,{title:e.calendar})})]})}export{x as default};