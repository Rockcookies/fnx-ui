import{r as x,j as e,c as u,a as p,b as n,F as f}from"./index-d9abb3b2.js";import{c as P}from"./config-component-props-c0788442.js";import{D as i}from"./index-031e3f27.js";import{u as g}from"./use-demo-translate-111ff248.js";import"./index-23998fbd.js";import"./use-theme-abf2285a.js";const y="fnx-divider",v=p(y),D=P({dashed:!1,hairline:!0,contentPosition:"center"}),s=x.forwardRef((t,c)=>{const[{dashed:a,hairline:d,contentPosition:l},{className:h,children:r,...m}]=D(t);return e("div",{className:u(v({dashed:a,hairline:d,[`content-${l}`]:r!=null}),h),...m,ref:c,children:r})});s.displayName="Divider";const o=s,S={"zh-CN":{basicUsage:"基础用法",text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}};function w(){const[t]=g(S,"en-US");return n(f,{children:[e(i,{cardMode:!0,title:t.basicUsage,children:e(o,{})}),e(i,{cardMode:!0,title:t.withText,children:e(o,{children:t.text})}),n(i,{cardMode:!0,title:t.contentPosition,children:[e(o,{contentPosition:"left",children:t.text}),e(o,{contentPosition:"right",children:t.text}),e(o,{contentPosition:"center",children:t.text})]}),e(i,{cardMode:!0,title:t.dashed,children:e(o,{dashed:!0,hairline:!1,children:t.text})}),e(i,{cardMode:!0,title:t.customStyle,children:e(o,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"},children:t.text})})]})}export{w as default};