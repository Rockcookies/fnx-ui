import{r as t}from"./index.5a6f04ce.js";import{D as e}from"./index.8050eaee.js";import{u as i}from"./use-demo-translate.aaf405bb.js";import{j as o,F as r,a as n}from"./index.b656186a.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const s={"zh-CN":{basicUsage:"基础用法",text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}};function a(){const[a]=i(s,"en-US");return o(r,{children:[n(e,{cardMode:!0,title:a.basicUsage,children:n(t,{})}),n(e,{cardMode:!0,title:a.withText,children:n(t,{children:a.text})}),o(e,{cardMode:!0,title:a.contentPosition,children:[n(t,{contentPosition:"left",children:a.text}),n(t,{contentPosition:"right",children:a.text}),n(t,{contentPosition:"center",children:a.text})]}),n(e,{cardMode:!0,title:a.dashed,children:n(t,{dashed:!0,hairline:!1,children:a.text})}),n(e,{cardMode:!0,title:a.customStyle,children:n(t,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"},children:a.text})})]})}export{a as default};