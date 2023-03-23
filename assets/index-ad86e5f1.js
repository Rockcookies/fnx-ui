import{r as t,b as de,c as fe,j as x,a as me}from"./index-acc727ed.js";import{c as pe}from"./config-component-props-c0788442.js";import{u as he}from"./use-controlled-state-2016da2e.js";import{u as be}from"./use-merged-prop-ref-b9b1260a.js";import{u as ge}from"./use-focus-cc6e6d02.js";import{p as Se}from"./event-471798e4.js";import{f as H,a as E}from"./format-73c0cb3b.js";import{n as Me}from"./misc-276e45ca.js";function Ne(a,l){return Math.round((a+l)*1e10)/1e10}const S=a=>{if(a==null)return;let l;if(typeof a!="number"?l=Number(H(String(a).trim(),{allowDot:!0,allowMinus:!0})):l=a,!(l==null||isNaN(l)))return l},ve=200,we=600,ye="fnx-stepper",M=me(ye),Ce=pe({defaultValue:"",mode:"string",allowEmpty:!1,step:1,showInput:!0,showPlus:!0,showMinus:!0,disabled:!1,disablePlus:!1,disableMinus:!1,disableInput:!1,longPress:!0,onStep:Me}),U=t.forwardRef((a,l)=>{const i=t.useRef(),[{defaultValue:W,mode:$,allowEmpty:q,step:_,showInput:J,showPlus:K,showMinus:Q,disabled:f,disablePlus:D,disableMinus:I,disableInput:N,longPress:X,onStep:Y},{onChange:Z,value:ee,min:V,max:F,buttonSize:m,inputWidth:k,precision:r,className:te,style:ne,...se}]=Ce(a),o=t.useMemo(()=>S(V),[V]),c=t.useMemo(()=>S(F),[F]),v=t.useMemo(()=>S(_),[_]),L=t.useRef(null),w=t.useRef(null);t.useImperativeHandle(l,()=>({element:L.current,input:w.current}));const j=t.useMemo(()=>{const e=E(m);return{width:e,height:e}},[m]),ue=t.useMemo(()=>({width:E(k),height:E(m)}),[m,k]),B=e=>{if((e==null||e=="")&&q)return null;const n=H(e==null?"":String(e),{allowMinus:!0,allowDot:r==null||r>0});let s=n===""?0:Number(n);c!=null&&s>=c?s=c:o!=null&&s<=o?s=o:isNaN(s)&&(s=o!=null?o:0);const g=r!=null&&r>0?s.toFixed(r):String(s);return $==="string"?String(g):Number(g)},{value:p,onChangeRef:le,controlled:re}=he({value:ee,defaultValue:W,onChange:Z});let d=p!=null?p:"";if(!re){const e=B(p);d=e!=null?e:""}const u=t.useMemo(()=>S(d),[d]),[O,z]=t.useState(()=>d),{focus:oe,onFocus:ae,onBlur:ie}=ge(d,{node:w,readonly:N,onFocus:e=>{z(e)},onBlur:()=>{P(O)}}),y=t.useMemo(()=>I||f?!0:o==null||u==null?!1:u<=o,[I,f,u,o]),C=t.useMemo(()=>D||f?!0:c==null||u==null?!1:u>=c,[D,f,u,c]),P=e=>{const n=B(e);return n!==p&&le.current(n),n},R=be((e,n)=>{if(n&&n.preventDefault(),e==="minus"&&y||e==="plus"&&C)return;if(v==null)return P(u);const s=e==="minus"?-v:+v,g=Ne(u!=null?u:0,s),G=P(g);G!=null&&Y(G,{offset:s,type:e})}),ce=e=>{N&&e.preventDefault()},h=t.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=void 0)},[]);t.useEffect(()=>h,[h]);const T=t.useRef(!1),A=e=>{if(!X)return;h(),T.current=!1;const n=()=>{i.current=setTimeout(()=>{R.current(e),n()},ve)};i.current=setTimeout(()=>{T.current=!0,n()},we)},b=e=>{i.current!=null&&(h(),T.current&&Se(e))};return de("span",{className:fe(M(),te),style:ne,role:"group",...se,ref:L,children:[x("button",{type:"button",style:j,className:M("minus",{hidden:!Q,disabled:y}),"aria-disabled":y||void 0,onClick:e=>R.current("minus",e),onTouchStart:()=>A("minus"),onTouchCancel:e=>b(e),onTouchEnd:e=>b(e)}),x("input",{className:M("input",{hidden:!J}),ref:w,type:r!=null&&r<=0?"tel":"text",role:"spinbutton",value:oe?O:d,style:ue,disabled:f,readOnly:N,inputMode:r!=null&&r<=0?"numeric":"decimal","aria-valuemax":c,"aria-valuemin":o,"aria-valuenow":u,onFocus:ae,onBlur:ie,onChange:e=>z(e.target.value),onMouseDown:ce}),x("button",{type:"button",style:j,className:M("plus",{hidden:!K,disabled:C}),"aria-disabled":C||void 0,onClick:e=>R.current("plus",e),onTouchStart:()=>A("plus"),onTouchCancel:e=>b(e),onTouchEnd:e=>b(e)})]})});U.displayName="Stepper";const Pe=U,Fe=Pe;export{Fe as S};
