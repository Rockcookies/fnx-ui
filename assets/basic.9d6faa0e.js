import{u as U}from"./use-demo-translate.a86c9613.js";import{u as t,j as s,F as x,a as E,T as n,s as c,f,t as w,v as h}from"./manifest.98bead08.js";import"./vendor.0b9d75aa.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const y={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",errorTip:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},d=r=>new Array(r).fill(0).map((p,l)=>{const a=l+1;return a<10?`0${a}`:`${a}`});function q(){const[r]=U(y,"en-US"),[p,l]=t("default"),[a,T]=t(),C=async(e=[])=>{l("loading"),await h(1e3),e=d(e.length+8),T(e),l(e.length>=24?"finished":"default")},[F,u]=t("default"),[o,P]=t(),g=async(e=[])=>{u("loading"),await h(1e3),e=d(e.length+8),P(e),e.length<=8?u("error"):u(e.length>=24?"finished":"default")},[D,B]=t("default"),[b,m]=t(!1),[i,L]=t(),R=async(e=[],S)=>{S&&(m(!0),D==="loading")||(B("loading"),e=d(S?8:e.length+8),await h(1e3),L(e),m(!1),B(e.length>=24?"finished":"default"))};return s(x,{children:E(n,{children:[s(n.Panel,{title:r.basicUsage,children:s(c,{status:p,onLoad:()=>{C(a)},children:(a||[]).map(e=>s(f,{title:e},e))})},"basicUsage"),s(n.Panel,{title:r.errorTip,children:s(c,{status:F,slots:{error:s("span",{onClick:()=>{g(o)},children:r.errorText})},onLoad:()=>{g(o)},children:(o||[]).map(e=>s(f,{title:e},e))})},"errorTip"),s(n.Panel,{title:r.pullRefresh,children:s(w,{refreshing:b,onRefresh:()=>R(i,!0),children:s(c,{status:D,onLoad:()=>R(i,!1),children:(i||[]).map(e=>s(f,{title:e},e))})})},"pullRefresh")]})})}export{q as default};