import{r as l,H as v,g as L,h as m,i as b,c as P}from"./vendor.0b9d75aa.js";import{j as n,c as p,a as h,b as E}from"./manifest.98bead08.js";function U(){import("data:text/javascript,")}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="modulepreload",R=function(s,r){return new URL(s,r).href},f={},g=function(r,o,a){return!o||o.length===0?r():Promise.all(o.map(e=>{if(e=R(e,a),e in f)return;f[e]=!0;const t=e.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":S,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((u,y)=>{i.addEventListener("load",u),i.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},x=""+new URL("logo.ba76cee8.svg",import.meta.url).href;const N=p("page-loading"),_=()=>n("div",{className:N(),children:n("img",{src:x})});_.displayName="PageLoading";var O=Object.defineProperty,k=(s,r,o)=>r in s?O(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,w=(s,r,o)=>(k(s,typeof r!="symbol"?r+"":r,o),o);const d=p("error-fallback");class C extends l.exports.Component{constructor(){super(...arguments),w(this,"state",{error:void 0,info:{componentStack:""}})}componentDidCatch(r,o){this.setState({error:r,info:o})}render(){const{children:r,className:o,...a}=this.props,{error:e,info:t}=this.state,c=t&&t.componentStack?t.componentStack:null,i=(e||"").toString(),u=c;return e?h("div",{className:E(d(),o),...a,children:[n("div",{className:d("title"),children:i}),n("div",{className:d("description"),children:n("pre",{children:u})})]}):r}}const D=l.exports.lazy(()=>g(()=>import("./index.8f766603.js").then(s=>s.i),["index.8f766603.js","index.4b7bd2a0.css","vendor.0b9d75aa.js","manifest.98bead08.js","use-theme.179303e8.js"],import.meta.url)),A=l.exports.lazy(()=>g(()=>import("./index.5bb21bf9.js").then(s=>s.i),["index.5bb21bf9.js","index.b2241b67.css","vendor.0b9d75aa.js","manifest.98bead08.js","use-theme.179303e8.js"],import.meta.url));function I(){return n(C,{children:n(v,{children:n(l.exports.Suspense,{fallback:n(_,{}),children:h(L,{children:[n(m,{path:"/demo/:component/:locale/:theme",element:n(D,{})}),n(m,{path:"*",element:n(A,{})})]})})})})}b(document.getElementById("root")).render(n(P.StrictMode,{children:n(I,{})}));export{C as E,_ as P,g as _,U as __vite_legacy_guard,x as l};