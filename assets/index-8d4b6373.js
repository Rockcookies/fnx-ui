import{P as z,u as le}from"./use-on-popup-open-26f1d831.js";import{r as e,j as r,b as ie,c as ce,a as ue}from"./index-8b435b75.js";import{b as fe,C as pe,D as de}from"./index-fdd3a7d6.js";import{c as U}from"./config-component-props-c0788442.js";import{u as _}from"./use-merged-prop-78f8d6c6.js";import{c as Y}from"./detect-9e279ab2.js";import{b as V,p as me}from"./event-471798e4.js";import{g as Ce}from"./scroll-a0e7f6b9.js";import{T as ve}from"./touch-helper-e91fac31.js";import{O as ge}from"./index-e8afc6c8.js";import{n as m}from"./misc-276e45ca.js";import{R as xe}from"./react-a0edb2dd.js";import{u as he}from"./use-merged-prop-ref-bd8415d7.js";import{u as F}from"./use-controlled-state-e2423fe7.js";let N=0;const M="fnx-overflow-hidden";function Pe(C,v={}){const c=v.locked||!1;e.useEffect(()=>{if(!c||!Y())return;const s=new ve,a=f=>{s.move(f);const n=s.touchData.deltaY>0?"10":"01",p=Ce(f.target,C.current),{scrollHeight:l,offsetHeight:d,scrollTop:t}=p;let i="11";t===0?i=d>=l?"00":"01":t+d>=l&&(i="10"),i!=="11"&&s.isVertical()&&!(parseInt(i,2)&parseInt(n,2))&&me(f,!0)};return V(document,"touchstart",s.start,{passive:!0}),V(document,"touchmove",a,{passive:!1}),N||document.body.classList.add(M),N++,()=>{document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",a),N--,N||document.body.classList.remove(M)}},[c,C])}const Z=({visible:C=!1,renderOnShow:v,destroyOnHide:c,mountTo:s,children:a})=>{const f=e.useContext(fe),n=e.useRef(null),p=he(s!=null?s:f.mountTo),l=e.useCallback(()=>{if(n.current!=null)return;const t=p.current;if(t===!1){n.current=!1;return}if(!Y())return;let i;typeof t=="function"?i=t():t!=null?i=t:i=document.body;const u=document.createElement("div");i.appendChild(u),n.current=u},[p]),d=e.useCallback(()=>{const t=n.current;n.current=null,t&&setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},0)},[]);return e.useEffect(()=>()=>{d()},[d]),C?l():n.current!=null&&c?d():n.current==null&&!v&&l(),n.current==null?r.jsx(r.Fragment,{}):n.current===!1?r.jsx(r.Fragment,{children:a}):ie.createPortal(a,n.current)||r.jsx(r.Fragment,{})};Z.displayName="Portal";const G=Z,Se="fnx-popup",$=ue(Se);let be=2e3;const ye=U({visible:!1,renderOnShow:!0,destroyOnHide:!1,lockScroll:!0,position:"center",overlay:!0,overlayCloseable:!0,onOverlayClick:m,onClose:m,onBeforeHide:m,onHide:m,onAfterHide:m,onBeforeShow:m,onShow:m,onAfterShow:m}),K=e.forwardRef((C,v)=>{const c=e.useRef(null),s=e.useContext(pe.Context),[{visible:a,renderOnShow:f,destroyOnHide:n,lockScroll:p,position:l,overlay:d,overlayCloseable:t,onOverlayClick:i,onClose:u,onBeforeHide:R,onHide:P,onAfterHide:D,onBeforeShow:k,onShow:x,onAfterShow:S},{mountTo:A,transitionDuration:b,transitionName:y,round:j,safeAreaInsetTop:o,safeAreaInsetBottom:g,overlayClassName:w,overlayStyle:J,children:Q,className:W,style:ee,...te}]=ye(C);e.useImperativeHandle(v,()=>c.current);const[oe,H]=e.useState(!1),[I,B]=e.useState(!1),[O,L]=e.useState(),E=_(s.transitionDuration,b),ne=_(s.safeAreaInsetBottom,g),re=_(s.safeAreaInsetTop,o),se=e.useMemo(()=>y||(l==="center"?"fnx-fade":$(["slide-".concat(l)])),[y,l]);Pe(c,{locked:O!=null&&p}),e.useEffect(()=>{a?(L(++be),B(!0),H(!1)):H(!0)},[a]);const ae=()=>{const h={};return O!=null&&(h.zIndex=O),I||(h.display="none"),E!=null&&E!==de.transitionDuration&&(h.transitionDuration="".concat(E,"ms")),{...h,...ee}};return r.jsx(G,{renderOnShow:f,destroyOnHide:n,mountTo:A,visible:a||I,children:r.jsx(z.Provider,{value:{visible:a||I},children:r.jsxs(r.Fragment,{children:[d&&r.jsx(ge,{visible:a,className:w,style:J,zIndex:O,lockScroll:p,transitionDuration:E,role:t?"button":void 0,tabIndex:t?0:void 0,onClick:h=>{i(h),t&&a&&u()}}),r.jsx(xe,{in:I&&!oe,classNames:se,nodeRef:c,timeout:E||0,onEnter:k,onEntering:x,onEntered:S,onExit:R,onExiting:P,onExited:()=>{L(void 0),H(!1),B(!1),D()},children:r.jsx("div",{className:ce($({round:j,[l]:l}),re&&"fnx-safe-area-top",ne&&"fnx-safe-area-bottom",W),style:ae(),role:"dialog",tabIndex:0,...te,ref:c,children:Q})})]})})})});K.displayName="Popup";const X=K,Ee=U({selectConfirmTrigger:"onConfirm",selectCancelTrigger:"onCancel",selectDefaultValuePropName:"defaultValue",trigger:"onClick",disabled:!1,onClose:m}),q=e.forwardRef((C,v)=>{const[{selectConfirmTrigger:c,selectCancelTrigger:s,selectDefaultValuePropName:a,trigger:f,disabled:n,onClose:p},{visible:l,value:d,defaultValue:t,onChange:i,select:u,position:R,children:P,...D}]=Ee(C),{value:k,onChangeRef:x}=F({value:l,defaultValue:!1}),{value:S,onChangeRef:A}=F({value:d,defaultValue:t,onChange:i}),b=e.useCallback((o,g,...w)=>{g&&typeof g[o]=="function"&&g[o](...w)},[]),y=()=>e.isValidElement(u)?e.cloneElement(u,{...u.props,[a]:S!==void 0?S:u.props[a],[c]:(...o)=>{b(c,u.props,...o),A.current(...o),x.current(!1)},[s]:(...o)=>{b(s,u.props,...o),x.current(!1),p()}}):u,j=()=>{let o=P;return typeof P=="function"&&(o=P(S)),e.isValidElement(o)?e.cloneElement(o,{...o.props,[f]:(...g)=>{n||x.current(!0),b(f,o&&o.props,...g)}}):o};return r.jsxs(r.Fragment,{children:[r.jsx(X,{visible:k,...D,position:R||"bottom",onClose:()=>{x.current(!1),p()},ref:v,children:y()}),j()]})});q.displayName="PopupSelect";const Te=q,Ie=Te,T=X;T.Portal=G;T.Select=Ie;T.Context=z;T.useOnPopupOpen=le;const Me=T;export{Me as P};