import{r as n,R as se,b as de,c as re,j as G,a as ce}from"./index-acc727ed.js";import{c as he}from"./config-component-props-c0788442.js";import{u as me}from"./use-merged-prop-ref-b9b1260a.js";import{I as ie}from"./detect-9e279ab2.js";import{a as ve,l as ge,b as q,p as Se}from"./event-471798e4.js";import{u as xe}from"./use-on-popup-open-e0fdd969.js";import{T as Ie}from"./touch-helper-e91fac31.js";import{n as ye}from"./misc-276e45ca.js";import{d as be}from"./raf-e95fb200.js";import{t as ze}from"./react-354fcae6.js";import{u as K}from"./use-safe-state-54822164.js";import{c as Te}from"./format-73c0cb3b.js";function Ee(){const[c,O]=n.useState(()=>ie?window.innerWidth:0),[I,s]=n.useState(()=>ie?window.innerHeight:0);return n.useEffect(()=>ve(()=>{O(window.innerWidth),s(window.innerHeight)}),[]),n.useMemo(()=>({width:c,height:I}),[c,I])}const Le=({propsRef:c,swipeLength:O,rootRef:I})=>{const s=n.useRef({swipeLength:0,swipeSize:0,wrapperOffset:0});s.current.swipeLength=O;const[J,X]=K(0),z=n.useCallback(e=>{X(e),s.current.wrapperOffset=e},[X]),[Q,y]=K(0),_=n.useCallback(e=>{y(e),s.current.swipeSize=e},[y]),[k,w]=n.useState("none"),[H,W]=K(),T=n.useCallback(e=>{W(e),s.current.activeIndex=e},[W]),[Y,o]=K(!1),b=n.useCallback((e,a={})=>{const{swipeLength:r,swipeSize:p,swipingTimer:u}=s.current;if(a.critical&&-e>=(r-1)*p?w("first"):a.critical&&e>=0?w("last"):w("none"),z(e),a.swiping){const{duration:C}=c.current;o(!0),u&&clearTimeout(u),s.current.swipingTimer=setTimeout(()=>{const{activeIndex:l=0,swipeSize:f}=s.current;s.current.swipingTimer=void 0,w("none"),o(!1),z(-l*f)},C)}},[c,o,z]),E=n.useCallback(()=>{const{activeIndex:e=0,swipeLength:a,swipeSize:r}=s.current;if(a<=1)return;const{loop:p}=c.current,u=e>=a-1?0:e+1;T(u),p&&e===a-1?b(-a*r,{swiping:!0,critical:!0}):b(-u*r,{swiping:!0})},[b,c,T]),U=n.useCallback(()=>{const{activeIndex:e=0,swipeLength:a,swipeSize:r}=s.current;if(a<=1)return;const{loop:p}=c.current,u=e<=0?a-1:e-1;T(u),p&&e===0?b(r,{swiping:!0,critical:!0}):b(-u*r,{swiping:!0})},[b,c,T]),Z=n.useCallback(()=>{o(!1);const{swipingTimer:e}=s.current;e&&clearTimeout(e)},[o]),d=n.useCallback(()=>{const{autoplayTimer:e}=s.current;e&&clearTimeout(e)},[]),$=n.useCallback(()=>{const{autoplay:e}=c.current,{swipeLength:a}=s.current;d(),!(e<=0||a<=1)&&(s.current.autoplayTimer=setTimeout(()=>{E(),$()},e))},[E,c,d]),M=n.useCallback(()=>{var m;const{swipeLength:e,activeIndex:a}=s.current,{defaultActiveIndex:r}=c.current,{vertical:p,height:u,width:C}=c.current;let l=p?u:C;if(l<=0){const N=(m=I.current)==null?void 0:m.getBoundingClientRect();N&&(l=p?N.height:N.width)}const f=Te(a!=null?a:r,0,Math.max(e-1,0)),L=-f*l;o(!1),w("none"),_(l),T(f),z(L)},[c,I,T,_,o,z]);return{stateRef:s,wrapperOffset:J,setWrapperOffset:z,swipeSize:Q,swipeOffset:k,activeIndex:H,setActiveIndex:T,swiping:Y,move:b,next:E,prev:U,stopTransition:Z,stopAutoplay:d,startAutoplay:$,reload:M}},Ae=Le,Ce="fnx-swipe",F=ce(Ce),Oe=he({height:0,width:0,autoplay:3e3,duration:500,defaultActiveIndex:0,loop:!0,vertical:!1,touchable:!0,indicator:null,stopPropagation:!0,onActiveIndexChange:ye}),oe=n.forwardRef((c,O)=>{const[I,{className:s,children:J,...X}]=Oe(c),{autoplay:z,duration:Q,vertical:y,touchable:_,indicator:k}=I,w=me(I),H=n.useRef(null),W=n.useRef(null),T=Ee(),Y=ze(J),o=Y.filter(t=>se.isValidElement(t)).length,b=n.useRef(!1),{stateRef:E,wrapperOffset:U,setWrapperOffset:Z,swipeSize:d,swipeOffset:$,activeIndex:M,setActiveIndex:e,swiping:a,move:r,next:p,prev:u,stopTransition:C,stopAutoplay:l,startAutoplay:f,reload:L}=Ae({propsRef:w,swipeLength:o,rootRef:H}),m=n.useCallback(t=>{C(),l(),t&&t(),f()},[f,l,C]),N=n.useMemo(()=>({element:H.current||null,wrapper:W.current||null,reset:()=>{m(L)},next:()=>{m(p)},prev:()=>{m(u)},swipeTo:(t,i)=>{m(()=>{const{swipeSize:h}=E.current;e(t),r(-t*h,{swiping:i&&i.animation})})}}),[r,p,u,L,m,e,E]);n.useImperativeHandle(O,()=>N,[N]);const le=n.useMemo(()=>{const t=[];for(let i=0;i<o;i++){const h={};d>0&&$&&(i===0&&$==="first"&&(h.transform=`translate${y?"Y":"X"}(${o*d}px)`),i===o-1&&$==="last"&&(h.transform=`translate${y?"Y":"X"}(-${o*d}px)`)),d>0&&(h[y?"height":"width"]=`${d}px`),t.push(h)}return t},[$,y,d,o]);n.useEffect(()=>{if(z>0)return f(),()=>{l()}},[z,f,l]),n.useEffect(()=>{M!=null&&(b.current?w.current.onActiveIndexChange(M):b.current=!0)},[M,w]),n.useEffect(()=>ge(t=>{t==="hidden"?l():f()}),[f,l]),n.useEffect(()=>{m(L)},[o,T,f,L,l,m]),xe(()=>be(()=>m(L))),n.useEffect(()=>{const t=W.current;if(!t||_===!1)return;const i=new Ie;let h=0,v=0,g=0,R=!1;const ee=D=>{i.start(D),h=Date.now(),R=!1},te=D=>{i.move(D);const{vertical:V,stopPropagation:P,loop:S}=w.current,x=i.touchData;if(R)v=i.isVertical()?i.touchData.deltaY:i.touchData.deltaX,r(g+v,{critical:S});else{const B=V?"vertical":"horizontal";x.direction===B&&(C(),l(),L(),R=!0,g=E.current.wrapperOffset||0)}R&&x.offsetY>x.offsetX===V&&Se(D,P)},we=()=>{const D=Date.now()-h,V=v/D,{activeIndex:P=0,swipeSize:S,swipeLength:x}=E.current,{loop:A}=w.current,B=Math.abs(V)>.25;if(!((B||Math.abs(v)>S/2)&&S>0&&x>1)){r(-P*S,{swiping:!0});return}if(B){A?v<0?p():u():v<0&&P<x-1?p():v>0&&P>0?u():r(-P*S,{swiping:!0});return}if(g=g+v,g>0)e(A?x-1:0),r(A?S:0,{swiping:!0,critical:A});else if(-g>S*(x-1))e(A?0:x-1),r(-S*(A?x:x-1),{swiping:!0,critical:A});else{const ne=Math.ceil(-g/S);e(ne),r(-ne-S,{swiping:!0,critical:A})}},j=()=>{R&&(we(),R=!1,f())};return q(t,"touchstart",ee,{passive:!0}),q(t,"touchmove",te,{passive:!1}),q(t,"touchend",j,{passive:!0}),q(t,"touchcancel",j,{passive:!0}),()=>{t.removeEventListener("touchstart",ee),t.removeEventListener("touchmove",te),t.removeEventListener("touchend",j),t.removeEventListener("touchcancel",j)}},[r,p,u,w,L,e,Z,f,E,l,C,_]);const pe=()=>{const t={};return t.transform=`translate${y?"Y":"X"}(${U}px)`,d>0&&(t[y?"height":"width"]=`${d*o}px`),a&&(t.transitionDuration=`${Q}ms`),t},fe=()=>{if(!(k===!1||o<=0))return k==null||k===!0?G("div",{className:F("indicators"),children:new Array(o).fill(0).map((t,i)=>G("i",{className:F("indicator",{active:i===(M||0)})},i))}):k};return de("div",{ref:H,className:re(F({vertical:y}),s),...X,children:[G("div",{className:F("wrapper"),style:pe(),ref:W,children:Y.map((t,i)=>{if(n.isValidElement(t)){const h=t.props.style,v=t.key;let g={...le[i]};return typeof h=="object"&&(g={...g,...h}),se.cloneElement(t,{...t.props,style:g,key:v!=null?v:i})}return t})}),fe()]})});oe.displayName="Swipe";const $e=oe,ke="fnx-swipe-item",We=ce(ke),ae=n.forwardRef(({className:c,children:O,...I},s)=>G("div",{className:re(We(),c),...I,ref:s,children:O}));ae.displayName="SwipeItem";const Me=ae,ue=$e;ue.Item=Me;const Fe=ue;export{Fe as S,Ee as u};
