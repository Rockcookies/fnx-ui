import{x as e,C as t,I as o,h as i}from"./index.e4c50576.js";import{D as r}from"./index.738b8272.js";import{u as a}from"./use-demo-translate.da597c49.js";import{s}from"./use-theme.d8418a8a.js";import{j as l,F as c,a as n,b as m}from"./index.97ff5ce9.js";import{d}from"./demo-doge.21680e54.js";import"./vendor.e33a1242.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const g=m("demo-dialog"),h={"zh-CN":{basicUsage:"基础用法",alert:"提示弹窗",alertWithNoTitle:"提示弹窗（无标题）",confirm:"确认弹窗",beforeClose:"异步关闭",perverted:"被阻止了...",customBody:"自定义内容",title:"对话框",content:"一去二三里烟村四五家亭台六七座八九十支花"},"en-US":{basicUsage:"Basic Usage",alert:"Alert",alertWithNoTitle:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",perverted:"Perverted...",customBody:"Custom Body",title:"Dialog",content:"The quick brown fox jumps over the lazy dog"}};function f(){const[m]=a(h,"en-US"),f=e.useDialog();return l(c,{children:[l(r,{cardMode:!0,title:m.basicUsage,children:[n(t,{title:m.alert,clickable:!0,rightIcon:n(o,{name:"arrow-right"}),onClick:()=>f.show({title:m.title,message:m.content,messageAlign:"left",cancelButton:!1})}),n(t,{title:m.alertWithNoTitle,clickable:!0,rightIcon:n(o,{name:"arrow-right"}),onClick:()=>f.show({message:m.content,messageAlign:"left",cancelButton:!1})}),n(t,{title:m.confirm,clickable:!0,rightIcon:n(o,{name:"arrow-right"}),onClick:()=>f.show({title:m.title,message:m.content,messageAlign:"left"})})]}),n(r,{cardMode:!0,title:m.beforeClose,children:n(t,{title:m.beforeClose,clickable:!0,rightIcon:n(o,{name:"arrow-right"}),onClick:()=>f.show({title:m.title,message:m.content,messageAlign:"left",onConfirm:async()=>{await s(1e3)},onCancel:async()=>(await s(1e3),i.show(m.perverted),!1)})})}),n(r,{cardMode:!0,title:m.customBody,children:n(t,{title:m.customBody,clickable:!0,rightIcon:n(o,{name:"arrow-right"}),onClick:()=>f.show({title:m.title,children:n("img",{src:d,className:g("img")})})})})]})}export{f as default};
