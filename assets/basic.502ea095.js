import{r as l}from"./vendor.0b9d75aa.js";import{D as s}from"./index.25e661f3.js";import{u as d}from"./use-demo-translate.a86c9613.js";import{a as r,F as o,j as e,S as t,p as m,e as a,c as h}from"./manifest.98bead08.js";import"./index.8f766603.js";import"./index.4167113f.js";import"./use-theme.179303e8.js";const u=h("demo-swipe"),I={"zh-CN":{basicUsage:"\u57FA\u7840\u7528\u6CD5",verticalScrolling:"\u7EB5\u5411\u6EDA\u52A8",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",changeEvent:"\u76D1\u542C change \u4E8B\u4EF6",swipeSize:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F",instanceAPI:"\u7EC4\u4EF6\u5B9E\u4F8B",currentSwipeIndex:"\u5F53\u524D Swipe \u7D22\u5F15:",btnPrev:"\u4E0A\u4E00\u4E2A",btnNext:"\u4E0B\u4E00\u4E2A",btnFirst:"\u7B2C\u4E00\u4E2A",btnLast:"\u6700\u540E\u4E00\u4E2A"},"en-US":{basicUsage:"Basic Usage",verticalScrolling:"Vertical Scrolling",customIndicator:"Custom indicator",changeEvent:"Change Event",swipeSize:"Set Swipe.Item Size",instanceAPI:"Ref instance API",currentSwipeIndex:"Current Swipe index:",btnPrev:"Prev",btnNext:"Next",btnFirst:"First",btnLast:"Last"}},p=()=>{const[n,c]=l.exports.useState(0);return r(t,{indicator:r("div",{className:"custom-indicator",children:[n+1," / 3"]}),onActiveIndexChange:i=>c(i),children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"})]})};function g(){const[n]=d(I,"en-US"),c=l.exports.useRef(null);return r(o,{children:[e(s,{cardMode:!0,title:n.basicUsage,children:r(t,{autoplay:1500,children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"})]})}),e(s,{cardMode:!0,title:n.verticalScrolling,children:r(t,{className:u("vertical-swipe"),vertical:!0,children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"})]})}),e(s,{cardMode:!0,title:n.customIndicator,children:e(p,{})}),e(s,{cardMode:!0,title:n.changeEvent,children:r(t,{autoplay:0,defaultActiveIndex:1,onActiveIndexChange:i=>{m.show(`${n.currentSwipeIndex} ${i}`)},children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"})]})}),e(s,{cardMode:!0,title:n.swipeSize,children:r(t,{className:u("define-swipe"),width:200,loop:!1,children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"}),e(t.Item,{children:"4"})]})}),r(s,{cardMode:!0,title:n.instanceAPI,children:[r(t,{ref:c,children:[e(t.Item,{children:"1"}),e(t.Item,{children:"2"}),e(t.Item,{children:"3"})]}),r("div",{className:u("buttons"),children:[e(a,{size:"sm",onClick:()=>{var i;return(i=c.current)==null?void 0:i.swipeTo(0,{animation:!0})},children:n.btnFirst}),e(a,{size:"sm",onClick:()=>{var i;return(i=c.current)==null?void 0:i.prev()},children:n.btnPrev}),e(a,{size:"sm",onClick:()=>{var i;return(i=c.current)==null?void 0:i.next()},children:n.btnNext}),e(a,{size:"sm",onClick:()=>{var i;return(i=c.current)==null?void 0:i.swipeTo(2,{animation:!0})},children:n.btnLast})]})]})]})}export{g as default};
