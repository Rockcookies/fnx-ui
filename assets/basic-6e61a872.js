import{r as l,j as o}from"./index-8b435b75.js";import{T as d}from"./index-c514c025.js";import{D as a}from"./index-588a6987.js";import{u as g}from"./use-demo-translate-489d42ac.js";import{C as x}from"./index-fdc7973b.js";import{I as m}from"./index-f0ac2a00.js";import{r as u}from"./misc-276e45ca.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";import"./use-merged-prop-ref-bd8415d7.js";import"./use-merged-prop-78f8d6c6.js";import"./popup-helper-5cd0647a.js";import"./detect-9e279ab2.js";import"./react-a0edb2dd.js";import"./config-component-props-c0788442.js";import"./index-8d4b6373.js";import"./use-on-popup-open-26f1d831.js";import"./event-471798e4.js";import"./scroll-a0e7f6b9.js";import"./touch-helper-e91fac31.js";import"./index-e8afc6c8.js";import"./use-controlled-state-e2423fe7.js";import"./use-update-effect-311108d7.js";import"./constants-a731eda5.js";import"./format-3509efe4.js";const T={"zh-CN":{basicUsage:"基础用法",fail:"失败提示",text:"为了部落",loading:"加载中...",successText:"成功",failText:"失败",countdownText:"倒计时 ${second} 秒",textTitle:"文字提示",loadingTitle:"加载提示",stateTitle:"成功/失败提示",success:"成功提示",customIcon:"自定义图标",loadingType:"自定义加载图标",positionTop:"顶部展示",updateMessage:"动态更新提示",positionBottom:"底部展示",customPosition:"自定义位置"},"en-US":{basicUsage:"Basic Usage",fail:"Fail",text:"For the horde",loading:"Loading...",successText:"Success",failText:"Fail",countdownText:"Close in ${second}s",textTitle:"Text",loadingTitle:"Loading",stateTitle:"Success/Fail",success:"Success",customIcon:"Custom Icon",loadingType:"Loading Type",positionTop:"Top",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}};function G(){const[t]=g(T,"en-US"),n=l.useRef(),e=d.useToast(),c=l.useCallback(()=>{n.current!=null&&(clearInterval(n.current),n.current=void 0)},[]),p=()=>{let i=3;const r=e.loading({duration:0,forbidClick:!0,message:u(t.countdownText,{second:"".concat(i)})});n.current=setInterval(()=>{i--,i?r.update({message:u(t.countdownText,{second:"".concat(i)})}):(c(),r.clear())},1e3)};l.useEffect(()=>c,[c]);const s=(i,r)=>o.jsx(x,{title:i,clickable:!0,rightIcon:o.jsx(m,{name:"arrow-right"}),onClick:r});return o.jsxs(o.Fragment,{children:[o.jsxs(a,{cardMode:!0,title:t.basicUsage,children:[s(t.textTitle,()=>e.show(t.text)),s(t.loadingTitle,()=>e.loading({message:t.text,forbidClick:!0})),s(t.success,()=>e.success(t.successText)),s(t.fail,()=>e.fail(t.failText))]}),o.jsxs(a,{cardMode:!0,title:t.customIcon,children:[s(t.customIcon,()=>e.show({message:t.text,icon:o.jsx(m,{name:"star"})})),s(t.loadingTitle,()=>e.loading({message:t.text,forbidClick:!0,icon:o.jsx(m,{name:"star",spin:!0})}))]}),o.jsxs(a,{cardMode:!0,title:t.customPosition,children:[s(t.positionTop,()=>e.show({message:t.positionTop,position:"top"})),s(t.positionBottom,()=>e.show({message:t.positionBottom,position:"bottom"}))]}),o.jsx(a,{cardMode:!0,title:t.customPosition,children:s(t.updateMessage,p)})]})}export{G as default};