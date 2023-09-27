import{c as a,a6 as p,a5 as u,I as m}from"./index-80f7ab46.js";import{u as f,e as v}from"./page-c25bc1ae.js";const L=24;let h,d;h=o=>window.setTimeout(o,L),d=o=>window.clearTimeout(o);class S{constructor(t,e="",r=document.createElement("div")){this.el=t,this.container=r,this.onScrollMeasure=0,this.lastScrollPosition=0,this.lastScrollDirection=0,this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation=!1,this.onScroll=()=>{if(this.isHeavyAnimationInProgress){this.cancelMeasure(),this.needCheckAfterAnimation=!0;return}!this.onScrolledTop&&!this.onScrolledBottom&&!this.splitUp&&!this.onAdditionalScroll||this.onScrollMeasure||(this.onScrollMeasure=h(()=>{this.onScrollMeasure=0;const i=this.container[this.scrollProperty];this.lastScrollDirection=this.lastScrollPosition===i?0:this.lastScrollPosition<i?1:-1,this.lastScrollPosition=i,this.onAdditionalScroll&&this.onAdditionalScroll(),this.checkForTriggers&&this.checkForTriggers()}))},this.container.classList.add("scrollable"),this.log=p("SCROLL"+(e?"-"+e:""),u.Error),t&&(Array.from(t.children).forEach(i=>this.container.append(i)),t.append(this.container))}addScrollListener(){this.addedScrollListener||(this.addedScrollListener=!0,this.container.addEventListener("scroll",this.onScroll,{passive:!0,capture:!0}))}removeScrollListener(){this.addedScrollListener&&(this.addedScrollListener=!1,this.container.removeEventListener("scroll",this.onScroll,{capture:!0}))}setListeners(){this.removeHeavyAnimationListener||(window.addEventListener("resize",this.onScroll,{passive:!0}),this.addScrollListener(),this.removeHeavyAnimationListener=f(()=>{this.isHeavyAnimationInProgress=!0,this.onScrollMeasure&&(this.cancelMeasure(),this.needCheckAfterAnimation=!0)},()=>{this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation&&(this.onScroll(),this.needCheckAfterAnimation=!1)}))}removeListeners(){this.removeHeavyAnimationListener&&(window.removeEventListener("resize",this.onScroll),this.removeScrollListener(),this.removeHeavyAnimationListener(),this.removeHeavyAnimationListener=void 0)}destroy(){this.removeListeners(),this.onAdditionalScroll=void 0,this.onScrolledTop=void 0,this.onScrolledBottom=void 0}append(...t){this.container.append(...t)}scrollIntoViewNew(t){return v({...t,container:this.container})}cancelMeasure(){this.onScrollMeasure&&(d(this.onScrollMeasure),this.onScrollMeasure=0)}}class T extends S{constructor(t,e="",r=300,i){super(t,e),this.onScrollOffset=r,this.loadedAll={top:!0,bottom:!1},this.checkForTriggers=()=>{if(!this.onScrolledTop&&!this.onScrolledBottom)return;if(this.isHeavyAnimationInProgress){this.onScroll();return}const l=this.container.scrollHeight;if(!l)return;const n=this.container.clientHeight,s=l-n,c=this.lastScrollPosition;this.onScrolledTop&&c<=this.onScrollOffset&&this.lastScrollDirection<=0&&this.onScrolledTop(),this.onScrolledBottom&&s-c<=this.onScrollOffset&&this.lastScrollDirection>=0&&this.onScrolledBottom()},this.container.classList.add("scrollable-y"),this.setListeners(),this.scrollProperty="scrollTop"}attachBorderListeners(t=this.container){const e=this.onAdditionalScroll;this.onAdditionalScroll=()=>{e?.(),t.classList.toggle("scrolled-top",!this.scrollTop),t.classList.toggle("scrolled-bottom",this.isScrolledDown)},t.classList.add("scrolled-top","scrolled-bottom","scrollable-y-bordered")}setVirtualContainer(t){this.splitUp=t,this.log("setVirtualContainer:",t,this)}prepend(...t){(this.splitUp||this.padding||this.container).prepend(...t)}append(...t){(this.splitUp||this.padding||this.container).append(...t)}getDistanceToEnd(){return this.scrollHeight-Math.round(this.scrollTop+this.container.offsetHeight)}get isScrolledDown(){return this.getDistanceToEnd()<=1}set scrollTop(t){this.container.scrollTop=t}get scrollTop(){return this.container.scrollTop}setScrollTopSilently(t){this.lastScrollPosition=t,this.ignoreNextScrollEvent(),this.scrollTop=t}ignoreNextScrollEvent(){this.removeHeavyAnimationListener&&(this.removeScrollListener(),this.container.addEventListener("scroll",t=>{a(t),this.addScrollListener()},{capture:!0,passive:!1,once:!0}))}get scrollHeight(){return this.container.scrollHeight}}class H extends S{constructor(t,e="",r=300,i=15,l=document.createElement("div")){if(super(t,e,l),this.onScrollOffset=r,this.splitCount=i,this.container=l,this.container.classList.add("scrollable-x"),!m){const n=s=>{s.stopPropagation(),!s.deltaX&&this.container.scrollWidth>this.container.clientWidth&&(this.container.scrollLeft+=s.deltaY/4,a(s))};this.container.addEventListener("wheel",n,{passive:!1})}this.scrollProperty="scrollLeft"}}export{T as S,H as a};
//# sourceMappingURL=scrollable-18cb2728.js.map