import{r as e,j as r,N as i,a as l}from"./index-cd4e7e60.js";import{s as d}from"./scroll-a0e7f6b9.js";import{M as u}from"./index-295223c9.js";import{S as f}from"./index-8b9c55ca.js";import"./detect-9e279ab2.js";import"./use-theme-8af7e58d.js";import"./misc-276e45ca.js";const p=l("docs"),x=()=>{const{locale:a,menu:t}=e.useContext(f),[m,n]=e.useState();return e.useEffect(()=>{if(!t)return;let s=!1;const c=a==="zh-CN"?t.markdownCN():t.markdown();return n(void 0),c.then(o=>{s||(o=o.default!=null?o.default:o,d(window,0),n(o.html))}),()=>{s=!0}},[t,a]),t?r("div",{className:p(),children:r(u,{html:m})}):r(i,{to:"/"})};x.displayName="Docs";export{x as default};