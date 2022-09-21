import{r as c}from"./vendor.0b9d75aa.js";import{_ as d,a,F as f,j as i,f as p,I as y,r as l}from"./manifest.98bead08.js";import{D as m}from"./index.25e661f3.js";import{u as w}from"./use-demo-translate.a86c9613.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const C={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",countdownText:"\u5012\u8BA1\u65F6 ${second} \u79D2"},"en-US":{basicUsage:"Basic Usage",primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",customDuration:"Custom Duration",customPosition:"Custom Position",countdownText:"Close in ${second}s"}};function N(){const[o]=w(C,"en-US"),e=d.useNotify(),u=c.exports.useRef(),r=c.exports.useCallback(()=>{u.current!=null&&(clearInterval(u.current),u.current=void 0)},[]),g=()=>{let s=3;const n=e.show({duration:0,message:l(o.countdownText,{second:`${s}`})});u.current=setInterval(()=>{s--,s?n.update({message:l(o.countdownText,{second:`${s}`})}):(r(),n.clear())},1e3)};c.exports.useEffect(()=>r,[r]);const t=(s,n)=>i(p,{title:s,clickable:!0,rightIcon:i(y,{name:"arrow-right"}),onClick:n});return a(f,{children:[i(m,{title:o.basicUsage,children:t(o.basicUsage,()=>e.show(o.content))}),a(m,{title:o.notifyType,children:[t(o.primary,()=>e.show({message:o.content,type:"primary"})),t(o.success,()=>e.show({message:o.content,type:"success"})),t(o.danger,()=>e.show({message:o.content,type:"danger"})),t(o.warning,()=>e.show({message:o.content,type:"warning"}))]}),a(m,{title:o.customNotify,children:[t(o.customColor,()=>e.show({message:o.content,color:"#ad0000",background:"#ffe1e1"})),t(o.customDuration,g),t(o.customPosition,()=>{e.show({message:o.content,type:"danger",position:"bottom"})})]})]})}export{N as default};