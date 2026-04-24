var Og=Object.defineProperty;var Ng=(s,t,e)=>t in s?Og(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Te=(s,t,e)=>Ng(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uu(s){const t=Object.create(null);for(const e of s.split(","))t[e]=1;return e=>e in t}const de={},Ur=[],Si=()=>{},Ip=()=>!1,xl=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),yl=s=>s.startsWith("onUpdate:"),Ke=Object.assign,Fu=(s,t)=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)},Ug=Object.prototype.hasOwnProperty,ae=(s,t)=>Ug.call(s,t),Wt=Array.isArray,Fr=s=>Jo(s)==="[object Map]",Dp=s=>Jo(s)==="[object Set]",kh=s=>Jo(s)==="[object Date]",jt=s=>typeof s=="function",Re=s=>typeof s=="string",bi=s=>typeof s=="symbol",ce=s=>s!==null&&typeof s=="object",Op=s=>(ce(s)||jt(s))&&jt(s.then)&&jt(s.catch),Np=Object.prototype.toString,Jo=s=>Np.call(s),Fg=s=>Jo(s).slice(8,-1),Up=s=>Jo(s)==="[object Object]",zu=s=>Re(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Eo=Uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=s=>{const t=Object.create(null);return e=>t[e]||(t[e]=s(e))},zg=/-\w/g,si=Ml(s=>s.replace(zg,t=>t.slice(1).toUpperCase())),Bg=/\B([A-Z])/g,ir=Ml(s=>s.replace(Bg,"-$1").toLowerCase()),Fp=Ml(s=>s.charAt(0).toUpperCase()+s.slice(1)),Vl=Ml(s=>s?`on${Fp(s)}`:""),vi=(s,t)=>!Object.is(s,t),Wl=(s,...t)=>{for(let e=0;e<s.length;e++)s[e](...t)},zp=(s,t,e,n=!1)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,writable:n,value:e})},kg=s=>{const t=parseFloat(s);return isNaN(t)?s:t};let Gh;const Sl=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function El(s){if(Wt(s)){const t={};for(let e=0;e<s.length;e++){const n=s[e],i=Re(n)?Wg(n):El(n);if(i)for(const r in i)t[r]=i[r]}return t}else if(Re(s)||ce(s))return s}const Gg=/;(?![^(]*\))/g,Hg=/:([^]+)/,Vg=/\/\*[^]*?\*\//g;function Wg(s){const t={};return s.replace(Vg,"").split(Gg).forEach(e=>{if(e){const n=e.split(Hg);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Bu(s){let t="";if(Re(s))t=s;else if(Wt(s))for(let e=0;e<s.length;e++){const n=Bu(s[e]);n&&(t+=n+" ")}else if(ce(s))for(const e in s)s[e]&&(t+=e+" ");return t.trim()}const Xg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qg=Uu(Xg);function Bp(s){return!!s||s===""}function Yg(s,t){if(s.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<s.length;n++)e=ku(s[n],t[n]);return e}function ku(s,t){if(s===t)return!0;let e=kh(s),n=kh(t);if(e||n)return e&&n?s.getTime()===t.getTime():!1;if(e=bi(s),n=bi(t),e||n)return s===t;if(e=Wt(s),n=Wt(t),e||n)return e&&n?Yg(s,t):!1;if(e=ce(s),n=ce(t),e||n){if(!e||!n)return!1;const i=Object.keys(s).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in s){const a=s.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ku(s[o],t[o]))return!1}}return String(s)===String(t)}const kp=s=>!!(s&&s.__v_isRef===!0),Ws=s=>Re(s)?s:s==null?"":Wt(s)||ce(s)&&(s.toString===Np||!jt(s.toString))?kp(s)?Ws(s.value):JSON.stringify(s,Gp,2):String(s),Gp=(s,t)=>kp(t)?Gp(s,t.value):Fr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,i],r)=>(e[Xl(n,r)+" =>"]=i,e),{})}:Dp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Xl(e))}:bi(t)?Xl(t):ce(t)&&!Wt(t)&&!Up(t)?String(t):t,Xl=(s,t="")=>{var e;return bi(s)?`Symbol(${(e=s.description)!=null?e:t})`:s};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class jg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tn,!t&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=tn;try{return tn=this,t()}finally{tn=e}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){if(this._on>0&&--this._on===0){if(tn===this)tn=this.prevScope;else{let t=tn;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function $g(){return tn}let fe;const ql=new WeakSet;class Hp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ql.has(this)&&(ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hh(this),Xp(this);const t=fe,e=ri;fe=this,ri=!0;try{return this.fn()}finally{qp(this),fe=t,ri=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vu(t);this.deps=this.depsTail=void 0,Hh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kc(this)&&this.run()}get dirty(){return Kc(this)}}let Vp=0,bo,wo;function Wp(s,t=!1){if(s.flags|=8,t){s.next=wo,wo=s;return}s.next=bo,bo=s}function Gu(){Vp++}function Hu(){if(--Vp>0)return;if(wo){let t=wo;for(wo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let s;for(;bo;){let t=bo;for(bo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){s||(s=n)}t=e}}if(s)throw s}function Xp(s){for(let t=s.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qp(s){let t,e=s.depsTail,n=e;for(;n;){const i=n.prevDep;n.version===-1?(n===e&&(e=i),Vu(n),Kg(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}s.deps=t,s.depsTail=e}function Kc(s){for(let t=s.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!s._dirty}function Yp(s){if(s.flags&4&&!(s.flags&16)||(s.flags&=-17,s.globalVersion===Fo)||(s.globalVersion=Fo,!s.isSSR&&s.flags&128&&(!s.deps&&!s._dirty||!Kc(s))))return;s.flags|=2;const t=s.dep,e=fe,n=ri;fe=s,ri=!0;try{Xp(s);const i=s.fn(s._value);(t.version===0||vi(i,s._value))&&(s.flags|=128,s._value=i,t.version++)}catch(i){throw t.version++,i}finally{fe=e,ri=n,qp(s),s.flags&=-3}}function Vu(s,t=!1){const{dep:e,prevSub:n,nextSub:i}=s;if(n&&(n.nextSub=i,s.prevSub=void 0),i&&(i.prevSub=n,s.nextSub=void 0),e.subs===s&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Vu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Kg(s){const{prevDep:t,nextDep:e}=s;t&&(t.nextDep=e,s.prevDep=void 0),e&&(e.prevDep=t,s.nextDep=void 0)}let ri=!0;const jp=[];function Xi(){jp.push(ri),ri=!1}function qi(){const s=jp.pop();ri=s===void 0?!0:s}function Hh(s){const{cleanup:t}=s;if(s.cleanup=void 0,t){const e=fe;fe=void 0;try{t()}finally{fe=e}}}let Fo=0;class Zg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!ri||fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==fe)e=this.activeLink=new Zg(fe,this),fe.deps?(e.prevDep=fe.depsTail,fe.depsTail.nextDep=e,fe.depsTail=e):fe.deps=fe.depsTail=e,$p(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=fe.depsTail,e.nextDep=void 0,fe.depsTail.nextDep=e,fe.depsTail=e,fe.deps===e&&(fe.deps=n)}return e}trigger(t){this.version++,Fo++,this.notify(t)}notify(t){Gu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Hu()}}}function $p(s){if(s.dep.sc++,s.sub.flags&4){const t=s.dep.computed;if(t&&!s.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)$p(n)}const e=s.dep.subs;e!==s&&(s.prevSub=e,e&&(e.nextSub=s)),s.dep.subs=s}}const Zc=new WeakMap,Xs=Symbol(""),Jc=Symbol(""),zo=Symbol("");function en(s,t,e){if(ri&&fe){let n=Zc.get(s);n||Zc.set(s,n=new Map);let i=n.get(e);i||(n.set(e,i=new Wu),i.map=n,i.key=e),i.track()}}function Vi(s,t,e,n,i,r){const o=Zc.get(s);if(!o){Fo++;return}const a=l=>{l&&l.trigger()};if(Gu(),t==="clear")o.forEach(a);else{const l=Wt(s),c=l&&zu(e);if(l&&e==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===zo||!bi(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(zo)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Xs)),Fr(s)&&a(o.get(Jc)));break;case"delete":l||(a(o.get(Xs)),Fr(s)&&a(o.get(Jc)));break;case"set":Fr(s)&&a(o.get(Xs));break}}Hu()}function or(s){const t=oe(s);return t===s?t:(en(t,"iterate",zo),jn(s)?t:t.map(oi))}function bl(s){return en(s=oe(s),"iterate",zo),s}function pi(s,t){return Yi(s)?qr(qs(s)?oi(t):t):oi(t)}const Jg={__proto__:null,[Symbol.iterator](){return Yl(this,Symbol.iterator,s=>pi(this,s))},concat(...s){return or(this).concat(...s.map(t=>Wt(t)?or(t):t))},entries(){return Yl(this,"entries",s=>(s[1]=pi(this,s[1]),s))},every(s,t){return Ri(this,"every",s,t,void 0,arguments)},filter(s,t){return Ri(this,"filter",s,t,e=>e.map(n=>pi(this,n)),arguments)},find(s,t){return Ri(this,"find",s,t,e=>pi(this,e),arguments)},findIndex(s,t){return Ri(this,"findIndex",s,t,void 0,arguments)},findLast(s,t){return Ri(this,"findLast",s,t,e=>pi(this,e),arguments)},findLastIndex(s,t){return Ri(this,"findLastIndex",s,t,void 0,arguments)},forEach(s,t){return Ri(this,"forEach",s,t,void 0,arguments)},includes(...s){return jl(this,"includes",s)},indexOf(...s){return jl(this,"indexOf",s)},join(s){return or(this).join(s)},lastIndexOf(...s){return jl(this,"lastIndexOf",s)},map(s,t){return Ri(this,"map",s,t,void 0,arguments)},pop(){return oo(this,"pop")},push(...s){return oo(this,"push",s)},reduce(s,...t){return Vh(this,"reduce",s,t)},reduceRight(s,...t){return Vh(this,"reduceRight",s,t)},shift(){return oo(this,"shift")},some(s,t){return Ri(this,"some",s,t,void 0,arguments)},splice(...s){return oo(this,"splice",s)},toReversed(){return or(this).toReversed()},toSorted(s){return or(this).toSorted(s)},toSpliced(...s){return or(this).toSpliced(...s)},unshift(...s){return oo(this,"unshift",s)},values(){return Yl(this,"values",s=>pi(this,s))}};function Yl(s,t,e){const n=bl(s),i=n[t]();return n!==s&&!jn(s)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=e(r.value)),r}),i}const Qg=Array.prototype;function Ri(s,t,e,n,i,r){const o=bl(s),a=o!==s&&!jn(s),l=o[t];if(l!==Qg[t]){const h=l.apply(s,r);return a?oi(h):h}let c=e;o!==s&&(a?c=function(h,f){return e.call(this,pi(s,h),f,s)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,s)}));const u=l.call(o,c,n);return a&&i?i(u):u}function Vh(s,t,e,n){const i=bl(s),r=i!==s&&!jn(s);let o=e,a=!1;i!==s&&(r?(a=n.length===0,o=function(c,u,h){return a&&(a=!1,c=pi(s,c)),e.call(this,c,pi(s,u),h,s)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,s)}));const l=i[t](o,...n);return a?pi(s,l):l}function jl(s,t,e){const n=oe(s);en(n,"iterate",zo);const i=n[t](...e);return(i===-1||i===!1)&&ju(e[0])?(e[0]=oe(e[0]),n[t](...e)):i}function oo(s,t,e=[]){Xi(),Gu();const n=oe(s)[t].apply(s,e);return Hu(),qi(),n}const t0=Uu("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(bi));function e0(s){bi(s)||(s=String(s));const t=oe(this);return en(t,"has",s),t.hasOwnProperty(s)}class Zp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(i?r?h0:em:r?tm:Qp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Wt(t);if(!i){let l;if(o&&(l=Jg[e]))return l;if(e==="hasOwnProperty")return e0}const a=Reflect.get(t,e,rn(t)?t:n);if((bi(e)?Kp.has(e):t0(e))||(i||en(t,"get",e),r))return a;if(rn(a)){const l=o&&zu(e)?a:a.value;return i&&ce(l)?tu(l):l}return ce(a)?i?tu(a):qu(a):a}}class Jp extends Zp{constructor(t=!1){super(!1,t)}set(t,e,n,i){let r=t[e];const o=Wt(t)&&zu(e);if(!this._isShallow){const c=Yi(r);if(!jn(n)&&!Yi(n)&&(r=oe(r),n=oe(n)),!o&&rn(r)&&!rn(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ae(t,e),l=Reflect.set(t,e,n,rn(t)?t:i);return t===oe(i)&&(a?vi(n,r)&&Vi(t,"set",e,n):Vi(t,"add",e,n)),l}deleteProperty(t,e){const n=ae(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Vi(t,"delete",e,void 0),i}has(t,e){const n=Reflect.has(t,e);return(!bi(e)||!Kp.has(e))&&en(t,"has",e),n}ownKeys(t){return en(t,"iterate",Wt(t)?"length":Xs),Reflect.ownKeys(t)}}class n0 extends Zp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const i0=new Jp,s0=new n0,r0=new Jp(!0);const Qc=s=>s,la=s=>Reflect.getPrototypeOf(s);function o0(s,t,e){return function(...n){const i=this.__v_raw,r=oe(i),o=Fr(r),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=i[s](...n),u=e?Qc:t?qr:oi;return!t&&en(r,"iterate",l?Jc:Xs),Ke(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function ca(s){return function(...t){return s==="delete"?!1:s==="clear"?void 0:this}}function a0(s,t){const e={get(i){const r=this.__v_raw,o=oe(r),a=oe(i);s||(vi(i,a)&&en(o,"get",i),en(o,"get",a));const{has:l}=la(o),c=t?Qc:s?qr:oi;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!s&&en(oe(i),"iterate",Xs),i.size},has(i){const r=this.__v_raw,o=oe(r),a=oe(i);return s||(vi(i,a)&&en(o,"has",i),en(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=oe(a),c=t?Qc:s?qr:oi;return!s&&en(l,"iterate",Xs),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ke(e,s?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(i){const r=oe(this),o=la(r),a=oe(i),l=!t&&!jn(i)&&!Yi(i)?a:i;return o.has.call(r,l)||vi(i,l)&&o.has.call(r,i)||vi(a,l)&&o.has.call(r,a)||(r.add(l),Vi(r,"add",l,l)),this},set(i,r){!t&&!jn(r)&&!Yi(r)&&(r=oe(r));const o=oe(this),{has:a,get:l}=la(o);let c=a.call(o,i);c||(i=oe(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?vi(r,u)&&Vi(o,"set",i,r):Vi(o,"add",i,r),this},delete(i){const r=oe(this),{has:o,get:a}=la(r);let l=o.call(r,i);l||(i=oe(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Vi(r,"delete",i,void 0),c},clear(){const i=oe(this),r=i.size!==0,o=i.clear();return r&&Vi(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=o0(i,s,t)}),e}function Xu(s,t){const e=a0(s,t);return(n,i,r)=>i==="__v_isReactive"?!s:i==="__v_isReadonly"?s:i==="__v_raw"?n:Reflect.get(ae(e,i)&&i in n?e:n,i,r)}const l0={get:Xu(!1,!1)},c0={get:Xu(!1,!0)},u0={get:Xu(!0,!1)};const Qp=new WeakMap,tm=new WeakMap,em=new WeakMap,h0=new WeakMap;function f0(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d0(s){return s.__v_skip||!Object.isExtensible(s)?0:f0(Fg(s))}function qu(s){return Yi(s)?s:Yu(s,!1,i0,l0,Qp)}function p0(s){return Yu(s,!1,r0,c0,tm)}function tu(s){return Yu(s,!0,s0,u0,em)}function Yu(s,t,e,n,i){if(!ce(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const r=d0(s);if(r===0)return s;const o=i.get(s);if(o)return o;const a=new Proxy(s,r===2?n:e);return i.set(s,a),a}function qs(s){return Yi(s)?qs(s.__v_raw):!!(s&&s.__v_isReactive)}function Yi(s){return!!(s&&s.__v_isReadonly)}function jn(s){return!!(s&&s.__v_isShallow)}function ju(s){return s?!!s.__v_raw:!1}function oe(s){const t=s&&s.__v_raw;return t?oe(t):s}function m0(s){return!ae(s,"__v_skip")&&Object.isExtensible(s)&&zp(s,"__v_skip",!0),s}const oi=s=>ce(s)?qu(s):s,qr=s=>ce(s)?tu(s):s;function rn(s){return s?s.__v_isRef===!0:!1}function Cr(s){return _0(s,!1)}function _0(s,t){return rn(s)?s:new g0(s,t)}class g0{constructor(t,e){this.dep=new Wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:oe(t),this._value=e?t:oi(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||jn(t)||Yi(t);t=n?t:oe(t),vi(t,e)&&(this._rawValue=t,this._value=n?t:oi(t),this.dep.trigger())}}function v0(s){return rn(s)?s.value:s}const x0={get:(s,t,e)=>t==="__v_raw"?s:v0(Reflect.get(s,t,e)),set:(s,t,e,n)=>{const i=s[t];return rn(i)&&!rn(e)?(i.value=e,!0):Reflect.set(s,t,e,n)}};function nm(s){return qs(s)?s:new Proxy(s,x0)}class y0{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Wp(this,!0),!0}get value(){const t=this.dep.track();return Yp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function M0(s,t,e=!1){let n,i;return jt(s)?n=s:(n=s.get,i=s.set),new y0(n,i,e)}const ua={},Qa=new WeakMap;let Us;function S0(s,t=!1,e=Us){if(e){let n=Qa.get(e);n||Qa.set(e,n=[]),n.push(s)}}function E0(s,t,e=de){const{immediate:n,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>i?y:jn(y)||i===!1||i===0?as(y,1):as(y);let u,h,f,d,g=!1,_=!1;if(rn(s)?(h=()=>s.value,g=jn(s)):qs(s)?(h=()=>c(s),g=!0):Wt(s)?(_=!0,g=s.some(y=>qs(y)||jn(y)),h=()=>s.map(y=>{if(rn(y))return y.value;if(qs(y))return c(y);if(jt(y))return l?l(y,2):y()})):jt(s)?t?h=l?()=>l(s,2):s:h=()=>{if(f){Xi();try{f()}finally{qi()}}const y=Us;Us=u;try{return l?l(s,3,[d]):s(d)}finally{Us=y}}:h=Si,t&&i){const y=h,E=i===!0?1/0:i;h=()=>as(y(),E)}const p=$g(),m=()=>{u.stop(),p&&p.active&&Fu(p.effects,u)};if(r&&t){const y=t;t=(...E)=>{y(...E),m()}}let v=_?new Array(s.length).fill(ua):ua;const x=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const E=u.run();if(i||g||(_?E.some((T,b)=>vi(T,v[b])):vi(E,v))){f&&f();const T=Us;Us=u;try{const b=[E,v===ua?void 0:_&&v[0]===ua?[]:v,d];v=E,l?l(t,3,b):t(...b)}finally{Us=T}}}else u.run()};return a&&a(x),u=new Hp(h),u.scheduler=o?()=>o(x,!1):x,d=y=>S0(y,!1,u),f=u.onStop=()=>{const y=Qa.get(u);if(y){if(l)l(y,4);else for(const E of y)E();Qa.delete(u)}},t?n?x(!0):v=u.run():o?o(x.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function as(s,t=1/0,e){if(t<=0||!ce(s)||s.__v_skip||(e=e||new Map,(e.get(s)||0)>=t))return s;if(e.set(s,t),t--,rn(s))as(s.value,t,e);else if(Wt(s))for(let n=0;n<s.length;n++)as(s[n],t,e);else if(Dp(s)||Fr(s))s.forEach(n=>{as(n,t,e)});else if(Up(s)){for(const n in s)as(s[n],t,e);for(const n of Object.getOwnPropertySymbols(s))Object.prototype.propertyIsEnumerable.call(s,n)&&as(s[n],t,e)}return s}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(s,t,e,n){try{return n?s(...n):s()}catch(i){wl(i,t,e)}}function wi(s,t,e,n){if(jt(s)){const i=Qo(s,t,e,n);return i&&Op(i)&&i.catch(r=>{wl(r,t,e)}),i}if(Wt(s)){const i=[];for(let r=0;r<s.length;r++)i.push(wi(s[r],t,e,n));return i}}function wl(s,t,e,n=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](s,l,c)===!1)return}a=a.parent}if(r){Xi(),Qo(r,null,10,[s,l,c]),qi();return}}b0(s,e,i,n,o)}function b0(s,t,e,n=!0,i=!1){if(i)throw s;console.error(s)}const un=[];let fi=-1;const zr=[];let rs=null,Rr=0;const im=Promise.resolve();let tl=null;function w0(s){const t=tl||im;return s?t.then(this?s.bind(this):s):t}function T0(s){let t=fi+1,e=un.length;for(;t<e;){const n=t+e>>>1,i=un[n],r=Bo(i);r<s||r===s&&i.flags&2?t=n+1:e=n}return t}function $u(s){if(!(s.flags&1)){const t=Bo(s),e=un[un.length-1];!e||!(s.flags&2)&&t>=Bo(e)?un.push(s):un.splice(T0(t),0,s),s.flags|=1,sm()}}function sm(){tl||(tl=im.then(om))}function A0(s){Wt(s)?zr.push(...s):rs&&s.id===-1?rs.splice(Rr+1,0,s):s.flags&1||(zr.push(s),s.flags|=1),sm()}function Wh(s,t,e=fi+1){for(;e<un.length;e++){const n=un[e];if(n&&n.flags&2){if(s&&n.id!==s.uid)continue;un.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function rm(s){if(zr.length){const t=[...new Set(zr)].sort((e,n)=>Bo(e)-Bo(n));if(zr.length=0,rs){rs.push(...t);return}for(rs=t,Rr=0;Rr<rs.length;Rr++){const e=rs[Rr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}rs=null,Rr=0}}const Bo=s=>s.id==null?s.flags&2?-1:1/0:s.id;function om(s){try{for(fi=0;fi<un.length;fi++){const t=un[fi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fi<un.length;fi++){const t=un[fi];t&&(t.flags&=-2)}fi=-1,un.length=0,rm(),tl=null,(un.length||zr.length)&&om()}}let yi=null,am=null;function el(s){const t=yi;return yi=s,am=s&&s.type.__scopeId||null,t}function R0(s,t=yi,e){if(!t||s._n)return s;const n=(...i)=>{n._d&&ef(-1);const r=el(t);let o;try{o=s(...i)}finally{el(r),n._d&&ef(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function As(s,t,e,n){const i=s.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Xi(),wi(l,e,8,[s.el,a,s,t]),qi())}}function C0(s,t){if(fn){let e=fn.provides;const n=fn.parent&&fn.parent.provides;n===e&&(e=fn.provides=Object.create(n)),e[s]=t}}function qa(s,t,e=!1){const n=Cv();if(n||Br){let i=Br?Br._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&s in i)return i[s];if(arguments.length>1)return e&&jt(t)?t.call(n&&n.proxy):t}}const P0=Symbol.for("v-scx"),L0=()=>qa(P0);function $l(s,t,e){return lm(s,t,e)}function lm(s,t,e=de){const{immediate:n,deep:i,flush:r,once:o}=e,a=Ke({},e),l=t&&n||!t&&r!=="post";let c;if(Go){if(r==="sync"){const d=L0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Si,d.resume=Si,d.pause=Si,d}}const u=fn;a.call=(d,g,_)=>wi(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{mn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():$u(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=E0(s,t,a);return Go&&(c?c.push(f):l&&f()),f}function I0(s,t,e){const n=this.proxy,i=Re(s)?s.includes(".")?cm(n,s):()=>n[s]:s.bind(n,n);let r;jt(t)?r=t:(r=t.handler,e=t);const o=ta(this),a=lm(i,r.bind(n),e);return o(),a}function cm(s,t){const e=t.split(".");return()=>{let n=s;for(let i=0;i<e.length&&n;i++)n=n[e[i]];return n}}const D0=Symbol("_vte"),O0=s=>s.__isTeleport,N0=Symbol("_leaveCb");function Ku(s,t){s.shapeFlag&6&&s.component?(s.transition=t,Ku(s.component.subTree,t)):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}function Zu(s,t){return jt(s)?Ke({name:s.name},t,{setup:s}):s}function um(s){s.ids=[s.ids[0]+s.ids[2]+++"-",0,0]}function Xh(s,t){let e;return!!((e=Object.getOwnPropertyDescriptor(s,t))&&!e.configurable)}const nl=new WeakMap;function To(s,t,e,n,i=!1){if(Wt(s)){s.forEach((_,p)=>To(_,t&&(Wt(t)?t[p]:t),e,n,i));return}if(Ao(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&To(s,t,e,n.component.subTree);return}const r=n.shapeFlag&4?ih(n.component):n.el,o=i?null:r,{i:a,r:l}=s,c=t&&t.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState,f=oe(h),d=h===de?Ip:_=>Xh(u,_)?!1:ae(f,_),g=(_,p)=>!(p&&Xh(u,p));if(c!=null&&c!==l){if(qh(t),Re(c))u[c]=null,d(c)&&(h[c]=null);else if(rn(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(jt(l))Qo(l,a,12,[o,u]);else{const _=Re(l),p=rn(l);if(_||p){const m=()=>{if(s.f){const v=_?d(l)?h[l]:u[l]:g()||!s.k?l.value:u[s.k];if(i)Wt(v)&&Fu(v,r);else if(Wt(v))v.includes(r)||v.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const x=[r];g(l,s.k)&&(l.value=x),s.k&&(u[s.k]=x)}}else _?(u[l]=o,d(l)&&(h[l]=o)):p&&(g(l,s.k)&&(l.value=o),s.k&&(u[s.k]=o))};if(o){const v=()=>{m(),nl.delete(s)};v.id=-1,nl.set(s,v),mn(v,e)}else qh(s),m()}}}function qh(s){const t=nl.get(s);t&&(t.flags|=8,nl.delete(s))}Sl().requestIdleCallback;Sl().cancelIdleCallback;const Ao=s=>!!s.type.__asyncLoader,hm=s=>s.type.__isKeepAlive;function U0(s,t){fm(s,"a",t)}function F0(s,t){fm(s,"da",t)}function fm(s,t,e=fn){const n=s.__wdc||(s.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return s()});if(Tl(t,n,e),e){let i=e.parent;for(;i&&i.parent;)hm(i.parent.vnode)&&z0(n,t,e,i),i=i.parent}}function z0(s,t,e,n){const i=Tl(t,s,n,!0);Qu(()=>{Fu(n[t],i)},e)}function Tl(s,t,e=fn,n=!1){if(e){const i=e[s]||(e[s]=[]),r=t.__weh||(t.__weh=(...o)=>{Xi();const a=ta(e),l=wi(t,e,s,o);return a(),qi(),l});return n?i.unshift(r):i.push(r),r}}const Ji=s=>(t,e=fn)=>{(!Go||s==="sp")&&Tl(s,(...n)=>t(...n),e)},B0=Ji("bm"),Ju=Ji("m"),k0=Ji("bu"),G0=Ji("u"),H0=Ji("bum"),Qu=Ji("um"),V0=Ji("sp"),W0=Ji("rtg"),X0=Ji("rtc");function q0(s,t=fn){Tl("ec",s,t)}const Y0=Symbol.for("v-ndc");function j0(s,t,e,n){let i;const r=e,o=Wt(s);if(o||Re(s)){const a=o&&qs(s);let l=!1,c=!1;a&&(l=!jn(s),c=Yi(s),s=bl(s)),i=new Array(s.length);for(let u=0,h=s.length;u<h;u++)i[u]=t(l?c?qr(oi(s[u])):oi(s[u]):s[u],u,void 0,r)}else if(typeof s=="number"){i=new Array(s);for(let a=0;a<s;a++)i[a]=t(a+1,a,void 0,r)}else if(ce(s))if(s[Symbol.iterator])i=Array.from(s,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(s);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=t(s[u],u,l,r)}}else i=[];return i}const eu=s=>s?Om(s)?ih(s):eu(s.parent):null,Ro=Ke(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>eu(s.parent),$root:s=>eu(s.root),$host:s=>s.ce,$emit:s=>s.emit,$options:s=>pm(s),$forceUpdate:s=>s.f||(s.f=()=>{$u(s.update)}),$nextTick:s=>s.n||(s.n=w0.bind(s.proxy)),$watch:s=>I0.bind(s)}),Kl=(s,t)=>s!==de&&!s.__isScriptSetup&&ae(s,t),$0={get({_:s},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:i,props:r,accessCache:o,type:a,appContext:l}=s;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return i[t];case 4:return e[t];case 3:return r[t]}else{if(Kl(n,t))return o[t]=1,n[t];if(i!==de&&ae(i,t))return o[t]=2,i[t];if(ae(r,t))return o[t]=3,r[t];if(e!==de&&ae(e,t))return o[t]=4,e[t];nu&&(o[t]=0)}}const c=Ro[t];let u,h;if(c)return t==="$attrs"&&en(s.attrs,"get",""),c(s);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==de&&ae(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ae(h,t))return h[t]},set({_:s},t,e){const{data:n,setupState:i,ctx:r}=s;return Kl(i,t)?(i[t]=e,!0):n!==de&&ae(n,t)?(n[t]=e,!0):ae(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(r[t]=e,!0)},has({_:{data:s,setupState:t,accessCache:e,ctx:n,appContext:i,props:r,type:o}},a){let l;return!!(e[a]||s!==de&&a[0]!=="$"&&ae(s,a)||Kl(t,a)||ae(r,a)||ae(n,a)||ae(Ro,a)||ae(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(s,t,e){return e.get!=null?s._.accessCache[t]=0:ae(e,"value")&&this.set(s,t,e.value,null),Reflect.defineProperty(s,t,e)}};function Yh(s){return Wt(s)?s.reduce((t,e)=>(t[e]=null,t),{}):s}let nu=!0;function K0(s){const t=pm(s),e=s.proxy,n=s.ctx;nu=!1,t.beforeCreate&&jh(t.beforeCreate,s,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:v,destroyed:x,unmounted:y,render:E,renderTracked:T,renderTriggered:b,errorCaptured:O,serverPrefetch:M,expose:A,inheritAttrs:k,components:G,directives:F,filters:L}=t;if(c&&Z0(c,n,null),o)for(const X in o){const H=o[X];jt(H)&&(n[X]=H.bind(e))}if(i){const X=i.call(e,e);ce(X)&&(s.data=qu(X))}if(nu=!0,r)for(const X in r){const H=r[X],$=jt(H)?H.bind(e,e):jt(H.get)?H.get.bind(e,e):Si,st=!jt(H)&&jt(H.set)?H.set.bind(e):Si,ot=au({get:$,set:st});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>ot.value,set:K=>ot.value=K})}if(a)for(const X in a)dm(a[X],n,e,X);if(l){const X=jt(l)?l.call(e):l;Reflect.ownKeys(X).forEach(H=>{C0(H,X[H])})}u&&jh(u,s,"c");function I(X,H){Wt(H)?H.forEach($=>X($.bind(e))):H&&X(H.bind(e))}if(I(B0,h),I(Ju,f),I(k0,d),I(G0,g),I(U0,_),I(F0,p),I(q0,O),I(X0,T),I(W0,b),I(H0,v),I(Qu,y),I(V0,M),Wt(A))if(A.length){const X=s.exposed||(s.exposed={});A.forEach(H=>{Object.defineProperty(X,H,{get:()=>e[H],set:$=>e[H]=$,enumerable:!0})})}else s.exposed||(s.exposed={});E&&s.render===Si&&(s.render=E),k!=null&&(s.inheritAttrs=k),G&&(s.components=G),F&&(s.directives=F),M&&um(s)}function Z0(s,t,e=Si){Wt(s)&&(s=iu(s));for(const n in s){const i=s[n];let r;ce(i)?"default"in i?r=qa(i.from||n,i.default,!0):r=qa(i.from||n):r=qa(i),rn(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function jh(s,t,e){wi(Wt(s)?s.map(n=>n.bind(t.proxy)):s.bind(t.proxy),t,e)}function dm(s,t,e,n){let i=n.includes(".")?cm(e,n):()=>e[n];if(Re(s)){const r=t[s];jt(r)&&$l(i,r)}else if(jt(s))$l(i,s.bind(e));else if(ce(s))if(Wt(s))s.forEach(r=>dm(r,t,e,n));else{const r=jt(s.handler)?s.handler.bind(e):t[s.handler];jt(r)&&$l(i,r,s)}}function pm(s){const t=s.type,{mixins:e,extends:n}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=s.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!e&&!n?l=t:(l={},i.length&&i.forEach(c=>il(l,c,o,!0)),il(l,t,o)),ce(t)&&r.set(t,l),l}function il(s,t,e,n=!1){const{mixins:i,extends:r}=t;r&&il(s,r,e,!0),i&&i.forEach(o=>il(s,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=J0[o]||e&&e[o];s[o]=a?a(s[o],t[o]):t[o]}return s}const J0={data:$h,props:Kh,emits:Kh,methods:xo,computed:xo,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:xo,directives:xo,watch:tv,provide:$h,inject:Q0};function $h(s,t){return t?s?function(){return Ke(jt(s)?s.call(this,this):s,jt(t)?t.call(this,this):t)}:t:s}function Q0(s,t){return xo(iu(s),iu(t))}function iu(s){if(Wt(s)){const t={};for(let e=0;e<s.length;e++)t[s[e]]=s[e];return t}return s}function an(s,t){return s?[...new Set([].concat(s,t))]:t}function xo(s,t){return s?Ke(Object.create(null),s,t):t}function Kh(s,t){return s?Wt(s)&&Wt(t)?[...new Set([...s,...t])]:Ke(Object.create(null),Yh(s),Yh(t??{})):t}function tv(s,t){if(!s)return t;if(!t)return s;const e=Ke(Object.create(null),s);for(const n in t)e[n]=an(s[n],t[n]);return e}function mm(){return{app:null,config:{isNativeTag:Ip,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ev=0;function nv(s,t){return function(n,i=null){jt(n)||(n=Ke({},n)),i!=null&&!ce(i)&&(i=null);const r=mm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ev++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Nv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&jt(u.install)?(o.add(u),u.install(c,...h)):jt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Ei(n,i);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),s(d,u,f),l=!0,c._container=u,u.__vue_app__=c,ih(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wi(a,c._instance,16),s(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Br;Br=c;try{return u()}finally{Br=h}}};return c}}let Br=null;const iv=(s,t)=>t==="modelValue"||t==="model-value"?s.modelModifiers:s[`${t}Modifiers`]||s[`${si(t)}Modifiers`]||s[`${ir(t)}Modifiers`];function sv(s,t,...e){if(s.isUnmounted)return;const n=s.vnode.props||de;let i=e;const r=t.startsWith("update:"),o=r&&iv(n,t.slice(7));o&&(o.trim&&(i=e.map(u=>Re(u)?u.trim():u)),o.number&&(i=e.map(kg)));let a,l=n[a=Vl(t)]||n[a=Vl(si(t))];!l&&r&&(l=n[a=Vl(ir(t))]),l&&wi(l,s,6,i);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,wi(c,s,6,i)}}const rv=new WeakMap;function _m(s,t,e=!1){const n=e?rv:t.emitsCache,i=n.get(s);if(i!==void 0)return i;const r=s.emits;let o={},a=!1;if(!jt(s)){const l=c=>{const u=_m(c,t,!0);u&&(a=!0,Ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!r&&!a?(ce(s)&&n.set(s,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Ke(o,r),ce(s)&&n.set(s,o),o)}function Al(s,t){return!s||!xl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(s,t[0].toLowerCase()+t.slice(1))||ae(s,ir(t))||ae(s,t))}function Zh(s){const{type:t,vnode:e,proxy:n,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=s,p=el(s);let m,v;try{if(e.shapeFlag&4){const y=i||n,E=y;m=_i(c.call(E,y,u,h,d,f,g)),v=a}else{const y=t;m=_i(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),v=t.props?a:ov(a)}}catch(y){Co.length=0,wl(y,s,1),m=Ei(vs)}let x=m;if(v&&_!==!1){const y=Object.keys(v),{shapeFlag:E}=x;y.length&&E&7&&(r&&y.some(yl)&&(v=av(v,r)),x=Yr(x,v,!1,!0))}return e.dirs&&(x=Yr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&Ku(x,e.transition),m=x,el(p),m}const ov=s=>{let t;for(const e in s)(e==="class"||e==="style"||xl(e))&&((t||(t={}))[e]=s[e]);return t},av=(s,t)=>{const e={};for(const n in s)(!yl(n)||!(n.slice(9)in t))&&(e[n]=s[n]);return e};function lv(s,t,e){const{props:n,children:i,component:r}=s,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Jh(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(gm(o,n,f)&&!Al(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Jh(n,o,c):!0:!!o;return!1}function Jh(s,t,e){const n=Object.keys(t);if(n.length!==Object.keys(s).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(gm(t,s,r)&&!Al(e,r))return!0}return!1}function gm(s,t,e){const n=s[e],i=t[e];return e==="style"&&ce(n)&&ce(i)?!ku(n,i):n!==i}function cv({vnode:s,parent:t,suspense:e},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===s&&(i.suspense.vnode.el=i.el=n,s=i),i===s)(s=t.vnode).el=n,t=t.parent;else break}e&&e.activeBranch===s&&(e.vnode.el=n)}const vm={},xm=()=>Object.create(vm),ym=s=>Object.getPrototypeOf(s)===vm;function uv(s,t,e,n=!1){const i={},r=xm();s.propsDefaults=Object.create(null),Mm(s,t,i,r);for(const o in s.propsOptions[0])o in i||(i[o]=void 0);e?s.props=n?i:p0(i):s.type.props?s.props=i:s.props=r,s.attrs=r}function hv(s,t,e,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=s,a=oe(i),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=s.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Al(s.emitsOptions,f))continue;const d=t[f];if(l)if(ae(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=si(f);i[g]=su(l,a,g,d,s,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Mm(s,t,i,r)&&(c=!0);let u;for(const h in a)(!t||!ae(t,h)&&((u=ir(h))===h||!ae(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(i[h]=su(l,a,h,void 0,s,!0)):delete i[h]);if(r!==a)for(const h in r)(!t||!ae(t,h))&&(delete r[h],c=!0)}c&&Vi(s.attrs,"set","")}function Mm(s,t,e,n){const[i,r]=s.propsOptions;let o=!1,a;if(t)for(let l in t){if(Eo(l))continue;const c=t[l];let u;i&&ae(i,u=si(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Al(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=oe(e),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];e[h]=su(i,l,h,c[h],s,!ae(c,h))}}return o}function su(s,t,e,n,i,r){const o=s[e];if(o!=null){const a=ae(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&jt(l)){const{propsDefaults:c}=i;if(e in c)n=c[e];else{const u=ta(i);n=c[e]=l.call(null,t),u()}}else n=l;i.ce&&i.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ir(e))&&(n=!0))}return n}const fv=new WeakMap;function Sm(s,t,e=!1){const n=e?fv:t.propsCache,i=n.get(s);if(i)return i;const r=s.props,o={},a=[];let l=!1;if(!jt(s)){const u=h=>{l=!0;const[f,d]=Sm(h,t,!0);Ke(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!r&&!l)return ce(s)&&n.set(s,Ur),Ur;if(Wt(r))for(let u=0;u<r.length;u++){const h=si(r[u]);Qh(h)&&(o[h]=de)}else if(r)for(const u in r){const h=si(u);if(Qh(h)){const f=r[u],d=o[h]=Wt(f)||jt(f)?{type:f}:Ke({},f),g=d.type;let _=!1,p=!0;if(Wt(g))for(let m=0;m<g.length;++m){const v=g[m],x=jt(v)&&v.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(p=!1)}else _=jt(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||ae(d,"default"))&&a.push(h)}}const c=[o,a];return ce(s)&&n.set(s,c),c}function Qh(s){return s[0]!=="$"&&!Eo(s)}const th=s=>s==="_"||s==="_ctx"||s==="$stable",eh=s=>Wt(s)?s.map(_i):[_i(s)],dv=(s,t,e)=>{if(t._n)return t;const n=R0((...i)=>eh(t(...i)),e);return n._c=!1,n},Em=(s,t,e)=>{const n=s._ctx;for(const i in s){if(th(i))continue;const r=s[i];if(jt(r))t[i]=dv(i,r,n);else if(r!=null){const o=eh(r);t[i]=()=>o}}},bm=(s,t)=>{const e=eh(t);s.slots.default=()=>e},wm=(s,t,e)=>{for(const n in t)(e||!th(n))&&(s[n]=t[n])},pv=(s,t,e)=>{const n=s.slots=xm();if(s.vnode.shapeFlag&32){const i=t._;i?(wm(n,t,e),e&&zp(n,"_",i,!0)):Em(t,n)}else t&&bm(s,t)},mv=(s,t,e)=>{const{vnode:n,slots:i}=s;let r=!0,o=de;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:wm(i,t,e):(r=!t.$stable,Em(t,i)),o=t}else t&&(bm(s,t),o={default:1});if(r)for(const a in i)!th(a)&&o[a]==null&&delete i[a]},mn=yv;function _v(s){return gv(s)}function gv(s,t){const e=Sl();e.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Si,insertStaticContent:g}=s,_=(w,B,V,Q=null,j=null,rt=null,at=void 0,C=null,S=!!B.dynamicChildren)=>{if(w===B)return;w&&!ao(w,B)&&(Q=Tt(w),K(w,j,rt,!0),w=null),B.patchFlag===-2&&(S=!1,B.dynamicChildren=null);const{type:N,ref:J,shapeFlag:q}=B;switch(N){case Rl:p(w,B,V,Q);break;case vs:m(w,B,V,Q);break;case Ya:w==null&&v(B,V,Q,at);break;case mi:G(w,B,V,Q,j,rt,at,C,S);break;default:q&1?E(w,B,V,Q,j,rt,at,C,S):q&6?F(w,B,V,Q,j,rt,at,C,S):(q&64||q&128)&&N.process(w,B,V,Q,j,rt,at,C,S,Lt)}J!=null&&j?To(J,w&&w.ref,rt,B||w,!B):J==null&&w&&w.ref!=null&&To(w.ref,null,rt,w,!0)},p=(w,B,V,Q)=>{if(w==null)n(B.el=a(B.children),V,Q);else{const j=B.el=w.el;B.children!==w.children&&c(j,B.children)}},m=(w,B,V,Q)=>{w==null?n(B.el=l(B.children||""),V,Q):B.el=w.el},v=(w,B,V,Q)=>{[w.el,w.anchor]=g(w.children,B,V,Q,w.el,w.anchor)},x=({el:w,anchor:B},V,Q)=>{let j;for(;w&&w!==B;)j=f(w),n(w,V,Q),w=j;n(B,V,Q)},y=({el:w,anchor:B})=>{let V;for(;w&&w!==B;)V=f(w),i(w),w=V;i(B)},E=(w,B,V,Q,j,rt,at,C,S)=>{if(B.type==="svg"?at="svg":B.type==="math"&&(at="mathml"),w==null)T(B,V,Q,j,rt,at,C,S);else{const N=w.el&&w.el._isVueCE?w.el:null;try{N&&N._beginPatch(),M(w,B,j,rt,at,C,S)}finally{N&&N._endPatch()}}},T=(w,B,V,Q,j,rt,at,C)=>{let S,N;const{props:J,shapeFlag:q,transition:Z,dirs:ht}=w;if(S=w.el=o(w.type,rt,J&&J.is,J),q&8?u(S,w.children):q&16&&O(w.children,S,null,Q,j,Zl(w,rt),at,C),ht&&As(w,null,Q,"created"),b(S,w,w.scopeId,at,Q),J){for(const pt in J)pt!=="value"&&!Eo(pt)&&r(S,pt,null,J[pt],rt,Q);"value"in J&&r(S,"value",null,J.value,rt),(N=J.onVnodeBeforeMount)&&li(N,Q,w)}ht&&As(w,null,Q,"beforeMount");const ut=vv(j,Z);ut&&Z.beforeEnter(S),n(S,B,V),((N=J&&J.onVnodeMounted)||ut||ht)&&mn(()=>{try{N&&li(N,Q,w),ut&&Z.enter(S),ht&&As(w,null,Q,"mounted")}finally{}},j)},b=(w,B,V,Q,j)=>{if(V&&d(w,V),Q)for(let rt=0;rt<Q.length;rt++)d(w,Q[rt]);if(j){let rt=j.subTree;if(B===rt||Cm(rt.type)&&(rt.ssContent===B||rt.ssFallback===B)){const at=j.vnode;b(w,at,at.scopeId,at.slotScopeIds,j.parent)}}},O=(w,B,V,Q,j,rt,at,C,S=0)=>{for(let N=S;N<w.length;N++){const J=w[N]=C?Gi(w[N]):_i(w[N]);_(null,J,B,V,Q,j,rt,at,C)}},M=(w,B,V,Q,j,rt,at)=>{const C=B.el=w.el;let{patchFlag:S,dynamicChildren:N,dirs:J}=B;S|=w.patchFlag&16;const q=w.props||de,Z=B.props||de;let ht;if(V&&Rs(V,!1),(ht=Z.onVnodeBeforeUpdate)&&li(ht,V,B,w),J&&As(B,w,V,"beforeUpdate"),V&&Rs(V,!0),(q.innerHTML&&Z.innerHTML==null||q.textContent&&Z.textContent==null)&&u(C,""),N?A(w.dynamicChildren,N,C,V,Q,Zl(B,j),rt):at||H(w,B,C,null,V,Q,Zl(B,j),rt,!1),S>0){if(S&16)k(C,q,Z,V,j);else if(S&2&&q.class!==Z.class&&r(C,"class",null,Z.class,j),S&4&&r(C,"style",q.style,Z.style,j),S&8){const ut=B.dynamicProps;for(let pt=0;pt<ut.length;pt++){const yt=ut[pt],At=q[yt],ct=Z[yt];(ct!==At||yt==="value")&&r(C,yt,At,ct,j,V)}}S&1&&w.children!==B.children&&u(C,B.children)}else!at&&N==null&&k(C,q,Z,V,j);((ht=Z.onVnodeUpdated)||J)&&mn(()=>{ht&&li(ht,V,B,w),J&&As(B,w,V,"updated")},Q)},A=(w,B,V,Q,j,rt,at)=>{for(let C=0;C<B.length;C++){const S=w[C],N=B[C],J=S.el&&(S.type===mi||!ao(S,N)||S.shapeFlag&198)?h(S.el):V;_(S,N,J,null,Q,j,rt,at,!0)}},k=(w,B,V,Q,j)=>{if(B!==V){if(B!==de)for(const rt in B)!Eo(rt)&&!(rt in V)&&r(w,rt,B[rt],null,j,Q);for(const rt in V){if(Eo(rt))continue;const at=V[rt],C=B[rt];at!==C&&rt!=="value"&&r(w,rt,C,at,j,Q)}"value"in V&&r(w,"value",B.value,V.value,j)}},G=(w,B,V,Q,j,rt,at,C,S)=>{const N=B.el=w?w.el:a(""),J=B.anchor=w?w.anchor:a("");let{patchFlag:q,dynamicChildren:Z,slotScopeIds:ht}=B;ht&&(C=C?C.concat(ht):ht),w==null?(n(N,V,Q),n(J,V,Q),O(B.children||[],V,J,j,rt,at,C,S)):q>0&&q&64&&Z&&w.dynamicChildren&&w.dynamicChildren.length===Z.length?(A(w.dynamicChildren,Z,V,j,rt,at,C),(B.key!=null||j&&B===j.subTree)&&Tm(w,B,!0)):H(w,B,V,J,j,rt,at,C,S)},F=(w,B,V,Q,j,rt,at,C,S)=>{B.slotScopeIds=C,w==null?B.shapeFlag&512?j.ctx.activate(B,V,Q,at,S):L(B,V,Q,j,rt,at,S):U(w,B,S)},L=(w,B,V,Q,j,rt,at)=>{const C=w.component=Rv(w,Q,j);if(hm(w)&&(C.ctx.renderer=Lt),Pv(C,!1,at),C.asyncDep){if(j&&j.registerDep(C,I,at),!w.el){const S=C.subTree=Ei(vs);m(null,S,B,V),w.placeholder=S.el}}else I(C,w,B,V,j,rt,at)},U=(w,B,V)=>{const Q=B.component=w.component;if(lv(w,B,V))if(Q.asyncDep&&!Q.asyncResolved){X(Q,B,V);return}else Q.next=B,Q.update();else B.el=w.el,Q.vnode=B},I=(w,B,V,Q,j,rt,at)=>{const C=()=>{if(w.isMounted){let{next:q,bu:Z,u:ht,parent:ut,vnode:pt}=w;{const Nt=Am(w);if(Nt){q&&(q.el=pt.el,X(w,q,at)),Nt.asyncDep.then(()=>{mn(()=>{w.isUnmounted||N()},j)});return}}let yt=q,At;Rs(w,!1),q?(q.el=pt.el,X(w,q,at)):q=pt,Z&&Wl(Z),(At=q.props&&q.props.onVnodeBeforeUpdate)&&li(At,ut,q,pt),Rs(w,!0);const ct=Zh(w),Xt=w.subTree;w.subTree=ct,_(Xt,ct,h(Xt.el),Tt(Xt),w,j,rt),q.el=ct.el,yt===null&&cv(w,ct.el),ht&&mn(ht,j),(At=q.props&&q.props.onVnodeUpdated)&&mn(()=>li(At,ut,q,pt),j)}else{let q;const{el:Z,props:ht}=B,{bm:ut,m:pt,parent:yt,root:At,type:ct}=w,Xt=Ao(B);Rs(w,!1),ut&&Wl(ut),!Xt&&(q=ht&&ht.onVnodeBeforeMount)&&li(q,yt,B),Rs(w,!0);{At.ce&&At.ce._hasShadowRoot()&&At.ce._injectChildStyle(ct,w.parent?w.parent.type:void 0);const Nt=w.subTree=Zh(w);_(null,Nt,V,Q,w,j,rt),B.el=Nt.el}if(pt&&mn(pt,j),!Xt&&(q=ht&&ht.onVnodeMounted)){const Nt=B;mn(()=>li(q,yt,Nt),j)}(B.shapeFlag&256||yt&&Ao(yt.vnode)&&yt.vnode.shapeFlag&256)&&w.a&&mn(w.a,j),w.isMounted=!0,B=V=Q=null}};w.scope.on();const S=w.effect=new Hp(C);w.scope.off();const N=w.update=S.run.bind(S),J=w.job=S.runIfDirty.bind(S);J.i=w,J.id=w.uid,S.scheduler=()=>$u(J),Rs(w,!0),N()},X=(w,B,V)=>{B.component=w;const Q=w.vnode.props;w.vnode=B,w.next=null,hv(w,B.props,Q,V),mv(w,B.children,V),Xi(),Wh(w),qi()},H=(w,B,V,Q,j,rt,at,C,S=!1)=>{const N=w&&w.children,J=w?w.shapeFlag:0,q=B.children,{patchFlag:Z,shapeFlag:ht}=B;if(Z>0){if(Z&128){st(N,q,V,Q,j,rt,at,C,S);return}else if(Z&256){$(N,q,V,Q,j,rt,at,C,S);return}}ht&8?(J&16&&bt(N,j,rt),q!==N&&u(V,q)):J&16?ht&16?st(N,q,V,Q,j,rt,at,C,S):bt(N,j,rt,!0):(J&8&&u(V,""),ht&16&&O(q,V,Q,j,rt,at,C,S))},$=(w,B,V,Q,j,rt,at,C,S)=>{w=w||Ur,B=B||Ur;const N=w.length,J=B.length,q=Math.min(N,J);let Z;for(Z=0;Z<q;Z++){const ht=B[Z]=S?Gi(B[Z]):_i(B[Z]);_(w[Z],ht,V,null,j,rt,at,C,S)}N>J?bt(w,j,rt,!0,!1,q):O(B,V,Q,j,rt,at,C,S,q)},st=(w,B,V,Q,j,rt,at,C,S)=>{let N=0;const J=B.length;let q=w.length-1,Z=J-1;for(;N<=q&&N<=Z;){const ht=w[N],ut=B[N]=S?Gi(B[N]):_i(B[N]);if(ao(ht,ut))_(ht,ut,V,null,j,rt,at,C,S);else break;N++}for(;N<=q&&N<=Z;){const ht=w[q],ut=B[Z]=S?Gi(B[Z]):_i(B[Z]);if(ao(ht,ut))_(ht,ut,V,null,j,rt,at,C,S);else break;q--,Z--}if(N>q){if(N<=Z){const ht=Z+1,ut=ht<J?B[ht].el:Q;for(;N<=Z;)_(null,B[N]=S?Gi(B[N]):_i(B[N]),V,ut,j,rt,at,C,S),N++}}else if(N>Z)for(;N<=q;)K(w[N],j,rt,!0),N++;else{const ht=N,ut=N,pt=new Map;for(N=ut;N<=Z;N++){const vt=B[N]=S?Gi(B[N]):_i(B[N]);vt.key!=null&&pt.set(vt.key,N)}let yt,At=0;const ct=Z-ut+1;let Xt=!1,Nt=0;const Ot=new Array(ct);for(N=0;N<ct;N++)Ot[N]=0;for(N=ht;N<=q;N++){const vt=w[N];if(At>=ct){K(vt,j,rt,!0);continue}let D;if(vt.key!=null)D=pt.get(vt.key);else for(yt=ut;yt<=Z;yt++)if(Ot[yt-ut]===0&&ao(vt,B[yt])){D=yt;break}D===void 0?K(vt,j,rt,!0):(Ot[D-ut]=N+1,D>=Nt?Nt=D:Xt=!0,_(vt,B[D],V,null,j,rt,at,C,S),At++)}const Pt=Xt?xv(Ot):Ur;for(yt=Pt.length-1,N=ct-1;N>=0;N--){const vt=ut+N,D=B[vt],mt=B[vt+1],Ct=vt+1<J?mt.el||Rm(mt):Q;Ot[N]===0?_(null,D,V,Ct,j,rt,at,C,S):Xt&&(yt<0||N!==Pt[yt]?ot(D,V,Ct,2):yt--)}}},ot=(w,B,V,Q,j=null)=>{const{el:rt,type:at,transition:C,children:S,shapeFlag:N}=w;if(N&6){ot(w.component.subTree,B,V,Q);return}if(N&128){w.suspense.move(B,V,Q);return}if(N&64){at.move(w,B,V,Lt);return}if(at===mi){n(rt,B,V);for(let q=0;q<S.length;q++)ot(S[q],B,V,Q);n(w.anchor,B,V);return}if(at===Ya){x(w,B,V);return}if(Q!==2&&N&1&&C)if(Q===0)C.beforeEnter(rt),n(rt,B,V),mn(()=>C.enter(rt),j);else{const{leave:q,delayLeave:Z,afterLeave:ht}=C,ut=()=>{w.ctx.isUnmounted?i(rt):n(rt,B,V)},pt=()=>{rt._isLeaving&&rt[N0](!0),q(rt,()=>{ut(),ht&&ht()})};Z?Z(rt,ut,pt):pt()}else n(rt,B,V)},K=(w,B,V,Q=!1,j=!1)=>{const{type:rt,props:at,ref:C,children:S,dynamicChildren:N,shapeFlag:J,patchFlag:q,dirs:Z,cacheIndex:ht,memo:ut}=w;if(q===-2&&(j=!1),C!=null&&(Xi(),To(C,null,V,w,!0),qi()),ht!=null&&(B.renderCache[ht]=void 0),J&256){B.ctx.deactivate(w);return}const pt=J&1&&Z,yt=!Ao(w);let At;if(yt&&(At=at&&at.onVnodeBeforeUnmount)&&li(At,B,w),J&6)gt(w.component,V,Q);else{if(J&128){w.suspense.unmount(V,Q);return}pt&&As(w,null,B,"beforeUnmount"),J&64?w.type.remove(w,B,V,Lt,Q):N&&!N.hasOnce&&(rt!==mi||q>0&&q&64)?bt(N,B,V,!1,!0):(rt===mi&&q&384||!j&&J&16)&&bt(S,B,V),Q&&et(w)}const ct=ut!=null&&ht==null;(yt&&(At=at&&at.onVnodeUnmounted)||pt||ct)&&mn(()=>{At&&li(At,B,w),pt&&As(w,null,B,"unmounted"),ct&&(w.el=null)},V)},et=w=>{const{type:B,el:V,anchor:Q,transition:j}=w;if(B===mi){lt(V,Q);return}if(B===Ya){y(w);return}const rt=()=>{i(V),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:at,delayLeave:C}=j,S=()=>at(V,rt);C?C(w.el,rt,S):S()}else rt()},lt=(w,B)=>{let V;for(;w!==B;)V=f(w),i(w),w=V;i(B)},gt=(w,B,V)=>{const{bum:Q,scope:j,job:rt,subTree:at,um:C,m:S,a:N}=w;tf(S),tf(N),Q&&Wl(Q),j.stop(),rt&&(rt.flags|=8,K(at,w,B,V)),C&&mn(C,B),mn(()=>{w.isUnmounted=!0},B)},bt=(w,B,V,Q=!1,j=!1,rt=0)=>{for(let at=rt;at<w.length;at++)K(w[at],B,V,Q,j)},Tt=w=>{if(w.shapeFlag&6)return Tt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const B=f(w.anchor||w.el),V=B&&B[D0];return V?f(V):B};let Bt=!1;const kt=(w,B,V)=>{let Q;w==null?B._vnode&&(K(B._vnode,null,null,!0),Q=B._vnode.component):_(B._vnode||null,w,B,null,null,null,V),B._vnode=w,Bt||(Bt=!0,Wh(Q),rm(),Bt=!1)},Lt={p:_,um:K,m:ot,r:et,mt:L,mc:O,pc:H,pbc:A,n:Tt,o:s};return{render:kt,hydrate:void 0,createApp:nv(kt)}}function Zl({type:s,props:t},e){return e==="svg"&&s==="foreignObject"||e==="mathml"&&s==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Rs({effect:s,job:t},e){e?(s.flags|=32,t.flags|=4):(s.flags&=-33,t.flags&=-5)}function vv(s,t){return(!s||s&&!s.pendingBranch)&&t&&!t.persisted}function Tm(s,t,e=!1){const n=s.children,i=t.children;if(Wt(n)&&Wt(i))for(let r=0;r<n.length;r++){const o=n[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Gi(i[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Tm(o,a)),a.type===Rl&&(a.patchFlag===-1&&(a=i[r]=Gi(a)),a.el=o.el),a.type===vs&&!a.el&&(a.el=o.el)}}function xv(s){const t=s.slice(),e=[0];let n,i,r,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(i=e[e.length-1],s[i]<c){t[n]=i,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,s[e[a]]<c?r=a+1:o=a;c<s[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Am(s){const t=s.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Am(t)}function tf(s){if(s)for(let t=0;t<s.length;t++)s[t].flags|=8}function Rm(s){if(s.placeholder)return s.placeholder;const t=s.component;return t?Rm(t.subTree):null}const Cm=s=>s.__isSuspense;function yv(s,t){t&&t.pendingBranch?Wt(s)?t.effects.push(...s):t.effects.push(s):A0(s)}const mi=Symbol.for("v-fgt"),Rl=Symbol.for("v-txt"),vs=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Co=[];let Pn=null;function hn(s=!1){Co.push(Pn=s?null:[])}function Mv(){Co.pop(),Pn=Co[Co.length-1]||null}let ko=1;function ef(s,t=!1){ko+=s,s<0&&Pn&&t&&(Pn.hasOnce=!0)}function Pm(s){return s.dynamicChildren=ko>0?Pn||Ur:null,Mv(),ko>0&&Pn&&Pn.push(s),s}function Gn(s,t,e,n,i,r){return Pm(zt(s,t,e,n,i,r,!0))}function ru(s,t,e,n,i){return Pm(Ei(s,t,e,n,i,!0))}function Lm(s){return s?s.__v_isVNode===!0:!1}function ao(s,t){return s.type===t.type&&s.key===t.key}const Im=({key:s})=>s??null,ja=({ref:s,ref_key:t,ref_for:e})=>(typeof s=="number"&&(s=""+s),s!=null?Re(s)||rn(s)||jt(s)?{i:yi,r:s,k:t,f:!!e}:s:null);function zt(s,t=null,e=null,n=0,i=null,r=s===mi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&Im(t),ref:t&&ja(t),scopeId:am,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yi};return a?(nh(l,e),r&128&&s.normalize(l)):e&&(l.shapeFlag|=Re(e)?8:16),ko>0&&!o&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const Ei=Sv;function Sv(s,t=null,e=null,n=0,i=null,r=!1){if((!s||s===Y0)&&(s=vs),Lm(s)){const a=Yr(s,t,!0);return e&&nh(a,e),ko>0&&!r&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(s)]=a:Pn.push(a)),a.patchFlag=-2,a}if(Ov(s)&&(s=s.__vccOpts),t){t=Ev(t);let{class:a,style:l}=t;a&&!Re(a)&&(t.class=Bu(a)),ce(l)&&(ju(l)&&!Wt(l)&&(l=Ke({},l)),t.style=El(l))}const o=Re(s)?1:Cm(s)?128:O0(s)?64:ce(s)?4:jt(s)?2:0;return zt(s,t,e,n,i,o,r,!0)}function Ev(s){return s?ju(s)||ym(s)?Ke({},s):s:null}function Yr(s,t,e=!1,n=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=s,c=t?wv(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:s.type,props:c,key:c&&Im(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(ja(t)):[r,ja(t)]:ja(t):r,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a,target:s.target,targetStart:s.targetStart,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==mi?o===-1?16:o|16:o,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:l,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Yr(s.ssContent),ssFallback:s.ssFallback&&Yr(s.ssFallback),placeholder:s.placeholder,el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return l&&n&&Ku(u,l.clone(u)),u}function bv(s=" ",t=0){return Ei(Rl,null,s,t)}function Dm(s,t){const e=Ei(Ya,null,s);return e.staticCount=t,e}function Hs(s="",t=!1){return t?(hn(),ru(vs,null,s)):Ei(vs,null,s)}function _i(s){return s==null||typeof s=="boolean"?Ei(vs):Wt(s)?Ei(mi,null,s.slice()):Lm(s)?Gi(s):Ei(Rl,null,String(s))}function Gi(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Yr(s)}function nh(s,t){let e=0;const{shapeFlag:n}=s;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),nh(s,i()),i._c&&(i._d=!0));return}else{e=32;const i=t._;!i&&!ym(t)?t._ctx=yi:i===3&&yi&&(yi.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else jt(t)?(t={default:t,_ctx:yi},e=32):(t=String(t),n&64?(e=16,t=[bv(t)]):e=8);s.children=t,s.shapeFlag|=e}function wv(...s){const t={};for(let e=0;e<s.length;e++){const n=s[e];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Bu([t.class,n.class]));else if(i==="style")t.style=El([t.style,n.style]);else if(xl(i)){const r=t[i],o=n[i];o&&r!==o&&!(Wt(r)&&r.includes(o))?t[i]=r?[].concat(r,o):o:o==null&&r==null&&!yl(i)&&(t[i]=o)}else i!==""&&(t[i]=n[i])}return t}function li(s,t,e,n=null){wi(s,t,7,[e,n])}const Tv=mm();let Av=0;function Rv(s,t,e){const n=s.type,i=(t?t.appContext:s.appContext)||Tv,r={uid:Av++,vnode:s,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sm(n,i),emitsOptions:_m(n,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:n.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=sv.bind(null,r),s.ce&&s.ce(r),r}let fn=null;const Cv=()=>fn||yi;let sl,ou;{const s=Sl(),t=(e,n)=>{let i;return(i=s[e])||(i=s[e]=[]),i.push(n),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};sl=t("__VUE_INSTANCE_SETTERS__",e=>fn=e),ou=t("__VUE_SSR_SETTERS__",e=>Go=e)}const ta=s=>{const t=fn;return sl(s),s.scope.on(),()=>{s.scope.off(),sl(t)}},nf=()=>{fn&&fn.scope.off(),sl(null)};function Om(s){return s.vnode.shapeFlag&4}let Go=!1;function Pv(s,t=!1,e=!1){t&&ou(t);const{props:n,children:i}=s.vnode,r=Om(s);uv(s,n,r,t),pv(s,i,e||t);const o=r?Lv(s,t):void 0;return t&&ou(!1),o}function Lv(s,t){const e=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,$0);const{setup:n}=e;if(n){Xi();const i=s.setupContext=n.length>1?Dv(s):null,r=ta(s),o=Qo(n,s,0,[s.props,i]),a=Op(o);if(qi(),r(),(a||s.sp)&&!Ao(s)&&um(s),a){if(o.then(nf,nf),t)return o.then(l=>{sf(s,l)}).catch(l=>{wl(l,s,0)});s.asyncDep=o}else sf(s,o)}else Nm(s)}function sf(s,t,e){jt(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:ce(t)&&(s.setupState=nm(t)),Nm(s)}function Nm(s,t,e){const n=s.type;s.render||(s.render=n.render||Si);{const i=ta(s);Xi();try{K0(s)}finally{qi(),i()}}}const Iv={get(s,t){return en(s,"get",""),s[t]}};function Dv(s){const t=e=>{s.exposed=e||{}};return{attrs:new Proxy(s.attrs,Iv),slots:s.slots,emit:s.emit,expose:t}}function ih(s){return s.exposed?s.exposeProxy||(s.exposeProxy=new Proxy(nm(m0(s.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ro)return Ro[e](s)},has(t,e){return e in t||e in Ro}})):s.proxy}function Ov(s){return jt(s)&&"__vccOpts"in s}const au=(s,t)=>M0(s,t,Go),Nv="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const rf=typeof window<"u"&&window.trustedTypes;if(rf)try{lu=rf.createPolicy("vue",{createHTML:s=>s})}catch{}const Um=lu?s=>lu.createHTML(s):s=>s,Uv="http://www.w3.org/2000/svg",Fv="http://www.w3.org/1998/Math/MathML",Bi=typeof document<"u"?document:null,of=Bi&&Bi.createElement("template"),zv={insert:(s,t,e)=>{t.insertBefore(s,e||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,e,n)=>{const i=t==="svg"?Bi.createElementNS(Uv,s):t==="mathml"?Bi.createElementNS(Fv,s):e?Bi.createElement(s,{is:e}):Bi.createElement(s);return s==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:s=>Bi.createTextNode(s),createComment:s=>Bi.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Bi.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},insertStaticContent(s,t,e,n,i,r){const o=e?e.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),e),!(i===r||!(i=i.nextSibling)););else{of.innerHTML=Um(n==="svg"?`<svg>${s}</svg>`:n==="mathml"?`<math>${s}</math>`:s);const a=of.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Bv=Symbol("_vtc");function kv(s,t,e){const n=s[Bv];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?s.removeAttribute("class"):e?s.setAttribute("class",t):s.className=t}const af=Symbol("_vod"),Gv=Symbol("_vsh"),Hv=Symbol(""),Vv=/(?:^|;)\s*display\s*:/;function Wv(s,t,e){const n=s.style,i=Re(e);let r=!1;if(e&&!i){if(t)if(Re(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&yo(n,a,"")}else for(const o in t)e[o]==null&&yo(n,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?qv(s,o,!Re(t)&&t?t[o]:void 0,a)||yo(n,o,a):yo(n,o,"")}}else if(i){if(t!==e){const o=n[Hv];o&&(e+=";"+o),n.cssText=e,r=Vv.test(e)}}else t&&s.removeAttribute("style");af in s&&(s[af]=r?n.display:"",s[Gv]&&(n.display="none"))}const lf=/\s*!important$/;function yo(s,t,e){if(Wt(e))e.forEach(n=>yo(s,t,n));else if(e==null&&(e=""),t.startsWith("--"))s.setProperty(t,e);else{const n=Xv(s,t);lf.test(e)?s.setProperty(ir(n),e.replace(lf,""),"important"):s[n]=e}}const cf=["Webkit","Moz","ms"],Jl={};function Xv(s,t){const e=Jl[t];if(e)return e;let n=si(t);if(n!=="filter"&&n in s)return Jl[t]=n;n=Fp(n);for(let i=0;i<cf.length;i++){const r=cf[i]+n;if(r in s)return Jl[t]=r}return t}function qv(s,t,e,n){return s.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Re(n)&&e===n}const uf="http://www.w3.org/1999/xlink";function hf(s,t,e,n,i,r=qg(t)){n&&t.startsWith("xlink:")?e==null?s.removeAttributeNS(uf,t.slice(6,t.length)):s.setAttributeNS(uf,t,e):e==null||r&&!Bp(e)?s.removeAttribute(t):s.setAttribute(t,r?"":bi(e)?String(e):e)}function ff(s,t,e,n,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(s[t]=t==="innerHTML"?Um(e):e);return}const r=s.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?s.getAttribute("value")||"":s.value,l=e==null?s.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in s))&&(s.value=l),e==null&&s.removeAttribute(t),s._value=e;return}let o=!1;if(e===""||e==null){const a=typeof s[t];a==="boolean"?e=Bp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{s[t]=e}catch{}o&&s.removeAttribute(i||t)}function Yv(s,t,e,n){s.addEventListener(t,e,n)}function jv(s,t,e,n){s.removeEventListener(t,e,n)}const df=Symbol("_vei");function $v(s,t,e,n,i=null){const r=s[df]||(s[df]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=Kv(t);if(n){const c=r[t]=Qv(n,i);Yv(s,a,c,l)}else o&&(jv(s,a,o,l),r[t]=void 0)}}const pf=/(?:Once|Passive|Capture)$/;function Kv(s){let t;if(pf.test(s)){t={};let n;for(;n=s.match(pf);)s=s.slice(0,s.length-n[0].length),t[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):ir(s.slice(2)),t]}let Ql=0;const Zv=Promise.resolve(),Jv=()=>Ql||(Zv.then(()=>Ql=0),Ql=Date.now());function Qv(s,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;wi(tx(n,e.value),t,5,[n])};return e.value=s,e.attached=Jv(),e}function tx(s,t){if(Wt(t)){const e=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{e.call(s),s._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const mf=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,ex=(s,t,e,n,i,r)=>{const o=i==="svg";t==="class"?kv(s,n,o):t==="style"?Wv(s,e,n):xl(t)?yl(t)||$v(s,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nx(s,t,n,o))?(ff(s,t,n),!s.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hf(s,t,n,o,r,t!=="value")):s._isVueCE&&(ix(s,t)||s._def.__asyncLoader&&(/[A-Z]/.test(t)||!Re(n)))?ff(s,si(t),n,r,t):(t==="true-value"?s._trueValue=n:t==="false-value"&&(s._falseValue=n),hf(s,t,n,o))};function nx(s,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in s&&mf(t)&&jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&s.tagName==="IFRAME"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=s.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return mf(t)&&Re(e)?!1:t in s}function ix(s,t){const e=s._def.props;if(!e)return!1;const n=si(t);return Array.isArray(e)?e.some(i=>si(i)===n):Object.keys(e).some(i=>si(i)===n)}const sx=Ke({patchProp:ex},zv);let _f;function rx(){return _f||(_f=_v(sx))}const ox=(...s)=>{const t=rx().createApp(...s),{mount:e}=t;return t.mount=n=>{const i=lx(n);if(!i)return;const r=t._component;!jt(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=e(i,!1,ax(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ax(s){if(s instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&s instanceof MathMLElement)return"mathml"}function lx(s){return Re(s)?document.querySelector(s):s}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="160",ar={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cx=0,gf=1,ux=2,Fm=1,zm=2,zi=3,ji=0,vn=1,ti=2,ds=0,kr=1,cu=2,vf=3,xf=4,hx=5,Bs=100,fx=101,dx=102,yf=103,Mf=104,px=200,mx=201,_x=202,gx=203,uu=204,hu=205,vx=206,xx=207,yx=208,Mx=209,Sx=210,Ex=211,bx=212,wx=213,Tx=214,Ax=0,Rx=1,Cx=2,rl=3,Px=4,Lx=5,Ix=6,Dx=7,Bm=0,Ox=1,Nx=2,ps=0,Ux=1,Fx=2,zx=3,km=4,Bx=5,kx=6,Gm=300,jr=301,$r=302,fu=303,du=304,Cl=306,pu=1e3,ei=1001,mu=1002,cn=1003,Sf=1004,tc=1005,Hn=1006,Gx=1007,Ho=1008,ms=1009,Hx=1010,Vx=1011,rh=1012,Hm=1013,ls=1014,cs=1015,Vo=1016,Vm=1017,Wm=1018,Ys=1020,Wx=1021,ni=1023,Xx=1024,qx=1025,js=1026,Kr=1027,Yx=1028,Xm=1029,jx=1030,qm=1031,Ym=1033,ec=33776,nc=33777,ic=33778,sc=33779,Ef=35840,bf=35841,wf=35842,Tf=35843,jm=36196,Af=37492,Rf=37496,Cf=37808,Pf=37809,Lf=37810,If=37811,Df=37812,Of=37813,Nf=37814,Uf=37815,Ff=37816,zf=37817,Bf=37818,kf=37819,Gf=37820,Hf=37821,rc=36492,Vf=36494,Wf=36495,$x=36283,Xf=36284,qf=36285,Yf=36286,$m=3e3,$s=3001,Kx=3200,Zx=3201,Km=0,Jx=1,Xn="",je="srgb",$i="srgb-linear",oh="display-p3",Pl="display-p3-linear",ol="linear",me="srgb",al="rec709",ll="p3",cr=7680,jf=519,Qx=512,ty=513,ey=514,Zm=515,ny=516,iy=517,sy=518,ry=519,$f=35044,Kf="300 es",_u=1035,Wi=2e3,cl=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,gu=180/Math.PI;function ea(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function nn(s,t,e){return Math.max(t,Math.min(e,s))}function oy(s,t){return(s%t+t)%t}function oc(s,t,e){return(1-e)*s+e*t}function Zf(s){return(s&s-1)===0&&s!==0}function vu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ay={DEG2RAD:Po};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],x=i[4],y=i[7],E=i[2],T=i[5],b=i[8];return r[0]=o*_+a*v+l*E,r[3]=o*p+a*x+l*T,r[6]=o*m+a*y+l*b,r[1]=c*_+u*v+h*E,r[4]=c*p+u*x+h*T,r[7]=c*m+u*y+h*b,r[2]=f*_+d*v+g*E,r[5]=f*p+d*x+g*T,r[8]=f*m+d*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ac.makeScale(t,e)),this}rotate(t){return this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new Jt;function Jm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ly(){const s=ul("canvas");return s.style.display="block",s}const Jf={};function Lo(s){s in Jf||(Jf[s]=!0,console.warn(s))}const Qf=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),td=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[$i]:{transfer:ol,primaries:al,toReference:s=>s,fromReference:s=>s},[je]:{transfer:me,primaries:al,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pl]:{transfer:ol,primaries:ll,toReference:s=>s.applyMatrix3(td),fromReference:s=>s.applyMatrix3(Qf)},[oh]:{transfer:me,primaries:ll,toReference:s=>s.convertSRGBToLinear().applyMatrix3(td),fromReference:s=>s.applyMatrix3(Qf).convertLinearToSRGB()}},cy=new Set([$i,Pl]),le={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ha[t].toReference,i=ha[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ha[s].primaries},getTransfer:function(s){return s===Xn?ol:ha[s].transfer}};function Gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ur;class Qm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ur===void 0&&(ur=ul("canvas")),ur.width=t.width,ur.height=t.height;const n=ur.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ul("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gr(e[n]/255)*255):e[n]=Gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uy=0;class t_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ea(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cc(i[o].image)):r.push(cc(i[o]))}else r=cc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;class Dn extends sr{constructor(t=Dn.DEFAULT_IMAGE,e=Dn.DEFAULT_MAPPING,n=ei,i=ei,r=Hn,o=Ho,a=ni,l=ms,c=Dn.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ea(),this.name="",this.source=new t_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$s?je:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pu:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pu:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?$s:$m}set encoding(t){Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$s?je:Xn}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Gm;Dn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,i=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(d+1)/2,E=(m+1)/2,T=(u+f)/4,b=(h+_)/4,O=(g+p)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=b/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=O/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=b/r,i=O/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fy extends sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$s?je:Xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new t_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends fy{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class e_ extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dy extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let xs=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,m*v);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const y=a*v;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+_*y,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new W,ed=new xs;class na{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),da.subVectors(this.max,co),hr.subVectors(t.a,co),fr.subVectors(t.b,co),dr.subVectors(t.c,co),Qi.subVectors(fr,hr),ts.subVectors(dr,fr),Cs.subVectors(hr,dr);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-Cs.z,Cs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,Cs.z,0,-Cs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-Cs.y,Cs.x,0];return!hc(e,hr,fr,dr,da)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,hr,fr,dr,da))?!1:(pa.crossVectors(Qi,ts),e=[pa.x,pa.y,pa.z],hc(e,hr,fr,dr,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new W,new W,new W,new W,new W,new W,new W,new W],Kn=new W,fa=new na,hr=new W,fr=new W,dr=new W,Qi=new W,ts=new W,Cs=new W,co=new W,da=new W,pa=new W,Ps=new W;function hc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ps.fromArray(s,r);const a=i.x*Math.abs(Ps.x)+i.y*Math.abs(Ps.y)+i.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const py=new na,uo=new W,fc=new W;class ia{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):py.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(fc)),this.expandByPoint(uo.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new W,dc=new W,ma=new W,es=new W,pc=new W,_a=new W,mc=new W;let Ll=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dc.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),es.copy(this.origin).sub(dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=es.dot(this.direction),l=-es.dot(ma),c=es.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(dc).addScaledVector(ma,f),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,i,r){pc.subVectors(e,t),_a.subVectors(n,t),mc.crossVectors(pc,_a);let o=this.direction.dot(mc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,t);const l=a*this.direction.dot(_a.crossVectors(es,_a));if(l<0)return null;const c=a*this.direction.dot(pc.cross(es));if(c<0||l+c>o)return null;const u=-a*es.dot(mc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ie{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,p)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/pr.setFromMatrixColumn(t,0).length(),r=1/pr.setFromMatrixColumn(t,1).length(),o=1/pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(my,t,_y)}lookAt(t,e,n){const i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ns.crossVectors(n,Tn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ns.crossVectors(n,Tn)),ns.normalize(),ga.crossVectors(Tn,ns),i[0]=ns.x,i[4]=ga.x,i[8]=Tn.x,i[1]=ns.y,i[5]=ga.y,i[9]=Tn.y,i[2]=ns.z,i[6]=ga.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],y=n[11],E=n[15],T=i[0],b=i[4],O=i[8],M=i[12],A=i[1],k=i[5],G=i[9],F=i[13],L=i[2],U=i[6],I=i[10],X=i[14],H=i[3],$=i[7],st=i[11],ot=i[15];return r[0]=o*T+a*A+l*L+c*H,r[4]=o*b+a*k+l*U+c*$,r[8]=o*O+a*G+l*I+c*st,r[12]=o*M+a*F+l*X+c*ot,r[1]=u*T+h*A+f*L+d*H,r[5]=u*b+h*k+f*U+d*$,r[9]=u*O+h*G+f*I+d*st,r[13]=u*M+h*F+f*X+d*ot,r[2]=g*T+_*A+p*L+m*H,r[6]=g*b+_*k+p*U+m*$,r[10]=g*O+_*G+p*I+m*st,r[14]=g*M+_*F+p*X+m*ot,r[3]=v*T+x*A+y*L+E*H,r[7]=v*b+x*k+y*U+E*$,r[11]=v*O+x*G+y*I+E*st,r[15]=v*M+x*F+y*X+E*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,E=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,T=e*v+n*x+i*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=v*b,t[1]=(_*f*r-h*p*r-_*i*d+n*p*d+h*i*m-n*f*m)*b,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*b,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*b,t[4]=x*b,t[5]=(u*p*r-g*f*r+g*i*d-e*p*d-u*i*m+e*f*m)*b,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*b,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*b,t[8]=y*b,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*m-e*h*m)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*b,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*b,t[12]=E*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*b,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,p=o*h,m=a*h,v=l*c,x=l*u,y=l*h,E=n.x,T=n.y,b=n.z;return i[0]=(1-(_+m))*E,i[1]=(d+y)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+m))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(g+x)*b,i[9]=(p-v)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=pr.set(i[0],i[1],i[2]).length();const o=pr.set(i[4],i[5],i[6]).length(),a=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Zn.copy(this);const c=1/r,u=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,e.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Wi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===Wi)g=(o+r)*h,_=-2*h;else if(a===cl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pr=new W,Zn=new Ie,my=new W(0,0,0),_y=new W(1,1,1),ns=new W,ga=new W,Tn=new W,nd=new Ie,id=new xs;class Zr{constructor(t=0,e=0,n=0,i=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gy=0;const sd=new W,mr=new xs,Li=new Ie,va=new W,ho=new W,vy=new W,xy=new xs,rd=new W(1,0,0),od=new W(0,1,0),ad=new W(0,0,1),yy={type:"added"},My={type:"removed"};class Xe extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new W,e=new Zr,n=new xs,i=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Jt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(rd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return sd.copy(t).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ho,va,this.up):Li.lookAt(va,ho,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),mr.setFromRotationMatrix(Li),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(My)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new W(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new W,Ii=new W,_c=new W,Di=new W,_r=new W,gr=new W,ld=new W,gc=new W,vc=new W,xc=new W;let xa=!1;class Vn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Jn.subVectors(t,e),i.cross(Jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Jn.subVectors(i,e),Ii.subVectors(n,e),_c.subVectors(t,e);const o=Jn.dot(Jn),a=Jn.dot(Ii),l=Jn.dot(_c),c=Ii.dot(Ii),u=Ii.dot(_c),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(t,e,n,i,r,o,a,l){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(t,e,n,i){return Jn.subVectors(n,e),Ii.subVectors(t,e),Jn.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Jn.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),Vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;_r.subVectors(i,n),gr.subVectors(r,n),gc.subVectors(t,n);const l=_r.dot(gc),c=gr.dot(gc);if(l<=0&&c<=0)return e.copy(n);vc.subVectors(t,i);const u=_r.dot(vc),h=gr.dot(vc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(_r,o);xc.subVectors(t,r);const d=_r.dot(xc),g=gr.dot(xc);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(gr,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ld.subVectors(r,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(ld,a);const m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(_r,o).addScaledVector(gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},ya={h:0,s:0,l:0};function yc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=oy(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yc(o,r,t+1/3),this.g=yc(o,r,t),this.b=yc(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=i_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=lc(t.r),this.g=lc(t.g),this.b=lc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return le.fromWorkingColorSpace(Qe.copy(this),t),Math.round(nn(Qe.r*255,0,255))*65536+Math.round(nn(Qe.g*255,0,255))*256+Math.round(nn(Qe.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,i=Qe.g,r=Qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=je){le.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,i=Qe.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(ya);const n=oc(is.h,ya.h,e),i=oc(is.s,ya.s,e),r=oc(is.l,ya.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Vt;Vt.NAMES=i_;let Sy=0,Es=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=kr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uu&&(n.blendSrc=this.blendSrc),this.blendDst!==hu&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Pr extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new W,Ma=new Ht;class $n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$f,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$f&&(t.usage=this.usage),t}}class s_ extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class r_ extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ey=0;const Bn=new Ie,Mc=new Xe,vr=new W,An=new na,fo=new na,Ve=new W;class bn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jm(t)?r_:s_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(An.min,fo.min),An.expandByPoint(Ve),Ve.addVectors(An.max,fo.max),An.expandByPoint(Ve)):(An.expandByPoint(fo.min),An.expandByPoint(fo.max))}An.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),Ve.add(vr)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new W,u[A]=new W;const h=new W,f=new W,d=new W,g=new Ht,_=new Ht,p=new Ht,m=new W,v=new W;function x(A,k,G){h.fromArray(i,A*3),f.fromArray(i,k*3),d.fromArray(i,G*3),g.fromArray(o,A*2),_.fromArray(o,k*2),p.fromArray(o,G*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const F=1/(_.x*p.y-p.x*_.y);isFinite(F)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(F),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(F),c[A].add(m),c[k].add(m),c[G].add(m),u[A].add(v),u[k].add(v),u[G].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,k=y.length;A<k;++A){const G=y[A],F=G.start,L=G.count;for(let U=F,I=F+L;U<I;U+=3)x(n[U+0],n[U+1],n[U+2])}const E=new W,T=new W,b=new W,O=new W;function M(A){b.fromArray(r,A*3),O.copy(b);const k=c[A];E.copy(k),E.sub(b.multiplyScalar(b.dot(k))).normalize(),T.crossVectors(O,k);const F=T.dot(u[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=F}for(let A=0,k=y.length;A<k;++A){const G=y[A],F=G.start,L=G.count;for(let U=F,I=F+L;U<I;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new $n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cd=new Ie,Ls=new Ll,Sa=new ia,ud=new W,xr=new W,yr=new W,Mr=new W,Sc=new W,Ea=new W,ba=new Ht,wa=new Ht,Ta=new Ht,hd=new W,fd=new W,dd=new W,Aa=new W,Ra=new W;class ne extends Xe{constructor(t=new bn,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Sc.fromBufferAttribute(h,t),o?Ea.addScaledVector(Sc,u):Ea.addScaledVector(Sc.sub(e),u))}e.add(Ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Sa.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Sa,ud)===null||Ls.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(cd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(cd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,E=x;y<E;y+=3){const T=a.getX(y),b=a.getX(y+1),O=a.getX(y+2);i=Ca(this,m,t,n,c,u,h,T,b,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Ca(this,o,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,E=x;y<E;y+=3){const T=y,b=y+1,O=y+2;i=Ca(this,m,t,n,c,u,h,T,b,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,y=p+2;i=Ca(this,o,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function by(s,t,e,n,i,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ji,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:s}}function Ca(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,xr),s.getVertexPosition(l,yr),s.getVertexPosition(c,Mr);const u=by(s,t,e,n,xr,yr,Mr,Aa);if(u){i&&(ba.fromBufferAttribute(i,a),wa.fromBufferAttribute(i,l),Ta.fromBufferAttribute(i,c),u.uv=Vn.getInterpolation(Aa,xr,yr,Mr,ba,wa,Ta,new Ht)),r&&(ba.fromBufferAttribute(r,a),wa.fromBufferAttribute(r,l),Ta.fromBufferAttribute(r,c),u.uv1=Vn.getInterpolation(Aa,xr,yr,Mr,ba,wa,Ta,new Ht),u.uv2=u.uv1),o&&(hd.fromBufferAttribute(o,a),fd.fromBufferAttribute(o,l),dd.fromBufferAttribute(o,c),u.normal=Vn.getInterpolation(Aa,xr,yr,Mr,hd,fd,dd,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};Vn.getNormal(xr,yr,Mr,h.normal),u.face=h}return u}class ye extends bn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function g(_,p,m,v,x,y,E,T,b,O,M){const A=y/b,k=E/O,G=y/2,F=E/2,L=T/2,U=b+1,I=O+1;let X=0,H=0;const $=new W;for(let st=0;st<I;st++){const ot=st*k-F;for(let K=0;K<U;K++){const et=K*A-G;$[_]=et*v,$[p]=ot*x,$[m]=L,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=T>0?1:-1,u.push($.x,$.y,$.z),h.push(K/b),h.push(1-st/O),X+=1}}for(let st=0;st<O;st++)for(let ot=0;ot<b;ot++){const K=f+ot+U*st,et=f+ot+U*(st+1),lt=f+(ot+1)+U*(st+1),gt=f+(ot+1)+U*st;l.push(K,et,gt),l.push(et,lt,gt),H+=6}a.addGroup(d,H,M),d+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ln(s){const t={};for(let e=0;e<s.length;e++){const n=Jr(s[e]);for(const i in n)t[i]=n[i]}return t}function wy(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function o_(s){return s.getRenderTarget()===null?s.outputColorSpace:le.workingColorSpace}const Ty={clone:Jr,merge:ln};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=wy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class a_ extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wn extends a_{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gu*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Sr=-90,Er=1;class Cy extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wn(Sr,Er,t,e);i.layers=this.layers,this.add(i);const r=new Wn(Sr,Er,t,e);r.layers=this.layers,this.add(r);const o=new Wn(Sr,Er,t,e);o.layers=this.layers,this.add(o);const a=new Wn(Sr,Er,t,e);a.layers=this.layers,this.add(a);const l=new Wn(Sr,Er,t,e);l.layers=this.layers,this.add(l);const c=new Wn(Sr,Er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class l_ extends Dn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:jr,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Py extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$s?je:Xn),this.texture=new l_(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),r=new nr({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ds});r.uniforms.tEquirect.value=e;const o=new ne(i,r),a=e.minFilter;return e.minFilter===Ho&&(e.minFilter=Hn),new Cy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ec=new W,Ly=new W,Iy=new Jt;class os{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ec.subVectors(n,e).cross(Ly.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iy.getNormalMatrix(t),i=this.coplanarPoint(Ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new ia,Pa=new W;class ah{constructor(t=new os,e=new os,n=new os,i=new os,r=new os,o=new os){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+g,y+v).normalize(),n[3].setComponents(l-o,f-u,p-g,y-v).normalize(),n[4].setComponents(l-a,f-h,p-_,y-x).normalize(),e===Wi)n[5].setComponents(l+a,f+h,p+_,y+x).normalize();else if(e===cl)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Pa.x=i.normal.x>0?t.max.x:t.min.x,Pa.y=i.normal.y>0?t.max.y:t.min.y,Pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Dy(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,c),d.count===-1&&g.length===0&&s.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];e?s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Il extends bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*f-o;for(let x=0;x<c;x++){const y=x*h-r;g.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),T=v+1+c*m;d.push(x,y,T),d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.width,t.height,t.widthSegments,t.heightSegments)}}var Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
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
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
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
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,DM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$M=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
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
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
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
}`,kS=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GS=`#define DISTANCE
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
}`,HS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$S=`#define LAMBERT
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
}`,KS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ZS=`#define MATCAP
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
}`,JS=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QS=`#define NORMAL
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
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eE=`#define PHONG
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
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iE=`#define STANDARD
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
}`,sE=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,rE=`#define TOON
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
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aE=`uniform float size;
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
}`,lE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$t={alphahash_fragment:Oy,alphahash_pars_fragment:Ny,alphamap_fragment:Uy,alphamap_pars_fragment:Fy,alphatest_fragment:zy,alphatest_pars_fragment:By,aomap_fragment:ky,aomap_pars_fragment:Gy,batching_pars_vertex:Hy,batching_vertex:Vy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:jy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Jy,color_fragment:Qy,color_pars_fragment:tM,color_pars_vertex:eM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:rM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:hM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:_M,fog_vertex:gM,fog_pars_vertex:vM,fog_fragment:xM,fog_pars_fragment:yM,gradientmap_pars_fragment:MM,lightmap_fragment:SM,lightmap_pars_fragment:EM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:wM,lights_pars_begin:TM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:PM,lights_phong_pars_fragment:LM,lights_physical_fragment:IM,lights_physical_pars_fragment:DM,lights_fragment_begin:OM,lights_fragment_maps:NM,lights_fragment_end:UM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:kM,map_fragment:GM,map_pars_fragment:HM,map_particle_fragment:VM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:qM,morphcolor_vertex:YM,morphnormal_vertex:jM,morphtarget_pars_vertex:$M,morphtarget_vertex:KM,normal_fragment_begin:ZM,normal_fragment_maps:JM,normal_pars_fragment:QM,normal_pars_vertex:tS,normal_vertex:eS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:rS,iridescence_pars_fragment:oS,opaque_fragment:aS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:hS,dithering_pars_fragment:fS,roughnessmap_fragment:dS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:_S,shadowmap_vertex:gS,shadowmask_pars_fragment:vS,skinbase_vertex:xS,skinning_pars_vertex:yS,skinning_vertex:MS,skinnormal_vertex:SS,specularmap_fragment:ES,specularmap_pars_fragment:bS,tonemapping_fragment:wS,tonemapping_pars_fragment:TS,transmission_fragment:AS,transmission_pars_fragment:RS,uv_pars_fragment:CS,uv_pars_vertex:PS,uv_vertex:LS,worldpos_vertex:IS,background_vert:DS,background_frag:OS,backgroundCube_vert:NS,backgroundCube_frag:US,cube_vert:FS,cube_frag:zS,depth_vert:BS,depth_frag:kS,distanceRGBA_vert:GS,distanceRGBA_frag:HS,equirect_vert:VS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:jS,meshlambert_vert:$S,meshlambert_frag:KS,meshmatcap_vert:ZS,meshmatcap_frag:JS,meshnormal_vert:QS,meshnormal_frag:tE,meshphong_vert:eE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:sE,meshtoon_vert:rE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:hE,sprite_frag:fE},xt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},gi={basic:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ln([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ln([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ln([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ln([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ln([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ln([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ln([xt.common,xt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ln([xt.lights,xt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};gi.physical={uniforms:ln([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const La={r:0,b:0,g:0};function dE(s,t,e,n,i,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cl)?(u===void 0&&(u=new ne(new ye(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Jr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=le.getTransfer(x.colorSpace)!==me,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ne(new Il(2,2),new nr({name:"BackgroundMaterial",uniforms:Jr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=le.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(La,o_(s)),n.buffers.color.setClear(La.r,La.g,La.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function pE(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(L,U,I,X,H){let $=!1;if(o){const st=_(X,I,U);c!==st&&(c=st,d(c.object)),$=m(L,X,I,H),$&&v(L,X,I,H)}else{const st=U.wireframe===!0;(c.geometry!==X.id||c.program!==I.id||c.wireframe!==st)&&(c.geometry=X.id,c.program=I.id,c.wireframe=st,$=!0)}H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,O(L,U,I,X),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,I){const X=I.wireframe===!0;let H=a[L.id];H===void 0&&(H={},a[L.id]=H);let $=H[U.id];$===void 0&&($={},H[U.id]=$);let st=$[X];return st===void 0&&(st=p(f()),$[X]=st),st}function p(L){const U=[],I=[],X=[];for(let H=0;H<i;H++)U[H]=0,I[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:X,object:L,attributes:{},index:null}}function m(L,U,I,X){const H=c.attributes,$=U.attributes;let st=0;const ot=I.getAttributes();for(const K in ot)if(ot[K].location>=0){const lt=H[K];let gt=$[K];if(gt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;st++}return c.attributesNum!==st||c.index!==X}function v(L,U,I,X){const H={},$=U.attributes;let st=0;const ot=I.getAttributes();for(const K in ot)if(ot[K].location>=0){let lt=$[K];lt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),H[K]=gt,st++}c.attributes=H,c.attributesNum=st,c.index=X}function x(){const L=c.newAttributes;for(let U=0,I=L.length;U<I;U++)L[U]=0}function y(L){E(L,0)}function E(L,U){const I=c.newAttributes,X=c.enabledAttributes,H=c.attributeDivisors;I[L]=1,X[L]===0&&(s.enableVertexAttribArray(L),X[L]=1),H[L]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),H[L]=U)}function T(){const L=c.newAttributes,U=c.enabledAttributes;for(let I=0,X=U.length;I<X;I++)U[I]!==L[I]&&(s.disableVertexAttribArray(I),U[I]=0)}function b(L,U,I,X,H,$,st){st===!0?s.vertexAttribIPointer(L,U,I,H,$):s.vertexAttribPointer(L,U,I,X,H,$)}function O(L,U,I,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=X.attributes,$=I.getAttributes(),st=U.defaultAttributeValues;for(const ot in $){const K=$[ot];if(K.location>=0){let et=H[ot];if(et===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){const lt=et.normalized,gt=et.itemSize,bt=e.get(et);if(bt===void 0)continue;const Tt=bt.buffer,Bt=bt.type,kt=bt.bytesPerElement,Lt=n.isWebGL2===!0&&(Bt===s.INT||Bt===s.UNSIGNED_INT||et.gpuType===Hm);if(et.isInterleavedBufferAttribute){const Qt=et.data,w=Qt.stride,B=et.offset;if(Qt.isInstancedInterleavedBuffer){for(let V=0;V<K.locationSize;V++)E(K.location+V,Qt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Qt.meshPerAttribute*Qt.count)}else for(let V=0;V<K.locationSize;V++)y(K.location+V);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let V=0;V<K.locationSize;V++)b(K.location+V,gt/K.locationSize,Bt,lt,w*kt,(B+gt/K.locationSize*V)*kt,Lt)}else{if(et.isInstancedBufferAttribute){for(let Qt=0;Qt<K.locationSize;Qt++)E(K.location+Qt,et.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Qt=0;Qt<K.locationSize;Qt++)y(K.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let Qt=0;Qt<K.locationSize;Qt++)b(K.location+Qt,gt/K.locationSize,Bt,lt,gt*kt,gt/K.locationSize*Qt*kt,Lt)}}else if(st!==void 0){const lt=st[ot];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(K.location,lt);break;case 3:s.vertexAttrib3fv(K.location,lt);break;case 4:s.vertexAttrib4fv(K.location,lt);break;default:s.vertexAttrib1fv(K.location,lt)}}}}T()}function M(){G();for(const L in a){const U=a[L];for(const I in U){const X=U[I];for(const H in X)g(X[H].object),delete X[H];delete U[I]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const I in U){const X=U[I];for(const H in X)g(X[H].object),delete X[H];delete U[I]}delete a[L.id]}function k(L){for(const U in a){const I=a[U];if(I[L.id]===void 0)continue;const X=I[L.id];for(const H in X)g(X[H].object),delete X[H];delete I[L.id]}}function G(){F(),u=!0,c!==l&&(c=l,d(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function mE(s,t,e,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function c(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function _E(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||t.has("OES_texture_float"),E=x&&y,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:T}}function gE(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new os,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,x=v*4;let y=m.clippingState||null;l.value=y,y=u(g,f,x,d);for(let E=0;E!==x;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function vE(s){let t=new WeakMap;function e(o,a){return a===fu?o.mapping=jr:a===du&&(o.mapping=$r),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fu||a===du)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Py(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class u_ extends a_{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Lr=4,pd=[.125,.215,.35,.446,.526,.582],ks=20,bc=new u_,md=new Vt;let wc=null,Tc=0,Ac=0;const Fs=(1+Math.sqrt(5))/2,br=1/Fs,_d=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Fs,br),new W(0,Fs,-br),new W(br,0,Fs),new W(-br,0,Fs),new W(Fs,br,0),new W(-Fs,br,0)];class gd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wc,Tc,Ac),t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Vo,format:ni,colorSpace:$i,depthBuffer:!1},i=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xE(r)),this._blurMaterial=yE(r,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,i){const a=new Wn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(md),u.toneMapping=ps,u.autoClear=!1;const d=new Pr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new ne(new ye,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(md),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ia(i,v*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===jr||t.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,bc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_d[(i-1)%_d.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ne(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ks-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ks;p>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ks}`);const m=[];let v=0;for(let b=0;b<ks;++b){const O=b/_,M=Math.exp(-O*O/2);m.push(M),b===0?v+=M:b<p&&(v+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-Lr?i-x+Lr:0),T=4*(this._cubeSize-y);Ia(e,E,T,3*y,2*y),l.setRenderTarget(e),l.render(h,bc)}}function xE(s){const t=[],e=[],n=[];let i=s;const r=s-Lr+1+pd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Lr?l=pd[o-s+Lr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,O=T>2?0:-1,M=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];v.set(M,_*g*T),x.set(f,p*g*T);const A=[T,T,T,T,T,T];y.set(A,m*g*T)}const E=new bn;E.setAttribute("position",new $n(v,_)),E.setAttribute("uv",new $n(x,p)),E.setAttribute("faceIndex",new $n(y,m)),t.push(E),i>Lr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vd(s,t,e){const n=new er(s,t,e);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function yE(s,t,e){const n=new Float32Array(ks),i=new W(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function xd(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function yd(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function ME(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fu||l===du,u=l===jr||l===$r;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new gd(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new gd(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function SE(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function EE(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],T=v[x+1],b=v[x+2];f.push(E,T,T,b,b,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,T=x+1,b=x+2;f.push(E,T,T,b,b,E)}}else return;const p=new(Jm(f)?r_:s_)(f,1);p.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bE(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function h(d,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let m=0;for(let v=0;v<_;v++)m+=g[v];e.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function wE(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function TE(s,t){return s[0]-t[0]}function AE(s,t){return Math.abs(t[1])-Math.abs(s[1])}function RE(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new We,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let U=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",U)};var d=U;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let A=u.attributes.position.count*M,k=1;A>t.maxTextureSize&&(k=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const G=new Float32Array(A*k*4*_),F=new e_(G,A,k,_);F.type=cs,F.needsUpdate=!0;const L=M*4;for(let I=0;I<_;I++){const X=T[I],H=b[I],$=O[I],st=A*k*4*I;for(let ot=0;ot<X.count;ot++){const K=ot*L;x===!0&&(o.fromBufferAttribute(X,ot),G[st+K+0]=o.x,G[st+K+1]=o.y,G[st+K+2]=o.z,G[st+K+3]=0),y===!0&&(o.fromBufferAttribute(H,ot),G[st+K+4]=o.x,G[st+K+5]=o.y,G[st+K+6]=o.z,G[st+K+7]=0),E===!0&&(o.fromBufferAttribute($,ot),G[st+K+8]=o.x,G[st+K+9]=o.y,G[st+K+10]=o.z,G[st+K+11]=$.itemSize===4?o.w:1)}}p={count:_,texture:F,size:new Ht(A,k)},r.set(u,p),u.addEventListener("dispose",U)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];const v=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=f[y]}_.sort(AE);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(TE);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=a[y],T=E[0],b=E[1];T!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+y)!==p[T]&&u.setAttribute("morphTarget"+y,p[T]),m&&u.getAttribute("morphNormal"+y)!==m[T]&&u.setAttribute("morphNormal"+y,m[T]),i[y]=b,v+=b):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function CE(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class h_ extends Dn{constructor(t,e,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:js,u!==js&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=ls),n===void 0&&u===Kr&&(n=Ys),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const f_=new Dn,d_=new h_(1,1);d_.compareFunction=Zm;const p_=new e_,m_=new dy,__=new l_,Md=[],Sd=[],Ed=new Float32Array(16),bd=new Float32Array(9),wd=new Float32Array(4);function so(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Md[i];if(r===void 0&&(r=new Float32Array(i),Md[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Dl(s,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function PE(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function LE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function IE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function DE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function OE(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;wd.set(n),s.uniformMatrix2fv(this.addr,!1,wd),Ge(e,n)}}function NE(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;bd.set(n),s.uniformMatrix3fv(this.addr,!1,bd),Ge(e,n)}}function UE(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Ed.set(n),s.uniformMatrix4fv(this.addr,!1,Ed),Ge(e,n)}}function FE(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function BE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function kE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function GE(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function HE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function VE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function WE(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function XE(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?d_:f_;e.setTexture2D(t||r,i)}function qE(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||m_,i)}function YE(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||__,i)}function jE(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||p_,i)}function $E(s){switch(s){case 5126:return PE;case 35664:return LE;case 35665:return IE;case 35666:return DE;case 35674:return OE;case 35675:return NE;case 35676:return UE;case 5124:case 35670:return FE;case 35667:case 35671:return zE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return GE;case 36294:return HE;case 36295:return VE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return jE}}function KE(s,t){s.uniform1fv(this.addr,t)}function ZE(s,t){const e=so(t,this.size,2);s.uniform2fv(this.addr,e)}function JE(s,t){const e=so(t,this.size,3);s.uniform3fv(this.addr,e)}function QE(s,t){const e=so(t,this.size,4);s.uniform4fv(this.addr,e)}function tb(s,t){const e=so(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function eb(s,t){const e=so(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function nb(s,t){const e=so(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ib(s,t){s.uniform1iv(this.addr,t)}function sb(s,t){s.uniform2iv(this.addr,t)}function rb(s,t){s.uniform3iv(this.addr,t)}function ob(s,t){s.uniform4iv(this.addr,t)}function ab(s,t){s.uniform1uiv(this.addr,t)}function lb(s,t){s.uniform2uiv(this.addr,t)}function cb(s,t){s.uniform3uiv(this.addr,t)}function ub(s,t){s.uniform4uiv(this.addr,t)}function hb(s,t,e){const n=this.cache,i=t.length,r=Dl(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||f_,r[o])}function fb(s,t,e){const n=this.cache,i=t.length,r=Dl(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||m_,r[o])}function db(s,t,e){const n=this.cache,i=t.length,r=Dl(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||__,r[o])}function pb(s,t,e){const n=this.cache,i=t.length,r=Dl(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||p_,r[o])}function mb(s){switch(s){case 5126:return KE;case 35664:return ZE;case 35665:return JE;case 35666:return QE;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}class _b{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$E(e.type)}}class gb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mb(e.type)}}class vb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function Td(s,t){s.seq.push(t),s.map[t.id]=t}function xb(s,t,e){const n=s.name,i=n.length;for(Rc.lastIndex=0;;){const r=Rc.exec(n),o=Rc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Td(e,c===void 0?new _b(a,s,t):new gb(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new vb(a),Td(e,h)),e=h}}}class $a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);xb(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ad(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const yb=37297;let Mb=0;function Sb(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Eb(s){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(s);let n;switch(t===e?n="":t===ll&&e===al?n="LinearDisplayP3ToLinearSRGB":t===al&&e===ll&&(n="LinearSRGBToLinearDisplayP3"),s){case $i:case Pl:return[n,"LinearTransferOETF"];case je:case oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Rd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Sb(s.getShaderSource(t),o)}else return i}function bb(s,t){const e=Eb(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wb(s,t){let e;switch(t){case Ux:e="Linear";break;case Fx:e="Reinhard";break;case zx:e="OptimizedCineon";break;case km:e="ACESFilmic";break;case kx:e="AgX";break;case Bx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Tb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Ab(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ir).join(`
`)}function Rb(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cb(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ir(s){return s!==""}function Cd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(s){return s.replace(Pb,Ib)}const Lb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ib(s,t){let e=$t[t];if(e===void 0){const n=Lb.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xu(e)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(s){return s.replace(Db,Ob)}function Ob(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Id(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fm?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ub(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jr:case $r:t="ENVMAP_TYPE_CUBE";break;case Cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $r:t="ENVMAP_MODE_REFRACTION";break}return t}function zb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bm:t="ENVMAP_BLENDING_MULTIPLY";break;case Ox:t="ENVMAP_BLENDING_MIX";break;case Nx:t="ENVMAP_BLENDING_ADD";break}return t}function Bb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kb(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Nb(e),c=Ub(e),u=Fb(e),h=zb(e),f=Bb(e),d=e.isWebGL2?"":Tb(e),g=Ab(e),_=Rb(r),p=i.createProgram();let m,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ir).join(`
`),m.length>0&&(m+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ir).join(`
`),v.length>0&&(v+=`
`)):(m=[Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),v=[d,Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ps?"#define TONE_MAPPING":"",e.toneMapping!==ps?$t.tonemapping_pars_fragment:"",e.toneMapping!==ps?wb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,bb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=xu(o),o=Cd(o,e),o=Pd(o,e),a=xu(a),a=Cd(a,e),a=Pd(a,e),o=Ld(o),a=Ld(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+m+o,E=x+v+a,T=Ad(i,i.VERTEX_SHADER,y),b=Ad(i,i.FRAGMENT_SHADER,E);i.attachShader(p,T),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function O(G){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(b).trim();let I=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,b);else{const H=Rd(i,T,"vertex"),$=Rd(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+H+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||U==="")&&(X=!1);X&&(G.diagnostics={runnable:I,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:v}})}i.deleteShader(T),i.deleteShader(b),M=new $a(i,p),A=Cb(i,p)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(p,yb)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mb++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=b,this}let Gb=0;class Hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vb(t),e.set(t,n)),n}}class Vb{constructor(t){this.id=Gb++,this.code=t,this.usedTimes=0}}function Wb(s,t,e,n,i,r,o){const a=new n_,l=new Hb,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,A,k,G,F){const L=G.fog,U=F.geometry,I=M.isMeshStandardMaterial?G.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||I),H=X&&X.mapping===Cl?X.image.height:null,$=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=st!==void 0?st.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let et,lt,gt,bt;if($){const Ce=gi[$];et=Ce.vertexShader,lt=Ce.fragmentShader}else et=M.vertexShader,lt=M.fragmentShader,l.update(M),gt=l.getVertexShaderID(M),bt=l.getFragmentShaderID(M);const Tt=s.getRenderTarget(),Bt=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,Lt=!!M.map,Qt=!!M.matcap,w=!!X,B=!!M.aoMap,V=!!M.lightMap,Q=!!M.bumpMap,j=!!M.normalMap,rt=!!M.displacementMap,at=!!M.emissiveMap,C=!!M.metalnessMap,S=!!M.roughnessMap,N=M.anisotropy>0,J=M.clearcoat>0,q=M.iridescence>0,Z=M.sheen>0,ht=M.transmission>0,ut=N&&!!M.anisotropyMap,pt=J&&!!M.clearcoatMap,yt=J&&!!M.clearcoatNormalMap,At=J&&!!M.clearcoatRoughnessMap,ct=q&&!!M.iridescenceMap,Xt=q&&!!M.iridescenceThicknessMap,Nt=Z&&!!M.sheenColorMap,Ot=Z&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,vt=!!M.specularColorMap,D=!!M.specularIntensityMap,mt=ht&&!!M.transmissionMap,Ct=ht&&!!M.thicknessMap,wt=!!M.gradientMap,dt=!!M.alphaMap,z=M.alphaTest>0,_t=!!M.alphaHash,Mt=!!M.extensions,Ut=!!U.attributes.uv1,Dt=!!U.attributes.uv2,te=!!U.attributes.uv3;let ee=ps;return M.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:et,fragmentShader:lt,defines:M.defines,customVertexShaderID:gt,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:kt,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:$i,map:Lt,matcap:Qt,envMap:w,envMapMode:w&&X.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:V,bumpMap:Q,normalMap:j,displacementMap:f&&rt,emissiveMap:at,normalMapObjectSpace:j&&M.normalMapType===Jx,normalMapTangentSpace:j&&M.normalMapType===Km,metalnessMap:C,roughnessMap:S,anisotropy:N,anisotropyMap:ut,clearcoat:J,clearcoatMap:pt,clearcoatNormalMap:yt,clearcoatRoughnessMap:At,iridescence:q,iridescenceMap:ct,iridescenceThicknessMap:Xt,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:Ot,specularMap:Pt,specularColorMap:vt,specularIntensityMap:D,transmission:ht,transmissionMap:mt,thicknessMap:Ct,gradientMap:wt,opaque:M.transparent===!1&&M.blending===kr,alphaMap:dt,alphaTest:z,alphaHash:_t,combine:M.combine,mapUv:Lt&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:V&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:j&&_(M.normalMap.channel),displacementMapUv:rt&&_(M.displacementMap.channel),emissiveMapUv:at&&_(M.emissiveMap.channel),metalnessMapUv:C&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:yt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(M.sheenRoughnessMap.channel),specularMapUv:Pt&&_(M.specularMap.channel),specularColorMapUv:vt&&_(M.specularColorMap.channel),specularIntensityMapUv:D&&_(M.specularIntensityMap.channel),transmissionMapUv:mt&&_(M.transmissionMap.channel),thicknessMapUv:Ct&&_(M.thicknessMap.channel),alphaMapUv:dt&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(j||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:te,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Lt||dt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Mt&&M.extensions.derivatives===!0,extensionFragDepth:Mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)A.push(k),A.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(v(A,M),x(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const A=g[M.type];let k;if(A){const G=gi[A];k=Ty.clone(G.uniforms)}else k=M.uniforms;return k}function E(M,A){let k;for(let G=0,F=c.length;G<F;G++){const L=c[G];if(L.cacheKey===A){k=L,++k.usedTimes;break}}return k===void 0&&(k=new kb(s,A,M,r),c.push(k)),k}function T(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:O}}function Xb(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Od(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=s[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||qb),n.length>1&&n.sort(f||Dd),i.length>1&&i.sort(f||Dd)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Yb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Od,s.set(n,[o])):i>=r.length?(o=new Od,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function jb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Vt};break;case"SpotLight":e={position:new W,direction:new W,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function $b(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Kb=0;function Zb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jb(s,t){const e=new jb,n=$b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,o=new Ie,a=new Ie;function l(u,h){let f=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,p=0,m=0,v=0,x=0,y=0,E=0,T=0,b=0,O=0,M=0;u.sort(Zb);const A=h===!0?Math.PI:1;for(let G=0,F=u.length;G<F;G++){const L=u[G],U=L.color,I=L.intensity,X=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=U.r*I*A,d+=U.g*I*A,g+=U.b*I*A;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],I);M++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const st=L.shadow,ot=n.get(L);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.directionalShadow[_]=ot,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(U).multiplyScalar(I*A),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[m]=$;const st=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,st.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[m]=st.matrix,L.castShadow){const ot=n.get(L);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.spotShadow[m]=ot,i.spotShadowMap[m]=H,T++}m++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(U).multiplyScalar(I),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=$,v++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*A),$.distance=L.distance,$.decay=L.decay,L.castShadow){const st=L.shadow,ot=n.get(L);ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,ot.shadowCameraNear=st.camera.near,ot.shadowCameraFar=st.camera.far,i.pointShadow[p]=ot,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=L.shadow.matrix,E++}i.point[p]=$,p++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(I*A),$.groundColor.copy(L.groundColor).multiplyScalar(I*A),i.hemi[x]=$,x++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==m||k.rectAreaLength!==v||k.hemiLength!==x||k.numDirectionalShadows!==y||k.numPointShadows!==E||k.numSpotShadows!==T||k.numSpotMaps!==b||k.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,k.directionalLength=_,k.pointLength=p,k.spotLength=m,k.rectAreaLength=v,k.hemiLength=x,k.numDirectionalShadows=y,k.numPointShadows=E,k.numSpotShadows=T,k.numSpotMaps=b,k.numLightProbes=M,i.version=Kb++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Nd(s,t){const e=new Jb(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Qb(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Nd(s,t),e.set(r,[l])):o>=a.length?(l=new Nd(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class tw extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ew extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sw(s,t,e){let n=new ah;const i=new Ht,r=new Ht,o=new We,a=new tw({depthPacking:Zx}),l=new ew,c={},u=e.maxTextureSize,h={[ji]:vn,[vn]:ji,[ti]:ti},f=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let m=this.type;this.render=function(T,b,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ds),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=m!==zi&&this.type===zi,L=m===zi&&this.type!==zi;for(let U=0,I=T.length;U<I;U++){const X=T[U],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const $=H.getFrameExtents();if(i.multiply($),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||F===!0||L===!0){const ot=this.type!==zi?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new er(i.x,i.y,ot),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const st=H.getViewportCount();for(let ot=0;ot<st;ot++){const K=H.getViewport(ot);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),G.viewport(o),H.updateMatrices(X,ot),n=H.getFrustum(),y(b,O,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&v(H,O),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,A,k)};function v(T,b){const O=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new er(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,O,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,O,d,_,null)}function x(T,b,O,M){let A=null;const k=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)A=k;else if(A=O.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=A.uuid,F=b.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let U=L[F];U===void 0&&(U=A.clone(),L[F]=U,b.addEventListener("dispose",E)),A=U}if(A.visible=b.visible,A.wireframe=b.wireframe,M===zi?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:h[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=s.properties.get(A);G.light=O}return A}function y(T,b,O,M,A){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===zi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const F=t.update(T),L=T.material;if(Array.isArray(L)){const U=F.groups;for(let I=0,X=U.length;I<X;I++){const H=U[I],$=L[H.materialIndex];if($&&$.visible){const st=x(T,$,M,A);T.onBeforeShadow(s,T,b,O,F,st,H),s.renderBufferDirect(O,null,F,st,T,H),T.onAfterShadow(s,T,b,O,F,st,H)}}}else if(L.visible){const U=x(T,L,M,A);T.onBeforeShadow(s,T,b,O,F,U,null),s.renderBufferDirect(O,null,F,U,T,null),T.onAfterShadow(s,T,b,O,F,U,null)}}const G=T.children;for(let F=0,L=G.length;F<L;F++)y(G[F],b,O,M,A)}function E(T){T.target.removeEventListener("dispose",E);for(const O in c){const M=c[O],A=T.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function rw(s,t,e){const n=e.isWebGL2;function i(){let z=!1;const _t=new We;let Mt=null;const Ut=new We(0,0,0,0);return{setMask:function(Dt){Mt!==Dt&&!z&&(s.colorMask(Dt,Dt,Dt,Dt),Mt=Dt)},setLocked:function(Dt){z=Dt},setClear:function(Dt,te,ee,be,Ce){Ce===!0&&(Dt*=be,te*=be,ee*=be),_t.set(Dt,te,ee,be),Ut.equals(_t)===!1&&(s.clearColor(Dt,te,ee,be),Ut.copy(_t))},reset:function(){z=!1,Mt=null,Ut.set(-1,0,0,0)}}}function r(){let z=!1,_t=null,Mt=null,Ut=null;return{setTest:function(Dt){Dt?kt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(Dt){_t!==Dt&&!z&&(s.depthMask(Dt),_t=Dt)},setFunc:function(Dt){if(Mt!==Dt){switch(Dt){case Ax:s.depthFunc(s.NEVER);break;case Rx:s.depthFunc(s.ALWAYS);break;case Cx:s.depthFunc(s.LESS);break;case rl:s.depthFunc(s.LEQUAL);break;case Px:s.depthFunc(s.EQUAL);break;case Lx:s.depthFunc(s.GEQUAL);break;case Ix:s.depthFunc(s.GREATER);break;case Dx:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=Dt}},setLocked:function(Dt){z=Dt},setClear:function(Dt){Ut!==Dt&&(s.clearDepth(Dt),Ut=Dt)},reset:function(){z=!1,_t=null,Mt=null,Ut=null}}}function o(){let z=!1,_t=null,Mt=null,Ut=null,Dt=null,te=null,ee=null,be=null,Ce=null;return{setTest:function(se){z||(se?kt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(se){_t!==se&&!z&&(s.stencilMask(se),_t=se)},setFunc:function(se,De,ai){(Mt!==se||Ut!==De||Dt!==ai)&&(s.stencilFunc(se,De,ai),Mt=se,Ut=De,Dt=ai)},setOp:function(se,De,ai){(te!==se||ee!==De||be!==ai)&&(s.stencilOp(se,De,ai),te=se,ee=De,be=ai)},setLocked:function(se){z=se},setClear:function(se){Ce!==se&&(s.clearStencil(se),Ce=se)},reset:function(){z=!1,_t=null,Mt=null,Ut=null,Dt=null,te=null,ee=null,be=null,Ce=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,y=null,E=null,T=null,b=null,O=null,M=new Vt(0,0,0),A=0,k=!1,G=null,F=null,L=null,U=null,I=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(st)[1]),H=$>=1):st.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),H=$>=2);let ot=null,K={};const et=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),gt=new We().fromArray(et),bt=new We().fromArray(lt);function Tt(z,_t,Mt,Ut){const Dt=new Uint8Array(4),te=s.createTexture();s.bindTexture(z,te),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<Mt;ee++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(_t+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return te}const Bt={};Bt[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Bt[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Bt[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Bt[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),kt(s.DEPTH_TEST),l.setFunc(rl),at(!1),C(gf),kt(s.CULL_FACE),j(ds);function kt(z){f[z]!==!0&&(s.enable(z),f[z]=!0)}function Lt(z){f[z]!==!1&&(s.disable(z),f[z]=!1)}function Qt(z,_t){return d[z]!==_t?(s.bindFramebuffer(z,_t),d[z]=_t,n&&(z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_t),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function w(z,_t){let Mt=_,Ut=!1;if(z)if(Mt=g.get(_t),Mt===void 0&&(Mt=[],g.set(_t,Mt)),z.isWebGLMultipleRenderTargets){const Dt=z.texture;if(Mt.length!==Dt.length||Mt[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=Dt.length;te<ee;te++)Mt[te]=s.COLOR_ATTACHMENT0+te;Mt.length=Dt.length,Ut=!0}}else Mt[0]!==s.COLOR_ATTACHMENT0&&(Mt[0]=s.COLOR_ATTACHMENT0,Ut=!0);else Mt[0]!==s.BACK&&(Mt[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function B(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const V={[Bs]:s.FUNC_ADD,[fx]:s.FUNC_SUBTRACT,[dx]:s.FUNC_REVERSE_SUBTRACT};if(n)V[yf]=s.MIN,V[Mf]=s.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(V[yf]=z.MIN_EXT,V[Mf]=z.MAX_EXT)}const Q={[px]:s.ZERO,[mx]:s.ONE,[_x]:s.SRC_COLOR,[uu]:s.SRC_ALPHA,[Sx]:s.SRC_ALPHA_SATURATE,[yx]:s.DST_COLOR,[vx]:s.DST_ALPHA,[gx]:s.ONE_MINUS_SRC_COLOR,[hu]:s.ONE_MINUS_SRC_ALPHA,[Mx]:s.ONE_MINUS_DST_COLOR,[xx]:s.ONE_MINUS_DST_ALPHA,[Ex]:s.CONSTANT_COLOR,[bx]:s.ONE_MINUS_CONSTANT_COLOR,[wx]:s.CONSTANT_ALPHA,[Tx]:s.ONE_MINUS_CONSTANT_ALPHA};function j(z,_t,Mt,Ut,Dt,te,ee,be,Ce,se){if(z===ds){m===!0&&(Lt(s.BLEND),m=!1);return}if(m===!1&&(kt(s.BLEND),m=!0),z!==hx){if(z!==v||se!==k){if((x!==Bs||T!==Bs)&&(s.blendEquation(s.FUNC_ADD),x=Bs,T=Bs),se)switch(z){case kr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cu:s.blendFunc(s.ONE,s.ONE);break;case vf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,E=null,b=null,O=null,M.set(0,0,0),A=0,v=z,k=se}return}Dt=Dt||_t,te=te||Mt,ee=ee||Ut,(_t!==x||Dt!==T)&&(s.blendEquationSeparate(V[_t],V[Dt]),x=_t,T=Dt),(Mt!==y||Ut!==E||te!==b||ee!==O)&&(s.blendFuncSeparate(Q[Mt],Q[Ut],Q[te],Q[ee]),y=Mt,E=Ut,b=te,O=ee),(be.equals(M)===!1||Ce!==A)&&(s.blendColor(be.r,be.g,be.b,Ce),M.copy(be),A=Ce),v=z,k=!1}function rt(z,_t){z.side===ti?Lt(s.CULL_FACE):kt(s.CULL_FACE);let Mt=z.side===vn;_t&&(Mt=!Mt),at(Mt),z.blending===kr&&z.transparent===!1?j(ds):j(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ut=z.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),N(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?kt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){G!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),G=z)}function C(z){z!==cx?(kt(s.CULL_FACE),z!==F&&(z===gf?s.cullFace(s.BACK):z===ux?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),F=z}function S(z){z!==L&&(H&&s.lineWidth(z),L=z)}function N(z,_t,Mt){z?(kt(s.POLYGON_OFFSET_FILL),(U!==_t||I!==Mt)&&(s.polygonOffset(_t,Mt),U=_t,I=Mt)):Lt(s.POLYGON_OFFSET_FILL)}function J(z){z?kt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function q(z){z===void 0&&(z=s.TEXTURE0+X-1),ot!==z&&(s.activeTexture(z),ot=z)}function Z(z,_t,Mt){Mt===void 0&&(ot===null?Mt=s.TEXTURE0+X-1:Mt=ot);let Ut=K[Mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},K[Mt]=Ut),(Ut.type!==z||Ut.texture!==_t)&&(ot!==Mt&&(s.activeTexture(Mt),ot=Mt),s.bindTexture(z,_t||Bt[z]),Ut.type=z,Ut.texture=_t)}function ht(){const z=K[ot];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(z){gt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),gt.copy(z))}function mt(z){bt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),bt.copy(z))}function Ct(z,_t){let Mt=h.get(_t);Mt===void 0&&(Mt=new WeakMap,h.set(_t,Mt));let Ut=Mt.get(z);Ut===void 0&&(Ut=s.getUniformBlockIndex(_t,z.name),Mt.set(z,Ut))}function wt(z,_t){const Ut=h.get(_t).get(z);u.get(_t)!==Ut&&(s.uniformBlockBinding(_t,Ut,z.__bindingPointIndex),u.set(_t,Ut))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ot=null,K={},d={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,y=null,E=null,T=null,b=null,O=null,M=new Vt(0,0,0),A=0,k=!1,G=null,F=null,L=null,U=null,I=null,gt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:kt,disable:Lt,bindFramebuffer:Qt,drawBuffers:w,useProgram:B,setBlending:j,setMaterial:rt,setFlipSided:at,setCullFace:C,setLineWidth:S,setPolygonOffset:N,setScissorTest:J,activeTexture:q,bindTexture:Z,unbindTexture:ht,compressedTexImage2D:ut,compressedTexImage3D:pt,texImage2D:Pt,texImage3D:vt,updateUBOMapping:Ct,uniformBlockBinding:wt,texStorage2D:Nt,texStorage3D:Ot,texSubImage2D:yt,texSubImage3D:At,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xt,scissor:D,viewport:mt,reset:dt}}function ow(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):ul("canvas")}function _(C,S,N,J){let q=1;if((C.width>J||C.height>J)&&(q=J/Math.max(C.width,C.height)),q<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const Z=S?vu:Math.floor,ht=Z(q*C.width),ut=Z(q*C.height);h===void 0&&(h=g(ht,ut));const pt=N?g(ht,ut):h;return pt.width=ht,pt.height=ut,pt.getContext("2d").drawImage(C,0,0,ht,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ht+"x"+ut+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Zf(C.width)&&Zf(C.height)}function m(C){return a?!1:C.wrapS!==ei||C.wrapT!==ei||C.minFilter!==cn&&C.minFilter!==Hn}function v(C,S){return C.generateMipmaps&&S&&C.minFilter!==cn&&C.minFilter!==Hn}function x(C){s.generateMipmap(C)}function y(C,S,N,J,q=!1){if(a===!1)return S;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===s.RED&&(N===s.FLOAT&&(Z=s.R32F),N===s.HALF_FLOAT&&(Z=s.R16F),N===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(Z=s.R8UI),N===s.UNSIGNED_SHORT&&(Z=s.R16UI),N===s.UNSIGNED_INT&&(Z=s.R32UI),N===s.BYTE&&(Z=s.R8I),N===s.SHORT&&(Z=s.R16I),N===s.INT&&(Z=s.R32I)),S===s.RG&&(N===s.FLOAT&&(Z=s.RG32F),N===s.HALF_FLOAT&&(Z=s.RG16F),N===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RGBA){const ht=q?ol:le.getTransfer(J);N===s.FLOAT&&(Z=s.RGBA32F),N===s.HALF_FLOAT&&(Z=s.RGBA16F),N===s.UNSIGNED_BYTE&&(Z=ht===me?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(C,S,N){return v(C,N)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){return C===cn||C===Sf||C===tc?s.NEAREST:s.LINEAR}function b(C){const S=C.target;S.removeEventListener("dispose",b),M(S),S.isVideoTexture&&u.delete(S)}function O(C){const S=C.target;S.removeEventListener("dispose",O),k(S)}function M(C){const S=n.get(C);if(S.__webglInit===void 0)return;const N=C.source,J=f.get(N);if(J){const q=J[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&A(C),Object.keys(J).length===0&&f.delete(N)}n.remove(C)}function A(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const N=C.source,J=f.get(N);delete J[S.__cacheKey],o.memory.textures--}function k(C){const S=C.texture,N=n.get(C),J=n.get(S);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(N.__webglFramebuffer[q]))for(let Z=0;Z<N.__webglFramebuffer[q].length;Z++)s.deleteFramebuffer(N.__webglFramebuffer[q][Z]);else s.deleteFramebuffer(N.__webglFramebuffer[q]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[q])}else{if(Array.isArray(N.__webglFramebuffer))for(let q=0;q<N.__webglFramebuffer.length;q++)s.deleteFramebuffer(N.__webglFramebuffer[q]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let q=0;q<N.__webglColorRenderbuffer.length;q++)N.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[q]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let q=0,Z=S.length;q<Z;q++){const ht=n.get(S[q]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(S[q])}n.remove(S),n.remove(C)}let G=0;function F(){G=0}function L(){const C=G;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),G+=1,C}function U(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function I(C,S){const N=n.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(N,C,S);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+S)}function X(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){gt(N,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+S)}function H(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){gt(N,C,S);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+S)}function $(C,S){const N=n.get(C);if(C.version>0&&N.__version!==C.version){bt(N,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+S)}const st={[pu]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[mu]:s.MIRRORED_REPEAT},ot={[cn]:s.NEAREST,[Sf]:s.NEAREST_MIPMAP_NEAREST,[tc]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[Gx]:s.LINEAR_MIPMAP_NEAREST,[Ho]:s.LINEAR_MIPMAP_LINEAR},K={[Qx]:s.NEVER,[ry]:s.ALWAYS,[ty]:s.LESS,[Zm]:s.LEQUAL,[ey]:s.EQUAL,[sy]:s.GEQUAL,[ny]:s.GREATER,[iy]:s.NOTEQUAL};function et(C,S,N){if(N?(s.texParameteri(C,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,st[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ot[S.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==ei||S.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,T(S.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==cn&&S.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===cn||S.minFilter!==tc&&S.minFilter!==Ho||S.type===cs&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Vo&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function lt(C,S){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));const J=S.source;let q=f.get(J);q===void 0&&(q={},f.set(J,q));const Z=U(S);if(Z!==C.__cacheKey){q[Z]===void 0&&(q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[Z].usedTimes++;const ht=q[C.__cacheKey];ht!==void 0&&(q[C.__cacheKey].usedTimes--,ht.usedTimes===0&&A(S)),C.__cacheKey=Z,C.__webglTexture=q[Z].texture}return N}function gt(C,S,N){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const q=lt(C,S),Z=S.source;e.bindTexture(J,C.__webglTexture,s.TEXTURE0+N);const ht=n.get(Z);if(Z.version!==ht.__version||q===!0){e.activeTexture(s.TEXTURE0+N);const ut=le.getPrimaries(le.workingColorSpace),pt=S.colorSpace===Xn?null:le.getPrimaries(S.colorSpace),yt=S.colorSpace===Xn||ut===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const At=m(S)&&p(S.image)===!1;let ct=_(S.image,At,!1,i.maxTextureSize);ct=at(S,ct);const Xt=p(ct)||a,Nt=r.convert(S.format,S.colorSpace);let Ot=r.convert(S.type),Pt=y(S.internalFormat,Nt,Ot,S.colorSpace,S.isVideoTexture);et(J,S,Xt);let vt;const D=S.mipmaps,mt=a&&S.isVideoTexture!==!0&&Pt!==jm,Ct=ht.__version===void 0||q===!0,wt=E(S,ct,Xt);if(S.isDepthTexture)Pt=s.DEPTH_COMPONENT,a?S.type===cs?Pt=s.DEPTH_COMPONENT32F:S.type===ls?Pt=s.DEPTH_COMPONENT24:S.type===Ys?Pt=s.DEPTH24_STENCIL8:Pt=s.DEPTH_COMPONENT16:S.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===js&&Pt===s.DEPTH_COMPONENT&&S.type!==rh&&S.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ls,Ot=r.convert(S.type)),S.format===Kr&&Pt===s.DEPTH_COMPONENT&&(Pt=s.DEPTH_STENCIL,S.type!==Ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ys,Ot=r.convert(S.type))),Ct&&(mt?e.texStorage2D(s.TEXTURE_2D,1,Pt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Pt,ct.width,ct.height,0,Nt,Ot,null));else if(S.isDataTexture)if(D.length>0&&Xt){mt&&Ct&&e.texStorage2D(s.TEXTURE_2D,wt,Pt,D[0].width,D[0].height);for(let dt=0,z=D.length;dt<z;dt++)vt=D[dt],mt?e.texSubImage2D(s.TEXTURE_2D,dt,0,0,vt.width,vt.height,Nt,Ot,vt.data):e.texImage2D(s.TEXTURE_2D,dt,Pt,vt.width,vt.height,0,Nt,Ot,vt.data);S.generateMipmaps=!1}else mt?(Ct&&e.texStorage2D(s.TEXTURE_2D,wt,Pt,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Nt,Ot,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,ct.width,ct.height,0,Nt,Ot,ct.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){mt&&Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Pt,D[0].width,D[0].height,ct.depth);for(let dt=0,z=D.length;dt<z;dt++)vt=D[dt],S.format!==ni?Nt!==null?mt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,vt.width,vt.height,ct.depth,Nt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,Pt,vt.width,vt.height,ct.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,vt.width,vt.height,ct.depth,Nt,Ot,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,dt,Pt,vt.width,vt.height,ct.depth,0,Nt,Ot,vt.data)}else{mt&&Ct&&e.texStorage2D(s.TEXTURE_2D,wt,Pt,D[0].width,D[0].height);for(let dt=0,z=D.length;dt<z;dt++)vt=D[dt],S.format!==ni?Nt!==null?mt?e.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,vt.width,vt.height,Nt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,dt,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?e.texSubImage2D(s.TEXTURE_2D,dt,0,0,vt.width,vt.height,Nt,Ot,vt.data):e.texImage2D(s.TEXTURE_2D,dt,Pt,vt.width,vt.height,0,Nt,Ot,vt.data)}else if(S.isDataArrayTexture)mt?(Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Pt,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Nt,Ot,ct.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,ct.width,ct.height,ct.depth,0,Nt,Ot,ct.data);else if(S.isData3DTexture)mt?(Ct&&e.texStorage3D(s.TEXTURE_3D,wt,Pt,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Nt,Ot,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,ct.width,ct.height,ct.depth,0,Nt,Ot,ct.data);else if(S.isFramebufferTexture){if(Ct)if(mt)e.texStorage2D(s.TEXTURE_2D,wt,Pt,ct.width,ct.height);else{let dt=ct.width,z=ct.height;for(let _t=0;_t<wt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Pt,dt,z,0,Nt,Ot,null),dt>>=1,z>>=1}}else if(D.length>0&&Xt){mt&&Ct&&e.texStorage2D(s.TEXTURE_2D,wt,Pt,D[0].width,D[0].height);for(let dt=0,z=D.length;dt<z;dt++)vt=D[dt],mt?e.texSubImage2D(s.TEXTURE_2D,dt,0,0,Nt,Ot,vt):e.texImage2D(s.TEXTURE_2D,dt,Pt,Nt,Ot,vt);S.generateMipmaps=!1}else mt?(Ct&&e.texStorage2D(s.TEXTURE_2D,wt,Pt,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Ot,ct)):e.texImage2D(s.TEXTURE_2D,0,Pt,Nt,Ot,ct);v(S,Xt)&&x(J),ht.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function bt(C,S,N){if(S.image.length!==6)return;const J=lt(C,S),q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+N);const Z=n.get(q);if(q.version!==Z.__version||J===!0){e.activeTexture(s.TEXTURE0+N);const ht=le.getPrimaries(le.workingColorSpace),ut=S.colorSpace===Xn?null:le.getPrimaries(S.colorSpace),pt=S.colorSpace===Xn||ht===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,At=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let dt=0;dt<6;dt++)!yt&&!At?ct[dt]=_(S.image[dt],!1,!0,i.maxCubemapSize):ct[dt]=At?S.image[dt].image:S.image[dt],ct[dt]=at(S,ct[dt]);const Xt=ct[0],Nt=p(Xt)||a,Ot=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),vt=y(S.internalFormat,Ot,Pt,S.colorSpace),D=a&&S.isVideoTexture!==!0,mt=Z.__version===void 0||J===!0;let Ct=E(S,Xt,Nt);et(s.TEXTURE_CUBE_MAP,S,Nt);let wt;if(yt){D&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,vt,Xt.width,Xt.height);for(let dt=0;dt<6;dt++){wt=ct[dt].mipmaps;for(let z=0;z<wt.length;z++){const _t=wt[z];S.format!==ni?Ot!==null?D?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,0,0,_t.width,_t.height,Ot,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,vt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,0,0,_t.width,_t.height,Ot,Pt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,vt,_t.width,_t.height,0,Ot,Pt,_t.data)}}}else{wt=S.mipmaps,D&&mt&&(wt.length>0&&Ct++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,vt,ct[0].width,ct[0].height));for(let dt=0;dt<6;dt++)if(At){D?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ct[dt].width,ct[dt].height,Ot,Pt,ct[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,vt,ct[dt].width,ct[dt].height,0,Ot,Pt,ct[dt].data);for(let z=0;z<wt.length;z++){const Mt=wt[z].image[dt].image;D?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,0,0,Mt.width,Mt.height,Ot,Pt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,vt,Mt.width,Mt.height,0,Ot,Pt,Mt.data)}}else{D?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ot,Pt,ct[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,vt,Ot,Pt,ct[dt]);for(let z=0;z<wt.length;z++){const _t=wt[z];D?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,0,0,Ot,Pt,_t.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,vt,Ot,Pt,_t.image[dt])}}}v(S,Nt)&&x(s.TEXTURE_CUBE_MAP),Z.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Tt(C,S,N,J,q,Z){const ht=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),pt=y(N.internalFormat,ht,ut,N.colorSpace);if(!n.get(S).__hasExternalTextures){const At=Math.max(1,S.width>>Z),ct=Math.max(1,S.height>>Z);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,Z,pt,At,ct,S.depth,0,ht,ut,null):e.texImage2D(q,Z,pt,At,ct,0,ht,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,q,n.get(N).__webglTexture,0,Q(S)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,q,n.get(N).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,S,N){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(N||j(S)){const q=S.depthTexture;q&&q.isDepthTexture&&(q.type===cs?J=s.DEPTH_COMPONENT32F:q.type===ls&&(J=s.DEPTH_COMPONENT24));const Z=Q(S);j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,J,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,J,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const J=Q(S);N&&j(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0;q<J.length;q++){const Z=J[q],ht=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),pt=y(Z.internalFormat,ht,ut,Z.colorSpace),yt=Q(S);N&&j(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,pt,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,q=Q(S);if(S.depthTexture.format===js)j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Kr)j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(C){const S=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,C)}else if(N){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=s.createRenderbuffer(),Bt(S.__webglDepthbuffer[J],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Bt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(C,S,N){const J=n.get(C);S!==void 0&&Tt(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Lt(C)}function w(C){const S=C.texture,N=n.get(C),J=n.get(S);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,o.memory.textures++);const q=C.isWebGLCubeRenderTarget===!0,Z=C.isWebGLMultipleRenderTargets===!0,ht=p(C)||a;if(q){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let pt=0;pt<S.mipmaps.length;pt++)N.__webglFramebuffer[ut][pt]=s.createFramebuffer()}else N.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)N.__webglFramebuffer[ut]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Z)if(i.drawBuffers){const ut=C.texture;for(let pt=0,yt=ut.length;pt<yt;pt++){const At=n.get(ut[pt]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&j(C)===!1){const ut=Z?S:[S];N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pt=0;pt<ut.length;pt++){const yt=ut[pt];N.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[pt]);const At=r.convert(yt.format,yt.colorSpace),ct=r.convert(yt.type),Xt=y(yt.internalFormat,At,ct,yt.colorSpace,C.isXRRenderTarget===!0),Nt=Q(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,N.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),et(s.TEXTURE_CUBE_MAP,S,ht);for(let ut=0;ut<6;ut++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Tt(N.__webglFramebuffer[ut][pt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else Tt(N.__webglFramebuffer[ut],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(S,ht)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const ut=C.texture;for(let pt=0,yt=ut.length;pt<yt;pt++){const At=ut[pt],ct=n.get(At);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),et(s.TEXTURE_2D,At,ht),Tt(N.__webglFramebuffer,C,At,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),v(At,ht)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ut=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,J.__webglTexture),et(ut,S,ht),a&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Tt(N.__webglFramebuffer[pt],C,S,s.COLOR_ATTACHMENT0,ut,pt);else Tt(N.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ut,0);v(S,ht)&&x(ut),e.unbindTexture()}C.depthBuffer&&Lt(C)}function B(C){const S=p(C)||a,N=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J=0,q=N.length;J<q;J++){const Z=N[J];if(v(Z,S)){const ht=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=n.get(Z).__webglTexture;e.bindTexture(ht,ut),x(ht),e.unbindTexture()}}}function V(C){if(a&&C.samples>0&&j(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],N=C.width,J=C.height;let q=s.COLOR_BUFFER_BIT;const Z=[],ht=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(C),pt=C.isWebGLMultipleRenderTargets===!0;if(pt)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){Z.push(s.COLOR_ATTACHMENT0+yt),C.depthBuffer&&Z.push(ht);const At=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(At===!1&&(C.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]),At===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ht]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ht])),pt){const ct=n.get(S[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,N,J,0,0,N,J,q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]);const At=n.get(S[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,At,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Q(C){return Math.min(i.maxSamples,C.samples)}function j(C){const S=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function at(C,S){const N=C.colorSpace,J=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===_u||N!==$i&&N!==Xn&&(le.getTransfer(N)===me?a===!1?t.has("EXT_sRGB")===!0&&J===ni?(C.format=_u,C.minFilter=Hn,C.generateMipmaps=!1):S=Qm.sRGBToLinear(S):(J!==ni||q!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=I,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Qt,this.setupRenderTarget=w,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=j}function aw(s,t,e){const n=e.isWebGL2;function i(r,o=Xn){let a;const l=le.getTransfer(o);if(r===ms)return s.UNSIGNED_BYTE;if(r===Vm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hx)return s.BYTE;if(r===Vx)return s.SHORT;if(r===rh)return s.UNSIGNED_SHORT;if(r===Hm)return s.INT;if(r===ls)return s.UNSIGNED_INT;if(r===cs)return s.FLOAT;if(r===Vo)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wx)return s.ALPHA;if(r===ni)return s.RGBA;if(r===Xx)return s.LUMINANCE;if(r===qx)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===Kr)return s.DEPTH_STENCIL;if(r===_u)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Yx)return s.RED;if(r===Xm)return s.RED_INTEGER;if(r===jx)return s.RG;if(r===qm)return s.RG_INTEGER;if(r===Ym)return s.RGBA_INTEGER;if(r===ec||r===nc||r===ic||r===sc)if(l===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===bf||r===wf||r===Tf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Af||r===Rf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Af)return l===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Rf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Pf||r===Lf||r===If||r===Df||r===Of||r===Nf||r===Uf||r===Ff||r===zf||r===Bf||r===kf||r===Gf||r===Hf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Cf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rc||r===Vf||r===Wf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===rc)return l===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$x||r===Xf||r===qf||r===Yf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===rc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lw extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dr extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cw={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class uw extends sr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=e.getContextAttributes();let p=null,m=null;const v=[],x=[],y=new Ht;let E=null;const T=new Wn;T.layers.enable(1),T.viewport=new We;const b=new Wn;b.layers.enable(2),b.viewport=new We;const O=[T,b],M=new lw;M.layers.enable(1),M.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=v[et];return lt===void 0&&(lt=new Cc,v[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=v[et];return lt===void 0&&(lt=new Cc,v[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=v[et];return lt===void 0&&(lt=new Cc,v[et]=lt),lt.getHandSpace()};function G(et){const lt=x.indexOf(et.inputSource);if(lt===-1)return;const gt=v[lt];gt!==void 0&&(gt.update(et.inputSource,et.frame,c||o),gt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",L);for(let et=0;et<v.length;et++){const lt=x[et];lt!==null&&(x[et]=null,v[et].disconnect(lt))}A=null,k=null,t.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",F),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const lt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new er(d.framebufferWidth,d.framebufferHeight,{format:ni,type:ms,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let lt=null,gt=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=_.stencil?Kr:js,gt=_.stencil?Ys:ls);const Tt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new er(f.textureWidth,f.textureHeight,{format:ni,type:ms,depthTexture:new h_(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Bt=t.properties.get(m);Bt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(et){for(let lt=0;lt<et.removed.length;lt++){const gt=et.removed[lt],bt=x.indexOf(gt);bt>=0&&(x[bt]=null,v[bt].disconnect(gt))}for(let lt=0;lt<et.added.length;lt++){const gt=et.added[lt];let bt=x.indexOf(gt);if(bt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=x.length){x.push(gt),bt=Bt;break}else if(x[Bt]===null){x[Bt]=gt,bt=Bt;break}if(bt===-1)break}const Tt=v[bt];Tt&&Tt.connect(gt)}}const U=new W,I=new W;function X(et,lt,gt){U.setFromMatrixPosition(lt.matrixWorld),I.setFromMatrixPosition(gt.matrixWorld);const bt=U.distanceTo(I),Tt=lt.projectionMatrix.elements,Bt=gt.projectionMatrix.elements,kt=Tt[14]/(Tt[10]-1),Lt=Tt[14]/(Tt[10]+1),Qt=(Tt[9]+1)/Tt[5],w=(Tt[9]-1)/Tt[5],B=(Tt[8]-1)/Tt[0],V=(Bt[8]+1)/Bt[0],Q=kt*B,j=kt*V,rt=bt/(-B+V),at=rt*-B;lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(at),et.translateZ(rt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const C=kt+rt,S=Lt+rt,N=Q-at,J=j+(bt-at),q=Qt*Lt/S*C,Z=w*Lt/S*C;et.projectionMatrix.makePerspective(N,J,q,Z,C,S),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function H(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;M.near=b.near=T.near=et.near,M.far=b.far=T.far=et.far,(A!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,k=M.far);const lt=et.parent,gt=M.cameras;H(M,lt);for(let bt=0;bt<gt.length;bt++)H(gt[bt],lt);gt.length===2?X(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),$(et,M,lt)};function $(et,lt,gt){gt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(gt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=gu*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)};let st=null;function ot(et,lt){if(u=lt.getViewerPose(c||o),g=lt,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let bt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let Tt=0;Tt<gt.length;Tt++){const Bt=gt[Tt];let kt=null;if(d!==null)kt=d.getViewport(Bt);else{const Qt=h.getViewSubImage(f,Bt);kt=Qt.viewport,Tt===0&&(t.setRenderTargetTextures(m,Qt.colorTexture,f.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(m))}let Lt=O[Tt];Lt===void 0&&(Lt=new Wn,Lt.layers.enable(Tt),Lt.viewport=new We,O[Tt]=Lt),Lt.matrix.fromArray(Bt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Bt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(kt.x,kt.y,kt.width,kt.height),Tt===0&&(M.matrix.copy(Lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(Lt)}}for(let gt=0;gt<v.length;gt++){const bt=x[gt],Tt=v[gt];bt!==null&&Tt!==void 0&&Tt.update(bt,lt,c||o)}st&&st(et,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const K=new c_;K.setAnimationLoop(ot),this.setAnimationLoop=function(et){st=et},this.dispose=function(){}}}function hw(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,o_(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fw(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(v,E);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const y=s.createBuffer(),E=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,b=y.length;T<b;T++){const O=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,A=O.length;M<A;M++){const k=O[M];if(d(k,T,M,E)===!0){const G=k.__offset,F=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let U=0;U<F.length;U++){const I=F[U],X=_(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,G+L,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,y,E){const T=v.value,b=x+"_"+y;if(E[b]===void 0)return typeof T=="number"||typeof T=="boolean"?E[b]=T:E[b]=T.clone(),!0;{const O=E[b];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return E[b]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;for(let b=0,O=x.length;b<O;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,k=M.length;A<k;A++){const G=M[A],F=Array.isArray(G.value)?G.value:[G.value];for(let L=0,U=F.length;L<U;L++){const I=F[L],X=_(I),H=y%E;H!==0&&E-H<X.boundary&&(y+=E-H),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=X.storage}}}const T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class g_{constructor(t={}){const{canvas:e=ly(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let y=!1,E=0,T=0,b=null,O=-1,M=null;const A=new We,k=new We;let G=null;const F=new Vt(0);let L=0,U=e.width,I=e.height,X=1,H=null,$=null;const st=new We(0,0,U,I),ot=new We(0,0,U,I);let K=!1;const et=new ah;let lt=!1,gt=!1,bt=null;const Tt=new Ie,Bt=new Ht,kt=new W,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qt(){return b===null?X:1}let w=n;function B(P,Y){for(let nt=0;nt<P.length;nt++){const it=P[nt],tt=e.getContext(it,Y);if(tt!==null)return tt}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sh}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",_t,!1),w===null){const Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),w=B(Y,P),w===null)throw B(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let V,Q,j,rt,at,C,S,N,J,q,Z,ht,ut,pt,yt,At,ct,Xt,Nt,Ot,Pt,vt,D,mt;function Ct(){V=new SE(w),Q=new _E(w,V,t),V.init(Q),vt=new aw(w,V,Q),j=new rw(w,V,Q),rt=new wE(w),at=new Xb,C=new ow(w,V,j,at,Q,vt,rt),S=new vE(x),N=new ME(x),J=new Dy(w,Q),D=new pE(w,V,J,Q),q=new EE(w,J,rt,D),Z=new CE(w,q,J,rt),Nt=new RE(w,Q,C),At=new gE(at),ht=new Wb(x,S,N,V,Q,D,At),ut=new hw(x,at),pt=new Yb,yt=new Qb(V,Q),Xt=new dE(x,S,N,j,Z,f,l),ct=new sw(x,Z,Q),mt=new fw(w,rt,Q,j),Ot=new mE(w,V,rt,Q),Pt=new bE(w,V,rt,Q),rt.programs=ht.programs,x.capabilities=Q,x.extensions=V,x.properties=at,x.renderLists=pt,x.shadowMap=ct,x.state=j,x.info=rt}Ct();const wt=new uw(x,w);this.xr=wt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const P=V.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=V.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(U,I,!1))},this.getSize=function(P){return P.set(U,I)},this.setSize=function(P,Y,nt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,I=Y,e.width=Math.floor(P*X),e.height=Math.floor(Y*X),nt===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(U*X,I*X).floor()},this.setDrawingBufferSize=function(P,Y,nt){U=P,I=Y,X=nt,e.width=Math.floor(P*nt),e.height=Math.floor(Y*nt),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(st)},this.setViewport=function(P,Y,nt,it){P.isVector4?st.set(P.x,P.y,P.z,P.w):st.set(P,Y,nt,it),j.viewport(A.copy(st).multiplyScalar(X).floor())},this.getScissor=function(P){return P.copy(ot)},this.setScissor=function(P,Y,nt,it){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,Y,nt,it),j.scissor(k.copy(ot).multiplyScalar(X).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(P){j.setScissorTest(K=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(P=!0,Y=!0,nt=!0){let it=0;if(P){let tt=!1;if(b!==null){const St=b.texture.format;tt=St===Ym||St===qm||St===Xm}if(tt){const St=b.texture.type,It=St===ms||St===ls||St===rh||St===Ys||St===Vm||St===Wm,Ft=Xt.getClearColor(),Gt=Xt.getClearAlpha(),Kt=Ft.r,qt=Ft.g,Yt=Ft.b;It?(d[0]=Kt,d[1]=qt,d[2]=Yt,d[3]=Gt,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=Kt,g[1]=qt,g[2]=Yt,g[3]=Gt,w.clearBufferiv(w.COLOR,0,g))}else it|=w.COLOR_BUFFER_BIT}Y&&(it|=w.DEPTH_BUFFER_BIT),nt&&(it|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),pt.dispose(),yt.dispose(),at.dispose(),S.dispose(),N.dispose(),Z.dispose(),D.dispose(),mt.dispose(),ht.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ce),wt.removeEventListener("sessionend",se),bt&&(bt.dispose(),bt=null),De.stop()};function dt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=rt.autoReset,Y=ct.enabled,nt=ct.autoUpdate,it=ct.needsUpdate,tt=ct.type;Ct(),rt.autoReset=P,ct.enabled=Y,ct.autoUpdate=nt,ct.needsUpdate=it,ct.type=tt}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){const Y=P.target;Y.removeEventListener("dispose",Mt),Ut(Y)}function Ut(P){Dt(P),at.remove(P)}function Dt(P){const Y=at.get(P).programs;Y!==void 0&&(Y.forEach(function(nt){ht.releaseProgram(nt)}),P.isShaderMaterial&&ht.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,nt,it,tt,St){Y===null&&(Y=Lt);const It=tt.isMesh&&tt.matrixWorld.determinant()<0,Ft=Pg(P,Y,nt,it,tt);j.setMaterial(it,It);let Gt=nt.index,Kt=1;if(it.wireframe===!0){if(Gt=q.getWireframeAttribute(nt),Gt===void 0)return;Kt=2}const qt=nt.drawRange,Yt=nt.attributes.position;let Pe=qt.start*Kt,wn=(qt.start+qt.count)*Kt;St!==null&&(Pe=Math.max(Pe,St.start*Kt),wn=Math.min(wn,(St.start+St.count)*Kt)),Gt!==null?(Pe=Math.max(Pe,0),wn=Math.min(wn,Gt.count)):Yt!=null&&(Pe=Math.max(Pe,0),wn=Math.min(wn,Yt.count));const He=wn-Pe;if(He<0||He===1/0)return;D.setup(tt,it,Ft,nt,Gt);let Ai,ve=Ot;if(Gt!==null&&(Ai=J.get(Gt),ve=Pt,ve.setIndex(Ai)),tt.isMesh)it.wireframe===!0?(j.setLineWidth(it.wireframeLinewidth*Qt()),ve.setMode(w.LINES)):ve.setMode(w.TRIANGLES);else if(tt.isLine){let Zt=it.linewidth;Zt===void 0&&(Zt=1),j.setLineWidth(Zt*Qt()),tt.isLineSegments?ve.setMode(w.LINES):tt.isLineLoop?ve.setMode(w.LINE_LOOP):ve.setMode(w.LINE_STRIP)}else tt.isPoints?ve.setMode(w.POINTS):tt.isSprite&&ve.setMode(w.TRIANGLES);if(tt.isBatchedMesh)ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ve.renderInstances(Pe,He,tt.count);else if(nt.isInstancedBufferGeometry){const Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Bl=Math.min(nt.instanceCount,Zt);ve.renderInstances(Pe,He,Bl)}else ve.render(Pe,He)};function te(P,Y,nt){P.transparent===!0&&P.side===ti&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,aa(P,Y,nt),P.side=ji,P.needsUpdate=!0,aa(P,Y,nt),P.side=ti):aa(P,Y,nt)}this.compile=function(P,Y,nt=null){nt===null&&(nt=P),p=yt.get(nt),p.init(),v.push(p),nt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),P!==nt&&P.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights(x._useLegacyLights);const it=new Set;return P.traverse(function(tt){const St=tt.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const Ft=St[It];te(Ft,nt,tt),it.add(Ft)}else te(St,nt,tt),it.add(St)}),v.pop(),p=null,it},this.compileAsync=function(P,Y,nt=null){const it=this.compile(P,Y,nt);return new Promise(tt=>{function St(){if(it.forEach(function(It){at.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){tt(P);return}setTimeout(St,10)}V.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ee=null;function be(P){ee&&ee(P)}function Ce(){De.stop()}function se(){De.start()}const De=new c_;De.setAnimationLoop(be),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(P){ee=P,wt.setAnimationLoop(P),P===null?De.stop():De.start()},wt.addEventListener("sessionstart",Ce),wt.addEventListener("sessionend",se),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Y),Y=wt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Y,b),p=yt.get(P,v.length),p.init(),v.push(p),Tt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,lt=At.init(this.clippingPlanes,gt),_=pt.get(P,m.length),_.init(),m.push(_),ai(P,Y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,$),this.info.render.frame++,lt===!0&&At.beginShadows();const nt=p.state.shadowsArray;if(ct.render(nt,P,Y),lt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,P),p.setupLights(x._useLegacyLights),Y.isArrayCamera){const it=Y.cameras;for(let tt=0,St=it.length;tt<St;tt++){const It=it[tt];Oh(_,P,It,It.viewport)}}else Oh(_,P,Y);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,Y),D.resetDefaultState(),O=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ai(P,Y,nt,it){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)nt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){it&&kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Tt);const It=Z.update(P),Ft=P.material;Ft.visible&&_.push(P,It,Ft,nt,kt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const It=Z.update(P),Ft=P.material;if(it&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),kt.copy(P.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),kt.copy(It.boundingSphere.center)),kt.applyMatrix4(P.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ft)){const Gt=It.groups;for(let Kt=0,qt=Gt.length;Kt<qt;Kt++){const Yt=Gt[Kt],Pe=Ft[Yt.materialIndex];Pe&&Pe.visible&&_.push(P,It,Pe,nt,kt.z,Yt)}}else Ft.visible&&_.push(P,It,Ft,nt,kt.z,null)}}const St=P.children;for(let It=0,Ft=St.length;It<Ft;It++)ai(St[It],Y,nt,it)}function Oh(P,Y,nt,it){const tt=P.opaque,St=P.transmissive,It=P.transparent;p.setupLightsView(nt),lt===!0&&At.setGlobalState(x.clippingPlanes,nt),St.length>0&&Cg(tt,St,Y,nt),it&&j.viewport(A.copy(it)),tt.length>0&&oa(tt,Y,nt),St.length>0&&oa(St,Y,nt),It.length>0&&oa(It,Y,nt),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Cg(P,Y,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const St=Q.isWebGL2;bt===null&&(bt=new er(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?Vo:ms,minFilter:Ho,samples:St?4:0})),x.getDrawingBufferSize(Bt),St?bt.setSize(Bt.x,Bt.y):bt.setSize(vu(Bt.x),vu(Bt.y));const It=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(F),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ft=x.toneMapping;x.toneMapping=ps,oa(P,nt,it),C.updateMultisampleRenderTarget(bt),C.updateRenderTargetMipmap(bt);let Gt=!1;for(let Kt=0,qt=Y.length;Kt<qt;Kt++){const Yt=Y[Kt],Pe=Yt.object,wn=Yt.geometry,He=Yt.material,Ai=Yt.group;if(He.side===ti&&Pe.layers.test(it.layers)){const ve=He.side;He.side=vn,He.needsUpdate=!0,Nh(Pe,nt,it,wn,He,Ai),He.side=ve,He.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(bt),C.updateRenderTargetMipmap(bt)),x.setRenderTarget(It),x.setClearColor(F,L),x.toneMapping=Ft}function oa(P,Y,nt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,St=P.length;tt<St;tt++){const It=P[tt],Ft=It.object,Gt=It.geometry,Kt=it===null?It.material:it,qt=It.group;Ft.layers.test(nt.layers)&&Nh(Ft,Y,nt,Gt,Kt,qt)}}function Nh(P,Y,nt,it,tt,St){P.onBeforeRender(x,Y,nt,it,tt,St),P.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(x,Y,nt,it,P,St),tt.transparent===!0&&tt.side===ti&&tt.forceSinglePass===!1?(tt.side=vn,tt.needsUpdate=!0,x.renderBufferDirect(nt,Y,it,tt,P,St),tt.side=ji,tt.needsUpdate=!0,x.renderBufferDirect(nt,Y,it,tt,P,St),tt.side=ti):x.renderBufferDirect(nt,Y,it,tt,P,St),P.onAfterRender(x,Y,nt,it,tt,St)}function aa(P,Y,nt){Y.isScene!==!0&&(Y=Lt);const it=at.get(P),tt=p.state.lights,St=p.state.shadowsArray,It=tt.state.version,Ft=ht.getParameters(P,tt.state,St,Y,nt),Gt=ht.getProgramCacheKey(Ft);let Kt=it.programs;it.environment=P.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(P.isMeshStandardMaterial?N:S).get(P.envMap||it.environment),Kt===void 0&&(P.addEventListener("dispose",Mt),Kt=new Map,it.programs=Kt);let qt=Kt.get(Gt);if(qt!==void 0){if(it.currentProgram===qt&&it.lightsStateVersion===It)return Fh(P,Ft),qt}else Ft.uniforms=ht.getUniforms(P),P.onBuild(nt,Ft,x),P.onBeforeCompile(Ft,x),qt=ht.acquireProgram(Ft,Gt),Kt.set(Gt,qt),it.uniforms=Ft.uniforms;const Yt=it.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Yt.clippingPlanes=At.uniform),Fh(P,Ft),it.needsLights=Ig(P),it.lightsStateVersion=It,it.needsLights&&(Yt.ambientLightColor.value=tt.state.ambient,Yt.lightProbe.value=tt.state.probe,Yt.directionalLights.value=tt.state.directional,Yt.directionalLightShadows.value=tt.state.directionalShadow,Yt.spotLights.value=tt.state.spot,Yt.spotLightShadows.value=tt.state.spotShadow,Yt.rectAreaLights.value=tt.state.rectArea,Yt.ltc_1.value=tt.state.rectAreaLTC1,Yt.ltc_2.value=tt.state.rectAreaLTC2,Yt.pointLights.value=tt.state.point,Yt.pointLightShadows.value=tt.state.pointShadow,Yt.hemisphereLights.value=tt.state.hemi,Yt.directionalShadowMap.value=tt.state.directionalShadowMap,Yt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Yt.spotShadowMap.value=tt.state.spotShadowMap,Yt.spotLightMatrix.value=tt.state.spotLightMatrix,Yt.spotLightMap.value=tt.state.spotLightMap,Yt.pointShadowMap.value=tt.state.pointShadowMap,Yt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=qt,it.uniformsList=null,qt}function Uh(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=$a.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Fh(P,Y){const nt=at.get(P);nt.outputColorSpace=Y.outputColorSpace,nt.batching=Y.batching,nt.instancing=Y.instancing,nt.instancingColor=Y.instancingColor,nt.skinning=Y.skinning,nt.morphTargets=Y.morphTargets,nt.morphNormals=Y.morphNormals,nt.morphColors=Y.morphColors,nt.morphTargetsCount=Y.morphTargetsCount,nt.numClippingPlanes=Y.numClippingPlanes,nt.numIntersection=Y.numClipIntersection,nt.vertexAlphas=Y.vertexAlphas,nt.vertexTangents=Y.vertexTangents,nt.toneMapping=Y.toneMapping}function Pg(P,Y,nt,it,tt){Y.isScene!==!0&&(Y=Lt),C.resetTextureUnits();const St=Y.fog,It=it.isMeshStandardMaterial?Y.environment:null,Ft=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,Gt=(it.isMeshStandardMaterial?N:S).get(it.envMap||It),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,qt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Yt=!!nt.morphAttributes.position,Pe=!!nt.morphAttributes.normal,wn=!!nt.morphAttributes.color;let He=ps;it.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(He=x.toneMapping);const Ai=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ve=Ai!==void 0?Ai.length:0,Zt=at.get(it),Bl=p.state.lights;if(lt===!0&&(gt===!0||P!==M)){const zn=P===M&&it.id===O;At.setState(it,P,zn)}let we=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Bl.state.version||Zt.outputColorSpace!==Ft||tt.isBatchedMesh&&Zt.batching===!1||!tt.isBatchedMesh&&Zt.batching===!0||tt.isInstancedMesh&&Zt.instancing===!1||!tt.isInstancedMesh&&Zt.instancing===!0||tt.isSkinnedMesh&&Zt.skinning===!1||!tt.isSkinnedMesh&&Zt.skinning===!0||tt.isInstancedMesh&&Zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Zt.instancingColor===!1&&tt.instanceColor!==null||Zt.envMap!==Gt||it.fog===!0&&Zt.fog!==St||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==Kt||Zt.vertexTangents!==qt||Zt.morphTargets!==Yt||Zt.morphNormals!==Pe||Zt.morphColors!==wn||Zt.toneMapping!==He||Q.isWebGL2===!0&&Zt.morphTargetsCount!==ve)&&(we=!0):(we=!0,Zt.__version=it.version);let ws=Zt.currentProgram;we===!0&&(ws=aa(it,Y,tt));let zh=!1,ro=!1,kl=!1;const Ze=ws.getUniforms(),Ts=Zt.uniforms;if(j.useProgram(ws.program)&&(zh=!0,ro=!0,kl=!0),it.id!==O&&(O=it.id,ro=!0),zh||M!==P){Ze.setValue(w,"projectionMatrix",P.projectionMatrix),Ze.setValue(w,"viewMatrix",P.matrixWorldInverse);const zn=Ze.map.cameraPosition;zn!==void 0&&zn.setValue(w,kt.setFromMatrixPosition(P.matrixWorld)),Q.logarithmicDepthBuffer&&Ze.setValue(w,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ze.setValue(w,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,ro=!0,kl=!0)}if(tt.isSkinnedMesh){Ze.setOptional(w,tt,"bindMatrix"),Ze.setOptional(w,tt,"bindMatrixInverse");const zn=tt.skeleton;zn&&(Q.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),Ze.setValue(w,"boneTexture",zn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(Ze.setOptional(w,tt,"batchingTexture"),Ze.setValue(w,"batchingTexture",tt._matricesTexture,C));const Gl=nt.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0&&Q.isWebGL2===!0)&&Nt.update(tt,nt,ws),(ro||Zt.receiveShadow!==tt.receiveShadow)&&(Zt.receiveShadow=tt.receiveShadow,Ze.setValue(w,"receiveShadow",tt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ts.envMap.value=Gt,Ts.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ro&&(Ze.setValue(w,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&Lg(Ts,kl),St&&it.fog===!0&&ut.refreshFogUniforms(Ts,St),ut.refreshMaterialUniforms(Ts,it,X,I,bt),$a.upload(w,Uh(Zt),Ts,C)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&($a.upload(w,Uh(Zt),Ts,C),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ze.setValue(w,"center",tt.center),Ze.setValue(w,"modelViewMatrix",tt.modelViewMatrix),Ze.setValue(w,"normalMatrix",tt.normalMatrix),Ze.setValue(w,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const zn=it.uniformsGroups;for(let Hl=0,Dg=zn.length;Hl<Dg;Hl++)if(Q.isWebGL2){const Bh=zn[Hl];mt.update(Bh,ws),mt.bind(Bh,ws)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ws}function Lg(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Ig(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,Y,nt){at.get(P.texture).__webglTexture=Y,at.get(P.depthTexture).__webglTexture=nt;const it=at.get(P);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const nt=at.get(P);nt.__webglFramebuffer=Y,nt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,nt=0){b=P,E=Y,T=nt;let it=!0,tt=null,St=!1,It=!1;if(P){const Gt=at.get(P);Gt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(w.FRAMEBUFFER,null),it=!1):Gt.__webglFramebuffer===void 0?C.setupRenderTarget(P):Gt.__hasExternalTextures&&C.rebindTextures(P,at.get(P.texture).__webglTexture,at.get(P.depthTexture).__webglTexture);const Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const qt=at.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qt[Y])?tt=qt[Y][nt]:tt=qt[Y],St=!0):Q.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?tt=at.get(P).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[nt]:tt=qt,A.copy(P.viewport),k.copy(P.scissor),G=P.scissorTest}else A.copy(st).multiplyScalar(X).floor(),k.copy(ot).multiplyScalar(X).floor(),G=K;if(j.bindFramebuffer(w.FRAMEBUFFER,tt)&&Q.drawBuffers&&it&&j.drawBuffers(P,tt),j.viewport(A),j.scissor(k),j.setScissorTest(G),St){const Gt=at.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Gt.__webglTexture,nt)}else if(It){const Gt=at.get(P.texture),Kt=Y||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gt.__webglTexture,nt||0,Kt)}O=-1},this.readRenderTargetPixels=function(P,Y,nt,it,tt,St,It){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=at.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){j.bindFramebuffer(w.FRAMEBUFFER,Ft);try{const Gt=P.texture,Kt=Gt.format,qt=Gt.type;if(Kt!==ni&&vt.convert(Kt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=qt===Vo&&(V.has("EXT_color_buffer_half_float")||Q.isWebGL2&&V.has("EXT_color_buffer_float"));if(qt!==ms&&vt.convert(qt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qt===cs&&(Q.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-it&&nt>=0&&nt<=P.height-tt&&w.readPixels(Y,nt,it,tt,vt.convert(Kt),vt.convert(qt),St)}finally{const Gt=b!==null?at.get(b).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(P,Y,nt=0){const it=Math.pow(2,-nt),tt=Math.floor(Y.image.width*it),St=Math.floor(Y.image.height*it);C.setTexture2D(Y,0),w.copyTexSubImage2D(w.TEXTURE_2D,nt,0,0,P.x,P.y,tt,St),j.unbindTexture()},this.copyTextureToTexture=function(P,Y,nt,it=0){const tt=Y.image.width,St=Y.image.height,It=vt.convert(nt.format),Ft=vt.convert(nt.type);C.setTexture2D(nt,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,nt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,nt.unpackAlignment),Y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,it,P.x,P.y,tt,St,It,Ft,Y.image.data):Y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,it,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,It,Y.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,it,P.x,P.y,It,Ft,Y.image),it===0&&nt.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,nt,it,tt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=P.max.x-P.min.x+1,It=P.max.y-P.min.y+1,Ft=P.max.z-P.min.z+1,Gt=vt.convert(it.format),Kt=vt.convert(it.type);let qt;if(it.isData3DTexture)C.setTexture3D(it,0),qt=w.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)C.setTexture2DArray(it,0),qt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,it.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,it.unpackAlignment);const Yt=w.getParameter(w.UNPACK_ROW_LENGTH),Pe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),wn=w.getParameter(w.UNPACK_SKIP_PIXELS),He=w.getParameter(w.UNPACK_SKIP_ROWS),Ai=w.getParameter(w.UNPACK_SKIP_IMAGES),ve=nt.isCompressedTexture?nt.mipmaps[tt]:nt.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ve.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ve.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,P.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,P.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,P.min.z),nt.isDataTexture||nt.isData3DTexture?w.texSubImage3D(qt,tt,Y.x,Y.y,Y.z,St,It,Ft,Gt,Kt,ve.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(qt,tt,Y.x,Y.y,Y.z,St,It,Ft,Gt,ve.data)):w.texSubImage3D(qt,tt,Y.x,Y.y,Y.z,St,It,Ft,Gt,Kt,ve),w.pixelStorei(w.UNPACK_ROW_LENGTH,Yt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wn),w.pixelStorei(w.UNPACK_SKIP_ROWS,He),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ai),tt===0&&it.generateMipmaps&&w.generateMipmap(qt),j.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),j.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,j.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===oh?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?$s:$m}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$s?je:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class dw extends g_{}dw.prototype.isWebGL1Renderer=!0;class ch{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pw extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class uh extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ud=new W,Fd=new W,zd=new Ie,Pc=new Ll,Da=new ia;class mw extends Xe{constructor(t=new bn,e=new uh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ud.fromBufferAttribute(e,i-1),Fd.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ud.distanceTo(Fd);t.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;zd.copy(i).invert(),Pc.copy(t.ray).applyMatrix4(zd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new W,u=new W,h=new W,f=new W,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=m,y=v-1;x<y;x+=d){const E=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,T),Pc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(f);O<t.near||O>t.far||e.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=m,y=v-1;x<y;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Pc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Bd=new W,kd=new W;class v_ extends mw{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Bd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bd.distanceTo(kd);t.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x_ extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gd=new Ie,yu=new Ll,Oa=new ia,Na=new W;class _w extends Xe{constructor(t=new bn,e=new x_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Gd.copy(i).invert(),yu.copy(t.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Na.fromBufferAttribute(h,p),Hd(Na,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Na.fromBufferAttribute(h,g),Hd(Na,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hd(s,t,e,n,i,r,o){const a=yu.distanceSqToPoint(s);if(a<e){const l=new W;yu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class hh extends bn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new W,u=new Ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hr extends bn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(d,2));function v(){const y=new W,E=new W;let T=0;const b=(e-t)/n;for(let O=0;O<=r;O++){const M=[],A=O/r,k=A*(e-t)+t;for(let G=0;G<=i;G++){const F=G/i,L=F*l+a,U=Math.sin(L),I=Math.cos(L);E.x=k*U,E.y=-A*n+p,E.z=k*I,h.push(E.x,E.y,E.z),y.set(U,b,I).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-A),M.push(g++)}_.push(M)}for(let O=0;O<i;O++)for(let M=0;M<r;M++){const A=_[M][O],k=_[M+1][O],G=_[M+1][O+1],F=_[M][O+1];u.push(A,k,F),u.push(k,G,F),T+=6}c.addGroup(m,T,0),m+=T}function x(y){const E=g,T=new Ht,b=new W;let O=0;const M=y===!0?t:e,A=y===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),g++;const k=g;for(let G=0;G<=i;G++){const L=G/i*l+a,U=Math.cos(L),I=Math.sin(L);b.x=M*I,b.y=p*A,b.z=M*U,h.push(b.x,b.y,b.z),f.push(0,A,0),T.x=U*.5+.5,T.y=I*.5*A+.5,d.push(T.x,T.y),g++}for(let G=0;G<i;G++){const F=E+G,L=k+G;y===!0?u.push(L,L+1,F):u.push(L+1,L,F),O+=3}c.addGroup(m,O,y===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fh extends Hr{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new fh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ua=new W,Fa=new W,Lc=new W,za=new Vn;class y_ extends bn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Po*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=za;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),za.getNormal(Lc),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=h[v],E=h[x],T=za[u[v]],b=za[u[x]],O=`${y}_${E}`,M=`${E}_${y}`;M in f&&f[M]?(Lc.dot(f[M].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(b.x,b.y,b.z)),f[M]=null):O in f||(f[O]={index0:c[v],index1:c[x],normal:Lc.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Ua.fromBufferAttribute(a,_),Fa.fromBufferAttribute(a,p),d.push(Ua.x,Ua.y,Ua.z),d.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new Be(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Io extends bn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new W,h=new W,f=new W;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xe extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class M_ extends xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class S_ extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ic=new Ie,Vd=new W,Wd=new W;class gw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wd),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vw extends gw{constructor(){super(new u_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends S_{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new vw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xw extends S_{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xd{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(nn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const qd={type:"change"},Oc={type:"start"},Yd={type:"end"},Ba=new Ll,jd=new os,yw=Math.cos(70*ay.DEG2RAD);class Mw extends sr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",yt),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",yt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qd),n.update(),r=i.NONE},this.update=function(){const D=new W,mt=new xs().setFromUnitVectors(t.up,new W(0,1,0)),Ct=mt.clone().invert(),wt=new W,dt=new xs,z=new W,_t=2*Math.PI;return function(Ut=null){const Dt=n.object.position;D.copy(Dt).sub(n.target),D.applyQuaternion(mt),a.setFromVector3(D),n.autoRotate&&r===i.NONE&&G(A(Ut)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let te=n.minAzimuthAngle,ee=n.maxAzimuthAngle;isFinite(te)&&isFinite(ee)&&(te<-Math.PI?te+=_t:te>Math.PI&&(te-=_t),ee<-Math.PI?ee+=_t:ee>Math.PI&&(ee-=_t),te<=ee?a.theta=Math.max(te,Math.min(ee,a.theta)):a.theta=a.theta>(te+ee)/2?Math.max(te,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=st(a.radius):a.radius=st(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ct),Dt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let be=!1;if(n.zoomToCursor&&T){let Ce=null;if(n.object.isPerspectiveCamera){const se=D.length();Ce=st(se*c);const De=se-Ce;n.object.position.addScaledVector(y,De),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const se=new W(E.x,E.y,0);se.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),be=!0;const De=new W(E.x,E.y,0);De.unproject(n.object),n.object.position.sub(De).add(se),n.object.updateMatrixWorld(),Ce=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(Ba.origin.copy(n.object.position),Ba.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ba.direction))<yw?t.lookAt(n.target):(jd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ba.intersectPlane(jd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),be=!0);return c=1,T=!1,be||wt.distanceToSquared(n.object.position)>o||8*(1-dt.dot(n.object.quaternion))>o||z.distanceToSquared(n.target)>0?(n.dispatchEvent(qd),wt.copy(n.object.position),dt.copy(n.object.quaternion),z.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",yt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Xd,l=new Xd;let c=1;const u=new W,h=new Ht,f=new Ht,d=new Ht,g=new Ht,_=new Ht,p=new Ht,m=new Ht,v=new Ht,x=new Ht,y=new W,E=new Ht;let T=!1;const b=[],O={};let M=!1;function A(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function k(D){const mt=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*mt)}function G(D){l.theta-=D}function F(D){l.phi-=D}const L=function(){const D=new W;return function(Ct,wt){D.setFromMatrixColumn(wt,0),D.multiplyScalar(-Ct),u.add(D)}}(),U=function(){const D=new W;return function(Ct,wt){n.screenSpacePanning===!0?D.setFromMatrixColumn(wt,1):(D.setFromMatrixColumn(wt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Ct),u.add(D)}}(),I=function(){const D=new W;return function(Ct,wt){const dt=n.domElement;if(n.object.isPerspectiveCamera){const z=n.object.position;D.copy(z).sub(n.target);let _t=D.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Ct*_t/dt.clientHeight,n.object.matrix),U(2*wt*_t/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Ct*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),U(wt*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(D,mt){if(!n.zoomToCursor)return;T=!0;const Ct=n.domElement.getBoundingClientRect(),wt=D-Ct.left,dt=mt-Ct.top,z=Ct.width,_t=Ct.height;E.x=wt/z*2-1,E.y=-(dt/_t)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function st(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function ot(D){h.set(D.clientX,D.clientY)}function K(D){$(D.clientX,D.clientX),m.set(D.clientX,D.clientY)}function et(D){g.set(D.clientX,D.clientY)}function lt(D){f.set(D.clientX,D.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const mt=n.domElement;G(2*Math.PI*d.x/mt.clientHeight),F(2*Math.PI*d.y/mt.clientHeight),h.copy(f),n.update()}function gt(D){v.set(D.clientX,D.clientY),x.subVectors(v,m),x.y>0?X(k(x.y)):x.y<0&&H(k(x.y)),m.copy(v),n.update()}function bt(D){_.set(D.clientX,D.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_),n.update()}function Tt(D){$(D.clientX,D.clientY),D.deltaY<0?H(k(D.deltaY)):D.deltaY>0&&X(k(D.deltaY)),n.update()}function Bt(D){let mt=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),mt=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),mt=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),mt=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),mt=!0;break}mt&&(D.preventDefault(),n.update())}function kt(D){if(b.length===1)h.set(D.pageX,D.pageY);else{const mt=vt(D),Ct=.5*(D.pageX+mt.x),wt=.5*(D.pageY+mt.y);h.set(Ct,wt)}}function Lt(D){if(b.length===1)g.set(D.pageX,D.pageY);else{const mt=vt(D),Ct=.5*(D.pageX+mt.x),wt=.5*(D.pageY+mt.y);g.set(Ct,wt)}}function Qt(D){const mt=vt(D),Ct=D.pageX-mt.x,wt=D.pageY-mt.y,dt=Math.sqrt(Ct*Ct+wt*wt);m.set(0,dt)}function w(D){n.enableZoom&&Qt(D),n.enablePan&&Lt(D)}function B(D){n.enableZoom&&Qt(D),n.enableRotate&&kt(D)}function V(D){if(b.length==1)f.set(D.pageX,D.pageY);else{const Ct=vt(D),wt=.5*(D.pageX+Ct.x),dt=.5*(D.pageY+Ct.y);f.set(wt,dt)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const mt=n.domElement;G(2*Math.PI*d.x/mt.clientHeight),F(2*Math.PI*d.y/mt.clientHeight),h.copy(f)}function Q(D){if(b.length===1)_.set(D.pageX,D.pageY);else{const mt=vt(D),Ct=.5*(D.pageX+mt.x),wt=.5*(D.pageY+mt.y);_.set(Ct,wt)}p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_)}function j(D){const mt=vt(D),Ct=D.pageX-mt.x,wt=D.pageY-mt.y,dt=Math.sqrt(Ct*Ct+wt*wt);v.set(0,dt),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),X(x.y),m.copy(v);const z=(D.pageX+mt.x)*.5,_t=(D.pageY+mt.y)*.5;$(z,_t)}function rt(D){n.enableZoom&&j(D),n.enablePan&&Q(D)}function at(D){n.enableZoom&&j(D),n.enableRotate&&V(D)}function C(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",N)),Nt(D),D.pointerType==="touch"?At(D):J(D))}function S(D){n.enabled!==!1&&(D.pointerType==="touch"?ct(D):q(D))}function N(D){Ot(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",N)),n.dispatchEvent(Yd),r=i.NONE}function J(D){let mt;switch(D.button){case 0:mt=n.mouseButtons.LEFT;break;case 1:mt=n.mouseButtons.MIDDLE;break;case 2:mt=n.mouseButtons.RIGHT;break;default:mt=-1}switch(mt){case ar.DOLLY:if(n.enableZoom===!1)return;K(D),r=i.DOLLY;break;case ar.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;et(D),r=i.PAN}else{if(n.enableRotate===!1)return;ot(D),r=i.ROTATE}break;case ar.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;ot(D),r=i.ROTATE}else{if(n.enablePan===!1)return;et(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Oc)}function q(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;lt(D);break;case i.DOLLY:if(n.enableZoom===!1)return;gt(D);break;case i.PAN:if(n.enablePan===!1)return;bt(D);break}}function Z(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(Oc),Tt(ht(D)),n.dispatchEvent(Yd))}function ht(D){const mt=D.deltaMode,Ct={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(mt){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return D.ctrlKey&&!M&&(Ct.deltaY*=10),Ct}function ut(D){D.key==="Control"&&(M=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(D){D.key==="Control"&&(M=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function yt(D){n.enabled===!1||n.enablePan===!1||Bt(D)}function At(D){switch(Pt(D),b.length){case 1:switch(n.touches.ONE){case lr.ROTATE:if(n.enableRotate===!1)return;kt(D),r=i.TOUCH_ROTATE;break;case lr.PAN:if(n.enablePan===!1)return;Lt(D),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case lr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(D),r=i.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(D),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Oc)}function ct(D){switch(Pt(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;V(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Q(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(D),n.update();break;default:r=i.NONE}}function Xt(D){n.enabled!==!1&&D.preventDefault()}function Nt(D){b.push(D.pointerId)}function Ot(D){delete O[D.pointerId];for(let mt=0;mt<b.length;mt++)if(b[mt]==D.pointerId){b.splice(mt,1);return}}function Pt(D){let mt=O[D.pointerId];mt===void 0&&(mt=new Ht,O[D.pointerId]=mt),mt.set(D.pageX,D.pageY)}function vt(D){const mt=D.pointerId===b[0]?b[1]:b[0];return O[mt]}n.domElement.addEventListener("contextmenu",Xt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",Z,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}class Sw{constructor(t){Te(this,"scene");Te(this,"camera");Te(this,"renderer");Te(this,"controls");Te(this,"container");Te(this,"objects",new Map);Te(this,"materials",new Map);this.container=t,this.scene=new pw,this.scene.background=new Vt(657946),this.scene.fog=new ch(657946,50,200);const e=t.clientWidth/t.clientHeight;this.camera=new Wn(45,e,.1,1e3),this.camera.position.set(15,20,15),this.renderer=new g_({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=zm,this.renderer.toneMapping=km,this.renderer.toneMappingExposure=1.2,t.appendChild(this.renderer.domElement),this.controls=new Mw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2.5,this.controls.minDistance=10,this.controls.maxDistance=50,this.controls.enablePan=!1,this.setupLights(),window.addEventListener("resize",this.onResize.bind(this))}setupLights(){const t=new xw(4210784,.5);this.scene.add(t);const e=new Dc(16777215,1.5);e.position.set(10,20,10),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,this.scene.add(e);const n=new Dc(5032432,.5);n.position.set(-10,10,-10),this.scene.add(n);const i=new Dc(16196997,.3);i.position.set(0,10,-20),this.scene.add(i)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}addObject(t,e){this.objects.set(t,e),this.scene.add(e)}removeObject(t){const e=this.objects.get(t);e&&(this.scene.remove(e),this.objects.delete(t))}getObject(t){return this.objects.get(t)}setCameraPosition(t,e,n,i){this.camera.position.set(t,e,n),i&&this.controls.target.set(i.x,i.y,i.z),this.controls.update()}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}clearScene(){this.objects.forEach(t=>{this.scene.remove(t)}),this.objects.clear()}dispose(){window.removeEventListener("resize",this.onResize.bind(this)),this.clearScene(),this.controls.dispose(),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class ii{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new R);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new R);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new ii);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],h=n[5],f=n[6],d=n[7],g=n[8],_=i[0],p=i[1],m=i[2],v=i[3],x=i[4],y=i[5],E=i[6],T=i[7],b=i[8];return r[0]=o*_+a*v+l*E,r[1]=o*p+a*x+l*T,r[2]=o*m+a*y+l*b,r[3]=c*_+u*v+h*E,r[4]=c*p+u*x+h*T,r[5]=c*m+u*y+h*b,r[6]=f*_+d*v+g*E,r[7]=f*p+d*x+g*T,r[8]=f*m+d*y+g*b,e}scale(t,e){e===void 0&&(e=new ii);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new R);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const h=4;let f;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=h;do f=h-u,r[f+i*o]+=r[f+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const d=r[o+i*a]/r[o+i*o];u=h;do f=h-u,r[f+i*a]=f<=o?0:r[f+i*a]-r[f+i*o]*d;while(--u)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new ii);const e=3,n=6,i=Ew;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let h;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do h=u-c,i[h+n*r]+=i[h+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const f=i[r+n*o]/i[r+n*r];c=u;do h=u-c,i[h+n*o]=h<=r?0:i[h+n*o]-i[h+n*r]*f;while(--c)}}while(--a);r=2;do{o=r-1;do{const f=i[r+n*o]/i[r+n*r];c=n;do h=n-c,i[h+n*o]=i[h+n*o]-i[h+n*r]*f;while(--c)}while(o--)}while(--r);r=2;do{const f=1/i[r+n*r];c=n;do h=n-c,i[h+n*r]=i[h+n*r]*f;while(--c)}while(r--);r=2;do{o=2;do{if(h=i[e+o+n*r],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,h)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,h=e*l,f=n*a,d=n*l,g=i*l,_=r*o,p=r*a,m=r*l,v=this.elements;return v[3*0+0]=1-(f+g),v[3*0+1]=u-m,v[3*0+2]=h+p,v[3*1+0]=u+m,v[3*1+1]=1-(c+g),v[3*1+2]=d-_,v[3*2+0]=h-p,v[3*2+1]=d+_,v[3*2+2]=1-(c+f),this}transpose(t){t===void 0&&(t=new ii);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Ew=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new R);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ii([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new R);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new R);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new R),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new R),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=bw,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=ww;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate($d),$d.almostEquals(t,e)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const bw=new R,ww=new R,$d=new R;class Fn{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Kd),c=Kd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Fn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Zd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){const d=n[f];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Zd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){const d=n[f];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,h=(this.lowerBound.z-n.z)*o,f=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,f)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,f));return!(g<0||d>g)}}const Kd=new R,Zd=[new R,new R,new R,new R,new R,new R,new R,new R];class Jd{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class E_{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class Fe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Tw,i=Aw;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Fe);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-r*l,e.y=i*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new Fe);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Fe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new R);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,h=c*i+l*n-o*r,f=c*r+o*i-a*n,d=-o*n-a*i-l*r;return e.x=u*c+d*-o+h*-l-f*-a,e.y=h*c+d*-a+f*-o-u*-l,e.z=f*c+d*-l+u*-a-h*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const h=o*o,f=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*f-2*d),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*h-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Fe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Fe);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,h=t.w,f,d,g,_,p;return d=i*l+r*c+o*u+a*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>1e-6?(f=Math.acos(d),g=Math.sin(f),_=Math.sin((1-e)*f)/g,p=Math.sin(e*f)/g):(_=1-e,p=e),n.x=_*i+p*l,n.y=_*r+p*c,n.z=_*o+p*u,n.w=_*a+p*h,n}integrate(t,e,n,i){i===void 0&&(i=new Fe);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,h=this.w,f=e*.5;return i.x+=f*(r*h+o*u-a*c),i.y+=f*(o*h+a*l-r*u),i.z+=f*(a*h+r*c-o*l),i.w+=f*(-r*l-o*c-a*u),i}}const Tw=new R,Aw=new R,Rw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Rt{constructor(t){t===void 0&&(t={}),this.id=Rt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Rt.idCounter=0;Rt.types=Rw;class re{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new Fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return re.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return re.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new R),n.vsub(t,i),e.conjugate(Qd),Qd.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new R),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new R),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new R),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Qd=new Fe;class Do extends Rt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:Rt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new R;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(i)||n[h].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new R;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Do.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new R,o=new R;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const u=new R;let h=-1,f=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const _=u.dot(o);_>f&&(f=_,h=g)}const d=[];for(let g=0;g<n.faces[h].length;g++){const _=n.vertices[n.faces[h][g]],p=new R;p.copy(_),r.vmult(p,p),i.vadd(p,p),d.push(p)}h>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new R,u=new R,h=new R,f=new R,d=new R,g=new R;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const v=p.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const x=a?a[v]:v;c.copy(p.faceNormals[x]),n.vmult(c,c);const y=p.testSepAxis(c,t,e,n,i,r);if(y===!1)return!1;y<_&&(_=y,o.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){r.vmult(t.uniqueAxes[m],u);const v=p.testSepAxis(u,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const m=l?l.length:t.faces.length;for(let v=0;v<m;v++){const x=l?l[v]:v;u.copy(t.faceNormals[x]),r.vmult(u,u);const y=p.testSepAxis(u,t,e,n,i,r);if(y===!1)return!1;y<_&&(_=y,o.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],f);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],d),f.cross(d,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,t,e,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return i.vsub(e,h),h.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;Do.project(a,t,n,i,Nc),Do.project(e,t,r,o,Uc);const l=Nc[0],c=Nc[1],u=Uc[0],h=Uc[1];if(l<h||u<c)return!1;const f=l-h,d=u-c;return f<d?f:d}calculateLocalInertia(t,e){const n=new R,i=new R;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new R,c=new R,u=new R,h=new R,f=new R,d=new R,g=new R,_=new R,p=this,m=[],v=i,x=m;let y=-1,E=Number.MAX_VALUE;for(let A=0;A<p.faces.length;A++){l.copy(p.faceNormals[A]),n.vmult(l,l);const k=l.dot(t);k<E&&(E=k,y=A)}if(y<0)return;const T=p.faces[y];T.connectedFaces=[];for(let A=0;A<p.faces.length;A++)for(let k=0;k<p.faces[A].length;k++)T.indexOf(p.faces[A][k])!==-1&&A!==y&&T.connectedFaces.indexOf(A)===-1&&T.connectedFaces.push(A);const b=T.length;for(let A=0;A<b;A++){const k=p.vertices[T[A]],G=p.vertices[T[(A+1)%b]];k.vsub(G,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),h.copy(this.faceNormals[y]),n.vmult(h,h),e.vadd(h,h),u.cross(h,f),f.negate(f),d.copy(k),n.vmult(d,d),e.vadd(d,d);const F=T.connectedFaces[A];g.copy(this.faceNormals[F]);const L=this.getPlaneConstantOfFace(F);_.copy(g),n.vmult(_,_);const U=L-_.dot(e);for(this.clipFaceAgainstPlane(v,x,_,U);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[y]);const O=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const M=O-_.dot(e);for(let A=0;A<v.length;A++){let k=_.dot(v[A])+M;if(k<=r&&(console.log(`clamped: depth=${k} to minDist=${r}`),k=r),k<=o){const G=v[A];if(k<=1e-6){const F={point:G,normal:_,depth:k};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,r<0)if(o<0){const h=new R;h.copy(c),e.push(h)}else{const h=new R;l.lerp(c,r/(r-o),h),e.push(h)}else if(o<0){const h=new R;l.lerp(c,r/(r-o),h),e.push(h),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new R);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,u,h,f=new R;for(let d=0;d<r.length;d++){f.copy(r[d]),e.vmult(f,f),t.vadd(f,f);const g=f;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(h===void 0||g.z>h)&&(h=g.z)}n.set(o,a,l),i.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new R;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new R;t.vsub(l,c);const u=a.dot(c),h=new R;r.vsub(l,h);const f=a.dot(h);if(u<0&&f>0||u>0&&f<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=Cw;let l=0,c=0;const u=Pw,h=t.vertices;u.setZero(),re.vectorToLocalFrame(n,i,e,a),re.pointToLocalFrame(n,i,u,u);const f=u.dot(a);c=l=h[0].dot(a);for(let d=1;d<o;d++){const g=h[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=f,l-=f,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Nc=[],Uc=[];new R;const Cw=new R,Pw=new R;class Ks extends Rt{constructor(t){super({type:Rt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=R,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Do({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new R),Ks.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)ss.set(r[o][0],r[o][1],r[o][2]),e.vmult(ss,ss),t.vadd(ss,ss),n(ss.x,ss.y,ss.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;ci[0].set(r.x,r.y,r.z),ci[1].set(-r.x,r.y,r.z),ci[2].set(-r.x,-r.y,r.z),ci[3].set(-r.x,-r.y,-r.z),ci[4].set(r.x,-r.y,-r.z),ci[5].set(r.x,r.y,-r.z),ci[6].set(-r.x,r.y,-r.z),ci[7].set(r.x,-r.y,r.z);const o=ci[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=ci[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,h=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),h>i.z&&(i.z=h),c<n.x&&(n.x=c),u<n.y&&(n.y=u),h<n.z&&(n.z=h)}}}const ss=new R,ci=[new R,new R,new R,new R,new R,new R,new R,new R],dh={DYNAMIC:1,STATIC:2,KINEMATIC:4},ph={AWAKE:0,SLEEPY:1,SLEEPING:2};class Et extends E_{constructor(t){t===void 0&&(t={}),super(),this.id=Et.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Et.STATIC:Et.DYNAMIC,typeof t.type==typeof Et.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Et.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new Fe,this.initQuaternion=new Fe,this.previousQuaternion=new Fe,this.interpolatedQuaternion=new Fe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new ii,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new ii,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Fn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Et.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Et.SLEEPING&&this.dispatchEvent(Et.wakeupEvent)}sleep(){this.sleepState=Et.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Et.AWAKE&&n<i?(this.sleepState=Et.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Et.sleepyEvent)):e===Et.SLEEPY&&n>i?this.wakeUp():e===Et.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Et.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Et.SLEEPING||this.type===Et.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new R),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new R),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new R,r=new Fe;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Lw,o=Iw,a=this.quaternion,l=this.aabb,c=Dw;for(let u=0;u!==i;u++){const h=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),h.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ow,i=Nw;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new R),this.type!==Et.DYNAMIC)return;this.sleepState===Et.SLEEPING&&this.wakeUp();const n=Uw;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new R),this.type!==Et.DYNAMIC)return;const n=Fw,i=zw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Et.DYNAMIC&&(this.sleepState===Et.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new R),this.type!==Et.DYNAMIC)return;this.sleepState===Et.SLEEPING&&this.wakeUp();const n=e,i=Bw;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=kw;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new R),this.type!==Et.DYNAMIC)return;const n=Gw,i=Hw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Vw;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ks.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new R;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Et.DYNAMIC||this.type===Et.KINEMATIC)||this.sleepState===Et.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,f=this.linearFactor,d=u*t;i.x+=a.x*d*f.x,i.y+=a.y*d*f.y,i.z+=a.z*d*f.z;const g=h.elements,_=this.angularFactor,p=l.x*_.x,m=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*p+g[1]*m+g[2]*v),r.y+=t*(g[3]*p+g[4]*m+g[5]*v),r.z+=t*(g[6]*p+g[7]*m+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Et.idCounter=0;Et.COLLIDE_EVENT_NAME="collide";Et.DYNAMIC=dh.DYNAMIC;Et.STATIC=dh.STATIC;Et.KINEMATIC=dh.KINEMATIC;Et.AWAKE=ph.AWAKE;Et.SLEEPY=ph.SLEEPY;Et.SLEEPING=ph.SLEEPING;Et.wakeupEvent={type:"wakeup"};Et.sleepyEvent={type:"sleepy"};Et.sleepEvent={type:"sleep"};const Lw=new R,Iw=new Fe,Dw=new Fn,Ow=new ii,Nw=new ii;new ii;const Uw=new R,Fw=new R,zw=new R,Bw=new R,kw=new R,Gw=new R,Hw=new R,Vw=new R;class Ww{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Et.STATIC||t.sleepState===Et.SLEEPING)&&(e.type&Et.STATIC||e.sleepState===Et.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=Xw;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=qw,i=Yw,r=jw,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new R;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Xw=new R;new R;new Fe;new R;const qw={keys:[]},Yw=[],jw=[];new R;new R;new R;class b_ extends Ww{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class hl{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let w_,T_,A_,R_,C_,P_,L_;const mh={CLOSEST:1,ANY:2,ALL:4};w_=Rt.types.SPHERE;T_=Rt.types.PLANE;A_=Rt.types.BOX;R_=Rt.types.CYLINDER;C_=Rt.types.CONVEXPOLYHEDRON;P_=Rt.types.HEIGHTFIELD;L_=Rt.types.TRIMESH;class Ne{get[w_](){return this._intersectSphere}get[T_](){return this._intersectPlane}get[A_](){return this._intersectBox}get[R_](){return this._intersectConvex}get[C_](){return this._intersectConvex}get[P_](){return this._intersectHeightfield}get[L_](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new R),e===void 0&&(e=new R),this.from=t.clone(),this.to=e.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ne.ANY,this.result=new hl,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ne.ANY,this.result=e.result||new hl,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(tp),Fc.length=0,t.broadphase.aabbQuery(t,tp,Fc),this.intersectBodies(Fc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=$w,r=Kw;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(uT(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new R(0,0,1);e.vmult(c,c);const u=new R;o.vsub(n,u);const h=u.dot(c);a.vsub(n,u);const f=u.dot(c);if(h*f>0||o.distanceTo(a)<h)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new R,_=new R,p=new R;o.vsub(n,g);const m=-c.dot(g)/d;l.scale(m,_),o.vadd(_,p),this.reportIntersection(c,p,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=Zw;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Jw;let l,c,u,h;l=c=0,u=h=t.data.length-1;const f=new Fn;o.getAABB(f),t.getIndexOfPosition(f.lowerBound.x,f.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(f.upperBound.x,f.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<h;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,f),!!f.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),re.pointToWorldFrame(n,e,t.pillarOffset,ka),this._intersectConvex(t.pillarConvex,e,ka,i,r,ep),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),re.pointToWorldFrame(n,e,t.pillarOffset,ka),this._intersectConvex(t.pillarConvex,e,ka,i,r,ep)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),h=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,f=u**2-4*c*h,d=Qw,g=tT;if(!(f<0))if(f===0)o.lerp(a,f,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1);else{const _=(-u-Math.sqrt(f))/(2*c),p=(-u+Math.sqrt(f))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=eT,l=np,c=o&&o.faceList||null,u=t.faces,h=t.vertices,f=t.faceNormals,d=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=c?c.length:u.length,v=this.result;for(let x=0;!v.shouldStop&&x<m;x++){const y=c?c[x]:x,E=u[y],T=f[y],b=e,O=n;l.copy(h[E[0]]),b.vmult(l,l),l.vadd(O,l),l.vsub(g,l),b.vmult(T,a);const M=d.dot(a);if(Math.abs(M)<this.precision)continue;const A=a.dot(l)/M;if(!(A<0)){d.scale(A,pn),pn.vadd(g,pn),Qn.copy(h[E[0]]),b.vmult(Qn,Qn),O.vadd(Qn,Qn);for(let k=1;!v.shouldStop&&k<E.length-1;k++){ui.copy(h[E[k]]),hi.copy(h[E[k+1]]),b.vmult(ui,ui),b.vmult(hi,hi),O.vadd(ui,ui),O.vadd(hi,hi);const G=pn.distanceTo(g);!(Ne.pointInTriangle(pn,Qn,ui,hi)||Ne.pointInTriangle(pn,ui,Qn,hi))||G>p||this.reportIntersection(a,pn,r,i,y)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=nT,l=lT,c=cT,u=np,h=iT,f=sT,d=rT,g=aT,_=oT,p=t.indices;t.vertices;const m=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),re.vectorToLocalFrame(n,e,x,h),re.pointToLocalFrame(n,e,m,f),re.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.vsub(f,h),h.normalize();const y=f.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let E=0,T=l.length;!this.result.shouldStop&&E!==T;E++){const b=l[E];t.getNormal(b,a),t.getVertex(p[b*3],Qn),Qn.vsub(f,u);const O=h.dot(a),M=a.dot(u)/O;if(M<0)continue;h.scale(M,pn),pn.vadd(f,pn),t.getVertex(p[b*3+1],ui),t.getVertex(p[b*3+2],hi);const A=pn.distanceSquared(f);!(Ne.pointInTriangle(pn,ui,Qn,hi)||Ne.pointInTriangle(pn,Qn,ui,hi))||A>y||(re.vectorToWorldFrame(e,a,_),re.pointToWorldFrame(n,e,pn,g),this.reportIntersection(_,g,r,i,b))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ne.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ne.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ne.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Gs),n.vsub(e,po),t.vsub(e,zc);const r=Gs.dot(Gs),o=Gs.dot(po),a=Gs.dot(zc),l=po.dot(po),c=po.dot(zc);let u,h;return(u=l*a-o*c)>=0&&(h=r*c-o*a)>=0&&u+h<r*l-o*o}}Ne.CLOSEST=mh.CLOSEST;Ne.ANY=mh.ANY;Ne.ALL=mh.ALL;const tp=new Fn,Fc=[],po=new R,zc=new R,$w=new R,Kw=new Fe,pn=new R,Qn=new R,ui=new R,hi=new R;new R;new hl;const ep={faceList:[0]},ka=new R,Zw=new Ne,Jw=[],Qw=new R,tT=new R,eT=new R;new R;new R;const np=new R,nT=new R,iT=new R,sT=new R,rT=new R,oT=new R,aT=new R;new Fn;const lT=[],cT=new re,Gs=new R,Ga=new R;function uT(s,t,e){e.vsub(s,Gs);const n=Gs.dot(t);return t.scale(n,Ga),Ga.vadd(s,Ga),e.distanceTo(Ga)}class hT{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ip{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class sa{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=sa.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ip,this.jacobianElementB=new ip,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,sp),a.scale(u,rp),n.invInertiaWorldSolve.vmult(o,op),i.invInertiaWorldSolve.vmult(l,ap),t.multiplyVectors(sp,op)+e.multiplyVectors(rp,ap)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Ha),c+=Ha.dot(t.rotational),l.vmult(e.rotational,Ha),c+=Ha.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=fT;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}sa.idCounter=0;const sp=new R,rp=new R,op=new R,ap=new R,Ha=new R,fT=new R;class dT extends sa{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=pT,c=mT,u=i.velocity,h=i.angularVelocity;i.force,i.torque;const f=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=_T,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=m.dot(g),x=this.restitution+1,y=x*f.dot(m)-x*u.dot(m)+d.dot(c)-h.dot(l),E=this.computeGiMf();return-v*e-y*n-t*E}getImpactVelocityAlongNormal(){const t=gT,e=vT,n=xT,i=yT,r=MT;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const pT=new R,mT=new R,_T=new R,gT=new R,vT=new R,xT=new R,yT=new R,MT=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class lp extends sa{constructor(t,e,n){super(t,e,-n,n),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=ST,o=ET,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),h=this.computeGiMf();return-u*e-t*h}}const ST=new R,ET=new R;class Ol{constructor(t,e,n){n=hT.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ol.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ol.idCounter=0;class Nl{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Nl.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Nl.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Ne;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Fn;new R;new Fn;new R;new R;new R;new R;new R;new R;new R;new Fn;new R;new re;new Fn;class bT{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class wT extends bT{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let h,f,d,g,_,p;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const m=AT,v=RT,x=TT;m.length=a,v.length=a,x.length=a;for(let y=0;y!==a;y++){const E=o[y];x[y]=0,v[y]=E.computeB(u),m[y]=1/E.computeC()}if(a!==0){for(let T=0;T!==c;T++){const b=l[T],O=b.vlambda,M=b.wlambda;O.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const b=o[T];h=v[T],f=m[T],p=x[T],_=b.computeGWlambda(),d=f*(h-_-b.eps*p),p+d<b.minForce?d=b.minForce-p:p+d>b.maxForce&&(d=b.maxForce-p),x[T]+=d,g+=d>0?d:-d,b.addToWlambda(d)}if(g*g<r)break}for(let T=0;T!==c;T++){const b=l[T],O=b.velocity,M=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),O.vadd(b.vlambda,O),b.wlambda.vmul(b.angularFactor,b.wlambda),M.vadd(b.wlambda,M)}let y=o.length;const E=1/u;for(;y--;)o[y].multiplier=x[y]*E}return n}}const TT=[],AT=[],RT=[];class CT{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class PT extends CT{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const pe={sphereSphere:Rt.types.SPHERE,spherePlane:Rt.types.SPHERE|Rt.types.PLANE,boxBox:Rt.types.BOX|Rt.types.BOX,sphereBox:Rt.types.SPHERE|Rt.types.BOX,planeBox:Rt.types.PLANE|Rt.types.BOX,convexConvex:Rt.types.CONVEXPOLYHEDRON,sphereConvex:Rt.types.SPHERE|Rt.types.CONVEXPOLYHEDRON,planeConvex:Rt.types.PLANE|Rt.types.CONVEXPOLYHEDRON,boxConvex:Rt.types.BOX|Rt.types.CONVEXPOLYHEDRON,sphereHeightfield:Rt.types.SPHERE|Rt.types.HEIGHTFIELD,boxHeightfield:Rt.types.BOX|Rt.types.HEIGHTFIELD,convexHeightfield:Rt.types.CONVEXPOLYHEDRON|Rt.types.HEIGHTFIELD,sphereParticle:Rt.types.PARTICLE|Rt.types.SPHERE,planeParticle:Rt.types.PLANE|Rt.types.PARTICLE,boxParticle:Rt.types.BOX|Rt.types.PARTICLE,convexParticle:Rt.types.PARTICLE|Rt.types.CONVEXPOLYHEDRON,cylinderCylinder:Rt.types.CYLINDER,sphereCylinder:Rt.types.SPHERE|Rt.types.CYLINDER,planeCylinder:Rt.types.PLANE|Rt.types.CYLINDER,boxCylinder:Rt.types.BOX|Rt.types.CYLINDER,convexCylinder:Rt.types.CONVEXPOLYHEDRON|Rt.types.CYLINDER,heightfieldCylinder:Rt.types.HEIGHTFIELD|Rt.types.CYLINDER,particleCylinder:Rt.types.PARTICLE|Rt.types.CYLINDER,sphereTrimesh:Rt.types.SPHERE|Rt.types.TRIMESH,planeTrimesh:Rt.types.PLANE|Rt.types.TRIMESH};class LT{get[pe.sphereSphere](){return this.sphereSphere}get[pe.spherePlane](){return this.spherePlane}get[pe.boxBox](){return this.boxBox}get[pe.sphereBox](){return this.sphereBox}get[pe.planeBox](){return this.planeBox}get[pe.convexConvex](){return this.convexConvex}get[pe.sphereConvex](){return this.sphereConvex}get[pe.planeConvex](){return this.planeConvex}get[pe.boxConvex](){return this.boxConvex}get[pe.sphereHeightfield](){return this.sphereHeightfield}get[pe.boxHeightfield](){return this.boxHeightfield}get[pe.convexHeightfield](){return this.convexHeightfield}get[pe.sphereParticle](){return this.sphereParticle}get[pe.planeParticle](){return this.planeParticle}get[pe.boxParticle](){return this.boxParticle}get[pe.convexParticle](){return this.convexParticle}get[pe.cylinderCylinder](){return this.convexConvex}get[pe.sphereCylinder](){return this.sphereConvex}get[pe.planeCylinder](){return this.planeConvex}get[pe.boxCylinder](){return this.boxConvex}get[pe.convexCylinder](){return this.convexConvex}get[pe.heightfieldCylinder](){return this.heightfieldCylinder}get[pe.particleCylinder](){return this.particleCylinder}get[pe.sphereTrimesh](){return this.sphereTrimesh}get[pe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new PT,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new dT(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,h=o.material||i.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(c=u.friction*h.friction),c>0){const f=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new lp(n,i,f*d),p=g.length?g.pop():new lp(n,i,f*d);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-f*d,_.maxForce=p.maxForce=f*d,_.ri.copy(t.ri),_.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=t.enabled,e.push(_,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ds.setZero(),wr.setZero(),Tr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ds.vadd(e.ni,Ds),wr.vadd(e.ri,wr),Tr.vadd(e.rj,Tr)):(Ds.vsub(e.ni,Ds),wr.vadd(e.rj,wr),Tr.vadd(e.ri,Tr));const o=1/t;wr.scale(o,n.ri),Tr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ds.normalize(),Ds.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=OT,c=NT,u=IT,h=DT;for(let f=0,d=t.length;f!==d;f++){const g=t[f],_=e[f];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&Et.KINEMATIC&&_.type&Et.STATIC||g.type&Et.STATIC&&_.type&Et.KINEMATIC||g.type&Et.KINEMATIC&&_.type&Et.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const x=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],h),h.vadd(_.position,h);const E=_.shapes[y];if(!(x.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(h)>x.boundingSphereRadius+E.boundingSphereRadius)continue;let T=null;x.material&&E.material&&(T=n.getContactMaterial(x.material,E.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const b=x.type|E.type,O=this[b];if(O){let M=!1;x.type<E.type?M=O.call(this,x,E,u,h,l,c,g,_,x,E,m):M=O.call(this,E,x,h,u,c,l,_,g,x,E,m),M&&m&&(n.shapeOverlapKeeper.set(x.id,E.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,u,h){if(h)return n.distanceSquared(i)<(t.radius+e.radius)**2;const f=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,f.ni),f.ni.normalize(),f.ri.copy(f.ni),f.rj.copy(f.ni),f.ri.scale(t.radius,f.ri),f.rj.scale(-e.radius,f.rj),f.ri.vadd(n,f.ri),f.ri.vsub(a.position,f.ri),f.rj.vadd(i,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,u,h){const f=this.createContactEquation(a,l,t,e,c,u);if(f.ni.set(0,0,1),o.vmult(f.ni,f.ni),f.ni.negate(f.ni),f.ni.normalize(),f.ni.scale(t.radius,f.ri),n.vsub(i,Va),f.ni.scale(f.ni.dot(Va),cp),Va.vsub(cp,f.rj),-Va.dot(f.ni)<=t.radius){if(h)return!0;const d=f.ri,g=f.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(i,g),g.vsub(l.position,g),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,h)}sphereBox(t,e,n,i,r,o,a,l,c,u,h){const f=this.v3pool,d=aA;n.vsub(i,Wa),e.getSideNormals(d,o);const g=t.radius;let _=!1;const p=cA,m=uA,v=hA;let x=null,y=0,E=0,T=0,b=null;for(let I=0,X=d.length;I!==X&&_===!1;I++){const H=sA;H.copy(d[I]);const $=H.length();H.normalize();const st=Wa.dot(H);if(st<$+g&&st>0){const ot=rA,K=oA;ot.copy(d[(I+1)%3]),K.copy(d[(I+2)%3]);const et=ot.length(),lt=K.length();ot.normalize(),K.normalize();const gt=Wa.dot(ot),bt=Wa.dot(K);if(gt<et&&gt>-et&&bt<lt&&bt>-lt){const Tt=Math.abs(st-$-g);if((b===null||Tt<b)&&(b=Tt,E=gt,T=bt,x=$,p.copy(H),m.copy(ot),v.copy(K),y++,h))return!0}}}if(y){_=!0;const I=this.createContactEquation(a,l,t,e,c,u);p.scale(-g,I.ri),I.ni.copy(p),I.ni.negate(I.ni),p.scale(x,p),m.scale(E,m),p.vadd(m,p),v.scale(T,v),p.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let O=f.get();const M=lA;for(let I=0;I!==2&&!_;I++)for(let X=0;X!==2&&!_;X++)for(let H=0;H!==2&&!_;H++)if(O.set(0,0,0),I?O.vadd(d[0],O):O.vsub(d[0],O),X?O.vadd(d[1],O):O.vsub(d[1],O),H?O.vadd(d[2],O):O.vsub(d[2],O),i.vadd(O,M),M.vsub(n,M),M.lengthSquared()<g*g){if(h)return!0;_=!0;const $=this.createContactEquation(a,l,t,e,c,u);$.ri.copy(M),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(g,$.ri),$.rj.copy(O),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}f.release(O),O=null;const A=f.get(),k=f.get(),G=f.get(),F=f.get(),L=f.get(),U=d.length;for(let I=0;I!==U&&!_;I++)for(let X=0;X!==U&&!_;X++)if(I%3!==X%3){d[X].cross(d[I],A),A.normalize(),d[I].vadd(d[X],k),G.copy(n),G.vsub(k,G),G.vsub(i,G);const H=G.dot(A);A.scale(H,F);let $=0;for(;$===I%3||$===X%3;)$++;L.copy(n),L.vsub(F,L),L.vsub(k,L),L.vsub(i,L);const st=Math.abs(H),ot=L.length();if(st<d[$].length()&&ot<g){if(h)return!0;_=!0;const K=this.createContactEquation(a,l,t,e,c,u);k.vadd(F,K.rj),K.rj.copy(K.rj),L.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}f.release(A,k,G,F,L)}planeBox(t,e,n,i,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,h)}convexConvex(t,e,n,i,r,o,a,l,c,u,h,f,d){const g=TA;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,f,d)){const _=[],p=AA;t.clipAgainstHull(n,r,e,i,o,g,-100,100,_);let m=0;for(let v=0;v!==_.length;v++){if(h)return!0;const x=this.createContactEquation(a,l,t,e,c,u),y=x.ri,E=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,y),E.copy(_[v].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(l.position,E),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,r,o,a,l,c,u,h){const f=this.v3pool;n.vsub(i,fA);const d=e.faceNormals,g=e.faces,_=e.vertices,p=t.radius;let m=!1;for(let v=0;v!==_.length;v++){const x=_[v],y=_A;o.vmult(x,y),i.vadd(y,y);const E=mA;if(y.vsub(n,E),E.lengthSquared()<p*p){if(h)return!0;m=!0;const T=this.createContactEquation(a,l,t,e,c,u);T.ri.copy(E),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&m===!1;v++){const y=d[v],E=g[v],T=gA;o.vmult(y,T);const b=vA;o.vmult(_[E[0]],b),b.vadd(i,b);const O=xA;T.scale(-p,O),n.vadd(O,O);const M=yA;O.vsub(b,M);const A=M.dot(T),k=MA;if(n.vsub(b,k),A<0&&k.dot(T)>0){const G=[];for(let F=0,L=E.length;F!==L;F++){const U=f.get();o.vmult(_[E[F]],U),i.vadd(U,U),G.push(U)}if(iA(G,T,n)){if(h)return!0;m=!0;const F=this.createContactEquation(a,l,t,e,c,u);T.scale(-p,F.ri),T.negate(F.ni);const L=f.get();T.scale(-A,L);const U=f.get();T.scale(-p,U),n.vsub(i,F.rj),F.rj.vadd(U,F.rj),F.rj.vadd(L,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),f.release(L),f.release(U),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let I=0,X=G.length;I!==X;I++)f.release(G[I]);return}else for(let F=0;F!==E.length;F++){const L=f.get(),U=f.get();o.vmult(_[E[(F+1)%E.length]],L),o.vmult(_[E[(F+2)%E.length]],U),i.vadd(L,L),i.vadd(U,U);const I=dA;U.vsub(L,I);const X=pA;I.unit(X);const H=f.get(),$=f.get();n.vsub(L,$);const st=$.dot(X);X.scale(st,H),H.vadd(L,H);const ot=f.get();if(H.vsub(n,ot),st>0&&st*st<I.lengthSquared()&&ot.lengthSquared()<p*p){if(h)return!0;const K=this.createContactEquation(a,l,t,e,c,u);H.vsub(i,K.rj),H.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(p,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let et=0,lt=G.length;et!==lt;et++)f.release(G[et]);f.release(L),f.release(U),f.release(H),f.release(ot),f.release($);return}f.release(L),f.release(U),f.release(H),f.release(ot),f.release($)}for(let F=0,L=G.length;F!==L;F++)f.release(G[F])}}}planeConvex(t,e,n,i,r,o,a,l,c,u,h){const f=SA,d=EA;d.set(0,0,1),r.vmult(d,d);let g=0;const _=bA;for(let p=0;p!==e.vertices.length;p++)if(f.copy(e.vertices[p]),o.vmult(f,f),i.vadd(f,f),f.vsub(n,_),d.dot(_)<=0){if(h)return!0;const v=this.createContactEquation(a,l,t,e,c,u),x=wA;d.scale(d.dot(_),x),f.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(d),f.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,h)}sphereHeightfield(t,e,n,i,r,o,a,l,c,u,h){const f=e.data,d=t.radius,g=e.elementSize,_=BA,p=zA;re.pointToLocalFrame(i,o,n,p);let m=Math.floor((p.x-d)/g)-1,v=Math.ceil((p.x+d)/g)+1,x=Math.floor((p.y-d)/g)-1,y=Math.ceil((p.y+d)/g)+1;if(v<0||y<0||m>f.length||x>f[0].length)return;m<0&&(m=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),m>=f.length&&(m=f.length-1),v>=f.length&&(v=f.length-1),y>=f[0].length&&(y=f[0].length-1),x>=f[0].length&&(x=f[0].length-1);const E=[];e.getRectMinMax(m,x,v,y,E);const T=E[0],b=E[1];if(p.z-d>b||p.z+d<T)return;const O=this.result;for(let M=m;M<v;M++)for(let A=x;A<y;A++){const k=O.length;let G=!1;if(e.getConvexTrianglePillar(M,A,!1),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,h)),h&&G||(e.getConvexTrianglePillar(M,A,!0),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,h)),h&&G))return!0;if(O.length-k>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,h)}convexHeightfield(t,e,n,i,r,o,a,l,c,u,h){const f=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=UA,p=FA,m=NA;re.pointToLocalFrame(i,o,n,m);let v=Math.floor((m.x-g)/d)-1,x=Math.ceil((m.x+g)/d)+1,y=Math.floor((m.y-g)/d)-1,E=Math.ceil((m.y+g)/d)+1;if(x<0||E<0||v>f.length||y>f[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),E<0&&(E=0),v>=f.length&&(v=f.length-1),x>=f.length&&(x=f.length-1),E>=f[0].length&&(E=f[0].length-1),y>=f[0].length&&(y=f[0].length-1);const T=[];e.getRectMinMax(v,y,x,E,T);const b=T[0],O=T[1];if(!(m.z-g>O||m.z+g<b))for(let M=v;M<x;M++)for(let A=y;A<E;A++){let k=!1;if(e.getConvexTrianglePillar(M,A,!1),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,h,p,null)),h&&k||(e.getConvexTrianglePillar(M,A,!0),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,h,p,null)),h&&k))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,u,h){const f=LA;if(f.set(0,0,1),i.vsub(n,f),f.lengthSquared()<=t.radius*t.radius){if(h)return!0;const g=this.createContactEquation(l,a,e,t,c,u);f.normalize(),g.rj.copy(f),g.rj.scale(t.radius,g.rj),g.ni.copy(f),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,u,h){const f=RA;f.set(0,0,1),a.quaternion.vmult(f,f);const d=CA;if(i.vsub(a.position,d),f.dot(d)<=0){if(h)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(f),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=PA;f.scale(f.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,h)}convexParticle(t,e,n,i,r,o,a,l,c,u,h){let f=-1;const d=DA,g=OA;let _=null;const p=IA;if(p.copy(i),p.vsub(n,p),r.conjugate(up),up.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let m=0,v=t.faces.length;m!==v;m++){const x=[t.worldVertices[t.faces[m][0]]],y=t.worldFaceNormals[m];i.vsub(x[0],hp);const E=-y.dot(hp);if(_===null||Math.abs(E)<Math.abs(_)){if(h)return!0;_=E,f=m,d.copy(y)}}if(f!==-1){const m=this.createContactEquation(l,a,e,t,c,u);d.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),d.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,x=m.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,u,h){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,u,h)}particleCylinder(t,e,n,i,r,o,a,l,c,u,h){return this.convexParticle(e,t,i,n,o,r,l,a,c,u,h)}sphereTrimesh(t,e,n,i,r,o,a,l,c,u,h){const f=VT,d=WT,g=XT,_=qT,p=YT,m=jT,v=JT,x=HT,y=kT,E=QT;re.pointToLocalFrame(i,o,n,p);const T=t.radius;v.lowerBound.set(p.x-T,p.y-T,p.z-T),v.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(v,E);const b=GT,O=t.radius*t.radius;for(let F=0;F<E.length;F++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[E[F]*3+L],b),b.vsub(p,y),y.lengthSquared()<=O){if(x.copy(b),re.pointToWorldFrame(i,o,x,b),b.vsub(n,y),h)return!0;let U=this.createContactEquation(a,l,t,e,c,u);U.ni.copy(y),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(b),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let F=0;F<E.length;F++)for(let L=0;L<3;L++){e.getVertex(e.indices[E[F]*3+L],f),e.getVertex(e.indices[E[F]*3+(L+1)%3],d),d.vsub(f,g),p.vsub(d,m);const U=m.dot(g);p.vsub(f,m);let I=m.dot(g);if(I>0&&U<0&&(p.vsub(f,m),_.copy(g),_.normalize(),I=m.dot(_),_.scale(I,m),m.vadd(f,m),m.distanceTo(p)<t.radius)){if(h)return!0;const H=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(l.position,H.rj),re.vectorToWorldFrame(o,H.ni,H.ni),re.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const M=$T,A=KT,k=ZT,G=BT;for(let F=0,L=E.length;F!==L;F++){e.getTriangleVertices(E[F],M,A,k),e.getNormal(E[F],G),p.vsub(M,m);let U=m.dot(G);if(G.scale(U,m),p.vsub(m,m),U=m.distanceTo(p),Ne.pointInTriangle(m,M,A,k)&&U<t.radius){if(h)return!0;let I=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(l.position,I.rj),re.vectorToWorldFrame(o,I.ni,I.ni),re.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,u,h){const f=new R,d=UT;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,f);const _=new R;_.copy(f),re.pointToWorldFrame(i,o,_,f);const p=FT;if(f.vsub(n,p),d.dot(p)<=0){if(h)return!0;const v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(d);const x=zT;d.scale(p.dot(d),x),f.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(f),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Ds=new R,wr=new R,Tr=new R,IT=new R,DT=new R,OT=new Fe,NT=new Fe,UT=new R,FT=new R,zT=new R,BT=new R,kT=new R;new R;const GT=new R,HT=new R,VT=new R,WT=new R,XT=new R,qT=new R,YT=new R,jT=new R,$T=new R,KT=new R,ZT=new R,JT=new Fn,QT=[],Va=new R,cp=new R,tA=new R,eA=new R,nA=new R;function iA(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=tA;s[(r+1)%i].vsub(o,a);const l=eA;a.cross(t,l);const c=nA;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Wa=new R,sA=new R,rA=new R,oA=new R,aA=[new R,new R,new R,new R,new R,new R],lA=new R,cA=new R,uA=new R,hA=new R,fA=new R,dA=new R,pA=new R,mA=new R,_A=new R,gA=new R,vA=new R,xA=new R,yA=new R,MA=new R;new R;new R;const SA=new R,EA=new R,bA=new R,wA=new R,TA=new R,AA=new R,RA=new R,CA=new R,PA=new R,LA=new R,up=new Fe,IA=new R;new R;const DA=new R,hp=new R,OA=new R,NA=new R,UA=new R,FA=[0],zA=new R,BA=new R;class fp{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||dp(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||dp(e,u)}}}function dp(s,t){s.push((t&4294901760)>>16,t&65535)}const Bc=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class kA{constructor(){this.data={keys:[]}}get(t,e){const n=Bc(t,e);return this.data[n]}set(t,e,n){const i=Bc(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Bc(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class GA extends E_{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new b_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new wT,this.constraints=[],this.narrowphase=new LT(this),this.collisionMatrix=new Jd,this.collisionMatrixPrevious=new Jd,this.bodyOverlapKeeper=new fp,this.shapeOverlapKeeper=new fp,this.contactmaterials=[],this.contactMaterialTable=new kA,this.defaultMaterial=new Nl("default"),this.defaultContactMaterial=new Ol(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof hl?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.ALL,n.from=t,n.to=e,n.callback=i,kc.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.ANY,n.from=t,n.to=e,n.result=i,kc.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.CLOSEST,n.from=t,n.to=e,n.result=i,kc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Et&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ze.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ze.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(ze.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=qA,i=YA,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,h=Et.DYNAMIC;let f=-1/0;const d=this.constraints,g=XA;l.length();const _=l.x,p=l.y,m=l.z;let v=0;for(c&&(f=ze.now()),v=0;v!==r;v++){const F=o[v];if(F.type===h){const L=F.force,U=F.mass;L.x+=U*_,L.y+=U*p,L.z+=U*m}}for(let F=0,L=this.subsystems.length;F!==L;F++)this.subsystems[F].update();c&&(f=ze.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=ze.now()-f);let x=d.length;for(v=0;v!==x;v++){const F=d[v];if(!F.collideConnected)for(let L=n.length-1;L>=0;L-=1)(F.bodyA===n[L]&&F.bodyB===i[L]||F.bodyB===n[L]&&F.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(f=ze.now());const y=WA,E=e.length;for(v=0;v!==E;v++)y.push(e[v]);e.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(u.narrowphase=ze.now()-f),c&&(f=ze.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=e.length;for(let F=0;F!==b;F++){const L=e[F],U=L.bi,I=L.bj,X=L.si,H=L.sj;let $;if(U.material&&I.material?$=this.getContactMaterial(U.material,I.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,U.material&&I.material&&(U.material.friction>=0&&I.material.friction>=0&&U.material.friction*I.material.friction,U.material.restitution>=0&&I.material.restitution>=0&&(L.restitution=U.material.restitution*I.material.restitution)),a.addEquation(L),U.allowSleep&&U.type===Et.DYNAMIC&&U.sleepState===Et.SLEEPING&&I.sleepState===Et.AWAKE&&I.type!==Et.STATIC){const st=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),ot=I.sleepSpeedLimit**2;st>=ot*2&&(U.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===Et.DYNAMIC&&I.sleepState===Et.SLEEPING&&U.sleepState===Et.AWAKE&&U.type!==Et.STATIC){const st=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ot=U.sleepSpeedLimit**2;st>=ot*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,I,!0),this.collisionMatrixPrevious.get(U,I)||(mo.body=I,mo.contact=L,U.dispatchEvent(mo),mo.body=U,I.dispatchEvent(mo)),this.bodyOverlapKeeper.set(U.id,I.id),this.shapeOverlapKeeper.set(X.id,H.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=ze.now()-f,f=ze.now()),v=0;v!==r;v++){const F=o[v];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(x=d.length,v=0;v!==x;v++){const F=d[v];F.update();for(let L=0,U=F.equations.length;L!==U;L++){const I=F.equations[L];a.addEquation(I)}}a.solve(t,this),c&&(u.solve=ze.now()-f),a.removeAllEquations();const O=Math.pow;for(v=0;v!==r;v++){const F=o[v];if(F.type&h){const L=O(1-F.linearDamping,t),U=F.velocity;U.scale(L,U);const I=F.angularVelocity;if(I){const X=O(1-F.angularDamping,t);I.scale(X,I)}}}this.dispatchEvent(VA),c&&(f=ze.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,A,k);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=ze.now()-f),this.stepnumber+=1,this.dispatchEvent(HA);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==r;v++){const F=o[v];F.sleepTick(this.time),F.sleepState!==Et.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Oi,Ni),t){for(let r=0,o=Oi.length;r<o;r+=2)_o.bodyA=this.getBodyById(Oi[r]),_o.bodyB=this.getBodyById(Oi[r+1]),this.dispatchEvent(_o);_o.bodyA=_o.bodyB=null}if(e){for(let r=0,o=Ni.length;r<o;r+=2)go.bodyA=this.getBodyById(Ni[r]),go.bodyB=this.getBodyById(Ni[r+1]),this.dispatchEvent(go);go.bodyA=go.bodyB=null}Oi.length=Ni.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Oi,Ni),n){for(let r=0,o=Oi.length;r<o;r+=2){const a=this.getShapeById(Oi[r]),l=this.getShapeById(Oi[r+1]);Ui.shapeA=a,Ui.shapeB=l,a&&(Ui.bodyA=a.body),l&&(Ui.bodyB=l.body),this.dispatchEvent(Ui)}Ui.bodyA=Ui.bodyB=Ui.shapeA=Ui.shapeB=null}if(i){for(let r=0,o=Ni.length;r<o;r+=2){const a=this.getShapeById(Ni[r]),l=this.getShapeById(Ni[r+1]);Fi.shapeA=a,Fi.shapeB=l,a&&(Fi.bodyA=a.body),l&&(Fi.bodyB=l.body),this.dispatchEvent(Fi)}Fi.bodyA=Fi.bodyB=Fi.shapeA=Fi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Fn;const kc=new Ne,ze=globalThis.performance||{};if(!ze.now){let s=Date.now();ze.timing&&ze.timing.navigationStart&&(s=ze.timing.navigationStart),ze.now=()=>Date.now()-s}new R;const HA={type:"postStep"},VA={type:"preStep"},mo={type:Et.COLLIDE_EVENT_NAME,body:null,contact:null},WA=[],XA=[],qA=[],YA=[],Oi=[],Ni=[],_o={type:"beginContact",bodyA:null,bodyB:null},go={type:"endContact",bodyA:null,bodyB:null},Ui={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Fi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class jA{constructor(){Te(this,"world");Te(this,"bodies",new Map);Te(this,"timeStep",1/60);this.world=new GA,this.world.gravity.set(0,-20,0),this.world.broadphase=new b_,this.world.solver.iterations=10,this.world.defaultContactMaterial.contactEquationStiffness=1e6,this.world.defaultContactMaterial.contactEquationRelaxation=3}getWorld(){return this.world}createGround(t,e,n){const i=new Ks(new R(e.x/2,e.y/2,e.z/2)),r=new Et({mass:0,position:new R(n.x,n.y,n.z),shape:i});return this.world.addBody(r),this.bodies.set(t,r),r}createCube(t,e,n,i=1){const r=new Ks(new R(e/2,e/2,e/2)),o=new Et({mass:i,position:new R(n.x,n.y,n.z),shape:r});return this.world.addBody(o),this.bodies.set(t,o),o}createStaticBox(t,e,n){const i=new Ks(new R(e.x/2,e.y/2,e.z/2)),r=new Et({mass:0,position:new R(n.x,n.y,n.z),shape:i});return this.world.addBody(r),this.bodies.set(t,r),r}removeBody(t){const e=this.bodies.get(t);e&&(this.world.removeBody(e),this.bodies.delete(t))}getBody(t){return this.bodies.get(t)}update(t){this.world.step(this.timeStep,t,3)}reset(){this.bodies.forEach(t=>{this.world.removeBody(t)}),this.bodies.clear()}dispose(){this.reset()}}function ki(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function I_(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},_h,$e,ge,qn=1e8,he=1/qn,Mu=Math.PI*2,$A=Mu/4,KA=0,D_=Math.sqrt,ZA=Math.cos,JA=Math.sin,qe=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},Ki=function(t){return typeof t=="number"},gh=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},xn=function(t){return t!==!1},vh=function(){return typeof window<"u"},Xa=function(t){return Ae(t)||qe(t)},O_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,QA=/random\([^)]+\)/g,t1=/,\s*/g,pp=/(?:-?\.?\d|\.)+/gi,N_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,U_=/[+-]=-?[.\d]+/,e1=/[^,'"\[\]\s]+/gi,n1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Se,di,Su,xh,Nn={},fl={},F_,z_=function(t){return(fl=Qr(t,Nn))&&En},yh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xo=function(t,e){return!e&&console.warn(t)},B_=function(t,e){return t&&(Nn[t]=e)&&fl&&(fl[t]=e)||Nn},qo=function(){return 0},i1={suppressEvents:!0,isStart:!0,kill:!1},Ka={suppressEvents:!0,kill:!1},s1={suppressEvents:!0},Mh={},_s=[],Eu={},k_,Rn={},Hc={},mp=30,Za=[],Sh="",Eh=function(t){var e=t[0],n,i;if(Ti(e)||Ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Za.length;i--&&!Za[i].targetTest(e););n=Za[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new lg(t[i],n)))||t.splice(i,1);return t},Zs=function(t){return t._gsap||Eh(Yn(t))[0]._gsap},G_=function(t,e,n){return(n=t[e])&&Ae(n)?t[e]():gh(n)&&t.getAttribute&&t.getAttribute(e)||n},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},Vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},r1=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},dl=function(){var t=_s.length,e=_s.slice(0),n,i;for(Eu={},_s.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bh=function(t){return!!(t._initted||t._startAt||t.add)},H_=function(t,e,n,i){_s.length&&!$e&&dl(),t.render(e,n,!!($e&&e<0&&bh(t))),_s.length&&!$e&&dl()},V_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(e1).length<2?e:qe(t)?t.trim():t},W_=function(t){return t},Un=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},o1=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Qr=function(t,e){for(var n in e)t[n]=e[n];return t},_p=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},pl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Oo=function(t){var e=t.parent||Se,n=t.keyframes?o1(on(t.keyframes)):Un;if(xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},a1=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},X_=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ul=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ys=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Js=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},l1=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bu=function(t,e,n,i){return t._startAt&&($e?t._startAt.revert(Ka):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},c1=function s(t){return!t||t._ts&&s(t.parent)},gp=function(t){return t._repeat?to(t._tTime,t=t.duration()+t._rDelay)*t:0},to=function(t,e){var n=Math.floor(t=Me(t/e));return t&&n===t?n-1:n},ml=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fl=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},zl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fl(t),n._dirty||Js(n,t)),t},q_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ml(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),Js(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},xi=function(t,e,n,i){return e.parent&&ys(e),e._start=Me((Ki(n)?n:n||t!==Se?kn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),X_(t,e,"_first","_last",t._sort?"_start":0),wu(e)||(t._recent=e),i||q_(t,e),t._ts<0&&zl(t,t._tTime),t},Y_=function(t,e){return(Nn.ScrollTrigger||yh("scrollTrigger",e))&&Nn.ScrollTrigger.create(e,t)},j_=function(t,e,n,i,r){if(Th(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!$e&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&k_!==Cn.frame)return _s.push(t),t._lazy=[r,i],1},u1=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},wu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},h1=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&u1(t)&&!(!t._initted&&wu(t))||(t._ts<0||t._dp._ts<0)&&!wu(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ra(0,t._tDur,e),u=to(l,a),t._yoyo&&u&1&&(o=1-o),u!==to(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||$e||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&j_(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&bu(t,e,n,!0),t._onUpdate&&!n&&Ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ys(t,1),!n&&!$e&&(Ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},f1=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},eo=function(t,e,n,i){var r=t._repeat,o=Me(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Me(o*(r+1)+t._rDelay*r):o,a>0&&!i&&zl(t,t._tTime=t._tDur*a),t.parent&&Fl(t),n||Js(t.parent,t),t},vp=function(t){return t instanceof gn?Js(t):eo(t,t._dur)},d1={_start:0,endTime:qo,totalDuration:qo},kn=function s(t,e,n){var i=t.labels,r=t._recent||d1,o=t.duration()>=qn?r.endTime(!1):t._dur,a,l,c;return qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},No=function(t,e,n){var i=Ki(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ue(e[0],o,e[r+1])},bs=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!qe(t)||!(e=n1.exec(t))?"":e[1]},p1=function(t,e,n){return bs(n,function(i){return ra(t,e,i)})},Tu=[].slice,$_=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==di},m1=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return qe(i)&&!e||$_(i,1)?(r=n).push.apply(r,Yn(i)):n.push(i)})||n},Yn=function(t,e,n){return ge&&!e&&ge.selector?ge.selector(t):qe(t)&&!n&&(Su||!no())?Tu.call((e||xh).querySelectorAll(t),0):on(t)?m1(t,n):$_(t)?Tu.call(t,0):t?[t]:[]},Au=function(t){return t=Yn(t)[0]||Xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Yn(e,n.querySelectorAll?n:n===t?Xo("Invalid scope")||xh.createElement("div"):t)}},K_=function(t){return t.sort(function(){return .5-Math.random()})},Z_=function(t){if(Ae(t))return t;var e=Ti(t)?t:{each:t},n=Qs(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return qe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||e).length,p=o[_],m,v,x,y,E,T,b,O,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,qn])[1],!M){for(b=-qn;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,v=M===qn?0:l?_*h/M-.5:i/M|0,b=0,O=qn,T=0;T<_;T++)x=T%M-m,y=v-(T/M|0),p[T]=E=c?Math.abs(c==="y"?y:x):D_(x*x+y*y),E>b&&(b=E),E<O&&(O=E);i==="random"&&K_(p),p.max=b-O,p.min=O,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=sn(e.amount||e.each)||0,n=n&&_<0?R1(n):n}return _=(p[f]-p.min)/p.max||0,Me(p.b+(n?n(_):_)*p.v)+p.u}},Ru=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ki(n)?0:sn(n))}},J_=function(t,e){var n=on(t),i,r;return!n&&Ti(t)&&(i=n=t.radius||qn,t.values?(t=Yn(t.values),(r=!Ki(t[0]))&&(i*=i)):t=Ru(t.increment)),bs(e,n?Ae(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=qn,u=0,h=t.length,f,d;h--;)r?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,r||u===o||Ki(o)?u:u+sn(o)}:Ru(t))},Q_=function(t,e,n,i){return bs(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},_1=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},g1=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},v1=function(t,e,n){return eg(t,e,0,1,n)},tg=function(t,e,n){return bs(n,function(i){return t[~~e(i)]})},x1=function s(t,e,n){var i=e-t;return on(t)?tg(t,s(0,t.length),e):bs(n,function(r){return(i+(r-t)%i)%i+t})},y1=function s(t,e,n){var i=e-t,r=i*2;return on(t)?tg(t,s(0,t.length-1),e):bs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Yo=function(t){return t.replace(QA,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(t1);return Q_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},eg=function(t,e,n,i,r){var o=e-t,a=i-n;return bs(r,function(l){return n+((l-t)/o*a||0)})},M1=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=qe(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(s(t[c-1],t[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Qr(on(t)?[]:{},t));if(!u){for(l in e)wh.call(a,t,l,"get",e[l]);r=function(g){return Ch(g,a)||(o?t.p:t)}}}return bs(n,r)},xp=function(t,e,n){var i=t.labels,r=qn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ln=function(t,e,n){var i=t.vars,r=i[e],o=ge,a=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&_s.length&&dl(),a&&(ge=a),u=l?r.apply(c,l):r.call(c),ge=o,u},Mo=function(t){return ys(t),t.scrollTrigger&&t.scrollTrigger.kill(!!$e),t.progress()<1&&Ln(t,"onInterrupt"),t},Nr,ng=[],ig=function(t){if(t)if(t=!t.name&&t.default||t,vh()||t.headless){var e=t.name,n=Ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:qo,render:Ch,add:wh,kill:z1,modifier:F1,rawVars:0},o={targetTest:0,get:0,getSetter:Rh,aliases:{},register:0};if(no(),t!==i){if(Rn[e])return;Un(i,Un(pl(t,r),o)),Qr(i.prototype,Qr(r,pl(t,o))),Rn[i.prop=e]=i,t.targetTest&&(Za.push(i),Mh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}B_(e,i),t.register&&t.register(En,i,Mn)}else ng.push(t)},ue=255,So={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},Vc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},sg=function(t,e,n){var i=t?Ki(t)?[t>>16,t>>8&ue,t&ue]:0:So.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),So[t])i=So[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ue,i&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(pp),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Vc(l+1/3,r,o),i[1]=Vc(l,r,o),i[2]=Vc(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(N_),n&&i.length<4&&(i[3]=1),i}else i=t.match(pp)||So.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/ue,o=i[1]/ue,a=i[2]/ue,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rg=function(t){var e=[],n=[],i=-1;return t.split(gs).forEach(function(r){var o=r.match(Or)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},yp=function(t,e,n){var i="",r=(t+i).match(gs),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=sg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=rg(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(gs,"1").split(Or),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(gs),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},gs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in So)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),S1=/hsl[a]?\(/,og=function(t){var e=t.join(" "),n;if(gs.lastIndex=0,gs.test(e))return n=S1.test(e),t[1]=yp(t[1],n),t[0]=yp(t[0],n,rg(t[1])),!0},jo,Cn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(p){var m=s()-i,v=p===!0,x,y,E,T;if((m>t||m<0)&&(n+=m-e),i+=m,E=i-n,x=E-o,(x>0||v)&&(T=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,o+=x+(x>=r?4:r-x),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](E,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){F_&&(!Su&&vh()&&(di=Su=window,xh=di.document||{},Nn.gsap=En,(di.gsapVersions||(di.gsapVersions=[])).push(En.version),z_(fl||di.GreenSockGlobals||!di.gsap&&di||{}),ng.forEach(ig)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},jo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),jo=0,c=qo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,v){var x=m?function(y,E,T,b){p(y,E,T,b),h.remove(x)}:p;return h.remove(p),a[v?"unshift":"push"](x),no(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),no=function(){return!jo&&Cn.wake()},ie={},E1=/^[\d.\-M][\d.\-,\s]/,b1=/["']/g,w1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(b1,"").trim():+c,i=l.substr(a+1).trim();return e},T1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},A1=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[w1(e[1])]:T1(t).split(",").map(V_)):ie._CE&&E1.test(t)?ie._CE("",t):n},R1=function(t){return function(e){return 1-t(1-e)}},Qs=function(t,e){return t&&(Ae(t)?t:ie[t]||A1(t))||e},rr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return yn(t,function(a){ie[a]=Nn[a]=r,ie[o=a.toLowerCase()]=n;for(var l in r)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[a+"."+l]=r[l]}),r},ag=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Wc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Mu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*JA((u-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ag(a);return r=Mu/r,l.config=function(c,u){return s(t,c,u)},l},Xc=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ag(n);return i.config=function(r){return s(t,r)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;rr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;rr("Elastic",Wc("in"),Wc("out"),Wc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};rr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);rr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rr("Circ",function(s){return-(D_(1-s*s)-1)});rr("Sine",function(s){return s===1?1:-ZA(s*$A)+1});rr("Back",Xc("in"),Xc("out"),Xc());ie.SteppedEase=ie.steps=Nn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-he;return function(a){return((i*ra(0,o,a)|0)+r)*n}}};Wo.ease=ie["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Sh+=s+","+s+"Params,"});var lg=function(t,e){this.id=KA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:G_,this.set=e?e.getSetter:Rh},$o=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,eo(this,+e.duration,1,1),this.data=e.data,ge&&(this._ctx=ge,ge.data.push(this)),jo||Cn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(no(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zl(this,n),!r._dp||r.parent||q_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),H_(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?to(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ml(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Fl(this),l1(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(no(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ml(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=s1);var i=$e;return $e=n,bh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$e=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(kn(this,n),xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-he),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-he)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ae(n)?n:W_,l=function(){var u=i.then;i.then=null,r&&r(),Ae(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Mo(this)},s}();Un($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var gn=function(s){I_(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xn(n.sortChildren),Se&&xi(n.parent||Se,ki(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Y_(ki(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return No(0,arguments,this),this},e.from=function(i,r,o){return No(1,arguments,this),this},e.fromTo=function(i,r,o,a){return No(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Oo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ue(i,r,kn(this,o),1),this},e.call=function(i,r,o){return xi(this,Ue.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ue(i,o,kn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Oo(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},e.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Oo(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Me(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,v,x,y,E,T,b;if(this!==Se&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Me(u%p),u===l?(_=this._repeat,f=c):(E=Me(u/p),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=to(this._tTime,p),!a&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),T&&_&1&&(f=c-f,b=1),_!==E&&!this._lock){var O=T&&E&1,M=O===(T&&_&1);if(_<E&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Me(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=f1(this,Me(a),Me(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!E&&(Ln(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-he);break}}d=g}else{d=this._last;for(var A=i<0?i:f;d;){if(g=d._prev,(d._act||A<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,r,o||$e&&bh(d)),f!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=A?-he:he);break}}d=g}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-he)._zTime=f>=a?1:-1,this._ts))return this._start=y,Fl(this),this.render(i,r,o);this._onUpdate&&!r&&Ln(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ys(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Ln(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ki(r)||(r=kn(this,r,i)),!(i instanceof $o)){if(on(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qe(i))return this.addLabel(i,r);if(Ae(i))i=Ue.delayedCall(0,i);else return this}return this!==i?xi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ue?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return qe(i)?this.removeLabel(i):Ae(i)?this.killTweensOf(i):(i.parent===this&&Ul(this,i),i===this._recent&&(this._recent=this._last),Js(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(Cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=kn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ue.delayedCall(0,r||qo,o);return a.data="isPause",this._hasPause=1,xi(this,a,kn(this,i))},e.removePause=function(i){var r=this._first;for(i=kn(this,i);r;)r._start===i&&r.data==="isPause"&&ys(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)us!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Yn(i),l=this._first,c=Ki(r),u;l;)l instanceof Ue?r1(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=kn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ue.to(o,Un({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||he,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&eo(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Un({startAt:{time:kn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xp(this,kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xp(this,kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Me(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Js(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Js(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=qn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Me(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;eo(o,o===Se&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Se._ts&&(H_(Se,ml(i,Se)),k_=Cn.frame),Cn.frame>=mp){mp+=On.autoSleep||120;var r=Se._first;if((!r||!r._ts)&&On.autoSleep&&Cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Cn.sleep()}}},t}($o);Un(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var C1=function(t,e,n,i,r,o,a){var l=new Mn(this._pt,t,e,0,1,pg,null,r),c=0,u=0,h,f,d,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Yo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(Gc)||[];h=Gc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Vr(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(U_.test(i)||m)&&(l.e=0),this._pt=l,l},wh=function(t,e,n,i,r,o,a,l,c,u){Ae(i)&&(i=i(r||0,t,o));var h=t[e],f=n!=="get"?n:Ae(h)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ae(h)?c?O1:fg:Ah,g;if(qe(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(g=Vr(f,i)+(sn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Cu)return!isNaN(f*i)&&i!==""?(g=new Mn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?U1:dg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&yh(e,i),C1.call(this,t,e,f,i,d,l||On.stringFilter,c))},P1=function(t,e,n,i,r){if(Ae(t)&&(t=Uo(t,r,e,n,i)),!Ti(t)||t.style&&t.nodeType||on(t)||O_(t))return qe(t)?Uo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Uo(t[a],r,e,n,i);return o},cg=function(t,e,n,i,r,o){var a,l,c,u;if(Rn[t]&&(a=new Rn[t]).init(r,a.rawVars?e[t]:P1(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Mn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Nr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,Cu,Th=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!_h,y=t.timeline,E=i.easeReverse||h,T,b,O,M,A,k,G,F,L,U,I,X,H;if(y&&(!f||!r)&&(r="none"),t._ease=Qs(r,Wo.ease),t._rEase=E&&(Qs(E)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(F=p[0]?Zs(p[0]).harness:0,X=F&&i[F.prop],T=pl(i,Mh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ka:i1),_._lazy=0),o){if(ys(t._startAt=Ue.set(p,Un({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e||!a&&!d)&&t._startAt.revert(Ka),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),O=Un({overwrite:!1,data:"isFromStart",lazy:a&&!_&&xn(l),immediateRender:a,stagger:0,parent:m},T),X&&(O[F.prop]=X),ys(t._startAt=Ue.set(p,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e?t._startAt.revert(Ka):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&xn(l)||l&&!g,b=0;b<p.length;b++){if(A=p[b],G=A._gsap||Eh(p)[b]._gsap,t._ptLookup[b]=U={},Eu[G.id]&&_s.length&&dl(),I=v===p?b:v.indexOf(A),F&&(L=new F).init(A,X||T,t,I,v)!==!1&&(t._pt=M=new Mn(t._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function($){U[$]=M}),L.priority&&(k=1)),!F||X)for(O in T)Rn[O]&&(L=cg(O,T,t,I,A,v))?L.priority&&(k=1):U[O]=M=wh.call(t,A,O,"get",T[O],I,v,0,i.stringFilter);t._op&&t._op[b]&&t.kill(A,t._op[b]),x&&t._pt&&(us=t,Se.killTweensOf(A,U,t.globalTime(e)),H=!t.parent,us=0),t._pt&&l&&(Eu[G.id]=1)}k&&mg(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&y.render(qn,!0,!0)},L1=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Cu=1,t.vars[e]="+=0",Th(t,a),Cu=0,l?Xo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Le(n)+sn(h.e)),h.b&&(h.b=u.s+sn(h.b))},I1=function(t,e){var n=t[0]?Zs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Qr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},D1=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(on(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Uo=function(t,e,n,i,r){return Ae(t)?t.call(e,n,i,r):qe(t)&&~t.indexOf("random(")?Yo(t):t},ug=Sh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hg={};yn(ug+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return hg[s]=1});var Ue=function(s){I_(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Oo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Se,v=(on(n)||O_(n)?Ki(n[0]):"length"in i)?[n]:Yn(n),x,y,E,T,b,O,M,A;if(a._targets=v.length?Eh(v):Xo("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Xa(c)||Xa(u)){i=a.vars;var k=i.easeReverse||i.yoyoEase;if(x=a.timeline=new gn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),x.kill(),x.parent=x._dp=ki(a),x._start=0,f||Xa(c)||Xa(u)){if(T=v.length,M=f&&Z_(f),Ti(f))for(b in f)~ug.indexOf(b)&&(A||(A={}),A[b]=f[b]);for(y=0;y<T;y++)E=pl(i,hg),E.stagger=0,k&&(E.easeReverse=k),A&&Qr(E,A),O=v[y],E.duration=+Uo(c,ki(a),y,O,v),E.delay=(+Uo(u,ki(a),y,O,v)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(O,E,M?M(y,O,v):0),x._ease=ie.none;x.duration()?c=u=0:a.timeline=0}else if(g){Oo(Un(x.vars.defaults,{ease:"none"})),x._ease=Qs(g.ease||i.ease||"none");var G=0,F,L,U;if(on(g))g.forEach(function(I){return x.to(v,I,">")}),x.duration();else{E={};for(b in g)b==="ease"||b==="easeEach"||D1(b,g[b],E,g.easeEach);for(b in E)for(F=E[b].sort(function(I,X){return I.t-X.t}),G=0,y=0;y<F.length;y++)L=F[y],U={ease:L.e,duration:(L.t-(y?F[y-1].t:0))/100*c},U[b]=L.v,x.to(v,U,G),G+=U.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!_h&&(us=ki(a),Se.killTweensOf(v),us=0),xi(m,ki(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Me(m._time)&&xn(h)&&c1(ki(a))&&m.data!=="nested")&&(a._tTime=-he,a.render(Math.max(0,-u)||0)),p&&Y_(ki(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-he&&!u?l:i<he?0:i,f,d,g,_,p,m,v,x;if(!c)h1(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=Me(h%_),h===l?(g=this._repeat,f=c):(p=Me(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=to(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Me(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(j_(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var E=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!p&&(Ln(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&bu(this,i,r,o),Ln(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ln(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ys(this,1),!r&&!(u&&!a)&&(h||a||m)&&(Ln(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){jo||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Th(this,c),u=this._ease(c/this._dur),L1(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(zl(this,0),this.parent||X_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$e),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,us&&us.vars.overwrite!==!0)._first||Mo(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Yn(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&a1(a,l))return r==="all"&&(this._pt=0),Mo(this);for(h=this._op=this._op||[],r!=="all"&&(qe(r)&&(_={},yn(r,function(v){return _[v]=1}),r=_),r=I1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ul(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Mo(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return No(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return No(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Se.killTweensOf(i,r,o)},t}($o);Un(Ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(s){Ue[s]=function(){var t=new gn,e=Tu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ah=function(t,e,n){return t[e]=n},fg=function(t,e,n){return t[e](n)},O1=function(t,e,n,i){return t[e](i.fp,n)},N1=function(t,e,n){return t.setAttribute(e,n)},Rh=function(t,e){return Ae(t[e])?fg:gh(t[e])&&t.setAttribute?N1:Ah},dg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},U1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pg=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ch=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},F1=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},z1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ul(this,e,"_pt"):e.dep||(n=1),e=i;return!n},B1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},mg=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Mn=function(){function s(e,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||dg,this.d=l||this,this.set=c||Ah,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=B1,this.m=n,this.mt=r,this.tween=i},s}();yn(Sh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Mh[s]=1});Nn.TweenMax=Nn.TweenLite=Ue;Nn.TimelineLite=Nn.TimelineMax=gn;Se=new gn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=og;var tr=[],Ja={},k1=[],Mp=0,G1=0,qc=function(t){return(Ja[t]||k1).map(function(e){return e()})},Pu=function(){var t=Date.now(),e=[];t-Mp>2&&(qc("matchMediaInit"),tr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),qc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mp=t,qc("matchMedia"))},_g=function(){function s(e,n){this.selector=n&&Au(n),this.data=[],this._r=[],this.isReverted=!1,this.id=G1++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ae(n)&&(r=i,i=n,n=Ae);var o=this,a=function(){var c=ge,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Au(r)),ge=o,h=i.apply(o,arguments),Ae(h)&&o._r.push(h),ge=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ae?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ge;ge=null,n(this),ge=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ue&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ue)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=tr.length;o--;)tr[o].id===this.id&&tr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),H1=function(){function s(e){this.contexts=[],this.scope=e,ge&&ge.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ti(n)||(n={matches:n});var o=new _g(0,r||this.scope),a=o.conditions={},l,c,u;ge&&!o.selector&&(o.selector=ge.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(tr.indexOf(o)<0&&tr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pu):l.addEventListener("change",Pu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),_l={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ig(i)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,e){return Se.getTweensOf(t,e)},getProperty:function(t,e,n,i){qe(t)&&(t=Yn(t)[0]);var r=Zs(t||{}).get,o=n?W_:V_;return n==="native"&&(n=""),t&&(e?o((Rn[e]&&Rn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Rn[a]&&Rn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Yn(t),t.length>1){var i=t.map(function(u){return En.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=Rn[e],a=Zs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Nr._pt=0,h.init(t,n?u+n:u,Nr,0,[t]),h.render(1,h),Nr._pt&&Ch(1,Nr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=En.to(t,Un((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(e,l,c,u)};return o.tween=r,o},isTweening:function(t){return Se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Qs(t.ease,Wo.ease)),_p(Wo,t||{})},config:function(t){return _p(On,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!Nn[a]&&Xo(e+" effect requires "+a+" plugin.")}),Hc[e]=function(a,l,c){return n(Yn(a),Un(l||{},r),c)},o&&(gn.prototype[e]=function(a,l,c){return this.add(Hc[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=Qs(e)},parseEase:function(t,e){return arguments.length?Qs(t,e):ie},getById:function(t){return Se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new gn(t),i,r;for(n.smoothChildTiming=xn(t.smoothChildTiming),Se.remove(n),n._dp=0,n._time=n._tTime=Se._time,i=Se._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ue&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=r;return xi(Se,n,0),n},context:function(t,e){return t?new _g(t,e):ge},matchMedia:function(t){return new H1(t)},matchMediaRefresh:function(){return tr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Pu()},addEventListener:function(t,e){var n=Ja[t]||(Ja[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ja[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:x1,wrapYoyo:y1,distribute:Z_,random:Q_,snap:J_,normalize:v1,getUnit:sn,clamp:p1,splitColor:sg,toArray:Yn,selector:Au,mapRange:eg,pipe:_1,unitize:g1,interpolate:M1,shuffle:K_},install:z_,effects:Hc,ticker:Cn,updateRoot:gn.updateRoot,plugins:Rn,globalTimeline:Se,core:{PropTween:Mn,globals:B_,Tween:Ue,Timeline:gn,Animation:$o,getCache:Zs,_removeLinkedListItem:Ul,reverting:function(){return $e},context:function(t){return t&&ge&&(ge.data.push(t),t._ctx=ge),ge},suppressOverwrites:function(t){return _h=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _l[s]=Ue[s]});Cn.add(gn.updateRoot);Nr=_l.to({},{duration:0});var V1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},W1=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=V1(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Yc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qe(r)&&(l={},yn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}W1(a,r)}}}},En=_l.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)$e?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yc("roundProps",Ru),Yc("modifiers"),Yc("snap",J_))||_l;Ue.version=gn.version=En.version="3.15.0";F_=1;vh()&&no();ie.Power0;ie.Power1;ie.Power2;ie.Power3;ie.Power4;ie.Linear;ie.Quad;ie.Cubic;ie.Quart;ie.Quint;ie.Strong;ie.Elastic;ie.Back;ie.SteppedEase;ie.Bounce;ie.Sine;ie.Expo;ie.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sp,hs,Wr,Ph,Vs,Ep,Lh,X1=function(){return typeof window<"u"},Zi={},zs=180/Math.PI,Xr=Math.PI/180,Ar=Math.atan2,bp=1e8,Ih=/([A-Z])/g,q1=/(left|right|width|margin|padding|x)/i,Y1=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},K1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Z1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},J1=function(t,e,n){return t.style[e]=n},Q1=function(t,e,n){return t.style.setProperty(e,n)},tR=function(t,e,n){return t._gsap[e]=n},eR=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},nR=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},iR=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ee="transform",Sn=Ee+"Origin",sR=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Zi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Mi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[t]=o.x?o[t]:Hi(i,t),t===Sn&&(this.tfm.zOrigin=o.zOrigin);else return Mi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ee)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=Ee}(r||e)&&this.props.push(t,e,r[t])},xg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rR=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Ih,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Lh(),(!r||!r.isStart)&&!n[Ee]&&(xg(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},yg=function(t,e){var n={target:t,props:[],revert:rR,save:sR};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Mg,Iu=function(t,e){var n=hs.createElementNS?hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hs.createElement(t);return n&&n.style?n:hs.createElement(t)},In=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ih,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,io(e)||e,1)||""},wp="O,Moz,ms,Ms,Webkit".split(","),io=function(t,e,n){var i=e||Vs,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(wp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?wp[o]:"")+t},Du=function(){X1()&&window.document&&(Sp=window,hs=Sp.document,Wr=hs.documentElement,Vs=Iu("div")||{style:{}},Iu("div"),Ee=io(Ee),Sn=Ee+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mg=!!io("perspective"),Lh=En.core.reverting,Ph=1)},Tp=function(t){var e=t.ownerSVGElement,n=Iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Wr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Wr.removeChild(n),r},Ap=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Sg=function(t){var e,n;try{e=t.getBBox()}catch{e=Tp(t),n=1}return e&&(e.width||e.height)||n||(e=Tp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ap(t,["x","cx","x1"])||0,y:+Ap(t,["y","cy","y1"])||0,width:0,height:0}:e},Eg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sg(t))},Ms=function(t,e){if(e){var n=t.style,i;e in Zi&&e!==Sn&&(e=Ee),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ih,"-$1").toLowerCase())):n.removeAttribute(e)}},fs=function(t,e,n,i,r,o){var a=new Mn(t._pt,e,n,0,1,o?vg:gg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Rp={deg:1,rad:1,turn:1},oR={grid:1,flex:1},Ss=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vs.style,l=q1.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!r||Rp[i]||Rp[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),m=t.getCTM&&Eg(t),(d||o==="%")&&(Zi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Le(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Cn.time&&!p.uncache)return Le(r/p.width*h);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=h+i,g=t[u],v?t.style[e]=v:Ms(t,e)}else(d||o==="%")&&!oR[In(_,"display")]&&(a.position=In(t,"position")),_===t&&(a.position="static"),_.appendChild(Vs),g=Vs[u],_.removeChild(Vs),a.position="absolute";return l&&d&&(p=Zs(_),p.time=Cn.time,p.width=_[u]),Le(f?g*r/h:g&&r?h/g*r:0)},Hi=function(t,e,n,i){var r;return Ph||Du(),e in Mi&&e!=="transform"&&(e=Mi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Zi[e]&&e!=="transform"?(r=Zo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vl(In(t,Sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=gl[e]&&gl[e](t,e,n)||In(t,e)||G_(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ss(t,e,r,n)+n:r},aR=function(t,e,n,i){if(!n||n==="none"){var r=io(e,t,1),o=r&&In(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=In(t,"borderTopColor"))}var a=new Mn(this._pt,t.style,e,0,1,pg),l=0,c=0,u,h,f,d,g,_,p,m,v,x,y,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=In(t,e)||i,_?t.style[e]=_:Ms(t,e)),u=[n,i],og(u),n=u[0],i=u[1],f=n.match(Or)||[],E=i.match(Or)||[],E.length){for(;h=Or.exec(i);)p=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=Vr(d,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Or.lastIndex-x.length,x||(x=x||On.units[e]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(d=Ss(t,e,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?vg:gg;return U_.test(i)&&(a.e=0),this._pt=a,a},Cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lR=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Cp[n]||n,e[1]=Cp[i]||i,e.join(" ")},cR=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Zi[a]&&(l=1,a=a==="transformOrigin"?Sn:Ee),Ms(n,a);l&&(Ms(n,Ee),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Zo(n,1),o.uncache=1,xg(i)))}},gl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Mn(t._pt,e,n,0,0,cR);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ko=[1,0,0,1,0,0],bg={},wg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pp=function(t){var e=In(t,Ee);return wg(e)?Ko:e.substr(7).match(N_).map(Le)},Dh=function(t,e){var n=t._gsap||Zs(t),i=t.style,r=Pp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ko:r):(r===Ko&&!t.offsetParent&&t!==Wr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Wr.appendChild(t)),r=Pp(t),l?i.display=l:Ms(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Wr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ou=function(t,e,n,i,r,o){var a=t._gsap,l=r||Dh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],x=e.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,T,b,O,M;n?l!==Ko&&(b=d*p-g*_)&&(O=y*(p/b)+E*(-_/b)+(_*v-p*m)/b,M=y*(-g/b)+E*(d/b)-(d*v-g*m)/b,y=O,E=M):(T=Sg(t),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),E=T.y+(~(x[1]||x[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&a.smooth?(m=y-c,v=E-u,a.xOffset=h+(m*d+v*_)-m,a.yOffset=f+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Sn]="0px 0px",o&&(fs(o,a,"xOrigin",c,y),fs(o,a,"yOrigin",u,E),fs(o,a,"xOffset",h,a.xOffset),fs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},Zo=function(t,e){var n=t._gsap||new lg(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=In(t,Sn)||"0",u,h,f,d,g,_,p,m,v,x,y,E,T,b,O,M,A,k,G,F,L,U,I,X,H,$,st,ot,K,et,lt,gt;return u=h=f=_=p=m=v=x=y=0,d=g=1,n.svg=!!(t.getCTM&&Eg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ee]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ee]!=="none"?l[Ee]:"")),i.scale=i.rotate=i.translate="none"),b=Dh(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Ou(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,T=n.yOrigin||0,b!==Ko&&(k=b[0],G=b[1],F=b[2],L=b[3],u=U=b[4],h=I=b[5],b.length===6?(d=Math.sqrt(k*k+G*G),g=Math.sqrt(L*L+F*F),_=k||G?Ar(G,k)*zs:0,v=F||L?Ar(F,L)*zs+_:0,v&&(g*=Math.abs(Math.cos(v*Xr))),n.svg&&(u-=E-(E*k+T*F),h-=T-(E*G+T*L))):(gt=b[6],et=b[7],st=b[8],ot=b[9],K=b[10],lt=b[11],u=b[12],h=b[13],f=b[14],O=Ar(gt,K),p=O*zs,O&&(M=Math.cos(-O),A=Math.sin(-O),X=U*M+st*A,H=I*M+ot*A,$=gt*M+K*A,st=U*-A+st*M,ot=I*-A+ot*M,K=gt*-A+K*M,lt=et*-A+lt*M,U=X,I=H,gt=$),O=Ar(-F,K),m=O*zs,O&&(M=Math.cos(-O),A=Math.sin(-O),X=k*M-st*A,H=G*M-ot*A,$=F*M-K*A,lt=L*A+lt*M,k=X,G=H,F=$),O=Ar(G,k),_=O*zs,O&&(M=Math.cos(O),A=Math.sin(O),X=k*M+G*A,H=U*M+I*A,G=G*M-k*A,I=I*M-U*A,k=X,U=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Le(Math.sqrt(k*k+G*G+F*F)),g=Le(Math.sqrt(I*I+gt*gt)),O=Ar(U,I),v=Math.abs(O)>2e-4?O*zs:0,y=lt?1/(lt<0?-lt:lt):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wg(In(t,Ee)),X&&t.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Le(d),n.scaleY=Le(g),n.rotation=Le(_)+a,n.rotationX=Le(p)+a,n.rotationY=Le(m)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Sn]=vl(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?hR:Mg?Tg:uR,n.uncache=0,n},vl=function(t){return(t=t.split(" "))[0]+" "+t[1]},jc=function(t,e,n){var i=sn(e);return Le(parseFloat(e)+parseFloat(Ss(t,"x",n+"px",i)))+i},uR=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Tg(t,e)},Os="0deg",vo="0px",Ns=") ",Tg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,y="",E=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Os||u!==Os)){var T=parseFloat(u)*Xr,b=Math.sin(T),O=Math.cos(T),M;T=parseFloat(h)*Xr,M=Math.cos(T),o=jc(v,o,b*M*-x),a=jc(v,a,-Math.sin(T)*-x),l=jc(v,l,O*M*-x+x)}p!==vo&&(y+="perspective("+p+Ns),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(E||o!==vo||a!==vo||l!==vo)&&(y+=l!==vo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ns),c!==Os&&(y+="rotate("+c+Ns),u!==Os&&(y+="rotateY("+u+Ns),h!==Os&&(y+="rotateX("+h+Ns),(f!==Os||d!==Os)&&(y+="skew("+f+", "+d+Ns),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ns),v.style[Ee]=y||"translate(0, 0)"},hR=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(o),y=parseFloat(a),E,T,b,O,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xr,c*=Xr,E=Math.cos(l)*h,T=Math.sin(l)*h,b=Math.sin(l-c)*-f,O=Math.cos(l-c)*f,c&&(u*=Xr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,O*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,T*=M)),E=Le(E),T=Le(T),b=Le(b),O=Le(O)):(E=h,O=f,T=b=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Ss(d,"x",o,"px"),y=Ss(d,"y",a,"px")),(g||_||p||m)&&(x=Le(x+g-(g*E+_*b)+p),y=Le(y+_-(g*T+_*O)+m)),(i||r)&&(M=d.getBBox(),x=Le(x+i/100*M.width),y=Le(y+r/100*M.height)),M="matrix("+E+","+T+","+b+","+O+","+x+","+y+")",d.setAttribute("transform",M),v&&(d.style[Ee]=M)},fR=function(t,e,n,i,r){var o=360,a=qe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?zs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*bp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*bp)%o-~~(c/o)*o)),t._pt=f=new Mn(t._pt,e,n,i,c,j1),f.e=u,f.u="deg",t._props.push(n),f},Lp=function(t,e){for(var n in e)t[n]=e[n];return t},dR=function(t,e,n){var i=Lp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ee]=e,a=Zo(n,1),Ms(n,Ee),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ee],o[Ee]=e,a=Zo(n,1),o[Ee]=c);for(l in Zi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=sn(c),g=sn(u),h=d!==g?Ss(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Mn(t._pt,a,l,h,f-h,Lu),t._pt.u=g||0,t._props.push(l));Lp(a,i)};yn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});gl[t>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Hi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Ag={name:"css",register:Du,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,v,x,y,E,T,b,O,M;Ph||Du(),this.styles=this.styles||yg(t),O=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Rn[_]&&cg(_,e,n,i,t,r)))){if(d=typeof u,g=gl[_],d==="function"&&(u=u.call(n,i,t,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Yo(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",gs.lastIndex=0,gs.test(c)||(p=sn(c),m=sn(u),m?p!==m&&(c=Ss(t,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),O.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],qe(c)&&~c.indexOf("random(")&&(c=Yo(c)),sn(c+"")||c==="auto"||(c+=On.units[_]||sn(Hi(t,_))||""),(c+"").charAt(1)==="="&&(c=Hi(t,_))):c=Hi(t,_),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in Mi&&(_==="autoAlpha"&&(f===1&&Hi(t,"visibility")==="hidden"&&h&&(f=0),O.push("visibility",0,a.visibility),fs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Zi,x){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=In(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=u,u=In(t,"perspective"),A?t.style.perspective=A:Ms(t,"perspective")}h=parseFloat(u)}if(y||(E=t._gsap,E.renderTransform&&!e.parseTransform||Zo(t,e.parseTransform),T=e.smoothOrigin!==!1&&E.smooth,y=this._pt=new Mn(this._pt,a,Ee,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new Mn(this._pt,E,"scaleY",E.scaleY,(v?Vr(E.scaleY,v+h):h)-E.scaleY||0,Lu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(Sn,0,a[Sn]),u=lR(u),E.svg?Ou(t,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&fs(this,E,"zOrigin",E.zOrigin,m),fs(this,a,_,vl(c),vl(u)));continue}else if(_==="svgOrigin"){Ou(t,u,1,T,0,this);continue}else if(_ in bg){fR(this,E,_,f,v?Vr(f,v+u):u);continue}else if(_==="smoothOrigin"){fs(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){dR(this,u,t);continue}}else _ in a||(_=io(_)||_);if(x||(h||h===0)&&(f||f===0)&&!Y1.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=sn(u)||(_ in On.units?On.units[_]:p),p!==m&&(f=Ss(t,_,c,m)),this._pt=new Mn(this._pt,x?E:a,_,f,(v?Vr(f,v+h):h)-f,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Z1:Lu),this._pt.u=m||0,x&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=K1):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=$1);else if(_ in a)aR.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,i,r);else if(_!=="parseTransform"){yh(_,u);continue}x||(_ in a?O.push(_,0,a[_]):typeof t[_]=="function"?O.push(_,2,t[_]()):O.push(_,1,c||t[_])),o.push(_)}}b&&mg(this)},render:function(t,e){if(e.tween._time||!Lh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Hi,aliases:Mi,getSetter:function(t,e,n){var i=Mi[e];return i&&i.indexOf(",")<0&&(e=i),e in Zi&&e!==Sn&&(t._gsap.x||Hi(t,"x"))?n&&Ep===n?e==="scale"?eR:tR:(Ep=n||{})&&(e==="scale"?nR:iR):t.style&&!gh(t.style[e])?J1:~e.indexOf("-")?Q1:Rh(t,e)},core:{_removeProperty:Ms,_getMatrix:Dh}};En.utils.checkPrefix=io;En.core.getStyleSaver=yg;(function(s,t,e,n){var i=yn(s+","+t+","+e,function(r){Zi[r]=1});yn(t,function(r){On.units[r]="deg",bg[r]=1}),Mi[i[13]]=s+","+t,yn(n,function(r){var o=r.split(":");Mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){On.units[s]="px"});En.registerPlugin(Ag);var _e=En.registerPlugin(Ag)||En;_e.core.Tween;var ft=(s=>(s.EMPTY="empty",s.FLOOR="floor",s.START="start",s.GOAL="goal",s.PRESSURE_PLATE="pressure_plate",s.DIRECTION_SWITCH="direction_switch",s.COLOR_BARRIER="color_barrier",s.KEY="key",s.PUSHABLE="pushable",s.PORTAL="portal",s.FRAGILE="fragile",s.BRIDGE="bridge",s.DOOR="door",s))(ft||{}),Ye=(s=>(s.NORTH="north",s.SOUTH="south",s.EAST="east",s.WEST="west",s.UP="up",s.DOWN="down",s))(Ye||{}),_n=(s=>(s.FRONT="front",s.BACK="back",s.LEFT="left",s.RIGHT="right",s.TOP="top",s.BOTTOM="bottom",s))(_n||{});const pR={[_n.TOP]:"#f72585",[_n.BOTTOM]:"#4361ee",[_n.FRONT]:"#4cc9f0",[_n.BACK]:"#f8961e",[_n.LEFT]:"#7209b7",[_n.RIGHT]:"#f9c74f"};class mR{constructor(t,e=1){Te(this,"mesh");Te(this,"body");Te(this,"size");Te(this,"state");Te(this,"animationInProgress",!1);Te(this,"eventListeners",new Map);this.size=e,this.state={position:{...t},faceColors:{...pR},isMoving:!1},this.mesh=this.createMesh(),this.body=this.createBody(t)}createMesh(){const t=new ye(this.size,this.size,this.size),e=[];Object.values(this.state.faceColors).forEach(a=>{const l=new M_({color:new Vt(a),transparent:!0,opacity:.85,transmission:.3,roughness:.1,metalness:.1,clearcoat:1,clearcoatRoughness:.1,reflectivity:.9,ior:1.5,side:ji});e.push(l)});const n=new ne(t,e);n.castShadow=!0,n.receiveShadow=!0;const i=new y_(t),r=new uh({color:16777215,transparent:!0,opacity:.3}),o=new v_(i,r);return n.add(o),n.position.set(this.state.position.x,this.state.position.y,this.state.position.z),n}createBody(t){const e=new Ks(new R(this.size/2,this.size/2,this.size/2));return new Et({mass:1,position:new R(t.x,t.y,t.z),shape:e,linearDamping:.5,angularDamping:.5})}getMesh(){return this.mesh}getBody(){return this.body}getPosition(){return{...this.state.position}}isMoving(){return this.animationInProgress||this.state.isMoving}getFaceColor(t){return this.state.faceColors[t]}getCurrentBottomFace(){new Zr().setFromQuaternion(this.mesh.quaternion,"XYZ");const t=new W(0,1,0);t.applyQuaternion(this.mesh.quaternion);const e=.8;return t.y>e?_n.TOP:t.y<-e?_n.BOTTOM:t.x>e?_n.RIGHT:t.x<-e?_n.LEFT:t.z>e?_n.FRONT:t.z<-e?_n.BACK:_n.BOTTOM}canMove(t){return!this.animationInProgress}move(t,e){if(this.animationInProgress)return Promise.reject("Animation already in progress");this.animationInProgress=!0,this.state.isMoving=!0;const n=new W,i=Math.PI/2;switch(t){case Ye.NORTH:n.set(1,0,0);break;case Ye.SOUTH:n.set(-1,0,0);break;case Ye.EAST:n.set(0,0,-1);break;case Ye.WEST:n.set(0,0,1);break}const o={[Ye.NORTH]:{x:0,y:-this.size/2,z:this.size/2},[Ye.SOUTH]:{x:0,y:-this.size/2,z:-this.size/2},[Ye.EAST]:{x:this.size/2,y:-this.size/2,z:0},[Ye.WEST]:{x:-this.size/2,y:-this.size/2,z:0}}[t],a={...this.state.position};return new Promise(l=>{_e.to(this.mesh.position,{x:e.x,y:e.y,z:e.z,duration:.3,ease:"power2.inOut"}),new W(a.x+o.x,a.y+o.y,a.z+o.z);const c=this.mesh.quaternion.clone(),h=new xs().setFromAxisAngle(n,i).multiply(c);_e.to({},{duration:.3,ease:"power2.inOut",onUpdate:f=>{const d=c.clone().slerp(h,f);this.mesh.quaternion.copy(d)},onComplete:()=>{this.mesh.quaternion.copy(h),this.state.position={...e},this.animationInProgress=!1,this.state.isMoving=!1,this.emit("moveComplete",{direction:t,position:e}),l()}})})}teleport(t,e){if(this.state.position={...t},this.mesh.position.set(t.x,t.y,t.z),e){const n=new Zr(e.x*Math.PI/180,e.y*Math.PI/180,e.z*Math.PI/180);this.mesh.quaternion.setFromEuler(n)}this.emit("teleported",{position:t,rotation:e})}applyTeleportEffect(){return new Promise(t=>{this.mesh.material instanceof Es&&this.mesh.material.opacity,_e.to(this.mesh.scale,{x:.1,y:.1,z:.1,duration:.2,ease:"power2.in",onComplete:()=>{_e.to(this.mesh.scale,{x:1,y:1,z:1,duration:.2,ease:"power2.out",onComplete:t})}})})}playFallAnimation(){return new Promise(t=>{_e.to(this.mesh.position,{y:this.mesh.position.y-10,duration:.8,ease:"power2.in"}),_e.to(this.mesh.rotation,{x:this.mesh.rotation.x+Math.PI*2,z:this.mesh.rotation.z+Math.PI*2,duration:.8,ease:"power2.in",onComplete:t})})}on(t,e){this.eventListeners.has(t)||this.eventListeners.set(t,[]),this.eventListeners.get(t).push(e)}off(t,e){const n=this.eventListeners.get(t);if(n){const i=n.indexOf(e);i>-1&&n.splice(i,1)}}emit(t,e){const n=this.eventListeners.get(t);n&&n.forEach(i=>i(e))}reset(t){this.state.position={...t},this.state.isMoving=!1,this.animationInProgress=!1,this.mesh.position.set(t.x,t.y,t.z),this.mesh.rotation.set(0,0,0),this.mesh.scale.set(1,1,1)}}class _R{static createStandardMaterials(){return{floor:new xe({color:1710638,roughness:.8,metalness:.2,transparent:!0,opacity:.95}),start:new xe({color:5032432,roughness:.5,metalness:.3,emissive:5032432,emissiveIntensity:.3,transparent:!0,opacity:.95}),goal:new xe({color:16196997,roughness:.5,metalness:.3,emissive:16196997,emissiveIntensity:.5,transparent:!0,opacity:.95})}}static createTile(t,e=1){const n=this.createStandardMaterials(),i={x:t.x*e,y:t.y*e-e/4,z:t.z*e};let r;switch(t.type){case ft.START:r=this.createStartTile(t,i,n.start,e);break;case ft.GOAL:r=this.createGoalTile(t,i,n.goal,e);break;case ft.PRESSURE_PLATE:r=this.createPressurePlate(t,i,e);break;case ft.DIRECTION_SWITCH:r=this.createDirectionSwitch(t,i,e);break;case ft.COLOR_BARRIER:r=this.createColorBarrier(t,i,e);break;case ft.KEY:r=this.createKey(t,i,e);break;case ft.PUSHABLE:r=this.createPushable(t,i,e);break;case ft.PORTAL:r=this.createPortal(t,i,e);break;case ft.FRAGILE:r=this.createFragileTile(t,i,e);break;case ft.BRIDGE:r=this.createBridge(t,i,e);break;case ft.DOOR:r=this.createDoor(t,i,e);break;default:r=this.createFloorTile(t,i,n.floor,e)}return r}static createFloorTile(t,e,n,i){const r=new ye(i*.9,i*.2,i*.9),o=new ne(r,n.clone());o.position.set(e.x,e.y,e.z),o.receiveShadow=!0,o.castShadow=!1;const a=new y_(r),l=new uh({color:5032432,transparent:!0,opacity:.3}),c=new v_(a,l);return o.add(c),{id:t.id||`tile_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,isPassable:()=>!0}}static createStartTile(t,e,n,i){const r=this.createFloorTile(t,e,n,i),o=new Hr(i*.2,i*.2,i*.05,8),a=new xe({color:16777215,emissive:5032432,emissiveIntensity:.5,transparent:!0,opacity:.8}),l=new ne(o,a);return l.position.y=i*.15,l.castShadow=!0,r.mesh.add(l),_e.to(l.rotation,{y:Math.PI*2,duration:4,repeat:-1,ease:"none"}),r}static createGoalTile(t,e,n,i){const r=this.createFloorTile(t,e,n,i),o=new Io(i*.25,i*.05,8,16),a=new xe({color:16777215,emissive:16196997,emissiveIntensity:.8,transparent:!0,opacity:.9}),l=new ne(o,a);return l.position.y=i*.2,l.rotation.x=Math.PI/2,l.castShadow=!0,r.mesh.add(l),_e.to(l.scale,{x:1.2,y:1.2,z:1.2,duration:1,repeat:-1,yoyo:!0,ease:"sine.inOut"}),r}static createPressurePlate(t,e,n){const i=new ye(n*.8,n*.1,n*.8),r=new xe({color:16766720,roughness:.3,metalness:.7,emissive:16766720,emissiveIntensity:.2}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0,o.castShadow=!0;const a=new ye(n*.82,n*.12,n*.82),l=new Pr({color:16766720,wireframe:!0,transparent:!0,opacity:.5}),c=new ne(a,l);return o.add(c),{id:t.id||`plate_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,getLinkedTiles:()=>t.linkedTo||[],activate:function(){if(this.activated)return;this.activated=!0;const u=this.mesh.material;u.emissiveIntensity=.8,_e.to(this.mesh.position,{y:this.position.y-.05,duration:.2,ease:"power2.out"})},deactivate:function(){if(!this.activated)return;this.activated=!1;const u=this.mesh.material;u.emissiveIntensity=.2,_e.to(this.mesh.position,{y:this.position.y,duration:.2,ease:"power2.out"})},isPassable:()=>!0}}static createDirectionSwitch(t,e,n){const i=new Hr(n*.35,n*.35,n*.15,8),r=new xe({color:10181046,roughness:.4,metalness:.6,emissive:10181046,emissiveIntensity:.3}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.castShadow=!0,o.receiveShadow=!0;const a=new fh(n*.1,n*.15,4),l=new xe({color:16777215,emissive:10181046,emissiveIntensity:.5}),c=new ne(a,l);return c.position.y=n*.15,c.rotation.z=Math.PI/2,o.add(c),{id:t.id||`switch_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,getLinkedTiles:()=>t.linkedTo||[],activate:function(){this.activated=!0,_e.to(this.mesh.rotation,{y:this.mesh.rotation.y+Math.PI/2,duration:.3,ease:"power2.out"})},isPassable:()=>!0}}static createColorBarrier(t,e,n){const i=new ye(n*.9,n*.2,n*.9),r=new xe({color:1710638,roughness:.8,metalness:.2,transparent:!0,opacity:.95}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0;const a=t.color||"#ff0000",l=new ye(n*.85,n*1.5,n*.1),c=new M_({color:new Vt(a),transparent:!0,opacity:.6,transmission:.5,roughness:.1,metalness:.1,clearcoat:1,emissive:new Vt(a),emissiveIntensity:.3}),u=new ne(l,c);return u.position.y=n*.85,u.castShadow=!0,o.add(u),_e.to(c,{emissiveIntensity:.6,duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),{id:t.id||`barrier_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!0,broken:!1,collected:!1,getColor:()=>a,deactivate:function(){this.activated=!1,_e.to(u.scale,{y:0,duration:.5,ease:"power2.in"})},isPassable:function(){return!this.activated}}}static createKey(t,e,n){const i=new ye(n*.9,n*.2,n*.9),r=new xe({color:1710638,roughness:.8,metalness:.2,transparent:!0,opacity:.95}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0;const a=new Dr,l=new Io(n*.12,n*.03,8,16),c=new xe({color:16766720,roughness:.2,metalness:.9,emissive:16766720,emissiveIntensity:.4}),u=new ne(l,c);u.rotation.x=Math.PI/2,a.add(u);const h=new ye(n*.02,n*.15,n*.02),f=new ne(h,c);return f.position.y=-n*.075,a.add(f),a.position.y=n*.5,o.add(a),_e.to(a.rotation,{y:Math.PI*2,duration:3,repeat:-1,ease:"none"}),_e.to(a.position,{y:n*.6,duration:1,repeat:-1,yoyo:!0,ease:"sine.inOut"}),{id:t.id||`key_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,collect:function(){return new Promise(d=>{if(this.collected){d();return}this.collected=!0,_e.to(a.scale,{x:1.5,y:1.5,z:1.5,duration:.2,ease:"power2.out"}),_e.to(a.scale,{x:0,y:0,z:0,duration:.3,delay:.2,ease:"power2.in",onComplete:d})})},isPassable:()=>!0}}static createPushable(t,e,n){const i=new ye(n*.9,n*.2,n*.9),r=new xe({color:1710638,roughness:.8,metalness:.2}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0;const a=new ye(n*.8,n*.8,n*.8),l=new xe({color:8359053,roughness:.7,metalness:.3}),c=new ne(a,l);c.position.y=n*.5,c.castShadow=!0,c.receiveShadow=!0,o.add(c);const u=new ye(n*.6,n*.02,n*.6),h=new xe({color:9807270,roughness:.5,metalness:.5}),f=new ne(u,h);return f.position.y=n*.8,c.add(f),{id:t.id||`pushable_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,isPassable:()=>!1}}static createPortal(t,e,n){const i=t.color||"#4cc9f0",r=new ye(n*.9,n*.2,n*.9),o=new xe({color:1710638,roughness:.8,metalness:.2}),a=new ne(r,o);a.position.set(e.x,e.y,e.z),a.receiveShadow=!0;const l=new Dr,c=new Io(n*.35,n*.05,8,24),u=new xe({color:new Vt(i),roughness:.3,metalness:.8,emissive:new Vt(i),emissiveIntensity:.5}),h=new ne(c,u);h.rotation.x=Math.PI/2,h.position.y=n*.15,l.add(h);const f=new hh(n*.3,24),d=new Pr({color:new Vt(i),transparent:!0,opacity:.8,side:ti}),g=new ne(f,d);return g.rotation.x=Math.PI/2,g.position.y=n*.15,l.add(g),a.add(l),_e.to(h.rotation,{z:Math.PI*2,duration:4,repeat:-1,ease:"none"}),_e.to(g.scale,{x:.8,y:.8,duration:1,repeat:-1,yoyo:!0,ease:"sine.inOut"}),{id:t.id||`portal_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:a,position:e,data:t,activated:!0,broken:!1,collected:!1,getPortalPair:()=>t.portalPair||"",getColor:()=>i,isPassable:()=>!0}}static createFragileTile(t,e,n){const i=new ye(n*.9,n*.2,n*.9),r=new xe({color:15158332,roughness:.6,metalness:.2,transparent:!0,opacity:.9,emissive:15158332,emissiveIntensity:.1}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0,o.castShadow=!0;const a=new Il(n*.8,n*.8),l=new Pr({color:0,transparent:!0,opacity:.3,side:ti}),c=new ne(a,l);return c.rotation.x=-Math.PI/2,c.position.y=n*.11,o.add(c),_e.to(r,{emissiveIntensity:.3,duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),{id:t.id||`fragile_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:!1,broken:!1,collected:!1,break:function(){return new Promise(u=>{if(this.broken){u();return}this.broken=!0,_e.to(o.scale,{x:0,y:0,z:0,duration:.5,ease:"power2.in",onComplete:u})})},isPassable:function(){return!this.broken}}}static createBridge(t,e,n){const i=new ye(n*.9,n*.15,n*.9),r=new xe({color:3066993,roughness:.5,metalness:.3,emissive:3066993,emissiveIntensity:.2}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0,o.visible=t.activated||!1;const a=new ye(n*.92,n*.17,n*.92),l=new Pr({color:3066993,wireframe:!0,transparent:!0,opacity:.3}),c=new ne(a,l);return o.add(c),{id:t.id||`bridge_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:t.activated||!1,broken:!1,collected:!1,activate:function(){if(this.activated)return;this.activated=!0,this.mesh.visible=!0;const u=this.mesh.scale.clone();this.mesh.scale.set(0,0,0),_e.to(this.mesh.scale,{x:u.x,y:u.y,z:u.z,duration:.5,ease:"elastic.out(1, 0.5)"})},deactivate:function(){this.activated&&(this.activated=!1,_e.to(this.mesh.scale,{x:0,y:0,z:0,duration:.3,ease:"power2.in",onComplete:()=>{this.mesh.visible=!1}}))},isPassable:function(){return this.activated}}}static createDoor(t,e,n){const i=new ye(n*.9,n*.2,n*.9),r=new xe({color:1710638,roughness:.8,metalness:.2}),o=new ne(i,r);o.position.set(e.x,e.y,e.z),o.receiveShadow=!0;const a=new ye(n*.85,n*1.8,n*.2),l=new xe({color:9127187,roughness:.7,metalness:.2}),c=new ne(a,l);c.position.y=n*.9,c.castShadow=!0,o.add(c);const u=new Hr(n*.03,n*.03,n*.08,8),h=new xe({color:16766720,roughness:.3,metalness:.8}),f=new ne(u,h);f.rotation.z=Math.PI/2,f.position.set(n*.25,n*.9,n*.11),c.add(f);const d=new ye(n*.15,n*.1,n*.1),g=new xe({color:15158332,emissive:15158332,emissiveIntensity:.3,roughness:.5,metalness:.5}),_=new ne(d,g);return _.position.set(0,n*.2,n*.11),c.add(_),{id:t.id||`door_${t.x}_${t.y}_${t.z}`,type:t.type,mesh:o,position:e,data:t,activated:t.activated||!1,broken:!1,collected:!1,activate:function(){if(this.activated)return;this.activated=!0;const p=_.material;p.color.setHex(3066993),p.emissive.setHex(3066993),_e.to(c.rotation,{y:-Math.PI*.9,duration:.8,ease:"power2.out"})},isPassable:function(){return this.activated}}}}const gR={name:"第1关：初识滚动",description:"学习基本的滚动控制，到达终点",width:5,height:1,depth:5,startPosition:{x:0,y:1,z:0},goalPosition:{x:4,y:1,z:4},keysRequired:0,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FLOOR,x:1,y:0,z:0},{type:ft.FLOOR,x:2,y:0,z:0},{type:ft.FLOOR,x:2,y:0,z:1},{type:ft.FLOOR,x:2,y:0,z:2},{type:ft.FLOOR,x:3,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:3},{type:ft.GOAL,x:4,y:0,z:4}]},vR={name:"第2关：压力板与桥梁",description:"踩下压力板激活桥梁",width:7,height:1,depth:7,startPosition:{x:0,y:1,z:0},goalPosition:{x:6,y:1,z:6},keysRequired:0,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FLOOR,x:1,y:0,z:0},{type:ft.PRESSURE_PLATE,x:2,y:0,z:0,id:"plate1",linkedTo:["bridge1"]},{type:ft.FLOOR,x:2,y:0,z:1},{type:ft.FLOOR,x:2,y:0,z:2},{type:ft.BRIDGE,x:3,y:0,z:2,id:"bridge1",activated:!1},{type:ft.FLOOR,x:4,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:3},{type:ft.FLOOR,x:4,y:0,z:4},{type:ft.FLOOR,x:5,y:0,z:4},{type:ft.FLOOR,x:5,y:0,z:5},{type:ft.GOAL,x:6,y:0,z:6}]},xR={name:"第3关：收集钥匙",description:"收集钥匙打开屏障",width:8,height:1,depth:8,startPosition:{x:0,y:1,z:0},goalPosition:{x:7,y:1,z:7},keysRequired:2,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FLOOR,x:1,y:0,z:0},{type:ft.FLOOR,x:2,y:0,z:0},{type:ft.KEY,x:2,y:0,z:1,id:"key1"},{type:ft.FLOOR,x:2,y:0,z:2},{type:ft.FLOOR,x:3,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:2},{type:ft.KEY,x:4,y:0,z:3,id:"key2"},{type:ft.FLOOR,x:4,y:0,z:4},{type:ft.FLOOR,x:5,y:0,z:4},{type:ft.DOOR,x:6,y:0,z:4,id:"door1",activated:!1},{type:ft.FLOOR,x:6,y:0,z:5},{type:ft.FLOOR,x:6,y:0,z:6},{type:ft.GOAL,x:7,y:0,z:7}]},yR={name:"第4关：易碎方块",description:"小心！这些方块只能踩一次",width:7,height:1,depth:7,startPosition:{x:0,y:1,z:0},goalPosition:{x:6,y:1,z:6},keysRequired:0,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FRAGILE,x:1,y:0,z:0,id:"fragile1",fragile:!0,broken:!1},{type:ft.FRAGILE,x:2,y:0,z:0,id:"fragile2",fragile:!0,broken:!1},{type:ft.FLOOR,x:2,y:0,z:1},{type:ft.FRAGILE,x:2,y:0,z:2,id:"fragile3",fragile:!0,broken:!1},{type:ft.FRAGILE,x:3,y:0,z:2,id:"fragile4",fragile:!0,broken:!1},{type:ft.FLOOR,x:4,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:3},{type:ft.FRAGILE,x:4,y:0,z:4,id:"fragile5",fragile:!0,broken:!1},{type:ft.FRAGILE,x:5,y:0,z:4,id:"fragile6",fragile:!0,broken:!1},{type:ft.FRAGILE,x:5,y:0,z:5,id:"fragile7",fragile:!0,broken:!1},{type:ft.FLOOR,x:5,y:0,z:6},{type:ft.GOAL,x:6,y:0,z:6}]},MR={name:"第5关：传送门",description:"找到正确的传送门到达终点",width:9,height:1,depth:9,startPosition:{x:0,y:1,z:0},goalPosition:{x:8,y:1,z:8},keysRequired:0,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FLOOR,x:1,y:0,z:0},{type:ft.FLOOR,x:2,y:0,z:0},{type:ft.PORTAL,x:2,y:0,z:1,id:"portal1a",portalPair:"portal1b",color:"#4cc9f0"},{type:ft.FLOOR,x:2,y:0,z:2},{type:ft.FLOOR,x:3,y:0,z:2},{type:ft.PORTAL,x:4,y:0,z:2,id:"portal1b",portalPair:"portal1a",color:"#4cc9f0"},{type:ft.FLOOR,x:5,y:0,z:2},{type:ft.FLOOR,x:5,y:0,z:3},{type:ft.PORTAL,x:5,y:0,z:4,id:"portal2a",portalPair:"portal2b",color:"#f72585"},{type:ft.FLOOR,x:5,y:0,z:5},{type:ft.PORTAL,x:7,y:0,z:7,id:"portal2b",portalPair:"portal2a",color:"#f72585"},{type:ft.FLOOR,x:7,y:0,z:8},{type:ft.GOAL,x:8,y:0,z:8}]},SR={name:"第6关：综合挑战",description:"运用所有技巧通关",width:10,height:1,depth:10,startPosition:{x:0,y:1,z:0},goalPosition:{x:9,y:1,z:9},keysRequired:1,tiles:[{type:ft.START,x:0,y:0,z:0},{type:ft.FLOOR,x:1,y:0,z:0},{type:ft.PRESSURE_PLATE,x:2,y:0,z:0,id:"plate1",linkedTo:["bridge1"]},{type:ft.FLOOR,x:2,y:0,z:1},{type:ft.FRAGILE,x:2,y:0,z:2,id:"fragile1",fragile:!0,broken:!1},{type:ft.BRIDGE,x:3,y:0,z:2,id:"bridge1",activated:!1},{type:ft.FLOOR,x:4,y:0,z:2},{type:ft.FLOOR,x:4,y:0,z:3},{type:ft.KEY,x:4,y:0,z:4,id:"key1"},{type:ft.FLOOR,x:5,y:0,z:4},{type:ft.PORTAL,x:6,y:0,z:4,id:"portal1a",portalPair:"portal1b",color:"#4cc9f0"},{type:ft.PORTAL,x:6,y:0,z:7,id:"portal1b",portalPair:"portal1a",color:"#4cc9f0"},{type:ft.FLOOR,x:7,y:0,z:7},{type:ft.DOOR,x:8,y:0,z:7,id:"door1",activated:!1},{type:ft.FLOOR,x:8,y:0,z:8},{type:ft.GOAL,x:9,y:0,z:9}]},$c={1:gR,2:vR,3:xR,4:yR,5:MR,6:SR};class Nu{static loadLevel(t){const e=$c[t];return e?JSON.parse(JSON.stringify(e)):null}static getTotalLevels(){return Object.keys($c).length}static getLevelInfo(t){const e=$c[t];return e?{name:e.name,description:e.description}:null}}class ER{constructor(){Te(this,"container");Te(this,"renderer");Te(this,"physicsEngine");Te(this,"state");Te(this,"tileSize",1);this.container=this.createContainer(),this.renderer=new Sw(this.container),this.physicsEngine=new jA,this.state={isRunning:!1,isPaused:!1,currentLevel:1,keysCollected:0,totalKeys:0,cube:null,tiles:new Map,levelData:null,eventListeners:new Map,lastTime:0,animationId:null},this.setupControls(),this.createBackground()}createContainer(){const t=document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.pointerEvents="auto",document.body.appendChild(t),t}createBackground(){const e=new bn,n=new Float32Array(1e3*3),i=new Float32Array(1e3*3);for(let a=0;a<1e3;a++){n[a*3]=(Math.random()-.5)*200,n[a*3+1]=(Math.random()-.5)*200,n[a*3+2]=(Math.random()-.5)*200;const l=new Vt;l.setHSL(Math.random()*.3+.5,.8,.6),i[a*3]=l.r,i[a*3+1]=l.g,i[a*3+2]=l.b}e.setAttribute("position",new $n(n,3)),e.setAttribute("color",new $n(i,3));const r=new x_({size:.5,vertexColors:!0,transparent:!0,opacity:.6,blending:cu}),o=new _w(e,r);this.renderer.getScene().add(o)}setupControls(){window.addEventListener("keydown",t=>this.handleKeyDown(t))}handleKeyDown(t){if(!this.state.isRunning||this.state.isPaused||!this.state.cube||this.state.cube.isMoving())return;let e=null;switch(t.key.toLowerCase()){case"w":case"arrowup":e=Ye.NORTH;break;case"s":case"arrowdown":e=Ye.SOUTH;break;case"a":case"arrowleft":e=Ye.WEST;break;case"d":case"arrowright":e=Ye.EAST;break;case"escape":this.pause();return;case"r":this.resetLevel();return}e&&(t.preventDefault(),this.tryMove(e))}async tryMove(t){if(!this.state.cube||!this.state.levelData)return;const e=this.state.cube.getPosition(),n={x:Math.round(e.x/this.tileSize),y:Math.round(e.y/this.tileSize),z:Math.round(e.z/this.tileSize)},r={[Ye.NORTH]:{x:0,y:0,z:1},[Ye.SOUTH]:{x:0,y:0,z:-1},[Ye.EAST]:{x:1,y:0,z:0},[Ye.WEST]:{x:-1,y:0,z:0}}[t],o={x:n.x+r.x,y:n.y,z:n.z+r.z},a=this.getTileAt(o.x,o.y,o.z);if(!a){await this.state.cube.move(t,{x:o.x*this.tileSize,y:o.y*this.tileSize,z:o.z*this.tileSize}),await this.state.cube.playFallAnimation(),this.emit("gameOver");return}if(!a.isPassable||!a.isPassable())return;const l={x:o.x*this.tileSize,y:o.y*this.tileSize+this.tileSize/2,z:o.z*this.tileSize};await this.state.cube.move(t,l),await this.processTileInteraction(a,t)}async processTileInteraction(t,e){if(!(!this.state.cube||!this.state.levelData))switch(t.type){case ft.GOAL:this.state.keysCollected>=this.state.levelData.keysRequired&&this.emit("levelComplete");break;case ft.PRESSURE_PLATE:t.activate&&(t.activate(),this.emit("plateActivated",{tileId:t.id}),(t.getLinkedTiles?t.getLinkedTiles():[]).forEach(o=>{const a=this.state.tiles.get(o);a&&a.activate&&a.activate()}));break;case ft.KEY:!t.collected&&t.collect&&(await t.collect(),this.state.keysCollected++,this.emit("keysChanged",this.state.keysCollected,this.state.totalKeys),this.state.keysCollected>=this.state.levelData.keysRequired&&this.state.tiles.forEach(r=>{r.type===ft.DOOR&&r.activate&&r.activate()}));break;case ft.PORTAL:const n=t.getPortalPair?t.getPortalPair():"",i=this.findTileById(n);if(i){await this.state.cube.applyTeleportEffect();const r={x:i.position.x,y:i.position.y+this.tileSize/2,z:i.position.z};this.state.cube.teleport(r),this.emit("portalUsed",{from:t.id,to:n}),await this.state.cube.applyTeleportEffect()}break;case ft.FRAGILE:!t.broken&&t.break&&setTimeout(async()=>{await t.break()},500);break}}getTileAt(t,e,n){for(const i of this.state.tiles.values()){const r=Math.round(i.position.x/this.tileSize),o=Math.round(i.position.y/this.tileSize),a=Math.round(i.position.z/this.tileSize);if(r===t&&o===e&&a===n)return i}}findTileById(t){return this.state.tiles.get(t)}loadLevel(t){const e=Nu.loadLevel(t);if(!e)return!1;this.clearLevel(),this.state.levelData=e,this.state.currentLevel=t,this.state.keysCollected=0,this.state.totalKeys=e.tiles.filter(r=>r.type===ft.KEY).length,e.tiles.forEach(r=>{const o=_R.createTile(r,this.tileSize);this.state.tiles.set(o.id,o),this.renderer.addObject(o.id,o.mesh)});const n={x:e.startPosition.x*this.tileSize,y:e.startPosition.y*this.tileSize+this.tileSize/2,z:e.startPosition.z*this.tileSize};this.state.cube=new mR(n,this.tileSize),this.renderer.addObject("player_cube",this.state.cube.getMesh());const i=this.calculateLevelCenter(e);return this.renderer.setCameraPosition(i.x+12,i.y+15,i.z+12,i),this.emit("keysChanged",this.state.keysCollected,this.state.totalKeys),!0}calculateLevelCenter(t){if(t.tiles.length===0)return{x:0,y:0,z:0};let e=1/0,n=-1/0,i=1/0,r=-1/0,o=1/0,a=-1/0;return t.tiles.forEach(l=>{e=Math.min(e,l.x),n=Math.max(n,l.x),i=Math.min(i,l.y),r=Math.max(r,l.y),o=Math.min(o,l.z),a=Math.max(a,l.z)}),{x:(e+n)/2*this.tileSize,y:(i+r)/2*this.tileSize,z:(o+a)/2*this.tileSize}}clearLevel(){this.state.tiles.forEach(t=>{this.renderer.removeObject(t.id)}),this.state.tiles.clear(),this.state.cube&&(this.renderer.removeObject("player_cube"),this.state.cube=null),this.physicsEngine.reset()}start(){this.state.isRunning||(this.state.isRunning=!0,this.state.isPaused=!1,this.state.lastTime=performance.now(),this.gameLoop())}gameLoop(){if(!this.state.isRunning)return;const t=performance.now();this.state.lastTime=t,this.renderer.render(),this.state.animationId=requestAnimationFrame(()=>this.gameLoop())}pause(){this.state.isPaused=!0}resume(){this.state.isPaused=!1,this.state.lastTime=performance.now()}resetLevel(){this.state.levelData&&this.loadLevel(this.state.currentLevel)}on(t,e){this.state.eventListeners.has(t)||this.state.eventListeners.set(t,[]),this.state.eventListeners.get(t).push(e)}emit(t,...e){const n=this.state.eventListeners.get(t);n&&n.forEach(i=>i(...e))}getState(){return{currentLevel:this.state.currentLevel,keysCollected:this.state.keysCollected,totalKeys:this.state.totalKeys,isPaused:this.state.isPaused}}dispose(){this.state.isRunning=!1,this.state.animationId!==null&&cancelAnimationFrame(this.state.animationId),this.clearLevel(),this.physicsEngine.dispose(),this.renderer.dispose(),this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const bR={class:"main-menu"},wR={class:"menu-content"},TR={class:"level-select"},AR={class:"level-grid"},RR=["onClick"],CR={class:"level-number"},PR={class:"level-info"},LR=Zu({__name:"MainMenu",emits:["start"],setup(s,{emit:t}){const e=t,n=Cr([]);Ju(()=>{const r=Nu.getTotalLevels();for(let o=1;o<=r;o++){const a=Nu.getLevelInfo(o);a&&n.value.push({id:o,name:a.name,description:a.description})}});function i(r){e("start",r)}return(r,o)=>(hn(),Gn("div",bR,[zt("div",wR,[o[1]||(o[1]=zt("div",{class:"title-container"},[zt("h1",{class:"game-title"},"CUBE ROLL"),zt("p",{class:"game-subtitle"},"3D 滚动解谜游戏")],-1)),zt("div",TR,[o[0]||(o[0]=zt("h2",null,"选择关卡",-1)),zt("div",AR,[(hn(!0),Gn(mi,null,j0(n.value,a=>(hn(),Gn("div",{key:a.id,class:"level-card",onClick:l=>i(a.id)},[zt("div",CR,Ws(a.id),1),zt("div",PR,[zt("h3",null,Ws(a.name),1),zt("p",null,Ws(a.description),1)])],8,RR))),128))])]),o[2]||(o[2]=Dm('<div class="controls-info" data-v-e35d329d><h3 data-v-e35d329d>操作说明</h3><div class="controls-grid" data-v-e35d329d><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>W / ↑</span><span class="label" data-v-e35d329d>向北滚动</span></div><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>S / ↓</span><span class="label" data-v-e35d329d>向南滚动</span></div><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>A / ←</span><span class="label" data-v-e35d329d>向西滚动</span></div><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>D / →</span><span class="label" data-v-e35d329d>向东滚动</span></div><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>R</span><span class="label" data-v-e35d329d>重新开始</span></div><div class="control-item" data-v-e35d329d><span class="key" data-v-e35d329d>ESC</span><span class="label" data-v-e35d329d>暂停</span></div></div></div>',1))])]))}}),Rg=(s,t)=>{const e=s.__vccOpts||s;for(const[n,i]of t)e[n]=i;return e},IR=Rg(LR,[["__scopeId","data-v-e35d329d"]]),DR={class:"game-hud"},OR={class:"top-bar"},NR={class:"level-info"},UR={class:"level-number"},FR={key:0,class:"keys-info"},zR={class:"keys-text"},BR={class:"keys-count"},kR={class:"keys-bar"},GR={class:"top-buttons"},HR={key:0,class:"controls-hint"},VR={class:"hint-content"},WR={key:1,class:"pause-menu"},XR={class:"pause-content"},qR={class:"pause-buttons"},YR=Zu({__name:"GameHUD",props:{keysCollected:{},totalKeys:{},currentLevel:{},isPaused:{type:Boolean}},emits:["pause","resume","restart","menu"],setup(s,{emit:t}){const e=s,n=Cr(!1),i=au(()=>e.totalKeys===0?100:e.keysCollected/e.totalKeys*100),r=au(()=>`${e.keysCollected} / ${e.totalKeys}`);return(o,a)=>(hn(),Gn("div",DR,[zt("div",OR,[zt("div",NR,[a[8]||(a[8]=zt("span",{class:"level-label"},"关卡",-1)),zt("span",UR,Ws(s.currentLevel),1)]),s.totalKeys>0?(hn(),Gn("div",FR,[a[9]||(a[9]=zt("div",{class:"keys-icon"},"🔑",-1)),zt("div",zR,[zt("div",BR,Ws(r.value),1),zt("div",kR,[zt("div",{class:"keys-bar-fill",style:El({width:i.value+"%"})},null,4)])])])):Hs("",!0),zt("div",GR,[zt("button",{class:"hud-button",onClick:a[0]||(a[0]=l=>n.value=!n.value),title:"操作说明"}," 📖 "),zt("button",{class:"hud-button",onClick:a[1]||(a[1]=l=>o.$emit("restart")),title:"重新开始"}," 🔄 "),s.isPaused?(hn(),Gn("button",{key:1,class:"hud-button",onClick:a[3]||(a[3]=l=>o.$emit("resume")),title:"继续"}," ▶️ ")):(hn(),Gn("button",{key:0,class:"hud-button",onClick:a[2]||(a[2]=l=>o.$emit("pause")),title:"暂停"}," ⏸️ "))])]),n.value?(hn(),Gn("div",HR,[zt("div",VR,[a[10]||(a[10]=Dm('<h4 data-v-cebb6578>操作说明</h4><div class="hint-grid" data-v-cebb6578><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>W / ↑</span><span class="hint-text" data-v-cebb6578>向北滚动</span></div><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>S / ↓</span><span class="hint-text" data-v-cebb6578>向南滚动</span></div><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>A / ←</span><span class="hint-text" data-v-cebb6578>向西滚动</span></div><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>D / →</span><span class="hint-text" data-v-cebb6578>向东滚动</span></div><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>R</span><span class="hint-text" data-v-cebb6578>重新开始</span></div><div class="hint-item" data-v-cebb6578><span class="hint-key" data-v-cebb6578>ESC</span><span class="hint-text" data-v-cebb6578>暂停/继续</span></div></div>',2)),zt("button",{class:"close-hint",onClick:a[4]||(a[4]=l=>n.value=!1)},"✕")])])):Hs("",!0),s.isPaused?(hn(),Gn("div",WR,[zt("div",XR,[a[11]||(a[11]=zt("h2",null,"游戏暂停",-1)),zt("div",qR,[zt("button",{class:"primary-button",onClick:a[5]||(a[5]=l=>o.$emit("resume"))}," ▶️ 继续游戏 "),zt("button",{class:"secondary-button",onClick:a[6]||(a[6]=l=>o.$emit("restart"))}," 🔄 重新开始 "),zt("button",{class:"secondary-button",onClick:a[7]||(a[7]=l=>o.$emit("menu"))}," 🏠 返回菜单 ")])])])):Hs("",!0),a[12]||(a[12]=zt("div",{class:"bottom-hint"},[zt("span",{class:"hint-text"},"使用 WASD 或 方向键 控制立方体滚动")],-1))]))}}),jR=Rg(YR,[["__scopeId","data-v-cebb6578"]]),$R={class:"app-container"},KR={key:2,class:"game-overlay"},ZR={class:"overlay-content"},JR={key:3,class:"game-overlay"},QR=Zu({__name:"App",setup(s){const t=Cr("menu");let e=null;const n=Cr(0),i=Cr(0),r=Cr(1);function o(f=1){t.value="playing",r.value=f,e&&e.dispose(),e=new ER,e.loadLevel(f),e.on("keysChanged",(d,g)=>{n.value=d,i.value=g}),e.on("levelComplete",()=>{t.value="win"}),e.on("gameOver",()=>{t.value="lose"}),e.start()}function a(){t.value="paused",e==null||e.pause()}function l(){t.value="playing",e==null||e.resume()}function c(){t.value="menu",e==null||e.dispose(),e=null}function u(){o(r.value)}function h(){o(r.value+1)}return Ju(()=>{o(1)}),Qu(()=>{e==null||e.dispose()}),(f,d)=>(hn(),Gn("div",$R,[t.value==="menu"?(hn(),ru(IR,{key:0,onStart:o})):Hs("",!0),t.value==="playing"||t.value==="paused"?(hn(),ru(jR,{key:1,"keys-collected":n.value,"total-keys":i.value,"current-level":r.value,"is-paused":t.value==="paused",onPause:a,onResume:l,onRestart:u,onMenu:c},null,8,["keys-collected","total-keys","current-level","is-paused"])):Hs("",!0),t.value==="win"?(hn(),Gn("div",KR,[zt("div",ZR,[d[0]||(d[0]=zt("h2",null,"关卡完成！",-1)),zt("p",null,"恭喜你通过了第 "+Ws(r.value)+" 关",1),zt("div",{class:"overlay-buttons"},[zt("button",{onClick:h},"下一关"),zt("button",{onClick:u},"重玩"),zt("button",{onClick:c},"返回菜单")])])])):Hs("",!0),t.value==="lose"?(hn(),Gn("div",JR,[zt("div",{class:"overlay-content"},[d[1]||(d[1]=zt("h2",null,"游戏结束",-1)),d[2]||(d[2]=zt("p",null,"立方体掉落了！",-1)),zt("div",{class:"overlay-buttons"},[zt("button",{onClick:u},"重新开始"),zt("button",{onClick:c},"返回菜单")])])])):Hs("",!0)]))}});ox(QR).mount("#app");
