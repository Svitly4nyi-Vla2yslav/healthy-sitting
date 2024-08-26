import{n as ne,c as Ro,s as re,L as Mo,a as nt,j as s,u as ot,A as Vn,b as Ce,d as Ao,e as $o,f as qn,g as Lo,_ as V,h as p,i as F,k as jo,T as Wn,l as se,m as zo,C as Do,o as ge,p as he,q as Re,r as vn,t as Gn,v as Te,w as we,x as xn,y as pe,z as q,B as de,D as fe,E as Yn,F as oe,G as _e,H as te,I as No,J as en,K as Kn,M as Oo,N as Bo,O as Ho,Q as Tt,R as Ct,S as qt,U as Uo,V as Xn,W as Wt,X as Fo,Y as _o,Z as jt,$ as Vo,a0 as qo,a1 as Wo,a2 as Z,a3 as Go,a4 as Yo,a5 as Ko,a6 as Xo,a7 as Ne,a8 as Jo,a9 as Zo,aa as Qo,ab as ei}from"./home-page-29449f56.js";import{b as vt,r as d,a as ye,e as dt}from"./react-vendor-742c876a.js";import{S as ti,C as ni}from"./contact-page-666dc188.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Gt={},bn=vt;Gt.createRoot=bn.createRoot,Gt.hydrateRoot=bn.hydrateRoot;const oi="/assets/RightGrotesk-CompactBlack-15afd6d8.ttf",ii="/assets/BiroScriptPlus-Bold-1f3fc1cc.ttf",ri="/assets/MessinaSansMono-Black-f2eba628.ttf",ai="/assets/Formular-Medium-109f9e00.ttf",si="/assets/Roboto-Regular-4e147ab6.ttf",li="/assets/d9fe41ee-4904-4a11-ba11-b61cd3be767f-171b97c0.woff2",ci={colors:{black:"#000000",blue:"#00baff",white:"#ffffff",lightBlue:"#66b2ff"},radiuses:{small:"4px",medium:"8px",large:"12px",round:"50%"},weights:{normal:400,semiBold:600,bold:700,black:900},fontSizes:{}},di=ne.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
`,ui=Ro`

:root {
  --font-family: "Right Grotesk", sans-serif;
  --second-family: "Messina Sans Mono", sans-serif;
  --third-family: "Biro Script Plus", sans-serif;
  --font3: "Formular", sans-serif;
  --font4: "Roboto", sans-serif;
  --textColorWhite: #fff;
}
@font-face {
  font-family: 'Roboto';
  // src: url(${si}) format('truetype');
}
  @font-face {
  font-family: 'Proxima';
  // src: url(${li}) format('truetype');
}

@font-face {
  font-family: 'Right Grotesk';
  src: url(${oi}) format('truetype');
}

@font-face {
  font-family: 'Messina Sans Mono';
  src: url(${ri}) format('truetype');
}

@font-face {
  font-family: 'Biro Script Plus';
  src: url(${ii}) format('truetype');
}

@font-face {
  font-family: 'Formular';
  src: url(${ai}) format('truetype');
}

