import{D as e}from"./index.8050eaee.js";import{u as a}from"./use-demo-translate.aaf405bb.js";import{G as i,I as t,i as s,B as r}from"./index.5a6f04ce.js";import{j as c,F as l,a as m,b as o}from"./index.b656186a.js";import{d as n}from"./demo-dog-01.7b78a0b6.js";import{d,a as h}from"./demo-dog-03.3fd716de.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const u=o("demo-grid"),g={"zh-CN":{basicUsage:"基础用法",columnSize:"自定义列数",square:"正方形格子",gutter:"格子间距",horizontal:"内容横排",withImage:"展示图片",showBadge:"徽标提示",text:"文字"},"en-US":{basicUsage:"Basic usage",columnSize:"Column Size",square:"Square",gutter:"Gutter",horizontal:"Horizontal",withImage:"With Image",showBadge:"Show Badge",text:"Text"}};function p(){const[o]=a(g,"en-US"),p=e=>new Array(e).fill(0).map(((e,a)=>c(i.Item,{className:u("item"),children:[m(t,{className:u("icon"),name:"photo"}),m("p",{className:u("text"),children:o.text})]},a)));return c(l,{children:[m(e,{title:o.basicUsage,children:m(i,{clickable:!0,children:p(4)})}),m(e,{title:o.columnSize,children:m(i,{columnSize:3,children:p(6)})}),m(e,{title:o.square,children:m(i,{square:!0,columnSize:3,children:p(6)})}),m(e,{title:o.gutter,children:m(i,{clickable:!0,gutter:"5",children:p(8)})}),m(e,{title:o.withImage,children:c(i,{columnSize:3,square:!0,children:[m(i.Item,{children:m(s,{className:u("image"),src:n})}),m(i.Item,{children:m(s,{className:u("image"),src:d})}),m(i.Item,{children:m(s,{className:u("image"),src:h})})]})}),m(e,{title:o.showBadge,children:c(i,{columnSize:2,children:[m(i.Item,{className:u("item"),children:c(r,{dot:!0,children:[m(t,{className:u("icon"),size:"30px",name:"file-o"}),m("p",{className:u("text"),children:o.text})]})}),m(i.Item,{className:u("item"),children:c(r,{count:100,max:99,children:[m(t,{className:u("icon"),size:"30px",name:"photo"}),m("p",{className:u("text"),children:o.text})]})})]})})]})}export{p as default};
