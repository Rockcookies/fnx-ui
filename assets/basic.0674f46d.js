import{D as e}from"./index.de723e14.js";import{u as t}from"./use-demo-translate.a91ac5de.js";import{v as a,T as o}from"./index.580f1a55.js";import{j as l,F as d,a as n}from"./index.fd2b4eef.js";import"./vendor.74addd0f.js";import"./use-theme.67eface3.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const r={"zh-CN":{basicUsage:"基础用法",halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",changeEvent:"监听 change 事件",toastContent:e=>`当前值：${e}`},"en-US":{basicUsage:"Basic usage",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:e=>`current value：${e}`}};function s(){const[s]=t(r,"en-US");return l(d,{children:[n(e,{title:s.basicUsage,cardMode:!0,children:n(a,{defaultValue:3})}),n(e,{title:s.customIcon,cardMode:!0,children:n(a,{character:"好",defaultValue:3})}),n(e,{title:s.customStyle,cardMode:!0,children:n(a,{color:"var(--fnx-primary-color)",defaultValue:2})}),n(e,{title:s.halfStar,cardMode:!0,children:n(a,{defaultValue:2.5,allowHalf:!0})}),n(e,{title:s.customCount,cardMode:!0,children:n(a,{defaultValue:4,count:6})}),n(e,{title:s.disabled,cardMode:!0,children:n(a,{defaultValue:3,disabled:!0})}),n(e,{title:s.readonly,cardMode:!0,children:n(a,{defaultValue:3,readonly:!0})}),n(e,{title:s.changeEvent,cardMode:!0,children:n(a,{defaultValue:2,onChange:e=>{o.show(s.toastContent(e))}})})]})}export{s as default};
