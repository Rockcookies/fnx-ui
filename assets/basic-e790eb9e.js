import{r as b,b as P,c as d,a as S,j as o,F as ee}from"./index-acc727ed.js";import{b as oe,g as te}from"./index-f55e3552.js";import{u as re}from"./use-merged-prop-ref-b9b1260a.js";import{P as ne}from"./popup-helper-47ee8b1d.js";import{e as ae,f as se}from"./detect-9e279ab2.js";import{n as v,s as F}from"./misc-276e45ca.js";import{B as ie}from"./index-1ade8160.js";import{c as le}from"./config-component-props-c0788442.js";import{u as ce}from"./index-de276461.js";import{P as me}from"./index-071cdb70.js";import{a as M,e as fe}from"./constants-905d732f.js";import{a as de}from"./format-73c0cb3b.js";import{C as h}from"./index-9ea1a4ee.js";import{I as C}from"./index-95f1e0da.js";import{D as y}from"./index-aac52a1a.js";import{u as ue}from"./use-demo-translate-af347a14.js";import{T as ge}from"./index-ee39d9f7.js";import{d as pe}from"./demo-doge-1162f15a.js";import"./use-theme-f282d90a.js";import"./use-merged-prop-78f8d6c6.js";import"./react-354fcae6.js";import"./event-471798e4.js";import"./use-on-popup-open-e0fdd969.js";import"./scroll-a0e7f6b9.js";import"./touch-helper-e91fac31.js";import"./index-58401949.js";import"./CSSTransition-08aaae48.js";import"./use-controlled-state-2016da2e.js";import"./use-update-effect-9fcceba0.js";const he="fnx-dialog",a=S(he),Ce=le({messageAlign:"center",onConfirm:v,onCancel:v,confirmLoading:!1,confirmButtonProps:{},cancelLoading:!1,cancelButtonProps:{},transitionName:"fnx-dialog-bounce",bodyProps:{}}),H=b.forwardRef((e,t)=>{const c=ce("dialog"),[{messageAlign:m,onConfirm:f,onCancel:B,confirmLoading:k,cancelLoading:N,confirmButtonProps:u,cancelButtonProps:s,transitionName:w,bodyProps:g},{title:i,footer:n,width:l,message:r,confirmButton:p,confirmText:$,cancelButton:A,cancelText:z,style:_,className:q,children:x,...G}]=Ce(e),L=!!i,I=!!r||!!x,J=n!==!1,Q=()=>o("div",{className:a("header",{isolated:!I}),children:i}),V=()=>{if(x)return o("div",{...g,className:d(a("body"),g.className),children:x});if(r)return o("div",{className:a("message",{"has-header":L,[m]:m}),children:r})},R=({loading:Y,children:Z,onClick:U,className:K,extraProps:D})=>o(ie,{loading:Y,...D,className:d(K,D.className),onClick:(...E)=>{U&&U(...E),D.onClick&&D.onClick(...E)},children:Z}),X=()=>n?o("div",{className:d(M,a("footer")),children:n}):P("div",{className:d(M,a("footer")),children:[p!==!1&&(p||R({loading:k,children:$||c.confirm,className:a("confirm"),extraProps:u,onClick:f})),A!==!1&&(A||R({loading:N,children:z||c.cancel,className:d(p!==!1?fe:void 0,a("cancel")),extraProps:s,onClick:B}))]});return P(me,{role:"dialog",className:d(a(),q),style:{width:de(l),..._},ref:t,overlayCloseable:!1,transitionName:w,...G,onClose:B,children:[L&&Q(),I&&V(),J&&X()]})});H.displayName="Dialog";const j=H,O=new ne,W=(e,t={})=>O.create(({onUpdate:c,remove:m})=>{const f=()=>{const[{onConfirm:B,onCancel:k,onAfterHide:N,...u},s]=b.useState(e),w=t.locale||te(),g=(i,n)=>{se(n)||(n=v);const l=n();ae(l)?(s(r=>({...r,[i]:!0})),l.then(r=>{s(p=>({...p,[i]:!1,visible:r===!1}))}).catch(()=>{s(r=>({...r,[i]:!1}))})):s(r=>({...r,visible:l===!1}))};return b.useEffect(()=>c(n=>{s(l=>({...l,...n}))}),[]),o(j,{visible:!0,...u,mountTo:!1,confirmText:u.confirmText||w.confirm,cancelText:u.cancelText||w.cancel,onConfirm:()=>g("confirmLoading",B),onCancel:()=>g("cancelLoading",k),onAfterHide:()=>{m(),N&&N()}})};return f.displayName="DialogStatic",f},t.container),T=j;T.show=e=>W(e);T.clearAll=()=>{O.clear()};T.useDialog=()=>{const e=b.useContext(oe),t=re(e);return b.useMemo(()=>({show:c=>{const{locale:m,mountTo:f}=t.current;return W(c,{locale:m.dialog,container:f()})}}),[t])};const be=T;const Be=S("demo-dialog"),Ne={"zh-CN":{basicUsage:"基础用法",alert:"提示弹窗",alertWithNoTitle:"提示弹窗（无标题）",confirm:"确认弹窗",beforeClose:"异步关闭",perverted:"被阻止了...",customBody:"自定义内容",title:"对话框",content:"一去二三里烟村四五家亭台六七座八九十支花"},"en-US":{basicUsage:"Basic Usage",alert:"Alert",alertWithNoTitle:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",perverted:"Perverted...",customBody:"Custom Body",title:"Dialog",content:"The quick brown fox jumps over the lazy dog"}};function Xe(){const[e]=ue(Ne,"en-US"),t=be.useDialog();return P(ee,{children:[P(y,{cardMode:!0,title:e.basicUsage,children:[o(h,{title:e.alert,clickable:!0,rightIcon:o(C,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left",cancelButton:!1})}),o(h,{title:e.alertWithNoTitle,clickable:!0,rightIcon:o(C,{name:"arrow-right"}),onClick:()=>t.show({message:e.content,messageAlign:"left",cancelButton:!1})}),o(h,{title:e.confirm,clickable:!0,rightIcon:o(C,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left"})})]}),o(y,{cardMode:!0,title:e.beforeClose,children:o(h,{title:e.beforeClose,clickable:!0,rightIcon:o(C,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,message:e.content,messageAlign:"left",onConfirm:async()=>{await F(1e3)},onCancel:async()=>(await F(1e3),ge.show(e.perverted),!1)})})}),o(y,{cardMode:!0,title:e.customBody,children:o(h,{title:e.customBody,clickable:!0,rightIcon:o(C,{name:"arrow-right"}),onClick:()=>t.show({title:e.title,children:o("img",{src:pe,className:Be("img")})})})})]})}export{Xe as default};
