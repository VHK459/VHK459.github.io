(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function BE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $h={exports:{}},ul={};var Z0;function zE(){if(Z0)return ul;Z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:u}}return ul.Fragment=e,ul.jsx=n,ul.jsxs=n,ul}var K0;function HE(){return K0||(K0=1,$h.exports=zE()),$h.exports}var tt=HE(),ed={exports:{}},ut={};var Q0;function GE(){if(Q0)return ut;Q0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function x(U,Q,xe){this.props=U,this.context=Q,this.refs=y,this.updater=xe||b}x.prototype.isReactComponent={},x.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function D(){}D.prototype=x.prototype;function w(U,Q,xe){this.props=U,this.context=Q,this.refs=y,this.updater=xe||b}var N=w.prototype=new D;N.constructor=w,T(N,x.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function C(U,Q,xe){var Ce=xe.ref;return{$$typeof:r,type:U,key:Q,ref:Ce!==void 0?Ce:null,props:xe}}function L(U,Q){return C(U.type,Q,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function re(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return Q[xe]})}var ae=/\/+/g;function pe(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?re(""+U.key):Q.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(Q){U.status==="pending"&&(U.status="fulfilled",U.value=Q)},function(Q){U.status==="pending"&&(U.status="rejected",U.reason=Q)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,Q,xe,Ce,Ge){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var he=!1;if(U===null)he=!0;else switch(ie){case"bigint":case"string":case"number":he=!0;break;case"object":switch(U.$$typeof){case r:case e:he=!0;break;case g:return he=U._init,F(he(U._payload),Q,xe,Ce,Ge)}}if(he)return Ge=Ge(U),he=Ce===""?"."+pe(U,0):Ce,P(Ge)?(xe="",he!=null&&(xe=he.replace(ae,"$&/")+"/"),F(Ge,Q,xe,"",function(Ve){return Ve})):Ge!=null&&(k(Ge)&&(Ge=L(Ge,xe+(Ge.key==null||U&&U.key===Ge.key?"":(""+Ge.key).replace(ae,"$&/")+"/")+he)),Q.push(Ge)),1;he=0;var Ue=Ce===""?".":Ce+":";if(P(U))for(var We=0;We<U.length;We++)Ce=U[We],ie=Ue+pe(Ce,We),he+=F(Ce,Q,xe,ie,Ge);else if(We=E(U),typeof We=="function")for(U=We.call(U),We=0;!(Ce=U.next()).done;)Ce=Ce.value,ie=Ue+pe(Ce,We++),he+=F(Ce,Q,xe,ie,Ge);else if(ie==="object"){if(typeof U.then=="function")return F(fe(U),Q,xe,Ce,Ge);throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(U,Q,xe){if(U==null)return U;var Ce=[],Ge=0;return F(U,Ce,"","",function(ie){return Q.call(xe,ie,Ge++)}),Ce}function ee(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var oe=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},_e={map:H,forEach:function(U,Q,xe){H(U,function(){Q.apply(this,arguments)},xe)},count:function(U){var Q=0;return H(U,function(){Q++}),Q},toArray:function(U){return H(U,function(Q){return Q})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ut.Activity=_,ut.Children=_e,ut.Component=x,ut.Fragment=n,ut.Profiler=o,ut.PureComponent=w,ut.StrictMode=a,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ut.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},ut.cache=function(U){return function(){return U.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(U,Q,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=T({},U.props),Ge=U.key;if(Q!=null)for(ie in Q.key!==void 0&&(Ge=""+Q.key),Q)!q.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(Ce[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=xe;else if(1<ie){for(var he=Array(ie),Ue=0;Ue<ie;Ue++)he[Ue]=arguments[Ue+2];Ce.children=he}return C(U.type,Ge,Ce)},ut.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ut.createElement=function(U,Q,xe){var Ce,Ge={},ie=null;if(Q!=null)for(Ce in Q.key!==void 0&&(ie=""+Q.key),Q)q.call(Q,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ge[Ce]=Q[Ce]);var he=arguments.length-2;if(he===1)Ge.children=xe;else if(1<he){for(var Ue=Array(he),We=0;We<he;We++)Ue[We]=arguments[We+2];Ge.children=Ue}if(U&&U.defaultProps)for(Ce in he=U.defaultProps,he)Ge[Ce]===void 0&&(Ge[Ce]=he[Ce]);return C(U,ie,Ge)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:h,render:U}},ut.isValidElement=k,ut.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ee}},ut.memo=function(U,Q){return{$$typeof:m,type:U,compare:Q===void 0?null:Q}},ut.startTransition=function(U){var Q=I.T,xe={};I.T=xe;try{var Ce=U(),Ge=I.S;Ge!==null&&Ge(xe,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(B,oe)}catch(ie){oe(ie)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),I.T=Q}},ut.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ut.use=function(U){return I.H.use(U)},ut.useActionState=function(U,Q,xe){return I.H.useActionState(U,Q,xe)},ut.useCallback=function(U,Q){return I.H.useCallback(U,Q)},ut.useContext=function(U){return I.H.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U,Q){return I.H.useDeferredValue(U,Q)},ut.useEffect=function(U,Q){return I.H.useEffect(U,Q)},ut.useEffectEvent=function(U){return I.H.useEffectEvent(U)},ut.useId=function(){return I.H.useId()},ut.useImperativeHandle=function(U,Q,xe){return I.H.useImperativeHandle(U,Q,xe)},ut.useInsertionEffect=function(U,Q){return I.H.useInsertionEffect(U,Q)},ut.useLayoutEffect=function(U,Q){return I.H.useLayoutEffect(U,Q)},ut.useMemo=function(U,Q){return I.H.useMemo(U,Q)},ut.useOptimistic=function(U,Q){return I.H.useOptimistic(U,Q)},ut.useReducer=function(U,Q,xe){return I.H.useReducer(U,Q,xe)},ut.useRef=function(U){return I.H.useRef(U)},ut.useState=function(U){return I.H.useState(U)},ut.useSyncExternalStore=function(U,Q,xe){return I.H.useSyncExternalStore(U,Q,xe)},ut.useTransition=function(){return I.H.useTransition()},ut.version="19.2.3",ut}var J0;function Yp(){return J0||(J0=1,ed.exports=GE()),ed.exports}var ge=Yp(),td={exports:{}},cl={},nd={exports:{}},id={};var $0;function VE(){return $0||($0=1,(function(r){function e(F,H){var ee=F.length;F.push(H);e:for(;0<ee;){var oe=ee-1>>>1,_e=F[oe];if(0<o(_e,H))F[oe]=H,F[ee]=_e,ee=oe;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],ee=F.pop();if(ee!==H){F[0]=ee;e:for(var oe=0,_e=F.length,U=_e>>>1;oe<U;){var Q=2*(oe+1)-1,xe=F[Q],Ce=Q+1,Ge=F[Ce];if(0>o(xe,ee))Ce<_e&&0>o(Ge,xe)?(F[oe]=Ge,F[Ce]=ee,oe=Ce):(F[oe]=xe,F[Q]=ee,oe=Q);else if(Ce<_e&&0>o(Ge,ee))F[oe]=Ge,F[Ce]=ee,oe=Ce;else break e}}return H}function o(F,H){var ee=F.sortIndex-H.sortIndex;return ee!==0?ee:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],g=1,_=null,v=3,E=!1,b=!1,T=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var H=n(m);H!==null;){if(H.callback===null)a(m);else if(H.startTime<=F)a(m),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(m)}}function P(F){if(T=!1,N(F),!b)if(n(p)!==null)b=!0,B||(B=!0,re());else{var H=n(m);H!==null&&fe(P,H.startTime-F)}}var B=!1,I=-1,q=5,C=-1;function L(){return y?!0:!(r.unstable_now()-C<q)}function k(){if(y=!1,B){var F=r.unstable_now();C=F;var H=!0;try{e:{b=!1,T&&(T=!1,D(I),I=-1),E=!0;var ee=v;try{t:{for(N(F),_=n(p);_!==null&&!(_.expirationTime>F&&L());){var oe=_.callback;if(typeof oe=="function"){_.callback=null,v=_.priorityLevel;var _e=oe(_.expirationTime<=F);if(F=r.unstable_now(),typeof _e=="function"){_.callback=_e,N(F),H=!0;break t}_===n(p)&&a(p),N(F)}else a(p);_=n(p)}if(_!==null)H=!0;else{var U=n(m);U!==null&&fe(P,U.startTime-F),H=!1}}break e}finally{_=null,v=ee,E=!1}H=void 0}}finally{H?re():B=!1}}}var re;if(typeof w=="function")re=function(){w(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=k,re=function(){pe.postMessage(null)}}else re=function(){x(k,0)};function fe(F,H){I=x(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ee=v;v=H;try{return F()}finally{v=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=v;v=F;try{return H()}finally{v=ee}},r.unstable_scheduleCallback=function(F,H,ee){var oe=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ee+_e,F={id:g++,callback:H,priorityLevel:F,startTime:ee,expirationTime:_e,sortIndex:-1},ee>oe?(F.sortIndex=ee,e(m,F),n(p)===null&&F===n(m)&&(T?(D(I),I=-1):T=!0,fe(P,ee-oe))):(F.sortIndex=_e,e(p,F),b||E||(b=!0,B||(B=!0,re()))),F},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(F){var H=v;return function(){var ee=v;v=H;try{return F.apply(this,arguments)}finally{v=ee}}}})(id)),id}var ev;function kE(){return ev||(ev=1,nd.exports=VE()),nd.exports}var ad={exports:{}},Bn={};var tv;function XE(){if(tv)return Bn;tv=1;var r=Yp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Bn.flushSync=function(p){var m=c.T,g=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=m,a.p=g,a.d.f()}},Bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Bn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:E}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Bn.requestFormReset=function(p){a.d.r(p)},Bn.unstable_batchedUpdates=function(p,m){return p(m)},Bn.useFormState=function(p,m,g){return c.H.useFormState(p,m,g)},Bn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Bn.version="19.2.3",Bn}var nv;function WE(){if(nv)return ad.exports;nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ad.exports=XE(),ad.exports}var iv;function YE(){if(iv)return cl;iv=1;var r=kE(),e=Yp(),n=WE();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return p(f),t;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var S=!1,A=f.child;A;){if(A===s){S=!0,s=f,l=d;break}if(A===l){S=!0,l=f,s=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===s){S=!0,s=d,l=f;break}if(A===l){S=!0,l=d,s=f;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case w:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var fe=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},oe=[],_e=-1;function U(t){return{current:t}}function Q(t){0>_e||(t.current=oe[_e],oe[_e]=null,_e--)}function xe(t,i){_e++,oe[_e]=t.current,t.current=i}var Ce=U(null),Ge=U(null),ie=U(null),he=U(null);function Ue(t,i){switch(xe(ie,i),xe(Ge,t),xe(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?v0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=v0(i),t=x0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ce),xe(Ce,t)}function We(){Q(Ce),Q(Ge),Q(ie)}function Ve(t){t.memoizedState!==null&&xe(he,t);var i=Ce.current,s=x0(i,t.type);i!==s&&(xe(Ge,t),xe(Ce,s))}function gt(t){Ge.current===t&&(Q(Ce),Q(Ge)),he.current===t&&(Q(he),rl._currentValue=ee)}var an,Et;function vt(t){if(an===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);an=i&&i[1]||"",Et=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+Et}var Ut=!1;function ft(t,i){if(!t||Ut)return"";Ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var ne=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){ne=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){ne=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&ne&&typeof ue.stack=="string")return[ue.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var z=S.split(`
`),$=A.split(`
`);for(f=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===z.length||f===$.length)for(l=z.length-1,f=$.length-1;1<=l&&0<=f&&z[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(z[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||z[l]!==$[f]){var de=`
`+z[l].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=l&&0<=f);break}}}finally{Ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function rn(t,i){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return vt("Activity");default:return""}}function G(t){try{var i="",s=null;do i+=rn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Jt=Object.prototype.hasOwnProperty,At=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,Ze=r.unstable_shouldYield,O=r.unstable_requestPaint,M=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,be=r.unstable_UserBlockingPriority,ce=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,De=r.unstable_IdlePriority,Ye=r.log,rt=r.unstable_setDisableYieldValue,Te=null,Ae=null;function ze(t){if(typeof Ye=="function"&&rt(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Te,t)}catch{}}var Fe=Math.clz32?Math.clz32:X,Le=Math.log,dt=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Le(t)/dt|0)|0}var Oe=256,Re=262144,Be=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?f=Me(l):(S&=A,S!==0?f=Me(S):s||(s=A&~t,s!==0&&(f=Me(s))))):(A=l&~d,A!==0?f=Me(A):S!==0?f=Me(S):s||(s=l&~t,s!==0&&(f=Me(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function we(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function st(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Rt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Fn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function wi(t,i,s,l,f,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(s=S&~s;0<s;){var de=31-Fe(s),Se=1<<de;A[de]=0,z[de]=-1;var ne=$[de];if(ne!==null)for($[de]=null,de=0;de<ne.length;de++){var ue=ne[de];ue!==null&&(ue.lane&=-536870913)}s&=~Se}l!==0&&Xl(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function Xl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Fe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function go(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Fe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ts(t,i){var s=i&-i;return s=(s&42)!==0?1:vo(s),(s&(t.suspendedLanes|i))!==0?0:s}function vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ns(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:V0(t.type))}function Wi(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var di=Math.random().toString(36).slice(2),fn="__reactFiber$"+di,An="__reactProps$"+di,Di="__reactContainer$"+di,is="__reactEvents$"+di,as="__reactListeners$"+di,Wl="__reactHandles$"+di,So="__reactResources$"+di,Er="__reactMarker$"+di;function yo(t){delete t[fn],delete t[An],delete t[is],delete t[as],delete t[Wl]}function Fa(t){var i=t[fn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Di]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=A0(t);t!==null;){if(s=t[fn])return s;t=A0(t)}return i}t=s,s=t.parentNode}return null}function Ba(t){if(t=t[fn]||t[Di]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function br(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function za(t){var i=t[So];return i||(i=t[So]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(t){t[Er]=!0}var Y=new Set,le={};function te(t,i){K(t,i),K(t+"Capture",i)}function K(t,i){for(le[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},Pe={};function ke(t){return Jt.call(Pe,t)?!0:Jt.call(He,t)?!1:Ne.test(t)?Pe[t]=!0:(He[t]=!0,!1)}function qe(t,i,s){if(ke(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function et(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function jt(t){if(!t._valueTracker){var i=Nt(t)?"checked":"value";t._valueTracker=$t(t,i,""+t[i])}}function Ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Nt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function ot(t){return t.replace(Ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Rn(t,i,s,l,f,d,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Cn(t,S,it(i)):s!=null?Cn(t,S,it(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+it(A):t.removeAttribute("name")}function sa(t,i,s,l,f,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){jt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),jt(t)}function Cn(t,i,s){i==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function pi(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zt(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function wn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(fe(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),jt(t)}function gn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ln(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Dn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function rs(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ln(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Ln(t,d,i[d])}function Li(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),PS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return PS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var Zc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,os=null;function gm(t){var i=Ba(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Rn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[An]||null;if(!f)throw Error(a(90));Rn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ft(l)}break e;case"textarea":zt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&pi(t,!!s.multiple,i,!1)}}}var Qc=!1;function vm(t,i,s){if(Qc)return t(i,s);Qc=!0;try{var l=t(i);return l}finally{if(Qc=!1,(ss!==null||os!==null)&&(Nu(),ss&&(i=ss,t=os,os=ss=null,gm(i),t)))for(i=0;i<t.length;i++)gm(t[i])}}function Eo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(la)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Jc=!1}var Ha=null,$c=null,ql=null;function xm(){if(ql)return ql;var t,i=$c,s=i.length,l,f="value"in Ha?Ha.value:Ha.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[d-l];l++);return ql=f.slice(t,1<l?1-l:void 0)}function jl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Sm(){return!1}function Yn(t){function i(s,l,f,d,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zl:Sm,this.isPropagationStopped=Sm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),i}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Yn(Mr),Mo=_({},Mr,{view:0,detail:0}),IS=Yn(Mo),ef,tf,To,Ql=_({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(ef=t.screenX-To.screenX,tf=t.screenY-To.screenY):tf=ef=0,To=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),ym=Yn(Ql),FS=_({},Ql,{dataTransfer:0}),BS=Yn(FS),zS=_({},Mo,{relatedTarget:0}),nf=Yn(zS),HS=_({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=Yn(HS),VS=_({},Mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=Yn(VS),XS=_({},Mr,{data:0}),Em=Yn(XS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qS[t])?!!i[t]:!1}function af(){return jS}var ZS=_({},Mo,{key:function(t){if(t.key){var i=WS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KS=Yn(ZS),QS=_({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Yn(QS),JS=_({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),$S=Yn(JS),ey=_({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Yn(ey),ny=_({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Yn(ny),ay=_({},Mr,{newState:0,oldState:0}),ry=Yn(ay),sy=[9,13,27,32],rf=la&&"CompositionEvent"in window,Ao=null;la&&"documentMode"in document&&(Ao=document.documentMode);var oy=la&&"TextEvent"in window&&!Ao,Mm=la&&(!rf||Ao&&8<Ao&&11>=Ao),Tm=" ",Am=!1;function Rm(t,i){switch(t){case"keyup":return sy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function ly(t,i){switch(t){case"compositionend":return Cm(i);case"keypress":return i.which!==32?null:(Am=!0,Tm);case"textInput":return t=i.data,t===Tm&&Am?null:t;default:return null}}function uy(t,i){if(ls)return t==="compositionend"||!rf&&Rm(t,i)?(t=xm(),ql=$c=Ha=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mm&&i.locale!=="ko"?null:i.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!cy[t.type]:i==="textarea"}function Dm(t,i,s,l){ss?os?os.push(l):os=[l]:ss=l,i=Hu(i,"onChange"),0<i.length&&(s=new Kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ro=null,Co=null;function fy(t){h0(t,0)}function Jl(t){var i=br(t);if(Ft(i))return t}function Lm(t,i){if(t==="change")return i}var Um=!1;if(la){var sf;if(la){var of="oninput"in document;if(!of){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),of=typeof Nm.oninput=="function"}sf=of}else sf=!1;Um=sf&&(!document.documentMode||9<document.documentMode)}function Om(){Ro&&(Ro.detachEvent("onpropertychange",Pm),Co=Ro=null)}function Pm(t){if(t.propertyName==="value"&&Jl(Co)){var i=[];Dm(i,Co,t,Kc(t)),vm(fy,i)}}function hy(t,i,s){t==="focusin"?(Om(),Ro=i,Co=s,Ro.attachEvent("onpropertychange",Pm)):t==="focusout"&&Om()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Co)}function py(t,i){if(t==="click")return Jl(i)}function my(t,i){if(t==="input"||t==="change")return Jl(i)}function _y(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:_y;function wo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Jt.call(i,f)||!ni(t[f],i[f]))return!1}return!0}function Im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,i){var s=Im(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Im(s)}}function Bm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Je(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Je(t.document)}return i}function lf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gy=la&&"documentMode"in document&&11>=document.documentMode,us=null,uf=null,Do=null,cf=!1;function Hm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||us==null||us!==Je(l)||(l=us,"selectionStart"in l&&lf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&wo(Do,l)||(Do=l,l=Hu(uf,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=us)))}function Tr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var cs={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},ff={},Gm={};la&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ar(t){if(ff[t])return ff[t];if(!cs[t])return t;var i=cs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Gm)return ff[t]=i[s];return t}var Vm=Ar("animationend"),km=Ar("animationiteration"),Xm=Ar("animationstart"),vy=Ar("transitionrun"),xy=Ar("transitionstart"),Sy=Ar("transitioncancel"),Wm=Ar("transitionend"),Ym=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Ui(t,i){Ym.set(t,i),te(i,[t])}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],fs=0,df=0;function eu(){for(var t=fs,i=df=fs=0;i<t;){var s=mi[i];mi[i++]=null;var l=mi[i];mi[i++]=null;var f=mi[i];mi[i++]=null;var d=mi[i];if(mi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&qm(s,f,d)}}function tu(t,i,s,l){mi[fs++]=t,mi[fs++]=i,mi[fs++]=s,mi[fs++]=l,df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function pf(t,i,s,l){return tu(t,i,s,l),nu(t)}function Rr(t,i){return tu(t,null,null,i),nu(t)}function qm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Fe(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function nu(t){if(50<Jo)throw Jo=0,bh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var hs={};function yy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,s,l){return new yy(t,i,s,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,i){var s=t.alternate;return s===null?(s=ii(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function jm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function iu(t,i,s,l,f,d){var S=0;if(l=t,typeof t=="function")mf(t)&&(S=1);else if(typeof t=="string")S=AE(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=ii(31,s,i,f),t.elementType=C,t.lanes=d,t;case T:return Cr(s.children,f,d,i);case y:S=8,f|=24;break;case x:return t=ii(12,s,i,f|2),t.elementType=x,t.lanes=d,t;case P:return t=ii(13,s,i,f),t.elementType=P,t.lanes=d,t;case B:return t=ii(19,s,i,f),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:S=10;break e;case D:S=9;break e;case N:S=11;break e;case I:S=14;break e;case q:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ii(S,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Cr(t,i,s,l){return t=ii(7,t,l,i),t.lanes=s,t}function _f(t,i,s){return t=ii(6,t,null,i),t.lanes=s,t}function Zm(t){var i=ii(18,null,null,0);return i.stateNode=t,i}function gf(t,i,s){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Km=new WeakMap;function _i(t,i){if(typeof t=="object"&&t!==null){var s=Km.get(t);return s!==void 0?s:(i={value:t,source:i,stack:G(i)},Km.set(t,i),i)}return{value:t,source:i,stack:G(i)}}var ds=[],ps=0,au=null,Lo=0,gi=[],vi=0,Ga=null,Yi=1,qi="";function ca(t,i){ds[ps++]=Lo,ds[ps++]=au,au=t,Lo=i}function Qm(t,i,s){gi[vi++]=Yi,gi[vi++]=qi,gi[vi++]=Ga,Ga=t;var l=Yi;t=qi;var f=32-Fe(l)-1;l&=~(1<<f),s+=1;var d=32-Fe(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Yi=1<<32-Fe(i)+f|s<<f|l,qi=d+t}else Yi=1<<d|s<<f|l,qi=t}function vf(t){t.return!==null&&(ca(t,1),Qm(t,1,0))}function xf(t){for(;t===au;)au=ds[--ps],ds[ps]=null,Lo=ds[--ps],ds[ps]=null;for(;t===Ga;)Ga=gi[--vi],gi[vi]=null,qi=gi[--vi],gi[vi]=null,Yi=gi[--vi],gi[vi]=null}function Jm(t,i){gi[vi++]=Yi,gi[vi++]=qi,gi[vi++]=Ga,Yi=i.id,qi=i.overflow,Ga=t}var Un=null,Kt=null,Tt=!1,Va=null,xi=!1,Sf=Error(a(519));function ka(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(_i(i,t)),Sf}function $m(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[fn]=t,i[An]=l,s){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(s=0;s<el.length;s++)St(el[s],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),sa(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),wn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||_0(i.textContent,s)?(l.popover!=null&&(St("beforetoggle",i),St("toggle",i)),l.onScroll!=null&&St("scroll",i),l.onScrollEnd!=null&&St("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||ka(t,!0)}function e_(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Un=Un.return}}function ms(t){if(t!==Un)return!1;if(!Tt)return e_(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bh(t.type,t.memoizedProps)),s=!s),s&&Kt&&ka(t),e_(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=T0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Kt=T0(t)}else i===27?(i=Kt,ir(t.type)?(t=kh,kh=null,Kt=t):Kt=i):Kt=Un?yi(t.stateNode.nextSibling):null;return!0}function wr(){Kt=Un=null,Tt=!1}function yf(){var t=Va;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Va=null),t}function Uo(t){Va===null?Va=[t]:Va.push(t)}var Ef=U(null),Dr=null,fa=null;function Xa(t,i,s){xe(Ef,i._currentValue),i._currentValue=s}function ha(t){t._currentValue=Ef.current,Q(Ef)}function bf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Mf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=f;for(var z=0;z<i.length;z++)if(A.context===i[z]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),bf(d.return,s,t),l||(S=null);break e}d=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),bf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function _s(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=f.type;ni(f.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(f===he.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(rl):t=[rl])}f=f.return}t!==null&&Mf(i,t,s,l),i.flags|=262144}function ru(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Lr(t){Dr=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return t_(Dr,t)}function su(t,i){return Dr===null&&Lr(t),t_(t,i)}function t_(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(a(308));fa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else fa=fa.next=i;return s}var Ey=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},by=r.unstable_scheduleCallback,My=r.unstable_NormalPriority,hn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new Ey,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&by(My,function(){t.controller.abort()})}var Oo=null,Af=0,gs=0,vs=null;function Ty(t,i){if(Oo===null){var s=Oo=[];Af=0,gs=wh(),vs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Af++,i.then(n_,n_),i}function n_(){if(--Af===0&&Oo!==null){vs!==null&&(vs.status="fulfilled");var t=Oo;Oo=null,gs=0,vs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ay(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var i_=F.S;F.S=function(t,i){Hg=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ty(t,i),i_!==null&&i_(t,i)};var Ur=U(null);function Rf(){var t=Ur.current;return t!==null?t:qt.pooledCache}function ou(t,i){i===null?xe(Ur,Ur.current):xe(Ur,i.pool)}function a_(){var t=Rf();return t===null?null:{parent:hn._currentValue,pool:t}}var xs=Error(a(460)),Cf=Error(a(474)),lu=Error(a(542)),uu={then:function(){}};function r_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function s_(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,l_(t),t;default:if(typeof i.status=="string")i.then(oa,oa);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,l_(t),t}throw Or=i,xs}}function Nr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Or=s,xs):s}}var Or=null;function o_(){if(Or===null)throw Error(a(459));var t=Or;return Or=null,t}function l_(t){if(t===xs||t===lu)throw Error(a(483))}var Ss=null,Po=0;function cu(t){var i=Po;return Po+=1,Ss===null&&(Ss=[]),s_(Ss,t,i)}function Io(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function fu(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function u_(t){function i(j,V){if(t){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function s(j,V){if(!t)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function l(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function f(j,V){return j=ua(j,V),j.index=0,j.sibling=null,j}function d(j,V,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,J,ve){return V===null||V.tag!==6?(V=_f(J,j.mode,ve),V.return=j,V):(V=f(V,J),V.return=j,V)}function z(j,V,J,ve){var $e=J.type;return $e===T?de(j,V,J.props.children,ve,J.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&Nr($e)===V.type)?(V=f(V,J.props),Io(V,J),V.return=j,V):(V=iu(J.type,J.key,J.props,null,j.mode,ve),Io(V,J),V.return=j,V)}function $(j,V,J,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=gf(J,j.mode,ve),V.return=j,V):(V=f(V,J.children||[]),V.return=j,V)}function de(j,V,J,ve,$e){return V===null||V.tag!==7?(V=Cr(J,j.mode,ve,$e),V.return=j,V):(V=f(V,J),V.return=j,V)}function Se(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_f(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return J=iu(V.type,V.key,V.props,null,j.mode,J),Io(J,V),J.return=j,J;case b:return V=gf(V,j.mode,J),V.return=j,V;case q:return V=Nr(V),Se(j,V,J)}if(fe(V)||re(V))return V=Cr(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return Se(j,cu(V),J);if(V.$$typeof===w)return Se(j,su(j,V),J);fu(j,V)}return null}function ne(j,V,J,ve){var $e=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $e!==null?null:A(j,V,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===$e?z(j,V,J,ve):null;case b:return J.key===$e?$(j,V,J,ve):null;case q:return J=Nr(J),ne(j,V,J,ve)}if(fe(J)||re(J))return $e!==null?null:de(j,V,J,ve,null);if(typeof J.then=="function")return ne(j,V,cu(J),ve);if(J.$$typeof===w)return ne(j,V,su(j,J),ve);fu(j,J)}return null}function ue(j,V,J,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(J)||null,A(V,j,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return j=j.get(ve.key===null?J:ve.key)||null,z(V,j,ve,$e);case b:return j=j.get(ve.key===null?J:ve.key)||null,$(V,j,ve,$e);case q:return ve=Nr(ve),ue(j,V,J,ve,$e)}if(fe(ve)||re(ve))return j=j.get(J)||null,de(V,j,ve,$e,null);if(typeof ve.then=="function")return ue(j,V,J,cu(ve),$e);if(ve.$$typeof===w)return ue(j,V,J,su(V,ve),$e);fu(V,ve)}return null}function Xe(j,V,J,ve){for(var $e=null,wt=null,Ke=V,pt=V=0,Mt=null;Ke!==null&&pt<J.length;pt++){Ke.index>pt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Dt=ne(j,Ke,J[pt],ve);if(Dt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Dt.alternate===null&&i(j,Ke),V=d(Dt,V,pt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt,Ke=Mt}if(pt===J.length)return s(j,Ke),Tt&&ca(j,pt),$e;if(Ke===null){for(;pt<J.length;pt++)Ke=Se(j,J[pt],ve),Ke!==null&&(V=d(Ke,V,pt),wt===null?$e=Ke:wt.sibling=Ke,wt=Ke);return Tt&&ca(j,pt),$e}for(Ke=l(Ke);pt<J.length;pt++)Mt=ue(Ke,j,pt,J[pt],ve),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?pt:Mt.key),V=d(Mt,V,pt),wt===null?$e=Mt:wt.sibling=Mt,wt=Mt);return t&&Ke.forEach(function(lr){return i(j,lr)}),Tt&&ca(j,pt),$e}function at(j,V,J,ve){if(J==null)throw Error(a(151));for(var $e=null,wt=null,Ke=V,pt=V=0,Mt=null,Dt=J.next();Ke!==null&&!Dt.done;pt++,Dt=J.next()){Ke.index>pt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var lr=ne(j,Ke,Dt.value,ve);if(lr===null){Ke===null&&(Ke=Mt);break}t&&Ke&&lr.alternate===null&&i(j,Ke),V=d(lr,V,pt),wt===null?$e=lr:wt.sibling=lr,wt=lr,Ke=Mt}if(Dt.done)return s(j,Ke),Tt&&ca(j,pt),$e;if(Ke===null){for(;!Dt.done;pt++,Dt=J.next())Dt=Se(j,Dt.value,ve),Dt!==null&&(V=d(Dt,V,pt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return Tt&&ca(j,pt),$e}for(Ke=l(Ke);!Dt.done;pt++,Dt=J.next())Dt=ue(Ke,j,pt,Dt.value,ve),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?pt:Dt.key),V=d(Dt,V,pt),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return t&&Ke.forEach(function(FE){return i(j,FE)}),Tt&&ca(j,pt),$e}function Wt(j,V,J,ve){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var $e=J.key;V!==null;){if(V.key===$e){if($e=J.type,$e===T){if(V.tag===7){s(j,V.sibling),ve=f(V,J.props.children),ve.return=j,j=ve;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&Nr($e)===V.type){s(j,V.sibling),ve=f(V,J.props),Io(ve,J),ve.return=j,j=ve;break e}s(j,V);break}else i(j,V);V=V.sibling}J.type===T?(ve=Cr(J.props.children,j.mode,ve,J.key),ve.return=j,j=ve):(ve=iu(J.type,J.key,J.props,null,j.mode,ve),Io(ve,J),ve.return=j,j=ve)}return S(j);case b:e:{for($e=J.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s(j,V.sibling),ve=f(V,J.children||[]),ve.return=j,j=ve;break e}else{s(j,V);break}else i(j,V);V=V.sibling}ve=gf(J,j.mode,ve),ve.return=j,j=ve}return S(j);case q:return J=Nr(J),Wt(j,V,J,ve)}if(fe(J))return Xe(j,V,J,ve);if(re(J)){if($e=re(J),typeof $e!="function")throw Error(a(150));return J=$e.call(J),at(j,V,J,ve)}if(typeof J.then=="function")return Wt(j,V,cu(J),ve);if(J.$$typeof===w)return Wt(j,V,su(j,J),ve);fu(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(s(j,V.sibling),ve=f(V,J),ve.return=j,j=ve):(s(j,V),ve=_f(J,j.mode,ve),ve.return=j,j=ve),S(j)):s(j,V)}return function(j,V,J,ve){try{Po=0;var $e=Wt(j,V,J,ve);return Ss=null,$e}catch(Ke){if(Ke===xs||Ke===lu)throw Ke;var wt=ii(29,Ke,null,j.mode);return wt.lanes=ve,wt.return=j,wt}}}var Pr=u_(!0),c_=u_(!1),Wa=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function qa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Pt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=nu(t),qm(t,null,s),i}return tu(t,l,i,s),nu(t)}function Fo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,go(t,s)}}function Lf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Uf=!1;function Bo(){if(Uf){var t=vs;if(t!==null)throw t}}function zo(t,i,s,l){Uf=!1;var f=t.updateQueue;Wa=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var z=A,$=z.next;z.next=null,S===null?d=$:S.next=$,S=z;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==S&&(A===null?de.firstBaseUpdate=$:A.next=$,de.lastBaseUpdate=z))}if(d!==null){var Se=f.baseState;S=0,de=$=z=null,A=d;do{var ne=A.lane&-536870913,ue=ne!==A.lane;if(ue?(bt&ne)===ne:(l&ne)===ne){ne!==0&&ne===gs&&(Uf=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,at=A;ne=i;var Wt=s;switch(at.tag){case 1:if(Xe=at.payload,typeof Xe=="function"){Se=Xe.call(Wt,Se,ne);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=at.payload,ne=typeof Xe=="function"?Xe.call(Wt,Se,ne):Xe,ne==null)break e;Se=_({},Se,ne);break e;case 2:Wa=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[ne]:ue.push(ne))}else ue={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?($=de=ue,z=Se):de=de.next=ue,S|=ne;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);de===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=$,f.lastBaseUpdate=de,d===null&&(f.shared.lanes=0),Ja|=S,t.lanes=S,t.memoizedState=Se}}function f_(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function h_(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)f_(s[t],i)}var ys=U(null),hu=U(0);function d_(t,i){t=ya,xe(hu,t),xe(ys,i),ya=t|i.baseLanes}function Nf(){xe(hu,ya),xe(ys,ys.current)}function Of(){ya=hu.current,Q(ys),Q(hu)}var ai=U(null),Si=null;function ja(t){var i=t.alternate;xe(ln,ln.current&1),xe(ai,t),Si===null&&(i===null||ys.current!==null||i.memoizedState!==null)&&(Si=t)}function Pf(t){xe(ln,ln.current),xe(ai,t),Si===null&&(Si=t)}function p_(t){t.tag===22?(xe(ln,ln.current),xe(ai,t),Si===null&&(Si=t)):Za()}function Za(){xe(ln,ln.current),xe(ai,ai.current)}function ri(t){Q(ai),Si===t&&(Si=null),Q(ln)}var ln=U(0);function du(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Gh(s)||Vh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,ht=null,kt=null,dn=null,pu=!1,Es=!1,Ir=!1,mu=0,Ho=0,bs=null,Ry=0;function sn(){throw Error(a(321))}function If(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ni(t[s],i[s]))return!1;return!0}function Ff(t,i,s,l,f,d){return da=d,ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?Q_:Jf,Ir=!1,d=s(l,f),Ir=!1,Es&&(d=__(i,s,l,f)),m_(t),d}function m_(t){F.H=ko;var i=kt!==null&&kt.next!==null;if(da=0,dn=kt=ht=null,pu=!1,Ho=0,bs=null,i)throw Error(a(300));t===null||pn||(t=t.dependencies,t!==null&&ru(t)&&(pn=!0))}function __(t,i,s,l){ht=t;var f=0;do{if(Es&&(bs=null),Ho=0,Es=!1,25<=f)throw Error(a(301));if(f+=1,dn=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=J_,d=i(s,l)}while(Es);return d}function Cy(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Go(i):i,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ht.flags|=1024),i}function Bf(){var t=mu!==0;return mu=0,t}function zf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Hf(t){if(pu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}pu=!1}da=0,dn=kt=ht=null,Es=!1,Ho=mu=0,bs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?ht.memoizedState=dn=t:dn=dn.next=t,dn}function un(){if(kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=dn===null?ht.memoizedState:dn.next;if(i!==null)dn=i,kt=t;else{if(t===null)throw ht.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},dn===null?ht.memoizedState=dn=t:dn=dn.next=t}return dn}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var i=Ho;return Ho+=1,bs===null&&(bs=[]),t=s_(bs,t,i),i=ht,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Q_:Jf),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===w)return Nn(t)}throw Error(a(438,String(t)))}function Gf(t){var i=null,s=ht.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=_u(),ht.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=L;return i.index++,s}function pa(t,i){return typeof i=="function"?i(t):i}function vu(t){var i=un();return Vf(i,kt,t)}function Vf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var A=S=null,z=null,$=i,de=!1;do{var Se=$.lane&-536870913;if(Se!==$.lane?(bt&Se)===Se:(da&Se)===Se){var ne=$.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Se===gs&&(de=!0);else if((da&ne)===ne){$=$.next,ne===gs&&(de=!0);continue}else Se={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=Se,S=d):z=z.next=Se,ht.lanes|=ne,Ja|=ne;Se=$.action,Ir&&s(d,Se),d=$.hasEagerState?$.eagerState:s(d,Se)}else ne={lane:Se,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=ne,S=d):z=z.next=ne,ht.lanes|=Se,Ja|=Se;$=$.next}while($!==null&&$!==i);if(z===null?S=d:z.next=A,!ni(d,t.memoizedState)&&(pn=!0,de&&(s=vs,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=z,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function kf(t){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=t(d,S.action),S=S.next;while(S!==f);ni(d,i.memoizedState)||(pn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function g_(t,i,s){var l=ht,f=un(),d=Tt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ni((kt||f).memoizedState,s);if(S&&(f.memoizedState=s,pn=!0),f=f.queue,Yf(S_.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Ms(9,{destroy:void 0},x_.bind(null,l,f,s,i),null),qt===null)throw Error(a(349));d||(da&127)!==0||v_(l,i,s)}return s}function v_(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ht.updateQueue,i===null?(i=_u(),ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function x_(t,i,s,l){i.value=s,i.getSnapshot=l,y_(i)&&E_(t)}function S_(t,i,s){return s(function(){y_(i)&&E_(t)})}function y_(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ni(t,s)}catch{return!0}}function E_(t){var i=Rr(t,2);i!==null&&Qn(i,t,2)}function Xf(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Ir){ze(!0);try{s()}finally{ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},i}function b_(t,i,s,l){return t.baseState=s,Vf(t,kt,typeof l=="function"?l:pa)}function wy(t,i,s,l,f){if(yu(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,M_(i,d)):(d.next=s.next,i.pending=s.next=d)}}function M_(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=F.T,S={};F.T=S;try{var A=s(f,l),z=F.S;z!==null&&z(S,A),T_(t,i,A)}catch($){Wf(t,i,$)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(f,l),T_(t,i,d)}catch($){Wf(t,i,$)}}function T_(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){A_(t,i,l)},function(l){return Wf(t,i,l)}):A_(t,i,s)}function A_(t,i,s){i.status="fulfilled",i.value=s,R_(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,M_(t,s)))}function Wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,R_(i),i=i.next;while(i!==l)}t.action=null}function R_(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function C_(t,i){return i}function w_(t,i){if(Tt){var s=qt.formState;if(s!==null){e:{var l=ht;if(Tt){if(Kt){t:{for(var f=Kt,d=xi;f.nodeType!==8;){if(!d){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Kt=yi(f.nextSibling),l=f.data==="F!";break e}}ka(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C_,lastRenderedState:i},s.queue=l,s=j_.bind(null,ht,l),l.dispatch=s,l=Xf(!1),d=Qf.bind(null,ht,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=wy.bind(null,ht,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function D_(t){var i=un();return L_(i,kt,t)}function L_(t,i,s){if(i=Vf(t,i,C_)[0],t=vu(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Go(i)}catch(S){throw S===xs?lu:S}else l=i;i=un();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(ht.flags|=2048,Ms(9,{destroy:void 0},Dy.bind(null,f,s),null)),[l,d,t]}function Dy(t,i){t.action=i}function U_(t){var i=un(),s=kt;if(s!==null)return L_(i,s,t);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ms(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ht.updateQueue,i===null&&(i=_u(),ht.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function N_(){return un().memoizedState}function xu(t,i,s,l){var f=kn();ht.flags|=t,f.memoizedState=Ms(1|i,{destroy:void 0},s,l===void 0?null:l)}function Su(t,i,s,l){var f=un();l=l===void 0?null:l;var d=f.memoizedState.inst;kt!==null&&l!==null&&If(l,kt.memoizedState.deps)?f.memoizedState=Ms(i,d,s,l):(ht.flags|=t,f.memoizedState=Ms(1|i,d,s,l))}function O_(t,i){xu(8390656,8,t,i)}function Yf(t,i){Su(2048,8,t,i)}function Ly(t){ht.flags|=4;var i=ht.updateQueue;if(i===null)i=_u(),ht.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function P_(t){var i=un().memoizedState;return Ly({ref:i,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function I_(t,i){return Su(4,2,t,i)}function F_(t,i){return Su(4,4,t,i)}function B_(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function z_(t,i,s){s=s!=null?s.concat([t]):null,Su(4,4,B_.bind(null,i,t),s)}function qf(){}function H_(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&If(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function G_(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&If(i,l[1]))return l[0];if(l=t(),Ir){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l}function jf(t,i,s){return s===void 0||(da&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Vg(),ht.lanes|=t,Ja|=t,s)}function V_(t,i,s,l){return ni(s,i)?s:ys.current!==null?(t=jf(t,s,l),ni(t,i)||(pn=!0),t):(da&42)===0||(da&1073741824)!==0&&(bt&261930)===0?(pn=!0,t.memoizedState=s):(t=Vg(),ht.lanes|=t,Ja|=t,i)}function k_(t,i,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var S=F.T,A={};F.T=A,Qf(t,!1,i,s);try{var z=f(),$=F.S;if($!==null&&$(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var de=Ay(z,l);Vo(t,i,de,li(t))}else Vo(t,i,l,li(t))}catch(Se){Vo(t,i,{then:function(){},status:"rejected",reason:Se},li())}finally{H.p=d,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function Uy(){}function Zf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=X_(t).queue;k_(t,f,i,ee,s===null?Uy:function(){return W_(t),s(l)})}function X_(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function W_(t){var i=X_(t);i.next===null&&(i=t.alternate.memoizedState),Vo(t,i.next.queue,{},li())}function Kf(){return Nn(rl)}function Y_(){return un().memoizedState}function q_(){return un().memoizedState}function Ny(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();t=Ya(s);var l=qa(i,t,s);l!==null&&(Qn(l,i,s),Fo(l,i,s)),i={cache:Tf()},t.payload=i;return}i=i.return}}function Oy(t,i,s){var l=li();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yu(t)?Z_(i,s):(s=pf(t,i,s,l),s!==null&&(Qn(s,t,l),K_(s,i,l)))}function j_(t,i,s){var l=li();Vo(t,i,s,l)}function Vo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(yu(t))Z_(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,A=d(S,s);if(f.hasEagerState=!0,f.eagerState=A,ni(A,S))return tu(t,i,f,0),qt===null&&eu(),!1}catch{}if(s=pf(t,i,f,l),s!==null)return Qn(s,t,l),K_(s,i,l),!0}return!1}function Qf(t,i,s,l){if(l={lane:2,revertLane:wh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(i)throw Error(a(479))}else i=pf(t,s,l,2),i!==null&&Qn(i,t,2)}function yu(t){var i=t.alternate;return t===ht||i!==null&&i===ht}function Z_(t,i){Es=pu=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function K_(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,go(t,s)}}var ko={readContext:Nn,use:gu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};ko.useEffectEvent=sn;var Q_={readContext:Nn,use:gu,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:O_,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,xu(4194308,4,B_.bind(null,i,t),s)},useLayoutEffect:function(t,i){return xu(4194308,4,t,i)},useInsertionEffect:function(t,i){xu(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Ir){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Ir){ze(!0);try{s(i)}finally{ze(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Oy.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Xf(t);var i=t.queue,s=j_.bind(null,ht,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=kn();return jf(s,t,i)},useTransition:function(){var t=Xf(!1);return t=k_.bind(null,ht,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ht,f=kn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qt===null)throw Error(a(349));(bt&127)!==0||v_(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,O_(S_.bind(null,l,d,t),[t]),l.flags|=2048,Ms(9,{destroy:void 0},x_.bind(null,l,d,s,i),null),s},useId:function(){var t=kn(),i=qt.identifierPrefix;if(Tt){var s=qi,l=Yi;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=mu++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Ry++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Kf,useFormState:w_,useActionState:w_,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Qf.bind(null,ht,!0,s),s.dispatch=i,[t,i]},useMemoCache:Gf,useCacheRefresh:function(){return kn().memoizedState=Ny.bind(null,ht)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Pt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Jf={readContext:Nn,use:gu,useCallback:H_,useContext:Nn,useEffect:Yf,useImperativeHandle:z_,useInsertionEffect:I_,useLayoutEffect:F_,useMemo:G_,useReducer:vu,useRef:N_,useState:function(){return vu(pa)},useDebugValue:qf,useDeferredValue:function(t,i){var s=un();return V_(s,kt.memoizedState,t,i)},useTransition:function(){var t=vu(pa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:g_,useId:Y_,useHostTransitionStatus:Kf,useFormState:D_,useActionState:D_,useOptimistic:function(t,i){var s=un();return b_(s,kt,t,i)},useMemoCache:Gf,useCacheRefresh:q_};Jf.useEffectEvent=P_;var J_={readContext:Nn,use:gu,useCallback:H_,useContext:Nn,useEffect:Yf,useImperativeHandle:z_,useInsertionEffect:I_,useLayoutEffect:F_,useMemo:G_,useReducer:kf,useRef:N_,useState:function(){return kf(pa)},useDebugValue:qf,useDeferredValue:function(t,i){var s=un();return kt===null?jf(s,t,i):V_(s,kt.memoizedState,t,i)},useTransition:function(){var t=kf(pa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:g_,useId:Y_,useHostTransitionStatus:Kf,useFormState:U_,useActionState:U_,useOptimistic:function(t,i){var s=un();return kt!==null?b_(s,kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:q_};J_.useEffectEvent=P_;function $f(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var eh={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=li(),f=Ya(l);f.payload=i,s!=null&&(f.callback=s),i=qa(t,f,l),i!==null&&(Qn(i,t,l),Fo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=li(),f=Ya(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=qa(t,f,l),i!==null&&(Qn(i,t,l),Fo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=li(),l=Ya(s);l.tag=2,i!=null&&(l.callback=i),i=qa(t,l,s),i!==null&&(Qn(i,t,s),Fo(i,t,s))}};function $_(t,i,s,l,f,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!wo(s,l)||!wo(f,d):!0}function eg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&eh.enqueueReplaceState(i,i.state,null)}function Fr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function tg(t){$l(t)}function ng(t){console.error(t)}function ig(t){$l(t)}function Eu(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ag(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function th(t,i,s){return s=Ya(s),s.tag=3,s.payload={element:null},s.callback=function(){Eu(t,i)},s}function rg(t){return t=Ya(t),t.tag=3,t}function sg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){ag(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){ag(i,s,l),typeof f!="function"&&($a===null?$a=new Set([this]):$a.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Py(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&_s(i,s,f,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return Si===null?Ou():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===uu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ah(t,l,f)),!1;case 22:return s.flags|=65536,l===uu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ah(t,l,f)),!1}throw Error(a(435,s.tag))}return Ah(t,l,f),Ou(),!1}if(Tt)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Sf&&(t=Error(a(422),{cause:l}),Uo(_i(t,s)))):(l!==Sf&&(i=Error(a(423),{cause:l}),Uo(_i(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=_i(l,s),f=th(t.stateNode,l,f),Lf(t,f),on!==4&&(on=2)),!1;var d=Error(a(520),{cause:l});if(d=_i(d,s),Qo===null?Qo=[d]:Qo.push(d),on!==4&&(on=2),i===null)return!0;l=_i(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=th(s.stateNode,l,t),Lf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&($a===null||!$a.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=rg(f),sg(f,t,s,l),Lf(s,f),!1}s=s.return}while(s!==null);return!1}var nh=Error(a(461)),pn=!1;function On(t,i,s,l){i.child=t===null?c_(i,null,s,l):Pr(i,t.child,s,l)}function og(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Lr(i),l=Ff(t,i,s,S,d,f),A=Bf(),t!==null&&!pn?(zf(t,i,f),ma(t,i,f)):(Tt&&A&&vf(i),i.flags|=1,On(t,i,l,f),i.child)}function lg(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!mf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,ug(t,i,d,l,f)):(t=iu(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!ch(t,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:wo,s(S,l)&&t.ref===i.ref)return ma(t,i,f)}return i.flags|=1,t=ua(d,l),t.ref=i.ref,t.return=i,i.child=t}function ug(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(wo(d,l)&&t.ref===i.ref)if(pn=!1,i.pendingProps=l=d,ch(t,f))(t.flags&131072)!==0&&(pn=!0);else return i.lanes=t.lanes,ma(t,i,f)}return ih(t,i,s,l,f)}function cg(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return fg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ou(i,d!==null?d.cachePool:null),d!==null?d_(i,d):Nf(),p_(i);else return l=i.lanes=536870912,fg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(ou(i,d.cachePool),d_(i,d),Za(),i.memoizedState=null):(t!==null&&ou(i,null),Nf(),Za());return On(t,i,f,s),i.child}function Xo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function fg(t,i,s,l,f){var d=Rf();return d=d===null?null:{parent:hn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ou(i,null),Nf(),p_(i),t!==null&&_s(t,i,l,!0),i.childLanes=f,null}function bu(t,i){return i=Tu({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function hg(t,i,s){return Pr(i,t.child,null,s),t=bu(i,i.pendingProps),t.flags|=2,ri(i),i.memoizedState=null,t}function Iy(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=bu(i,l),i.lanes=536870912,Xo(null,t);if(Pf(i),(t=Kt)?(t=M0(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=Zm(t),s.return=i,i.child=s,Un=i,Kt=null)):t=null,t===null)throw ka(i);return i.lanes=536870912,null}return bu(i,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Pf(i),f)if(i.flags&256)i.flags&=-257,i=hg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||_s(t,i,s,!1),f=(s&t.childLanes)!==0,pn||f){if(l=qt,l!==null&&(S=ts(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Rr(t,S),Qn(l,t,S),nh;Ou(),i=hg(t,i,s)}else t=d.treeContext,Kt=yi(S.nextSibling),Un=i,Tt=!0,Va=null,xi=!1,t!==null&&Jm(i,t),i=bu(i,l),i.flags|=4096;return i}return t=ua(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Mu(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function ih(t,i,s,l,f){return Lr(i),s=Ff(t,i,s,l,void 0,f),l=Bf(),t!==null&&!pn?(zf(t,i,f),ma(t,i,f)):(Tt&&l&&vf(i),i.flags|=1,On(t,i,s,f),i.child)}function dg(t,i,s,l,f,d){return Lr(i),i.updateQueue=null,s=__(i,l,s,f),m_(t),l=Bf(),t!==null&&!pn?(zf(t,i,d),ma(t,i,d)):(Tt&&l&&vf(i),i.flags|=1,On(t,i,s,d),i.child)}function pg(t,i,s,l,f){if(Lr(i),i.stateNode===null){var d=hs,S=s.contextType;typeof S=="object"&&S!==null&&(d=Nn(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=eh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},wf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Nn(S):hs,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&($f(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&eh.enqueueReplaceState(d,d.state,null),zo(i,l,d,f),Bo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var A=i.memoizedProps,z=Fr(s,A);d.props=z;var $=d.context,de=s.contextType;S=hs,typeof de=="object"&&de!==null&&(S=Nn(de));var Se=s.getDerivedStateFromProps;de=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,de||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==S)&&eg(i,d,l,S),Wa=!1;var ne=i.memoizedState;d.state=ne,zo(i,l,d,f),Bo(),$=i.memoizedState,A||ne!==$||Wa?(typeof Se=="function"&&($f(i,s,Se,l),$=i.memoizedState),(z=Wa||$_(i,s,z,l,ne,$,S))?(de||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),d.props=l,d.state=$,d.context=S,l=z):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Df(t,i),S=i.memoizedProps,de=Fr(s,S),d.props=de,Se=i.pendingProps,ne=d.context,$=s.contextType,z=hs,typeof $=="object"&&$!==null&&(z=Nn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Se||ne!==z)&&eg(i,d,l,z),Wa=!1,ne=i.memoizedState,d.state=ne,zo(i,l,d,f),Bo();var ue=i.memoizedState;S!==Se||ne!==ue||Wa||t!==null&&t.dependencies!==null&&ru(t.dependencies)?(typeof A=="function"&&($f(i,s,A,l),ue=i.memoizedState),(de=Wa||$_(i,s,de,l,ne,ue,z)||t!==null&&t.dependencies!==null&&ru(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ue,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ue,z)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),d.props=l,d.state=ue,d.context=z,l=de):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Mu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Pr(i,t.child,null,f),i.child=Pr(i,null,s,f)):On(t,i,s,f),i.memoizedState=d.state,t=i.child):t=ma(t,i,f),t}function mg(t,i,s,l){return wr(),i.flags|=256,On(t,i,s,l),i.child}var ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rh(t){return{baseLanes:t,cachePool:a_()}}function sh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=oi),t}function _g(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(f?ja(i):Za(),(t=Kt)?(t=M0(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=Zm(t),s.return=i,i.child=s,Un=i,Kt=null)):t=null,t===null)throw ka(i);return Vh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(Za(),f=i.mode,A=Tu({mode:"hidden",children:A},f),l=Cr(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=rh(s),l.childLanes=sh(t,S,s),i.memoizedState=ah,Xo(null,l)):(ja(i),oh(i,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(d)i.flags&256?(ja(i),i.flags&=-257,i=lh(t,i,s)):i.memoizedState!==null?(Za(),i.child=t.child,i.flags|=128,i=null):(Za(),A=l.fallback,f=i.mode,l=Tu({mode:"visible",children:l.children},f),A=Cr(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Pr(i,t.child,null,s),l=i.child,l.memoizedState=rh(s),l.childLanes=sh(t,S,s),i.memoizedState=ah,i=Xo(null,l));else if(ja(i),Vh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,l=Error(a(419)),l.stack="",l.digest=S,Uo({value:l,source:null,stack:null}),i=lh(t,i,s)}else if(pn||_s(t,i,s,!1),S=(s&t.childLanes)!==0,pn||S){if(S=qt,S!==null&&(l=ts(S,s),l!==0&&l!==z.retryLane))throw z.retryLane=l,Rr(t,l),Qn(S,t,l),nh;Gh(A)||Ou(),i=lh(t,i,s)}else Gh(A)?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,Kt=yi(A.nextSibling),Un=i,Tt=!0,Va=null,xi=!1,t!==null&&Jm(i,t),i=oh(i,l.children),i.flags|=4096);return i}return f?(Za(),A=l.fallback,f=i.mode,z=t.child,$=z.sibling,l=ua(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,$!==null?A=ua($,A):(A=Cr(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Xo(null,l),l=i.child,A=t.child.memoizedState,A===null?A=rh(s):(f=A.cachePool,f!==null?(z=hn._currentValue,f=f.parent!==z?{parent:z,pool:z}:f):f=a_(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=sh(t,S,s),i.memoizedState=ah,Xo(t.child,l)):(ja(i),s=t.child,t=s.sibling,s=ua(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function oh(t,i){return i=Tu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Tu(t,i){return t=ii(22,t,null,i),t.lanes=0,t}function lh(t,i,s){return Pr(i,t.child,null,s),t=oh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function gg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bf(t.return,i,s)}function uh(t,i,s,l,f,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function vg(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=ln.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,xe(ln,S),On(t,i,l,s),l=Tt?Lo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,s,i);else if(t.tag===19)gg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&du(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),uh(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&du(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}uh(i,!0,s,null,d,l);break;case"together":uh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ja|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(_s(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ua(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ua(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ch(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ru(t)))}function Fy(t,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),Xa(i,hn,t.memoizedState.cache),wr();break;case 27:case 5:Ve(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:Xa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Pf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?_g(t,i,s):(ja(i),t=ma(t,i,s),t!==null?t.sibling:null);ja(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(_s(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return vg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(ln,ln.current),l)break;return null;case 22:return i.lanes=0,cg(t,i,s,i.pendingProps);case 24:Xa(i,hn,t.memoizedState.cache)}return ma(t,i,s)}function xg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)pn=!0;else{if(!ch(t,s)&&(i.flags&128)===0)return pn=!1,Fy(t,i,s);pn=(t.flags&131072)!==0}else pn=!1,Tt&&(i.flags&1048576)!==0&&Qm(i,Lo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Nr(i.elementType),i.type=t,typeof t=="function")mf(t)?(l=Fr(t,l),i.tag=1,i=pg(null,i,t,l,s)):(i.tag=0,i=ih(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===N){i.tag=11,i=og(null,i,t,l,s);break e}else if(f===I){i.tag=14,i=lg(null,i,t,l,s);break e}}throw i=pe(t)||t,Error(a(306,i,""))}}return i;case 0:return ih(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Fr(l,i.pendingProps),pg(t,i,l,f,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Df(t,i),zo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Xa(i,hn,l),l!==d.cache&&Mf(i,[hn],s,!0),Bo(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=mg(t,i,l,s);break e}else if(l!==f){f=_i(Error(a(424)),i),Uo(f),i=mg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=yi(t.firstChild),Un=i,Tt=!0,Va=null,xi=!0,s=c_(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(wr(),l===f){i=ma(t,i,s);break e}On(t,i,l,s)}i=i.child}return i;case 26:return Mu(t,i),t===null?(s=D0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,l=Gu(ie.current).createElement(s),l[fn]=i,l[An]=t,Pn(l,s,t),R(l),i.stateNode=l):i.memoizedState=D0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Tt&&(l=i.stateNode=R0(i.type,i.pendingProps,ie.current),Un=i,xi=!0,f=Kt,ir(i.type)?(kh=f,Kt=yi(l.firstChild)):Kt=f),On(t,i,i.pendingProps.children,s),Mu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((f=l=Kt)&&(l=dE(l,i.type,i.pendingProps,xi),l!==null?(i.stateNode=l,Un=i,Kt=yi(l.firstChild),xi=!1,f=!0):f=!1),f||ka(i)),Ve(i),f=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,Bh(f,d)?l=null:S!==null&&Bh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Ff(t,i,Cy,null,null,s),rl._currentValue=f),Mu(t,i),On(t,i,l,s),i.child;case 6:return t===null&&Tt&&((t=s=Kt)&&(s=pE(s,i.pendingProps,xi),s!==null?(i.stateNode=s,Un=i,Kt=null,t=!0):t=!1),t||ka(i)),null;case 13:return _g(t,i,s);case 4:return Ue(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Pr(i,null,l,s):On(t,i,l,s),i.child;case 11:return og(t,i,i.type,i.pendingProps,s);case 7:return On(t,i,i.pendingProps,s),i.child;case 8:return On(t,i,i.pendingProps.children,s),i.child;case 12:return On(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Xa(i,i.type,l.value),On(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Lr(i),f=Nn(f),l=l(f),i.flags|=1,On(t,i,l,s),i.child;case 14:return lg(t,i,i.type,i.pendingProps,s);case 15:return ug(t,i,i.type,i.pendingProps,s);case 19:return vg(t,i,s);case 31:return Iy(t,i,s);case 22:return cg(t,i,s,i.pendingProps);case 24:return Lr(i),l=Nn(hn),t===null?(f=Rf(),f===null&&(f=qt,d=Tf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},wf(i),Xa(i,hn,f)):((t.lanes&s)!==0&&(Df(t,i),zo(i,null,null,s),Bo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Xa(i,hn,l)):(l=d.cache,Xa(i,hn,l),l!==f.cache&&Mf(i,[hn],s,!0))),On(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(t){t.flags|=4}function fh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Yg())t.flags|=8192;else throw Or=uu,Cf}else t.flags&=-16777217}function Sg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P0(i))if(Yg())t.flags|=8192;else throw Or=uu,Cf}function Au(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Bt():536870912,t.lanes|=i,Cs|=i)}function Wo(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function By(t,i,s){var l=i.pendingProps;switch(xf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(hn),We(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ms(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),Qt(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(_a(i),d!==null?(Qt(i),Sg(i,d)):(Qt(i),fh(i,f,null,l,s))):d?d!==t.memoizedState?(_a(i),Qt(i),Sg(i,d)):(Qt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(i),Qt(i),fh(i,f,t,l,s)),null;case 27:if(gt(i),s=ie.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}t=Ce.current,ms(i)?$m(i):(t=R0(f,l,s),i.stateNode=t,_a(i))}return Qt(i),null;case 5:if(gt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}if(d=Ce.current,ms(i))$m(i);else{var S=Gu(ie.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[fn]=i,d[An]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;e:switch(Pn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(i)}}return Qt(i),fh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,ms(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Un,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[fn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||_0(t.nodeValue,s)),t||ka(i,!0)}else t=Gu(t).createTextNode(l),t[fn]=i,i.stateNode=t}return Qt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=ms(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[fn]=i}else wr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),t=!1}else s=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ms(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else wr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),f=!1}else f=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Au(i,i.updateQueue),Qt(i),null);case 4:return We(),t===null&&Nh(i.stateNode.containerInfo),Qt(i),null;case 10:return ha(i.type),Qt(i),null;case 19:if(Q(ln),l=i.memoizedState,l===null)return Qt(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Wo(l,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=du(t),d!==null){for(i.flags|=128,Wo(l,!1),t=d.updateQueue,i.updateQueue=t,Au(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)jm(s,t),s=s.sibling;return xe(ln,ln.current&1|2),Tt&&ca(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&M()>Lu&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304)}else{if(!f)if(t=du(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Au(i,t),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Tt)return Qt(i),null}else 2*M()-l.renderingStartTime>Lu&&s!==536870912&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=M(),t.sibling=null,s=ln.current,xe(ln,f?s&1|2:s&1),Tt&&ca(i,l.treeForkCount),t):(Qt(i),null);case 22:case 23:return ri(i),Of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),s=i.updateQueue,s!==null&&Au(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Q(Ur),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(hn),Qt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function zy(t,i){switch(xf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ha(hn),We(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return gt(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(a(340));wr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ri(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));wr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(ln),null;case 4:return We(),null;case 10:return ha(i.type),null;case 22:case 23:return ri(i),Of(),t!==null&&Q(Ur),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ha(hn),null;case 25:return null;default:return null}}function yg(t,i){switch(xf(i),i.tag){case 3:ha(hn),We();break;case 26:case 27:case 5:gt(i);break;case 4:We();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:Q(ln);break;case 10:ha(i.type);break;case 22:case 23:ri(i),Of(),t!==null&&Q(Ur);break;case 24:ha(hn)}}function Yo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==f)}}catch(A){Gt(i,i.return,A)}}function Ka(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var z=s,$=A;try{$()}catch(de){Gt(f,z,de)}}}l=l.next}while(l!==d)}}catch(de){Gt(i,i.return,de)}}function Eg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{h_(i,s)}catch(l){Gt(t,t.return,l)}}}function bg(t,i,s){s.props=Fr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Gt(t,i,l)}}function qo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Gt(t,i,f)}}function ji(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Gt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Gt(t,i,f)}else s.current=null}function Mg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Gt(t,t.return,f)}}function hh(t,i,s){try{var l=t.stateNode;oE(l,t.type,s,i),l[An]=i}catch(f){Gt(t,t.return,f)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ir(t.type)||t.tag===4}function dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ir(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&ir(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(ph(t,i,s),t=t.sibling;t!==null;)ph(t,i,s),t=t.sibling}function Ru(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ir(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ru(t,i,s),t=t.sibling;t!==null;)Ru(t,i,s),t=t.sibling}function Ag(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Pn(i,l,s),i[fn]=t,i[An]=s}catch(d){Gt(t,t.return,d)}}var ga=!1,mn=!1,mh=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Hy(t,i){if(t=t.containerInfo,Ih=ju,t=zm(t),lf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,A=-1,z=-1,$=0,de=0,Se=t,ne=null;t:for(;;){for(var ue;Se!==s||f!==0&&Se.nodeType!==3||(A=S+f),Se!==d||l!==0&&Se.nodeType!==3||(z=S+l),Se.nodeType===3&&(S+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)ne=Se,Se=ue;for(;;){if(Se===t)break t;if(ne===s&&++$===f&&(A=S),ne===d&&++de===l&&(z=S),(ue=Se.nextSibling)!==null)break;Se=ne,ne=Se.parentNode}Se=ue}s=A===-1||z===-1?null:{start:A,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fh={focusedElem:t,selectionRange:s},ju=!1,bn=i;bn!==null;)if(i=bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,bn=t;else for(;bn!==null;){switch(i=bn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Xe=Fr(s.type,f);t=l.getSnapshotBeforeUpdate(Xe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Gt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Hh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,bn=t;break}bn=i.return}}function Cg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(t,s),l&4&&Yo(5,s);break;case 1:if(xa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Gt(s,s.return,S)}else{var f=Fr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(s,s.return,S)}}l&64&&Eg(s),l&512&&qo(s,s.return);break;case 3:if(xa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{h_(t,i)}catch(S){Gt(s,s.return,S)}}break;case 27:i===null&&l&4&&Ag(s);case 26:case 5:xa(t,s),i===null&&l&4&&Mg(s),l&512&&qo(s,s.return);break;case 12:xa(t,s);break;case 31:xa(t,s),l&4&&Lg(t,s);break;case 13:xa(t,s),l&4&&Ug(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Zy.bind(null,s),mE(t,s))));break;case 22:if(l=s.memoizedState!==null||ga,!l){i=i!==null&&i.memoizedState!==null||mn,f=ga;var d=mn;ga=l,(mn=i)&&!d?Sa(t,s,(s.subtreeFlags&8772)!==0):xa(t,s),ga=f,mn=d}break;case 30:break;default:xa(t,s)}}function wg(t){var i=t.alternate;i!==null&&(t.alternate=null,wg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&yo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,qn=!1;function va(t,i,s){for(s=s.child;s!==null;)Dg(t,i,s),s=s.sibling}function Dg(t,i,s){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Te,s)}catch{}switch(s.tag){case 26:mn||ji(s,i),va(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:mn||ji(s,i);var l=en,f=qn;ir(s.type)&&(en=s.stateNode,qn=!1),va(t,i,s),nl(s.stateNode),en=l,qn=f;break;case 5:mn||ji(s,i);case 6:if(l=en,f=qn,en=null,va(t,i,s),en=l,qn=f,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(s.stateNode)}catch(d){Gt(s,i,d)}else try{en.removeChild(s.stateNode)}catch(d){Gt(s,i,d)}break;case 18:en!==null&&(qn?(t=en,E0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Is(t)):E0(en,s.stateNode));break;case 4:l=en,f=qn,en=s.stateNode.containerInfo,qn=!0,va(t,i,s),en=l,qn=f;break;case 0:case 11:case 14:case 15:Ka(2,s,i),mn||Ka(4,s,i),va(t,i,s);break;case 1:mn||(ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&bg(s,i,l)),va(t,i,s);break;case 21:va(t,i,s);break;case 22:mn=(l=mn)||s.memoizedState!==null,va(t,i,s),mn=l;break;default:va(t,i,s)}}function Lg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Is(t)}catch(s){Gt(i,i.return,s)}}}function Ug(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Is(t)}catch(s){Gt(i,i.return,s)}}function Gy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Rg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Rg),i;default:throw Error(a(435,t.tag))}}function Cu(t,i){var s=Gy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Ky.bind(null,t,l);l.then(f,f)}})}function jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(ir(A.type)){en=A.stateNode,qn=!1;break e}break;case 5:en=A.stateNode,qn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(en===null)throw Error(a(160));Dg(d,S,f),en=null,qn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ng(i,t),i=i.sibling}var Ni=null;function Ng(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(i,t),Zn(t),l&4&&(Ka(3,t,t.return),Yo(3,t),Ka(5,t,t.return));break;case 1:jn(i,t),Zn(t),l&512&&(mn||s===null||ji(s,s.return)),l&64&&ga&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ni;if(jn(i,t),Zn(t),l&512&&(mn||s===null||ji(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Er]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Pn(d,l,s),d[fn]=t,R(d),l=d;break e;case"link":var S=N0("link","href",f).get(l+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}d=f.createElement(l),Pn(d,l,s),f.head.appendChild(d);break;case"meta":if(S=N0("meta","content",f).get(l+(s.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}d=f.createElement(l),Pn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[fn]=t,R(d),l=d}t.stateNode=l}else O0(f,t.type,t.stateNode);else t.stateNode=U0(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?O0(f,t.type,t.stateNode):U0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&hh(t,t.memoizedProps,s.memoizedProps)}break;case 27:jn(i,t),Zn(t),l&512&&(mn||s===null||ji(s,s.return)),s!==null&&l&4&&hh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(jn(i,t),Zn(t),l&512&&(mn||s===null||ji(s,s.return)),t.flags&32){f=t.stateNode;try{gn(f,"")}catch(Xe){Gt(t,t.return,Xe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,hh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(mh=!0);break;case 6:if(jn(i,t),Zn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(Xu=null,f=Ni,Ni=Vu(i.containerInfo),jn(i,t),Ni=f,Zn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Is(i.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}mh&&(mh=!1,Og(t));break;case 4:l=Ni,Ni=Vu(t.stateNode.containerInfo),jn(i,t),Zn(t),Ni=l;break;case 12:jn(i,t),Zn(t);break;case 31:jn(i,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cu(t,l)));break;case 13:jn(i,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Du=M()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cu(t,l)));break;case 22:f=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,$=ga,de=mn;if(ga=$||f,mn=de||z,jn(i,t),mn=de,ga=$,Zn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||z||ga||mn||Br(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(d=z.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=z.stateNode;var Se=z.memoizedProps.style,ne=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Xe){Gt(z,z.return,Xe)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(Xe){Gt(z,z.return,Xe)}}}else if(i.tag===18){if(s===null){z=i;try{var ue=z.stateNode;f?b0(ue,!0):b0(z.stateNode,!1)}catch(Xe){Gt(z,z.return,Xe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Cu(t,s))));break;case 19:jn(i,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cu(t,l)));break;case 30:break;case 21:break;default:jn(i,t),Zn(t)}}function Zn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Tg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=dh(t);Ru(t,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(gn(S,""),s.flags&=-33);var A=dh(t);Ru(t,A,S);break;case 3:case 4:var z=s.stateNode.containerInfo,$=dh(t);ph(t,$,z);break;default:throw Error(a(161))}}catch(de){Gt(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Og(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function xa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Cg(t,i.alternate,i),i=i.sibling}function Br(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ka(4,i,i.return),Br(i);break;case 1:ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&bg(i,i.return,s),Br(i);break;case 27:nl(i.stateNode);case 26:case 5:ji(i,i.return),Br(i);break;case 22:i.memoizedState===null&&Br(i);break;case 30:Br(i);break;default:Br(i)}t=t.sibling}}function Sa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Sa(f,d,s),Yo(4,d);break;case 1:if(Sa(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Gt(l,l.return,$)}if(l=d,f=l.updateQueue,f!==null){var A=l.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)f_(z[f],A)}catch($){Gt(l,l.return,$)}}s&&S&64&&Eg(d),qo(d,d.return);break;case 27:Ag(d);case 26:case 5:Sa(f,d,s),s&&l===null&&S&4&&Mg(d),qo(d,d.return);break;case 12:Sa(f,d,s);break;case 31:Sa(f,d,s),s&&S&4&&Lg(f,d);break;case 13:Sa(f,d,s),s&&S&4&&Ug(f,d);break;case 22:d.memoizedState===null&&Sa(f,d,s),qo(d,d.return);break;case 30:break;default:Sa(f,d,s)}i=i.sibling}}function _h(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&No(s))}function gh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t))}function Oi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Pg(t,i,s,l),i=i.sibling}function Pg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(t,i,s,l),f&2048&&Yo(9,i);break;case 1:Oi(t,i,s,l);break;case 3:Oi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t)));break;case 12:if(f&2048){Oi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Gt(i,i.return,z)}}else Oi(t,i,s,l);break;case 31:Oi(t,i,s,l);break;case 13:Oi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Oi(t,i,s,l):jo(t,i):d._visibility&2?Oi(t,i,s,l):(d._visibility|=2,Ts(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&_h(S,i);break;case 24:Oi(t,i,s,l),f&2048&&gh(i.alternate,i);break;default:Oi(t,i,s,l)}}function Ts(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,S=i,A=s,z=l,$=S.flags;switch(S.tag){case 0:case 11:case 15:Ts(d,S,A,z,f),Yo(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?Ts(d,S,A,z,f):jo(d,S):(de._visibility|=2,Ts(d,S,A,z,f)),f&&$&2048&&_h(S.alternate,S);break;case 24:Ts(d,S,A,z,f),f&&$&2048&&gh(S.alternate,S);break;default:Ts(d,S,A,z,f)}i=i.sibling}}function jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:jo(s,l),f&2048&&_h(l.alternate,l);break;case 24:jo(s,l),f&2048&&gh(l.alternate,l);break;default:jo(s,l)}i=i.sibling}}var Zo=8192;function As(t,i,s){if(t.subtreeFlags&Zo)for(t=t.child;t!==null;)Ig(t,i,s),t=t.sibling}function Ig(t,i,s){switch(t.tag){case 26:As(t,i,s),t.flags&Zo&&t.memoizedState!==null&&RE(s,Ni,t.memoizedState,t.memoizedProps);break;case 5:As(t,i,s);break;case 3:case 4:var l=Ni;Ni=Vu(t.stateNode.containerInfo),As(t,i,s),Ni=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Zo,Zo=16777216,As(t,i,s),Zo=l):As(t,i,s));break;default:As(t,i,s)}}function Fg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ko(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,zg(l,t)}Fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bg(t),t=t.sibling}function Bg(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,wu(t)):Ko(t);break;default:Ko(t)}}function wu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,zg(l,t)}Fg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ka(8,i,i.return),wu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,wu(i));break;default:wu(i)}t=t.sibling}}function zg(t,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:Ka(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:No(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,bn=l;else e:for(s=t;bn!==null;){l=bn;var f=l.sibling,d=l.return;if(wg(l),l===s){bn=null;break e}if(f!==null){f.return=d,bn=f;break e}bn=d}}}var Vy={getCacheForType:function(t){var i=Nn(hn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Nn(hn).controller.signal}},ky=typeof WeakMap=="function"?WeakMap:Map,Pt=0,qt=null,xt=null,bt=0,Ht=0,si=null,Qa=!1,Rs=!1,vh=!1,ya=0,on=0,Ja=0,zr=0,xh=0,oi=0,Cs=0,Qo=null,Kn=null,Sh=!1,Du=0,Hg=0,Lu=1/0,Uu=null,$a=null,vn=0,er=null,ws=null,Ea=0,yh=0,Eh=null,Gg=null,Jo=0,bh=null;function li(){return(Pt&2)!==0&&bt!==0?bt&-bt:F.T!==null?wh():xo()}function Vg(){if(oi===0)if((bt&536870912)===0||Tt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Qn(t,i,s){(t===qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),tr(t,bt,oi,!1)),Fn(t,s),((Pt&2)===0||t!==qt)&&(t===qt&&((Pt&2)===0&&(zr|=s),on===4&&tr(t,bt,oi,!1)),Zi(t))}function kg(t,i,s){if((Pt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||we(t,i),f=l?Yy(t,i):Th(t,i,!0),d=l;do{if(f===0){Rs&&!l&&tr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!Xy(s)){f=Th(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;f=Qo;var z=A.current.memoizedState.isDehydrated;if(z&&(Ds(A,S).flags|=256),S=Th(A,S,!1),S!==2){if(vh&&!z){A.errorRecoveryDisabledLanes|=d,zr|=d,f=4;break e}d=Kn,Kn=f,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){Ds(t,0),tr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:tr(l,i,oi,!Qa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Du+300-M(),10<f)){if(tr(l,i,oi,!Qa),ye(l,0,!0)!==0)break e;Ea=i,l.timeoutHandle=S0(Xg.bind(null,l,s,Kn,Uu,Sh,i,oi,zr,Cs,Qa,d,"Throttled",-0,0),f);break e}Xg(l,s,Kn,Uu,Sh,i,oi,zr,Cs,Qa,d,null,-0,0)}}break}while(!0);Zi(t)}function Xg(t,i,s,l,f,d,S,A,z,$,de,Se,ne,ue){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},Ig(i,d,Se);var Xe=(d&62914560)===d?Du-M():(d&4194048)===d?Hg-M():0;if(Xe=CE(Se,Xe),Xe!==null){Ea=d,t.cancelPendingCommit=Xe(Jg.bind(null,t,i,d,s,l,f,S,A,z,de,Se,null,ne,ue)),tr(t,d,S,!$);return}}Jg(t,i,d,s,l,f,S,A,z)}function Xy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ni(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function tr(t,i,s,l){i&=~xh,i&=~zr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Fe(f),S=1<<d;l[d]=-1,f&=~S}s!==0&&Xl(t,s,i)}function Nu(){return(Pt&6)===0?($o(0),!1):!0}function Mh(){if(xt!==null){if(Ht===0)var t=xt.return;else t=xt,fa=Dr=null,Hf(t),Ss=null,Po=0,t=xt;for(;t!==null;)yg(t.alternate,t),t=t.return;xt=null}}function Ds(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,cE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Mh(),qt=t,xt=s=ua(t.current,null),bt=i,Ht=0,si=null,Qa=!1,Rs=we(t,i),vh=!1,Cs=oi=xh=zr=Ja=on=0,Kn=Qo=null,Sh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Fe(l),d=1<<f;i|=t[f],l&=~d}return ya=i,eu(),s}function Wg(t,i){ht=null,F.H=ko,i===xs||i===lu?(i=o_(),Ht=3):i===Cf?(i=o_(),Ht=4):Ht=i===nh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,xt===null&&(on=1,Eu(t,_i(i,t.current)))}function Yg(){var t=ai.current;return t===null?!0:(bt&4194048)===bt?Si===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Si:!1}function qg(){var t=F.H;return F.H=ko,t===null?ko:t}function jg(){var t=F.A;return F.A=Vy,t}function Ou(){on=4,Qa||(bt&4194048)!==bt&&ai.current!==null||(Rs=!0),(Ja&134217727)===0&&(zr&134217727)===0||qt===null||tr(qt,bt,oi,!1)}function Th(t,i,s){var l=Pt;Pt|=2;var f=qg(),d=jg();(qt!==t||bt!==i)&&(Uu=null,Ds(t,i)),i=!1;var S=on;e:do try{if(Ht!==0&&xt!==null){var A=xt,z=si;switch(Ht){case 8:Mh(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var $=Ht;if(Ht=0,si=null,Ls(t,A,z,$),s&&Rs){S=0;break e}break;default:$=Ht,Ht=0,si=null,Ls(t,A,z,$)}}Wy(),S=on;break}catch(de){Wg(t,de)}while(!0);return i&&t.shellSuspendCounter++,fa=Dr=null,Pt=l,F.H=f,F.A=d,xt===null&&(qt=null,bt=0,eu()),S}function Wy(){for(;xt!==null;)Zg(xt)}function Yy(t,i){var s=Pt;Pt|=2;var l=qg(),f=jg();qt!==t||bt!==i?(Uu=null,Lu=M()+500,Ds(t,i)):Rs=we(t,i);e:do try{if(Ht!==0&&xt!==null){i=xt;var d=si;t:switch(Ht){case 1:Ht=0,si=null,Ls(t,i,d,1);break;case 2:case 9:if(r_(d)){Ht=0,si=null,Kg(i);break}i=function(){Ht!==2&&Ht!==9||qt!==t||(Ht=7),Zi(t)},d.then(i,i);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:r_(d)?(Ht=0,si=null,Kg(i)):(Ht=0,si=null,Ls(t,i,d,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var A=xt;if(S?P0(S):A.stateNode.complete){Ht=0,si=null;var z=A.sibling;if(z!==null)xt=z;else{var $=A.return;$!==null?(xt=$,Pu($)):xt=null}break t}}Ht=0,si=null,Ls(t,i,d,5);break;case 6:Ht=0,si=null,Ls(t,i,d,6);break;case 8:Mh(),on=6;break e;default:throw Error(a(462))}}qy();break}catch(de){Wg(t,de)}while(!0);return fa=Dr=null,F.H=l,F.A=f,Pt=s,xt!==null?0:(qt=null,bt=0,eu(),on)}function qy(){for(;xt!==null&&!Ze();)Zg(xt)}function Zg(t){var i=xg(t.alternate,t,ya);t.memoizedProps=t.pendingProps,i===null?Pu(t):xt=i}function Kg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=dg(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=dg(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Hf(i);default:yg(s,i),i=xt=jm(i,ya),i=xg(s,i,ya)}t.memoizedProps=t.pendingProps,i===null?Pu(t):xt=i}function Ls(t,i,s,l){fa=Dr=null,Hf(i),Ss=null,Po=0;var f=i.return;try{if(Py(t,f,i,s,bt)){on=1,Eu(t,_i(s,t.current)),xt=null;return}}catch(d){if(f!==null)throw xt=f,d;on=1,Eu(t,_i(s,t.current)),xt=null;return}i.flags&32768?(Tt||l===1?t=!0:Rs||(bt&536870912)!==0?t=!1:(Qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qg(i,t)):Pu(i)}function Pu(t){var i=t;do{if((i.flags&32768)!==0){Qg(i,Qa);return}t=i.return;var s=By(i.alternate,i,ya);if(s!==null){xt=s;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=t}while(i!==null);on===0&&(on=5)}function Qg(t,i){do{var s=zy(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);on=6,xt=null}function Jg(t,i,s,l,f,d,S,A,z){t.cancelPendingCommit=null;do Iu();while(vn!==0);if((Pt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=df,wi(t,s,d,S,A,z),t===qt&&(xt=qt=null,bt=0),ws=i,er=t,Ea=s,yh=d,Eh=f,Gg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qy(ce,function(){return i0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Pt,Pt|=4;try{Hy(t,i,s)}finally{Pt=S,H.p=f,F.T=l}}vn=1,$g(),e0(),t0()}}function $g(){if(vn===1){vn=0;var t=er,i=ws,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{Ng(i,t);var d=Fh,S=zm(t.containerInfo),A=d.focusedElem,z=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Bm(A.ownerDocument.documentElement,A)){if(z!==null&&lf(A)){var $=z.start,de=z.end;if(de===void 0&&(de=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(de,A.value.length);else{var Se=A.ownerDocument||document,ne=Se&&Se.defaultView||window;if(ne.getSelection){var ue=ne.getSelection(),Xe=A.textContent.length,at=Math.min(z.start,Xe),Wt=z.end===void 0?at:Math.min(z.end,Xe);!ue.extend&&at>Wt&&(S=Wt,Wt=at,at=S);var j=Fm(A,at),V=Fm(A,Wt);if(j&&V&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==V.node||ue.focusOffset!==V.offset)){var J=Se.createRange();J.setStart(j.node,j.offset),ue.removeAllRanges(),at>Wt?(ue.addRange(J),ue.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ue.addRange(J))}}}}for(Se=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Se.length;A++){var ve=Se[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ju=!!Ih,Fh=Ih=null}finally{Pt=f,H.p=l,F.T=s}}t.current=i,vn=2}}function e0(){if(vn===2){vn=0;var t=er,i=ws,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{Cg(t,i.alternate,i)}finally{Pt=f,H.p=l,F.T=s}}vn=3}}function t0(){if(vn===4||vn===3){vn=0,O();var t=er,i=ws,s=Ea,l=Gg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?vn=5:(vn=0,ws=er=null,n0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&($a=null),ns(s),i=i.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=H.p,H.p=2,F.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var A=l[S];d(A.value,{componentStack:A.stack})}}finally{F.T=i,H.p=f}}(Ea&3)!==0&&Iu(),Zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===bh?Jo++:(Jo=0,bh=t):Jo=0,$o(0)}}function n0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,No(i)))}function Iu(){return $g(),e0(),t0(),i0()}function i0(){if(vn!==5)return!1;var t=er,i=yh;yh=0;var s=ns(Ea),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=Eh,Eh=null;var d=er,S=Ea;if(vn=0,ws=er=null,Ea=0,(Pt&6)!==0)throw Error(a(331));var A=Pt;if(Pt|=4,Bg(d.current),Pg(d,d.current,S,s),Pt=A,$o(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Te,d)}catch{}return!0}finally{H.p=f,F.T=l,n0(t,i)}}function a0(t,i,s){i=_i(s,i),i=th(t.stateNode,i,2),t=qa(t,i,2),t!==null&&(Fn(t,2),Zi(t))}function Gt(t,i,s){if(t.tag===3)a0(t,t,s);else for(;i!==null;){if(i.tag===3){a0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($a===null||!$a.has(l))){t=_i(s,t),s=rg(2),l=qa(i,s,2),l!==null&&(sg(s,l,i,t),Fn(l,2),Zi(l));break}}i=i.return}}function Ah(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ky;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(vh=!0,f.add(s),t=jy.bind(null,t,i,s),i.then(t,t))}function jy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,qt===t&&(bt&s)===s&&(on===4||on===3&&(bt&62914560)===bt&&300>M()-Du?(Pt&2)===0&&Ds(t,0):xh|=s,Cs===bt&&(Cs=0)),Zi(t)}function r0(t,i){i===0&&(i=Bt()),t=Rr(t,i),t!==null&&(Fn(t,i),Zi(t))}function Zy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),r0(t,s)}function Ky(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),r0(t,s)}function Qy(t,i){return At(t,i)}var Fu=null,Us=null,Rh=!1,Bu=!1,Ch=!1,nr=0;function Zi(t){t!==Us&&t.next===null&&(Us===null?Fu=Us=t:Us=Us.next=t),Bu=!0,Rh||(Rh=!0,$y())}function $o(t,i){if(!Ch&&Bu){Ch=!0;do for(var s=!1,l=Fu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=f&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,u0(l,d))}else d=bt,d=ye(l,l===qt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||we(l,d)||(s=!0,u0(l,d));l=l.next}while(s);Ch=!1}}function Jy(){s0()}function s0(){Bu=Rh=!1;var t=0;nr!==0&&uE()&&(t=nr);for(var i=M(),s=null,l=Fu;l!==null;){var f=l.next,d=o0(l,i);d===0?(l.next=null,s===null?Fu=f:s.next=f,f===null&&(Us=s)):(s=l,(t!==0||(d&3)!==0)&&(Bu=!0)),l=f}vn!==0&&vn!==5||$o(t),nr!==0&&(nr=0)}function o0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Fe(d),A=1<<S,z=f[S];z===-1?((A&s)===0||(A&l)!==0)&&(f[S]=st(A,i)):z<=i&&(t.expiredLanes|=A),d&=~A}if(i=qt,s=bt,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&It(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||we(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&It(l),ns(s)){case 2:case 8:s=be;break;case 32:s=ce;break;case 268435456:s=De;break;default:s=ce}return l=l0.bind(null,t),s=At(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&It(l),t.callbackPriority=2,t.callbackNode=null,2}function l0(t,i){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Iu()&&t.callbackNode!==s)return null;var l=bt;return l=ye(t,t===qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(kg(t,l,i),o0(t,M()),t.callbackNode!=null&&t.callbackNode===s?l0.bind(null,t):null)}function u0(t,i){if(Iu())return null;kg(t,i,!0)}function $y(){fE(function(){(Pt&6)!==0?At(me,Jy):s0()})}function wh(){if(nr===0){var t=gs;t===0&&(t=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),nr=t}return nr}function c0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(""+t)}function f0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function eE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=c0((f[An]||null).action),S=l.submitter;S&&(i=(i=S[An]||null)?c0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var A=new Kl("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(nr!==0){var z=S?f0(f,S):new FormData(f);Zf(s,{pending:!0,data:z,method:f.method,action:d},null,z)}}else typeof d=="function"&&(A.preventDefault(),z=S?f0(f,S):new FormData(f),Zf(s,{pending:!0,data:z,method:f.method,action:d},d,z))},currentTarget:f}]})}}for(var Dh=0;Dh<hf.length;Dh++){var Lh=hf[Dh],tE=Lh.toLowerCase(),nE=Lh[0].toUpperCase()+Lh.slice(1);Ui(tE,"on"+nE)}Ui(Vm,"onAnimationEnd"),Ui(km,"onAnimationIteration"),Ui(Xm,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(vy,"onTransitionRun"),Ui(xy,"onTransitionStart"),Ui(Sy,"onTransitionCancel"),Ui(Wm,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function h0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],z=A.instance,$=A.currentTarget;if(A=A.listener,z!==d&&f.isPropagationStopped())break e;d=A,f.currentTarget=$;try{d(f)}catch(de){$l(de)}f.currentTarget=null,d=z}else for(S=0;S<l.length;S++){if(A=l[S],z=A.instance,$=A.currentTarget,A=A.listener,z!==d&&f.isPropagationStopped())break e;d=A,f.currentTarget=$;try{d(f)}catch(de){$l(de)}f.currentTarget=null,d=z}}}}function St(t,i){var s=i[is];s===void 0&&(s=i[is]=new Set);var l=t+"__bubble";s.has(l)||(d0(i,t,2,!1),s.add(l))}function Uh(t,i,s){var l=0;i&&(l|=4),d0(s,t,l,i)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Nh(t){if(!t[zu]){t[zu]=!0,Y.forEach(function(s){s!=="selectionchange"&&(iE.has(s)||Uh(s,!1,t),Uh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[zu]||(i[zu]=!0,Uh("selectionchange",!1,i))}}function d0(t,i,s,l){switch(V0(i)){case 2:var f=LE;break;case 8:f=UE;break;default:f=jh}s=f.bind(null,i,s,t),f=void 0,!Jc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Oh(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=Fa(A),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){l=d=S;continue e}A=A.parentNode}}l=l.return}vm(function(){var $=d,de=Kc(s),Se=[];e:{var ne=Ym.get(t);if(ne!==void 0){var ue=Kl,Xe=t;switch(t){case"keypress":if(jl(s)===0)break e;case"keydown":case"keyup":ue=KS;break;case"focusin":Xe="focus",ue=nf;break;case"focusout":Xe="blur",ue=nf;break;case"beforeblur":case"afterblur":ue=nf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$S;break;case Vm:case km:case Xm:ue=GS;break;case Wm:ue=ty;break;case"scroll":case"scrollend":ue=IS;break;case"wheel":ue=iy;break;case"copy":case"cut":case"paste":ue=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=bm;break;case"toggle":case"beforetoggle":ue=ry}var at=(i&4)!==0,Wt=!at&&(t==="scroll"||t==="scrollend"),j=at?ne!==null?ne+"Capture":null:ne;at=[];for(var V=$,J;V!==null;){var ve=V;if(J=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||J===null||j===null||(ve=Eo(V,j),ve!=null&&at.push(tl(V,ve,J))),Wt)break;V=V.return}0<at.length&&(ne=new ue(ne,Xe,null,s,de),Se.push({event:ne,listeners:at}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ne&&s!==Zc&&(Xe=s.relatedTarget||s.fromElement)&&(Fa(Xe)||Xe[Di]))break e;if((ue||ne)&&(ne=de.window===de?de:(ne=de.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(Xe=s.relatedTarget||s.toElement,ue=$,Xe=Xe?Fa(Xe):null,Xe!==null&&(Wt=u(Xe),at=Xe.tag,Xe!==Wt||at!==5&&at!==27&&at!==6)&&(Xe=null)):(ue=null,Xe=$),ue!==Xe)){if(at=ym,ve="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(at=bm,ve="onPointerLeave",j="onPointerEnter",V="pointer"),Wt=ue==null?ne:br(ue),J=Xe==null?ne:br(Xe),ne=new at(ve,V+"leave",ue,s,de),ne.target=Wt,ne.relatedTarget=J,ve=null,Fa(de)===$&&(at=new at(j,V+"enter",Xe,s,de),at.target=J,at.relatedTarget=Wt,ve=at),Wt=ve,ue&&Xe)t:{for(at=aE,j=ue,V=Xe,J=0,ve=j;ve;ve=at(ve))J++;ve=0;for(var $e=V;$e;$e=at($e))ve++;for(;0<J-ve;)j=at(j),J--;for(;0<ve-J;)V=at(V),ve--;for(;J--;){if(j===V||V!==null&&j===V.alternate){at=j;break t}j=at(j),V=at(V)}at=null}else at=null;ue!==null&&p0(Se,ne,ue,at,!1),Xe!==null&&Wt!==null&&p0(Se,Wt,Xe,at,!0)}}e:{if(ne=$?br($):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var wt=Lm;else if(wm(ne))if(Um)wt=my;else{wt=dy;var Ke=hy}else ue=ne.nodeName,!ue||ue.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Li($.elementType)&&(wt=Lm):wt=py;if(wt&&(wt=wt(t,$))){Dm(Se,wt,s,de);break e}Ke&&Ke(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Cn(ne,"number",ne.value)}switch(Ke=$?br($):window,t){case"focusin":(wm(Ke)||Ke.contentEditable==="true")&&(us=Ke,uf=$,Do=null);break;case"focusout":Do=uf=us=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Hm(Se,s,de);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":Hm(Se,s,de)}var pt;if(rf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else ls?Rm(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(Mm&&s.locale!=="ko"&&(ls||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&ls&&(pt=xm()):(Ha=de,$c="value"in Ha?Ha.value:Ha.textContent,ls=!0)),Ke=Hu($,Mt),0<Ke.length&&(Mt=new Em(Mt,t,null,s,de),Se.push({event:Mt,listeners:Ke}),pt?Mt.data=pt:(pt=Cm(s),pt!==null&&(Mt.data=pt)))),(pt=oy?ly(t,s):uy(t,s))&&(Mt=Hu($,"onBeforeInput"),0<Mt.length&&(Ke=new Em("onBeforeInput","beforeinput",null,s,de),Se.push({event:Ke,listeners:Mt}),Ke.data=pt)),eE(Se,t,$,s,de)}h0(Se,i)})}function tl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Hu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Eo(t,s),f!=null&&l.unshift(tl(t,f,d)),f=Eo(t,i),f!=null&&l.push(tl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function aE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p0(t,i,s,l,f){for(var d=i._reactName,S=[];s!==null&&s!==l;){var A=s,z=A.alternate,$=A.stateNode;if(A=A.tag,z!==null&&z===l)break;A!==5&&A!==26&&A!==27||$===null||(z=$,f?($=Eo(s,d),$!=null&&S.unshift(tl(s,$,z))):f||($=Eo(s,d),$!=null&&S.push(tl(s,$,z)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var rE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function m0(t){return(typeof t=="string"?t:""+t).replace(rE,`
`).replace(sE,"")}function _0(t,i){return i=m0(i),m0(t)===i}function Xt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||gn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&gn(t,""+l);break;case"className":et(t,"class",l);break;case"tabIndex":et(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,s,l);break;case"style":rs(t,l,d);break;case"data":if(i!=="object"){et(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Yl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Xt(t,i,"name",f.name,f,null),Xt(t,i,"formEncType",f.formEncType,f,null),Xt(t,i,"formMethod",f.formMethod,f,null),Xt(t,i,"formTarget",f.formTarget,f,null)):(Xt(t,i,"encType",f.encType,f,null),Xt(t,i,"method",f.method,f,null),Xt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Yl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=oa);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Yl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":St("beforetoggle",t),St("toggle",t),qe(t,"popover",l);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=OS.get(s)||s,qe(t,s,l))}}function Ph(t,i,s,l,f,d){switch(s){case"style":rs(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?gn(t,l):(typeof l=="number"||typeof l=="bigint")&&gn(t,""+l);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"onClick":l!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[An]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):qe(t,s,l)}}}function Pn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,d,S,s,null)}}f&&Xt(t,i,"srcSet",s.srcSet,s,null),l&&Xt(t,i,"src",s.src,s,null);return;case"input":St("invalid",t);var A=d=S=f=null,z=null,$=null;for(l in s)if(s.hasOwnProperty(l)){var de=s[l];if(de!=null)switch(l){case"name":f=de;break;case"type":S=de;break;case"checked":z=de;break;case"defaultChecked":$=de;break;case"value":d=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Xt(t,i,l,de,s,null)}}sa(t,d,A,z,$,S,f,!1);return;case"select":St("invalid",t),l=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Xt(t,i,f,A,s,null)}i=d,s=S,t.multiple=!!l,i!=null?pi(t,!!l,i,!1):s!=null&&pi(t,!!l,s,!0);return;case"textarea":St("invalid",t),d=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Xt(t,i,S,A,s,null)}wn(t,l,f,d);return;case"option":for(z in s)s.hasOwnProperty(z)&&(l=s[z],l!=null)&&(z==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Xt(t,i,z,l,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(l=0;l<el.length;l++)St(el[l],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(l=s[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,$,l,s,null)}return;default:if(Li(i)){for(de in s)s.hasOwnProperty(de)&&(l=s[de],l!==void 0&&Ph(t,i,de,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Xt(t,i,A,l,s,null))}function oE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,A=null,z=null,$=null,de=null;for(ue in s){var Se=s[ue];if(s.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":z=Se;default:l.hasOwnProperty(ue)||Xt(t,i,ue,null,l,Se)}}for(var ne in l){var ue=l[ne];if(Se=s[ne],l.hasOwnProperty(ne)&&(ue!=null||Se!=null))switch(ne){case"type":d=ue;break;case"name":f=ue;break;case"checked":$=ue;break;case"defaultChecked":de=ue;break;case"value":S=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:ue!==Se&&Xt(t,i,ne,ue,l,Se)}}Rn(t,S,A,z,$,de,d,f);return;case"select":ue=S=A=ne=null;for(d in s)if(z=s[d],s.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ue=z;default:l.hasOwnProperty(d)||Xt(t,i,d,null,l,z)}for(f in l)if(d=l[f],z=s[f],l.hasOwnProperty(f)&&(d!=null||z!=null))switch(f){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==z&&Xt(t,i,f,d,l,z)}i=A,s=S,l=ue,ne!=null?pi(t,!!s,ne,!1):!!l!=!!s&&(i!=null?pi(t,!!s,i,!0):pi(t,!!s,s?[]:"",!1));return;case"textarea":ue=ne=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,i,A,null,l,f)}for(S in l)if(f=l[S],d=s[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":ne=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Xt(t,i,S,f,l,d)}zt(t,ne,ue);return;case"option":for(var Xe in s)ne=s[Xe],s.hasOwnProperty(Xe)&&ne!=null&&!l.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:Xt(t,i,Xe,null,l,ne));for(z in l)ne=l[z],ue=s[z],l.hasOwnProperty(z)&&ne!==ue&&(ne!=null||ue!=null)&&(z==="selected"?t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":Xt(t,i,z,ne,l,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)ne=s[at],s.hasOwnProperty(at)&&ne!=null&&!l.hasOwnProperty(at)&&Xt(t,i,at,null,l,ne);for($ in l)if(ne=l[$],ue=s[$],l.hasOwnProperty($)&&ne!==ue&&(ne!=null||ue!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Xt(t,i,$,ne,l,ue)}return;default:if(Li(i)){for(var Wt in s)ne=s[Wt],s.hasOwnProperty(Wt)&&ne!==void 0&&!l.hasOwnProperty(Wt)&&Ph(t,i,Wt,void 0,l,ne);for(de in l)ne=l[de],ue=s[de],!l.hasOwnProperty(de)||ne===ue||ne===void 0&&ue===void 0||Ph(t,i,de,ne,l,ue);return}}for(var j in s)ne=s[j],s.hasOwnProperty(j)&&ne!=null&&!l.hasOwnProperty(j)&&Xt(t,i,j,null,l,ne);for(Se in l)ne=l[Se],ue=s[Se],!l.hasOwnProperty(Se)||ne===ue||ne==null&&ue==null||Xt(t,i,Se,ne,l,ue)}function g0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,S=f.initiatorType,A=f.duration;if(d&&A&&g0(S)){for(S=0,A=f.responseEnd,l+=1;l<s.length;l++){var z=s[l],$=z.startTime;if($>A)break;var de=z.transferSize,Se=z.initiatorType;de&&g0(Se)&&(z=z.responseEnd,S+=de*(z<A?1:(A-$)/(z-$)))}if(--l,i+=8*(d+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ih=null,Fh=null;function Gu(t){return t.nodeType===9?t:t.ownerDocument}function v0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zh=null;function uE(){var t=window.event;return t&&t.type==="popstate"?t===zh?!1:(zh=t,!0):(zh=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(t){return y0.resolve(null).then(t).catch(hE)}:S0;function hE(t){setTimeout(function(){throw t})}function ir(t){return t==="head"}function E0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Is(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")nl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,nl(s);for(var d=s.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[Er]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&nl(t.ownerDocument.body);s=f}while(s);Is(i)}function b0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Hh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hh(s),yo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function dE(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Er])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function pE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yi(t.nextSibling),t===null))return null;return t}function M0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yi(t.nextSibling),t===null))return null;return t}function Gh(t){return t.data==="$?"||t.data==="$~"}function Vh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var kh=null;function T0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return yi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function A0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function R0(t,i,s){switch(i=Gu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function nl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);yo(t)}var Ei=new Map,C0=new Set;function Vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ba=H.d;H.d={f:_E,r:gE,D:vE,C:xE,L:SE,m:yE,X:bE,S:EE,M:ME};function _E(){var t=ba.f(),i=Nu();return t||i}function gE(t){var i=Ba(t);i!==null&&i.tag===5&&i.type==="form"?W_(i):ba.r(t)}var Ns=typeof document>"u"?null:document;function w0(t,i,s){var l=Ns;if(l&&typeof i=="string"&&i){var f=ot(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),C0.has(f)||(C0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Pn(i,"link",t),R(i),l.head.appendChild(i)))}}function vE(t){ba.D(t),w0("dns-prefetch",t,null)}function xE(t,i){ba.C(t,i),w0("preconnect",t,i)}function SE(t,i,s){ba.L(t,i,s);var l=Ns;if(l&&t&&i){var f='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ot(s.imageSizes)+'"]')):f+='[href="'+ot(t)+'"]';var d=f;switch(i){case"style":d=Os(t);break;case"script":d=Ps(t)}Ei.has(d)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ei.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(il(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Pn(i,"link",t),R(i),l.head.appendChild(i)))}}function yE(t,i){ba.m(t,i);var s=Ns;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ps(t)}if(!Ei.has(d)&&(t=_({rel:"modulepreload",href:t},i),Ei.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(al(d)))return}l=s.createElement("link"),Pn(l,"link",t),R(l),s.head.appendChild(l)}}}function EE(t,i,s){ba.S(t,i,s);var l=Ns;if(l&&t){var f=za(l).hoistableStyles,d=Os(t);i=i||"default";var S=f.get(d);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(il(d)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ei.get(d))&&Xh(t,s);var z=S=l.createElement("link");R(z),Pn(z,"link",t),z._p=new Promise(function($,de){z.onload=$,z.onerror=de}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ku(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(d,S)}}}function bE(t,i){ba.X(t,i);var s=Ns;if(s&&t){var l=za(s).hoistableScripts,f=Ps(t),d=l.get(f);d||(d=s.querySelector(al(f)),d||(t=_({src:t,async:!0},i),(i=Ei.get(f))&&Wh(t,i),d=s.createElement("script"),R(d),Pn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function ME(t,i){ba.M(t,i);var s=Ns;if(s&&t){var l=za(s).hoistableScripts,f=Ps(t),d=l.get(f);d||(d=s.querySelector(al(f)),d||(t=_({src:t,async:!0,type:"module"},i),(i=Ei.get(f))&&Wh(t,i),d=s.createElement("script"),R(d),Pn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function D0(t,i,s,l){var f=(f=ie.current)?Vu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Os(s.href),s=za(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Os(s.href);var d=za(f).hoistableStyles,S=d.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=f.querySelector(il(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),d||TE(f,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ps(s),s=za(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Os(t){return'href="'+ot(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function L0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function TE(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pn(i,"link",s),R(i),t.head.appendChild(i))}function Ps(t){return'[src="'+ot(t)+'"]'}function al(t){return"script[async]"+t}function U0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return i.instance=l,R(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),R(l),Pn(l,"style",f),ku(l,s.precedence,t),i.instance=l;case"stylesheet":f=Os(s.href);var d=t.querySelector(il(f));if(d)return i.state.loading|=4,i.instance=d,R(d),d;l=L0(s),(f=Ei.get(f))&&Xh(l,f),d=(t.ownerDocument||t).createElement("link"),R(d);var S=d;return S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Pn(d,"link",l),i.state.loading|=4,ku(d,s.precedence,t),i.instance=d;case"script":return d=Ps(s.src),(f=t.querySelector(al(d)))?(i.instance=f,R(f),f):(l=s,(f=Ei.get(d))&&(l=_({},s),Wh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),R(f),Pn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ku(l,s.precedence,t));return i.instance}function ku(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)d=A;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Xu=null;function N0(t,i,s){if(Xu===null){var l=new Map,f=Xu=new Map;f.set(s,l)}else f=Xu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Er]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var A=l.get(S);A?A.push(d):l.set(S,[d])}}return l}function O0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function AE(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function P0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function RE(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Os(l.href),d=i.querySelector(il(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Wu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,R(d);return}d=i.ownerDocument||i,l=L0(l),(f=Ei.get(f))&&Xh(l,f),d=d.createElement("link"),R(d);var S=d;S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Pn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Wu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Yh=0;function CE(t,i){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Yh===0&&(Yh=62500*lE());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Yh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yu=null;function qu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yu=new Map,i.forEach(wE,t),Yu=null,Wu.call(t))}function wE(t,i){if(!(i.state.loading&4)){var s=Yu.get(t);if(s)var l=s.get(null);else{s=new Map,Yu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,f),s.set(S,f),this.count++,l=Wu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var rl={$$typeof:w,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function DE(t,i,s,l,f,d,S,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function I0(t,i,s,l,f,d,S,A,z,$,de,Se){return t=new DE(t,i,s,S,z,$,de,Se,A),i=1,d===!0&&(i|=24),d=ii(3,null,null,i),t.current=d,d.stateNode=t,i=Tf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},wf(d),t}function F0(t){return t?(t=hs,t):hs}function B0(t,i,s,l,f,d){f=F0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ya(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=qa(t,l,i),s!==null&&(Qn(s,t,i),Fo(s,t,i))}function z0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qh(t,i){z0(t,i),(t=t.alternate)&&z0(t,i)}function H0(t){if(t.tag===13||t.tag===31){var i=Rr(t,67108864);i!==null&&Qn(i,t,67108864),qh(t,67108864)}}function G0(t){if(t.tag===13||t.tag===31){var i=li();i=vo(i);var s=Rr(t,i);s!==null&&Qn(s,t,i),qh(t,i)}}var ju=!0;function LE(t,i,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=2,jh(t,i,s,l)}finally{H.p=d,F.T=f}}function UE(t,i,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=8,jh(t,i,s,l)}finally{H.p=d,F.T=f}}function jh(t,i,s,l){if(ju){var f=Zh(l);if(f===null)Oh(t,i,l,Zu,s),k0(t,l);else if(OE(f,t,i,s,l))l.stopPropagation();else if(k0(t,l),i&4&&-1<NE.indexOf(t)){for(;f!==null;){var d=Ba(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Me(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var z=1<<31-Fe(S);A.entanglements[1]|=z,S&=~z}Zi(d),(Pt&6)===0&&(Lu=M()+500,$o(0))}}break;case 31:case 13:A=Rr(d,2),A!==null&&Qn(A,d,2),Nu(),qh(d,2)}if(d=Zh(l),d===null&&Oh(t,i,l,Zu,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Oh(t,i,l,null,s)}}function Zh(t){return t=Kc(t),Kh(t)}var Zu=null;function Kh(t){if(Zu=null,t=Fa(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Zu=t,null}function V0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case me:return 2;case be:return 8;case ce:case Qe:return 32;case De:return 268435456;default:return 32}default:return 32}}var Qh=!1,ar=null,rr=null,sr=null,sl=new Map,ol=new Map,or=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k0(t,i){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Ba(i),i!==null&&H0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function OE(t,i,s,l,f){switch(i){case"focusin":return ar=ll(ar,t,i,s,l,f),!0;case"dragenter":return rr=ll(rr,t,i,s,l,f),!0;case"mouseover":return sr=ll(sr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return sl.set(d,ll(sl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,ol.set(d,ll(ol.get(d)||null,t,i,s,l,f)),!0}return!1}function X0(t){var i=Fa(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,Wi(t.priority,function(){G0(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Wi(t.priority,function(){G0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Zh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Zc=l,s.target.dispatchEvent(l),Zc=null}else return i=Ba(s),i!==null&&H0(i),t.blockedOn=s,!1;i.shift()}return!0}function W0(t,i,s){Ku(t)&&s.delete(i)}function PE(){Qh=!1,ar!==null&&Ku(ar)&&(ar=null),rr!==null&&Ku(rr)&&(rr=null),sr!==null&&Ku(sr)&&(sr=null),sl.forEach(W0),ol.forEach(W0)}function Qu(t,i){t.blockedOn===i&&(t.blockedOn=null,Qh||(Qh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PE)))}var Ju=null;function Y0(t){Ju!==t&&(Ju=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ju===t&&(Ju=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Kh(l||s)===null)continue;break}var d=Ba(s);d!==null&&(t.splice(i,3),i-=3,Zf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Is(t){function i(z){return Qu(z,t)}ar!==null&&Qu(ar,t),rr!==null&&Qu(rr,t),sr!==null&&Qu(sr,t),sl.forEach(i),ol.forEach(i);for(var s=0;s<or.length;s++){var l=or[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<or.length&&(s=or[0],s.blockedOn===null);)X0(s),s.blockedOn===null&&or.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],S=f[An]||null;if(typeof d=="function")S||Y0(s);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[An]||null)A=S.formAction;else if(Kh(f)!==null)continue}else A=S.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Y0(s)}}}function q0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Jh(t){this._internalRoot=t}$u.prototype.render=Jh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=li();B0(s,l,t,i,null,null)},$u.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;B0(t.current,2,null,t,null,null),Nu(),i[Di]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var i=xo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<or.length&&i!==0&&i<or[s].priority;s++);or.splice(s,0,t),s===0&&X0(t)}};var j0=e.version;if(j0!=="19.2.3")throw Error(a(527,j0,"19.2.3"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var IE={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Te=ec.inject(IE),Ae=ec}catch{}}return cl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=tg,d=ng,S=ig;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=I0(t,1,!1,null,null,s,l,null,f,d,S,q0),t[Di]=i.current,Nh(t),new Jh(i)},cl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",d=tg,S=ng,A=ig,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(z=s.formState)),i=I0(t,1,!0,i,s??null,l,f,z,d,S,A,q0),i.context=F0(null),s=i.current,l=li(),l=vo(l),f=Ya(l),f.callback=null,qa(s,f,l),s=l,i.current.lanes=s,Fn(i,s),Zi(i),t[Di]=i.current,Nh(t),new $u(i)},cl.version="19.2.3",cl}var av;function qE(){if(av)return td.exports;av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=YE(),td.exports}var jE=qE();var rv="popstate";function ZE(r={}){function e(a,o){let{pathname:u,search:c,hash:h}=a.location;return Vd("",{pathname:u,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Rl(o)}return QE(e,n,null,r)}function nn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Gi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KE(){return Math.random().toString(36).substring(2,10)}function sv(r,e){return{usr:r.state,key:r.key,idx:e}}function Vd(r,e,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ho(e):e,state:n,key:e&&e.key||a||KE()}}function Rl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function ho(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function QE(r,e,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,h="POP",p=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function _(){h="POP";let y=g(),x=y==null?null:y-m;m=y,p&&p({action:h,location:T.location,delta:x})}function v(y,x){h="PUSH";let D=Vd(T.location,y,x);m=g()+1;let w=sv(D,m),N=T.createHref(D);try{c.pushState(w,"",N)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(N)}u&&p&&p({action:h,location:T.location,delta:1})}function E(y,x){h="REPLACE";let D=Vd(T.location,y,x);m=g();let w=sv(D,m),N=T.createHref(D);c.replaceState(w,"",N),u&&p&&p({action:h,location:T.location,delta:0})}function b(y){return JE(y)}let T={get action(){return h},get location(){return r(o,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(rv,_),p=y,()=>{o.removeEventListener(rv,_),p=null}},createHref(y){return e(o,y)},createURL:b,encodeLocation(y){let x=b(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:E,go(y){return c.go(y)}};return T}function JE(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),nn(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:Rl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Mx(r,e,n="/"){return $E(r,e,n,!1)}function $E(r,e,n,a){let o=typeof e=="string"?ho(e):e,u=Na(o.pathname||"/",n);if(u==null)return null;let c=Tx(r);eb(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=fb(u);h=ub(c[p],m,a)}return h}function Tx(r,e=[],n=[],a="",o=!1){let u=(c,h,p=o,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;nn(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let _=La([a,g.relativePath]),v=n.concat(g);c.children&&c.children.length>0&&(nn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Tx(c.children,e,v,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:ob(_,c.index),routesMeta:v})};return r.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))u(c,h);else for(let p of Ax(c.path))u(c,h,!0,p)}),e}function Ax(r){let e=r.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=Ax(a.join("/")),h=[];return h.push(...c.map(p=>p===""?u:[u,p].join("/"))),o&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function eb(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:lb(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var tb=/^:[\w-]+$/,nb=3,ib=2,ab=1,rb=10,sb=-2,ov=r=>r==="*";function ob(r,e){let n=r.split("/"),a=n.length;return n.some(ov)&&(a+=sb),e&&(a+=ib),n.filter(o=>!ov(o)).reduce((o,u)=>o+(tb.test(u)?nb:u===""?ab:rb),a)}function lb(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function ub(r,e,n=!1){let{routesMeta:a}=r,o={},u="/",c=[];for(let h=0;h<a.length;++h){let p=a[h],m=h===a.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=Fc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!_&&m&&n&&!a[a.length-1].route.index&&(_=Fc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:La([u,_.pathname]),pathnameBase:mb(La([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=La([u,_.pathnameBase]))}return c}function Fc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=cb(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:_},v)=>{if(g==="*"){let b=h[v]||"";c=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const E=h[v];return _&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:r}}function cb(r,e=!1,n=!0){Gi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function fb(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Na(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}var Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hb=r=>Rx.test(r);function db(r,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?ho(r):r,u;if(n)if(hb(n))u=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Gi(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?u=lv(n.substring(1),"/"):u=lv(n,e)}else u=e;return{pathname:u,search:_b(a),hash:gb(o)}}function lv(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rd(r,e,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pb(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cx(r){let e=pb(r);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function wx(r,e,n,a=!1){let o;typeof r=="string"?o=ho(r):(o={...r},nn(!o.pathname||!o.pathname.includes("?"),rd("?","pathname","search",o)),nn(!o.pathname||!o.pathname.includes("#"),rd("#","pathname","hash",o)),nn(!o.search||!o.search.includes("#"),rd("#","search","hash",o)));let u=r===""||o.pathname==="",c=u?"/":o.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let p=db(o,h),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var La=r=>r.join("/").replace(/\/\/+/g,"/"),mb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),_b=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,vb=class{constructor(r,e,n,a=!1){this.status=r,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function xb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Sb(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Lx(r,e){let n=r;if(typeof n!="string"||!Rx.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,o=!1;if(Dx)try{let u=new URL(window.location.href),c=n.startsWith("//")?new URL(u.protocol+n):new URL(n),h=Na(c.pathname,e);c.origin===u.origin&&h!=null?n=h+c.search+c.hash:o=!0}catch{Gi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ux=["POST","PUT","PATCH","DELETE"];new Set(Ux);var yb=["GET",...Ux];new Set(yb);var po=ge.createContext(null);po.displayName="DataRouter";var kc=ge.createContext(null);kc.displayName="DataRouterState";var Eb=ge.createContext(!1),Nx=ge.createContext({isTransitioning:!1});Nx.displayName="ViewTransition";var bb=ge.createContext(new Map);bb.displayName="Fetchers";var Mb=ge.createContext(null);Mb.displayName="Await";var Ci=ge.createContext(null);Ci.displayName="Navigation";var Pl=ge.createContext(null);Pl.displayName="Location";var Ia=ge.createContext({outlet:null,matches:[],isDataRoute:!1});Ia.displayName="Route";var qp=ge.createContext(null);qp.displayName="RouteError";var Ox="REACT_ROUTER_ERROR",Tb="REDIRECT",Ab="ROUTE_ERROR_RESPONSE";function Rb(r){if(r.startsWith(`${Ox}:${Tb}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Cb(r){if(r.startsWith(`${Ox}:${Ab}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new vb(e.status,e.statusText,e.data)}catch{}}function wb(r,{relative:e}={}){nn(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ge.useContext(Ci),{hash:o,pathname:u,search:c}=Fl(r,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:La([n,u])),a.createHref({pathname:h,search:c,hash:o})}function Il(){return ge.useContext(Pl)!=null}function Jr(){return nn(Il(),"useLocation() may be used only in the context of a <Router> component."),ge.useContext(Pl).location}var Px="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ix(r){ge.useContext(Ci).static||ge.useLayoutEffect(r)}function Db(){let{isDataRoute:r}=ge.useContext(Ia);return r?kb():Lb()}function Lb(){nn(Il(),"useNavigate() may be used only in the context of a <Router> component.");let r=ge.useContext(po),{basename:e,navigator:n}=ge.useContext(Ci),{matches:a}=ge.useContext(Ia),{pathname:o}=Jr(),u=JSON.stringify(Cx(a)),c=ge.useRef(!1);return Ix(()=>{c.current=!0}),ge.useCallback((p,m={})=>{if(Gi(c.current,Px),!c.current)return;if(typeof p=="number"){n.go(p);return}let g=wx(p,JSON.parse(u),o,m.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:La([e,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[e,n,u,o,r])}ge.createContext(null);function Fl(r,{relative:e}={}){let{matches:n}=ge.useContext(Ia),{pathname:a}=Jr(),o=JSON.stringify(Cx(n));return ge.useMemo(()=>wx(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function Ub(r,e){return Fx(r,e)}function Fx(r,e,n,a,o){nn(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ge.useContext(Ci),{matches:c}=ge.useContext(Ia),h=c[c.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let D=_&&_.path||"";zx(m,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Jr(),E;if(e){let D=typeof e=="string"?ho(e):e;nn(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),E=D}else E=v;let b=E.pathname||"/",T=b;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=Mx(r,{pathname:T});Gi(_||y!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Gi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Fb(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:La([g,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:La([g,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),c,n,a,o);return e&&x?ge.createElement(Pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},x):x}function Nb(){let r=Vb(),e=xb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ge.createElement(ge.Fragment,null,ge.createElement("p",null,"💿 Hey developer 👋"),ge.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ge.createElement("code",{style:u},"ErrorBoundary")," or"," ",ge.createElement("code",{style:u},"errorElement")," prop on your route.")),ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),n?ge.createElement("pre",{style:o},n):null,c)}var Ob=ge.createElement(Nb,null),Bx=class extends ge.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=Cb(r.digest);n&&(r=n)}let e=r!==void 0?ge.createElement(Ia.Provider,{value:this.props.routeContext},ge.createElement(qp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ge.createElement(Pb,{error:r},e):e}};Bx.contextType=Eb;var sd=new WeakMap;function Pb({children:r,error:e}){let{basename:n}=ge.useContext(Ci);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=Rb(e.digest);if(a){let o=sd.get(e);if(o)throw o;let u=Lx(a.location,n);if(Dx&&!sd.get(e))if(u.isExternal||a.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw sd.set(e,c),c}return ge.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function Ib({routeContext:r,match:e,children:n}){let a=ge.useContext(po);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),ge.createElement(Ia.Provider,{value:r},n)}function Fb(r,e=[],n=null,a=null,o=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,c=n?.errors;if(c!=null){let g=u.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);nn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let h=!1,p=-1;if(n)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:v,errors:E}=n,b=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!E||E[_.route.id]===void 0);if(_.route.lazy||b){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let m=n&&a?(g,_)=>{a(g,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:Sb(n.matches),errorInfo:_})}:void 0;return u.reduceRight((g,_,v)=>{let E,b=!1,T=null,y=null;n&&(E=c&&_.route.id?c[_.route.id]:void 0,T=_.route.errorElement||Ob,h&&(p<0&&v===0?(zx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):p===v&&(b=!0,y=_.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,v+1)),D=()=>{let w;return E?w=T:b?w=y:_.route.Component?w=ge.createElement(_.route.Component,null):_.route.element?w=_.route.element:w=g,ge.createElement(Ib,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:n!=null},children:w})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?ge.createElement(Bx,{location:n.location,revalidation:n.revalidation,component:T,error:E,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:m}):D()},null)}function jp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(r){let e=ge.useContext(po);return nn(e,jp(r)),e}function zb(r){let e=ge.useContext(kc);return nn(e,jp(r)),e}function Hb(r){let e=ge.useContext(Ia);return nn(e,jp(r)),e}function Zp(r){let e=Hb(r),n=e.matches[e.matches.length-1];return nn(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function Gb(){return Zp("useRouteId")}function Vb(){let r=ge.useContext(qp),e=zb("useRouteError"),n=Zp("useRouteError");return r!==void 0?r:e.errors?.[n]}function kb(){let{router:r}=Bb("useNavigate"),e=Zp("useNavigate"),n=ge.useRef(!1);return Ix(()=>{n.current=!0}),ge.useCallback(async(o,u={})=>{Gi(n.current,Px),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var uv={};function zx(r,e,n){!e&&!uv[r]&&(uv[r]=!0,Gi(!1,n))}ge.memo(Xb);function Xb({routes:r,future:e,state:n,onError:a}){return Fx(r,void 0,n,a,e)}function kd(r){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wb({basename:r="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:u=!1,unstable_useTransitions:c}){nn(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=ge.useMemo(()=>({basename:h,navigator:o,static:u,unstable_useTransitions:c,future:{}}),[h,o,u,c]);typeof n=="string"&&(n=ho(n));let{pathname:m="/",search:g="",hash:_="",state:v=null,key:E="default"}=n,b=ge.useMemo(()=>{let T=Na(m,h);return T==null?null:{location:{pathname:T,search:g,hash:_,state:v,key:E},navigationType:a}},[h,m,g,_,v,E,a]);return Gi(b!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ge.createElement(Ci.Provider,{value:p},ge.createElement(Pl.Provider,{children:e,value:b}))}function Yb({children:r,location:e}){return Ub(Xd(r),e)}function Xd(r,e=[]){let n=[];return ge.Children.forEach(r,(a,o)=>{if(!ge.isValidElement(a))return;let u=[...e,o];if(a.type===ge.Fragment){n.push.apply(n,Xd(a.props.children,u));return}nn(a.type===kd,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Xd(a.props.children,u)),n.push(c)}),n}var Ac="get",Rc="application/x-www-form-urlencoded";function Xc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function qb(r){return Xc(r)&&r.tagName.toLowerCase()==="button"}function jb(r){return Xc(r)&&r.tagName.toLowerCase()==="form"}function Zb(r){return Xc(r)&&r.tagName.toLowerCase()==="input"}function Kb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Qb(r,e){return r.button===0&&(!e||e==="_self")&&!Kb(r)}var tc=null;function Jb(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var $b=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function od(r){return r!=null&&!$b.has(r)?(Gi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rc}"`),null):r}function eM(r,e){let n,a,o,u,c;if(jb(r)){let h=r.getAttribute("action");a=h?Na(h,e):null,n=r.getAttribute("method")||Ac,o=od(r.getAttribute("enctype"))||Rc,u=new FormData(r)}else if(qb(r)||Zb(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(a=p?Na(p,e):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||Ac,o=od(r.getAttribute("formenctype"))||od(h.getAttribute("enctype"))||Rc,u=new FormData(h,r),!Jb()){let{name:m,type:g,value:_}=r;if(g==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,_)}}else{if(Xc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ac,a=null,o=Rc,c=r}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tM(r,e,n){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${n}`:e&&Na(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function nM(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function aM(r,e,n){let a=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await nM(u,n);return c.links?c.links():[]}return[]}));return lM(a.flat(1).filter(iM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function cv(r,e,n,a,o,u){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>n[m].pathname!==p.pathname||n[m].route.path?.endsWith("*")&&n[m].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):u==="data"?e.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function rM(r,e,{includeHydrateFallback:n}={}){return sM(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function sM(r){return[...new Set(r)]}function oM(r){let e={},n=Object.keys(r).sort();for(let a of n)e[a]=r[a];return e}function lM(r,e){let n=new Set;return new Set(e),r.reduce((a,o)=>{let u=JSON.stringify(oM(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function Hx(){let r=ge.useContext(po);return Kp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function uM(){let r=ge.useContext(kc);return Kp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qp=ge.createContext(void 0);Qp.displayName="FrameworkContext";function Gx(){let r=ge.useContext(Qp);return Kp(r,"You must render this element inside a <HydratedRouter> element"),r}function cM(r,e){let n=ge.useContext(Qp),[a,o]=ge.useState(!1),[u,c]=ge.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,v=ge.useRef(null);ge.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=x=>{x.forEach(D=>{c(D.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),ge.useEffect(()=>{if(a){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[a]);let E=()=>{o(!0)},b=()=>{o(!1),c(!1)};return n?r!=="intent"?[u,v,{}]:[u,v,{onFocus:fl(h,E),onBlur:fl(p,b),onMouseEnter:fl(m,E),onMouseLeave:fl(g,b),onTouchStart:fl(_,E)}]:[!1,v,{}]}function fl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function fM({page:r,...e}){let{router:n}=Hx(),a=ge.useMemo(()=>Mx(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?ge.createElement(dM,{page:r,matches:a,...e}):null}function hM(r){let{manifest:e,routeModules:n}=Gx(),[a,o]=ge.useState([]);return ge.useEffect(()=>{let u=!1;return aM(r,e,n).then(c=>{u||o(c)}),()=>{u=!0}},[r,e,n]),a}function dM({page:r,matches:e,...n}){let a=Jr(),{manifest:o,routeModules:u}=Gx(),{basename:c}=Hx(),{loaderData:h,matches:p}=uM(),m=ge.useMemo(()=>cv(r,e,p,o,a,"data"),[r,e,p,o,a]),g=ge.useMemo(()=>cv(r,e,p,o,a,"assets"),[r,e,p,o,a]),_=ge.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let b=new Set,T=!1;if(e.forEach(x=>{let D=o.routes[x.route.id];!D||!D.hasLoader||(!m.some(w=>w.route.id===x.route.id)&&x.route.id in h&&u[x.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:b.add(x.route.id))}),b.size===0)return[];let y=tM(r,c,"data");return T&&b.size>0&&y.searchParams.set("_routes",e.filter(x=>b.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[c,h,a,o,m,e,r,u]),v=ge.useMemo(()=>rM(g,o),[g,o]),E=hM(g);return ge.createElement(ge.Fragment,null,_.map(b=>ge.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),v.map(b=>ge.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),E.map(({key:b,link:T})=>ge.createElement("link",{key:b,nonce:n.nonce,...T})))}function pM(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var mM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mM&&(window.__reactRouterVersion="7.11.0")}catch{}function _M({basename:r,children:e,unstable_useTransitions:n,window:a}){let o=ge.useRef();o.current==null&&(o.current=ZE({window:a,v5Compat:!0}));let u=o.current,[c,h]=ge.useState({action:u.action,location:u.location}),p=ge.useCallback(m=>{n===!1?h(m):ge.startTransition(()=>h(m))},[n]);return ge.useLayoutEffect(()=>u.listen(p),[u,p]),ge.createElement(Wb,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:u,unstable_useTransitions:n})}var Vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ml=ge.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...E},b){let{basename:T,unstable_useTransitions:y}=ge.useContext(Ci),x=typeof m=="string"&&Vx.test(m),D=Lx(m,T);m=D.to;let w=wb(m,{relative:o}),[N,P,B]=cM(a,E),I=SM(m,{replace:c,state:h,target:p,preventScrollReset:g,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function q(L){e&&e(L),L.defaultPrevented||I(L)}let C=ge.createElement("a",{...E,...B,href:D.absoluteURL||w,onClick:D.isExternal||u?e:q,ref:pM(b,P),target:p,"data-discover":!x&&n==="render"?"true":void 0});return N&&!x?ge.createElement(ge.Fragment,null,C,ge.createElement(fM,{page:w})):C});Ml.displayName="Link";var gM=ge.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:h,children:p,...m},g){let _=Fl(c,{relative:m.relative}),v=Jr(),E=ge.useContext(kc),{navigator:b,basename:T}=ge.useContext(Ci),y=E!=null&&TM(_)&&h===!0,x=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,D=v.pathname,w=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(D=D.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&T&&(w=Na(w,T)||w);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let P=D===x||!o&&D.startsWith(x)&&D.charAt(N)==="/",B=w!=null&&(w===x||!o&&w.startsWith(x)&&w.charAt(x.length)==="/"),I={isActive:P,isPending:B,isTransitioning:y},q=P?e:void 0,C;typeof a=="function"?C=a(I):C=[a,P?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof u=="function"?u(I):u;return ge.createElement(Ml,{...m,"aria-current":q,className:C,ref:g,style:L,to:c,viewTransition:h},typeof p=="function"?p(I):p)});gM.displayName="NavLink";var vM=ge.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:u,method:c=Ac,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...E},b)=>{let{unstable_useTransitions:T}=ge.useContext(Ci),y=bM(),x=MM(h,{relative:m}),D=c.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&Vx.test(h),N=P=>{if(p&&p(P),P.defaultPrevented)return;P.preventDefault();let B=P.nativeEvent.submitter,I=B?.getAttribute("formmethod")||c,q=()=>y(B||P.currentTarget,{fetcherKey:e,method:I,navigate:n,replace:o,state:u,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});T&&n!==!1?ge.startTransition(()=>q()):q()};return ge.createElement("form",{ref:b,method:D,action:x,onSubmit:a?p:N,...E,"data-discover":!w&&r==="render"?"true":void 0})});vM.displayName="Form";function xM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kx(r){let e=ge.useContext(po);return nn(e,xM(r)),e}function SM(r,{target:e,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let m=Db(),g=Jr(),_=Fl(r,{relative:u});return ge.useCallback(v=>{if(Qb(v,e)){v.preventDefault();let E=n!==void 0?n:Rl(g)===Rl(_),b=()=>m(r,{replace:E,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h});p?ge.startTransition(()=>b()):b()}},[g,m,_,n,a,e,r,o,u,c,h,p])}var yM=0,EM=()=>`__${String(++yM)}__`;function bM(){let{router:r}=kx("useSubmit"),{basename:e}=ge.useContext(Ci),n=Gb(),a=r.fetch,o=r.navigate;return ge.useCallback(async(u,c={})=>{let{action:h,method:p,encType:m,formData:g,body:_}=eM(u,e);if(c.navigate===!1){let v=c.fetcherKey||EM();await a(v,n,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,e,n])}function MM(r,{relative:e}={}){let{basename:n}=ge.useContext(Ci),a=ge.useContext(Ia);nn(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...Fl(r||".",{relative:e})},c=Jr();if(r==null){u.search=c.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:La([n,u.pathname])),Rl(u)}function TM(r,{relative:e}={}){let n=ge.useContext(Nx);nn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=kx("useViewTransitionState"),o=Fl(r,{relative:e});if(!n.isTransitioning)return!1;let u=Na(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=Na(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Fc(o.pathname,c)!=null||Fc(o.pathname,u)!=null}const AM=()=>tt.jsx("nav",{className:"navbar",children:tt.jsxs("div",{className:"nav-container",children:[tt.jsx(Ml,{to:"/",className:"nav-logo",children:"web"}),tt.jsxs("ul",{className:"nav-menu",children:[tt.jsx("li",{className:"nav-item",children:tt.jsx(Ml,{to:"/",className:"nav-link",children:"Home"})}),tt.jsx("li",{className:"nav-item",children:tt.jsx(Ml,{to:"/about",className:"nav-link",children:"About"})})]})]})});const Jp="182",no={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RM=0,fv=1,CM=2,Cc=1,wM=2,yl=3,vr=0,ei=1,wa=2,ta=0,io=1,Wd=2,hv=3,dv=4,DM=5,Yr=100,LM=101,UM=102,NM=103,OM=104,PM=200,IM=201,FM=202,BM=203,Yd=204,qd=205,zM=206,HM=207,GM=208,VM=209,kM=210,XM=211,WM=212,YM=213,qM=214,jd=0,Zd=1,Kd=2,ro=3,Qd=4,Jd=5,$d=6,ep=7,Xx=0,jM=1,ZM=2,na=0,Wx=1,Yx=2,qx=3,jx=4,Zx=5,Kx=6,Qx=7,Jx=300,Kr=301,so=302,tp=303,np=304,Wc=306,ip=1e3,Da=1001,ap=1002,Sn=1003,KM=1004,nc=1005,Gn=1006,ld=1007,jr=1008,Ai=1009,$x=1010,eS=1011,Cl=1012,$p=1013,aa=1014,$i=1015,fi=1016,em=1017,tm=1018,wl=1020,tS=35902,nS=35899,iS=1021,aS=1022,zi=1023,Oa=1026,Zr=1027,rS=1028,nm=1029,oo=1030,im=1031,am=1033,wc=33776,Dc=33777,Lc=33778,Uc=33779,rp=35840,sp=35841,op=35842,lp=35843,up=36196,cp=37492,fp=37496,hp=37488,dp=37489,pp=37490,mp=37491,_p=37808,gp=37809,vp=37810,xp=37811,Sp=37812,yp=37813,Ep=37814,bp=37815,Mp=37816,Tp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Lp=36494,Up=36495,Np=36283,Op=36284,Pp=36285,Ip=36286,QM=3200,JM=0,$M=1,_r="",Mi="srgb",lo="srgb-linear",Bc="linear",Vt="srgb",Fs=7680,pv=519,eT=512,tT=513,nT=514,rm=515,iT=516,aT=517,sm=518,rT=519,mv=35044,_v="300 es",ea=2e3,zc=2001;function sS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sT(){const r=Dl("canvas");return r.style.display="block",r}const gv={};function vv(...r){const e="THREE."+r.shift();console.log(e,...r)}function lt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Lt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Ll(...r){const e=r.join(" ");e in gv||(gv[e]=!0,lt(...r))}function oT(r,e,n){return new Promise(function(a,o){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Fp=180/Math.PI;function Bl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]).toLowerCase()}function yt(r,e,n){return Math.max(e,Math.min(n,r))}function lT(r,e){return(r%e+e)%e}function ud(r,e,n){return(1-n)*r+n*e}function hl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uT={DEG2RAD:Nc};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*a-c*o+e.x,this.y=u*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qr{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,u,c,h){let p=a[o+0],m=a[o+1],g=a[o+2],_=a[o+3],v=u[c+0],E=u[c+1],b=u[c+2],T=u[c+3];if(h<=0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(h>=1){e[n+0]=v,e[n+1]=E,e[n+2]=b,e[n+3]=T;return}if(_!==T||p!==v||m!==E||g!==b){let y=p*v+m*E+g*b+_*T;y<0&&(v=-v,E=-E,b=-b,T=-T,y=-y);let x=1-h;if(y<.9995){const D=Math.acos(y),w=Math.sin(D);x=Math.sin(x*D)/w,h=Math.sin(h*D)/w,p=p*x+v*h,m=m*x+E*h,g=g*x+b*h,_=_*x+T*h}else{p=p*x+v*h,m=m*x+E*h,g=g*x+b*h,_=_*x+T*h;const D=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=D,m*=D,g*=D,_*=D}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,u,c){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],_=u[c],v=u[c+1],E=u[c+2],b=u[c+3];return e[n]=h*b+g*_+p*E-m*v,e[n+1]=p*b+g*v+m*_-h*E,e[n+2]=m*b+g*E+h*v-p*_,e[n+3]=g*b-h*_-p*v-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),_=h(u/2),v=p(a/2),E=p(o/2),b=p(u/2);switch(c){case"XYZ":this._x=v*g*_+m*E*b,this._y=m*E*_-v*g*b,this._z=m*g*b+v*E*_,this._w=m*g*_-v*E*b;break;case"YXZ":this._x=v*g*_+m*E*b,this._y=m*E*_-v*g*b,this._z=m*g*b-v*E*_,this._w=m*g*_+v*E*b;break;case"ZXY":this._x=v*g*_-m*E*b,this._y=m*E*_+v*g*b,this._z=m*g*b+v*E*_,this._w=m*g*_-v*E*b;break;case"ZYX":this._x=v*g*_-m*E*b,this._y=m*E*_+v*g*b,this._z=m*g*b-v*E*_,this._w=m*g*_+v*E*b;break;case"YZX":this._x=v*g*_+m*E*b,this._y=m*E*_+v*g*b,this._z=m*g*b-v*E*_,this._w=m*g*_-v*E*b;break;case"XZY":this._x=v*g*_-m*E*b,this._y=m*E*_-v*g*b,this._z=m*g*b+v*E*_,this._w=m*g*_+v*E*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(g-p)*E,this._y=(u-m)*E,this._z=(c-o)*E}else if(a>h&&a>_){const E=2*Math.sqrt(1+a-h-_);this._w=(g-p)/E,this._x=.25*E,this._y=(o+c)/E,this._z=(u+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-a-_);this._w=(u-m)/E,this._x=(o+c)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+_-a-h);this._w=(c-o)/E,this._x=(u+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,u=e._z,c=e._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+c*h+o*m-u*p,this._y=o*g+c*p+u*h-a*m,this._z=u*g+c*m+a*p-o*h,this._w=c*g-a*h-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,u=-u,c=-c,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,a=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,u=e.x,c=e.y,h=e.z,p=e.w,m=2*(c*o-h*a),g=2*(h*n-u*o),_=2*(u*a-c*n);return this.x=n+p*m+c*_-h*g,this.y=a+p*g+h*m-u*_,this.z=o+p*_+u*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,u=e.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-a*p,this.z=a*h-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new Z,xv=new Qr;class ct{constructor(e,n,a,o,u,c,h,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,h,p,m)}set(e,n,a,o,u,c,h,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=a,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],h=a[3],p=a[6],m=a[1],g=a[4],_=a[7],v=a[2],E=a[5],b=a[8],T=o[0],y=o[3],x=o[6],D=o[1],w=o[4],N=o[7],P=o[2],B=o[5],I=o[8];return u[0]=c*T+h*D+p*P,u[3]=c*y+h*w+p*B,u[6]=c*x+h*N+p*I,u[1]=m*T+g*D+_*P,u[4]=m*y+g*w+_*B,u[7]=m*x+g*N+_*I,u[2]=v*T+E*D+b*P,u[5]=v*y+E*w+b*B,u[8]=v*x+E*N+b*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return n*c*g-n*h*m-a*u*g+a*h*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*c-h*m,v=h*p-g*u,E=m*u-c*p,b=n*_+a*v+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=_*T,e[1]=(o*m-g*a)*T,e[2]=(h*a-o*c)*T,e[3]=v*T,e[4]=(g*n-o*p)*T,e[5]=(o*u-h*n)*T,e[6]=E*T,e[7]=(a*p-m*n)*T,e[8]=(c*n-a*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,u,c,h){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*c+m*h)+c+e,-o*m,o*p,-o*(-m*c+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(fd.makeScale(e,n)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new ct,Sv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cT(){const r={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Vt&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Bc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[lo]:{primaries:e,whitePoint:a,transfer:Bc,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:a,transfer:Vt,toXYZ:Sv,fromXYZ:yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Ct=cT();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bs;class fT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Bs===void 0&&(Bs=Dl("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Bs}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Ua(u[c]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ua(n[a]/255)*255):n[a]=Ua(n[a]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hT=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=Bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(hd(o[c].image)):u.push(hd(o[c]))}else u=hd(o);a.url=u}return n||(e.images[this.uuid]=a),a}}function hd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let dT=0;const dd=new Z;class Vn extends $r{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=Da,o=Da,u=Gn,c=jr,h=zi,p=Ai,m=Vn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=Bl(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Jx;Vn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,a=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,u;const p=e.elements,m=p[0],g=p[4],_=p[8],v=p[1],E=p[5],b=p[9],T=p[2],y=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(b+y)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(m+1)/2,N=(E+1)/2,P=(x+1)/2,B=(g+v)/4,I=(_+T)/4,q=(b+y)/4;return w>N&&w>P?w<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(w),o=B/a,u=I/a):N>P?N<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(N),a=B/o,u=q/o):P<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),a=I/u,o=q/u),this.set(a,o,u,n),this}let D=Math.sqrt((y-b)*(y-b)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(_-T)/D,this.z=(v-g)/D,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pT extends $r{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n);const o={width:e,height:n,depth:a.depth},u=new Vn(o);this.textures=[];const c=a.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new om(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends pT{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class oS extends Vn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mT extends Vn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Pi):Pi.fromBufferAttribute(u,c),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ic.copy(a.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),ac.subVectors(this.max,dl),zs.subVectors(e.a,dl),Hs.subVectors(e.b,dl),Gs.subVectors(e.c,dl),ur.subVectors(Hs,zs),cr.subVectors(Gs,Hs),Hr.subVectors(zs,Gs);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Hr.z,Hr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Hr.z,0,-Hr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Hr.y,Hr.x,0];return!pd(n,zs,Hs,Gs,ac)||(n=[1,0,0,0,1,0,0,0,1],!pd(n,zs,Hs,Gs,ac))?!1:(rc.crossVectors(ur,cr),n=[rc.x,rc.y,rc.z],pd(n,zs,Hs,Gs,ac))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Pi=new Z,ic=new zl,zs=new Z,Hs=new Z,Gs=new Z,ur=new Z,cr=new Z,Hr=new Z,dl=new Z,ac=new Z,rc=new Z,Gr=new Z;function pd(r,e,n,a,o){for(let u=0,c=r.length-3;u<=c;u+=3){Gr.fromArray(r,u);const h=o.x*Math.abs(Gr.x)+o.y*Math.abs(Gr.y)+o.z*Math.abs(Gr.z),p=e.dot(Gr),m=n.dot(Gr),g=a.dot(Gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const _T=new zl,pl=new Z,md=new Z;class lm{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):_T.setFromPoints(e).getCenter(a);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,a.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const n=pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(pl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(md)),this.expandByPoint(pl.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new Z,_d=new Z,sc=new Z,fr=new Z,gd=new Z,oc=new Z,vd=new Z;class lS{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ta.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,n),Ta.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){_d.copy(e).add(n).multiplyScalar(.5),sc.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(_d);const u=e.distanceTo(n)*.5,c=-this.direction.dot(sc),h=fr.dot(this.direction),p=-fr.dot(sc),m=fr.lengthSq(),g=Math.abs(1-c*c);let _,v,E,b;if(g>0)if(_=c*p-h,v=c*h-p,b=u*g,_>=0)if(v>=-b)if(v<=b){const T=1/g;_*=T,v*=T,E=_*(_+c*v+2*h)+v*(c*_+v+2*p)+m}else v=u,_=Math.max(0,-(c*v+h)),E=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(c*v+h)),E=-_*_+v*(v+2*p)+m;else v<=-b?(_=Math.max(0,-(-c*u+h)),v=_>0?-u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m):v<=b?(_=0,v=Math.min(Math.max(-u,-p),u),E=v*(v+2*p)+m):(_=Math.max(0,-(c*u+h)),v=_>0?u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m);else v=c>0?-u:u,_=Math.max(0,-(c*v+h)),E=-_*_+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_d).addScaledVector(sc,v),E}intersectSphere(e,n){Ta.subVectors(e.center,this.origin);const a=Ta.dot(this.direction),o=Ta.dot(Ta)-a*a,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=a-c,p=a+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,u,c,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(a=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(a=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),g>=0?(u=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),a>c||u>o||((u>a||isNaN(a))&&(a=u),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,n,a,o,u){gd.subVectors(n,e),oc.subVectors(a,e),vd.crossVectors(gd,oc);let c=this.direction.dot(vd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;fr.subVectors(this.origin,e);const p=h*this.direction.dot(oc.crossVectors(fr,oc));if(p<0)return null;const m=h*this.direction.dot(gd.cross(fr));if(m<0||p+m>c)return null;const g=-h*fr.dot(vd);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,a,o,u,c,h,p,m,g,_,v,E,b,T,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,h,p,m,g,_,v,E,b,T,y)}set(e,n,a,o,u,c,h,p,m,g,_,v,E,b,T,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=o,x[1]=u,x[5]=c,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=_,x[14]=v,x[3]=E,x[7]=b,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),u=1/Vs.setFromMatrixColumn(e,1).length(),c=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,u=e.z,c=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=c*g,E=c*_,b=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=E+b*m,n[5]=v-T*m,n[9]=-h*p,n[2]=T-v*m,n[6]=b+E*m,n[10]=c*p}else if(e.order==="YXZ"){const v=p*g,E=p*_,b=m*g,T=m*_;n[0]=v+T*h,n[4]=b*h-E,n[8]=c*m,n[1]=c*_,n[5]=c*g,n[9]=-h,n[2]=E*h-b,n[6]=T+v*h,n[10]=c*p}else if(e.order==="ZXY"){const v=p*g,E=p*_,b=m*g,T=m*_;n[0]=v-T*h,n[4]=-c*_,n[8]=b+E*h,n[1]=E+b*h,n[5]=c*g,n[9]=T-v*h,n[2]=-c*m,n[6]=h,n[10]=c*p}else if(e.order==="ZYX"){const v=c*g,E=c*_,b=h*g,T=h*_;n[0]=p*g,n[4]=b*m-E,n[8]=v*m+T,n[1]=p*_,n[5]=T*m+v,n[9]=E*m-b,n[2]=-m,n[6]=h*p,n[10]=c*p}else if(e.order==="YZX"){const v=c*p,E=c*m,b=h*p,T=h*m;n[0]=p*g,n[4]=T-v*_,n[8]=b*_+E,n[1]=_,n[5]=c*g,n[9]=-h*g,n[2]=-m*g,n[6]=E*_+b,n[10]=v-T*_}else if(e.order==="XZY"){const v=c*p,E=c*m,b=h*p,T=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=v*_+T,n[5]=c*g,n[9]=E*_-b,n[2]=b*_-E,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gT,e,vT)}lookAt(e,n,a){const o=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),hr.crossVectors(a,ui),hr.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),hr.crossVectors(a,ui)),hr.normalize(),lc.crossVectors(ui,hr),o[0]=hr.x,o[4]=lc.x,o[8]=ui.x,o[1]=hr.y,o[5]=lc.y,o[9]=ui.y,o[2]=hr.z,o[6]=lc.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],h=a[4],p=a[8],m=a[12],g=a[1],_=a[5],v=a[9],E=a[13],b=a[2],T=a[6],y=a[10],x=a[14],D=a[3],w=a[7],N=a[11],P=a[15],B=o[0],I=o[4],q=o[8],C=o[12],L=o[1],k=o[5],re=o[9],ae=o[13],pe=o[2],fe=o[6],F=o[10],H=o[14],ee=o[3],oe=o[7],_e=o[11],U=o[15];return u[0]=c*B+h*L+p*pe+m*ee,u[4]=c*I+h*k+p*fe+m*oe,u[8]=c*q+h*re+p*F+m*_e,u[12]=c*C+h*ae+p*H+m*U,u[1]=g*B+_*L+v*pe+E*ee,u[5]=g*I+_*k+v*fe+E*oe,u[9]=g*q+_*re+v*F+E*_e,u[13]=g*C+_*ae+v*H+E*U,u[2]=b*B+T*L+y*pe+x*ee,u[6]=b*I+T*k+y*fe+x*oe,u[10]=b*q+T*re+y*F+x*_e,u[14]=b*C+T*ae+y*H+x*U,u[3]=D*B+w*L+N*pe+P*ee,u[7]=D*I+w*k+N*fe+P*oe,u[11]=D*q+w*re+N*F+P*_e,u[15]=D*C+w*ae+N*H+P*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],u=e[12],c=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],v=e[10],E=e[14],b=e[3],T=e[7],y=e[11],x=e[15],D=p*E-m*v,w=h*E-m*_,N=h*v-p*_,P=c*E-m*g,B=c*v-p*g,I=c*_-h*g;return n*(T*D-y*w+x*N)-a*(b*D-y*P+x*B)+o*(b*w-T*P+x*I)-u*(b*N-T*B+y*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],v=e[10],E=e[11],b=e[12],T=e[13],y=e[14],x=e[15],D=_*y*m-T*v*m+T*p*E-h*y*E-_*p*x+h*v*x,w=b*v*m-g*y*m-b*p*E+c*y*E+g*p*x-c*v*x,N=g*T*m-b*_*m+b*h*E-c*T*E-g*h*x+c*_*x,P=b*_*p-g*T*p-b*h*v+c*T*v+g*h*y-c*_*y,B=n*D+a*w+o*N+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=D*I,e[1]=(T*v*u-_*y*u-T*o*E+a*y*E+_*o*x-a*v*x)*I,e[2]=(h*y*u-T*p*u+T*o*m-a*y*m-h*o*x+a*p*x)*I,e[3]=(_*p*u-h*v*u-_*o*m+a*v*m+h*o*E-a*p*E)*I,e[4]=w*I,e[5]=(g*y*u-b*v*u+b*o*E-n*y*E-g*o*x+n*v*x)*I,e[6]=(b*p*u-c*y*u-b*o*m+n*y*m+c*o*x-n*p*x)*I,e[7]=(c*v*u-g*p*u+g*o*m-n*v*m-c*o*E+n*p*E)*I,e[8]=N*I,e[9]=(b*_*u-g*T*u-b*a*E+n*T*E+g*a*x-n*_*x)*I,e[10]=(c*T*u-b*h*u+b*a*m-n*T*m-c*a*x+n*h*x)*I,e[11]=(g*h*u-c*_*u-g*a*m+n*_*m+c*a*E-n*h*E)*I,e[12]=P*I,e[13]=(g*T*o-b*_*o+b*a*v-n*T*v-g*a*y+n*_*y)*I,e[14]=(b*h*o-c*T*o-b*a*p+n*T*p+c*a*y-n*h*y)*I,e[15]=(c*_*o-g*h*o+g*a*p-n*_*p-c*a*v+n*h*v)*I,this}scale(e){const n=this.elements,a=e.x,o=e.y,u=e.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,c=e.x,h=e.y,p=e.z,m=u*c,g=u*h;return this.set(m*c+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*c,0,m*p-o*h,g*p+o*c,u*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,u,c){return this.set(1,a,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,m=u+u,g=c+c,_=h+h,v=u*m,E=u*g,b=u*_,T=c*g,y=c*_,x=h*_,D=p*m,w=p*g,N=p*_,P=a.x,B=a.y,I=a.z;return o[0]=(1-(T+x))*P,o[1]=(E+N)*P,o[2]=(b-w)*P,o[3]=0,o[4]=(E-N)*B,o[5]=(1-(v+x))*B,o[6]=(y+D)*B,o[7]=0,o[8]=(b+w)*I,o[9]=(y-D)*I,o[10]=(1-(v+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=Vs.set(o[0],o[1],o[2]).length();const c=Vs.set(o[4],o[5],o[6]).length(),h=Vs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),Ii.copy(this);const m=1/u,g=1/c,_=1/h;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,n.setFromRotationMatrix(Ii),a.x=u,a.y=c,a.z=h,this}makePerspective(e,n,a,o,u,c,h=ea,p=!1){const m=this.elements,g=2*u/(n-e),_=2*u/(a-o),v=(n+e)/(n-e),E=(a+o)/(a-o);let b,T;if(p)b=u/(c-u),T=c*u/(c-u);else if(h===ea)b=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(h===zc)b=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,a,o,u,c,h=ea,p=!1){const m=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),E=-(a+o)/(a-o);let b,T;if(p)b=1/(c-u),T=c/(c-u);else if(h===ea)b=-2/(c-u),T=-(c+u)/(c-u);else if(h===zc)b=-1/(c-u),T=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Vs=new Z,Ii=new tn,gT=new Z(0,0,0),vT=new Z(1,1,1),hr=new Z,lc=new Z,ui=new Z,Ev=new tn,bv=new Qr;class Pa{constructor(e=0,n=0,a=0,o=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],p=o[1],m=o[5],g=o[9],_=o[2],v=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class uS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xT=0;const Mv=new Z,ks=new Qr,Aa=new tn,uc=new Z,ml=new Z,ST=new Z,yT=new Qr,Tv=new Z(1,0,0),Av=new Z(0,1,0),Rv=new Z(0,0,1),Cv={type:"added"},ET={type:"removed"},Xs={type:"childadded",child:null},xd={type:"childremoved",child:null};class hi extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new Z,n=new Pa,a=new Qr,o=new Z(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new ct}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Tv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,n){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?uc.copy(e):uc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ml,uc,this.up):Aa.lookAt(uc,ml,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ET),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,ST),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,yT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(e.animations,p))}}if(n){const h=c(e.geometries),p=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),E=c(e.animations),b=c(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=o,a;function c(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}hi.DEFAULT_UP=new Z(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new Z,Ra=new Z,Sd=new Z,Ca=new Z,Ws=new Z,Ys=new Z,wv=new Z,yd=new Z,Ed=new Z,bd=new Z,Md=new cn,Td=new cn,Ad=new cn;class Bi{constructor(e=new Z,n=new Z,a=new Z){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Fi.subVectors(e,n),o.cross(Fi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,a,o,u){Fi.subVectors(o,n),Ra.subVectors(a,n),Sd.subVectors(e,n);const c=Fi.dot(Fi),h=Fi.dot(Ra),p=Fi.dot(Sd),m=Ra.dot(Ra),g=Ra.dot(Sd),_=c*m-h*h;if(_===0)return u.set(0,0,0),null;const v=1/_,E=(m*p-h*g)*v,b=(c*g-h*p)*v;return u.set(1-E-b,b,E)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,a,o,u,c,h,p){return this.getBarycoord(e,n,a,o,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ca.x),p.addScaledVector(c,Ca.y),p.addScaledVector(h,Ca.z),p)}static getInterpolatedAttribute(e,n,a,o,u,c){return Md.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Md.fromBufferAttribute(e,n),Td.fromBufferAttribute(e,a),Ad.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Md,u.x),c.addScaledVector(Td,u.y),c.addScaledVector(Ad,u.z),c}static isFrontFacing(e,n,a,o){return Fi.subVectors(a,n),Ra.subVectors(e,n),Fi.cross(Ra).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Fi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,u){return Bi.getInterpolation(e,this.a,this.b,this.c,n,a,o,u)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,u=this.c;let c,h;Ws.subVectors(o,a),Ys.subVectors(u,a),yd.subVectors(e,a);const p=Ws.dot(yd),m=Ys.dot(yd);if(p<=0&&m<=0)return n.copy(a);Ed.subVectors(e,o);const g=Ws.dot(Ed),_=Ys.dot(Ed);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(a).addScaledVector(Ws,c);bd.subVectors(e,u);const E=Ws.dot(bd),b=Ys.dot(bd);if(b>=0&&E<=b)return n.copy(u);const T=E*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),n.copy(a).addScaledVector(Ys,h);const y=g*b-E*_;if(y<=0&&_-g>=0&&E-b>=0)return wv.subVectors(u,o),h=(_-g)/(_-g+(E-b)),n.copy(o).addScaledVector(wv,h);const x=1/(y+T+v);return c=T*x,h=v*x,n.copy(a).addScaledVector(Ws,c).addScaledVector(Ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Rd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}let _t=class{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ct.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Ct.workingColorSpace){if(e=lT(e,1),n=yt(n,0,1),a=yt(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=Rd(c,u,e+1/3),this.g=Rd(c,u,e),this.b=Rd(c,u,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,n=Mi){function a(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mi){const a=cS[e.toLowerCase()];return a!==void 0?this.setHex(a,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ct.workingToColorSpace(Hn.copy(this),e),Math.round(yt(Hn.r*255,0,255))*65536+Math.round(yt(Hn.g*255,0,255))*256+Math.round(yt(Hn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,o=Hn.g,u=Hn.b,c=Math.max(a,o,u),h=Math.min(a,o,u);let p,m;const g=(h+c)/2;if(h===c)p=0,m=0;else{const _=c-h;switch(m=g<=.5?_/(c+h):_/(2-c-h),c){case a:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-a)/_+2;break;case u:p=(a-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Mi){Ct.workingToColorSpace(Hn.copy(this),e);const n=Hn.r,a=Hn.g,o=Hn.b;return e!==Mi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(cc);const a=ud(dr.h,cc.h,n),o=ud(dr.s,cc.s,n),u=ud(dr.l,cc.l,n);return this.setHSL(a,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Hn=new _t;_t.NAMES=cS;let bT=0;class Yc extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Bl(),this.name="",this.type="Material",this.blending=io,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=qd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(a.blending=this.blending),this.side!==vr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Yd&&(a.blendSrc=this.blendSrc),this.blendDst!==qd&&(a.blendDst=this.blendDst),this.blendEquation!==Yr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class um extends Yc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new Z,fc=new nt;let MT=0;class ia{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=mv,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)fc.fromBufferAttribute(this,n),fc.applyMatrix3(e),this.setXY(n,fc.x,fc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(e),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=hl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,u){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array),u=Jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mv&&(e.usage=this.usage),e}}class fS extends ia{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class hS extends ia{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Hi extends ia{constructor(e,n,a){super(new Float32Array(e),n,a)}}let TT=0;const bi=new tn,Cd=new hi,qs=new Z,ci=new zl,_l=new zl,Mn=new Z;class ra extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?hS:fS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ct().getNormalMatrix(e);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,n,a){return bi.makeTranslation(e,n,a),this.applyMatrix4(bi),this}scale(e,n,a){return bi.makeScale(e,n,a),this.applyMatrix4(bi),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Hi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];_l.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ci.min,_l.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,_l.max),ci.expandByPoint(Mn)):(ci.expandByPoint(_l.min),ci.expandByPoint(_l.max))}ci.getCenter(a);let o=0;for(let u=0,c=e.count;u<c;u++)Mn.fromBufferAttribute(e,u),o=Math.max(o,a.distanceToSquared(Mn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Mn.fromBufferAttribute(h,m),p&&(qs.fromBufferAttribute(e,m),Mn.add(qs)),o=Math.max(o,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ia(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<a.count;q++)h[q]=new Z,p[q]=new Z;const m=new Z,g=new Z,_=new Z,v=new nt,E=new nt,b=new nt,T=new Z,y=new Z;function x(q,C,L){m.fromBufferAttribute(a,q),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,L),v.fromBufferAttribute(u,q),E.fromBufferAttribute(u,C),b.fromBufferAttribute(u,L),g.sub(m),_.sub(m),E.sub(v),b.sub(v);const k=1/(E.x*b.y-b.x*E.y);isFinite(k)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(k),h[q].add(T),h[C].add(T),h[L].add(T),p[q].add(y),p[C].add(y),p[L].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,C=D.length;q<C;++q){const L=D[q],k=L.start,re=L.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const w=new Z,N=new Z,P=new Z,B=new Z;function I(q){P.fromBufferAttribute(o,q),B.copy(P);const C=h[q];w.copy(C),w.sub(P.multiplyScalar(P.dot(C))).normalize(),N.crossVectors(B,C);const k=N.dot(p[q])<0?-1:1;c.setXYZW(q,w.x,w.y,w.z,k)}for(let q=0,C=D.length;q<C;++q){const L=D[q],k=L.start,re=L.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)I(e.getX(ae+0)),I(e.getX(ae+1)),I(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ia(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,E=a.count;v<E;v++)a.setXYZ(v,0,0,0);const o=new Z,u=new Z,c=new Z,h=new Z,p=new Z,m=new Z,g=new Z,_=new Z;if(e)for(let v=0,E=e.count;v<E;v+=3){const b=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,y),h.add(g),p.add(g),m.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,E=n.count;v<E;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,v=new m.constructor(p.length*g);let E=0,b=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?E=p[T]*h.data.stride+h.offset:E=p[T]*g;for(let x=0;x<g;x++)v[b++]=m[E++]}return new ia(v,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ra,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,a);n.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const v=m[g],E=e(v,a);p.push(E)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const E=m[_];g.push(E.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let v=0,E=_.length;v<E;v++)g.push(_[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new tn,Vr=new lS,hc=new lm,Lv=new Z,dc=new Z,pc=new Z,mc=new Z,wd=new Z,_c=new Z,Uv=new Z,gc=new Z;class Vi extends hi{constructor(e=new ra,n=new um){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){_c.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(wd.fromBufferAttribute(_,e),c?_c.addScaledVector(wd,g):_c.addScaledVector(wd.sub(n),g))}n.add(_c)}return n}raycast(e,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hc.copy(a.boundingSphere),hc.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(hc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(hc,Lv)===null||Vr.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Dv.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(Dv),!(a.boundingBox!==null&&Vr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,a){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,T=v.length;b<T;b++){const y=v[b],x=c[y.materialIndex],D=Math.max(y.start,E.start),w=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let N=D,P=w;N<P;N+=3){const B=h.getX(N),I=h.getX(N+1),q=h.getX(N+2);o=vc(this,x,e,a,m,g,_,B,I,q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let y=b,x=T;y<x;y+=3){const D=h.getX(y),w=h.getX(y+1),N=h.getX(y+2);o=vc(this,c,e,a,m,g,_,D,w,N),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,T=v.length;b<T;b++){const y=v[b],x=c[y.materialIndex],D=Math.max(y.start,E.start),w=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let N=D,P=w;N<P;N+=3){const B=N,I=N+1,q=N+2;o=vc(this,x,e,a,m,g,_,B,I,q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let y=b,x=T;y<x;y+=3){const D=y,w=y+1,N=y+2;o=vc(this,c,e,a,m,g,_,D,w,N),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function AT(r,e,n,a,o,u,c,h){let p;if(e.side===ei?p=a.intersectTriangle(c,u,o,!0,h):p=a.intersectTriangle(o,u,c,e.side===vr,h),p===null)return null;gc.copy(h),gc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(gc);return m<n.near||m>n.far?null:{distance:m,point:gc.clone(),object:r}}function vc(r,e,n,a,o,u,c,h,p,m){r.getVertexPosition(h,dc),r.getVertexPosition(p,pc),r.getVertexPosition(m,mc);const g=AT(r,e,n,a,dc,pc,mc,Uv);if(g){const _=new Z;Bi.getBarycoord(Uv,dc,pc,mc,_),o&&(g.uv=Bi.getInterpolatedAttribute(o,h,p,m,_,new nt)),u&&(g.uv1=Bi.getInterpolatedAttribute(u,h,p,m,_,new nt)),c&&(g.normal=Bi.getInterpolatedAttribute(c,h,p,m,_,new Z),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Z,materialIndex:0};Bi.getNormal(dc,pc,mc,v.normal),g.face=v,g.barycoord=_}return g}class Hl extends ra{constructor(e=1,n=1,a=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],g=[],_=[];let v=0,E=0;b("z","y","x",-1,-1,a,n,e,c,u,0),b("z","y","x",1,-1,a,n,-e,c,u,1),b("x","z","y",1,1,e,a,n,o,c,2),b("x","z","y",1,-1,e,a,-n,o,c,3),b("x","y","z",1,-1,e,n,a,o,u,4),b("x","y","z",-1,-1,e,n,-a,o,u,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(g,3)),this.setAttribute("uv",new Hi(_,2));function b(T,y,x,D,w,N,P,B,I,q,C){const L=N/I,k=P/q,re=N/2,ae=P/2,pe=B/2,fe=I+1,F=q+1;let H=0,ee=0;const oe=new Z;for(let _e=0;_e<F;_e++){const U=_e*k-ae;for(let Q=0;Q<fe;Q++){const xe=Q*L-re;oe[T]=xe*D,oe[y]=U*w,oe[x]=pe,m.push(oe.x,oe.y,oe.z),oe[T]=0,oe[y]=0,oe[x]=B>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(Q/I),_.push(1-_e/q),H+=1}}for(let _e=0;_e<q;_e++)for(let U=0;U<I;U++){const Q=v+U+fe*_e,xe=v+U+fe*(_e+1),Ce=v+(U+1)+fe*(_e+1),Ge=v+(U+1)+fe*_e;p.push(Q,xe,Ge),p.push(xe,Ce,Ge),ee+=6}h.addGroup(E,ee,C),E+=ee,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Xn(r){const e={};for(let n=0;n<r.length;n++){const a=uo(r[n]);for(const o in a)e[o]=a[o]}return e}function RT(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function dS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Hc={clone:uo,merge:Xn};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Yc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=RT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class pS extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new Z,Nv=new nt,Ov=new nt;class Ti extends pS{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Nv,Ov),n.subVectors(Ov,Nv)}setViewOffset(e,n,a,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*a/m,o*=c.width/p,a*=c.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const js=-90,Zs=1;class DT extends hi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(js,Zs,e,n);o.layers=this.layers,this.add(o);const u=new Ti(js,Zs,e,n);u.layers=this.layers,this.add(u);const c=new Ti(js,Zs,e,n);c.layers=this.layers,this.add(c);const h=new Ti(js,Zs,e,n);h.layers=this.layers,this.add(h);const p=new Ti(js,Zs,e,n);p.layers=this.layers,this.add(p);const m=new Ti(js,Zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,u,c,h,p]=n;for(const m of n)this.remove(m);if(e===ea)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===zc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,m,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,u),e.setRenderTarget(a,1,o),e.render(n,c),e.setRenderTarget(a,2,o),e.render(n,h),e.setRenderTarget(a,3,o),e.render(n,p),e.setRenderTarget(a,4,o),e.render(n,m),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,v,E),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class mS extends Vn{constructor(e=[],n=Kr,a,o,u,c,h,p,m,g){super(e,n,a,o,u,c,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _S extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new mS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Hl(5,5,5),u=new In({name:"CubemapFromEquirect",uniforms:uo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:ta});u.uniforms.tEquirect.value=n;const c=new Vi(o,u),h=n.minFilter;return n.minFilter===jr&&(n.minFilter=Gn),new DT(1,10,this).update(e,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,o);e.setRenderTarget(u)}}class xc extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LT={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,a),x=this._getHandJoint(m,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),E=.02,b=.005;m.inputState.pinching&&v>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(LT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new xc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class UT extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class NT extends Vn{constructor(e=null,n=1,a=1,o,u,c,h,p,m=Sn,g=Sn,_,v){super(null,c,h,p,m,g,o,u,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new Z,OT=new Z,PT=new ct;class mr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Ld.subVectors(a,n).cross(OT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Ld),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||PT.getNormalMatrix(e),o=this.coplanarPoint(Ld).applyMatrix4(e),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new lm,IT=new nt(.5,.5),Sc=new Z;class gS{constructor(e=new mr,n=new mr,a=new mr,o=new mr,u=new mr,c=new mr){this.planes=[e,n,a,o,u,c]}set(e,n,a,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ea,a=!1){const o=this.planes,u=e.elements,c=u[0],h=u[1],p=u[2],m=u[3],g=u[4],_=u[5],v=u[6],E=u[7],b=u[8],T=u[9],y=u[10],x=u[11],D=u[12],w=u[13],N=u[14],P=u[15];if(o[0].setComponents(m-c,E-g,x-b,P-D).normalize(),o[1].setComponents(m+c,E+g,x+b,P+D).normalize(),o[2].setComponents(m+h,E+_,x+T,P+w).normalize(),o[3].setComponents(m-h,E-_,x-T,P-w).normalize(),a)o[4].setComponents(p,v,y,N).normalize(),o[5].setComponents(m-p,E-v,x-y,P-N).normalize();else if(o[4].setComponents(m-p,E-v,x-y,P-N).normalize(),n===ea)o[5].setComponents(m+p,E+v,x+y,P+N).normalize();else if(n===zc)o[5].setComponents(p,v,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=IT.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Sc.x=o.normal.x>0?e.max.x:e.min.x,Sc.y=o.normal.y>0?e.max.y:e.min.y,Sc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ul extends Vn{constructor(e,n,a=aa,o,u,c,h=Sn,p=Sn,m,g=Oa,_=1){if(g!==Oa&&g!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,u,c,h,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FT extends Ul{constructor(e,n=aa,a=Kr,o,u,c=Sn,h=Sn,p,m=Oa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,u,c,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vS extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gl extends ra{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const u=e/2,c=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,_=e/h,v=n/p,E=[],b=[],T=[],y=[];for(let x=0;x<g;x++){const D=x*v-c;for(let w=0;w<m;w++){const N=w*_-u;b.push(N,-D,0),T.push(0,0,1),y.push(w/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<h;D++){const w=D+m*x,N=D+m*(x+1),P=D+1+m*(x+1),B=D+1+m*x;E.push(w,N,B),E.push(N,P,B)}this.setIndex(E),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(T,3)),this.setAttribute("uv",new Hi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class BT extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zT extends Yc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends Yc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ud={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class GT{constructor(e,n,a){const o=this;let u=!1,c=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,u===!1&&o.onStart!==void 0&&o.onStart(g,c,h),u=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,h),c===h&&(u=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=m.length;_<v;_+=2){const E=m[_],b=m[_+1];if(E.global&&(E.lastIndex=0),E.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VT=new GT;class cm{constructor(e){this.manager=e!==void 0?e:VT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,u){a.load(e,o,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ks=new WeakMap;class kT extends cm{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,c=Ud.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)u.manager.itemStart(e),setTimeout(function(){n&&n(c),u.manager.itemEnd(e)},0);else{let _=Ks.get(c);_===void 0&&(_=[],Ks.set(c,_)),_.push({onLoad:n,onError:o})}return c}const h=Dl("img");function p(){g(),n&&n(this);const _=Ks.get(this)||[];for(let v=0;v<_.length;v++){const E=_[v];E.onLoad&&E.onLoad(this)}Ks.delete(this),u.manager.itemEnd(e)}function m(_){g(),o&&o(_),Ud.remove(`image:${e}`);const v=Ks.get(this)||[];for(let E=0;E<v.length;E++){const b=v[E];b.onError&&b.onError(_)}Ks.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ud.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class XT extends cm{constructor(e){super(e)}load(e,n,a,o){const u=new Vn,c=new kT(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(h){u.image=h,u.needsUpdate=!0,n!==void 0&&n(u)},a,o),u}}class fm extends pS{constructor(e=-1,n=1,a=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-e,c=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class WT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class YT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Pv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qT extends $r{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Iv(r,e,n,a){const o=jT(a);switch(n){case iS:return r*e;case rS:return r*e/o.components*o.byteLength;case nm:return r*e/o.components*o.byteLength;case oo:return r*e*2/o.components*o.byteLength;case im:return r*e*2/o.components*o.byteLength;case aS:return r*e*3/o.components*o.byteLength;case zi:return r*e*4/o.components*o.byteLength;case am:return r*e*4/o.components*o.byteLength;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sp:case lp:return Math.max(r,16)*Math.max(e,8)/4;case rp:case op:return Math.max(r,8)*Math.max(e,8)/2;case up:case cp:case hp:case dp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fp:case pp:case mp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Lp:case Up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Np:case Op:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pp:case Ip:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jT(r){switch(r){case Ai:case $x:return{byteLength:1,components:1};case Cl:case eS:case fi:return{byteLength:2,components:1};case em:case tm:return{byteLength:2,components:4};case aa:case $p:case $i:return{byteLength:4,components:1};case tS:case nS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);function xS(){let r=null,e=!1,n=null,a=null;function o(u,c){n(u,c),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function ZT(r){const e=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),h.onUploadCallback();let E;if(m instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=r.SHORT;else if(m instanceof Uint32Array)E=r.UNSIGNED_INT;else if(m instanceof Int32Array)E=r.INT;else if(m instanceof Int8Array)E=r.BYTE;else if(m instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,g);else{_.sort((E,b)=>E.start-b.start);let v=0;for(let E=1;E<_.length;E++){const b=_[v],T=_[E];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,_[v]=T)}_.length=v+1;for(let E=0,b=_.length;E<b;E++){const T=_[E];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:u,update:c}}var KT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_A=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AA="gl_FragColor = linearToOutputTexel( gl_FragColor );",RA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_R=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:KT,alphahash_pars_fragment:QT,alphamap_fragment:JT,alphamap_pars_fragment:$T,alphatest_fragment:eA,alphatest_pars_fragment:tA,aomap_fragment:nA,aomap_pars_fragment:iA,batching_pars_vertex:aA,batching_vertex:rA,begin_vertex:sA,beginnormal_vertex:oA,bsdfs:lA,iridescence_fragment:uA,bumpmap_pars_fragment:cA,clipping_planes_fragment:fA,clipping_planes_pars_fragment:hA,clipping_planes_pars_vertex:dA,clipping_planes_vertex:pA,color_fragment:mA,color_pars_fragment:_A,color_pars_vertex:gA,color_vertex:vA,common:xA,cube_uv_reflection_fragment:SA,defaultnormal_vertex:yA,displacementmap_pars_vertex:EA,displacementmap_vertex:bA,emissivemap_fragment:MA,emissivemap_pars_fragment:TA,colorspace_fragment:AA,colorspace_pars_fragment:RA,envmap_fragment:CA,envmap_common_pars_fragment:wA,envmap_pars_fragment:DA,envmap_pars_vertex:LA,envmap_physical_pars_fragment:VA,envmap_vertex:UA,fog_vertex:NA,fog_pars_vertex:OA,fog_fragment:PA,fog_pars_fragment:IA,gradientmap_pars_fragment:FA,lightmap_pars_fragment:BA,lights_lambert_fragment:zA,lights_lambert_pars_fragment:HA,lights_pars_begin:GA,lights_toon_fragment:kA,lights_toon_pars_fragment:XA,lights_phong_fragment:WA,lights_phong_pars_fragment:YA,lights_physical_fragment:qA,lights_physical_pars_fragment:jA,lights_fragment_begin:ZA,lights_fragment_maps:KA,lights_fragment_end:QA,logdepthbuf_fragment:JA,logdepthbuf_pars_fragment:$A,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:t1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:a1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:u1,morphnormal_vertex:c1,morphtarget_pars_vertex:f1,morphtarget_vertex:h1,normal_fragment_begin:d1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:_1,normal_vertex:g1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:x1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:E1,opaque_fragment:b1,packing:M1,premultiplied_alpha_fragment:T1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:U1,shadowmap_vertex:N1,shadowmask_pars_fragment:O1,skinbase_vertex:P1,skinning_pars_vertex:I1,skinning_vertex:F1,skinnormal_vertex:B1,specularmap_fragment:z1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:k1,transmission_pars_fragment:X1,uv_pars_fragment:W1,uv_pars_vertex:Y1,uv_vertex:q1,worldpos_vertex:j1,background_vert:Z1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:J1,cube_vert:$1,cube_frag:eR,depth_vert:tR,depth_frag:nR,distance_vert:iR,distance_frag:aR,equirect_vert:rR,equirect_frag:sR,linedashed_vert:oR,linedashed_frag:lR,meshbasic_vert:uR,meshbasic_frag:cR,meshlambert_vert:fR,meshlambert_frag:hR,meshmatcap_vert:dR,meshmatcap_frag:pR,meshnormal_vert:mR,meshnormal_frag:_R,meshphong_vert:gR,meshphong_frag:vR,meshphysical_vert:xR,meshphysical_frag:SR,meshtoon_vert:yR,meshtoon_frag:ER,points_vert:bR,points_frag:MR,shadow_vert:TR,shadow_frag:AR,sprite_vert:RR,sprite_frag:CR},Ie={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Xn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Xn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Xn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Xn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Xn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Xn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Xn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Xn([Ie.lights,Ie.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const yc={r:0,b:0,g:0},Xr=new Pa,wR=new tn;function DR(r,e,n,a,o,u,c){const h=new _t(0);let p=u===!0?0:1,m,g,_=null,v=0,E=null;function b(w){let N=w.isScene===!0?w.background:null;return N&&N.isTexture&&(N=(w.backgroundBlurriness>0?n:e).get(N)),N}function T(w){let N=!1;const P=b(w);P===null?x(h,p):P&&P.isColor&&(x(P,1),N=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,N){const P=b(N);P&&(P.isCubeTexture||P.mapping===Wc)?(g===void 0&&(g=new Vi(new Hl(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:uo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Xr.copy(N.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wR.makeRotationFromEuler(Xr)),g.material.toneMapped=Ct.getTransfer(P.colorSpace)!==Vt,(_!==P||v!==P.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,E=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Vi(new Gl(2,2),new In({name:"BackgroundMaterial",uniforms:uo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(P.colorSpace)!==Vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||E!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,E=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function x(w,N){w.getRGB(yc,dS(r)),a.buffers.color.setClear(yc.r,yc.g,yc.b,N,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,N=1){h.set(w),p=N,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(h,p)},render:T,addToRenderList:y,dispose:D}}function LR(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let u=o,c=!1;function h(L,k,re,ae,pe){let fe=!1;const F=_(ae,re,k);u!==F&&(u=F,m(u.object)),fe=E(L,ae,re,pe),fe&&b(L,ae,re,pe),pe!==null&&e.update(pe,r.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,N(L,k,re,ae),pe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function p(){return r.createVertexArray()}function m(L){return r.bindVertexArray(L)}function g(L){return r.deleteVertexArray(L)}function _(L,k,re){const ae=re.wireframe===!0;let pe=a[L.id];pe===void 0&&(pe={},a[L.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let F=fe[ae];return F===void 0&&(F=v(p()),fe[ae]=F),F}function v(L){const k=[],re=[],ae=[];for(let pe=0;pe<n;pe++)k[pe]=0,re[pe]=0,ae[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:ae,object:L,attributes:{},index:null}}function E(L,k,re,ae){const pe=u.attributes,fe=k.attributes;let F=0;const H=re.getAttributes();for(const ee in H)if(H[ee].location>=0){const _e=pe[ee];let U=fe[ee];if(U===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),_e===void 0||_e.attribute!==U||U&&_e.data!==U.data)return!0;F++}return u.attributesNum!==F||u.index!==ae}function b(L,k,re,ae){const pe={},fe=k.attributes;let F=0;const H=re.getAttributes();for(const ee in H)if(H[ee].location>=0){let _e=fe[ee];_e===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor));const U={};U.attribute=_e,_e&&_e.data&&(U.data=_e.data),pe[ee]=U,F++}u.attributes=pe,u.attributesNum=F,u.index=ae}function T(){const L=u.newAttributes;for(let k=0,re=L.length;k<re;k++)L[k]=0}function y(L){x(L,0)}function x(L,k){const re=u.newAttributes,ae=u.enabledAttributes,pe=u.attributeDivisors;re[L]=1,ae[L]===0&&(r.enableVertexAttribArray(L),ae[L]=1),pe[L]!==k&&(r.vertexAttribDivisor(L,k),pe[L]=k)}function D(){const L=u.newAttributes,k=u.enabledAttributes;for(let re=0,ae=k.length;re<ae;re++)k[re]!==L[re]&&(r.disableVertexAttribArray(re),k[re]=0)}function w(L,k,re,ae,pe,fe,F){F===!0?r.vertexAttribIPointer(L,k,re,pe,fe):r.vertexAttribPointer(L,k,re,ae,pe,fe)}function N(L,k,re,ae){T();const pe=ae.attributes,fe=re.getAttributes(),F=k.defaultAttributeValues;for(const H in fe){const ee=fe[H];if(ee.location>=0){let oe=pe[H];if(oe===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const _e=oe.normalized,U=oe.itemSize,Q=e.get(oe);if(Q===void 0)continue;const xe=Q.buffer,Ce=Q.type,Ge=Q.bytesPerElement,ie=Ce===r.INT||Ce===r.UNSIGNED_INT||oe.gpuType===$p;if(oe.isInterleavedBufferAttribute){const he=oe.data,Ue=he.stride,We=oe.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ee.locationSize;Ve++)x(ee.location+Ve,he.meshPerAttribute);L.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<ee.locationSize;Ve++)y(ee.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Ve=0;Ve<ee.locationSize;Ve++)w(ee.location+Ve,U/ee.locationSize,Ce,_e,Ue*Ge,(We+U/ee.locationSize*Ve)*Ge,ie)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)x(ee.location+he,oe.meshPerAttribute);L.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<ee.locationSize;he++)y(ee.location+he);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let he=0;he<ee.locationSize;he++)w(ee.location+he,U/ee.locationSize,Ce,_e,U*Ge,U/ee.locationSize*he*Ge,ie)}}else if(F!==void 0){const _e=F[H];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(ee.location,_e);break;case 3:r.vertexAttrib3fv(ee.location,_e);break;case 4:r.vertexAttrib4fv(ee.location,_e);break;default:r.vertexAttrib1fv(ee.location,_e)}}}}D()}function P(){q();for(const L in a){const k=a[L];for(const re in k){const ae=k[re];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete k[re]}delete a[L]}}function B(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const re in k){const ae=k[re];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete k[re]}delete a[L.id]}function I(L){for(const k in a){const re=a[k];if(re[L.id]===void 0)continue;const ae=re[L.id];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete re[L.id]}}function q(){C(),c=!0,u!==o&&(u=o,m(u.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function UR(r,e,n){let a;function o(m){a=m}function u(m,g){r.drawArrays(a,m,g),n.update(g,a,1)}function c(m,g,_){_!==0&&(r.drawArraysInstanced(a,m,g,_),n.update(g,a,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b];n.update(E,a,1)}function p(m,g,_,v){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<m.length;b++)c(m[b],g[b],v[b]);else{E.multiDrawArraysInstancedWEBGL(a,m,0,g,0,v,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*v[T];n.update(b,a,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function NR(r,e,n,a){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==zi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const q=I===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ai&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==$i&&!q)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(lt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:N,maxSamples:P,samples:B}}function OR(r){const e=this;let n=null,a=0,o=!1,u=!1;const c=new mr,h=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||a!==0||o;return o=v,a=_.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,E){const b=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!o||b===null||b.length===0||u&&!y)u?g(null):m();else{const D=u?0:a,w=D*4;let N=x.clippingState||null;p.value=N,N=g(b,v,w,E);for(let P=0;P!==w;++P)N[P]=n[P];x.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,E,b){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=p.value,b!==!0||y===null){const x=E+T*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,N=E;w!==T;++w,N+=4)c.copy(_[w]).applyMatrix4(D,h),c.normal.toArray(y,N),y[N+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function PR(r){let e=new WeakMap;function n(c,h){return h===tp?c.mapping=Kr:h===np&&(c.mapping=so),c}function a(c){if(c&&c.isTexture){const h=c.mapping;if(h===tp||h===np)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new _S(p.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",o),n(m.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:a,dispose:u}}const gr=4,Fv=[.125,.215,.35,.446,.526,.582],qr=20,IR=256,gl=new fm,Bv=new _t;let Nd=null,Od=0,Pd=0,Id=!1;const FR=new Z;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,u={}){const{size:c=256,position:h=FR}=u;Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Od,Pd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:fi,format:zi,colorSpace:lo,depthBuffer:!1},o=Hv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BR(u)),this._blurMaterial=HR(u,e,n),this._ggxMaterial=zR(u,e,n)}return o}_compileMaterial(e){const n=new Vi(new ra,e);this._renderer.compile(n,gl)}_sceneToCubeUV(e,n,a,o,u){const p=new Ti(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(Bv),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new Hl,new um({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let x=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,x=!0):(y.color.copy(Bv),x=!0);for(let w=0;w<6;w++){const N=w%3;N===0?(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[w],u.y,u.z)):N===1?(p.up.set(0,0,m[w]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[w],u.z)):(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[w]));const P=this._cubeSize;Qs(o,N*P,w>2?P:0,P,P),_.setRenderTarget(o),x&&_.render(T,p),_.render(e,p)}_.toneMapping=E,_.autoClear=v,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Kr||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Qs(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,gl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[a];h.material=c;const p=c.uniforms,m=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),v=0+m*1.25,E=_*v,{_lodMax:b}=this,T=this._sizeLods[a],y=3*T*(a>b-gr?a-b+gr:0),x=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=b-n,Qs(u,y,x,3*T,2*T),o.setRenderTarget(u),o.render(h,gl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=b-a,Qs(e,y,x,3*T,2*T),o.setRenderTarget(e),o.render(h,gl)}_blur(e,n,a,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,o,"latitudinal",u),this._halfBlur(c,e,a,a,o,"longitudinal",u)}_halfBlur(e,n,a,o,u,c,h){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=m;const v=m.uniforms,E=this._sizeLods[a]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*qr-1),T=u/b,y=isFinite(u)?1+Math.floor(g*T):qr;y>qr&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const x=[];let D=0;for(let I=0;I<qr;++I){const q=I/T,C=Math.exp(-q*q/2);x.push(C),I===0?D+=C:I<y&&(D+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=b,v.mipInt.value=w-a;const N=this._sizeLods[o],P=3*N*(o>w-gr?o-w+gr:0),B=4*(this._cubeSize-N);Qs(n,P,B,3*N,2*N),p.setRenderTarget(n),p.render(_,gl)}}function BR(r){const e=[],n=[],a=[];let o=r;const u=r-gr+1+Fv.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);e.push(h);let p=1/h;c>r-gr?p=Fv[c-r+gr-1]:c===0&&(p=0),n.push(p);const m=1/(h-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,b=6,T=3,y=2,x=1,D=new Float32Array(T*b*E),w=new Float32Array(y*b*E),N=new Float32Array(x*b*E);for(let B=0;B<E;B++){const I=B%3*2/3-1,q=B>2?0:-1,C=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];D.set(C,T*b*B),w.set(v,y*b*B);const L=[B,B,B,B,B,B];N.set(L,x*b*B)}const P=new ra;P.setAttribute("position",new ia(D,T)),P.setAttribute("uv",new ia(w,y)),P.setAttribute("faceIndex",new ia(N,x)),a.push(new Vi(P,null)),o>gr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Hv(r,e,n){const a=new ti(r,e,n);return a.texture.mapping=Wc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qs(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function zR(r,e,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function HR(r,e,n){const a=new Float32Array(qr),o=new Z(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Gv(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Vv(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GR(r){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===tp||p===np,g=p===Kr||p===so;if(m||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new zv(r)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return m&&E&&E.height>0||g&&E&&o(E)?(n===null&&(n=new zv(r)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function VR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Ll("WebGLRenderer: "+a+" extension not supported."),o}}}function kR(r,e,n,a){const o={},u=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",c),delete o[v.id];const E=u.get(v);E&&(e.remove(E),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER)}function m(_){const v=[],E=_.index,b=_.attributes.position;let T=0;if(E!==null){const D=E.array;T=E.version;for(let w=0,N=D.length;w<N;w+=3){const P=D[w+0],B=D[w+1],I=D[w+2];v.push(P,B,B,I,I,P)}}else if(b!==void 0){const D=b.array;T=b.version;for(let w=0,N=D.length/3-1;w<N;w+=3){const P=w+0,B=w+1,I=w+2;v.push(P,B,B,I,I,P)}}else return;const y=new(sS(v)?hS:fS)(v,1);y.version=T;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function g(_){const v=u.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function XR(r,e,n){let a;function o(v){a=v}let u,c;function h(v){u=v.type,c=v.bytesPerElement}function p(v,E){r.drawElements(a,E,u,v*c),n.update(E,a,1)}function m(v,E,b){b!==0&&(r.drawElementsInstanced(a,E,u,v*c,b),n.update(E,a,b))}function g(v,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,u,v,0,b);let y=0;for(let x=0;x<b;x++)y+=E[x];n.update(y,a,1)}function _(v,E,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)m(v[x]/c,E[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(a,E,0,u,v,0,T,0,b);let x=0;for(let D=0;D<b;D++)x+=E[D]*T[D];n.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function WR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,h){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=h*(u/3);break;case r.LINES:n.lines+=h*(u/2);break;case r.LINE_STRIP:n.lines+=h*(u-1);break;case r.LINE_LOOP:n.lines+=h*u;break;case r.POINTS:n.points+=h*u;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function YR(r,e,n){const a=new WeakMap,o=new cn;function u(c,h,p){const m=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let L=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",L)};var E=L;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),T===!0&&(N=2),y===!0&&(N=3);let P=h.attributes.position.count*N,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*B*4*_),q=new oS(I,P,B,_);q.type=$i,q.needsUpdate=!0;const C=N*4;for(let k=0;k<_;k++){const re=x[k],ae=D[k],pe=w[k],fe=P*B*4*k;for(let F=0;F<re.count;F++){const H=F*C;b===!0&&(o.fromBufferAttribute(re,F),I[fe+H+0]=o.x,I[fe+H+1]=o.y,I[fe+H+2]=o.z,I[fe+H+3]=0),T===!0&&(o.fromBufferAttribute(ae,F),I[fe+H+4]=o.x,I[fe+H+5]=o.y,I[fe+H+6]=o.z,I[fe+H+7]=0),y===!0&&(o.fromBufferAttribute(pe,F),I[fe+H+8]=o.x,I[fe+H+9]=o.y,I[fe+H+10]=o.z,I[fe+H+11]=pe.itemSize===4?o.w:1)}}v={count:_,texture:q,size:new nt(P,B)},a.set(h,v),h.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const T=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:u}}function qR(r,e,n,a){let o=new WeakMap;function u(p){const m=a.render.frame,g=p.geometry,_=e.get(p,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return _}function c(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}const jR={[Wx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[qx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Kx]:"AGX_TONE_MAPPING",[Qx]:"NEUTRAL_TONE_MAPPING",[Zx]:"CUSTOM_TONE_MAPPING"};function ZR(r,e,n,a,o){const u=new ti(e,n,{type:r,depthBuffer:a,stencilBuffer:o}),c=new ti(e,n,{type:fi,depthBuffer:!1,stencilBuffer:!1}),h=new ra;h.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const p=new BT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Vi(h,p),g=new fm(-1,1,1,-1,0,1);let _=null,v=null,E=!1,b,T=null,y=[],x=!1;this.setSize=function(D,w){u.setSize(D,w),c.setSize(D,w);for(let N=0;N<y.length;N++){const P=y[N];P.setSize&&P.setSize(D,w)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const w=u.width,N=u.height;for(let P=0;P<y.length;P++){const B=y[P];B.setSize&&B.setSize(w,N)}},this.begin=function(D,w){if(E||D.toneMapping===na&&y.length===0)return!1;if(T=w,w!==null){const N=w.width,P=w.height;(u.width!==N||u.height!==P)&&this.setSize(N,P)}return x===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=na,!0},this.hasRenderPass=function(){return x},this.end=function(D,w){D.toneMapping=b,E=!0;let N=u,P=c;for(let B=0;B<y.length;B++){const I=y[B];if(I.enabled!==!1&&(I.render(D,P,N,w),I.needsSwap!==!1)){const q=N;N=P,P=q}}if(_!==D.outputColorSpace||v!==D.toneMapping){_=D.outputColorSpace,v=D.toneMapping,p.defines={},Ct.getTransfer(_)===Vt&&(p.defines.SRGB_TRANSFER="");const B=jR[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(T),D.render(m,g),T=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),c.dispose(),h.dispose(),p.dispose()}}const SS=new Vn,Bp=new Ul(1,1),yS=new oS,ES=new mT,bS=new mS,kv=[],Xv=[],Wv=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function mo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let u=kv[o];if(u===void 0&&(u=new Float32Array(o),kv[o]=u),e!==0){a.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=n,r[c].toArray(u,h)}return u}function yn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function En(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function jc(r,e){let n=Xv[e];n===void 0&&(n=new Int32Array(e),Xv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function KR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function QR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;r.uniform2fv(this.addr,e),En(n,e)}}function JR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yn(n,e))return;r.uniform3fv(this.addr,e),En(n,e)}}function $R(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;r.uniform4fv(this.addr,e),En(n,e)}}function eC(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(n,e)}else{if(yn(n,a))return;qv.set(a),r.uniformMatrix2fv(this.addr,!1,qv),En(n,a)}}function tC(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(n,e)}else{if(yn(n,a))return;Yv.set(a),r.uniformMatrix3fv(this.addr,!1,Yv),En(n,a)}}function nC(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(n,e)}else{if(yn(n,a))return;Wv.set(a),r.uniformMatrix4fv(this.addr,!1,Wv),En(n,a)}}function iC(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function aC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;r.uniform2iv(this.addr,e),En(n,e)}}function rC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;r.uniform3iv(this.addr,e),En(n,e)}}function sC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;r.uniform4iv(this.addr,e),En(n,e)}}function oC(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function lC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;r.uniform2uiv(this.addr,e),En(n,e)}}function uC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;r.uniform3uiv(this.addr,e),En(n,e)}}function cC(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;r.uniform4uiv(this.addr,e),En(n,e)}}function fC(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?(Bp.compareFunction=n.isReversedDepthBuffer()?sm:rm,u=Bp):u=SS,n.setTexture2D(e||u,o)}function hC(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||ES,o)}function dC(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||bS,o)}function pC(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||yS,o)}function mC(r){switch(r){case 5126:return KR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return lC;case 36295:return uC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return hC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return pC}}function _C(r,e){r.uniform1fv(this.addr,e)}function gC(r,e){const n=mo(e,this.size,2);r.uniform2fv(this.addr,n)}function vC(r,e){const n=mo(e,this.size,3);r.uniform3fv(this.addr,n)}function xC(r,e){const n=mo(e,this.size,4);r.uniform4fv(this.addr,n)}function SC(r,e){const n=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function yC(r,e){const n=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function EC(r,e){const n=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function bC(r,e){r.uniform1iv(this.addr,e)}function MC(r,e){r.uniform2iv(this.addr,e)}function TC(r,e){r.uniform3iv(this.addr,e)}function AC(r,e){r.uniform4iv(this.addr,e)}function RC(r,e){r.uniform1uiv(this.addr,e)}function CC(r,e){r.uniform2uiv(this.addr,e)}function wC(r,e){r.uniform3uiv(this.addr,e)}function DC(r,e){r.uniform4uiv(this.addr,e)}function LC(r,e,n){const a=this.cache,o=e.length,u=jc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),En(a,u));let c;this.type===r.SAMPLER_2D_SHADOW?c=Bp:c=SS;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||c,u[h])}function UC(r,e,n){const a=this.cache,o=e.length,u=jc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||ES,u[c])}function NC(r,e,n){const a=this.cache,o=e.length,u=jc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||bS,u[c])}function OC(r,e,n){const a=this.cache,o=e.length,u=jc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||yS,u[c])}function PC(r){switch(r){case 5126:return _C;case 35664:return gC;case 35665:return vC;case 35666:return xC;case 35674:return SC;case 35675:return yC;case 35676:return EC;case 5124:case 35670:return bC;case 35667:case 35671:return MC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return RC;case 36294:return CC;case 36295:return wC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return OC}}class IC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=mC(n.type)}}class FC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PC(n.type)}}class BC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,n[h.id],a)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function jv(r,e){r.seq.push(e),r.map[e.id]=e}function zC(r,e,n){const a=r.name,o=a.length;for(Fd.lastIndex=0;;){const u=Fd.exec(a),c=Fd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&c+2===o){jv(n,m===void 0?new IC(h,r,e):new FC(h,r,e));break}else{let _=n.map[h];_===void 0&&(_=new BC(h),jv(n,_)),n=_}}}class Oc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const h=e.getActiveUniform(n,c),p=e.getUniformLocation(n,h.name);zC(h,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&a.push(c)}return a}}function Zv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const HC=37297;let GC=0;function VC(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const h=c+1;a.push(`${h===e?">":" "} ${h}: ${n[c]}`)}return a.join(`
`)}const Kv=new ct;function kC(r){Ct._getMatrix(Kv,Ct.workingColorSpace,r);const e=`mat3( ${Kv.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Bc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+VC(r.getShaderSource(e),h)}else return u}function XC(r,e){const n=kC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const WC={[Wx]:"Linear",[Yx]:"Reinhard",[qx]:"Cineon",[jx]:"ACESFilmic",[Kx]:"AgX",[Qx]:"Neutral",[Zx]:"Custom"};function YC(r,e){const n=WC[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ec=new Z;function qC(){Ct.getLuminanceCoefficients(Ec);const r=Ec.x.toFixed(4),e=Ec.y.toFixed(4),n=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function ZC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function KC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=r.getActiveAttrib(e,o),c=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:r.getAttribLocation(e,c),locationSize:h}}return n}function El(r){return r!==""}function Jv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(r){return r.replace(QC,$C)}const JC=new Map;function $C(r,e){let n=mt[e];if(n===void 0){const a=JC.get(e);if(a!==void 0)n=mt[a],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return zp(n)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(r){return r.replace(ew,tw)}function tw(r,e,n,a){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function tx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nw={[Cc]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function iw(r){return nw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aw={[Kr]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function rw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const sw={[so]:"ENVMAP_MODE_REFRACTION"};function ow(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function uw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lw[r.combine]||"ENVMAP_BLENDING_NONE"}function cw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function fw(r,e,n,a){const o=r.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=iw(n),m=rw(n),g=ow(n),_=uw(n),v=cw(n),E=jC(n),b=ZC(u),T=o.createProgram();let y,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(El).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(El).join(`
`),x.length>0&&(x+=`
`)):(y=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),x=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==na?"#define TONE_MAPPING":"",n.toneMapping!==na?mt.tonemapping_pars_fragment:"",n.toneMapping!==na?YC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,XC("linearToOutputTexel",n.outputColorSpace),qC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(El).join(`
`)),c=zp(c),c=Jv(c,n),c=$v(c,n),h=zp(h),h=Jv(h,n),h=$v(h,n),c=ex(c),h=ex(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=D+y+c,N=D+x+h,P=Zv(o,o.VERTEX_SHADER,w),B=Zv(o,o.FRAGMENT_SHADER,N);o.attachShader(T,P),o.attachShader(T,B),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(k){if(r.debug.checkShaderErrors){const re=o.getProgramInfoLog(T)||"",ae=o.getShaderInfoLog(P)||"",pe=o.getShaderInfoLog(B)||"",fe=re.trim(),F=ae.trim(),H=pe.trim();let ee=!0,oe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,P,B);else{const _e=Qv(o,P,"vertex"),U=Qv(o,B,"fragment");Lt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+_e+`
`+U)}else fe!==""?lt("WebGLProgram: Program Info Log:",fe):(F===""||H==="")&&(oe=!1);oe&&(k.diagnostics={runnable:ee,programLog:fe,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(P),o.deleteShader(B),q=new Oc(o,T),C=KC(o,T)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(T,HC)),L},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=B,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new pw(e),n.set(e,a)),a}}class pw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function mw(r,e,n,a,o,u,c){const h=new uS,p=new dw,m=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,L,k,re,ae){const pe=re.fog,fe=ae.geometry,F=C.isMeshStandardMaterial?re.environment:null,H=(C.isMeshStandardMaterial?n:e).get(C.envMap||F),ee=H&&H.mapping===Wc?H.image.height:null,oe=b[C.type];C.precision!==null&&(E=o.getMaxPrecision(C.precision),E!==C.precision&&lt("WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const _e=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=_e!==void 0?_e.length:0;let Q=0;fe.morphAttributes.position!==void 0&&(Q=1),fe.morphAttributes.normal!==void 0&&(Q=2),fe.morphAttributes.color!==void 0&&(Q=3);let xe,Ce,Ge,ie;if(oe){const Rt=Ji[oe];xe=Rt.vertexShader,Ce=Rt.fragmentShader}else xe=C.vertexShader,Ce=C.fragmentShader,p.update(C),Ge=p.getVertexShaderID(C),ie=p.getFragmentShaderID(C);const he=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),We=ae.isInstancedMesh===!0,Ve=ae.isBatchedMesh===!0,gt=!!C.map,an=!!C.matcap,Et=!!H,vt=!!C.aoMap,Ut=!!C.lightMap,ft=!!C.bumpMap,rn=!!C.normalMap,G=!!C.displacementMap,Jt=!!C.emissiveMap,At=!!C.metalnessMap,It=!!C.roughnessMap,Ze=C.anisotropy>0,O=C.clearcoat>0,M=C.dispersion>0,W=C.iridescence>0,me=C.sheen>0,be=C.transmission>0,ce=Ze&&!!C.anisotropyMap,Qe=O&&!!C.clearcoatMap,De=O&&!!C.clearcoatNormalMap,Ye=O&&!!C.clearcoatRoughnessMap,rt=W&&!!C.iridescenceMap,Te=W&&!!C.iridescenceThicknessMap,Ae=me&&!!C.sheenColorMap,ze=me&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,Le=!!C.specularColorMap,dt=!!C.specularIntensityMap,X=be&&!!C.transmissionMap,Oe=be&&!!C.thicknessMap,Re=!!C.gradientMap,Be=!!C.alphaMap,Me=C.alphaTest>0,ye=!!C.alphaHash,we=!!C.extensions;let st=na;C.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=r.toneMapping);const Bt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:xe,fragmentShader:Ce,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:ie,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:Ve,batchingColor:Ve&&ae._colorsTexture!==null,instancing:We,instancingColor:We&&ae.instanceColor!==null,instancingMorph:We&&ae.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:lo,alphaToCoverage:!!C.alphaToCoverage,map:gt,matcap:an,envMap:Et,envMapMode:Et&&H.mapping,envMapCubeUVHeight:ee,aoMap:vt,lightMap:Ut,bumpMap:ft,normalMap:rn,displacementMap:G,emissiveMap:Jt,normalMapObjectSpace:rn&&C.normalMapType===$M,normalMapTangentSpace:rn&&C.normalMapType===JM,metalnessMap:At,roughnessMap:It,anisotropy:Ze,anisotropyMap:ce,clearcoat:O,clearcoatMap:Qe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,dispersion:M,iridescence:W,iridescenceMap:rt,iridescenceThicknessMap:Te,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:Le,specularIntensityMap:dt,transmission:be,transmissionMap:X,thicknessMap:Oe,gradientMap:Re,opaque:C.transparent===!1&&C.blending===io&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:Me,alphaHash:ye,combine:C.combine,mapUv:gt&&T(C.map.channel),aoMapUv:vt&&T(C.aoMap.channel),lightMapUv:Ut&&T(C.lightMap.channel),bumpMapUv:ft&&T(C.bumpMap.channel),normalMapUv:rn&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:Jt&&T(C.emissiveMap.channel),metalnessMapUv:At&&T(C.metalnessMap.channel),roughnessMapUv:It&&T(C.roughnessMap.channel),anisotropyMapUv:ce&&T(C.anisotropyMap.channel),clearcoatMapUv:Qe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(C.sheenRoughnessMap.channel),specularMapUv:Fe&&T(C.specularMap.channel),specularColorMapUv:Le&&T(C.specularColorMap.channel),specularIntensityMapUv:dt&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Oe&&T(C.thicknessMap.channel),alphaMapUv:Be&&T(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(rn||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(gt||Be),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:gt&&C.map.isVideoTexture===!0&&Ct.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:Jt&&C.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wa,flipSided:C.side===ei,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:we&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&C.extensions.multiDraw===!0||Ve)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Bt.vertexUv1s=m.has(1),Bt.vertexUv2s=m.has(2),Bt.vertexUv3s=m.has(3),m.clear(),Bt}function x(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)L.push(k),L.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(D(L,C),w(L,C),L.push(r.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function D(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function w(C,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const L=b[C.type];let k;if(L){const re=Ji[L];k=Hc.clone(re.uniforms)}else k=C.uniforms;return k}function P(C,L){let k=_.get(L);return k!==void 0?++k.usedTimes:(k=new fw(r,L,C,u),g.push(k),_.set(L,k)),k}function B(C){if(--C.usedTimes===0){const L=g.indexOf(C);g[L]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){p.remove(C)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:q}}function _w(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function a(c){r.delete(c)}function o(c,h,p){r.get(c)[h]=p}function u(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:u}}function gw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ix(){const r=[];let e=0;const n=[],a=[],o=[];function u(){e=0,n.length=0,a.length=0,o.length=0}function c(_,v,E,b,T,y){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:E,groupOrder:b,renderOrder:_.renderOrder,z:T,group:y},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=E,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=T,x.group=y),e++,x}function h(_,v,E,b,T,y){const x=c(_,v,E,b,T,y);E.transmission>0?a.push(x):E.transparent===!0?o.push(x):n.push(x)}function p(_,v,E,b,T,y){const x=c(_,v,E,b,T,y);E.transmission>0?a.unshift(x):E.transparent===!0?o.unshift(x):n.unshift(x)}function m(_,v){n.length>1&&n.sort(_||gw),a.length>1&&a.sort(v||nx),o.length>1&&o.sort(v||nx)}function g(){for(let _=e,v=r.length;_<v;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:h,unshift:p,finish:g,sort:m}}function vw(){let r=new WeakMap;function e(a,o){const u=r.get(a);let c;return u===void 0?(c=new ix,r.set(a,[c])):o>=u.length?(c=new ix,u.push(c)):c=u[o],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new _t};break;case"SpotLight":n={position:new Z,direction:new Z,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=n,n}}}function Sw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let yw=0;function Ew(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bw(r){const e=new xw,n=Sw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new Z);const o=new Z,u=new tn,c=new tn;function h(m){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let E=0,b=0,T=0,y=0,x=0,D=0,w=0,N=0,P=0,B=0,I=0;m.sort(Ew);for(let C=0,L=m.length;C<L;C++){const k=m[C],re=k.color,ae=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===oo?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=re.r*ae,_+=re.g*ae,v+=re.b*ae;else if(k.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(k.sh.coefficients[F],ae);I++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ee=n.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,a.directionalShadow[E]=ee,a.directionalShadowMap[E]=fe,a.directionalShadowMatrix[E]=k.shadow.matrix,D++}a.directional[E]=F,E++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(re).multiplyScalar(ae),F.distance=pe,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,a.spot[T]=F;const H=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,k.castShadow){const ee=n.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,a.spotShadow[T]=ee,a.spotShadowMap[T]=fe,N++}T++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(re).multiplyScalar(ae),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),a.rectArea[y]=F,y++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,ee=n.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,a.pointShadow[b]=ee,a.pointShadowMap[b]=fe,a.pointShadowMatrix[b]=k.shadow.matrix,w++}a.point[b]=F,b++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(ae),F.groundColor.copy(k.groundColor).multiplyScalar(ae),a.hemi[x]=F,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==E||q.pointLength!==b||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==x||q.numDirectionalShadows!==D||q.numPointShadows!==w||q.numSpotShadows!==N||q.numSpotMaps!==P||q.numLightProbes!==I)&&(a.directional.length=E,a.spot.length=T,a.rectArea.length=y,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=N+P-B,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=I,q.directionalLength=E,q.pointLength=b,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=x,q.numDirectionalShadows=D,q.numPointShadows=w,q.numSpotShadows=N,q.numSpotMaps=P,q.numLightProbes=I,a.version=yw++)}function p(m,g){let _=0,v=0,E=0,b=0,T=0;const y=g.matrixWorldInverse;for(let x=0,D=m.length;x<D;x++){const w=m[x];if(w.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),_++}else if(w.isSpotLight){const N=a.spot[E];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),E++}else if(w.isRectAreaLight){const N=a.rectArea[b];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),c.identity(),u.copy(w.matrixWorld),u.premultiply(y),c.extractRotation(u),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),b++}else if(w.isPointLight){const N=a.point[v];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const N=a.hemi[T];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:a}}function ax(r){const e=new bw(r),n=[],a=[];function o(g){m.camera=g,n.length=0,a.length=0}function u(g){n.push(g)}function c(g){a.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function Mw(r){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new ax(r),e.set(o,[h])):u>=c.length?(h=new ax(r),c.push(h)):h=c[u],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Cw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],rx=new tn,vl=new Z,Bd=new Z;function ww(r,e,n){let a=new gS;const o=new nt,u=new nt,c=new cn,h=new zT,p=new HT,m={},g=n.maxTextureSize,_={[vr]:ei,[ei]:vr,[wa]:wa},v=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Tw,fragmentShader:Aw}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const b=new ra;b.setAttribute("position",new ia(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let x=this.type;this.render=function(B,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===wM&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Cc);const C=r.getRenderTarget(),L=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),re=r.state;re.setBlending(ta),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=x!==this.type;ae&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=B.length;pe<fe;pe++){const F=B[pe],H=F.shadow;if(H===void 0){lt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ee=H.getFrameExtents();if(o.multiply(ee),u.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ee.x),o.x=u.x*ee.x,H.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ee.y),o.y=u.y*ee.y,H.mapSize.y=u.y)),H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===yl){if(F.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ti(o.x,o.y,{format:oo,type:fi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Ul(o.x,o.y,$i),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Oa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn}else{F.isPointLight?(H.map=new _S(o.x),H.map.depthTexture=new FT(o.x,aa)):(H.map=new ti(o.x,o.y),H.map.depthTexture=new Ul(o.x,o.y,aa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Oa;const _e=r.state.buffers.depth.getReversed();this.type===Cc?(H.map.depthTexture.compareFunction=_e?sm:rm,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn)}H.camera.updateProjectionMatrix()}const oe=H.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<oe;_e++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(H.map),r.clear());const U=H.getViewport(_e);c.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),re.viewport(c)}if(F.isPointLight){const U=H.camera,Q=H.matrix,xe=F.distance||U.far;xe!==U.far&&(U.far=xe,U.updateProjectionMatrix()),vl.setFromMatrixPosition(F.matrixWorld),U.position.copy(vl),Bd.copy(U.position),Bd.add(Rw[_e]),U.up.copy(Cw[_e]),U.lookAt(Bd),U.updateMatrixWorld(),Q.makeTranslation(-vl.x,-vl.y,-vl.z),rx.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rx,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),N(I,q,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===yl&&D(H,q),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(C,L,k)};function D(B,I){const q=e.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ti(o.x,o.y,{format:oo,type:fi})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(I,null,q,v,T,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(I,null,q,E,T,null)}function w(B,I,q,C){let L=null;const k=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)L=k;else if(L=q.isPointLight===!0?p:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const re=L.uuid,ae=I.uuid;let pe=m[re];pe===void 0&&(pe={},m[re]=pe);let fe=pe[ae];fe===void 0&&(fe=L.clone(),pe[ae]=fe,I.addEventListener("dispose",P)),L=fe}if(L.visible=I.visible,L.wireframe=I.wireframe,C===yl?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:_[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const re=r.properties.get(L);re.light=q}return L}function N(B,I,q,C,L){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&L===yl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const ae=e.update(B),pe=B.material;if(Array.isArray(pe)){const fe=ae.groups;for(let F=0,H=fe.length;F<H;F++){const ee=fe[F],oe=pe[ee.materialIndex];if(oe&&oe.visible){const _e=w(B,oe,C,L);B.onBeforeShadow(r,B,I,q,ae,_e,ee),r.renderBufferDirect(q,null,ae,_e,B,ee),B.onAfterShadow(r,B,I,q,ae,_e,ee)}}}else if(pe.visible){const fe=w(B,pe,C,L);B.onBeforeShadow(r,B,I,q,ae,fe,null),r.renderBufferDirect(q,null,ae,fe,B,null),B.onAfterShadow(r,B,I,q,ae,fe,null)}}const re=B.children;for(let ae=0,pe=re.length;ae<pe;ae++)N(re[ae],I,q,C,L)}function P(B){B.target.removeEventListener("dispose",P);for(const q in m){const C=m[q],L=B.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}const Dw={[jd]:Zd,[Kd]:$d,[Qd]:ep,[ro]:Jd,[Zd]:jd,[$d]:Kd,[ep]:Qd,[Jd]:ro};function Lw(r,e){function n(){let X=!1;const Oe=new cn;let Re=null;const Be=new cn(0,0,0,0);return{setMask:function(Me){Re!==Me&&!X&&(r.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){X=Me},setClear:function(Me,ye,we,st,Bt){Bt===!0&&(Me*=st,ye*=st,we*=st),Oe.set(Me,ye,we,st),Be.equals(Oe)===!1&&(r.clearColor(Me,ye,we,st),Be.copy(Oe))},reset:function(){X=!1,Re=null,Be.set(-1,0,0,0)}}}function a(){let X=!1,Oe=!1,Re=null,Be=null,Me=null;return{setReversed:function(ye){if(Oe!==ye){const we=e.get("EXT_clip_control");ye?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Oe=ye;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return Oe},setTest:function(ye){ye?he(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(ye){Re!==ye&&!X&&(r.depthMask(ye),Re=ye)},setFunc:function(ye){if(Oe&&(ye=Dw[ye]),Be!==ye){switch(ye){case jd:r.depthFunc(r.NEVER);break;case Zd:r.depthFunc(r.ALWAYS);break;case Kd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Qd:r.depthFunc(r.EQUAL);break;case Jd:r.depthFunc(r.GEQUAL);break;case $d:r.depthFunc(r.GREATER);break;case ep:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ye}},setLocked:function(ye){X=ye},setClear:function(ye){Me!==ye&&(Oe&&(ye=1-ye),r.clearDepth(ye),Me=ye)},reset:function(){X=!1,Re=null,Be=null,Me=null,Oe=!1}}}function o(){let X=!1,Oe=null,Re=null,Be=null,Me=null,ye=null,we=null,st=null,Bt=null;return{setTest:function(Rt){X||(Rt?he(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Rt){Oe!==Rt&&!X&&(r.stencilMask(Rt),Oe=Rt)},setFunc:function(Rt,Fn,wi){(Re!==Rt||Be!==Fn||Me!==wi)&&(r.stencilFunc(Rt,Fn,wi),Re=Rt,Be=Fn,Me=wi)},setOp:function(Rt,Fn,wi){(ye!==Rt||we!==Fn||st!==wi)&&(r.stencilOp(Rt,Fn,wi),ye=Rt,we=Fn,st=wi)},setLocked:function(Rt){X=Rt},setClear:function(Rt){Bt!==Rt&&(r.clearStencil(Rt),Bt=Rt)},reset:function(){X=!1,Oe=null,Re=null,Be=null,Me=null,ye=null,we=null,st=null,Bt=null}}}const u=new n,c=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,E=[],b=null,T=!1,y=null,x=null,D=null,w=null,N=null,P=null,B=null,I=new _t(0,0,0),q=0,C=!1,L=null,k=null,re=null,ae=null,pe=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=H>=2);let oe=null,_e={};const U=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),xe=new cn().fromArray(U),Ce=new cn().fromArray(Q);function Ge(X,Oe,Re,Be){const Me=new Uint8Array(4),ye=r.createTexture();r.bindTexture(X,ye),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Re;we++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Oe+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ye}const ie={};ie[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),he(r.DEPTH_TEST),c.setFunc(ro),ft(!1),rn(fv),he(r.CULL_FACE),vt(ta);function he(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Ue(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function We(X,Oe){return _[X]!==Oe?(r.bindFramebuffer(X,Oe),_[X]=Oe,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Oe),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ve(X,Oe){let Re=E,Be=!1;if(X){Re=v.get(Oe),Re===void 0&&(Re=[],v.set(Oe,Re));const Me=X.textures;if(Re.length!==Me.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,we=Me.length;ye<we;ye++)Re[ye]=r.COLOR_ATTACHMENT0+ye;Re.length=Me.length,Be=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Re)}function gt(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const an={[Yr]:r.FUNC_ADD,[LM]:r.FUNC_SUBTRACT,[UM]:r.FUNC_REVERSE_SUBTRACT};an[NM]=r.MIN,an[OM]=r.MAX;const Et={[PM]:r.ZERO,[IM]:r.ONE,[FM]:r.SRC_COLOR,[Yd]:r.SRC_ALPHA,[kM]:r.SRC_ALPHA_SATURATE,[GM]:r.DST_COLOR,[zM]:r.DST_ALPHA,[BM]:r.ONE_MINUS_SRC_COLOR,[qd]:r.ONE_MINUS_SRC_ALPHA,[VM]:r.ONE_MINUS_DST_COLOR,[HM]:r.ONE_MINUS_DST_ALPHA,[XM]:r.CONSTANT_COLOR,[WM]:r.ONE_MINUS_CONSTANT_COLOR,[YM]:r.CONSTANT_ALPHA,[qM]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(X,Oe,Re,Be,Me,ye,we,st,Bt,Rt){if(X===ta){T===!0&&(Ue(r.BLEND),T=!1);return}if(T===!1&&(he(r.BLEND),T=!0),X!==DM){if(X!==y||Rt!==C){if((x!==Yr||N!==Yr)&&(r.blendEquation(r.FUNC_ADD),x=Yr,N=Yr),Rt)switch(X){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wd:r.blendFunc(r.ONE,r.ONE);break;case hv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",X);break}else switch(X){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",X);break}D=null,w=null,P=null,B=null,I.set(0,0,0),q=0,y=X,C=Rt}return}Me=Me||Oe,ye=ye||Re,we=we||Be,(Oe!==x||Me!==N)&&(r.blendEquationSeparate(an[Oe],an[Me]),x=Oe,N=Me),(Re!==D||Be!==w||ye!==P||we!==B)&&(r.blendFuncSeparate(Et[Re],Et[Be],Et[ye],Et[we]),D=Re,w=Be,P=ye,B=we),(st.equals(I)===!1||Bt!==q)&&(r.blendColor(st.r,st.g,st.b,Bt),I.copy(st),q=Bt),y=X,C=!1}function Ut(X,Oe){X.side===wa?Ue(r.CULL_FACE):he(r.CULL_FACE);let Re=X.side===ei;Oe&&(Re=!Re),ft(Re),X.blending===io&&X.transparent===!1?vt(ta):vt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),u.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){L!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),L=X)}function rn(X){X!==RM?(he(r.CULL_FACE),X!==k&&(X===fv?r.cullFace(r.BACK):X===CM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),k=X}function G(X){X!==re&&(F&&r.lineWidth(X),re=X)}function Jt(X,Oe,Re){X?(he(r.POLYGON_OFFSET_FILL),(ae!==Oe||pe!==Re)&&(r.polygonOffset(Oe,Re),ae=Oe,pe=Re)):Ue(r.POLYGON_OFFSET_FILL)}function At(X){X?he(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function It(X){X===void 0&&(X=r.TEXTURE0+fe-1),oe!==X&&(r.activeTexture(X),oe=X)}function Ze(X,Oe,Re){Re===void 0&&(oe===null?Re=r.TEXTURE0+fe-1:Re=oe);let Be=_e[Re];Be===void 0&&(Be={type:void 0,texture:void 0},_e[Re]=Be),(Be.type!==X||Be.texture!==Oe)&&(oe!==Re&&(r.activeTexture(Re),oe=Re),r.bindTexture(X,Oe||ie[X]),Be.type=X,Be.texture=Oe)}function O(){const X=_e[oe];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function me(){try{r.texSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function be(){try{r.texSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Qe(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function De(){try{r.texStorage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ye(){try{r.texStorage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function rt(){try{r.texImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Te(){try{r.texImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ae(X){xe.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),xe.copy(X))}function ze(X){Ce.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Fe(X,Oe){let Re=m.get(Oe);Re===void 0&&(Re=new WeakMap,m.set(Oe,Re));let Be=Re.get(X);Be===void 0&&(Be=r.getUniformBlockIndex(Oe,X.name),Re.set(X,Be))}function Le(X,Oe){const Be=m.get(Oe).get(X);p.get(Oe)!==Be&&(r.uniformBlockBinding(Oe,Be,X.__bindingPointIndex),p.set(Oe,Be))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},oe=null,_e={},_={},v=new WeakMap,E=[],b=null,T=!1,y=null,x=null,D=null,w=null,N=null,P=null,B=null,I=new _t(0,0,0),q=0,C=!1,L=null,k=null,re=null,ae=null,pe=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:he,disable:Ue,bindFramebuffer:We,drawBuffers:Ve,useProgram:gt,setBlending:vt,setMaterial:Ut,setFlipSided:ft,setCullFace:rn,setLineWidth:G,setPolygonOffset:Jt,setScissorTest:At,activeTexture:It,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:rt,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:Le,texStorage2D:De,texStorage3D:Ye,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:Qe,scissor:Ae,viewport:ze,reset:dt}}function Uw(r,e,n,a,o,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nt,g=new WeakMap;let _;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,M){return E?new OffscreenCanvas(O,M):Dl("canvas")}function T(O,M,W){let me=1;const be=Ze(O);if((be.width>W||be.height>W)&&(me=W/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ce=Math.floor(me*be.width),Qe=Math.floor(me*be.height);_===void 0&&(_=b(ce,Qe));const De=M?b(ce,Qe):_;return De.width=ce,De.height=Qe,De.getContext("2d").drawImage(O,0,0,ce,Qe),lt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ce+"x"+Qe+")."),De}else return"data"in O&&lt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(O,M,W,me,be=!1){if(O!==null){if(r[O]!==void 0)return r[O];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ce=M;if(M===r.RED&&(W===r.FLOAT&&(ce=r.R32F),W===r.HALF_FLOAT&&(ce=r.R16F),W===r.UNSIGNED_BYTE&&(ce=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.R8UI),W===r.UNSIGNED_SHORT&&(ce=r.R16UI),W===r.UNSIGNED_INT&&(ce=r.R32UI),W===r.BYTE&&(ce=r.R8I),W===r.SHORT&&(ce=r.R16I),W===r.INT&&(ce=r.R32I)),M===r.RG&&(W===r.FLOAT&&(ce=r.RG32F),W===r.HALF_FLOAT&&(ce=r.RG16F),W===r.UNSIGNED_BYTE&&(ce=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RG8UI),W===r.UNSIGNED_SHORT&&(ce=r.RG16UI),W===r.UNSIGNED_INT&&(ce=r.RG32UI),W===r.BYTE&&(ce=r.RG8I),W===r.SHORT&&(ce=r.RG16I),W===r.INT&&(ce=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),W===r.UNSIGNED_INT&&(ce=r.RGB32UI),W===r.BYTE&&(ce=r.RGB8I),W===r.SHORT&&(ce=r.RGB16I),W===r.INT&&(ce=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),W===r.UNSIGNED_INT&&(ce=r.RGBA32UI),W===r.BYTE&&(ce=r.RGBA8I),W===r.SHORT&&(ce=r.RGBA16I),W===r.INT&&(ce=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),M===r.RGBA){const Qe=be?Bc:Ct.getTransfer(me);W===r.FLOAT&&(ce=r.RGBA32F),W===r.HALF_FLOAT&&(ce=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ce=Qe===Vt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(O,M){let W;return O?M===null||M===aa||M===wl?W=r.DEPTH24_STENCIL8:M===$i?W=r.DEPTH32F_STENCIL8:M===Cl&&(W=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===aa||M===wl?W=r.DEPTH_COMPONENT24:M===$i?W=r.DEPTH_COMPONENT32F:M===Cl&&(W=r.DEPTH_COMPONENT16),W}function P(O,M){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Sn&&O.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function B(O){const M=O.target;M.removeEventListener("dispose",B),q(M),M.isVideoTexture&&g.delete(M)}function I(O){const M=O.target;M.removeEventListener("dispose",I),L(M)}function q(O){const M=a.get(O);if(M.__webglInit===void 0)return;const W=O.source,me=v.get(W);if(me){const be=me[M.__cacheKey];be.usedTimes--,be.usedTimes===0&&C(O),Object.keys(me).length===0&&v.delete(W)}a.remove(O)}function C(O){const M=a.get(O);r.deleteTexture(M.__webglTexture);const W=O.source,me=v.get(W);delete me[M.__cacheKey],c.memory.textures--}function L(O){const M=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let be=0;be<M.__webglFramebuffer[me].length;be++)r.deleteFramebuffer(M.__webglFramebuffer[me][be]);else r.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)r.deleteFramebuffer(M.__webglFramebuffer[me]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=O.textures;for(let me=0,be=W.length;me<be;me++){const ce=a.get(W[me]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),c.memory.textures--),a.remove(W[me])}a.remove(O)}let k=0;function re(){k=0}function ae(){const O=k;return O>=o.maxTextures&&lt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),k+=1,O}function pe(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function fe(O,M){const W=a.get(O);if(O.isVideoTexture&&At(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&W.__version!==O.version){const me=O.image;if(me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(W,O,M);return}}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function F(O,M){const W=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){ie(W,O,M);return}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function H(O,M){const W=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){ie(W,O,M);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function ee(O,M){const W=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&W.__version!==O.version){he(W,O,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}const oe={[ip]:r.REPEAT,[Da]:r.CLAMP_TO_EDGE,[ap]:r.MIRRORED_REPEAT},_e={[Sn]:r.NEAREST,[KM]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[ld]:r.LINEAR_MIPMAP_NEAREST,[jr]:r.LINEAR_MIPMAP_LINEAR},U={[eT]:r.NEVER,[rT]:r.ALWAYS,[tT]:r.LESS,[rm]:r.LEQUAL,[nT]:r.EQUAL,[sm]:r.GEQUAL,[iT]:r.GREATER,[aT]:r.NOTEQUAL};function Q(O,M){if(M.type===$i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===ld||M.magFilter===nc||M.magFilter===jr||M.minFilter===Gn||M.minFilter===ld||M.minFilter===nc||M.minFilter===jr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,oe[M.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,oe[M.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,oe[M.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,_e[M.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==nc&&M.minFilter!==jr||M.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function xe(O,M){let W=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",B));const me=M.source;let be=v.get(me);be===void 0&&(be={},v.set(me,be));const ce=pe(M);if(ce!==O.__cacheKey){be[ce]===void 0&&(be[ce]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,W=!0),be[ce].usedTimes++;const Qe=be[O.__cacheKey];Qe!==void 0&&(be[O.__cacheKey].usedTimes--,Qe.usedTimes===0&&C(M)),O.__cacheKey=ce,O.__webglTexture=be[ce].texture}return W}function Ce(O,M,W){return Math.floor(Math.floor(O/W)/M)}function Ge(O,M,W,me){const ce=O.updateRanges;if(ce.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,me,M.data);else{ce.sort((Te,Ae)=>Te.start-Ae.start);let Qe=0;for(let Te=1;Te<ce.length;Te++){const Ae=ce[Qe],ze=ce[Te],Fe=Ae.start+Ae.count,Le=Ce(ze.start,M.width,4),dt=Ce(Ae.start,M.width,4);ze.start<=Fe+1&&Le===dt&&Ce(ze.start+ze.count-1,M.width,4)===Le?Ae.count=Math.max(Ae.count,ze.start+ze.count-Ae.start):(++Qe,ce[Qe]=ze)}ce.length=Qe+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Te=0,Ae=ce.length;Te<Ae;Te++){const ze=ce[Te],Fe=Math.floor(ze.start/4),Le=Math.ceil(ze.count/4),dt=Fe%M.width,X=Math.floor(Fe/M.width),Oe=Le,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,dt,X,Oe,Re,W,me,M.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function ie(O,M,W){let me=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=r.TEXTURE_3D);const be=xe(O,M),ce=M.source;n.bindTexture(me,O.__webglTexture,r.TEXTURE0+W);const Qe=a.get(ce);if(ce.version!==Qe.__version||be===!0){n.activeTexture(r.TEXTURE0+W);const De=Ct.getPrimaries(Ct.workingColorSpace),Ye=M.colorSpace===_r?null:Ct.getPrimaries(M.colorSpace),rt=M.colorSpace===_r||De===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Te=T(M.image,!1,o.maxTextureSize);Te=It(M,Te);const Ae=u.convert(M.format,M.colorSpace),ze=u.convert(M.type);let Fe=w(M.internalFormat,Ae,ze,M.colorSpace,M.isVideoTexture);Q(me,M);let Le;const dt=M.mipmaps,X=M.isVideoTexture!==!0,Oe=Qe.__version===void 0||be===!0,Re=ce.dataReady,Be=P(M,Te);if(M.isDepthTexture)Fe=N(M.format===Zr,M.type),Oe&&(X?n.texStorage2D(r.TEXTURE_2D,1,Fe,Te.width,Te.height):n.texImage2D(r.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Ae,ze,null));else if(M.isDataTexture)if(dt.length>0){X&&Oe&&n.texStorage2D(r.TEXTURE_2D,Be,Fe,dt[0].width,dt[0].height);for(let Me=0,ye=dt.length;Me<ye;Me++)Le=dt[Me],X?Re&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ae,ze,Le.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Le.width,Le.height,0,Ae,ze,Le.data);M.generateMipmaps=!1}else X?(Oe&&n.texStorage2D(r.TEXTURE_2D,Be,Fe,Te.width,Te.height),Re&&Ge(M,Te,Ae,ze)):n.texImage2D(r.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Ae,ze,Te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Oe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Fe,dt[0].width,dt[0].height,Te.depth);for(let Me=0,ye=dt.length;Me<ye;Me++)if(Le=dt[Me],M.format!==zi)if(Ae!==null)if(X){if(Re)if(M.layerUpdates.size>0){const we=Iv(Le.width,Le.height,M.format,M.type);for(const st of M.layerUpdates){const Bt=Le.data.subarray(st*we/Le.data.BYTES_PER_ELEMENT,(st+1)*we/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,st,Le.width,Le.height,1,Ae,Bt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,Ae,Le.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Le.width,Le.height,Te.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,Ae,ze,Le.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,Le.width,Le.height,Te.depth,0,Ae,ze,Le.data)}else{X&&Oe&&n.texStorage2D(r.TEXTURE_2D,Be,Fe,dt[0].width,dt[0].height);for(let Me=0,ye=dt.length;Me<ye;Me++)Le=dt[Me],M.format!==zi?Ae!==null?X?Re&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ae,Le.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,Fe,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ae,ze,Le.data):n.texImage2D(r.TEXTURE_2D,Me,Fe,Le.width,Le.height,0,Ae,ze,Le.data)}else if(M.isDataArrayTexture)if(X){if(Oe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Fe,Te.width,Te.height,Te.depth),Re)if(M.layerUpdates.size>0){const Me=Iv(Te.width,Te.height,M.format,M.type);for(const ye of M.layerUpdates){const we=Te.data.subarray(ye*Me/Te.data.BYTES_PER_ELEMENT,(ye+1)*Me/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Te.width,Te.height,1,Ae,ze,we)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ae,ze,Te.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Te.width,Te.height,Te.depth,0,Ae,ze,Te.data);else if(M.isData3DTexture)X?(Oe&&n.texStorage3D(r.TEXTURE_3D,Be,Fe,Te.width,Te.height,Te.depth),Re&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ae,ze,Te.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,Te.width,Te.height,Te.depth,0,Ae,ze,Te.data);else if(M.isFramebufferTexture){if(Oe)if(X)n.texStorage2D(r.TEXTURE_2D,Be,Fe,Te.width,Te.height);else{let Me=Te.width,ye=Te.height;for(let we=0;we<Be;we++)n.texImage2D(r.TEXTURE_2D,we,Fe,Me,ye,0,Ae,ze,null),Me>>=1,ye>>=1}}else if(dt.length>0){if(X&&Oe){const Me=Ze(dt[0]);n.texStorage2D(r.TEXTURE_2D,Be,Fe,Me.width,Me.height)}for(let Me=0,ye=dt.length;Me<ye;Me++)Le=dt[Me],X?Re&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ae,ze,Le):n.texImage2D(r.TEXTURE_2D,Me,Fe,Ae,ze,Le);M.generateMipmaps=!1}else if(X){if(Oe){const Me=Ze(Te);n.texStorage2D(r.TEXTURE_2D,Be,Fe,Me.width,Me.height)}Re&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,ze,Te)}else n.texImage2D(r.TEXTURE_2D,0,Fe,Ae,ze,Te);y(M)&&x(me),Qe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function he(O,M,W){if(M.image.length!==6)return;const me=xe(O,M),be=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+W);const ce=a.get(be);if(be.version!==ce.__version||me===!0){n.activeTexture(r.TEXTURE0+W);const Qe=Ct.getPrimaries(Ct.workingColorSpace),De=M.colorSpace===_r?null:Ct.getPrimaries(M.colorSpace),Ye=M.colorSpace===_r||Qe===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let ye=0;ye<6;ye++)!rt&&!Te?Ae[ye]=T(M.image[ye],!0,o.maxCubemapSize):Ae[ye]=Te?M.image[ye].image:M.image[ye],Ae[ye]=It(M,Ae[ye]);const ze=Ae[0],Fe=u.convert(M.format,M.colorSpace),Le=u.convert(M.type),dt=w(M.internalFormat,Fe,Le,M.colorSpace),X=M.isVideoTexture!==!0,Oe=ce.__version===void 0||me===!0,Re=be.dataReady;let Be=P(M,ze);Q(r.TEXTURE_CUBE_MAP,M);let Me;if(rt){X&&Oe&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Be,dt,ze.width,ze.height);for(let ye=0;ye<6;ye++){Me=Ae[ye].mipmaps;for(let we=0;we<Me.length;we++){const st=Me[we];M.format!==zi?Fe!==null?X?Re&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Fe,st.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,dt,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,0,0,st.width,st.height,Fe,Le,st.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we,dt,st.width,st.height,0,Fe,Le,st.data)}}}else{if(Me=M.mipmaps,X&&Oe){Me.length>0&&Be++;const ye=Ze(Ae[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Be,dt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Te){X?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ae[ye].width,Ae[ye].height,Fe,Le,Ae[ye].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Ae[ye].width,Ae[ye].height,0,Fe,Le,Ae[ye].data);for(let we=0;we<Me.length;we++){const Bt=Me[we].image[ye].image;X?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Bt.width,Bt.height,Fe,Le,Bt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,dt,Bt.width,Bt.height,0,Fe,Le,Bt.data)}}else{X?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Fe,Le,Ae[ye]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Fe,Le,Ae[ye]);for(let we=0;we<Me.length;we++){const st=Me[we];X?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,0,0,Fe,Le,st.image[ye]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we+1,dt,Fe,Le,st.image[ye])}}}y(M)&&x(r.TEXTURE_CUBE_MAP),ce.__version=be.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Ue(O,M,W,me,be,ce){const Qe=u.convert(W.format,W.colorSpace),De=u.convert(W.type),Ye=w(W.internalFormat,Qe,De,W.colorSpace),rt=a.get(M),Te=a.get(W);if(Te.__renderTarget=M,!rt.__hasExternalTextures){const Ae=Math.max(1,M.width>>ce),ze=Math.max(1,M.height>>ce);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?n.texImage3D(be,ce,Ye,Ae,ze,M.depth,0,Qe,De,null):n.texImage2D(be,ce,Ye,Ae,ze,0,Qe,De,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,be,Te.__webglTexture,0,G(M)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,be,Te.__webglTexture,ce),n.bindFramebuffer(r.FRAMEBUFFER,null)}function We(O,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,O),M.depthBuffer){const me=M.depthTexture,be=me&&me.isDepthTexture?me.type:null,ce=N(M.stencilBuffer,be),Qe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),ce,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qe,r.RENDERBUFFER,O)}else{const me=M.textures;for(let be=0;be<me.length;be++){const ce=me[be],Qe=u.convert(ce.format,ce.colorSpace),De=u.convert(ce.type),Ye=w(ce.internalFormat,Qe,De,ce.colorSpace);Jt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),Ye,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),Ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(O,M,W){const me=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(M.depthTexture);if(be.__renderTarget=M,(!be.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me){if(be.__webglInit===void 0&&(be.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M.depthTexture);const rt=u.convert(M.depthTexture.format),Te=u.convert(M.depthTexture.type);let Ae;M.depthTexture.format===Oa?Ae=r.DEPTH_COMPONENT24:M.depthTexture.format===Zr&&(Ae=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ae,M.width,M.height,0,rt,Te,null)}}else fe(M.depthTexture,0);const ce=be.__webglTexture,Qe=G(M),De=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Ye=M.depthTexture.format===Zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Oa)Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,De,ce,0,Qe):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,De,ce,0);else if(M.depthTexture.format===Zr)Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,De,ce,0,Qe):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,De,ce,0);else throw new Error("Unknown depthTexture format")}function gt(O){const M=a.get(O),W=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const be=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),M.__depthDisposeCallback=be}M.__boundDepthTexture=me}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Ve(M.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Ve(M.__webglFramebuffer[0],O,0):Ve(M.__webglFramebuffer,O,0)}else if(W){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=r.createRenderbuffer(),We(M.__webglDepthbuffer[me],O,!1);else{const be=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ce)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),We(M.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ce)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function an(O,M,W){const me=a.get(O);M!==void 0&&Ue(me.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&gt(O)}function Et(O){const M=O.texture,W=a.get(O),me=a.get(M);O.addEventListener("dispose",I);const be=O.textures,ce=O.isWebGLCubeRenderTarget===!0,Qe=be.length>1;if(Qe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=M.version,c.memory.textures++),ce){W.__webglFramebuffer=[];for(let De=0;De<6;De++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[De]=[];for(let Ye=0;Ye<M.mipmaps.length;Ye++)W.__webglFramebuffer[De][Ye]=r.createFramebuffer()}else W.__webglFramebuffer[De]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let De=0;De<M.mipmaps.length;De++)W.__webglFramebuffer[De]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Qe)for(let De=0,Ye=be.length;De<Ye;De++){const rt=a.get(be[De]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),c.memory.textures++)}if(O.samples>0&&Jt(O)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let De=0;De<be.length;De++){const Ye=be[De];W.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[De]);const rt=u.convert(Ye.format,Ye.colorSpace),Te=u.convert(Ye.type),Ae=w(Ye.internalFormat,rt,Te,Ye.colorSpace,O.isXRRenderTarget===!0),ze=G(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Ae,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,W.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),We(W.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M);for(let De=0;De<6;De++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)Ue(W.__webglFramebuffer[De][Ye],O,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ye);else Ue(W.__webglFramebuffer[De],O,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(M)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Qe){for(let De=0,Ye=be.length;De<Ye;De++){const rt=be[De],Te=a.get(rt);let Ae=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Te.__webglTexture),Q(Ae,rt),Ue(W.__webglFramebuffer,O,rt,r.COLOR_ATTACHMENT0+De,Ae,0),y(rt)&&x(Ae)}n.unbindTexture()}else{let De=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(De,me.__webglTexture),Q(De,M),M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)Ue(W.__webglFramebuffer[Ye],O,M,r.COLOR_ATTACHMENT0,De,Ye);else Ue(W.__webglFramebuffer,O,M,r.COLOR_ATTACHMENT0,De,0);y(M)&&x(De),n.unbindTexture()}O.depthBuffer&&gt(O)}function vt(O){const M=O.textures;for(let W=0,me=M.length;W<me;W++){const be=M[W];if(y(be)){const ce=D(O),Qe=a.get(be).__webglTexture;n.bindTexture(ce,Qe),x(ce),n.unbindTexture()}}}const Ut=[],ft=[];function rn(O){if(O.samples>0){if(Jt(O)===!1){const M=O.textures,W=O.width,me=O.height;let be=r.COLOR_BUFFER_BIT;const ce=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qe=a.get(O),De=M.length>1;if(De)for(let rt=0;rt<M.length;rt++)n.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[rt]);const Te=a.get(M[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,W,me,0,0,W,me,be,r.NEAREST),p===!0&&(Ut.length=0,ft.length=0,Ut.push(r.COLOR_ATTACHMENT0+rt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ut.push(ce),ft.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let rt=0;rt<M.length;rt++){n.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[rt]);const Te=a.get(M[rt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,Te,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const M=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function G(O){return Math.min(o.maxSamples,O.samples)}function Jt(O){const M=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(O){const M=c.render.frame;g.get(O)!==M&&(g.set(O,M),O.update())}function It(O,M){const W=O.colorSpace,me=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||W!==lo&&W!==_r&&(Ct.getTransfer(W)===Vt?(me!==zi||be!==Ai)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",W)),M}function Ze(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=an,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Nw(r,e){function n(a,o=_r){let u;const c=Ct.getTransfer(o);if(a===Ai)return r.UNSIGNED_BYTE;if(a===em)return r.UNSIGNED_SHORT_4_4_4_4;if(a===tm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===tS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===nS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===$x)return r.BYTE;if(a===eS)return r.SHORT;if(a===Cl)return r.UNSIGNED_SHORT;if(a===$p)return r.INT;if(a===aa)return r.UNSIGNED_INT;if(a===$i)return r.FLOAT;if(a===fi)return r.HALF_FLOAT;if(a===iS)return r.ALPHA;if(a===aS)return r.RGB;if(a===zi)return r.RGBA;if(a===Oa)return r.DEPTH_COMPONENT;if(a===Zr)return r.DEPTH_STENCIL;if(a===rS)return r.RED;if(a===nm)return r.RED_INTEGER;if(a===oo)return r.RG;if(a===im)return r.RG_INTEGER;if(a===am)return r.RGBA_INTEGER;if(a===wc||a===Dc||a===Lc||a===Uc)if(c===Vt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Uc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rp||a===sp||a===op||a===lp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===rp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===up||a===cp||a===fp||a===hp||a===dp||a===pp||a===mp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===up||a===cp)return c===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===fp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===hp)return u.COMPRESSED_R11_EAC;if(a===dp)return u.COMPRESSED_SIGNED_R11_EAC;if(a===pp)return u.COMPRESSED_RG11_EAC;if(a===mp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===_p||a===gp||a===vp||a===xp||a===Sp||a===yp||a===Ep||a===bp||a===Mp||a===Tp||a===Ap||a===Rp||a===Cp||a===wp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===_p)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===gp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===vp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Sp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ep)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Mp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Tp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ap)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Cp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wp)return c===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Dp||a===Lp||a===Up)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===Dp)return c===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Lp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Up)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Np||a===Op||a===Pp||a===Ip)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===Np)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Op)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ip)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new vS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new In({vertexShader:Ow,fragmentShader:Pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vi(new Gl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fw extends $r{constructor(e,n){super();const a=this;let o=null,u=1,c=null,h="local-floor",p=1,m=null,g=null,_=null,v=null,E=null,b=null;const T=typeof XRWebGLBinding<"u",y=new Iw,x={},D=n.getContextAttributes();let w=null,N=null;const P=[],B=[],I=new nt;let q=null;const C=new Ti;C.viewport=new cn;const L=new Ti;L.viewport=new cn;const k=[C,L],re=new WT;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=P[ie];return he===void 0&&(he=new Dd,P[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=P[ie];return he===void 0&&(he=new Dd,P[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=P[ie];return he===void 0&&(he=new Dd,P[ie]=he),he.getHandSpace()};function fe(ie){const he=B.indexOf(ie.inputSource);if(he===-1)return;const Ue=P[he];Ue!==void 0&&(Ue.update(ie.inputSource,ie.frame,m||c),Ue.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let ie=0;ie<P.length;ie++){const he=B[ie];he!==null&&(B[ie]=null,P[ie].disconnect(he))}ae=null,pe=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(w),E=null,v=null,_=null,o=null,N=null,Ge.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,a.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,a.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,We=null,Ve=null;D.depth&&(Ve=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=D.stencil?Zr:Oa,We=D.stencil?wl:aa);const gt={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(gt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ti(v.textureWidth,v.textureHeight,{format:zi,type:Ai,depthTexture:new Ul(v.textureWidth,v.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ue={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(o,n,Ue),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new ti(E.framebufferWidth,E.framebufferHeight,{format:zi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(h),Ge.setContext(o),Ge.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ie){for(let he=0;he<ie.removed.length;he++){const Ue=ie.removed[he],We=B.indexOf(Ue);We>=0&&(B[We]=null,P[We].disconnect(Ue))}for(let he=0;he<ie.added.length;he++){const Ue=ie.added[he];let We=B.indexOf(Ue);if(We===-1){for(let gt=0;gt<P.length;gt++)if(gt>=B.length){B.push(Ue),We=gt;break}else if(B[gt]===null){B[gt]=Ue,We=gt;break}if(We===-1)break}const Ve=P[We];Ve&&Ve.connect(Ue)}}const ee=new Z,oe=new Z;function _e(ie,he,Ue){ee.setFromMatrixPosition(he.matrixWorld),oe.setFromMatrixPosition(Ue.matrixWorld);const We=ee.distanceTo(oe),Ve=he.projectionMatrix.elements,gt=Ue.projectionMatrix.elements,an=Ve[14]/(Ve[10]-1),Et=Ve[14]/(Ve[10]+1),vt=(Ve[9]+1)/Ve[5],Ut=(Ve[9]-1)/Ve[5],ft=(Ve[8]-1)/Ve[0],rn=(gt[8]+1)/gt[0],G=an*ft,Jt=an*rn,At=We/(-ft+rn),It=At*-ft;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(It),ie.translateZ(At),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ze=an+At,O=Et+At,M=G-It,W=Jt+(We-It),me=vt*Et/O*Ze,be=Ut*Et/O*Ze;ie.projectionMatrix.makePerspective(M,W,me,be,Ze,O),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let he=ie.near,Ue=ie.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Ue=y.depthFar)),re.near=L.near=C.near=he,re.far=L.far=C.far=Ue,(ae!==re.near||pe!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),ae=re.near,pe=re.far),re.layers.mask=ie.layers.mask|6,C.layers.mask=re.layers.mask&3,L.layers.mask=re.layers.mask&5;const We=ie.parent,Ve=re.cameras;U(re,We);for(let gt=0;gt<Ve.length;gt++)U(Ve[gt],We);Ve.length===2?_e(re,C,L):re.projectionMatrix.copy(C.projectionMatrix),Q(ie,re,We)};function Q(ie,he,Ue){Ue===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Ue.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Fp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(ie){p=ie,v!==null&&(v.fixedFoveation=ie),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(ie){return x[ie]};let xe=null;function Ce(ie,he){if(g=he.getViewerPose(m||c),b=he,g!==null){const Ue=g.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let We=!1;Ue.length!==re.cameras.length&&(re.cameras.length=0,We=!0);for(let Et=0;Et<Ue.length;Et++){const vt=Ue[Et];let Ut=null;if(E!==null)Ut=E.getViewport(vt);else{const rn=_.getViewSubImage(v,vt);Ut=rn.viewport,Et===0&&(e.setRenderTargetTextures(N,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(N))}let ft=k[Et];ft===void 0&&(ft=new Ti,ft.layers.enable(Et),ft.viewport=new cn,k[Et]=ft),ft.matrix.fromArray(vt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(vt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Et===0&&(re.matrix.copy(ft.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),We===!0&&re.cameras.push(ft)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const Et=_.getDepthInformation(Ue[0]);Et&&Et.isValid&&Et.texture&&y.init(Et,o.renderState)}if(Ve&&Ve.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let Et=0;Et<Ue.length;Et++){const vt=Ue[Et].camera;if(vt){let Ut=x[vt];Ut||(Ut=new vS,x[vt]=Ut);const ft=_.getCameraImage(vt);Ut.sourceTexture=ft}}}}for(let Ue=0;Ue<P.length;Ue++){const We=B[Ue],Ve=P[Ue];We!==null&&Ve!==void 0&&Ve.update(We,he,m||c)}xe&&xe(ie,he),he.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:he}),b=null}const Ge=new xS;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const Wr=new Pa,Bw=new tn;function zw(r,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,dS(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,w,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),v(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),T(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,D,w):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ei&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ei&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),w=D.envMap,N=D.envMapRotation;w&&(y.envMap.value=w,Wr.copy(N),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Wr)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,D,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=w*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Hw(r,e,n,a){let o={},u={},c=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const N=w.program;a.uniformBlockBinding(D,N)}function m(D,w){let N=o[D.id];N===void 0&&(b(D),N=g(D),o[D.id]=N,D.addEventListener("dispose",y));const P=w.program;a.updateUBOMapping(D,P);const B=e.render.frame;u[D.id]!==B&&(v(D),u[D.id]=B)}function g(D){const w=_();D.__bindingPointIndex=w;const N=r.createBuffer(),P=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,P,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,N),N}function _(){for(let D=0;D<h;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const w=o[D.id],N=D.uniforms,P=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let B=0,I=N.length;B<I;B++){const q=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,L=q.length;C<L;C++){const k=q[C];if(E(k,B,C,P)===!0){const re=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<ae.length;fe++){const F=ae[fe],H=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,re+pe,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,re,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,w,N,P){const B=D.value,I=w+"_"+N;if(P[I]===void 0)return typeof B=="number"||typeof B=="boolean"?P[I]=B:P[I]=B.clone(),!0;{const q=P[I];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return P[I]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(D){const w=D.uniforms;let N=0;const P=16;for(let I=0,q=w.length;I<q;I++){const C=Array.isArray(w[I])?w[I]:[w[I]];for(let L=0,k=C.length;L<k;L++){const re=C[L],ae=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,fe=ae.length;pe<fe;pe++){const F=ae[pe],H=T(F),ee=N%P,oe=ee%H.boundary,_e=ee+oe;N+=oe,_e!==0&&P-_e<H.storage&&(N+=P-_e),re.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=N,N+=H.storage}}}const B=N%P;return B>0&&(N+=P-B),D.__size=N,D.__cache={},this}function T(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",D),w}function y(D){const w=D.target;w.removeEventListener("dispose",y);const N=c.indexOf(w.__bindingPointIndex);c.splice(N,1),r.deleteBuffer(o[w.id]),delete o[w.id],delete u[w.id]}function x(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},u={}}return{bind:p,update:m,dispose:x}}const Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function Vw(){return Ki===null&&(Ki=new NT(Gw,16,16,oo,fi),Ki.name="DFG_LUT",Ki.minFilter=Gn,Ki.magFilter=Gn,Ki.wrapS=Da,Ki.wrapT=Da,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class kw{constructor(e={}){const{canvas:n=sT(),context:a=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ai}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const T=E,y=new Set([am,im,nm]),x=new Set([Ai,aa,Cl,wl,em,tm]),D=new Uint32Array(4),w=new Int32Array(4);let N=null,P=null;const B=[],I=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1;this._outputColorSpace=Mi;let k=0,re=0,ae=null,pe=-1,fe=null;const F=new cn,H=new cn;let ee=null;const oe=new _t(0);let _e=0,U=n.width,Q=n.height,xe=1,Ce=null,Ge=null;const ie=new cn(0,0,U,Q),he=new cn(0,0,U,Q);let Ue=!1;const We=new gS;let Ve=!1,gt=!1;const an=new tn,Et=new Z,vt=new cn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function rn(){return ae===null?xe:1}let G=a;function Jt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jp}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Rt,!1),G===null){const Y="webgl2";if(G=Jt(Y,R),G===null)throw Jt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Lt("WebGLRenderer: "+R.message),R}let At,It,Ze,O,M,W,me,be,ce,Qe,De,Ye,rt,Te,Ae,ze,Fe,Le,dt,X,Oe,Re,Be,Me;function ye(){At=new VR(G),At.init(),Re=new Nw(G,At),It=new NR(G,At,e,Re),Ze=new Lw(G,At),It.reversedDepthBuffer&&v&&Ze.buffers.depth.setReversed(!0),O=new WR(G),M=new _w,W=new Uw(G,At,Ze,M,It,Re,O),me=new PR(C),be=new GR(C),ce=new ZT(G),Be=new LR(G,ce),Qe=new kR(G,ce,O,Be),De=new qR(G,Qe,ce,O),dt=new YR(G,It,W),ze=new OR(M),Ye=new mw(C,me,be,At,It,Be,ze),rt=new zw(C,M),Te=new vw,Ae=new Mw(At),Le=new DR(C,me,be,Ze,De,b,p),Fe=new ww(C,De,It),Me=new Hw(G,O,It,Ze),X=new UR(G,At,O),Oe=new XR(G,At,O),O.programs=Ye.programs,C.capabilities=It,C.extensions=At,C.properties=M,C.renderLists=Te,C.shadowMap=Fe,C.state=Ze,C.info=O}ye(),T!==Ai&&(q=new ZR(T,n.width,n.height,o,u));const we=new Fw(C,G);this.xr=we,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(U,Q,!1))},this.getSize=function(R){return R.set(U,Q)},this.setSize=function(R,Y,le=!0){if(we.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,Q=Y,n.width=Math.floor(R*xe),n.height=Math.floor(Y*xe),le===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(U*xe,Q*xe).floor()},this.setDrawingBufferSize=function(R,Y,le){U=R,Q=Y,xe=le,n.width=Math.floor(R*le),n.height=Math.floor(Y*le),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===Ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,Y,le,te){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,Y,le,te),Ze.viewport(F.copy(ie).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,Y,le,te){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Y,le,te),Ze.scissor(H.copy(he).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){Ze.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,le=!0){let te=0;if(R){let K=!1;if(ae!==null){const Ne=ae.texture.format;K=y.has(Ne)}if(K){const Ne=ae.texture.type,He=x.has(Ne),Pe=Le.getClearColor(),ke=Le.getClearAlpha(),qe=Pe.r,et=Pe.g,je=Pe.b;He?(D[0]=qe,D[1]=et,D[2]=je,D[3]=ke,G.clearBufferuiv(G.COLOR,0,D)):(w[0]=qe,w[1]=et,w[2]=je,w[3]=ke,G.clearBufferiv(G.COLOR,0,w))}else te|=G.COLOR_BUFFER_BIT}Y&&(te|=G.DEPTH_BUFFER_BIT),le&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Rt,!1),Le.dispose(),Te.dispose(),Ae.dispose(),M.dispose(),me.dispose(),be.dispose(),De.dispose(),Be.dispose(),Me.dispose(),Ye.dispose(),we.dispose(),we.removeEventListener("sessionstart",ns),we.removeEventListener("sessionend",xo),Wi.stop()};function st(R){R.preventDefault(),vv("WebGLRenderer: Context Lost."),L=!0}function Bt(){vv("WebGLRenderer: Context Restored."),L=!1;const R=O.autoReset,Y=Fe.enabled,le=Fe.autoUpdate,te=Fe.needsUpdate,K=Fe.type;ye(),O.autoReset=R,Fe.enabled=Y,Fe.autoUpdate=le,Fe.needsUpdate=te,Fe.type=K}function Rt(R){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fn(R){const Y=R.target;Y.removeEventListener("dispose",Fn),wi(Y)}function wi(R){Xl(R),M.remove(R)}function Xl(R){const Y=M.get(R).programs;Y!==void 0&&(Y.forEach(function(le){Ye.releaseProgram(le)}),R.isShaderMaterial&&Ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,le,te,K,Ne){Y===null&&(Y=Ut);const He=K.isMesh&&K.matrixWorld.determinant()<0,Pe=Er(R,Y,le,te,K);Ze.setMaterial(te,He);let ke=le.index,qe=1;if(te.wireframe===!0){if(ke=Qe.getWireframeAttribute(le),ke===void 0)return;qe=2}const et=le.drawRange,je=le.attributes.position;let it=et.start*qe,Nt=(et.start+et.count)*qe;Ne!==null&&(it=Math.max(it,Ne.start*qe),Nt=Math.min(Nt,(Ne.start+Ne.count)*qe)),ke!==null?(it=Math.max(it,0),Nt=Math.min(Nt,ke.count)):je!=null&&(it=Math.max(it,0),Nt=Math.min(Nt,je.count));const $t=Nt-it;if($t<0||$t===1/0)return;Be.setup(K,te,Pe,le,ke);let jt,Ft=X;if(ke!==null&&(jt=ce.get(ke),Ft=Oe,Ft.setIndex(jt)),K.isMesh)te.wireframe===!0?(Ze.setLineWidth(te.wireframeLinewidth*rn()),Ft.setMode(G.LINES)):Ft.setMode(G.TRIANGLES);else if(K.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),Ze.setLineWidth(Je*rn()),K.isLineSegments?Ft.setMode(G.LINES):K.isLineLoop?Ft.setMode(G.LINE_LOOP):Ft.setMode(G.LINE_STRIP)}else K.isPoints?Ft.setMode(G.POINTS):K.isSprite&&Ft.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,Ot=K._multiDrawCounts,ot=K._multiDrawCount,Rn=ke?ce.get(ke).bytesPerElement:1,sa=M.get(te).currentProgram.getUniforms();for(let Cn=0;Cn<ot;Cn++)sa.setValue(G,"_gl_DrawID",Cn),Ft.render(Je[Cn]/Rn,Ot[Cn])}else if(K.isInstancedMesh)Ft.renderInstances(it,$t,K.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ot=Math.min(le.instanceCount,Je);Ft.renderInstances(it,$t,Ot)}else Ft.render(it,$t)};function go(R,Y,le){R.transparent===!0&&R.side===wa&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,as(R,Y,le),R.side=vr,R.needsUpdate=!0,as(R,Y,le),R.side=wa):as(R,Y,le)}this.compile=function(R,Y,le=null){le===null&&(le=R),P=Ae.get(le),P.init(Y),I.push(P),le.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),R!==le&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights();const te=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Pe=Ne[He];go(Pe,le,K),te.add(Pe)}else go(Ne,le,K),te.add(Ne)}),P=I.pop(),te},this.compileAsync=function(R,Y,le=null){const te=this.compile(R,Y,le);return new Promise(K=>{function Ne(){if(te.forEach(function(He){M.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){K(R);return}setTimeout(Ne,10)}At.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ts=null;function vo(R){ts&&ts(R)}function ns(){Wi.stop()}function xo(){Wi.start()}const Wi=new xS;Wi.setAnimationLoop(vo),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){ts=R,we.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},we.addEventListener("sessionstart",ns),we.addEventListener("sessionend",xo),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const le=we.enabled===!0&&we.isPresenting===!0,te=q!==null&&(ae===null||le)&&q.begin(C,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,ae),P=Ae.get(R,I.length),P.init(Y),I.push(P),an.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),We.setFromProjectionMatrix(an,ea,Y.reversedDepth),gt=this.localClippingEnabled,Ve=ze.init(this.clippingPlanes,gt),N=Te.get(R,B.length),N.init(),B.push(N),we.enabled===!0&&we.isPresenting===!0){const He=C.xr.getDepthSensingMesh();He!==null&&di(He,Y,-1/0,C.sortObjects)}di(R,Y,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(Ce,Ge),ft=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ft&&Le.addToRenderList(N,R),this.info.render.frame++,Ve===!0&&ze.beginShadows();const K=P.state.shadowsArray;if(Fe.render(K,R,Y),Ve===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&q.hasRenderPass())===!1){const He=N.opaque,Pe=N.transmissive;if(P.setupLights(),Y.isArrayCamera){const ke=Y.cameras;if(Pe.length>0)for(let qe=0,et=ke.length;qe<et;qe++){const je=ke[qe];An(He,Pe,R,je)}ft&&Le.render(R);for(let qe=0,et=ke.length;qe<et;qe++){const je=ke[qe];fn(N,R,je,je.viewport)}}else Pe.length>0&&An(He,Pe,R,Y),ft&&Le.render(R),fn(N,R,Y)}ae!==null&&re===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),te&&q.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Be.resetDefaultState(),pe=-1,fe=null,I.pop(),I.length>0?(P=I[I.length-1],Ve===!0&&ze.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function di(R,Y,le,te){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||We.intersectsSprite(R)){te&&vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(an);const He=De.update(R),Pe=R.material;Pe.visible&&N.push(R,He,Pe,le,vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||We.intersectsObject(R))){const He=De.update(R),Pe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),vt.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),vt.copy(He.boundingSphere.center)),vt.applyMatrix4(R.matrixWorld).applyMatrix4(an)),Array.isArray(Pe)){const ke=He.groups;for(let qe=0,et=ke.length;qe<et;qe++){const je=ke[qe],it=Pe[je.materialIndex];it&&it.visible&&N.push(R,He,it,le,vt.z,je)}}else Pe.visible&&N.push(R,He,Pe,le,vt.z,null)}}const Ne=R.children;for(let He=0,Pe=Ne.length;He<Pe;He++)di(Ne[He],Y,le,te)}function fn(R,Y,le,te){const{opaque:K,transmissive:Ne,transparent:He}=R;P.setupLightsView(le),Ve===!0&&ze.setGlobalState(C.clippingPlanes,le),te&&Ze.viewport(F.copy(te)),K.length>0&&Di(K,Y,le),Ne.length>0&&Di(Ne,Y,le),He.length>0&&Di(He,Y,le),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function An(R,Y,le,te){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const it=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new ti(1,1,{generateMipmaps:!0,type:it?fi:Ai,minFilter:jr,samples:It.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[te.id],He=te.viewport||F;Ne.setSize(He.z*C.transmissionResolutionScale,He.w*C.transmissionResolutionScale);const Pe=C.getRenderTarget(),ke=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(oe),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),ft&&Le.render(le);const et=C.toneMapping;C.toneMapping=na;const je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Ve===!0&&ze.setGlobalState(C.clippingPlanes,te),Di(R,le,te),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),At.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Nt=0,$t=Y.length;Nt<$t;Nt++){const jt=Y[Nt],{object:Ft,geometry:Je,material:Ot,group:ot}=jt;if(Ot.side===wa&&Ft.layers.test(te.layers)){const Rn=Ot.side;Ot.side=ei,Ot.needsUpdate=!0,is(Ft,le,te,Je,Ot,ot),Ot.side=Rn,Ot.needsUpdate=!0,it=!0}}it===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Pe,ke,qe),C.setClearColor(oe,_e),je!==void 0&&(te.viewport=je),C.toneMapping=et}function Di(R,Y,le){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ne=R.length;K<Ne;K++){const He=R[K],{object:Pe,geometry:ke,group:qe}=He;let et=He.material;et.allowOverride===!0&&te!==null&&(et=te),Pe.layers.test(le.layers)&&is(Pe,Y,le,ke,et,qe)}}function is(R,Y,le,te,K,Ne){R.onBeforeRender(C,Y,le,te,K,Ne),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,le,te,R,Ne),K.transparent===!0&&K.side===wa&&K.forceSinglePass===!1?(K.side=ei,K.needsUpdate=!0,C.renderBufferDirect(le,Y,te,K,R,Ne),K.side=vr,K.needsUpdate=!0,C.renderBufferDirect(le,Y,te,K,R,Ne),K.side=wa):C.renderBufferDirect(le,Y,te,K,R,Ne),R.onAfterRender(C,Y,le,te,K,Ne)}function as(R,Y,le){Y.isScene!==!0&&(Y=Ut);const te=M.get(R),K=P.state.lights,Ne=P.state.shadowsArray,He=K.state.version,Pe=Ye.getParameters(R,K.state,Ne,Y,le),ke=Ye.getProgramCacheKey(Pe);let qe=te.programs;te.environment=R.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(R.isMeshStandardMaterial?be:me).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Fn),qe=new Map,te.programs=qe);let et=qe.get(ke);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===He)return So(R,Pe),et}else Pe.uniforms=Ye.getUniforms(R),R.onBeforeCompile(Pe,C),et=Ye.acquireProgram(Pe,ke),qe.set(ke,et),te.uniforms=Pe.uniforms;const je=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=ze.uniform),So(R,Pe),te.needsLights=Fa(R),te.lightsStateVersion=He,te.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMap.value=K.state.directionalShadowMap,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotShadowMap.value=K.state.spotShadowMap,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMap.value=K.state.pointShadowMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function Wl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Oc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function So(R,Y){const le=M.get(R);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Er(R,Y,le,te,K){Y.isScene!==!0&&(Y=Ut),W.resetTextureUnits();const Ne=Y.fog,He=te.isMeshStandardMaterial?Y.environment:null,Pe=ae===null?C.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:lo,ke=(te.isMeshStandardMaterial?be:me).get(te.envMap||He),qe=te.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!le.morphAttributes.position,it=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let $t=na;te.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&($t=C.toneMapping);const jt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ft=jt!==void 0?jt.length:0,Je=M.get(te),Ot=P.state.lights;if(Ve===!0&&(gt===!0||R!==fe)){const Dn=R===fe&&te.id===pe;ze.setState(te,R,Dn)}let ot=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ot.state.version||Je.outputColorSpace!==Pe||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==ke||te.fog===!0&&Je.fog!==Ne||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ze.numPlanes||Je.numIntersection!==ze.numIntersection)||Je.vertexAlphas!==qe||Je.vertexTangents!==et||Je.morphTargets!==je||Je.morphNormals!==it||Je.morphColors!==Nt||Je.toneMapping!==$t||Je.morphTargetsCount!==Ft)&&(ot=!0):(ot=!0,Je.__version=te.version);let Rn=Je.currentProgram;ot===!0&&(Rn=as(te,Y,K));let sa=!1,Cn=!1,pi=!1;const zt=Rn.getUniforms(),wn=Je.uniforms;if(Ze.useProgram(Rn.program)&&(sa=!0,Cn=!0,pi=!0),te.id!==pe&&(pe=te.id,Cn=!0),sa||fe!==R){Ze.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",R.projectionMatrix),zt.setValue(G,"viewMatrix",R.matrixWorldInverse);const Ln=zt.map.cameraPosition;Ln!==void 0&&Ln.setValue(G,Et.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&zt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),fe!==R&&(fe=R,Cn=!0,pi=!0)}if(Je.needsLights&&(Ot.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",Ot.state.pointShadowMap,W)),K.isSkinnedMesh){zt.setOptional(G,K,"bindMatrix"),zt.setOptional(G,K,"bindMatrixInverse");const Dn=K.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),zt.setValue(G,"boneTexture",Dn.boneTexture,W))}K.isBatchedMesh&&(zt.setOptional(G,K,"batchingTexture"),zt.setValue(G,"batchingTexture",K._matricesTexture,W),zt.setOptional(G,K,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",K._indirectTexture,W),zt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",K._colorsTexture,W));const gn=le.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&dt.update(K,le,Rn),(Cn||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,zt.setValue(G,"receiveShadow",K.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(wn.envMap.value=ke,wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=Vw()),Cn&&(zt.setValue(G,"toneMappingExposure",C.toneMappingExposure),Je.needsLights&&yo(wn,pi),Ne&&te.fog===!0&&rt.refreshFogUniforms(wn,Ne),rt.refreshMaterialUniforms(wn,te,xe,Q,P.state.transmissionRenderTarget[R.id]),Oc.upload(G,Wl(Je),wn,W)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Oc.upload(G,Wl(Je),wn,W),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&zt.setValue(G,"center",K.center),zt.setValue(G,"modelViewMatrix",K.modelViewMatrix),zt.setValue(G,"normalMatrix",K.normalMatrix),zt.setValue(G,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Dn=te.uniformsGroups;for(let Ln=0,rs=Dn.length;Ln<rs;Ln++){const Li=Dn[Ln];Me.update(Li,Rn),Me.bind(Li,Rn)}}return Rn}function yo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Fa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,Y,le){const te=M.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=Y,M.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:le,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const le=M.get(R);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Ba=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,le=0){ae=R,k=Y,re=le;let te=null,K=!1,Ne=!1;if(R){const Pe=M.get(R);if(Pe.__useDefaultFramebuffer!==void 0){Ze.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),ee=R.scissorTest,Ze.viewport(F),Ze.scissor(H),Ze.setScissorTest(ee),pe=-1;return}else if(Pe.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Pe.__hasExternalTextures)W.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&M.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const qe=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?te=qe[Y][le]:te=qe[Y],K=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?te=M.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?te=qe[le]:te=qe,F.copy(R.viewport),H.copy(R.scissor),ee=R.scissorTest}else F.copy(ie).multiplyScalar(xe).floor(),H.copy(he).multiplyScalar(xe).floor(),ee=Ue;if(le!==0&&(te=Ba),Ze.bindFramebuffer(G.FRAMEBUFFER,te)&&Ze.drawBuffers(R,te),Ze.viewport(F),Ze.scissor(H),Ze.setScissorTest(ee),K){const Pe=M.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,le)}else if(Ne){const Pe=Y;for(let ke=0;ke<R.textures.length;ke++){const qe=M.get(R.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,qe.__webglTexture,le,Pe)}}else if(R!==null&&le!==0){const Pe=M.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,le)}pe=-1},this.readRenderTargetPixels=function(R,Y,le,te,K,Ne,He,Pe=0){if(!(R&&R.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){Ze.bindFramebuffer(G.FRAMEBUFFER,ke);try{const qe=R.textures[Pe],et=qe.format,je=qe.type;if(!It.textureFormatReadable(et)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(je)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-te&&le>=0&&le<=R.height-K&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,le,te,K,Re.convert(et),Re.convert(je),Ne))}finally{const qe=ae!==null?M.get(ae).__webglFramebuffer:null;Ze.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,le,te,K,Ne,He,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(Y>=0&&Y<=R.width-te&&le>=0&&le<=R.height-K){Ze.bindFramebuffer(G.FRAMEBUFFER,ke);const qe=R.textures[Pe],et=qe.format,je=qe.type;if(!It.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,le,te,K,Re.convert(et),Re.convert(je),0);const Nt=ae!==null?M.get(ae).__webglFramebuffer:null;Ze.bindFramebuffer(G.FRAMEBUFFER,Nt);const $t=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await oT(G,$t,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(it),G.deleteSync($t),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,le=0){const te=Math.pow(2,-le),K=Math.floor(R.image.width*te),Ne=Math.floor(R.image.height*te),He=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;W.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,He,Pe,K,Ne),Ze.unbindTexture()};const br=G.createFramebuffer(),za=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,le=null,te=null,K=0,Ne=null){Ne===null&&(K!==0?(Ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=K,K=0):Ne=0);let He,Pe,ke,qe,et,je,it,Nt,$t;const jt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(le!==null)He=le.max.x-le.min.x,Pe=le.max.y-le.min.y,ke=le.isBox3?le.max.z-le.min.z:1,qe=le.min.x,et=le.min.y,je=le.isBox3?le.min.z:0;else{const gn=Math.pow(2,-K);He=Math.floor(jt.width*gn),Pe=Math.floor(jt.height*gn),R.isDataArrayTexture?ke=jt.depth:R.isData3DTexture?ke=Math.floor(jt.depth*gn):ke=1,qe=0,et=0,je=0}te!==null?(it=te.x,Nt=te.y,$t=te.z):(it=0,Nt=0,$t=0);const Ft=Re.convert(Y.format),Je=Re.convert(Y.type);let Ot;Y.isData3DTexture?(W.setTexture3D(Y,0),Ot=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ot=G.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ot=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),sa=G.getParameter(G.UNPACK_SKIP_PIXELS),Cn=G.getParameter(G.UNPACK_SKIP_ROWS),pi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,et),G.pixelStorei(G.UNPACK_SKIP_IMAGES,je);const zt=R.isDataArrayTexture||R.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const gn=M.get(R),Dn=M.get(Y),Ln=M.get(gn.__renderTarget),rs=M.get(Dn.__renderTarget);Ze.bindFramebuffer(G.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let Li=0;Li<ke;Li++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(R).__webglTexture,K,je+Li),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Ne,$t+Li)),G.blitFramebuffer(qe,et,He,Pe,it,Nt,He,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ze.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||M.has(R)){const gn=M.get(R),Dn=M.get(Y);Ze.bindFramebuffer(G.READ_FRAMEBUFFER,br),Ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,za);for(let Ln=0;Ln<ke;Ln++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gn.__webglTexture,K,je+Ln):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gn.__webglTexture,K),wn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dn.__webglTexture,Ne,$t+Ln):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dn.__webglTexture,Ne),K!==0?G.blitFramebuffer(qe,et,He,Pe,it,Nt,He,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):wn?G.copyTexSubImage3D(Ot,Ne,it,Nt,$t+Ln,qe,et,He,Pe):G.copyTexSubImage2D(Ot,Ne,it,Nt,qe,et,He,Pe);Ze.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ot,Ne,it,Nt,$t,He,Pe,ke,Ft,Je,jt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ot,Ne,it,Nt,$t,He,Pe,ke,Ft,jt.data):G.texSubImage3D(Ot,Ne,it,Nt,$t,He,Pe,ke,Ft,Je,jt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,it,Nt,He,Pe,Ft,Je,jt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,it,Nt,jt.width,jt.height,Ft,jt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,it,Nt,He,Pe,Ft,Je,jt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ot),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,sa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Cn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pi),Ne===0&&Y.generateMipmaps&&G.generateMipmap(Ot),Ze.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){k=0,re=0,ae=null,Ze.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const sx={type:"change"},hm={type:"start"},MS={type:"end"},bc=new lS,ox=new mr,Xw=Math.cos(70*uT.DEG2RAD),xn=new Z,$n=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zd=1e-6;class Ww extends qT{constructor(e,n=null){super(e,n),this.state=Yt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Qr,this._lastTargetPosition=new Z,this._quat=new Qr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pv,this._sphericalDelta=new Pv,this._scale=1,this._panOffset=new Z,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new Z,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qw.bind(this),this._onPointerDown=Yw.bind(this),this._onPointerUp=jw.bind(this),this._onContextMenu=t3.bind(this),this._onMouseWheel=Qw.bind(this),this._onKeyDown=Jw.bind(this),this._onTouchStart=$w.bind(this),this._onTouchMove=e3.bind(this),this._onMouseDown=Zw.bind(this),this._onMouseMove=Kw.bind(this),this._interceptControlDown=n3.bind(this),this._interceptControlUp=i3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sx),this.update(),this.state=Yt.NONE}update(e=null){const n=this.object.position;xn.copy(n).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=$n:a>Math.PI&&(a-=$n),o<-Math.PI?o+=$n:o>Math.PI&&(o-=$n),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=c!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),n.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=xn.length();c=this._clampDistance(h*this._scale);const p=h-c;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const h=new Z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),c=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<Xw?this.object.lookAt(this.target):(ox.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(ox,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zd||this._lastTargetPosition.distanceToSquared(this.target)>zd?(this.dispatchEvent(sx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){xn.setFromMatrixColumn(n,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,n){this.screenSpacePanning===!0?xn.setFromMatrixColumn(n,1):(xn.setFromMatrixColumn(n,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;xn.copy(o).sub(this.target);let u=xn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/a.clientHeight,this.object.matrix),this._panUp(2*n*u/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,u=n-a.top,c=a.width,h=a.height;this._mouse.x=o/c*2-1,this._mouse.y=-(u/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft($n*this._rotateDelta.x/n.clientHeight),this._rotateUp($n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,u=Math.sqrt(a*a+o*o);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),u=.5*(e.pageY+a.y);this._rotateEnd.set(o,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft($n*this._rotateDelta.x/n.clientHeight),this._rotateUp($n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,u=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new nt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Yw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function jw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(MS),this.state=Yt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Zw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Yt.DOLLY;break;case no.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}break;case no.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(hm)}function Kw(r){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Qw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(r.preventDefault(),this.dispatchEvent(hm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(MS))}function Jw(r){this.enabled!==!1&&this._handleKeyDown(r)}function $w(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Yt.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Yt.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(hm)}function e3(r){switch(this._trackPointer(r),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Yt.NONE}}function t3(r){this.enabled!==!1&&r.preventDefault()}function n3(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i3(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a3=new fm(-1,1,1,-1,0,1);class r3 extends ra{constructor(){super(),this.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Hi([0,2,0,0,2,0],2))}}const s3=new r3;class TS{constructor(e){this._mesh=new Vi(s3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class AS extends Vl{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof In?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hc.clone(e.uniforms),this.material=new In({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new TS(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lx extends Vl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){const o=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let c,h;this.inverse?(c=0,h=1):(c=1,h=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),u.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),u.buffers.stencil.setClear(h),u.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(o.EQUAL,1,4294967295),u.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),u.buffers.stencil.setLocked(!0)}}class o3 extends Vl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class l3{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const a=e.getSize(new nt);this._width=a.width,this._height=a.height,n=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new AS(Pc),this.copyPass.material.blending=ta,this.clock=new YT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,u=this.passes.length;o<u;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),c.needsSwap){if(a){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}lx!==void 0&&(c instanceof lx?a=!0:c instanceof o3&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(a,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class u3 extends Vl{constructor(e,n,a=null,o=null,u=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _t}render(e,n,a){const o=e.autoClear;e.autoClear=!1;let u,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const c3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class co extends Vl{constructor(e,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(u,c,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new ti(u,c,{type:fi});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new ti(u,c,{type:fi});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),u=Math.round(u/2),c=Math.round(c/2)}const h=c3;this.highPassUniforms=Hc.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];u=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new nt(1/u,1/c),u=Math.round(u/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hc.clone(Pc.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:Pc.vertexShader,fragmentShader:Pc.fragmentShader,premultipliedAlpha:!0,blending:Wd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new um,this._fsQuad=new TS(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(a,o),this.renderTargetsVertical[u].setSize(a,o),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(e,n,a,o,u){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),u&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[p].uniforms.direction.value=co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const n=[],a=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new In({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new In({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}co.BlurDirectionX=new nt(1,0);co.BlurDirectionY=new nt(0,1);var Ic={exports:{}},f3=Ic.exports,ux;function h3(){return ux||(ux=1,(function(r,e){(function(n,a){r.exports=a()})(f3,function(){var n=function(){function a(E){return c.appendChild(E.dom),E}function o(E){for(var b=0;b<c.children.length;b++)c.children[b].style.display=b===E?"block":"none";u=E}var u=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",c.addEventListener("click",function(E){E.preventDefault(),o(++u%c.children.length)},!1);var h=(performance||Date).now(),p=h,m=0,g=a(new n.Panel("FPS","#0ff","#002")),_=a(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=a(new n.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:c,addPanel:a,showPanel:o,begin:function(){h=(performance||Date).now()},end:function(){m++;var E=(performance||Date).now();if(_.update(E-h,200),E>p+1e3&&(g.update(1e3*m/(E-p),100),p=E,m=0,v)){var b=performance.memory;v.update(b.usedJSHeapSize/1048576,b.jsHeapSizeLimit/1048576)}return E},update:function(){h=this.end()},domElement:c,setMode:o}};return n.Panel=function(a,o,u){var c=1/0,h=0,p=Math.round,m=p(window.devicePixelRatio||1),g=80*m,_=48*m,v=3*m,E=2*m,b=3*m,T=15*m,y=74*m,x=30*m,D=document.createElement("canvas");D.width=g,D.height=_,D.style.cssText="width:80px;height:48px";var w=D.getContext("2d");return w.font="bold "+9*m+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=u,w.fillRect(0,0,g,_),w.fillStyle=o,w.fillText(a,v,E),w.fillRect(b,T,y,x),w.fillStyle=u,w.globalAlpha=.9,w.fillRect(b,T,y,x),{dom:D,update:function(N,P){c=Math.min(c,N),h=Math.max(h,N),w.fillStyle=u,w.globalAlpha=1,w.fillRect(0,0,g,T),w.fillStyle=o,w.fillText(p(N)+" "+a+" ("+p(c)+"-"+p(h)+")",v,E),w.drawImage(D,b+m,T,y-m,x,b,T,y-m,x),w.fillRect(b+y-m,T,m,x),w.fillStyle=u,w.globalAlpha=.9,w.fillRect(b+y-m,T,m,p((1-N/P)*x))}}},n})})(Ic)),Ic.exports}var d3=h3();const p3=BE(d3);function m3(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function to(r,e){var n=r.__state.conversionName.toString(),a=Math.round(r.r),o=Math.round(r.g),u=Math.round(r.b),c=r.a,h=Math.round(r.h),p=r.s.toFixed(1),m=r.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var g=r.hex.toString(16);g.length<6;)g="0"+g;return"#"+g}else{if(n==="CSS_RGB")return"rgb("+a+","+o+","+u+")";if(n==="CSS_RGBA")return"rgba("+a+","+o+","+u+","+c+")";if(n==="HEX")return"0x"+r.hex.toString(16);if(n==="RGB_ARRAY")return"["+a+","+o+","+u+"]";if(n==="RGBA_ARRAY")return"["+a+","+o+","+u+","+c+"]";if(n==="RGB_OBJ")return"{r:"+a+",g:"+o+",b:"+u+"}";if(n==="RGBA_OBJ")return"{r:"+a+",g:"+o+",b:"+u+",a:"+c+"}";if(n==="HSV_OBJ")return"{h:"+h+",s:"+p+",v:"+m+"}";if(n==="HSVA_OBJ")return"{h:"+h+",s:"+p+",v:"+m+",a:"+c+"}"}return"unknown format"}var cx=Array.prototype.forEach,xl=Array.prototype.slice,Ee={BREAK:{},extend:function(e){return this.each(xl.call(arguments,1),function(n){var a=this.isObject(n)?Object.keys(n):[];a.forEach((function(o){this.isUndefined(n[o])||(e[o]=n[o])}).bind(this))},this),e},defaults:function(e){return this.each(xl.call(arguments,1),function(n){var a=this.isObject(n)?Object.keys(n):[];a.forEach((function(o){this.isUndefined(e[o])&&(e[o]=n[o])}).bind(this))},this),e},compose:function(){var e=xl.call(arguments);return function(){for(var n=xl.call(arguments),a=e.length-1;a>=0;a--)n=[e[a].apply(this,n)];return n[0]}},each:function(e,n,a){if(e){if(cx&&e.forEach&&e.forEach===cx)e.forEach(n,a);else if(e.length===e.length+0){var o=void 0,u=void 0;for(o=0,u=e.length;o<u;o++)if(o in e&&n.call(a,e[o],o)===this.BREAK)return}else for(var c in e)if(n.call(a,e[c],c)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,a){var o=void 0;return function(){var u=this,c=arguments;function h(){o=null,a||e.apply(u,c)}var p=a||!o;clearTimeout(o),o=setTimeout(h,n),p&&e.apply(u,c)}},toArray:function(e){return e.toArray?e.toArray():xl.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(r){function e(n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e})(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},_3=[{litmus:Ee.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:to},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:to},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:to},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:to}}},{litmus:Ee.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Ee.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Ee.isObject,conversions:{RGBA_OBJ:{read:function(e){return Ee.isNumber(e.r)&&Ee.isNumber(e.g)&&Ee.isNumber(e.b)&&Ee.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Ee.isNumber(e.r)&&Ee.isNumber(e.g)&&Ee.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Ee.isNumber(e.h)&&Ee.isNumber(e.s)&&Ee.isNumber(e.v)&&Ee.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Ee.isNumber(e.h)&&Ee.isNumber(e.s)&&Ee.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Sl=void 0,Mc=void 0,Hp=function(){Mc=!1;var e=arguments.length>1?Ee.toArray(arguments):arguments[0];return Ee.each(_3,function(n){if(n.litmus(e))return Ee.each(n.conversions,function(a,o){if(Sl=a.read(e),Mc===!1&&Sl!==!1)return Mc=Sl,Sl.conversionName=o,Sl.conversion=a,Ee.BREAK}),Ee.BREAK}),Mc},fx=void 0,Gc={hsv_to_rgb:function(e,n,a){var o=Math.floor(e/60)%6,u=e/60-Math.floor(e/60),c=a*(1-n),h=a*(1-u*n),p=a*(1-(1-u)*n),m=[[a,p,c],[h,a,c],[c,a,p],[c,h,a],[p,c,a],[a,c,h]][o];return{r:m[0]*255,g:m[1]*255,b:m[2]*255}},rgb_to_hsv:function(e,n,a){var o=Math.min(e,n,a),u=Math.max(e,n,a),c=u-o,h=void 0,p=void 0;if(u!==0)p=c/u;else return{h:NaN,s:0,v:0};return e===u?h=(n-a)/c:n===u?h=2+(a-e)/c:h=4+(e-n)/c,h/=6,h<0&&(h+=1),{h:h*360,s:p,v:u/255}},rgb_to_hex:function(e,n,a){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,n),o=this.hex_with_component(o,0,a),o},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,a){return a<<(fx=n*8)|e&~(255<<fx)}},g3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ki=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Xi=(function(){function r(e,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,a){return n&&r(e.prototype,n),a&&r(e,a),e}})(),xr=function r(e,n,a){e===null&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(o===void 0){var u=Object.getPrototypeOf(e);return u===null?void 0:r(u,n,a)}else{if("value"in o)return o.value;var c=o.get;return c===void 0?void 0:c.call(a)}},Sr=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},yr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},Tn=(function(){function r(){if(ki(this,r),this.__state=Hp.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Xi(r,[{key:"toString",value:function(){return to(this)}},{key:"toHexString",value:function(){return to(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r})();function dm(r,e,n){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Tn.recalculateRGB(this,e,n),this.__state[e])},set:function(o){this.__state.space!=="RGB"&&(Tn.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=o}})}function pm(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Tn.recalculateHSV(this),this.__state[e])},set:function(a){this.__state.space!=="HSV"&&(Tn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=a}})}Tn.recalculateRGB=function(r,e,n){if(r.__state.space==="HEX")r.__state[e]=Gc.component_from_hex(r.__state.hex,n);else if(r.__state.space==="HSV")Ee.extend(r.__state,Gc.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Tn.recalculateHSV=function(r){var e=Gc.rgb_to_hsv(r.r,r.g,r.b);Ee.extend(r.__state,{s:e.s,v:e.v}),Ee.isNaN(e.h)?Ee.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};Tn.COMPONENTS=["r","g","b","h","s","v","hex","a"];dm(Tn.prototype,"r",2);dm(Tn.prototype,"g",1);dm(Tn.prototype,"b",0);pm(Tn.prototype,"h");pm(Tn.prototype,"s");pm(Tn.prototype,"v");Object.defineProperty(Tn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Tn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Gc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var es=(function(){function r(e,n){ki(this,r),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return Xi(r,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r})(),v3={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},RS={};Ee.each(v3,function(r,e){Ee.each(r,function(n){RS[n]=e})});var x3=/(\d+(\.\d+)?)px/;function Qi(r){if(r==="0"||Ee.isUndefined(r))return 0;var e=r.match(x3);return Ee.isNull(e)?0:parseFloat(e[1])}var se={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,a){var o=a,u=n;Ee.isUndefined(u)&&(u=!0),Ee.isUndefined(o)&&(o=!0),e.style.position="absolute",u&&(e.style.left=0,e.style.right=0),o&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,a,o){var u=a||{},c=RS[n];if(!c)throw new Error("Event type "+n+" not supported.");var h=document.createEvent(c);switch(c){case"MouseEvents":{var p=u.x||u.clientX||0,m=u.y||u.clientY||0;h.initMouseEvent(n,u.bubbles||!1,u.cancelable||!0,window,u.clickCount||1,0,0,p,m,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var g=h.initKeyboardEvent||h.initKeyEvent;Ee.defaults(u,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),g(n,u.bubbles||!1,u.cancelable,window,u.ctrlKey,u.altKey,u.shiftKey,u.metaKey,u.keyCode,u.charCode);break}default:{h.initEvent(n,u.bubbles||!1,u.cancelable||!0);break}}Ee.defaults(h,o),e.dispatchEvent(h)},bind:function(e,n,a,o){var u=o||!1;return e.addEventListener?e.addEventListener(n,a,u):e.attachEvent&&e.attachEvent("on"+n,a),se},unbind:function(e,n,a,o){var u=o||!1;return e.removeEventListener?e.removeEventListener(n,a,u):e.detachEvent&&e.detachEvent("on"+n,a),se},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var a=e.className.split(/ +/);a.indexOf(n)===-1&&(a.push(n),e.className=a.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return se},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var a=e.className.split(/ +/),o=a.indexOf(n);o!==-1&&(a.splice(o,1),e.className=a.join(" "))}else e.className=void 0;return se},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return Qi(n["border-left-width"])+Qi(n["border-right-width"])+Qi(n["padding-left"])+Qi(n["padding-right"])+Qi(n.width)},getHeight:function(e){var n=getComputedStyle(e);return Qi(n["border-top-width"])+Qi(n["border-bottom-width"])+Qi(n["padding-top"])+Qi(n["padding-bottom"])+Qi(n.height)},getOffset:function(e){var n=e,a={left:0,top:0};if(n.offsetParent)do a.left+=n.offsetLeft,a.top+=n.offsetTop,n=n.offsetParent;while(n);return a},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},CS=(function(r){Sr(e,r);function e(n,a){ki(this,e);var o=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a)),u=o;o.__prev=o.getValue(),o.__checkbox=document.createElement("input"),o.__checkbox.setAttribute("type","checkbox");function c(){u.setValue(!u.__prev)}return se.bind(o.__checkbox,"change",c,!1),o.domElement.appendChild(o.__checkbox),o.updateDisplay(),o}return Xi(e,[{key:"setValue",value:function(a){var o=xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),o}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(es),S3=(function(r){Sr(e,r);function e(n,a,o){ki(this,e);var u=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a)),c=o,h=u;if(u.__select=document.createElement("select"),Ee.isArray(c)){var p={};Ee.each(c,function(m){p[m]=m}),c=p}return Ee.each(c,function(m,g){var _=document.createElement("option");_.innerHTML=g,_.setAttribute("value",m),h.__select.appendChild(_)}),u.updateDisplay(),se.bind(u.__select,"change",function(){var m=this.options[this.selectedIndex].value;h.setValue(m)}),u.domElement.appendChild(u.__select),u}return Xi(e,[{key:"setValue",value:function(a){var o=xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),o}},{key:"updateDisplay",value:function(){return se.isActive(this.__select)?this:(this.__select.value=this.getValue(),xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(es),y3=(function(r){Sr(e,r);function e(n,a){ki(this,e);var o=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a)),u=o;function c(){u.setValue(u.__input.value)}function h(){u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),se.bind(o.__input,"keyup",c),se.bind(o.__input,"change",c),se.bind(o.__input,"blur",h),se.bind(o.__input,"keydown",function(p){p.keyCode===13&&this.blur()}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return Xi(e,[{key:"updateDisplay",value:function(){return se.isActive(this.__input)||(this.__input.value=this.getValue()),xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(es);function hx(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var wS=(function(r){Sr(e,r);function e(n,a,o){ki(this,e);var u=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a)),c=o||{};return u.__min=c.min,u.__max=c.max,u.__step=c.step,Ee.isUndefined(u.__step)?u.initialValue===0?u.__impliedStep=1:u.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(u.initialValue))/Math.LN10))/10:u.__impliedStep=u.__step,u.__precision=hx(u.__impliedStep),u}return Xi(e,[{key:"setValue",value:function(a){var o=a;return this.__min!==void 0&&o<this.__min?o=this.__min:this.__max!==void 0&&o>this.__max&&(o=this.__max),this.__step!==void 0&&o%this.__step!==0&&(o=Math.round(o/this.__step)*this.__step),xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,o)}},{key:"min",value:function(a){return this.__min=a,this}},{key:"max",value:function(a){return this.__max=a,this}},{key:"step",value:function(a){return this.__step=a,this.__impliedStep=a,this.__precision=hx(a),this}}]),e})(es);function E3(r,e){var n=Math.pow(10,e);return Math.round(r*n)/n}var Vc=(function(r){Sr(e,r);function e(n,a,o){ki(this,e);var u=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a,o));u.__truncationSuspended=!1;var c=u,h=void 0;function p(){var b=parseFloat(c.__input.value);Ee.isNaN(b)||c.setValue(b)}function m(){c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function g(){m()}function _(b){var T=h-b.clientY;c.setValue(c.getValue()+T*c.__impliedStep),h=b.clientY}function v(){se.unbind(window,"mousemove",_),se.unbind(window,"mouseup",v),m()}function E(b){se.bind(window,"mousemove",_),se.bind(window,"mouseup",v),h=b.clientY}return u.__input=document.createElement("input"),u.__input.setAttribute("type","text"),se.bind(u.__input,"change",p),se.bind(u.__input,"blur",g),se.bind(u.__input,"mousedown",E),se.bind(u.__input,"keydown",function(b){b.keyCode===13&&(c.__truncationSuspended=!0,this.blur(),c.__truncationSuspended=!1,m())}),u.updateDisplay(),u.domElement.appendChild(u.__input),u}return Xi(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():E3(this.getValue(),this.__precision),xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(wS);function dx(r,e,n,a,o){return a+(o-a)*((r-e)/(n-e))}var Gp=(function(r){Sr(e,r);function e(n,a,o,u,c){ki(this,e);var h=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a,{min:o,max:u,step:c})),p=h;h.__background=document.createElement("div"),h.__foreground=document.createElement("div"),se.bind(h.__background,"mousedown",m),se.bind(h.__background,"touchstart",v),se.addClass(h.__background,"slider"),se.addClass(h.__foreground,"slider-fg");function m(T){document.activeElement.blur(),se.bind(window,"mousemove",g),se.bind(window,"mouseup",_),g(T)}function g(T){T.preventDefault();var y=p.__background.getBoundingClientRect();return p.setValue(dx(T.clientX,y.left,y.right,p.__min,p.__max)),!1}function _(){se.unbind(window,"mousemove",g),se.unbind(window,"mouseup",_),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}function v(T){T.touches.length===1&&(se.bind(window,"touchmove",E),se.bind(window,"touchend",b),E(T))}function E(T){var y=T.touches[0].clientX,x=p.__background.getBoundingClientRect();p.setValue(dx(y,x.left,x.right,p.__min,p.__max))}function b(){se.unbind(window,"touchmove",E),se.unbind(window,"touchend",b),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}return h.updateDisplay(),h.__background.appendChild(h.__foreground),h.domElement.appendChild(h.__background),h}return Xi(e,[{key:"updateDisplay",value:function(){var a=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=a*100+"%",xr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(wS),DS=(function(r){Sr(e,r);function e(n,a,o){ki(this,e);var u=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a)),c=u;return u.__button=document.createElement("div"),u.__button.innerHTML=o===void 0?"Fire":o,se.bind(u.__button,"click",function(h){return h.preventDefault(),c.fire(),!1}),se.addClass(u.__button,"button"),u.domElement.appendChild(u.__button),u}return Xi(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(es),Vp=(function(r){Sr(e,r);function e(n,a){ki(this,e);var o=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,a));o.__color=new Tn(o.getValue()),o.__temp=new Tn(0);var u=o;o.domElement=document.createElement("div"),se.makeSelectable(o.domElement,!1),o.__selector=document.createElement("div"),o.__selector.className="selector",o.__saturation_field=document.createElement("div"),o.__saturation_field.className="saturation-field",o.__field_knob=document.createElement("div"),o.__field_knob.className="field-knob",o.__field_knob_border="2px solid ",o.__hue_knob=document.createElement("div"),o.__hue_knob.className="hue-knob",o.__hue_field=document.createElement("div"),o.__hue_field.className="hue-field",o.__input=document.createElement("input"),o.__input.type="text",o.__input_textShadow="0 1px 1px ",se.bind(o.__input,"keydown",function(T){T.keyCode===13&&_.call(this)}),se.bind(o.__input,"blur",_),se.bind(o.__selector,"mousedown",function(){se.addClass(this,"drag").bind(window,"mouseup",function(){se.removeClass(u.__selector,"drag")})}),se.bind(o.__selector,"touchstart",function(){se.addClass(this,"drag").bind(window,"touchend",function(){se.removeClass(u.__selector,"drag")})});var c=document.createElement("div");Ee.extend(o.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Ee.extend(o.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:o.__field_knob_border+(o.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Ee.extend(o.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Ee.extend(o.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Ee.extend(c.style,{width:"100%",height:"100%",background:"none"}),px(c,"top","rgba(0,0,0,0)","#000"),Ee.extend(o.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),M3(o.__hue_field),Ee.extend(o.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:o.__input_textShadow+"rgba(0,0,0,0.7)"}),se.bind(o.__saturation_field,"mousedown",h),se.bind(o.__saturation_field,"touchstart",h),se.bind(o.__field_knob,"mousedown",h),se.bind(o.__field_knob,"touchstart",h),se.bind(o.__hue_field,"mousedown",p),se.bind(o.__hue_field,"touchstart",p);function h(T){E(T),se.bind(window,"mousemove",E),se.bind(window,"touchmove",E),se.bind(window,"mouseup",m),se.bind(window,"touchend",m)}function p(T){b(T),se.bind(window,"mousemove",b),se.bind(window,"touchmove",b),se.bind(window,"mouseup",g),se.bind(window,"touchend",g)}function m(){se.unbind(window,"mousemove",E),se.unbind(window,"touchmove",E),se.unbind(window,"mouseup",m),se.unbind(window,"touchend",m),v()}function g(){se.unbind(window,"mousemove",b),se.unbind(window,"touchmove",b),se.unbind(window,"mouseup",g),se.unbind(window,"touchend",g),v()}function _(){var T=Hp(this.value);T!==!1?(u.__color.__state=T,u.setValue(u.__color.toOriginal())):this.value=u.__color.toString()}function v(){u.__onFinishChange&&u.__onFinishChange.call(u,u.__color.toOriginal())}o.__saturation_field.appendChild(c),o.__selector.appendChild(o.__field_knob),o.__selector.appendChild(o.__saturation_field),o.__selector.appendChild(o.__hue_field),o.__hue_field.appendChild(o.__hue_knob),o.domElement.appendChild(o.__input),o.domElement.appendChild(o.__selector),o.updateDisplay();function E(T){T.type.indexOf("touch")===-1&&T.preventDefault();var y=u.__saturation_field.getBoundingClientRect(),x=T.touches&&T.touches[0]||T,D=x.clientX,w=x.clientY,N=(D-y.left)/(y.right-y.left),P=1-(w-y.top)/(y.bottom-y.top);return P>1?P=1:P<0&&(P=0),N>1?N=1:N<0&&(N=0),u.__color.v=P,u.__color.s=N,u.setValue(u.__color.toOriginal()),!1}function b(T){T.type.indexOf("touch")===-1&&T.preventDefault();var y=u.__hue_field.getBoundingClientRect(),x=T.touches&&T.touches[0]||T,D=x.clientY,w=1-(D-y.top)/(y.bottom-y.top);return w>1?w=1:w<0&&(w=0),u.__color.h=w*360,u.setValue(u.__color.toOriginal()),!1}return o}return Xi(e,[{key:"updateDisplay",value:function(){var a=Hp(this.getValue());if(a!==!1){var o=!1;Ee.each(Tn.COMPONENTS,function(h){if(!Ee.isUndefined(a[h])&&!Ee.isUndefined(this.__color.__state[h])&&a[h]!==this.__color.__state[h])return o=!0,{}},this),o&&Ee.extend(this.__color.__state,a)}Ee.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var u=this.__color.v<.5||this.__color.s>.5?255:0,c=255-u;Ee.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+u+","+u+","+u+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,px(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Ee.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+u+","+u+","+u+")",textShadow:this.__input_textShadow+"rgba("+c+","+c+","+c+",.7)"})}}]),e})(es),b3=["-moz-","-o-","-webkit-","-ms-",""];function px(r,e,n,a){r.style.background="",Ee.each(b3,function(o){r.style.cssText+="background: "+o+"linear-gradient("+e+", "+n+" 0%, "+a+" 100%); "})}function M3(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var T3={load:function(e,n){var a=n||document,o=a.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,a.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,n){var a=n||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e;var u=a.getElementsByTagName("head")[0];try{u.appendChild(o)}catch{}}},A3=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,R3=function(e,n){var a=e[n];return Ee.isArray(arguments[2])||Ee.isObject(arguments[2])?new S3(e,n,arguments[2]):Ee.isNumber(a)?Ee.isNumber(arguments[2])&&Ee.isNumber(arguments[3])?Ee.isNumber(arguments[4])?new Gp(e,n,arguments[2],arguments[3],arguments[4]):new Gp(e,n,arguments[2],arguments[3]):Ee.isNumber(arguments[4])?new Vc(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Vc(e,n,{min:arguments[2],max:arguments[3]}):Ee.isString(a)?new y3(e,n):Ee.isFunction(a)?new DS(e,n,""):Ee.isBoolean(a)?new CS(e,n):null};function C3(r){setTimeout(r,1e3/60)}var w3=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||C3,D3=(function(){function r(){ki(this,r),this.backgroundElement=document.createElement("div"),Ee.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),se.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Ee.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;se.bind(this.backgroundElement,"click",function(){e.hide()})}return Xi(r,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Ee.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,a=function o(){n.domElement.style.display="none",n.backgroundElement.style.display="none",se.unbind(n.domElement,"webkitTransitionEnd",o),se.unbind(n.domElement,"transitionend",o),se.unbind(n.domElement,"oTransitionEnd",o)};se.bind(this.domElement,"webkitTransitionEnd",a),se.bind(this.domElement,"transitionend",a),se.bind(this.domElement,"oTransitionEnd",a),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-se.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-se.getHeight(this.domElement)/2+"px"}}]),r})(),L3=m3(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);T3.inject(L3);var mx="dg",_x=72,gx=20,Nl="Default",bl=(function(){try{return!!window.localStorage}catch{return!1}})(),Tl=void 0,vx=!0,Js=void 0,Hd=!1,LS=[],Zt=function r(e){var n=this,a=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),se.addClass(this.domElement,mx),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],a=Ee.defaults(a,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),a=Ee.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace}),Ee.isUndefined(a.load)?a.load={preset:Nl}:a.preset&&(a.load.preset=a.preset),Ee.isUndefined(a.parent)&&a.hideable&&LS.push(this),a.resizable=Ee.isUndefined(a.parent)&&a.resizable,a.autoPlace&&Ee.isUndefined(a.scrollable)&&(a.scrollable=!0);var o=bl&&localStorage.getItem($s(this,"isLocal"))==="true",u=void 0,c=void 0;if(Object.defineProperties(this,{parent:{get:function(){return a.parent}},scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},closeOnTop:{get:function(){return a.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:a.load.preset},set:function(v){n.parent?n.getRoot().preset=v:a.load.preset=v,P3(this),n.revert()}},width:{get:function(){return a.width},set:function(v){a.width=v,Wp(n,v)}},name:{get:function(){return a.name},set:function(v){a.name=v,c&&(c.innerHTML=a.name)}},closed:{get:function(){return a.closed},set:function(v){a.closed=v,a.closed?se.addClass(n.__ul,r.CLASS_CLOSED):se.removeClass(n.__ul,r.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=v?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return o},set:function(v){bl&&(o=v,v?se.bind(window,"unload",u):se.unbind(window,"unload",u),localStorage.setItem($s(n,"isLocal"),v))}}}),Ee.isUndefined(a.parent)){if(this.closed=a.closed||!1,se.addClass(this.domElement,r.CLASS_MAIN),se.makeSelectable(this.domElement,!1),bl&&o){n.useLocalStorage=!0;var h=localStorage.getItem($s(this,"gui"));h&&(a.load=JSON.parse(h))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,se.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),a.closeOnTop?(se.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(se.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),se.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{a.closed===void 0&&(a.closed=!0);var p=document.createTextNode(a.name);se.addClass(p,"controller-name"),c=mm(n,p);var m=function(v){return v.preventDefault(),n.closed=!n.closed,!1};se.addClass(this.__ul,r.CLASS_CLOSED),se.addClass(c,"title"),se.bind(c,"click",m),a.closed||(this.closed=!1)}a.autoPlace&&(Ee.isUndefined(a.parent)&&(vx&&(Js=document.createElement("div"),se.addClass(Js,mx),se.addClass(Js,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Js),vx=!1),Js.appendChild(this.domElement),se.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Wp(n,a.width)),this.__resizeHandler=function(){n.onResizeDebounced()},se.bind(window,"resize",this.__resizeHandler),se.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),se.bind(this.__ul,"transitionend",this.__resizeHandler),se.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),a.resizable&&O3(this),u=function(){bl&&localStorage.getItem($s(n,"isLocal"))==="true"&&localStorage.setItem($s(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=u;function g(){var _=n.getRoot();_.width+=1,Ee.defer(function(){_.width-=1})}a.parent||g()};Zt.toggleHide=function(){Hd=!Hd,Ee.each(LS,function(r){r.domElement.style.display=Hd?"none":""})};Zt.CLASS_AUTO_PLACE="a";Zt.CLASS_AUTO_PLACE_CONTAINER="ac";Zt.CLASS_MAIN="main";Zt.CLASS_CONTROLLER_ROW="cr";Zt.CLASS_TOO_TALL="taller-than-window";Zt.CLASS_CLOSED="closed";Zt.CLASS_CLOSE_BUTTON="close-button";Zt.CLASS_CLOSE_TOP="close-top";Zt.CLASS_CLOSE_BOTTOM="close-bottom";Zt.CLASS_DRAG="drag";Zt.DEFAULT_WIDTH=245;Zt.TEXT_CLOSED="Close Controls";Zt.TEXT_OPEN="Open Controls";Zt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===_x||r.keyCode===_x)&&Zt.toggleHide()};se.bind(window,"keydown",Zt._keydownHandler,!1);Ee.extend(Zt.prototype,{add:function(e,n){return Al(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return Al(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;Ee.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Js.removeChild(this.domElement);var e=this;Ee.each(this.__folders,function(n){e.removeFolder(n)}),se.unbind(window,"keydown",Zt._keydownHandler,!1),xx(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var a=new Zt(n);this.__folders[e]=a;var o=mm(this,a.domElement);return se.addClass(o,"folder"),a},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],xx(e);var n=this;Ee.each(e.__folders,function(a){e.removeFolder(a)}),Ee.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=se.getOffset(e.__ul).top,a=0;Ee.each(e.__ul.childNodes,function(o){e.autoPlace&&o===e.__save_row||(a+=se.getHeight(o))}),window.innerHeight-n-gx<a?(se.addClass(e.domElement,Zt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-gx+"px"):(se.removeClass(e.domElement,Zt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Ee.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Ee.debounce(function(){this.onResize()},50),remember:function(){if(Ee.isUndefined(Tl)&&(Tl=new D3,Tl.domElement.innerHTML=A3),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Ee.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&N3(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&Wp(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Tc(this)),e.folders={},Ee.each(this.__folders,function(n,a){e.folders[a]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Tc(this),kp(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Nl]=Tc(this,!0)),this.load.remembered[e]=Tc(this),this.preset=e,Xp(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Ee.each(this.__controllers,function(n){this.getRoot().load.remembered?US(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),Ee.each(this.__folders,function(n){n.revert(n)}),e||kp(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&NS(this.__listening)},updateDisplay:function(){Ee.each(this.__controllers,function(e){e.updateDisplay()}),Ee.each(this.__folders,function(e){e.updateDisplay()})}});function mm(r,e,n){var a=document.createElement("li");return e&&a.appendChild(e),n?r.__ul.insertBefore(a,n):r.__ul.appendChild(a),r.onResize(),a}function xx(r){se.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&se.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function kp(r,e){var n=r.__preset_select[r.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function U3(r,e,n){if(n.__li=e,n.__gui=r,Ee.extend(n,{options:function(c){if(arguments.length>1){var h=n.__li.nextElementSibling;return n.remove(),Al(r,n.object,n.property,{before:h,factoryArgs:[Ee.toArray(arguments)]})}if(Ee.isArray(c)||Ee.isObject(c)){var p=n.__li.nextElementSibling;return n.remove(),Al(r,n.object,n.property,{before:p,factoryArgs:[c]})}},name:function(c){return n.__li.firstElementChild.firstElementChild.innerHTML=c,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof Gp){var a=new Vc(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});Ee.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(u){var c=n[u],h=a[u];n[u]=a[u]=function(){var p=Array.prototype.slice.call(arguments);return h.apply(a,p),c.apply(n,p)}}),se.addClass(e,"has-slider"),n.domElement.insertBefore(a.domElement,n.domElement.firstElementChild)}else if(n instanceof Vc){var o=function(c){if(Ee.isNumber(n.__min)&&Ee.isNumber(n.__max)){var h=n.__li.firstElementChild.firstElementChild.innerHTML,p=n.__gui.__listening.indexOf(n)>-1;n.remove();var m=Al(r,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return m.name(h),p&&m.listen(),m}return c};n.min=Ee.compose(o,n.min),n.max=Ee.compose(o,n.max)}else n instanceof CS?(se.bind(e,"click",function(){se.fakeEvent(n.__checkbox,"click")}),se.bind(n.__checkbox,"click",function(u){u.stopPropagation()})):n instanceof DS?(se.bind(e,"click",function(){se.fakeEvent(n.__button,"click")}),se.bind(e,"mouseover",function(){se.addClass(n.__button,"hover")}),se.bind(e,"mouseout",function(){se.removeClass(n.__button,"hover")})):n instanceof Vp&&(se.addClass(e,"color"),n.updateDisplay=Ee.compose(function(u){return e.style.borderLeftColor=n.__color.toString(),u},n.updateDisplay),n.updateDisplay());n.setValue=Ee.compose(function(u){return r.getRoot().__preset_select&&n.isModified()&&kp(r.getRoot(),!0),u},n.setValue)}function US(r,e){var n=r.getRoot(),a=n.__rememberedObjects.indexOf(e.object);if(a!==-1){var o=n.__rememberedObjectIndecesToControllers[a];if(o===void 0&&(o={},n.__rememberedObjectIndecesToControllers[a]=o),o[e.property]=e,n.load&&n.load.remembered){var u=n.load.remembered,c=void 0;if(u[r.preset])c=u[r.preset];else if(u[Nl])c=u[Nl];else return;if(c[a]&&c[a][e.property]!==void 0){var h=c[a][e.property];e.initialValue=h,e.setValue(h)}}}}function Al(r,e,n,a){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var o=void 0;if(a.color)o=new Vp(e,n);else{var u=[e,n].concat(a.factoryArgs);o=R3.apply(r,u)}a.before instanceof es&&(a.before=a.before.__li),US(r,o),se.addClass(o.domElement,"c");var c=document.createElement("span");se.addClass(c,"property-name"),c.innerHTML=o.property;var h=document.createElement("div");h.appendChild(c),h.appendChild(o.domElement);var p=mm(r,h,a.before);return se.addClass(p,Zt.CLASS_CONTROLLER_ROW),o instanceof Vp?se.addClass(p,"color"):se.addClass(p,g3(o.getValue())),U3(r,p,o),r.__controllers.push(o),o}function $s(r,e){return document.location.href+"."+e}function Xp(r,e,n){var a=document.createElement("option");a.innerHTML=e,a.value=e,r.__preset_select.appendChild(a),n&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Sx(r,e){e.style.display=r.useLocalStorage?"block":"none"}function N3(r){var e=r.__save_row=document.createElement("li");se.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),se.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",se.addClass(n,"button gears");var a=document.createElement("span");a.innerHTML="Save",se.addClass(a,"button"),se.addClass(a,"save");var o=document.createElement("span");o.innerHTML="New",se.addClass(o,"button"),se.addClass(o,"save-as");var u=document.createElement("span");u.innerHTML="Revert",se.addClass(u,"button"),se.addClass(u,"revert");var c=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?Ee.each(r.load.remembered,function(_,v){Xp(r,v,v===r.preset)}):Xp(r,Nl,!1),se.bind(c,"change",function(){for(var _=0;_<r.__preset_select.length;_++)r.__preset_select[_].innerHTML=r.__preset_select[_].value;r.preset=this.value}),e.appendChild(c),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(u),bl){var h=document.getElementById("dg-local-explain"),p=document.getElementById("dg-local-storage"),m=document.getElementById("dg-save-locally");m.style.display="block",localStorage.getItem($s(r,"isLocal"))==="true"&&p.setAttribute("checked","checked"),Sx(r,h),se.bind(p,"change",function(){r.useLocalStorage=!r.useLocalStorage,Sx(r,h)})}var g=document.getElementById("dg-new-constructor");se.bind(g,"keydown",function(_){_.metaKey&&(_.which===67||_.keyCode===67)&&Tl.hide()}),se.bind(n,"click",function(){g.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Tl.show(),g.focus(),g.select()}),se.bind(a,"click",function(){r.save()}),se.bind(o,"click",function(){var _=prompt("Enter a new preset name.");_&&r.saveAs(_)}),se.bind(u,"click",function(){r.revert()})}function O3(r){var e=void 0;r.__resize_handle=document.createElement("div"),Ee.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(u){return u.preventDefault(),r.width+=e-u.clientX,r.onResize(),e=u.clientX,!1}function a(){se.removeClass(r.__closeButton,Zt.CLASS_DRAG),se.unbind(window,"mousemove",n),se.unbind(window,"mouseup",a)}function o(u){return u.preventDefault(),e=u.clientX,se.addClass(r.__closeButton,Zt.CLASS_DRAG),se.bind(window,"mousemove",n),se.bind(window,"mouseup",a),!1}se.bind(r.__resize_handle,"mousedown",o),se.bind(r.__closeButton,"mousedown",o),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Wp(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Tc(r,e){var n={};return Ee.each(r.__rememberedObjects,function(a,o){var u={},c=r.__rememberedObjectIndecesToControllers[o];Ee.each(c,function(h,p){u[p]=e?h.initialValue:h.getValue()}),n[o]=u}),n}function P3(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function NS(r){r.length!==0&&w3.call(window,function(){NS(r)}),Ee.each(r,function(e){e.updateDisplay()})}var I3=Zt;var F3=Object.prototype.toString,_o=Array.isArray||function(e){return F3.call(e)==="[object Array]"};function _m(r){return typeof r=="function"}function B3(r){return _o(r)?"array":typeof r}function Gd(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function yx(r,e){return r!=null&&typeof r=="object"&&e in r}function z3(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var H3=RegExp.prototype.test;function G3(r,e){return H3.call(r,e)}var V3=/\S/;function k3(r){return!G3(V3,r)}var X3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function W3(r){return String(r).replace(/[&<>"'`=\/]/g,function(n){return X3[n]})}var Y3=/\s*/,q3=/\s+/,Ex=/\s*=/,j3=/\s*\}/,Z3=/#|\^|\/|>|\{|&|=|!/;function K3(r,e){if(!r)return[];var n=!1,a=[],o=[],u=[],c=!1,h=!1,p="",m=0;function g(){if(c&&!h)for(;u.length;)delete o[u.pop()];else u=[];c=!1,h=!1}var _,v,E;function b(q){if(typeof q=="string"&&(q=q.split(q3,2)),!_o(q)||q.length!==2)throw new Error("Invalid tags: "+q);_=new RegExp(Gd(q[0])+"\\s*"),v=new RegExp("\\s*"+Gd(q[1])),E=new RegExp("\\s*"+Gd("}"+q[1]))}b(e||Ri.tags);for(var T=new kl(r),y,x,D,w,N,P;!T.eos();){if(y=T.pos,D=T.scanUntil(_),D)for(var B=0,I=D.length;B<I;++B)w=D.charAt(B),k3(w)?(u.push(o.length),p+=w):(h=!0,n=!0,p+=" "),o.push(["text",w,y,y+1]),y+=1,w===`
`&&(g(),p="",m=0,n=!1);if(!T.scan(_))break;if(c=!0,x=T.scan(Z3)||"name",T.scan(Y3),x==="="?(D=T.scanUntil(Ex),T.scan(Ex),T.scanUntil(v)):x==="{"?(D=T.scanUntil(E),T.scan(j3),T.scanUntil(v),x="&"):D=T.scanUntil(v),!T.scan(v))throw new Error("Unclosed tag at "+T.pos);if(x==">"?N=[x,D,y,T.pos,p,m,n]:N=[x,D,y,T.pos],m++,o.push(N),x==="#"||x==="^")a.push(N);else if(x==="/"){if(P=a.pop(),!P)throw new Error('Unopened section "'+D+'" at '+y);if(P[1]!==D)throw new Error('Unclosed section "'+P[1]+'" at '+y)}else x==="name"||x==="{"||x==="&"?h=!0:x==="="&&b(D)}if(g(),P=a.pop(),P)throw new Error('Unclosed section "'+P[1]+'" at '+T.pos);return J3(Q3(o))}function Q3(r){for(var e=[],n,a,o=0,u=r.length;o<u;++o)n=r[o],n&&(n[0]==="text"&&a&&a[0]==="text"?(a[1]+=n[1],a[3]=n[3]):(e.push(n),a=n));return e}function J3(r){for(var e=[],n=e,a=[],o,u,c=0,h=r.length;c<h;++c)switch(o=r[c],o[0]){case"#":case"^":n.push(o),a.push(o),n=o[4]=[];break;case"/":u=a.pop(),u[5]=o[2],n=a.length>0?a[a.length-1][4]:e;break;default:n.push(o)}return e}function kl(r){this.string=r,this.tail=r,this.pos=0}kl.prototype.eos=function(){return this.tail===""};kl.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var a=n[0];return this.tail=this.tail.substring(a.length),this.pos+=a.length,a};kl.prototype.scanUntil=function(e){var n=this.tail.search(e),a;switch(n){case-1:a=this.tail,this.tail="";break;case 0:a="";break;default:a=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=a.length,a};function fo(r,e){this.view=r,this.cache={".":this.view},this.parent=e}fo.prototype.push=function(e){return new fo(e,this)};fo.prototype.lookup=function(e){var n=this.cache,a;if(n.hasOwnProperty(e))a=n[e];else{for(var o=this,u,c,h,p=!1;o;){if(e.indexOf(".")>0)for(u=o.view,c=e.split("."),h=0;u!=null&&h<c.length;)h===c.length-1&&(p=yx(u,c[h])||z3(u,c[h])),u=u[c[h++]];else u=o.view[e],p=yx(o.view,e);if(p){a=u;break}o=o.parent}n[e]=a}return _m(a)&&(a=a.call(this.view)),a};function Wn(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}Wn.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};Wn.prototype.parse=function(e,n){var a=this.templateCache,o=e+":"+(n||Ri.tags).join(":"),u=typeof a<"u",c=u?a.get(o):void 0;return c==null&&(c=K3(e,n),u&&a.set(o,c)),c};Wn.prototype.render=function(e,n,a,o){var u=this.getConfigTags(o),c=this.parse(e,u),h=n instanceof fo?n:new fo(n,void 0);return this.renderTokens(c,h,a,e,o)};Wn.prototype.renderTokens=function(e,n,a,o,u){for(var c="",h,p,m,g=0,_=e.length;g<_;++g)m=void 0,h=e[g],p=h[0],p==="#"?m=this.renderSection(h,n,a,o,u):p==="^"?m=this.renderInverted(h,n,a,o,u):p===">"?m=this.renderPartial(h,n,a,u):p==="&"?m=this.unescapedValue(h,n):p==="name"?m=this.escapedValue(h,n,u):p==="text"&&(m=this.rawValue(h)),m!==void 0&&(c+=m);return c};Wn.prototype.renderSection=function(e,n,a,o,u){var c=this,h="",p=n.lookup(e[1]);function m(v){return c.render(v,n,a,u)}if(p){if(_o(p))for(var g=0,_=p.length;g<_;++g)h+=this.renderTokens(e[4],n.push(p[g]),a,o,u);else if(typeof p=="object"||typeof p=="string"||typeof p=="number")h+=this.renderTokens(e[4],n.push(p),a,o,u);else if(_m(p)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");p=p.call(n.view,o.slice(e[3],e[5]),m),p!=null&&(h+=p)}else h+=this.renderTokens(e[4],n,a,o,u);return h}};Wn.prototype.renderInverted=function(e,n,a,o,u){var c=n.lookup(e[1]);if(!c||_o(c)&&c.length===0)return this.renderTokens(e[4],n,a,o,u)};Wn.prototype.indentPartial=function(e,n,a){for(var o=n.replace(/[^ \t]/g,""),u=e.split(`
`),c=0;c<u.length;c++)u[c].length&&(c>0||!a)&&(u[c]=o+u[c]);return u.join(`
`)};Wn.prototype.renderPartial=function(e,n,a,o){if(a){var u=this.getConfigTags(o),c=_m(a)?a(e[1]):a[e[1]];if(c!=null){var h=e[6],p=e[5],m=e[4],g=c;p==0&&m&&(g=this.indentPartial(c,m,h));var _=this.parse(g,u);return this.renderTokens(_,n,a,g,o)}}};Wn.prototype.unescapedValue=function(e,n){var a=n.lookup(e[1]);if(a!=null)return a};Wn.prototype.escapedValue=function(e,n,a){var o=this.getConfigEscape(a)||Ri.escape,u=n.lookup(e[1]);if(u!=null)return typeof u=="number"&&o===Ri.escape?String(u):o(u)};Wn.prototype.rawValue=function(e){return e[1]};Wn.prototype.getConfigTags=function(e){return _o(e)?e:e&&typeof e=="object"?e.tags:void 0};Wn.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!_o(e))return e.escape};var Ri={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){Ol.templateCache=r},get templateCache(){return Ol.templateCache}},Ol=new Wn;Ri.clearCache=function(){return Ol.clearCache()};Ri.parse=function(e,n){return Ol.parse(e,n)};Ri.render=function(e,n,a,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+B3(e)+'" was given as the first argument for mustache#render(template, view, partials)');return Ol.render(e,n,a,o)};Ri.escape=W3;Ri.Scanner=kl;Ri.Context=fo;Ri.Writer=Wn;const $3=`void main() {\r
    gl_Position = vec4( position, 1.0 );\r
}\r
`,e2=`#define M_PI 3.141592653589793238462643383279\r
#define R_SQRT_2 0.7071067811865475\r
#define DEG_TO_RAD (M_PI/180.0)\r
#define SQ(x) ((x)*(x))\r
\r
#define ROT_Y(a) mat3(0, cos(a), sin(a), 1, 0, 0, 0, sin(a), -cos(a))\r
\r
\r
// spectrum texture lookup helper macros\r
const float BLACK_BODY_TEXTURE_COORD = 1.0;\r
const float SINGLE_WAVELENGTH_TEXTURE_COORD = 0.5;\r
const float TEMPERATURE_LOOKUP_RATIO_TEXTURE_COORD = 0.0;\r
\r
// black-body texture metadata\r
const float SPECTRUM_TEX_TEMPERATURE_RANGE = 65504.0;\r
const float SPECTRUM_TEX_WAVELENGTH_RANGE = 2048.0;\r
const float SPECTRUM_TEX_RATIO_RANGE = 6.48053329012;\r
\r
// multi-line macros don't seem to work in WebGL :(\r
#define BLACK_BODY_COLOR(t) texture2D(spectrum_texture, vec2((t) / SPECTRUM_TEX_TEMPERATURE_RANGE, BLACK_BODY_TEXTURE_COORD))\r
#define SINGLE_WAVELENGTH_COLOR(lambda) texture2D(spectrum_texture, vec2((lambda) / SPECTRUM_TEX_WAVELENGTH_RANGE, SINGLE_WAVELENGTH_TEXTURE_COORD))\r
#define TEMPERATURE_LOOKUP(ratio) (texture2D(spectrum_texture, vec2((ratio) / SPECTRUM_TEX_RATIO_RANGE, TEMPERATURE_LOOKUP_RATIO_TEXTURE_COORD)).r * SPECTRUM_TEX_TEMPERATURE_RANGE)\r
\r
uniform vec2 resolution;\r
uniform float time;\r
\r
uniform vec3 cam_pos;\r
uniform vec3 cam_x;\r
uniform vec3 cam_y;\r
uniform vec3 cam_z;\r
uniform vec3 cam_vel;\r
\r
uniform float planet_distance, planet_radius;\r
\r
uniform sampler2D galaxy_texture, star_texture,\r
    accretion_disk_texture, planet_texture, spectrum_texture;\r
\r
// stepping parameters\r
const int NSTEPS = 100;\r
const float MAX_REVOLUTIONS = 2.0;\r
\r
const float ACCRETION_MIN_R = 1.5;\r
const float ACCRETION_WIDTH = 5.0;\r
const float ACCRETION_BRIGHTNESS = 0.9;\r
const float ACCRETION_TEMPERATURE = 3900.0;\r
\r
const float STAR_MIN_TEMPERATURE = 4000.0;\r
const float STAR_MAX_TEMPERATURE = 15000.0;\r
\r
const float STAR_BRIGHTNESS = 1.0;\r
const float GALAXY_BRIGHTNESS = 0.4;\r
\r
const float PLANET_AMBIENT = 0.1;\r
const float PLANET_LIGHTNESS = 1.5;\r
\r
// background texture coordinate system\r
mat3 BG_COORDS = ROT_Y(45.0 * DEG_TO_RAD);\r
\r
// planet texture coordinate system\r
const float PLANET_AXIAL_TILT = 30.0 * DEG_TO_RAD;\r
mat3 PLANET_COORDS = ROT_Y(PLANET_AXIAL_TILT);\r
\r
const float FOV_ANGLE_DEG = 90.0;\r
float FOV_MULT = 1.0 / tan(DEG_TO_RAD * FOV_ANGLE_DEG*0.5);\r
\r
// derived "constants" (from uniforms)\r
float PLANET_RADIUS,\r
    PLANET_DISTANCE,\r
    PLANET_ORBITAL_ANG_VEL,\r
    PLANET_ROTATION_ANG_VEL,\r
    PLANET_GAMMA;\r
\r
vec2 sphere_map(vec3 p) {\r
    return vec2(atan(p.x,p.y)/M_PI*0.5+0.5, asin(p.z)/M_PI+0.5);\r
}\r
\r
float smooth_step(float x, float threshold) {\r
    const float STEEPNESS = 1.0;\r
    return 1.0 / (1.0 + exp(-(x-threshold)*STEEPNESS));\r
}\r
\r
vec3 lorentz_velocity_transformation(vec3 moving_v, vec3 frame_v) {\r
    float v = length(frame_v);\r
    if (v > 0.0) {\r
        vec3 v_axis = -frame_v / v;\r
        float gamma = 1.0/sqrt(1.0 - v*v);\r
\r
        float moving_par = dot(moving_v, v_axis);\r
        vec3 moving_perp = moving_v - v_axis*moving_par;\r
\r
        float denom = 1.0 + v*moving_par;\r
        return (v_axis*(moving_par+v)+moving_perp/gamma)/denom;\r
    }\r
    return moving_v;\r
}\r
\r
vec3 contract(vec3 x, vec3 d, float mult) {\r
    float par = dot(x,d);\r
    return (x-par*d) + d*par*mult;\r
}\r
\r
vec4 planet_intersection(vec3 old_pos, vec3 ray, float t, float dt,\r
        vec3 planet_pos0, float ray_doppler_factor) {\r
\r
    vec4 ret = vec4(0,0,0,0);\r
    vec3 ray0 = ray;\r
    ray = ray/dt;\r
\r
    vec3 planet_dir = vec3(planet_pos0.y, -planet_pos0.x, 0.0) / PLANET_DISTANCE;\r
\r
    // {{#light_travel_time}}\r
    float planet_ang1 = (t-dt) * PLANET_ORBITAL_ANG_VEL;\r
    vec3 planet_pos1 = vec3(cos(planet_ang1), sin(planet_ang1), 0)*PLANET_DISTANCE;\r
    vec3 planet_vel = (planet_pos1-planet_pos0)/dt;\r
\r
    // transform to moving planet coordinate system\r
    ray = ray - planet_vel;\r
    // {{/light_travel_time}}\r
    // {{^light_travel_time}}\r
    // vec3 planet_vel = planet_dir * PLANET_ORBITAL_ANG_VEL * PLANET_DISTANCE;\r
    // {{/light_travel_time}}\r
\r
    // ray-sphere intersection\r
    vec3 d = old_pos - planet_pos0;\r
\r
    // {{#lorentz_contraction}}\r
    ray = contract(ray, planet_dir, PLANET_GAMMA);\r
    d = contract(d, planet_dir, PLANET_GAMMA);\r
    // {{/lorentz_contraction}}\r
\r
    float dotp = dot(d,ray);\r
    float c_coeff = dot(d,d) - SQ(PLANET_RADIUS);\r
    float ray2 = dot(ray, ray);\r
    float discr = dotp*dotp - ray2*c_coeff;\r
\r
    if (discr < 0.0) return ret;\r
    float isec_t = (-dotp - sqrt(discr)) / ray2;\r
\r
    float MIN_ISEC_DT = 0.0;\r
    // {{#lorentz_contraction}}\r
    MIN_ISEC_DT = -dt;\r
    // {{/lorentz_contraction}}\r
\r
    if (isec_t < MIN_ISEC_DT || isec_t > dt) return ret;\r
\r
    vec3 surface_point = (d + isec_t*ray) / PLANET_RADIUS;\r
\r
    isec_t = isec_t/dt;\r
\r
    vec3 light_dir = planet_pos0;\r
    float rot_phase = t;\r
\r
    // {{#light_travel_time}}\r
    light_dir += planet_vel*isec_t*dt;\r
    rot_phase -= isec_t*dt;\r
    // {{/light_travel_time}}\r
\r
    rot_phase = rot_phase * PLANET_ROTATION_ANG_VEL*0.5/M_PI;\r
    light_dir = light_dir / PLANET_DISTANCE;\r
\r
    // {{#light_travel_time}}\r
    light_dir = light_dir - planet_vel;\r
    // {{/light_travel_time}}\r
\r
    vec3 surface_normal = surface_point;\r
    // {{#lorentz_contraction}}\r
    light_dir = contract(light_dir, planet_dir, PLANET_GAMMA);\r
    // {{/lorentz_contraction}}\r
    light_dir = normalize(light_dir);\r
\r
    vec2 tex_coord = sphere_map(surface_point * PLANET_COORDS);\r
    tex_coord.x = mod(tex_coord.x + rot_phase, 1.0);\r
\r
    float diffuse = max(0.0, dot(surface_normal, -light_dir));\r
    float lightness = ((1.0-PLANET_AMBIENT)*diffuse + PLANET_AMBIENT) *\r
        PLANET_LIGHTNESS;\r
\r
    float light_temperature = ACCRETION_TEMPERATURE;\r
    // {{#doppler_shift}}\r
    float doppler_factor = SQ(PLANET_GAMMA) *\r
        (1.0 + dot(planet_vel, light_dir)) *\r
        (1.0 - dot(planet_vel, normalize(ray)));\r
    light_temperature /= doppler_factor * ray_doppler_factor;\r
    // {{/doppler_shift}}\r
\r
    vec4 light_color = BLACK_BODY_COLOR(light_temperature);\r
    ret = texture2D(planet_texture, tex_coord) * lightness * light_color;\r
    if (isec_t < 0.0) isec_t = 0.5;\r
    ret.w = isec_t;\r
\r
    return ret;\r
}\r
\r
vec4 galaxy_color(vec2 tex_coord, float doppler_factor) {\r
\r
    vec4 color = texture2D(galaxy_texture, tex_coord);\r
    // {{^observerMotion}}\r
    // return color;\r
    // {{/observerMotion}}\r
\r
    // {{#observerMotion}}\r
    vec4 ret = vec4(0.0, 0.0, 0.0, 0.0);\r
    float red = max(0.0, color.r - color.g);\r
\r
    const float H_ALPHA_RATIO = 0.1;\r
    const float TEMPERATURE_BIAS = 0.95;\r
\r
    color.r -= red*H_ALPHA_RATIO;\r
\r
    float i1 = max(color.r, max(color.g, color.b));\r
    float ratio = (color.g+color.b) / color.r;\r
\r
    if (i1 > 0.0 && color.r > 0.0) {\r
\r
        float temperature = TEMPERATURE_LOOKUP(ratio) * TEMPERATURE_BIAS;\r
        color = BLACK_BODY_COLOR(temperature);\r
\r
        float i0 = max(color.r, max(color.g, color.b));\r
        if (i0 > 0.0) {\r
            temperature /= doppler_factor;\r
            ret = BLACK_BODY_COLOR(temperature) * max(i1/i0,0.0);\r
        }\r
    }\r
\r
    ret += SINGLE_WAVELENGTH_COLOR(656.28 * doppler_factor) * red / 0.214 * H_ALPHA_RATIO;\r
\r
    return ret;\r
    // {{/observerMotion}}\r
}\r
\r
void main() {\r
\r
    // {{#planetEnabled}}\r
    // "constants" derived from uniforms\r
    PLANET_RADIUS = planet_radius;\r
    PLANET_DISTANCE = max(planet_distance,planet_radius+1.5);\r
    PLANET_ORBITAL_ANG_VEL = -1.0 / sqrt(2.0*(PLANET_DISTANCE-1.0)) / PLANET_DISTANCE;\r
    float MAX_PLANET_ROT = max((1.0 + PLANET_ORBITAL_ANG_VEL*PLANET_DISTANCE) / PLANET_RADIUS,0.0);\r
    PLANET_ROTATION_ANG_VEL = -PLANET_ORBITAL_ANG_VEL + MAX_PLANET_ROT * 0.5;\r
    PLANET_GAMMA = 1.0/sqrt(1.0-SQ(PLANET_ORBITAL_ANG_VEL*PLANET_DISTANCE));\r
    // {{/planetEnabled}}\r
\r
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\r
    p.y *= resolution.y / resolution.x;\r
\r
    vec3 pos = cam_pos;\r
    vec3 ray = normalize(p.x*cam_x + p.y*cam_y + FOV_MULT*cam_z);\r
\r
    // {{#aberration}}\r
    ray = lorentz_velocity_transformation(ray, cam_vel);\r
    // {{/aberration}}\r
\r
    float ray_intensity = 1.0;\r
    float ray_doppler_factor = 1.0;\r
\r
    float gamma = 1.0/sqrt(1.0-dot(cam_vel,cam_vel));\r
    ray_doppler_factor = gamma*(1.0 + dot(ray,-cam_vel));\r
    // {{#beaming}}\r
    ray_intensity /= ray_doppler_factor*ray_doppler_factor*ray_doppler_factor;\r
    // {{/beaming}}\r
    // {{^doppler_shift}}\r
    ray_doppler_factor = 1.0;\r
    // {{/doppler_shift}}\r
\r
    float step = 0.01;\r
    vec4 color = vec4(0.0,0.0,0.0,1.0);\r
\r
    // initial conditions\r
    float u = 1.0 / length(pos), old_u;\r
    float u0 = u;\r
\r
    vec3 normal_vec = normalize(pos);\r
    vec3 tangent_vec = normalize(cross(cross(normal_vec, ray), normal_vec));\r
\r
    float du = -dot(ray,normal_vec) / dot(ray,tangent_vec) * u;\r
    float du0 = du;\r
\r
    float phi = 0.0;\r
    float t = time;\r
    float dt = 1.0;\r
\r
    // {{^light_travel_time}}\r
    float planet_ang0 = t * PLANET_ORBITAL_ANG_VEL;\r
    vec3 planet_pos0 = vec3(cos(planet_ang0), sin(planet_ang0), 0)*PLANET_DISTANCE;\r
    // {{/light_travel_time}}\r
\r
    vec3 old_pos;\r
\r
    for (int j=0; j < NSTEPS; j++) {\r
\r
        step = MAX_REVOLUTIONS * 2.0*M_PI / float(NSTEPS);\r
\r
        // adaptive step size, some ad hoc formulas\r
        float max_rel_u_change = (1.0-log(u))*10.0 / float(NSTEPS);\r
        if ((du > 0.0 || (du0 < 0.0 && u0/u < 5.0)) && abs(du) > abs(max_rel_u_change*u) / step)\r
            step = max_rel_u_change*u/abs(du);\r
\r
        old_u = u;\r
\r
        // {{#light_travel_time}}\r
        // {{#gravitational_time_dilation}}\r
        dt = sqrt(du*du + u*u*(1.0-u))/(u*u*(1.0-u))*step;\r
        // {{/gravitational_time_dilation}}\r
        // {{/light_travel_time}}\r
\r
        // Leapfrog scheme\r
        u += du*step;\r
        float ddu = -u*(1.0 - 1.5*u*u);\r
        du += ddu*step;\r
\r
        if (u < 0.0) break;\r
\r
        phi += step;\r
\r
        old_pos = pos;\r
        pos = (cos(phi)*normal_vec + sin(phi)*tangent_vec)/u;\r
\r
        ray = pos-old_pos;\r
        float solid_isec_t = 2.0;\r
        float ray_l = length(ray);\r
\r
        // {{#light_travel_time}}\r
        // {{#gravitational_time_dilation}}\r
        float mix = smooth_step(1.0/u, 8.0);\r
        dt = mix*ray_l + (1.0-mix)*dt;\r
        // {{/gravitational_time_dilation}}\r
        // {{^gravitational_time_dilation}}\r
        dt = ray_l;\r
        // {{/gravitational_time_dilation}}\r
        // {{/light_travel_time}}\r
\r
        // {{#planetEnabled}}\r
        if (\r
            (\r
                old_pos.z * pos.z < 0.0 ||\r
                min(abs(old_pos.z), abs(pos.z)) < PLANET_RADIUS\r
            ) &&\r
            max(u, old_u) > 1.0/(PLANET_DISTANCE+PLANET_RADIUS) &&\r
            min(u, old_u) < 1.0/(PLANET_DISTANCE-PLANET_RADIUS)\r
        ) {\r
\r
            // {{#light_travel_time}}\r
            float planet_ang0 = t * PLANET_ORBITAL_ANG_VEL;\r
            vec3 planet_pos0 = vec3(cos(planet_ang0), sin(planet_ang0), 0)*PLANET_DISTANCE;\r
            // {{/light_travel_time}}\r
\r
            vec4 planet_isec = planet_intersection(old_pos, ray, t, dt,\r
                    planet_pos0, ray_doppler_factor);\r
            if (planet_isec.w > 0.0) {\r
                solid_isec_t = planet_isec.w;\r
                planet_isec.w = 1.0;\r
                color += planet_isec;\r
            }\r
        }\r
        // {{/planetEnabled}}\r
\r
        // {{#accretion_disk}}\r
        if (old_pos.z * pos.z < 0.0) {\r
            // crossed plane z=0\r
\r
            float acc_isec_t = -old_pos.z / ray.z;\r
            if (acc_isec_t < solid_isec_t) {\r
                vec3 isec = old_pos + ray*acc_isec_t;\r
\r
                float r = length(isec);\r
\r
                if (r > ACCRETION_MIN_R) {\r
                    vec2 tex_coord = vec2(\r
                            (r-ACCRETION_MIN_R)/ACCRETION_WIDTH,\r
                            atan(isec.x, isec.y)/M_PI*0.5+0.5\r
                    );\r
\r
                    float accretion_intensity = ACCRETION_BRIGHTNESS;\r
                    //accretion_intensity *= 1.0 / abs(ray.z/ray_l);\r
                    float temperature = ACCRETION_TEMPERATURE;\r
\r
                    vec3 accretion_v = vec3(-isec.y, isec.x, 0.0) / sqrt(2.0*(r-1.0)) / (r*r);\r
                    gamma = 1.0/sqrt(1.0-dot(accretion_v,accretion_v));\r
                    float doppler_factor = gamma*(1.0+dot(ray/ray_l,accretion_v));\r
                    // {{#beaming}}\r
                    accretion_intensity /= doppler_factor*doppler_factor*doppler_factor;\r
                    // {{/beaming}}\r
                    // {{#doppler_shift}}\r
                    temperature /= ray_doppler_factor*doppler_factor;\r
                    // {{/doppler_shift}}\r
\r
                    color += texture2D(accretion_disk_texture,tex_coord)\r
                        * accretion_intensity\r
                        * vec4(0.1255, 0.4353, 0.8157, 1.0);\r
                }\r
            }\r
        }\r
        // {{/accretion_disk}}\r
\r
        // {{#light_travel_time}}\r
        t -= dt;\r
        // {{/light_travel_time}}\r
\r
        if (solid_isec_t <= 1.0) u = 2.0; // break\r
        if (u > 1.0) break;\r
    }\r
\r
    // the event horizon is at u = 1\r
    if (u < 1.0) {\r
        ray = normalize(pos - old_pos);\r
        vec2 tex_coord = sphere_map(ray * BG_COORDS);\r
        float t_coord;\r
\r
        vec4 star_color = texture2D(star_texture, tex_coord);\r
        if (star_color.r > 0.0) {\r
            t_coord = (STAR_MIN_TEMPERATURE +\r
                (STAR_MAX_TEMPERATURE-STAR_MIN_TEMPERATURE) * star_color.g)\r
                 / ray_doppler_factor;\r
\r
            color += BLACK_BODY_COLOR(t_coord) * star_color.r * STAR_BRIGHTNESS;\r
        }\r
\r
        color += galaxy_color(tex_coord, ray_doppler_factor) * GALAXY_BRIGHTNESS;\r
    }\r
    \r
    \r
    gl_FragColor = color*ray_intensity;\r
}\r
`,t2=`precision lowp float;\r
\r
uniform sampler2D tDiffuse;\r
uniform vec2 uResolution;\r
\r
// --- 6 Colors Palette ---\r
uniform vec3 uColor1;\r
uniform vec3 uColor2;\r
uniform vec3 uColor3;\r
uniform vec3 uColor4;\r
uniform vec3 uColor5;\r
uniform vec3 uColor6;\r
\r
varying vec2 vUv;\r
\r
// -------- Palette lookup (branchless) --------\r
vec3 palette(float i) {\r
    i = clamp(i, 0.0, 5.0);\r
\r
    vec3 c = uColor1;\r
    c = mix(c, uColor2, step(1.0, i));\r
    c = mix(c, uColor3, step(2.0, i));\r
    c = mix(c, uColor4, step(3.0, i));\r
    c = mix(c, uColor5, step(4.0, i));\r
    c = mix(c, uColor6, step(5.0, i));\r
\r
    return c;\r
}\r
\r
// -------- 4x4 Bayer matrix (branchless) --------\r
float bayer4x4(vec2 p) {\r
    vec2 f = mod(p, 4.0);\r
    int x = int(f.x);\r
    int y = int(f.y);\r
\r
    // Flattened Bayer matrix (row-major)\r
    float m[16];\r
    m[0]  = 0.0625;  m[1]  = 0.5625;  m[2]  = 0.1875;  m[3]  = 0.6875;\r
    m[4]  = 0.8125;  m[5]  = 0.3125;  m[6]  = 0.9375;  m[7]  = 0.4375;\r
    m[8]  = 0.25;    m[9]  = 0.75;    m[10] = 0.125;  m[11] = 0.625;\r
    m[12] = 1.0;     m[13] = 0.5;     m[14] = 0.875;  m[15] = 0.375;\r
\r
    return m[x + y * 4];\r
}\r
\r
void main() {\r
    vec3 color = texture2D(tDiffuse, vUv).rgb;\r
\r
    // Luminance\r
    float gray = dot(color, vec3(0.299, 0.587, 0.114));\r
\r
    // Scale to palette range\r
    float scaled = gray * 5.0;\r
\r
    // Bayer threshold\r
    float threshold = bayer4x4(gl_FragCoord.xy);\r
\r
    // Dithered quantization\r
    float index = floor(scaled + step(threshold, fract(scaled)));\r
\r
    // Output\r
    gl_FragColor = vec4(palette(index), 1.0);\r
}\r
`,n2={name:"DitherColorShader",uniforms:{tDiffuse:{value:null},uResolution:{value:new nt(window.innerWidth,window.innerHeight)},uColor1:{value:new _t(131589)},uColor2:{value:new _t(657966)},uColor3:{value:new _t(13216)},uColor4:{value:new _t(51455)},uColor5:{value:new _t(7143418)},uColor6:{value:new _t(15138815)}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:t2};class i2{constructor(){this.position=new Z(10,0,0),this.velocity=new Z(1,0,0),this.orientation=new ct,this.time=0}orbitalFrame(){const e=new Z().subVectors(this.velocity.clone().normalize().multiplyScalar(4),this.position).normalize(),n=new Z().crossVectors(this.position,e).normalize(),a=new Z().crossVectors(e,n).normalize(),o=new tn;o.makeBasis(a,e,n);const u=new ct;return u.setFromMatrix4(o),u}move(e,n){e*=n.time_scale;let a,o=0;if(n.observer.motion){a=n.observer.distance,o=1/Math.sqrt(2*(a-1));const u=o/a,c=this.time*u,h=Math.sin(c),p=Math.cos(c);this.position.set(p*a,h*a,0),this.velocity.set(-h*o,p*o,0);const g=(v=>Math.PI*v/180)(n.observer.orbital_inclination),_=new tn().makeRotationY(g);this.position.applyMatrix4(_),this.velocity.applyMatrix4(_)}else a=this.position.length();n.gravitational_time_dilation&&(e=Math.sqrt(e*e*(1-o*o)/(1-1/a))),this.time+=e}}class a2{constructor(e){this.template=e,this.parameters={n_steps:100,quality:"fast",accretion_disk:!0,planet:{enabled:!0,distance:7,radius:.4},lorentz_contraction:!0,gravitational_time_dilation:!0,aberration:!0,beaming:!0,doppler_shift:!0,light_travel_time:!0,time_scale:5,observer:{motion:!0,distance:30,orbital_inclination:-5},planetEnabled:function(){return this.planet.enabled&&this.quality!=="fast"},observerMotion:function(){return this.observer.motion}},this.needsUpdate=!1}hasMovingParts(){return this.parameters.planet.enabled||this.parameters.observer.motion}compile(){return Ri.render(this.template,this.parameters)}}const bx=r=>Math.PI*r/180,r2=()=>{const r=ge.useRef(null),e=ge.useRef(null),n=ge.useRef(null),a=ge.useRef(null);return ge.useEffect(()=>{const o=r.current,u=window.innerWidth,c=window.innerHeight,h=new UT;e.current=h;const p=new Ti(45,u/c,1,8e4),m=new kw;m.setPixelRatio(window.devicePixelRatio),m.setSize(u,c),o.appendChild(m.domElement);const g=new p3;g.domElement.style.position="absolute",g.domElement.style.top="0px",o.appendChild(g.domElement);const _=new i2;a.current=_;const v=new a2(e2);n.current=v;const E=new XT,b={galaxy:E.load("/img/milkyway.png"),spectra:E.load("/img/spectra.png"),moon:E.load("/img/berserk.jpg"),accretion_disk:E.load("/img/gradient14.png"),stars:E.load("/img/stars1.png")};b.galaxy.magFilter=Sn,b.galaxy.minFilter=Sn;const T=new Gl(3,3),y={time:{value:0},resolution:{value:new nt(u,c)},cam_pos:{value:new Z},cam_x:{value:new Z},cam_y:{value:new Z},cam_z:{value:new Z},cam_vel:{value:new Z},planet_distance:{value:v.parameters.planet.distance},planet_radius:{value:v.parameters.planet.radius},star_texture:{value:b.stars},accretion_disk_texture:{value:b.accretion_disk},galaxy_texture:{value:b.galaxy},planet_texture:{value:b.moon},spectrum_texture:{value:b.spectra}},x=new In({uniforms:y,vertexShader:$3,fragmentShader:v.compile()}),D=new Vi(T,x);h.add(D);const w=new Ww(p,m.domElement);w.target.set(0,0,0),(()=>{p.matrixWorldInverse.makeRotationX(bx(-10)),p.matrixWorldInverse.multiply(new tn().makeRotationY(bx(-0)));const oe=p.matrixWorldInverse.elements;p.position.set(oe[2],oe[6],oe[10])})();const P=new l3(m),B=new u3(h,p);P.addPass(B);const I=new co(new nt(u,c),.1,.1,0);P.addPass(I);const q=new AS(n2);q.uniforms.uResolution.value.set(u,c),P.addPass(q);const C=new I3({autoPlace:!1});C.domElement.style.position="absolute",C.domElement.style.top="0px",C.domElement.style.right="0px",o.appendChild(C.domElement),(()=>{const oe=v.parameters,_e=()=>{x.fragmentShader=v.compile(),x.needsUpdate=!0,v.needsUpdate=!0};C.add(oe,"quality",["fast","medium","high"]).onChange(Q=>{switch(Q){case"fast":oe.n_steps=40;break;case"medium":oe.n_steps=100;break;case"high":oe.n_steps=200;break}_e()});const U=C.addFolder("Observer");U.add(oe.observer,"motion").onChange(_e),U.add(oe.observer,"distance",1.5,30).onChange(()=>{}),U.open()})();const k=()=>{const oe=p.matrixWorldInverse.elements;let _e;if(v.parameters.observer.motion?_e=new ct:_e=_.orientation,_e.set(oe[0],oe[1],oe[2],oe[8],oe[9],oe[10],oe[4],oe[5],oe[6]),v.parameters.observer.motion)_.orientation=_.orbitalFrame().multiply(_e);else{const U=new Z(oe[6],oe[7],oe[8]),Q=v.parameters.observer.distance;_.position.set(-U.x*Q,-U.y*Q,-U.z*Q),_.velocity.set(0,0,0)}};w.addEventListener("change",k),k();const re=()=>{y.planet_distance.value=v.parameters.planet.distance,y.planet_radius.value=v.parameters.planet.radius,y.resolution.value.set(m.domElement.width,m.domElement.height),y.time.value=_.time,y.cam_pos.value.copy(_.position),y.cam_vel.value.copy(_.velocity);const oe=_.orientation.elements;y.cam_x.value.set(oe[0],oe[1],oe[2]),y.cam_y.value.set(oe[3],oe[4],oe[5]),y.cam_z.value.set(oe[6],oe[7],oe[8])};let ae=new tn().identity(),pe=performance.now(),fe;const F=(oe,_e)=>{let U=0;for(let Q=0;Q<16;Q++){const xe=oe.elements[Q]-_e.elements[Q];U+=xe*xe}return Math.sqrt(U)},H=()=>{fe=requestAnimationFrame(H);const oe=performance.now(),_e=(oe-pe)/1e3;pe=oe,_.move(_e,v.parameters),v.parameters.observer.motion&&k(),re(),p.updateMatrixWorld(),p.matrixWorldInverse.copy(p.matrixWorld).invert(),(v.needsUpdate||v.hasMovingParts()||F(p.matrixWorldInverse,ae)>1e-10)&&(v.needsUpdate=!1,P.render(),ae.copy(p.matrixWorldInverse)),g.update()};H();const ee=()=>{const oe=window.innerWidth,_e=window.innerHeight;m.setSize(oe,_e),p.aspect=oe/_e,p.updateProjectionMatrix(),P.setSize(oe,_e),I.resolution.set(oe,_e),q.uniforms.uResolution.value.set(oe,_e)};return window.addEventListener("resize",ee),()=>{cancelAnimationFrame(fe),window.removeEventListener("resize",ee),w.dispose(),C.destroy(),m.dispose(),o&&(o.innerHTML="")}},[]),tt.jsx("div",{ref:r,style:{width:"100%",height:"100vh",overflow:"hidden"}})},s2=()=>tt.jsxs("div",{className:"landing-container",children:[tt.jsx("div",{className:"three-scene-wrapper",children:tt.jsx(r2,{})}),tt.jsxs("div",{className:"landing-overlay",children:[tt.jsx("h1",{className:"landing-title"}),tt.jsx("p",{className:"landing-subtitle"})]})]}),o2=()=>tt.jsx("div",{className:"about-container",children:tt.jsxs("div",{className:"about-content",children:[tt.jsxs("div",{className:"grid-section hero-section",children:[tt.jsx("h1",{className:"section-title",children:"About This Project"}),tt.jsx("p",{className:"section-text",children:"Exploring the intersection of astrophysics and interactive visualization."})]}),tt.jsxs("div",{className:"grid-layout",children:[tt.jsxs("div",{className:"grid-item card-1",children:[tt.jsx("h2",{children:"The Black Hole Simulation"}),tt.jsx("p",{children:"This interactive visualization uses real-time ray-tracing to simulate gravitational lensing around a Schwarzschild black hole. Watch as light bends around the event horizon, creating stunning visual effects."})]}),tt.jsxs("div",{className:"grid-item card-2",children:[tt.jsx("h2",{children:"Physics Behind It"}),tt.jsx("p",{children:"The simulation accounts for general relativistic effects including gravitational lensing, Doppler shifting, and the warping of spacetime around massive objects."})]}),tt.jsxs("div",{className:"grid-item card-3",children:[tt.jsx("h2",{children:"Technical Features"}),tt.jsxs("ul",{children:[tt.jsx("li",{children:"Real-time GLSL Ray Tracing"}),tt.jsx("li",{children:"Accretion Disk Rendering"}),tt.jsx("li",{children:"Interactive Camera Controls"}),tt.jsx("li",{children:"WebGL Powered Graphics"})]})]}),tt.jsxs("div",{className:"grid-item card-4",children:[tt.jsx("h2",{children:"How to Interact"}),tt.jsx("p",{children:"Use your mouse to drag and rotate the view. The simulation runs continuously, showing the orbital dynamics around the black hole."})]}),tt.jsxs("div",{className:"grid-item card-5 full-width",children:[tt.jsx("h2",{children:"Learn More"}),tt.jsx("p",{children:"This visualization is inspired by real astrophysics research and demonstrates the power of modern web technologies to bring complex scientific concepts to life."}),tt.jsxs("div",{className:"contact-buttons",children:[tt.jsx("button",{className:"btn-primary",children:"Back to Simulation"}),tt.jsx("button",{className:"btn-secondary",children:"Technical Details"})]})]})]})]})});function l2(){return tt.jsx(_M,{children:tt.jsxs("div",{className:"app",children:[tt.jsx(AM,{}),tt.jsxs(Yb,{children:[tt.jsx(kd,{path:"/",element:tt.jsx(s2,{})}),tt.jsx(kd,{path:"/about",element:tt.jsx(o2,{})})]})]})})}jE.createRoot(document.getElementById("root")).render(tt.jsx(ge.StrictMode,{children:tt.jsx(l2,{})}));
