import{b as a,F as m,j as o}from"./index-d9abb3b2.js";import{T as r}from"./index-3ab128fb.js";import{D as i}from"./index-031e3f27.js";import{u as c}from"./use-demo-translate-111ff248.js";import{C as l}from"./index-9946c745.js";import"./index-23998fbd.js";import"./use-theme-abf2285a.js";import"./config-component-props-c0788442.js";import"./use-controlled-state-3e95143e.js";import"./use-merged-prop-ref-b6c7dc57.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-e4ebe9a3.js";import"./index-2da9f8c4.js";import"./format-73c0cb3b.js";import"./detect-9e279ab2.js";import"./misc-276e45ca.js";import"./CSSTransition-2913421a.js";import"./constants-905d732f.js";const s={"zh-CN":{basicUsage:"基础用法",tag:"标签",type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smSize:"小号标签",lgSize:"大号标签",mdSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{basicUsage:"Basic Usage",tag:"Tag",type:"",mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smSize:"Small Size",lgSize:"Large Size",mdSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},n=["default","primary","success","danger","warning"],d=["plain","round","mark"],p=["sm","md","lg"];function D(){const[e]=c(s,"en-US");return a(m,{children:[o(i,{cardMode:!0,title:e.basicUsage,children:n.map(t=>o(l,{title:`${t} ${e.type}`,children:o(r,{type:t,children:e.tag})},t))}),a(i,{cardMode:!0,title:e.tagStyle,children:[d.map(t=>o(l,{title:t,children:o(r,{type:"primary",theme:t,children:e.tag})},t)),o(l,{title:e.closeable,children:o(r,{type:"primary",closeable:!0,children:e.tag})})]}),o(i,{cardMode:!0,title:e.customSize,children:p.map(t=>o(l,{title:e[`${t}Size`],children:o(r,{size:t,type:"primary",children:e.tag})},t))}),a(i,{cardMode:!0,title:e.customColor,children:[o(l,{title:e.customBgColor,children:o(r,{color:"#7232dd",children:e.tag})}),o(l,{title:e.customTextColor,children:o(r,{color:"#ffe1e1",textColor:"#ad0000",children:e.tag})}),o(l,{title:e.customTextColor,children:o(r,{color:"#7232dd",theme:"plain",children:e.tag})})]})]})}export{D as default};