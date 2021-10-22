var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,r=(e,r)=>{for(var l in r||(r={}))o.call(r,l)&&n(e,l,r[l]);if(t)for(var l of t(r))a.call(r,l)&&n(e,l,r[l]);return e};import{C as l,P as s,E as i,I as c,T as d}from"./index.580f1a55.js";import{D as m}from"./index.de723e14.js";import{u}from"./use-demo-translate.a91ac5de.js";import{j as f,F as y,a as g}from"./index.fd2b4eef.js";import"./vendor.74addd0f.js";import"./use-theme.67eface3.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const h={"zh-CN":{basicUsage:"基础用法",calendar:"日历",in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",maxRange:"日期区间最大范围",selectCount:e=>`选择了 ${e} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",maxSizePrompt:e=>`最多选择 ${e} 天`,tiledDisplay:"平铺展示"},"en-US":{basicUsage:"Basic usage",calendar:"Calendar",in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:e=>`${e} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",maxSizePrompt:e=>`Choose no more than ${e} days`,tiledDisplay:"Tiled display"}},p=e=>{if(e)return`${e.getMonth()+1}/${e.getDate()}`},D=e=>{if(e)return`${e.getFullYear()}/${p(e)}`},x=e=>{if(e&&e.length){const[t,o]=e;return`${p(t)} - ${p(o)}`}};function C(){const[e]=u(h,"en-US"),t=(e,t)=>g(l,{title:e,content:t,clickable:!0,rightIcon:g(c,{name:"arrow-right"})});return f(y,{children:[g(m,{title:e.basicUsage,cardMode:!0,children:f(l.Group,{insert:!0,children:[g(s.Select,{round:!0,select:g(i,{}),children:o=>t(e.selectSingle,D(o))}),g(s.Select,{round:!0,select:g(i.Multi,{}),children:o=>t(e.selectMultiple,(t=>{if(t&&t.length)return e.selectCount(t.length)})(o))}),g(s.Select,{round:!0,select:g(i.Range,{}),children:o=>t(e.selectRange,x(o))})]})}),g(m,{title:e.customCalendar,cardMode:!0,children:f(l.Group,{insert:!0,children:[g(s.Select,{round:!0,select:g(i.Range,{color:"var(--fnx-success-color)"}),children:o=>t(e.customColor,x(o))}),g(s.Select,{round:!0,select:g(i,{minDate:"2010-1-1",maxDate:"2010-1-31"}),children:o=>t(e.customRange,D(o))}),g(s.Select,{round:!0,select:g(i.Range,{confirmText:e.confirmText,confirmDisabledText:e.confirmDisabledText}),children:o=>t(e.customConfirm,x(o))}),g(s.Select,{round:!0,select:g(i.Range,{minDate:"2010-5-1",maxDate:"2010-5-31",slots:{day:t=>g(i.Day,r({},(t=>{const o=(t=r({},t)).date.getMonth()+1,a=t.date.getDate();return 5===o&&(1===a?t.topInfo=e.laborDay:4===a?t.topInfo=e.youthDay:11===a&&(t.content=e.today)),"start"===t.type?t.bottomInfo=e.in:"end"===t.type&&(t.bottomInfo=e.out),t})(t)))}}),children:o=>t(e.customDayText,x(o))}),g(s.Select,{position:"right",style:{width:"95%",height:"100%"},select:g(i,{style:{height:"100%"}}),children:o=>t(e.customPosition,D(o))}),g(s.Select,{round:!0,select:g(i.Range,{maxSize:3,onMaxSize:()=>{d.show(e.maxSizePrompt(3))}}),children:o=>t(e.customRange,x(o))}),g(s.Select,{select:g(i,{firstDayOfWeek:1}),children:o=>t(e.firstDayOfWeek,D(o))})]})}),g(m,{title:e.tiledDisplay,cardMode:!0,children:g(i,{title:e.calendar})})]})}export{C as default};
