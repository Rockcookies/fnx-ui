import{D as e}from"./index.bdd522ec.js";import{u as t}from"./use-demo-translate.b61ddd84.js";import{v as a,h as o}from"./index.0254330e.js";import{j as l,F as d,a as n}from"./index.8f02c309.js";import"./vendor.91a89506.js";import"./use-theme.882b248e.js";import"./scroll.d13c3de3.js";import"./history-utils.bc3c1dee.js";const r={"zh-CN":{basicUsage:"基础用法",halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",changeEvent:"监听 change 事件",toastContent:e=>`当前值：${e}`},"en-US":{basicUsage:"Basic usage",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:e=>`current value：${e}`}};function c(){const[c]=t(r,"en-US");return l(d,{children:[n(e,{title:c.basicUsage,cardMode:!0,children:n(a,{defaultValue:3})}),n(e,{title:c.customIcon,cardMode:!0,children:n(a,{character:"好",defaultValue:3})}),n(e,{title:c.customStyle,cardMode:!0,children:n(a,{color:"var(--fnx-primary-color)",defaultValue:2})}),n(e,{title:c.halfStar,cardMode:!0,children:n(a,{defaultValue:2.5,allowHalf:!0})}),n(e,{title:c.customCount,cardMode:!0,children:n(a,{defaultValue:4,count:6})}),n(e,{title:c.disabled,cardMode:!0,children:n(a,{defaultValue:3,disabled:!0})}),n(e,{title:c.readonly,cardMode:!0,children:n(a,{defaultValue:3,readonly:!0})}),n(e,{title:c.changeEvent,cardMode:!0,children:n(a,{defaultValue:2,onChange:e=>{o.show(c.toastContent(e))}})})]})}export{c as default};
