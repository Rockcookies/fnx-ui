var o=Object.defineProperty,t=Object.defineProperties,e=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,e,p)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[e]=p,l=(o,t)=>{for(var e in t||(t={}))r.call(t,e)&&n(o,e,t[e]);if(p)for(var e of p(t))i.call(t,e)&&n(o,e,t[e]);return o};import{r as s}from"./vendor.e33a1242.js";import{D as c}from"./index.738b8272.js";import{u as a}from"./use-demo-translate.da597c49.js";import{C as u,I as d,P as h}from"./index.e4c50576.js";import{j as m,F as b,a as f}from"./index.97ff5ce9.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const g={"zh-CN":{basicUsage:"基础用法",position:"弹出位置",popupBasic:"展示弹出层",popupTop:"顶部弹出",popupBottom:"底部弹出",popupLeft:"左侧弹出",popupRight:"右侧弹出",teleport:"指定挂载节点",roundCorner:"圆角弹窗",content:"为了联盟"},"en-US":{basicUsage:"Basic Usage",position:"Position",popupBasic:"Show Popup",popupTop:"From Top",popupBottom:"From Bottom",popupLeft:"From Left",popupRight:"From Right",teleport:"Get Container",roundCorner:"Round Corner",content:"For the alliance"}},y=o=>{const[p,r]=s.exports.useState(!1);return m(b,{children:[f(u,(i=l({onClick:()=>r(!0),clickable:!0},o.cell),n={rightIcon:f(d,{name:"arrow-right"})},t(i,e(n)))),f(h,l({mountTo:()=>document.body,visible:p,onClose:()=>r(!1)},o.popup))]});var i,n};function j(){const[o]=a(g,"en-US");return m(b,{children:[f(c,{cardMode:!0,title:o.basicUsage,children:f(y,{cell:{title:o.popupBasic},popup:{children:o.content,style:{padding:"30px 50px"}}})}),m(c,{cardMode:!0,title:o.position,children:[f(y,{cell:{title:o.popupTop},popup:{position:"top",style:{height:"30%"}}}),f(y,{cell:{title:o.popupBottom},popup:{position:"bottom",style:{height:"30%"}}}),f(y,{cell:{title:o.popupLeft},popup:{position:"left",style:{width:"30%",height:"100%"}}}),f(y,{cell:{title:o.popupRight},popup:{position:"right",style:{width:"30%",height:"100%"}}})]}),f(c,{cardMode:!0,title:o.roundCorner,children:f(y,{cell:{title:o.roundCorner},popup:{round:!0,position:"bottom",style:{height:"30%"}}})}),f(c,{cardMode:!0,title:o.teleport,children:f(y,{cell:{title:o.teleport},popup:{children:o.content,style:{padding:"30px 50px"},mountTo:()=>document.body}})})]})}export{j as default};
