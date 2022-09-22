import{r as l,a as e,j as s,L as v,c as I,_ as t,F as y,b as P,l as O,g as V,E as x,P as F}from"./index.8328650d.js";import{n as b,u as S}from"./use-theme.3853efe2.js";const B="fnx-ui",U="0.0.16",$="Lightweight Mobile UI Components built in React",M=["fnx","fnx-ui","react","react-fnx"],j=["react","react-ui","react-component","fnx","fnx-ui","fnx-mobile","component","components","ui","framework","frontend","mobile"],z=["es/**/style/*","lib/**/style/*","*.css","*.less"],H="https://github.com/Rockcookies/fnx-ui",X="https://github.com/Rockcookies/fnx-ui/issues",G={url:"https://github.com/Rockcookies/fnx-ui",type:"git"},K={access:"public",registry:"https://registry.npmjs.org/"},W="MIT",J="Rockcookies",Q="lib/index.js",Y="es/index.js",Z="lib/index.d.ts",q=["lib","es","dist"],tt=["defaults","Chrome >= 51","Android >= 5.0","IOS >= 10.0"],et={clean:"fnx-ui-cli clean && rimraf ./dist-site ./converge",dev:"fnx-ui-cli dev --port 8000",build:"fnx-ui-cli build","build:site":"fnx-ui-cli build-site --outDir dist-site",test:"jest","test:cov":"jest --coverage","test:update":"jest --updateSnapshot",lint:"fnx-ui-cli lint"},rt={react:">=16.9.0","react-dom":">=16.9.0"},it={"@fnx-ui/cli":"^0.0.14","@swc/core":"^1.3.1","@swc/jest":"^0.2.22","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^13.4.0","@types/jest":"^29.0.3","@types/react":"^18.0.0","@types/react-dom":"^18.0.0","@vant/touch-emulator":"^1.4.0","gh-pages":"^4.0.0",jest:"^29.0.3","jest-environment-jsdom":"^29.0.3",react:"^18.2.0","react-dom":"^18.2.0","react-router-dom":"^6.4.1",rimraf:"^3.0.2"},ot={"@types/react-is":"^17.0.3","@types/react-transition-group":"^4.4.5","rc-field-form":"^1.27.1","react-is":"^18.2.0","react-transition-group":"^4.4.5"},g={name:B,version:U,description:$,tags:M,keywords:j,sideEffects:z,homepage:H,bugs:X,repository:G,publishConfig:K,license:W,author:J,main:Q,module:Y,types:Z,files:q,browserslist:tt,scripts:et,peerDependencies:rt,devDependencies:it,dependencies:ot};function nt(_){const r=new Set;let i;const a=()=>{const n=window.innerWidth,u={};let o=!1;for(const d of Object.keys(_))u[d]=n>=_[d],(!i||u[d]!==i[d])&&(o=!0);o&&(i=u)},p=()=>{i||typeof window>"u"||(a(),window.addEventListener("resize",()=>{const n=i;if(a(),n!==i)for(const u of r)u()}))};return()=>{p();const n=typeof window<"u",[u,o]=l.exports.useState(i);return l.exports.useEffect(()=>{if(!n)return;const d=()=>{o(i)};return r.add(d),()=>{r.delete(d)}},[n]),[u]}}const A=l.exports.createContext({theme:"light",locale:"en-US",responsive:{},setTheme:b});const C=I("index"),mt={"zh-CN":{slogan:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93",changeTheme:"\u6362\u4E2A\u4E3B\u9898",getStarted:"\u5F00\u59CB\u4F7F\u7528"},"en-US":{slogan:"Lightweight Mobile UI Components built in React",changeTheme:"Change Theme",getStarted:"Get Started"}},R=_=>{const{locale:r,setTheme:i,theme:a}=l.exports.useContext(A),p=mt[r];return e("div",{className:C(),children:s("div",{className:C("content"),children:[e("h1",{className:C("logo"),children:"FNX UI"}),e("div",{className:C("slogan"),children:_.slogan}),s("div",{className:C("button-list"),children:[e("a",{className:C("button"),onClick:()=>i(a==="dark"?"light":"dark"),children:e("span",{children:p.changeTheme})}),e(v,{className:C("button",{primary:!0}),to:`/${r}/docs/getting-started`,children:e("span",{children:p.getStarted})})]})]})})};R.displayName="SiteIndex";const at=[{title:"Basic Components",titleCN:"\u57FA\u672C\u7EC4\u4EF6",children:[{key:"button",title:"Button",titleCN:"\u6309\u94AE",markdown:()=>t(()=>import("./index.en-US.9f33b0ea.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.673994b3.js"),[],import.meta.url)},{key:"cell",title:"Cell",titleCN:"\u5355\u5143\u683C",markdown:()=>t(()=>import("./index.en-US.92db89b9.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.c6f61c41.js"),[],import.meta.url)},{key:"icon",title:"Icon",titleCN:"\u56FE\u6807",markdown:()=>t(()=>import("./index.en-US.5220184b.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.d19189d9.js"),[],import.meta.url)},{key:"image",title:"Image",titleCN:"\u56FE\u7247",markdown:()=>t(()=>import("./index.en-US.ac918d19.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.d0bff149.js"),[],import.meta.url)},{key:"layout",title:"Layout",titleCN:"\u5E03\u5C40",markdown:()=>t(()=>import("./index.en-US.f8b9c7f2.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.c6bce2df.js"),[],import.meta.url)},{key:"popup",title:"Popup",titleCN:"\u5F39\u51FA\u5C42",markdown:()=>t(()=>import("./index.en-US.7cd7a553.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.418cdb52.js"),[],import.meta.url)},{key:"space",title:"Space",titleCN:"\u95F4\u8DDD",markdown:()=>t(()=>import("./index.en-US.6a31fe5a.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.6a3017d7.js"),[],import.meta.url)},{key:"toast",title:"Toast",titleCN:"\u8F7B\u63D0\u793A",markdown:()=>t(()=>import("./index.en-US.34cebc36.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.5a18ae9e.js"),[],import.meta.url)},{key:"config-provider",title:"ConfigProvider",titleCN:"\u5168\u96C6\u914D\u7F6E",markdown:()=>t(()=>import("./index.en-US.148e4694.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.adfe7e49.js"),[],import.meta.url)}]},{title:"Form Components",titleCN:"\u8868\u5355\u7EC4\u4EF6",children:[{key:"calendar",title:"Calendar",titleCN:"\u65E5\u5386",markdown:()=>t(()=>import("./index.en-US.c95d3a75.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.49d15c8e.js"),[],import.meta.url)},{key:"cascader",title:"Cascader",titleCN:"\u7EA7\u8054\u9009\u62E9",markdown:()=>t(()=>import("./index.en-US.2df0903e.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.ea0dcc25.js"),[],import.meta.url)},{key:"checkbox",title:"Checkbox",titleCN:"\u590D\u9009\u6846",markdown:()=>t(()=>import("./index.en-US.98b794a2.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.6ba3872d.js"),[],import.meta.url)},{key:"date-picker",title:"DatePicker",titleCN:"\u65F6\u95F4\u9009\u62E9",markdown:()=>t(()=>import("./index.en-US.3bfd6caf.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.a2f0f7bc.js"),[],import.meta.url)},{key:"field",title:"Field",titleCN:"\u8F93\u5165\u6846",markdown:()=>t(()=>import("./index.en-US.350b5535.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.d45a95e5.js"),[],import.meta.url)},{key:"form",title:"Form",titleCN:"\u8868\u5355",markdown:()=>t(()=>import("./index.en-US.22d3fd1e.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.d5e91986.js"),[],import.meta.url)},{key:"picker",title:"Picker",titleCN:"\u9009\u62E9\u5668",markdown:()=>t(()=>import("./index.en-US.86d78055.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.35752dab.js"),[],import.meta.url)},{key:"radio",title:"Radio",titleCN:"\u5355\u9009\u6846",markdown:()=>t(()=>import("./index.en-US.a16c1cb1.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.b57a3483.js"),[],import.meta.url)},{key:"rate",title:"Rate",titleCN:"\u8BC4\u5206",markdown:()=>t(()=>import("./index.en-US.7fc6b543.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.13a49945.js"),[],import.meta.url)},{key:"stepper",title:"Stepper",titleCN:"\u6B65\u8FDB\u5668",markdown:()=>t(()=>import("./index.en-US.5a17c862.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.55c385d7.js"),[],import.meta.url)},{key:"switch",title:"Switch",titleCN:"\u5F00\u5173",markdown:()=>t(()=>import("./index.en-US.8f20d27f.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.cb816f4b.js"),[],import.meta.url)},{key:"uploader",title:"Uploader",titleCN:"\u6587\u4EF6\u4E0A\u4F20",markdown:()=>t(()=>import("./index.en-US.a3f6ec96.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.999bc8ba.js"),[],import.meta.url)}]},{title:"Action Components",titleCN:"\u53CD\u9988\u7EC4\u4EF6",children:[{key:"dialog",title:"Dialog",titleCN:"\u5BF9\u8BDD\u6846",markdown:()=>t(()=>import("./index.en-US.0bb7f98b.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.ec4a11d7.js"),[],import.meta.url)},{key:"error-boundary",title:"ErrorBoundary",titleCN:"\u9519\u8BEF\u8FB9\u754C",markdown:()=>t(()=>import("./index.en-US.021a8dca.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.683ac909.js"),[],import.meta.url)},{key:"loading",title:"Loading",titleCN:"\u52A0\u8F7D",markdown:()=>t(()=>import("./index.en-US.f3ee5bd9.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.a86d224f.js"),[],import.meta.url)},{key:"notify",title:"Notify",titleCN:"\u6D88\u606F\u901A\u77E5",markdown:()=>t(()=>import("./index.en-US.86195da8.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.404dd1dc.js"),[],import.meta.url)},{key:"overlay",title:"Overlay",titleCN:"\u906E\u7F69\u5C42",markdown:()=>t(()=>import("./index.en-US.dfbd32c9.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.15661e8d.js"),[],import.meta.url)},{key:"pull-refresh",title:"PullRefresh",titleCN:"\u4E0B\u62C9\u5237\u65B0",markdown:()=>t(()=>import("./index.en-US.6be01002.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.424658d2.js"),[],import.meta.url)}]},{title:"Display Components",titleCN:"\u5C55\u793A\u7EC4\u4EF6",children:[{key:"badge",title:"Badge",titleCN:"\u5FBD\u6807",markdown:()=>t(()=>import("./index.en-US.f84a7f19.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.22eda15d.js"),[],import.meta.url)},{key:"circle",title:"Circle",titleCN:"\u73AF\u5F62\u8FDB\u5EA6\u6761",markdown:()=>t(()=>import("./index.en-US.abc16927.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.806efba5.js"),[],import.meta.url)},{key:"collapse",title:"Collapse",titleCN:"\u6298\u53E0\u9762\u677F",markdown:()=>t(()=>import("./index.en-US.f41d0e3e.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.a8b1f6d3.js"),[],import.meta.url)},{key:"divider",title:"Divider",titleCN:"\u5206\u9694\u7EBF",markdown:()=>t(()=>import("./index.en-US.29de7d2a.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.03827c6c.js"),[],import.meta.url)},{key:"empty",title:"Empty",titleCN:"\u7A7A\u72B6\u6001",markdown:()=>t(()=>import("./index.en-US.f3ad7391.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.3d4f087c.js"),[],import.meta.url)},{key:"list",title:"List",titleCN:"\u5217\u8868",markdown:()=>t(()=>import("./index.en-US.a232e730.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.70087d3f.js"),[],import.meta.url)},{key:"skeleton",title:"Skeleton",titleCN:"\u9AA8\u67B6\u5C4F",markdown:()=>t(()=>import("./index.en-US.d4f7c74e.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.48eec654.js"),[],import.meta.url)},{key:"sticky",title:"Sticky",titleCN:"\u7C98\u6027\u5E03\u5C40",markdown:()=>t(()=>import("./index.en-US.ddd7cb62.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.ea643d84.js"),[],import.meta.url)},{key:"swipe",title:"Swipe",titleCN:"\u8F6E\u64AD",markdown:()=>t(()=>import("./index.en-US.1f5d7308.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.e7f87874.js"),[],import.meta.url)},{key:"notice-bar",title:"NoticeBar",titleCN:"\u901A\u77E5\u680F",markdown:()=>t(()=>import("./index.en-US.5ae9f488.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.0b7c7135.js"),[],import.meta.url)},{key:"tag",title:"Tag",titleCN:"\u6807\u7B7E",markdown:()=>t(()=>import("./index.en-US.d9f97f05.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.c82d6103.js"),[],import.meta.url)}]},{title:"Navigation Components",titleCN:"\u5BFC\u822A\u7EC4\u4EF6",children:[{key:"grid",title:"Grid",titleCN:"\u5BAB\u683C",markdown:()=>t(()=>import("./index.en-US.672e16ee.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.686ebd44.js"),[],import.meta.url)},{key:"pagination",title:"Pagination",titleCN:"\u5206\u9875",markdown:()=>t(()=>import("./index.en-US.598eb64d.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.95ae65c2.js"),[],import.meta.url)},{key:"tabs",title:"Tabs",titleCN:"\u6807\u7B7E\u9875",markdown:()=>t(()=>import("./index.en-US.4264f620.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./index.zh-CN.f58738b8.js"),[],import.meta.url)}]}],ut=[{title:"Introduction",titleCN:"\u4ECB\u7ECD",children:[{key:"introduction",title:"FNX UI",titleCN:"FNX UI",markdown:()=>t(()=>import("./introduction.en-US.690fc515.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./introduction.zh-CN.4941dcb3.js"),[],import.meta.url)}]},{title:"Guides",titleCN:"\u6307\u5357",children:[{key:"getting-started",title:"Getting Started",titleCN:"\u5FEB\u901F\u4E0A\u624B",markdown:()=>t(()=>import("./getting-started.en-US.1f79f219.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./getting-started.zh-CN.8130a15c.js"),[],import.meta.url)},{key:"import-on-demand",title:"Import on Demand",titleCN:"\u6309\u9700\u5F15\u5165",markdown:()=>t(()=>import("./import-on-demand.en-US.c2edc70e.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./import-on-demand.zh-CN.2ebbf9e5.js"),[],import.meta.url)},{key:"supported-platforms",title:"Supported Platforms",titleCN:"\u652F\u6301\u7684\u5E73\u53F0",markdown:()=>t(()=>import("./supported-platforms.en-US.af353fb1.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./supported-platforms.zh-CN.22c268e1.js"),[],import.meta.url)},{key:"i18n",title:"Internationalization",titleCN:"\u56FD\u9645\u5316",markdown:()=>t(()=>import("./i18n.en-US.c4eb8eff.js"),[],import.meta.url),markdownCN:()=>t(()=>import("./i18n.zh-CN.4cb8e97d.js"),[],import.meta.url)}]}],D=[{key:"docs",title:"Docs",titleCN:"\u6587\u6863",children:ut,component:l.exports.lazy(()=>t(()=>import("./index.d4822a4c.js"),["index.d4822a4c.js","index.b037008a.css","index.8328650d.js","index.8ffd0b0d.css","scroll.18bbb71c.js","use-theme.3853efe2.js","index.b0f44b52.js","index.e00e34ee.css"],import.meta.url))},{key:"components",title:"Components",titleCN:"\u7EC4\u4EF6",children:at,component:l.exports.lazy(()=>t(()=>import("./index.e5859cc3.js"),["index.e5859cc3.js","index.b4c13c8b.css","index.8328650d.js","index.8ffd0b0d.css","scroll.18bbb71c.js","use-theme.3853efe2.js","index.b0f44b52.js","index.e00e34ee.css"],import.meta.url))}];const N=I("site-menu-tree"),T=_=>{const{locale:r,category:i,menu:a}=l.exports.useContext(A),p=n=>r==="en-US"?n.title:(i==null?void 0:i.key)==="components"?s(y,{children:[n.titleCN,e("span",{children:n.title})]}):n.titleCN;return i?e("div",{..._,className:P(N(),_.className),children:(i.children||[]).map((n,u)=>s("div",{className:N("menu-group"),children:[e("h3",{className:N("menu-group-title"),children:r==="zh-CN"?n.titleCN:n.title}),(n.children||[]).map(o=>e("div",{className:N("menu-item"),children:e("div",{className:N("menu-item-title",{active:o.key===(a==null?void 0:a.key)}),children:e(v,{to:`/${r}/${i.key}/${o.key}`,children:p(o)})})},o.key))]},u))}):e(y,{})};T.displayName="SideMenuTree";const c=I("site-header"),lt=s("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:[e("circle",{cx:"18",cy:"18",r:"7.9"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",width:"3.6",x:"16.2",y:"30"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",y:"16.2"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",width:"6",x:"30",y:"16.2"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 29.02 7.02)",width:"6",x:"26.02",y:"5.22"}),e("rect",{height:"3.6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7.02 29.02)",width:"6",x:"4.02",y:"27.22"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 7 7)",width:"3.6",x:"5.2",y:"4"}),e("rect",{height:"6",rx:"0.5",ry:"0.5",transform:"rotate(-45 28.98 28.98)",width:"3.6",x:"27.18",y:"25.98"})]}),_t=e("svg",{viewBox:"0 0 36 36",fill:"currentColor",width:"1em",height:"1em",children:e("path",{d:"M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm1 29.964c-.33.023-.664.036-1 .036a14 14 0 0 1 0-28c.336 0 .67.013 1 .036a22 22 0 0 0 0 27.928z"})}),dt=e("svg",{viewBox:"64 64 896 896",fill:"currentColor",width:"1em",height:"1em",children:e("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})}),f=()=>{const{theme:_,setTheme:r,locale:i,category:a,menu:p,responsive:n}=l.exports.useContext(A),[u,o]=l.exports.useState(!1),d=()=>s(v,{className:c("logo"),to:`/${i}`,replace:!1,onClick:()=>o(!1),children:[e("img",{src:O}),e("span",{children:"FNX UI"})]});l.exports.useEffect(()=>{if(u){const m=document.body;return m.style.overflow="hidden",()=>{m.style.removeProperty("overflow")}}},[u]);const w=()=>s(y,{children:[D.map(m=>{const E=(m.children||[])[0],k=E?(E.children||[])[0]:void 0;return e("li",{className:c("nav-item",{active:(a==null?void 0:a.key)===m.key}),children:e(v,{to:k?`/${i}/${m.key}/${k.key}`:`/${i}`,replace:!1,children:i==="en-US"?m.title:m.titleCN})},m.key)}),e("li",{className:c("nav-item"),children:e("a",{href:"https://github.com/Rockcookies/fnx-ui",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),e("li",{className:c("nav-button"),children:e(v,{to:a&&p?`/${i==="en-US"?"zh-CN":"en-US"}/${a.key}/${p.key}`:`/${i==="en-US"?"zh-CN":"en-US"}`,replace:!1,children:i==="en-US"?"\u4E2D\u6587":"English"})}),e("li",{className:c("nav-ico"),children:e("a",{onClick:()=>r(_==="dark"?"light":"dark"),children:_==="dark"?lt:_t})}),e("li",{children:g.version})]});return s("header",{className:c({mobile:!n.md}),children:[!n.md&&s(y,{children:[e("i",{className:c("aside-mask",{expanded:u}),onClick:()=>o(!1)}),e("div",{className:c("aside",{expanded:u}),onClick:()=>o(!1),children:s("div",{className:c("aside-container"),children:[e("ul",{className:c("aside-nav"),children:w()}),e(T,{})]})})]}),s("div",{className:c("container"),children:[!n.md&&e("a",{className:c("aside-handler"),onClick:()=>o(!u),children:dt}),d(),e("ul",{className:c("nav"),children:w()})]})]})};f.displayName="SiteHeader";const h=I("site"),st=nt({xs:575,sm:576,md:768,lg:992,xl:1200,xxl:1600}),ct={"zh-CN":{slogan:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93"},"en-US":{slogan:"Lightweight Mobile UI Components built in React"}},L=()=>{const[_]=st(),r=V("/:locale/:category/:menu"),i=l.exports.useMemo(()=>(r==null?void 0:r.params.locale)==="zh-CN"?"zh-CN":"en-US",[r==null?void 0:r.params.locale]),a=ct[i],[p,n]=l.exports.useState(()=>{const m=localStorage.getItem("theme");return m?m==="dark"?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),u=l.exports.useCallback(m=>{localStorage.setItem("theme",m),n(m)},[]),o=l.exports.useMemo(()=>{const m=r==null?void 0:r.params.category,E=m!=null?D.findIndex(({key:k})=>k===m):-1;return D[E]},[r==null?void 0:r.params.category]),d=l.exports.useMemo(()=>{const m=r==null?void 0:r.params.menu;if(m!=null){for(const{children:E}of(o==null?void 0:o.children)||[])for(const k of E||[])if(k.key===m)return k}},[o,r==null?void 0:r.params.menu]);l.exports.useEffect(()=>{document.title=d?`${i==="zh-CN"?d.titleCN:d.title} - FNX-UI`:`FNX-UI - ${a.slogan}`},[a.slogan,i,d]),S(p);const w=()=>e("footer",{className:h("footer"),children:s("div",{className:h("copyright"),children:["FNX UI ",g.version," \xB7 Made by",e("a",{href:"https://github.com/Rockcookies",target:"_blank",rel:"noopener noreferrer",children:"RockCookies"})]})});return e(A.Provider,{value:{locale:i,responsive:_||{},theme:p,setTheme:u,category:o,menu:d},children:s("section",{className:h({mobile:!(_!=null&&_.md),"layout-mode":o==null}),children:[e(f,{}),e(T,{className:h("aside")}),s("div",{className:h("main"),children:[e("div",{className:h("content"),children:e(x,{className:h("error-fallback"),children:o?e(l.exports.Suspense,{fallback:e(F,{}),children:e(o.component,{})}):e(R,{slogan:a.slogan})})}),w()]})]})})};L.displayName="Layout";const kt=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{A as S,kt as i};
