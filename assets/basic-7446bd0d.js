import{r as h,j as t,c as m,a as u}from"./index-8b435b75.js";import{c as p}from"./config-component-props-c0788442.js";import{D as o}from"./index-588a6987.js";import{u as j}from"./use-demo-translate-489d42ac.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";const f="fnx-divider",P=u(f),g=p({dashed:!1,hairline:!0,contentPosition:"center"}),r=h.forwardRef((e,n)=>{const[{dashed:c,hairline:a,contentPosition:d},{className:l,children:i,...x}]=g(e);return t.jsx("div",{className:m(P({dashed:c,hairline:a,["content-".concat(d)]:i!=null}),l),...x,ref:n,children:i})});r.displayName="Divider";const s=r,y={"zh-CN":{basicUsage:"基础用法",text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}};function U(){const[e]=j(y,"en-US");return t.jsxs(t.Fragment,{children:[t.jsx(o,{cardMode:!0,title:e.basicUsage,children:t.jsx(s,{})}),t.jsx(o,{cardMode:!0,title:e.withText,children:t.jsx(s,{children:e.text})}),t.jsxs(o,{cardMode:!0,title:e.contentPosition,children:[t.jsx(s,{contentPosition:"left",children:e.text}),t.jsx(s,{contentPosition:"right",children:e.text}),t.jsx(s,{contentPosition:"center",children:e.text})]}),t.jsx(o,{cardMode:!0,title:e.dashed,children:t.jsx(s,{dashed:!0,hairline:!1,children:e.text})}),t.jsx(o,{cardMode:!0,title:e.customStyle,children:t.jsx(s,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"},children:e.text})})]})}export{U as default};