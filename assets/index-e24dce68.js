import{r as t,j as _,c as O,a as Q}from"./index-acc727ed.js";import{c as U}from"./config-component-props-c0788442.js";import{u as X}from"./use-merged-prop-ref-b9b1260a.js";import{b as Y,l as Z}from"./event-471798e4.js";import{a as tt,g as ot}from"./scroll-a0e7f6b9.js";import{i as et,g}from"./style-696f78db.js";import{u as f}from"./format-73c0cb3b.js";import{n as k}from"./misc-276e45ca.js";const nt="fnx-sticky",M=Q(nt),st=U({zIndex:99,offsetTop:0,offsetBottom:0,position:"top",onChange:k,onScroll:k}),N=t.forwardRef((H,I)=>{const[{zIndex:x,offsetTop:y,offsetBottom:v,position:b,onChange:$,onScroll:z},{container:F,children:j,className:A,style:T,...D}]=st(H),[i,L]=t.useState(),[R,V]=t.useState(),[a,W]=t.useState(),[m,q]=t.useState(),E=t.useMemo(()=>f(y),[y]),w=t.useMemo(()=>f(v),[v]),u=t.useRef(null),c=X({position:b,onChange:$,onScroll:z,fixed:i,offsetTop:E,offsetBottom:w,container:F}),B=t.useMemo(()=>({element:u.current,isFixed:()=>!!c.current.fixed}),[c]);t.useImperativeHandle(I,()=>B,[B]);const C=t.useCallback(()=>{const o=u.current;if(!o||et(o))return;const e=g(o);let n=!1;const{container:l,position:p,offsetTop:d,offsetBottom:h}=c.current;let r;if(typeof l=="function"){const s=l();s!=null&&(r=g(s))}else l!=null&&(r=g(l));let S=0;if(p==="top")if(r){const s=r.bottom-d-e.height;n=d>e.top&&r.bottom>0,S=s<0?s:0}else n=d>e.top;else if(p==="bottom"){const{clientHeight:s}=document.documentElement;if(r){const P=s-r.top-h-e.height;n=s-h<e.bottom&&s>r.top,S=P<0?-P:0}else n=s-h<e.bottom}L(n),q(e.width),W(e.height),V(S);const K=tt(window);c.current.onScroll({scrollTop:K,fixed:n})},[c]);t.useEffect(()=>{const o=u.current;if(o==null)return;const e=ot(o),n=()=>C();Y(e,"scroll",n,{passive:!0});const l=Array.from([()=>e.removeEventListener("scroll",n),Z(n)]);return()=>{for(const p of l)p()}},[C]),t.useEffect(()=>{i!=null&&c.current.onChange({fixed:i})},[i,c]);const G=()=>i?{...{width:m!=null?f(m):void 0,height:a!=null?f(a):void 0},...T}:T,J=()=>{if(!i)return;const o={width:m!=null?f(m):void 0,height:a!=null?f(a):void 0,transform:R!=null?`translate3d(0, ${R}px, 0)`:void 0,zIndex:x!=null?x:void 0};return b==="top"?o.top=`${E}px`:o.bottom=`${w}px`,o};return _("div",{className:O(M({fixed:i}),A),style:G(),...D,ref:u,children:_("div",{className:M("container"),style:J(),children:j})})});N.displayName="Sticky";const pt=N;export{pt as S};
