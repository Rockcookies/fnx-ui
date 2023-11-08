import{r as s,j as C,a as fe,c as K}from"./index-8b435b75.js";import{C as Oe}from"./index-fdd3a7d6.js";import{c as ke}from"./config-data-names-c324360a.js";import{u as Me,c as pe}from"./format-3509efe4.js";import{u as Pe}from"./use-creation-3d9fab3f.js";import{u as te}from"./use-merged-prop-ref-bd8415d7.js";import{u as F}from"./use-safe-state-d07d3d84.js";import{u as ne}from"./use-update-effect-311108d7.js";import{b as Y,p as Ie}from"./event-471798e4.js";import{T as Ne}from"./touch-helper-e91fac31.js";import{i as me}from"./misc-276e45ca.js";import{L as we}from"./index-f59b2ddc.js";import{u as Re}from"./index-ebeef9c4.js";import{d as Te}from"./constants-a731eda5.js";import{u as ae}from"./use-get-state-34a6027d.js";const ye=ke({label:"label",value:"value",disabled:"disabled",children:"children"});function oe({dataNames:t,optionHeight:i,transitionDuration:o,visibleOptionsCount:n,...f}){const r=s.useContext(Oe.Context),p=s.useMemo(()=>Me(i||44),[i]),u=ye(t),m=o||r.transitionDuration;return[{optionHeight:p,visibleOptionsCount:n||6,transitionDuration:m,dataNames:u},f]}function de(t,i,o){t=pe(t,0,Math.max(i.length-1,0));for(let n=t;n<i.length;n++)if(!o(i[n]))return n;for(let n=t-1;n>=0;n--)if(!o(i[n]))return n;return t}const Ee="fnx-picker-column",J=fe(Ee),je=t=>{const i=window.getComputedStyle(t),o=i.transform||i.webkitTransform,n=o.slice(7,o.length-1).split(", ")[5];return Number(n)},ce=300,Ve=15,ue=(t,i)=>t*(i-1)/2,W=(t,i)=>de(t,i,o=>o.disabled),he=s.forwardRef((t,i)=>{const{optionHeight:o,visibleOptionsCount:n,defaultValue:f,data:r,dataNames:p}=t,u=s.useRef(t),m=s.useRef(null),P=s.useRef(null),[w,O]=Pe(e=>{const c=[],v=[];for(const l of Array.isArray(r)?r:[])typeof l=="string"||typeof l=="number"?(c.push(l),v.push({value:l,disabled:!1})):(c.push(p.label(l)),v.push({value:p.value(l),disabled:!!p.disabled(l)}));if(!e)return[c,v];const[,T]=e;return me(T,v,(l,b)=>l.value===b.value&&l.disabled===b.disabled)?[c,T]:[c,v]},[p,r]),[k,I]=F(()=>W(O.findIndex(({value:e})=>e===f),O)),d=s.useMemo(()=>{const e=O[k];if(e&&!e.disabled)return e.value},[k,O]),h=te(d),[N,x]=F(()=>-k*o),a=te({data:r,options:O,activeIndex:k,wrapperOffset:N,optionHeight:o}),y=s.useCallback(e=>(I(e),a.current.activeIndex=e,e),[I,a]),M=s.useCallback(e=>(x(e),a.current.wrapperOffset=e,e),[x,a]),[A,j]=F(),V=s.useCallback(()=>{j(void 0),a.current.swipingTimer&&(clearTimeout(a.current.swipingTimer),a.current.swipingTimer=void 0)},[j,a]),q=s.useMemo(()=>ue(o,n),[o,n]),g=s.useCallback((e,{animation:c})=>{const{transitionDuration:v}=u.current,{optionHeight:T,options:l}=a.current;V(),e=W(e,l),M(-e*T);const b=()=>{V(),y(e)};c?(j(v),a.current.swipingTimer=setTimeout(b,v)):b()},[V,y,j,M,a]),R=s.useMemo(()=>({element:m.current,getActiveValue:()=>h.current,getActiveIndex:()=>a.current.activeIndex,getActiveOption:()=>{const{activeIndex:e,data:c}=a.current;return(c||[])[e]}}),[h,a]);s.useImperativeHandle(i,()=>R,[R]),s.useEffect(()=>{const{activeIndex:e}=a.current,c=W(e,O);c!==e&&g(c,{animation:!1})},[O,a,g]),ne(()=>{const{onChange:e}=u.current;if(d!=null&&e){const{activeIndex:c}=a.current;e(d,c)}},[d,a]),s.useEffect(()=>{const e=m.current;if(!e)return;let c,v=0,T=0,l=0,b=0;const L=S=>{c=new Ne,c.start(S);const{swipingTimer:$,optionHeight:U,wrapperOffset:_}=a.current;if($){const z=P.current?je(P.current):0,{visibleOptionsCount:G}=u.current;v=Math.min(0,z-ue(U,G))}else v=_;V(),j(void 0),b=Date.now(),T=v,l=M(v)},D=S=>{if(!c)return;c.move(S),Ie(S,!0);const{optionHeight:$,options:U}=a.current;l=M(pe(v+c.touchData.deltaY,-U.length*$,$));const _=Date.now();_-b>ce&&(b=_,T=l)},B=()=>{if(!c)return;const S=l-T,$=Date.now()-b;if($<ce&&Math.abs(S)>Ve){const be=Math.abs(S/$);l=l+be/.003*(S<0?-1:1)}const{optionHeight:_,options:z}=a.current,G=W(Math.round(-l/_),z);c=void 0,g(G,{animation:!0})};return Y(e,"touchstart",L,{passive:!0}),Y(e,"touchmove",D,{passive:!1}),Y(e,"touchend",B,{passive:!0}),Y(e,"touchcancel",B,{passive:!0}),()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",D),e.removeEventListener("touchend",B),e.removeEventListener("touchcancel",B)}},[m,a,V,M,g,j]);const E=()=>{const e={height:"".concat(o,"px")},c={transform:"translate3d(0, ".concat(N+q,"px, 0)")};return A!=null&&(c.transitionDuration="".concat(A,"ms")),C.jsx("ul",{className:J("wrapper"),style:c,ref:P,children:O.map(({value:v,disabled:T},l)=>{const b=w[l];return C.jsx("li",{className:J("option",{selected:k===l,disabled:T}),tabIndex:0,role:"button",style:e,onClick:()=>g(l,{animation:!0}),children:typeof b=="string"?C.jsx("div",{className:"fnx-ellipsis",children:b}):b},v)})})};return C.jsx("div",{className:J(),ref:m,children:E()})});he.displayName="PickerColumn";const se=he,He="fnx-picker",H=fe(He),ge=s.forwardRef((t,i)=>{const{optionHeight:o,visibleOptionsCount:n,toolbarPosition:f,toolbar:r,title:p,confirmButton:u,cancelButton:m,loading:P,onCancel:w,onConfirm:O,className:k,children:I,...d}=t,h=Re("picker"),N=s.useMemo(()=>o*n,[o,n]),x=()=>{if(p!==!1)return s.isValidElement(p)?p:p&&C.jsx("div",{className:K(H("title"),"fnx-ellipsis"),children:p})},a=()=>{if(m!==!1)return s.isValidElement(m)?m:C.jsx("button",{type:"button",className:H("cancel"),onClick:w,children:m||h.cancel})},y=()=>{if(u!==!1)return s.isValidElement(u)?u:C.jsx("button",{type:"button",className:H("confirm"),onClick:O,children:u||h.confirm})},M=()=>{if(r!==!1)return s.isValidElement(r)?r:C.jsxs("div",{className:H("toolbar"),children:[a(),x(),y()]})};return C.jsxs("div",{className:K(H(),k),...d,ref:i,children:[f!=="bottom"&&M(),C.jsxs("div",{className:H("columns"),style:{height:"".concat(N,"px")},children:[I,C.jsx("div",{className:H("mask"),style:{backgroundSize:"100% ".concat((N-o)/2,"px")}}),C.jsx("div",{className:K(H("frame"),Te),style:{height:"".concat(o,"px")}})]}),f==="bottom"&&M(),P&&C.jsx(we,{className:H("loading")})]})});ge.displayName="PickerContainer";const re=ge,ve=s.forwardRef((t,i)=>{const[{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,dataNames:r},{defaultValue:p,data:u,onChange:m,onConfirm:P,onCancel:w,...O}]=oe(t),k=s.useRef(null),I=s.useRef(null),d=s.useMemo(()=>({element:k.current,getValue:()=>{var h;return(h=I.current)==null?void 0:h.getActiveValue()},getOption:()=>{var h;return(h=I.current)==null?void 0:h.getActiveOption()}}),[]);return s.useImperativeHandle(i,()=>d,[d]),C.jsx(re,{...O,optionHeight:o,visibleOptionsCount:n,ref:k,onConfirm:()=>{P&&P(d.getValue(),d.getOption())},onCancel:()=>{w&&w()},children:C.jsx(se,{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,defaultValue:p,data:u,dataNames:r,onChange:()=>{m&&m(d.getValue(),d.getOption())},ref:I})})});ve.displayName="Picker";const De=ve,Se=De,le=(t=999999)=>Math.floor(Math.random()*t)+1,Q=(t,i)=>{const o=[];for(let n=0;n<t.length;n++){const f=t[n],r=(i||[])[n][f];o.push(r)}return o},X=(t,i,o)=>{const n=t.map(f=>i.value(f));return o&&me(o,n)?o:n},Z=(t,i,o)=>{const n=o||[],f=[];let r=0;for(;t&&t.length>0;){const p=n[r];let u=p!=null?t.findIndex(m=>i.value(m)===p):0;u=de(u,t,m=>!!i.disabled(m)),f[r]=u,t=i.children(t[u])||[],r++}return f},ee=(t,i,o)=>{const n=[];for(let f=0;f<o.length;f++)if(t&&t.length){n.push(t);const r=o[f];t=t[r]&&i.children(t[r])||[]}else n.push([]);return n},Ce=s.forwardRef((t,i)=>{const[{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,dataNames:r},{defaultValue:p,data:u,onChange:m,onConfirm:P,onCancel:w,...O}]=oe(t),k=s.useRef(null),I=te(m),[d,h]=s.useState(()=>Z(u||[],r,p)),[N,x]=s.useState(()=>ee(u||[],r,d).map(g=>[0,g])),[a,y,M]=ae(()=>Q(d,N.map(([,g])=>g))),[A,j,V]=ae(()=>p||X(a,r));s.useImperativeHandle(i,()=>({element:k.current,getOptions:()=>M(),getValue:()=>V()}),[M,V]);const q=(g,R,E)=>{const e=g[R]&&r.children(g[R])||[],c=Z(e,r),v=[...d.slice(0,E),R,...c],T=le(),l=ee(e,r,c).map(D=>[T,D]),b=[...N.slice(0,E+1),...l],L=Q(v,b.map(([,D])=>D));h(v),x(b),y(L),j(D=>X(L,r,D))};return ne(()=>{const g=Z(u||[],r,V()),R=ee(u||[],r,g),E=Q(g,R);h(g),x(()=>{const e=le();return R.map(c=>[e,c])}),y(E),j(e=>X(E,r,e))},[u,r,j,V]),ne(()=>{const g=I.current;g&&g(A,M())},[I,A,M]),C.jsx(re,{...O,optionHeight:o,visibleOptionsCount:n,ref:k,onConfirm:()=>{P&&P(A,a)},onCancel:()=>{w&&w()},children:N.map(([g,R],E)=>C.jsx(se,{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,defaultValue:A[E],data:R,dataNames:r,onChange:(e,c)=>q(R,c,E)},"".concat(g,"-").concat(E)))})});Ce.displayName="PickerCascade";const Ae=Ce,$e=Ae,xe=s.forwardRef((t,i)=>{const[{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,dataNames:r},{defaultValue:p,data:u,onChange:m,onConfirm:P,onCancel:w,...O}]=oe(t),k=s.useRef(null),I=s.useRef({}),d=s.useMemo(()=>Array.isArray(u)?u:[],[u]),h=s.useMemo(()=>{function N(x){const a=[];for(let y=0;y<d.length;y++){const M=I.current[y];M&&a.push(x(M))}return a}return{element:k.current,getValue:()=>N(x=>x.getActiveValue()),getOptions:()=>N(x=>x.getActiveOption())}},[d.length]);return s.useImperativeHandle(i,()=>h,[h]),C.jsx(re,{...O,optionHeight:o,visibleOptionsCount:n,ref:k,onConfirm:()=>{P&&P(h.getValue(),h.getOptions())},onCancel:()=>{w&&w()},children:d.map((N,x)=>C.jsx(se,{optionHeight:o,visibleOptionsCount:n,transitionDuration:f,defaultValue:p&&p[x],data:N,dataNames:r,onChange:()=>{m&&m(h.getValue(),h.getOptions())},ref:a=>{I.current[x]=a}},x))})});xe.displayName="PickerMulti";const _e=xe,Le=_e,ie=Se;ie.Multi=Le;ie.Cascade=$e;const nt=ie;export{nt as P};