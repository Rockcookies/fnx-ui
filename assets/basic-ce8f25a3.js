import{j as e,F as m,b as l,a as d}from"./index-d9abb3b2.js";import{I as c}from"./index-2da9f8c4.js";import{D as n}from"./index-031e3f27.js";import{u as p}from"./use-demo-translate-111ff248.js";import{G as i}from"./index-05d50770.js";import{T as s}from"./index-eba38395.js";import"./format-73c0cb3b.js";import"./detect-9e279ab2.js";import"./index-23998fbd.js";import"./use-theme-abf2285a.js";import"./config-component-props-c0788442.js";import"./constants-905d732f.js";import"./react-cb438e7c.js";import"./use-merged-prop-78f8d6c6.js";import"./use-controlled-state-3e95143e.js";import"./use-merged-prop-ref-b6c7dc57.js";import"./use-update-effect-e4ebe9a3.js";import"./use-creation-81fc62b8.js";import"./index-05ecef98.js";import"./event-471798e4.js";import"./misc-276e45ca.js";import"./scroll-a0e7f6b9.js";import"./style-696f78db.js";import"./index-d0e2941f.js";import"./use-on-popup-open-52f79c86.js";import"./touch-helper-e91fac31.js";import"./raf-e95fb200.js";import"./use-safe-state-6c526362.js";import"./use-unmounted-ref-25ab0d3b.js";import"./use-get-state-80dac10e.js";const r=d("demo-icon"),h={"zh-CN":{basicUsage:"基础用法",iconColor:"图标颜色",iconSize:"图标尺寸",iconSpin:"旋转动画",iconSpinner:"Icon.Spinner",iconList:"图标列表",tabDemo:"用法示例",tabBasic:"基础图标",tabOutline:"线框风格",tabFilled:"实底风格"},"en-US":{basicUsage:"Basic Usage",iconColor:"Icon color",iconSize:"Icon size",iconSpin:"Spin animation",iconSpinner:"Icon.Spinner",iconList:"Icon list",tabDemo:"Demo",tabBasic:"Basic",tabOutline:"Outline",tabFilled:"Filled"}},a={border:!1,columnSize:4,gutter:4,square:!0},u=["arrow-up","arrow-down","arrow-left","arrow-right","success","cross","plus","minus","fail","circle"],I=["close-o","star-o","file-o"],S=["close","star","photo","photo-fail"];function Q(){const[o]=p(h,"en-US");return e(m,{children:l(s,{children:[l(s.Panel,{title:o.tabDemo,children:[e(n,{cardMode:!0,title:o.basicUsage,children:e(i,{...a,children:e(i.Item,{className:r("item"),children:e(c,{name:"success"})})})}),e(n,{cardMode:!0,title:o.iconColor,children:l(i,{...a,children:[e(i.Item,{className:r("item"),children:e(c,{name:"success",color:"var(--fnx-success-color)"})}),e(i.Item,{className:r("item"),children:e(c,{name:"fail",color:"var(--fnx-danger-color)"})})]})}),e(n,{cardMode:!0,title:o.iconSize,children:l(i,{...a,children:[e(i.Item,{className:r("item"),children:e(c,{name:"arrow-right",size:20})}),e(i.Item,{className:r("item"),children:e(c,{name:"arrow-left",size:"3rem"})})]})}),e(n,{cardMode:!0,title:o.iconSpin,children:e(i,{...a,children:e(i.Item,{className:r("item"),children:e(c,{name:"star",spin:!0})})})}),e(n,{cardMode:!0,title:o.iconSpinner,children:e(i,{...a,children:e(i.Item,{className:r("item"),children:e(c.Spinner,{})})})})]}),e(s.Panel,{title:o.tabBasic,children:e(n,{cardMode:!0,children:e(i,{...a,children:u.map(t=>l(i.Item,{className:r("item"),children:[e(c,{name:t}),e("p",{className:r("icon-desc"),children:t})]},t))})})}),e(s.Panel,{title:o.tabOutline,children:e(n,{cardMode:!0,children:e(i,{...a,children:I.map(t=>l(i.Item,{className:r("item"),children:[e(c,{name:t}),e("p",{className:r("icon-desc"),children:t})]},t))})})}),e(s.Panel,{title:o.tabFilled,children:e(n,{cardMode:!0,children:e(i,{...a,children:S.map(t=>l(i.Item,{className:r("item"),children:[e(c,{name:t}),e("p",{className:r("icon-desc"),children:t})]},t))})})})]})})}export{Q as default};