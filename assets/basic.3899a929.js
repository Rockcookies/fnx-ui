import{r as e}from"./vendor.74addd0f.js";import{u as a,a as r,i as s,C as i,j as l}from"./index.6a3bd64e.js";import{u as t}from"./use-demo-translate.6e8b3a77.js";import{s as o}from"./use-theme.67eface3.js";import{j as n,F as c,a as d,b as f}from"./index.0b79de82.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const h=f("demo-list"),p={"zh-CN":{basicUsage:"基础用法",errorTip:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新"},"en-US":{basicUsage:"Basic Usage",errorTip:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"Pull Refresh"}},u=e=>new Array(e).fill(0).map(((e,a)=>{const r=a+1;return r<10?`0${r}`:`${r}`})),m=["basicUsage","errorTip","pullRefresh"];function g(){const[f]=t(p,"en-US"),[g,b]=e.exports.useState("basicUsage"),[x,R]=a("default"),[T,U]=a(),j=e.exports.useCallback((async e=>{await o(1e3),e=u(e.length+10),U(e),R(e.length>30?"finished":"default")}),[U,R]),[v,C]=a("default"),[y,k]=a(),N=e.exports.useCallback((async e=>{await o(1e3),e=u(e.length+10),k(e),e.length<=10?C("error"):C(e.length>30?"finished":"default")}),[k,C]),[w,L]=a("default"),[S,z]=a(),$=e.exports.useCallback((async e=>{await o(1e3),e=u(e.length+10),z(e),L(e.length>30?"finished":"default")}),[z,L]),q=(e,a)=>{"basicUsage"===e?(R("loading"),j(a)):"errorTip"===e?(C("loading"),N(a)):"pullRefresh"===e&&(L("loading"),$(a))};return n(c,{children:[d("div",{className:h("tab"),children:m.map((e=>d(r,{size:"sm",type:g===e?"primary":"default",onClick:()=>{var a;g!==(a=e)&&(b(a),q(a,[]))},children:f[e]},e)))}),d("div",{className:h("list-container",{active:"basicUsage"===g}),children:d(s,{status:x,onLoad:()=>q("basicUsage",T||[]),children:(T||[]).map((e=>d(i,{title:e},e)))})}),d("div",{className:h("list-container",{active:"errorTip"===g}),children:d(s,{status:v,onLoad:()=>q("errorTip",y||[]),slots:{error:d("span",{onClick:()=>q("errorTip",y||[]),children:f.errorText})},children:(y||[]).map((e=>d(i,{title:e},e)))})}),d("div",{className:h("list-container",{active:"pullRefresh"===g}),children:d(l,{refreshing:"loading"===w,onRefresh:()=>q("pullRefresh",[]),children:d(s,{status:w,onLoad:()=>q("pullRefresh",S||[]),children:(S||[]).map((e=>d(i,{title:e},e)))})})})]})}export{g as default};