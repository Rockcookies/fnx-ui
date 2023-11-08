import{r as m,j as e,c as p,a as F}from"./index-8b435b75.js";import{c as H}from"./config-component-props-c0788442.js";import{u as T}from"./use-controlled-state-e2423fe7.js";import{u as V}from"./index-ebeef9c4.js";import{B as j}from"./constants-a731eda5.js";import{c as $}from"./format-3509efe4.js";import{n as q}from"./misc-276e45ca.js";import{D as d}from"./index-588a6987.js";import{u as A}from"./use-demo-translate-489d42ac.js";import{I as E}from"./index-f0ac2a00.js";import"./use-merged-prop-ref-bd8415d7.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-311108d7.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";import"./detect-9e279ab2.js";const G="fnx-pagination",r=F(G),J=H({total:82,defaultCurrent:1,pageSize:10,hideOnSinglePage:!1,forceEllipses:!1,onChange:q,mode:"multi",slots:{},pageItemCount:5}),I=m.forwardRef((n,R)=>{const C=V("pagination"),[{total:g,defaultCurrent:U,pageSize:u,hideOnSinglePage:k,forceEllipses:w,onChange:z,mode:M,slots:P,pageItemCount:l},{current:D,className:_,...O}]=J(n),{value:N,onChangeRef:y}=T({value:D,defaultValue:U,onChange:t=>z(t,u)}),o=m.useMemo(()=>Math.floor((g-1)/u)+1,[g,u]),{current:i,canNext:b,canPrev:B}=m.useMemo(()=>{const t=$(N,1,o);return{current:t,canPrev:t>1,canNext:t<o}},[N,o]),S=m.useRef(null);m.useImperativeHandle(R,()=>S.current);const h=(t,a,s)=>e.jsx("li",{className:p([r("item",{active:s}),r("page"),j]),children:e.jsx("button",{"aria-current":s||void 0,onClick:()=>{x(t)},children:a})},t),L=()=>{if(M==="simple")return e.jsxs("li",{className:r("page-dec"),children:[i,"/",o]});const t=[];let a=1,s=o;const v=l<o;v&&(a=Math.max(i-Math.floor(l/2),1),s=a+l-1,s>o&&(s=o,a=s-l+1));for(let c=a;c<=s;c++)t.push(h(c,c,i===c));return v&&l>0&&w&&(a>1&&t.unshift(h(a-1,"...")),s<o&&t.push(h(s+1,"..."))),t},x=t=>{t!==i&&y.current(t)};return e.jsxs("ul",{className:p([r({simple:M==="simple",hidden:k&&g<=u}),_]),...O,ref:S,children:[e.jsx("li",{className:p(r("item",{disabled:!B}),r("prev"),j),children:e.jsx("button",{type:"button",disabled:!B,onClick:()=>x(i-1),children:P.prev||C.prev})}),L(),e.jsx("li",{className:p(r("item",{disabled:!b}),r("next"),j),onClick:()=>{b&&x(i+1)},children:P.next||C.next})]})});I.displayName="Pagination";const f=I,K={"zh-CN":{basicUsage:"基本用法",simpleMode:"简单模式",ellipses:"状态",customButton:"自定义按钮"},"en-US":{basicUsage:"Basic Usage",simpleMode:"simple Mode",ellipses:"Show Ellipses",customButton:"Custom Button"}};function ue(){const[n]=A(K,"en-US");return e.jsxs(e.Fragment,{children:[e.jsx(d,{cardMode:!0,title:n.basicUsage,children:e.jsx(f,{total:80,defaultCurrent:1})}),e.jsx(d,{cardMode:!0,title:n.simpleMode,children:e.jsx(f,{total:60,mode:"simple"})}),e.jsx(d,{cardMode:!0,title:n.ellipses,children:e.jsx(f,{total:125,forceEllipses:!0,defaultCurrent:8,pageItemCount:3})}),e.jsx(d,{cardMode:!0,title:n.customButton,children:e.jsx(f,{total:80,slots:{prev:e.jsx(E,{name:"arrow-left"}),next:e.jsx(E,{name:"arrow-right"})}})})]})}export{ue as default};