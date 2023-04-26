import{r as _,j as e,b as c,L as I,a as k,_ as t,F as D,c as v,u as x,E as R,P as Y}from"./index-cd4e7e60.js";import{u as P}from"./use-theme-8af7e58d.js";import{n as f}from"./misc-276e45ca.js";const V="fnx-ui",S="0.1.0",b="Lightweight Mobile UI Components built in React",U=["fnx","fnx-ui","react","react-fnx"],Q=["react","react-ui","react-component","fnx","fnx-ui","fnx-mobile","component","components","ui","framework","frontend","mobile"],$=["es/**/style/*","lib/**/style/*","*.css","*.less"],F="https://github.com/Rockcookies/fnx-ui",H="https://github.com/Rockcookies/fnx-ui/issues",G={url:"https://github.com/Rockcookies/fnx-ui",type:"git"},X={access:"public",registry:"https://registry.npmjs.org/"},B="MIT",Z="Rockcookies",W="lib/index.js",K="es/index.js",J="lib/index.d.ts",q=["lib","es","dist"],tt=["defaults","Chrome >= 51","Android >= 5.0","IOS >= 10.0"],et={clean:"fnx-ui-cli clean && rimraf ./dist-site ./converge",dev:"fnx-ui-cli dev --port 8000",build:"fnx-ui-cli build","build:site":"fnx-ui-cli build-site --outDir dist-site && gh-pages -d dist-site",test:"jest","test:cov":"jest --coverage","test:update":"jest --updateSnapshot",lint:"fnx-ui-cli lint"},it={react:">=16.9.0","react-dom":">=16.9.0"},rt={"@fnx-ui/cli":"^0.0.16","@swc/core":"^1.3.1","@swc/jest":"^0.2.22","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^13.4.0","@types/jest":"^29.0.3","@types/react":"^18.0.0","@types/react-dom":"^18.0.0","@vant/touch-emulator":"^1.4.0","gh-pages":"^5.0.0",jest:"^29.0.3","jest-environment-jsdom":"^29.0.3",react:"^18.2.0","react-dom":"^18.2.0","react-router-dom":"^6.4.1",rimraf:"^4.4.1"},ot={"@types/react-is":"^17.0.3","@types/react-transition-group":"^4.4.5","rc-field-form":"^1.27.1","react-is":"^18.2.0","react-transition-group":"^4.4.5"},g={name:V,version:S,description:b,tags:U,keywords:Q,sideEffects:$,homepage:F,bugs:H,repository:G,publishConfig:X,license:B,author:Z,main:W,module:K,types:J,files:q,browserslist:tt,scripts:et,peerDependencies:it,devDependencies:rt,dependencies:ot};function nt(M){const i=new Set;let r;const a=()=>{const n=window.innerWidth,l={};let o=!1;for(const d of Object.keys(M))l[d]=n>=M[d],(!r||l[d]!==r[d])&&(o=!0);o&&(r=l)},u=()=>{r||typeof window>"u"||(a(),window.addEventListener("resize",()=>{const n=r;if(a(),n!==r)for(const l of i)l()}))};return()=>{u();const n=typeof window<"u",[l,o]=_.useState(r);return _.useEffect(()=>{if(!n)return;const d=()=>{o(r)};return i.add(d),()=>{i.delete(d)}},[n]),[l]}}const L=_.createContext({theme:"light",locale:"en-US",responsive:{},setTheme:f});const z=k("index"),mt={"zh-CN":{slogan:"轻量、可靠的移动端 React 组件库",changeTheme:"换个主题",getStarted:"开始使用"},"en-US":{slogan:"Lightweight Mobile UI Components built in React",changeTheme:"Change Theme",getStarted:"Get Started"}},C=M=>{const{locale:i,setTheme:r,theme:a}=_.useContext(L),u=mt[i];return e("div",{className:z(),children:c("div",{className:z("content"),children:[e("h1",{className:z("logo"),children:"FNX UI"}),e("div",{className:z("slogan"),children:M.slogan}),c("div",{className:z("button-list"),children:[e("a",{className:z("button"),onClick:()=>r(a==="dark"?"light":"dark"),children:e("span",{children:u.changeTheme})}),e(I,{className:z("button",{primary:!0}),to:`/${i}/docs/getting-started`,children:e("span",{children:u.getStarted})})]})]})})};C.displayName="SiteIndex";const at=C,lt=[{title:"Basic Components",titleCN:"基本组件",children:[{key:"button",title:"Button",titleCN:"按钮",markdown:()=>t(()=>import("./index.en-US-5c2af780.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-efcb0423.js"),[],import.meta.url)},{key:"cell",title:"Cell",titleCN:"单元格",markdown:()=>t(()=>import("./index.en-US-efe2e3b6.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-8130d572.js"),[],import.meta.url)},{key:"icon",title:"Icon",titleCN:"图标",markdown:()=>t(()=>import("./index.en-US-05976606.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-617d7068.js"),[],import.meta.url)},{key:"image",title:"Image",titleCN:"图片",markdown:()=>t(()=>import("./index.en-US-0cf692d6.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-b34464f6.js"),[],import.meta.url)},{key:"layout",title:"Layout",titleCN:"布局",markdown:()=>t(()=>import("./index.en-US-7cc33625.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-85696d9a.js"),[],import.meta.url)},{key:"popup",title:"Popup",titleCN:"弹出层",markdown:()=>t(()=>import("./index.en-US-51c367a2.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-9b80f19c.js"),[],import.meta.url)},{key:"space",title:"Space",titleCN:"间距",markdown:()=>t(()=>import("./index.en-US-b53bad6b.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-b5736d52.js"),[],import.meta.url)},{key:"toast",title:"Toast",titleCN:"轻提示",markdown:()=>t(()=>import("./index.en-US-003d5b19.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-ae34cbd8.js"),[],import.meta.url)},{key:"config-provider",title:"ConfigProvider",titleCN:"全集配置",markdown:()=>t(()=>import("./index.en-US-3c6f3827.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-903edd34.js"),[],import.meta.url)}]},{title:"Form Components",titleCN:"表单组件",children:[{key:"calendar",title:"Calendar",titleCN:"日历",markdown:()=>t(()=>import("./index.en-US-29aee594.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-035ceccb.js"),[],import.meta.url)},{key:"cascader",title:"Cascader",titleCN:"级联选择",markdown:()=>t(()=>import("./index.en-US-70752883.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-c8ff4422.js"),[],import.meta.url)},{key:"checkbox",title:"Checkbox",titleCN:"复选框",markdown:()=>t(()=>import("./index.en-US-255edd27.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-d0d09dc9.js"),[],import.meta.url)},{key:"date-picker",title:"DatePicker",titleCN:"时间选择",markdown:()=>t(()=>import("./index.en-US-a7352b2d.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-308f89fa.js"),[],import.meta.url)},{key:"field",title:"Field",titleCN:"输入框",markdown:()=>t(()=>import("./index.en-US-51c5a59f.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-bf475b10.js"),[],import.meta.url)},{key:"form",title:"Form",titleCN:"表单",markdown:()=>t(()=>import("./index.en-US-c95357ef.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-40d6ad69.js"),[],import.meta.url)},{key:"picker",title:"Picker",titleCN:"选择器",markdown:()=>t(()=>import("./index.en-US-629541b6.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-008d0742.js"),[],import.meta.url)},{key:"radio",title:"Radio",titleCN:"单选框",markdown:()=>t(()=>import("./index.en-US-f5f9db8c.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-9fae0fff.js"),[],import.meta.url)},{key:"rate",title:"Rate",titleCN:"评分",markdown:()=>t(()=>import("./index.en-US-a9018eed.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-05fbf2f8.js"),[],import.meta.url)},{key:"stepper",title:"Stepper",titleCN:"步进器",markdown:()=>t(()=>import("./index.en-US-3ff325ad.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-9c2b366f.js"),[],import.meta.url)},{key:"switch",title:"Switch",titleCN:"开关",markdown:()=>t(()=>import("./index.en-US-7256c5b7.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-9cfb034e.js"),[],import.meta.url)},{key:"uploader",title:"Uploader",titleCN:"文件上传",markdown:()=>t(()=>import("./index.en-US-16a00eb0.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-703b6a1d.js"),[],import.meta.url)}]},{title:"Action Components",titleCN:"反馈组件",children:[{key:"dialog",title:"Dialog",titleCN:"对话框",markdown:()=>t(()=>import("./index.en-US-cfe4ab85.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-1a6acfe4.js"),[],import.meta.url)},{key:"error-boundary",title:"ErrorBoundary",titleCN:"错误边界",markdown:()=>t(()=>import("./index.en-US-e0b5f179.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-ad21b4f7.js"),[],import.meta.url)},{key:"loading",title:"Loading",titleCN:"加载",markdown:()=>t(()=>import("./index.en-US-fd2389ad.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-6bbf12e8.js"),[],import.meta.url)},{key:"notify",title:"Notify",titleCN:"消息通知",markdown:()=>t(()=>import("./index.en-US-de4b72bd.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-b8eacaa1.js"),[],import.meta.url)},{key:"overlay",title:"Overlay",titleCN:"遮罩层",markdown:()=>t(()=>import("./index.en-US-5bc093c0.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-6f04e3df.js"),[],import.meta.url)},{key:"pull-refresh",title:"PullRefresh",titleCN:"下拉刷新",markdown:()=>t(()=>import("./index.en-US-73b82e3c.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-f51fe42e.js"),[],import.meta.url)}]},{title:"Display Components",titleCN:"展示组件",children:[{key:"badge",title:"Badge",titleCN:"徽标",markdown:()=>t(()=>import("./index.en-US-7a2d5ecd.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-fc9fc0ae.js"),[],import.meta.url)},{key:"circle",title:"Circle",titleCN:"环形进度条",markdown:()=>t(()=>import("./index.en-US-36db82fc.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-2339884b.js"),[],import.meta.url)},{key:"collapse",title:"Collapse",titleCN:"折叠面板",markdown:()=>t(()=>import("./index.en-US-3df93750.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-0d9572de.js"),[],import.meta.url)},{key:"divider",title:"Divider",titleCN:"分隔线",markdown:()=>t(()=>import("./index.en-US-94d0fb5b.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-e0ddf017.js"),[],import.meta.url)},{key:"empty",title:"Empty",titleCN:"空状态",markdown:()=>t(()=>import("./index.en-US-c1f13eb1.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-c5094fdd.js"),[],import.meta.url)},{key:"list",title:"List",titleCN:"列表",markdown:()=>t(()=>import("./index.en-US-4800c6aa.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-80a594e0.js"),[],import.meta.url)},{key:"skeleton",title:"Skeleton",titleCN:"骨架屏",markdown:()=>t(()=>import("./index.en-US-34dc8527.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-dee88eac.js"),[],import.meta.url)},{key:"sticky",title:"Sticky",titleCN:"粘性布局",markdown:()=>t(()=>import("./index.en-US-5078590d.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-897386b6.js"),[],import.meta.url)},{key:"swipe",title:"Swipe",titleCN:"轮播",markdown:()=>t(()=>import("./index.en-US-45177390.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-95b7b65a.js"),[],import.meta.url)},{key:"notice-bar",title:"NoticeBar",titleCN:"通知栏",markdown:()=>t(()=>import("./index.en-US-25125964.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-b30c0cdf.js"),[],import.meta.url)},{key:"tag",title:"Tag",titleCN:"标签",markdown:()=>t(()=>import("./index.en-US-a543b13a.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-1dc4ba6b.js"),[],import.meta.url)}]},{title:"Navigation Components",titleCN:"导航组件",children:[{key:"grid",title:"Grid",titleCN:"宫格",markdown:()=>t(()=>import("./index.en-US-bf3e26b2.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-d4188818.js"),[],import.meta.url)},{key:"pagination",title:"Pagination",titleCN:"分页",markdown:()=>t(()=>import("./index.en-US-c302c5f2.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-82626229.js"),[],import.meta.url)},{key:"tabs",title:"Tabs",titleCN:"标签页",markdown:()=>t(()=>import("./index.en-US-9838ebac.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN-fe2fa51f.js"),[],import.meta.url)}]}],_t=[{title:"Introduction",titleCN:"介绍",children:[{key:"introduction",title:"FNX UI",titleCN:"FNX UI",markdown:()=>t(()=>import("./introduction.en-US-afb6535a.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./introduction.zh-CN-ba712d19.js"),[],import.meta.url)}]},{title:"Guides",titleCN:"指南",children:[{key:"getting-started",title:"Getting Started",titleCN:"快速上手",markdown:()=>t(()=>import("./getting-started.en-US-c9fb2b11.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./getting-started.zh-CN-5ca35dd6.js"),[],import.meta.url)},{key:"import-on-demand",title:"Import on Demand",titleCN:"按需引入",markdown:()=>t(()=>import("./import-on-demand.en-US-f5f3bcae.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./import-on-demand.zh-CN-3d2c58b0.js"),[],import.meta.url)},{key:"supported-platforms",title:"Supported Platforms",titleCN:"支持的平台",markdown:()=>t(()=>import("./supported-platforms.en-US-8a79464c.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./supported-platforms.zh-CN-8e5b8cda.js"),[],import.meta.url)},{key:"i18n",title:"Internationalization",titleCN:"国际化",markdown:()=>t(()=>import("./i18n.en-US-42ab91f3.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./i18n.zh-CN-24011e08.js"),[],import.meta.url)}]}],Mt=[{key:"docs",title:"Docs",titleCN:"文档",children:_t,component:_.lazy(()=>t(()=>import("./index-be5e0199.js"),["./index-be5e0199.js","./index-cd4e7e60.js","./index-8ffd0b0d.css","./scroll-a0e7f6b9.js","./detect-9e279ab2.js","./index-295223c9.js","./index-e00e34ee.css","./use-theme-8af7e58d.js","./misc-276e45ca.js","./index-b037008a.css"],import.meta.url))},{key:"components",title:"Components",titleCN:"组件",children:lt,component:_.lazy(()=>t(()=>import("./index-4019334e.js"),["./index-4019334e.js","./index-cd4e7e60.js","./index-8ffd0b0d.css","./scroll-a0e7f6b9.js","./detect-9e279ab2.js","./index-295223c9.js","./index-e00e34ee.css","./use-theme-8af7e58d.js","./misc-276e45ca.js","./index-21fd3c37.css"],import.meta.url))}],j=Mt;var dt="data:image/svg+xml;base64,PHN2Zwp4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBmaWxsPSIjMzc4ZWYwIj4KICAgIDxwYXRoIGQ9Ik00MjAuODY0IDY4LjY5MzMzM2MyMTAuMzQ2NjY3LTQwLjc0NjY2NyA0MzQuOTg2NjY3IDIzMC43NDEzMzMgMzM1LjcwMTMzMyAyMjYuOTAxMzM0bC00LjM5NDY2Ni0wLjM0MTMzNGMtMTA5Ljk5NDY2Ny0xMS44NjEzMzMtMTA5Ljk5NDY2NyA1Ny4zMDEzMzMtMjMzLjEzMDY2NyAxMTcuMTYyNjY3LTEyMy4wOTMzMzMgNTkuOTA0LTI1MS45MDQtMzcuNTA0LTI1OC42NDUzMzMtMTM2LjUzMzMzMy02Ljc4NC05OS4wNzIgMzYuNzM2LTE4My4yOTYgMTYwLjQyNjY2Ni0yMDcuMjMyeiBtMjQzLjk2OCAxNDkuNjc0NjY3Yy03MS4xMjUzMzMtNjQuMzg0LTE2MC4yOTg2NjctMTAwLjY5MzMzMy0yMzEuODA4LTg2Ljg2OTMzMy04MS43OTIgMTUuODI5MzMzLTExNC4xMzMzMzMgNjEuOTk0NjY3LTEwOC44IDEzOS45ODkzMzMgNC40MzczMzMgNjQuNjQgOTQuMTIyNjY3IDExOC43ODQgMTY2LjgyNjY2NyA4My40MTMzMzNsMTQuMjUwNjY2LTcuMjEwNjY2YzE5LjkyNTMzMy0xMC40OTYgMzQuMzg5MzMzLTIwLjM5NDY2NyA1NS42OC0zNy43MTczMzRsMjQuMDIxMzM0LTIwLjA5NmMzMy4wNjY2NjctMjguMTYgNTcuNi00NC40MTYgODcuODUwNjY2LTUyLjgyMTMzM2w4Ljk2LTIuMjYxMzMzLTMuOTY4LTQuMDUzMzM0LTYuMzU3MzMzLTYuMTQ0LTYuNjU2LTYuMjI5MzMzek05NTguODkwNjY3IDc0NC4yMzQ2NjdjLTY5LjkzMDY2NyAyMDIuNTgxMzMzLTQxNy4zMjI2NjcgMjYxLjMzMzMzMy0zNjQuMzczMzM0IDE3Ny4yOGwyLjUxNzMzNC0zLjYyNjY2N2M2NS4yOC04OS4zNDQgNS4zNzYtMTIzLjk0NjY2NyAxNS4wNjEzMzMtMjYwLjQ4IDkuNjg1MzMzLTEzNi41MzMzMzMgMTU4LjQyMTMzMy0xOTkuNDI0IDI0Ny41OTQ2NjctMTU1LjczMzMzMyA4OS4xNzMzMzMgNDMuNjQ4IDE0MC4zNzMzMzMgMTIzLjQ3NzMzMyA5OS4yIDI0Mi41NnogbS0yNTEuNjA1MzM0IDEzNi40NDhjOTEuMzA2NjY3LTI5LjQ0IDE2Ny4zMzg2NjctODguNDQ4IDE5MS4xNDY2NjctMTU3LjMxMiAyNy4xNzg2NjctNzguNzYyNjY3IDMuMzcwNjY3LTEyOS44MzQ2NjctNjYuOTAxMzMzLTE2NC4yMjQtNTguMTU0NjY3LTI4LjUwMTMzMy0xNDkuODg4IDIyLjEwMTMzMy0xNTUuNjA1MzM0IDEwMi43ODQtMi42MDI2NjcgMzYuODIxMzMzLTAuOTM4NjY3IDU2LjMyIDcuMzM4NjY3IDEwMi42NTZsMi4wMDUzMzMgMTEuMjIxMzMzYzcuODUwNjY3IDQyLjY2NjY2NyA5LjY0MjY2NyA3Mi4xMDY2NjcgMS44MzQ2NjcgMTAyLjQ4NTMzM2wtMi41NiA4LjgzMiA5LjcyOC0yLjU2IDEzLjAxMzMzMy0zLjg4MjY2NnpNMTA0LjgzMiA4NzIuNDA1MzMzYy0xNDIuNDY0LTE2NC4wOTYtMTQuMTY1MzMzLTUwMS40MTg2NjcgMzAuNTQ5MzMzLTQwMC4yMTMzMzNzMTA0LjYxODY2NyA2Ni42NDUzMzMgMjE4LjAyNjY2NyAxNDMuMzE3MzMzYzExMy40NTA2NjcgNzYuNjcyIDkzLjQ4MjY2NyAyMzYuODg1MzMzIDExLjA5MzMzMyAyOTIuMjY2NjY3LTgyLjM4OTMzMyA1NS4zODEzMzMtMTc3LjA2NjY2NyA1OS44MTg2NjctMjU5LjY2OTMzMy0zNS4zNzA2Njd6IG03LjY4LTI4Ni4xMjI2NjZjLTIwLjIyNCA5My43ODEzMzMtNy4xMjUzMzMgMTg5LjE4NCA0MC42MTg2NjcgMjQ0LjE4MTMzMyA1NC42MTMzMzMgNjIuOTMzMzMzIDExMC43NjI2NjcgNjcuODQgMTc1LjY1ODY2NiAyNC4xOTIgNTMuNzYtMzYuMDk2IDU1LjgwOC0xNDAuODQyNjY3LTExLjIyMTMzMy0xODYuMTU0NjY3bC0xMy4zMTItOC43MDRjLTIxLjIwNTMzMy0xMy4zNTQ2NjctMzguNC0yMS4yMDUzMzMtNjkuNDYxMzMzLTMyLjcyNTMzM2wtMjAuNDgtNy4zODEzMzNjLTQwLjg3NDY2Ny0xNC41OTItNjcuMjg1MzMzLTI3LjczMzMzMy04OS42ODUzMzQtNDkuNjY0bC02LjQtNi42MTMzMzQtMi42NDUzMzMgOS42NDI2NjctMy4xMTQ2NjcgMTMuMjI2NjY3eiIgcC1pZD0iMjg1NiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMTcuNTE0NjY3IDc1Ni43MzZhMzIgMzIgMCAwIDEgNDUuMjI2NjY2IDAuNzY4IDMxMy42IDMxMy42IDAgMCAwIDIyNi4xMzMzMzQgOTUuODI5MzMzIDMyIDMyIDAgMSAxIDAgNjQgMzc3LjYgMzc3LjYgMCAwIDEtMjcyLjA4NTMzNC0xMTUuMzI4IDMyIDMyIDAgMCAxIDAuNzI1MzM0LTQ1LjIyNjY2NnpNNDYxLjA5ODY2NyAyMzQuMDY5MzMzYTMyIDMyIDAgMCAxLTIyLjE0NCAzOS40NjY2NjdjLTcyLjkxNzMzMyAyMC41MjI2NjctMTM2LjYxODY2NyA2OS44ODgtMTc2LjU1NDY2NyAxMzkuMDkzMzMzYTMyIDMyIDAgMCAxLTU1LjQ2NjY2Ny0zMkMyNTUuMjc0NjY3IDI5Ni45NiAzMzIuNjcyIDIzNy4wMTMzMzMgNDIxLjU4OTMzMyAyMTEuOTY4YTMyIDMyIDAgMCAxIDM5LjUwOTMzNCAyMi4xNDR6TTc4My4wMTg2NjcgNzMzLjM5NzMzM2EzMiAzMiAwIDAgMS0yMi4wMTYtMzkuNTUyIDMxMy42IDMxMy42IDAgMCAwLTMwLjAzNzMzNC0yNDMuNzU0NjY2IDMyIDMyIDAgMSAxIDU1LjQyNC0zMiAzNzcuNiAzNzcuNiAwIDAgMSAzNi4xODEzMzQgMjkzLjMzMzMzMyAzMiAzMiAwIDAgMS0zOS41NTIgMjEuOTczMzMzeiI+PC9wYXRoPgo8L3N2Zz4K";const ct=dt;const y=k("site-menu-tree"),A=M=>{const{locale:i,category:r,menu:a}=_.useContext(L),u=n=>i==="en-US"?n.title:(r==null?void 0:r.key)==="components"?c(D,{children:[n.titleCN,e("span",{children:n.title})]}):n.titleCN;return r?e("div",{...M,className:v(y(),M.className),children:(r.children||[]).map((n,l)=>c("div",{className:y("menu-group"),children:[e("h3",{className:y("menu-group-title"),children:i==="zh-CN"?n.titleCN:n.title}),(n.children||[]).map(o=>e("div",{className:y("menu-item"),children:e("div",{className:y("menu-item-title",{active:o.key===(a==null?void 0:a.key)}),children:e(I,{to:`/${i}/${r.key}/${o.key}`,children:u(o)})})},o.key))]},l))}):e(D,{})};A.displayName="SideMenuTree";const w=A,s=k("site-header"),st=c("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:[e("circle",{cx:"18",cy:"18",r:"7.9"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2",y:"30"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",y:"16.2"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",x:"30",y:"16.2"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 29.02 7.02)",width:"6",x:"26.02",y:"5.22"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7.02 29.02)",width:"6",x:"4.02",y:"27.22"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7 7)",width:"3.6",x:"5.2",y:"4"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 28.98 28.98)",width:"3.6",x:"27.18",y:"25.98"})]}),ut=e("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:e("path",{d:"M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm1 29.964c-.33.023-.664.036-1 .036a14 14 0 0 1 0-28c.336 0 .67.013 1 .036a22 22 0 0 0 0 27.928z"})}),Nt=e("svg",{viewBox:"64 64 896 896",fill:"currentColor",width:"1em",height:"1em",children:e("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})}),h=()=>{const{theme:M,setTheme:i,locale:r,category:a,menu:u,responsive:n}=_.useContext(L),[l,o]=_.useState(!1),d=()=>c(I,{className:s("logo"),to:`/${r}`,replace:!1,onClick:()=>o(!1),children:[e("img",{src:ct}),e("span",{children:"FNX UI"})]});_.useEffect(()=>{if(l){const m=document.body;return m.style.overflow="hidden",()=>{m.style.removeProperty("overflow")}}},[l]);const E=()=>c(D,{children:[j.map(m=>{const N=(m.children||[])[0],p=N?(N.children||[])[0]:void 0;return e("li",{className:s("nav-item",{active:(a==null?void 0:a.key)===m.key}),children:e(I,{to:p?`/${r}/${m.key}/${p.key}`:`/${r}`,replace:!1,children:r==="en-US"?m.title:m.titleCN})},m.key)}),e("li",{className:s("nav-item"),children:e("a",{href:"https://github.com/Rockcookies/fnx-ui",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),e("li",{className:s("nav-button"),children:e(I,{to:a&&u?`/${r==="en-US"?"zh-CN":"en-US"}/${a.key}/${u.key}`:`/${r==="en-US"?"zh-CN":"en-US"}`,replace:!1,children:r==="en-US"?"中文":"English"})}),e("li",{className:s("nav-ico"),children:e("a",{onClick:()=>i(M==="dark"?"light":"dark"),children:M==="dark"?st:ut})}),e("li",{children:g.version})]});return c("header",{className:s({mobile:!n.md}),children:[!n.md&&c(D,{children:[e("i",{className:s("aside-mask",{expanded:l}),onClick:()=>o(!1)}),e("div",{className:s("aside",{expanded:l}),onClick:()=>o(!1),children:c("div",{className:s("aside-container"),children:[e("ul",{className:s("aside-nav"),children:E()}),e(w,{})]})})]}),c("div",{className:s("container"),children:[!n.md&&e("a",{className:s("aside-handler"),onClick:()=>o(!l),children:Nt}),d(),e("ul",{className:s("nav"),children:E()})]})]})};h.displayName="SiteHeader";const pt=h,T=k("site"),zt=nt({xs:575,sm:576,md:768,lg:992,xl:1200,xxl:1600}),Tt={"zh-CN":{slogan:"轻量、可靠的移动端 React 组件库"},"en-US":{slogan:"Lightweight Mobile UI Components built in React"}},O=()=>{const[M]=zt(),i=x(),r=_.useMemo(()=>(i==null?void 0:i.locale)==="zh-CN"?"zh-CN":"en-US",[i==null?void 0:i.locale]),a=Tt[r],[u,n]=_.useState(()=>{const m=localStorage.getItem("theme");return m?m==="dark"?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),l=_.useCallback(m=>{localStorage.setItem("theme",m),n(m)},[]),o=_.useMemo(()=>{const m=i==null?void 0:i.category,N=m!=null?j.findIndex(({key:p})=>p===m):-1;return j[N]},[i==null?void 0:i.category]),d=_.useMemo(()=>{const m=i==null?void 0:i.menu;if(m!=null){for(const{children:N}of(o==null?void 0:o.children)||[])for(const p of N||[])if(p.key===m)return p}},[o,i==null?void 0:i.menu]);_.useEffect(()=>{document.title=d?`${r==="zh-CN"?d.titleCN:d.title} - FNX-UI`:`FNX-UI - ${a.slogan}`},[a.slogan,r,d]),P(u);const E=()=>e("footer",{className:T("footer"),children:c("div",{className:T("copyright"),children:["FNX UI ",g.version," · Made by",e("a",{href:"https://github.com/Rockcookies",target:"_blank",rel:"noopener noreferrer",children:"RockCookies"})]})});return e(L.Provider,{value:{locale:r,responsive:M||{},theme:u,setTheme:l,category:o,menu:d},children:c("section",{className:T({mobile:!(M!=null&&M.md),"layout-mode":o==null}),children:[e(pt,{}),e(w,{className:T("aside")}),c("div",{className:T("main"),children:[e("div",{className:T("content"),children:e(R,{className:T("error-fallback"),children:o?e(_.Suspense,{fallback:e(Y,{}),children:e(o.component,{})}):e(at,{slogan:a.slogan})})}),E()]})]})})};O.displayName="Layout";const Dt=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{L as S,Dt as i};