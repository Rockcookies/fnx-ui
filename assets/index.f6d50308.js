import{r as e,i as s}from"./vendor.e33a1242.js";import{s as t}from"./scroll.7b855ba9.js";import{a,b as o}from"./index.b656186a.js";import{M as r}from"./index.5a92a0fb.js";import{S as m}from"./index.af43aed8.js";import"./use-theme.d8418a8a.js";const n=o("docs"),d=()=>{const{locale:o,menu:d}=e.exports.useContext(m),[i,l]=e.exports.useState();return e.exports.useEffect((()=>{if(!d)return;let e=!1;const s="zh-CN"===o?d.markdownCN():d.markdown();return l(void 0),s.then((s=>{e||(s=null!=s.default?s.default:s,t(window,0),l(s.html))})),()=>{e=!0}}),[d,o]),d?a("div",{className:n(),children:a(r,{html:i})}):a(s,{to:"/"})};d.displayName="Docs";export{d as default};