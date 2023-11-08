import{r as C,j as o,c as d,a as M}from"./index-8b435b75.js";import{b as K,g as ee}from"./index-fdd3a7d6.js";import{u as oe}from"./use-merged-prop-ref-bd8415d7.js";import{P as te}from"./popup-helper-5cd0647a.js";import{e as se,f as re}from"./detect-9e279ab2.js";import{n as k,s as E}from"./misc-276e45ca.js";import{B as ne}from"./index-6f2e6b84.js";import{c as ae}from"./config-component-props-c0788442.js";import{u as ie}from"./index-ebeef9c4.js";import{P as le}from"./index-8d4b6373.js";import{a as U,e as ce}from"./constants-a731eda5.js";import{a as me}from"./format-3509efe4.js";import{C as h}from"./index-fdc7973b.js";import{I as x}from"./index-f0ac2a00.js";import{D as T}from"./index-588a6987.js";import{u as fe}from"./use-demo-translate-489d42ac.js";import{T as de}from"./index-c514c025.js";import{d as ue}from"./demo-doge-1162f15a.js";import"./use-theme-8dbf9539.js";import"./use-merged-prop-78f8d6c6.js";import"./react-a0edb2dd.js";import"./event-471798e4.js";import"./use-on-popup-open-26f1d831.js";import"./scroll-a0e7f6b9.js";import"./touch-helper-e91fac31.js";import"./index-e8afc6c8.js";import"./use-controlled-state-e2423fe7.js";import"./use-update-effect-311108d7.js";const ge="fnx-dialog",n=M(ge),pe=ae({messageAlign:"center",onConfirm:k,onCancel:k,confirmLoading:!1,confirmButtonProps:{},cancelLoading:!1,cancelButtonProps:{},transitionName:"fnx-dialog-bounce",bodyProps:{}}),S=C.forwardRef((e,t)=>{const c=ie("dialog"),[{messageAlign:m,onConfirm:f,onCancel:j,confirmLoading:D,cancelLoading:b,confirmButtonProps:u,cancelButtonProps:a,transitionName:B,bodyProps:g},{title:i,footer:r,width:l,message:s,confirmButton:p,confirmText:W,cancelButton:y,cancelText:$,style:z,className:_,children:P,...q}]=pe(e),v=!!i,A=!!s||!!P,G=r!==!1,J=()=>o.jsx("div",{className:n("header",{isolated:!A}),children:i}),Q=()=>{if(P)return o.jsx("div",{...g,className:d(n("body"),g.className),children:P});if(s)return o.jsx("div",{className:n("message",{"has-header":v,[m]:m}),children:s})},L=({loading:X,children:Y,onClick:I,className:Z,extraProps:N})=>o.jsx(ne,{loading:X,...N,className:d(Z,N.className),onClick:(...R)=>{I&&I(...R),N.onClick&&N.onClick(...R)},children:Y}),V=()=>r?o.jsx("div",{className:d(U,n("footer")),children:r}):o.jsxs("div",{className:d(U,n("footer")),children:[p!==!1&&(p||L({loading:D,children:W||c.confirm,className:n("confirm"),extraProps:u,onClick:f})),y!==!1&&(y||L({loading:b,children:$||c.cancel,className:d(p!==!1?ce:void 0,n("cancel")),extraProps:a,onClick:j}))]});return o.jsxs(le,{role:"dialog",className:d(n(),_),style:{width:me(l),...z},ref:t,overlayCloseable:!1,transitionName:B,...q,onClose:j,children:[v&&J(),A&&Q(),G&&V()]})});S.displayName="Dialog";const F=S,H=new te,O=(e,t={})=>H.create(({onUpdate:c,remove:m})=>{const f=()=>{const[{onConfirm:j,onCancel:D,onAfterHide:b,...u},a]=C.useState(e),B=t.locale||ee(),g=(i,r)=>{re(r)||(r=k);const l=r();se(l)?(a(s=>({...s,[i]:!0})),l.then(s=>{a(p=>({...p,[i]:!1,visible:s===!1}))}).catch(()=>{a(s=>({...s,[i]:!1}))})):a(s=>({...s,visible:l===!1}))};return C.useEffect(()=>c(r=>{a(l=>({...l,...r}))}),[]),o.jsx(F,{visible:!0,...u,mountTo:!1,confirmText:u.confirmText||B.confirm,cancelText:u.cancelText||B.cancel,onConfirm:()=>g("confirmLoading",j),onCancel:()=>g("cancelLoading",D),onAfterHide:()=>{m(),b&&b()}})};return f.displayName="DialogStatic",f},t.container),w=F;w.show=e=>O(e);w.clearAll=()=>{H.clear()};w.useDialog=()=>{const e=C.useContext(K),t=oe(e);return C.useMemo(()=>({show:c=>{const{locale:m,mountTo:f}=t.current;return O(c,{locale:m.dialog,container:f()})}}),[t])};const he=w;const xe=M("demo-dialog"),Ce={"zh-CN":{basicUsage:"基础用法",alert:"提示弹窗",alertWithNoTitle:"提示弹窗（无标题）",confirm:"确认弹窗",beforeClose:"异步关闭",perverted:"被阻止了...",customBody:"自定义内容",title:"对话框",content:"一去二三里烟村四五家亭台六七座八九十支花"},"en-US":{basicUsage:"Basic Usage",alert:"Alert",alertWithNoTitle:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",perverted:"Perverted...",customBody:"Custom Body",title:"Dialog",content:"The quick brown fox jumps over the lazy dog"}};function Je(){const[e]=fe(Ce,"en-US"),t=he.useDialog();return o.jsxs(o.Fragment,{children:[o.jsxs(T,{cardMode:!0,title:e.basicUsage,children:[o.jsx(h,{title:e.alert,clickable:!0,rightIcon:o.jsx(x,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left",cancelButton:!1})}),o.jsx(h,{title:e.alertWithNoTitle,clickable:!0,rightIcon:o.jsx(x,{name:"arrow-right"}),onClick:()=>t.show({message:e.content,messageAlign:"left",cancelButton:!1})}),o.jsx(h,{title:e.confirm,clickable:!0,rightIcon:o.jsx(x,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left"})})]}),o.jsx(T,{cardMode:!0,title:e.beforeClose,children:o.jsx(h,{title:e.beforeClose,clickable:!0,rightIcon:o.jsx(x,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left",onConfirm:async()=>{await E(1e3)},onCancel:async()=>(await E(1e3),de.show(e.perverted),!1)})})}),o.jsx(T,{cardMode:!0,title:e.customBody,children:o.jsx(h,{title:e.customBody,clickable:!0,rightIcon:o.jsx(x,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,children:o.jsx("img",{src:ue,className:xe("img")})})})})]})}export{Je as default};
