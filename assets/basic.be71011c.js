import{L as r}from"./index.b1de1c6c.js";import{D as l}from"./index.6c086422.js";import{u as c}from"./use-demo-translate.992e3481.js";import{j as a,F as t,a as e,c as n}from"./index.425984b8.js";import"./use-theme.71f392f8.js";import"./scroll.e28dc1a4.js";const o=n("demo-loading"),d={"zh-CN":{loadingText:"\u52A0\u8F7D\u6587\u6848",loadingSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",loadingColor:"\u81EA\u5B9A\u4E49\u989C\u8272",loadingVertical:"\u5782\u76F4\u6392\u5217",loadingTextColor:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272"},"en-US":{loadingText:"Text",loadingSize:"Size",loadingColor:"Color",loadingVertical:"Vertical",loadingTextColor:"Text color"}};function x(){const[i]=c(d,"en-US");return a(t,{children:[a(l,{cardMode:!0,title:i.loadingSize,children:[e("p",{className:o("item"),children:e(r,{size:12,color:"var(--fnx-primary-color)"})}),e("p",{className:o("item"),children:e(r,{size:"3rem"})})]}),a(l,{cardMode:!0,title:i.loadingColor,children:[e("p",{className:o("item"),children:e(r,{color:"var(--fnx-success-color)"})}),e("p",{className:o("item"),children:e(r,{color:"var(--fnx-danger-color)"})})]}),e(l,{cardMode:!0,title:i.loadingText,children:e("p",{className:o("item"),children:e(r,{children:"Loading..."})})}),e(l,{cardMode:!0,title:i.loadingVertical,children:e("p",{className:o("item"),children:e(r,{vertical:!0,size:24,children:"Loading..."})})}),a(l,{cardMode:!0,title:i.loadingTextColor,children:[e("p",{className:o("item"),children:e(r,{size:24,vertical:!0,color:"var(--fnx-primary-color)",children:"Loading..."})}),e("p",{className:o("item"),children:e(r,{size:24,vertical:!0,textColor:"var(--fnx-primary-color)",children:"Loading..."})})]})]})}export{x as default};
