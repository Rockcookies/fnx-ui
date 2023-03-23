import{r,j as h,c as Z,b as ee,a as te}from"./index-acc727ed.js";import{C as re}from"./index-f55e3552.js";import{c as se}from"./config-component-props-c0788442.js";import{u as oe}from"./use-merged-prop-78f8d6c6.js";import{u as ne}from"./use-merged-prop-ref-b9b1260a.js";import{u as ce}from"./use-update-effect-9fcceba0.js";import{L as ae}from"./index-4c2dac52.js";import{u as ie}from"./index-de276461.js";import{b as g,p as ue}from"./event-471798e4.js";import{a as le,g as fe}from"./scroll-a0e7f6b9.js";import{T as me}from"./touch-helper-e91fac31.js";import{n as k}from"./misc-276e45ca.js";const pe="fnx-pull-refresh",v=te(pe),$=50,de=se({disabled:!1,successDuration:500,slots:{},indicatorHeight:$,refreshing:!1,onRefresh:k,onChange:k}),j=r.forwardRef((_,w)=>{const C=ie("pull-refresh"),A=r.useContext(re.Context),[{disabled:D,successDuration:U,slots:R,indicatorHeight:T,refreshing:u,onRefresh:Y,onChange:z},{transitionDuration:B,className:F,style:G,children:O,...V}]=de(_),q=oe(A.transitionDuration,B),c=ne({disabled:D,successDuration:U,transitionDuration:q,slots:R,indicatorHeight:T,refreshing:u,onRefresh:Y,onChange:z}),p=r.useRef(null),y=r.useRef(null);r.useImperativeHandle(w,()=>p.current);const l=r.useRef(),[o,a]=r.useState("normal"),[J,H]=r.useState(0),[E,S]=r.useState(),[x,f]=r.useState(0),L=r.useMemo(()=>!D&&o!=="loading"&&o!=="success",[D,o]);r.useEffect(()=>{const e=y.current;if(!e||!L)return;const n=new me;let i=!1,N=!1;const b=t=>{i=(p.current?le(fe(p.current)):0)===0,i&&(H(0),n.start(t))},X=(t,s)=>(t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)),I=t=>{b(t)},M=t=>{i||b(t),n.move(t);const{deltaY:s}=n.touchData;if(i&&s>=0&&n.isVertical()){ue(t);const P=c.current.indicatorHeight,m=X(s,P);N=m!==0&&m>P,f(m),m===0?a("normal"):m<P?a("pulling"):a("loosing")}},d=()=>{if(i&&n.touchData.deltaY){const{transitionDuration:t,indicatorHeight:s}=c.current;H(t),N?(f(s),a("loading")):(f(0),a("normal"))}};return g(e,"touchstart",I,{passive:!0}),g(e,"touchmove",M,{passive:!1}),g(e,"touchend",d,{passive:!0}),g(e,"touchcancel",d,{passive:!0}),()=>{e.removeEventListener("touchstart",I),e.removeEventListener("touchmove",M),e.removeEventListener("touchend",d),e.removeEventListener("touchcancel",d)}},[c,L]),r.useEffect(()=>{if(o!=="loading")return;const e=!!u;if(E==null){S(e),c.current.onRefresh();return}if(!u&&E!==u){S(void 0);const{slots:n,successDuration:i}=c.current;if(n.success){a("success"),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{f(0),a("normal")},i);return}f(0),a("normal");return}S(u)},[o,u,E,c]),r.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),ce(()=>{c.current.onChange({status:o})},[c,o]);const K=()=>{const e={};return T!==$&&(e.height=`${T}px`),e},Q=()=>{const e={transitionDuration:`${J}ms`};return x>0&&(e.transform=`translate3d(0, ${x}px, 0)`),e},W=()=>{const e=R&&R[o];if(typeof e=="function")return e(x);if(e)return e;if(o==="loading")return h(ae,{size:16,text:C[o]});const n=C[o];if(n)return h("div",{className:v("text"),children:n})};return h("div",{className:Z(v(),F),style:G,...V,ref:p,children:ee("div",{className:v("track"),style:Q(),ref:y,children:[h("div",{className:v("indicator"),style:K(),children:W()}),O]})})});j.displayName="PullRefresh";const He=j;export{He as P};
