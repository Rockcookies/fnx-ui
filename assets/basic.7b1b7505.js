import{D as u}from"./index.25e661f3.js";import{u as l}from"./use-demo-translate.a86c9613.js";import{a as r,F as n,j as e,K as a,p as d}from"./manifest.98bead08.js";import"./vendor.0b9d75aa.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const c={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",halfStar:"\u534A\u661F",disabled:"\u7981\u7528\u72B6\u6001",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customCount:"\u81EA\u5B9A\u4E49\u6570\u91CF",readonly:"\u53EA\u8BFB\u72B6\u6001",changeEvent:"\u76D1\u542C change \u4E8B\u4EF6",toastContent:t=>`\u5F53\u524D\u503C\uFF1A${t}`},"en-US":{basicUsage:"Basic usage",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:t=>`current value\uFF1A${t}`}};function E(){const[t]=l(c,"en-US");return r(n,{children:[e(u,{title:t.basicUsage,cardMode:!0,children:e(a,{defaultValue:3})}),e(u,{title:t.customIcon,cardMode:!0,children:e(a,{character:"\u597D",defaultValue:3})}),e(u,{title:t.customStyle,cardMode:!0,children:e(a,{color:"var(--fnx-primary-color)",defaultValue:2})}),e(u,{title:t.halfStar,cardMode:!0,children:e(a,{defaultValue:2.5,allowHalf:!0})}),e(u,{title:t.customCount,cardMode:!0,children:e(a,{defaultValue:4,count:6})}),e(u,{title:t.disabled,cardMode:!0,children:e(a,{defaultValue:3,disabled:!0})}),e(u,{title:t.readonly,cardMode:!0,children:e(a,{defaultValue:3,readonly:!0})}),e(u,{title:t.changeEvent,cardMode:!0,children:e(a,{defaultValue:2,onChange:o=>{d.show(t.toastContent(o))}})})]})}export{E as default};