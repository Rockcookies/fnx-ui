import{r as a}from"./vendor.0b9d75aa.js";import{D as o}from"./index.25e661f3.js";import{u as c}from"./use-demo-translate.a86c9613.js";import{a as n,F as f,j as t,x as s,e as i,c as m}from"./manifest.98bead08.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const l=m("demo-sticky"),p={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",offsetTop:"\u5438\u9876\u8DDD\u79BB",offsetBottom:"\u5438\u5E95\u8DDD\u79BB",setContainer:"\u6307\u5B9A\u5BB9\u5668"},"en-US":{basicUsage:"Basic Usage",offsetTop:"Offset Top",offsetBottom:"Offset Bottom",setContainer:"Set Container"}};function D(){const[e]=c(p,"en-US"),r=a.exports.useRef(null);return n(f,{children:[t(o,{title:e.basicUsage,children:t(s,{children:t(i,{type:"primary",style:{marginLeft:"6px"},children:e.basicUsage})})}),t(o,{title:e.offsetTop,children:t(s,{offsetTop:50,children:t(i,{type:"primary",style:{marginLeft:"60px"},children:e.offsetTop})})}),t(o,{title:e.setContainer,children:t("div",{ref:r,className:l("container"),children:t(s,{container:()=>r.current,children:t(i,{type:"warning",style:{marginLeft:"170px"},children:e.setContainer})})})}),n(o,{title:e.setContainer,children:[t("div",{style:{height:"200px"}}),t(s,{offsetBottom:50,position:"bottom",children:t(i,{type:"primary",style:{marginLeft:"6px"},children:e.offsetBottom})})]})]})}export{D as default};
