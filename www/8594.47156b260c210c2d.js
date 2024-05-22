"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8594],{8594:(et,H,M)=>{M.r(H),M.d(H,{iosTransitionAnimation:()=>tt,shadow:()=>h});var o=M(9),J=M(191);const k=s=>document.querySelector(`${s}.ion-cloned-element`),h=s=>s.shadowRoot||s,G=s=>{const r="ION-TABS"===s.tagName?s:s.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=r){const e=r.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(c):null}return s.querySelector(c)},U=(s,r)=>{const c="ION-TABS"===s.tagName?s:s.querySelector("ion-tabs");let e=[];if(null!=c){const t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(e=t.querySelectorAll("ion-buttons"))}else e=s.querySelectorAll("ion-buttons");for(const t of e){const p=t.closest("ion-header"),i=p&&!p.classList.contains("header-collapse-condense-inactive"),u=t.querySelector("ion-back-button"),l=t.classList.contains("buttons-collapse");if(null!==u&&("start"===t.slot||""===t.slot)&&(l&&i&&r||!l))return u}return null},z=(s,r,c,e,t,p,i,u,l)=>{var y,E;const _=r?`calc(100% - ${t.right+4}px)`:t.left-4+"px",f=r?"right":"left",T=r?"left":"right",R=r?"right":"left",O=(null===(y=p.textContent)||void 0===y?void 0:y.trim())===(null===(E=u.textContent)||void 0===E?void 0:E.trim()),S=(l.height-Z)/i.height,b=O?`scale(${l.width/i.width}, ${S})`:`scale(${S})`,P="scale(1)",x=h(e).querySelector("ion-icon").getBoundingClientRect(),n=r?x.width/2-(x.right-t.right)+"px":t.left-x.width/2+"px",g=r?`-${window.innerWidth-t.right}px`:`${t.left}px`,$=`${l.top}px`,C=`${t.top}px`,I=c?[{offset:0,transform:`translate3d(${g}, ${C}, 0)`},{offset:1,transform:`translate3d(${n}, ${$}, 0)`}]:[{offset:0,transform:`translate3d(${n}, ${$}, 0)`},{offset:1,transform:`translate3d(${g}, ${C}, 0)`}],A=c?[{offset:0,opacity:1,transform:P},{offset:1,opacity:0,transform:b}]:[{offset:0,opacity:0,transform:b},{offset:1,opacity:1,transform:P}],X=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],L=(0,o.c)(),q=(0,o.c)(),w=(0,o.c)(),m=k("ion-back-button"),W=h(m).querySelector(".button-text"),D=h(m).querySelector("ion-icon");m.text=e.text,m.mode=e.mode,m.icon=e.icon,m.color=e.color,m.disabled=e.disabled,m.style.setProperty("display","block"),m.style.setProperty("position","fixed"),q.addElement(D),L.addElement(W),w.addElement(m),w.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).keyframes(I),L.beforeStyles({"transform-origin":`${f} top`}).beforeAddWrite(()=>{e.style.setProperty("display","none"),m.style.setProperty(f,_)}).afterAddWrite(()=>{e.style.setProperty("display",""),m.style.setProperty("display","none"),m.style.removeProperty(f)}).keyframes(A),q.beforeStyles({"transform-origin":`${T} center`}).keyframes(X),s.addAnimation([L,q,w])},j=(s,r,c,e,t,p,i,u)=>{var l,y;const E=r?"right":"left",_=r?`calc(100% - ${t.right}px)`:`${t.left}px`,T=`${t.top}px`,O=r?`-${window.innerWidth-u.right-8}px`:u.x-8+"px",S=u.y-2+"px",b=(null===(l=i.textContent)||void 0===l?void 0:l.trim())===(null===(y=e.textContent)||void 0===y?void 0:y.trim()),Y=u.height/(p.height-Z),x="scale(1)",n=b?`scale(${u.width/p.width}, ${Y})`:`scale(${Y})`,C=c?[{offset:0,opacity:0,transform:`translate3d(${O}, ${S}, 0) ${n}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${T}, 0) ${x}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${T}, 0) ${x}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${O}, ${S}, 0) ${n}`}],a=k("ion-title"),d=(0,o.c)();a.innerText=e.innerText,a.size=e.size,a.color=e.color,d.addElement(a),d.beforeStyles({"transform-origin":`${E} top`,height:`${t.height}px`,display:"",position:"relative",[E]:_}).beforeAddWrite(()=>{e.style.setProperty("opacity","0")}).afterAddWrite(()=>{e.style.setProperty("opacity",""),a.style.setProperty("display","none")}).keyframes(C),s.addAnimation(d)},tt=(s,r)=>{var c;try{const e="cubic-bezier(0.32,0.72,0,1)",t="opacity",p="transform",i="0%",l="rtl"===s.ownerDocument.dir,y=l?"-99.5%":"99.5%",E=l?"33%":"-33%",_=r.enteringEl,f=r.leavingEl,T="back"===r.direction,R=_.querySelector(":scope > ion-content"),O=_.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),N=_.querySelectorAll(":scope > ion-header > ion-toolbar"),S=(0,o.c)(),b=(0,o.c)();if(S.addElement(_).duration((null!==(c=r.duration)&&void 0!==c?c:0)||540).easing(r.easing||e).fill("both").beforeRemoveClass("ion-page-invisible"),f&&null!=s){const n=(0,o.c)();n.addElement(s),S.addAnimation(n)}if(R||0!==N.length||0!==O.length?(b.addElement(R),b.addElement(O)):b.addElement(_.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),S.addAnimation(b),T?b.beforeClearStyles([t]).fromTo("transform",`translateX(${E})`,`translateX(${i})`).fromTo(t,.8,1):b.beforeClearStyles([t]).fromTo("transform",`translateX(${y})`,`translateX(${i})`),R){const n=h(R).querySelector(".transition-effect");if(n){const g=n.querySelector(".transition-cover"),$=n.querySelector(".transition-shadow"),C=(0,o.c)(),a=(0,o.c)(),d=(0,o.c)();C.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(g).beforeClearStyles([t]).fromTo(t,0,.1),d.addElement($).beforeClearStyles([t]).fromTo(t,.03,.7),C.addAnimation([a,d]),b.addAnimation([C])}}const P=_.querySelector("ion-header.header-collapse-condense"),{forward:Y,backward:x}=((s,r,c,e,t)=>{const p=U(e,c),i=G(t),u=G(e),l=U(t,c),y=null!==p&&null!==i&&!c,E=null!==u&&null!==l&&c;if(y){const _=i.getBoundingClientRect(),f=p.getBoundingClientRect(),T=h(p).querySelector(".button-text"),R=T.getBoundingClientRect(),N=h(i).querySelector(".toolbar-title").getBoundingClientRect();j(s,r,c,i,_,N,T,R),z(s,r,c,p,f,T,R,i,N)}else if(E){const _=u.getBoundingClientRect(),f=l.getBoundingClientRect(),T=h(l).querySelector(".button-text"),R=T.getBoundingClientRect(),N=h(u).querySelector(".toolbar-title").getBoundingClientRect();j(s,r,c,u,_,N,T,R),z(s,r,c,l,f,T,R,u,N)}return{forward:y,backward:E}})(S,l,T,_,f);if(N.forEach(n=>{const g=(0,o.c)();g.addElement(n),S.addAnimation(g);const $=(0,o.c)();$.addElement(n.querySelector("ion-title"));const C=(0,o.c)(),a=Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),d=n.closest("ion-header"),I=null==d?void 0:d.classList.contains("header-collapse-condense-inactive");let v;v=a.filter(T?X=>{const L=X.classList.contains("buttons-collapse");return L&&!I||!L}:X=>!X.classList.contains("buttons-collapse")),C.addElement(v);const B=(0,o.c)();B.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const A=(0,o.c)();A.addElement(h(n).querySelector(".toolbar-background"));const F=(0,o.c)(),K=n.querySelector("ion-back-button");if(K&&F.addElement(K),g.addAnimation([$,C,B,A,F]),C.fromTo(t,.01,1),B.fromTo(t,.01,1),T)I||$.fromTo("transform",`translateX(${E})`,`translateX(${i})`).fromTo(t,.01,1),B.fromTo("transform",`translateX(${E})`,`translateX(${i})`),F.fromTo(t,.01,1);else if(P||$.fromTo("transform",`translateX(${y})`,`translateX(${i})`).fromTo(t,.01,1),B.fromTo("transform",`translateX(${y})`,`translateX(${i})`),A.beforeClearStyles([t,"transform"]),(null==d?void 0:d.translucent)?A.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):A.fromTo(t,.01,"var(--opacity)"),Y||F.fromTo(t,.01,1),K&&!Y){const L=(0,o.c)();L.addElement(h(K).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),g.addAnimation(L)}}),f){const n=(0,o.c)(),g=f.querySelector(":scope > ion-content"),$=f.querySelectorAll(":scope > ion-header > ion-toolbar"),C=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(g||0!==$.length||0!==C.length?(n.addElement(g),n.addElement(C)):n.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),S.addAnimation(n),T){n.beforeClearStyles([t]).fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)");const a=(0,J.g)(f);S.afterAddWrite(()=>{"normal"===S.getDirection()&&a.style.setProperty("display","none")})}else n.fromTo("transform",`translateX(${i})`,`translateX(${E})`).fromTo(t,1,.8);if(g){const a=h(g).querySelector(".transition-effect");if(a){const d=a.querySelector(".transition-cover"),I=a.querySelector(".transition-shadow"),v=(0,o.c)(),B=(0,o.c)(),A=(0,o.c)();v.addElement(a).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),B.addElement(d).beforeClearStyles([t]).fromTo(t,.1,0),A.addElement(I).beforeClearStyles([t]).fromTo(t,.7,.03),v.addAnimation([B,A]),n.addAnimation([v])}}$.forEach(a=>{const d=(0,o.c)();d.addElement(a);const I=(0,o.c)();I.addElement(a.querySelector("ion-title"));const v=(0,o.c)(),B=a.querySelectorAll("ion-buttons,[menuToggle]"),A=a.closest("ion-header"),F=null==A?void 0:A.classList.contains("header-collapse-condense-inactive"),K=Array.from(B).filter(W=>{const D=W.classList.contains("buttons-collapse");return D&&!F||!D});v.addElement(K);const X=(0,o.c)(),L=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");L.length>0&&X.addElement(L);const q=(0,o.c)();q.addElement(h(a).querySelector(".toolbar-background"));const w=(0,o.c)(),m=a.querySelector("ion-back-button");if(m&&w.addElement(m),d.addAnimation([I,v,X,w,q]),S.addAnimation(d),w.fromTo(t,.99,0),v.fromTo(t,.99,0),X.fromTo(t,.99,0),T){if(F||I.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),X.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)"),q.beforeClearStyles([t,"transform"]),(null==A?void 0:A.translucent)?q.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):q.fromTo(t,"var(--opacity)",0),m&&!x){const D=(0,o.c)();D.addElement(h(m).querySelector(".button-text")).fromTo("transform",`translateX(${i})`,`translateX(${(l?-124:124)+"px"})`),d.addAnimation(D)}}else F||I.fromTo("transform",`translateX(${i})`,`translateX(${E})`).fromTo(t,.99,0).afterClearStyles([p,t]),X.fromTo("transform",`translateX(${i})`,`translateX(${E})`).afterClearStyles([p,t]),w.afterClearStyles([t]),I.afterClearStyles([t]),v.afterClearStyles([t])})}return S}catch(e){throw e}},Z=10}}]);