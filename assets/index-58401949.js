import{r as e,j as u,c as O,a as b}from"./index-acc727ed.js";import{C as h,D as P}from"./index-f55e3552.js";import{c as R}from"./config-component-props-c0788442.js";import{u as I}from"./use-merged-prop-78f8d6c6.js";import{b as T,p as _}from"./event-471798e4.js";import{C as j}from"./CSSTransition-08aaae48.js";const k="fnx-overlay",z=b(k),F=R({visible:!1,lockScroll:!0}),m=e.forwardRef((p,v)=>{const s=e.useRef(null),d=e.useContext(h.Context),[{visible:a,lockScroll:i},{zIndex:l,transitionDuration:y,className:x,style:C,children:D,...E}]=F(p),n=I(d.transitionDuration,y);e.useImperativeHandle(v,()=>s.current);const[S,r]=e.useState(!1),[o,c]=e.useState(!1);e.useEffect(()=>{if(i&&o&&s.current!=null){const t=s.current,f=N=>{_(N,!0)};return T(t,"touchmove",f,{passive:!1}),()=>{t.removeEventListener("touchmove",f)}}},[o,i]),e.useEffect(()=>{a?(c(!0),r(!1)):r(!0)},[a]);const g=()=>{const t={};return l!=null&&(t.zIndex=l),o||(t.display="none"),n!==P.transitionDuration&&(t.transitionDuration=`${n}ms`),{...t,...C}};return u(j,{classNames:"fnx-fade",in:o&&!S,timeout:n||0,nodeRef:s,onExited:()=>{r(!1),c(!1)},children:u("div",{className:O(z(),x),style:g(),...E,ref:s,children:D})})});m.displayName="Overlay";const G=m;export{G as O};
