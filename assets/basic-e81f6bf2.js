import{j as e}from"./index-8b435b75.js";import{T as r}from"./index-4f8f0121.js";import{D as i}from"./index-588a6987.js";import{u as s}from"./use-demo-translate-489d42ac.js";import{C as l}from"./index-fdc7973b.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";import"./config-component-props-c0788442.js";import"./use-controlled-state-e2423fe7.js";import"./use-merged-prop-ref-bd8415d7.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-311108d7.js";import"./index-f0ac2a00.js";import"./format-3509efe4.js";import"./detect-9e279ab2.js";import"./misc-276e45ca.js";import"./react-a0edb2dd.js";import"./constants-a731eda5.js";const a={"zh-CN":{basicUsage:"基础用法",tag:"标签",type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smSize:"小号标签",lgSize:"大号标签",mdSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{basicUsage:"Basic Usage",tag:"Tag",type:"",mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smSize:"Small Size",lgSize:"Large Size",mdSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},m=["default","primary","success","danger","warning"],c=["plain","round","mark"],n=["sm","md","lg"];function E(){const[o]=s(a,"en-US");return e.jsxs(e.Fragment,{children:[e.jsx(i,{cardMode:!0,title:o.basicUsage,children:m.map(t=>e.jsx(l,{title:"".concat(t," ").concat(o.type),children:e.jsx(r,{type:t,children:o.tag})},t))}),e.jsxs(i,{cardMode:!0,title:o.tagStyle,children:[c.map(t=>e.jsx(l,{title:t,children:e.jsx(r,{type:"primary",theme:t,children:o.tag})},t)),e.jsx(l,{title:o.closeable,children:e.jsx(r,{type:"primary",closeable:!0,children:o.tag})})]}),e.jsx(i,{cardMode:!0,title:o.customSize,children:n.map(t=>e.jsx(l,{title:o["".concat(t,"Size")],children:e.jsx(r,{size:t,type:"primary",children:o.tag})},t))}),e.jsxs(i,{cardMode:!0,title:o.customColor,children:[e.jsx(l,{title:o.customBgColor,children:e.jsx(r,{color:"#7232dd",children:o.tag})}),e.jsx(l,{title:o.customTextColor,children:e.jsx(r,{color:"#ffe1e1",textColor:"#ad0000",children:o.tag})}),e.jsx(l,{title:o.customTextColor,children:e.jsx(r,{color:"#7232dd",theme:"plain",children:o.tag})})]})]})}export{E as default};