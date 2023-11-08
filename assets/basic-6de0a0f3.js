import{r as j,R as E,j as t,c as M,a as v}from"./index-8b435b75.js";import{D as l}from"./index-588a6987.js";import{u as R}from"./use-demo-translate-489d42ac.js";import{c as U}from"./config-component-props-c0788442.js";import{d as F}from"./style-696f78db.js";import{t as G}from"./react-a0edb2dd.js";import{B as r}from"./index-6f2e6b84.js";import{R as c}from"./index-b027de9f.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";import"./detect-9e279ab2.js";import"./index-f0ac2a00.js";import"./format-3509efe4.js";import"./constants-a731eda5.js";import"./event-471798e4.js";import"./misc-276e45ca.js";import"./use-checkbox-render-55b93ea6.js";import"./use-merged-prop-78f8d6c6.js";import"./use-controlled-state-e2423fe7.js";import"./use-merged-prop-ref-bd8415d7.js";import"./use-update-effect-311108d7.js";function C(){const[e,i]=j.useState(!1);return j.useEffect(()=>{i(F())},[]),e}const f="fnx-space",D=v(f),I="8px",P=U({direction:"horizontal"}),_=e=>e==null?I:typeof e=="number"?"".concat(e,"px"):e,k=e=>{const[{direction:i},{align:m,size:n,wrap:u,fill:z,children:B,className:N,style:$,...w}]=P(e),d=C(),[y,h]=E.useMemo(()=>(Array.isArray(n)?n:[n,n]).map(a=>_(a)),[n]),x=G(B);if(x.length<=0)return null;const o={};u&&(o.flexWrap="wrap",d||(o.marginBottom="-".concat(h))),d&&(o.columnGap=y,o.rowGap=h);const g=x.length-1;return t.jsx("div",{className:M(D({[i]:!0,["align-".concat(m)]:i==="horizontal",wrap:u,fill:z}),N),style:{...o,...$},...w,children:x.map((a,b)=>{const A=a&&a.key||"".concat(f,"-").concat(b),p={};return d||(i==="vertical"?p.marginBottom=b<g?y:void 0:(p.marginRight=b<g?y:void 0,p.paddingBottom=u?h:void 0)),t.jsx("div",{className:"".concat(f,"-item"),style:p,children:a},A)})})};k.displayName="Space";const s=k;const S=v("demo-space"),T={"zh-CN":{basicUsage:"基础用法",vertical:"垂直排列",customSize:"自定义间距",align:"对齐方式",wrap:"自动换行",button:"按钮"},"en-US":{basicUsage:"Basic Usage",vertical:"Vertical",customSize:"Custom Size",align:"Alignment",wrap:"Auto Wrap",button:"Button"}};function ct(){const[e]=R(T,"en-US"),[i,m]=j.useState("center");return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:e.basicUsage,cardMode:!0,children:t.jsxs(s,{children:[t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button})]})}),t.jsx(l,{title:e.vertical,cardMode:!0,children:t.jsxs(s,{direction:"vertical",fill:!0,children:[t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button})]})}),t.jsxs(l,{title:e.customSize,cardMode:!0,children:[t.jsxs(s,{size:4,style:{marginBottom:16},children:[t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button})]}),t.jsxs(s,{size:"2rem",children:[t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button}),t.jsx(r,{type:"primary",block:!0,children:e.button})]})]}),t.jsxs(l,{title:e.align,cardMode:!0,children:[t.jsxs(c.Group,{value:i,direction:"horizontal",onChange:n=>{m(n)},style:{marginBottom:16},children:[t.jsx(c,{value:"start",children:"start"}),t.jsx(c,{value:"center",children:"center"}),t.jsx(c,{value:"end",children:"end"}),t.jsx(c,{value:"baseline",style:{marginRight:0},children:"baseline"})]}),t.jsxs(s,{align:i,className:S("align-section"),children:[t.jsx(r,{type:"primary",children:i}),t.jsx("div",{className:S("align-block"),children:"Block"})]})]}),t.jsx(l,{title:e.wrap,cardMode:!0,children:t.jsxs(s,{wrap:!0,children:[t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button}),t.jsx(r,{type:"primary",children:e.button})]})})]})}export{ct as default};