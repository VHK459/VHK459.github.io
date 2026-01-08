(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ch={exports:{}},Zo={};var m0;function Hy(){if(m0)return Zo;m0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var _0;function Gy(){return _0||(_0=1,Ch.exports=Hy()),Ch.exports}var Ke=Gy(),wh={exports:{}},ot={};var g0;function Vy(){if(g0)return ot;g0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function v(N,X,le){this.props=N,this.context=X,this.refs=y,this.updater=le||T}v.prototype.isReactComponent={},v.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=v.prototype;function U(N,X,le){this.props=N,this.context=X,this.refs=y,this.updater=le||T}var O=U.prototype=new w;O.constructor=U,b(O,v.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function C(N,X,le){var Te=le.ref;return{$$typeof:s,type:N,key:X,ref:Te!==void 0?Te:null,props:le}}function D(N,X){return C(N.type,X,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function re(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return X[le]})}var ae=/\/+/g;function pe(N,X){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):X.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,X,le,Te,Le){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var fe=!1;if(N===null)fe=!0;else switch(ee){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(N.$$typeof){case s:case e:fe=!0;break;case g:return fe=N._init,F(fe(N._payload),X,le,Te,Le)}}if(fe)return Le=Le(N),fe=Te===""?"."+pe(N,0):Te,P(Le)?(le="",fe!=null&&(le=fe.replace(ae,"$&/")+"/"),F(Le,X,le,"",function(He){return He})):Le!=null&&(k(Le)&&(Le=D(Le,le+(Le.key==null||N&&N.key===Le.key?"":(""+Le.key).replace(ae,"$&/")+"/")+fe)),X.push(Le)),1;fe=0;var De=Te===""?".":Te+":";if(P(N))for(var ke=0;ke<N.length;ke++)Te=N[ke],ee=De+pe(Te,ke),fe+=F(Te,X,le,ee,Le);else if(ke=E(N),typeof ke=="function")for(N=ke.call(N),ke=0;!(Te=N.next()).done;)Te=Te.value,ee=De+pe(Te,ke++),fe+=F(Te,X,le,ee,Le);else if(ee==="object"){if(typeof N.then=="function")return F(ce(N),X,le,Te,Le);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(N,X,le){if(N==null)return N;var Te=[],Le=0;return F(N,Te,"","",function(ee){return X.call(le,ee,Le++)}),Te}function te(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var ye=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Se={map:H,forEach:function(N,X,le){H(N,function(){X.apply(this,arguments)},le)},count:function(N){var X=0;return H(N,function(){X++}),X},toArray:function(N){return H(N,function(X){return X})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=_,ot.Children=Se,ot.Component=v,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=U,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,X,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=b({},N.props),Le=N.key;if(X!=null)for(ee in X.key!==void 0&&(Le=""+X.key),X)!Z.call(X,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&X.ref===void 0||(Te[ee]=X[ee]);var ee=arguments.length-2;if(ee===1)Te.children=le;else if(1<ee){for(var fe=Array(ee),De=0;De<ee;De++)fe[De]=arguments[De+2];Te.children=fe}return C(N.type,Le,Te)},ot.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ot.createElement=function(N,X,le){var Te,Le={},ee=null;if(X!=null)for(Te in X.key!==void 0&&(ee=""+X.key),X)Z.call(X,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Le[Te]=X[Te]);var fe=arguments.length-2;if(fe===1)Le.children=le;else if(1<fe){for(var De=Array(fe),ke=0;ke<fe;ke++)De[ke]=arguments[ke+2];Le.children=De}if(N&&N.defaultProps)for(Te in fe=N.defaultProps,fe)Le[Te]===void 0&&(Le[Te]=fe[Te]);return C(N,ee,Le)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:d,render:N}},ot.isValidElement=k,ot.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:te}},ot.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},ot.startTransition=function(N){var X=I.T,le={};I.T=le;try{var Te=N(),Le=I.S;Le!==null&&Le(le,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(z,ye)}catch(ee){ye(ee)}finally{X!==null&&le.types!==null&&(X.types=le.types),I.T=X}},ot.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ot.use=function(N){return I.H.use(N)},ot.useActionState=function(N,X,le){return I.H.useActionState(N,X,le)},ot.useCallback=function(N,X){return I.H.useCallback(N,X)},ot.useContext=function(N){return I.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,X){return I.H.useDeferredValue(N,X)},ot.useEffect=function(N,X){return I.H.useEffect(N,X)},ot.useEffectEvent=function(N){return I.H.useEffectEvent(N)},ot.useId=function(){return I.H.useId()},ot.useImperativeHandle=function(N,X,le){return I.H.useImperativeHandle(N,X,le)},ot.useInsertionEffect=function(N,X){return I.H.useInsertionEffect(N,X)},ot.useLayoutEffect=function(N,X){return I.H.useLayoutEffect(N,X)},ot.useMemo=function(N,X){return I.H.useMemo(N,X)},ot.useOptimistic=function(N,X){return I.H.useOptimistic(N,X)},ot.useReducer=function(N,X,le){return I.H.useReducer(N,X,le)},ot.useRef=function(N){return I.H.useRef(N)},ot.useState=function(N){return I.H.useState(N)},ot.useSyncExternalStore=function(N,X,le){return I.H.useSyncExternalStore(N,X,le)},ot.useTransition=function(){return I.H.useTransition()},ot.version="19.2.3",ot}var v0;function mp(){return v0||(v0=1,wh.exports=Vy()),wh.exports}var de=mp(),Dh={exports:{}},Ko={},Uh={exports:{}},Lh={};var x0;function ky(){return x0||(x0=1,(function(s){function e(F,H){var te=F.length;F.push(H);e:for(;0<te;){var ye=te-1>>>1,Se=F[ye];if(0<l(Se,H))F[ye]=H,F[te]=Se,te=ye;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],te=F.pop();if(te!==H){F[0]=te;e:for(var ye=0,Se=F.length,N=Se>>>1;ye<N;){var X=2*(ye+1)-1,le=F[X],Te=X+1,Le=F[Te];if(0>l(le,te))Te<Se&&0>l(Le,le)?(F[ye]=Le,F[Te]=te,ye=Te):(F[ye]=le,F[X]=te,ye=X);else if(Te<Se&&0>l(Le,te))F[ye]=Le,F[Te]=te,ye=Te;else break e}}return H}function l(F,H){var te=F.sortIndex-H.sortIndex;return te!==0?te:F.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,E=!1,T=!1,b=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function P(F){if(b=!1,O(F),!T)if(i(m)!==null)T=!0,z||(z=!0,re());else{var H=i(p);H!==null&&ce(P,H.startTime-F)}}var z=!1,I=-1,Z=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<Z)}function k(){if(y=!1,z){var F=s.unstable_now();C=F;var H=!0;try{e:{T=!1,b&&(b=!1,w(I),I=-1),E=!0;var te=x;try{t:{for(O(F),_=i(m);_!==null&&!(_.expirationTime>F&&D());){var ye=_.callback;if(typeof ye=="function"){_.callback=null,x=_.priorityLevel;var Se=ye(_.expirationTime<=F);if(F=s.unstable_now(),typeof Se=="function"){_.callback=Se,O(F),H=!0;break t}_===i(m)&&r(m),O(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var N=i(p);N!==null&&ce(P,N.startTime-F),H=!1}}break e}finally{_=null,x=te,E=!1}H=void 0}}finally{H?re():z=!1}}}var re;if(typeof U=="function")re=function(){U(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=k,re=function(){pe.postMessage(null)}}else re=function(){v(k,0)};function ce(F,H){I=v(function(){F(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var te=x;x=H;try{return F()}finally{x=te}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=x;x=F;try{return H()}finally{x=te}},s.unstable_scheduleCallback=function(F,H,te){var ye=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,F={id:g++,callback:H,priorityLevel:F,startTime:te,expirationTime:Se,sortIndex:-1},te>ye?(F.sortIndex=te,e(p,F),i(m)===null&&F===i(p)&&(b?(w(I),I=-1):b=!0,ce(P,te-ye))):(F.sortIndex=Se,e(m,F),T||E||(T=!0,z||(z=!0,re()))),F},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(F){var H=x;return function(){var te=x;x=H;try{return F.apply(this,arguments)}finally{x=te}}}})(Lh)),Lh}var S0;function Xy(){return S0||(S0=1,Uh.exports=ky()),Uh.exports}var Nh={exports:{}},On={};var y0;function Wy(){if(y0)return On;y0=1;var s=mp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var E0;function qy(){if(E0)return Nh.exports;E0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nh.exports=Wy(),Nh.exports}var M0;function Yy(){if(M0)return Ko;M0=1;var s=Xy(),e=mp(),i=qy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),t;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=h;break}if(A===o){S=!0,o=c,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=c;break}if(A===o){S=!0,o=h,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ce=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function N(t){return{current:t}}function X(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function le(t,n){Se++,ye[Se]=t.current,t.current=n}var Te=N(null),Le=N(null),ee=N(null),fe=N(null);function De(t,n){switch(le(ee,n),le(Le,t),le(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Bg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(Te),le(Te,t)}function ke(){X(Te),X(Le),X(ee)}function He(t){t.memoizedState!==null&&le(fe,t);var n=Te.current,a=Bg(n,t.type);n!==a&&(le(Le,t),le(Te,a))}function mt(t){Le.current===t&&(X(Te),X(Le)),fe.current===t&&(X(fe),Wo._currentValue=te)}var en,St;function _t(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+St}var Dt=!1;function ut(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var ie=oe}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(oe){ie=oe}t.call(ge.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var B=S.split(`
`),$=A.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var he=`
`+B[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=c);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return _t("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,L=s.unstable_requestPaint,M=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,me=s.unstable_ImmediatePriority,xe=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Xe=s.log,it=s.unstable_setDisableYieldValue,Me=null,be=null;function ze(t){if(typeof Xe=="function"&&it(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Me,t)}catch{}}var Ie=Math.clz32?Math.clz32:W,we=Math.log,ft=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(we(t)/ft|0)|0}var Ne=256,Ae=262144,Fe=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=Ee(o):(S&=A,S!==0?c=Ee(S):a||(a=A&~t,a!==0&&(c=Ee(a))))):(A=o&~h,A!==0?c=Ee(A):S!==0?c=Ee(S):a||(a=o&~t,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bi(t,n,a,o,c,h){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var he=31-Ie(a),ge=1<<he;A[he]=0,B[he]=-1;var ie=$[he];if(ie!==null)for($[he]=null,he=0;he<ie.length;he++){var oe=ie[he];oe!==null&&(oe.lane&=-536870913)}a&=~ge}o!==0&&Tl(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function Tl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function no(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Xr(t,n){var a=n&-n;return a=(a&42)!==0?1:io(a),(a&(t.suspendedLanes|n))!==0?0:a}function io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ao(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Bi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ui=Math.random().toString(36).slice(2),ln="__reactFiber$"+ui,En="__reactProps$"+ui,Ai="__reactContainer$"+ui,qr="__reactEvents$"+ui,Yr="__reactListeners$"+ui,bl="__reactHandles$"+ui,ro="__reactResources$"+ui,hr="__reactMarker$"+ui;function so(t){delete t[ln],delete t[En],delete t[qr],delete t[Yr],delete t[bl]}function Da(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ai]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[ln])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[ln]||t[Ai]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function La(t){var n=t[ro];return n||(n=t[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[hr]=!0}var Y=new Set,se={};function ne(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(se[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Oe={};function Ge(t){return Zt.call(Oe,t)?!0:Zt.call(Be,t)?!1:Ue.test(t)?Oe[t]=!0:(Be[t]=!0,!1)}function We(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function rt(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,o,c,h,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,S,tt(n)):a!=null?Tn(t,S,tt(a)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+tt(A):t.removeAttribute("name")}function $i(t,n,a,o,c,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){qt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),qt(t)}function Tn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function bn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function jr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Rn(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Rn(t,h,n[h])}function Ri(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return Fx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,Kr=null;function Fp(t){var n=Ua(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[En]||null;if(!c)throw Error(r(90));Mn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var Ac=!1;function zp(t,n,a){if(Ac)return t(n,a);Ac=!0;try{var o=t(n);return o}finally{if(Ac=!1,(Zr!==null||Kr!==null)&&(du(),Zr&&(n=Zr,t=Kr,Kr=Zr=null,Fp(n),t)))for(n=0;n<t.length;n++)Fp(t[n])}}function oo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(ta)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Rc=!1}var Na=null,Cc=null,Rl=null;function Bp(){if(Rl)return Rl;var t,n=Cc,a=n.length,o,c="value"in Na?Na.value:Na.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[h-o];o++);return Rl=c.slice(t,1<o?1-o:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Hp(){return!1}function Vn(t){function n(a,o,c,h,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?wl:Hp,this.isPropagationStopped=Hp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Vn(pr),uo=_({},pr,{view:0,detail:0}),zx=Vn(uo),wc,Dc,co,Ul=_({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(wc=t.screenX-co.screenX,Dc=t.screenY-co.screenY):Dc=wc=0,co=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Gp=Vn(Ul),Bx=_({},Ul,{dataTransfer:0}),Hx=Vn(Bx),Gx=_({},uo,{relatedTarget:0}),Uc=Vn(Gx),Vx=_({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Vn(Vx),Xx=_({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=Vn(Xx),qx=_({},pr,{data:0}),Vp=Vn(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zx[t])?!!n[t]:!1}function Lc(){return Kx}var Qx=_({},uo,{key:function(t){if(t.key){var n=Yx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Vn(Qx),$x=_({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Vn($x),eS=_({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),tS=Vn(eS),nS=_({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=Vn(nS),aS=_({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Vn(aS),sS=_({},pr,{newState:0,oldState:0}),oS=Vn(sS),lS=[9,13,27,32],Nc=ta&&"CompositionEvent"in window,fo=null;ta&&"documentMode"in document&&(fo=document.documentMode);var uS=ta&&"TextEvent"in window&&!fo,Xp=ta&&(!Nc||fo&&8<fo&&11>=fo),Wp=" ",qp=!1;function Yp(t,n){switch(t){case"keyup":return lS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function cS(t,n){switch(t){case"compositionend":return jp(n);case"keypress":return n.which!==32?null:(qp=!0,Wp);case"textInput":return t=n.data,t===Wp&&qp?null:t;default:return null}}function fS(t,n){if(Qr)return t==="compositionend"||!Nc&&Yp(t,n)?(t=Bp(),Rl=Cc=Na=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xp&&n.locale!=="ko"?null:n.data;default:return null}}var hS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hS[t.type]:n==="textarea"}function Kp(t,n,a,o){Zr?Kr?Kr.push(o):Kr=[o]:Zr=o,n=Su(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ho=null,po=null;function dS(t){Lg(t,0)}function Ll(t){var n=dr(t);if(Pt(n))return t}function Qp(t,n){if(t==="change")return n}var Jp=!1;if(ta){var Oc;if(ta){var Pc="oninput"in document;if(!Pc){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Pc=typeof $p.oninput=="function"}Oc=Pc}else Oc=!1;Jp=Oc&&(!document.documentMode||9<document.documentMode)}function em(){ho&&(ho.detachEvent("onpropertychange",tm),po=ho=null)}function tm(t){if(t.propertyName==="value"&&Ll(po)){var n=[];Kp(n,po,t,bc(t)),zp(dS,n)}}function pS(t,n,a){t==="focusin"?(em(),ho=n,po=a,ho.attachEvent("onpropertychange",tm)):t==="focusout"&&em()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(po)}function _S(t,n){if(t==="click")return Ll(n)}function gS(t,n){if(t==="input"||t==="change")return Ll(n)}function vS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:vS;function mo(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Zt.call(n,c)||!Jn(t[c],n[c]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,n){var a=nm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nm(a)}}function am(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?am(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Ic(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xS=ta&&"documentMode"in document&&11>=document.documentMode,Jr=null,Fc=null,_o=null,zc=!1;function sm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zc||Jr==null||Jr!==Qe(o)||(o=Jr,"selectionStart"in o&&Ic(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&mo(_o,o)||(_o=o,o=Su(Fc,"onSelect"),0<o.length&&(n=new Dl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Jr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $r={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Bc={},om={};ta&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function _r(t){if(Bc[t])return Bc[t];if(!$r[t])return t;var n=$r[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in om)return Bc[t]=n[a];return t}var lm=_r("animationend"),um=_r("animationiteration"),cm=_r("animationstart"),SS=_r("transitionrun"),yS=_r("transitionstart"),ES=_r("transitioncancel"),fm=_r("transitionend"),hm=new Map,Hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hc.push("scrollEnd");function Ci(t,n){hm.set(t,n),ne(n,[t])}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],es=0,Gc=0;function Ol(){for(var t=es,n=Gc=es=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var c=fi[n];fi[n++]=null;var h=fi[n];if(fi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&dm(a,c,h)}}function Pl(t,n,a,o){fi[es++]=t,fi[es++]=n,fi[es++]=a,fi[es++]=o,Gc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Vc(t,n,a,o){return Pl(t,n,a,o),Il(t)}function gr(t,n){return Pl(t,null,null,n),Il(t)}function dm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Ie(a),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function Il(t){if(50<zo)throw zo=0,Jf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ts={};function MS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new MS(t,n,a,o)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Fl(t,n,a,o,c,h){var S=0;if(o=t,typeof t=="function")kc(t)&&(S=1);else if(typeof t=="string")S=Cy(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=$n(31,a,n,c),t.elementType=C,t.lanes=h,t;case b:return vr(a.children,c,h,n);case y:S=8,c|=24;break;case v:return t=$n(12,a,n,c|2),t.elementType=v,t.lanes=h,t;case P:return t=$n(13,a,n,c),t.elementType=P,t.lanes=h,t;case z:return t=$n(19,a,n,c),t.elementType=z,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case w:S=9;break e;case O:S=11;break e;case I:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=$n(S,a,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function vr(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Xc(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function mm(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Wc(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _m=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=_m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},_m.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var ns=[],is=0,zl=null,go=0,di=[],pi=0,Oa=null,Hi=1,Gi="";function ia(t,n){ns[is++]=go,ns[is++]=zl,zl=t,go=n}function gm(t,n,a){di[pi++]=Hi,di[pi++]=Gi,di[pi++]=Oa,Oa=t;var o=Hi;t=Gi;var c=32-Ie(o)-1;o&=~(1<<c),a+=1;var h=32-Ie(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Hi=1<<32-Ie(n)+c|a<<c|o,Gi=h+t}else Hi=1<<h|a<<c|o,Gi=t}function qc(t){t.return!==null&&(ia(t,1),gm(t,1,0))}function Yc(t){for(;t===zl;)zl=ns[--is],ns[is]=null,go=ns[--is],ns[is]=null;for(;t===Oa;)Oa=di[--pi],di[pi]=null,Gi=di[--pi],di[pi]=null,Hi=di[--pi],di[pi]=null}function vm(t,n){di[pi++]=Hi,di[pi++]=Gi,di[pi++]=Oa,Hi=n.id,Gi=n.overflow,Oa=t}var Cn=null,Yt=null,Mt=!1,Pa=null,mi=!1,jc=Error(r(519));function Ia(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(hi(n,t)),jc}function xm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[En]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)vt(Ho[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),$i(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ig(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Ia(t,!0)}function Sm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function as(t){if(t!==Cn)return!1;if(!Mt)return Sm(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dh(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ia(t),Sm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Wg(t)}else n===27?(n=Yt,Ka(t.type)?(t=vh,vh=null,Yt=t):Yt=n):Yt=Cn?gi(t.stateNode.nextSibling):null;return!0}function xr(){Yt=Cn=null,Mt=!1}function Zc(){var t=Pa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Pa=null),t}function vo(t){Pa===null?Pa=[t]:Pa.push(t)}var Kc=N(null),Sr=null,aa=null;function Fa(t,n,a){le(Kc,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Kc.current,X(Kc)}function Qc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Jc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Qc(h.return,a,t),o||(S=null);break e}h=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Qc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function rs(t,n,a,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Jn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===fe.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}c=c.return}t!==null&&Jc(n,t,a,o),n.flags|=262144}function Bl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){Sr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return ym(Sr,t)}function Hl(t,n){return Sr===null&&yr(t),ym(t,n)}function ym(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var TS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},bS=s.unstable_scheduleCallback,AS=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new TS,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&bS(AS,function(){t.controller.abort()})}var So=null,ef=0,ss=0,os=null;function RS(t,n){if(So===null){var a=So=[];ef=0,ss=ah(),os={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ef++,n.then(Em,Em),n}function Em(){if(--ef===0&&So!==null){os!==null&&(os.status="fulfilled");var t=So;So=null,ss=0,os=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function CS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Mm=F.S;F.S=function(t,n){sg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&RS(t,n),Mm!==null&&Mm(t,n)};var Er=N(null);function tf(){var t=Er.current;return t!==null?t:Wt.pooledCache}function Gl(t,n){n===null?le(Er,Er.current):le(Er,n.pool)}function Tm(){var t=tf();return t===null?null:{parent:un._currentValue,pool:t}}var ls=Error(r(460)),nf=Error(r(474)),Vl=Error(r(542)),kl={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Am(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cm(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cm(t),t}throw Tr=n,ls}}function Mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,ls):a}}var Tr=null;function Rm(){if(Tr===null)throw Error(r(459));var t=Tr;return Tr=null,t}function Cm(t){if(t===ls||t===Vl)throw Error(r(483))}var us=null,yo=0;function Xl(t){var n=yo;return yo+=1,us===null&&(us=[]),Am(us,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wm(t){function n(j,V){if(t){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=na(j,V),j.index=0,j.sibling=null,j}function h(j,V,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,J,_e){return V===null||V.tag!==6?(V=Xc(J,j.mode,_e),V.return=j,V):(V=c(V,J),V.return=j,V)}function B(j,V,J,_e){var Je=J.type;return Je===b?he(j,V,J.props.children,_e,J.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Mr(Je)===V.type)?(V=c(V,J.props),Eo(V,J),V.return=j,V):(V=Fl(J.type,J.key,J.props,null,j.mode,_e),Eo(V,J),V.return=j,V)}function $(j,V,J,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Wc(J,j.mode,_e),V.return=j,V):(V=c(V,J.children||[]),V.return=j,V)}function he(j,V,J,_e,Je){return V===null||V.tag!==7?(V=vr(J,j.mode,_e,Je),V.return=j,V):(V=c(V,J),V.return=j,V)}function ge(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Xc(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return J=Fl(V.type,V.key,V.props,null,j.mode,J),Eo(J,V),J.return=j,J;case T:return V=Wc(V,j.mode,J),V.return=j,V;case Z:return V=Mr(V),ge(j,V,J)}if(ce(V)||re(V))return V=vr(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return ge(j,Xl(V),J);if(V.$$typeof===U)return ge(j,Hl(j,V),J);Wl(j,V)}return null}function ie(j,V,J,_e){var Je=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:A(j,V,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===Je?B(j,V,J,_e):null;case T:return J.key===Je?$(j,V,J,_e):null;case Z:return J=Mr(J),ie(j,V,J,_e)}if(ce(J)||re(J))return Je!==null?null:he(j,V,J,_e,null);if(typeof J.then=="function")return ie(j,V,Xl(J),_e);if(J.$$typeof===U)return ie(j,V,Hl(j,J),_e);Wl(j,J)}return null}function oe(j,V,J,_e,Je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get(J)||null,A(V,j,""+_e,Je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case E:return j=j.get(_e.key===null?J:_e.key)||null,B(V,j,_e,Je);case T:return j=j.get(_e.key===null?J:_e.key)||null,$(V,j,_e,Je);case Z:return _e=Mr(_e),oe(j,V,J,_e,Je)}if(ce(_e)||re(_e))return j=j.get(J)||null,he(V,j,_e,Je,null);if(typeof _e.then=="function")return oe(j,V,J,Xl(_e),Je);if(_e.$$typeof===U)return oe(j,V,J,Hl(V,_e),Je);Wl(V,_e)}return null}function Ve(j,V,J,_e){for(var Je=null,Rt=null,je=V,ht=V=0,Et=null;je!==null&&ht<J.length;ht++){je.index>ht?(Et=je,je=null):Et=je.sibling;var Ct=ie(j,je,J[ht],_e);if(Ct===null){je===null&&(je=Et);break}t&&je&&Ct.alternate===null&&n(j,je),V=h(Ct,V,ht),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct,je=Et}if(ht===J.length)return a(j,je),Mt&&ia(j,ht),Je;if(je===null){for(;ht<J.length;ht++)je=ge(j,J[ht],_e),je!==null&&(V=h(je,V,ht),Rt===null?Je=je:Rt.sibling=je,Rt=je);return Mt&&ia(j,ht),Je}for(je=o(je);ht<J.length;ht++)Et=oe(je,j,ht,J[ht],_e),Et!==null&&(t&&Et.alternate!==null&&je.delete(Et.key===null?ht:Et.key),V=h(Et,V,ht),Rt===null?Je=Et:Rt.sibling=Et,Rt=Et);return t&&je.forEach(function(tr){return n(j,tr)}),Mt&&ia(j,ht),Je}function nt(j,V,J,_e){if(J==null)throw Error(r(151));for(var Je=null,Rt=null,je=V,ht=V=0,Et=null,Ct=J.next();je!==null&&!Ct.done;ht++,Ct=J.next()){je.index>ht?(Et=je,je=null):Et=je.sibling;var tr=ie(j,je,Ct.value,_e);if(tr===null){je===null&&(je=Et);break}t&&je&&tr.alternate===null&&n(j,je),V=h(tr,V,ht),Rt===null?Je=tr:Rt.sibling=tr,Rt=tr,je=Et}if(Ct.done)return a(j,je),Mt&&ia(j,ht),Je;if(je===null){for(;!Ct.done;ht++,Ct=J.next())Ct=ge(j,Ct.value,_e),Ct!==null&&(V=h(Ct,V,ht),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return Mt&&ia(j,ht),Je}for(je=o(je);!Ct.done;ht++,Ct=J.next())Ct=oe(je,j,ht,Ct.value,_e),Ct!==null&&(t&&Ct.alternate!==null&&je.delete(Ct.key===null?ht:Ct.key),V=h(Ct,V,ht),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return t&&je.forEach(function(By){return n(j,By)}),Mt&&ia(j,ht),Je}function kt(j,V,J,_e){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var Je=J.key;V!==null;){if(V.key===Je){if(Je=J.type,Je===b){if(V.tag===7){a(j,V.sibling),_e=c(V,J.props.children),_e.return=j,j=_e;break e}}else if(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Mr(Je)===V.type){a(j,V.sibling),_e=c(V,J.props),Eo(_e,J),_e.return=j,j=_e;break e}a(j,V);break}else n(j,V);V=V.sibling}J.type===b?(_e=vr(J.props.children,j.mode,_e,J.key),_e.return=j,j=_e):(_e=Fl(J.type,J.key,J.props,null,j.mode,_e),Eo(_e,J),_e.return=j,j=_e)}return S(j);case T:e:{for(Je=J.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(j,V.sibling),_e=c(V,J.children||[]),_e.return=j,j=_e;break e}else{a(j,V);break}else n(j,V);V=V.sibling}_e=Wc(J,j.mode,_e),_e.return=j,j=_e}return S(j);case Z:return J=Mr(J),kt(j,V,J,_e)}if(ce(J))return Ve(j,V,J,_e);if(re(J)){if(Je=re(J),typeof Je!="function")throw Error(r(150));return J=Je.call(J),nt(j,V,J,_e)}if(typeof J.then=="function")return kt(j,V,Xl(J),_e);if(J.$$typeof===U)return kt(j,V,Hl(j,J),_e);Wl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(j,V.sibling),_e=c(V,J),_e.return=j,j=_e):(a(j,V),_e=Xc(J,j.mode,_e),_e.return=j,j=_e),S(j)):a(j,V)}return function(j,V,J,_e){try{yo=0;var Je=kt(j,V,J,_e);return us=null,Je}catch(je){if(je===ls||je===Vl)throw je;var Rt=$n(29,je,null,j.mode);return Rt.lanes=_e,Rt.return=j,Rt}}}var br=wm(!0),Dm=wm(!1),za=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Il(t),dm(t,null,a),n}return Pl(t,o,n,a),Il(t)}function Mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,no(t,a)}}function sf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var of=!1;function To(){if(of){var t=os;if(t!==null)throw t}}function bo(t,n,a,o){of=!1;var c=t.updateQueue;za=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,$=B.next;B.next=null,S===null?h=$:S.next=$,S=B;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==S&&(A===null?he.firstBaseUpdate=$:A.next=$,he.lastBaseUpdate=B))}if(h!==null){var ge=c.baseState;S=0,he=$=B=null,A=h;do{var ie=A.lane&-536870913,oe=ie!==A.lane;if(oe?(yt&ie)===ie:(o&ie)===ie){ie!==0&&ie===ss&&(of=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,nt=A;ie=n;var kt=a;switch(nt.tag){case 1:if(Ve=nt.payload,typeof Ve=="function"){ge=Ve.call(kt,ge,ie);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=nt.payload,ie=typeof Ve=="function"?Ve.call(kt,ge,ie):Ve,ie==null)break e;ge=_({},ge,ie);break e;case 2:za=!0}}ie=A.callback,ie!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?($=he=oe,B=ge):he=he.next=oe,S|=ie;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);he===null&&(B=ge),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=he,h===null&&(c.shared.lanes=0),Wa|=S,t.lanes=S,t.memoizedState=ge}}function Um(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Um(a[t],n)}var cs=N(null),ql=N(0);function Nm(t,n){t=pa,le(ql,t),le(cs,n),pa=t|n.baseLanes}function lf(){le(ql,pa),le(cs,cs.current)}function uf(){pa=ql.current,X(cs),X(ql)}var ei=N(null),_i=null;function Ga(t){var n=t.alternate;le(rn,rn.current&1),le(ei,t),_i===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(_i=t)}function cf(t){le(rn,rn.current),le(ei,t),_i===null&&(_i=t)}function Om(t){t.tag===22?(le(rn,rn.current),le(ei,t),_i===null&&(_i=t)):Va()}function Va(){le(rn,rn.current),le(ei,ei.current)}function ti(t){X(ei),_i===t&&(_i=null),X(rn)}var rn=N(0);function Yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_h(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ct=null,Gt=null,cn=null,jl=!1,fs=!1,Ar=!1,Zl=0,Ao=0,hs=null,wS=0;function nn(){throw Error(r(321))}function ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function hf(t,n,a,o,c,h){return sa=h,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?g_:Rf,Ar=!1,h=a(o,c),Ar=!1,fs&&(h=Im(n,a,o,c)),Pm(t),h}function Pm(t){F.H=wo;var n=Gt!==null&&Gt.next!==null;if(sa=0,cn=Gt=ct=null,jl=!1,Ao=0,hs=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Bl(t)&&(fn=!0))}function Im(t,n,a,o){ct=t;var c=0;do{if(fs&&(hs=null),Ao=0,fs=!1,25<=c)throw Error(r(301));if(c+=1,cn=Gt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=v_,h=n(a,o)}while(fs);return h}function DS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function df(){var t=Zl!==0;return Zl=0,t}function pf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function mf(t){if(jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jl=!1}sa=0,cn=Gt=ct=null,fs=!1,Ao=Zl=0,hs=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ct.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?ct.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ct.memoizedState=cn=t:cn=cn.next=t}return cn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,hs===null&&(hs=[]),t=Am(hs,t,n),n=ct,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?g_:Rf),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===U)return wn(t)}throw Error(r(438,String(t)))}function _f(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function Jl(t){var n=sn();return gf(n,Gt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var A=S=null,B=null,$=n,he=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(yt&ge)===ge:(sa&ge)===ge){var ie=$.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===ss&&(he=!0);else if((sa&ie)===ie){$=$.next,ie===ss&&(he=!0);continue}else ge={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ge,S=h):B=B.next=ge,ct.lanes|=ie,Wa|=ie;ge=$.action,Ar&&a(h,ge),h=$.hasEagerState?$.eagerState:a(h,ge)}else ie={lane:ge,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ie,S=h):B=B.next=ie,ct.lanes|=ge,Wa|=ge;$=$.next}while($!==null&&$!==n);if(B===null?S=h:B.next=A,!Jn(h,t.memoizedState)&&(fn=!0,he&&(a=os,a!==null)))throw a;t.memoizedState=h,t.baseState=S,t.baseQueue=B,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vf(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=t(h,S.action),S=S.next;while(S!==c);Jn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Fm(t,n,a){var o=ct,c=sn(),h=Mt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Jn((Gt||c).memoizedState,a);if(S&&(c.memoizedState=a,fn=!0),c=c.queue,yf(Hm.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},Bm.bind(null,o,c,a,n),null),Wt===null)throw Error(r(349));h||(sa&127)!==0||zm(o,n,a)}return a}function zm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Kl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Bm(t,n,a,o){n.value=a,n.getSnapshot=o,Gm(n)&&Vm(t)}function Hm(t,n,a){return a(function(){Gm(n)&&Vm(t)})}function Gm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function Vm(t){var n=gr(t,2);n!==null&&Yn(n,t,2)}function xf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Ar){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function km(t,n,a,o){return t.baseState=a,gf(t,Gt,typeof o=="function"?o:oa)}function US(t,n,a,o,c){if(tu(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Xm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Xm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var A=a(c,o),B=F.S;B!==null&&B(S,A),Wm(t,n,A)}catch($){Sf(t,n,$)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=a(c,o),Wm(t,n,h)}catch($){Sf(t,n,$)}}function Wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){qm(t,n,o)},function(o){return Sf(t,n,o)}):qm(t,n,a)}function qm(t,n,a){n.status="fulfilled",n.value=a,Ym(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Xm(t,a)))}function Sf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ym(n),n=n.next;while(n!==o)}t.action=null}function Ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jm(t,n){return n}function Zm(t,n){if(Mt){var a=Wt.formState;if(a!==null){e:{var o=ct;if(Mt){if(Yt){t:{for(var c=Yt,h=mi;c.nodeType!==8;){if(!h){c=null;break t}if(c=gi(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Yt=gi(c.nextSibling),o=c.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:n},a.queue=o,a=p_.bind(null,ct,o),o.dispatch=a,o=xf(!1),h=Af.bind(null,ct,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=US.bind(null,ct,c,h,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Km(t){var n=sn();return Qm(n,Gt,t)}function Qm(t,n,a){if(n=gf(t,n,jm)[0],t=Jl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(S){throw S===ls?Vl:S}else o=n;n=sn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,ds(9,{destroy:void 0},LS.bind(null,c,a),null)),[o,h,t]}function LS(t,n){t.action=n}function Jm(t){var n=sn(),a=Gt;if(a!==null)return Qm(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ds(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Kl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function $m(){return sn().memoizedState}function $l(t,n,a,o){var c=Bn();ct.flags|=t,c.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function eu(t,n,a,o){var c=sn();o=o===void 0?null:o;var h=c.memoizedState.inst;Gt!==null&&o!==null&&ff(o,Gt.memoizedState.deps)?c.memoizedState=ds(n,h,a,o):(ct.flags|=t,c.memoizedState=ds(1|n,h,a,o))}function e_(t,n){$l(8390656,8,t,n)}function yf(t,n){eu(2048,8,t,n)}function NS(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Kl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function t_(t){var n=sn().memoizedState;return NS({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function n_(t,n){return eu(4,2,t,n)}function i_(t,n){return eu(4,4,t,n)}function a_(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function r_(t,n,a){a=a!=null?a.concat([t]):null,eu(4,4,a_.bind(null,n,t),a)}function Ef(){}function s_(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ff(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function o_(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ff(n,o[1]))return o[0];if(o=t(),Ar){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||(sa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),ct.lanes|=t,Wa|=t,a)}function l_(t,n,a,o){return Jn(a,n)?a:cs.current!==null?(t=Mf(t,a,o),Jn(t,n)||(fn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(yt&261930)===0?(fn=!0,t.memoizedState=a):(t=lg(),ct.lanes|=t,Wa|=t,n)}function u_(t,n,a,o,c){var h=H.p;H.p=h!==0&&8>h?h:8;var S=F.T,A={};F.T=A,Af(t,!1,n,a);try{var B=c(),$=F.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=CS(B,o);Co(t,n,he,ai(t))}else Co(t,n,o,ai(t))}catch(ge){Co(t,n,{then:function(){},status:"rejected",reason:ge},ai())}finally{H.p=h,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function OS(){}function Tf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=c_(t).queue;u_(t,c,n,te,a===null?OS:function(){return f_(t),a(o)})}function c_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function f_(t){var n=c_(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},ai())}function bf(){return wn(Wo)}function h_(){return sn().memoizedState}function d_(){return sn().memoizedState}function PS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Ba(a);var o=Ha(n,t,a);o!==null&&(Yn(o,n,a),Mo(o,n,a)),n={cache:$c()},t.payload=n;return}n=n.return}}function IS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},tu(t)?m_(n,a):(a=Vc(t,n,a,o),a!==null&&(Yn(a,t,o),__(a,n,o)))}function p_(t,n,a){var o=ai();Co(t,n,a,o)}function Co(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(tu(t))m_(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(c.hasEagerState=!0,c.eagerState=A,Jn(A,S))return Pl(t,n,c,0),Wt===null&&Ol(),!1}catch{}if(a=Vc(t,n,c,o),a!==null)return Yn(a,t,o),__(a,n,o),!0}return!1}function Af(t,n,a,o){if(o={lane:2,revertLane:ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},tu(t)){if(n)throw Error(r(479))}else n=Vc(t,a,o,2),n!==null&&Yn(n,t,2)}function tu(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function m_(t,n){fs=jl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function __(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,no(t,a)}}var wo={readContext:wn,use:Ql,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};wo.useEffectEvent=nn;var g_={readContext:wn,use:Ql,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:e_,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,$l(4194308,4,a_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return $l(4194308,4,t,n)},useInsertionEffect:function(t,n){$l(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(Ar){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(Ar){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=IS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=p_.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(t,n){var a=Bn();return Mf(a,t,n)},useTransition:function(){var t=xf(!1);return t=u_.bind(null,ct,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,c=Bn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(yt&127)!==0||zm(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,e_(Hm.bind(null,o,h,t),[t]),o.flags|=2048,ds(9,{destroy:void 0},Bm.bind(null,o,h,a,n),null),a},useId:function(){var t=Bn(),n=Wt.identifierPrefix;if(Mt){var a=Gi,o=Hi;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Af.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:_f,useCacheRefresh:function(){return Bn().memoizedState=PS.bind(null,ct)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Rf={readContext:wn,use:Ql,useCallback:s_,useContext:wn,useEffect:yf,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Jl,useRef:$m,useState:function(){return Jl(oa)},useDebugValue:Ef,useDeferredValue:function(t,n){var a=sn();return l_(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Jl(oa)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Fm,useId:h_,useHostTransitionStatus:bf,useFormState:Km,useActionState:Km,useOptimistic:function(t,n){var a=sn();return km(a,Gt,t,n)},useMemoCache:_f,useCacheRefresh:d_};Rf.useEffectEvent=t_;var v_={readContext:wn,use:Ql,useCallback:s_,useContext:wn,useEffect:yf,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:vf,useRef:$m,useState:function(){return vf(oa)},useDebugValue:Ef,useDeferredValue:function(t,n){var a=sn();return Gt===null?Mf(a,t,n):l_(a,Gt.memoizedState,t,n)},useTransition:function(){var t=vf(oa)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Fm,useId:h_,useHostTransitionStatus:bf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var a=sn();return Gt!==null?km(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:d_};v_.useEffectEvent=t_;function Cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),c=Ba(o);c.payload=n,a!=null&&(c.callback=a),n=Ha(t,c,o),n!==null&&(Yn(n,t,o),Mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),c=Ba(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ha(t,c,o),n!==null&&(Yn(n,t,o),Mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(Yn(n,t,a),Mo(n,t,a))}};function x_(t,n,a,o,c,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!mo(a,o)||!mo(c,h):!0}function S_(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function y_(t){Nl(t)}function E_(t){console.error(t)}function M_(t){Nl(t)}function nu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function T_(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Df(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){nu(t,n)},a}function b_(t){return t=Ba(t),t.tag=3,t}function A_(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){T_(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){T_(n,a,o),typeof c!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function FS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rs(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?pu():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(t,o,c)),!1;case 22:return a.flags|=65536,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(t,o,c)),!1}throw Error(r(435,a.tag))}return th(t,o,c),pu(),!1}if(Mt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==jc&&(t=Error(r(422),{cause:o}),vo(hi(t,a)))):(o!==jc&&(n=Error(r(423),{cause:o}),vo(hi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=hi(o,a),c=Df(t.stateNode,o,c),sf(t,c),an!==4&&(an=2)),!1;var h=Error(r(520),{cause:o});if(h=hi(h,a),Fo===null?Fo=[h]:Fo.push(h),an!==4&&(an=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Df(a.stateNode,o,t),sf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qa===null||!qa.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=b_(c),A_(c,t,a,o),sf(a,c),!1}a=a.return}while(a!==null);return!1}var Uf=Error(r(461)),fn=!1;function Dn(t,n,a,o){n.child=t===null?Dm(n,null,a,o):br(n,t.child,a,o)}function R_(t,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return yr(n),o=hf(t,n,a,S,h,c),A=df(),t!==null&&!fn?(pf(t,n,c),la(t,n,c)):(Mt&&A&&qc(n),n.flags|=1,Dn(t,n,o,c),n.child)}function C_(t,n,a,o,c){if(t===null){var h=a.type;return typeof h=="function"&&!kc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,w_(t,n,h,o,c)):(t=Fl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Bf(t,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(S,o)&&t.ref===n.ref)return la(t,n,c)}return n.flags|=1,t=na(h,o),t.ref=n.ref,t.return=n,n.child=t}function w_(t,n,a,o,c){if(t!==null){var h=t.memoizedProps;if(mo(h,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Bf(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,la(t,n,c)}return Lf(t,n,a,o,c)}function D_(t,n,a,o){var c=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return U_(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,h!==null?h.cachePool:null),h!==null?Nm(n,h):lf(),Om(n);else return o=n.lanes=536870912,U_(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Gl(n,h.cachePool),Nm(n,h),Va(),n.memoizedState=null):(t!==null&&Gl(n,null),lf(),Va());return Dn(t,n,c,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function U_(t,n,a,o,c){var h=tf();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Gl(n,null),lf(),Om(n),t!==null&&rs(t,n,o,!0),n.childLanes=c,null}function iu(t,n){return n=ru({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function L_(t,n,a){return br(n,t.child,null,a),t=iu(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function zS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=iu(n,o),n.lanes=536870912,Do(null,t);if(cf(n),(t=Yt)?(t=Xg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=mm(t),a.return=n,n.child=a,Cn=n,Yt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return iu(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(cf(n),c)if(n.flags&256)n.flags&=-257,n=L_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||rs(t,n,a,!1),c=(a&t.childLanes)!==0,fn||c){if(o=Wt,o!==null&&(S=Xr(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,gr(t,S),Yn(o,t,S),Uf;pu(),n=L_(t,n,a)}else t=h.treeContext,Yt=gi(S.nextSibling),Cn=n,Mt=!0,Pa=null,mi=!1,t!==null&&vm(n,t),n=iu(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function au(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Lf(t,n,a,o,c){return yr(n),a=hf(t,n,a,o,void 0,c),o=df(),t!==null&&!fn?(pf(t,n,c),la(t,n,c)):(Mt&&o&&qc(n),n.flags|=1,Dn(t,n,a,c),n.child)}function N_(t,n,a,o,c,h){return yr(n),n.updateQueue=null,a=Im(n,o,a,c),Pm(t),o=df(),t!==null&&!fn?(pf(t,n,h),la(t,n,h)):(Mt&&o&&qc(n),n.flags|=1,Dn(t,n,a,h),n.child)}function O_(t,n,a,o,c){if(yr(n),n.stateNode===null){var h=ts,S=a.contextType;typeof S=="object"&&S!==null&&(h=wn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},af(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?wn(S):ts,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Cf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&wf.enqueueReplaceState(h,h.state,null),bo(n,o,h,c),To(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var A=n.memoizedProps,B=Rr(a,A);h.props=B;var $=h.context,he=a.contextType;S=ts,typeof he=="object"&&he!==null&&(S=wn(he));var ge=a.getDerivedStateFromProps;he=typeof ge=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==S)&&S_(n,h,o,S),za=!1;var ie=n.memoizedState;h.state=ie,bo(n,o,h,c),To(),$=n.memoizedState,A||ie!==$||za?(typeof ge=="function"&&(Cf(n,a,ge,o),$=n.memoizedState),(B=za||x_(n,a,B,o,ie,$,S))?(he||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=S,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,rf(t,n),S=n.memoizedProps,he=Rr(a,S),h.props=he,ge=n.pendingProps,ie=h.context,$=a.contextType,B=ts,typeof $=="object"&&$!==null&&(B=wn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==ge||ie!==B)&&S_(n,h,o,B),za=!1,ie=n.memoizedState,h.state=ie,bo(n,o,h,c),To();var oe=n.memoizedState;S!==ge||ie!==oe||za||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof A=="function"&&(Cf(n,a,A,o),oe=n.memoizedState),(he=za||x_(n,a,he,o,ie,oe,B)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,oe,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,oe,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),h.props=o,h.state=oe,h.context=B,o=he):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,au(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,c),n.child=br(n,null,a,c)):Dn(t,n,a,c),n.memoizedState=h.state,t=n.child):t=la(t,n,c),t}function P_(t,n,a,o){return xr(),n.flags|=256,Dn(t,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(t){return{baseLanes:t,cachePool:Tm()}}function Pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function I_(t,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(c?Ga(n):Va(),(t=Yt)?(t=Xg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=mm(t),a.return=n,n.child=a,Cn=n,Yt=null)):t=null,t===null)throw Ia(n);return gh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Va(),c=n.mode,A=ru({mode:"hidden",children:A},c),o=vr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(t,S,a),n.memoizedState=Nf,Do(null,o)):(Ga(n),If(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(h)n.flags&256?(Ga(n),n.flags&=-257,n=Ff(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),A=o.fallback,c=n.mode,o=ru({mode:"visible",children:o.children},c),A=vr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(t,S,a),n.memoizedState=Nf,n=Do(null,o));else if(Ga(n),gh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,vo({value:o,source:null,stack:null}),n=Ff(t,n,a)}else if(fn||rs(t,n,a,!1),S=(a&t.childLanes)!==0,fn||S){if(S=Wt,S!==null&&(o=Xr(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,gr(t,o),Yn(S,t,o),Uf;_h(A)||pu(),n=Ff(t,n,a)}else _h(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Yt=gi(A.nextSibling),Cn=n,Mt=!0,Pa=null,mi=!1,t!==null&&vm(n,t),n=If(n,o.children),n.flags|=4096);return n}return c?(Va(),A=o.fallback,c=n.mode,B=t.child,$=B.sibling,o=na(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=na($,A):(A=vr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Do(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Of(a):(c=A.cachePool,c!==null?(B=un._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Tm(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Pf(t,S,a),n.memoizedState=Nf,Do(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function If(t,n){return n=ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ru(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Ff(t,n,a){return br(n,t.child,null,a),t=If(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function F_(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Qc(t.return,n,a)}function zf(t,n,a,o,c,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function z_(t,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,le(rn,S),Dn(t,n,o,a),o=Mt?go:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&F_(t,a,n);else if(t.tag===19)F_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Yl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),zf(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}zf(n,!0,a,null,h,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(rs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function BS(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Fa(n,un,t.memoizedState.cache),xr();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?I_(t,n,a):(Ga(n),t=la(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return z_(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),le(rn,rn.current),o)break;return null;case 22:return n.lanes=0,D_(t,n,a,n.pendingProps);case 24:Fa(n,un,t.memoizedState.cache)}return la(t,n,a)}function B_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Bf(t,a)&&(n.flags&128)===0)return fn=!1,BS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Mt&&(n.flags&1048576)!==0&&gm(n,go,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Mr(n.elementType),n.type=t,typeof t=="function")kc(t)?(o=Rr(t,o),n.tag=1,n=O_(null,n,t,o,a)):(n.tag=0,n=Lf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=R_(null,n,t,o,a);break e}else if(c===I){n.tag=14,n=C_(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Rr(o,n.pendingProps),O_(t,n,o,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,rf(t,n),bo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Fa(n,un,o),o!==h.cache&&Jc(n,[un],a,!0),To(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=P_(t,n,o,a);break e}else if(o!==c){c=hi(Error(r(424)),n),vo(c),n=P_(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=gi(t.firstChild),Cn=n,Mt=!0,Pa=null,mi=!0,a=Dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xr(),o===c){n=la(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return au(t,n),t===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=yu(ee.current).createElement(a),o[ln]=n,o[En]=t,Un(o,a,t),R(o),n.stateNode=o):n.memoizedState=Kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Mt&&(o=n.stateNode=Yg(n.type,n.pendingProps,ee.current),Cn=n,mi=!0,c=Yt,Ka(n.type)?(vh=c,Yt=gi(o.firstChild)):Yt=c),Dn(t,n,n.pendingProps.children,a),au(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((c=o=Yt)&&(o=my(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Cn=n,Yt=gi(o.firstChild),mi=!1,c=!0):c=!1),c||Ia(n)),He(n),c=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,dh(c,h)?o=null:S!==null&&dh(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=hf(t,n,DS,null,null,a),Wo._currentValue=c),au(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Yt)&&(a=_y(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Cn=n,Yt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return I_(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return R_(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,yr(n),c=wn(c),o=o(c),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return C_(t,n,n.type,n.pendingProps,a);case 15:return w_(t,n,n.type,n.pendingProps,a);case 19:return z_(t,n,a);case 31:return zS(t,n,a);case 22:return D_(t,n,a,n.pendingProps);case 24:return yr(n),o=wn(un),t===null?(c=tf(),c===null&&(c=Wt,h=$c(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},af(n),Fa(n,un,c)):((t.lanes&a)!==0&&(rf(t,n),bo(n,null,null,a),To()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Fa(n,un,o)):(o=h.cache,Fa(n,un,o),o!==c.cache&&Jc(n,[un],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function Hf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw Tr=kl,nf}else t.flags&=-16777217}function H_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t0(n))if(hg())t.flags|=8192;else throw Tr=kl,nf}function su(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,gs|=n)}function Uo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function HS(t,n,a){var o=n.pendingProps;switch(Yc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(un),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(as(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zc())),jt(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(ua(n),h!==null?(jt(n),H_(n,h)):(jt(n),Hf(n,c,null,o,a))):h?h!==t.memoizedState?(ua(n),jt(n),H_(n,h)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),jt(n),Hf(n,c,t,o,a)),null;case 27:if(mt(n),a=ee.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=Te.current,as(n)?xm(n):(t=Yg(c,o,a),n.stateNode=t,ua(n))}return jt(n),null;case 5:if(mt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(h=Te.current,as(n))xm(n);else{var S=yu(ee.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[ln]=n,h[En]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(Un(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return jt(n),Hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,as(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ig(t.nodeValue,a)),t||Ia(n,!0)}else t=yu(t).createTextNode(o),t[ln]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=as(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=as(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),su(n,n.updateQueue),jt(n),null);case 4:return ke(),t===null&&lh(n.stateNode.containerInfo),jt(n),null;case 10:return ra(n.type),jt(n),null;case 19:if(X(rn),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)Uo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Yl(t),h!==null){for(n.flags|=128,Uo(o,!1),t=h.updateQueue,n.updateQueue=t,su(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pm(a,t),a=a.sibling;return le(rn,rn.current&1|2),Mt&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&M()>fu&&(n.flags|=128,c=!0,Uo(o,!1),n.lanes=4194304)}else{if(!c)if(t=Yl(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,su(n,t),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Mt)return jt(n),null}else 2*M()-o.renderingStartTime>fu&&a!==536870912&&(n.flags|=128,c=!0,Uo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=M(),t.sibling=null,a=rn.current,le(rn,c?a&1|2:a&1),Mt&&ia(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ti(n),uf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&su(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&X(Er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(un),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function GS(t,n){switch(Yc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(un),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(rn),null;case 4:return ke(),null;case 10:return ra(n.type),null;case 22:case 23:return ti(n),uf(),t!==null&&X(Er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(un),null;case 25:return null;default:return null}}function G_(t,n){switch(Yc(n),n.tag){case 3:ra(un),ke();break;case 26:case 27:case 5:mt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:X(rn);break;case 10:ra(n.type);break;case 22:case 23:ti(n),uf(),t!==null&&X(Er);break;case 24:ra(un)}}function Lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Bt(n,n.return,A)}}function ka(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var B=a,$=A;try{$()}catch(he){Bt(c,B,he)}}}o=o.next}while(o!==h)}}catch(he){Bt(n,n.return,he)}}function V_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lm(n,a)}catch(o){Bt(t,t.return,o)}}}function k_(t,n,a){a.props=Rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function No(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Bt(t,n,c)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(t,n,c)}else a.current=null}function X_(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(t,t.return,c)}}function Gf(t,n,a){try{var o=t.stateNode;uy(o,t.type,a,n),o[En]=n}catch(c){Bt(t,t.return,c)}}function W_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(kf(t,n,a),t=t.sibling;t!==null;)kf(t,n,a),t=t.sibling}function ou(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ou(t,n,a),t=t.sibling;t!==null;)ou(t,n,a),t=t.sibling}function q_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Un(n,o,a),n[ln]=t,n[En]=a}catch(h){Bt(t,t.return,h)}}var ca=!1,hn=!1,Xf=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function VS(t,n){if(t=t.containerInfo,fh=Cu,t=rm(t),Ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var S=0,A=-1,B=-1,$=0,he=0,ge=t,ie=null;t:for(;;){for(var oe;ge!==a||c!==0&&ge.nodeType!==3||(A=S+c),ge!==h||o!==0&&ge.nodeType!==3||(B=S+o),ge.nodeType===3&&(S+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)ie=ge,ge=oe;for(;;){if(ge===t)break t;if(ie===a&&++$===c&&(A=S),ie===h&&++he===o&&(B=S),(oe=ge.nextSibling)!==null)break;ge=ie,ie=ge.parentNode}ge=oe}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:t,selectionRange:a},Cu=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ve=Rr(a.type,c);t=o.getSnapshotBeforeUpdate(Ve,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function j_(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Lo(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var c=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&V_(a),o&512&&No(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lm(t,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&q_(a);case 26:case 5:ha(t,a),n===null&&o&4&&X_(a),o&512&&No(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&Q_(t,a);break;case 13:ha(t,a),o&4&&J_(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=QS.bind(null,a),gy(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||hn,c=ca;var h=hn;ca=o,(hn=n)&&!h?da(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),ca=c,hn=h}break;case 30:break;default:ha(t,a)}}function Z_(t){var n=t.alternate;n!==null&&(t.alternate=null,Z_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&so(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,kn=!1;function fa(t,n,a){for(a=a.child;a!==null;)K_(t,n,a),a=a.sibling}function K_(t,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:hn||Vi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Vi(a,n);var o=Qt,c=kn;Ka(a.type)&&(Qt=a.stateNode,kn=!1),fa(t,n,a),Vo(a.stateNode),Qt=o,kn=c;break;case 5:hn||Vi(a,n);case 6:if(o=Qt,c=kn,Qt=null,fa(t,n,a),Qt=o,kn=c,Qt!==null)if(kn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(h){Bt(a,n,h)}else try{Qt.removeChild(a.stateNode)}catch(h){Bt(a,n,h)}break;case 18:Qt!==null&&(kn?(t=Qt,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):Vg(Qt,a.stateNode));break;case 4:o=Qt,c=kn,Qt=a.stateNode.containerInfo,kn=!0,fa(t,n,a),Qt=o,kn=c;break;case 0:case 11:case 14:case 15:ka(2,a,n),hn||ka(4,a,n),fa(t,n,a);break;case 1:hn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&k_(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,fa(t,n,a),hn=o;break;default:fa(t,n,a)}}function Q_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){Bt(n,n.return,a)}}}function J_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){Bt(n,n.return,a)}}function kS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Y_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Y_),n;default:throw Error(r(435,t.tag))}}function lu(t,n){var a=kS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=JS.bind(null,t,o);o.then(c,c)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ka(A.type)){Qt=A.stateNode,kn=!1;break e}break;case 5:Qt=A.stateNode,kn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,kn=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));K_(h,S,c),Qt=null,kn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$_(n,t),n=n.sibling}var wi=null;function $_(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(ka(3,t,t.return),Lo(3,t),ka(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(hn||a===null||Vi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=wi;if(Xn(n,t),Wn(t),o&512&&(hn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[hr]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Un(h,o,a),h[ln]=t,R(h),o=h;break e;case"link":var S=$g("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}h=c.createElement(o),Un(h,o,a),c.head.appendChild(h);break;case"meta":if(S=$g("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}h=c.createElement(o),Un(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[ln]=t,R(h),o=h}t.stateNode=o}else e0(c,t.type,t.stateNode);else t.stateNode=Jg(c,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?e0(c,t.type,t.stateNode):Jg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(hn||a===null||Vi(a,a.return)),a!==null&&o&4&&Gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(hn||a===null||Vi(a,a.return)),t.flags&32){c=t.stateNode;try{pn(c,"")}catch(Ve){Bt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Gf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Xf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(Tu=null,c=wi,wi=Eu(n.containerInfo),Xn(n,t),wi=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}Xf&&(Xf=!1,eg(t));break;case 4:o=wi,wi=Eu(t.stateNode.containerInfo),Xn(n,t),Wn(t),wi=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lu(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cu=M()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lu(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ca,he=hn;if(ca=$||c,hn=he||B,Xn(n,t),hn=he,ca=$,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ca||hn||Cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,c)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var ge=B.memoizedProps.style,ie=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ve){Bt(B,B.return,Ve)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ve){Bt(B,B.return,Ve)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;c?kg(oe,!0):kg(B.stateNode,!1)}catch(Ve){Bt(B,B.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,lu(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lu(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(W_(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=Vf(t);ou(t,h,c);break;case 5:var S=a.stateNode;a.flags&32&&(pn(S,""),a.flags&=-33);var A=Vf(t);ou(t,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,$=Vf(t);kf(t,$,B);break;default:throw Error(r(161))}}catch(he){Bt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j_(t,n.alternate,n),n=n.sibling}function Cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Cr(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&k_(n,n.return,a),Cr(n);break;case 27:Vo(n.stateNode);case 26:case 5:Vi(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:da(c,h,a),Lo(4,h);break;case 1:if(da(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Bt(o,o.return,$)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Um(B[c],A)}catch($){Bt(o,o.return,$)}}a&&S&64&&V_(h),No(h,h.return);break;case 27:q_(h);case 26:case 5:da(c,h,a),a&&o===null&&S&4&&X_(h),No(h,h.return);break;case 12:da(c,h,a);break;case 31:da(c,h,a),a&&S&4&&Q_(c,h);break;case 13:da(c,h,a),a&&S&4&&J_(c,h);break;case 22:h.memoizedState===null&&da(c,h,a),No(h,h.return);break;case 30:break;default:da(c,h,a)}n=n.sibling}}function Wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(t,n,a,o),n=n.sibling}function tg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),c&2048&&Lo(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(c&2048){Di(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Di(t,n,a,o):Oo(t,n):h._visibility&2?Di(t,n,a,o):(h._visibility|=2,ps(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Wf(S,n);break;case 24:Di(t,n,a,o),c&2048&&qf(n.alternate,n);break;default:Di(t,n,a,o)}}function ps(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,A=a,B=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:ps(h,S,A,B,c),Lo(8,S);break;case 23:break;case 22:var he=S.stateNode;S.memoizedState!==null?he._visibility&2?ps(h,S,A,B,c):Oo(h,S):(he._visibility|=2,ps(h,S,A,B,c)),c&&$&2048&&Wf(S.alternate,S);break;case 24:ps(h,S,A,B,c),c&&$&2048&&qf(S.alternate,S);break;default:ps(h,S,A,B,c)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Oo(a,o),c&2048&&Wf(o.alternate,o);break;case 24:Oo(a,o),c&2048&&qf(o.alternate,o);break;default:Oo(a,o)}n=n.sibling}}var Po=8192;function ms(t,n,a){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:ms(t,n,a),t.flags&Po&&t.memoizedState!==null&&wy(a,wi,t.memoizedState,t.memoizedProps);break;case 5:ms(t,n,a);break;case 3:case 4:var o=wi;wi=Eu(t.stateNode.containerInfo),ms(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,ms(t,n,a),Po=o):ms(t,n,a));break;default:ms(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,rg(o,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,uu(t)):Io(t);break;default:Io(t)}}function uu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,rg(o,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),uu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,uu(n));break;default:uu(n)}t=t.sibling}}function rg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var c=o.sibling,h=o.return;if(Z_(o),o===a){Sn=null;break e}if(c!==null){c.return=h,Sn=c;break e}Sn=h}}}var XS={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},WS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Wt=null,gt=null,yt=0,zt=0,ni=null,Xa=!1,_s=!1,Yf=!1,pa=0,an=0,Wa=0,wr=0,jf=0,ii=0,gs=0,Fo=null,qn=null,Zf=!1,cu=0,sg=0,fu=1/0,hu=null,qa=null,mn=0,Ya=null,vs=null,ma=0,Kf=0,Qf=null,og=null,zo=0,Jf=null;function ai(){return(Nt&2)!==0&&yt!==0?yt&-yt:F.T!==null?ah():ao()}function lg(){if(ii===0)if((yt&536870912)===0||Mt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Yn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(xs(t,0),ja(t,yt,ii,!1)),Nn(t,a),((Nt&2)===0||t!==Wt)&&(t===Wt&&((Nt&2)===0&&(wr|=a),an===4&&ja(t,yt,ii,!1)),ki(t))}function ug(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),c=o?jS(t,n):eh(t,n,!0),h=o;do{if(c===0){_s&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!qS(a)){c=eh(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;c=Fo;var B=A.current.memoizedState.isDehydrated;if(B&&(xs(A,S).flags|=256),S=eh(A,S,!1),S!==2){if(Yf&&!B){A.errorRecoveryDisabledLanes|=h,wr|=h,c=4;break e}h=qn,qn=c,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){xs(t,0),ja(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ii,!Xa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=cu+300-M(),10<c)){if(ja(o,n,ii,!Xa),ve(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=Hg(cg.bind(null,o,a,qn,hu,Zf,n,ii,wr,gs,Xa,h,"Throttled",-0,0),c);break e}cg(o,a,qn,hu,Zf,n,ii,wr,gs,Xa,h,null,-0,0)}}break}while(!0);ki(t)}function cg(t,n,a,o,c,h,S,A,B,$,he,ge,ie,oe){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},ng(n,h,ge);var Ve=(h&62914560)===h?cu-M():(h&4194048)===h?sg-M():0;if(Ve=Dy(ge,Ve),Ve!==null){ma=h,t.cancelPendingCommit=Ve(vg.bind(null,t,n,h,a,o,c,S,A,B,he,ge,null,ie,oe)),ja(t,h,S,!$);return}}vg(t,n,h,a,o,c,S,A,B)}function qS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Jn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~jf,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Ie(c),S=1<<h;o[h]=-1,c&=~S}a!==0&&Tl(t,a,n)}function du(){return(Nt&6)===0?(Bo(0),!1):!0}function $f(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,aa=Sr=null,mf(t),us=null,yo=0,t=gt;for(;t!==null;)G_(t.alternate,t),t=t.return;gt=null}}function xs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,$f(),Wt=t,gt=a=na(t.current,null),yt=n,zt=0,ni=null,Xa=!1,_s=Re(t,n),Yf=!1,gs=ii=jf=wr=Wa=an=0,qn=Fo=null,Zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ie(o),h=1<<c;n|=t[c],o&=~h}return pa=n,Ol(),a}function fg(t,n){ct=null,F.H=wo,n===ls||n===Vl?(n=Rm(),zt=3):n===nf?(n=Rm(),zt=4):zt=n===Uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,gt===null&&(an=1,nu(t,hi(n,t.current)))}function hg(){var t=ei.current;return t===null?!0:(yt&4194048)===yt?_i===null:(yt&62914560)===yt||(yt&536870912)!==0?t===_i:!1}function dg(){var t=F.H;return F.H=wo,t===null?wo:t}function pg(){var t=F.A;return F.A=XS,t}function pu(){an=4,Xa||(yt&4194048)!==yt&&ei.current!==null||(_s=!0),(Wa&134217727)===0&&(wr&134217727)===0||Wt===null||ja(Wt,yt,ii,!1)}function eh(t,n,a){var o=Nt;Nt|=2;var c=dg(),h=pg();(Wt!==t||yt!==n)&&(hu=null,xs(t,n)),n=!1;var S=an;e:do try{if(zt!==0&&gt!==null){var A=gt,B=ni;switch(zt){case 8:$f(),S=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var $=zt;if(zt=0,ni=null,Ss(t,A,B,$),a&&_s){S=0;break e}break;default:$=zt,zt=0,ni=null,Ss(t,A,B,$)}}YS(),S=an;break}catch(he){fg(t,he)}while(!0);return n&&t.shellSuspendCounter++,aa=Sr=null,Nt=o,F.H=c,F.A=h,gt===null&&(Wt=null,yt=0,Ol()),S}function YS(){for(;gt!==null;)mg(gt)}function jS(t,n){var a=Nt;Nt|=2;var o=dg(),c=pg();Wt!==t||yt!==n?(hu=null,fu=M()+500,xs(t,n)):_s=Re(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var h=ni;t:switch(zt){case 1:zt=0,ni=null,Ss(t,n,h,1);break;case 2:case 9:if(bm(h)){zt=0,ni=null,_g(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),ki(t)},h.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:bm(h)?(zt=0,ni=null,_g(n)):(zt=0,ni=null,Ss(t,n,h,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var A=gt;if(S?t0(S):A.stateNode.complete){zt=0,ni=null;var B=A.sibling;if(B!==null)gt=B;else{var $=A.return;$!==null?(gt=$,mu($)):gt=null}break t}}zt=0,ni=null,Ss(t,n,h,5);break;case 6:zt=0,ni=null,Ss(t,n,h,6);break;case 8:$f(),an=6;break e;default:throw Error(r(462))}}ZS();break}catch(he){fg(t,he)}while(!0);return aa=Sr=null,F.H=o,F.A=c,Nt=a,gt!==null?0:(Wt=null,yt=0,Ol(),an)}function ZS(){for(;gt!==null&&!Ye();)mg(gt)}function mg(t){var n=B_(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?mu(t):gt=n}function _g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=N_(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=N_(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:mf(n);default:G_(a,n),n=gt=pm(n,pa),n=B_(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?mu(t):gt=n}function Ss(t,n,a,o){aa=Sr=null,mf(n),us=null,yo=0;var c=n.return;try{if(FS(t,c,n,a,yt)){an=1,nu(t,hi(a,t.current)),gt=null;return}}catch(h){if(c!==null)throw gt=c,h;an=1,nu(t,hi(a,t.current)),gt=null;return}n.flags&32768?(Mt||o===1?t=!0:_s||(yt&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),gg(n,t)):mu(n)}function mu(t){var n=t;do{if((n.flags&32768)!==0){gg(n,Xa);return}t=n.return;var a=HS(n.alternate,n,pa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);an===0&&(an=5)}function gg(t,n){do{var a=GS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);an=6,gt=null}function vg(t,n,a,o,c,h,S,A,B){t.cancelPendingCommit=null;do _u();while(mn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Gc,bi(t,a,h,S,A,B),t===Wt&&(gt=Wt=null,yt=0),vs=n,Ya=t,ma=a,Kf=h,Qf=c,og=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$S(ue,function(){return Mg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,c=H.p,H.p=2,S=Nt,Nt|=4;try{VS(t,n,a)}finally{Nt=S,H.p=c,F.T=o}}mn=1,xg(),Sg(),yg()}}function xg(){if(mn===1){mn=0;var t=Ya,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var c=Nt;Nt|=4;try{$_(n,t);var h=hh,S=rm(t.containerInfo),A=h.focusedElem,B=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&am(A.ownerDocument.documentElement,A)){if(B!==null&&Ic(A)){var $=B.start,he=B.end;if(he===void 0&&(he=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(he,A.value.length);else{var ge=A.ownerDocument||document,ie=ge&&ge.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),Ve=A.textContent.length,nt=Math.min(B.start,Ve),kt=B.end===void 0?nt:Math.min(B.end,Ve);!oe.extend&&nt>kt&&(S=kt,kt=nt,nt=S);var j=im(A,nt),V=im(A,kt);if(j&&V&&(oe.rangeCount!==1||oe.anchorNode!==j.node||oe.anchorOffset!==j.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var J=ge.createRange();J.setStart(j.node,j.offset),oe.removeAllRanges(),nt>kt?(oe.addRange(J),oe.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),oe.addRange(J))}}}}for(ge=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var _e=ge[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Cu=!!fh,hh=fh=null}finally{Nt=c,H.p=o,F.T=a}}t.current=n,mn=2}}function Sg(){if(mn===2){mn=0;var t=Ya,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var c=Nt;Nt|=4;try{j_(t,n.alternate,n)}finally{Nt=c,H.p=o,F.T=a}}mn=3}}function yg(){if(mn===4||mn===3){mn=0,L();var t=Ya,n=vs,a=ma,o=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,vs=Ya=null,Eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(qa=null),Wr(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,c=H.p,H.p=2,F.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{F.T=n,H.p=c}}(ma&3)!==0&&_u(),ki(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Jf?zo++:(zo=0,Jf=t):zo=0,Bo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function _u(){return xg(),Sg(),yg(),Mg()}function Mg(){if(mn!==5)return!1;var t=Ya,n=Kf;Kf=0;var a=Wr(ma),o=F.T,c=H.p;try{H.p=32>a?32:a,F.T=null,a=Qf,Qf=null;var h=Ya,S=ma;if(mn=0,vs=Ya=null,ma=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,ag(h.current),tg(h,h.current,S,a),Nt=A,Bo(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Me,h)}catch{}return!0}finally{H.p=c,F.T=o,Eg(t,n)}}function Tg(t,n,a){n=hi(a,n),n=Df(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Nn(t,2),ki(t))}function Bt(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=hi(a,t),a=b_(2),o=Ha(n,a,2),o!==null&&(A_(a,o,n,t),Nn(o,2),ki(o));break}}n=n.return}}function th(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new WS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Yf=!0,c.add(a),t=KS.bind(null,t,n,a),n.then(t,t))}function KS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(yt&a)===a&&(an===4||an===3&&(yt&62914560)===yt&&300>M()-cu?(Nt&2)===0&&xs(t,0):jf|=a,gs===yt&&(gs=0)),ki(t)}function bg(t,n){n===0&&(n=It()),t=gr(t,n),t!==null&&(Nn(t,n),ki(t))}function QS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function JS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),bg(t,a)}function $S(t,n){return Tt(t,n)}var gu=null,ys=null,nh=!1,vu=!1,ih=!1,Za=0;function ki(t){t!==ys&&t.next===null&&(ys===null?gu=ys=t:ys=ys.next=t),vu=!0,nh||(nh=!0,ty())}function Bo(t,n){if(!ih&&vu){ih=!0;do for(var a=!1,o=gu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ie(42|t)+1)-1,h&=c&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,wg(o,h))}else h=yt,h=ve(o,o===Wt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Re(o,h)||(a=!0,wg(o,h));o=o.next}while(a);ih=!1}}function ey(){Ag()}function Ag(){vu=nh=!1;var t=0;Za!==0&&fy()&&(t=Za);for(var n=M(),a=null,o=gu;o!==null;){var c=o.next,h=Rg(o,n);h===0?(o.next=null,a===null?gu=c:a.next=c,c===null&&(ys=a)):(a=o,(t!==0||(h&3)!==0)&&(vu=!0)),o=c}mn!==0&&mn!==5||Bo(t),Za!==0&&(Za=0)}function Rg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ie(h),A=1<<S,B=c[S];B===-1?((A&a)===0||(A&o)!==0)&&(c[S]=at(A,n)):B<=n&&(t.expiredLanes|=A),h&=~A}if(n=Wt,a=yt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Wr(a)){case 2:case 8:a=xe;break;case 32:a=ue;break;case 268435456:a=Ce;break;default:a=ue}return o=Cg.bind(null,t),a=Tt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(_u()&&t.callbackNode!==a)return null;var o=yt;return o=ve(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ug(t,o,n),Rg(t,M()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function wg(t,n){if(_u())return null;ug(t,n,!0)}function ty(){dy(function(){(Nt&6)!==0?Tt(me,ey):Ag()})}function ah(){if(Za===0){var t=ss;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Za=t}return Za}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ny(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=Dg((c[En]||null).action),S=o.submitter;S&&(n=(n=S[En]||null)?Dg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new Dl("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var B=S?Ug(c,S):new FormData(c);Tf(a,{pending:!0,data:B,method:c.method,action:h},null,B)}}else typeof h=="function"&&(A.preventDefault(),B=S?Ug(c,S):new FormData(c),Tf(a,{pending:!0,data:B,method:c.method,action:h},h,B))},currentTarget:c}]})}}for(var rh=0;rh<Hc.length;rh++){var sh=Hc[rh],iy=sh.toLowerCase(),ay=sh[0].toUpperCase()+sh.slice(1);Ci(iy,"on"+ay)}Ci(lm,"onAnimationEnd"),Ci(um,"onAnimationIteration"),Ci(cm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(SS,"onTransitionRun"),Ci(yS,"onTransitionStart"),Ci(ES,"onTransitionCancel"),Ci(fm,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=$;try{h(c)}catch(he){Nl(he)}c.currentTarget=null,h=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,$=A.currentTarget,A=A.listener,B!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=$;try{h(c)}catch(he){Nl(he)}c.currentTarget=null,h=B}}}}function vt(t,n){var a=n[qr];a===void 0&&(a=n[qr]=new Set);var o=t+"__bubble";a.has(o)||(Ng(n,t,2,!1),a.add(o))}function oh(t,n,a){var o=0;n&&(o|=4),Ng(a,t,o,n)}var xu="_reactListening"+Math.random().toString(36).slice(2);function lh(t){if(!t[xu]){t[xu]=!0,Y.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||oh(a,!1,t),oh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[xu]||(n[xu]=!0,oh("selectionchange",!1,n))}}function Ng(t,n,a,o){switch(l0(n)){case 2:var c=Ny;break;case 8:c=Oy;break;default:c=Mh}a=c.bind(null,n,a,t),c=void 0,!Rc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function uh(t,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Da(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=h=S;continue e}A=A.parentNode}}o=o.return}zp(function(){var $=h,he=bc(a),ge=[];e:{var ie=hm.get(t);if(ie!==void 0){var oe=Dl,Ve=t;switch(t){case"keypress":if(Cl(a)===0)break e;case"keydown":case"keyup":oe=Jx;break;case"focusin":Ve="focus",oe=Uc;break;case"focusout":Ve="blur",oe=Uc;break;case"beforeblur":case"afterblur":oe=Uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=tS;break;case lm:case um:case cm:oe=kx;break;case fm:oe=iS;break;case"scroll":case"scrollend":oe=zx;break;case"wheel":oe=rS;break;case"copy":case"cut":case"paste":oe=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=kp;break;case"toggle":case"beforetoggle":oe=oS}var nt=(n&4)!==0,kt=!nt&&(t==="scroll"||t==="scrollend"),j=nt?ie!==null?ie+"Capture":null:ie;nt=[];for(var V=$,J;V!==null;){var _e=V;if(J=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||J===null||j===null||(_e=oo(V,j),_e!=null&&nt.push(Go(V,_e,J))),kt)break;V=V.return}0<nt.length&&(ie=new oe(ie,Ve,null,a,he),ge.push({event:ie,listeners:nt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ie&&a!==Tc&&(Ve=a.relatedTarget||a.fromElement)&&(Da(Ve)||Ve[Ai]))break e;if((oe||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(Ve=a.relatedTarget||a.toElement,oe=$,Ve=Ve?Da(Ve):null,Ve!==null&&(kt=u(Ve),nt=Ve.tag,Ve!==kt||nt!==5&&nt!==27&&nt!==6)&&(Ve=null)):(oe=null,Ve=$),oe!==Ve)){if(nt=Gp,_e="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=kp,_e="onPointerLeave",j="onPointerEnter",V="pointer"),kt=oe==null?ie:dr(oe),J=Ve==null?ie:dr(Ve),ie=new nt(_e,V+"leave",oe,a,he),ie.target=kt,ie.relatedTarget=J,_e=null,Da(he)===$&&(nt=new nt(j,V+"enter",Ve,a,he),nt.target=J,nt.relatedTarget=kt,_e=nt),kt=_e,oe&&Ve)t:{for(nt=sy,j=oe,V=Ve,J=0,_e=j;_e;_e=nt(_e))J++;_e=0;for(var Je=V;Je;Je=nt(Je))_e++;for(;0<J-_e;)j=nt(j),J--;for(;0<_e-J;)V=nt(V),_e--;for(;J--;){if(j===V||V!==null&&j===V.alternate){nt=j;break t}j=nt(j),V=nt(V)}nt=null}else nt=null;oe!==null&&Og(ge,ie,oe,nt,!1),Ve!==null&&kt!==null&&Og(ge,kt,Ve,nt,!0)}}e:{if(ie=$?dr($):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Rt=Qp;else if(Zp(ie))if(Jp)Rt=gS;else{Rt=mS;var je=pS}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Ri($.elementType)&&(Rt=Qp):Rt=_S;if(Rt&&(Rt=Rt(t,$))){Kp(ge,Rt,a,he);break e}je&&je(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&Tn(ie,"number",ie.value)}switch(je=$?dr($):window,t){case"focusin":(Zp(je)||je.contentEditable==="true")&&(Jr=je,Fc=$,_o=null);break;case"focusout":_o=Fc=Jr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,sm(ge,a,he);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":sm(ge,a,he)}var ht;if(Nc)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Qr?Yp(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Xp&&a.locale!=="ko"&&(Qr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Qr&&(ht=Bp()):(Na=he,Cc="value"in Na?Na.value:Na.textContent,Qr=!0)),je=Su($,Et),0<je.length&&(Et=new Vp(Et,t,null,a,he),ge.push({event:Et,listeners:je}),ht?Et.data=ht:(ht=jp(a),ht!==null&&(Et.data=ht)))),(ht=uS?cS(t,a):fS(t,a))&&(Et=Su($,"onBeforeInput"),0<Et.length&&(je=new Vp("onBeforeInput","beforeinput",null,a,he),ge.push({event:je,listeners:Et}),je.data=ht)),ny(ge,t,$,a,he)}Lg(ge,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Su(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=oo(t,a),c!=null&&o.unshift(Go(t,c,h)),c=oo(t,n),c!=null&&o.push(Go(t,c,h))),t.tag===3)return o;t=t.return}return[]}function sy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,o,c){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||$===null||(B=$,c?($=oo(a,h),$!=null&&S.unshift(Go(a,$,B))):c||($=oo(a,h),$!=null&&S.push(Go(a,$,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ly,"")}function Ig(t,n){return n=Pg(n),Pg(t)===n}function Vt(t,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":jr(t,o,h);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",c.name,c,null),Vt(t,n,"formEncType",c.formEncType,c,null),Vt(t,n,"formMethod",c.formMethod,c,null),Vt(t,n,"formTarget",c.formTarget,c,null)):(Vt(t,n,"encType",c.encType,c,null),Vt(t,n,"method",c.method,c,null),Vt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),We(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,We(t,a,o))}}function ch(t,n,a,o,c,h){switch(a){case"style":jr(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[En]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):We(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,h,S,a,null)}}c&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var A=h=S=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":c=he;break;case"type":S=he;break;case"checked":B=he;break;case"defaultChecked":$=he;break;case"value":h=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Vt(t,n,o,he,a,null)}}$i(t,h,A,B,$,S,c,!1);return;case"select":vt("invalid",t),o=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Vt(t,n,c,A,a,null)}n=h,a=S,t.multiple=!!o,n!=null?ci(t,!!o,n,!1):a!=null&&ci(t,!!o,a,!0);return;case"textarea":vt("invalid",t),h=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Vt(t,n,S,A,a,null)}bn(t,o,c,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,B,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)vt(Ho[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,$,o,a,null)}return;default:if(Ri(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&ch(t,n,he,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function uy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,A=null,B=null,$=null,he=null;for(oe in a){var ge=a[oe];if(a.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(oe)||Vt(t,n,oe,null,o,ge)}}for(var ie in o){var oe=o[ie];if(ge=a[ie],o.hasOwnProperty(ie)&&(oe!=null||ge!=null))switch(ie){case"type":h=oe;break;case"name":c=oe;break;case"checked":$=oe;break;case"defaultChecked":he=oe;break;case"value":S=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ge&&Vt(t,n,ie,oe,o,ge)}}Mn(t,S,A,B,$,he,h,c);return;case"select":oe=S=A=ie=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":oe=B;default:o.hasOwnProperty(h)||Vt(t,n,h,null,o,B)}for(c in o)if(h=o[c],B=a[c],o.hasOwnProperty(c)&&(h!=null||B!=null))switch(c){case"value":ie=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==B&&Vt(t,n,c,h,o,B)}n=A,a=S,o=oe,ie!=null?ci(t,!!a,ie,!1):!!o!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,c)}for(S in o)if(c=o[S],h=a[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":ie=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Vt(t,n,S,c,o,h)}Ft(t,ie,oe);return;case"option":for(var Ve in a)ie=a[Ve],a.hasOwnProperty(Ve)&&ie!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Vt(t,n,Ve,null,o,ie));for(B in o)ie=o[B],oe=a[B],o.hasOwnProperty(B)&&ie!==oe&&(ie!=null||oe!=null)&&(B==="selected"?t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol":Vt(t,n,B,ie,o,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ie=a[nt],a.hasOwnProperty(nt)&&ie!=null&&!o.hasOwnProperty(nt)&&Vt(t,n,nt,null,o,ie);for($ in o)if(ie=o[$],oe=a[$],o.hasOwnProperty($)&&ie!==oe&&(ie!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Vt(t,n,$,ie,o,oe)}return;default:if(Ri(n)){for(var kt in a)ie=a[kt],a.hasOwnProperty(kt)&&ie!==void 0&&!o.hasOwnProperty(kt)&&ch(t,n,kt,void 0,o,ie);for(he in o)ie=o[he],oe=a[he],!o.hasOwnProperty(he)||ie===oe||ie===void 0&&oe===void 0||ch(t,n,he,ie,o,oe);return}}for(var j in a)ie=a[j],a.hasOwnProperty(j)&&ie!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,ie);for(ge in o)ie=o[ge],oe=a[ge],!o.hasOwnProperty(ge)||ie===oe||ie==null&&oe==null||Vt(t,n,ge,ie,o,oe)}function Fg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,S=c.initiatorType,A=c.duration;if(h&&A&&Fg(S)){for(S=0,A=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>A)break;var he=B.transferSize,ge=B.initiatorType;he&&Fg(ge)&&(B=B.responseEnd,S+=he*(B<A?1:(A-$)/(B-$)))}if(--o,n+=8*(h+S)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fh=null,hh=null;function yu(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ph=null;function fy(){var t=window.event;return t&&t.type==="popstate"?t===ph?!1:(ph=t,!0):(ph=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(py)}:Hg;function py(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Vg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[hr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Vo(t.ownerDocument.body);a=c}while(a);bs(n)}function kg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function mh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mh(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function my(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[hr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function _y(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function Xg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function _h(t){return t.data==="$?"||t.data==="$~"}function gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vh=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=yu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);so(t)}var vi=new Map,jg=new Set;function Eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=H.d;H.d={f:vy,r:xy,D:Sy,C:yy,L:Ey,m:My,X:by,S:Ty,M:Ay};function vy(){var t=_a.f(),n=du();return t||n}function xy(t){var n=Ua(t);n!==null&&n.tag===5&&n.type==="form"?f_(n):_a.r(t)}var Es=typeof document>"u"?null:document;function Zg(t,n,a){var o=Es;if(o&&typeof n=="string"&&n){var c=rt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function Sy(t){_a.D(t),Zg("dns-prefetch",t,null)}function yy(t,n){_a.C(t,n),Zg("preconnect",t,n)}function Ey(t,n,a){_a.L(t,n,a);var o=Es;if(o&&t&&n){var c='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+rt(a.imageSizes)+'"]')):c+='[href="'+rt(t)+'"]';var h=c;switch(n){case"style":h=Ms(t);break;case"script":h=Ts(t)}vi.has(h)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(ko(h))||n==="script"&&o.querySelector(Xo(h))||(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function My(t,n){_a.m(t,n);var a=Es;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+rt(o)+'"][href="'+rt(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ts(t)}if(!vi.has(h)&&(t=_({rel:"modulepreload",href:t},n),vi.set(h,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(h)))return}o=a.createElement("link"),Un(o,"link",t),R(o),a.head.appendChild(o)}}}function Ty(t,n,a){_a.S(t,n,a);var o=Es;if(o&&t){var c=La(o).hoistableStyles,h=Ms(t);n=n||"default";var S=c.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(ko(h)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(h))&&xh(t,a);var B=S=o.createElement("link");R(B),Un(B,"link",t),B._p=new Promise(function($,he){B.onload=$,B.onerror=he}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Mu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(h,S)}}}function by(t,n){_a.X(t,n);var a=Es;if(a&&t){var o=La(a).hoistableScripts,c=Ts(t),h=o.get(c);h||(h=a.querySelector(Xo(c)),h||(t=_({src:t,async:!0},n),(n=vi.get(c))&&Sh(t,n),h=a.createElement("script"),R(h),Un(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Ay(t,n){_a.M(t,n);var a=Es;if(a&&t){var o=La(a).hoistableScripts,c=Ts(t),h=o.get(c);h||(h=a.querySelector(Xo(c)),h||(t=_({src:t,async:!0,type:"module"},n),(n=vi.get(c))&&Sh(t,n),h=a.createElement("script"),R(h),Un(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Kg(t,n,a,o){var c=(c=ee.current)?Eu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=La(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var h=La(c).hoistableStyles,S=h.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=c.querySelector(ko(t)))&&!h._p&&(S.instance=h,S.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),h||Ry(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ts(a),a=La(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+rt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),t.head.appendChild(n))}function Ts(t){return'[src="'+rt(t)+'"]'}function Xo(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(o)return n.instance=o,R(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Un(o,"style",c),Mu(o,a.precedence,t),n.instance=o;case"stylesheet":c=Ms(a.href);var h=t.querySelector(ko(c));if(h)return n.state.loading|=4,n.instance=h,R(h),h;o=Qg(a),(c=vi.get(c))&&xh(o,c),h=(t.ownerDocument||t).createElement("link"),R(h);var S=h;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Un(h,"link",o),n.state.loading|=4,Mu(h,a.precedence,t),n.instance=h;case"script":return h=Ts(a.src),(c=t.querySelector(Xo(h)))?(n.instance=c,R(c),c):(o=a,(c=vi.get(h))&&(o=_({},a),Sh(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),R(c),Un(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Mu(o,a.precedence,t));return n.instance}function Mu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Tu=null;function $g(t,n,a){if(Tu===null){var o=new Map,c=Tu=new Map;c.set(a,o)}else c=Tu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[hr]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function e0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function wy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ms(o.href),h=n.querySelector(ko(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=bu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,R(h);return}h=n.ownerDocument||n,o=Qg(o),(c=vi.get(c))&&xh(o,c),h=h.createElement("link"),R(h);var S=h;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Un(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=bu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function Dy(t,n){return t.stylesheets&&t.count===0&&Ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&yh===0&&(yh=62500*cy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>yh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Au=null;function Ru(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Au=new Map,n.forEach(Uy,t),Au=null,bu.call(t))}function Uy(t,n){if(!(n.state.loading&4)){var a=Au.get(t);if(a)var o=a.get(null);else{a=new Map,Au.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,c),a.set(S,c),this.count++,o=bu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Wo={$$typeof:U,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Ly(t,n,a,o,c,h,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function n0(t,n,a,o,c,h,S,A,B,$,he,ge){return t=new Ly(t,n,a,S,B,$,he,ge,A),n=1,h===!0&&(n|=24),h=$n(3,null,null,n),t.current=h,h.stateNode=t,n=$c(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},af(h),t}function i0(t){return t?(t=ts,t):ts}function a0(t,n,a,o,c,h){c=i0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ba(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ha(t,o,n),a!==null&&(Yn(a,t,n),Mo(a,t,n))}function r0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Eh(t,n){r0(t,n),(t=t.alternate)&&r0(t,n)}function s0(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Yn(n,t,67108864),Eh(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=ai();n=io(n);var a=gr(t,n);a!==null&&Yn(a,t,n),Eh(t,n)}}var Cu=!0;function Ny(t,n,a,o){var c=F.T;F.T=null;var h=H.p;try{H.p=2,Mh(t,n,a,o)}finally{H.p=h,F.T=c}}function Oy(t,n,a,o){var c=F.T;F.T=null;var h=H.p;try{H.p=8,Mh(t,n,a,o)}finally{H.p=h,F.T=c}}function Mh(t,n,a,o){if(Cu){var c=Th(o);if(c===null)uh(t,n,o,wu,a),u0(t,o);else if(Iy(c,t,n,a,o))o.stopPropagation();else if(u0(t,o),n&4&&-1<Py.indexOf(t)){for(;c!==null;){var h=Ua(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ee(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Ie(S);A.entanglements[1]|=B,S&=~B}ki(h),(Nt&6)===0&&(fu=M()+500,Bo(0))}}break;case 31:case 13:A=gr(h,2),A!==null&&Yn(A,h,2),du(),Eh(h,2)}if(h=Th(o),h===null&&uh(t,n,o,wu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else uh(t,n,o,null,a)}}function Th(t){return t=bc(t),bh(t)}var wu=null;function bh(t){if(wu=null,t=Da(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return wu=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case me:return 2;case xe:return 8;case ue:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Ah=!1,Qa=null,Ja=null,$a=null,qo=new Map,Yo=new Map,er=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function jo(t,n,a,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ua(n),n!==null&&s0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Iy(t,n,a,o,c){switch(n){case"focusin":return Qa=jo(Qa,t,n,a,o,c),!0;case"dragenter":return Ja=jo(Ja,t,n,a,o,c),!0;case"mouseover":return $a=jo($a,t,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return qo.set(h,jo(qo.get(h)||null,t,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Yo.set(h,jo(Yo.get(h)||null,t,n,a,o,c)),!0}return!1}function c0(t){var n=Da(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){o0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Bi(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Th(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Tc=o,a.target.dispatchEvent(o),Tc=null}else return n=Ua(a),n!==null&&s0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){Du(t)&&a.delete(n)}function Fy(){Ah=!1,Qa!==null&&Du(Qa)&&(Qa=null),Ja!==null&&Du(Ja)&&(Ja=null),$a!==null&&Du($a)&&($a=null),qo.forEach(f0),Yo.forEach(f0)}function Uu(t,n){t.blockedOn===n&&(t.blockedOn=null,Ah||(Ah=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Fy)))}var Lu=null;function h0(t){Lu!==t&&(Lu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Lu===t&&(Lu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(bh(o||a)===null)continue;break}var h=Ua(a);h!==null&&(t.splice(n,3),n-=3,Tf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function bs(t){function n(B){return Uu(B,t)}Qa!==null&&Uu(Qa,t),Ja!==null&&Uu(Ja,t),$a!==null&&Uu($a,t),qo.forEach(n),Yo.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)c0(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],S=c[En]||null;if(typeof h=="function")S||h0(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[En]||null)A=S.formAction;else if(bh(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),h0(a)}}}function d0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Rh(t){this._internalRoot=t}Nu.prototype.render=Rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();a0(a,o,t,n,null,null)},Nu.prototype.unmount=Rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),du(),n[Ai]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var n=ao();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&c0(t)}};var p0=e.version;if(p0!=="19.2.3")throw Error(r(527,p0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var zy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{Me=Ou.inject(zy),be=Ou}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=y_,h=E_,S=M_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,o,null,c,h,S,d0),t[Ai]=n.current,lh(t),new Rh(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",h=y_,S=E_,A=M_,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=n0(t,1,!0,n,a??null,o,c,B,h,S,A,d0),n.context=i0(null),a=n.current,o=ai(),o=io(o),c=Ba(o),c.callback=null,Ha(a,c,o),a=o,n.current.lanes=a,Nn(n,a),ki(n),t[Ai]=n.current,lh(t),new Nu(n)},Ko.version="19.2.3",Ko}var T0;function jy(){if(T0)return Dh.exports;T0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Dh.exports=Yy(),Dh.exports}var Zy=jy();var b0="popstate";function Ky(s={}){function e(r,l){let{pathname:u,search:f,hash:d}=r.location;return gd("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:ll(l)}return Jy(e,i,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Fi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qy(){return Math.random().toString(36).substring(2,10)}function A0(s,e){return{usr:s.state,key:s.key,idx:e}}function gd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Js(e):e,state:i,key:e&&e.key||r||Qy()}}function ll({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Js(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Jy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let y=g(),v=y==null?null:y-p;p=y,m&&m({action:d,location:b.location,delta:v})}function x(y,v){d="PUSH";let w=gd(b.location,y,v);p=g()+1;let U=A0(w,p),O=b.createHref(w);try{f.pushState(U,"",O)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(O)}u&&m&&m({action:d,location:b.location,delta:1})}function E(y,v){d="REPLACE";let w=gd(b.location,y,v);p=g();let U=A0(w,p),O=b.createHref(w);f.replaceState(U,"",O),u&&m&&m({action:d,location:b.location,delta:0})}function T(y){return $y(y)}let b={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(b0,_),m=y,()=>{l.removeEventListener(b0,_),m=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let v=T(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:E,go(y){return f.go(y)}};return b}function $y(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ll(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Lv(s,e,i="/"){return eE(s,e,i,!1)}function eE(s,e,i,r){let l=typeof e=="string"?Js(e):e,u=Aa(l.pathname||"/",i);if(u==null)return null;let f=Nv(s);tE(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=hE(u);d=cE(f[m],p,r)}return d}function Nv(s,e=[],i=[],r="",l=!1){let u=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;$t(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Ta([r,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Nv(f.children,e,x,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:lE(_,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of Ov(f.path))u(f,d,!0,m)}),e}function Ov(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Ov(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function tE(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:uE(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var nE=/^:[\w-]+$/,iE=3,aE=2,rE=1,sE=10,oE=-2,R0=s=>s==="*";function lE(s,e){let i=s.split("/"),r=i.length;return i.some(R0)&&(r+=oE),e&&(r+=aE),i.filter(l=>!R0(l)).reduce((l,u)=>l+(nE.test(u)?iE:u===""?rE:sE),r)}function uE(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function cE(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=pc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=pc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Ta([u,_.pathname]),pathnameBase:_E(Ta([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=Ta([u,_.pathnameBase]))}return f}function pc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=fE(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let T=d[x]||"";f=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const E=d[x];return _&&!E?p[g]=void 0:p[g]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function fE(s,e=!1,i=!0){Fi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function hE(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Aa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dE=s=>Pv.test(s);function pE(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Js(s):s,u;if(i)if(dE(i))u=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Fi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?u=C0(i.substring(1),"/"):u=C0(i,e)}else u=e;return{pathname:u,search:gE(r),hash:vE(l)}}function C0(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Oh(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mE(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Iv(s){let e=mE(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Fv(s,e,i,r=!1){let l;typeof s=="string"?l=Js(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),Oh("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Oh("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Oh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?e[_]:"/"}let m=pE(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var Ta=s=>s.join("/").replace(/\/\/+/g,"/"),_E=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),gE=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,vE=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,xE=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function SE(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function yE(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bv(s,e){let i=s;if(typeof i!="string"||!Pv.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(zv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),d=Aa(f.pathname,e);f.origin===u.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Fi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hv=["POST","PUT","PATCH","DELETE"];new Set(Hv);var EE=["GET",...Hv];new Set(EE);var $s=de.createContext(null);$s.displayName="DataRouter";var vc=de.createContext(null);vc.displayName="DataRouterState";var ME=de.createContext(!1),Gv=de.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var TE=de.createContext(new Map);TE.displayName="Fetchers";var bE=de.createContext(null);bE.displayName="Await";var Ti=de.createContext(null);Ti.displayName="Navigation";var ml=de.createContext(null);ml.displayName="Location";var wa=de.createContext({outlet:null,matches:[],isDataRoute:!1});wa.displayName="Route";var _p=de.createContext(null);_p.displayName="RouteError";var Vv="REACT_ROUTER_ERROR",AE="REDIRECT",RE="ROUTE_ERROR_RESPONSE";function CE(s){if(s.startsWith(`${Vv}:${AE}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function wE(s){if(s.startsWith(`${Vv}:${RE}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new xE(e.status,e.statusText,e.data)}catch{}}function DE(s,{relative:e}={}){$t(_l(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=de.useContext(Ti),{hash:l,pathname:u,search:f}=gl(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:Ta([i,u])),r.createHref({pathname:d,search:f,hash:l})}function _l(){return de.useContext(ml)!=null}function Vr(){return $t(_l(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(ml).location}var kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xv(s){de.useContext(Ti).static||de.useLayoutEffect(s)}function Wv(){let{isDataRoute:s}=de.useContext(wa);return s?kE():UE()}function UE(){$t(_l(),"useNavigate() may be used only in the context of a <Router> component.");let s=de.useContext($s),{basename:e,navigator:i}=de.useContext(Ti),{matches:r}=de.useContext(wa),{pathname:l}=Vr(),u=JSON.stringify(Iv(r)),f=de.useRef(!1);return Xv(()=>{f.current=!0}),de.useCallback((m,p={})=>{if(Fi(f.current,kv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Fv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ta([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}de.createContext(null);function gl(s,{relative:e}={}){let{matches:i}=de.useContext(wa),{pathname:r}=Vr(),l=JSON.stringify(Iv(i));return de.useMemo(()=>Fv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function LE(s,e){return qv(s,e)}function qv(s,e,i,r,l){$t(_l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=de.useContext(Ti),{matches:f}=de.useContext(wa),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let w=_&&_.path||"";jv(p,!_||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let x=Vr(),E;if(e){let w=typeof e=="string"?Js(e):e;$t(g==="/"||w.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),E=w}else E=x;let T=E.pathname||"/",b=T;if(g!=="/"){let w=g.replace(/^\//,"").split("/");b="/"+T.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=Lv(s,{pathname:b});Fi(_||y!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Fi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=FE(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:Ta([g,u.encodeLocation?u.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:Ta([g,u.encodeLocation?u.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&v?de.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},v):v}function NE(){let s=VE(),e=SE(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:u},"ErrorBoundary")," or"," ",de.createElement("code",{style:u},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),i?de.createElement("pre",{style:l},i):null,f)}var OE=de.createElement(NE,null),Yv=class extends de.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=wE(s.digest);i&&(s=i)}let e=s!==void 0?de.createElement(wa.Provider,{value:this.props.routeContext},de.createElement(_p.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?de.createElement(PE,{error:s},e):e}};Yv.contextType=ME;var Ph=new WeakMap;function PE({children:s,error:e}){let{basename:i}=de.useContext(Ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=CE(e.digest);if(r){let l=Ph.get(e);if(l)throw l;let u=Bv(r.location,i);if(zv&&!Ph.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Ph.set(e,f),f}return de.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function IE({routeContext:s,match:e,children:i}){let r=de.useContext($s);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(wa.Provider,{value:s},i)}function FE(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let g=u.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);$t(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let d=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:x,errors:E}=i,T=_.route.loader&&!x.hasOwnProperty(_.route.id)&&(!E||E[_.route.id]===void 0);if(_.route.lazy||T){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&r?(g,_)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:yE(i.matches),errorInfo:_})}:void 0;return u.reduceRight((g,_,x)=>{let E,T=!1,b=null,y=null;i&&(E=f&&_.route.id?f[_.route.id]:void 0,b=_.route.errorElement||OE,d&&(m<0&&x===0?(jv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):m===x&&(T=!0,y=_.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,x+1)),w=()=>{let U;return E?U=b:T?U=y:_.route.Component?U=de.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=g,de.createElement(IE,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:U})};return i&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?de.createElement(Yv,{location:i.location,revalidation:i.revalidation,component:b,error:E,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function gp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zE(s){let e=de.useContext($s);return $t(e,gp(s)),e}function BE(s){let e=de.useContext(vc);return $t(e,gp(s)),e}function HE(s){let e=de.useContext(wa);return $t(e,gp(s)),e}function vp(s){let e=HE(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function GE(){return vp("useRouteId")}function VE(){let s=de.useContext(_p),e=BE("useRouteError"),i=vp("useRouteError");return s!==void 0?s:e.errors?.[i]}function kE(){let{router:s}=zE("useNavigate"),e=vp("useNavigate"),i=de.useRef(!1);return Xv(()=>{i.current=!0}),de.useCallback(async(l,u={})=>{Fi(i.current,kv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var w0={};function jv(s,e,i){!e&&!w0[s]&&(w0[s]=!0,Fi(!1,i))}de.memo(XE);function XE({routes:s,future:e,state:i,onError:r}){return qv(s,void 0,i,r,e)}function vd(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WE({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){$t(!_l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=de.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[d,l,u,f]);typeof i=="string"&&(i=Js(i));let{pathname:p="/",search:g="",hash:_="",state:x=null,key:E="default"}=i,T=de.useMemo(()=>{let b=Aa(p,d);return b==null?null:{location:{pathname:b,search:g,hash:_,state:x,key:E},navigationType:r}},[d,p,g,_,x,E,r]);return Fi(T!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:de.createElement(Ti.Provider,{value:m},de.createElement(ml.Provider,{children:e,value:T}))}function qE({children:s,location:e}){return LE(xd(s),e)}function xd(s,e=[]){let i=[];return de.Children.forEach(s,(r,l)=>{if(!de.isValidElement(r))return;let u=[...e,l];if(r.type===de.Fragment){i.push.apply(i,xd(r.props.children,u));return}$t(r.type===vd,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=xd(r.props.children,u)),i.push(f)}),i}var ac="get",rc="application/x-www-form-urlencoded";function xc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function YE(s){return xc(s)&&s.tagName.toLowerCase()==="button"}function jE(s){return xc(s)&&s.tagName.toLowerCase()==="form"}function ZE(s){return xc(s)&&s.tagName.toLowerCase()==="input"}function KE(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function QE(s,e){return s.button===0&&(!e||e==="_self")&&!KE(s)}var Pu=null;function JE(){if(Pu===null)try{new FormData(document.createElement("form"),0),Pu=!1}catch{Pu=!0}return Pu}var $E=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(s){return s!=null&&!$E.has(s)?(Fi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rc}"`),null):s}function eM(s,e){let i,r,l,u,f;if(jE(s)){let d=s.getAttribute("action");r=d?Aa(d,e):null,i=s.getAttribute("method")||ac,l=Ih(s.getAttribute("enctype"))||rc,u=new FormData(s)}else if(YE(s)||ZE(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?Aa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||ac,l=Ih(s.getAttribute("formenctype"))||Ih(d.getAttribute("enctype"))||rc,u=new FormData(d,s),!JE()){let{name:p,type:g,value:_}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,_)}}else{if(xc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ac,r=null,l=rc,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function tM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&Aa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function nM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function aM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await nM(u,i);return f.links?f.links():[]}return[]}));return lM(r.flat(1).filter(iM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function D0(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function rM(s,e,{includeHydrateFallback:i}={}){return sM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function sM(s){return[...new Set(s)]}function oM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function lM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(oM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Zv(){let s=de.useContext($s);return xp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function uM(){let s=de.useContext(vc);return xp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Sp=de.createContext(void 0);Sp.displayName="FrameworkContext";function Kv(){let s=de.useContext(Sp);return xp(s,"You must render this element inside a <HydratedRouter> element"),s}function cM(s,e){let i=de.useContext(Sp),[r,l]=de.useState(!1),[u,f]=de.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,x=de.useRef(null);de.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let b=v=>{v.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),de.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let E=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Qo(d,E),onBlur:Qo(m,T),onMouseEnter:Qo(p,E),onMouseLeave:Qo(g,T),onTouchStart:Qo(_,E)}]:[!1,x,{}]}function Qo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function fM({page:s,...e}){let{router:i}=Zv(),r=de.useMemo(()=>Lv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?de.createElement(dM,{page:s,matches:r,...e}):null}function hM(s){let{manifest:e,routeModules:i}=Kv(),[r,l]=de.useState([]);return de.useEffect(()=>{let u=!1;return aM(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function dM({page:s,matches:e,...i}){let r=Vr(),{manifest:l,routeModules:u}=Kv(),{basename:f}=Zv(),{loaderData:d,matches:m}=uM(),p=de.useMemo(()=>D0(s,e,m,l,r,"data"),[s,e,m,l,r]),g=de.useMemo(()=>D0(s,e,m,l,r,"assets"),[s,e,m,l,r]),_=de.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,b=!1;if(e.forEach(v=>{let w=l.routes[v.route.id];!w||!w.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in d&&u[v.route.id]?.shouldRevalidate||w.hasClientLoader?b=!0:T.add(v.route.id))}),T.size===0)return[];let y=tM(s,f,"data");return b&&T.size>0&&y.searchParams.set("_routes",e.filter(v=>T.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,d,r,l,p,e,s,u]),x=de.useMemo(()=>rM(g,l),[g,l]),E=hM(g);return de.createElement(de.Fragment,null,_.map(T=>de.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),x.map(T=>de.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),E.map(({key:T,link:b})=>de.createElement("link",{key:T,nonce:i.nonce,...b})))}function pM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var mM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mM&&(window.__reactRouterVersion="7.11.0")}catch{}function _M({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=de.useRef();l.current==null&&(l.current=Ky({window:r,v5Compat:!0}));let u=l.current,[f,d]=de.useState({action:u.action,location:u.location}),m=de.useCallback(p=>{i===!1?d(p):de.startTransition(()=>d(p))},[i]);return de.useLayoutEffect(()=>u.listen(m),[u,m]),de.createElement(WE,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ol=de.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x,...E},T){let{basename:b,unstable_useTransitions:y}=de.useContext(Ti),v=typeof p=="string"&&Qv.test(p),w=Bv(p,b);p=w.to;let U=DE(p,{relative:l}),[O,P,z]=cM(r,E),I=SM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y});function Z(D){e&&e(D),D.defaultPrevented||I(D)}let C=de.createElement("a",{...E,...z,href:w.absoluteURL||U,onClick:w.isExternal||u?e:Z,ref:pM(T,P),target:m,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?de.createElement(de.Fragment,null,C,de.createElement(fM,{page:U})):C});ol.displayName="Link";var gM=de.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let _=gl(f,{relative:p.relative}),x=Vr(),E=de.useContext(vc),{navigator:T,basename:b}=de.useContext(Ti),y=E!=null&&bM(_)&&d===!0,v=T.encodeLocation?T.encodeLocation(_).pathname:_.pathname,w=x.pathname,U=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(w=w.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&b&&(U=Aa(U,b)||U);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=w===v||!l&&w.startsWith(v)&&w.charAt(O)==="/",z=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),I={isActive:P,isPending:z,isTransitioning:y},Z=P?e:void 0,C;typeof r=="function"?C=r(I):C=[r,P?"active":null,z?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(I):u;return de.createElement(ol,{...p,"aria-current":Z,className:C,ref:g,style:D,to:f,viewTransition:d},typeof m=="function"?m(I):m)});gM.displayName="NavLink";var vM=de.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=ac,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x,...E},T)=>{let{unstable_useTransitions:b}=de.useContext(Ti),y=MM(),v=TM(d,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&Qv.test(d),O=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let z=P.nativeEvent.submitter,I=z?.getAttribute("formmethod")||f,Z=()=>y(z||P.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x});b&&i!==!1?de.startTransition(()=>Z()):Z()};return de.createElement("form",{ref:T,method:w,action:v,onSubmit:r?m:O,...E,"data-discover":!U&&s==="render"?"true":void 0})});vM.displayName="Form";function xM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jv(s){let e=de.useContext($s);return $t(e,xM(s)),e}function SM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=Wv(),g=Vr(),_=gl(s,{relative:u});return de.useCallback(x=>{if(QE(x,e)){x.preventDefault();let E=i!==void 0?i:ll(g)===ll(_),T=()=>p(s,{replace:E,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d});m?de.startTransition(()=>T()):T()}},[g,p,_,i,r,e,s,l,u,f,d,m])}var yM=0,EM=()=>`__${String(++yM)}__`;function MM(){let{router:s}=Jv("useSubmit"),{basename:e}=de.useContext(Ti),i=GE(),r=s.fetch,l=s.navigate;return de.useCallback(async(u,f={})=>{let{action:d,method:m,encType:p,formData:g,body:_}=eM(u,e);if(f.navigate===!1){let x=f.fetcherKey||EM();await r(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function TM(s,{relative:e}={}){let{basename:i}=de.useContext(Ti),r=de.useContext(wa);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...gl(s||".",{relative:e})},f=Vr();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ta([i,u.pathname])),ll(u)}function bM(s,{relative:e}={}){let i=de.useContext(Gv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Jv("useViewTransitionState"),l=gl(s,{relative:e});if(!i.isTransitioning)return!1;let u=Aa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Aa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return pc(l.pathname,f)!=null||pc(l.pathname,u)!=null}const AM=()=>Ke.jsx("nav",{className:"navbar",children:Ke.jsxs("div",{className:"nav-container",children:[Ke.jsx(ol,{to:"/",className:"nav-logo",children:"BHX"}),Ke.jsxs("ul",{className:"nav-menu",children:[Ke.jsx("li",{className:"nav-item",children:Ke.jsx(ol,{to:"/",className:"nav-link",children:"Home"})}),Ke.jsx("li",{className:"nav-item",children:Ke.jsx(ol,{to:"/about",className:"nav-link",children:"About"})})]})]})});const yp="182",Vs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RM=0,U0=1,CM=2,sc=1,wM=2,rl=3,fr=0,Kn=1,Ea=2,ji=0,ks=1,Sd=2,L0=3,N0=4,DM=5,Ir=100,UM=101,LM=102,NM=103,OM=104,PM=200,IM=201,FM=202,zM=203,yd=204,Ed=205,BM=206,HM=207,GM=208,VM=209,kM=210,XM=211,WM=212,qM=213,YM=214,Md=0,Td=1,bd=2,Ws=3,Ad=4,Rd=5,Cd=6,wd=7,$v=0,jM=1,ZM=2,Zi=0,ex=1,tx=2,nx=3,ix=4,ax=5,rx=6,sx=7,ox=300,Hr=301,qs=302,Dd=303,Ud=304,Sc=306,Ld=1e3,Ma=1001,Nd=1002,gn=1003,KM=1004,Iu=1005,Fn=1006,Fh=1007,zr=1008,Ei=1009,lx=1010,ux=1011,ul=1012,Ep=1013,Qi=1014,qi=1015,oi=1016,Mp=1017,Tp=1018,cl=1020,cx=35902,fx=35899,hx=1021,dx=1022,Pi=1023,Ra=1026,Br=1027,px=1028,bp=1029,Ys=1030,Ap=1031,Rp=1033,oc=33776,lc=33777,uc=33778,cc=33779,Od=35840,Pd=35841,Id=35842,Fd=35843,zd=36196,Bd=37492,Hd=37496,Gd=37488,Vd=37489,kd=37490,Xd=37491,Wd=37808,qd=37809,Yd=37810,jd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,ep=37817,tp=37818,np=37819,ip=37820,ap=37821,rp=36492,sp=36494,op=36495,lp=36283,up=36284,cp=36285,fp=36286,QM=3200,JM=0,$M=1,ur="",Si="srgb",js="srgb-linear",mc="linear",Ht="srgb",As=7680,O0=519,eT=512,tT=513,nT=514,Cp=515,iT=516,aT=517,wp=518,rT=519,P0=35044,I0="300 es",Yi=2e3,_c=2001;function mx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sT(){const s=fl("canvas");return s.style.display="block",s}const F0={};function z0(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function wt(...s){const e="THREE."+s.shift();console.error(e,...s)}function hl(...s){const e=s.join(" ");e in F0||(F0[e]=!0,st(...s))}function oT(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,hp=180/Math.PI;function vl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function lT(s,e){return(s%e+e)%e}function zh(s,e,i){return(1-i)*s+i*e}function Jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uT={DEG2RAD:fc};class et{constructor(e=0,i=0){et.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3],x=u[f+0],E=u[f+1],T=u[f+2],b=u[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d>=1){e[i+0]=x,e[i+1]=E,e[i+2]=T,e[i+3]=b;return}if(_!==b||m!==x||p!==E||g!==T){let y=m*x+p*E+g*T+_*b;y<0&&(x=-x,E=-E,T=-T,b=-b,y=-y);let v=1-d;if(y<.9995){const w=Math.acos(y),U=Math.sin(w);v=Math.sin(v*w)/U,d=Math.sin(d*w)/U,m=m*v+x*d,p=p*v+E*d,g=g*v+T*d,_=_*v+b*d}else{m=m*v+x*d,p=p*v+E*d,g=g*v+T*d,_=_*v+b*d;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=u[f],x=u[f+1],E=u[f+2],T=u[f+3];return e[i]=d*T+g*_+m*E-p*x,e[i+1]=m*T+g*x+p*_-d*E,e[i+2]=p*T+g*E+d*x-m*_,e[i+3]=g*T-d*_-m*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(u/2),x=m(r/2),E=m(l/2),T=m(u/2);switch(f){case"XYZ":this._x=x*g*_+p*E*T,this._y=p*E*_-x*g*T,this._z=p*g*T+x*E*_,this._w=p*g*_-x*E*T;break;case"YXZ":this._x=x*g*_+p*E*T,this._y=p*E*_-x*g*T,this._z=p*g*T-x*E*_,this._w=p*g*_+x*E*T;break;case"ZXY":this._x=x*g*_-p*E*T,this._y=p*E*_+x*g*T,this._z=p*g*T+x*E*_,this._w=p*g*_-x*E*T;break;case"ZYX":this._x=x*g*_-p*E*T,this._y=p*E*_+x*g*T,this._z=p*g*T-x*E*_,this._w=p*g*_+x*E*T;break;case"YZX":this._x=x*g*_+p*E*T,this._y=p*E*_+x*g*T,this._z=p*g*T-x*E*_,this._w=p*g*_-x*E*T;break;case"XZY":this._x=x*g*_-p*E*T,this._y=p*E*_-x*g*T,this._z=p*g*T+x*E*_,this._w=p*g*_+x*E*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+d+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(f-l)*E}else if(r>d&&r>_){const E=2*Math.sqrt(1+r-d-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(u+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-r-_);this._w=(u-p)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-r-d);this._w=(f-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-r*p,this._z=u*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(B0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),g=2*(d*i-u*l),_=2*(u*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-u*_,this.z=l+m*_+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new K,B0=new Gr;class lt{constructor(e,i,r,l,u,f,d,m,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p)}set(e,i,r,l,u,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],E=r[5],T=r[8],b=l[0],y=l[3],v=l[6],w=l[1],U=l[4],O=l[7],P=l[2],z=l[5],I=l[8];return u[0]=f*b+d*w+m*P,u[3]=f*y+d*U+m*z,u[6]=f*v+d*O+m*I,u[1]=p*b+g*w+_*P,u[4]=p*y+g*U+_*z,u[7]=p*v+g*O+_*I,u[2]=x*b+E*w+T*P,u[5]=x*y+E*U+T*z,u[8]=x*v+E*O+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-r*u*g+r*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*f-d*p,x=d*m-g*u,E=p*u-f*m,T=i*_+r*x+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(l*p-g*r)*b,e[2]=(d*r-l*f)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-d*i)*b,e[6]=E*b,e[7]=(r*m-p*i)*b,e[8]=(f*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hh.makeScale(e,i)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new lt,H0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cT(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ht&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ur?mc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const At=cT();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class fT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=fl("canvas")),Rs.width=e.width,Rs.height=e.height;const l=Rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ba(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hT=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Gh(l[f].image)):u.push(Gh(l[f]))}else u=Gh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let dT=0;const Vh=new K;class zn extends kr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Ma,l=Ma,u=Fn,f=zr,d=Pi,m=Ei,p=zn.DEFAULT_ANISOTROPY,g=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=vl(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ox;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],E=m[5],T=m[9],b=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,O=(E+1)/2,P=(v+1)/2,z=(g+x)/4,I=(_+b)/4,Z=(T+y)/4;return U>O&&U>P?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=z/r,u=I/r):O>P?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=z/l,u=Z/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=I/u,l=Z/u),this.set(r,l,u,i),this}let w=Math.sqrt((y-T)*(y-T)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(w)<.001&&(w=1),this.x=(y-T)/w,this.y=(_-b)/w,this.z=(x-g)/w,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pT extends kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new zn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends pT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _x extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mT extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(u,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fu.copy(r.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),zu.subVectors(this.max,$o),Cs.subVectors(e.a,$o),ws.subVectors(e.b,$o),Ds.subVectors(e.c,$o),nr.subVectors(ws,Cs),ir.subVectors(Ds,ws),Dr.subVectors(Cs,Ds);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Dr.z,Dr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Dr.z,0,-Dr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Dr.y,Dr.x,0];return!kh(i,Cs,ws,Ds,zu)||(i=[1,0,0,0,1,0,0,0,1],!kh(i,Cs,ws,Ds,zu))?!1:(Bu.crossVectors(nr,ir),i=[Bu.x,Bu.y,Bu.z],kh(i,Cs,ws,Ds,zu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new K,new K,new K,new K,new K,new K,new K,new K],Ui=new K,Fu=new xl,Cs=new K,ws=new K,Ds=new K,nr=new K,ir=new K,Dr=new K,$o=new K,zu=new K,Bu=new K,Ur=new K;function kh(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Ur.fromArray(s,u);const d=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),g=r.dot(Ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const _T=new xl,el=new K,Xh=new K;class Up{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):_T.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(el,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Xh)),this.expandByPoint(el.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new K,Wh=new K,Hu=new K,ar=new K,qh=new K,Gu=new K,Yh=new K;class gx{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wh.copy(e).add(i).multiplyScalar(.5),Hu.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Wh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Hu),d=ar.dot(this.direction),m=-ar.dot(Hu),p=ar.lengthSq(),g=Math.abs(1-f*f);let _,x,E,T;if(g>0)if(_=f*m-d,x=f*d-m,T=u*g,_>=0)if(x>=-T)if(x<=T){const b=1/g;_*=b,x*=b,E=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=u,_=Math.max(0,-(f*x+d)),E=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(f*x+d)),E=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+x*(x+2*m)+p);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),E=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Wh).addScaledVector(Hu,x),E}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,u){qh.subVectors(i,e),Gu.subVectors(r,e),Yh.crossVectors(qh,Gu);let f=this.direction.dot(Yh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ar.subVectors(this.origin,e);const m=d*this.direction.dot(Gu.crossVectors(ar,Gu));if(m<0)return null;const p=d*this.direction.dot(qh.cross(ar));if(p<0||m+p>f)return null;const g=-d*ar.dot(Yh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,r,l,u,f,d,m,p,g,_,x,E,T,b,y){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p,g,_,x,E,T,b,y)}set(e,i,r,l,u,f,d,m,p,g,_,x,E,T,b,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=E,v[7]=T,v[11]=b,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Us.setFromMatrixColumn(e,0).length(),u=1/Us.setFromMatrixColumn(e,1).length(),f=1/Us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,E=f*_,T=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+T*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=T+E*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,E=m*_,T=p*g,b=p*_;i[0]=x+b*d,i[4]=T*d-E,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=E*d-T,i[6]=b+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,E=m*_,T=p*g,b=p*_;i[0]=x-b*d,i[4]=-f*_,i[8]=T+E*d,i[1]=E+T*d,i[5]=f*g,i[9]=b-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,E=f*_,T=d*g,b=d*_;i[0]=m*g,i[4]=T*p-E,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=E*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,E=f*p,T=d*m,b=d*p;i[0]=m*g,i[4]=b-x*_,i[8]=T*_+E,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*_+T,i[10]=x-b*_}else if(e.order==="XZY"){const x=f*m,E=f*p,T=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=f*g,i[9]=E*_-T,i[2]=T*_-E,i[6]=d*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gT,e,vT)}lookAt(e,i,r){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),rr.crossVectors(r,ri),rr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),rr.crossVectors(r,ri)),rr.normalize(),Vu.crossVectors(ri,rr),l[0]=rr.x,l[4]=Vu.x,l[8]=ri.x,l[1]=rr.y,l[5]=Vu.y,l[9]=ri.y,l[2]=rr.z,l[6]=Vu.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],E=r[13],T=r[2],b=r[6],y=r[10],v=r[14],w=r[3],U=r[7],O=r[11],P=r[15],z=l[0],I=l[4],Z=l[8],C=l[12],D=l[1],k=l[5],re=l[9],ae=l[13],pe=l[2],ce=l[6],F=l[10],H=l[14],te=l[3],ye=l[7],Se=l[11],N=l[15];return u[0]=f*z+d*D+m*pe+p*te,u[4]=f*I+d*k+m*ce+p*ye,u[8]=f*Z+d*re+m*F+p*Se,u[12]=f*C+d*ae+m*H+p*N,u[1]=g*z+_*D+x*pe+E*te,u[5]=g*I+_*k+x*ce+E*ye,u[9]=g*Z+_*re+x*F+E*Se,u[13]=g*C+_*ae+x*H+E*N,u[2]=T*z+b*D+y*pe+v*te,u[6]=T*I+b*k+y*ce+v*ye,u[10]=T*Z+b*re+y*F+v*Se,u[14]=T*C+b*ae+y*H+v*N,u[3]=w*z+U*D+O*pe+P*te,u[7]=w*I+U*k+O*ce+P*ye,u[11]=w*Z+U*re+O*F+P*Se,u[15]=w*C+U*ae+O*H+P*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],E=e[14],T=e[3],b=e[7],y=e[11],v=e[15],w=m*E-p*x,U=d*E-p*_,O=d*x-m*_,P=f*E-p*g,z=f*x-m*g,I=f*_-d*g;return i*(b*w-y*U+v*O)-r*(T*w-y*P+v*z)+l*(T*U-b*P+v*I)-u*(T*O-b*z+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],E=e[11],T=e[12],b=e[13],y=e[14],v=e[15],w=_*y*p-b*x*p+b*m*E-d*y*E-_*m*v+d*x*v,U=T*x*p-g*y*p-T*m*E+f*y*E+g*m*v-f*x*v,O=g*b*p-T*_*p+T*d*E-f*b*E-g*d*v+f*_*v,P=T*_*m-g*b*m-T*d*x+f*b*x+g*d*y-f*_*y,z=i*w+r*U+l*O+u*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=w*I,e[1]=(b*x*u-_*y*u-b*l*E+r*y*E+_*l*v-r*x*v)*I,e[2]=(d*y*u-b*m*u+b*l*p-r*y*p-d*l*v+r*m*v)*I,e[3]=(_*m*u-d*x*u-_*l*p+r*x*p+d*l*E-r*m*E)*I,e[4]=U*I,e[5]=(g*y*u-T*x*u+T*l*E-i*y*E-g*l*v+i*x*v)*I,e[6]=(T*m*u-f*y*u-T*l*p+i*y*p+f*l*v-i*m*v)*I,e[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*E+i*m*E)*I,e[8]=O*I,e[9]=(T*_*u-g*b*u-T*r*E+i*b*E+g*r*v-i*_*v)*I,e[10]=(f*b*u-T*d*u+T*r*p-i*b*p-f*r*v+i*d*v)*I,e[11]=(g*d*u-f*_*u-g*r*p+i*_*p+f*r*E-i*d*E)*I,e[12]=P*I,e[13]=(g*b*l-T*_*l+T*r*x-i*b*x-g*r*y+i*_*y)*I,e[14]=(T*d*l-f*b*l-T*r*m+i*b*m+f*r*y-i*d*y)*I,e[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,g=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,_=d+d,x=u*p,E=u*g,T=u*_,b=f*g,y=f*_,v=d*_,w=m*p,U=m*g,O=m*_,P=r.x,z=r.y,I=r.z;return l[0]=(1-(b+v))*P,l[1]=(E+O)*P,l[2]=(T-U)*P,l[3]=0,l[4]=(E-O)*z,l[5]=(1-(x+v))*z,l[6]=(y+w)*z,l[7]=0,l[8]=(T+U)*I,l[9]=(y-w)*I,l[10]=(1-(x+b))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=Us.set(l[0],l[1],l[2]).length();const f=Us.set(l[4],l[5],l[6]).length(),d=Us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Li.copy(this);const p=1/u,g=1/f,_=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),r.x=u,r.y=f,r.z=d,this}makePerspective(e,i,r,l,u,f,d=Yi,m=!1){const p=this.elements,g=2*u/(i-e),_=2*u/(r-l),x=(i+e)/(i-e),E=(r+l)/(r-l);let T,b;if(m)T=u/(f-u),b=f*u/(f-u);else if(d===Yi)T=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(d===_c)T=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,d=Yi,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-l),x=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,b;if(m)T=1/(f-u),b=f/(f-u);else if(d===Yi)T=-2/(f-u),b=-(f+u)/(f-u);else if(d===_c)T=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Us=new K,Li=new Jt,gT=new K(0,0,0),vT=new K(1,1,1),rr=new K,Vu=new K,ri=new K,V0=new Jt,k0=new Gr;class Ca{constructor(e=0,i=0,r=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return V0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xT=0;const X0=new K,Ls=new Gr,xa=new Jt,ku=new K,tl=new K,ST=new K,yT=new Gr,W0=new K(1,0,0),q0=new K(0,1,0),Y0=new K(0,0,1),j0={type:"added"},ET={type:"removed"},Ns={type:"childadded",child:null},jh={type:"childremoved",child:null};class li extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new K,i=new Ca,r=new Gr,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new lt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ls.setFromAxisAngle(e,i),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,i){return Ls.setFromAxisAngle(e,i),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(W0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,i){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(W0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ku.copy(e):ku.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(tl,ku,this.up):xa.lookAt(ku,tl,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Ls.setFromRotationMatrix(xa),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ET),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,ST),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,yT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),E=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}li.DEFAULT_UP=new K(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new K,Sa=new K,Zh=new K,ya=new K,Os=new K,Ps=new K,Z0=new K,Kh=new K,Qh=new K,Jh=new K,$h=new on,ed=new on,td=new on;class Oi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ni.subVectors(e,i),l.cross(Ni);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ni.subVectors(l,i),Sa.subVectors(r,i),Zh.subVectors(e,i);const f=Ni.dot(Ni),d=Ni.dot(Sa),m=Ni.dot(Zh),p=Sa.dot(Sa),g=Sa.dot(Zh),_=f*p-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,E=(p*m-d*g)*x,T=(f*g-d*m)*x;return u.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,r,l,u,f,d,m){return this.getBarycoord(e,i,r,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(d,ya.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return $h.setScalar(0),ed.setScalar(0),td.setScalar(0),$h.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),td.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector($h,u.x),f.addScaledVector(ed,u.y),f.addScaledVector(td,u.z),f}static isFrontFacing(e,i,r,l){return Ni.subVectors(r,i),Sa.subVectors(e,i),Ni.cross(Sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ni.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,d;Os.subVectors(l,r),Ps.subVectors(u,r),Kh.subVectors(e,r);const m=Os.dot(Kh),p=Ps.dot(Kh);if(m<=0&&p<=0)return i.copy(r);Qh.subVectors(e,l);const g=Os.dot(Qh),_=Ps.dot(Qh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Os,f);Jh.subVectors(e,u);const E=Os.dot(Jh),T=Ps.dot(Jh);if(T>=0&&E<=T)return i.copy(u);const b=E*p-m*T;if(b<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(Ps,d);const y=g*T-E*_;if(y<=0&&_-g>=0&&E-T>=0)return Z0.subVectors(u,l),d=(_-g)/(_-g+(E-T)),i.copy(l).addScaledVector(Z0,d);const v=1/(y+b+x);return f=b*v,d=x*v,i.copy(r).addScaledVector(Os,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function nd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=lT(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=nd(f,u,e+1/3),this.g=nd(f,u,e),this.b=nd(f,u,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=xx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return At.workingToColorSpace(In.copy(this),e),Math.round(xt(In.r*255,0,255))*65536+Math.round(xt(In.g*255,0,255))*256+Math.round(xt(In.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,u=In.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Si){At.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Xu);const r=zh(sr.h,Xu.h,i),l=zh(sr.s,Xu.s,i),u=zh(sr.l,Xu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new pt;pt.NAMES=xx;let MT=0;class yc extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=vl(),this.name="",this.type="Material",this.blending=ks,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Ed,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lp extends yc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new K,Wu=new et;let TT=0;class Ki{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=P0,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Wu.fromBufferAttribute(this,i),Wu.applyMatrix3(e),this.setXY(i,Wu.x,Wu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Jo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),u=jn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class Sx extends Ki{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class yx extends Ki{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ii extends Ki{constructor(e,i,r){super(new Float32Array(e),i,r)}}let bT=0;const xi=new Jt,id=new li,Is=new K,si=new xl,nl=new xl,yn=new K;class Ji extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?yx:Sx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ii(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];si.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(si.min,nl.min),si.expandByPoint(yn),yn.addVectors(si.max,nl.max),si.expandByPoint(yn)):(si.expandByPoint(nl.min),si.expandByPoint(nl.max))}si.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)yn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Is.fromBufferAttribute(e,p),yn.add(Is)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new K,m[Z]=new K;const p=new K,g=new K,_=new K,x=new et,E=new et,T=new et,b=new K,y=new K;function v(Z,C,D){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),x.fromBufferAttribute(u,Z),E.fromBufferAttribute(u,C),T.fromBufferAttribute(u,D),g.sub(p),_.sub(p),E.sub(x),T.sub(x);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(g,-T.x).multiplyScalar(k),d[Z].add(b),d[C].add(b),d[D].add(b),m[Z].add(y),m[C].add(y),m[D].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let Z=0,C=w.length;Z<C;++Z){const D=w[Z],k=D.start,re=D.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)v(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const U=new K,O=new K,P=new K,z=new K;function I(Z){P.fromBufferAttribute(l,Z),z.copy(P);const C=d[Z];U.copy(C),U.sub(P.multiplyScalar(P.dot(C))).normalize(),O.crossVectors(z,C);const k=O.dot(m[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,k)}for(let Z=0,C=w.length;Z<C;++Z){const D=w[Z],k=D.start,re=D.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)I(e.getX(ae+0)),I(e.getX(ae+1)),I(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new K,u=new K,f=new K,d=new K,m=new K,p=new K,g=new K,_=new K;if(e)for(let x=0,E=e.count;x<E;x+=3){const T=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let E=0,T=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?E=m[b]*d.data.stride+d.offset:E=m[b]*g;for(let v=0;v<g;v++)x[T++]=p[E++]}return new Ki(x,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],E=e(x,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const E=p[_];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let x=0,E=_.length;x<E;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K0=new Jt,Lr=new gx,qu=new Up,Q0=new K,Yu=new K,ju=new K,Zu=new K,ad=new K,Ku=new K,J0=new K,Qu=new K;class zi extends li{constructor(e=new Ji,i=new Lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Ku.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(ad.fromBufferAttribute(_,e),f?Ku.addScaledVector(ad,g):Ku.addScaledVector(ad.sub(i),g))}i.add(Ku)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qu.copy(r.boundingSphere),qu.applyMatrix4(u),Lr.copy(e.ray).recast(e.near),!(qu.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(qu,Q0)===null||Lr.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(K0.copy(u).invert(),Lr.copy(e.ray).applyMatrix4(K0),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const y=x[T],v=f[y.materialIndex],w=Math.max(y.start,E.start),U=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let O=w,P=U;O<P;O+=3){const z=d.getX(O),I=d.getX(O+1),Z=d.getX(O+2);l=Ju(this,v,e,r,p,g,_,z,I,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(d.count,E.start+E.count);for(let y=T,v=b;y<v;y+=3){const w=d.getX(y),U=d.getX(y+1),O=d.getX(y+2);l=Ju(this,f,e,r,p,g,_,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const y=x[T],v=f[y.materialIndex],w=Math.max(y.start,E.start),U=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let O=w,P=U;O<P;O+=3){const z=O,I=O+1,Z=O+2;l=Ju(this,v,e,r,p,g,_,z,I,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let y=T,v=b;y<v;y+=3){const w=y,U=y+1,O=y+2;l=Ju(this,f,e,r,p,g,_,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function AT(s,e,i,r,l,u,f,d){let m;if(e.side===Kn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,e.side===fr,d),m===null)return null;Qu.copy(d),Qu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Qu);return p<i.near||p>i.far?null:{distance:p,point:Qu.clone(),object:s}}function Ju(s,e,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Yu),s.getVertexPosition(m,ju),s.getVertexPosition(p,Zu);const g=AT(s,e,i,r,Yu,ju,Zu,J0);if(g){const _=new K;Oi.getBarycoord(J0,Yu,ju,Zu,_),l&&(g.uv=Oi.getInterpolatedAttribute(l,d,m,p,_,new et)),u&&(g.uv1=Oi.getInterpolatedAttribute(u,d,m,p,_,new et)),f&&(g.normal=Oi.getInterpolatedAttribute(f,d,m,p,_,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};Oi.getNormal(Yu,ju,Zu,x.normal),g.face=x,g.barycoord=_}return g}class Sl extends Ji{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,E=0;T("z","y","x",-1,-1,r,i,e,f,u,0),T("z","y","x",1,-1,r,i,-e,f,u,1),T("x","z","y",1,1,e,r,i,l,f,2),T("x","z","y",1,-1,e,r,-i,l,f,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(_,2));function T(b,y,v,w,U,O,P,z,I,Z,C){const D=O/I,k=P/Z,re=O/2,ae=P/2,pe=z/2,ce=I+1,F=Z+1;let H=0,te=0;const ye=new K;for(let Se=0;Se<F;Se++){const N=Se*k-ae;for(let X=0;X<ce;X++){const le=X*D-re;ye[b]=le*w,ye[y]=N*U,ye[v]=pe,p.push(ye.x,ye.y,ye.z),ye[b]=0,ye[y]=0,ye[v]=z>0?1:-1,g.push(ye.x,ye.y,ye.z),_.push(X/I),_.push(1-Se/Z),H+=1}}for(let Se=0;Se<Z;Se++)for(let N=0;N<I;N++){const X=x+N+ce*Se,le=x+N+ce*(Se+1),Te=x+(N+1)+ce*(Se+1),Le=x+(N+1)+ce*Se;m.push(X,le,Le),m.push(le,Te,Le),te+=6}d.addGroup(E,te,C),E+=te,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(s){const e={};for(let i=0;i<s.length;i++){const r=Zs(s[i]);for(const l in r)e[l]=r[l]}return e}function RT(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const gc={clone:Zs,merge:Hn};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends yc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=RT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Mx extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new K,$0=new et,ev=new et;class yi extends Mx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,i){return this.getViewBounds(e,$0,ev),i.subVectors(ev,$0)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Fs=-90,zs=1;class DT extends li{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Fs,zs,e,i);l.layers=this.layers,this.add(l);const u=new yi(Fs,zs,e,i);u.layers=this.layers,this.add(u);const f=new yi(Fs,zs,e,i);f.layers=this.layers,this.add(f);const d=new yi(Fs,zs,e,i);d.layers=this.layers,this.add(d);const m=new yi(Fs,zs,e,i);m.layers=this.layers,this.add(m);const p=new yi(Fs,zs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_c)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Tx extends zn{constructor(e=[],i=Hr,r,l,u,f,d,m,p,g){super(e,i,r,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends Qn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Sl(5,5,5),u=new Ln({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:ji});u.uniforms.tEquirect.value=i;const f=new zi(l,u),d=i.minFilter;return i.minFilter===zr&&(i.minFilter=Fn),new DT(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class $u extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,r),v=this._getHandJoint(p,b);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),E=.02,T=.005;p.inputState.pinching&&x>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new $u;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class LT extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class NT extends zn{constructor(e=null,i=1,r=1,l,u,f,d,m,p=gn,g=gn,_,x){super(null,f,d,m,p,g,l,u,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new K,OT=new K,PT=new lt;class lr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sd.subVectors(r,i).cross(OT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||PT.getNormalMatrix(e),l=this.coplanarPoint(sd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Up,IT=new et(.5,.5),ec=new K;class Ax{constructor(e=new lr,i=new lr,r=new lr,l=new lr,u=new lr,f=new lr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Yi,r=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],x=u[6],E=u[7],T=u[8],b=u[9],y=u[10],v=u[11],w=u[12],U=u[13],O=u[14],P=u[15];if(l[0].setComponents(p-f,E-g,v-T,P-w).normalize(),l[1].setComponents(p+f,E+g,v+T,P+w).normalize(),l[2].setComponents(p+d,E+_,v+b,P+U).normalize(),l[3].setComponents(p-d,E-_,v-b,P-U).normalize(),r)l[4].setComponents(m,x,y,O).normalize(),l[5].setComponents(p-m,E-x,v-y,P-O).normalize();else if(l[4].setComponents(p-m,E-x,v-y,P-O).normalize(),i===Yi)l[5].setComponents(p+m,E+x,v+y,P+O).normalize();else if(i===_c)l[5].setComponents(m,x,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=IT.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ec.x=l.normal.x>0?e.max.x:e.min.x,ec.y=l.normal.y>0?e.max.y:e.min.y,ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends zn{constructor(e,i,r=Qi,l,u,f,d=gn,m=gn,p,g=Ra,_=1){if(g!==Ra&&g!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,u,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class FT extends dl{constructor(e,i=Qi,r=Hr,l,u,f=gn,d=gn,m,p=Ra){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,l,u,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends Ji{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=e/d,x=i/m,E=[],T=[],b=[],y=[];for(let v=0;v<g;v++){const w=v*x-f;for(let U=0;U<p;U++){const O=U*_-u;T.push(O,-w,0),b.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<d;w++){const U=w+p*v,O=w+p*(v+1),P=w+1+p*(v+1),z=w+1+p*v;E.push(U,O,z),E.push(O,P,z)}this.setIndex(E),this.setAttribute("position",new Ii(T,3)),this.setAttribute("normal",new Ii(b,3)),this.setAttribute("uv",new Ii(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class zT extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BT extends yc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends yc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const od={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class GT{constructor(e,i,r){const l=this;let u=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const E=p[_],T=p[_+1];if(E.global&&(E.lastIndex=0),E.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VT=new GT;class Np{constructor(e){this.manager=e!==void 0?e:VT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Np.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bs=new WeakMap;class kT extends Np{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=od.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(f),u.manager.itemEnd(e)},0);else{let _=Bs.get(f);_===void 0&&(_=[],Bs.set(f,_)),_.push({onLoad:i,onError:l})}return f}const d=fl("img");function m(){g(),i&&i(this);const _=Bs.get(this)||[];for(let x=0;x<_.length;x++){const E=_[x];E.onLoad&&E.onLoad(this)}Bs.delete(this),u.manager.itemEnd(e)}function p(_){g(),l&&l(_),od.remove(`image:${e}`);const x=Bs.get(this)||[];for(let E=0;E<x.length;E++){const T=x[E];T.onError&&T.onError(_)}Bs.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),od.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class XT extends Np{constructor(e){super(e)}load(e,i,r,l){const u=new zn,f=new kT(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Op extends Mx{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WT extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class tv{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class YT extends kr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nv(s,e,i,r){const l=jT(r);switch(i){case hx:return s*e;case px:return s*e/l.components*l.byteLength;case bp:return s*e/l.components*l.byteLength;case Ys:return s*e*2/l.components*l.byteLength;case Ap:return s*e*2/l.components*l.byteLength;case dx:return s*e*3/l.components*l.byteLength;case Pi:return s*e*4/l.components*l.byteLength;case Rp:return s*e*4/l.components*l.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case Id:return Math.max(s,8)*Math.max(e,8)/2;case zd:case Bd:case Gd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hd:case kd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ep:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case np:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rp:case sp:case op:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lp:case up:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cp:case fp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jT(s){switch(s){case Ei:case lx:return{byteLength:1,components:1};case ul:case ux:case oi:return{byteLength:2,components:1};case Mp:case Tp:return{byteLength:2,components:4};case Qi:case Ep:case qi:return{byteLength:4,components:1};case cx:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);function Cx(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function ZT(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((E,T)=>E.start-T.start);let x=0;for(let E=1;E<_.length;E++){const T=_[x],b=_[E];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++x,_[x]=b)}_.length=x+1;for(let E=0,T=_.length;E<T;E++){const b=_[E];s.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var KT=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ub=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
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
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
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
#endif`,jb=`uniform sampler2D dfgLUT;
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
}`,Zb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rA=`#if defined( USE_POINTS_UV )
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
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fA=`#ifdef USE_MORPHTARGETS
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
#endif`,hA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
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
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OA=`float getShadowMask() {
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
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IA=`#ifdef USE_SKINNING
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
#endif`,FA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
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
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,XA=`#ifdef USE_TRANSMISSION
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KA=`uniform sampler2D t2D;
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
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,d1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,_1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,E1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:KT,alphahash_pars_fragment:QT,alphamap_fragment:JT,alphamap_pars_fragment:$T,alphatest_fragment:eb,alphatest_pars_fragment:tb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:ab,batching_vertex:rb,begin_vertex:sb,beginnormal_vertex:ob,bsdfs:lb,iridescence_fragment:ub,bumpmap_pars_fragment:cb,clipping_planes_fragment:fb,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:db,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:_b,color_pars_vertex:gb,color_vertex:vb,common:xb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Mb,emissivemap_fragment:Tb,emissivemap_pars_fragment:bb,colorspace_fragment:Ab,colorspace_pars_fragment:Rb,envmap_fragment:Cb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Db,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:Vb,envmap_vertex:Lb,fog_vertex:Nb,fog_pars_vertex:Ob,fog_fragment:Pb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:zb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Hb,lights_pars_begin:Gb,lights_toon_fragment:kb,lights_toon_pars_fragment:Xb,lights_phong_fragment:Wb,lights_phong_pars_fragment:qb,lights_physical_fragment:Yb,lights_physical_pars_fragment:jb,lights_fragment_begin:Zb,lights_fragment_maps:Kb,lights_fragment_end:Qb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:tA,map_fragment:nA,map_pars_fragment:iA,map_particle_fragment:aA,map_particle_pars_fragment:rA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:oA,morphinstance_vertex:lA,morphcolor_vertex:uA,morphnormal_vertex:cA,morphtarget_pars_vertex:fA,morphtarget_vertex:hA,normal_fragment_begin:dA,normal_fragment_maps:pA,normal_pars_fragment:mA,normal_pars_vertex:_A,normal_vertex:gA,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:SA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:EA,opaque_fragment:MA,packing:TA,premultiplied_alpha_fragment:bA,project_vertex:AA,dithering_fragment:RA,dithering_pars_fragment:CA,roughnessmap_fragment:wA,roughnessmap_pars_fragment:DA,shadowmap_pars_fragment:UA,shadowmap_pars_vertex:LA,shadowmap_vertex:NA,shadowmask_pars_fragment:OA,skinbase_vertex:PA,skinning_pars_vertex:IA,skinning_vertex:FA,skinnormal_vertex:zA,specularmap_fragment:BA,specularmap_pars_fragment:HA,tonemapping_fragment:GA,tonemapping_pars_fragment:VA,transmission_fragment:kA,transmission_pars_fragment:XA,uv_pars_fragment:WA,uv_pars_vertex:qA,uv_vertex:YA,worldpos_vertex:jA,background_vert:ZA,background_frag:KA,backgroundCube_vert:QA,backgroundCube_frag:JA,cube_vert:$A,cube_frag:e1,depth_vert:t1,depth_frag:n1,distance_vert:i1,distance_frag:a1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:u1,meshbasic_frag:c1,meshlambert_vert:f1,meshlambert_frag:h1,meshmatcap_vert:d1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:_1,meshphong_vert:g1,meshphong_frag:v1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:y1,meshtoon_frag:E1,points_vert:M1,points_frag:T1,shadow_vert:b1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Pe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Hn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Hn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Hn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Hn([Pe.lights,Pe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const tc={r:0,b:0,g:0},Or=new Ca,w1=new Jt;function D1(s,e,i,r,l,u,f){const d=new pt(0);let m=u===!0?0:1,p,g,_=null,x=0,E=null;function T(U){let O=U.isScene===!0?U.background:null;return O&&O.isTexture&&(O=(U.backgroundBlurriness>0?i:e).get(O)),O}function b(U){let O=!1;const P=T(U);P===null?v(d,m):P&&P.isColor&&(v(P,1),O=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,O){const P=T(O);P&&(P.isCubeTexture||P.mapping===Sc)?(g===void 0&&(g=new zi(new Sl(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Zs(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Or.copy(O.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Or)),g.material.toneMapped=At.getTransfer(P.colorSpace)!==Ht,(_!==P||x!==P.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,E=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new zi(new yl(2,2),new Ln({name:"BackgroundMaterial",uniforms:Zs(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=At.getTransfer(P.colorSpace)!==Ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,E=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,O){U.getRGB(tc,Ex(s)),r.buffers.color.setClear(tc.r,tc.g,tc.b,O,f)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,O=1){d.set(U),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:b,addToRenderList:y,dispose:w}}function U1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function d(D,k,re,ae,pe){let ce=!1;const F=_(ae,re,k);u!==F&&(u=F,p(u.object)),ce=E(D,ae,re,pe),ce&&T(D,ae,re,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,O(D,k,re,ae),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,k,re){const ae=re.wireframe===!0;let pe=r[D.id];pe===void 0&&(pe={},r[D.id]=pe);let ce=pe[k.id];ce===void 0&&(ce={},pe[k.id]=ce);let F=ce[ae];return F===void 0&&(F=x(m()),ce[ae]=F),F}function x(D){const k=[],re=[],ae=[];for(let pe=0;pe<i;pe++)k[pe]=0,re[pe]=0,ae[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:ae,object:D,attributes:{},index:null}}function E(D,k,re,ae){const pe=u.attributes,ce=k.attributes;let F=0;const H=re.getAttributes();for(const te in H)if(H[te].location>=0){const Se=pe[te];let N=ce[te];if(N===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),Se===void 0||Se.attribute!==N||N&&Se.data!==N.data)return!0;F++}return u.attributesNum!==F||u.index!==ae}function T(D,k,re,ae){const pe={},ce=k.attributes;let F=0;const H=re.getAttributes();for(const te in H)if(H[te].location>=0){let Se=ce[te];Se===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const N={};N.attribute=Se,Se&&Se.data&&(N.data=Se.data),pe[te]=N,F++}u.attributes=pe,u.attributesNum=F,u.index=ae}function b(){const D=u.newAttributes;for(let k=0,re=D.length;k<re;k++)D[k]=0}function y(D){v(D,0)}function v(D,k){const re=u.newAttributes,ae=u.enabledAttributes,pe=u.attributeDivisors;re[D]=1,ae[D]===0&&(s.enableVertexAttribArray(D),ae[D]=1),pe[D]!==k&&(s.vertexAttribDivisor(D,k),pe[D]=k)}function w(){const D=u.newAttributes,k=u.enabledAttributes;for(let re=0,ae=k.length;re<ae;re++)k[re]!==D[re]&&(s.disableVertexAttribArray(re),k[re]=0)}function U(D,k,re,ae,pe,ce,F){F===!0?s.vertexAttribIPointer(D,k,re,pe,ce):s.vertexAttribPointer(D,k,re,ae,pe,ce)}function O(D,k,re,ae){b();const pe=ae.attributes,ce=re.getAttributes(),F=k.defaultAttributeValues;for(const H in ce){const te=ce[H];if(te.location>=0){let ye=pe[H];if(ye===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ye!==void 0){const Se=ye.normalized,N=ye.itemSize,X=e.get(ye);if(X===void 0)continue;const le=X.buffer,Te=X.type,Le=X.bytesPerElement,ee=Te===s.INT||Te===s.UNSIGNED_INT||ye.gpuType===Ep;if(ye.isInterleavedBufferAttribute){const fe=ye.data,De=fe.stride,ke=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<te.locationSize;He++)v(te.location+He,fe.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<te.locationSize;He++)y(te.location+He);s.bindBuffer(s.ARRAY_BUFFER,le);for(let He=0;He<te.locationSize;He++)U(te.location+He,N/te.locationSize,Te,Se,De*Le,(ke+N/te.locationSize*He)*Le,ee)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<te.locationSize;fe++)v(te.location+fe,ye.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<te.locationSize;fe++)y(te.location+fe);s.bindBuffer(s.ARRAY_BUFFER,le);for(let fe=0;fe<te.locationSize;fe++)U(te.location+fe,N/te.locationSize,Te,Se,N*Le,N/te.locationSize*fe*Le,ee)}}else if(F!==void 0){const Se=F[H];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(te.location,Se);break;case 3:s.vertexAttrib3fv(te.location,Se);break;case 4:s.vertexAttrib4fv(te.location,Se);break;default:s.vertexAttrib1fv(te.location,Se)}}}}w()}function P(){Z();for(const D in r){const k=r[D];for(const re in k){const ae=k[re];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete k[re]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const re in k){const ae=k[re];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete k[re]}delete r[D.id]}function I(D){for(const k in r){const re=r[k];if(re[D.id]===void 0)continue;const ae=re[D.id];for(const pe in ae)g(ae[pe].object),delete ae[pe];delete re[D.id]}}function Z(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:w}}function L1(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T];i.update(E,r,1)}function m(p,g,_,x){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)f(p[T],g[T],x[T]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let T=0;for(let b=0;b<_;b++)T+=g[b]*x[b];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function N1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Pi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ei&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qi&&!Z)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(st("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:O,maxSamples:P,samples:z}}function O1(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new lr,d=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||r!==0||l;return l=x,r=_.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,E){const T=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!l||T===null||T.length===0||u&&!y)u?g(null):p();else{const w=u?0:r,U=w*4;let O=v.clippingState||null;m.value=O,O=g(T,x,U,E);for(let P=0;P!==U;++P)O[P]=i[P];v.clippingState=O,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,E,T){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,T!==!0||y===null){const v=E+b*4,w=x.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,O=E;U!==b;++U,O+=4)f.copy(_[U]).applyMatrix4(w,d),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function P1(s){let e=new WeakMap;function i(f,d){return d===Dd?f.mapping=Hr:d===Ud&&(f.mapping=qs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Dd||d===Ud)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new bx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const cr=4,iv=[.125,.215,.35,.446,.526,.582],Fr=20,I1=256,il=new Op,av=new pt;let ld=null,ud=0,cd=0,fd=!1;const F1=new K;class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=F1}=u;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:oi,format:Pi,colorSpace:js,depthBuffer:!1},l=sv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(u)),this._blurMaterial=H1(u,e,i),this._ggxMaterial=B1(u,e,i)}return l}_compileMaterial(e){const i=new zi(new Ji,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,r,l,u){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor(av),_.toneMapping=Zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new Sl,new Lp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let v=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,v=!0):(y.color.copy(av),v=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):O===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const P=this._cubeSize;Hs(l,O*P,U>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(b,m),_.render(e,m)}_.toneMapping=E,_.autoClear=x,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Hr||e.mapping===qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Hs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,il)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,E=_*x,{_lodMax:T}=this,b=this._sizeLods[r],y=3*b*(r>T-cr?r-T+cr:0),v=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Hs(u,y,v,3*b,2*b),l.setRenderTarget(u),l.render(d,il),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Hs(e,y,v,3*b,2*b),l.setRenderTarget(e),l.render(d,il)}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Fr-1),b=u/T,y=isFinite(u)?1+Math.floor(g*b):Fr;y>Fr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fr}`);const v=[];let w=0;for(let I=0;I<Fr;++I){const Z=I/b,C=Math.exp(-Z*Z/2);v.push(C),I===0?w+=C:I<y&&(w+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=T,x.mipInt.value=U-r;const O=this._sizeLods[l],P=3*O*(l>U-cr?l-U+cr:0),z=4*(this._cubeSize-O);Hs(i,P,z,3*O,2*O),m.setRenderTarget(i),m.render(_,il)}}function z1(s){const e=[],i=[],r=[];let l=s;const u=s-cr+1+iv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-cr?m=iv[f-s+cr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,T=6,b=3,y=2,v=1,w=new Float32Array(b*T*E),U=new Float32Array(y*T*E),O=new Float32Array(v*T*E);for(let z=0;z<E;z++){const I=z%3*2/3-1,Z=z>2?0:-1,C=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];w.set(C,b*T*z),U.set(x,y*T*z);const D=[z,z,z,z,z,z];O.set(D,v*T*z)}const P=new Ji;P.setAttribute("position",new Ki(w,b)),P.setAttribute("uv",new Ki(U,y)),P.setAttribute("faceIndex",new Ki(O,v)),r.push(new zi(P,null)),l>cr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function sv(s,e,i){const r=new Qn(s,e,i);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function B1(s,e,i){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function H1(s,e,i){const r=new Float32Array(Fr),l=new K(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ov(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function lv(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function G1(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Dd||m===Ud,g=m===Hr||m===qs;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new rv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new rv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function V1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&hl("WebGLRenderer: "+r+" extension not supported."),l}}}function k1(s,e,i,r){const l={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const E=u.get(x);E&&(e.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER)}function p(_){const x=[],E=_.index,T=_.attributes.position;let b=0;if(E!==null){const w=E.array;b=E.version;for(let U=0,O=w.length;U<O;U+=3){const P=w[U+0],z=w[U+1],I=w[U+2];x.push(P,z,z,I,I,P)}}else if(T!==void 0){const w=T.array;b=T.version;for(let U=0,O=w.length/3-1;U<O;U+=3){const P=U+0,z=U+1,I=U+2;x.push(P,z,z,I,I,P)}}else return;const y=new(mx(x)?yx:Sx)(x,1);y.version=b;const v=u.get(_);v&&e.remove(v),u.set(_,y)}function g(_){const x=u.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function X1(s,e,i){let r;function l(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,E){s.drawElements(r,E,u,x*f),i.update(E,r,1)}function p(x,E,T){T!==0&&(s.drawElementsInstanced(r,E,u,x*f,T),i.update(E,r,T))}function g(x,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,x,0,T);let y=0;for(let v=0;v<T;v++)y+=E[v];i.update(y,r,1)}function _(x,E,T,b){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/f,E[v],b[v]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,x,0,b,0,T);let v=0;for(let w=0;w<T;w++)v+=E[w]*b[w];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function W1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function q1(s,e,i){const r=new WeakMap,l=new on;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let D=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var E=D;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let O=0;T===!0&&(O=1),b===!0&&(O=2),y===!0&&(O=3);let P=d.attributes.position.count*O,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*z*4*_),Z=new _x(I,P,z,_);Z.type=qi,Z.needsUpdate=!0;const C=O*4;for(let k=0;k<_;k++){const re=v[k],ae=w[k],pe=U[k],ce=P*z*4*k;for(let F=0;F<re.count;F++){const H=F*C;T===!0&&(l.fromBufferAttribute(re,F),I[ce+H+0]=l.x,I[ce+H+1]=l.y,I[ce+H+2]=l.z,I[ce+H+3]=0),b===!0&&(l.fromBufferAttribute(ae,F),I[ce+H+4]=l.x,I[ce+H+5]=l.y,I[ce+H+6]=l.z,I[ce+H+7]=0),y===!0&&(l.fromBufferAttribute(pe,F),I[ce+H+8]=l.x,I[ce+H+9]=l.y,I[ce+H+10]=l.z,I[ce+H+11]=pe.itemSize===4?l.w:1)}}x={count:_,texture:Z,size:new et(P,z)},r.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const b=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function Y1(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const j1={[ex]:"LINEAR_TONE_MAPPING",[tx]:"REINHARD_TONE_MAPPING",[nx]:"CINEON_TONE_MAPPING",[ix]:"ACES_FILMIC_TONE_MAPPING",[rx]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function Z1(s,e,i,r,l){const u=new Qn(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Qn(e,i,{type:oi,depthBuffer:!1,stencilBuffer:!1}),d=new Ji;d.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const m=new zT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new zi(d,m),g=new Op(-1,1,1,-1,0,1);let _=null,x=null,E=!1,T,b=null,y=[],v=!1;this.setSize=function(w,U){u.setSize(w,U),f.setSize(w,U);for(let O=0;O<y.length;O++){const P=y[O];P.setSize&&P.setSize(w,U)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const U=u.width,O=u.height;for(let P=0;P<y.length;P++){const z=y[P];z.setSize&&z.setSize(U,O)}},this.begin=function(w,U){if(E||w.toneMapping===Zi&&y.length===0)return!1;if(b=U,U!==null){const O=U.width,P=U.height;(u.width!==O||u.height!==P)&&this.setSize(O,P)}return v===!1&&w.setRenderTarget(u),T=w.toneMapping,w.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(w,U){w.toneMapping=T,E=!0;let O=u,P=f;for(let z=0;z<y.length;z++){const I=y[z];if(I.enabled!==!1&&(I.render(w,P,O,U),I.needsSwap!==!1)){const Z=O;O=P,P=Z}}if(_!==w.outputColorSpace||x!==w.toneMapping){_=w.outputColorSpace,x=w.toneMapping,m.defines={},At.getTransfer(_)===Ht&&(m.defines.SRGB_TRANSFER="");const z=j1[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(b),w.render(p,g),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const wx=new zn,dp=new dl(1,1),Dx=new _x,Ux=new mT,Lx=new Tx,uv=[],cv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function eo(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=uv[l];if(u===void 0&&(u=new Float32Array(l),uv[l]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(u,d)}return u}function vn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Mc(s,e){let i=cv[e];i===void 0&&(i=new Int32Array(e),cv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function K1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Q1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function J1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function $1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function eR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;dv.set(r),s.uniformMatrix2fv(this.addr,!1,dv),xn(i,r)}}function tR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;hv.set(r),s.uniformMatrix3fv(this.addr,!1,hv),xn(i,r)}}function nR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;fv.set(r),s.uniformMatrix4fv(this.addr,!1,fv),xn(i,r)}}function iR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function rR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function sR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function oR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function lR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function uR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function cR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function fR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(dp.compareFunction=i.isReversedDepthBuffer()?wp:Cp,u=dp):u=wx,i.setTexture2D(e||u,l)}function hR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ux,l)}function dR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Lx,l)}function pR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Dx,l)}function mR(s){switch(s){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return lR;case 36295:return uR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}function _R(s,e){s.uniform1fv(this.addr,e)}function gR(s,e){const i=eo(e,this.size,2);s.uniform2fv(this.addr,i)}function vR(s,e){const i=eo(e,this.size,3);s.uniform3fv(this.addr,i)}function xR(s,e){const i=eo(e,this.size,4);s.uniform4fv(this.addr,i)}function SR(s,e){const i=eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function yR(s,e){const i=eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function ER(s,e){const i=eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function MR(s,e){s.uniform1iv(this.addr,e)}function TR(s,e){s.uniform2iv(this.addr,e)}function bR(s,e){s.uniform3iv(this.addr,e)}function AR(s,e){s.uniform4iv(this.addr,e)}function RR(s,e){s.uniform1uiv(this.addr,e)}function CR(s,e){s.uniform2uiv(this.addr,e)}function wR(s,e){s.uniform3uiv(this.addr,e)}function DR(s,e){s.uniform4uiv(this.addr,e)}function UR(s,e,i){const r=this.cache,l=e.length,u=Mc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=dp:f=wx;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,u[d])}function LR(s,e,i){const r=this.cache,l=e.length,u=Mc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ux,u[f])}function NR(s,e,i){const r=this.cache,l=e.length,u=Mc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Lx,u[f])}function OR(s,e,i){const r=this.cache,l=e.length,u=Mc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Dx,u[f])}function PR(s){switch(s){case 5126:return _R;case 35664:return gR;case 35665:return vR;case 35666:return xR;case 35674:return SR;case 35675:return yR;case 35676:return ER;case 5124:case 35670:return MR;case 35667:case 35671:return TR;case 35668:case 35672:return bR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return CR;case 36295:return wR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return OR}}class IR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mR(i.type)}}class FR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PR(i.type)}}class zR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function pv(s,e){s.seq.push(e),s.map[e.id]=e}function BR(s,e,i){const r=s.name,l=r.length;for(hd.lastIndex=0;;){const u=hd.exec(r),f=hd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){pv(i,p===void 0?new IR(d,s,e):new FR(d,s,e));break}else{let _=i.map[d];_===void 0&&(_=new zR(d),pv(i,_)),i=_}}}class hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);BR(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function mv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const HR=37297;let GR=0;function VR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const _v=new lt;function kR(s){At._getMatrix(_v,At.workingColorSpace,s);const e=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case mc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+VR(s.getShaderSource(e),d)}else return u}function XR(s,e){const i=kR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WR={[ex]:"Linear",[tx]:"Reinhard",[nx]:"Cineon",[ix]:"ACESFilmic",[rx]:"AgX",[sx]:"Neutral",[ax]:"Custom"};function qR(s,e){const i=WR[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const nc=new K;function YR(){At.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),i=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function ZR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function KR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function sl(s){return s!==""}function vv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(s){return s.replace(QR,$R)}const JR=new Map;function $R(s,e){let i=dt[e];if(i===void 0){const r=JR.get(e);if(r!==void 0)i=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pp(i)}const eC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(s){return s.replace(eC,tC)}function tC(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function yv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nC={[sc]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function iC(s){return nC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aC={[Hr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function rC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sC={[qs]:"ENVMAP_MODE_REFRACTION"};function oC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lC={[$v]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[ZM]:"ENVMAP_BLENDING_ADD"};function uC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lC[s.combine]||"ENVMAP_BLENDING_NONE"}function cC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function fC(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=iC(i),p=rC(i),g=oC(i),_=uC(i),x=cC(i),E=jR(i),T=ZR(u),b=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(sl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(sl).join(`
`),v.length>0&&(v+=`
`)):(y=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),v=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Zi?qR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,XR("linearToOutputTexel",i.outputColorSpace),YR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=pp(f),f=vv(f,i),f=xv(f,i),d=pp(d),d=vv(d,i),d=xv(d,i),f=Sv(f),d=Sv(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===I0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=w+y+f,O=w+v+d,P=mv(l,l.VERTEX_SHADER,U),z=mv(l,l.FRAGMENT_SHADER,O);l.attachShader(b,P),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(k){if(s.debug.checkShaderErrors){const re=l.getProgramInfoLog(b)||"",ae=l.getShaderInfoLog(P)||"",pe=l.getShaderInfoLog(z)||"",ce=re.trim(),F=ae.trim(),H=pe.trim();let te=!0,ye=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,P,z);else{const Se=gv(l,P,"vertex"),N=gv(l,z,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ce+`
`+Se+`
`+N)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(F===""||H==="")&&(ye=!1);ye&&(k.diagnostics={runnable:te,programLog:ce,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(P),l.deleteShader(z),Z=new hc(l,b),C=KR(l,b)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,HR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=z,this}let hC=0;class dC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new pC(e),i.set(e,r)),r}}class pC{constructor(e){this.id=hC++,this.code=e,this.usedTimes=0}}function mC(s,e,i,r,l,u,f){const d=new vx,m=new dC,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,k,re,ae){const pe=re.fog,ce=ae.geometry,F=C.isMeshStandardMaterial?re.environment:null,H=(C.isMeshStandardMaterial?i:e).get(C.envMap||F),te=H&&H.mapping===Sc?H.image.height:null,ye=T[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=Se!==void 0?Se.length:0;let X=0;ce.morphAttributes.position!==void 0&&(X=1),ce.morphAttributes.normal!==void 0&&(X=2),ce.morphAttributes.color!==void 0&&(X=3);let le,Te,Le,ee;if(ye){const bt=Wi[ye];le=bt.vertexShader,Te=bt.fragmentShader}else le=C.vertexShader,Te=C.fragmentShader,m.update(C),Le=m.getVertexShaderID(C),ee=m.getFragmentShaderID(C);const fe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),ke=ae.isInstancedMesh===!0,He=ae.isBatchedMesh===!0,mt=!!C.map,en=!!C.matcap,St=!!H,_t=!!C.aoMap,Dt=!!C.lightMap,ut=!!C.bumpMap,tn=!!C.normalMap,G=!!C.displacementMap,Zt=!!C.emissiveMap,Tt=!!C.metalnessMap,Ot=!!C.roughnessMap,Ye=C.anisotropy>0,L=C.clearcoat>0,M=C.dispersion>0,q=C.iridescence>0,me=C.sheen>0,xe=C.transmission>0,ue=Ye&&!!C.anisotropyMap,Ze=L&&!!C.clearcoatMap,Ce=L&&!!C.clearcoatNormalMap,Xe=L&&!!C.clearcoatRoughnessMap,it=q&&!!C.iridescenceMap,Me=q&&!!C.iridescenceThicknessMap,be=me&&!!C.sheenColorMap,ze=me&&!!C.sheenRoughnessMap,Ie=!!C.specularMap,we=!!C.specularColorMap,ft=!!C.specularIntensityMap,W=xe&&!!C.transmissionMap,Ne=xe&&!!C.thicknessMap,Ae=!!C.gradientMap,Fe=!!C.alphaMap,Ee=C.alphaTest>0,ve=!!C.alphaHash,Re=!!C.extensions;let at=Zi;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(at=s.toneMapping);const It={shaderID:ye,shaderType:C.type,shaderName:C.name,vertexShader:le,fragmentShader:Te,defines:C.defines,customVertexShaderID:Le,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:He,batchingColor:He&&ae._colorsTexture!==null,instancing:ke,instancingColor:ke&&ae.instanceColor!==null,instancingMorph:ke&&ae.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:js,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:en,envMap:St,envMapMode:St&&H.mapping,envMapCubeUVHeight:te,aoMap:_t,lightMap:Dt,bumpMap:ut,normalMap:tn,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:tn&&C.normalMapType===$M,normalMapTangentSpace:tn&&C.normalMapType===JM,metalnessMap:Tt,roughnessMap:Ot,anisotropy:Ye,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:q,iridescenceMap:it,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:we,specularIntensityMap:ft,transmission:xe,transmissionMap:W,thicknessMap:Ne,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===ks&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ee,alphaHash:ve,combine:C.combine,mapUv:mt&&b(C.map.channel),aoMapUv:_t&&b(C.aoMap.channel),lightMapUv:Dt&&b(C.lightMap.channel),bumpMapUv:ut&&b(C.bumpMap.channel),normalMapUv:tn&&b(C.normalMap.channel),displacementMapUv:G&&b(C.displacementMap.channel),emissiveMapUv:Zt&&b(C.emissiveMap.channel),metalnessMapUv:Tt&&b(C.metalnessMap.channel),roughnessMapUv:Ot&&b(C.roughnessMap.channel),anisotropyMapUv:ue&&b(C.anisotropyMap.channel),clearcoatMapUv:Ze&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:be&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(C.sheenRoughnessMap.channel),specularMapUv:Ie&&b(C.specularMap.channel),specularColorMapUv:we&&b(C.specularColorMap.channel),specularIntensityMapUv:ft&&b(C.specularIntensityMap.channel),transmissionMapUv:W&&b(C.transmissionMap.channel),thicknessMapUv:Ne&&b(C.thicknessMap.channel),alphaMapUv:Fe&&b(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(tn||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ce.attributes.uv&&(mt||Fe),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:ae.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Zt&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ea,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Re&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&C.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(w(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function O(C){const D=T[C.type];let k;if(D){const re=Wi[D];k=gc.clone(re.uniforms)}else k=C.uniforms;return k}function P(C,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new fC(s,D,C,u),g.push(k),_.set(D,k)),k}function z(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:P,releaseProgram:z,releaseShaderCache:I,programs:g,dispose:Z}}function _C(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function gC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ev(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(_,x,E,T,b,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:E,groupOrder:T,renderOrder:_.renderOrder,z:b,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=E,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=b,v.group=y),e++,v}function d(_,x,E,T,b,y){const v=f(_,x,E,T,b,y);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,x,E,T,b,y){const v=f(_,x,E,T,b,y);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||gC),r.length>1&&r.sort(x||Ev),l.length>1&&l.sort(x||Ev)}function g(){for(let _=e,x=s.length;_<x;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function vC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new Mv,s.set(r,[f])):l>=u.length?(f=new Mv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function xC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new pt};break;case"SpotLight":i={position:new K,direction:new K,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":i={color:new pt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=i,i}}}function SC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let yC=0;function EC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function MC(s){const e=new xC,i=SC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,u=new Jt,f=new Jt;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let E=0,T=0,b=0,y=0,v=0,w=0,U=0,O=0,P=0,z=0,I=0;p.sort(EC);for(let C=0,D=p.length;C<D;C++){const k=p[C],re=k.color,ae=k.intensity,pe=k.distance;let ce=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ys?ce=k.shadow.map.texture:ce=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=re.r*ae,_+=re.g*ae,x+=re.b*ae;else if(k.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(k.sh.coefficients[F],ae);I++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[E]=te,r.directionalShadowMap[E]=ce,r.directionalShadowMatrix[E]=k.shadow.matrix,w++}r.directional[E]=F,E++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(re).multiplyScalar(ae),F.distance=pe,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,r.spot[b]=F;const H=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[b]=H.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[b]=te,r.spotShadowMap[b]=ce,O++}b++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(re).multiplyScalar(ae),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=F,y++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[T]=te,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=k.shadow.matrix,U++}r.point[T]=F,T++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(ae),F.groundColor.copy(k.groundColor).multiplyScalar(ae),r.hemi[v]=F,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==T||Z.spotLength!==b||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==w||Z.numPointShadows!==U||Z.numSpotShadows!==O||Z.numSpotMaps!==P||Z.numLightProbes!==I)&&(r.directional.length=E,r.spot.length=b,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=O+P-z,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=I,Z.directionalLength=E,Z.pointLength=T,Z.spotLength=b,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=w,Z.numPointShadows=U,Z.numSpotShadows=O,Z.numSpotMaps=P,Z.numLightProbes=I,r.version=yC++)}function m(p,g){let _=0,x=0,E=0,T=0,b=0;const y=g.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const U=p[v];if(U.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),_++}else if(U.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),E++}else if(U.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),f.identity(),u.copy(U.matrixWorld),u.premultiply(y),f.extractRotation(u),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const O=r.hemi[b];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:r}}function Tv(s){const e=new MC(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function TC(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new Tv(s),e.set(l,[d])):u>=f.length?(d=new Tv(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const bC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AC=`uniform sampler2D shadow_pass;
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
}`,RC=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],CC=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],bv=new Jt,al=new K,dd=new K;function wC(s,e,i){let r=new Ax;const l=new et,u=new et,f=new on,d=new BT,m=new HT,p={},g=i.maxTextureSize,_={[fr]:Kn,[Kn]:fr,[Ea]:Ea},x=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:bC,fragmentShader:AC}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ji;T.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new zi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let v=this.type;this.render=function(z,I,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===wM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=sc);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),re=s.state;re.setBlending(ji),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=v!==this.type;ae&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ce=>ce.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ce=z.length;pe<ce;pe++){const F=z[pe],H=F.shadow;if(H===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const te=H.getFrameExtents();if(l.multiply(te),u.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/te.x),l.x=u.x*te.x,H.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/te.y),l.y=u.y*te.y,H.mapSize.y=u.y)),H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rl){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qn(l.x,l.y,{format:Ys,type:oi,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new dl(l.x,l.y,qi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn}else{F.isPointLight?(H.map=new bx(l.x),H.map.depthTexture=new FT(l.x,Qi)):(H.map=new Qn(l.x,l.y),H.map.depthTexture=new dl(l.x,l.y,Qi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ra;const Se=s.state.buffers.depth.getReversed();this.type===sc?(H.map.depthTexture.compareFunction=Se?wp:Cp,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn)}H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ye;Se++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(Se);f.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),re.viewport(f)}if(F.isPointLight){const N=H.camera,X=H.matrix,le=F.distance||N.far;le!==N.far&&(N.far=le,N.updateProjectionMatrix()),al.setFromMatrixPosition(F.matrixWorld),N.position.copy(al),dd.copy(N.position),dd.add(RC[Se]),N.up.copy(CC[Se]),N.lookAt(dd),N.updateMatrixWorld(),X.makeTranslation(-al.x,-al.y,-al.z),bv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(bv,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),O(I,Z,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===rl&&w(H,Z),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,k)};function w(z,I){const Z=e.update(b);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qn(l.x,l.y,{format:Ys,type:oi})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(I,null,Z,x,b,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(I,null,Z,E,b,null)}function U(z,I,Z,C){let D=null;const k=Z.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)D=k;else if(D=Z.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const re=D.uuid,ae=I.uuid;let pe=p[re];pe===void 0&&(pe={},p[re]=pe);let ce=pe[ae];ce===void 0&&(ce=D.clone(),pe[ae]=ce,I.addEventListener("dispose",P)),D=ce}if(D.visible=I.visible,D.wireframe=I.wireframe,C===rl?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:_[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const re=s.properties.get(D);re.light=Z}return D}function O(z,I,Z,C,D){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===rl)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,z.matrixWorld);const ae=e.update(z),pe=z.material;if(Array.isArray(pe)){const ce=ae.groups;for(let F=0,H=ce.length;F<H;F++){const te=ce[F],ye=pe[te.materialIndex];if(ye&&ye.visible){const Se=U(z,ye,C,D);z.onBeforeShadow(s,z,I,Z,ae,Se,te),s.renderBufferDirect(Z,null,ae,Se,z,te),z.onAfterShadow(s,z,I,Z,ae,Se,te)}}}else if(pe.visible){const ce=U(z,pe,C,D);z.onBeforeShadow(s,z,I,Z,ae,ce,null),s.renderBufferDirect(Z,null,ae,ce,z,null),z.onAfterShadow(s,z,I,Z,ae,ce,null)}}const re=z.children;for(let ae=0,pe=re.length;ae<pe;ae++)O(re[ae],I,Z,C,D)}function P(z){z.target.removeEventListener("dispose",P);for(const Z in p){const C=p[Z],D=z.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const DC={[Md]:Td,[bd]:Cd,[Ad]:wd,[Ws]:Rd,[Td]:Md,[Cd]:bd,[wd]:Ad,[Rd]:Ws};function UC(s,e){function i(){let W=!1;const Ne=new on;let Ae=null;const Fe=new on(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!W&&(s.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,ve,Re,at,It){It===!0&&(Ee*=at,ve*=at,Re*=at),Ne.set(Ee,ve,Re,at),Fe.equals(Ne)===!1&&(s.clearColor(Ee,ve,Re,at),Fe.copy(Ne))},reset:function(){W=!1,Ae=null,Fe.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,Ae=null,Fe=null,Ee=null;return{setReversed:function(ve){if(Ne!==ve){const Re=e.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Ne},setTest:function(ve){ve?fe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ve){Ae!==ve&&!W&&(s.depthMask(ve),Ae=ve)},setFunc:function(ve){if(Ne&&(ve=DC[ve]),Fe!==ve){switch(ve){case Md:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case Ad:s.depthFunc(s.EQUAL);break;case Rd:s.depthFunc(s.GEQUAL);break;case Cd:s.depthFunc(s.GREATER);break;case wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Ee!==ve&&(Ne&&(ve=1-ve),s.clearDepth(ve),Ee=ve)},reset:function(){W=!1,Ae=null,Fe=null,Ee=null,Ne=!1}}}function l(){let W=!1,Ne=null,Ae=null,Fe=null,Ee=null,ve=null,Re=null,at=null,It=null;return{setTest:function(bt){W||(bt?fe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!W&&(s.stencilMask(bt),Ne=bt)},setFunc:function(bt,Nn,bi){(Ae!==bt||Fe!==Nn||Ee!==bi)&&(s.stencilFunc(bt,Nn,bi),Ae=bt,Fe=Nn,Ee=bi)},setOp:function(bt,Nn,bi){(ve!==bt||Re!==Nn||at!==bi)&&(s.stencilOp(bt,Nn,bi),ve=bt,Re=Nn,at=bi)},setLocked:function(bt){W=bt},setClear:function(bt){It!==bt&&(s.clearStencil(bt),It=bt)},reset:function(){W=!1,Ne=null,Ae=null,Fe=null,Ee=null,ve=null,Re=null,at=null,It=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,E=[],T=null,b=!1,y=null,v=null,w=null,U=null,O=null,P=null,z=null,I=new pt(0,0,0),Z=0,C=!1,D=null,k=null,re=null,ae=null,pe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(te)[1]),F=H>=1):te.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),F=H>=2);let ye=null,Se={};const N=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),le=new on().fromArray(N),Te=new on().fromArray(X);function Le(W,Ne,Ae,Fe){const Ee=new Uint8Array(4),ve=s.createTexture();s.bindTexture(W,ve),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Ae;Re++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ne+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ve}const ee={};ee[s.TEXTURE_2D]=Le(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),f.setFunc(Ws),ut(!1),tn(U0),fe(s.CULL_FACE),_t(ji);function fe(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function De(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function ke(W,Ne){return _[W]!==Ne?(s.bindFramebuffer(W,Ne),_[W]=Ne,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function He(W,Ne){let Ae=E,Fe=!1;if(W){Ae=x.get(Ne),Ae===void 0&&(Ae=[],x.set(Ne,Ae));const Ee=W.textures;if(Ae.length!==Ee.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Re=Ee.length;ve<Re;ve++)Ae[ve]=s.COLOR_ATTACHMENT0+ve;Ae.length=Ee.length,Fe=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Ae)}function mt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const en={[Ir]:s.FUNC_ADD,[UM]:s.FUNC_SUBTRACT,[LM]:s.FUNC_REVERSE_SUBTRACT};en[NM]=s.MIN,en[OM]=s.MAX;const St={[PM]:s.ZERO,[IM]:s.ONE,[FM]:s.SRC_COLOR,[yd]:s.SRC_ALPHA,[kM]:s.SRC_ALPHA_SATURATE,[GM]:s.DST_COLOR,[BM]:s.DST_ALPHA,[zM]:s.ONE_MINUS_SRC_COLOR,[Ed]:s.ONE_MINUS_SRC_ALPHA,[VM]:s.ONE_MINUS_DST_COLOR,[HM]:s.ONE_MINUS_DST_ALPHA,[XM]:s.CONSTANT_COLOR,[WM]:s.ONE_MINUS_CONSTANT_COLOR,[qM]:s.CONSTANT_ALPHA,[YM]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ne,Ae,Fe,Ee,ve,Re,at,It,bt){if(W===ji){b===!0&&(De(s.BLEND),b=!1);return}if(b===!1&&(fe(s.BLEND),b=!0),W!==DM){if(W!==y||bt!==C){if((v!==Ir||O!==Ir)&&(s.blendEquation(s.FUNC_ADD),v=Ir,O=Ir),bt)switch(W){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFunc(s.ONE,s.ONE);break;case L0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case L0:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}w=null,U=null,P=null,z=null,I.set(0,0,0),Z=0,y=W,C=bt}return}Ee=Ee||Ne,ve=ve||Ae,Re=Re||Fe,(Ne!==v||Ee!==O)&&(s.blendEquationSeparate(en[Ne],en[Ee]),v=Ne,O=Ee),(Ae!==w||Fe!==U||ve!==P||Re!==z)&&(s.blendFuncSeparate(St[Ae],St[Fe],St[ve],St[Re]),w=Ae,U=Fe,P=ve,z=Re),(at.equals(I)===!1||It!==Z)&&(s.blendColor(at.r,at.g,at.b,It),I.copy(at),Z=It),y=W,C=!1}function Dt(W,Ne){W.side===Ea?De(s.CULL_FACE):fe(s.CULL_FACE);let Ae=W.side===Kn;Ne&&(Ae=!Ae),ut(Ae),W.blending===ks&&W.transparent===!1?_t(ji):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const Fe=W.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function tn(W){W!==RM?(fe(s.CULL_FACE),W!==k&&(W===U0?s.cullFace(s.BACK):W===CM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),k=W}function G(W){W!==re&&(F&&s.lineWidth(W),re=W)}function Zt(W,Ne,Ae){W?(fe(s.POLYGON_OFFSET_FILL),(ae!==Ne||pe!==Ae)&&(s.polygonOffset(Ne,Ae),ae=Ne,pe=Ae)):De(s.POLYGON_OFFSET_FILL)}function Tt(W){W?fe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=s.TEXTURE0+ce-1),ye!==W&&(s.activeTexture(W),ye=W)}function Ye(W,Ne,Ae){Ae===void 0&&(ye===null?Ae=s.TEXTURE0+ce-1:Ae=ye);let Fe=Se[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[Ae]=Fe),(Fe.type!==W||Fe.texture!==Ne)&&(ye!==Ae&&(s.activeTexture(Ae),ye=Ae),s.bindTexture(W,Ne||ee[W]),Fe.type=W,Fe.texture=Ne)}function L(){const W=Se[ye];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{s.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function xe(){try{s.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{s.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Xe(){try{s.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function it(){try{s.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Me(){try{s.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function be(W){le.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),le.copy(W))}function ze(W){Te.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Te.copy(W))}function Ie(W,Ne){let Ae=p.get(Ne);Ae===void 0&&(Ae=new WeakMap,p.set(Ne,Ae));let Fe=Ae.get(W);Fe===void 0&&(Fe=s.getUniformBlockIndex(Ne,W.name),Ae.set(W,Fe))}function we(W,Ne){const Fe=p.get(Ne).get(W);m.get(Ne)!==Fe&&(s.uniformBlockBinding(Ne,Fe,W.__bindingPointIndex),m.set(Ne,Fe))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ye=null,Se={},_={},x=new WeakMap,E=[],T=null,b=!1,y=null,v=null,w=null,U=null,O=null,P=null,z=null,I=new pt(0,0,0),Z=0,C=!1,D=null,k=null,re=null,ae=null,pe=null,le.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:fe,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:mt,setBlending:_t,setMaterial:Dt,setFlipSided:ut,setCullFace:tn,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:Tt,activeTexture:Ot,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:it,texImage3D:Me,updateUBOMapping:Ie,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:be,viewport:ze,reset:ft}}function LC(s,e,i,r,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new et,g=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,M){return E?new OffscreenCanvas(L,M):fl("canvas")}function b(L,M,q){let me=1;const xe=Ye(L);if((xe.width>q||xe.height>q)&&(me=q/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(me*xe.width),Ze=Math.floor(me*xe.height);_===void 0&&(_=T(ue,Ze));const Ce=M?T(ue,Ze):_;return Ce.width=ue,Ce.height=Ze,Ce.getContext("2d").drawImage(L,0,0,ue,Ze),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ze+")."),Ce}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,M,q,me,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=M;if(M===s.RED&&(q===s.FLOAT&&(ue=s.R32F),q===s.HALF_FLOAT&&(ue=s.R16F),q===s.UNSIGNED_BYTE&&(ue=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.R8UI),q===s.UNSIGNED_SHORT&&(ue=s.R16UI),q===s.UNSIGNED_INT&&(ue=s.R32UI),q===s.BYTE&&(ue=s.R8I),q===s.SHORT&&(ue=s.R16I),q===s.INT&&(ue=s.R32I)),M===s.RG&&(q===s.FLOAT&&(ue=s.RG32F),q===s.HALF_FLOAT&&(ue=s.RG16F),q===s.UNSIGNED_BYTE&&(ue=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),q===s.UNSIGNED_INT&&(ue=s.RG32UI),q===s.BYTE&&(ue=s.RG8I),q===s.SHORT&&(ue=s.RG16I),q===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),q===s.UNSIGNED_INT&&(ue=s.RGB32UI),q===s.BYTE&&(ue=s.RGB8I),q===s.SHORT&&(ue=s.RGB16I),q===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),q===s.BYTE&&(ue=s.RGBA8I),q===s.SHORT&&(ue=s.RGBA16I),q===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const Ze=xe?mc:At.getTransfer(me);q===s.FLOAT&&(ue=s.RGBA32F),q===s.HALF_FLOAT&&(ue=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ue=Ze===Ht?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(L,M){let q;return L?M===null||M===Qi||M===cl?q=s.DEPTH24_STENCIL8:M===qi?q=s.DEPTH32F_STENCIL8:M===ul&&(q=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===cl?q=s.DEPTH_COMPONENT24:M===qi?q=s.DEPTH_COMPONENT32F:M===ul&&(q=s.DEPTH_COMPONENT16),q}function P(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function z(L){const M=L.target;M.removeEventListener("dispose",z),Z(M),M.isVideoTexture&&g.delete(M)}function I(L){const M=L.target;M.removeEventListener("dispose",I),D(M)}function Z(L){const M=r.get(L);if(M.__webglInit===void 0)return;const q=L.source,me=x.get(q);if(me){const xe=me[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(L),Object.keys(me).length===0&&x.delete(q)}r.remove(L)}function C(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const q=L.source,me=x.get(q);delete me[M.__cacheKey],f.memory.textures--}function D(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let xe=0;xe<M.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(M.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)s.deleteFramebuffer(M.__webglFramebuffer[me]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=L.textures;for(let me=0,xe=q.length;me<xe;me++){const ue=r.get(q[me]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(q[me])}r.remove(L)}let k=0;function re(){k=0}function ae(){const L=k;return L>=l.maxTextures&&st("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function pe(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ce(L,M){const q=r.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const me=L.image;if(me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,L,M);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function F(L,M){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ee(q,L,M);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function H(L,M){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ee(q,L,M);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function te(L,M){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){fe(q,L,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const ye={[Ld]:s.REPEAT,[Ma]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},Se={[gn]:s.NEAREST,[KM]:s.NEAREST_MIPMAP_NEAREST,[Iu]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Fh]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},N={[eT]:s.NEVER,[rT]:s.ALWAYS,[tT]:s.LESS,[Cp]:s.LEQUAL,[nT]:s.EQUAL,[wp]:s.GEQUAL,[iT]:s.GREATER,[aT]:s.NOTEQUAL};function X(L,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Fh||M.magFilter===Iu||M.magFilter===zr||M.minFilter===Fn||M.minFilter===Fh||M.minFilter===Iu||M.minFilter===zr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ye[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ye[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ye[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Iu&&M.minFilter!==zr||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function le(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",z));const me=M.source;let xe=x.get(me);xe===void 0&&(xe={},x.set(me,xe));const ue=pe(M);if(ue!==L.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),xe[ue].usedTimes++;const Ze=xe[L.__cacheKey];Ze!==void 0&&(xe[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&C(M)),L.__cacheKey=ue,L.__webglTexture=xe[ue].texture}return q}function Te(L,M,q){return Math.floor(Math.floor(L/q)/M)}function Le(L,M,q,me){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,q,me,M.data);else{ue.sort((Me,be)=>Me.start-be.start);let Ze=0;for(let Me=1;Me<ue.length;Me++){const be=ue[Ze],ze=ue[Me],Ie=be.start+be.count,we=Te(ze.start,M.width,4),ft=Te(be.start,M.width,4);ze.start<=Ie+1&&we===ft&&Te(ze.start+ze.count-1,M.width,4)===we?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++Ze,ue[Ze]=ze)}ue.length=Ze+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),Xe=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Me=0,be=ue.length;Me<be;Me++){const ze=ue[Me],Ie=Math.floor(ze.start/4),we=Math.ceil(ze.count/4),ft=Ie%M.width,W=Math.floor(Ie/M.width),Ne=we,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,ft,W,Ne,Ae,q,me,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function ee(L,M,q){let me=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=s.TEXTURE_3D);const xe=le(L,M),ue=M.source;i.bindTexture(me,L.__webglTexture,s.TEXTURE0+q);const Ze=r.get(ue);if(ue.version!==Ze.__version||xe===!0){i.activeTexture(s.TEXTURE0+q);const Ce=At.getPrimaries(At.workingColorSpace),Xe=M.colorSpace===ur?null:At.getPrimaries(M.colorSpace),it=M.colorSpace===ur||Ce===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Me=b(M.image,!1,l.maxTextureSize);Me=Ot(M,Me);const be=u.convert(M.format,M.colorSpace),ze=u.convert(M.type);let Ie=U(M.internalFormat,be,ze,M.colorSpace,M.isVideoTexture);X(me,M);let we;const ft=M.mipmaps,W=M.isVideoTexture!==!0,Ne=Ze.__version===void 0||xe===!0,Ae=ue.dataReady,Fe=P(M,Me);if(M.isDepthTexture)Ie=O(M.format===Br,M.type),Ne&&(W?i.texStorage2D(s.TEXTURE_2D,1,Ie,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,Ie,Me.width,Me.height,0,be,ze,null));else if(M.isDataTexture)if(ft.length>0){W&&Ne&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,ft[0].width,ft[0].height);for(let Ee=0,ve=ft.length;Ee<ve;Ee++)we=ft[Ee],W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,Ee,Ie,we.width,we.height,0,be,ze,we.data);M.generateMipmaps=!1}else W?(Ne&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Me.width,Me.height),Ae&&Le(M,Me,be,ze)):i.texImage2D(s.TEXTURE_2D,0,Ie,Me.width,Me.height,0,be,ze,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ie,ft[0].width,ft[0].height,Me.depth);for(let Ee=0,ve=ft.length;Ee<ve;Ee++)if(we=ft[Ee],M.format!==Pi)if(be!==null)if(W){if(Ae)if(M.layerUpdates.size>0){const Re=nv(we.width,we.height,M.format,M.type);for(const at of M.layerUpdates){const It=we.data.subarray(at*Re/we.data.BYTES_PER_ELEMENT,(at+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,at,we.width,we.height,1,be,It)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,we.width,we.height,Me.depth,be,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Ie,we.width,we.height,Me.depth,0,we.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,we.width,we.height,Me.depth,be,ze,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Ie,we.width,we.height,Me.depth,0,be,ze,we.data)}else{W&&Ne&&i.texStorage2D(s.TEXTURE_2D,Fe,Ie,ft[0].width,ft[0].height);for(let Ee=0,ve=ft.length;Ee<ve;Ee++)we=ft[Ee],M.format!==Pi?be!==null?W?Ae&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,we.width,we.height,be,we.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Ie,we.width,we.height,0,we.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,Ee,Ie,we.width,we.height,0,be,ze,we.data)}else if(M.isDataArrayTexture)if(W){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ie,Me.width,Me.height,Me.depth),Ae)if(M.layerUpdates.size>0){const Ee=nv(Me.width,Me.height,M.format,M.type);for(const ve of M.layerUpdates){const Re=Me.data.subarray(ve*Ee/Me.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,be,ze,Re)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,be,ze,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Me.width,Me.height,Me.depth,0,be,ze,Me.data);else if(M.isData3DTexture)W?(Ne&&i.texStorage3D(s.TEXTURE_3D,Fe,Ie,Me.width,Me.height,Me.depth),Ae&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,be,ze,Me.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,Me.width,Me.height,Me.depth,0,be,ze,Me.data);else if(M.isFramebufferTexture){if(Ne)if(W)i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Me.width,Me.height);else{let Ee=Me.width,ve=Me.height;for(let Re=0;Re<Fe;Re++)i.texImage2D(s.TEXTURE_2D,Re,Ie,Ee,ve,0,be,ze,null),Ee>>=1,ve>>=1}}else if(ft.length>0){if(W&&Ne){const Ee=Ye(ft[0]);i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height)}for(let Ee=0,ve=ft.length;Ee<ve;Ee++)we=ft[Ee],W?Ae&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,be,ze,we):i.texImage2D(s.TEXTURE_2D,Ee,Ie,be,ze,we);M.generateMipmaps=!1}else if(W){if(Ne){const Ee=Ye(Me);i.texStorage2D(s.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height)}Ae&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,be,ze,Me)}else i.texImage2D(s.TEXTURE_2D,0,Ie,be,ze,Me);y(M)&&v(me),Ze.__version=ue.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function fe(L,M,q){if(M.image.length!==6)return;const me=le(L,M),xe=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const ue=r.get(xe);if(xe.version!==ue.__version||me===!0){i.activeTexture(s.TEXTURE0+q);const Ze=At.getPrimaries(At.workingColorSpace),Ce=M.colorSpace===ur?null:At.getPrimaries(M.colorSpace),Xe=M.colorSpace===ur||Ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ve=0;ve<6;ve++)!it&&!Me?be[ve]=b(M.image[ve],!0,l.maxCubemapSize):be[ve]=Me?M.image[ve].image:M.image[ve],be[ve]=Ot(M,be[ve]);const ze=be[0],Ie=u.convert(M.format,M.colorSpace),we=u.convert(M.type),ft=U(M.internalFormat,Ie,we,M.colorSpace),W=M.isVideoTexture!==!0,Ne=ue.__version===void 0||me===!0,Ae=xe.dataReady;let Fe=P(M,ze);X(s.TEXTURE_CUBE_MAP,M);let Ee;if(it){W&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ft,ze.width,ze.height);for(let ve=0;ve<6;ve++){Ee=be[ve].mipmaps;for(let Re=0;Re<Ee.length;Re++){const at=Ee[Re];M.format!==Pi?Ie!==null?W?Ae&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,at.width,at.height,Ie,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ft,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,at.width,at.height,Ie,we,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ft,at.width,at.height,0,Ie,we,at.data)}}}else{if(Ee=M.mipmaps,W&&Ne){Ee.length>0&&Fe++;const ve=Ye(be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ft,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be[ve].width,be[ve].height,Ie,we,be[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,be[ve].width,be[ve].height,0,Ie,we,be[ve].data);for(let Re=0;Re<Ee.length;Re++){const It=Ee[Re].image[ve].image;W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,It.width,It.height,Ie,we,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ft,It.width,It.height,0,Ie,we,It.data)}}else{W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,we,be[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Ie,we,be[ve]);for(let Re=0;Re<Ee.length;Re++){const at=Ee[Re];W?Ae&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Ie,we,at.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ft,Ie,we,at.image[ve])}}}y(M)&&v(s.TEXTURE_CUBE_MAP),ue.__version=xe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function De(L,M,q,me,xe,ue){const Ze=u.convert(q.format,q.colorSpace),Ce=u.convert(q.type),Xe=U(q.internalFormat,Ze,Ce,q.colorSpace),it=r.get(M),Me=r.get(q);if(Me.__renderTarget=M,!it.__hasExternalTextures){const be=Math.max(1,M.width>>ue),ze=Math.max(1,M.height>>ue);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?i.texImage3D(xe,ue,Xe,be,ze,M.depth,0,Ze,Ce,null):i.texImage2D(xe,ue,Xe,be,ze,0,Ze,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,G(M)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(L,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const me=M.depthTexture,xe=me&&me.isDepthTexture?me.type:null,ue=O(M.stencilBuffer,xe),Ze=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(M),ue,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,L)}else{const me=M.textures;for(let xe=0;xe<me.length;xe++){const ue=me[xe],Ze=u.convert(ue.format,ue.colorSpace),Ce=u.convert(ue.type),Xe=U(ue.internalFormat,Ze,Ce,ue.colorSpace);Zt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(M),Xe,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(M),Xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Xe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,M,q){const me=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),X(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=u.convert(M.depthTexture.format),Me=u.convert(M.depthTexture.type);let be;M.depthTexture.format===Ra?be=s.DEPTH_COMPONENT24:M.depthTexture.format===Br&&(be=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,be,M.width,M.height,0,it,Me,null)}}else ce(M.depthTexture,0);const ue=xe.__webglTexture,Ze=G(M),Ce=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Xe=M.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ra)Zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ce,ue,0,Ze):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ce,ue,0);else if(M.depthTexture.format===Br)Zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ce,ue,0,Ze):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ce,ue,0);else throw new Error("Unknown depthTexture format")}function mt(L){const M=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=me}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)He(M.__webglFramebuffer[me],L,me);else{const me=L.texture.mipmaps;me&&me.length>0?He(M.__webglFramebuffer[0],L,0):He(M.__webglFramebuffer,L,0)}else if(q){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=s.createRenderbuffer(),ke(M.__webglDepthbuffer[me],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}else{const me=L.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ke(M.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function en(L,M,q){const me=r.get(L);M!==void 0&&De(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&mt(L)}function St(L){const M=L.texture,q=r.get(L),me=r.get(M);L.addEventListener("dispose",I);const xe=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=M.version,f.memory.textures++),ue){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)q.__webglFramebuffer[Ce][Xe]=s.createFramebuffer()}else q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const it=r.get(xe[Ce]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Zt(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const it=u.convert(Xe.format,Xe.colorSpace),Me=u.convert(Xe.type),be=U(Xe.internalFormat,it,Me,Xe.colorSpace,L.isXRRenderTarget===!0),ze=G(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,be,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),X(s.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(q.__webglFramebuffer[Ce][Xe],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else De(q.__webglFramebuffer[Ce],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const it=xe[Ce],Me=r.get(it);let be=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(be,Me.__webglTexture),X(be,it),De(q.__webglFramebuffer,L,it,s.COLOR_ATTACHMENT0+Ce,be,0),y(it)&&v(be)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,me.__webglTexture),X(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(q.__webglFramebuffer[Xe],L,M,s.COLOR_ATTACHMENT0,Ce,Xe);else De(q.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Ce,0);y(M)&&v(Ce),i.unbindTexture()}L.depthBuffer&&mt(L)}function _t(L){const M=L.textures;for(let q=0,me=M.length;q<me;q++){const xe=M[q];if(y(xe)){const ue=w(L),Ze=r.get(xe).__webglTexture;i.bindTexture(ue,Ze),v(ue),i.unbindTexture()}}}const Dt=[],ut=[];function tn(L){if(L.samples>0){if(Zt(L)===!1){const M=L.textures,q=L.width,me=L.height;let xe=s.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(L),Ce=M.length>1;if(Ce)for(let it=0;it<M.length;it++)i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let it=0;it<M.length;it++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[it]);const Me=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,q,me,0,0,q,me,xe,s.NEAREST),m===!0&&(Dt.length=0,ut.length=0,Dt.push(s.COLOR_ATTACHMENT0+it),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Dt.push(ue),ut.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let it=0;it<M.length;it++){i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[it]);const Me=r.get(M[it]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Zt(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(L){const M=f.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function Ot(L,M){const q=L.colorSpace,me=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==js&&q!==ur&&(At.getTransfer(q)===Ht?(me!==Pi||xe!==Ei)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",q)),M}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=en,this.setupRenderTarget=St,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NC(s,e){function i(r,l=ur){let u;const f=At.getTransfer(l);if(r===Ei)return s.UNSIGNED_BYTE;if(r===Mp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===lx)return s.BYTE;if(r===ux)return s.SHORT;if(r===ul)return s.UNSIGNED_SHORT;if(r===Ep)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===oi)return s.HALF_FLOAT;if(r===hx)return s.ALPHA;if(r===dx)return s.RGB;if(r===Pi)return s.RGBA;if(r===Ra)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===px)return s.RED;if(r===bp)return s.RED_INTEGER;if(r===Ys)return s.RG;if(r===Ap)return s.RG_INTEGER;if(r===Rp)return s.RGBA_INTEGER;if(r===oc||r===lc||r===uc||r===cc)if(f===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===oc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===oc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Pd||r===Id||r===Fd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===Bd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zd||r===Bd)return f===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gd)return u.COMPRESSED_R11_EAC;if(r===Vd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===kd)return u.COMPRESSED_RG11_EAC;if(r===Xd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===ep||r===tp||r===np||r===ip||r===ap)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Wd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jd)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ep)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tp)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===np)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ip)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ap)return f===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rp||r===sp||r===op)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===rp)return f===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===op)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===up||r===cp||r===fp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===lp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===up)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const OC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PC=`
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

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ln({vertexShader:OC,fragmentShader:PC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends kr{constructor(e,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,E=null,T=null;const b=typeof XRWebGLBinding<"u",y=new IC,v={},w=i.getContextAttributes();let U=null,O=null;const P=[],z=[],I=new et;let Z=null;const C=new yi;C.viewport=new on;const D=new yi;D.viewport=new on;const k=[C,D],re=new WT;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=P[ee];return fe===void 0&&(fe=new rd,P[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=P[ee];return fe===void 0&&(fe=new rd,P[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=P[ee];return fe===void 0&&(fe=new rd,P[ee]=fe),fe.getHandSpace()};function ce(ee){const fe=z.indexOf(ee.inputSource);if(fe===-1)return;const De=P[fe];De!==void 0&&(De.update(ee.inputSource,ee.frame,p||f),De.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<P.length;ee++){const fe=z[ee];fe!==null&&(z[ee]=null,P[ee].disconnect(fe))}ae=null,pe=null,y.reset();for(const ee in v)delete v[ee];e.setRenderTarget(U),E=null,x=null,_=null,l=null,O=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;w.depth&&(He=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=w.stencil?Br:Ra,ke=w.stencil?cl:Qi);const mt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(mt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Qn(x.textureWidth,x.textureHeight,{format:Pi,type:Ei,depthTexture:new dl(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const De={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Qn(E.framebufferWidth,E.framebufferHeight,{format:Pi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Le.setContext(l),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ee){for(let fe=0;fe<ee.removed.length;fe++){const De=ee.removed[fe],ke=z.indexOf(De);ke>=0&&(z[ke]=null,P[ke].disconnect(De))}for(let fe=0;fe<ee.added.length;fe++){const De=ee.added[fe];let ke=z.indexOf(De);if(ke===-1){for(let mt=0;mt<P.length;mt++)if(mt>=z.length){z.push(De),ke=mt;break}else if(z[mt]===null){z[mt]=De,ke=mt;break}if(ke===-1)break}const He=P[ke];He&&He.connect(De)}}const te=new K,ye=new K;function Se(ee,fe,De){te.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(De.matrixWorld);const ke=te.distanceTo(ye),He=fe.projectionMatrix.elements,mt=De.projectionMatrix.elements,en=He[14]/(He[10]-1),St=He[14]/(He[10]+1),_t=(He[9]+1)/He[5],Dt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],tn=(mt[8]+1)/mt[0],G=en*ut,Zt=en*tn,Tt=ke/(-ut+tn),Ot=Tt*-ut;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ot),ee.translateZ(Tt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),He[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=en+Tt,L=St+Tt,M=G-Ot,q=Zt+(ke-Ot),me=_t*St/L*Ye,xe=Dt*St/L*Ye;ee.projectionMatrix.makePerspective(M,q,me,xe,Ye,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let fe=ee.near,De=ee.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(De=y.depthFar)),re.near=D.near=C.near=fe,re.far=D.far=C.far=De,(ae!==re.near||pe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),ae=re.near,pe=re.far),re.layers.mask=ee.layers.mask|6,C.layers.mask=re.layers.mask&3,D.layers.mask=re.layers.mask&5;const ke=ee.parent,He=re.cameras;N(re,ke);for(let mt=0;mt<He.length;mt++)N(He[mt],ke);He.length===2?Se(re,C,D):re.projectionMatrix.copy(C.projectionMatrix),X(ee,re,ke)};function X(ee,fe,De){De===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(De.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=hp*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(ee){m=ee,x!==null&&(x.fixedFoveation=ee),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(ee){return v[ee]};let le=null;function Te(ee,fe){if(g=fe.getViewerPose(p||f),T=fe,g!==null){const De=g.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let ke=!1;De.length!==re.cameras.length&&(re.cameras.length=0,ke=!0);for(let St=0;St<De.length;St++){const _t=De[St];let Dt=null;if(E!==null)Dt=E.getViewport(_t);else{const tn=_.getViewSubImage(x,_t);Dt=tn.viewport,St===0&&(e.setRenderTargetTextures(O,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(O))}let ut=k[St];ut===void 0&&(ut=new yi,ut.layers.enable(St),ut.viewport=new on,k[St]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),St===0&&(re.matrix.copy(ut.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),ke===!0&&re.cameras.push(ut)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const St=_.getDepthInformation(De[0]);St&&St.isValid&&St.texture&&y.init(St,l.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let St=0;St<De.length;St++){const _t=De[St].camera;if(_t){let Dt=v[_t];Dt||(Dt=new Rx,v[_t]=Dt);const ut=_.getCameraImage(_t);Dt.sourceTexture=ut}}}}for(let De=0;De<P.length;De++){const ke=z[De],He=P[De];ke!==null&&He!==void 0&&He.update(ke,fe,p||f)}le&&le(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Le=new Cx;Le.setAnimationLoop(Te),this.setAnimationLoop=function(ee){le=ee},this.dispose=function(){}}}const Pr=new Ca,zC=new Jt;function BC(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Ex(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,U,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),g(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&E(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),b(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,w,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=e.get(v),U=w.envMap,O=w.envMapRotation;U&&(y.envMap.value=U,Pr.copy(O),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),y.envMapRotation.value.setFromMatrix4(zC.makeRotationFromEuler(Pr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function b(y,v){const w=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HC(s,e,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const O=U.program;r.uniformBlockBinding(w,O)}function p(w,U){let O=l[w.id];O===void 0&&(T(w),O=g(w),l[w.id]=O,w.addEventListener("dispose",y));const P=U.program;r.updateUBOMapping(w,P);const z=e.render.frame;u[w.id]!==z&&(x(w),u[w.id]=z)}function g(w){const U=_();w.__bindingPointIndex=U;const O=s.createBuffer(),P=w.__size,z=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,O),O}function _(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const U=l[w.id],O=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,I=O.length;z<I;z++){const Z=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,D=Z.length;C<D;C++){const k=Z[C];if(E(k,z,C,P)===!0){const re=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let ce=0;ce<ae.length;ce++){const F=ae[ce],H=b(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,re+pe,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(w,U,O,P){const z=w.value,I=U+"_"+O;if(P[I]===void 0)return typeof z=="number"||typeof z=="boolean"?P[I]=z:P[I]=z.clone(),!0;{const Z=P[I];if(typeof z=="number"||typeof z=="boolean"){if(Z!==z)return P[I]=z,!0}else if(Z.equals(z)===!1)return Z.copy(z),!0}return!1}function T(w){const U=w.uniforms;let O=0;const P=16;for(let I=0,Z=U.length;I<Z;I++){const C=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,k=C.length;D<k;D++){const re=C[D],ae=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,ce=ae.length;pe<ce;pe++){const F=ae[pe],H=b(F),te=O%P,ye=te%H.boundary,Se=te+ye;O+=ye,Se!==0&&P-Se<H.storage&&(O+=P-Se),re.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=O,O+=H.storage}}}const z=O%P;return z>0&&(O+=P-z),w.__size=O,w.__cache={},this}function b(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",w),U}function y(w){const U=w.target;U.removeEventListener("dispose",y);const O=f.indexOf(U.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}const GC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function VC(){return Xi===null&&(Xi=new NT(GC,16,16,Ys,oi),Xi.name="DFG_LUT",Xi.minFilter=Fn,Xi.magFilter=Fn,Xi.wrapS=Ma,Xi.wrapT=Ma,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class kC{constructor(e={}){const{canvas:i=sT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:E=Ei}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const b=E,y=new Set([Rp,Ap,bp]),v=new Set([Ei,Qi,ul,cl,Mp,Tp]),w=new Uint32Array(4),U=new Int32Array(4);let O=null,P=null;const z=[],I=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=Si;let k=0,re=0,ae=null,pe=-1,ce=null;const F=new on,H=new on;let te=null;const ye=new pt(0);let Se=0,N=i.width,X=i.height,le=1,Te=null,Le=null;const ee=new on(0,0,N,X),fe=new on(0,0,N,X);let De=!1;const ke=new Ax;let He=!1,mt=!1;const en=new Jt,St=new K,_t=new on,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function tn(){return ae===null?le:1}let G=r;function Zt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yp}`),i.addEventListener("webglcontextlost",at,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const Y="webgl2";if(G=Zt(Y,R),G===null)throw Zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Tt,Ot,Ye,L,M,q,me,xe,ue,Ze,Ce,Xe,it,Me,be,ze,Ie,we,ft,W,Ne,Ae,Fe,Ee;function ve(){Tt=new V1(G),Tt.init(),Ae=new NC(G,Tt),Ot=new N1(G,Tt,e,Ae),Ye=new UC(G,Tt),Ot.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),L=new W1(G),M=new _C,q=new LC(G,Tt,Ye,M,Ot,Ae,L),me=new P1(C),xe=new G1(C),ue=new ZT(G),Fe=new U1(G,ue),Ze=new k1(G,ue,L,Fe),Ce=new Y1(G,Ze,ue,L),ft=new q1(G,Ot,q),ze=new O1(M),Xe=new mC(C,me,xe,Tt,Ot,Fe,ze),it=new BC(C,M),Me=new vC,be=new TC(Tt),we=new D1(C,me,xe,Ye,Ce,T,m),Ie=new wC(C,Ce,Ot),Ee=new HC(G,L,Ot,Ye),W=new L1(G,Tt,L),Ne=new X1(G,Tt,L),L.programs=Xe.programs,C.capabilities=Ot,C.extensions=Tt,C.properties=M,C.renderLists=Me,C.shadowMap=Ie,C.state=Ye,C.info=L}ve(),b!==Ei&&(Z=new Z1(b,i.width,i.height,l,u));const Re=new FC(C,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(R){R!==void 0&&(le=R,this.setSize(N,X,!1))},this.getSize=function(R){return R.set(N,X)},this.setSize=function(R,Y,se=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,X=Y,i.width=Math.floor(R*le),i.height=Math.floor(Y*le),se===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(N*le,X*le).floor()},this.setDrawingBufferSize=function(R,Y,se){N=R,X=Y,le=se,i.width=Math.floor(R*se),i.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(b===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,Y,se,ne){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,se,ne),Ye.viewport(F.copy(ee).multiplyScalar(le).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,Y,se,ne){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,Y,se,ne),Ye.scissor(H.copy(fe).multiplyScalar(le).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ye.setScissorTest(De=R)},this.setOpaqueSort=function(R){Te=R},this.setTransparentSort=function(R){Le=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,se=!0){let ne=0;if(R){let Q=!1;if(ae!==null){const Ue=ae.texture.format;Q=y.has(Ue)}if(Q){const Ue=ae.texture.type,Be=v.has(Ue),Oe=we.getClearColor(),Ge=we.getClearAlpha(),We=Oe.r,$e=Oe.g,qe=Oe.b;Be?(w[0]=We,w[1]=$e,w[2]=qe,w[3]=Ge,G.clearBufferuiv(G.COLOR,0,w)):(U[0]=We,U[1]=$e,U[2]=qe,U[3]=Ge,G.clearBufferiv(G.COLOR,0,U))}else ne|=G.COLOR_BUFFER_BIT}Y&&(ne|=G.DEPTH_BUFFER_BIT),se&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",at,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),we.dispose(),Me.dispose(),be.dispose(),M.dispose(),me.dispose(),xe.dispose(),Ce.dispose(),Fe.dispose(),Ee.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Wr),Re.removeEventListener("sessionend",ao),Bi.stop()};function at(R){R.preventDefault(),z0("WebGLRenderer: Context Lost."),D=!0}function It(){z0("WebGLRenderer: Context Restored."),D=!1;const R=L.autoReset,Y=Ie.enabled,se=Ie.autoUpdate,ne=Ie.needsUpdate,Q=Ie.type;ve(),L.autoReset=R,Ie.enabled=Y,Ie.autoUpdate=se,Ie.needsUpdate=ne,Ie.type=Q}function bt(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const Y=R.target;Y.removeEventListener("dispose",Nn),bi(Y)}function bi(R){Tl(R),M.remove(R)}function Tl(R){const Y=M.get(R).programs;Y!==void 0&&(Y.forEach(function(se){Xe.releaseProgram(se)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,ne,Q,Ue){Y===null&&(Y=Dt);const Be=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=hr(R,Y,se,ne,Q);Ye.setMaterial(ne,Be);let Ge=se.index,We=1;if(ne.wireframe===!0){if(Ge=Ze.getWireframeAttribute(se),Ge===void 0)return;We=2}const $e=se.drawRange,qe=se.attributes.position;let tt=$e.start*We,Ut=($e.start+$e.count)*We;Ue!==null&&(tt=Math.max(tt,Ue.start*We),Ut=Math.min(Ut,(Ue.start+Ue.count)*We)),Ge!==null?(tt=Math.max(tt,0),Ut=Math.min(Ut,Ge.count)):qe!=null&&(tt=Math.max(tt,0),Ut=Math.min(Ut,qe.count));const Kt=Ut-tt;if(Kt<0||Kt===1/0)return;Fe.setup(Q,ne,Oe,se,Ge);let qt,Pt=W;if(Ge!==null&&(qt=ue.get(Ge),Pt=Ne,Pt.setIndex(qt)),Q.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*tn()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(Q.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*tn()),Q.isLineSegments?Pt.setMode(G.LINES):Q.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else Q.isPoints?Pt.setMode(G.POINTS):Q.isSprite&&Pt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Lt=Q._multiDrawCounts,rt=Q._multiDrawCount,Mn=Ge?ue.get(Ge).bytesPerElement:1,$i=M.get(ne).currentProgram.getUniforms();for(let Tn=0;Tn<rt;Tn++)$i.setValue(G,"_gl_DrawID",Tn),Pt.render(Qe[Tn]/Mn,Lt[Tn])}else if(Q.isInstancedMesh)Pt.renderInstances(tt,Kt,Q.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Lt=Math.min(se.instanceCount,Qe);Pt.renderInstances(tt,Kt,Lt)}else Pt.render(tt,Kt)};function no(R,Y,se){R.transparent===!0&&R.side===Ea&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Yr(R,Y,se),R.side=fr,R.needsUpdate=!0,Yr(R,Y,se),R.side=Ea):Yr(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),P=be.get(se),P.init(Y),I.push(P),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),R!==se&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const ne=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Oe=Ue[Be];no(Oe,se,Q),ne.add(Oe)}else no(Ue,se,Q),ne.add(Ue)}),P=I.pop(),ne},this.compileAsync=function(R,Y,se=null){const ne=this.compile(R,Y,se);return new Promise(Q=>{function Ue(){if(ne.forEach(function(Be){M.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){Q(R);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Xr=null;function io(R){Xr&&Xr(R)}function Wr(){Bi.stop()}function ao(){Bi.start()}const Bi=new Cx;Bi.setAnimationLoop(io),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){Xr=R,Re.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},Re.addEventListener("sessionstart",Wr),Re.addEventListener("sessionend",ao),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,ne=Z!==null&&(ae===null||se)&&Z.begin(C,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,ae),P=be.get(R,I.length),P.init(Y),I.push(P),en.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ke.setFromProjectionMatrix(en,Yi,Y.reversedDepth),mt=this.localClippingEnabled,He=ze.init(this.clippingPlanes,mt),O=Me.get(R,z.length),O.init(),z.push(O),Re.enabled===!0&&Re.isPresenting===!0){const Be=C.xr.getDepthSensingMesh();Be!==null&&ui(Be,Y,-1/0,C.sortObjects)}ui(R,Y,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Te,Le),ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ut&&we.addToRenderList(O,R),this.info.render.frame++,He===!0&&ze.beginShadows();const Q=P.state.shadowsArray;if(Ie.render(Q,R,Y),He===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&Z.hasRenderPass())===!1){const Be=O.opaque,Oe=O.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ge=Y.cameras;if(Oe.length>0)for(let We=0,$e=Ge.length;We<$e;We++){const qe=Ge[We];En(Be,Oe,R,qe)}ut&&we.render(R);for(let We=0,$e=Ge.length;We<$e;We++){const qe=Ge[We];ln(O,R,qe,qe.viewport)}}else Oe.length>0&&En(Be,Oe,R,Y),ut&&we.render(R),ln(O,R,Y)}ae!==null&&re===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),ne&&Z.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Fe.resetDefaultState(),pe=-1,ce=null,I.pop(),I.length>0?(P=I[I.length-1],He===!0&&ze.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function ui(R,Y,se,ne){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){ne&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(en);const Be=Ce.update(R),Oe=R.material;Oe.visible&&O.push(R,Be,Oe,se,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const Be=Ce.update(R),Oe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),_t.copy(Be.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(en)),Array.isArray(Oe)){const Ge=Be.groups;for(let We=0,$e=Ge.length;We<$e;We++){const qe=Ge[We],tt=Oe[qe.materialIndex];tt&&tt.visible&&O.push(R,Be,tt,se,_t.z,qe)}}else Oe.visible&&O.push(R,Be,Oe,se,_t.z,null)}}const Ue=R.children;for(let Be=0,Oe=Ue.length;Be<Oe;Be++)ui(Ue[Be],Y,se,ne)}function ln(R,Y,se,ne){const{opaque:Q,transmissive:Ue,transparent:Be}=R;P.setupLightsView(se),He===!0&&ze.setGlobalState(C.clippingPlanes,se),ne&&Ye.viewport(F.copy(ne)),Q.length>0&&Ai(Q,Y,se),Ue.length>0&&Ai(Ue,Y,se),Be.length>0&&Ai(Be,Y,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function En(R,Y,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const tt=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Qn(1,1,{generateMipmaps:!0,type:tt?oi:Ei,minFilter:zr,samples:Ot.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[ne.id],Be=ne.viewport||F;Ue.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ge=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(ye),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),ut&&we.render(se);const $e=C.toneMapping;C.toneMapping=Zi;const qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),He===!0&&ze.setGlobalState(C.clippingPlanes,ne),Ai(R,se,ne),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ut=0,Kt=Y.length;Ut<Kt;Ut++){const qt=Y[Ut],{object:Pt,geometry:Qe,material:Lt,group:rt}=qt;if(Lt.side===Ea&&Pt.layers.test(ne.layers)){const Mn=Lt.side;Lt.side=Kn,Lt.needsUpdate=!0,qr(Pt,se,ne,Qe,Lt,rt),Lt.side=Mn,Lt.needsUpdate=!0,tt=!0}}tt===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Oe,Ge,We),C.setClearColor(ye,Se),qe!==void 0&&(ne.viewport=qe),C.toneMapping=$e}function Ai(R,Y,se){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const Be=R[Q],{object:Oe,geometry:Ge,group:We}=Be;let $e=Be.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Oe.layers.test(se.layers)&&qr(Oe,Y,se,Ge,$e,We)}}function qr(R,Y,se,ne,Q,Ue){R.onBeforeRender(C,Y,se,ne,Q,Ue),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,Y,se,ne,R,Ue),Q.transparent===!0&&Q.side===Ea&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,C.renderBufferDirect(se,Y,ne,Q,R,Ue),Q.side=fr,Q.needsUpdate=!0,C.renderBufferDirect(se,Y,ne,Q,R,Ue),Q.side=Ea):C.renderBufferDirect(se,Y,ne,Q,R,Ue),R.onAfterRender(C,Y,se,ne,Q,Ue)}function Yr(R,Y,se){Y.isScene!==!0&&(Y=Dt);const ne=M.get(R),Q=P.state.lights,Ue=P.state.shadowsArray,Be=Q.state.version,Oe=Xe.getParameters(R,Q.state,Ue,Y,se),Ge=Xe.getProgramCacheKey(Oe);let We=ne.programs;ne.environment=R.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(R.isMeshStandardMaterial?xe:me).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Nn),We=new Map,ne.programs=We);let $e=We.get(Ge);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===Be)return ro(R,Oe),$e}else Oe.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Oe,C),$e=Xe.acquireProgram(Oe,Ge),We.set(Ge,$e),ne.uniforms=Oe.uniforms;const qe=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=ze.uniform),ro(R,Oe),ne.needsLights=Da(R),ne.lightsStateVersion=Be,ne.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMap.value=Q.state.directionalShadowMap,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotShadowMap.value=Q.state.spotShadowMap,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMap.value=Q.state.pointShadowMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function bl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=hc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ro(R,Y){const se=M.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function hr(R,Y,se,ne,Q){Y.isScene!==!0&&(Y=Dt),q.resetTextureUnits();const Ue=Y.fog,Be=ne.isMeshStandardMaterial?Y.environment:null,Oe=ae===null?C.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:js,Ge=(ne.isMeshStandardMaterial?xe:me).get(ne.envMap||Be),We=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,$e=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!se.morphAttributes.position,tt=!!se.morphAttributes.normal,Ut=!!se.morphAttributes.color;let Kt=Zi;ne.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const qt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=qt!==void 0?qt.length:0,Qe=M.get(ne),Lt=P.state.lights;if(He===!0&&(mt===!0||R!==ce)){const An=R===ce&&ne.id===pe;ze.setState(ne,R,An)}let rt=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==Oe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Ge||ne.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==tt||Qe.morphColors!==Ut||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Pt)&&(rt=!0):(rt=!0,Qe.__version=ne.version);let Mn=Qe.currentProgram;rt===!0&&(Mn=Yr(ne,Y,Q));let $i=!1,Tn=!1,ci=!1;const Ft=Mn.getUniforms(),bn=Qe.uniforms;if(Ye.useProgram(Mn.program)&&($i=!0,Tn=!0,ci=!0),ne.id!==pe&&(pe=ne.id,Tn=!0),$i||ce!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",R.projectionMatrix),Ft.setValue(G,"viewMatrix",R.matrixWorldInverse);const Rn=Ft.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,St.setFromMatrixPosition(R.matrixWorld)),Ot.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,Tn=!0,ci=!0)}if(Qe.needsLights&&(Lt.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",Lt.state.directionalShadowMap,q),Lt.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",Lt.state.spotShadowMap,q),Lt.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",Lt.state.pointShadowMap,q)),Q.isSkinnedMesh){Ft.setOptional(G,Q,"bindMatrix"),Ft.setOptional(G,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ft.setValue(G,"boneTexture",An.boneTexture,q))}Q.isBatchedMesh&&(Ft.setOptional(G,Q,"batchingTexture"),Ft.setValue(G,"batchingTexture",Q._matricesTexture,q),Ft.setOptional(G,Q,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",Q._indirectTexture,q),Ft.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",Q._colorsTexture,q));const pn=se.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ft.update(Q,se,Mn),(Tn||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Ft.setValue(G,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(bn.envMap.value=Ge,bn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=VC()),Tn&&(Ft.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&so(bn,ci),Ue&&ne.fog===!0&&it.refreshFogUniforms(bn,Ue),it.refreshMaterialUniforms(bn,ne,le,X,P.state.transmissionRenderTarget[R.id]),hc.upload(G,bl(Qe),bn,q)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(hc.upload(G,bl(Qe),bn,q),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(G,"center",Q.center),Ft.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(G,"normalMatrix",Q.normalMatrix),Ft.setValue(G,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const An=ne.uniformsGroups;for(let Rn=0,jr=An.length;Rn<jr;Rn++){const Ri=An[Rn];Ee.update(Ri,Mn),Ee.bind(Ri,Mn)}}return Mn}function so(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Da(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,Y,se){const ne=M.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=Y,M.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const se=M.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Ua=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,se=0){ae=R,k=Y,re=se;let ne=null,Q=!1,Ue=!1;if(R){const Oe=M.get(R);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),te=R.scissorTest,Ye.viewport(F),Ye.scissor(H),Ye.setScissorTest(te),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Oe.__hasExternalTextures)q.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&M.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const We=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ne=We[Y][se]:ne=We[Y],Q=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ne=M.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[se]:ne=We,F.copy(R.viewport),H.copy(R.scissor),te=R.scissorTest}else F.copy(ee).multiplyScalar(le).floor(),H.copy(fe).multiplyScalar(le).floor(),te=De;if(se!==0&&(ne=Ua),Ye.bindFramebuffer(G.FRAMEBUFFER,ne)&&Ye.drawBuffers(R,ne),Ye.viewport(F),Ye.scissor(H),Ye.setScissorTest(te),Q){const Oe=M.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,se)}else if(Ue){const Oe=Y;for(let Ge=0;Ge<R.textures.length;Ge++){const We=M.get(R.textures[Ge]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ge,We.__webglTexture,se,Oe)}}else if(R!==null&&se!==0){const Oe=M.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,se)}pe=-1},this.readRenderTargetPixels=function(R,Y,se,ne,Q,Ue,Be,Oe=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const We=R.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(qe)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ne&&se>=0&&se<=R.height-Q&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,se,ne,Q,Ae.convert($e),Ae.convert(qe),Ue))}finally{const We=ae!==null?M.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,ne,Q,Ue,Be,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge)if(Y>=0&&Y<=R.width-ne&&se>=0&&se<=R.height-Q){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);const We=R.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,se,ne,Q,Ae.convert($e),Ae.convert(qe),0);const Ut=ae!==null?M.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Ut);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await oT(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(tt),G.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,se=0){const ne=Math.pow(2,-se),Q=Math.floor(R.image.width*ne),Ue=Math.floor(R.image.height*ne),Be=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Be,Oe,Q,Ue),Ye.unbindTexture()};const dr=G.createFramebuffer(),La=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,se=null,ne=null,Q=0,Ue=null){Ue===null&&(Q!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let Be,Oe,Ge,We,$e,qe,tt,Ut,Kt;const qt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(se!==null)Be=se.max.x-se.min.x,Oe=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,$e=se.min.y,qe=se.isBox3?se.min.z:0;else{const pn=Math.pow(2,-Q);Be=Math.floor(qt.width*pn),Oe=Math.floor(qt.height*pn),R.isDataArrayTexture?Ge=qt.depth:R.isData3DTexture?Ge=Math.floor(qt.depth*pn):Ge=1,We=0,$e=0,qe=0}ne!==null?(tt=ne.x,Ut=ne.y,Kt=ne.z):(tt=0,Ut=0,Kt=0);const Pt=Ae.convert(Y.format),Qe=Ae.convert(Y.type);let Lt;Y.isData3DTexture?(q.setTexture3D(Y,0),Lt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Lt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Lt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const rt=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),$i=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),ci=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const Ft=R.isDataArrayTexture||R.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const pn=M.get(R),An=M.get(Y),Rn=M.get(pn.__renderTarget),jr=M.get(An.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Ri=0;Ri<Ge;Ri++)Ft&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(R).__webglTexture,Q,qe+Ri),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Ue,Kt+Ri)),G.blitFramebuffer(We,$e,Be,Oe,tt,Ut,Be,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||M.has(R)){const pn=M.get(R),An=M.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,dr),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,La);for(let Rn=0;Rn<Ge;Rn++)Ft?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Q,qe+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Q),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,Ue,Kt+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,Ue),Q!==0?G.blitFramebuffer(We,$e,Be,Oe,tt,Ut,Be,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Lt,Ue,tt,Ut,Kt+Rn,We,$e,Be,Oe):G.copyTexSubImage2D(Lt,Ue,tt,Ut,We,$e,Be,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Lt,Ue,tt,Ut,Kt,Be,Oe,Ge,Pt,Qe,qt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Lt,Ue,tt,Ut,Kt,Be,Oe,Ge,Pt,qt.data):G.texSubImage3D(Lt,Ue,tt,Ut,Kt,Be,Oe,Ge,Pt,Qe,qt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,tt,Ut,Be,Oe,Pt,Qe,qt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,tt,Ut,qt.width,qt.height,Pt,qt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,tt,Ut,Be,Oe,Pt,Qe,qt);G.pixelStorei(G.UNPACK_ROW_LENGTH,rt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$i),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),Ue===0&&Y.generateMipmaps&&G.generateMipmap(Lt),Ye.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){k=0,re=0,ae=null,Ye.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const Av={type:"change"},Pp={type:"start"},Nx={type:"end"},ic=new gx,Rv=new lr,XC=Math.cos(70*uT.DEG2RAD),_n=new K,Zn=2*Math.PI,Xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pd=1e-6;class WC extends YT{constructor(e,i=null){super(e,i),this.state=Xt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Gr,this._lastTargetPosition=new K,this._quat=new Gr().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tv,this._sphericalDelta=new tv,this._scale=1,this._panOffset=new K,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new K,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YC.bind(this),this._onPointerDown=qC.bind(this),this._onPointerUp=jC.bind(this),this._onContextMenu=t3.bind(this),this._onMouseWheel=QC.bind(this),this._onKeyDown=JC.bind(this),this._onTouchStart=$C.bind(this),this._onTouchMove=e3.bind(this),this._onMouseDown=ZC.bind(this),this._onMouseMove=KC.bind(this),this._interceptControlDown=n3.bind(this),this._interceptControlUp=i3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Av),this.update(),this.state=Xt.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=_n.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<XC?this.object.lookAt(this.target):(Rv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(Rv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pd||this._lastTargetPosition.distanceToSquared(this.target)>pd?(this.dispatchEvent(Av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let u=_n.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,u=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new et,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function qC(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function YC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jC(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nx),this.state=Xt.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function ZC(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Xt.DOLLY;break;case Vs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xt.ROTATE}break;case Vs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xt.PAN}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Pp)}function KC(s){switch(this.state){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function QC(s){this.enabled===!1||this.enableZoom===!1||this.state!==Xt.NONE||(s.preventDefault(),this.dispatchEvent(Pp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nx))}function JC(s){this.enabled!==!1&&this._handleKeyDown(s)}function $C(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Xt.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Xt.TOUCH_PAN;break;default:this.state=Xt.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Xt.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Xt.TOUCH_DOLLY_ROTATE;break;default:this.state=Xt.NONE}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Pp)}function e3(s){switch(this._trackPointer(s),this.state){case Xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Xt.NONE}}function t3(s){this.enabled!==!1&&s.preventDefault()}function n3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class El{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a3=new Op(-1,1,1,-1,0,1);class r3 extends Ji{constructor(){super(),this.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ii([0,2,0,0,2,0],2))}}const s3=new r3;class Ox{constructor(e){this._mesh=new zi(s3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Px extends El{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gc.clone(e.uniforms),this.material=new Ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ox(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cv extends El{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class o3 extends El{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class l3{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new et);this._width=r.width,this._height=r.height,i=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Px(dc),this.copyPass.material.blending=ji,this.clock=new qT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Cv!==void 0&&(f instanceof Cv?r=!0:f instanceof o3&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class u3 extends El{constructor(e,i,r=null,l=null,u=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=l}}const c3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ks extends El{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new et(e.x,e.y):new et(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Qn(u,f,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Qn(u,f,{type:oi});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const x=new Qn(u,f,{type:oi});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),u=Math.round(u/2),f=Math.round(f/2)}const d=c3;this.highPassUniforms=gc.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ln({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new et(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gc.clone(dc.uniforms),this.blendMaterial=new Ln({uniforms:this.copyUniforms,vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,premultipliedAlpha:!0,blending:Sd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new Lp,this._fsQuad=new Ox(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(r,l),this.renderTargetsVertical[u].setSize(r,l),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,u){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),u&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=f}_getSeparableBlurMaterial(e){const i=[],r=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(r*r))/r);return new Ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ks.BlurDirectionX=new et(1,0);Ks.BlurDirectionY=new et(0,1);var f3=Object.prototype.toString,to=Array.isArray||function(e){return f3.call(e)==="[object Array]"};function Ip(s){return typeof s=="function"}function h3(s){return to(s)?"array":typeof s}function md(s){return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function wv(s,e){return s!=null&&typeof s=="object"&&e in s}function d3(s,e){return s!=null&&typeof s!="object"&&s.hasOwnProperty&&s.hasOwnProperty(e)}var p3=RegExp.prototype.test;function m3(s,e){return p3.call(s,e)}var _3=/\S/;function g3(s){return!m3(_3,s)}var v3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function x3(s){return String(s).replace(/[&<>"'`=\/]/g,function(i){return v3[i]})}var S3=/\s*/,y3=/\s+/,Dv=/\s*=/,E3=/\s*\}/,M3=/#|\^|\/|>|\{|&|=|!/;function T3(s,e){if(!s)return[];var i=!1,r=[],l=[],u=[],f=!1,d=!1,m="",p=0;function g(){if(f&&!d)for(;u.length;)delete l[u.pop()];else u=[];f=!1,d=!1}var _,x,E;function T(Z){if(typeof Z=="string"&&(Z=Z.split(y3,2)),!to(Z)||Z.length!==2)throw new Error("Invalid tags: "+Z);_=new RegExp(md(Z[0])+"\\s*"),x=new RegExp("\\s*"+md(Z[1])),E=new RegExp("\\s*"+md("}"+Z[1]))}T(e||Mi.tags);for(var b=new Ml(s),y,v,w,U,O,P;!b.eos();){if(y=b.pos,w=b.scanUntil(_),w)for(var z=0,I=w.length;z<I;++z)U=w.charAt(z),g3(U)?(u.push(l.length),m+=U):(d=!0,i=!0,m+=" "),l.push(["text",U,y,y+1]),y+=1,U===`
`&&(g(),m="",p=0,i=!1);if(!b.scan(_))break;if(f=!0,v=b.scan(M3)||"name",b.scan(S3),v==="="?(w=b.scanUntil(Dv),b.scan(Dv),b.scanUntil(x)):v==="{"?(w=b.scanUntil(E),b.scan(E3),b.scanUntil(x),v="&"):w=b.scanUntil(x),!b.scan(x))throw new Error("Unclosed tag at "+b.pos);if(v==">"?O=[v,w,y,b.pos,m,p,i]:O=[v,w,y,b.pos],p++,l.push(O),v==="#"||v==="^")r.push(O);else if(v==="/"){if(P=r.pop(),!P)throw new Error('Unopened section "'+w+'" at '+y);if(P[1]!==w)throw new Error('Unclosed section "'+P[1]+'" at '+y)}else v==="name"||v==="{"||v==="&"?d=!0:v==="="&&T(w)}if(g(),P=r.pop(),P)throw new Error('Unclosed section "'+P[1]+'" at '+b.pos);return A3(b3(l))}function b3(s){for(var e=[],i,r,l=0,u=s.length;l<u;++l)i=s[l],i&&(i[0]==="text"&&r&&r[0]==="text"?(r[1]+=i[1],r[3]=i[3]):(e.push(i),r=i));return e}function A3(s){for(var e=[],i=e,r=[],l,u,f=0,d=s.length;f<d;++f)switch(l=s[f],l[0]){case"#":case"^":i.push(l),r.push(l),i=l[4]=[];break;case"/":u=r.pop(),u[5]=l[2],i=r.length>0?r[r.length-1][4]:e;break;default:i.push(l)}return e}function Ml(s){this.string=s,this.tail=s,this.pos=0}Ml.prototype.eos=function(){return this.tail===""};Ml.prototype.scan=function(e){var i=this.tail.match(e);if(!i||i.index!==0)return"";var r=i[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};Ml.prototype.scanUntil=function(e){var i=this.tail.search(e),r;switch(i){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=r.length,r};function Qs(s,e){this.view=s,this.cache={".":this.view},this.parent=e}Qs.prototype.push=function(e){return new Qs(e,this)};Qs.prototype.lookup=function(e){var i=this.cache,r;if(i.hasOwnProperty(e))r=i[e];else{for(var l=this,u,f,d,m=!1;l;){if(e.indexOf(".")>0)for(u=l.view,f=e.split("."),d=0;u!=null&&d<f.length;)d===f.length-1&&(m=wv(u,f[d])||d3(u,f[d])),u=u[f[d++]];else u=l.view[e],m=wv(l.view,e);if(m){r=u;break}l=l.parent}i[e]=r}return Ip(r)&&(r=r.call(this.view)),r};function Gn(){this.templateCache={_cache:{},set:function(e,i){this._cache[e]=i},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}Gn.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};Gn.prototype.parse=function(e,i){var r=this.templateCache,l=e+":"+(i||Mi.tags).join(":"),u=typeof r<"u",f=u?r.get(l):void 0;return f==null&&(f=T3(e,i),u&&r.set(l,f)),f};Gn.prototype.render=function(e,i,r,l){var u=this.getConfigTags(l),f=this.parse(e,u),d=i instanceof Qs?i:new Qs(i,void 0);return this.renderTokens(f,d,r,e,l)};Gn.prototype.renderTokens=function(e,i,r,l,u){for(var f="",d,m,p,g=0,_=e.length;g<_;++g)p=void 0,d=e[g],m=d[0],m==="#"?p=this.renderSection(d,i,r,l,u):m==="^"?p=this.renderInverted(d,i,r,l,u):m===">"?p=this.renderPartial(d,i,r,u):m==="&"?p=this.unescapedValue(d,i):m==="name"?p=this.escapedValue(d,i,u):m==="text"&&(p=this.rawValue(d)),p!==void 0&&(f+=p);return f};Gn.prototype.renderSection=function(e,i,r,l,u){var f=this,d="",m=i.lookup(e[1]);function p(x){return f.render(x,i,r,u)}if(m){if(to(m))for(var g=0,_=m.length;g<_;++g)d+=this.renderTokens(e[4],i.push(m[g]),r,l,u);else if(typeof m=="object"||typeof m=="string"||typeof m=="number")d+=this.renderTokens(e[4],i.push(m),r,l,u);else if(Ip(m)){if(typeof l!="string")throw new Error("Cannot use higher-order sections without the original template");m=m.call(i.view,l.slice(e[3],e[5]),p),m!=null&&(d+=m)}else d+=this.renderTokens(e[4],i,r,l,u);return d}};Gn.prototype.renderInverted=function(e,i,r,l,u){var f=i.lookup(e[1]);if(!f||to(f)&&f.length===0)return this.renderTokens(e[4],i,r,l,u)};Gn.prototype.indentPartial=function(e,i,r){for(var l=i.replace(/[^ \t]/g,""),u=e.split(`
`),f=0;f<u.length;f++)u[f].length&&(f>0||!r)&&(u[f]=l+u[f]);return u.join(`
`)};Gn.prototype.renderPartial=function(e,i,r,l){if(r){var u=this.getConfigTags(l),f=Ip(r)?r(e[1]):r[e[1]];if(f!=null){var d=e[6],m=e[5],p=e[4],g=f;m==0&&p&&(g=this.indentPartial(f,p,d));var _=this.parse(g,u);return this.renderTokens(_,i,r,g,l)}}};Gn.prototype.unescapedValue=function(e,i){var r=i.lookup(e[1]);if(r!=null)return r};Gn.prototype.escapedValue=function(e,i,r){var l=this.getConfigEscape(r)||Mi.escape,u=i.lookup(e[1]);if(u!=null)return typeof u=="number"&&l===Mi.escape?String(u):l(u)};Gn.prototype.rawValue=function(e){return e[1]};Gn.prototype.getConfigTags=function(e){return to(e)?e:e&&typeof e=="object"?e.tags:void 0};Gn.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!to(e))return e.escape};var Mi={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(s){pl.templateCache=s},get templateCache(){return pl.templateCache}},pl=new Gn;Mi.clearCache=function(){return pl.clearCache()};Mi.parse=function(e,i){return pl.parse(e,i)};Mi.render=function(e,i,r,l){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+h3(e)+'" was given as the first argument for mustache#render(template, view, partials)');return pl.render(e,i,r,l)};Mi.escape=x3;Mi.Scanner=Ml;Mi.Context=Qs;Mi.Writer=Gn;const R3=`void main() {\r
    gl_Position = vec4( position, 1.0 );\r
}\r
`,C3=`#define M_PI 3.141592653589793238462643383279\r
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
const float ACCRETION_BRIGHTNESS = .9;\r
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
const float FOV_ANGLE_DEG = 20.0;\r
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
    \r
    return color;\r
    \r
\r
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
    // vec3 pos = vec3(0.0, 0.0, 0.0);\r
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
`,w3=`precision lowp float;\r
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
`,D3={name:"DitherColorShader",uniforms:{tDiffuse:{value:null},uResolution:{value:new et(window.innerWidth,window.innerHeight)},uColor1:{value:new pt(131589)},uColor2:{value:new pt(657966)},uColor3:{value:new pt(13216)},uColor4:{value:new pt(51455)},uColor5:{value:new pt(7143418)},uColor6:{value:new pt(15138815)}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:w3},_d=window.innerWidth/window.innerHeight;class U3{constructor(){this.position=new K(0,0,0),this.velocity=new K(0,0,0),this.orientation=new lt,this.time=0}orbitalFrame(){const e=new K().subVectors(this.velocity.clone().normalize().multiplyScalar(4),this.position).normalize(),i=new K().crossVectors(this.position,e).normalize(),r=new K().crossVectors(e,i).normalize(),l=new Jt;l.makeBasis(r,e,i);const u=new lt;return u.setFromMatrix4(l),u}move(e,i){e*=i.time_scale;let r,l=0;if(i.observer.motion){r=i.observer.distance,l=1/Math.sqrt(2*(r-1));const u=l/r,f=this.time*u,d=Math.sin(f),m=Math.cos(f);this.position.set(m*r,d*r,0),this.velocity.set(-d*l,m*l,0);const g=(x=>Math.PI*x/180)(i.observer.orbital_inclination),_=new Jt().makeRotationY(g);this.position.applyMatrix4(_),this.velocity.applyMatrix4(_)}else r=this.position.length();i.gravitational_time_dilation&&(e=Math.sqrt(e*e*(1-l*l)/(1-1/r))),this.time+=e}}class L3{constructor(e){this.template=e,this.parameters={n_steps:100,quality:"medium",accretion_disk:!0,planet:{enabled:!0,distance:7,radius:.4},lorentz_contraction:!0,gravitational_time_dilation:!0,aberration:!0,beaming:!0,doppler_shift:!0,light_travel_time:!0,time_scale:5,observer:{motion:!0,distance:30,orbital_inclination:-1},planetEnabled:function(){return this.planet.enabled&&this.quality!=="fast"},observerMotion:function(){return this.observer.motion},camera:{cinematic:!0,roll:0}},this.needsUpdate=!0}hasMovingParts(){return this.parameters.planet.enabled||this.parameters.observer.motion}compile(){return Mi.render(this.template,this.parameters)}}const Uv=s=>Math.PI*s/180,N3=()=>{const s=de.useRef(null),e=de.useRef(null),i=de.useRef(null),r=de.useRef(null);return de.useEffect(()=>{const l=s.current,u=window.innerWidth,f=window.innerHeight,d=new LT;e.current=d;const m=new yi(90,u/f,1,8e3),p=new kC;console.log(_d),_d<1?p.setPixelRatio(.9):p.setPixelRatio(.6),p.setSize(u,f),l.appendChild(p.domElement);const g=new U3;r.current=g;const _=new L3(C3);i.current=_;const x=new XT;if(_d<1)var E="/img/gradient.png",T=.1;else E="/img/gradient15.png",T=.1;const b={galaxy:x.load("/img/gradient7.png"),spectra:x.load("/img/spectra.png"),moon:x.load("/img/berserk.jpg"),accretion_disk:x.load(E),stars:x.load("/img/stars1.png")};b.galaxy.magFilter=gn,b.galaxy.minFilter=gn;const y=new yl(2,2),v={time:{value:0},resolution:{value:new et(u,f)},cam_pos:{value:new K},cam_x:{value:new K},cam_y:{value:new K},cam_z:{value:new K},cam_vel:{value:new K},planet_distance:{value:_.parameters.planet.distance},planet_radius:{value:_.parameters.planet.radius},star_texture:{value:b.stars},accretion_disk_texture:{value:b.accretion_disk},galaxy_texture:{value:b.galaxy},planet_texture:{value:b.moon},spectrum_texture:{value:b.spectra}},w=new Ln({uniforms:v,vertexShader:R3,fragmentShader:_.compile()}),U=new zi(y,w);d.add(U);const O=new WC(m,p.domElement);O.target.set(0,0,0),(()=>{m.matrixWorldInverse.makeRotationX(Uv(-0)),m.matrixWorldInverse.multiply(new Jt().makeRotationY(Uv(-0)));const X=m.matrixWorldInverse.elements;m.position.set(X[2],X[6],X[10])})();const z=new l3(p),I=new u3(d,m);z.addPass(I);const Z=new Ks(new et(u,f),T,.1,0);z.addPass(Z);const C=new Px(D3);C.uniforms.uResolution.value.set(u,f),z.addPass(C);const D=()=>{w.fragmentShader=_.compile(),w.needsUpdate=!0,_.needsUpdate=!0},k=()=>{const X=m.matrixWorldInverse.elements;let le;if(_.parameters.observer.motion?le=new lt:le=g.orientation,le.set(X[0],X[1],X[2],X[8],X[9],X[10],X[4],X[5],X[6]),_.parameters.observer.motion)g.orientation=g.orbitalFrame().multiply(le);else{const Te=new K(X[6],X[7],X[8]),Le=_.parameters.observer.distance;g.position.set(-Te.x*Le,-Te.y*Le,-Te.z*Le),g.velocity.set(0,0,0)}};O.addEventListener("change",k),k();const re=()=>{v.planet_distance.value=_.parameters.planet.distance,v.planet_radius.value=_.parameters.planet.radius,v.resolution.value.set(p.domElement.width,p.domElement.height),v.time.value=g.time,v.cam_pos.value.copy(g.position),v.cam_vel.value.copy(g.velocity);const X=g.orientation.elements;v.cam_x.value.set(X[0],X[1],X[2]),v.cam_y.value.set(X[3],X[4],X[5]),v.cam_z.value.set(X[6],X[7],X[8])};let ae=new Jt().identity(),pe=performance.now(),ce;const F=(X,le)=>{let Te=0;for(let Le=0;Le<16;Le++){const ee=X.elements[Le]-le.elements[Le];Te+=ee*ee}return Math.sqrt(Te)},H=()=>{ce=requestAnimationFrame(H);const X=performance.now(),le=(X-pe)/1e3;pe=X,g.move(le,_.parameters),_.parameters.observer.motion&&k(),re(),m.updateMatrixWorld(),m.matrixWorldInverse.copy(m.matrixWorld).invert(),(_.needsUpdate||_.hasMovingParts()||F(m.matrixWorldInverse,ae)>1e-10)&&(_.needsUpdate=!1,z.render(),ae.copy(m.matrixWorldInverse))};H();const te=()=>{const X=window.innerWidth,le=window.innerHeight;p.setSize(X,le),m.aspect=X/le,m.updateProjectionMatrix(),z.setSize(X,le),Z.resolution.set(X,le),C.uniforms.uResolution.value.set(X,le)};window.addEventListener("resize",te);const ye=X=>{_.parameters.observer.orbital_inclination=-(X.clientX/window.innerWidth)*29+10,_.parameters.observer.distance=(X.clientY/window.innerHeight+1)*35,D()};window.addEventListener("mousemove",ye);const Se=X=>{if(X.touches.length>0){const le=X.touches[0];_.parameters.observer.orbital_inclination=-(le.clientX/window.innerWidth)*29+10,_.parameters.observer.distance=(le.clientY/window.innerHeight+1)*35,D()}};window.addEventListener("touchmove",Se,{passive:!0});const N=X=>{if(X.touches.length>0){const le=X.touches[0];_.parameters.observer.orbital_inclination=-(le.clientX/window.innerWidth)*29+10,_.parameters.observer.distance=(le.clientY/window.innerHeight+1)*35,D()}};return window.addEventListener("touchstart",N,{passive:!0}),()=>{cancelAnimationFrame(ce),window.removeEventListener("resize",te),window.removeEventListener("mousemove",ye),window.removeEventListener("touchmove",Se),window.removeEventListener("touchstart",N),O.dispose(),p.dispose(),l&&(l.innerHTML="")}},[]),Ke.jsx("div",{ref:s,style:{width:"100%",height:"100vh",overflow:"hidden",pointerEvents:"none",touchAction:"none"}})},O3=()=>Ke.jsx("div",{className:"corner-links",children:Ke.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"corner-link","aria-label":"GitHub",children:Ke.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:Ke.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})})}),P3=()=>{const[s,e]=de.useState(!0);return de.useEffect(()=>{const i=setTimeout(()=>{const r=document.querySelector(".shader-loader");r&&(r.classList.add("fade-out"),setTimeout(()=>e(!1),600))},1500);return()=>clearTimeout(i)},[]),Ke.jsxs("div",{className:"landing-container",children:[s&&Ke.jsx("div",{className:"shader-loader",children:Ke.jsxs("div",{className:"loader-content",children:[Ke.jsx("div",{className:"loader-spinner"}),Ke.jsx("div",{className:"loader-text",children:"Initializing Shader"})]})}),Ke.jsx("div",{className:"three-scene-wrapper",children:Ke.jsx(N3,{})}),Ke.jsx(O3,{})]})},I3=()=>{const s=Wv();return Ke.jsxs("div",{className:"about-container",children:[Ke.jsx("button",{className:"close-button",onClick:()=>s("/"),"aria-label":"Close",children:"×"}),Ke.jsxs("div",{className:"about-content",children:[Ke.jsxs("div",{className:"grid-section hero-section",children:[Ke.jsx("h1",{className:"section-title",children:"About This Project"}),Ke.jsx("p",{className:"section-text",children:"Exploring the intersection of astrophysics and interactive visualization."})]}),Ke.jsxs("div",{className:"grid-layout",children:[Ke.jsxs("div",{className:"grid-item card-1",children:[Ke.jsx("h2",{children:"The Black Hole Simulation"}),Ke.jsx("p",{children:"This interactive visualization uses real-time ray-tracing to simulate gravitational lensing around a Schwarzschild black hole. Watch as light bends around the event horizon, creating stunning visual effects."})]}),Ke.jsxs("div",{className:"grid-item card-2",children:[Ke.jsx("h2",{children:"Physics Behind It"}),Ke.jsx("p",{children:"The simulation accounts for general relativistic effects including gravitational lensing, Doppler shifting, and the warping of spacetime around massive objects."})]}),Ke.jsxs("div",{className:"grid-item card-3",children:[Ke.jsx("h2",{children:"Technical Features"}),Ke.jsxs("ul",{children:[Ke.jsx("li",{children:"Real-time GLSL Ray Tracing"}),Ke.jsx("li",{children:"Accretion Disk Rendering"}),Ke.jsx("li",{children:"Interactive Camera Controls"}),Ke.jsx("li",{children:"WebGL Powered Graphics"})]})]}),Ke.jsxs("div",{className:"grid-item card-4",children:[Ke.jsx("h2",{children:"How to Interact"}),Ke.jsx("p",{children:"Use your mouse to drag and rotate the view. The simulation runs continuously, showing the orbital dynamics around the black hole."})]}),Ke.jsxs("div",{className:"grid-item card-5 full-width",children:[Ke.jsx("h2",{children:"Learn More"}),Ke.jsx("p",{children:"This visualization is inspired by real astrophysics research and demonstrates the power of modern web technologies to bring complex scientific concepts to life."}),Ke.jsxs("div",{className:"contact-buttons",children:[Ke.jsx("button",{className:"btn-primary",children:"Back to Simulation"}),Ke.jsx("button",{className:"btn-secondary",children:"Technical Details"})]})]})]})]})]})};function F3(){return Ke.jsx(_M,{children:Ke.jsxs("div",{className:"app",children:[Ke.jsx(AM,{}),Ke.jsxs(qE,{children:[Ke.jsx(vd,{path:"/",element:Ke.jsx(P3,{})}),Ke.jsx(vd,{path:"/about",element:Ke.jsx(I3,{})})]})]})})}Zy.createRoot(document.getElementById("root")).render(Ke.jsx(de.StrictMode,{children:Ke.jsx(F3,{})}));
