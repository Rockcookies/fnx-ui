import{r as h,b as s,F as u,j as e}from"./index-cd4e7e60.js";import{D as i}from"./index-35b21a8e.js";import{D as m}from"./index-2d31b93e.js";import{u as l}from"./use-demo-translate-12013308.js";import"./config-component-props-c0788442.js";import"./use-creation-8e5f7930.js";import"./use-merged-prop-ref-cafd8c02.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-c068296a.js";import"./index-d324247a.js";import"./index-9b67d0d8.js";import"./use-theme-8af7e58d.js";import"./config-data-names-61b5c28d.js";import"./misc-276e45ca.js";import"./detect-9e279ab2.js";import"./format-73c0cb3b.js";import"./use-safe-state-d9c7269b.js";import"./use-unmounted-ref-6de2b6b3.js";import"./event-471798e4.js";import"./touch-helper-e91fac31.js";import"./index-3da51154.js";import"./index-429bf8ad.js";import"./index-737a08aa.js";import"./constants-905d732f.js";import"./use-get-state-1555c2a1.js";const T={"zh-CN":{day:"日",year:"年",month:"月",hour:"时",timeType:"选择时间",dateType:"选择年月日",dateTimeType:"选择完整时间",dateHourType:"选择年月日小时",monthDayType:"选择月日",yearMonthType:"选择年月",optionFilter:"选项过滤器",sortColumns:"自定义列排序"},"en-US":{day:" Day",year:" Year",month:" Month",hour:"hour",timeType:"Choose Time",dateType:"Choose Date",dateTimeType:"Choose DateTime",dateHourType:"Choose DateHour",monthDayType:"Choose Month-Day",yearMonthType:"Choose Year-Month",optionFilter:"Option Filter",sortColumns:"Columns Order"}};function V(){const[t]=l(T,"en-US"),r=h.useMemo(()=>new Date,[]),a=(n,o)=>n==="year"?o+t.year:n==="month"?o+t.month:n==="day"?o+t.day:n==="hour"?o+t.hour:o,p=(n,o)=>n==="minute"?o.filter(y=>Number(y)%5===0):o;return s(u,{children:[e(m,{title:t.dateType,children:e(i,{title:t.dateType,defaultValue:r})}),e(m,{title:t.yearMonthType,children:e(i,{title:t.yearMonthType,defaultValue:r,columnsLayout:"year,month",formatter:a})}),e(m,{title:t.monthDayType,children:e(i,{title:t.monthDayType,defaultValue:r,columnsLayout:"month,day",formatter:a})}),e(m,{title:t.timeType,children:e(i.TimePicker,{title:t.timeType,defaultValue:r,formatter:a,minHour:19,maxMinute:30})}),e(m,{title:t.dateTimeType,children:e(i,{title:t.dateTimeType,defaultValue:r,columnsLayout:"year,month,day,hour,minute"})}),e(m,{title:t.optionFilter,children:e(i.TimePicker,{title:t.optionFilter,defaultValue:r,filter:p})}),e(m,{title:t.sortColumns,children:e(i,{title:t.sortColumns,defaultValue:r,columnsLayout:"minute,hour,day,month,year",filter:p,formatter:a})})]})}export{V as default};