@keyframes move {
  from {
    tranform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
  }
  body {
 font-family: 'Roboto', sans-serif;
  background-color: #01283c;
  background-size: auto 100%;
  background-position: center center;
  background-repeat: cover;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #111111;
  width: 100%;
  margin: 0;
  transition-duration: 300ms;
  overflow: hidden;
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }
  button:focus,
  button:hover {
    // background-color: lightgray; 
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.6); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
    text-decoration: none;
    color: #FFFFFF;
  }
 

  img {
    cursor: pointer;
    transition-duration: 300ms;
  }



  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
 {
  font-family: 'Messina Sans Mono';
    margin: 0;
    padding: 0;
    color: ${ci.colors.white};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
   
    }

    @keyframes move {
  from {
    tranform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}
 



`,pi=re.div`
border-top: 1px solid #00baff;
padding: 0 ;
margin: 0 auto;
width: 100%;
height: 100%;
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  text-align: start;

  @media screen and (min-width: 768px){
    text-align: center;
    display: flex;
        flex-direction: row;
        justify-content: space-between;
  }
`,zt=re.div`
padding: 20px 20px 50px 20px; 

`,fi=re.h2`
font-family: 'Roboto';
font-size: 20px;
text-align: start;
font-weight: bold;
  font-weight: bold;
transition: shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  shadow: 0 0 20px #00baff;
  color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`,yn=re.p`
text-align: center;
  font-weight: bold;

  padding-bottom: 10px;
`,Dt=re.p`
font-family: 'Roboto';
font-size: 12px;
text-align: start;
padding: 5px 5px;
display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    

    transition: shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  shadow: 0 0 20px #00baff;
  color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`,mi=re.div`
margin-bottom: 30px;
display: flex;
justify-content: center;
`,qe=re.a`
margin: 5px;
padding: 15px;
  transition: transform 0.3s ease, opacity 0.3s ease;
    &:focus,
    &:hover {
    transform: scale(2.1); /* Scale up on hover */
    opacity: 1.8; /* Reduce opacity on hover */
  }
  `;re.div`

`;re.p`

`;re.a`

`;const hi=re.div` 
padding: 20px;
 display: flex;
justify-content: flex-end;  
 border-bottom: 1px solid #00baff; 
 width: 100%;
    z-index: 999;
    background-color:  #fff;
`,gi=re.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`,Nt=re(Mo)`
  font-family: 'Right Grotesk';
  font-weight: 600;
  font-size: 20px;
  line-height: 119%;
  width: 40%;
  text-align: start;
  padding: 8px 16px;
  color: #1976d2;

  transition: color 0.6s, text-shadow 0.6s, filter 0.6s, background 0.6s;

  &:hover,
  &:focus {
    color: #00baff; 
    color: #00baff; 
  
    color: #00baff;
  
    filter: drop-shadow(10px 10px 15px #ff7f50);
  }
`,vi=re.div`
  position: fixed;
  background-color: #01283c;
  left: 0px;
  top: -12px;

  &:hover,
  &:focus {
    color: #00baff;
  }

    @media screen and (min-width: 882px){
top: 0px;
}
`;re.div`
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-inline-collapsed {
    width: 50px;
  }

  :where(.css-dev-only-do-not-override-m4timi).ant-menu-dark,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-dark > .ant-menu {
    color: rgba(255, 255, 255, 0.65);
    background: #00152900;
  }
`;const Jn=re.img`
  width: 200px;
  height:88px;
  transition: color 0.3s, filter 0.3s;

    @media screen and (max-width: 882px){
    width: 22vh;
    }

  &:hover,
  &:focus {
    color: #01cbe1;
    filter: drop-shadow(0 0 5px #01cbe1);
  }
`,Zn="/assets/logo_Systems-4b059761.webp",xi=nt(s.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),bi=nt(s.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),yi=nt(s.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),Ti=nt(s.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),Ci=nt(s.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),Si=()=>{const{t:e}=ot();return d.useEffect(()=>{Vn.init({duration:3e3})},[]),s.jsxs(pi,{children:[s.jsxs(zt,{children:[s.jsx(Ce,{to:"/home",children:s.jsx(Jn,{src:Zn,alt:"Logo",loading:"lazy"})}),s.jsx(yn,{"data-translate":"footerAdditionalText",children:e("Footer.footerAdditionalText")})]}),s.jsxs(zt,{children:[s.jsx(fi,{"data-translate":"usefulLinks",children:e("Footer.usefulLinks")}),s.jsx(Ce,{to:"/*",children:s.jsx(Dt,{"data-translate":"blog",children:e("Footer.blog")})}),s.jsx(Ce,{to:"/project",children:s.jsx(Dt,{"data-translate":"projects",children:e("Footer.projects")})}),s.jsx(Ce,{to:"/contact",children:s.jsx(Dt,{"data-translate":"contactUs",children:e("Footer.contactUs")})})]}),s.jsxs(zt,{children:[s.jsx(yn,{style:{borderBottom:"1px solid #00baff",width:140},"data-translate":"socialMedia",children:e("Footer.socialMedia")}),s.jsxs(mi,{children:[s.jsx(qe,{style:{color:"#1e90ff"},children:s.jsx(yi,{})}),s.jsx(qe,{children:s.jsx(bi,{style:{background:"linear-gradient(50deg, #ff7f50, #1e90ff)",borderRadius:8}})}),s.jsx(qe,{style:{color:"#1e90ff"},children:s.jsx(xi,{})}),s.jsx(qe,{style:{color:"red"},children:s.jsx(Ci,{})}),s.jsx(qe,{style:{color:"#1e90ff"},children:s.jsx(Ti,{})})]})]})]})},Pi=["className","component"];function wi(e={}){const{themeId:t,defaultTheme:n,defaultClassName:o="MuiBox-root",generateClassName:i}=e,r=Ao("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})($o);return d.forwardRef(function(c,u){const f=qn(n),m=Lo(c),{className:x,component:C="div"}=m,v=V(m,Pi);return s.jsx(r,p({as:C,ref:u,className:F(x,i?i(o):o),theme:t&&f[t]||f},v))})}const Ei=d.createContext(),Qn=()=>{const e=d.useContext(Ei);return e??!1};function it(){const e=qn(jo);return e[Wn]||e}const ki=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Tn=ki,Ii=se("MuiBox",["root"]),Ri=Ii,Mi=zo(),Ai=wi({themeId:Wn,defaultTheme:Mi,defaultClassName:Ri.root,generateClassName:Do.generate}),$i=Ai;function xt(e){return typeof e=="string"}function Li(e,t,n){return e===void 0||xt(e)?t:p({},t,{ownerState:p({},t.ownerState,n)})}function eo(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function ji(e,t,n){return typeof e=="function"?e(t,n):e}function Cn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function zi(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:i,className:r}=e;if(!t){const C=F(n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),v=p({},n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),P=p({},n,i,o);return C.length>0&&(P.className=C),Object.keys(v).length>0&&(P.style=v),{props:P,internalRef:void 0}}const a=eo(p({},i,o)),l=Cn(o),c=Cn(i),u=t(a),f=F(u==null?void 0:u.className,n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),m=p({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),x=p({},u,n,c,l);return f.length>0&&(x.className=f),Object.keys(m).length>0&&(x.style=m),{props:x,internalRef:u.ref}}const Di=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Fe(e){var t;const{elementType:n,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:r=!1}=e,a=V(e,Di),l=r?{}:ji(o,i),{props:c,internalRef:u}=zi(p({},a,{externalSlotProps:l})),f=ge(u,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return Li(n,p({},c,{ref:f}),i)}const Ni=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Oi(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Bi(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Hi(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Bi(e))}function Ui(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ni)).forEach((o,i)=>{const r=Oi(o);r===-1||!Hi(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function Fi(){return!0}function _i(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=Ui,isEnabled:a=Fi,open:l}=e,c=d.useRef(!1),u=d.useRef(null),f=d.useRef(null),m=d.useRef(null),x=d.useRef(null),C=d.useRef(!1),v=d.useRef(null),P=ge(t.ref,v),k=d.useRef(null);d.useEffect(()=>{!l||!v.current||(C.current=!n)},[n,l]),d.useEffect(()=>{if(!l||!v.current)return;const g=he(v.current);return v.current.contains(g.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),C.current&&v.current.focus()),()=>{i||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[l]),d.useEffect(()=>{if(!l||!v.current)return;const g=he(v.current),h=S=>{k.current=S,!(o||!a()||S.key!=="Tab")&&g.activeElement===v.current&&S.shiftKey&&(c.current=!0,f.current&&f.current.focus())},w=()=>{const S=v.current;if(S===null)return;if(!g.hasFocus()||!a()||c.current){c.current=!1;return}if(S.contains(g.activeElement)||o&&g.activeElement!==u.current&&g.activeElement!==f.current)return;if(g.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!C.current)return;let O=[];if((g.activeElement===u.current||g.activeElement===f.current)&&(O=r(v.current)),O.length>0){var B,A;const b=!!((B=k.current)!=null&&B.shiftKey&&((A=k.current)==null?void 0:A.key)==="Tab"),N=O[0],D=O[O.length-1];typeof N!="string"&&typeof D!="string"&&(b?D.focus():N.focus())}else S.focus()};g.addEventListener("focusin",w),g.addEventListener("keydown",h,!0);const E=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&w()},50);return()=>{clearInterval(E),g.removeEventListener("focusin",w),g.removeEventListener("keydown",h,!0)}},[n,o,i,a,l,r]);const y=g=>{m.current===null&&(m.current=g.relatedTarget),C.current=!0,x.current=g.target;const h=t.props.onFocus;h&&h(g)},$=g=>{m.current===null&&(m.current=g.relatedTarget),C.current=!0};return s.jsxs(d.Fragment,{children:[s.jsx("div",{tabIndex:l?0:-1,onFocus:$,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:P,onFocus:y}),s.jsx("div",{tabIndex:l?0:-1,onFocus:$,ref:f,"data-testid":"sentinelEnd"})]})}function Vi(e){return typeof e=="function"?e():e}const qi=d.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[a,l]=d.useState(null),c=ge(d.isValidElement(o)?o.ref:null,n);if(Re(()=>{r||l(Vi(i)||document.body)},[i,r]),Re(()=>{if(a&&!r)return vn(n,a),()=>{vn(n,null)}},[n,a,r]),r){if(d.isValidElement(o)){const u={ref:c};return d.cloneElement(o,u)}return s.jsx(d.Fragment,{children:o})}return s.jsx(d.Fragment,{children:a&&vt.createPortal(o,a)})});function Wi(e){const t=he(e);return t.body===e?Te(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function tt(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Sn(e){return parseInt(Te(e).getComputedStyle(e).paddingRight,10)||0}function Gi(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function Pn(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,a=>{const l=r.indexOf(a)===-1,c=!Gi(a);l&&c&&tt(a,i)})}function Ot(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function Yi(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Wi(o)){const a=Gn(he(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Sn(o)+a}px`;const l=he(o).querySelectorAll(".mui-fixed");[].forEach.call(l,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Sn(c)+a}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=he(o).body;else{const a=o.parentElement,l=Te(o);r=(a==null?void 0:a.nodeName)==="HTML"&&l.getComputedStyle(a).overflowY==="scroll"?a:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:a,property:l})=>{r?a.style.setProperty(l,r):a.style.removeProperty(l)})}}function Ki(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Xi{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&tt(t.modalRef,!1);const i=Ki(n);Pn(n,t.mount,t.modalRef,i,!0);const r=Ot(this.containers,a=>a.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=Ot(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=Yi(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Ot(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&tt(t.modalRef,n),Pn(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&tt(a.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ji(e){return typeof e=="function"?e():e}function Zi(e){return e?e.props.hasOwnProperty("in"):!1}const Qi=new Xi;function er(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=Qi,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:l,children:c,onClose:u,open:f,rootRef:m}=e,x=d.useRef({}),C=d.useRef(null),v=d.useRef(null),P=ge(v,m),[k,y]=d.useState(!f),$=Zi(c);let g=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(g=!1);const h=()=>he(C.current),w=()=>(x.current.modalRef=v.current,x.current.mount=C.current,x.current),E=()=>{i.mount(w(),{disableScrollLock:o}),v.current&&(v.current.scrollTop=0)},S=we(()=>{const R=Ji(t)||h().body;i.add(w(),R),v.current&&E()}),O=d.useCallback(()=>i.isTopModal(w()),[i]),B=we(R=>{C.current=R,R&&(f&&O()?E():v.current&&tt(v.current,g))}),A=d.useCallback(()=>{i.remove(w(),g)},[g,i]);d.useEffect(()=>()=>{A()},[A]),d.useEffect(()=>{f?S():(!$||!r)&&A()},[f,A,$,r,S]);const b=R=>L=>{var T;(T=R.onKeyDown)==null||T.call(R,L),!(L.key!=="Escape"||L.which===229||!O())&&(n||(L.stopPropagation(),u&&u(L,"escapeKeyDown")))},N=R=>L=>{var T;(T=R.onClick)==null||T.call(R,L),L.target===L.currentTarget&&u&&u(L,"backdropClick")};return{getRootProps:(R={})=>{const L=eo(e);delete L.onTransitionEnter,delete L.onTransitionExited;const T=p({},L,R);return p({role:"presentation"},T,{onKeyDown:b(T),ref:P})},getBackdropProps:(R={})=>{const L=R;return p({"aria-hidden":!0},L,{onClick:N(L),open:f})},getTransitionProps:()=>{const R=()=>{y(!1),a&&a()},L=()=>{y(!0),l&&l(),r&&A()};return{onEnter:xn(R,c==null?void 0:c.props.onEnter),onExited:xn(L,c==null?void 0:c.props.onExited)}},rootRef:P,portalRef:B,isTopModal:O,exited:k,hasTransition:$}}function tr(e){const{children:t,defer:n=!1,fallback:o=null}=e,[i,r]=d.useState(!1);return Re(()=>{n||r(!0)},[n]),d.useEffect(()=>{n&&r(!0)},[n]),s.jsx(d.Fragment,{children:i?t:o})}function Yt(e,t){return Yt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Yt(e,t)}function to(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yt(e,t)}const wn={disabled:!1},bt=ye.createContext(null);var nr=function(t){return t.scrollTop},Qe="unmounted",Me="exited",Ae="entering",Be="entered",Kt="exiting",Ee=function(e){to(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var a=i,l=a&&!a.isMounting?o.enter:o.appear,c;return r.appearStatus=null,o.in?l?(c=Me,r.appearStatus=Ae):c=Be:o.unmountOnExit||o.mountOnEnter?c=Qe:c=Me,r.state={status:c},r.nextCallback=null,r}t.getDerivedStateFromProps=function(i,r){var a=i.in;return a&&r.status===Qe?{status:Me}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var r=null;if(i!==this.props){var a=this.state.status;this.props.in?a!==Ae&&a!==Be&&(r=Ae):(a===Ae||a===Be)&&(r=Kt)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,r,a,l;return r=a=l=i,i!=null&&typeof i!="number"&&(r=i.exit,a=i.enter,l=i.appear!==void 0?i.appear:a),{exit:r,enter:a,appear:l}},n.updateStatus=function(i,r){if(i===void 0&&(i=!1),r!==null)if(this.cancelNextCallback(),r===Ae){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:dt.findDOMNode(this);a&&nr(a)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Me&&this.setState({status:Qe})},n.performEnter=function(i){var r=this,a=this.props.enter,l=this.context?this.context.isMounting:i,c=this.props.nodeRef?[l]:[dt.findDOMNode(this),l],u=c[0],f=c[1],m=this.getTimeouts(),x=l?m.appear:m.enter;if(!i&&!a||wn.disabled){this.safeSetState({status:Be},function(){r.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:Ae},function(){r.props.onEntering(u,f),r.onTransitionEnd(x,function(){r.safeSetState({status:Be},function(){r.props.onEntered(u,f)})})})},n.performExit=function(){var i=this,r=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:dt.findDOMNode(this);if(!r||wn.disabled){this.safeSetState({status:Me},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Kt},function(){i.props.onExiting(l),i.onTransitionEnd(a.exit,function(){i.safeSetState({status:Me},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,r){r=this.setNextCallback(r),this.setState(i,r)},n.setNextCallback=function(i){var r=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,r.nextCallback=null,i(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(i,r){this.setNextCallback(r);var a=this.props.nodeRef?this.props.nodeRef.current:dt.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=c[0],f=c[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Qe)return null;var r=this.props,a=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var l=V(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ye.createElement(bt.Provider,{value:null},typeof a=="function"?a(i,l):ye.cloneElement(ye.Children.only(a),l))},t}(ye.Component);Ee.contextType=bt;Ee.propTypes={};function Oe(){}Ee.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Oe,onEntering:Oe,onEntered:Oe,onExit:Oe,onExiting:Oe,onExited:Oe};Ee.UNMOUNTED=Qe;Ee.EXITED=Me;Ee.ENTERING=Ae;Ee.ENTERED=Be;Ee.EXITING=Kt;const tn=Ee;function or(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nn(e,t){var n=function(r){return t&&d.isValidElement(r)?t(r):r},o=Object.create(null);return e&&d.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function ir(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var a,l={};for(var c in t){if(o[c])for(a=0;a<o[c].length;a++){var u=o[c][a];l[o[c][a]]=n(u)}l[c]=n(c)}for(a=0;a<i.length;a++)l[i[a]]=n(i[a]);return l}function Le(e,t,n){return n[t]!=null?n[t]:e.props[t]}function rr(e,t){return nn(e.children,function(n){return d.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Le(n,"appear",e),enter:Le(n,"enter",e),exit:Le(n,"exit",e)})})}function ar(e,t,n){var o=nn(e.children),i=ir(t,o);return Object.keys(i).forEach(function(r){var a=i[r];if(d.isValidElement(a)){var l=r in t,c=r in o,u=t[r],f=d.isValidElement(u)&&!u.props.in;c&&(!l||f)?i[r]=d.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:Le(a,"exit",e),enter:Le(a,"enter",e)}):!c&&l&&!f?i[r]=d.cloneElement(a,{in:!1}):c&&l&&d.isValidElement(u)&&(i[r]=d.cloneElement(a,{onExited:n.bind(null,a),in:u.props.in,exit:Le(a,"exit",e),enter:Le(a,"enter",e)}))}}),i}var sr=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},lr={component:"div",childFactory:function(t){return t}},on=function(e){to(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var a=r.handleExited.bind(or(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var a=r.children,l=r.handleExited,c=r.firstRender;return{children:c?rr(i,l):ar(i,a,l),firstRender:!1}},n.handleExited=function(i,r){var a=nn(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(l){var c=p({},l.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,r=i.component,a=i.childFactory,l=V(i,["component","childFactory"]),c=this.state.contextValue,u=sr(this.state.children).map(a);return delete l.appear,delete l.enter,delete l.exit,r===null?ye.createElement(bt.Provider,{value:c},u):ye.createElement(bt.Provider,{value:c},ye.createElement(r,l,u))},t}(ye.Component);on.propTypes={};on.defaultProps=lr;const cr=on,rn=e=>e.scrollTop;function je(e,t){var n,o;const{timeout:i,easing:r,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(o=a.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:a.transitionDelay}}const dr=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ur={entering:{opacity:1},entered:{opacity:1}},pr=d.forwardRef(function(t,n){const o=it(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:l,easing:c,in:u,onEnter:f,onEntered:m,onEntering:x,onExit:C,onExited:v,onExiting:P,style:k,timeout:y=i,TransitionComponent:$=tn}=t,g=V(t,dr),h=d.useRef(null),w=ge(h,l.ref,n),E=I=>M=>{if(I){const R=h.current;M===void 0?I(R):I(R,M)}},S=E(x),O=E((I,M)=>{rn(I);const R=je({style:k,timeout:y,easing:c},{mode:"enter"});I.style.webkitTransition=o.transitions.create("opacity",R),I.style.transition=o.transitions.create("opacity",R),f&&f(I,M)}),B=E(m),A=E(P),b=E(I=>{const M=je({style:k,timeout:y,easing:c},{mode:"exit"});I.style.webkitTransition=o.transitions.create("opacity",M),I.style.transition=o.transitions.create("opacity",M),C&&C(I)}),N=E(v),D=I=>{r&&r(h.current,I)};return s.jsx($,p({appear:a,in:u,nodeRef:h,onEnter:O,onEntered:B,onEntering:S,onExit:b,onExited:N,onExiting:A,addEndListener:D,timeout:y},g,{children:(I,M)=>d.cloneElement(l,p({style:p({opacity:0,visibility:I==="exited"&&!u?"hidden":void 0},ur[I],k,l.props.style),ref:w},M))}))}),fr=pr;function mr(e){return pe("MuiBackdrop",e)}se("MuiBackdrop",["root","invisible"]);const hr=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],gr=e=>{const{classes:t,invisible:n}=e;return fe({root:["root",n&&"invisible"]},mr,t)},vr=q("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>p({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),xr=d.forwardRef(function(t,n){var o,i,r;const a=de({props:t,name:"MuiBackdrop"}),{children:l,className:c,component:u="div",components:f={},componentsProps:m={},invisible:x=!1,open:C,slotProps:v={},slots:P={},TransitionComponent:k=fr,transitionDuration:y}=a,$=V(a,hr),g=p({},a,{component:u,invisible:x}),h=gr(g),w=(o=v.root)!=null?o:m.root;return s.jsx(k,p({in:C,timeout:y},$,{children:s.jsx(vr,p({"aria-hidden":!0},w,{as:(i=(r=P.root)!=null?r:f.Root)!=null?i:u,className:F(h.root,c,w==null?void 0:w.className),ownerState:p({},g,w==null?void 0:w.ownerState),classes:h,ref:n,children:l}))}))}),br=xr;function yr(e){return pe("MuiModal",e)}se("MuiModal",["root","hidden","backdrop"]);const Tr=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Cr=e=>{const{open:t,exited:n,classes:o}=e;return fe({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},yr,o)},Sr=q("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>p({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Pr=q(br,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),wr=d.forwardRef(function(t,n){var o,i,r,a,l,c;const u=de({name:"MuiModal",props:t}),{BackdropComponent:f=Pr,BackdropProps:m,className:x,closeAfterTransition:C=!1,children:v,container:P,component:k,components:y={},componentsProps:$={},disableAutoFocus:g=!1,disableEnforceFocus:h=!1,disableEscapeKeyDown:w=!1,disablePortal:E=!1,disableRestoreFocus:S=!1,disableScrollLock:O=!1,hideBackdrop:B=!1,keepMounted:A=!1,onBackdropClick:b,open:N,slotProps:D,slots:I}=u,M=V(u,Tr),R=p({},u,{closeAfterTransition:C,disableAutoFocus:g,disableEnforceFocus:h,disableEscapeKeyDown:w,disablePortal:E,disableRestoreFocus:S,disableScrollLock:O,hideBackdrop:B,keepMounted:A}),{getRootProps:L,getBackdropProps:T,getTransitionProps:z,portalRef:K,isTopModal:le,exited:ce,hasTransition:j}=er(p({},R,{rootRef:n})),W=p({},R,{exited:ce}),_=Cr(W),G={};if(v.props.tabIndex===void 0&&(G.tabIndex="-1"),j){const{onEnter:H,onExited:X}=z();G.onEnter=H,G.onExited=X}const Q=(o=(i=I==null?void 0:I.root)!=null?i:y.Root)!=null?o:Sr,ee=(r=(a=I==null?void 0:I.backdrop)!=null?a:y.Backdrop)!=null?r:f,J=(l=D==null?void 0:D.root)!=null?l:$.root,ie=(c=D==null?void 0:D.backdrop)!=null?c:$.backdrop,ve=Fe({elementType:Q,externalSlotProps:J,externalForwardedProps:M,getSlotProps:L,additionalProps:{ref:n,as:k},ownerState:W,className:F(x,J==null?void 0:J.className,_==null?void 0:_.root,!W.open&&W.exited&&(_==null?void 0:_.hidden))}),ae=Fe({elementType:ee,externalSlotProps:ie,additionalProps:m,getSlotProps:H=>T(p({},H,{onClick:X=>{b&&b(X),H!=null&&H.onClick&&H.onClick(X)}})),className:F(ie==null?void 0:ie.className,m==null?void 0:m.className,_==null?void 0:_.backdrop),ownerState:W});return!A&&!N&&(!j||ce)?null:s.jsx(qi,{ref:K,container:P,disablePortal:E,children:s.jsxs(Q,p({},ve,{children:[!B&&f?s.jsx(ee,p({},ae)):null,s.jsx(_i,{disableEnforceFocus:h,disableAutoFocus:g,disableRestoreFocus:S,isEnabled:le,open:N,children:d.cloneElement(v,G)})]}))})}),no=wr,Er=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function kr(e,t,n){const o=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),r=Te(t);let a;if(t.fakeTransform)a=t.fakeTransform;else{const u=r.getComputedStyle(t);a=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let l=0,c=0;if(a&&a!=="none"&&typeof a=="string"){const u=a.split("(")[1].split(")")[0].split(",");l=parseInt(u[4],10),c=parseInt(u[5],10)}return e==="left"?i?`translateX(${i.right+l-o.left}px)`:`translateX(${r.innerWidth+l-o.left}px)`:e==="right"?i?`translateX(-${o.right-i.left-l}px)`:`translateX(-${o.left+o.width-l}px)`:e==="up"?i?`translateY(${i.bottom+c-o.top}px)`:`translateY(${r.innerHeight+c-o.top}px)`:i?`translateY(-${o.top-i.top+o.height-c}px)`:`translateY(-${o.top+o.height-c}px)`}function Ir(e){return typeof e=="function"?e():e}function ut(e,t,n){const o=Ir(n),i=kr(e,t,o);i&&(t.style.webkitTransform=i,t.style.transform=i)}const Rr=d.forwardRef(function(t,n){const o=it(),i={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},r={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:c,container:u,direction:f="down",easing:m=i,in:x,onEnter:C,onEntered:v,onEntering:P,onExit:k,onExited:y,onExiting:$,style:g,timeout:h=r,TransitionComponent:w=tn}=t,E=V(t,Er),S=d.useRef(null),O=ge(c.ref,S,n),B=T=>z=>{T&&(z===void 0?T(S.current):T(S.current,z))},A=B((T,z)=>{ut(f,T,u),rn(T),C&&C(T,z)}),b=B((T,z)=>{const K=je({timeout:h,style:g,easing:m},{mode:"enter"});T.style.webkitTransition=o.transitions.create("-webkit-transform",p({},K)),T.style.transition=o.transitions.create("transform",p({},K)),T.style.webkitTransform="none",T.style.transform="none",P&&P(T,z)}),N=B(v),D=B($),I=B(T=>{const z=je({timeout:h,style:g,easing:m},{mode:"exit"});T.style.webkitTransition=o.transitions.create("-webkit-transform",z),T.style.transition=o.transitions.create("transform",z),ut(f,T,u),k&&k(T)}),M=B(T=>{T.style.webkitTransition="",T.style.transition="",y&&y(T)}),R=T=>{a&&a(S.current,T)},L=d.useCallback(()=>{S.current&&ut(f,S.current,u)},[f,u]);return d.useEffect(()=>{if(x||f==="down"||f==="right")return;const T=Yn(()=>{S.current&&ut(f,S.current,u)}),z=Te(S.current);return z.addEventListener("resize",T),()=>{T.clear(),z.removeEventListener("resize",T)}},[f,x,u]),d.useEffect(()=>{x||L()},[x,L]),s.jsx(w,p({nodeRef:S,onEnter:A,onEntered:N,onEntering:b,onExit:I,onExited:M,onExiting:D,addEndListener:R,appear:l,in:x,timeout:h},E,{children:(T,z)=>d.cloneElement(c,p({ref:O,style:p({visibility:T==="exited"&&!x?"hidden":void 0},g,c.props.style)},z))}))}),Mr=Rr;function Ar(e){return pe("MuiPaper",e)}se("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $r=["className","component","elevation","square","variant"],Lr=e=>{const{square:t,elevation:n,variant:o,classes:i}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return fe(r,Ar,i)},jr=q("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${oe("#fff",Tn(t.elevation))}, ${oe("#fff",Tn(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),zr=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiPaper"}),{className:i,component:r="div",elevation:a=1,square:l=!1,variant:c="elevation"}=o,u=V(o,$r),f=p({},o,{component:r,elevation:a,square:l,variant:c}),m=Lr(f);return s.jsx(jr,p({as:r,ownerState:f,className:F(m.root,i),ref:n},u))}),oo=zr;function Dr(e){return pe("MuiDrawer",e)}se("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Nr=["BackdropProps"],Or=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],io=(e,t)=>{const{ownerState:n}=e;return[t.root,(n.variant==="permanent"||n.variant==="persistent")&&t.docked,t.modal]},Br=e=>{const{classes:t,anchor:n,variant:o}=e,i={root:["root"],docked:[(o==="permanent"||o==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${te(n)}`,o!=="temporary"&&`paperAnchorDocked${te(n)}`]};return fe(i,Dr,t)},Hr=q(no,{name:"MuiDrawer",slot:"Root",overridesResolver:io})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),En=q("div",{shouldForwardProp:_e,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:io})({flex:"0 0 auto"}),Ur=q(oo,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${te(n.anchor)}`],n.variant!=="temporary"&&t[`paperAnchorDocked${te(n.anchor)}`]]}})(({theme:e,ownerState:t})=>p({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),ro={left:"right",right:"left",top:"down",bottom:"up"};function $e(e){return["left","right"].indexOf(e)!==-1}function et({direction:e},t){return e==="rtl"&&$e(t)?ro[t]:t}const Fr=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiDrawer"}),i=it(),r=Qn(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:c,children:u,className:f,elevation:m=16,hideBackdrop:x=!1,ModalProps:{BackdropProps:C}={},onClose:v,open:P=!1,PaperProps:k={},SlideProps:y,TransitionComponent:$=Mr,transitionDuration:g=a,variant:h="temporary"}=o,w=V(o.ModalProps,Nr),E=V(o,Or),S=d.useRef(!1);d.useEffect(()=>{S.current=!0},[]);const O=et({direction:r?"rtl":"ltr"},l),A=p({},o,{anchor:l,elevation:m,open:P,variant:h},E),b=Br(A),N=s.jsx(Ur,p({elevation:h==="temporary"?m:0,square:!0},k,{className:F(b.paper,k.className),ownerState:A,children:u}));if(h==="permanent")return s.jsx(En,p({className:F(b.root,b.docked,f),ownerState:A,ref:n},E,{children:N}));const D=s.jsx($,p({in:P,direction:ro[O],timeout:g,appear:S.current},y,{children:N}));return h==="persistent"?s.jsx(En,p({className:F(b.root,b.docked,f),ownerState:A,ref:n},E,{children:D})):s.jsx(Hr,p({BackdropProps:p({},c,C,{transitionDuration:g}),className:F(b.root,b.modal,f),open:P,ownerState:A,onClose:v,hideBackdrop:x,ref:n},E,w,{children:D}))}),_r=Fr,Vr=["anchor","classes","className","width","style"],qr=q("div",{shouldForwardProp:_e})(({theme:e,ownerState:t})=>p({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},t.anchor==="left"&&{right:"auto"},t.anchor==="right"&&{left:"auto",right:0},t.anchor==="top"&&{bottom:"auto",right:0},t.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),Wr=d.forwardRef(function(t,n){const{anchor:o,classes:i={},className:r,width:a,style:l}=t,c=V(t,Vr),u=t;return s.jsx(qr,p({className:F("PrivateSwipeArea-root",i.root,i[`anchor${te(o)}`],r),ref:n,style:p({[$e(o)?"width":"height"]:a},l),ownerState:u},c))}),Gr=Wr,Yr=["BackdropProps"],Kr=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","allowSwipeInChildren","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],pt=3,Bt=20;let Pe=null;function Ht(e,t,n){return e==="right"?n.body.offsetWidth-t[0].pageX:t[0].pageX}function Ut(e,t,n){return e==="bottom"?n.innerHeight-t[0].clientY:t[0].clientY}function We(e,t){return e?t.clientWidth:t.clientHeight}function kn(e,t,n,o){return Math.min(Math.max(n?t-e:o+t-e,0),o)}function Xr(e,t){const n=[];for(;e&&e!==t.parentElement;){const o=Te(t).getComputedStyle(e);o.getPropertyValue("position")==="absolute"||o.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push(e),e=e.parentElement}return n}function Jr({domTreeShapes:e,start:t,current:n,anchor:o}){const i={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(r=>{let a=n>=t;(o==="top"||o==="left")&&(a=!a);const l=o==="left"||o==="right"?"x":"y",c=Math.round(r[i.scrollPosition[l]]),u=c>0,f=c+r[i.clientLength[l]]<r[i.scrollLength[l]];return!!(a&&f||!a&&u)})}const Zr=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),Qr=d.forwardRef(function(t,n){const o=No({name:"MuiSwipeableDrawer",props:t}),i=it(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:a="left",disableBackdropTransition:l=!1,disableDiscovery:c=!1,disableSwipeToOpen:u=Zr,hideBackdrop:f,hysteresis:m=.52,allowSwipeInChildren:x=!1,minFlingVelocity:C=450,ModalProps:{BackdropProps:v}={},onClose:P,onOpen:k,open:y=!1,PaperProps:$={},SwipeAreaProps:g,swipeAreaWidth:h=20,transitionDuration:w=r,variant:E="temporary"}=o,S=V(o.ModalProps,Yr),O=V(o,Kr),[B,A]=d.useState(!1),b=d.useRef({isSwiping:null}),N=d.useRef(),D=d.useRef(),I=d.useRef(),M=ge($.ref,I),R=d.useRef(!1),L=d.useRef();Re(()=>{L.current=null},[y]);const T=d.useCallback((j,W={})=>{const{mode:_=null,changeTransition:G=!0}=W,Q=et(i,a),ee=["right","bottom"].indexOf(Q)!==-1?1:-1,J=$e(a),ie=J?`translate(${ee*j}px, 0)`:`translate(0, ${ee*j}px)`,ve=I.current.style;ve.webkitTransform=ie,ve.transform=ie;let ae="";if(_&&(ae=i.transitions.create("all",je({easing:void 0,style:void 0,timeout:w},{mode:_}))),G&&(ve.webkitTransition=ae,ve.transition=ae),!l&&!f){const H=D.current.style;H.opacity=1-j/We(J,I.current),G&&(H.webkitTransition=ae,H.transition=ae)}},[a,l,f,i,w]),z=we(j=>{if(!R.current)return;if(Pe=null,R.current=!1,vt.flushSync(()=>{A(!1)}),!b.current.isSwiping){b.current.isSwiping=null;return}b.current.isSwiping=null;const W=et(i,a),_=$e(a);let G;_?G=Ht(W,j.changedTouches,he(j.currentTarget)):G=Ut(W,j.changedTouches,Te(j.currentTarget));const Q=_?b.current.startX:b.current.startY,ee=We(_,I.current),J=kn(G,Q,y,ee),ie=J/ee;if(Math.abs(b.current.velocity)>C&&(L.current=Math.abs((ee-J)/b.current.velocity)*1e3),y){b.current.velocity>C||ie>m?P():T(0,{mode:"exit"});return}b.current.velocity<-C||1-ie>m?k():T(We(_,I.current),{mode:"enter"})}),K=(j=!1)=>{if(!B){(j||!(c&&x))&&vt.flushSync(()=>{A(!0)});const W=$e(a);!y&&I.current&&T(We(W,I.current)+(c?15:-Bt),{changeTransition:!1}),b.current.velocity=0,b.current.lastTime=null,b.current.lastTranslate=null,b.current.paperHit=!1,R.current=!0}},le=we(j=>{if(!I.current||!R.current||Pe!==null&&Pe!==b.current)return;K(!0);const W=et(i,a),_=$e(a),G=Ht(W,j.touches,he(j.currentTarget)),Q=Ut(W,j.touches,Te(j.currentTarget));if(y&&I.current.contains(j.target)&&Pe===null){const ae=Xr(j.target,I.current);if(Jr({domTreeShapes:ae,start:_?b.current.startX:b.current.startY,current:_?G:Q,anchor:a})){Pe=!0;return}Pe=b.current}if(b.current.isSwiping==null){const ae=Math.abs(G-b.current.startX),H=Math.abs(Q-b.current.startY),X=_?ae>H&&ae>pt:H>ae&&H>pt;if(X&&j.cancelable&&j.preventDefault(),X===!0||(_?H>pt:ae>pt)){if(b.current.isSwiping=X,!X){z(j);return}b.current.startX=G,b.current.startY=Q,!c&&!y&&(_?b.current.startX-=Bt:b.current.startY-=Bt)}}if(!b.current.isSwiping)return;const ee=We(_,I.current);let J=_?b.current.startX:b.current.startY;y&&!b.current.paperHit&&(J=Math.min(J,ee));const ie=kn(_?G:Q,J,y,ee);if(y)if(b.current.paperHit)ie===0&&(b.current.startX=G,b.current.startY=Q);else if(_?G<ee:Q<ee)b.current.paperHit=!0,b.current.startX=G,b.current.startY=Q;else return;b.current.lastTranslate===null&&(b.current.lastTranslate=ie,b.current.lastTime=performance.now()+1);const ve=(ie-b.current.lastTranslate)/(performance.now()-b.current.lastTime)*1e3;b.current.velocity=b.current.velocity*.4+ve*.6,b.current.lastTranslate=ie,b.current.lastTime=performance.now(),j.cancelable&&j.preventDefault(),T(ie)}),ce=we(j=>{if(j.defaultPrevented||j.defaultMuiPrevented||y&&(f||!D.current.contains(j.target))&&!I.current.contains(j.target))return;const W=et(i,a),_=$e(a),G=Ht(W,j.touches,he(j.currentTarget)),Q=Ut(W,j.touches,Te(j.currentTarget));if(!y){var ee;if(u||!(j.target===N.current||(ee=I.current)!=null&&ee.contains(j.target)&&(typeof x=="function"?x(j,N.current,I.current):x)))return;if(_){if(G>h)return}else if(Q>h)return}j.defaultMuiPrevented=!0,Pe=null,b.current.startX=G,b.current.startY=Q,K()});return d.useEffect(()=>{if(E==="temporary"){const j=he(I.current);return j.addEventListener("touchstart",ce),j.addEventListener("touchmove",le,{passive:!y}),j.addEventListener("touchend",z),()=>{j.removeEventListener("touchstart",ce),j.removeEventListener("touchmove",le,{passive:!y}),j.removeEventListener("touchend",z)}}},[E,y,ce,le,z]),d.useEffect(()=>()=>{Pe===b.current&&(Pe=null)},[]),d.useEffect(()=>{y||A(!1)},[y]),s.jsxs(d.Fragment,{children:[s.jsx(_r,p({open:E==="temporary"&&B?!0:y,variant:E,ModalProps:p({BackdropProps:p({},v,{ref:D})},E==="temporary"&&{keepMounted:!0},S),hideBackdrop:f,PaperProps:p({},$,{style:p({pointerEvents:E==="temporary"&&!y&&!x?"none":""},$.style),ref:M}),anchor:a,transitionDuration:L.current||w,onClose:P,ref:n},O)),!u&&E==="temporary"&&s.jsx(tr,{children:s.jsx(Gr,p({anchor:a,ref:N,width:h},g))})]})}),ea=Qr;function ta(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:a,in:l,onExited:c,timeout:u}=e,[f,m]=d.useState(!1),x=F(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),C={width:a,height:a,top:-(a/2)+r,left:-(a/2)+i},v=F(n.child,f&&n.childLeaving,o&&n.childPulsate);return!l&&!f&&m(!0),d.useEffect(()=>{if(!l&&c!=null){const P=setTimeout(c,u);return()=>{clearTimeout(P)}}},[c,l,u]),s.jsx("span",{className:x,style:C,children:s.jsx("span",{className:v})})}const na=se("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),xe=na,oa=["center","classes","className"];let St=e=>e,In,Rn,Mn,An;const Xt=550,ia=80,ra=en(In||(In=St`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),aa=en(Rn||(Rn=St`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),sa=en(Mn||(Mn=St`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),la=q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ca=q(ta,{name:"MuiTouchRipple",slot:"Ripple"})(An||(An=St`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),xe.rippleVisible,ra,Xt,({theme:e})=>e.transitions.easing.easeInOut,xe.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,xe.child,xe.childLeaving,aa,Xt,({theme:e})=>e.transitions.easing.easeInOut,xe.childPulsate,sa,({theme:e})=>e.transitions.easing.easeInOut),da=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:a}=o,l=V(o,oa),[c,u]=d.useState([]),f=d.useRef(0),m=d.useRef(null);d.useEffect(()=>{m.current&&(m.current(),m.current=null)},[c]);const x=d.useRef(!1),C=Kn(),v=d.useRef(null),P=d.useRef(null),k=d.useCallback(h=>{const{pulsate:w,rippleX:E,rippleY:S,rippleSize:O,cb:B}=h;u(A=>[...A,s.jsx(ca,{classes:{ripple:F(r.ripple,xe.ripple),rippleVisible:F(r.rippleVisible,xe.rippleVisible),ripplePulsate:F(r.ripplePulsate,xe.ripplePulsate),child:F(r.child,xe.child),childLeaving:F(r.childLeaving,xe.childLeaving),childPulsate:F(r.childPulsate,xe.childPulsate)},timeout:Xt,pulsate:w,rippleX:E,rippleY:S,rippleSize:O},f.current)]),f.current+=1,m.current=B},[r]),y=d.useCallback((h={},w={},E=()=>{})=>{const{pulsate:S=!1,center:O=i||w.pulsate,fakeElement:B=!1}=w;if((h==null?void 0:h.type)==="mousedown"&&x.current){x.current=!1;return}(h==null?void 0:h.type)==="touchstart"&&(x.current=!0);const A=B?null:P.current,b=A?A.getBoundingClientRect():{width:0,height:0,left:0,top:0};let N,D,I;if(O||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)N=Math.round(b.width/2),D=Math.round(b.height/2);else{const{clientX:M,clientY:R}=h.touches&&h.touches.length>0?h.touches[0]:h;N=Math.round(M-b.left),D=Math.round(R-b.top)}if(O)I=Math.sqrt((2*b.width**2+b.height**2)/3),I%2===0&&(I+=1);else{const M=Math.max(Math.abs((A?A.clientWidth:0)-N),N)*2+2,R=Math.max(Math.abs((A?A.clientHeight:0)-D),D)*2+2;I=Math.sqrt(M**2+R**2)}h!=null&&h.touches?v.current===null&&(v.current=()=>{k({pulsate:S,rippleX:N,rippleY:D,rippleSize:I,cb:E})},C.start(ia,()=>{v.current&&(v.current(),v.current=null)})):k({pulsate:S,rippleX:N,rippleY:D,rippleSize:I,cb:E})},[i,k,C]),$=d.useCallback(()=>{y({},{pulsate:!0})},[y]),g=d.useCallback((h,w)=>{if(C.clear(),(h==null?void 0:h.type)==="touchend"&&v.current){v.current(),v.current=null,C.start(0,()=>{g(h,w)});return}v.current=null,u(E=>E.length>0?E.slice(1):E),m.current=w},[C]);return d.useImperativeHandle(n,()=>({pulsate:$,start:y,stop:g}),[$,y,g]),s.jsx(la,p({className:F(xe.root,r.root,a),ref:P},l,{children:s.jsx(cr,{component:null,exit:!0,children:c})}))}),ua=da;function pa(e){return pe("MuiButtonBase",e)}const fa=se("MuiButtonBase",["root","disabled","focusVisible"]),ma=fa,ha=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ga=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,a=fe({root:["root",t&&"disabled",n&&"focusVisible"]},pa,i);return n&&o&&(a.root+=` ${o}`),a},va=q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ma.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),xa=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:a,className:l,component:c="button",disabled:u=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:x=!1,LinkComponent:C="a",onBlur:v,onClick:P,onContextMenu:k,onDragLeave:y,onFocus:$,onFocusVisible:g,onKeyDown:h,onKeyUp:w,onMouseDown:E,onMouseLeave:S,onMouseUp:O,onTouchEnd:B,onTouchMove:A,onTouchStart:b,tabIndex:N=0,TouchRippleProps:D,touchRippleRef:I,type:M}=o,R=V(o,ha),L=d.useRef(null),T=d.useRef(null),z=ge(T,I),{isFocusVisibleRef:K,onFocus:le,onBlur:ce,ref:j}=Oo(),[W,_]=d.useState(!1);u&&W&&_(!1),d.useImperativeHandle(i,()=>({focusVisible:()=>{_(!0),L.current.focus()}}),[]);const[G,Q]=d.useState(!1);d.useEffect(()=>{Q(!0)},[]);const ee=G&&!f&&!u;d.useEffect(()=>{W&&x&&!f&&G&&T.current.pulsate()},[f,x,W,G]);function J(U,hn,Io=m){return we(gn=>(hn&&hn(gn),!Io&&T.current&&T.current[U](gn),!0))}const ie=J("start",E),ve=J("stop",k),ae=J("stop",y),H=J("stop",O),X=J("stop",U=>{W&&U.preventDefault(),S&&S(U)}),me=J("start",b),at=J("stop",B),ke=J("stop",A),Ie=J("stop",U=>{ce(U),K.current===!1&&_(!1),v&&v(U)},!1),st=we(U=>{L.current||(L.current=U.currentTarget),le(U),K.current===!0&&(_(!0),g&&g(U)),$&&$(U)}),ze=()=>{const U=L.current;return c&&c!=="button"&&!(U.tagName==="A"&&U.href)},De=d.useRef(!1),lt=we(U=>{x&&!De.current&&W&&T.current&&U.key===" "&&(De.current=!0,T.current.stop(U,()=>{T.current.start(U)})),U.target===U.currentTarget&&ze()&&U.key===" "&&U.preventDefault(),h&&h(U),U.target===U.currentTarget&&ze()&&U.key==="Enter"&&!u&&(U.preventDefault(),P&&P(U))}),ct=we(U=>{x&&U.key===" "&&T.current&&W&&!U.defaultPrevented&&(De.current=!1,T.current.stop(U,()=>{T.current.pulsate(U)})),w&&w(U),P&&U.target===U.currentTarget&&ze()&&U.key===" "&&!U.defaultPrevented&&P(U)});let ue=c;ue==="button"&&(R.href||R.to)&&(ue=C);const Ve={};ue==="button"?(Ve.type=M===void 0?"button":M,Ve.disabled=u):(!R.href&&!R.to&&(Ve.role="button"),u&&(Ve["aria-disabled"]=u));const Eo=ge(n,j,L),mn=p({},o,{centerRipple:r,component:c,disabled:u,disableRipple:f,disableTouchRipple:m,focusRipple:x,tabIndex:N,focusVisible:W}),ko=ga(mn);return s.jsxs(va,p({as:ue,className:F(ko.root,l),ownerState:mn,onBlur:Ie,onClick:P,onContextMenu:ve,onFocus:st,onKeyDown:lt,onKeyUp:ct,onMouseDown:ie,onMouseLeave:X,onMouseUp:H,onDragLeave:ae,onTouchEnd:at,onTouchMove:ke,onTouchStart:me,ref:Eo,tabIndex:u?-1:N,type:M},Ve,R,{children:[a,ee?s.jsx(ua,p({ref:z,center:r},D)):null]}))}),rt=xa;function ba(e){return pe("MuiButton",e)}const ya=se("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ft=ya,Ta=d.createContext({}),Ca=Ta,Sa=d.createContext(void 0),Pa=Sa,wa=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Ea=e=>{const{color:t,disableElevation:n,fullWidth:o,size:i,variant:r,classes:a}=e,l={root:["root",r,`${r}${te(t)}`,`size${te(i)}`,`${r}Size${te(i)}`,`color${te(t)}`,n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${te(i)}`],endIcon:["icon","endIcon",`iconSize${te(i)}`]},c=fe(l,ba,a);return p({},a,c)},ao=e=>p({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),ka=q(rt,{shouldForwardProp:e=>_e(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${te(n.color)}`],t[`size${te(n.size)}`],t[`${n.variant}Size${te(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],r=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return p({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":p({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":p({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${ft.focusVisible}`]:p({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${ft.disabled}`]:p({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${oe(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(o=e.palette).getContrastText)==null?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ft.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ft.disabled}`]:{boxShadow:"none"}}),Ia=q("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${te(n.size)}`]]}})(({ownerState:e})=>p({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},ao(e))),Ra=q("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${te(n.size)}`]]}})(({ownerState:e})=>p({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},ao(e))),Ma=d.forwardRef(function(t,n){const o=d.useContext(Ca),i=d.useContext(Pa),r=Bo(o,t),a=de({props:r,name:"MuiButton"}),{children:l,color:c="primary",component:u="button",className:f,disabled:m=!1,disableElevation:x=!1,disableFocusRipple:C=!1,endIcon:v,focusVisibleClassName:P,fullWidth:k=!1,size:y="medium",startIcon:$,type:g,variant:h="text"}=a,w=V(a,wa),E=p({},a,{color:c,component:u,disabled:m,disableElevation:x,disableFocusRipple:C,fullWidth:k,size:y,type:g,variant:h}),S=Ea(E),O=$&&s.jsx(Ia,{className:S.startIcon,ownerState:E,children:$}),B=v&&s.jsx(Ra,{className:S.endIcon,ownerState:E,children:v}),A=i||"";return s.jsxs(ka,p({ownerState:E,className:F(o.className,S.root,f,A),component:u,disabled:m,focusRipple:!C,focusVisibleClassName:F(S.focusVisible,P),ref:n,type:g},w,{classes:S,children:[O,l,B]}))}),Aa=Ma,$a=d.createContext({}),Se=$a;function La(e){return pe("MuiList",e)}se("MuiList",["root","padding","dense","subheader"]);const ja=["children","className","component","dense","disablePadding","subheader"],za=e=>{const{classes:t,disablePadding:n,dense:o,subheader:i}=e;return fe({root:["root",!n&&"padding",o&&"dense",i&&"subheader"]},La,t)},Da=q("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>p({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Na=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiList"}),{children:i,className:r,component:a="ul",dense:l=!1,disablePadding:c=!1,subheader:u}=o,f=V(o,ja),m=d.useMemo(()=>({dense:l}),[l]),x=p({},o,{component:a,dense:l,disablePadding:c}),C=za(x);return s.jsx(Se.Provider,{value:m,children:s.jsxs(Da,p({as:a,className:F(C.root,r),ref:n,ownerState:x},f,{children:[u,i]}))})}),so=Na;function Oa(e){return pe("MuiDivider",e)}const Ba=se("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),$n=Ba,Ha=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Ua=e=>{const{absolute:t,children:n,classes:o,flexItem:i,light:r,orientation:a,textAlign:l,variant:c}=e;return fe({root:["root",t&&"absolute",c,r&&"light",a==="vertical"&&"vertical",i&&"flexItem",n&&"withChildren",n&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},Oa,o)},Fa=q("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,n.orientation==="vertical"&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&n.orientation==="vertical"&&t.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&t.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>p({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:oe(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>p({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>p({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),_a=q("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,n.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>p({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),lo=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiDivider"}),{absolute:i=!1,children:r,className:a,component:l=r?"div":"hr",flexItem:c=!1,light:u=!1,orientation:f="horizontal",role:m=l!=="hr"?"separator":void 0,textAlign:x="center",variant:C="fullWidth"}=o,v=V(o,Ha),P=p({},o,{absolute:i,component:l,flexItem:c,light:u,orientation:f,role:m,textAlign:x,variant:C}),k=Ua(P);return s.jsx(Fa,p({as:l,className:F(k.root,a),role:m,ref:n,ownerState:P},v,{children:r?s.jsx(_a,{className:k.wrapper,ownerState:P,children:r}):null}))});lo.muiSkipListHighlight=!0;const Va=lo;function qa(e){return pe("MuiListItem",e)}const Wa=se("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),He=Wa;function Ga(e){return pe("MuiListItemButton",e)}const Ya=se("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Ue=Ya,Ka=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Xa=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Ja=e=>{const{alignItems:t,classes:n,dense:o,disabled:i,disableGutters:r,divider:a,selected:l}=e,u=fe({root:["root",o&&"dense",!r&&"gutters",a&&"divider",i&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},Ga,n);return p({},n,u)},Za=q(rt,{shouldForwardProp:e=>_e(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Xa})(({theme:e,ownerState:t})=>p({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Ue.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ue.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Ue.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Ue.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Ue.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Qa=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:r=!1,component:a="div",children:l,dense:c=!1,disableGutters:u=!1,divider:f=!1,focusVisibleClassName:m,selected:x=!1,className:C}=o,v=V(o,Ka),P=d.useContext(Se),k=d.useMemo(()=>({dense:c||P.dense||!1,alignItems:i,disableGutters:u}),[i,P.dense,c,u]),y=d.useRef(null);Re(()=>{r&&y.current&&y.current.focus()},[r]);const $=p({},o,{alignItems:i,dense:k.dense,disableGutters:u,divider:f,selected:x}),g=Ja($),h=ge(y,n);return s.jsx(Se.Provider,{value:k,children:s.jsx(Za,p({ref:h,href:v.href||v.to,component:(v.href||v.to)&&a==="div"?"button":a,focusVisibleClassName:F(g.focusVisible,m),ownerState:$,className:F(g.root,C)},v,{classes:g,children:l}))})}),es=Qa;function ts(e){return pe("MuiListItemSecondaryAction",e)}se("MuiListItemSecondaryAction",["root","disableGutters"]);const ns=["className"],os=e=>{const{disableGutters:t,classes:n}=e;return fe({root:["root",t&&"disableGutters"]},ts,n)},is=q("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})(({ownerState:e})=>p({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),co=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemSecondaryAction"}),{className:i}=o,r=V(o,ns),a=d.useContext(Se),l=p({},o,{disableGutters:a.disableGutters}),c=os(l);return s.jsx(is,p({className:F(c.root,i),ownerState:l,ref:n},r))});co.muiName="ListItemSecondaryAction";const rs=co,as=["className"],ss=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],ls=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]},cs=e=>{const{alignItems:t,button:n,classes:o,dense:i,disabled:r,disableGutters:a,disablePadding:l,divider:c,hasSecondaryAction:u,selected:f}=e;return fe({root:["root",i&&"dense",!a&&"gutters",!l&&"padding",c&&"divider",r&&"disabled",n&&"button",t==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",f&&"selected"],container:["container"]},qa,o)},ds=q("div",{name:"MuiListItem",slot:"Root",overridesResolver:ls})(({theme:e,ownerState:t})=>p({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&p({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${Ue.root}`]:{paddingRight:48}},{[`&.${He.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${He.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${He.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${He.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${He.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),us=q("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),ps=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItem"}),{alignItems:i="center",autoFocus:r=!1,button:a=!1,children:l,className:c,component:u,components:f={},componentsProps:m={},ContainerComponent:x="li",ContainerProps:{className:C}={},dense:v=!1,disabled:P=!1,disableGutters:k=!1,disablePadding:y=!1,divider:$=!1,focusVisibleClassName:g,secondaryAction:h,selected:w=!1,slotProps:E={},slots:S={}}=o,O=V(o.ContainerProps,as),B=V(o,ss),A=d.useContext(Se),b=d.useMemo(()=>({dense:v||A.dense||!1,alignItems:i,disableGutters:k}),[i,A.dense,v,k]),N=d.useRef(null);Re(()=>{r&&N.current&&N.current.focus()},[r]);const D=d.Children.toArray(l),I=D.length&&Ho(D[D.length-1],["ListItemSecondaryAction"]),M=p({},o,{alignItems:i,autoFocus:r,button:a,dense:b.dense,disabled:P,disableGutters:k,disablePadding:y,divider:$,hasSecondaryAction:I,selected:w}),R=cs(M),L=ge(N,n),T=S.root||f.Root||ds,z=E.root||m.root||{},K=p({className:F(R.root,z.className,c),disabled:P},B);let le=u||"li";return a&&(K.component=u||"div",K.focusVisibleClassName=F(He.focusVisible,g),le=rt),I?(le=!K.component&&!u?"div":le,x==="li"&&(le==="li"?le="div":K.component==="li"&&(K.component="div")),s.jsx(Se.Provider,{value:b,children:s.jsxs(us,p({as:x,className:F(R.container,C),ref:L,ownerState:M},O,{children:[s.jsx(T,p({},z,!xt(T)&&{as:le,ownerState:p({},M,z.ownerState)},K,{children:D})),D.pop()]}))})):s.jsx(Se.Provider,{value:b,children:s.jsxs(T,p({},z,{as:le,ref:L},!xt(T)&&{ownerState:p({},M,z.ownerState)},K,{children:[D,h&&s.jsx(rs,{children:h})]}))})}),fs=ps;function ms(e){return pe("MuiListItemIcon",e)}const hs=se("MuiListItemIcon",["root","alignItemsFlexStart"]),Ln=hs,gs=["className"],vs=e=>{const{alignItems:t,classes:n}=e;return fe({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},ms,n)},xs=q("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>p({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),bs=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemIcon"}),{className:i}=o,r=V(o,gs),a=d.useContext(Se),l=p({},o,{alignItems:a.alignItems}),c=vs(l);return s.jsx(xs,p({className:F(c.root,i),ownerState:l,ref:n},r))}),ys=bs;var an={},Ts=Ct;Object.defineProperty(an,"__esModule",{value:!0});var uo=an.default=void 0,Cs=Ts(Tt()),Ss=s;uo=an.default=(0,Cs.default)((0,Ss.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var sn={},Ps=Ct;Object.defineProperty(sn,"__esModule",{value:!0});var po=sn.default=void 0,ws=Ps(Tt()),Es=s;po=sn.default=(0,ws.default)((0,Es.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var ln={},ks=Ct;Object.defineProperty(ln,"__esModule",{value:!0});var fo=ln.default=void 0,Is=ks(Tt()),Rs=s;fo=ln.default=(0,Is.default)((0,Rs.jsx)("path",{d:"M21 8V7l-3 2-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"}),"ContactMail");function Ms(e){return pe("MuiIconButton",e)}const As=se("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),$s=As,Ls=["edge","children","className","color","disabled","disableFocusRipple","size"],js=e=>{const{classes:t,disabled:n,color:o,edge:i,size:r}=e,a={root:["root",n&&"disabled",o!=="default"&&`color${te(o)}`,i&&`edge${te(i)}`,`size${te(r)}`]};return fe(a,Ms,t)},zs=q(rt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${te(n.color)}`],n.edge&&t[`edge${te(n.edge)}`],t[`size${te(n.size)}`]]}})(({theme:e,ownerState:t})=>p({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const o=(n=(e.vars||e).palette)==null?void 0:n[t.color];return p({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&p({color:o==null?void 0:o.main},!t.disableRipple&&{"&:hover":p({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${$s.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ds=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiIconButton"}),{edge:i=!1,children:r,className:a,color:l="default",disabled:c=!1,disableFocusRipple:u=!1,size:f="medium"}=o,m=V(o,Ls),x=p({},o,{edge:i,color:l,disabled:c,disableFocusRipple:u,size:f}),C=js(x);return s.jsx(zs,p({className:F(C.root,a),centerRipple:!0,focusRipple:!u,disabled:c,ref:n},m,{ownerState:x,children:r}))}),Ns=Ds;var Y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn=Symbol.for("react.element"),dn=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),wt=Symbol.for("react.strict_mode"),Et=Symbol.for("react.profiler"),kt=Symbol.for("react.provider"),It=Symbol.for("react.context"),Os=Symbol.for("react.server_context"),Rt=Symbol.for("react.forward_ref"),Mt=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),mo;mo=Symbol.for("react.module.reference");function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cn:switch(e=e.type,e){case Pt:case Et:case wt:case Mt:case At:return e;default:switch(e=e&&e.$$typeof,e){case Os:case It:case Rt:case Lt:case $t:case kt:return e;default:return t}}case dn:return t}}}Y.ContextConsumer=It;Y.ContextProvider=kt;Y.Element=cn;Y.ForwardRef=Rt;Y.Fragment=Pt;Y.Lazy=Lt;Y.Memo=$t;Y.Portal=dn;Y.Profiler=Et;Y.StrictMode=wt;Y.Suspense=Mt;Y.SuspenseList=At;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(e){return be(e)===It};Y.isContextProvider=function(e){return be(e)===kt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cn};Y.isForwardRef=function(e){return be(e)===Rt};Y.isFragment=function(e){return be(e)===Pt};Y.isLazy=function(e){return be(e)===Lt};Y.isMemo=function(e){return be(e)===$t};Y.isPortal=function(e){return be(e)===dn};Y.isProfiler=function(e){return be(e)===Et};Y.isStrictMode=function(e){return be(e)===wt};Y.isSuspense=function(e){return be(e)===Mt};Y.isSuspenseList=function(e){return be(e)===At};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pt||e===Et||e===wt||e===Mt||e===At||e===Bs||typeof e=="object"&&e!==null&&(e.$$typeof===Lt||e.$$typeof===$t||e.$$typeof===kt||e.$$typeof===It||e.$$typeof===Rt||e.$$typeof===mo||e.getModuleId!==void 0)};Y.typeOf=be;const Hs=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Ft(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function jn(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function ho(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function Ge(e,t,n,o,i,r){let a=!1,l=i(e,t,t?n:!1);for(;l;){if(l===e.firstChild){if(a)return!1;a=!0}const c=o?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!ho(l,r)||c)l=i(e,l,n);else return l.focus(),!0}return!1}const Us=d.forwardRef(function(t,n){const{actions:o,autoFocus:i=!1,autoFocusItem:r=!1,children:a,className:l,disabledItemsFocusable:c=!1,disableListWrap:u=!1,onKeyDown:f,variant:m="selectedMenu"}=t,x=V(t,Hs),C=d.useRef(null),v=d.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Re(()=>{i&&C.current.focus()},[i]),d.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(g,{direction:h})=>{const w=!C.current.style.width;if(g.clientHeight<C.current.clientHeight&&w){const E=`${Gn(he(g))}px`;C.current.style[h==="rtl"?"paddingLeft":"paddingRight"]=E,C.current.style.width=`calc(100% + ${E})`}return C.current}}),[]);const P=g=>{const h=C.current,w=g.key,E=he(h).activeElement;if(w==="ArrowDown")g.preventDefault(),Ge(h,E,u,c,Ft);else if(w==="ArrowUp")g.preventDefault(),Ge(h,E,u,c,jn);else if(w==="Home")g.preventDefault(),Ge(h,null,u,c,Ft);else if(w==="End")g.preventDefault(),Ge(h,null,u,c,jn);else if(w.length===1){const S=v.current,O=w.toLowerCase(),B=performance.now();S.keys.length>0&&(B-S.lastTime>500?(S.keys=[],S.repeating=!0,S.previousKeyMatched=!0):S.repeating&&O!==S.keys[0]&&(S.repeating=!1)),S.lastTime=B,S.keys.push(O);const A=E&&!S.repeating&&ho(E,S);S.previousKeyMatched&&(A||Ge(h,E,!1,c,Ft,S))?g.preventDefault():S.previousKeyMatched=!1}f&&f(g)},k=ge(C,n);let y=-1;d.Children.forEach(a,(g,h)=>{if(!d.isValidElement(g)){y===h&&(y+=1,y>=a.length&&(y=-1));return}g.props.disabled||(m==="selectedMenu"&&g.props.selected||y===-1)&&(y=h),y===h&&(g.props.disabled||g.props.muiSkipListHighlight||g.type.muiSkipListHighlight)&&(y+=1,y>=a.length&&(y=-1))});const $=d.Children.map(a,(g,h)=>{if(h===y){const w={};return r&&(w.autoFocus=!0),g.props.tabIndex===void 0&&m==="selectedMenu"&&(w.tabIndex=0),d.cloneElement(g,w)}return g});return s.jsx(so,p({role:"menu",ref:k,className:l,onKeyDown:P,tabIndex:i?0:-1},x,{children:$}))}),Fs=Us,_s=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Jt(e){return`scale(${e}, ${e**2})`}const Vs={entering:{opacity:1,transform:Jt(1)},entered:{opacity:1,transform:"none"}},_t=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),go=d.forwardRef(function(t,n){const{addEndListener:o,appear:i=!0,children:r,easing:a,in:l,onEnter:c,onEntered:u,onEntering:f,onExit:m,onExited:x,onExiting:C,style:v,timeout:P="auto",TransitionComponent:k=tn}=t,y=V(t,_s),$=Kn(),g=d.useRef(),h=it(),w=d.useRef(null),E=ge(w,r.ref,n),S=M=>R=>{if(M){const L=w.current;R===void 0?M(L):M(L,R)}},O=S(f),B=S((M,R)=>{rn(M);const{duration:L,delay:T,easing:z}=je({style:v,timeout:P,easing:a},{mode:"enter"});let K;P==="auto"?(K=h.transitions.getAutoHeightDuration(M.clientHeight),g.current=K):K=L,M.style.transition=[h.transitions.create("opacity",{duration:K,delay:T}),h.transitions.create("transform",{duration:_t?K:K*.666,delay:T,easing:z})].join(","),c&&c(M,R)}),A=S(u),b=S(C),N=S(M=>{const{duration:R,delay:L,easing:T}=je({style:v,timeout:P,easing:a},{mode:"exit"});let z;P==="auto"?(z=h.transitions.getAutoHeightDuration(M.clientHeight),g.current=z):z=R,M.style.transition=[h.transitions.create("opacity",{duration:z,delay:L}),h.transitions.create("transform",{duration:_t?z:z*.666,delay:_t?L:L||z*.333,easing:T})].join(","),M.style.opacity=0,M.style.transform=Jt(.75),m&&m(M)}),D=S(x),I=M=>{P==="auto"&&$.start(g.current||0,M),o&&o(w.current,M)};return s.jsx(k,p({appear:i,in:l,nodeRef:w,onEnter:B,onEntered:A,onEntering:O,onExit:N,onExited:D,onExiting:b,addEndListener:I,timeout:P==="auto"?null:P},y,{children:(M,R)=>d.cloneElement(r,p({style:p({opacity:0,transform:Jt(.75),visibility:M==="exited"&&!l?"hidden":void 0},Vs[M],v,r.props.style),ref:E},R))}))});go.muiSupportAuto=!0;const qs=go;function Ws(e){return pe("MuiPopover",e)}se("MuiPopover",["root","paper"]);const Gs=["onEntering"],Ys=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Ks=["slotProps"];function zn(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Dn(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Nn(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Vt(e){return typeof e=="function"?e():e}const Xs=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"]},Ws,t)},Js=q(no,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),vo=q(oo,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Zs=d.forwardRef(function(t,n){var o,i,r;const a=de({props:t,name:"MuiPopover"}),{action:l,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:m="anchorEl",children:x,className:C,container:v,elevation:P=8,marginThreshold:k=16,open:y,PaperProps:$={},slots:g,slotProps:h,transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:E=qs,transitionDuration:S="auto",TransitionProps:{onEntering:O}={},disableScrollLock:B=!1}=a,A=V(a.TransitionProps,Gs),b=V(a,Ys),N=(o=h==null?void 0:h.paper)!=null?o:$,D=d.useRef(),I=ge(D,N.ref),M=p({},a,{anchorOrigin:u,anchorReference:m,elevation:P,marginThreshold:k,externalPaperSlotProps:N,transformOrigin:w,TransitionComponent:E,transitionDuration:S,TransitionProps:A}),R=Xs(M),L=d.useCallback(()=>{if(m==="anchorPosition")return f;const H=Vt(c),me=(H&&H.nodeType===1?H:he(D.current).body).getBoundingClientRect();return{top:me.top+zn(me,u.vertical),left:me.left+Dn(me,u.horizontal)}},[c,u.horizontal,u.vertical,f,m]),T=d.useCallback(H=>({vertical:zn(H,w.vertical),horizontal:Dn(H,w.horizontal)}),[w.horizontal,w.vertical]),z=d.useCallback(H=>{const X={width:H.offsetWidth,height:H.offsetHeight},me=T(X);if(m==="none")return{top:null,left:null,transformOrigin:Nn(me)};const at=L();let ke=at.top-me.vertical,Ie=at.left-me.horizontal;const st=ke+X.height,ze=Ie+X.width,De=Te(Vt(c)),lt=De.innerHeight-k,ct=De.innerWidth-k;if(k!==null&&ke<k){const ue=ke-k;ke-=ue,me.vertical+=ue}else if(k!==null&&st>lt){const ue=st-lt;ke-=ue,me.vertical+=ue}if(k!==null&&Ie<k){const ue=Ie-k;Ie-=ue,me.horizontal+=ue}else if(ze>ct){const ue=ze-ct;Ie-=ue,me.horizontal+=ue}return{top:`${Math.round(ke)}px`,left:`${Math.round(Ie)}px`,transformOrigin:Nn(me)}},[c,m,L,T,k]),[K,le]=d.useState(y),ce=d.useCallback(()=>{const H=D.current;if(!H)return;const X=z(H);X.top!==null&&(H.style.top=X.top),X.left!==null&&(H.style.left=X.left),H.style.transformOrigin=X.transformOrigin,le(!0)},[z]);d.useEffect(()=>(B&&window.addEventListener("scroll",ce),()=>window.removeEventListener("scroll",ce)),[c,B,ce]);const j=(H,X)=>{O&&O(H,X),ce()},W=()=>{le(!1)};d.useEffect(()=>{y&&ce()}),d.useImperativeHandle(l,()=>y?{updatePosition:()=>{ce()}}:null,[y,ce]),d.useEffect(()=>{if(!y)return;const H=Yn(()=>{ce()}),X=Te(c);return X.addEventListener("resize",H),()=>{H.clear(),X.removeEventListener("resize",H)}},[c,y,ce]);let _=S;S==="auto"&&!E.muiSupportAuto&&(_=void 0);const G=v||(c?he(Vt(c)).body:void 0),Q=(i=g==null?void 0:g.root)!=null?i:Js,ee=(r=g==null?void 0:g.paper)!=null?r:vo,J=Fe({elementType:ee,externalSlotProps:p({},N,{style:K?N.style:p({},N.style,{opacity:0})}),additionalProps:{elevation:P,ref:I},ownerState:M,className:F(R.paper,N==null?void 0:N.className)}),ie=Fe({elementType:Q,externalSlotProps:(h==null?void 0:h.root)||{},externalForwardedProps:b,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:G,open:y},ownerState:M,className:F(R.root,C)}),{slotProps:ve}=ie,ae=V(ie,Ks);return s.jsx(Q,p({},ae,!xt(Q)&&{slotProps:ve,disableScrollLock:B},{children:s.jsx(E,p({appear:!0,in:y,onEntering:j,onExited:W,timeout:_},A,{children:s.jsx(ee,p({},J,{children:x}))}))}))}),Qs=Zs;function el(e){return pe("MuiMenu",e)}se("MuiMenu",["root","paper","list"]);const tl=["onEntering"],nl=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ol={vertical:"top",horizontal:"right"},il={vertical:"top",horizontal:"left"},rl=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"],list:["list"]},el,t)},al=q(Qs,{shouldForwardProp:e=>_e(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),sl=q(vo,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ll=q(Fs,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),cl=d.forwardRef(function(t,n){var o,i;const r=de({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:l,className:c,disableAutoFocusItem:u=!1,MenuListProps:f={},onClose:m,open:x,PaperProps:C={},PopoverClasses:v,transitionDuration:P="auto",TransitionProps:{onEntering:k}={},variant:y="selectedMenu",slots:$={},slotProps:g={}}=r,h=V(r.TransitionProps,tl),w=V(r,nl),E=Qn(),S=p({},r,{autoFocus:a,disableAutoFocusItem:u,MenuListProps:f,onEntering:k,PaperProps:C,transitionDuration:P,TransitionProps:h,variant:y}),O=rl(S),B=a&&!u&&x,A=d.useRef(null),b=(T,z)=>{A.current&&A.current.adjustStyleForScrollbar(T,{direction:E?"rtl":"ltr"}),k&&k(T,z)},N=T=>{T.key==="Tab"&&(T.preventDefault(),m&&m(T,"tabKeyDown"))};let D=-1;d.Children.map(l,(T,z)=>{d.isValidElement(T)&&(T.props.disabled||(y==="selectedMenu"&&T.props.selected||D===-1)&&(D=z))});const I=(o=$.paper)!=null?o:sl,M=(i=g.paper)!=null?i:C,R=Fe({elementType:$.root,externalSlotProps:g.root,ownerState:S,className:[O.root,c]}),L=Fe({elementType:I,externalSlotProps:M,ownerState:S,className:O.paper});return s.jsx(al,p({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?ol:il,slots:{paper:I,root:$.root},slotProps:{root:R,paper:L},open:x,ref:n,transitionDuration:P,TransitionProps:p({onEntering:b},h),ownerState:S},w,{classes:v,children:s.jsx(ll,p({onKeyDown:N,actions:A,autoFocus:a&&(D===-1||u),autoFocusItem:B,variant:y},f,{className:F(O.list,f.className),children:l}))}))}),dl=cl,ul=se("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),On=ul;function pl(e){return pe("MuiMenuItem",e)}const fl=se("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Ye=fl,ml=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],hl=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},gl=e=>{const{disabled:t,dense:n,divider:o,disableGutters:i,selected:r,classes:a}=e,c=fe({root:["root",n&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",r&&"selected"]},pl,a);return p({},a,c)},vl=q(rt,{shouldForwardProp:e=>_e(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:hl})(({theme:e,ownerState:t})=>p({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Ye.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ye.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Ye.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:oe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:oe(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Ye.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Ye.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$n.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$n.inset}`]:{marginLeft:52},[`& .${On.root}`]:{marginTop:0,marginBottom:0},[`& .${On.inset}`]:{paddingLeft:36},[`& .${Ln.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&p({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Ln.root} svg`]:{fontSize:"1.25rem"}}))),xl=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:r="li",dense:a=!1,divider:l=!1,disableGutters:c=!1,focusVisibleClassName:u,role:f="menuitem",tabIndex:m,className:x}=o,C=V(o,ml),v=d.useContext(Se),P=d.useMemo(()=>({dense:a||v.dense||!1,disableGutters:c}),[v.dense,a,c]),k=d.useRef(null);Re(()=>{i&&k.current&&k.current.focus()},[i]);const y=p({},o,{dense:P.dense,divider:l,disableGutters:c}),$=gl(o),g=ge(k,n);let h;return o.disabled||(h=m!==void 0?m:-1),s.jsx(Se.Provider,{value:P,children:s.jsx(vl,p({ref:g,role:f,tabIndex:h,component:r,focusVisibleClassName:F($.focusVisible,u),className:F($.root,x)},C,{ownerState:y,classes:$}))})}),bl=xl;var un={},yl=Ct;Object.defineProperty(un,"__esModule",{value:!0});var xo=un.default=void 0,Tl=yl(Tt()),Cl=s;xo=un.default=(0,Tl.default)((0,Cl.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language");const{slice:Sl,forEach:Pl}=[];function wl(e){return Pl.call(Sl.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}const Bn=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,El=(e,t,n)=>{const o=n||{};o.path=o.path||"/";const i=encodeURIComponent(t);let r=`${e}=${i}`;if(o.maxAge>0){const a=o.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(a)}`}if(o.domain){if(!Bn.test(o.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${o.domain}`}if(o.path){if(!Bn.test(o.path))throw new TypeError("option path is invalid");r+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(r+="; HttpOnly"),o.secure&&(r+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},Hn={create(e,t,n,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),o&&(i.domain=o),document.cookie=El(e,encodeURIComponent(t),i)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let o=0;o<n.length;o++){let i=n[o];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove(e){this.create(e,"",-1)}};var kl={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Hn.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:o,cookieDomain:i,cookieOptions:r}=t;n&&typeof document<"u"&&Hn.create(n,e,o,i,r)}},Il={name:"querystring",lookup(e){var o;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((o=window.location.hash)==null?void 0:o.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const a=i.substring(1).split("&");for(let l=0;l<a.length;l++){const c=a[l].indexOf("=");c>0&&a[l].substring(0,c)===t&&(n=a[l].substring(c+1))}}return n}};let Ke=null;const Un=()=>{if(Ke!==null)return Ke;try{Ke=window!=="undefined"&&window.localStorage!==null;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Ke=!1}return Ke};var Rl={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Un())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Un()&&window.localStorage.setItem(n,e)}};let Xe=null;const Fn=()=>{if(Xe!==null)return Xe;try{Xe=window!=="undefined"&&window.sessionStorage!==null;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Xe=!1}return Xe};var Ml={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Fn())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Fn()&&window.sessionStorage.setItem(n,e)}},Al={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:o,language:i}=navigator;if(n)for(let r=0;r<n.length;r++)t.push(n[r]);o&&t.push(o),i&&t.push(i)}return t.length>0?t:void 0}},$l={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const o=t||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(n=o.getAttribute("lang")),n}},Ll={name:"path",lookup(e){var i;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof t=="number"?t:0])==null?void 0:i.replace("/",""):void 0}},jl={name:"subdomain",lookup(e){var i,r;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,o=typeof window<"u"&&((r=(i=window.location)==null?void 0:i.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(o)return o[n]}};function zl(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}}class bo{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=wl(n,this.options||{},zl()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(kl),this.addDetector(Il),this.addDetector(Rl),this.addDetector(Ml),this.addDetector(Al),this.addDetector($l),this.addDetector(Ll),this.addDetector(jl)}addDetector(t){return this.detectors[t.name]=t,this}detect(t){t||(t=this.options.order);let n=[];return t.forEach(o=>{if(this.detectors[o]){let i=this.detectors[o].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.map(o=>this.options.convertDetectedLanguage(o)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(t,this.options)}))}}bo.type="languageDetector";const Dl={title:"Innovation Conveyor",problemTitle:"THE PROBLEM: Our world loses up to 70% of innovative ideas and solutions that don't even survive to proof of concept",problemText1:"Psychological difficulties at different levels: Internal and external psychological barriers and dimensions",problemText2:"Multidisciplinary challenges: Lack of expertise in key areas, marketing, legal, finance. Lack of competencies is a barrier for innovators.",problemText3:"Conceptual jam: The long and difficult journey from idea inception to proof of concept, creating serious challenges.",solutionTitle:"Solution",solutionStrong:'Angelic Innovation Conveyor "AIC":',solutionText:"A platform designed to accumulate and test innovations at the Pre-seed stage as quickly as possible. On the one hand, the solution is individualized and at the same time the principle of the conveyor belt is applied.",solutionPoint1:"Creating a psychologically safe environment",solutionPoint2:"Adapted templates",solutionPoint3:"Full support",solutionPoint4:"Speedy proof of concept",solutionPoint5:"Innovative filtering",solutionPoint6:"Fast and in-depth analysis",solutionPoint7:"Building into the DNA of a startup",featuresTitle:"PRODUCT AND FEATURES",featuresText1:"Idea pitch: The innovator delivers the idea on the platform using customized templates in a psychologically safe environment.",featuresText2:"Lightning-fast innovation validation: After signing the NDA and adaptive presentation, the innovation is subjected to rapid pipeline validation and filtering.",featuresText3:"Full and in-depth validation: Once the concept has been validated, a comprehensive analysis of the innovation is carried out and a final report is prepared.",featuresText4:"Multi-level assessment: Information is sent to specialized departments for a comprehensive assessment",featuresText5:"Psychological safety + Conveyor approach = “AIC”",benefitsTitle:"BENEFITS innovators",benefitsText1:"Psychological comfort: Innovators will have access to a psychologically safe environment where their emotional needs are taken into account and stress levels are reduced when presenting their ideas and allowing them to focus on innovation",benefitsText2:"Accelerated optimization of processes and resources: With lightning-fast innovation validation and built-in templates for presentations and videos, innovators save time and resources by gaining quick access to evaluate their ideas and potential investors.",benefitsText3:"Effective Support and Development: Innovators can concentrate as much as possible on their innovative solutions. The parent company will take care of procedural issues.",customerSegmentsTitle:"“AIC” CUSTOMER SEGMENTS",customerText1:"Beginning Innovators: People who are trying their hand at creating startups or innovative projects for the first time.",customerText2:"Researchers: Science and research professionals interested in commercializing their research.",customerText3:"Experienced Innovators: People with experience in developing and implementing innovative projects, looking for support and new opportunities.",searchTitle:"SEARCH innovations in the world",differenceTitle:"WHAT makes us different",differenceText1:"Innovative concept: We work with the earliest stage of an idea. From the moment it first appeared to the innovator. Our concept allows us to work at the earliest stages and identify the most innovative solutions.",differenceText2:'Innovative concept of creating future companies: We develop and complete the creation of "Reinventing Organizations" based on the principle of sharing participation, responsibility and income among all employees, from top management to front-line workers and this is fundamentally different from the existing ones.',differenceText3:"Attracting investment: Investors' attention is on the issue of not losing investments, while founders' attention is on attracting vital finances at any cost. And both sides are right. And the idea? Innovation? It remains unattended and is transformed according to circumstances. Solution: Create a concept where all parties calmly receive what they need."},Nl={header:"HEADER",order:"DONAT",home:"HOME",about:"PROBLEM",project:"PROJECT",rewards:"HELP",contact:"CONTACT"},Ol={menu:"Menu"},Bl={footerAdditionalText:"Innovation Conveyor",usefulLinks:"Useful Links",blog:"Blog",projects:"Projects",contactUs:"Contact Us",socialMedia:"SOCIAL MEDIA"},Hl={language:"Language"},Ul={slide1Text:"A large-scale project to address the global problem of sedentary lifestyles."},Fl={mainSectionTitle:"We are developing large-scale technology to minimise the harms of a sedentary lifestyle.",mainSectionDescription:"Your description or other content here.",card1Title:"A sedentary lifestyle leads to chronic pain, scoliosis and other health problems.",card2Title:"The aim is to develop technology to minimise harm from prolonged sitting.",card3Title:"We develop technology that individually adapts to the physiological needs of each user, reducing the harm of prolonged sitting."},_l={projectTitle:"A problem of planetary proportions.",goalAmount:"How many people today do you think spend more than 4 hours a day sitting? At work, at home, driving, travelling, on holiday?",currentAmount:"This is a problem that affects billions of people around the world. Prolonged sitting leads to chronic pain, scoliosis and other health problems. Sedentary lifestyles have a negative impact on people's quality of life and productivity, causing serious long-term consequences. This global problem requiresimmediate action.",numberOfInvestors:"OUR INVESTORS",amountToCollect:"WE HAVE TO COLLECT",orderButton:"DONAT"},Vl={formTitle:"Need Help? Open a Ticket",formDescription:"Our support team will get back to you ASAP via email.",namePlaceholder:"Your Name",emailPlaceholder:"Your Email",messagePlaceholder:"Enter Your Message",submitButton:"Submit Ticket",sending:"Sending...",error:"Error occurred while submitting the form."},ql={subscribeTitle:"Subscribe to receive future updates",namePlaceholder:"Your Name",emailPlaceholder:"Your Email",subscribeButton:"Subscribe",sending:"Sending...",error:"Error occurred while submitting the form.",noSpam:"No spam guaranteed, So please don’t send any spam mail."},Wl={founderName:"Maksym Morenets",founderPosition:"Founder of Angel Systems",socialMedia:"SOCIAL MEDIA"},Gl={CommingSoon:" Comming Soon ",ThankYou:"Our website is currently under development. We should be finishedsoon. Thank you for your patience."},Yl={h2:"The:",span:" 'Cura'","h2-1":"   technology",p:"A smart chair that individually adapts to the physiological needs of each user."},Kl={h2:"Partnership in development ",p:"Partners: Innosuisse, Swiss HealthTech Centre."},Xl={TitleH1:"We're not made for sitting, but if we do, we do it wisely.",AdaptationH2:"Individual adaptation",AdaptationP:"The technology offers a unique solution that fully adapts to the physiological characteristics of each user. Using advanced data analysis algorithms, Cura monitors the current state of your body and automatically adapts to your needs, providing optimal support and comfort.",OptimisationH2:"Optimising a sedentary lifestyle",OptimisationP:"Real-time technology analyses your posture and activity, adjusting support for your spine and other vulnerable body parts. This helps prevent the development of pain and discomfort",InnovationH2:"Innovative monitoring system",InnovationP:"A key feature of Cura is to constantly monitor the condition of your body. The system collects data about your posture, activity and general health to personalise support. This allows the system to be ready for your needs before the first contact, maximising comfort and minimising harm.",UniqueH3:"Unique Cura technology ",UniqueP:"Cura doesn't just adapt to individual needs, it actively interacts with your body to help it return to its natural, native position. The technology incorporates personalised adaptation, continuous real-time monitoring and consideration of physical needs, providing comprehensive support and assistance in recovery.",LargeScaleH3:"Cura's scalable and versatile technology:",LargeScaleP:"Our technology is not just a smart chair, but a versatile solution that can be integrated into a wide variety of environments. Whether you are at home, in the office, in the car or on a plane, Cura provides constant comfort and support, adapting to your physiological needs. ",BoltLargeScale:"This technology goes beyond standard solutions, offering a comprehensive approach to maintaining health and wellbeing that can be applied to a wide variety of situations and conditions. Cura is a step forward in creating an environment that cares for you anywhere, anytime.",LargeScaleBig:"If we're gonna sit, let's do it wisely."},Jl={HelpH2:"Help Us",HelpP:"In order to get the technology to the ‘ready’ stage. We need your support",CardTitelH3:"Thank you for supporting us ",CardTextP:"You're a mega man",Card2TitelH3:"We need as much information as possible.",Card2TextP:"You're a mega man",Card3TitelH3:"send this to your employer or the developer of your favourite game. He wants to take care of you.",CopySuccess:"The letter was copied 😉",CopyLink:" Copy Letter"},Zl={PartnersH2:"Companies that care about the health of their employees",PartnersP:"  External partners and corporate donors supporting the project."},Ql={TitelH2:"News & Updates",NewsP:" Recent achievements and developments of the project.","id-1":"Your Text 1","id-2":"Your Text 2","id-3":"Your Text 3","id-4":"Your Text 4","id-5":"Your Text 5","id-6":"Your Text 6","id-7":"Your Text 7","id-8":"Your Text 8","id-9":"Your Text 9"},ec={TitelH2:"Feedback & support",TextP:"Real user reviews and endorsements from well-known individuals and organisations.","id-1":{text:"John Doe, CEO of Tech Innovators",hashtag:"#CURA is a smart solution for everyone. Thanks for the great work!👏"},"id-2":{text:"Jane Smith, Founder of Startup Hub",hashtag:"#CURA is changing our lives. Great team and product!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Tech Entrepreneur",hashtag:"#CURA helps people every day. Bravo for such innovation!👏🫡"},"id-4":{text:"Michael Brown, Investor at Future Ventures",hashtag:"#CURA is awesome! Great work and potential!😻"},"id-5":{text:"Emily Davis, CEO of Smart Solutions",hashtag:"#CURA is a game-changer. Amazing team!💙💛"},"id-6":{text:"Daniel Wilson, Co-Founder of NextGen Startups",hashtag:"#CURA chairs are incredible! Thanks for the quality!"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA is a brilliant idea! Excellent product and service!😉"},"id-8":{text:"James Anderson, Tech Investor",hashtag:"#CURA enhances comfort. Great innovation for all!"},"id-9":{text:"Linda Martinez, Founder of Wellness Tech",hashtag:"#CURA is a great idea for the office. Thanks for your work!"}},tc={AboutUs:Dl,Header:Nl,MenuButton:Ol,Footer:Bl,LanguageSelector:Hl,Background:Ul,ContentHomePage:Fl,HomeComponent:_l,EmailTicket:Vl,Subscribe:ql,OurContacts:Wl,ErrorPage:Gl,ITgame:Yl,ITswiper:Kl,Project:Xl,HelpCards:Jl,Partners:Zl,News:Ql,Feedback:ec},nc={title:"Інноваційний Конвеєр",problemTitle:"ПРОБЛЕМА: Наш світ втрачає до 70% інноваційних ідей та рішень, які навіть не доходять до доказу концепції",problemText1:"Психологічні труднощі на різних рівнях: Внутрішні та зовнішні психологічні бар'єри та виміри",problemText2:"Мультидисциплінарні виклики: Відсутність досвіду в ключових галузях, таких як маркетинг, юридична, фінансова сфери. Відсутність компетенцій є бар'єром для інноваторів.",problemText3:"Концептуальна перешкода: Довгий і складний шлях від зародження ідеї до доказу концепції, що створює серйозні виклики.",solutionTitle:"Рішення",solutionStrong:"Angelic Innovation Conveyor 'AIC':",solutionText:"Платформа, створена для накопичення та тестування інновацій на стадії Pre-seed якомога швидше. З одного боку, рішення індивідуалізоване, а з іншого - застосовується принцип конвеєра.",solutionPoint1:"Створення психологічно безпечного середовища",solutionPoint2:"Адаптовані шаблони",solutionPoint3:"Повна підтримка",solutionPoint4:"Швидкий доказ концепції",solutionPoint5:"Інноваційна фільтрація",solutionPoint6:"Швидкий та глибокий аналіз",solutionPoint7:"Вбудовування в ДНК стартапу",featuresTitle:"ПРОДУКТ ТА ФУНКЦІЇ",featuresText1:"Презентація ідеї: Інноватор представляє ідею на платформі, використовуючи адаптовані шаблони у психологічно безпечному середовищі.",featuresText2:"Блискавична валідація інновацій: Після підписання NDA та адаптивної презентації, інновація проходить швидку валідацію та фільтрацію.",featuresText3:"Повна та глибока валідація: Після валідації концепції проводиться комплексний аналіз інновації та підготовка остаточного звіту.",featuresText4:"Багаторівнева оцінка: Інформація передається до спеціалізованих відділів для комплексної оцінки",featuresText5:"Психологічна безпека + Конвеєрний підхід = 'AIC'",benefitsTitle:"ПЕРЕВАГИ для інноваторів",benefitsText1:"Психологічний комфорт: Інноватори матимуть доступ до психологічно безпечного середовища, де враховуються їхні емоційні потреби, знижується рівень стресу при презентації своїх ідей, що дозволяє їм зосередитися на інноваціях",benefitsText2:"Прискорена оптимізація процесів та ресурсів: Завдяки блискавичній валідації інновацій та вбудованим шаблонам для презентацій та відео, інноватори економлять час та ресурси, отримуючи швидкий доступ до оцінки своїх ідей та потенційних інвесторів.",benefitsText3:"Ефективна підтримка та розвиток: Інноватори можуть максимально зосередитись на своїх інноваційних рішеннях. Батьківська компанія бере на себе процедурні питання.",customerSegmentsTitle:"'AIC' СЕГМЕНТИ КЛІЄНТІВ",customerText1:"Новачки-інноватори: Люди, які вперше намагаються створити стартапи або інноваційні проекти.",customerText2:"Дослідники: Експерти науки та досліджень, зацікавлені в комерціалізації своїх досліджень.",customerText3:"Досвідчені інноватори: Люди, які мають досвід у розробці та впровадженні інноваційних проектів, шукають підтримку та нові можливості.",searchTitle:"ПОШУК інновацій у світі",differenceTitle:"ЧИМ ми відрізняємось",differenceText1:"Інноваційна концепція: Ми працюємо з найраннішою стадією ідеї. З того моменту, як вона вперше приходить на думку інноватору. Наша концепція дозволяє працювати на найранніших етапах та виявляти найінноваційніші рішення.",differenceText2:"Інноваційна концепція створення майбутніх підприємств: Ми розробляємо та завершуємо створення 'Reinventing Organizations' на основі принципу спільної участі, відповідальності та розподілу доходів між усіма співробітниками, від топ-менеджменту до передових працівників, що принципово відрізняється від існуючих компаній.",differenceText3:"Залучення інвестицій: Увага інвесторів спрямована на те, щоб не втратити інвестиції, тоді як увага засновників спрямована на те, щоб отримати життєво необхідні фінанси за будь-яку ціну. А ідея? Інновація? Вона залишається поза увагою і коригується відповідно до обставин. Рішення: створити концепцію, в якій усі сторони спокійно отримують те, що їм потрібно."},oc={header:"ЗАГОЛОВОК",order:"ПІДТРИМАТИ",home:"ГОЛОВНА",about:"ПРОБЛЕМА",project:"ПРОЕКТ",rewards:"ДОПОМОГА",contact:"КОНТАКТИ"},ic={menu:"Меню"},rc={footerAdditionalText:"Інноваційний Конвеєр",usefulLinks:"Корисні посилання",blog:"Блог",projects:"Проекти",contactUs:"Зв'язатися з нами",socialMedia:"СОЦІАЛЬНІ МЕРЕЖІ"},ac={language:"Мова"},sc={slide1Text:"Великий проект для вирішення глобальної проблеми сидячого способу життя."},lc={mainSectionTitle:"Ми розробляємо великомасштабні технології для мінімізації шкоди від сидячого способу життя.",mainSectionDescription:"Ваш опис або інший контент тут.",card1Title:"Сидячий спосіб життя призводить до хронічного болю, сколіозу та інших проблем зі здоров'ям.",card2Title:"Мета - розробити технології для мінімізації шкоди від тривалого сидіння.",card3Title:"Ми розробляємо технології, які індивідуально адаптуються до фізіологічних потреб кожного користувача та зменшують шкоду від тривалого сидіння."},cc={projectTitle:"Проблема планетарного масштабу.",goalAmount:"Як ви думаєте, скільки людей сьогодні проводять більше 4 годин на день сидячи? На роботі, вдома, за кермом, подорожуючи, у відпустці?",currentAmount:"Це проблема, що стосується мільярдів людей по всьому світу. Тривале сидіння призводить до хронічного болю, сколіозу та інших проблем зі здоров'ям. Сидячий спосіб життя негативно впливає на якість життя та продуктивність людей, що призводить до серйозних довгострокових наслідків. Ця глобальна проблема вимагає негайних дій.",numberOfInvestors:"НАШІ ІНВЕСТОРИ",amountToCollect:"НАМ ПОТРІБНО ЗІБРАТИ",orderButton:"ПІДТРИМАТИ"},dc={formTitle:"Потрібна допомога? Відкрити запит",formDescription:"Наша служба підтримки зв'яжеться з вами якнайшвидше електронною поштою.",namePlaceholder:"Ваше ім'я",emailPlaceholder:"Ваш електронний лист",messagePlaceholder:"Введіть ваше повідомлення",submitButton:"Надіслати запит",sending:"Надсилається...",error:"Помилка при відправці форми."},uc={subscribeTitle:"Підписатися на оновлення",namePlaceholder:"Ваше ім'я",emailPlaceholder:"Ваш електронний лист",subscribeButton:"Підписатися",sending:"Надсилається...",error:"Помилка при відправці форми.",noSpam:"Гарантовано без спаму, тому, будь ласка, не надсилайте спам-листи."},pc={founderName:"Максим Моренець",founderPosition:"Засновник Angel Systems",socialMedia:"СОЦІАЛЬНІ МЕРЕЖІ"},fc={CommingSoon:" Скоро буде ",ThankYou:"Наш сайт наразі розробляється. Незабаром ми будемо готові. Дякуємо за ваше терпіння."},mc={h2:"Технологія:",span:" 'Cura'","h2-1":"   ",p:"Розумне крісло, яке індивідуально адаптується до фізіологічних потреб кожного користувача."},hc={h2:"Партнерство у розробці",p:"Партнери: Innosuisse, Swiss HealthTech Centre."},gc={TitleH1:"Ми не створені для сидіння, але якщо вже це робимо, то робімо це мудро.",AdaptationH2:"Індивідуальна адаптація",AdaptationP:"Технологія пропонує унікальне рішення, яке повністю адаптується до фізіологічних особливостей кожного користувача. Використовуючи передові алгоритми аналізу даних, Cura контролює поточний стан вашого тіла і автоматично підлаштовується під ваші потреби, забезпечуючи оптимальну підтримку і комфорт.",OptimisationH2:"Оптимізація сидячого способу життя",OptimisationP:"Технологія аналізує вашу поставу і активність в реальному часі, підлаштовуючи підтримку для хребта та інших вразливих частин тіла. Це допомагає запобігти розвитку болю і дискомфорту.",InnovationH2:"Інноваційна система моніторингу",InnovationP:"Ключовою особливістю Cura є постійний моніторинг стану вашого тіла. Система збирає дані про вашу поставу, активність і загальний стан здоров'я для персоналізації підтримки. Це дозволяє системі бути підготовленою до ваших потреб до першого контакту, максимізуючи комфорт і мінімізуючи шкоду.",UniqueH3:"Унікальна технологія Cura",UniqueP:"Cura не лише адаптується до індивідуальних потреб, а й активно взаємодіє з вашим тілом, щоб допомогти йому повернутися до природного, первісного положення. Технологія включає персоналізовану адаптацію, безперервний моніторинг в реальному часі і врахування фізичних потреб, забезпечуючи комплексну підтримку та сприяючи відновленню.",LargeScaleH3:"Масштабована і універсальна технологія Cura:",LargeScaleP:"Наша технологія - це не просто розумне крісло, а універсальне рішення, яке можна інтегрувати в різноманітні середовища. Будь то вдома, в офісі, в автомобілі або літаку - Cura постійно забезпечує комфорт і підтримку, адаптуючись до ваших фізіологічних потреб.",BoltLargeScale:"Ця технологія виходить за рамки стандартних рішень і пропонує комплексний підхід до збереження здоров'я та благополуччя, застосовний у різних ситуаціях і умовах. Cura - це крок вперед у створенні середовища, яке піклується про вас скрізь і завжди.",LargeScaleBig:"Коли ми сидимо, робімо це мудро."},vc={HelpH2:"Допоможіть нам",HelpP:"Щоб довести технологію до 'готової' стадії. Нам потрібна ваша підтримка",CardTitelH3:"Дякуємо за вашу підтримку",CardTextP:"Ви чудова людина",Card2TitelH3:"Нам потрібно якомога більше інформації.",Card2TextP:"Ви чудова людина",Card3TitelH3:"Надішліть це своєму роботодавцю або розробнику вашої улюбленої гри. Він хоче подбати про вас.",CopySuccess:"Лист скопійовано 😉",CopyLink:" Скопіювати лист"},xc={PartnersH2:"Компанії, які дбають про здоров'я своїх працівників",PartnersP:"Зовнішні партнери та корпоративні донори, які підтримують проект."},bc={TitelH2:"Новини та оновлення",NewsP:"Останні досягнення та розробки проекту.","id-1":"Ваш текст 1","id-2":"Ваш текст 2","id-3":"Ваш текст 3","id-4":"Ваш текст 4","id-5":"Ваш текст 5","id-6":"Ваш текст 6","id-7":"Ваш текст 7","id-8":"Ваш текст 8","id-9":"Ваш текст 9"},yc={TitelH2:"Відгуки та підтримка",TextP:"Реальні відгуки користувачів та рекомендації відомих осіб та організацій.","id-1":{text:"Джон Доу, CEO Tech Innovators",hashtag:"#CURA - розумне рішення для кожного. Дякую за чудову роботу!👏"},"id-2":{text:"Джейн Сміт, Засновник Startup Hub",hashtag:"#CURA змінює наше життя. Чудова команда та продукт!🤩🤩🤩"},"id-3":{text:"Аліс Джонсон, Технічний підприємець",hashtag:"#CURA допомагає людям щодня. Браво за таку інновацію!👏🫡"},"id-4":{text:"Майкл Браун, Інвестор у Future Ventures",hashtag:"#CURA чудова! Чудова робота та потенціал!😻"},"id-5":{text:"Емілі Девіс, CEO Smart Solutions",hashtag:"#CURA - це зміна гри. Дивовижна команда!💙💛"},"id-6":{text:"Даніель Вілсон, Співзасновник NextGen Startups",hashtag:"#CURA крісла неймовірні! Дякую за якість!"},"id-7":{text:"Софія Міллер, Серійний підприємець",hashtag:"#CURA - блискуча ідея! Чудовий продукт і сервіс!😉"},"id-8":{text:"Джеймс Андерсон, Технічний інвестор",hashtag:"#CURA підвищує комфорт. Чудова інновація для всіх!"},"id-9":{text:"Лінда Мартінес, Засновник Wellness Tech",hashtag:"#CURA - чудова ідея для офісу. Дякую за вашу роботу!"}},Tc={AboutUs:nc,Header:oc,MenuButton:ic,Footer:rc,LanguageSelector:ac,Background:sc,ContentHomePage:lc,HomeComponent:cc,EmailTicket:dc,Subscribe:uc,OurContacts:pc,ErrorPage:fc,ITgame:mc,ITswiper:hc,Project:gc,HelpCards:vc,Partners:xc,News:bc,Feedback:yc},Cc={title:"Innovationsförderband",problemTitle:"DAS PROBLEM: Unsere Welt verliert bis zu 70 % der innovativen Ideen und Lösungen, die nicht einmal das Proof of Concept erreichen",problemText1:"Psychologische Schwierigkeiten auf verschiedenen Ebenen: Interne und externe psychologische Barrieren und Dimensionen",problemText2:"Multidisziplinäre Herausforderungen: Mangel an Fachwissen in Schlüsselbereichen wie Marketing, Recht, Finanzen. Fehlende Kompetenzen sind ein Hindernis für Innovatoren.",problemText3:"Konzeptuelle Hürden: Der lange und schwierige Weg von der Ideenfindung bis zum Proof of Concept stellt große Herausforderungen dar.",solutionTitle:"Lösung",solutionStrong:"Angelic Innovation Conveyor 'AIC':",solutionText:"Eine Plattform, die darauf ausgelegt ist, Innovationen in der Pre-Seed-Phase so schnell wie möglich zu sammeln und zu testen. Einerseits ist die Lösung individualisiert und gleichzeitig wird das Prinzip des Förderbands angewendet.",solutionPoint1:"Schaffung einer psychologisch sicheren Umgebung",solutionPoint2:"Angepasste Vorlagen",solutionPoint3:"Umfassende Unterstützung",solutionPoint4:"Schnelle Proof of Concept",solutionPoint5:"Innovative Filterung",solutionPoint6:"Schnelle und gründliche Analyse",solutionPoint7:"Verankerung in der DNA eines Startups",featuresTitle:"PRODUKT UND FUNKTIONEN",featuresText1:"Ideenpitch: Der Innovator stellt die Idee auf der Plattform unter Verwendung angepasster Vorlagen in einer psychologisch sicheren Umgebung vor.",featuresText2:"Blitzschnelle Innovationsvalidierung: Nach Unterzeichnung des NDA und der adaptiven Präsentation wird die Innovation einer schnellen Pipeline-Validierung und Filterung unterzogen.",featuresText3:"Umfassende und tiefgehende Validierung: Sobald das Konzept validiert ist, wird eine umfassende Analyse der Innovation durchgeführt und ein Abschlussbericht erstellt.",featuresText4:"Mehrstufige Bewertung: Informationen werden an spezialisierte Abteilungen zur umfassenden Bewertung weitergeleitet",featuresText5:"Psychologische Sicherheit + Förderbandansatz = 'AIC'",benefitsTitle:"VORTEILE für Innovatoren",benefitsText1:"Psychologischer Komfort: Innovatoren haben Zugang zu einer psychologisch sicheren Umgebung, in der ihre emotionalen Bedürfnisse berücksichtigt werden und der Stresspegel bei der Präsentation ihrer Ideen reduziert wird, was ihnen ermöglicht, sich auf Innovationen zu konzentrieren",benefitsText2:"Beschleunigte Optimierung von Prozessen und Ressourcen: Mit blitzschneller Innovationsvalidierung und integrierten Vorlagen für Präsentationen und Videos sparen Innovatoren Zeit und Ressourcen, indem sie schnellen Zugang zur Bewertung ihrer Ideen und potenziellen Investoren erhalten.",benefitsText3:"Effektive Unterstützung und Entwicklung: Innovatoren können sich maximal auf ihre innovativen Lösungen konzentrieren. Das Mutterunternehmen kümmert sich um prozedurale Angelegenheiten.",customerSegmentsTitle:"'AIC' KUNDENSEGMENTE",customerText1:"Anfänger-Innovatoren: Menschen, die zum ersten Mal versuchen, Startups oder innovative Projekte zu erstellen.",customerText2:"Forscher: Wissenschafts- und Forschungsexperten, die an der Kommerzialisierung ihrer Forschung interessiert sind.",customerText3:"Erfahrene Innovatoren: Menschen mit Erfahrung in der Entwicklung und Umsetzung innovativer Projekte, die nach Unterstützung und neuen Möglichkeiten suchen.",searchTitle:"SUCHEN nach Innovationen in der Welt",differenceTitle:"WAS uns unterscheidet",differenceText1:"Innovatives Konzept: Wir arbeiten mit der frühesten Phase einer Idee. Von dem Moment an, in dem sie dem Innovator zum ersten Mal in den Sinn kommt. Unser Konzept ermöglicht es uns, in den frühesten Phasen zu arbeiten und die innovativsten Lösungen zu identifizieren.",differenceText2:"Innovatives Konzept zur Schaffung zukünftiger Unternehmen: Wir entwickeln und vollenden die Schaffung von 'Reinventing Organizations' basierend auf dem Prinzip der gemeinsamen Beteiligung, Verantwortung und Einkommensteilung unter allen Mitarbeitern, vom Top-Management bis zu den Frontarbeitern, was sich grundlegend von den bestehenden Unternehmen unterscheidet.",differenceText3:"Investitionsgewinnung: Die Aufmerksamkeit der Investoren liegt darauf, keine Investitionen zu verlieren, während die Aufmerksamkeit der Gründer darauf liegt, um jeden Preis lebenswichtige Finanzen zu beschaffen. Und die Idee? Innovation? Sie bleibt unbeachtet und wird den Umständen entsprechend angepasst. Lösung: Ein Konzept schaffen, bei dem alle Parteien ruhig das erhalten, was sie brauchen."},Sc={header:"KOPFZEILE",order:"SPENDE",home:"STARTSEITE",about:"PROBLEM",project:"PROJEKT",rewards:"HILFE",contact:"KONTAKT"},Pc={menu:"Menü"},wc={footerAdditionalText:"Innovationsförderband",usefulLinks:"Nützliche Links",blog:"Blog",projects:"Projekte",contactUs:"Kontaktieren Sie uns",socialMedia:"SOZIALE MEDIEN"},Ec={language:"Sprache"},kc={slide1Text:"Ein groß angelegtes Projekt zur Bewältigung des globalen Problems des sitzenden Lebensstils."},Ic={mainSectionTitle:"Wir entwickeln groß angelegte Technologien, um die Schäden eines sitzenden Lebensstils zu minimieren.",mainSectionDescription:"Deine Beschreibung oder anderer Inhalt hier.",card1Title:"Ein sitzender Lebensstil führt zu chronischen Schmerzen, Skoliose und anderen Gesundheitsproblemen.",card2Title:"Das Ziel ist es, Technologien zu entwickeln, um die Schäden durch langes Sitzen zu minimieren.",card3Title:"Wir entwickeln Technologien, die individuell auf die physiologischen Bedürfnisse jedes Benutzers abgestimmt sind und die Schäden durch langes Sitzen reduzieren."},Rc={projectTitle:"Ein Problem von planetarischem Ausmaß.",goalAmount:"Wie viele Menschen glauben Sie, verbringen heute mehr als 4 Stunden am Tag im Sitzen? Bei der Arbeit, zu Hause, beim Autofahren, Reisen, im Urlaub?",currentAmount:"Dies ist ein Problem, das Milliarden von Menschen auf der ganzen Welt betrifft. Langes Sitzen führt zu chronischen Schmerzen, Skoliose und anderen gesundheitlichen Problemen. Ein sitzender Lebensstil hat negative Auswirkungen auf die Lebensqualität und Produktivität der Menschen und verursacht schwerwiegende langfristige Folgen. Dieses globale Problem erfordert sofortige Maßnahmen.",numberOfInvestors:"UNSERE INVESTOREN",amountToCollect:"WIR MÜSSEN SAMMELN",orderButton:"SPENDE"},Mc={formTitle:"Brauchen Sie Hilfe? Ein Ticket eröffnen",formDescription:"Unser Support-Team wird sich so schnell wie möglich per E-Mail bei Ihnen melden.",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Gib Deine Nachricht ein",submitButton:"Ticket senden",sending:"Wird gesendet...",error:"Fehler beim Absenden des Formulars."},Ac={subscribeTitle:"Abonnieren, um zukünftige Updates zu erhalten",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",subscribeButton:"Abonnieren",sending:"Wird gesendet...",error:"Fehler beim Absenden des Formulars.",noSpam:"Kein Spam garantiert, also bitte keine Spam-Mails senden."},$c={founderName:"Maksym Morenets",founderPosition:"Gründer von Angel Systems",socialMedia:"SOZIALE MEDIEN"},Lc={CommingSoon:" Kommt bald ",ThankYou:"Unsere Website ist derzeit in der Entwicklung. Wir sollten bald fertig sein. Vielen Dank für Ihre Geduld."},jc={h2:"Die:",span:" 'Cura'","h2-1":"   Technologie",p:"Ein intelligenter Stuhl, der sich individuell an die physiologischen Bedürfnisse jedes Benutzers anpasst."},zc={h2:"Partnerschaft in der Entwicklung",p:"Partner: Innosuisse, Swiss HealthTech Centre."},Dc={TitleH1:"Wir sind nicht zum Sitzen gemacht, aber wenn wir es tun, machen wir es weise.",AdaptationH2:"Individuelle Anpassung",AdaptationP:"Die Technologie bietet eine einzigartige Lösung, die sich vollständig an die physiologischen Merkmale jedes Benutzers anpasst. Mithilfe fortschrittlicher Datenanalysealgorithmen überwacht Cura den aktuellen Zustand Ihres Körpers und passt sich automatisch Ihren Bedürfnissen an, um optimalen Halt und Komfort zu bieten.",OptimisationH2:"Optimierung eines sitzenden Lebensstils",OptimisationP:"Die Technologie analysiert Ihre Haltung und Aktivität in Echtzeit und passt die Unterstützung für Ihre Wirbelsäule und andere gefährdete Körperteile an. Dies hilft, die Entwicklung von Schmerzen und Unbehagen zu verhindern.",InnovationH2:"Innovatives Überwachungssystem",InnovationP:"Ein Hauptmerkmal von Cura ist die kontinuierliche Überwachung des Zustands Ihres Körpers. Das System sammelt Daten über Ihre Haltung, Aktivität und allgemeine Gesundheit, um die Unterstützung zu personalisieren. Dadurch ist das System auf Ihre Bedürfnisse vorbereitet, bevor der erste Kontakt erfolgt, was den Komfort maximiert und Schäden minimiert.",UniqueH3:"Einzigartige Cura-Technologie",UniqueP:"Cura passt sich nicht nur an individuelle Bedürfnisse an, sondern interagiert aktiv mit Ihrem Körper, um ihm zu helfen, in seine natürliche, ursprüngliche Position zurückzukehren. Die Technologie umfasst eine personalisierte Anpassung, kontinuierliche Echtzeitüberwachung und Berücksichtigung der physischen Bedürfnisse, bietet umfassende Unterstützung und hilft bei der Genesung.",LargeScaleH3:"Skalierbare und vielseitige Cura-Technologie:",LargeScaleP:"Unsere Technologie ist nicht nur ein intelligenter Stuhl, sondern eine vielseitige Lösung, die in eine Vielzahl von Umgebungen integriert werden kann. Ob zu Hause, im Büro, im Auto oder im Flugzeug - Cura bietet ständig Komfort und Unterstützung, angepasst an Ihre physiologischen Bedürfnisse.",BoltLargeScale:"Diese Technologie geht über Standardlösungen hinaus und bietet einen umfassenden Ansatz zur Erhaltung der Gesundheit und des Wohlbefindens, der in einer Vielzahl von Situationen und Bedingungen anwendbar ist. Cura ist ein Schritt nach vorn bei der Schaffung einer Umgebung, die überall und jederzeit für Sie sorgt.",LargeScaleBig:"Wenn wir sitzen, machen wir es weise."},Nc={HelpH2:"Hilf uns",HelpP:"Um die Technologie zur 'fertigen' Stufe zu bringen. Wir brauchen Ihre Unterstützung",CardTitelH3:"Vielen Dank für Ihre Unterstützung",CardTextP:"Du bist ein großartiger Mensch",Card2TitelH3:"Wir brauchen so viele Informationen wie möglich.",Card2TextP:"Du bist ein großartiger Mensch",Card3TitelH3:"Senden Sie dies an Ihren Arbeitgeber oder den Entwickler Ihres Lieblingsspiels. Er möchte sich um Sie kümmern.",CopySuccess:"Der Brief wurde kopiert 😉",CopyLink:" Brief kopieren"},Oc={PartnersH2:"Unternehmen, die sich um die Gesundheit ihrer Mitarbeiter kümmern",PartnersP:"Externe Partner und Unternehmensspender unterstützen das Projekt."},Bc={TitelH2:"Nachrichten & Updates",NewsP:"Aktuelle Errungenschaften und Entwicklungen des Projekts.","id-1":"Ihr Text 1","id-2":"Ihr Text 2","id-3":"Ihr Text 3","id-4":"Ihr Text 4","id-5":"Ihr Text 5","id-6":"Ihr Text 6","id-7":"Ihr Text 7","id-8":"Ihr Text 8","id-9":"Ihr Text 9"},Hc={TitelH2:"Feedback & Unterstützung",TextP:"Echte Rückmeldungen von Benutzern und Empfehlungen von bekannten Personen und Organisationen.","id-1":{text:"John Doe, CEO von Tech Innovators",hashtag:"#CURA ist eine intelligente Lösung für alle. Danke für diese großartige Arbeit!👏"},"id-2":{text:"Jane Smith, Gründerin von Startup Hub",hashtag:"#CURA verändert unser Leben. Super Team und Produkt!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Tech-Unternehmerin",hashtag:"#CURA hilft den Menschen jeden Tag. Bravo für diese Innovation!👏🫡"},"id-4":{text:"Michael Brown, Investor bei Future Ventures",hashtag:"#CURA ist großartig! Ausgezeichnete Arbeit und Potenzial!😻"},"id-5":{text:"Emily Davis, CEO von Smart Solutions",hashtag:"#CURA ist ein Game Changer. Unglaubliches Team!💙💛"},"id-6":{text:"Daniel Wilson, Mitbegründer von NextGen Startups",hashtag:"#CURA-Stühle sind unglaublich! Danke für die Qualität!"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA ist eine brillante Idee! Tolles Produkt und Service!😉"},"id-8":{text:"James Anderson, Tech-Investor",hashtag:"#CURA verbessert den Komfort. Große Innovation für alle!"},"id-9":{text:"Linda Martinez, Gründerin von Wellness Tech",hashtag:"#CURA ist eine großartige Idee fürs Büro. Danke für Ihre Arbeit!"}},Uc={AboutUs:Cc,Header:Sc,MenuButton:Pc,Footer:wc,LanguageSelector:Ec,Background:kc,ContentHomePage:Ic,HomeComponent:Rc,EmailTicket:Mc,Subscribe:Ac,OurContacts:$c,ErrorPage:Lc,ITgame:jc,ITswiper:zc,Project:Dc,HelpCards:Nc,Partners:Oc,News:Bc,Feedback:Hc},Fc={title:"Innovación Conveyor",problemTitle:"EL PROBLEMA: Nuestro mundo pierde hasta el 70% de ideas y soluciones innovadoras que ni siquiera sobreviven a la prueba de concepto",problemText1:"Dificultades psicológicas en diferentes niveles: Barreras y dimensiones psicológicas internas y externas",problemText2:"Desafíos multidisciplinarios: Falta de experiencia en áreas clave, marketing, legal, finanzas. La falta de competencias es una barrera para los innovadores.",problemText3:"Embrollo conceptual: El largo y difícil camino desde la concepción de la idea hasta la prueba de concepto, creando serios desafíos.",solutionTitle:"Solución",solutionStrong:"Conveyor de Innovación Angélica 'AIC':",solutionText:"Una plataforma diseñada para acumular y probar innovaciones en la etapa Pre-semilla lo más rápido posible. Por un lado, la solución está individualizada y al mismo tiempo se aplica el principio de la cinta transportadora.",solutionPoint1:"Creación de un entorno psicológicamente seguro",solutionPoint2:"Plantillas adaptadas",solutionPoint3:"Soporte completo",solutionPoint4:"Prueba de concepto rápida",solutionPoint5:"Filtrado innovador",solutionPoint6:"Análisis rápido y profundo",solutionPoint7:"Incorporación en el ADN de una startup",featuresTitle:"PRODUCTO Y CARACTERÍSTICAS",featuresText1:"Presentación de la idea: El innovador presenta la idea en la plataforma utilizando plantillas personalizadas en un entorno psicológicamente seguro.",featuresText2:"Validación de innovación ultrarrápida: Después de firmar el NDA y la presentación adaptativa, la innovación se somete a una validación y filtrado rápidos en la línea de producción.",featuresText3:"Validación completa y profunda: Una vez validado el concepto, se lleva a cabo un análisis exhaustivo de la innovación y se prepara un informe final.",featuresText4:"Evaluación multinivel: La información se envía a departamentos especializados para una evaluación integral",featuresText5:"Seguridad psicológica + Enfoque en cinta transportadora = 'AIC'",benefitsTitle:"BENEFICIOS para innovadores",benefitsText1:"Comodidad psicológica: Los innovadores tendrán acceso a un entorno psicológicamente seguro donde se tendrán en cuenta sus necesidades emocionales y se reducirán los niveles de estrés al presentar sus ideas, permitiéndoles centrarse en la innovación",benefitsText2:"Optimización acelerada de procesos y recursos: Con la validación ultrarrápida de la innovación y las plantillas integradas para presentaciones y videos, los innovadores ahorran tiempo y recursos al obtener un acceso rápido para evaluar sus ideas y posibles inversores.",benefitsText3:"Soporte y desarrollo efectivos: Los innovadores pueden concentrarse al máximo en sus soluciones innovadoras. La empresa matriz se encargará de los asuntos procedimentales.",customerSegmentsTitle:"SEGMENTOS DE CLIENTES 'AIC'",customerText1:"Innovadores principiantes: Personas que intentan por primera vez crear startups o proyectos innovadores.",customerText2:"Investigadores: Profesionales de la ciencia y la investigación interesados en comercializar su investigación.",customerText3:"Innovadores experimentados: Personas con experiencia en el desarrollo e implementación de proyectos innovadores, que buscan apoyo y nuevas oportunidades.",searchTitle:"BÚSQUEDA de innovaciones en el mundo",differenceTitle:"LO QUE nos diferencia",differenceText1:"Concepto innovador: Trabajamos con la etapa más temprana de una idea. Desde el momento en que apareció por primera vez para el innovador. Nuestro concepto nos permite trabajar en las etapas más tempranas e identificar las soluciones más innovadoras.",differenceText2:"Concepto innovador para crear empresas futuras: Desarrollamos y completamos la creación de 'Organizaciones Reinventadas' basadas en el principio de compartir participación, responsabilidad e ingresos entre todos los empleados, desde la alta dirección hasta los trabajadores de primera línea, y esto es fundamentalmente diferente de las existentes.",differenceText3:"Atracción de inversiones: La atención de los inversores se centra en no perder inversiones, mientras que la atención de los fundadores se centra en atraer financiamiento vital a cualquier costo. ¿Y la idea? ¿La innovación? Queda desatendida y se transforma según las circunstancias. Solución: Crear un concepto donde todas las partes reciban tranquilamente lo que necesitan."},_c={header:"ENCABEZADO",order:"DONAR",home:"INICIO",about:"PROBLEMA",project:"PROYECTO",rewards:"AYUDA",contact:"CONTACTO"},Vc={menu:"Menú"},qc={footerAdditionalText:"Innovación Conveyor",usefulLinks:"Enlaces útiles",blog:"Blog",projects:"Proyectos",contactUs:"Contáctenos",socialMedia:"REDES SOCIALES"},Wc={language:"Idioma"},Gc={slide1Text:"Un proyecto a gran escala para abordar el problema global del estilo de vida sedentario."},Yc={mainSectionTitle:"Estamos desarrollando tecnología a gran escala para minimizar los daños de un estilo de vida sedentario.",mainSectionDescription:"Tu descripción u otro contenido aquí.",card1Title:"Un estilo de vida sedentario conduce a dolor crónico, escoliosis y otros problemas de salud.",card2Title:"El objetivo es desarrollar tecnología para minimizar el daño de estar sentado por períodos prolongados.",card3Title:"Desarrollamos tecnología que se adapta individualmente a las necesidades fisiológicas de cada usuario, reduciendo el daño de estar sentado por períodos prolongados."},Kc={projectTitle:"Un problema de proporciones planetarias.",goalAmount:"¿Cuántas personas crees que hoy en día pasan más de 4 horas al día sentadas? ¿En el trabajo, en casa, conduciendo, viajando, de vacaciones?",currentAmount:"Este es un problema que afecta a miles de millones de personas en todo el mundo. Estar sentado por períodos prolongados lleva a dolor crónico, escoliosis y otros problemas de salud. Los estilos de vida sedentarios tienen un impacto negativo en la calidad de vida y productividad de las personas, causando graves consecuencias a largo plazo. Este problema global requiere una acción inmediata.",numberOfInvestors:"NUESTROS INVERSORES",amountToCollect:"TENEMOS QUE RECOLECTAR",orderButton:"DONAR"},Xc={formTitle:"¿Necesitas ayuda? Abre un Ticket",formDescription:"Nuestro equipo de soporte te responderá lo antes posible por correo electrónico.",namePlaceholder:"Tu nombre",emailPlaceholder:"Tu correo electrónico",messagePlaceholder:"Ingresa tu mensaje",submitButton:"Enviar Ticket",sending:"Enviando...",error:"Ocurrió un error al enviar el formulario."},Jc={subscribeTitle:"Suscríbete para recibir futuras actualizaciones",namePlaceholder:"Tu nombre",emailPlaceholder:"Tu correo electrónico",subscribeButton:"Suscribirse",sending:"Enviando...",error:"Ocurrió un error al enviar el formulario.",noSpam:"Garantizado sin spam, así que no envíes correos electrónicos no deseados."},Zc={founderName:"Maksym Morenets",founderPosition:"Fundador de Angel Systems",socialMedia:"REDES SOCIALES"},Qc={CommingSoon:" Próximamente ",ThankYou:"Nuestro sitio web está actualmente en desarrollo. Deberíamos terminar pronto. Gracias por tu paciencia."},ed={h2:"La:",span:" 'Cura'","h2-1":"   tecnología",p:"Una silla inteligente que se adapta individualmente a las necesidades fisiológicas de cada usuario."},td={h2:"Colaboración en el desarrollo ",p:"Socios: Innosuisse, Swiss HealthTech Centre."},nd={TitleH1:"No estamos hechos para sentarnos, pero si lo hacemos, hagámoslo sabiamente.",AdaptationH2:"Adaptación individual",AdaptationP:"La tecnología ofrece una solución única que se adapta completamente a las características fisiológicas de cada usuario. Utilizando algoritmos avanzados de análisis de datos, Cura monitorea el estado actual de tu cuerpo y se adapta automáticamente a tus necesidades, brindando soporte y comodidad óptimos.",OptimisationH2:"Optimización de un estilo de vida sedentario",OptimisationP:"La tecnología analiza tu postura y actividad en tiempo real, ajustando el soporte para tu columna vertebral y otras partes vulnerables del cuerpo. Esto ayuda a prevenir el desarrollo de dolor y molestias.",InnovationH2:"Sistema de monitoreo innovador",InnovationP:"Una característica clave de Cura es la monitorización constante de la condición de tu cuerpo. El sistema recopila datos sobre tu postura, actividad y salud general para personalizar el soporte. Esto permite que el sistema esté preparado para tus necesidades antes del primer contacto, maximizando la comodidad y minimizando el daño.",UniqueH3:"Tecnología única de Cura ",UniqueP:"Cura no solo se adapta a las necesidades individuales, sino que interactúa activamente con tu cuerpo para ayudarlo a volver a su posición natural. La tecnología incorpora adaptación personalizada, monitoreo continuo en tiempo real y consideración de las necesidades físicas, brindando soporte integral y asistencia en la recuperación.",LargeScaleH3:"Tecnología escalable y versátil de Cura:",LargeScaleP:"Nuestra tecnología no es solo una silla inteligente, sino una solución versátil que puede integrarse en una amplia variedad de entornos. Ya sea que estés en casa, en la oficina, en el coche o en un avión, Cura proporciona comodidad y soporte constantes, adaptándose a tus necesidades fisiológicas.",BoltLargeScale:"Esta tecnología va más allá de las soluciones estándar, ofreciendo un enfoque integral para mantener la salud y el bienestar que puede aplicarse a una amplia variedad de situaciones y condiciones. Cura es un paso adelante en la creación de un entorno que cuida de ti en cualquier lugar, en cualquier momento.",LargeScaleBig:"Si vamos a sentarnos, hagámoslo sabiamente."},od={HelpH2:"Ayúdanos",HelpP:"Para llevar la tecnología a la etapa de 'lista'. Necesitamos tu apoyo",CardTitelH3:"Gracias por apoyarnos ",CardTextP:"Eres una gran persona",Card2TitelH3:"Necesitamos tanta información como sea posible.",Card2TextP:"Eres una gran persona",Card3TitelH3:"Envía esto a tu empleador o al desarrollador de tu juego favorito. Quiere cuidarte.",CopySuccess:"La carta fue copiada 😉",CopyLink:" Copiar carta"},id={PartnersH2:"Empresas que se preocupan por la salud de sus empleados",PartnersP:"Socios externos y patrocinadores corporativos apoyan el proyecto."},rd={TitelH2:"Noticias y Actualizaciones",NewsP:"Logros y desarrollos recientes del proyecto.","id-1":"Tu texto 1","id-2":"Tu texto 2","id-3":"Tu texto 3","id-4":"Tu texto 4","id-5":"Tu texto 5","id-6":"Tu texto 6","id-7":"Tu texto 7","id-8":"Tu texto 8","id-9":"Tu texto 9"},ad={TitelH2:"Comentarios y Apoyo",TextP:"Comentarios reales de usuarios y recomendaciones de personas y organizaciones conocidas.","id-1":{text:"John Doe, CEO de Tech Innovators",hashtag:"#CURA es una solución inteligente para todos. ¡Gracias por este gran trabajo!👏"},"id-2":{text:"Jane Smith, Fundadora de Startup Hub",hashtag:"#CURA está cambiando nuestras vidas. ¡Gran equipo y producto!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Emprendedora tecnológica",hashtag:"#CURA ayuda a las personas todos los días. ¡Bravo por esta innovación!👏🫡"},"id-4":{text:"Michael Brown, Inversor en Future Ventures",hashtag:"#CURA es increíble. ¡Excelente trabajo y potencial!😻"},"id-5":{text:"Emily Davis, CEO de Smart Solutions",hashtag:"#CURA es un cambio radical. ¡Equipo increíble!💙💛"},"id-6":{text:"Daniel Wilson, Cofundador de NextGen Startups",hashtag:"#Sillas CURA son asombrosas. ¡Gracias por la calidad!"},"id-7":{text:"Sophia Miller, Emprendedora en serie",hashtag:"#CURA es una idea brillante. ¡Gran producto y servicio!😉"},"id-8":{text:"James Anderson, Inversor en tecnología",hashtag:"#CURA mejora la comodidad. ¡Gran innovación para todos!"},"id-9":{text:"Linda Martinez, Fundadora de Wellness Tech",hashtag:"#CURA es una gran idea para oficinas. ¡Gracias por su trabajo!"}},sd={AboutUs:Fc,Header:_c,MenuButton:Vc,Footer:qc,LanguageSelector:Wc,Background:Gc,ContentHomePage:Yc,HomeComponent:Kc,EmailTicket:Xc,Subscribe:Jc,OurContacts:Zc,ErrorPage:Qc,ITgame:ed,ITswiper:td,Project:nd,HelpCards:od,Partners:id,News:rd,Feedback:ad},ld={title:"Convoyeur d'Innovation",problemTitle:"LE PROBLÈME : Notre monde perd jusqu'à 70% des idées et solutions innovantes qui ne survivent même pas à la preuve de concept",problemText1:"Difficultés psychologiques à différents niveaux : Barrières et dimensions psychologiques internes et externes",problemText2:"Défis multidisciplinaires : Manque d'expertise dans des domaines clés, marketing, juridique, finance. Le manque de compétences est un obstacle pour les innovateurs.",problemText3:"Embouteillage conceptuel : Le long et difficile parcours de l'émergence de l'idée à la preuve de concept, créant de sérieux défis.",solutionTitle:"Solution",solutionStrong:"Convoyeur d'Innovation Angélique 'CIA' :",solutionText:"Une plateforme conçue pour accumuler et tester les innovations au stade Pré-amorçage aussi rapidement que possible. D'une part, la solution est individualisée et en même temps, le principe de la chaîne de production est appliqué.",solutionPoint1:"Créer un environnement psychologiquement sûr",solutionPoint2:"Modèles adaptés",solutionPoint3:"Support complet",solutionPoint4:"Preuve de concept rapide",solutionPoint5:"Filtrage innovant",solutionPoint6:"Analyse rapide et approfondie",solutionPoint7:"Intégration dans l'ADN d'une startup",featuresTitle:"PRODUIT ET FONCTIONNALITÉS",featuresText1:"Présentation de l'idée : L'innovateur présente l'idée sur la plateforme en utilisant des modèles personnalisés dans un environnement psychologiquement sûr.",featuresText2:"Validation éclair de l'innovation : Après la signature de l'NDA et la présentation adaptative, l'innovation est soumise à une validation et un filtrage rapides.",featuresText3:"Validation complète et approfondie : Une fois le concept validé, une analyse complète de l'innovation est effectuée et un rapport final est préparé.",featuresText4:"Évaluation à plusieurs niveaux : Les informations sont envoyées aux départements spécialisés pour une évaluation complète",featuresText5:"Sécurité psychologique + Approche par convoyeur = 'CIA'",benefitsTitle:"AVANTAGES pour les innovateurs",benefitsText1:"Confort psychologique : Les innovateurs auront accès à un environnement psychologiquement sûr où leurs besoins émotionnels sont pris en compte et où les niveaux de stress sont réduits lorsqu'ils présentent leurs idées, leur permettant de se concentrer sur l'innovation",benefitsText2:"Optimisation accélérée des processus et des ressources : Avec la validation éclair de l'innovation et les modèles intégrés pour les présentations et les vidéos, les innovateurs gagnent du temps et des ressources en obtenant un accès rapide pour évaluer leurs idées et des investisseurs potentiels.",benefitsText3:"Soutien et développement efficaces : Les innovateurs peuvent se concentrer autant que possible sur leurs solutions innovantes. La société mère s'occupe des questions procédurales.",customerSegmentsTitle:"'CIA' SEGMENTS DE CLIENTS",customerText1:"Innovateurs débutants : Les personnes qui tentent de créer des startups ou des projets innovants pour la première fois.",customerText2:"Chercheurs : Professionnels de la science et de la recherche intéressés par la commercialisation de leurs recherches.",customerText3:"Innovateurs expérimentés : Les personnes ayant de l'expérience dans le développement et la mise en œuvre de projets innovants, à la recherche de soutien et de nouvelles opportunités.",searchTitle:"RECHERCHE d'innovations dans le monde",differenceTitle:"CE qui nous distingue",differenceText1:"Concept innovant : Nous travaillons avec la toute première phase d'une idée. Dès qu'elle apparaît pour la première fois à l'innovateur. Notre concept permet de travailler dès les premières étapes et d'identifier les solutions les plus innovantes.",differenceText2:"Concept innovant de création d'entreprises futures : Nous développons et achevons la création d'organisations réinventées basées sur le principe de partage de la participation, de la responsabilité et des revenus entre tous les employés, de la direction aux travailleurs de première ligne, ce qui est fondamentalement différent des entreprises existantes.",differenceText3:"Attraction des investissements : L'attention des investisseurs est focalisée sur la question de ne pas perdre d'investissements, tandis que l'attention des fondateurs est sur l'attraction de financements vitaux à tout prix. Et l'idée? L'innovation? Elle reste négligée et est transformée en fonction des circonstances. Solution : Créer un concept où toutes les parties reçoivent calmement ce dont elles ont besoin."},cd={header:"EN-TÊTE",order:"DONNER",home:"ACCUEIL",about:"PROBLÈME",project:"PROJET",rewards:"AIDE",contact:"CONTACT"},dd={menu:"Menu"},ud={footerAdditionalText:"Convoyeur d'Innovation",usefulLinks:"Liens Utiles",blog:"Blog",projects:"Projets",contactUs:"Contactez-nous",socialMedia:"RÉSEAUX SOCIAUX"},pd={language:"Langue"},fd={slide1Text:"Un projet d'envergure pour résoudre le problème mondial du mode de vie sédentaire."},md={mainSectionTitle:"Nous développons une technologie à grande échelle pour minimiser les effets néfastes du mode de vie sédentaire.",mainSectionDescription:"Votre description ou autre contenu ici.",card1Title:"Un mode de vie sédentaire entraîne des douleurs chroniques, une scoliose et d'autres problèmes de santé.",card2Title:"L'objectif est de développer une technologie pour minimiser les effets néfastes de la position assise prolongée.",card3Title:"Nous développons une technologie qui s'adapte individuellement aux besoins physiologiques de chaque utilisateur, réduisant ainsi les effets néfastes de la position assise prolongée."},hd={projectTitle:"Un problème de proportions planétaires.",goalAmount:"À votre avis, combien de personnes aujourd'hui passent plus de 4 heures par jour assises ? Au travail, à la maison, en conduisant, en voyage, en vacances ?",currentAmount:"C'est un problème qui touche des milliards de personnes dans le monde entier. La position assise prolongée entraîne des douleurs chroniques, une scoliose et d'autres problèmes de santé. Les modes de vie sédentaires ont un impact négatif sur la qualité de vie et la productivité des personnes, provoquant de graves conséquences à long terme. Ce problème mondial nécessite une action immédiate.",numberOfInvestors:"NOS INVESTISSEURS",amountToCollect:"NOUS DEVONS COLLECTER",orderButton:"DONNER"},gd={formTitle:"Besoin d'aide ? Ouvrir un ticket",formDescription:"Notre équipe de support vous répondra dès que possible par email.",namePlaceholder:"Votre nom",emailPlaceholder:"Votre email",messagePlaceholder:"Entrez votre message",submitButton:"Soumettre un ticket",sending:"Envoi...",error:"Une erreur s'est produite lors de la soumission du formulaire."},vd={subscribeTitle:"Abonnez-vous pour recevoir les futures mises à jour",namePlaceholder:"Votre nom",emailPlaceholder:"Votre email",subscribeButton:"S'abonner",sending:"Envoi...",error:"Une erreur s'est produite lors de la soumission du formulaire.",noSpam:"Garantie sans spam, alors ne nous envoyez pas de spam."},xd={founderName:"Maksym Morenets",founderPosition:"Fondateur de Angel Systems",socialMedia:"RÉSEAUX SOCIAUX"},bd={CommingSoon:" Bientôt disponible ",ThankYou:"Notre site est actuellement en cours de développement. Nous devrions avoir terminé bientôt. Merci pour votre patience."},yd={h2:"La technologie:",span:" 'Cura'","h2-1":" ",p:"Une chaise intelligente qui s'adapte individuellement aux besoins physiologiques de chaque utilisateur."},Td={h2:"Partenariat en développement",p:"Partenaires : Innosuisse, Swiss HealthTech Centre."},Cd={TitleH1:"Nous ne sommes pas faits pour rester assis, mais si nous le faisons, faisons-le intelligemment.",AdaptationH2:"Adaptation individuelle",AdaptationP:"La technologie offre une solution unique qui s'adapte pleinement aux caractéristiques physiologiques de chaque utilisateur. Grâce à des algorithmes avancés d'analyse de données, Cura surveille l'état actuel de votre corps et s'adapte automatiquement à vos besoins, offrant un soutien et un confort optimaux.",OptimisationH2:"Optimisation d'un mode de vie sédentaire",OptimisationP:"La technologie analyse en temps réel votre posture et votre activité, ajustant le soutien pour votre colonne vertébrale et d'autres parties vulnérables du corps. Cela aide à prévenir le développement de douleurs et d'inconforts.",InnovationH2:"Système de surveillance innovant",InnovationP:"Une caractéristique clé de Cura est la surveillance continue de l'état de votre corps. Le système collecte des données sur votre posture, votre activité et votre santé générale pour personnaliser le soutien. Cela permet au système d'être prêt à répondre à vos besoins avant même le premier contact, maximisant ainsi le confort et minimisant les effets néfastes.",UniqueH3:"Technologie unique de Cura",UniqueP:"Cura ne s'adapte pas seulement aux besoins individuels, elle interagit activement avec votre corps pour l'aider à retrouver sa position naturelle. La technologie intègre une adaptation personnalisée, une surveillance continue en temps réel et la prise en compte des besoins physiques, offrant un soutien complet et favorisant la récupération.",LargeScaleH3:"Technologie évolutive et polyvalente de Cura :",LargeScaleP:"Notre technologie n'est pas seulement une chaise intelligente, mais une solution polyvalente qui peut être intégrée dans divers environnements. Que vous soyez à la maison, au bureau, en voiture ou en avion, Cura offre un confort et un soutien constants, en s'adaptant à vos besoins physiologiques.",BoltLargeScale:"Cette technologie dépasse les solutions standard, offrant une approche globale pour maintenir la santé et le bien-être, applicable dans diverses situations et conditions. Cura est une avancée dans la création d'un environnement qui prend soin de vous partout, à tout moment.",LargeScaleBig:"Si nous devons rester assis, faisons-le intelligemment."},Sd={HelpH2:"Aidez-nous",HelpP:"Pour amener la technologie au stade 'prêt'. Nous avons besoin de votre soutien.",CardTitelH3:"Merci pour votre soutien",CardTextP:"Vous êtes une personne formidable",Card2TitelH3:"Nous avons besoin d'autant d'informations que possible.",Card2TextP:"Vous êtes une personne formidable",Card3TitelH3:"Envoyez cela à votre employeur ou au développeur de votre jeu préféré. Il veut prendre soin de vous.",CopySuccess:"La lettre a été copiée 😉",CopyLink:" Copier la lettre"},Pd={PartnersH2:"Entreprises qui se soucient de la santé de leurs employés",PartnersP:"Partenaires externes et donateurs corporatifs soutenant le projet."},wd={TitelH2:"Actualités & Mises à jour",NewsP:"Réalisations récentes et développements du projet.","id-1":"Votre texte 1","id-2":"Votre texte 2","id-3":"Votre texte 3","id-4":"Votre texte 4","id-5":"Votre texte 5","id-6":"Votre texte 6","id-7":"Votre texte 7","id-8":"Votre texte 8","id-9":"Votre texte 9"},Ed={TitelH2:"Retour d'information & soutien",TextP:"Avis réels des utilisateurs et endorsements de personnes et organisations bien connues.","id-1":{text:"John Doe, PDG de Tech Innovators",hashtag:"#CURA est une solution intelligente pour tout le monde. Merci pour ce grand travail !👏"},"id-2":{text:"Jane Smith, Fondatrice de Startup Hub",hashtag:"#CURA change nos vies. Super équipe et produit !🤩🤩🤩"},"id-3":{text:"Alice Johnson, Entrepreneuse Tech",hashtag:"#CURA aide les gens chaque jour. Bravo pour cette innovation !👏🫡"},"id-4":{text:"Michael Brown, Investisseur chez Future Ventures",hashtag:"#CURA est génial ! Excellent travail et potentiel !😻"},"id-5":{text:"Emily Davis, PDG de Smart Solutions",hashtag:"#CURA est un changeur de jeu. Équipe incroyable !💙💛"},"id-6":{text:"Daniel Wilson, Co-Fondateur de NextGen Startups",hashtag:"#CURA chaises sont incroyables ! Merci pour la qualité !"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA est une idée brillante ! Excellent produit et service !😉"},"id-8":{text:"James Anderson, Investisseur Tech",hashtag:"#CURA améliore le confort. Grande innovation pour tous !"},"id-9":{text:"Linda Martinez, Fondatrice de Wellness Tech",hashtag:"#CURA est une excellente idée pour le bureau. Merci pour votre travail !"}},kd={AboutUs:ld,Header:cd,MenuButton:dd,Footer:ud,LanguageSelector:pd,Background:fd,ContentHomePage:md,HomeComponent:hd,EmailTicket:gd,Subscribe:vd,OurContacts:xd,ErrorPage:bd,ITgame:yd,ITswiper:Td,Project:Cd,HelpCards:Sd,Partners:Pd,News:wd,Feedback:Ed},Id={en:{translation:tc},ua:{translation:Tc},de:{translation:Uc},es:{translation:sd},fr:{translation:kd}};qt.use(bo).use(Uo).init({resources:Id,fallbackLng:"en",interpolation:{escapeValue:!1}});const Rd=[{value:"en",label:"English"},{value:"de",label:"Deutsch"},{value:"ua",label:"Українська"},{value:"es",label:"Español"},{value:"fr",label:"Français"}],Md=48,Ad=re(Ns)`
  transition: background 1.9s ease-in-out;
  background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,pn=()=>{const[e,t]=ye.useState(null),n=!!e,o=qt.language,i=l=>{t(l.currentTarget)},r=()=>{t(null)},a=l=>{qt.changeLanguage(l),r()};return s.jsxs("div",{style:{marginRight:"1%"},"data-aos":"fade-up",children:[s.jsx(Ad,{"aria-label":"language",id:"language-menu-button","aria-controls":n?"language-menu":void 0,"aria-expanded":n?"true":void 0,"aria-haspopup":"true",onClick:i,children:s.jsx(xo,{style:{fill:"white"}})}),s.jsx(dl,{id:"language-menu",anchorEl:e,open:n,onClose:r,PaperProps:{style:{maxHeight:Md*4.5,width:"20ch"}},children:Rd.map(({value:l,label:c})=>s.jsx(bl,{selected:l===o,onClick:()=>a(l),children:c},l))})]})},$d=()=>{const{t:e}=ot(),[t,n]=d.useState({top:!1}),o=(a,l)=>c=>{c&&c.type==="keydown"&&(c.key==="Tab"||c.key==="Shift")||n({...t,[a]:l})},i=[{to:"/home",text:e("Header.home"),icon:s.jsx(uo,{})},{to:"/project",text:e("Header.project"),icon:s.jsx(po,{})},{to:"/contact",text:e("Header.contact"),icon:s.jsx(fo,{})},{to:"",text:e(""),icon:s.jsx("a",{href:"https://gofund.me/0c957ce8",children:s.jsx(Xn,{"data-aos":"fade-right",style:{margin:0,marginRight:10},children:e("Header.order")})})},{to:"#",text:e(""),icon:s.jsx(pn,{})}],r=a=>s.jsxs($i,{sx:{bgcolor:"#000"},onClick:o(a,!1),onKeyDown:o(a,!1),children:[s.jsx(so,{children:i.map(l=>s.jsx(fs,{disablePadding:!0,children:s.jsxs(es,{style:{color:"#00baff",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[s.jsx(ys,{style:{color:"#00baff"},children:l.icon}),s.jsx(Ce,{to:l.to,"data-translate":l.text,children:l.text})]})},l.to))}),s.jsx(Va,{})]});return s.jsx("div",{children:["top"].map(a=>s.jsxs(d.Fragment,{children:[s.jsx(Aa,{onClick:o(a,!0),"data-aos":"zoom-in",style:{fontSize:20,padding:0},children:e("MenuButton.menu")}),s.jsx(ea,{anchor:a,open:t[a],onClose:o(a,!1),onOpen:o(a,!0),children:r(a)})]},a))})},Ld=()=>{const{t:e}=ot(),t=Wt({query:"(max-width: 882px)"}),n=Fo();d.useEffect(()=>{Vn.init({duration:1e3})},[]);const o=n.pathname==="/contact",i=n.pathname==="/project";return s.jsx(hi,{style:{position:"fixed",top:0},children:s.jsxs(gi,{children:[s.jsx(vi,{"data-aos":"zoom-in",children:s.jsx(Ce,{to:"/home",children:s.jsx(Jn,{src:Zn,alt:"Logo"})})}),t?s.jsx($d,{}):s.jsxs(s.Fragment,{children:[s.jsx(pn,{})," ",s.jsx(Ce,{to:"/home","data-aos":"fade-down","data-aos-delay":"700",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"12px 16px",width:"40%"},children:e("Header.home")}),s.jsx("a",{href:"https://gofund.me/0c957ce8",children:s.jsx(Xn,{"data-aos":"fade-right",style:{margin:0,marginRight:10},children:e("Header.order")})}),!o&&!i&&s.jsxs(s.Fragment,{children:[s.jsx(Nt,{to:"/home",smooth:!0,duration:1e3,"data-aos":"fade-down","data-aos-delay":"300",children:e("Header.header")}),s.jsx(Nt,{to:"/about",smooth:!0,duration:1e3,"data-aos":"fade-up","data-aos-delay":"400",children:e("Header.about")}),s.jsx(Ce,{to:"/project","data-aos":"fade-down","data-aos-delay":"500",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"12px 16px",width:"40%"},children:e("Header.project")}),s.jsx(Nt,{to:"/help",smooth:!0,duration:1e3,"data-aos":"fade-up","data-aos-delay":"600",children:e("Header.rewards")}),s.jsx(Ce,{to:"/contact","data-aos":"fade-down","data-aos-delay":"700",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"8px 16px",width:"40%"},children:e("Header.contact")})]})]})]})})},jd=()=>s.jsxs(s.Fragment,{children:[s.jsx(Ld,{}),s.jsx(d.Suspense,{children:s.jsx(_o,{})}),s.jsx(Si,{})]}),zd=ne.div`
  //  width: 100%;
  // height: 100vh;

margin: 0 auto;
margin-top: 76px;

  @media (min-width: 768px) {
padding: 0, 30px, 0, 30px;
  }
  @media (min-width: 1439px) {
padding: 0, 80px, 0, 80px;
  }

`,Dd=ne.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
   height: 60%;
    background: linear-gradient(to bottom,
     transparent, 15%, #01283c);
  }
`,Nd=ne.div`
  position: absolute;
  bottom: 1%;
  left: 4%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  transform: none;
  opacity: 1;


  @media (min-width: 768px) {
    bottom: 2%;
    // transform: translate(-50%, -50%);
  }
  @media (min-width: 1439px) {
   bottom: 6%;
  }
`,Od=ne.h1`
  color: #ffffff;
  font-family: 'Proxima', sans-serif;
  text-align: start;
  display: flex;
  font-weight: 100;
  letter-spacing: -0.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1;
  border-radius: 10px;
    backdrop-filter: blur(20px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (min-width: 767px) {
    font-size: 3.5rem;
    max-width: 80%;
  }
  @media (min-width: 1439px) {
    font-size: 4.5rem;
  }
`;ne(Ce)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  transition:
    color 0.3s,
     background 0.3s;
  display: block;
  &:hover,
  &:focus {
     background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  }
`;const Je=ne.div`
//  width: 100%;
 
margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;

      @media (min-width: 768px) {
padding-left: 30px;
padding-right: 30px;
  }

    @media (min-width: 1024px) {
    height: 90vh;
  } 

  @media (min-width: 1439px) {
padding-left: 190px;
padding-right: 190px;
  }
`,Bd=ne.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    max-width: 450px;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 2px;
    background: currentcolor;
    width: 60%;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`,Hd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #fff;
font-family: "Proxima Nova", sans-serif;
    max-width: 450px;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`,Ud=ne.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: end;
    max-width: 450px;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: 2px;
    background: currentcolor;
    width: 60%;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`,Fd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #fff;
font-family: "Proxima Nova", sans-serif;
text-align: end;
max-width: 450px;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`,_d=ne.section`
background: #ffffff;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
  
  } 

@media (min-width: 1439px) {

  }
`,Vd=ne.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: center;

       &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: currentcolor;
    text-align: center;
}

@media (min-width: 768px) {
font-size: 4.1rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`,qd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }
`,Wd=ne.h3`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    max-width: 450px;
    text-align: end;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 60%;
    height: 2px;
    background: currentcolor;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`,Gd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
    max-width: 450px;
    text-align: end;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }
`,Yd=ne.h3`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: center;
    // max-width: 450px;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: currentcolor;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`,Kd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`,Xd=ne.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
font-weight: 800;
text-align: center;
  
@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`,Jd=ne.p`
font-size: 20px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
font-weight: 900;
text-decoration: underline;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  text-align: center;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
 text-align: center;
  }
`,mt=ne.div`
width: 100%;
margin: 0 auto;
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
  
  } 

@media (min-width: 1439px) {

  }

`,Zd=ne.img`
max-width: 400px;
height: 400px;
border-radius: 10px;
`,Qd="/assets/project-dekstop-265149cd.mp4",eu="/assets/project-mobile-f8ffdffe.mp4",tu="/assets/project-innovation-6ee3152f.webm",nu="/assets/Unique-f30a6798.png",ou=()=>{const{t:e}=ot(),t=Wt({query:"(max-width: 768px)"}),n=Wt({query:"(max-width: 1024px)"});return s.jsxs(zd,{children:[s.jsx(Dd,{children:s.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,children:[t?s.jsx("source",{src:eu,type:"video/mp4"}):s.jsx("source",{src:Qd,type:"video/mp4"}),"Your browser does not support the video tag."]})}),s.jsx(Nd,{children:s.jsx(Od,{children:e("Project.TitleH1")})}),s.jsxs(Je,{style:{display:"flex"},children:[s.jsxs(mt,{children:[s.jsx(Bd,{children:e("Project.AdaptationH2")}),s.jsx(Hd,{children:e("Project.AdaptationP")})]})," ",n?s.jsx("div",{style:{display:"none"}}):s.jsx(jt,{src:Vo,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(Je,{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"nowrap"},children:[s.jsxs(mt,{style:{alignItems:"flex-end"},children:[s.jsx(Ud,{children:e("Project.OptimisationH2")}),s.jsx(Fd,{children:e("Project.OptimisationP")})]}),n?s.jsx("div",{style:{display:"none"}}):s.jsx(jt,{src:qo,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(_d,{children:[s.jsxs(Je,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(Vd,{children:e("Project.InnovationH2")}),s.jsx(qd,{children:e("Project.InnovationP")}),s.jsx(jt,{style:{paddingTop:80},src:tu,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(Je,{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"nowrap",marginTop:80,alignItems:"center"},children:[s.jsxs(mt,{style:{alignItems:"flex-end",paddingTop:80},children:[s.jsx(Wd,{children:e("Project.UniqueH3")}),s.jsx(Gd,{children:e("Project.UniqueP")})," "]}),n?s.jsx("div",{style:{display:"none"}}):s.jsx(Zd,{src:nu,alt:"Unique"})]}),s.jsx(Je,{children:s.jsxs(mt,{style:{alignItems:"center",maxWidth:1e3},children:[s.jsx(Yd,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleH3")}),s.jsx(Kd,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleP")}),s.jsx(Xd,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.BoltLargeScale")}),s.jsx(Jd,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleBig")})]})})]}),s.jsx(Wo,{})]})},iu="/assets/3249672-uhd_3840_2160_25fps-8fb65659.webm";function yo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function To(e,t,n){return t&&_n(e.prototype,t),n&&_n(e,n),e}function Co(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zt(e,t)}function yt(e){return yt=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yt(e)}function Zt(e,t){return Zt=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},Zt(e,t)}function ru(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function au(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function su(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:au(e)}function So(e){var t=ru();return function(){var o=yt(e),i;if(t){var r=yt(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return su(this,i)}}function lu(e){return cu(e)||du(e)||uu(e)||pu()}function cu(e){if(Array.isArray(e))return Qt(e)}function du(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function uu(e,t){if(e){if(typeof e=="string")return Qt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qt(e,t)}}function Qt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=String(e);if(t===0)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",r=o?o[3]:"",a=o?o[2]:n,l=a.length>=t?a:(lu(Array(t)).map(function(){return"0"}).join("")+a).slice(t*-1);return"".concat(i).concat(l).concat(r)}var Po={daysInHours:!1,zeroPadTime:2};function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.now,o=n===void 0?Date.now:n,i=t.precision,r=i===void 0?0:i,a=t.controlled,l=t.offsetTime,c=l===void 0?0:l,u=t.overtime,f;typeof e=="string"?f=new Date(e).getTime():e instanceof Date?f=e.getTime():f=e,a||(f+=c);var m=a?f:f-o(),x=Math.min(20,Math.max(0,r)),C=Math.round(parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(x))*1e3),v=Math.abs(C)/1e3;return{total:C,days:Math.floor(v/(3600*24)),hours:Math.floor(v/3600%24),minutes:Math.floor(v/60%60),seconds:Math.floor(v%60),milliseconds:Number((v%1*1e3).toFixed()),completed:C<=0}}function mu(e,t){var n=e.days,o=e.hours,i=e.minutes,r=e.seconds,a=Object.assign(Object.assign({},Po),t),l=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,f=u===void 0?c:u,m=Math.min(2,c),x=l?Ze(o+n*24,c):Ze(o,m);return{days:l?"":Ze(n,f),hours:x,minutes:Ze(i,m),seconds:Ze(r,m)}}var wo=function(e){Co(n,e);var t=So(n);function n(){var o;return yo(this,n),o=t.apply(this,arguments),o.state={count:o.props.count||3},o.startCountdown=function(){o.interval=window.setInterval(function(){var i=o.state.count-1;i===0?(o.stopCountdown(),o.props.onComplete&&o.props.onComplete()):o.setState(function(r){return{count:r.count-1}})},1e3)},o.stopCountdown=function(){clearInterval(o.interval)},o.addTime=function(i){o.stopCountdown(),o.setState(function(r){return{count:r.count+i}},o.startCountdown)},o}return To(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?d.cloneElement(this.props.children,{count:this.state.count}):null}}]),n}(d.Component);wo.propTypes={count:Z.number,children:Z.element,onComplete:Z.func};var fn=function(e){Co(n,e);var t=So(n);function n(o){var i;if(yo(this,n),i=t.call(this,o),i.mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=d.createRef(),i.tick=function(){var a=i.calcTimeDelta(),l=a.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(a,void 0,l)},i.start=function(){if(!i.isStarted()){var a=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=a?i.calcOffsetStartTimestamp()-a:0;var l=i.calcTimeDelta();i.setTimeDeltaState(l,"STARTED",i.props.onStart),!i.props.controlled&&(!l.completed||i.props.overtime)&&(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},o.date){var r=i.calcTimeDelta();i.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return To(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(i){this.legacyMode||this.props.date!==i.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var i=this.props,r=i.date,a=i.now,l=i.precision,c=i.controlled,u=i.overtime;return fu(r,{now:a,precision:l,controlled:c,offsetTime:this.offsetTime,overtime:u})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(i){this.legacyCountdownRef.current.addTime(i)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(i){return this.state.status===i}},{key:"setTimeDeltaState",value:function(i,r,a){var l=this;if(this.mounted){var c=i.completed&&!this.state.timeDelta.completed,u=i.completed&&r==="STARTED";c&&!this.props.overtime&&this.clearTimer();var f=function(){a&&a(l.state.timeDelta),l.props.onComplete&&(c||u)&&l.props.onComplete(i,u)};return this.setState(function(m){var x=r||m.status;return i.completed&&!l.props.overtime?x="COMPLETED":!r&&x==="COMPLETED"&&(x="STOPPED"),{timeDelta:i,status:x}},f)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var i=this.props,r=i.daysInHours,a=i.zeroPadTime,l=i.zeroPadDays,c=this.state.timeDelta;return Object.assign(Object.assign({},c),{api:this.getApi(),props:this.props,formatted:mu(c,{daysInHours:r,zeroPadTime:a,zeroPadDays:l})})}},{key:"render",value:function(){if(this.legacyMode){var i=this.props,r=i.count,a=i.children,l=i.onComplete;return d.createElement(wo,{ref:this.legacyCountdownRef,count:r,onComplete:l},a)}var c=this.props,u=c.className,f=c.overtime,m=c.children,x=c.renderer,C=this.getRenderProps();if(x)return x(C);if(m&&this.state.timeDelta.completed&&!f)return d.cloneElement(m,{countdown:C});var v=C.formatted,P=v.days,k=v.hours,y=v.minutes,$=v.seconds;return d.createElement("span",{className:u},C.total<0?"-":"",P,P?":":"",k,":",y,":",$)}}]),n}(d.Component);fn.defaultProps=Object.assign(Object.assign({},Po),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});fn.propTypes={date:Z.oneOfType([Z.instanceOf(Date),Z.string,Z.number]),daysInHours:Z.bool,zeroPadTime:Z.number,zeroPadDays:Z.number,controlled:Z.bool,intervalDelay:Z.number,precision:Z.number,autoStart:Z.bool,overtime:Z.bool,className:Z.string,children:Z.element,renderer:Z.func,now:Z.func,onMount:Z.func,onStart:Z.func,onPause:Z.func,onStop:Z.func,onTick:Z.func,onComplete:Z.func};const hu=re.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif; 
  color: #00ffcc;
flex-wrap: wrap;
margin: 0 auto;
  margin-top: 30px;
    gap: 10px;
      @media screen and (min-width: 1240px){
display: flex;
        flex-wrap: nowrap;
}
`,ht=re.div`
 margin: 0 auto;
padding: 20px;
  margin: 0 10px;
  text-align: center;
   font-size: 3.75em;
     justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif; 
   background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
 width: 216px;
 
`,gt=re.span`
  display: block;
  font-size: 0.75em;
  color: #ffffff;
`,gu=({targetDate:e})=>{const t=({days:n,hours:o,minutes:i,seconds:r})=>{const a=l=>l.toString().padStart(2,"0");return s.jsxs(hu,{children:[s.jsxs(ht,{children:[a(n)," ",s.jsx(gt,{children:"Days"})]}),s.jsxs(ht,{children:[a(o)," ",s.jsx(gt,{children:"Hours"})]}),s.jsxs(ht,{children:[a(i)," ",s.jsx(gt,{children:"Minutes"})]}),s.jsxs(ht,{children:[a(r)," ",s.jsx(gt,{children:"Seconds"})]})]})};return s.jsx(fn,{date:e,renderer:t})},vu=()=>{const{t:e}=ot(),t=new Date("2024-08-25T23:59:59");return s.jsxs(Go,{style:{height:"100%"},children:[s.jsx(Yo,{style:{width:"100%",position:"fixed"},children:s.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,style:{objectFit:"cover",position:"fixed"},children:[s.jsx("source",{src:iu,type:"video/mp4"}),"Your browser does not support the video tag."]})}),s.jsxs(Ko,{style:{marginTop:10},children:[s.jsx(pn,{}),s.jsx("h1",{style:{fontSize:"3.5em"},children:e("ErrorPage.CommingSoon")}),s.jsx("p",{style:{fontSize:"1.5em"},children:e("ErrorPage.ThankYou")}),s.jsx(ti,{})," ",s.jsx(gu,{targetDate:t})]})]})},xu=()=>s.jsx(di,{children:s.jsxs(Xo,{children:[s.jsx(Ne,{path:"/",element:s.jsx(Jo,{to:"*"})}),s.jsxs(Ne,{path:"/",element:s.jsx(jd,{}),children:[s.jsx(Ne,{path:"home",element:s.jsx(Zo,{})}),s.jsx(Ne,{path:"project",element:s.jsx(ou,{})}),s.jsx(Ne,{path:"contact",element:s.jsx(ni,{})})]}),s.jsx(Ne,{path:"*",element:s.jsx(vu,{})})]})});Gt.createRoot(document.getElementById("root")).render(s.jsxs(ye.StrictMode,{children:[s.jsx(Qo,{styles:ui}),s.jsx(ei,{basename:"/",children:s.jsx(xu,{})})]}));
