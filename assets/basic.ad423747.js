import{D as e}from"./index.8050eaee.js";import{u as i}from"./use-demo-translate.aaf405bb.js";import{j as d,a as r,F as a,b as t}from"./index.b656186a.js";import{f as s,i as l,R as c}from"./index.5a6f04ce.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";var o="./assets/demo-dog.0bb2d1f4.jpg";const n=t("demo-image"),h={"zh-CN":{basicUsage:"基础用法",fitMode:"填充模式",round:"圆形图片",radius:"圆角",loading:"加载中提示",error:"加载失败提示",defaultTip:"默认提示",customTip:"自定义提示",loadFail:"加载失败"},"en-US":{basicUsage:"Basic Usage",fitMode:"Fit Mode",round:"Round",radius:"Radius",loading:"Load Tip",error:"Error Tip",defaultTip:"Default Tip",customTip:"Custom Tip",loadFail:"Load failed"}},u=["contain","cover","fill","none","scale-down"];function m(){const[t]=i(h,"en-US"),m=u.map(((e,i)=>d(s,{span:8,children:[r(l,{fit:e,width:"100%",height:"27vw",src:o},`${i}-fit`),r("div",{className:"text",children:e})]},`${i}-col-fit`))),p=u.map(((e,i)=>d(s,{span:8,children:[r(l,{round:!0,fit:e,width:"100%",height:"27vw",src:o},`${i}-round`),r("div",{className:"text",children:e})]},`${i}-col-round`)));return d(a,{children:[r(e,{cardMode:!0,title:t.basicUsage,children:r("div",{className:n("row"),children:r(l,{width:"100",height:"100",src:o})})}),r(e,{cardMode:!0,title:t.fitMode,children:r(c,{gutter:20,children:m})}),r(e,{cardMode:!0,title:t.round,children:r(c,{gutter:20,children:p})}),r(e,{cardMode:!0,title:t.radius,children:r(c,{gutter:20,children:d(s,{span:8,children:[r(l,{radius:"10",width:"100%",height:"27vw",src:o}),r("div",{className:"text",children:t.radius})]})})}),r(e,{cardMode:!0,title:t.loading,children:d(c,{gutter:20,children:[d(s,{span:8,children:[r(l,{width:"100%",height:"27vw"}),r("div",{className:"text",children:t.defaultTip})]}),d(s,{span:8,children:[r(l,{width:"100%",height:"27vw",slots:{loading:r("span",{className:"loading-text",children:"Loading..."})}}),r("div",{className:"text",children:t.customTip})]})]})}),r(e,{cardMode:!0,title:t.error,children:d(c,{gutter:20,children:[d(s,{span:8,children:[r(l,{width:"100%",height:"27vw",src:"x"}),r("div",{className:"text",children:t.defaultTip})]}),d(s,{span:8,children:[r(l,{width:"100%",height:"27vw",src:"x",slots:{error:r("span",{className:"error-text",children:"Error"})}}),r("div",{className:"text",children:t.customTip})]})]})})]})}export{m as default};