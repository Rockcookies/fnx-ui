import{C as e,b as t,I as l}from"./index.5a6f04ce.js";import{D as i}from"./index.8050eaee.js";import{u as c}from"./use-demo-translate.aaf405bb.js";import{j as n,F as r,a as o,b as a}from"./index.b656186a.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const s=a("demo-cell"),d={"zh-CN":{content:"内容",tag:"标签",cell:"单元格",groupTitle:"分组标题",inset:"卡片风格",desc:"描述信息",basicUsage:"基础用法",childrenOnly:"只设置 children",clickable:"可点击的",leftIcon:"左侧图标",rightIcon:"展示箭头",itemsAlign:"垂直居中"},"en-US":{content:"Content",tag:"Tag",cell:"Cell title",groupTitle:"Group Title",inset:"Inset Grouped",desc:"Description",basicUsage:"Basic Usage",clickable:"Clickable",childrenOnly:"Children only",leftIcon:"Left Icon",rightIcon:"Right Icon",itemsAlign:"Vertical center"}};function h(){const[a]=c(d,"en-US");return n(r,{children:[n(i,{title:a.basicUsage,children:[o(e,{title:a.cell,children:a.content}),o(e,{title:n("div",{className:s("title"),children:[a.cell,o(t,{className:s("title-tag"),type:"danger",children:a.tag})]}),clickable:!0,rightIcon:o(l,{name:"arrow-right"}),children:a.content}),o(e,{leftIcon:o(l,{name:"success"}),title:a.cell,rightIcon:o(l,{name:"star"})}),o(e,{title:a.cell,description:a.desc,children:a.content}),n(e.Group,{title:a.inset,inset:!0,children:[o(e,{title:a.cell,children:a.content}),o(e,{title:a.cell,children:a.content})]})]}),o(i,{title:a.clickable,children:o(e,{title:a.cell,clickable:!0,children:a.content})}),n(i,{title:a.leftIcon,children:[o(e,{title:a.cell,leftIcon:o(l,{name:"success"}),children:a.content}),o(e,{title:a.cell,leftIcon:o(l,{name:"star"}),children:a.content})]}),n(i,{title:a.rightIcon,children:[o(e,{title:a.cell,clickable:!0,rightIcon:o(l,{name:"arrow-up"}),children:a.content}),o(e,{title:a.cell,clickable:!0,rightIcon:o(l,{name:"arrow-right"}),children:a.content}),o(e,{title:a.cell,clickable:!0,rightIcon:o(l,{name:"arrow-down"}),children:a.content})]}),o(i,{title:a.childrenOnly,children:o(e,{children:a.content})}),n(i,{title:a.groupTitle,children:[o(e.Group,{title:`${a.groupTitle} 1`,children:o(e,{title:a.cell,children:a.content})}),o(e.Group,{title:`${a.groupTitle} 2`,children:o(e,{title:a.cell,children:a.content})})]}),n(i,{title:a.itemsAlign,children:[o(e,{itemsAlign:"middle",title:a.cell,description:a.desc,children:a.content}),o(e,{itemsAlign:"bottom",title:a.cell,description:a.desc,children:a.content})]})]})}export{h as default};