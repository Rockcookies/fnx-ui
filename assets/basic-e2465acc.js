import{r as s,b as d,F as p,j as e,a as b}from"./index-cd4e7e60.js";import{D as a}from"./index-2d31b93e.js";import{u as h}from"./use-demo-translate-12013308.js";import{B as i}from"./index-81d80e58.js";import{O as n}from"./index-3a1478ff.js";import"./index-9b67d0d8.js";import"./use-theme-8af7e58d.js";import"./config-component-props-c0788442.js";import"./index-429bf8ad.js";import"./format-73c0cb3b.js";import"./detect-9e279ab2.js";import"./constants-905d732f.js";import"./event-471798e4.js";import"./misc-276e45ca.js";import"./use-merged-prop-78f8d6c6.js";import"./CSSTransition-624ec41f.js";const m=b("demo-overlay"),u={"zh-CN":{basicUsage:"基础用法",showOverlay:"显示遮罩层",embeddedContent:"嵌入内容"},"en-US":{basicUsage:"Basic Usage",showOverlay:"Show Overlay",embeddedContent:"Embedded Content"}};function M(){const[t]=h(u,"en-US"),[c,r]=s.useState(!1),[l,o]=s.useState(!1);return d(p,{children:[e(a,{cardMode:!0,title:t.basicUsage,children:e(i,{type:"primary",onClick:()=>r(!0),children:t.showOverlay})}),e(a,{cardMode:!0,title:t.embeddedContent,children:e(i,{type:"primary",onClick:()=>o(!0),children:t.embeddedContent})}),e(n,{visible:c,onClick:()=>r(!1)}),e(n,{visible:l,onClick:()=>o(!1),children:e("div",{className:m("wrapper"),children:e("div",{className:m("block")})})})]})}export{M as default};