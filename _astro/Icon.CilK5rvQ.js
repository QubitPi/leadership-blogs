import{e as A,a as mt,z as yt,b as bt,j as me,k as ye,s as wt}from"./zh_TW.Djjz5XKa.js";import{a3 as xt,w as We,z as be,A as W,B as we,a4 as St,v as T,J,K as It,L as Ct,M as Je,N as xe,O as X,W as Tt,a5 as Et,a6 as kt,Z as Se,Y as Ot,$ as N,H as Pt,a7 as At,a8 as jt,a9 as Lt,aa as Ft,ab as Ie,d as Mt,ac as Nt,ad as Rt,ae as Dt,af as Ce,ag as $t,ah as Bt,ai as zt,aj as Z,ak as O,al as H,am as qt,an as Te,h as m,ao as Xe,ap as ee,aq as Ze,x as Ht,R as Ut,ar as te,as as Vt,at as Qt,au as Gt,av as Kt,f as Yt,g as ne,aw as Wt,ax as Jt,ay as Ee,az as Xt,aA as Zt,aB as en,aC as tn,aD as nn,Q as rn,aE as sn,C as ke,aF as on,p as an,l as cn,n as fn,aG as Oe,X as Pe,a as R,b as ln,aH as G,t as Ae,c as et,m as D,i as un,r as dn}from"./render.DXsOrPE0.js";const pn="5";function ue(e){throw new Error("lifecycle_outside_component")}function je(e,t,n,r=null,o=!1){T&&J();var i=e,s=null,a=null,c=null;We((()=>{if(c===(c=!!t()))return;let e=!1;if(T){const t=i.data===It;c===t&&(i=Ct(),Je(i),xe(!1),e=!0)}c?(s?be(s):s=W((()=>n(i))),a&&we(a,(()=>{a=null}))):(a?be(a):r&&(a=W((()=>r(i)))),s&&we(s,(()=>{s=null}))),e&&xe(!0)}),o?St:0),T&&(i=X)}function hn(e,t,n,r,o){var i,s=e,a="";We((()=>{a!==(a=t()??"")?(void 0!==i&&(Pt(i),i=void 0),""!==a&&(i=W((()=>{if(T){X.data;for(var e=J(),t=e;null!==e&&(8!==e.nodeType||""!==e.data);)t=e,e=Tt(e);if(null===e)throw Et(),kt;return Se(X,t),void(s=Je(e))}var o=a+"";n&&(o=`<svg>${o}</svg>`);var i=Ot(o);if((n||r)&&(i=N(i)),Se(N(i),i.lastChild),n||r)for(;N(i);)s.before(N(i));else s.before(i)})))):T&&J()}))}function Mr(e){if(T){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;re(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var r=e.checked;re(e,"checked",null),e.checked=r}}};e.__on_r=n,At(n),jt()}}function re(e,t,n,r){var o=e.__attributes??={};T&&(o[t]=e.getAttribute(t),"src"===t||"srcset"===t||"href"===t&&"LINK"===e.nodeName)||o[t]!==(o[t]=n)&&("style"===t&&"__styles"in e&&(e.__styles={}),"loading"===t&&(e[Lt]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&tt(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Le(e,t,n,r,o=!1,i=!1,s=!1){var a=t||{},c="OPTION"===e.tagName;for(var l in t)l in n||(n[l]=null);var u=tt(e),f=e.__attributes??={},d=[];for(const r in n){let s=n[r];if(c&&"value"===r&&null==s)e.value=e.__value="",a[r]=s;else{var p=a[r];if(s!==p){a[r]=s;var h=r[0]+r[1];if("$$"!==h){if("on"===h){const n={},o="$$"+r;let i=r.slice(2);var g=$t(i);if(Ft(i)&&(i=i.slice(0,-7),n.capture=!0),!g&&p){if(null!=s)continue;e.removeEventListener(i,a[o],n),a[o]=null}if(null!=s)if(g)e[`__${i}`]=s,Mt([i]);else{let c=function(e){a[r].call(this,e)};t?a[o]=Ie(i,e,c,n):d.push([r,s,()=>a[o]=Ie(i,e,c,n)])}}else if("style"===r&&null!=s)e.style.cssText=s+"";else if("autofocus"===r)Nt(e,!!s);else if("__value"===r||"value"===r&&null!=s)e.value=e[r]=e.__value=s;else{var v=r;o||(v=Rt(v)),null!=s||i?u.includes(v)&&(i||"string"!=typeof s)?e[v]=s:"function"!=typeof s&&(T&&("src"===v||"href"===v||"srcset"===v)||re(e,v,s)):(f[r]=null,e.removeAttribute(r))}"style"===r&&"__styles"in e&&(e.__styles={})}}}}return t||Dt((()=>{if(e.isConnected)for(const[e,t,n]of d)a[e]===t&&n()})),a}typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(pn),xt();var Fe=new Map;function tt(e){var t=Fe.get(e.nodeName);if(t)return t;Fe.set(e.nodeName,t=[]);for(var n,r=Ce(e),o=Element.prototype;o!==r;){for(var i in n=Bt(r))n[i].set&&t.push(i);r=Ce(r)}return t}function gn(e=!1){const t=O,n=t.l.u;if(!n)return;let r=()=>Xe(t.s);if(e){let e=0,n={};const o=ee((()=>{let r=!1;const o=t.s;for(const e in o)o[e]!==n[e]&&(n[e]=o[e],r=!0);return r&&e++,e}));r=()=>m(o)}n.b.length&&zt((()=>{Me(t,r),Te(n.b)})),Z((()=>{const e=H((()=>n.m.map(qt)));return()=>{for(const t of e)"function"==typeof t&&t()}})),n.a.length&&Z((()=>{Me(t,r),Te(n.a)}))}function Me(e,t){if(e.l.s)for(const t of e.l.s)m(t);t()}function nt(e){null===O&&ue(),Ze&&null!==O.l?yn(O).m.push(e):Z((()=>{const t=H(e);if("function"==typeof t)return t}))}function vn(e){null===O&&ue(),nt((()=>()=>H(e)))}function _n(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function mn(){const e=O;return null===e&&ue(),(t,n,r)=>{const o=e.s.$$events?.[t];if(o){const i=Ht(o)?o.slice():[o],s=_n(t,n,r);for(const t of i)t.call(e.x,s);return!s.defaultPrevented}return!0}}function yn(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const bn={get(e,t){if(!e.exclude.includes(t))return m(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,n)=>(t in e.special||(e.special[t]=xn({get[t](){return e.props[t]}},t,sn)),e.special[t](n),te(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),te(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter((t=>!e.exclude.includes(t)))};function wn(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ut(0)},bn)}function Ne(e){for(var t=ke,n=ke;null!==t&&!(t.f&(Wt|Jt));)t=t.parent;try{return Ee(t),e()}finally{Ee(n)}}function xn(e,t,n,r){var o,i=!!(n&on),s=!Ze||!!(n&Xt),a=!!(n&Zt);o=e[t];var c,l=en in e||tn in e,u=Vt(e,t)?.set??(l&&a&&t in e?n=>e[t]=n:void 0),f=r,d=!0,p=!1,h=()=>(p=!0,d&&(d=!1,f=r),f);if(void 0===o&&void 0!==r&&(u&&s&&Qt(),o=h(),u&&u(o)),s)c=()=>{var n=e[t];return void 0===n?h():(d=!0,p=!1,n)};else{var g=Ne((()=>(i?ee:nn)((()=>e[t]))));g.f|=Gt,c=()=>{var e=m(g);return void 0!==e&&(f=void 0),void 0===e?f:e}}if(u){var v=e.$$legacy;return function(e,t){return arguments.length>0?(!(s&&t&&!v)&&u(t?c():e),e):c()}}var b=!1,y=rn(o),x=Ne((()=>ee((()=>{var e=c(),t=m(y);return b?(b=!1,t):y.v=e}))));return x.equals=Kt,function(e,t){if(arguments.length>0){const n=t?m(x):s&&a?Yt(e):e;return x.equals(n)||(b=!0,ne(y,n),p&&void 0!==f&&(f=n),H((()=>m(x)))),e}return m(x)}}const Sn=A,In={es:mt,en:A,en_us:A,en_gb:A,en_au:A,zh_cn:yt,zh_tw:bt,ja:me,ja_jp:me,ko:ye,ko_kr:ye};function Cn(e){return In[e.toLowerCase()]||Sn}function Nr(e){return Cn(wt.lang)[e]}const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,U=(e,t,n,r="")=>{const o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const e=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:e};return t&&!B(i)?null:i}const i=o[0],s=i.split("-");if(s.length>1){const e={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!B(e)?null:e}if(n&&""===r){const e={provider:r,prefix:"",name:i};return t&&!B(e,n)?null:e}return null},B=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(j)||!(t&&""===e.prefix||e.prefix.match(j))||!e.name.match(j)),rt=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...rt,...q}),se=Object.freeze({...V,body:"",hidden:!1});function Tn(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Re(e,t){const n=Tn(e,t);for(const r in se)r in q?r in e&&!(r in n)&&(n[r]=q[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function En(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);return Object.keys(n).concat(Object.keys(r)).forEach((function e(t){if(n[t])return o[t]=[];if(!(t in o)){o[t]=null;const n=r[t]&&r[t].parent,i=n&&e(n);i&&(o[t]=[n].concat(i))}return o[t]})),o}function kn(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(e){i=Re(r[e]||o[e],i)}return s(t),n.forEach(s),Re(e,i)}function st(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const r=En(e);for(const o in r){const i=r[o];i&&(t(o,kn(e,o,i)),n.push(o))}return n}const On={provider:"",aliases:{},not_found:{},...rt};function K(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ot(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons||!K(e,On))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e.match(j)||"string"!=typeof t.body||!K(t,se))return null}const r=t.aliases||Object.create(null);for(const e in r){const t=r[e],o=t.parent;if(!e.match(j)||"string"!=typeof o||!n[o]&&!r[o]||!K(t,se))return null}return t}const De=Object.create(null);function Pn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=De[e]||(De[e]=Object.create(null));return n[t]||(n[t]=Pn(e,t))}function de(e,t){return ot(t)?st(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}function An(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch{}return!1}let L=!1;function it(e){return"boolean"==typeof e&&(L=e),L}function jn(e){const t="string"==typeof e?U(e,!0,L):e;if(t){const e=k(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function Ln(e,t){const n=U(e,!0,L);if(!n)return!1;return An(k(n.provider,n.prefix),n.name,t)}function Fn(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),L&&!t&&!e.prefix){let t=!1;return ot(e)&&(e.prefix="",st(e,((e,n)=>{n&&Ln(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!B({provider:t,prefix:n,name:"a"}))return!1;return!!de(k(t,n),e)}const at=Object.freeze({width:null,height:null}),ct=Object.freeze({...at,...q}),Mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Nn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $e(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const r=e.split(Mn);if(null===r||!r.length)return e;const o=[];let i=r.shift(),s=Nn.test(i);for(;;){if(s){const e=parseFloat(i);isNaN(e)?o.push(i):o.push(Math.ceil(e*t*n)/n)}else o.push(i);if(i=r.shift(),void 0===i)return o.join("");s=!s}}function Rn(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),i=e.indexOf("</"+t);if(-1===o||-1===i)break;const s=e.indexOf(">",i);if(-1===s)break;n+=e.slice(o+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:n,content:e}}function Dn(e,t){return e?"<defs>"+e+"</defs>"+t:t}function $n(e,t,n){const r=Rn(e);return Dn(r.defs,t+r.content+n)}const Bn=e=>"unset"===e||"undefined"===e||"none"===e;function zn(e,t){const n={...V,...e},r={...ct,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach((e=>{const t=[],n=e.hFlip,r=e.vFlip;let s,a=e.rotate;switch(n?r?a+=2:(t.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),t.push("scale(-1 1)"),o.top=o.left=0):r&&(t.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),t.push("scale(1 -1)"),o.top=o.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:s=o.height/2+o.top,t.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:t.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:s=o.width/2+o.left,t.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}a%2==1&&(o.left!==o.top&&(s=o.left,o.left=o.top,o.top=s),o.width!==o.height&&(s=o.width,o.width=o.height,o.height=s)),t.length&&(i=$n(i,'<g transform="'+t.join(" ")+'">',"</g>"))}));const s=r.width,a=r.height,c=o.width,l=o.height;let u,f;null===s?(f=null===a?"1em":"auto"===a?l:a,u=$e(f,c/l)):(u="auto"===s?c:s,f=null===a?$e(u,l/c):"auto"===a?l:a);const d={},p=(e,t)=>{Bn(t)||(d[e]=t.toString())};p("width",u),p("height",f);const h=[o.left,o.top,c,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}const qn=/\sid="(\S+)"/g,Hn="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let Un=0;function Vn(e,t=Hn){const n=[];let r;for(;r=qn.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const r="function"==typeof t?t(n):t+(Un++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+r+o+"$3")})),e=e.replace(new RegExp(o,"g"),"")}const oe=Object.create(null);function Qn(e,t){oe[e]=t}function ie(e){return oe[e]||oe[""]}function pe(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const he=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;P.length>0;)1===P.length||Math.random()>.5?z.push(P.shift()):z.push(P.pop());function Gn(e,t){const n=pe(t);return null!==n&&(he[e]=n,!0)}function ge(e){return he[e]}he[""]=pe({resources:["https://api.iconify.design"].concat(z)});const Kn=()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch{}};let Be=Kn();function Yn(e,t){const n=ge(e);if(!n)return 0;let r;if(n.maxURL){let e=0;n.resources.forEach((t=>{e=Math.max(e,t.length)}));const o=t+".json?icons=";r=n.maxURL-e-n.path.length-o.length}else r=0;return r}function Wn(e){return 404===e}const Jn=(e,t,n)=>{const r=[],o=Yn(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach(((n,c)=>{a+=n.length+1,a>=o&&c>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=n.length),s.icons.push(n)})),r.push(s),r};function Xn(e){if("string"==typeof e){const t=ge(e);if(t)return t.path}return"/"}const Zn=(e,t,n)=>{if(!Be)return void n("abort",424);let r=Xn(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");r+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;r+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let o=503;Be(e+r).then((e=>{const t=e.status;if(200===t)return o=501,e.json();setTimeout((()=>{n(Wn(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",o)}))})).catch((()=>{n("next",o)}))},er={prepare:Jn,send:Zn};function tr(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let r={provider:"",prefix:"",name:""};return e.forEach((e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const o=e.provider,i=e.prefix,s=e.name,a=n[o]||(n[o]=Object.create(null)),c=a[i]||(a[i]=k(o,i));let l;l=s in c.icons?t.loaded:""===i||c.missing.has(s)?t.missing:t.pending;const u={provider:o,prefix:i,name:s};l.push(u)})),t}function ft(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}function nr(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach((t=>{const i=t.icons,s=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==o)return!0;const s=t.name;if(e.icons[s])i.loaded.push({provider:r,prefix:o,name:s});else{if(!e.missing.has(s))return n=!0,!0;i.missing.push({provider:r,prefix:o,name:s})}return!1})),i.pending.length!==s&&(n||ft([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}let rr=0;function sr(e,t,n){const r=rr++,o=ft.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),o}function or(e,t=!0,n=!1){const r=[];return e.forEach((e=>{const o="string"==typeof e?U(e,t,n):e;o&&r.push(o)})),r}var ir={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ar(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let t=e.resources.slice(0);for(s=[];t.length>1;){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let c,l="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function v(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function m(){l="failed",p.forEach((e=>{e(void 0,c)}))}function b(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(){if("pending"!==l)return;h();const r=s.shift();if(void 0===r)return d.length?void(f=setTimeout((()=>{h(),"pending"===l&&(b(),m())}),e.timeout)):void m();const o={status:"pending",resource:r,callback:(t,n)=>{!function(t,n,r){const o="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(o||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return c=r,void m();if(o)return c=r,void(d.length||(s.length?y():m()));if(h(),b(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(r)}))}(o,t,n)}};d.push(o),u++,f=setTimeout(y,e.rotate),n(r,t,o.callback)}return"function"==typeof r&&p.push(r),setTimeout(y),function(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:d.length,subscribe:v,abort:g}}}function lt(e){const t={...ir,...e};let n=[];function r(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,o,i){const s=ar(t,e,o,((e,t)=>{r(),i&&i(e,t)}));return n.push(s),s},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r}}function ze(){}const Y=Object.create(null);function cr(e){if(!Y[e]){const t=ge(e);if(!t)return;const n={config:t,redundancy:lt(t)};Y[e]=n}return Y[e]}function fr(e,t,n){let r,o;if("string"==typeof e){const t=ie(e);if(!t)return n(void 0,424),ze;o=t.send;const i=cr(e);i&&(r=i.redundancy)}else{const t=pe(e);if(t){r=lt(t);const n=ie(e.resources?e.resources[0]:"");n&&(o=n.send)}}return r&&o?r.query(t,o,n)().abort:(n(void 0,424),ze)}const qe="iconify2",F="iconify",ut=F+"-count",He=F+"-version",dt=36e5,lr=168,ur=50;function ae(e,t){try{return e.getItem(t)}catch{}}function ve(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ue(e,t){try{e.removeItem(t)}catch{}}function ce(e,t){return ve(e,ut,t.toString())}function fe(e){return parseInt(ae(e,ut))||0}const Q={local:!0,session:!0},pt={local:new Set,session:new Set};let _e=!1;function dr(e){_e=e}let $=typeof window>"u"?{}:window;function ht(e){const t=e+"Storage";try{if($&&$[t]&&"number"==typeof $[t].length)return $[t]}catch{}Q[e]=!1}function gt(e,t){const n=ht(e);if(!n)return;const r=ae(n,He);if(r!==qe){if(r){const e=fe(n);for(let t=0;t<e;t++)Ue(n,F+t.toString())}return ve(n,He,qe),void ce(n,0)}const o=Math.floor(Date.now()/dt)-lr,i=e=>{const r=F+e.toString(),i=ae(n,r);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>o&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch{}Ue(n,r)}};let s=fe(n);for(let t=s-1;t>=0;t--)i(t)||(t===s-1?(s--,ce(n,s)):pt[e].add(t))}function vt(){if(!_e){dr(!0);for(const e in Q)gt(e,(e=>{const t=e.data,n=k(e.provider,t.prefix);if(!de(n,t).length)return!1;const r=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,r):r,!0}))}}function pr(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const n in Q)gt(n,(n=>{const r=n.data;return n.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t}));return!0}function hr(e,t){function n(n){let r;if(!Q[n]||!(r=ht(n)))return;const o=pt[n];let i;if(o.size)o.delete(i=Array.from(o).shift());else if(i=fe(r),i>=50||!ce(r,i+1))return;const s={cached:Math.floor(Date.now()/dt),provider:e.provider,data:t};return ve(r,F+i.toString(),JSON.stringify(s))}_e||vt(),t.lastModified&&!pr(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}function Ve(){}function gr(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,nr(e)})))}function vr(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,r=e.iconsToLoad;let o;delete e.iconsToLoad,r&&(o=ie(t))&&o.prepare(t,n,r).forEach((n=>{fr(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=de(e,t);if(!n.length)return;const r=e.pendingIcons;r&&n.forEach((e=>{r.delete(e)})),hr(e,t)}catch(e){console.error(e)}gr(e)}))}))})))}const _r=(e,t)=>{const n=tr(or(e,!0,it()));if(!n.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(n.loaded,n.missing,n.pending,Ve)})),()=>{e=!1}}const r=Object.create(null),o=[];let i,s;return n.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===i)return;i=t,s=n,o.push(k(t,n));const a=r[t]||(r[t]=Object.create(null));a[n]||(a[n]=[])})),n.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,i=k(t,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(o)||(s.add(o),r[t][n].push(o))})),o.forEach((e=>{const{provider:t,prefix:n}=e;r[t][n].length&&vr(e,r[t][n])})),t?sr(t,n,o):Ve};function mr(e,t){const n={...e};for(const e in t){const r=t[e],o=typeof r;e in at?(null===r||r&&("string"===o||"number"===o))&&(n[e]=r):o===typeof n[e]&&(n[e]="rotate"===e?r%4:r)}return n}const yr=/[\s,]+/;function br(e,t){t.split(yr).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function wr(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o/=t,o%1==0?r(o):0)}}return t}function xr(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Sr(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ir(e){return"data:image/svg+xml,"+Sr(e)}function Cr(e){return'url("'+Ir(e)+'")'}const Qe={...ct,inline:!1},Tr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Er={display:"inline-block"},le={"background-color":"currentColor"},_t={"background-color":"transparent"},Ge={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ke={"-webkit-mask":le,mask:le,background:_t};for(const e in Ke){const t=Ke[e];for(const n in Ge)t[e+"-"+n]=Ge[n]}function kr(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Or(e,t){const n=mr(Qe,t),r=t.mode||"svg",o="svg"===r?{...Tr}:{};-1===e.body.indexOf("xlink:")&&delete o["xmlns:xlink"];let i="string"==typeof t.style?t.style:"";for(let e in t){const r=t[e];if(void 0!==r)switch(e){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[e]=!0===r||"true"===r||1===r;break;case"flip":"string"==typeof r&&br(n,r);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+r+"; ";break;case"rotate":"string"==typeof r?n[e]=wr(r):"number"==typeof r&&(n[e]=r);break;case"ariaHidden":case"aria-hidden":!0!==r&&"true"!==r&&delete o["aria-hidden"];break;default:if("on:"===e.slice(0,3))break;void 0===Qe[e]&&(o[e]=r)}}const s=zn(e,n),a=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===r){Object.assign(o,a),""!==i&&(o.style=i);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:o,body:Vn(s.body,n?()=>n+"ID"+e++:"iconifySvelte")}}const{body:c,width:l,height:u}=e,f="mask"===r||"bg"!==r&&-1!==c.indexOf("currentColor"),d={"--svg":Cr(xr(c,{...a,width:l+"",height:u+""}))},p=e=>{const t=a[e];t&&(d[e]=kr(t))};p("width"),p("height"),Object.assign(d,Er,f?le:_t);let h="";for(const e in d)h+=e+": "+d[e]+";";return o.style=h+i,{svg:!1,attributes:o}}if(it(!0),Qn("",er),typeof document<"u"&&typeof window<"u"){vt();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!Fn(e))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const r=t[e];if("object"!=typeof r||!r||void 0===r.resources)continue;Gn(e,r)||console.error(n)}catch{console.error(n)}}}}function Pr(e,t,n,r,o){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if("object"==typeof e&&null!==e&&"string"==typeof e.body)return t.name="",i(),{data:{...V,...e}};let s;if("string"!=typeof e||null===(s=U(e,!1,!0)))return i(),null;const a=jn(s);if(!a)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:_r([s],r)}),null;i(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const c=["iconify"];return""!==s.prefix&&c.push("iconify--"+s.prefix),""!==s.provider&&c.push("iconify--"+s.provider),{data:a,classes:c}}function Ye(e,t){return e?Or({...V,...e},t):null}var Ar=et("<svg><!></svg>"),jr=et("<span></span>");function Rr(e,t){const n=wn(t,["children","$$slots","$$events","$$legacy"]);an(t,!1);const r=D({name:"",loading:null,destroyed:!1});let o=D(!1),i=D(0),s=D();const a=e=>{"function"==typeof n.onLoad&&n.onLoad(e),mn()("load",{icon:e})};function c(){te(i)}nt((()=>{ne(o,!0)})),vn((()=>{G(r,m(r).destroyed=!0),m(r).loading&&(m(r).loading.abort(),G(r,m(r).loading=null))})),cn((()=>(m(i),Xe(n),m(r),m(o),m(s),Ye)),(()=>{m(i);const e=Pr(n.icon,m(r),m(o),c,a);ne(s,e?Ye(e.data,n):null),m(s)&&e.classes&&G(s,m(s).attributes.class=("string"==typeof n.class?n.class+" ":"")+e.classes.join(" "))})),fn(),gn();var l=Oe();je(Pe(l),(()=>m(s)),(e=>{var t=Oe();je(Pe(t),(()=>m(s).svg),(e=>{var t=Ar();let n;hn(un(t),(()=>m(s).body),!0,!1),dn(t),Ae((()=>n=Le(t,n,{...m(s).attributes},void 0,!0))),R(e,t)}),(e=>{var t=jr();let n;Ae((()=>n=Le(t,n,{...m(s).attributes}))),R(e,t)})),R(e,t)})),R(e,l),ln()}export{Rr as I,gn as a,hn as h,Nr as i,nt as o,Mr as r,re as s};