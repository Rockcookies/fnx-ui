System.register(["./index-legacy-20f55cc7.js"],(function(t,e){"use strict";var n,s;return{setters:[function(t){n=t.R,s=t.f}],execute:function(){function e(){return t("b",e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}),e.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,s,r={},i=Object.keys(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||(r[n]=t[n]);return r}function i(e,n){return t("a",i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}),i(e,n)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}t({_:r,a:i,b:e});var p=!1,l=n.createContext(null),u=function(t){return t.scrollTop},c="unmounted",d="exited",f="entering",E="entered",h="exiting",x=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?i?(r=d,s.appearStatus=f):r=E:r=e.unmountOnExit||e.mountOnEnter?c:d,s.state={status:r},s.nextCallback=null,s}a(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:d}:null};var i=e.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e=h)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!=typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},i.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this);n&&u(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},i.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[s.findDOMNode(this),r],a=i[0],o=i[1],l=this.getTimeouts(),u=r?l.appear:l.enter;!t&&!n||p?this.safeSetState({status:E},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:f},(function(){e.props.onEntering(a,o),e.onTransitionEnd(u,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(a,o)}))}))})))},i.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.findDOMNode(this);e&&!p?(this.props.onExit(r),this.safeSetState({status:h},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},i.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,s=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var i=r(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return n.createElement(l.Provider,{value:null},"function"==typeof s?s(t,i):n.cloneElement(n.Children.only(s),i))},e}(n.Component);function m(){}x.contextType=l,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},x.UNMOUNTED=c,x.EXITED=d,x.ENTERING=f,x.ENTERED=E,x.EXITING=h;var v=x,g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))},C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"==typeof n.className?n.className=o(n.className,s):n.setAttribute("class",o(n.className&&n.className.baseVal||"",s)));var n,s}))},N=function(t){function s(){for(var e,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),r=s[0],i=s[1];e.removeClasses(r,"exit"),e.addClass(r,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),r=s[0],i=s[1]?"appear":"enter";e.addClass(r,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),r=s[0],i=s[1]?"appear":"enter";e.removeClasses(r,i),e.addClass(r,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"==typeof n,r=s?(s&&n?n+"-":"")+t:n[t];return{baseClassName:r,activeClassName:s?r+"-active":n[t+"Active"],doneClassName:s?r+"-done":n[t+"Done"]}},e}a(s,t);var i=s.prototype;return i.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&r&&(s+=" "+r),"active"===n&&t&&u(t),s&&(this.appliedClasses[e][n]=s,g(t,s))},i.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,r=n.active,i=n.done;this.appliedClasses[e]={},s&&C(t,s),r&&C(t,r),i&&C(t,i)},i.render=function(){var t=this.props;t.classNames;var s=r(t,["classNames"]);return n.createElement(v,e({},s,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(n.Component);N.defaultProps={classNames:""},N.propTypes={},t("C",N)}}}));