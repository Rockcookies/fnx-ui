import{b as a,F as c,j as e}from"./index-acc727ed.js";import{T as r}from"./index-7284439f.js";import{D as n}from"./index-aac52a1a.js";import{u as l}from"./use-demo-translate-af347a14.js";import{T as s}from"./index-ee39d9f7.js";import"./index-f55e3552.js";import"./use-theme-f282d90a.js";import"./config-component-props-c0788442.js";import"./use-controlled-state-2016da2e.js";import"./use-merged-prop-ref-b9b1260a.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-9fcceba0.js";import"./use-creation-aa086326.js";import"./index-e24dce68.js";import"./event-471798e4.js";import"./detect-9e279ab2.js";import"./misc-276e45ca.js";import"./scroll-a0e7f6b9.js";import"./style-696f78db.js";import"./format-73c0cb3b.js";import"./index-7fbd3c59.js";import"./use-on-popup-open-e0fdd969.js";import"./touch-helper-e91fac31.js";import"./raf-e95fb200.js";import"./react-354fcae6.js";import"./use-safe-state-54822164.js";import"./use-unmounted-ref-dd1b8a47.js";import"./use-get-state-708b6cfd.js";import"./constants-905d732f.js";import"./index-95f1e0da.js";import"./popup-helper-47ee8b1d.js";import"./index-071cdb70.js";import"./index-58401949.js";import"./CSSTransition-08aaae48.js";const m={"zh-CN":{basicUsage:"基础用法",tab:"标签",content:"内容",swipeTabs:"标签栏滚动",disabledTabs:"禁用标签",clickEvent:"点击事件",sticky:"粘性布局",title7:"自定义标签",switchAnimation:"切换动画",swipe:"滑动切换"},"en-US":{basicUsage:"basic Usage",tab:"Tab",content:"content of tab",swipeTabs:"Swipe Tabs",disabledTabs:"Disabled Tab",clickEvent:"Click Event",sticky:"Sticky",title7:"Custom Tab",switchAnimation:"Switch Animation",swipe:"Swipeable"}};function Q(){const[i]=l(m,"en-US");return a(c,{children:[e(n,{title:i.basicUsage,children:e(r,{defaultActiveKey:"3",children:[1,2,3,4,5].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))})}),e(n,{title:i.swipeTabs,children:e(r,{children:[1,2,3,4,5,6,7,8].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))})}),e(n,{title:i.disabledTabs,children:e(r,{children:[1,2,3].map(t=>e(r.Panel,{disabled:t===2,title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))})}),e(n,{title:i.clickEvent,children:a(r,{onTabClick:(t,o)=>{s.show(`${i.tab} ${o.key}`)},children:[" ",[1,2].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))]})}),e(n,{title:i.sticky,children:e(r,{sticky:!0,children:[1,2,3,4].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))})}),e(n,{title:i.switchAnimation,children:e(r,{animated:!0,children:[1,2,3,4].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},t))})}),e(n,{title:i.swipe,children:e(r,{swipeable:!0,defaultActiveKey:"2",children:[1,2,3,4].map(t=>e(r.Panel,{title:`${i.tab} ${t}`,children:`${i.content} ${t}`},`${t}`))})})]})}export{Q as default};
