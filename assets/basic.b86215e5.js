import{r as e}from"./vendor.74addd0f.js";import{z as t}from"./index.580f1a55.js";import{D as o}from"./index.de723e14.js";import{u as a}from"./use-demo-translate.a91ac5de.js";import{j as r,F as i,a as m}from"./index.fd2b4eef.js";import"./use-theme.67eface3.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const n={"zh-CN":{day:"日",year:"年",month:"月",hour:"时",timeType:"选择时间",dateType:"选择年月日",dateTimeType:"选择完整时间",dateHourType:"选择年月日小时",monthDayType:"选择月日",yearMonthType:"选择年月",optionFilter:"选项过滤器",sortColumns:"自定义列排序"},"en-US":{day:" Day",year:" Year",month:" Month",hour:"hour",timeType:"Choose Time",dateType:"Choose Date",dateTimeType:"Choose DateTime",dateHourType:"Choose DateHour",monthDayType:"Choose Month-Day",yearMonthType:"Choose Year-Month",optionFilter:"Option Filter",sortColumns:"Columns Order"}};function l(){const[l]=a(n,"en-US"),u=e.exports.useMemo((()=>new Date),[]),y=(e,t)=>"year"===e?t+l.year:"month"===e?t+l.month:"day"===e?t+l.day:"hour"===e?t+l.hour:t,d=(e,t)=>"minute"===e?t.filter((e=>Number(e)%5==0)):t;return r(i,{children:[m(o,{title:l.dateType,children:m(t,{title:l.dateType,defaultValue:u})}),m(o,{title:l.yearMonthType,children:m(t,{title:l.yearMonthType,defaultValue:u,columnsLayout:"year,month",formatter:y})}),m(o,{title:l.monthDayType,children:m(t,{title:l.monthDayType,defaultValue:u,columnsLayout:"month,day",formatter:y})}),m(o,{title:l.timeType,children:m(t.TimePicker,{title:l.timeType,defaultValue:u,formatter:y,minHour:19,maxMinute:30})}),m(o,{title:l.dateTimeType,children:m(t,{title:l.dateTimeType,defaultValue:u,columnsLayout:"year,month,day,hour,minute"})}),m(o,{title:l.optionFilter,children:m(t.TimePicker,{title:l.optionFilter,defaultValue:u,filter:d})}),m(o,{title:l.sortColumns,children:m(t,{title:l.sortColumns,defaultValue:u,columnsLayout:"minute,hour,day,month,year",filter:d,formatter:y})})]})}export{l as default};
