import{r as t,j as a,b as E,c as I,a as R}from"./index-acc727ed.js";import{C as _,D as j}from"./index-f55e3552.js";import{c as O}from"./config-component-props-c0788442.js";import{u as k}from"./use-controlled-state-2016da2e.js";import{u as z}from"./use-merged-prop-78f8d6c6.js";import{I as F}from"./index-95f1e0da.js";import{n as M}from"./misc-276e45ca.js";import{C as $}from"./CSSTransition-08aaae48.js";const w="fnx-tag",c=R(w),A=O({type:"default",size:"md",closeable:!1,onClose:M}),m=t.forwardRef((u,f)=>{const p=t.useContext(_.Context),s=t.useRef(null),[{type:d,size:i,closeable:C,onClose:g},{color:n,textColor:l,visible:x,theme:r,closeIcon:b,className:D,style:N,children:T,transitionDuration:h,...v}]=A(u);t.useImperativeHandle(f,()=>s.current);const e=z(p.transitionDuration,h),{value:y,onChangeRef:P}=k({defaultValue:!0,value:x,onChange:o=>{o||g()}}),S=()=>{const o={};return r==="plain"?(o.color=l||n,o.borderColor=n):(o.color=l,o.backgroundColor=n),e!=null&&e!==j.transitionDuration&&(o.transitionDuration=`${e}ms`),{...o,...N}};return a($,{classNames:"fnx-fade",in:y,timeout:e||0,nodeRef:s,unmountOnExit:!0,children:E("span",{...v,className:I(c({[d]:!0,[i]:i!=="md",...r!=null?{[r]:!0}:{}}),D),style:S(),ref:s,children:[T,C&&a("span",{className:c("close"),onClick:o=>{o.stopPropagation(),P.current(!1)},children:b||a(F,{name:"cross"})})]})})});m.displayName="Tag";const J=m;export{J as T};
