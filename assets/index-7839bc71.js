import{r as t,j as m,c as G,a as k}from"./index-acc727ed.js";import{c as h}from"./config-component-props-c0788442.js";import{a as B,B as M}from"./constants-905d732f.js";import{a as N}from"./format-73c0cb3b.js";import{t as _}from"./react-354fcae6.js";import{u as b}from"./use-merged-prop-78f8d6c6.js";const S=t.createContext({}),C="fnx-grid",I=k(C),w=h({columnSize:4,clickable:!1,gutter:0,border:!0,square:!1}),E=t.forwardRef((u,f)=>{const[{columnSize:p,clickable:g,gutter:n,border:i,square:y},{className:l,children:a,style:r,...c}]=w(u),d=_(a);return m("div",{className:G(I(),i&&n<=0?B:void 0,l),...c,ref:f,style:{paddingLeft:N(n),...r},children:m(S.Provider,{value:{columnSize:p,clickable:g,gutter:n,border:i,square:y},children:d.map((e,s)=>t.isValidElement(e)?t.cloneElement(e,{key:e.key!=null?e.key:s,...e.props,"data-fnx-grid-item-index":s}):e)})})});E.displayName="Grid";const z=E,O="fnx-grid-item",v=k(O),P=t.forwardRef((u,f)=>{const{className:p,children:g,clickable:n,square:i,style:y,...l}=u,{gutter:a,columnSize:r,border:c,...d}=t.useContext(S),e=b(!1,n,d.clickable),s=b(!1,i,d.square),x=l["data-fnx-grid-item-index"],o=t.useMemo(()=>N(a),[a]),$=t.useMemo(()=>({flexBasis:r!=null?`${100/r}%`:void 0,paddingRight:o,marginTop:x!=null&&r!=null&&x>=r?o:void 0}),[r,o,x]),q=t.useMemo(()=>s&&o!=null?{width:`calc(100% - ${o})`}:{right:0},[o,s]);return m("div",{className:v({square:s}),style:$,ref:f,children:m("div",{role:e?"button":void 0,className:G(v("content",{clickable:e,square:s,surround:c&&a}),c?M:void 0,p),style:{...q,...y},...l,children:g})})});P.displayName="GridItem";const j=P,R=z;R.Item=j;const H=R;export{H as G};
