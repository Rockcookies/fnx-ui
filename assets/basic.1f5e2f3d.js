import{D as e}from"./index.fedcf5e8.js";import{u as t}from"./use-demo-translate.415881c8.js";import{N as i,I as r,S as l}from"./index.ca041f5d.js";import{j as o,F as s,a,b as c}from"./index.3e85797b.js";import"./vendor.e33a1242.js";import"./use-theme.d8418a8a.js";import"./scroll.7b855ba9.js";import"./history-utils.67cdf7dc.js";const n=c("demo-notice-bar"),d={"zh-CN":{text:"人生就像各种各样的巧克力，你永远不会知道那一块属于你",shortText:"生生不息，繁荣昌盛",basicUsage:"基础用法",marqueeMode:"滚动播放",ellipsis:"单行省略",wrap:"多行展示",rightIcon:"右侧图标",closeable:"可关闭",customStyle:"自定义样式",swipe:"垂直滚动"},"en-US":{text:"Life was like a box of chocolates, you never know what you’re gonna get.",shortText:"Live long and prosper",basicUsage:"Basic usage",marqueeMode:"Marquee Mode",ellipsis:"Ellipsis",wrap:"Wrap Mode",rightIcon:"Right Icon",closeable:"Closeable",customStyle:"Custom Style",swipe:"Vertical Scroll"}},m=["In My Life","No Reply","Rock And Roll Music","Words of Love"];function h(){const[c]=t(d,"en-US");return o(s,{children:[a(e,{title:c.basicUsage,children:a(i,{marquee:!0,leftIcon:a(r,{name:"arrow-left"}),children:c.text})}),a(e,{title:c.marqueeMode,children:a(i,{marquee:!0,children:c.text})}),a(e,{title:c.ellipsis,children:a(i,{ellipsis:!0,children:c.text})}),a(e,{title:c.wrap,children:a(i,{children:c.text})}),a(e,{title:c.rightIcon,children:a(i,{ellipsis:!0,rightIcon:a(r,{name:"arrow-right"}),children:c.shortText})}),a(e,{title:c.closeable,children:a(i,{marquee:!0,closeable:!0,children:c.text})}),a(e,{title:c.customStyle,children:a(i,{marquee:!0,background:"var(--fnx-primary-color)",children:c.text})}),a(e,{title:c.swipe,children:a(i,{className:n("notice"),leftIcon:a(r,{name:"arrow-left"}),children:a(l,{autoplay:3e3,indicator:!1,vertical:!0,className:n("swipe"),children:m.map((e=>a(l.Item,{children:e},e)))})})})]})}export{h as default};
