import{r as t,j as s,c as E,a as P}from"./index-8b435b75.js";import{C as S,D as I}from"./index-fdd3a7d6.js";import{c as _}from"./config-component-props-c0788442.js";import{u as O}from"./use-controlled-state-e2423fe7.js";import{u as k}from"./use-merged-prop-78f8d6c6.js";import{I as z}from"./index-f0ac2a00.js";import{n as F}from"./misc-276e45ca.js";import{R as M}from"./react-a0edb2dd.js";const $="fnx-tag",c=P($),w=_({type:"default",size:"md",closeable:!1,onClose:F}),m=t.forwardRef((u,f)=>{const p=t.useContext(S.Context),n=t.useRef(null),[{type:d,size:i,closeable:C,onClose:x},{color:r,textColor:l,visible:g,theme:a,closeIcon:b,className:D,style:N,children:R,transitionDuration:T,...h}]=w(u);t.useImperativeHandle(f,()=>n.current);const e=k(p.transitionDuration,T),{value:v,onChangeRef:y}=O({defaultValue:!0,value:g,onChange:o=>{o||x()}}),j=()=>{const o={};return a==="plain"?(o.color=l||r,o.borderColor=r):(o.color=l,o.backgroundColor=r),e!=null&&e!==I.transitionDuration&&(o.transitionDuration="".concat(e,"ms")),{...o,...N}};return s.jsx(M,{classNames:"fnx-fade",in:v,timeout:e||0,nodeRef:n,unmountOnExit:!0,children:s.jsxs("span",{...h,className:E(c({[d]:!0,[i]:i!=="md",...a!=null?{[a]:!0}:{}}),D),style:j(),ref:n,children:[R,C&&s.jsx("span",{className:c("close"),onClick:o=>{o.stopPropagation(),y.current(!1)},children:b||s.jsx(z,{name:"cross"})})]})})});m.displayName="Tag";const q=m;export{q as T};