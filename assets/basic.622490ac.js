import{r as e}from"./vendor.e33a1242.js";import{E as s,C as t,I as o}from"./index.5a6f04ce.js";import{D as n}from"./index.8050eaee.js";import{u as r}from"./use-demo-translate.aaf405bb.js";import{r as a}from"./use-theme.d8418a8a.js";import{j as c,F as i,a as u}from"./index.b656186a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const m={"zh-CN":{basicUsage:"基础用法",primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",customDuration:"自定义时长",countdownText:"倒计时 ${second} 秒"},"en-US":{basicUsage:"Basic Usage",primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",customDuration:"Custom Duration",countdownText:"Close in ${second}s"}};function l(){const[l]=r(m,"en-US"),d=s.useNotify(),f=e.exports.useRef(),g=e.exports.useCallback((()=>{null!=f.current&&(clearInterval(f.current),f.current=void 0)}),[]);e.exports.useEffect((()=>g),[g]);const p=(e,s)=>u(t,{title:e,clickable:!0,rightIcon:u(o,{name:"arrow-right"}),onClick:s});return c(i,{children:[u(n,{title:l.basicUsage,children:p(l.basicUsage,(()=>d.show(l.content)))}),c(n,{title:l.notifyType,children:[p(l.primary,(()=>d.show({message:l.content,type:"primary"}))),p(l.success,(()=>d.show({message:l.content,type:"success"}))),p(l.danger,(()=>d.show({message:l.content,type:"danger"}))),p(l.warning,(()=>d.show({message:l.content,type:"warning"})))]}),c(n,{title:l.customNotify,children:[p(l.customColor,(()=>d.show({message:l.content,color:"#ad0000",background:"#ffe1e1"}))),p(l.customDuration,(()=>{let e=3;const s=d.show({duration:0,message:a(l.countdownText,{second:`${e}`})});f.current=setInterval((()=>{e--,e?s.update({message:a(l.countdownText,{second:`${e}`})}):(g(),s.clear())}),1e3)}))]})]})}export{l as default};