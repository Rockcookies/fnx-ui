import{u as e}from"./use-demo-translate.aaf405bb.js";import{u as r,T as a,j as s,C as t,k as l}from"./index.5a6f04ce.js";import{s as i}from"./use-theme.d8418a8a.js";import{a as n,F as o,j as d}from"./index.b656186a.js";import"./vendor.e33a1242.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const h={"zh-CN":{basicUsage:"基础用法",errorTip:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},c=e=>new Array(e).fill(0).map(((e,r)=>{const a=r+1;return a<10?`0${a}`:`${a}`}));function f(){const[f]=e(h,"en-US"),[u,p]=r("default"),[g,m]=r(),[b,j]=r("default"),[T,R]=r(),U=async(e=[])=>{j("loading"),await i(1e3),e=c(e.length+8),R(e),e.length<=8?j("error"):j(e.length>=24?"finished":"default")},[x,y]=r("default"),[w,C]=r(!1),[P,k]=r(),L=async(e=[],r)=>{r&&(C(!0),"loading"===x)||(y("loading"),e=c(r?8:e.length+8),await i(1e3),k(e),C(!1),y(e.length>=24?"finished":"default"))};return n(o,{children:d(a,{children:[n(a.Panel,{title:f.basicUsage,children:n(s,{status:u,onLoad:()=>{(async(e=[])=>{p("loading"),await i(1e3),e=c(e.length+8),m(e),p(e.length>=24?"finished":"default")})(g)},children:(g||[]).map((e=>n(t,{title:e},e)))})},"basicUsage"),n(a.Panel,{title:f.errorTip,children:n(s,{status:b,slots:{error:n("span",{onClick:()=>{U(T)},children:f.errorText})},onLoad:()=>{U(T)},children:(T||[]).map((e=>n(t,{title:e},e)))})},"errorTip"),n(a.Panel,{title:f.pullRefresh,children:n(l,{refreshing:w,onRefresh:()=>L(P,!0),children:n(s,{status:x,onLoad:()=>L(P,!1),children:(P||[]).map((e=>n(t,{title:e},e)))})})},"pullRefresh")]})})}export{f as default};
