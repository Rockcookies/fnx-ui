import{a as p,F as l,j as t,$ as u,T as i,e as g,c as b}from"./manifest.98bead08.js";import{d as E}from"./demo-doge.62ee0853.js";import{D as s}from"./index.25e661f3.js";import{u as h}from"./use-demo-translate.a86c9613.js";import"./vendor.0b9d75aa.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const n=""+new URL("empty-busy.99be17e4.svg",import.meta.url).href,a=""+new URL("empty-disconnected.2b39e9c0.svg",import.meta.url).href,r=""+new URL("empty-not-found.a508f5b4.svg",import.meta.url).href;const m=b("demo-empty"),y={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",title:"\u524D\u65B9\u62E5\u5835",description:"\u5237\u65B0\u8BD5\u8BD5",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",customImageProps:"\u81EA\u5B9A\u4E49\u56FE\u7247\u5C5E\u6027",customChildren:"\u5E95\u90E8\u5185\u5BB9",button:"\u6309\u94AE",tabs:{default:{tab:"\u9ED8\u8BA4",description:"\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898"},disconnected:{tab:"\u7F51\u7EDC\u5F02\u5E38",description:"\u7F51\u7EDC\u6709\u70B9\u5FD9",image:a},empty:{tab:"\u672A\u627E\u5230",description:"\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F",image:r},busy:{tab:"\u7E41\u5FD9",description:"\u524D\u65B9\u62E5\u5835",image:n}}},"en-US":{basicUsage:"Basic Usage",title:"Oops, not loading",description:"Try to refresh the page",customImage:"Custom Image",customImageProps:"Custom Image Props",customChildren:"Bottom Content",button:"Button",tabs:{default:{tab:"Default",description:"Oops, something went wrong"},disconnected:{tab:"Disconnected",description:"Network is busy",image:a},empty:{tab:"Empty",description:"Hmm, couldn't find that...",image:r},busy:{tab:"Busy",description:"Oops, not loading",image:n}}}};function w(){const[e]=h(y,"en-US");return p(l,{children:[t(s,{title:e.basicUsage,children:t(u,{description:e.description})}),t(s,{title:e.customImage,children:t(i,{children:["default","disconnected","empty","busy"].map(o=>{const{tab:c,...d}=e.tabs[o];return t(i.Panel,{className:m("tab-panel"),title:c,children:t(u,{...d})},o)})})}),t(s,{title:e.customImageProps,children:t(u,{image:E,imageProps:{style:{borderRadius:"50%",background:"var(--fnx-gray-75)"}},description:e.description})}),t(s,{title:e.customChildren,children:t(u,{title:e.title,description:e.description,children:t(g,{type:"primary",className:m("button"),shape:"radius",children:e.button})})})]})}export{w as default};
