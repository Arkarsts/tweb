(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{19:function(e,t,n){"use strict";n.r(t),n.d(t,"ripple",(function(){return d}));var i=n(0),s=n(55),a=n(21),o=n(9);let r=0;function d(e,t=(()=>Promise.resolve()),n=null,d=!1){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let l=document.createElement("div");l.classList.add("c-ripple");let c;e.classList.contains("rp-square")&&l.classList.add("is-square"),e[d?"prepend":"append"](l);const u=(e,i)=>{const o=Date.now(),d=document.createElement("div"),u=r++,p=1e3*+window.getComputedStyle(l).getPropertyValue("--ripple-duration").replace("s","");c=()=>{let e=Date.now()-o;const t=()=>{s.a.mutate(()=>{d.remove()}),n&&n(u)};if(e<p){let n=Math.max(p-e,p/2);setTimeout(()=>d.classList.add("hiding"),Math.max(n-p/2,0)),setTimeout(t,n)}else d.classList.add("hiding"),setTimeout(t,p/2);a.isTouchSupported||window.removeEventListener("contextmenu",c),c=null,h=!1},t&&t(u),window.requestAnimationFrame(()=>{const t=l.getBoundingClientRect();d.classList.add("c-ripple__circle");const n=e-t.left,s=i-t.top,a=Math.sqrt(Math.pow(Math.abs(s-t.height/2)+t.height/2,2)+Math.pow(Math.abs(n-t.width/2)+t.width/2,2)),o=n-a/2,r=s-a/2;d.style.width=d.style.height=a+"px",d.style.left=o+"px",d.style.top=r+"px",l.append(d)})},p=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||Object(i.a)(t.target,"c-ripple")!==l);let h=!1;if(a.isTouchSupported){let t=()=>{c&&c()};e.addEventListener("touchstart",n=>{if(!o.default.settings.animationsEnabled)return;if(n.touches.length>1||h||p(n))return;h=!0;let{clientX:i,clientY:s}=n.touches[0];u(i,s),e.addEventListener("touchend",t,{once:!0}),window.addEventListener("touchmove",n=>{n.cancelBubble=!0,n.stopPropagation(),t(),e.removeEventListener("touchend",t)},{once:!0})},{passive:!0})}else e.addEventListener("mousedown",t=>{if(![0,2].includes(t.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===e.dataset.ripple||p(t))return;if(h)return void(h=!1);let{clientX:n,clientY:i}=t;u(n,i),window.addEventListener("mouseup",c,{once:!0,passive:!0}),window.addEventListener("contextmenu",c,{once:!0,passive:!0})},{passive:!0})}}}]);
//# sourceMappingURL=19.d858d134d38a7d9e00f7.chunk.js.map