import{r as a,j as o,a as f}from"./index-8b435b75.js";import{D as g}from"./index-588a6987.js";import{u as m}from"./use-demo-translate-489d42ac.js";import{B as x}from"./index-6f2e6b84.js";import"./index-fdd3a7d6.js";import"./use-theme-8dbf9539.js";import"./config-component-props-c0788442.js";import"./index-f0ac2a00.js";import"./format-3509efe4.js";import"./detect-9e279ab2.js";import"./constants-a731eda5.js";import"./event-471798e4.js";import"./misc-276e45ca.js";var E=Object.defineProperty,j=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r,t)=>(j(e,typeof r!="symbol"?r+"":r,t),t);const i=f("fnx-error-boundary");class b extends a.Component{constructor(){super(...arguments),S(this,"state",{error:void 0,info:{componentStack:""}})}componentDidCatch(r,t){this.setState({error:r,info:t})}render(){const{message:r,description:t,children:n}=this.props,{error:c,info:s}=this.state,u=s&&s.componentStack?s.componentStack:null,l=typeof r>"u"?(c||"").toString():r,h=typeof t>"u"?u:t;return c?o.jsxs("div",{className:i(),children:[o.jsx("div",{className:i("title"),children:l}),o.jsx("div",{className:i("description"),children:o.jsx("pre",{children:h})})]}):n}}const p={"zh-CN":{basicUsage:"基础用法",clickThrow:"点击抛出异常",uncaughtError:"未捕获异常"},"en-US":{basicUsage:"Basic Usage",clickThrow:"Click me to throw a error",uncaughtError:"An Uncaught Error"}},d=()=>{const[e]=m(p,"en-US"),[r,t]=a.useState(),n=()=>{t(new Error(e.uncaughtError))};if(r)throw r;return o.jsx(x,{type:"danger",onClick:n,children:e.clickThrow})};d.displayName="ThrowError";function F(){const[e]=m(p,"en-US");return o.jsx(o.Fragment,{children:o.jsx(g,{title:e.basicUsage,cardMode:!0,children:o.jsx(b,{children:o.jsx(d,{})})})})}export{F as default};
