import{r as u,b as N,c as g,j as o,a as L}from"./index-acc727ed.js";import{I as b}from"./index-95f1e0da.js";import{a as h}from"./format-73c0cb3b.js";const j="fnx-loading",r=L(j),n=u.forwardRef((l,c)=>{const{vertical:i,size:m,color:s,text:t,textColor:d,textSize:p,className:f,style:x,children:a,...y}=l,S=()=>{const e={};return s!=null&&(e.color=s),{...e,...x}};return N("span",{className:g(r({vertical:i}),f),style:S(),"aria-live":"polite","aria-busy":!0,...y,ref:c,children:[o(b.Spinner,{size:m}),(t||a)&&o("span",{className:r("text"),style:{color:s||d,fontSize:h(p)},children:t||a})]})});n.displayName="Loading";const I=n;export{I as L};
