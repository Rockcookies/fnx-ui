import{r as p}from"./vendor.0b9d75aa.js";import{D as a}from"./index.25e661f3.js";import{u as s}from"./use-demo-translate.a86c9613.js";import{a as i,F as m,j as e,a0 as n,e as r,M as c,c as h}from"./manifest.98bead08.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const o=h("demo-space"),y={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",vertical:"\u5782\u76F4\u6392\u5217",customSize:"\u81EA\u5B9A\u4E49\u95F4\u8DDD",align:"\u5BF9\u9F50\u65B9\u5F0F",wrap:"\u81EA\u52A8\u6362\u884C",button:"\u6309\u94AE"},"en-US":{basicUsage:"Basic Usage",vertical:"Vertical",customSize:"Custom Size",align:"Alignment",wrap:"Auto Wrap",button:"Button"}};function z(){const[t]=s(y,"en-US"),[l,u]=p.exports.useState("center");return i(m,{children:[e(a,{title:t.basicUsage,cardMode:!0,children:i(n,{children:[e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button})]})}),e(a,{title:t.vertical,cardMode:!0,children:i(n,{direction:"vertical",fill:!0,children:[e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button})]})}),i(a,{title:t.customSize,cardMode:!0,children:[i(n,{size:4,style:{marginBottom:16},children:[e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button})]}),i(n,{size:"2rem",children:[e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button}),e(r,{type:"primary",block:!0,children:t.button})]})]}),i(a,{title:t.align,cardMode:!0,children:[i(c.Group,{value:l,direction:"horizontal",onChange:d=>{u(d)},style:{marginBottom:16},children:[e(c,{value:"start",children:"start"}),e(c,{value:"center",children:"center"}),e(c,{value:"end",children:"end"}),e(c,{value:"baseline",style:{marginRight:0},children:"baseline"})]}),i(n,{align:l,className:o("align-section"),children:[e(r,{type:"primary",children:l}),e("div",{className:o("align-block"),children:"Block"})]})]}),e(a,{title:t.wrap,cardMode:!0,children:i(n,{wrap:!0,children:[e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button}),e(r,{type:"primary",children:t.button})]})})]})}export{z as default};