import{p as t,I as l,C as i}from"./index.b1de1c6c.js";import{D as u}from"./index.6c086422.js";import{u as d}from"./use-demo-translate.992e3481.js";import{j as c,F as r,a as e,c as o}from"./index.425984b8.js";import"./use-theme.71f392f8.js";import"./scroll.e28dc1a4.js";const s=o("demo-switch"),h={"zh-CN":{title:"\u6807\u9898",basicUsage:"\u57FA\u672C\u7528\u6CD5",disabled:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customChildren:"\u6587\u5B57\u4E0E\u56FE\u6807",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272"},"en-US":{title:"Title",basicUsage:"Basic Usage",disabled:"Disabled",loadingStatus:"Loading",withCell:"Inside a Cell",customChildren:"Text & icon",customSize:"Custom Size",customColor:"Custom Color"}};function N(){const[a]=d(h,"en-US");return c(r,{children:[e(u,{cardMode:!0,title:a.basicUsage,children:e(t,{className:s("switch"),defaultChecked:!0})}),c(u,{cardMode:!0,title:a.disabled,children:[e(t,{className:s("switch"),disabled:!0,defaultChecked:!1}),e(t,{className:s("switch"),disabled:!0,defaultChecked:!0})]}),c(u,{cardMode:!0,title:a.loadingStatus,children:[e(t,{className:s("switch"),loading:!0,defaultChecked:!1}),e(t,{className:s("switch"),loading:!0,defaultChecked:!0})]}),c(u,{cardMode:!0,title:a.customSize,children:[e(t,{className:s("switch"),defaultChecked:!0,size:20}),e(t,{className:s("switch"),defaultChecked:!0,size:30}),e(t,{className:s("switch"),defaultChecked:!0,size:40})]}),e(u,{cardMode:!0,title:a.customColor,children:e(t,{className:s("switch"),defaultChecked:!0,checkedColor:"var(--fnx-danger-color)"})}),c(u,{cardMode:!0,title:a.customChildren,children:[e(t,{className:s("switch"),defaultChecked:!1,checkedChildren:"ON",unCheckedChildren:"OFF"}),e(t,{className:s("switch"),defaultChecked:!0,checkedChildren:e(l,{name:"success"}),unCheckedChildren:e(l,{name:"cross"})})]}),e(u,{cardMode:!0,title:a.withCell,children:e(i,{title:a.title,rightIcon:e(t,{size:20,defaultChecked:!0})})})]})}export{N as default};
