import{u as _,a as N,b as S,r as v,w as H,e as W,f as B,t as E,o as L}from"./entry-a0086d5e.mjs";var b;const p=typeof window!="undefined",X=e=>typeof e=="string",O=()=>{};p&&((b=window==null?void 0:window.navigator)==null?void 0:b.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Y(e){return typeof e=="function"?e():_(e)}function k(e){return e}function F(e){return N()?(S(e),!0):!1}function U(e){var t;const n=Y(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Q=p?window:void 0;p&&window.document;p&&window.navigator;p&&window.location;function c(...e){let t,n,i,s;if(X(e[0])?([n,i,s]=e,t=Q):[t,n,i,s]=e,!t)return O;let a=O;const l=H(()=>U(t),u=>{a(),u&&(u.addEventListener(n,i,s),a=()=>{u.removeEventListener(n,i,s),a=O})},{immediate:!0,flush:"post"}),r=()=>{l(),a()};return F(r),r}const w=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g="__vueuse_ssr_handlers__";w[g]=w[g]||{};w[g];function j(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:a=Q,eventFilter:l}=e,r=v(s.x),u=v(s.y),f=v(null),y=o=>{t==="page"?(r.value=o.pageX,u.value=o.pageY):t==="client"&&(r.value=o.clientX,u.value=o.clientY),f.value="mouse"},T=()=>{r.value=s.x,u.value=s.y},m=o=>{if(o.touches.length>0){const d=o.touches[0];t==="page"?(r.value=d.pageX,u.value=d.pageY):t==="client"&&(r.value=d.clientX,u.value=d.clientY),f.value="touch"}},h=o=>l===void 0?y(o):l(()=>y(o),{}),I=o=>l===void 0?m(o):l(()=>m(o),{});return a&&(c(a,"mousemove",h,{passive:!0}),c(a,"dragover",h,{passive:!0}),n&&(c(a,"touchstart",I,{passive:!0}),c(a,"touchmove",I,{passive:!0}),i&&c(a,"touchend",T,{passive:!0}))),{x:r,y:u,sourceType:f}}var x;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(x||(x={}));var A=Object.defineProperty,P=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&C(e,n,t[n]);if(P)for(var n of P(t))G.call(t,n)&&C(e,n,t[n]);return e};const V={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};R({linear:k},V);const M=W({__name:"index",setup(e){const{x:t,y:n}=j();return(i,s)=>(L(),B("div",null,"pos: "+E(_(t))+", "+E(_(n)),1))}});export{M as default};
