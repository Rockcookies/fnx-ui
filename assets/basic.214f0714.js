import{r as e}from"./vendor.91a89506.js";import{D as r}from"./index.bdd522ec.js";import{u as o}from"./use-demo-translate.b61ddd84.js";import{d as s,a as t,e as c}from"./index.0254330e.js";import{j as i,F as a,a as d,b as n}from"./index.8f02c309.js";import"./use-theme.882b248e.js";import"./scroll.d13c3de3.js";import"./history-utils.bc3c1dee.js";const l=n("demo-circle"),m={"zh-CN":{basicUsage:"基础用法",gradient:"渐变色",gapPosition:"仪表盘",customSize:"大小定制",customStyle:"样式定制",customColor:"颜色定制",customWidth:"宽度定制",counterClockwise:"逆时针",incr:"增加",decr:"减少"},"en-US":{basicUsage:"BasicUsage",gradient:"Gradient",gapPosition:"Dashboard",customSize:"Custom Size",customStyle:"Custom Style",customColor:"Custom Color",customWidth:"Custom Width",counterClockwise:"Counter Clockwise",incr:"Add",decr:"Decrease"}};function u(){const[n]=o(m,"en-US"),[u,h]=e.exports.useState(70);return i(a,{children:[d(r,{title:n.basicUsage,cardMode:!0,children:d("div",{className:l("block"),children:i(s,{progress:u,children:[u,"%"]})})}),i(r,{title:n.customStyle,children:[i("div",{className:l("block"),children:[d(s,{progress:u,strokeWidth:2,children:n.customWidth}),d(s,{progress:u,strokeColor:"var(--fnx-danger-color)",trailColor:"var(--fnx-gray-400)",children:n.customColor}),d(s,{progress:u,strokeColor:{"0%":"var(--fnx-danger-color)","100%":"var(--fnx-warning-color)"},children:n.gradient}),d(s,{progress:u,clockwise:!1,children:n.counterClockwise}),d(s,{progress:u,size:"120px",children:n.customSize})]}),i("div",{className:l("buttons"),children:[d(t,{className:l("button"),type:"primary",onClick:()=>{h(c(u+15,0,100))},children:n.incr}),d(t,{className:l("button"),type:"danger",onClick:()=>{h(c(u-15,0,100))},children:n.decr})]})]})]})}export{u as default};
