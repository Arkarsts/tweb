!function(e){function t(t){for(var n,i,r=t[0],a=t[1],c=0,s=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);s.length;)s.shift()()}var n={},o={9:0};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({10:"npm.qr-code-styling"}[e]||e)+"."+{0:"21d5d411205331d85f06",1:"5511cde1b484a5e95737",2:"848ce417b3d1a85e317a",3:"6ab6ffbf69cc4dd6007f",4:"73aa1dcac0e094816dcf",5:"b3b831a7748bcddc821f",6:"4690e137c96547852bd8",7:"c27b62f53d76d0f1419e",8:"fb744672b1ba11af012e",10:"5535d5849534643ee3db",11:"3478a42a25bcd07ae491",12:"c870ec509ea95b56a32f",13:"5b3c9927344127205dbc",14:"9ad3df1e1ce8d8002e00",15:"73596cd33146091409c2",16:"8913e8d220e704763512",17:"ff412dd1a37531b558e0",18:"d86ace6cff0a476f3337",19:"f7359077de5597f65c17",20:"b28d0333dfdf315764c5",21:"b8a68f18168afbc4231d",22:"3953b7734f759c67a22f",23:"d53936828ef43aa90a7a",24:"88579dcbe3a40cc565a4",25:"37c928963d93bc2e62ed",26:"67d064a36a02266bd8ed",27:"2970baf2dd9c83520575",28:"e622ea67466cf0f439cf"}[e]+".chunk.js"}(e);var d=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var r=this.webpackJsonp=this.webpackJsonp||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=a;i(i.s=6)}([function(e,t,n){"use strict";n.r(t),n.d(t,"userAgent",(function(){return o})),n.d(t,"isApple",(function(){return i})),n.d(t,"isAndroid",(function(){return r})),n.d(t,"isChromium",(function(){return a})),n.d(t,"ctx",(function(){return c})),n.d(t,"isAppleMobile",(function(){return d})),n.d(t,"isSafari",(function(){return s})),n.d(t,"isFirefox",(function(){return u})),n.d(t,"isMobileSafari",(function(){return l})),n.d(t,"isMobile",(function(){return f}));const o=navigator?navigator.userAgent:null,i=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),r=-1!==navigator.userAgent.toLowerCase().indexOf("android"),a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),c="undefined"!=typeof window?window:self,d=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!c.MSStream,s=!!("safari"in c)||!(!o||!(/\b(iPad|iPhone|iPod)\b/.test(o)||o.match("Safari")&&!o.match("Chrome"))),u=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,l=s&&d,f=-1!=navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},function(e,t,n){"use strict";function o(e,t){return e.closest("."+t)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";t.a={id:1025907,hash:"452b0359b988148995f22ff0f4229750",version:"0.5.1",langPackVersion:"0.1.6",langPack:"macos",langPackCode:"en",domains:[],baseDcId:2}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n(1);function r(e){e.style.transform="translateY(-99999px)",e.focus(),setTimeout(()=>{e.style.transform=""},0)}var a=n(0),c=(n(3),n(4),n(5),function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{d(o.next(e))}catch(e){r(e)}}function c(e){try{d(o.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}d((o=o.apply(e,t||[])).next())}))});document.addEventListener("DOMContentLoaded",()=>c(void 0,void 0,void 0,(function*(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)});const e=window.visualViewport||window;let t,c=!1;const d=()=>{const n=.01*(c&&!m.default.overlayIsActive?e.height||e.innerHeight:window.innerHeight);t!==n&&(t=n,document.documentElement.style.setProperty("--vh",n+"px"))};window.addEventListener("resize",d),d();const s=new Proxy(Worker,{construct:(e,t)=>new e(t[0]+location.search)});Worker=s;const[u,l,f,m,h,p]=yield Promise.all([n.e(21).then(n.bind(null,106)),n.e(23).then(n.bind(null,18)),Promise.resolve().then(n.bind(null,0)),n.e(20).then(n.bind(null,9)),Promise.all([n.e(0),n.e(24)]).then(n.bind(null,15)),Promise.all([n.e(0),n.e(2),n.e(22)]).then(n.bind(null,8))]),b=()=>{c=1===v&&f.isSafari&&l.isTouchSupported&&!m.default.overlayIsActive,d(),e!==window&&(c?(window.removeEventListener("resize",d),e.addEventListener("resize",d)):(e.removeEventListener("resize",d),window.addEventListener("resize",d)))};let v;if(m.default.on("im_tab_change",e=>{const t=void 0!==v;v=e,(t||1===v)&&b()}),m.default.on("overlay_toggle",()=>{b()}),f.isApple){if(f.isSafari&&(document.documentElement.classList.add("is-safari"),f.isMobile&&l.isTouchSupported)){let e="clientY",t=0;const n={capture:!0,passive:!1},o=n=>{const o=n.touches[0],r=Object(i.a)(o.target,"scrollable-y");if(r){const i=o[e],a=t-i,c=r.scrollTop,d=r.scrollHeight,s=r.clientHeight,u=c?Math.round(c+r.clientHeight+a):c+a;(d===s||u>=d||u<=0)&&n.preventDefault()}else n.preventDefault()};document.addEventListener("focusin",i=>{c&&(r(i.target),document.addEventListener("touchmove",o,n),document.addEventListener("touchstart",n=>{if(n.touches.length>1)return;const o=n.touches[0];t=o[e]}))}),document.addEventListener("focusout",()=>{document.removeEventListener("touchmove",o,n)}),document.addEventListener("visibilitychange",()=>{c&&document.activeElement&&document.activeElement.blur&&r(document.activeElement)})}document.documentElement.classList.add("is-mac","emoji-supported"),f.isAppleMobile&&document.documentElement.classList.add("is-ios")}else f.isAndroid&&document.documentElement.classList.add("is-android");l.isTouchSupported?document.documentElement.classList.add("is-touch"):document.documentElement.classList.add("no-touch");const g=performance.now(),y=p.default.getCacheLangPack();const[P,w]=yield Promise.all([h.default.getState(),y]);function S(e,t){e.style.opacity="0",t.then(()=>{window.requestAnimationFrame(()=>{e.style.opacity=""})})}m.default.setThemeListener(),w.appVersion!==o.a.langPackVersion&&p.default.getLangPack(w.lang_code),console.log("got state, time:",performance.now()-g);const E=P.authState;if("authStateSignedIn"!==E._){console.log("Will mount auth page:",E._,Date.now()/1e3);const e=document.getElementById("auth-pages");let t,o;if(e){t=e.querySelector(".scrollable"),l.isTouchSupported&&!a.isMobileSafari||t.classList.add("no-scrollbar"),t.style.opacity="0";const n=document.createElement("div");n.classList.add("auth-placeholder"),t.prepend(n),t.append(n.cloneNode())}switch(E._){case"authStateSignIn":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,72))).default.mount();break;case"authStateSignQr":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(15)]).then(n.bind(null,79))).default.mount();break;case"authStateAuthCode":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,80))).default.mount(E.sentCode);break;case"authStatePassword":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,69))).default.mount();break;case"authStateSignUp":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,85))).default.mount(E.authCode)}if(t){o&&(yield o);S(t,"fonts"in document?document.fonts.ready:Promise.resolve())}}else console.log("Will mount IM page:",Date.now()/1e3),S(document.getElementById("main-columns"),"fonts"in document?Promise.all(["400 1rem Roboto","500 1rem Roboto"].map(e=>document.fonts.load(e))):Promise.resolve()),(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(26)]).then(n.bind(null,39))).default.mount();const L=(yield Promise.all([n.e(1),n.e(18)]).then(n.bind(null,19))).ripple;Array.from(document.getElementsByClassName("rp")).forEach(e=>L(e))})))}]);
//# sourceMappingURL=main.34b72bceeefe35e9ba35.bundle.js.map