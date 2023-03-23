import{r as m,j as W}from"./index-acc727ed.js";import{c as X}from"./config-component-props-c0788442.js";import{u as N}from"./use-creation-aa086326.js";import{u as G}from"./use-merged-prop-ref-b9b1260a.js";import{u as I}from"./use-update-effect-9fcceba0.js";import{P as ie}from"./index-72db9aa5.js";import{p as B}from"./format-73c0cb3b.js";import{i as ee,n as me}from"./misc-276e45ca.js";import{g as Z}from"./detect-9e279ab2.js";const le=["year","month","day","hour","minute"];function ce(t){return N(e=>{const n=t.split(",").map(o=>o.trim().toLowerCase()).filter(o=>le.includes(o));return e&&ee(e,n)?e:n},[t])}var he=Object.defineProperty,fe=(t,e,n)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e,n)=>(fe(t,typeof e!="symbol"?e+"":e,n),n);const ge=(t,e)=>{let n=-1;const o=Array(t);for(;++n<t;)o[n]=e(n);return o};class H{constructor(e){_(this,"year",0),_(this,"month",0),_(this,"day",0),_(this,"hour",0),_(this,"minute",0),_(this,"invalid",!1);const n=new Date(e),o=n.getTime();isNaN(o)?this.invalid=!1:(this.year=n.getFullYear(),this.month=n.getMonth(),this.day=n.getDate(),this.hour=n.getHours(),this.minute=n.getMinutes())}isValid(){return!this.invalid}getYear(){return this.year}getMonth(){return this.month}getDay(){return this.day}getHour(){return this.hour}getMinute(){return this.minute}getDate(){return new Date(this.year,this.month,this.day,this.hour,this.minute)}getTime(){return this.getDate().getTime()}equals(e){return Z(e)?this.year===e.getFullYear()&&this.month===e.getMonth()&&this.day===e.getDate()&&this.hour===e.getHours()&&this.minute===e.getMinutes():this.year===e.getYear()&&this.month===e.getMonth()&&this.day===e.getDay()&&this.hour===e.getHour()&&this.minute===e.getMinute()}}function J(t,e){return N(n=>{let o;return t!=null?(o=new H(t),o=o.isValid()?o:e):o=e,n&&n.equals(o)?n:o},[t])}const De=X({columnsLayout:"year,month,day",filter:(t,e)=>e,formatter:(t,e)=>e,onChange:me}),K=(t,e)=>32-new Date(t,e-1,32).getDate(),S=(t,e,n)=>{const o=t.getTime();return o<e.getTime()?e:o>n.getTime()?n:t},te=m.forwardRef((t,e)=>{const[n,{minDate:o,maxDate:R,onConfirm:T,onCancel:$,defaultValue:Y,...C}]=De(t),{columnsLayout:q}=n,d=G(n),y=ce(q),[O,b]=m.useMemo(()=>{const r=new Date().getFullYear();return[new H(new Date(r-10,0,1)),new H(new Date(r+10,11,31))]},[]),h=J(o,O),p=J(R,b),[E,j]=N(()=>{let r=new H(Y!=null?Y:h.getDate());return r=S(r.isValid()?r:h,h,p),[r,y.map(a=>a==="year"?r.getYear():a==="month"?r.getMonth()+1:a==="day"?r.getDay():a==="hour"?r.getHour():r.getMinute())]},[]),[u,s]=m.useState(()=>E.getDate()),i=G(u),D=m.useRef(null),L=m.useMemo(()=>{var r;return{element:((r=D.current)==null?void 0:r.element)||null,getValue:()=>i.current}},[i]);m.useImperativeHandle(e,()=>L,[L]);const A=m.useCallback((r,a)=>{const f=r==="min"?h:p,l=f.getYear();let c=1,M=1,g=0,w=0;return r==="max"&&(c=12,M=K(a.getFullYear(),a.getMonth()+1),g=23,w=59),a.getFullYear()===l&&(c=f.getMonth()+1,a.getMonth()+1===c&&(M=f.getDay(),a.getDate()===M&&(g=f.getHour(),a.getHours()===g&&(w=f.getMinute())))),{year:l,month:c,date:M,hour:g,minute:w}},[p,h]),U=m.useCallback((r,a,f=[])=>{const l=A("min",a),c=A("max",a),M={year:[l.year,c.year],month:[l.month,c.month],day:[l.date,c.date],hour:[l.hour,c.hour],minute:[l.minute,c.minute]};return r.map((g,w)=>{const[F,v]=M[g];let V=ge(v-F+1,P=>F+P);V=d.current.filter(g,V);const x=f[w],k=V.map(P=>({value:P,label:d.current.formatter(g,B(P))}));return ee(x,k,(P,z)=>P.label===z.label&&P.value===z.value)?x:k})},[A,d]),[ae,ue]=m.useState(()=>U(y,u));I(()=>{const r=S(new H(i.current),h,p);s(a=>r.equals(i.current)?a:r.getDate())},[p,d,i,h]),I(()=>{d.current.onChange(u)},[d,u]),I(()=>{ue(r=>U(y,u,r))},[y,U,u]);const se=()=>{const r=(F,v)=>{const V=D.current&&D.current.getValue();if(V){for(let x=0;x<y.length;x++)if(y[x]===F){const k=V[x];if(k!=null)return+k}}return v},a=r("year",u.getFullYear()),f=r("month",u.getMonth()+1);let l=r("day",u.getDate());const c=K(a,f);l=l>c?c:l;const M=r("hour",u.getHours()),g=r("minute",u.getMinutes()),w=S(new H(new Date(a,f-1,l,M,g)),h,p);w.equals(u)||s(w.getDate())};return W(ie.Multi,{data:ae,...C,defaultValue:j,ref:D,onChange:se,onConfirm:()=>{T&&T(u)},onCancel:$})});te.displayName="DatePicker";const ne=te,de=X({minHour:0,maxHour:23,minMinute:0,maxMinute:59,filter:(t,e)=>e,formatter:(t,e)=>e}),Q=t=>`${B(t.getHours())}:${B(t.getMinutes())}`,re=m.forwardRef((t,e)=>{const[{minHour:n,maxHour:o,minMinute:R,maxMinute:T,formatter:$,filter:Y},{defaultValue:C,onChange:q,onConfirm:d,onCancel:y,...O}]=de(t),b=m.useRef(null),h=m.useMemo(()=>{var s;return{element:((s=b.current)==null?void 0:s.element)||null,getValue:()=>{var D;const i=(D=b.current)==null?void 0:D.getValue();return Z(i)?Q(i):""}}},[]);m.useImperativeHandle(e,()=>h,[h]);const p=N(()=>{let s=0,i=0;if(typeof C=="string"){const[D,L]=C.split(":");s=+D,i=+L}else Z(C)&&(s=C.getHours(),i=C.getMinutes());return new Date(0,0,0,s,i)},[]),E=m.useMemo(()=>new Date(0,0,0,n,R),[n,R]),j=m.useMemo(()=>new Date(0,0,0,o,T),[o,T]),u=(s,i)=>{i&&i(Q(s))};return W(ne,{ref:b,columnsLayout:"hour,minute",defaultValue:p,minDate:E,maxDate:j,onChange:s=>u(s,q),onConfirm:s=>u(s,d),onCancel:y,formatter:$,filter:Y,...O})});re.displayName="TimePicker";const ye=re,oe=ne;oe.TimePicker=ye;const Te=oe;export{Te as D};
