import{n as oe,c as Do,s as W,L as Oo,a as it,j as s,u as We,A as Xn,b as Ce,d as No,e as Ho,f as Qn,g as Bo,_ as q,h as p,i as F,k as Uo,T as Jn,l as se,m as Fo,C as Vo,o as ge,p as he,q as Ie,r as Cn,t as Zn,v as Te,w as we,x as Sn,y as pe,z as _,B as de,D as fe,E as eo,F as ie,G as qe,H as ne,I as Wo,J as rn,K as to,M as qo,N as _o,O as Go,Q as rt,R as at,S as Kt,U as Yo,V as Xt,W as Ko,X as Xo,Y as Qo,Z as no,$ as $t,a0 as Jo,a1 as Dt,a2 as Zo,a3 as ei,a4 as Z,a5 as ti,a6 as ni,a7 as oi,a8 as ii,a9 as Oe,aa as ri,ab as ai,ac as si,ad as li}from"./home-page-e586e23d.js";import{b as yt,r as d,a as ye,e as ft}from"./react-vendor-742c876a.js";import{S as ci,C as di}from"./contact-page-e10aebaf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Qt={},Pn=yt;Qt.createRoot=Pn.createRoot,Qt.hydrateRoot=Pn.hydrateRoot;const ui="/assets/RightGrotesk-CompactBlack-15afd6d8.ttf",pi="/assets/BiroScriptPlus-Bold-1f3fc1cc.ttf",fi="/assets/MessinaSansMono-Black-f2eba628.ttf",mi="/assets/Formular-Medium-109f9e00.ttf",hi="/assets/Roboto-Regular-4e147ab6.ttf",gi="/assets/d9fe41ee-4904-4a11-ba11-b61cd3be767f-171b97c0.woff2",vi={colors:{black:"#000000",blue:"#00baff",white:"#ffffff",lightBlue:"#66b2ff"},radiuses:{small:"4px",medium:"8px",large:"12px",round:"50%"},weights:{normal:400,semiBold:600,bold:700,black:900},fontSizes:{}},xi=oe.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
`,bi=Do`

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
  // src: url(${hi}) format('truetype');
}
  @font-face {
  font-family: 'Proxima';
  // src: url(${gi}) format('truetype');
}

@font-face {
  font-family: 'Right Grotesk';
  src: url(${ui}) format('truetype');
}

@font-face {
  font-family: 'Messina Sans Mono';
  src: url(${fi}) format('truetype');
}

@font-face {
  font-family: 'Biro Script Plus';
  src: url(${pi}) format('truetype');
}

@font-face {
  font-family: 'Formular';
  src: url(${mi}) format('truetype');
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
    color: ${vi.colors.white};
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
 



`,yi=W.div`
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
`,Ot=W.div`
padding: 20px 20px 50px 20px; 

`,Ti=W.h2`
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
`,wn=W.p`
text-align: center;
  font-weight: bold;

  padding-bottom: 10px;
`,Nt=W.p`
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
`,Ci=W.div`
margin-bottom: 30px;
display: flex;
justify-content: center;
`,Ge=W.a`
margin: 5px;
padding: 15px;
  transition: transform 0.3s ease, opacity 0.3s ease;
    &:focus,
    &:hover {
    transform: scale(2.1); /* Scale up on hover */
    opacity: 1.8; /* Reduce opacity on hover */
  }
  `;W.div`

`;W.p`

`;W.a`

`;const Si=W.div` 
padding: 20px;
 display: flex;
justify-content: flex-end;  
 border-bottom: 1px solid #00baff; 
 width: 100%;
    z-index: 999;
    background-color:  #fff;
`;W.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;const Pi=W.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;W(Oo)`
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
`;const wi=W.div`
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
`;W.div`
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-inline-collapsed {
    width: 50px;
  }

  :where(.css-dev-only-do-not-override-m4timi).ant-menu-dark,
  :where(.css-dev-only-do-not-override-m4timi).ant-menu-dark > .ant-menu {
    color: rgba(255, 255, 255, 0.65);
    background: #00152900;
  }
`;const oo=W.img`
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
`,io="/assets/logo_Systems-4b059761.webp",Ei=it(s.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),ki=it(s.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),Ai=it(s.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),Ii=it(s.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),Ri=it(s.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),Mi=()=>{const{t:e}=We();return d.useEffect(()=>{Xn.init({duration:3e3})},[]),s.jsxs(yi,{children:[s.jsxs(Ot,{children:[s.jsx(Ce,{to:"/home",children:s.jsx(oo,{src:io,alt:"Logo",loading:"lazy"})}),s.jsx(wn,{"data-translate":"footerAdditionalText",children:e("Footer.footerAdditionalText")})]}),s.jsxs(Ot,{children:[s.jsx(Ti,{"data-translate":"usefulLinks",children:e("Footer.usefulLinks")}),s.jsx(Ce,{to:"/*",children:s.jsx(Nt,{"data-translate":"blog",children:e("Footer.blog")})}),s.jsx(Ce,{to:"/project",children:s.jsx(Nt,{"data-translate":"projects",children:e("Footer.projects")})}),s.jsx(Ce,{to:"/contact",children:s.jsx(Nt,{"data-translate":"contactUs",children:e("Footer.contactUs")})})]}),s.jsxs(Ot,{children:[s.jsx(wn,{style:{borderBottom:"1px solid #00baff",width:140},"data-translate":"socialMedia",children:e("Footer.socialMedia")}),s.jsxs(Ci,{children:[s.jsx(Ge,{style:{color:"#1e90ff"},children:s.jsx(Ai,{})}),s.jsx(Ge,{children:s.jsx(ki,{style:{background:"linear-gradient(50deg, #ff7f50, #1e90ff)",borderRadius:8}})}),s.jsx(Ge,{style:{color:"#1e90ff"},children:s.jsx(Ei,{})}),s.jsx(Ge,{style:{color:"red"},children:s.jsx(Ri,{})}),s.jsx(Ge,{style:{color:"#1e90ff"},children:s.jsx(Ii,{})})]})]})]})},ji=["className","component"];function Li(e={}){const{themeId:t,defaultTheme:n,defaultClassName:o="MuiBox-root",generateClassName:i}=e,r=No("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(Ho);return d.forwardRef(function(c,u){const f=Qn(n),m=Bo(c),{className:x,component:C="div"}=m,v=q(m,ji);return s.jsx(r,p({as:C,ref:u,className:F(x,i?i(o):o),theme:t&&f[t]||f},v))})}const zi=d.createContext(),ro=()=>{const e=d.useContext(zi);return e??!1};function st(){const e=Qn(Uo);return e[Jn]||e}const $i=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},En=$i,Di=se("MuiBox",["root"]),Oi=Di,Ni=Fo(),Hi=Li({themeId:Jn,defaultTheme:Ni,defaultClassName:Oi.root,generateClassName:Vo.generate}),Bi=Hi;function Tt(e){return typeof e=="string"}function Ui(e,t,n){return e===void 0||Tt(e)?t:p({},t,{ownerState:p({},t.ownerState,n)})}function ao(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function Fi(e,t,n){return typeof e=="function"?e(t,n):e}function kn(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Vi(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:i,className:r}=e;if(!t){const C=F(n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),v=p({},n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),P=p({},n,i,o);return C.length>0&&(P.className=C),Object.keys(v).length>0&&(P.style=v),{props:P,internalRef:void 0}}const a=ao(p({},i,o)),l=kn(o),c=kn(i),u=t(a),f=F(u==null?void 0:u.className,n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),m=p({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),x=p({},u,n,c,l);return f.length>0&&(x.className=f),Object.keys(m).length>0&&(x.style=m),{props:x,internalRef:u.ref}}const Wi=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Ve(e){var t;const{elementType:n,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:r=!1}=e,a=q(e,Wi),l=r?{}:Fi(o,i),{props:c,internalRef:u}=Vi(p({},a,{externalSlotProps:l})),f=ge(u,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return Ui(n,p({},c,{ref:f}),i)}const qi=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function _i(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Gi(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Yi(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Gi(e))}function Ki(e){const t=[],n=[];return Array.from(e.querySelectorAll(qi)).forEach((o,i)=>{const r=_i(o);r===-1||!Yi(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function Xi(){return!0}function Qi(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=Ki,isEnabled:a=Xi,open:l}=e,c=d.useRef(!1),u=d.useRef(null),f=d.useRef(null),m=d.useRef(null),x=d.useRef(null),C=d.useRef(!1),v=d.useRef(null),P=ge(t.ref,v),k=d.useRef(null);d.useEffect(()=>{!l||!v.current||(C.current=!n)},[n,l]),d.useEffect(()=>{if(!l||!v.current)return;const g=he(v.current);return v.current.contains(g.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),C.current&&v.current.focus()),()=>{i||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[l]),d.useEffect(()=>{if(!l||!v.current)return;const g=he(v.current),h=S=>{k.current=S,!(o||!a()||S.key!=="Tab")&&g.activeElement===v.current&&S.shiftKey&&(c.current=!0,f.current&&f.current.focus())},w=()=>{const S=v.current;if(S===null)return;if(!g.hasFocus()||!a()||c.current){c.current=!1;return}if(S.contains(g.activeElement)||o&&g.activeElement!==u.current&&g.activeElement!==f.current)return;if(g.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!C.current)return;let N=[];if((g.activeElement===u.current||g.activeElement===f.current)&&(N=r(v.current)),N.length>0){var H,M;const b=!!((H=k.current)!=null&&H.shiftKey&&((M=k.current)==null?void 0:M.key)==="Tab"),O=N[0],D=N[N.length-1];typeof O!="string"&&typeof D!="string"&&(b?D.focus():O.focus())}else S.focus()};g.addEventListener("focusin",w),g.addEventListener("keydown",h,!0);const E=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&w()},50);return()=>{clearInterval(E),g.removeEventListener("focusin",w),g.removeEventListener("keydown",h,!0)}},[n,o,i,a,l,r]);const y=g=>{m.current===null&&(m.current=g.relatedTarget),C.current=!0,x.current=g.target;const h=t.props.onFocus;h&&h(g)},j=g=>{m.current===null&&(m.current=g.relatedTarget),C.current=!0};return s.jsxs(d.Fragment,{children:[s.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:u,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:P,onFocus:y}),s.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:f,"data-testid":"sentinelEnd"})]})}function Ji(e){return typeof e=="function"?e():e}const Zi=d.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[a,l]=d.useState(null),c=ge(d.isValidElement(o)?o.ref:null,n);if(Ie(()=>{r||l(Ji(i)||document.body)},[i,r]),Ie(()=>{if(a&&!r)return Cn(n,a),()=>{Cn(n,null)}},[n,a,r]),r){if(d.isValidElement(o)){const u={ref:c};return d.cloneElement(o,u)}return s.jsx(d.Fragment,{children:o})}return s.jsx(d.Fragment,{children:a&&yt.createPortal(o,a)})});function er(e){const t=he(e);return t.body===e?Te(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ot(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function An(e){return parseInt(Te(e).getComputedStyle(e).paddingRight,10)||0}function tr(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function In(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,a=>{const l=r.indexOf(a)===-1,c=!tr(a);l&&c&&ot(a,i)})}function Ht(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function nr(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(er(o)){const a=Zn(he(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${An(o)+a}px`;const l=he(o).querySelectorAll(".mui-fixed");[].forEach.call(l,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${An(c)+a}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=he(o).body;else{const a=o.parentElement,l=Te(o);r=(a==null?void 0:a.nodeName)==="HTML"&&l.getComputedStyle(a).overflowY==="scroll"?a:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:a,property:l})=>{r?a.style.setProperty(l,r):a.style.removeProperty(l)})}}function or(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class ir{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ot(t.modalRef,!1);const i=or(n);In(n,t.mount,t.modalRef,i,!0);const r=Ht(this.containers,a=>a.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=Ht(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=nr(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Ht(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ot(t.modalRef,n),In(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&ot(a.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function rr(e){return typeof e=="function"?e():e}function ar(e){return e?e.props.hasOwnProperty("in"):!1}const sr=new ir;function lr(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=sr,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:l,children:c,onClose:u,open:f,rootRef:m}=e,x=d.useRef({}),C=d.useRef(null),v=d.useRef(null),P=ge(v,m),[k,y]=d.useState(!f),j=ar(c);let g=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(g=!1);const h=()=>he(C.current),w=()=>(x.current.modalRef=v.current,x.current.mount=C.current,x.current),E=()=>{i.mount(w(),{disableScrollLock:o}),v.current&&(v.current.scrollTop=0)},S=we(()=>{const I=rr(t)||h().body;i.add(w(),I),v.current&&E()}),N=d.useCallback(()=>i.isTopModal(w()),[i]),H=we(I=>{C.current=I,I&&(f&&N()?E():v.current&&ot(v.current,g))}),M=d.useCallback(()=>{i.remove(w(),g)},[g,i]);d.useEffect(()=>()=>{M()},[M]),d.useEffect(()=>{f?S():(!j||!r)&&M()},[f,M,j,r,S]);const b=I=>L=>{var T;(T=I.onKeyDown)==null||T.call(I,L),!(L.key!=="Escape"||L.which===229||!N())&&(n||(L.stopPropagation(),u&&u(L,"escapeKeyDown")))},O=I=>L=>{var T;(T=I.onClick)==null||T.call(I,L),L.target===L.currentTarget&&u&&u(L,"backdropClick")};return{getRootProps:(I={})=>{const L=ao(e);delete L.onTransitionEnter,delete L.onTransitionExited;const T=p({},L,I);return p({role:"presentation"},T,{onKeyDown:b(T),ref:P})},getBackdropProps:(I={})=>{const L=I;return p({"aria-hidden":!0},L,{onClick:O(L),open:f})},getTransitionProps:()=>{const I=()=>{y(!1),a&&a()},L=()=>{y(!0),l&&l(),r&&M()};return{onEnter:Sn(I,c==null?void 0:c.props.onEnter),onExited:Sn(L,c==null?void 0:c.props.onExited)}},rootRef:P,portalRef:H,isTopModal:N,exited:k,hasTransition:j}}function cr(e){const{children:t,defer:n=!1,fallback:o=null}=e,[i,r]=d.useState(!1);return Ie(()=>{n||r(!0)},[n]),d.useEffect(()=>{n&&r(!0)},[n]),s.jsx(d.Fragment,{children:i?t:o})}function Jt(e,t){return Jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Jt(e,t)}function so(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jt(e,t)}const Rn={disabled:!1},Ct=ye.createContext(null);var dr=function(t){return t.scrollTop},tt="unmounted",Re="exited",Me="entering",Be="entered",Zt="exiting",Ee=function(e){so(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var a=i,l=a&&!a.isMounting?o.enter:o.appear,c;return r.appearStatus=null,o.in?l?(c=Re,r.appearStatus=Me):c=Be:o.unmountOnExit||o.mountOnEnter?c=tt:c=Re,r.state={status:c},r.nextCallback=null,r}t.getDerivedStateFromProps=function(i,r){var a=i.in;return a&&r.status===tt?{status:Re}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var r=null;if(i!==this.props){var a=this.state.status;this.props.in?a!==Me&&a!==Be&&(r=Me):(a===Me||a===Be)&&(r=Zt)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,r,a,l;return r=a=l=i,i!=null&&typeof i!="number"&&(r=i.exit,a=i.enter,l=i.appear!==void 0?i.appear:a),{exit:r,enter:a,appear:l}},n.updateStatus=function(i,r){if(i===void 0&&(i=!1),r!==null)if(this.cancelNextCallback(),r===Me){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ft.findDOMNode(this);a&&dr(a)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Re&&this.setState({status:tt})},n.performEnter=function(i){var r=this,a=this.props.enter,l=this.context?this.context.isMounting:i,c=this.props.nodeRef?[l]:[ft.findDOMNode(this),l],u=c[0],f=c[1],m=this.getTimeouts(),x=l?m.appear:m.enter;if(!i&&!a||Rn.disabled){this.safeSetState({status:Be},function(){r.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:Me},function(){r.props.onEntering(u,f),r.onTransitionEnd(x,function(){r.safeSetState({status:Be},function(){r.props.onEntered(u,f)})})})},n.performExit=function(){var i=this,r=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:ft.findDOMNode(this);if(!r||Rn.disabled){this.safeSetState({status:Re},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Zt},function(){i.props.onExiting(l),i.onTransitionEnd(a.exit,function(){i.safeSetState({status:Re},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,r){r=this.setNextCallback(r),this.setState(i,r)},n.setNextCallback=function(i){var r=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,r.nextCallback=null,i(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(i,r){this.setNextCallback(r);var a=this.props.nodeRef?this.props.nodeRef.current:ft.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=c[0],f=c[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===tt)return null;var r=this.props,a=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var l=q(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ye.createElement(Ct.Provider,{value:null},typeof a=="function"?a(i,l):ye.cloneElement(ye.Children.only(a),l))},t}(ye.Component);Ee.contextType=Ct;Ee.propTypes={};function Ne(){}Ee.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ne,onEntering:Ne,onEntered:Ne,onExit:Ne,onExiting:Ne,onExited:Ne};Ee.UNMOUNTED=tt;Ee.EXITED=Re;Ee.ENTERING=Me;Ee.ENTERED=Be;Ee.EXITING=Zt;const an=Ee;function ur(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sn(e,t){var n=function(r){return t&&d.isValidElement(r)?t(r):r},o=Object.create(null);return e&&d.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function pr(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var a,l={};for(var c in t){if(o[c])for(a=0;a<o[c].length;a++){var u=o[c][a];l[o[c][a]]=n(u)}l[c]=n(c)}for(a=0;a<i.length;a++)l[i[a]]=n(i[a]);return l}function Le(e,t,n){return n[t]!=null?n[t]:e.props[t]}function fr(e,t){return sn(e.children,function(n){return d.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Le(n,"appear",e),enter:Le(n,"enter",e),exit:Le(n,"exit",e)})})}function mr(e,t,n){var o=sn(e.children),i=pr(t,o);return Object.keys(i).forEach(function(r){var a=i[r];if(d.isValidElement(a)){var l=r in t,c=r in o,u=t[r],f=d.isValidElement(u)&&!u.props.in;c&&(!l||f)?i[r]=d.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:Le(a,"exit",e),enter:Le(a,"enter",e)}):!c&&l&&!f?i[r]=d.cloneElement(a,{in:!1}):c&&l&&d.isValidElement(u)&&(i[r]=d.cloneElement(a,{onExited:n.bind(null,a),in:u.props.in,exit:Le(a,"exit",e),enter:Le(a,"enter",e)}))}}),i}var hr=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},gr={component:"div",childFactory:function(t){return t}},ln=function(e){so(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var a=r.handleExited.bind(ur(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var a=r.children,l=r.handleExited,c=r.firstRender;return{children:c?fr(i,l):mr(i,a,l),firstRender:!1}},n.handleExited=function(i,r){var a=sn(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(l){var c=p({},l.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,r=i.component,a=i.childFactory,l=q(i,["component","childFactory"]),c=this.state.contextValue,u=hr(this.state.children).map(a);return delete l.appear,delete l.enter,delete l.exit,r===null?ye.createElement(Ct.Provider,{value:c},u):ye.createElement(Ct.Provider,{value:c},ye.createElement(r,l,u))},t}(ye.Component);ln.propTypes={};ln.defaultProps=gr;const vr=ln,cn=e=>e.scrollTop;function ze(e,t){var n,o;const{timeout:i,easing:r,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(o=a.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:a.transitionDelay}}const xr=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],br={entering:{opacity:1},entered:{opacity:1}},yr=d.forwardRef(function(t,n){const o=st(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:l,easing:c,in:u,onEnter:f,onEntered:m,onEntering:x,onExit:C,onExited:v,onExiting:P,style:k,timeout:y=i,TransitionComponent:j=an}=t,g=q(t,xr),h=d.useRef(null),w=ge(h,l.ref,n),E=A=>R=>{if(A){const I=h.current;R===void 0?A(I):A(I,R)}},S=E(x),N=E((A,R)=>{cn(A);const I=ze({style:k,timeout:y,easing:c},{mode:"enter"});A.style.webkitTransition=o.transitions.create("opacity",I),A.style.transition=o.transitions.create("opacity",I),f&&f(A,R)}),H=E(m),M=E(P),b=E(A=>{const R=ze({style:k,timeout:y,easing:c},{mode:"exit"});A.style.webkitTransition=o.transitions.create("opacity",R),A.style.transition=o.transitions.create("opacity",R),C&&C(A)}),O=E(v),D=A=>{r&&r(h.current,A)};return s.jsx(j,p({appear:a,in:u,nodeRef:h,onEnter:N,onEntered:H,onEntering:S,onExit:b,onExited:O,onExiting:M,addEndListener:D,timeout:y},g,{children:(A,R)=>d.cloneElement(l,p({style:p({opacity:0,visibility:A==="exited"&&!u?"hidden":void 0},br[A],k,l.props.style),ref:w},R))}))}),Tr=yr;function Cr(e){return pe("MuiBackdrop",e)}se("MuiBackdrop",["root","invisible"]);const Sr=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Pr=e=>{const{classes:t,invisible:n}=e;return fe({root:["root",n&&"invisible"]},Cr,t)},wr=_("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>p({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Er=d.forwardRef(function(t,n){var o,i,r;const a=de({props:t,name:"MuiBackdrop"}),{children:l,className:c,component:u="div",components:f={},componentsProps:m={},invisible:x=!1,open:C,slotProps:v={},slots:P={},TransitionComponent:k=Tr,transitionDuration:y}=a,j=q(a,Sr),g=p({},a,{component:u,invisible:x}),h=Pr(g),w=(o=v.root)!=null?o:m.root;return s.jsx(k,p({in:C,timeout:y},j,{children:s.jsx(wr,p({"aria-hidden":!0},w,{as:(i=(r=P.root)!=null?r:f.Root)!=null?i:u,className:F(h.root,c,w==null?void 0:w.className),ownerState:p({},g,w==null?void 0:w.ownerState),classes:h,ref:n,children:l}))}))}),kr=Er;function Ar(e){return pe("MuiModal",e)}se("MuiModal",["root","hidden","backdrop"]);const Ir=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Rr=e=>{const{open:t,exited:n,classes:o}=e;return fe({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Ar,o)},Mr=_("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>p({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),jr=_(kr,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Lr=d.forwardRef(function(t,n){var o,i,r,a,l,c;const u=de({name:"MuiModal",props:t}),{BackdropComponent:f=jr,BackdropProps:m,className:x,closeAfterTransition:C=!1,children:v,container:P,component:k,components:y={},componentsProps:j={},disableAutoFocus:g=!1,disableEnforceFocus:h=!1,disableEscapeKeyDown:w=!1,disablePortal:E=!1,disableRestoreFocus:S=!1,disableScrollLock:N=!1,hideBackdrop:H=!1,keepMounted:M=!1,onBackdropClick:b,open:O,slotProps:D,slots:A}=u,R=q(u,Ir),I=p({},u,{closeAfterTransition:C,disableAutoFocus:g,disableEnforceFocus:h,disableEscapeKeyDown:w,disablePortal:E,disableRestoreFocus:S,disableScrollLock:N,hideBackdrop:H,keepMounted:M}),{getRootProps:L,getBackdropProps:T,getTransitionProps:$,portalRef:X,isTopModal:le,exited:ce,hasTransition:z}=lr(p({},I,{rootRef:n})),G=p({},I,{exited:ce}),V=Rr(G),Y={};if(v.props.tabIndex===void 0&&(Y.tabIndex="-1"),z){const{onEnter:B,onExited:Q}=$();Y.onEnter=B,Y.onExited=Q}const ee=(o=(i=A==null?void 0:A.root)!=null?i:y.Root)!=null?o:Mr,te=(r=(a=A==null?void 0:A.backdrop)!=null?a:y.Backdrop)!=null?r:f,J=(l=D==null?void 0:D.root)!=null?l:j.root,re=(c=D==null?void 0:D.backdrop)!=null?c:j.backdrop,ve=Ve({elementType:ee,externalSlotProps:J,externalForwardedProps:R,getSlotProps:L,additionalProps:{ref:n,as:k},ownerState:G,className:F(x,J==null?void 0:J.className,V==null?void 0:V.root,!G.open&&G.exited&&(V==null?void 0:V.hidden))}),ae=Ve({elementType:te,externalSlotProps:re,additionalProps:m,getSlotProps:B=>T(p({},B,{onClick:Q=>{b&&b(Q),B!=null&&B.onClick&&B.onClick(Q)}})),className:F(re==null?void 0:re.className,m==null?void 0:m.className,V==null?void 0:V.backdrop),ownerState:G});return!M&&!O&&(!z||ce)?null:s.jsx(Zi,{ref:X,container:P,disablePortal:E,children:s.jsxs(ee,p({},ve,{children:[!H&&f?s.jsx(te,p({},ae)):null,s.jsx(Qi,{disableEnforceFocus:h,disableAutoFocus:g,disableRestoreFocus:S,isEnabled:le,open:O,children:d.cloneElement(v,Y)})]}))})}),lo=Lr,zr=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function $r(e,t,n){const o=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),r=Te(t);let a;if(t.fakeTransform)a=t.fakeTransform;else{const u=r.getComputedStyle(t);a=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let l=0,c=0;if(a&&a!=="none"&&typeof a=="string"){const u=a.split("(")[1].split(")")[0].split(",");l=parseInt(u[4],10),c=parseInt(u[5],10)}return e==="left"?i?`translateX(${i.right+l-o.left}px)`:`translateX(${r.innerWidth+l-o.left}px)`:e==="right"?i?`translateX(-${o.right-i.left-l}px)`:`translateX(-${o.left+o.width-l}px)`:e==="up"?i?`translateY(${i.bottom+c-o.top}px)`:`translateY(${r.innerHeight+c-o.top}px)`:i?`translateY(-${o.top-i.top+o.height-c}px)`:`translateY(-${o.top+o.height-c}px)`}function Dr(e){return typeof e=="function"?e():e}function mt(e,t,n){const o=Dr(n),i=$r(e,t,o);i&&(t.style.webkitTransform=i,t.style.transform=i)}const Or=d.forwardRef(function(t,n){const o=st(),i={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},r={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:c,container:u,direction:f="down",easing:m=i,in:x,onEnter:C,onEntered:v,onEntering:P,onExit:k,onExited:y,onExiting:j,style:g,timeout:h=r,TransitionComponent:w=an}=t,E=q(t,zr),S=d.useRef(null),N=ge(c.ref,S,n),H=T=>$=>{T&&($===void 0?T(S.current):T(S.current,$))},M=H((T,$)=>{mt(f,T,u),cn(T),C&&C(T,$)}),b=H((T,$)=>{const X=ze({timeout:h,style:g,easing:m},{mode:"enter"});T.style.webkitTransition=o.transitions.create("-webkit-transform",p({},X)),T.style.transition=o.transitions.create("transform",p({},X)),T.style.webkitTransform="none",T.style.transform="none",P&&P(T,$)}),O=H(v),D=H(j),A=H(T=>{const $=ze({timeout:h,style:g,easing:m},{mode:"exit"});T.style.webkitTransition=o.transitions.create("-webkit-transform",$),T.style.transition=o.transitions.create("transform",$),mt(f,T,u),k&&k(T)}),R=H(T=>{T.style.webkitTransition="",T.style.transition="",y&&y(T)}),I=T=>{a&&a(S.current,T)},L=d.useCallback(()=>{S.current&&mt(f,S.current,u)},[f,u]);return d.useEffect(()=>{if(x||f==="down"||f==="right")return;const T=eo(()=>{S.current&&mt(f,S.current,u)}),$=Te(S.current);return $.addEventListener("resize",T),()=>{T.clear(),$.removeEventListener("resize",T)}},[f,x,u]),d.useEffect(()=>{x||L()},[x,L]),s.jsx(w,p({nodeRef:S,onEnter:M,onEntered:O,onEntering:b,onExit:A,onExited:R,onExiting:D,addEndListener:I,appear:l,in:x,timeout:h},E,{children:(T,$)=>d.cloneElement(c,p({ref:N,style:p({visibility:T==="exited"&&!x?"hidden":void 0},g,c.props.style)},$))}))}),Nr=Or;function Hr(e){return pe("MuiPaper",e)}se("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Br=["className","component","elevation","square","variant"],Ur=e=>{const{square:t,elevation:n,variant:o,classes:i}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return fe(r,Hr,i)},Fr=_("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${ie("#fff",En(t.elevation))}, ${ie("#fff",En(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Vr=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiPaper"}),{className:i,component:r="div",elevation:a=1,square:l=!1,variant:c="elevation"}=o,u=q(o,Br),f=p({},o,{component:r,elevation:a,square:l,variant:c}),m=Ur(f);return s.jsx(Fr,p({as:r,ownerState:f,className:F(m.root,i),ref:n},u))}),co=Vr;function Wr(e){return pe("MuiDrawer",e)}se("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const qr=["BackdropProps"],_r=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],uo=(e,t)=>{const{ownerState:n}=e;return[t.root,(n.variant==="permanent"||n.variant==="persistent")&&t.docked,t.modal]},Gr=e=>{const{classes:t,anchor:n,variant:o}=e,i={root:["root"],docked:[(o==="permanent"||o==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${ne(n)}`,o!=="temporary"&&`paperAnchorDocked${ne(n)}`]};return fe(i,Wr,t)},Yr=_(lo,{name:"MuiDrawer",slot:"Root",overridesResolver:uo})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),Mn=_("div",{shouldForwardProp:qe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:uo})({flex:"0 0 auto"}),Kr=_(co,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${ne(n.anchor)}`],n.variant!=="temporary"&&t[`paperAnchorDocked${ne(n.anchor)}`]]}})(({theme:e,ownerState:t})=>p({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),po={left:"right",right:"left",top:"down",bottom:"up"};function je(e){return["left","right"].indexOf(e)!==-1}function nt({direction:e},t){return e==="rtl"&&je(t)?po[t]:t}const Xr=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiDrawer"}),i=st(),r=ro(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:c,children:u,className:f,elevation:m=16,hideBackdrop:x=!1,ModalProps:{BackdropProps:C}={},onClose:v,open:P=!1,PaperProps:k={},SlideProps:y,TransitionComponent:j=Nr,transitionDuration:g=a,variant:h="temporary"}=o,w=q(o.ModalProps,qr),E=q(o,_r),S=d.useRef(!1);d.useEffect(()=>{S.current=!0},[]);const N=nt({direction:r?"rtl":"ltr"},l),M=p({},o,{anchor:l,elevation:m,open:P,variant:h},E),b=Gr(M),O=s.jsx(Kr,p({elevation:h==="temporary"?m:0,square:!0},k,{className:F(b.paper,k.className),ownerState:M,children:u}));if(h==="permanent")return s.jsx(Mn,p({className:F(b.root,b.docked,f),ownerState:M,ref:n},E,{children:O}));const D=s.jsx(j,p({in:P,direction:po[N],timeout:g,appear:S.current},y,{children:O}));return h==="persistent"?s.jsx(Mn,p({className:F(b.root,b.docked,f),ownerState:M,ref:n},E,{children:D})):s.jsx(Yr,p({BackdropProps:p({},c,C,{transitionDuration:g}),className:F(b.root,b.modal,f),open:P,ownerState:M,onClose:v,hideBackdrop:x,ref:n},E,w,{children:D}))}),Qr=Xr,Jr=["anchor","classes","className","width","style"],Zr=_("div",{shouldForwardProp:qe})(({theme:e,ownerState:t})=>p({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},t.anchor==="left"&&{right:"auto"},t.anchor==="right"&&{left:"auto",right:0},t.anchor==="top"&&{bottom:"auto",right:0},t.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),ea=d.forwardRef(function(t,n){const{anchor:o,classes:i={},className:r,width:a,style:l}=t,c=q(t,Jr),u=t;return s.jsx(Zr,p({className:F("PrivateSwipeArea-root",i.root,i[`anchor${ne(o)}`],r),ref:n,style:p({[je(o)?"width":"height"]:a},l),ownerState:u},c))}),ta=ea,na=["BackdropProps"],oa=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","allowSwipeInChildren","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],ht=3,Bt=20;let Pe=null;function Ut(e,t,n){return e==="right"?n.body.offsetWidth-t[0].pageX:t[0].pageX}function Ft(e,t,n){return e==="bottom"?n.innerHeight-t[0].clientY:t[0].clientY}function Ye(e,t){return e?t.clientWidth:t.clientHeight}function jn(e,t,n,o){return Math.min(Math.max(n?t-e:o+t-e,0),o)}function ia(e,t){const n=[];for(;e&&e!==t.parentElement;){const o=Te(t).getComputedStyle(e);o.getPropertyValue("position")==="absolute"||o.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push(e),e=e.parentElement}return n}function ra({domTreeShapes:e,start:t,current:n,anchor:o}){const i={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(r=>{let a=n>=t;(o==="top"||o==="left")&&(a=!a);const l=o==="left"||o==="right"?"x":"y",c=Math.round(r[i.scrollPosition[l]]),u=c>0,f=c+r[i.clientLength[l]]<r[i.scrollLength[l]];return!!(a&&f||!a&&u)})}const aa=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),sa=d.forwardRef(function(t,n){const o=Wo({name:"MuiSwipeableDrawer",props:t}),i=st(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:a="left",disableBackdropTransition:l=!1,disableDiscovery:c=!1,disableSwipeToOpen:u=aa,hideBackdrop:f,hysteresis:m=.52,allowSwipeInChildren:x=!1,minFlingVelocity:C=450,ModalProps:{BackdropProps:v}={},onClose:P,onOpen:k,open:y=!1,PaperProps:j={},SwipeAreaProps:g,swipeAreaWidth:h=20,transitionDuration:w=r,variant:E="temporary"}=o,S=q(o.ModalProps,na),N=q(o,oa),[H,M]=d.useState(!1),b=d.useRef({isSwiping:null}),O=d.useRef(),D=d.useRef(),A=d.useRef(),R=ge(j.ref,A),I=d.useRef(!1),L=d.useRef();Ie(()=>{L.current=null},[y]);const T=d.useCallback((z,G={})=>{const{mode:V=null,changeTransition:Y=!0}=G,ee=nt(i,a),te=["right","bottom"].indexOf(ee)!==-1?1:-1,J=je(a),re=J?`translate(${te*z}px, 0)`:`translate(0, ${te*z}px)`,ve=A.current.style;ve.webkitTransform=re,ve.transform=re;let ae="";if(V&&(ae=i.transitions.create("all",ze({easing:void 0,style:void 0,timeout:w},{mode:V}))),Y&&(ve.webkitTransition=ae,ve.transition=ae),!l&&!f){const B=D.current.style;B.opacity=1-z/Ye(J,A.current),Y&&(B.webkitTransition=ae,B.transition=ae)}},[a,l,f,i,w]),$=we(z=>{if(!I.current)return;if(Pe=null,I.current=!1,yt.flushSync(()=>{M(!1)}),!b.current.isSwiping){b.current.isSwiping=null;return}b.current.isSwiping=null;const G=nt(i,a),V=je(a);let Y;V?Y=Ut(G,z.changedTouches,he(z.currentTarget)):Y=Ft(G,z.changedTouches,Te(z.currentTarget));const ee=V?b.current.startX:b.current.startY,te=Ye(V,A.current),J=jn(Y,ee,y,te),re=J/te;if(Math.abs(b.current.velocity)>C&&(L.current=Math.abs((te-J)/b.current.velocity)*1e3),y){b.current.velocity>C||re>m?P():T(0,{mode:"exit"});return}b.current.velocity<-C||1-re>m?k():T(Ye(V,A.current),{mode:"enter"})}),X=(z=!1)=>{if(!H){(z||!(c&&x))&&yt.flushSync(()=>{M(!0)});const G=je(a);!y&&A.current&&T(Ye(G,A.current)+(c?15:-Bt),{changeTransition:!1}),b.current.velocity=0,b.current.lastTime=null,b.current.lastTranslate=null,b.current.paperHit=!1,I.current=!0}},le=we(z=>{if(!A.current||!I.current||Pe!==null&&Pe!==b.current)return;X(!0);const G=nt(i,a),V=je(a),Y=Ut(G,z.touches,he(z.currentTarget)),ee=Ft(G,z.touches,Te(z.currentTarget));if(y&&A.current.contains(z.target)&&Pe===null){const ae=ia(z.target,A.current);if(ra({domTreeShapes:ae,start:V?b.current.startX:b.current.startY,current:V?Y:ee,anchor:a})){Pe=!0;return}Pe=b.current}if(b.current.isSwiping==null){const ae=Math.abs(Y-b.current.startX),B=Math.abs(ee-b.current.startY),Q=V?ae>B&&ae>ht:B>ae&&B>ht;if(Q&&z.cancelable&&z.preventDefault(),Q===!0||(V?B>ht:ae>ht)){if(b.current.isSwiping=Q,!Q){$(z);return}b.current.startX=Y,b.current.startY=ee,!c&&!y&&(V?b.current.startX-=Bt:b.current.startY-=Bt)}}if(!b.current.isSwiping)return;const te=Ye(V,A.current);let J=V?b.current.startX:b.current.startY;y&&!b.current.paperHit&&(J=Math.min(J,te));const re=jn(V?Y:ee,J,y,te);if(y)if(b.current.paperHit)re===0&&(b.current.startX=Y,b.current.startY=ee);else if(V?Y<te:ee<te)b.current.paperHit=!0,b.current.startX=Y,b.current.startY=ee;else return;b.current.lastTranslate===null&&(b.current.lastTranslate=re,b.current.lastTime=performance.now()+1);const ve=(re-b.current.lastTranslate)/(performance.now()-b.current.lastTime)*1e3;b.current.velocity=b.current.velocity*.4+ve*.6,b.current.lastTranslate=re,b.current.lastTime=performance.now(),z.cancelable&&z.preventDefault(),T(re)}),ce=we(z=>{if(z.defaultPrevented||z.defaultMuiPrevented||y&&(f||!D.current.contains(z.target))&&!A.current.contains(z.target))return;const G=nt(i,a),V=je(a),Y=Ut(G,z.touches,he(z.currentTarget)),ee=Ft(G,z.touches,Te(z.currentTarget));if(!y){var te;if(u||!(z.target===O.current||(te=A.current)!=null&&te.contains(z.target)&&(typeof x=="function"?x(z,O.current,A.current):x)))return;if(V){if(Y>h)return}else if(ee>h)return}z.defaultMuiPrevented=!0,Pe=null,b.current.startX=Y,b.current.startY=ee,X()});return d.useEffect(()=>{if(E==="temporary"){const z=he(A.current);return z.addEventListener("touchstart",ce),z.addEventListener("touchmove",le,{passive:!y}),z.addEventListener("touchend",$),()=>{z.removeEventListener("touchstart",ce),z.removeEventListener("touchmove",le,{passive:!y}),z.removeEventListener("touchend",$)}}},[E,y,ce,le,$]),d.useEffect(()=>()=>{Pe===b.current&&(Pe=null)},[]),d.useEffect(()=>{y||M(!1)},[y]),s.jsxs(d.Fragment,{children:[s.jsx(Qr,p({open:E==="temporary"&&H?!0:y,variant:E,ModalProps:p({BackdropProps:p({},v,{ref:D})},E==="temporary"&&{keepMounted:!0},S),hideBackdrop:f,PaperProps:p({},j,{style:p({pointerEvents:E==="temporary"&&!y&&!x?"none":""},j.style),ref:R}),anchor:a,transitionDuration:L.current||w,onClose:P,ref:n},N)),!u&&E==="temporary"&&s.jsx(cr,{children:s.jsx(ta,p({anchor:a,ref:O,width:h},g))})]})}),la=sa;function ca(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:a,in:l,onExited:c,timeout:u}=e,[f,m]=d.useState(!1),x=F(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),C={width:a,height:a,top:-(a/2)+r,left:-(a/2)+i},v=F(n.child,f&&n.childLeaving,o&&n.childPulsate);return!l&&!f&&m(!0),d.useEffect(()=>{if(!l&&c!=null){const P=setTimeout(c,u);return()=>{clearTimeout(P)}}},[c,l,u]),s.jsx("span",{className:x,style:C,children:s.jsx("span",{className:v})})}const da=se("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),xe=da,ua=["center","classes","className"];let Pt=e=>e,Ln,zn,$n,Dn;const en=550,pa=80,fa=rn(Ln||(Ln=Pt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ma=rn(zn||(zn=Pt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ha=rn($n||($n=Pt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ga=_("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),va=_(ca,{name:"MuiTouchRipple",slot:"Ripple"})(Dn||(Dn=Pt`
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
`),xe.rippleVisible,fa,en,({theme:e})=>e.transitions.easing.easeInOut,xe.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,xe.child,xe.childLeaving,ma,en,({theme:e})=>e.transitions.easing.easeInOut,xe.childPulsate,ha,({theme:e})=>e.transitions.easing.easeInOut),xa=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:a}=o,l=q(o,ua),[c,u]=d.useState([]),f=d.useRef(0),m=d.useRef(null);d.useEffect(()=>{m.current&&(m.current(),m.current=null)},[c]);const x=d.useRef(!1),C=to(),v=d.useRef(null),P=d.useRef(null),k=d.useCallback(h=>{const{pulsate:w,rippleX:E,rippleY:S,rippleSize:N,cb:H}=h;u(M=>[...M,s.jsx(va,{classes:{ripple:F(r.ripple,xe.ripple),rippleVisible:F(r.rippleVisible,xe.rippleVisible),ripplePulsate:F(r.ripplePulsate,xe.ripplePulsate),child:F(r.child,xe.child),childLeaving:F(r.childLeaving,xe.childLeaving),childPulsate:F(r.childPulsate,xe.childPulsate)},timeout:en,pulsate:w,rippleX:E,rippleY:S,rippleSize:N},f.current)]),f.current+=1,m.current=H},[r]),y=d.useCallback((h={},w={},E=()=>{})=>{const{pulsate:S=!1,center:N=i||w.pulsate,fakeElement:H=!1}=w;if((h==null?void 0:h.type)==="mousedown"&&x.current){x.current=!1;return}(h==null?void 0:h.type)==="touchstart"&&(x.current=!0);const M=H?null:P.current,b=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let O,D,A;if(N||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)O=Math.round(b.width/2),D=Math.round(b.height/2);else{const{clientX:R,clientY:I}=h.touches&&h.touches.length>0?h.touches[0]:h;O=Math.round(R-b.left),D=Math.round(I-b.top)}if(N)A=Math.sqrt((2*b.width**2+b.height**2)/3),A%2===0&&(A+=1);else{const R=Math.max(Math.abs((M?M.clientWidth:0)-O),O)*2+2,I=Math.max(Math.abs((M?M.clientHeight:0)-D),D)*2+2;A=Math.sqrt(R**2+I**2)}h!=null&&h.touches?v.current===null&&(v.current=()=>{k({pulsate:S,rippleX:O,rippleY:D,rippleSize:A,cb:E})},C.start(pa,()=>{v.current&&(v.current(),v.current=null)})):k({pulsate:S,rippleX:O,rippleY:D,rippleSize:A,cb:E})},[i,k,C]),j=d.useCallback(()=>{y({},{pulsate:!0})},[y]),g=d.useCallback((h,w)=>{if(C.clear(),(h==null?void 0:h.type)==="touchend"&&v.current){v.current(),v.current=null,C.start(0,()=>{g(h,w)});return}v.current=null,u(E=>E.length>0?E.slice(1):E),m.current=w},[C]);return d.useImperativeHandle(n,()=>({pulsate:j,start:y,stop:g}),[j,y,g]),s.jsx(ga,p({className:F(xe.root,r.root,a),ref:P},l,{children:s.jsx(vr,{component:null,exit:!0,children:c})}))}),ba=xa;function ya(e){return pe("MuiButtonBase",e)}const Ta=se("MuiButtonBase",["root","disabled","focusVisible"]),Ca=Ta,Sa=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Pa=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,a=fe({root:["root",t&&"disabled",n&&"focusVisible"]},ya,i);return n&&o&&(a.root+=` ${o}`),a},wa=_("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ca.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ea=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:a,className:l,component:c="button",disabled:u=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:x=!1,LinkComponent:C="a",onBlur:v,onClick:P,onContextMenu:k,onDragLeave:y,onFocus:j,onFocusVisible:g,onKeyDown:h,onKeyUp:w,onMouseDown:E,onMouseLeave:S,onMouseUp:N,onTouchEnd:H,onTouchMove:M,onTouchStart:b,tabIndex:O=0,TouchRippleProps:D,touchRippleRef:A,type:R}=o,I=q(o,Sa),L=d.useRef(null),T=d.useRef(null),$=ge(T,A),{isFocusVisibleRef:X,onFocus:le,onBlur:ce,ref:z}=qo(),[G,V]=d.useState(!1);u&&G&&V(!1),d.useImperativeHandle(i,()=>({focusVisible:()=>{V(!0),L.current.focus()}}),[]);const[Y,ee]=d.useState(!1);d.useEffect(()=>{ee(!0)},[]);const te=Y&&!f&&!u;d.useEffect(()=>{G&&x&&!f&&Y&&T.current.pulsate()},[f,x,G,Y]);function J(U,yn,$o=m){return we(Tn=>(yn&&yn(Tn),!$o&&T.current&&T.current[U](Tn),!0))}const re=J("start",E),ve=J("stop",k),ae=J("stop",y),B=J("stop",N),Q=J("stop",U=>{G&&U.preventDefault(),S&&S(U)}),me=J("start",b),ct=J("stop",H),ke=J("stop",M),Ae=J("stop",U=>{ce(U),X.current===!1&&V(!1),v&&v(U)},!1),dt=we(U=>{L.current||(L.current=U.currentTarget),le(U),X.current===!0&&(V(!0),g&&g(U)),j&&j(U)}),$e=()=>{const U=L.current;return c&&c!=="button"&&!(U.tagName==="A"&&U.href)},De=d.useRef(!1),ut=we(U=>{x&&!De.current&&G&&T.current&&U.key===" "&&(De.current=!0,T.current.stop(U,()=>{T.current.start(U)})),U.target===U.currentTarget&&$e()&&U.key===" "&&U.preventDefault(),h&&h(U),U.target===U.currentTarget&&$e()&&U.key==="Enter"&&!u&&(U.preventDefault(),P&&P(U))}),pt=we(U=>{x&&U.key===" "&&T.current&&G&&!U.defaultPrevented&&(De.current=!1,T.current.stop(U,()=>{T.current.pulsate(U)})),w&&w(U),P&&U.target===U.currentTarget&&$e()&&U.key===" "&&!U.defaultPrevented&&P(U)});let ue=c;ue==="button"&&(I.href||I.to)&&(ue=C);const _e={};ue==="button"?(_e.type=R===void 0?"button":R,_e.disabled=u):(!I.href&&!I.to&&(_e.role="button"),u&&(_e["aria-disabled"]=u));const Lo=ge(n,z,L),bn=p({},o,{centerRipple:r,component:c,disabled:u,disableRipple:f,disableTouchRipple:m,focusRipple:x,tabIndex:O,focusVisible:G}),zo=Pa(bn);return s.jsxs(wa,p({as:ue,className:F(zo.root,l),ownerState:bn,onBlur:Ae,onClick:P,onContextMenu:ve,onFocus:dt,onKeyDown:ut,onKeyUp:pt,onMouseDown:re,onMouseLeave:Q,onMouseUp:B,onDragLeave:ae,onTouchEnd:ct,onTouchMove:ke,onTouchStart:me,ref:Lo,tabIndex:u?-1:O,type:R},_e,I,{children:[a,te?s.jsx(ba,p({ref:$,center:r},D)):null]}))}),lt=Ea;function ka(e){return pe("MuiButton",e)}const Aa=se("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),gt=Aa,Ia=d.createContext({}),Ra=Ia,Ma=d.createContext(void 0),ja=Ma,La=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],za=e=>{const{color:t,disableElevation:n,fullWidth:o,size:i,variant:r,classes:a}=e,l={root:["root",r,`${r}${ne(t)}`,`size${ne(i)}`,`${r}Size${ne(i)}`,`color${ne(t)}`,n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${ne(i)}`],endIcon:["icon","endIcon",`iconSize${ne(i)}`]},c=fe(l,ka,a);return p({},a,c)},fo=e=>p({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),$a=_(lt,{shouldForwardProp:e=>qe(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${ne(n.color)}`],t[`size${ne(n.size)}`],t[`${n.variant}Size${ne(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],r=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return p({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":p({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":p({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${gt.focusVisible}`]:p({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${gt.disabled}`]:p({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${ie(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(o=e.palette).getContrastText)==null?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${gt.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${gt.disabled}`]:{boxShadow:"none"}}),Da=_("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${ne(n.size)}`]]}})(({ownerState:e})=>p({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},fo(e))),Oa=_("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${ne(n.size)}`]]}})(({ownerState:e})=>p({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},fo(e))),Na=d.forwardRef(function(t,n){const o=d.useContext(Ra),i=d.useContext(ja),r=_o(o,t),a=de({props:r,name:"MuiButton"}),{children:l,color:c="primary",component:u="button",className:f,disabled:m=!1,disableElevation:x=!1,disableFocusRipple:C=!1,endIcon:v,focusVisibleClassName:P,fullWidth:k=!1,size:y="medium",startIcon:j,type:g,variant:h="text"}=a,w=q(a,La),E=p({},a,{color:c,component:u,disabled:m,disableElevation:x,disableFocusRipple:C,fullWidth:k,size:y,type:g,variant:h}),S=za(E),N=j&&s.jsx(Da,{className:S.startIcon,ownerState:E,children:j}),H=v&&s.jsx(Oa,{className:S.endIcon,ownerState:E,children:v}),M=i||"";return s.jsxs($a,p({ownerState:E,className:F(o.className,S.root,f,M),component:u,disabled:m,focusRipple:!C,focusVisibleClassName:F(S.focusVisible,P),ref:n,type:g},w,{classes:S,children:[N,l,H]}))}),Ha=Na,Ba=d.createContext({}),Se=Ba;function Ua(e){return pe("MuiList",e)}se("MuiList",["root","padding","dense","subheader"]);const Fa=["children","className","component","dense","disablePadding","subheader"],Va=e=>{const{classes:t,disablePadding:n,dense:o,subheader:i}=e;return fe({root:["root",!n&&"padding",o&&"dense",i&&"subheader"]},Ua,t)},Wa=_("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>p({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),qa=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiList"}),{children:i,className:r,component:a="ul",dense:l=!1,disablePadding:c=!1,subheader:u}=o,f=q(o,Fa),m=d.useMemo(()=>({dense:l}),[l]),x=p({},o,{component:a,dense:l,disablePadding:c}),C=Va(x);return s.jsx(Se.Provider,{value:m,children:s.jsxs(Wa,p({as:a,className:F(C.root,r),ref:n,ownerState:x},f,{children:[u,i]}))})}),mo=qa;function _a(e){return pe("MuiDivider",e)}const Ga=se("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),On=Ga,Ya=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Ka=e=>{const{absolute:t,children:n,classes:o,flexItem:i,light:r,orientation:a,textAlign:l,variant:c}=e;return fe({root:["root",t&&"absolute",c,r&&"light",a==="vertical"&&"vertical",i&&"flexItem",n&&"withChildren",n&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},_a,o)},Xa=_("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,n.orientation==="vertical"&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&n.orientation==="vertical"&&t.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&t.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>p({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:ie(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>p({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>p({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Qa=_("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,n.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>p({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),ho=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiDivider"}),{absolute:i=!1,children:r,className:a,component:l=r?"div":"hr",flexItem:c=!1,light:u=!1,orientation:f="horizontal",role:m=l!=="hr"?"separator":void 0,textAlign:x="center",variant:C="fullWidth"}=o,v=q(o,Ya),P=p({},o,{absolute:i,component:l,flexItem:c,light:u,orientation:f,role:m,textAlign:x,variant:C}),k=Ka(P);return s.jsx(Xa,p({as:l,className:F(k.root,a),role:m,ref:n,ownerState:P},v,{children:r?s.jsx(Qa,{className:k.wrapper,ownerState:P,children:r}):null}))});ho.muiSkipListHighlight=!0;const Ja=ho;function Za(e){return pe("MuiListItem",e)}const es=se("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Ue=es;function ts(e){return pe("MuiListItemButton",e)}const ns=se("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Fe=ns,os=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],is=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},rs=e=>{const{alignItems:t,classes:n,dense:o,disabled:i,disableGutters:r,divider:a,selected:l}=e,u=fe({root:["root",o&&"dense",!r&&"gutters",a&&"divider",i&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},ts,n);return p({},n,u)},as=_(lt,{shouldForwardProp:e=>qe(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:is})(({theme:e,ownerState:t})=>p({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Fe.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Fe.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Fe.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Fe.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Fe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),ss=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:r=!1,component:a="div",children:l,dense:c=!1,disableGutters:u=!1,divider:f=!1,focusVisibleClassName:m,selected:x=!1,className:C}=o,v=q(o,os),P=d.useContext(Se),k=d.useMemo(()=>({dense:c||P.dense||!1,alignItems:i,disableGutters:u}),[i,P.dense,c,u]),y=d.useRef(null);Ie(()=>{r&&y.current&&y.current.focus()},[r]);const j=p({},o,{alignItems:i,dense:k.dense,disableGutters:u,divider:f,selected:x}),g=rs(j),h=ge(y,n);return s.jsx(Se.Provider,{value:k,children:s.jsx(as,p({ref:h,href:v.href||v.to,component:(v.href||v.to)&&a==="div"?"button":a,focusVisibleClassName:F(g.focusVisible,m),ownerState:j,className:F(g.root,C)},v,{classes:g,children:l}))})}),ls=ss;function cs(e){return pe("MuiListItemSecondaryAction",e)}se("MuiListItemSecondaryAction",["root","disableGutters"]);const ds=["className"],us=e=>{const{disableGutters:t,classes:n}=e;return fe({root:["root",t&&"disableGutters"]},cs,n)},ps=_("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})(({ownerState:e})=>p({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),go=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemSecondaryAction"}),{className:i}=o,r=q(o,ds),a=d.useContext(Se),l=p({},o,{disableGutters:a.disableGutters}),c=us(l);return s.jsx(ps,p({className:F(c.root,i),ownerState:l,ref:n},r))});go.muiName="ListItemSecondaryAction";const fs=go,ms=["className"],hs=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],gs=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]},vs=e=>{const{alignItems:t,button:n,classes:o,dense:i,disabled:r,disableGutters:a,disablePadding:l,divider:c,hasSecondaryAction:u,selected:f}=e;return fe({root:["root",i&&"dense",!a&&"gutters",!l&&"padding",c&&"divider",r&&"disabled",n&&"button",t==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",f&&"selected"],container:["container"]},Za,o)},xs=_("div",{name:"MuiListItem",slot:"Root",overridesResolver:gs})(({theme:e,ownerState:t})=>p({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&p({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${Fe.root}`]:{paddingRight:48}},{[`&.${Ue.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Ue.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ue.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Ue.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Ue.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),bs=_("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),ys=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItem"}),{alignItems:i="center",autoFocus:r=!1,button:a=!1,children:l,className:c,component:u,components:f={},componentsProps:m={},ContainerComponent:x="li",ContainerProps:{className:C}={},dense:v=!1,disabled:P=!1,disableGutters:k=!1,disablePadding:y=!1,divider:j=!1,focusVisibleClassName:g,secondaryAction:h,selected:w=!1,slotProps:E={},slots:S={}}=o,N=q(o.ContainerProps,ms),H=q(o,hs),M=d.useContext(Se),b=d.useMemo(()=>({dense:v||M.dense||!1,alignItems:i,disableGutters:k}),[i,M.dense,v,k]),O=d.useRef(null);Ie(()=>{r&&O.current&&O.current.focus()},[r]);const D=d.Children.toArray(l),A=D.length&&Go(D[D.length-1],["ListItemSecondaryAction"]),R=p({},o,{alignItems:i,autoFocus:r,button:a,dense:b.dense,disabled:P,disableGutters:k,disablePadding:y,divider:j,hasSecondaryAction:A,selected:w}),I=vs(R),L=ge(O,n),T=S.root||f.Root||xs,$=E.root||m.root||{},X=p({className:F(I.root,$.className,c),disabled:P},H);let le=u||"li";return a&&(X.component=u||"div",X.focusVisibleClassName=F(Ue.focusVisible,g),le=lt),A?(le=!X.component&&!u?"div":le,x==="li"&&(le==="li"?le="div":X.component==="li"&&(X.component="div")),s.jsx(Se.Provider,{value:b,children:s.jsxs(bs,p({as:x,className:F(I.container,C),ref:L,ownerState:R},N,{children:[s.jsx(T,p({},$,!Tt(T)&&{as:le,ownerState:p({},R,$.ownerState)},X,{children:D})),D.pop()]}))})):s.jsx(Se.Provider,{value:b,children:s.jsxs(T,p({},$,{as:le,ref:L},!Tt(T)&&{ownerState:p({},R,$.ownerState)},X,{children:[D,h&&s.jsx(fs,{children:h})]}))})}),Ts=ys;function Cs(e){return pe("MuiListItemIcon",e)}const Ss=se("MuiListItemIcon",["root","alignItemsFlexStart"]),Nn=Ss,Ps=["className"],ws=e=>{const{alignItems:t,classes:n}=e;return fe({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Cs,n)},Es=_("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>p({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),ks=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiListItemIcon"}),{className:i}=o,r=q(o,Ps),a=d.useContext(Se),l=p({},o,{alignItems:a.alignItems}),c=ws(l);return s.jsx(Es,p({className:F(c.root,i),ownerState:l,ref:n},r))}),As=ks;var dn={},Is=at;Object.defineProperty(dn,"__esModule",{value:!0});var vo=dn.default=void 0,Rs=Is(rt()),Ms=s;vo=dn.default=(0,Rs.default)((0,Ms.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var un={},js=at;Object.defineProperty(un,"__esModule",{value:!0});var xo=un.default=void 0,Ls=js(rt()),zs=s;xo=un.default=(0,Ls.default)((0,zs.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var pn={},$s=at;Object.defineProperty(pn,"__esModule",{value:!0});var bo=pn.default=void 0,Ds=$s(rt()),Os=s;bo=pn.default=(0,Ds.default)((0,Os.jsx)("path",{d:"M21 8V7l-3 2-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"}),"ContactMail");function Ns(e){return pe("MuiIconButton",e)}const Hs=se("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Bs=Hs,Us=["edge","children","className","color","disabled","disableFocusRipple","size"],Fs=e=>{const{classes:t,disabled:n,color:o,edge:i,size:r}=e,a={root:["root",n&&"disabled",o!=="default"&&`color${ne(o)}`,i&&`edge${ne(i)}`,`size${ne(r)}`]};return fe(a,Ns,t)},Vs=_(lt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${ne(n.color)}`],n.edge&&t[`edge${ne(n.edge)}`],t[`size${ne(n.size)}`]]}})(({theme:e,ownerState:t})=>p({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const o=(n=(e.vars||e).palette)==null?void 0:n[t.color];return p({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&p({color:o==null?void 0:o.main},!t.disableRipple&&{"&:hover":p({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Bs.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ws=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiIconButton"}),{edge:i=!1,children:r,className:a,color:l="default",disabled:c=!1,disableFocusRipple:u=!1,size:f="medium"}=o,m=q(o,Us),x=p({},o,{edge:i,color:l,disabled:c,disableFocusRipple:u,size:f}),C=Fs(x);return s.jsx(Vs,p({className:F(C.root,a),centerRipple:!0,focusRipple:!u,disabled:c,ref:n},m,{ownerState:x,children:r}))}),qs=Ws;var K={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn=Symbol.for("react.element"),mn=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Et=Symbol.for("react.strict_mode"),kt=Symbol.for("react.profiler"),At=Symbol.for("react.provider"),It=Symbol.for("react.context"),_s=Symbol.for("react.server_context"),Rt=Symbol.for("react.forward_ref"),Mt=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Gs=Symbol.for("react.offscreen"),yo;yo=Symbol.for("react.module.reference");function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fn:switch(e=e.type,e){case wt:case kt:case Et:case Mt:case jt:return e;default:switch(e=e&&e.$$typeof,e){case _s:case It:case Rt:case zt:case Lt:case At:return e;default:return t}}case mn:return t}}}K.ContextConsumer=It;K.ContextProvider=At;K.Element=fn;K.ForwardRef=Rt;K.Fragment=wt;K.Lazy=zt;K.Memo=Lt;K.Portal=mn;K.Profiler=kt;K.StrictMode=Et;K.Suspense=Mt;K.SuspenseList=jt;K.isAsyncMode=function(){return!1};K.isConcurrentMode=function(){return!1};K.isContextConsumer=function(e){return be(e)===It};K.isContextProvider=function(e){return be(e)===At};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fn};K.isForwardRef=function(e){return be(e)===Rt};K.isFragment=function(e){return be(e)===wt};K.isLazy=function(e){return be(e)===zt};K.isMemo=function(e){return be(e)===Lt};K.isPortal=function(e){return be(e)===mn};K.isProfiler=function(e){return be(e)===kt};K.isStrictMode=function(e){return be(e)===Et};K.isSuspense=function(e){return be(e)===Mt};K.isSuspenseList=function(e){return be(e)===jt};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wt||e===kt||e===Et||e===Mt||e===jt||e===Gs||typeof e=="object"&&e!==null&&(e.$$typeof===zt||e.$$typeof===Lt||e.$$typeof===At||e.$$typeof===It||e.$$typeof===Rt||e.$$typeof===yo||e.getModuleId!==void 0)};K.typeOf=be;const Ys=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Vt(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Hn(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function To(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function Ke(e,t,n,o,i,r){let a=!1,l=i(e,t,t?n:!1);for(;l;){if(l===e.firstChild){if(a)return!1;a=!0}const c=o?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!To(l,r)||c)l=i(e,l,n);else return l.focus(),!0}return!1}const Ks=d.forwardRef(function(t,n){const{actions:o,autoFocus:i=!1,autoFocusItem:r=!1,children:a,className:l,disabledItemsFocusable:c=!1,disableListWrap:u=!1,onKeyDown:f,variant:m="selectedMenu"}=t,x=q(t,Ys),C=d.useRef(null),v=d.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ie(()=>{i&&C.current.focus()},[i]),d.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(g,{direction:h})=>{const w=!C.current.style.width;if(g.clientHeight<C.current.clientHeight&&w){const E=`${Zn(he(g))}px`;C.current.style[h==="rtl"?"paddingLeft":"paddingRight"]=E,C.current.style.width=`calc(100% + ${E})`}return C.current}}),[]);const P=g=>{const h=C.current,w=g.key,E=he(h).activeElement;if(w==="ArrowDown")g.preventDefault(),Ke(h,E,u,c,Vt);else if(w==="ArrowUp")g.preventDefault(),Ke(h,E,u,c,Hn);else if(w==="Home")g.preventDefault(),Ke(h,null,u,c,Vt);else if(w==="End")g.preventDefault(),Ke(h,null,u,c,Hn);else if(w.length===1){const S=v.current,N=w.toLowerCase(),H=performance.now();S.keys.length>0&&(H-S.lastTime>500?(S.keys=[],S.repeating=!0,S.previousKeyMatched=!0):S.repeating&&N!==S.keys[0]&&(S.repeating=!1)),S.lastTime=H,S.keys.push(N);const M=E&&!S.repeating&&To(E,S);S.previousKeyMatched&&(M||Ke(h,E,!1,c,Vt,S))?g.preventDefault():S.previousKeyMatched=!1}f&&f(g)},k=ge(C,n);let y=-1;d.Children.forEach(a,(g,h)=>{if(!d.isValidElement(g)){y===h&&(y+=1,y>=a.length&&(y=-1));return}g.props.disabled||(m==="selectedMenu"&&g.props.selected||y===-1)&&(y=h),y===h&&(g.props.disabled||g.props.muiSkipListHighlight||g.type.muiSkipListHighlight)&&(y+=1,y>=a.length&&(y=-1))});const j=d.Children.map(a,(g,h)=>{if(h===y){const w={};return r&&(w.autoFocus=!0),g.props.tabIndex===void 0&&m==="selectedMenu"&&(w.tabIndex=0),d.cloneElement(g,w)}return g});return s.jsx(mo,p({role:"menu",ref:k,className:l,onKeyDown:P,tabIndex:i?0:-1},x,{children:j}))}),Xs=Ks,Qs=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function tn(e){return`scale(${e}, ${e**2})`}const Js={entering:{opacity:1,transform:tn(1)},entered:{opacity:1,transform:"none"}},Wt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Co=d.forwardRef(function(t,n){const{addEndListener:o,appear:i=!0,children:r,easing:a,in:l,onEnter:c,onEntered:u,onEntering:f,onExit:m,onExited:x,onExiting:C,style:v,timeout:P="auto",TransitionComponent:k=an}=t,y=q(t,Qs),j=to(),g=d.useRef(),h=st(),w=d.useRef(null),E=ge(w,r.ref,n),S=R=>I=>{if(R){const L=w.current;I===void 0?R(L):R(L,I)}},N=S(f),H=S((R,I)=>{cn(R);const{duration:L,delay:T,easing:$}=ze({style:v,timeout:P,easing:a},{mode:"enter"});let X;P==="auto"?(X=h.transitions.getAutoHeightDuration(R.clientHeight),g.current=X):X=L,R.style.transition=[h.transitions.create("opacity",{duration:X,delay:T}),h.transitions.create("transform",{duration:Wt?X:X*.666,delay:T,easing:$})].join(","),c&&c(R,I)}),M=S(u),b=S(C),O=S(R=>{const{duration:I,delay:L,easing:T}=ze({style:v,timeout:P,easing:a},{mode:"exit"});let $;P==="auto"?($=h.transitions.getAutoHeightDuration(R.clientHeight),g.current=$):$=I,R.style.transition=[h.transitions.create("opacity",{duration:$,delay:L}),h.transitions.create("transform",{duration:Wt?$:$*.666,delay:Wt?L:L||$*.333,easing:T})].join(","),R.style.opacity=0,R.style.transform=tn(.75),m&&m(R)}),D=S(x),A=R=>{P==="auto"&&j.start(g.current||0,R),o&&o(w.current,R)};return s.jsx(k,p({appear:i,in:l,nodeRef:w,onEnter:H,onEntered:M,onEntering:N,onExit:O,onExited:D,onExiting:b,addEndListener:A,timeout:P==="auto"?null:P},y,{children:(R,I)=>d.cloneElement(r,p({style:p({opacity:0,transform:tn(.75),visibility:R==="exited"&&!l?"hidden":void 0},Js[R],v,r.props.style),ref:E},I))}))});Co.muiSupportAuto=!0;const Zs=Co;function el(e){return pe("MuiPopover",e)}se("MuiPopover",["root","paper"]);const tl=["onEntering"],nl=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ol=["slotProps"];function Bn(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Un(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Fn(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function qt(e){return typeof e=="function"?e():e}const il=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"]},el,t)},rl=_(lo,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),So=_(co,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),al=d.forwardRef(function(t,n){var o,i,r;const a=de({props:t,name:"MuiPopover"}),{action:l,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:m="anchorEl",children:x,className:C,container:v,elevation:P=8,marginThreshold:k=16,open:y,PaperProps:j={},slots:g,slotProps:h,transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:E=Zs,transitionDuration:S="auto",TransitionProps:{onEntering:N}={},disableScrollLock:H=!1}=a,M=q(a.TransitionProps,tl),b=q(a,nl),O=(o=h==null?void 0:h.paper)!=null?o:j,D=d.useRef(),A=ge(D,O.ref),R=p({},a,{anchorOrigin:u,anchorReference:m,elevation:P,marginThreshold:k,externalPaperSlotProps:O,transformOrigin:w,TransitionComponent:E,transitionDuration:S,TransitionProps:M}),I=il(R),L=d.useCallback(()=>{if(m==="anchorPosition")return f;const B=qt(c),me=(B&&B.nodeType===1?B:he(D.current).body).getBoundingClientRect();return{top:me.top+Bn(me,u.vertical),left:me.left+Un(me,u.horizontal)}},[c,u.horizontal,u.vertical,f,m]),T=d.useCallback(B=>({vertical:Bn(B,w.vertical),horizontal:Un(B,w.horizontal)}),[w.horizontal,w.vertical]),$=d.useCallback(B=>{const Q={width:B.offsetWidth,height:B.offsetHeight},me=T(Q);if(m==="none")return{top:null,left:null,transformOrigin:Fn(me)};const ct=L();let ke=ct.top-me.vertical,Ae=ct.left-me.horizontal;const dt=ke+Q.height,$e=Ae+Q.width,De=Te(qt(c)),ut=De.innerHeight-k,pt=De.innerWidth-k;if(k!==null&&ke<k){const ue=ke-k;ke-=ue,me.vertical+=ue}else if(k!==null&&dt>ut){const ue=dt-ut;ke-=ue,me.vertical+=ue}if(k!==null&&Ae<k){const ue=Ae-k;Ae-=ue,me.horizontal+=ue}else if($e>pt){const ue=$e-pt;Ae-=ue,me.horizontal+=ue}return{top:`${Math.round(ke)}px`,left:`${Math.round(Ae)}px`,transformOrigin:Fn(me)}},[c,m,L,T,k]),[X,le]=d.useState(y),ce=d.useCallback(()=>{const B=D.current;if(!B)return;const Q=$(B);Q.top!==null&&(B.style.top=Q.top),Q.left!==null&&(B.style.left=Q.left),B.style.transformOrigin=Q.transformOrigin,le(!0)},[$]);d.useEffect(()=>(H&&window.addEventListener("scroll",ce),()=>window.removeEventListener("scroll",ce)),[c,H,ce]);const z=(B,Q)=>{N&&N(B,Q),ce()},G=()=>{le(!1)};d.useEffect(()=>{y&&ce()}),d.useImperativeHandle(l,()=>y?{updatePosition:()=>{ce()}}:null,[y,ce]),d.useEffect(()=>{if(!y)return;const B=eo(()=>{ce()}),Q=Te(c);return Q.addEventListener("resize",B),()=>{B.clear(),Q.removeEventListener("resize",B)}},[c,y,ce]);let V=S;S==="auto"&&!E.muiSupportAuto&&(V=void 0);const Y=v||(c?he(qt(c)).body:void 0),ee=(i=g==null?void 0:g.root)!=null?i:rl,te=(r=g==null?void 0:g.paper)!=null?r:So,J=Ve({elementType:te,externalSlotProps:p({},O,{style:X?O.style:p({},O.style,{opacity:0})}),additionalProps:{elevation:P,ref:A},ownerState:R,className:F(I.paper,O==null?void 0:O.className)}),re=Ve({elementType:ee,externalSlotProps:(h==null?void 0:h.root)||{},externalForwardedProps:b,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Y,open:y},ownerState:R,className:F(I.root,C)}),{slotProps:ve}=re,ae=q(re,ol);return s.jsx(ee,p({},ae,!Tt(ee)&&{slotProps:ve,disableScrollLock:H},{children:s.jsx(E,p({appear:!0,in:y,onEntering:z,onExited:G,timeout:V},M,{children:s.jsx(te,p({},J,{children:x}))}))}))}),sl=al;function ll(e){return pe("MuiMenu",e)}se("MuiMenu",["root","paper","list"]);const cl=["onEntering"],dl=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ul={vertical:"top",horizontal:"right"},pl={vertical:"top",horizontal:"left"},fl=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"],list:["list"]},ll,t)},ml=_(sl,{shouldForwardProp:e=>qe(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),hl=_(So,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),gl=_(Xs,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),vl=d.forwardRef(function(t,n){var o,i;const r=de({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:l,className:c,disableAutoFocusItem:u=!1,MenuListProps:f={},onClose:m,open:x,PaperProps:C={},PopoverClasses:v,transitionDuration:P="auto",TransitionProps:{onEntering:k}={},variant:y="selectedMenu",slots:j={},slotProps:g={}}=r,h=q(r.TransitionProps,cl),w=q(r,dl),E=ro(),S=p({},r,{autoFocus:a,disableAutoFocusItem:u,MenuListProps:f,onEntering:k,PaperProps:C,transitionDuration:P,TransitionProps:h,variant:y}),N=fl(S),H=a&&!u&&x,M=d.useRef(null),b=(T,$)=>{M.current&&M.current.adjustStyleForScrollbar(T,{direction:E?"rtl":"ltr"}),k&&k(T,$)},O=T=>{T.key==="Tab"&&(T.preventDefault(),m&&m(T,"tabKeyDown"))};let D=-1;d.Children.map(l,(T,$)=>{d.isValidElement(T)&&(T.props.disabled||(y==="selectedMenu"&&T.props.selected||D===-1)&&(D=$))});const A=(o=j.paper)!=null?o:hl,R=(i=g.paper)!=null?i:C,I=Ve({elementType:j.root,externalSlotProps:g.root,ownerState:S,className:[N.root,c]}),L=Ve({elementType:A,externalSlotProps:R,ownerState:S,className:N.paper});return s.jsx(ml,p({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?ul:pl,slots:{paper:A,root:j.root},slotProps:{root:I,paper:L},open:x,ref:n,transitionDuration:P,TransitionProps:p({onEntering:b},h),ownerState:S},w,{classes:v,children:s.jsx(gl,p({onKeyDown:O,actions:M,autoFocus:a&&(D===-1||u),autoFocusItem:H,variant:y},f,{className:F(N.list,f.className),children:l}))}))}),xl=vl,bl=se("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Vn=bl;function yl(e){return pe("MuiMenuItem",e)}const Tl=se("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Xe=Tl,Cl=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Sl=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Pl=e=>{const{disabled:t,dense:n,divider:o,disableGutters:i,selected:r,classes:a}=e,c=fe({root:["root",n&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",r&&"selected"]},yl,a);return p({},a,c)},wl=_(lt,{shouldForwardProp:e=>qe(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Sl})(({theme:e,ownerState:t})=>p({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Xe.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Xe.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Xe.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ie(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ie(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Xe.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Xe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${On.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${On.inset}`]:{marginLeft:52},[`& .${Vn.root}`]:{marginTop:0,marginBottom:0},[`& .${Vn.inset}`]:{paddingLeft:36},[`& .${Nn.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&p({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Nn.root} svg`]:{fontSize:"1.25rem"}}))),El=d.forwardRef(function(t,n){const o=de({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:r="li",dense:a=!1,divider:l=!1,disableGutters:c=!1,focusVisibleClassName:u,role:f="menuitem",tabIndex:m,className:x}=o,C=q(o,Cl),v=d.useContext(Se),P=d.useMemo(()=>({dense:a||v.dense||!1,disableGutters:c}),[v.dense,a,c]),k=d.useRef(null);Ie(()=>{i&&k.current&&k.current.focus()},[i]);const y=p({},o,{dense:P.dense,divider:l,disableGutters:c}),j=Pl(o),g=ge(k,n);let h;return o.disabled||(h=m!==void 0?m:-1),s.jsx(Se.Provider,{value:P,children:s.jsx(wl,p({ref:g,role:f,tabIndex:h,component:r,focusVisibleClassName:F(j.focusVisible,u),className:F(j.root,x)},C,{ownerState:y,classes:j}))})}),kl=El;var hn={},Al=at;Object.defineProperty(hn,"__esModule",{value:!0});var Po=hn.default=void 0,Il=Al(rt()),Rl=s;Po=hn.default=(0,Il.default)((0,Rl.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language");const{slice:Ml,forEach:jl}=[];function Ll(e){return jl.call(Ml.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}const Wn=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,zl=(e,t,n)=>{const o=n||{};o.path=o.path||"/";const i=encodeURIComponent(t);let r=`${e}=${i}`;if(o.maxAge>0){const a=o.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(a)}`}if(o.domain){if(!Wn.test(o.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${o.domain}`}if(o.path){if(!Wn.test(o.path))throw new TypeError("option path is invalid");r+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(r+="; HttpOnly"),o.secure&&(r+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},qn={create(e,t,n,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),o&&(i.domain=o),document.cookie=zl(e,encodeURIComponent(t),i)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let o=0;o<n.length;o++){let i=n[o];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove(e){this.create(e,"",-1)}};var $l={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return qn.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:o,cookieDomain:i,cookieOptions:r}=t;n&&typeof document<"u"&&qn.create(n,e,o,i,r)}},Dl={name:"querystring",lookup(e){var o;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((o=window.location.hash)==null?void 0:o.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const a=i.substring(1).split("&");for(let l=0;l<a.length;l++){const c=a[l].indexOf("=");c>0&&a[l].substring(0,c)===t&&(n=a[l].substring(c+1))}}return n}};let Qe=null;const _n=()=>{if(Qe!==null)return Qe;try{Qe=window!=="undefined"&&window.localStorage!==null;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Qe=!1}return Qe};var Ol={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&_n())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&_n()&&window.localStorage.setItem(n,e)}};let Je=null;const Gn=()=>{if(Je!==null)return Je;try{Je=window!=="undefined"&&window.sessionStorage!==null;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Je=!1}return Je};var Nl={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Gn())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Gn()&&window.sessionStorage.setItem(n,e)}},Hl={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:o,language:i}=navigator;if(n)for(let r=0;r<n.length;r++)t.push(n[r]);o&&t.push(o),i&&t.push(i)}return t.length>0?t:void 0}},Bl={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const o=t||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(n=o.getAttribute("lang")),n}},Ul={name:"path",lookup(e){var i;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof t=="number"?t:0])==null?void 0:i.replace("/",""):void 0}},Fl={name:"subdomain",lookup(e){var i,r;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,o=typeof window<"u"&&((r=(i=window.location)==null?void 0:i.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(o)return o[n]}};function Vl(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}}class wo{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=Ll(n,this.options||{},Vl()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector($l),this.addDetector(Dl),this.addDetector(Ol),this.addDetector(Nl),this.addDetector(Hl),this.addDetector(Bl),this.addDetector(Ul),this.addDetector(Fl)}addDetector(t){return this.detectors[t.name]=t,this}detect(t){t||(t=this.options.order);let n=[];return t.forEach(o=>{if(this.detectors[o]){let i=this.detectors[o].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.map(o=>this.options.convertDetectedLanguage(o)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(t,this.options)}))}}wo.type="languageDetector";const Wl={title:"Innovation Conveyor",problemTitle:"THE PROBLEM: Our world loses up to 70% of innovative ideas and solutions that don't even survive to proof of concept",problemText1:"Psychological difficulties at different levels: Internal and external psychological barriers and dimensions",problemText2:"Multidisciplinary challenges: Lack of expertise in key areas, marketing, legal, finance. Lack of competencies is a barrier for innovators.",problemText3:"Conceptual jam: The long and difficult journey from idea inception to proof of concept, creating serious challenges.",solutionTitle:"Solution",solutionStrong:'Angelic Innovation Conveyor "AIC":',solutionText:"A platform designed to accumulate and test innovations at the Pre-seed stage as quickly as possible. On the one hand, the solution is individualized and at the same time the principle of the conveyor belt is applied.",solutionPoint1:"Creating a psychologically safe environment",solutionPoint2:"Adapted templates",solutionPoint3:"Full support",solutionPoint4:"Speedy proof of concept",solutionPoint5:"Innovative filtering",solutionPoint6:"Fast and in-depth analysis",solutionPoint7:"Building into the DNA of a startup",featuresTitle:"PRODUCT AND FEATURES",featuresText1:"Idea pitch: The innovator delivers the idea on the platform using customized templates in a psychologically safe environment.",featuresText2:"Lightning-fast innovation validation: After signing the NDA and adaptive presentation, the innovation is subjected to rapid pipeline validation and filtering.",featuresText3:"Full and in-depth validation: Once the concept has been validated, a comprehensive analysis of the innovation is carried out and a final report is prepared.",featuresText4:"Multi-level assessment: Information is sent to specialized departments for a comprehensive assessment",featuresText5:"Psychological safety + Conveyor approach = “AIC”",benefitsTitle:"BENEFITS innovators",benefitsText1:"Psychological comfort: Innovators will have access to a psychologically safe environment where their emotional needs are taken into account and stress levels are reduced when presenting their ideas and allowing them to focus on innovation",benefitsText2:"Accelerated optimization of processes and resources: With lightning-fast innovation validation and built-in templates for presentations and videos, innovators save time and resources by gaining quick access to evaluate their ideas and potential investors.",benefitsText3:"Effective Support and Development: Innovators can concentrate as much as possible on their innovative solutions. The parent company will take care of procedural issues.",customerSegmentsTitle:"“AIC” CUSTOMER SEGMENTS",customerText1:"Beginning Innovators: People who are trying their hand at creating startups or innovative projects for the first time.",customerText2:"Researchers: Science and research professionals interested in commercializing their research.",customerText3:"Experienced Innovators: People with experience in developing and implementing innovative projects, looking for support and new opportunities.",searchTitle:"SEARCH innovations in the world",differenceTitle:"WHAT makes us different",differenceText1:"Innovative concept: We work with the earliest stage of an idea. From the moment it first appeared to the innovator. Our concept allows us to work at the earliest stages and identify the most innovative solutions.",differenceText2:'Innovative concept of creating future companies: We develop and complete the creation of "Reinventing Organizations" based on the principle of sharing participation, responsibility and income among all employees, from top management to front-line workers and this is fundamentally different from the existing ones.',differenceText3:"Attracting investment: Investors' attention is on the issue of not losing investments, while founders' attention is on attracting vital finances at any cost. And both sides are right. And the idea? Innovation? It remains unattended and is transformed according to circumstances. Solution: Create a concept where all parties calmly receive what they need."},ql={header:"HEADER",order:"DONAT",home:"HOME",about:"PROBLEM",project:"PROJECT",rewards:"HELP",contact:"CONTACT"},_l={menu:"Menu"},Gl={footerAdditionalText:"Innovation Conveyor",usefulLinks:"Useful Links",blog:"Blog",projects:"Projects",contactUs:"Contact Us",socialMedia:"SOCIAL MEDIA"},Yl={language:"Language"},Kl={slide1Text:"A large-scale project to address the global problem of sedentary lifestyles."},Xl={mainSectionTitle:"We are developing large-scale technology to minimise the harms of a sedentary lifestyle.",mainSectionDescription:"Your description or other content here.",card1Title:"A sedentary lifestyle leads to chronic pain, scoliosis and other health problems.",card2Title:"The aim is to develop technology to minimise harm from prolonged sitting.",card3Title:"We develop technology that individually adapts to the physiological needs of each user, reducing the harm of prolonged sitting."},Ql={projectTitle:"A problem of planetary proportions.",goalAmount:"How many people today do you think spend more than 4 hours a day sitting? At work, at home, driving, travelling, on holiday?",currentAmount:"This is a problem that affects billions of people around the world. Prolonged sitting leads to chronic pain, scoliosis and other health problems. Sedentary lifestyles have a negative impact on people's quality of life and productivity, causing serious long-term consequences. This global problem requiresimmediate action.",numberOfInvestors:"OUR INVESTORS",amountToCollect:"WE HAVE TO COLLECT",orderButton:"DONAT"},Jl={formTitle:"Need Help? Open a Ticket",formDescription:"Our support team will get back to you ASAP via email.",namePlaceholder:"Your Name",emailPlaceholder:"Your Email",messagePlaceholder:"Enter Your Message",submitButton:"Submit Ticket",sending:"Sending...",error:"Error occurred while submitting the form."},Zl={subscribeTitle:"Subscribe to receive future updates",namePlaceholder:"Your Name",emailPlaceholder:"Your Email",subscribeButton:"Subscribe",sending:"Sending...",error:"Error occurred while submitting the form.",noSpam:"No spam guaranteed, So please don’t send any spam mail."},ec={founderName:"Maksym Morenets",founderPosition:"Founder of Angel Systems",socialMedia:"SOCIAL MEDIA"},tc={CommingSoon:" Comming Soon ",ThankYou:"Our website is currently under development. We should be finishedsoon. Thank you for your patience."},nc={h2:"The:",span:" 'Cura'","h2-1":"   technology",p:"A smart chair that individually adapts to the physiological needs of each user."},oc={h2:"Partnership in development ",p:"Partners: Innosuisse, Swiss HealthTech Centre."},ic={TitleH1:"We're not made for sitting, but if we do, we do it wisely.",AdaptationH2:"Individual adaptation",AdaptationP:"The technology offers a unique solution that fully adapts to the physiological characteristics of each user. Using advanced data analysis algorithms, Cura monitors the current state of your body and automatically adapts to your needs, providing optimal support and comfort.",OptimisationH2:"Optimising a sedentary lifestyle",OptimisationP:"Real-time technology analyses your posture and activity, adjusting support for your spine and other vulnerable body parts. This helps prevent the development of pain and discomfort",InnovationH2:"Innovative monitoring system",InnovationP:"A key feature of Cura is to constantly monitor the condition of your body. The system collects data about your posture, activity and general health to personalise support. This allows the system to be ready for your needs before the first contact, maximising comfort and minimising harm.",UniqueH3:"Unique Cura technology ",UniqueP:"Cura doesn't just adapt to individual needs, it actively interacts with your body to help it return to its natural, native position. The technology incorporates personalised adaptation, continuous real-time monitoring and consideration of physical needs, providing comprehensive support and assistance in recovery.",LargeScaleH3:"Cura's scalable and versatile technology:",LargeScaleP:"Our technology is not just a smart chair, but a versatile solution that can be integrated into a wide variety of environments. Whether you are at home, in the office, in the car or on a plane, Cura provides constant comfort and support, adapting to your physiological needs. ",BoltLargeScale:"This technology goes beyond standard solutions, offering a comprehensive approach to maintaining health and wellbeing that can be applied to a wide variety of situations and conditions. Cura is a step forward in creating an environment that cares for you anywhere, anytime.",LargeScaleBig:"If we're gonna sit, let's do it wisely."},rc={HelpH2:"Help Us",HelpP:"In order to get the technology to the ‘ready’ stage. We need your support",CardTitelH3:"Thank you for supporting us ",CardTextP:"You're a mega man",Card2TitelH3:"We need as much information as possible.",Card2TextP:"You're a mega man",Card3TitelH3:"send this to your employer or the developer of your favourite game. He wants to take care of you.",CopySuccess:"The letter was copied 😉",CopyLink:" Copy Letter"},ac={PartnersH2:"Companies that care about the health of their employees",PartnersP:"  External partners and corporate donors supporting the project."},sc={TitelH2:"News & Updates",NewsP:" Recent achievements and developments of the project.","id-1":"Your Text 1","id-2":"Your Text 2","id-3":"Your Text 3","id-4":"Your Text 4","id-5":"Your Text 5","id-6":"Your Text 6","id-7":"Your Text 7","id-8":"Your Text 8","id-9":"Your Text 9"},lc={TitelH2:"Feedback & support",TextP:"Real user reviews and endorsements from well-known individuals and organisations.","id-1":{text:"John Doe, CEO of Tech Innovators",hashtag:"#CURA is a smart solution for everyone. Thanks for the great work!👏"},"id-2":{text:"Jane Smith, Founder of Startup Hub",hashtag:"#CURA is changing our lives. Great team and product!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Tech Entrepreneur",hashtag:"#CURA helps people every day. Bravo for such innovation!👏🫡"},"id-4":{text:"Michael Brown, Investor at Future Ventures",hashtag:"#CURA is awesome! Great work and potential!😻"},"id-5":{text:"Emily Davis, CEO of Smart Solutions",hashtag:"#CURA is a game-changer. Amazing team!💙💛"},"id-6":{text:"Daniel Wilson, Co-Founder of NextGen Startups",hashtag:"#CURA chairs are incredible! Thanks for the quality!"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA is a brilliant idea! Excellent product and service!😉"},"id-8":{text:"James Anderson, Tech Investor",hashtag:"#CURA enhances comfort. Great innovation for all!"},"id-9":{text:"Linda Martinez, Founder of Wellness Tech",hashtag:"#CURA is a great idea for the office. Thanks for your work!"}},cc={AboutUs:Wl,Header:ql,MenuButton:_l,Footer:Gl,LanguageSelector:Yl,Background:Kl,ContentHomePage:Xl,HomeComponent:Ql,EmailTicket:Jl,Subscribe:Zl,OurContacts:ec,ErrorPage:tc,ITgame:nc,ITswiper:oc,Project:ic,HelpCards:rc,Partners:ac,News:sc,Feedback:lc},dc={title:"Інноваційний Конвеєр",problemTitle:"ПРОБЛЕМА: Наш світ втрачає до 70% інноваційних ідей та рішень, які навіть не доходять до доказу концепції",problemText1:"Психологічні труднощі на різних рівнях: Внутрішні та зовнішні психологічні бар'єри та виміри",problemText2:"Мультидисциплінарні виклики: Відсутність досвіду в ключових галузях, таких як маркетинг, юридична, фінансова сфери. Відсутність компетенцій є бар'єром для інноваторів.",problemText3:"Концептуальна перешкода: Довгий і складний шлях від зародження ідеї до доказу концепції, що створює серйозні виклики.",solutionTitle:"Рішення",solutionStrong:"Angelic Innovation Conveyor 'AIC':",solutionText:"Платформа, створена для накопичення та тестування інновацій на стадії Pre-seed якомога швидше. З одного боку, рішення індивідуалізоване, а з іншого - застосовується принцип конвеєра.",solutionPoint1:"Створення психологічно безпечного середовища",solutionPoint2:"Адаптовані шаблони",solutionPoint3:"Повна підтримка",solutionPoint4:"Швидкий доказ концепції",solutionPoint5:"Інноваційна фільтрація",solutionPoint6:"Швидкий та глибокий аналіз",solutionPoint7:"Вбудовування в ДНК стартапу",featuresTitle:"ПРОДУКТ ТА ФУНКЦІЇ",featuresText1:"Презентація ідеї: Інноватор представляє ідею на платформі, використовуючи адаптовані шаблони у психологічно безпечному середовищі.",featuresText2:"Блискавична валідація інновацій: Після підписання NDA та адаптивної презентації, інновація проходить швидку валідацію та фільтрацію.",featuresText3:"Повна та глибока валідація: Після валідації концепції проводиться комплексний аналіз інновації та підготовка остаточного звіту.",featuresText4:"Багаторівнева оцінка: Інформація передається до спеціалізованих відділів для комплексної оцінки",featuresText5:"Психологічна безпека + Конвеєрний підхід = 'AIC'",benefitsTitle:"ПЕРЕВАГИ для інноваторів",benefitsText1:"Психологічний комфорт: Інноватори матимуть доступ до психологічно безпечного середовища, де враховуються їхні емоційні потреби, знижується рівень стресу при презентації своїх ідей, що дозволяє їм зосередитися на інноваціях",benefitsText2:"Прискорена оптимізація процесів та ресурсів: Завдяки блискавичній валідації інновацій та вбудованим шаблонам для презентацій та відео, інноватори економлять час та ресурси, отримуючи швидкий доступ до оцінки своїх ідей та потенційних інвесторів.",benefitsText3:"Ефективна підтримка та розвиток: Інноватори можуть максимально зосередитись на своїх інноваційних рішеннях. Батьківська компанія бере на себе процедурні питання.",customerSegmentsTitle:"'AIC' СЕГМЕНТИ КЛІЄНТІВ",customerText1:"Новачки-інноватори: Люди, які вперше намагаються створити стартапи або інноваційні проекти.",customerText2:"Дослідники: Експерти науки та досліджень, зацікавлені в комерціалізації своїх досліджень.",customerText3:"Досвідчені інноватори: Люди, які мають досвід у розробці та впровадженні інноваційних проектів, шукають підтримку та нові можливості.",searchTitle:"ПОШУК інновацій у світі",differenceTitle:"ЧИМ ми відрізняємось",differenceText1:"Інноваційна концепція: Ми працюємо з найраннішою стадією ідеї. З того моменту, як вона вперше приходить на думку інноватору. Наша концепція дозволяє працювати на найранніших етапах та виявляти найінноваційніші рішення.",differenceText2:"Інноваційна концепція створення майбутніх підприємств: Ми розробляємо та завершуємо створення 'Reinventing Organizations' на основі принципу спільної участі, відповідальності та розподілу доходів між усіма співробітниками, від топ-менеджменту до передових працівників, що принципово відрізняється від існуючих компаній.",differenceText3:"Залучення інвестицій: Увага інвесторів спрямована на те, щоб не втратити інвестиції, тоді як увага засновників спрямована на те, щоб отримати життєво необхідні фінанси за будь-яку ціну. А ідея? Інновація? Вона залишається поза увагою і коригується відповідно до обставин. Рішення: створити концепцію, в якій усі сторони спокійно отримують те, що їм потрібно."},uc={header:"ЗАГОЛОВОК",order:"ПІДТРИМАТИ",home:"ГОЛОВНА",about:"ПРОБЛЕМА",project:"ПРОЕКТ",rewards:"ДОПОМОГА",contact:"КОНТАКТИ"},pc={menu:"Меню"},fc={footerAdditionalText:"Інноваційний Конвеєр",usefulLinks:"Корисні посилання",blog:"Блог",projects:"Проекти",contactUs:"Зв'язатися з нами",socialMedia:"СОЦІАЛЬНІ МЕРЕЖІ"},mc={language:"Мова"},hc={slide1Text:"Великий проект для вирішення глобальної проблеми сидячого способу життя."},gc={mainSectionTitle:"Ми розробляємо великомасштабні технології для мінімізації шкоди від сидячого способу життя.",mainSectionDescription:"Ваш опис або інший контент тут.",card1Title:"Сидячий спосіб життя призводить до хронічного болю, сколіозу та інших проблем зі здоров'ям.",card2Title:"Мета - розробити технології для мінімізації шкоди від тривалого сидіння.",card3Title:"Ми розробляємо технології, які індивідуально адаптуються до фізіологічних потреб кожного користувача та зменшують шкоду від тривалого сидіння."},vc={projectTitle:"Проблема планетарного масштабу.",goalAmount:"Як ви думаєте, скільки людей сьогодні проводять більше 4 годин на день сидячи? На роботі, вдома, за кермом, подорожуючи, у відпустці?",currentAmount:"Це проблема, що стосується мільярдів людей по всьому світу. Тривале сидіння призводить до хронічного болю, сколіозу та інших проблем зі здоров'ям. Сидячий спосіб життя негативно впливає на якість життя та продуктивність людей, що призводить до серйозних довгострокових наслідків. Ця глобальна проблема вимагає негайних дій.",numberOfInvestors:"НАШІ ІНВЕСТОРИ",amountToCollect:"НАМ ПОТРІБНО ЗІБРАТИ",orderButton:"ПІДТРИМАТИ"},xc={formTitle:"Потрібна допомога? Відкрити запит",formDescription:"Наша служба підтримки зв'яжеться з вами якнайшвидше електронною поштою.",namePlaceholder:"Ваше ім'я",emailPlaceholder:"Ваш електронний лист",messagePlaceholder:"Введіть ваше повідомлення",submitButton:"Надіслати запит",sending:"Надсилається...",error:"Помилка при відправці форми."},bc={subscribeTitle:"Підписатися на оновлення",namePlaceholder:"Ваше ім'я",emailPlaceholder:"Ваш електронний лист",subscribeButton:"Підписатися",sending:"Надсилається...",error:"Помилка при відправці форми.",noSpam:"Гарантовано без спаму, тому, будь ласка, не надсилайте спам-листи."},yc={founderName:"Максим Моренець",founderPosition:"Засновник Angel Systems",socialMedia:"СОЦІАЛЬНІ МЕРЕЖІ"},Tc={CommingSoon:" Скоро буде ",ThankYou:"Наш сайт наразі розробляється. Незабаром ми будемо готові. Дякуємо за ваше терпіння."},Cc={h2:"Технологія:",span:" 'Cura'","h2-1":"   ",p:"Розумне крісло, яке індивідуально адаптується до фізіологічних потреб кожного користувача."},Sc={h2:"Партнерство у розробці",p:"Партнери: Innosuisse, Swiss HealthTech Centre."},Pc={TitleH1:"Ми не створені для сидіння, але якщо вже це робимо, то робімо це мудро.",AdaptationH2:"Індивідуальна адаптація",AdaptationP:"Технологія пропонує унікальне рішення, яке повністю адаптується до фізіологічних особливостей кожного користувача. Використовуючи передові алгоритми аналізу даних, Cura контролює поточний стан вашого тіла і автоматично підлаштовується під ваші потреби, забезпечуючи оптимальну підтримку і комфорт.",OptimisationH2:"Оптимізація сидячого способу життя",OptimisationP:"Технологія аналізує вашу поставу і активність в реальному часі, підлаштовуючи підтримку для хребта та інших вразливих частин тіла. Це допомагає запобігти розвитку болю і дискомфорту.",InnovationH2:"Інноваційна система моніторингу",InnovationP:"Ключовою особливістю Cura є постійний моніторинг стану вашого тіла. Система збирає дані про вашу поставу, активність і загальний стан здоров'я для персоналізації підтримки. Це дозволяє системі бути підготовленою до ваших потреб до першого контакту, максимізуючи комфорт і мінімізуючи шкоду.",UniqueH3:"Унікальна технологія Cura",UniqueP:"Cura не лише адаптується до індивідуальних потреб, а й активно взаємодіє з вашим тілом, щоб допомогти йому повернутися до природного, первісного положення. Технологія включає персоналізовану адаптацію, безперервний моніторинг в реальному часі і врахування фізичних потреб, забезпечуючи комплексну підтримку та сприяючи відновленню.",LargeScaleH3:"Масштабована і універсальна технологія Cura:",LargeScaleP:"Наша технологія - це не просто розумне крісло, а універсальне рішення, яке можна інтегрувати в різноманітні середовища. Будь то вдома, в офісі, в автомобілі або літаку - Cura постійно забезпечує комфорт і підтримку, адаптуючись до ваших фізіологічних потреб.",BoltLargeScale:"Ця технологія виходить за рамки стандартних рішень і пропонує комплексний підхід до збереження здоров'я та благополуччя, застосовний у різних ситуаціях і умовах. Cura - це крок вперед у створенні середовища, яке піклується про вас скрізь і завжди.",LargeScaleBig:"Коли ми сидимо, робімо це мудро."},wc={HelpH2:"Допоможіть нам",HelpP:"Щоб довести технологію до 'готової' стадії. Нам потрібна ваша підтримка",CardTitelH3:"Дякуємо за вашу підтримку",CardTextP:"Ви чудова людина",Card2TitelH3:"Нам потрібно якомога більше інформації.",Card2TextP:"Ви чудова людина",Card3TitelH3:"Надішліть це своєму роботодавцю або розробнику вашої улюбленої гри. Він хоче подбати про вас.",CopySuccess:"Лист скопійовано 😉",CopyLink:" Скопіювати лист"},Ec={PartnersH2:"Компанії, які дбають про здоров'я своїх працівників",PartnersP:"Зовнішні партнери та корпоративні донори, які підтримують проект."},kc={TitelH2:"Новини та оновлення",NewsP:"Останні досягнення та розробки проекту.","id-1":"Ваш текст 1","id-2":"Ваш текст 2","id-3":"Ваш текст 3","id-4":"Ваш текст 4","id-5":"Ваш текст 5","id-6":"Ваш текст 6","id-7":"Ваш текст 7","id-8":"Ваш текст 8","id-9":"Ваш текст 9"},Ac={TitelH2:"Відгуки та підтримка",TextP:"Реальні відгуки користувачів та рекомендації відомих осіб та організацій.","id-1":{text:"Джон Доу, CEO Tech Innovators",hashtag:"#CURA - розумне рішення для кожного. Дякую за чудову роботу!👏"},"id-2":{text:"Джейн Сміт, Засновник Startup Hub",hashtag:"#CURA змінює наше життя. Чудова команда та продукт!🤩🤩🤩"},"id-3":{text:"Аліс Джонсон, Технічний підприємець",hashtag:"#CURA допомагає людям щодня. Браво за таку інновацію!👏🫡"},"id-4":{text:"Майкл Браун, Інвестор у Future Ventures",hashtag:"#CURA чудова! Чудова робота та потенціал!😻"},"id-5":{text:"Емілі Девіс, CEO Smart Solutions",hashtag:"#CURA - це зміна гри. Дивовижна команда!💙💛"},"id-6":{text:"Даніель Вілсон, Співзасновник NextGen Startups",hashtag:"#CURA крісла неймовірні! Дякую за якість!"},"id-7":{text:"Софія Міллер, Серійний підприємець",hashtag:"#CURA - блискуча ідея! Чудовий продукт і сервіс!😉"},"id-8":{text:"Джеймс Андерсон, Технічний інвестор",hashtag:"#CURA підвищує комфорт. Чудова інновація для всіх!"},"id-9":{text:"Лінда Мартінес, Засновник Wellness Tech",hashtag:"#CURA - чудова ідея для офісу. Дякую за вашу роботу!"}},Ic={AboutUs:dc,Header:uc,MenuButton:pc,Footer:fc,LanguageSelector:mc,Background:hc,ContentHomePage:gc,HomeComponent:vc,EmailTicket:xc,Subscribe:bc,OurContacts:yc,ErrorPage:Tc,ITgame:Cc,ITswiper:Sc,Project:Pc,HelpCards:wc,Partners:Ec,News:kc,Feedback:Ac},Rc={title:"Innovationsförderband",problemTitle:"DAS PROBLEM: Unsere Welt verliert bis zu 70 % der innovativen Ideen und Lösungen, die nicht einmal das Proof of Concept erreichen",problemText1:"Psychologische Schwierigkeiten auf verschiedenen Ebenen: Interne und externe psychologische Barrieren und Dimensionen",problemText2:"Multidisziplinäre Herausforderungen: Mangel an Fachwissen in Schlüsselbereichen wie Marketing, Recht, Finanzen. Fehlende Kompetenzen sind ein Hindernis für Innovatoren.",problemText3:"Konzeptuelle Hürden: Der lange und schwierige Weg von der Ideenfindung bis zum Proof of Concept stellt große Herausforderungen dar.",solutionTitle:"Lösung",solutionStrong:"Angelic Innovation Conveyor 'AIC':",solutionText:"Eine Plattform, die darauf ausgelegt ist, Innovationen in der Pre-Seed-Phase so schnell wie möglich zu sammeln und zu testen. Einerseits ist die Lösung individualisiert und gleichzeitig wird das Prinzip des Förderbands angewendet.",solutionPoint1:"Schaffung einer psychologisch sicheren Umgebung",solutionPoint2:"Angepasste Vorlagen",solutionPoint3:"Umfassende Unterstützung",solutionPoint4:"Schnelle Proof of Concept",solutionPoint5:"Innovative Filterung",solutionPoint6:"Schnelle und gründliche Analyse",solutionPoint7:"Verankerung in der DNA eines Startups",featuresTitle:"PRODUKT UND FUNKTIONEN",featuresText1:"Ideenpitch: Der Innovator stellt die Idee auf der Plattform unter Verwendung angepasster Vorlagen in einer psychologisch sicheren Umgebung vor.",featuresText2:"Blitzschnelle Innovationsvalidierung: Nach Unterzeichnung des NDA und der adaptiven Präsentation wird die Innovation einer schnellen Pipeline-Validierung und Filterung unterzogen.",featuresText3:"Umfassende und tiefgehende Validierung: Sobald das Konzept validiert ist, wird eine umfassende Analyse der Innovation durchgeführt und ein Abschlussbericht erstellt.",featuresText4:"Mehrstufige Bewertung: Informationen werden an spezialisierte Abteilungen zur umfassenden Bewertung weitergeleitet",featuresText5:"Psychologische Sicherheit + Förderbandansatz = 'AIC'",benefitsTitle:"VORTEILE für Innovatoren",benefitsText1:"Psychologischer Komfort: Innovatoren haben Zugang zu einer psychologisch sicheren Umgebung, in der ihre emotionalen Bedürfnisse berücksichtigt werden und der Stresspegel bei der Präsentation ihrer Ideen reduziert wird, was ihnen ermöglicht, sich auf Innovationen zu konzentrieren",benefitsText2:"Beschleunigte Optimierung von Prozessen und Ressourcen: Mit blitzschneller Innovationsvalidierung und integrierten Vorlagen für Präsentationen und Videos sparen Innovatoren Zeit und Ressourcen, indem sie schnellen Zugang zur Bewertung ihrer Ideen und potenziellen Investoren erhalten.",benefitsText3:"Effektive Unterstützung und Entwicklung: Innovatoren können sich maximal auf ihre innovativen Lösungen konzentrieren. Das Mutterunternehmen kümmert sich um prozedurale Angelegenheiten.",customerSegmentsTitle:"'AIC' KUNDENSEGMENTE",customerText1:"Anfänger-Innovatoren: Menschen, die zum ersten Mal versuchen, Startups oder innovative Projekte zu erstellen.",customerText2:"Forscher: Wissenschafts- und Forschungsexperten, die an der Kommerzialisierung ihrer Forschung interessiert sind.",customerText3:"Erfahrene Innovatoren: Menschen mit Erfahrung in der Entwicklung und Umsetzung innovativer Projekte, die nach Unterstützung und neuen Möglichkeiten suchen.",searchTitle:"SUCHEN nach Innovationen in der Welt",differenceTitle:"WAS uns unterscheidet",differenceText1:"Innovatives Konzept: Wir arbeiten mit der frühesten Phase einer Idee. Von dem Moment an, in dem sie dem Innovator zum ersten Mal in den Sinn kommt. Unser Konzept ermöglicht es uns, in den frühesten Phasen zu arbeiten und die innovativsten Lösungen zu identifizieren.",differenceText2:"Innovatives Konzept zur Schaffung zukünftiger Unternehmen: Wir entwickeln und vollenden die Schaffung von 'Reinventing Organizations' basierend auf dem Prinzip der gemeinsamen Beteiligung, Verantwortung und Einkommensteilung unter allen Mitarbeitern, vom Top-Management bis zu den Frontarbeitern, was sich grundlegend von den bestehenden Unternehmen unterscheidet.",differenceText3:"Investitionsgewinnung: Die Aufmerksamkeit der Investoren liegt darauf, keine Investitionen zu verlieren, während die Aufmerksamkeit der Gründer darauf liegt, um jeden Preis lebenswichtige Finanzen zu beschaffen. Und die Idee? Innovation? Sie bleibt unbeachtet und wird den Umständen entsprechend angepasst. Lösung: Ein Konzept schaffen, bei dem alle Parteien ruhig das erhalten, was sie brauchen."},Mc={header:"KOPFZEILE",order:"SPENDE",home:"STARTSEITE",about:"PROBLEM",project:"PROJEKT",rewards:"HILFE",contact:"KONTAKT"},jc={menu:"Menü"},Lc={footerAdditionalText:"Innovationsförderband",usefulLinks:"Nützliche Links",blog:"Blog",projects:"Projekte",contactUs:"Kontaktieren Sie uns",socialMedia:"SOZIALE MEDIEN"},zc={language:"Sprache"},$c={slide1Text:"Ein groß angelegtes Projekt zur Bewältigung des globalen Problems des sitzenden Lebensstils."},Dc={mainSectionTitle:"Wir entwickeln groß angelegte Technologien, um die Schäden eines sitzenden Lebensstils zu minimieren.",mainSectionDescription:"Deine Beschreibung oder anderer Inhalt hier.",card1Title:"Ein sitzender Lebensstil führt zu chronischen Schmerzen, Skoliose und anderen Gesundheitsproblemen.",card2Title:"Das Ziel ist es, Technologien zu entwickeln, um die Schäden durch langes Sitzen zu minimieren.",card3Title:"Wir entwickeln Technologien, die individuell auf die physiologischen Bedürfnisse jedes Benutzers abgestimmt sind und die Schäden durch langes Sitzen reduzieren."},Oc={projectTitle:"Ein Problem von planetarischem Ausmaß.",goalAmount:"Wie viele Menschen glauben Sie, verbringen heute mehr als 4 Stunden am Tag im Sitzen? Bei der Arbeit, zu Hause, beim Autofahren, Reisen, im Urlaub?",currentAmount:"Dies ist ein Problem, das Milliarden von Menschen auf der ganzen Welt betrifft. Langes Sitzen führt zu chronischen Schmerzen, Skoliose und anderen gesundheitlichen Problemen. Ein sitzender Lebensstil hat negative Auswirkungen auf die Lebensqualität und Produktivität der Menschen und verursacht schwerwiegende langfristige Folgen. Dieses globale Problem erfordert sofortige Maßnahmen.",numberOfInvestors:"UNSERE INVESTOREN",amountToCollect:"WIR MÜSSEN SAMMELN",orderButton:"SPENDE"},Nc={formTitle:"Brauchen Sie Hilfe? Ein Ticket eröffnen",formDescription:"Unser Support-Team wird sich so schnell wie möglich per E-Mail bei Ihnen melden.",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Gib Deine Nachricht ein",submitButton:"Ticket senden",sending:"Wird gesendet...",error:"Fehler beim Absenden des Formulars."},Hc={subscribeTitle:"Abonnieren, um zukünftige Updates zu erhalten",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",subscribeButton:"Abonnieren",sending:"Wird gesendet...",error:"Fehler beim Absenden des Formulars.",noSpam:"Kein Spam garantiert, also bitte keine Spam-Mails senden."},Bc={founderName:"Maksym Morenets",founderPosition:"Gründer von Angel Systems",socialMedia:"SOZIALE MEDIEN"},Uc={CommingSoon:" Kommt bald ",ThankYou:"Unsere Website ist derzeit in der Entwicklung. Wir sollten bald fertig sein. Vielen Dank für Ihre Geduld."},Fc={h2:"Die:",span:" 'Cura'","h2-1":"   Technologie",p:"Ein intelligenter Stuhl, der sich individuell an die physiologischen Bedürfnisse jedes Benutzers anpasst."},Vc={h2:"Partnerschaft in der Entwicklung",p:"Partner: Innosuisse, Swiss HealthTech Centre."},Wc={TitleH1:"Wir sind nicht zum Sitzen gemacht, aber wenn wir es tun, machen wir es weise.",AdaptationH2:"Individuelle Anpassung",AdaptationP:"Die Technologie bietet eine einzigartige Lösung, die sich vollständig an die physiologischen Merkmale jedes Benutzers anpasst. Mithilfe fortschrittlicher Datenanalysealgorithmen überwacht Cura den aktuellen Zustand Ihres Körpers und passt sich automatisch Ihren Bedürfnissen an, um optimalen Halt und Komfort zu bieten.",OptimisationH2:"Optimierung eines sitzenden Lebensstils",OptimisationP:"Die Technologie analysiert Ihre Haltung und Aktivität in Echtzeit und passt die Unterstützung für Ihre Wirbelsäule und andere gefährdete Körperteile an. Dies hilft, die Entwicklung von Schmerzen und Unbehagen zu verhindern.",InnovationH2:"Innovatives Überwachungssystem",InnovationP:"Ein Hauptmerkmal von Cura ist die kontinuierliche Überwachung des Zustands Ihres Körpers. Das System sammelt Daten über Ihre Haltung, Aktivität und allgemeine Gesundheit, um die Unterstützung zu personalisieren. Dadurch ist das System auf Ihre Bedürfnisse vorbereitet, bevor der erste Kontakt erfolgt, was den Komfort maximiert und Schäden minimiert.",UniqueH3:"Einzigartige Cura-Technologie",UniqueP:"Cura passt sich nicht nur an individuelle Bedürfnisse an, sondern interagiert aktiv mit Ihrem Körper, um ihm zu helfen, in seine natürliche, ursprüngliche Position zurückzukehren. Die Technologie umfasst eine personalisierte Anpassung, kontinuierliche Echtzeitüberwachung und Berücksichtigung der physischen Bedürfnisse, bietet umfassende Unterstützung und hilft bei der Genesung.",LargeScaleH3:"Skalierbare und vielseitige Cura-Technologie:",LargeScaleP:"Unsere Technologie ist nicht nur ein intelligenter Stuhl, sondern eine vielseitige Lösung, die in eine Vielzahl von Umgebungen integriert werden kann. Ob zu Hause, im Büro, im Auto oder im Flugzeug - Cura bietet ständig Komfort und Unterstützung, angepasst an Ihre physiologischen Bedürfnisse.",BoltLargeScale:"Diese Technologie geht über Standardlösungen hinaus und bietet einen umfassenden Ansatz zur Erhaltung der Gesundheit und des Wohlbefindens, der in einer Vielzahl von Situationen und Bedingungen anwendbar ist. Cura ist ein Schritt nach vorn bei der Schaffung einer Umgebung, die überall und jederzeit für Sie sorgt.",LargeScaleBig:"Wenn wir sitzen, machen wir es weise."},qc={HelpH2:"Hilf uns",HelpP:"Um die Technologie zur 'fertigen' Stufe zu bringen. Wir brauchen Ihre Unterstützung",CardTitelH3:"Vielen Dank für Ihre Unterstützung",CardTextP:"Du bist ein großartiger Mensch",Card2TitelH3:"Wir brauchen so viele Informationen wie möglich.",Card2TextP:"Du bist ein großartiger Mensch",Card3TitelH3:"Senden Sie dies an Ihren Arbeitgeber oder den Entwickler Ihres Lieblingsspiels. Er möchte sich um Sie kümmern.",CopySuccess:"Der Brief wurde kopiert 😉",CopyLink:" Brief kopieren"},_c={PartnersH2:"Unternehmen, die sich um die Gesundheit ihrer Mitarbeiter kümmern",PartnersP:"Externe Partner und Unternehmensspender unterstützen das Projekt."},Gc={TitelH2:"Nachrichten & Updates",NewsP:"Aktuelle Errungenschaften und Entwicklungen des Projekts.","id-1":"Ihr Text 1","id-2":"Ihr Text 2","id-3":"Ihr Text 3","id-4":"Ihr Text 4","id-5":"Ihr Text 5","id-6":"Ihr Text 6","id-7":"Ihr Text 7","id-8":"Ihr Text 8","id-9":"Ihr Text 9"},Yc={TitelH2:"Feedback & Unterstützung",TextP:"Echte Rückmeldungen von Benutzern und Empfehlungen von bekannten Personen und Organisationen.","id-1":{text:"John Doe, CEO von Tech Innovators",hashtag:"#CURA ist eine intelligente Lösung für alle. Danke für diese großartige Arbeit!👏"},"id-2":{text:"Jane Smith, Gründerin von Startup Hub",hashtag:"#CURA verändert unser Leben. Super Team und Produkt!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Tech-Unternehmerin",hashtag:"#CURA hilft den Menschen jeden Tag. Bravo für diese Innovation!👏🫡"},"id-4":{text:"Michael Brown, Investor bei Future Ventures",hashtag:"#CURA ist großartig! Ausgezeichnete Arbeit und Potenzial!😻"},"id-5":{text:"Emily Davis, CEO von Smart Solutions",hashtag:"#CURA ist ein Game Changer. Unglaubliches Team!💙💛"},"id-6":{text:"Daniel Wilson, Mitbegründer von NextGen Startups",hashtag:"#CURA-Stühle sind unglaublich! Danke für die Qualität!"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA ist eine brillante Idee! Tolles Produkt und Service!😉"},"id-8":{text:"James Anderson, Tech-Investor",hashtag:"#CURA verbessert den Komfort. Große Innovation für alle!"},"id-9":{text:"Linda Martinez, Gründerin von Wellness Tech",hashtag:"#CURA ist eine großartige Idee fürs Büro. Danke für Ihre Arbeit!"}},Kc={AboutUs:Rc,Header:Mc,MenuButton:jc,Footer:Lc,LanguageSelector:zc,Background:$c,ContentHomePage:Dc,HomeComponent:Oc,EmailTicket:Nc,Subscribe:Hc,OurContacts:Bc,ErrorPage:Uc,ITgame:Fc,ITswiper:Vc,Project:Wc,HelpCards:qc,Partners:_c,News:Gc,Feedback:Yc},Xc={title:"Innovación Conveyor",problemTitle:"EL PROBLEMA: Nuestro mundo pierde hasta el 70% de ideas y soluciones innovadoras que ni siquiera sobreviven a la prueba de concepto",problemText1:"Dificultades psicológicas en diferentes niveles: Barreras y dimensiones psicológicas internas y externas",problemText2:"Desafíos multidisciplinarios: Falta de experiencia en áreas clave, marketing, legal, finanzas. La falta de competencias es una barrera para los innovadores.",problemText3:"Embrollo conceptual: El largo y difícil camino desde la concepción de la idea hasta la prueba de concepto, creando serios desafíos.",solutionTitle:"Solución",solutionStrong:"Conveyor de Innovación Angélica 'AIC':",solutionText:"Una plataforma diseñada para acumular y probar innovaciones en la etapa Pre-semilla lo más rápido posible. Por un lado, la solución está individualizada y al mismo tiempo se aplica el principio de la cinta transportadora.",solutionPoint1:"Creación de un entorno psicológicamente seguro",solutionPoint2:"Plantillas adaptadas",solutionPoint3:"Soporte completo",solutionPoint4:"Prueba de concepto rápida",solutionPoint5:"Filtrado innovador",solutionPoint6:"Análisis rápido y profundo",solutionPoint7:"Incorporación en el ADN de una startup",featuresTitle:"PRODUCTO Y CARACTERÍSTICAS",featuresText1:"Presentación de la idea: El innovador presenta la idea en la plataforma utilizando plantillas personalizadas en un entorno psicológicamente seguro.",featuresText2:"Validación de innovación ultrarrápida: Después de firmar el NDA y la presentación adaptativa, la innovación se somete a una validación y filtrado rápidos en la línea de producción.",featuresText3:"Validación completa y profunda: Una vez validado el concepto, se lleva a cabo un análisis exhaustivo de la innovación y se prepara un informe final.",featuresText4:"Evaluación multinivel: La información se envía a departamentos especializados para una evaluación integral",featuresText5:"Seguridad psicológica + Enfoque en cinta transportadora = 'AIC'",benefitsTitle:"BENEFICIOS para innovadores",benefitsText1:"Comodidad psicológica: Los innovadores tendrán acceso a un entorno psicológicamente seguro donde se tendrán en cuenta sus necesidades emocionales y se reducirán los niveles de estrés al presentar sus ideas, permitiéndoles centrarse en la innovación",benefitsText2:"Optimización acelerada de procesos y recursos: Con la validación ultrarrápida de la innovación y las plantillas integradas para presentaciones y videos, los innovadores ahorran tiempo y recursos al obtener un acceso rápido para evaluar sus ideas y posibles inversores.",benefitsText3:"Soporte y desarrollo efectivos: Los innovadores pueden concentrarse al máximo en sus soluciones innovadoras. La empresa matriz se encargará de los asuntos procedimentales.",customerSegmentsTitle:"SEGMENTOS DE CLIENTES 'AIC'",customerText1:"Innovadores principiantes: Personas que intentan por primera vez crear startups o proyectos innovadores.",customerText2:"Investigadores: Profesionales de la ciencia y la investigación interesados en comercializar su investigación.",customerText3:"Innovadores experimentados: Personas con experiencia en el desarrollo e implementación de proyectos innovadores, que buscan apoyo y nuevas oportunidades.",searchTitle:"BÚSQUEDA de innovaciones en el mundo",differenceTitle:"LO QUE nos diferencia",differenceText1:"Concepto innovador: Trabajamos con la etapa más temprana de una idea. Desde el momento en que apareció por primera vez para el innovador. Nuestro concepto nos permite trabajar en las etapas más tempranas e identificar las soluciones más innovadoras.",differenceText2:"Concepto innovador para crear empresas futuras: Desarrollamos y completamos la creación de 'Organizaciones Reinventadas' basadas en el principio de compartir participación, responsabilidad e ingresos entre todos los empleados, desde la alta dirección hasta los trabajadores de primera línea, y esto es fundamentalmente diferente de las existentes.",differenceText3:"Atracción de inversiones: La atención de los inversores se centra en no perder inversiones, mientras que la atención de los fundadores se centra en atraer financiamiento vital a cualquier costo. ¿Y la idea? ¿La innovación? Queda desatendida y se transforma según las circunstancias. Solución: Crear un concepto donde todas las partes reciban tranquilamente lo que necesitan."},Qc={header:"ENCABEZADO",order:"DONAR",home:"INICIO",about:"PROBLEMA",project:"PROYECTO",rewards:"AYUDA",contact:"CONTACTO"},Jc={menu:"Menú"},Zc={footerAdditionalText:"Innovación Conveyor",usefulLinks:"Enlaces útiles",blog:"Blog",projects:"Proyectos",contactUs:"Contáctenos",socialMedia:"REDES SOCIALES"},ed={language:"Idioma"},td={slide1Text:"Un proyecto a gran escala para abordar el problema global del estilo de vida sedentario."},nd={mainSectionTitle:"Estamos desarrollando tecnología a gran escala para minimizar los daños de un estilo de vida sedentario.",mainSectionDescription:"Tu descripción u otro contenido aquí.",card1Title:"Un estilo de vida sedentario conduce a dolor crónico, escoliosis y otros problemas de salud.",card2Title:"El objetivo es desarrollar tecnología para minimizar el daño de estar sentado por períodos prolongados.",card3Title:"Desarrollamos tecnología que se adapta individualmente a las necesidades fisiológicas de cada usuario, reduciendo el daño de estar sentado por períodos prolongados."},od={projectTitle:"Un problema de proporciones planetarias.",goalAmount:"¿Cuántas personas crees que hoy en día pasan más de 4 horas al día sentadas? ¿En el trabajo, en casa, conduciendo, viajando, de vacaciones?",currentAmount:"Este es un problema que afecta a miles de millones de personas en todo el mundo. Estar sentado por períodos prolongados lleva a dolor crónico, escoliosis y otros problemas de salud. Los estilos de vida sedentarios tienen un impacto negativo en la calidad de vida y productividad de las personas, causando graves consecuencias a largo plazo. Este problema global requiere una acción inmediata.",numberOfInvestors:"NUESTROS INVERSORES",amountToCollect:"TENEMOS QUE RECOLECTAR",orderButton:"DONAR"},id={formTitle:"¿Necesitas ayuda? Abre un Ticket",formDescription:"Nuestro equipo de soporte te responderá lo antes posible por correo electrónico.",namePlaceholder:"Tu nombre",emailPlaceholder:"Tu correo electrónico",messagePlaceholder:"Ingresa tu mensaje",submitButton:"Enviar Ticket",sending:"Enviando...",error:"Ocurrió un error al enviar el formulario."},rd={subscribeTitle:"Suscríbete para recibir futuras actualizaciones",namePlaceholder:"Tu nombre",emailPlaceholder:"Tu correo electrónico",subscribeButton:"Suscribirse",sending:"Enviando...",error:"Ocurrió un error al enviar el formulario.",noSpam:"Garantizado sin spam, así que no envíes correos electrónicos no deseados."},ad={founderName:"Maksym Morenets",founderPosition:"Fundador de Angel Systems",socialMedia:"REDES SOCIALES"},sd={CommingSoon:" Próximamente ",ThankYou:"Nuestro sitio web está actualmente en desarrollo. Deberíamos terminar pronto. Gracias por tu paciencia."},ld={h2:"La:",span:" 'Cura'","h2-1":"   tecnología",p:"Una silla inteligente que se adapta individualmente a las necesidades fisiológicas de cada usuario."},cd={h2:"Colaboración en el desarrollo ",p:"Socios: Innosuisse, Swiss HealthTech Centre."},dd={TitleH1:"No estamos hechos para sentarnos, pero si lo hacemos, hagámoslo sabiamente.",AdaptationH2:"Adaptación individual",AdaptationP:"La tecnología ofrece una solución única que se adapta completamente a las características fisiológicas de cada usuario. Utilizando algoritmos avanzados de análisis de datos, Cura monitorea el estado actual de tu cuerpo y se adapta automáticamente a tus necesidades, brindando soporte y comodidad óptimos.",OptimisationH2:"Optimización de un estilo de vida sedentario",OptimisationP:"La tecnología analiza tu postura y actividad en tiempo real, ajustando el soporte para tu columna vertebral y otras partes vulnerables del cuerpo. Esto ayuda a prevenir el desarrollo de dolor y molestias.",InnovationH2:"Sistema de monitoreo innovador",InnovationP:"Una característica clave de Cura es la monitorización constante de la condición de tu cuerpo. El sistema recopila datos sobre tu postura, actividad y salud general para personalizar el soporte. Esto permite que el sistema esté preparado para tus necesidades antes del primer contacto, maximizando la comodidad y minimizando el daño.",UniqueH3:"Tecnología única de Cura ",UniqueP:"Cura no solo se adapta a las necesidades individuales, sino que interactúa activamente con tu cuerpo para ayudarlo a volver a su posición natural. La tecnología incorpora adaptación personalizada, monitoreo continuo en tiempo real y consideración de las necesidades físicas, brindando soporte integral y asistencia en la recuperación.",LargeScaleH3:"Tecnología escalable y versátil de Cura:",LargeScaleP:"Nuestra tecnología no es solo una silla inteligente, sino una solución versátil que puede integrarse en una amplia variedad de entornos. Ya sea que estés en casa, en la oficina, en el coche o en un avión, Cura proporciona comodidad y soporte constantes, adaptándose a tus necesidades fisiológicas.",BoltLargeScale:"Esta tecnología va más allá de las soluciones estándar, ofreciendo un enfoque integral para mantener la salud y el bienestar que puede aplicarse a una amplia variedad de situaciones y condiciones. Cura es un paso adelante en la creación de un entorno que cuida de ti en cualquier lugar, en cualquier momento.",LargeScaleBig:"Si vamos a sentarnos, hagámoslo sabiamente."},ud={HelpH2:"Ayúdanos",HelpP:"Para llevar la tecnología a la etapa de 'lista'. Necesitamos tu apoyo",CardTitelH3:"Gracias por apoyarnos ",CardTextP:"Eres una gran persona",Card2TitelH3:"Necesitamos tanta información como sea posible.",Card2TextP:"Eres una gran persona",Card3TitelH3:"Envía esto a tu empleador o al desarrollador de tu juego favorito. Quiere cuidarte.",CopySuccess:"La carta fue copiada 😉",CopyLink:" Copiar carta"},pd={PartnersH2:"Empresas que se preocupan por la salud de sus empleados",PartnersP:"Socios externos y patrocinadores corporativos apoyan el proyecto."},fd={TitelH2:"Noticias y Actualizaciones",NewsP:"Logros y desarrollos recientes del proyecto.","id-1":"Tu texto 1","id-2":"Tu texto 2","id-3":"Tu texto 3","id-4":"Tu texto 4","id-5":"Tu texto 5","id-6":"Tu texto 6","id-7":"Tu texto 7","id-8":"Tu texto 8","id-9":"Tu texto 9"},md={TitelH2:"Comentarios y Apoyo",TextP:"Comentarios reales de usuarios y recomendaciones de personas y organizaciones conocidas.","id-1":{text:"John Doe, CEO de Tech Innovators",hashtag:"#CURA es una solución inteligente para todos. ¡Gracias por este gran trabajo!👏"},"id-2":{text:"Jane Smith, Fundadora de Startup Hub",hashtag:"#CURA está cambiando nuestras vidas. ¡Gran equipo y producto!🤩🤩🤩"},"id-3":{text:"Alice Johnson, Emprendedora tecnológica",hashtag:"#CURA ayuda a las personas todos los días. ¡Bravo por esta innovación!👏🫡"},"id-4":{text:"Michael Brown, Inversor en Future Ventures",hashtag:"#CURA es increíble. ¡Excelente trabajo y potencial!😻"},"id-5":{text:"Emily Davis, CEO de Smart Solutions",hashtag:"#CURA es un cambio radical. ¡Equipo increíble!💙💛"},"id-6":{text:"Daniel Wilson, Cofundador de NextGen Startups",hashtag:"#Sillas CURA son asombrosas. ¡Gracias por la calidad!"},"id-7":{text:"Sophia Miller, Emprendedora en serie",hashtag:"#CURA es una idea brillante. ¡Gran producto y servicio!😉"},"id-8":{text:"James Anderson, Inversor en tecnología",hashtag:"#CURA mejora la comodidad. ¡Gran innovación para todos!"},"id-9":{text:"Linda Martinez, Fundadora de Wellness Tech",hashtag:"#CURA es una gran idea para oficinas. ¡Gracias por su trabajo!"}},hd={AboutUs:Xc,Header:Qc,MenuButton:Jc,Footer:Zc,LanguageSelector:ed,Background:td,ContentHomePage:nd,HomeComponent:od,EmailTicket:id,Subscribe:rd,OurContacts:ad,ErrorPage:sd,ITgame:ld,ITswiper:cd,Project:dd,HelpCards:ud,Partners:pd,News:fd,Feedback:md},gd={title:"Convoyeur d'Innovation",problemTitle:"LE PROBLÈME : Notre monde perd jusqu'à 70% des idées et solutions innovantes qui ne survivent même pas à la preuve de concept",problemText1:"Difficultés psychologiques à différents niveaux : Barrières et dimensions psychologiques internes et externes",problemText2:"Défis multidisciplinaires : Manque d'expertise dans des domaines clés, marketing, juridique, finance. Le manque de compétences est un obstacle pour les innovateurs.",problemText3:"Embouteillage conceptuel : Le long et difficile parcours de l'émergence de l'idée à la preuve de concept, créant de sérieux défis.",solutionTitle:"Solution",solutionStrong:"Convoyeur d'Innovation Angélique 'CIA' :",solutionText:"Une plateforme conçue pour accumuler et tester les innovations au stade Pré-amorçage aussi rapidement que possible. D'une part, la solution est individualisée et en même temps, le principe de la chaîne de production est appliqué.",solutionPoint1:"Créer un environnement psychologiquement sûr",solutionPoint2:"Modèles adaptés",solutionPoint3:"Support complet",solutionPoint4:"Preuve de concept rapide",solutionPoint5:"Filtrage innovant",solutionPoint6:"Analyse rapide et approfondie",solutionPoint7:"Intégration dans l'ADN d'une startup",featuresTitle:"PRODUIT ET FONCTIONNALITÉS",featuresText1:"Présentation de l'idée : L'innovateur présente l'idée sur la plateforme en utilisant des modèles personnalisés dans un environnement psychologiquement sûr.",featuresText2:"Validation éclair de l'innovation : Après la signature de l'NDA et la présentation adaptative, l'innovation est soumise à une validation et un filtrage rapides.",featuresText3:"Validation complète et approfondie : Une fois le concept validé, une analyse complète de l'innovation est effectuée et un rapport final est préparé.",featuresText4:"Évaluation à plusieurs niveaux : Les informations sont envoyées aux départements spécialisés pour une évaluation complète",featuresText5:"Sécurité psychologique + Approche par convoyeur = 'CIA'",benefitsTitle:"AVANTAGES pour les innovateurs",benefitsText1:"Confort psychologique : Les innovateurs auront accès à un environnement psychologiquement sûr où leurs besoins émotionnels sont pris en compte et où les niveaux de stress sont réduits lorsqu'ils présentent leurs idées, leur permettant de se concentrer sur l'innovation",benefitsText2:"Optimisation accélérée des processus et des ressources : Avec la validation éclair de l'innovation et les modèles intégrés pour les présentations et les vidéos, les innovateurs gagnent du temps et des ressources en obtenant un accès rapide pour évaluer leurs idées et des investisseurs potentiels.",benefitsText3:"Soutien et développement efficaces : Les innovateurs peuvent se concentrer autant que possible sur leurs solutions innovantes. La société mère s'occupe des questions procédurales.",customerSegmentsTitle:"'CIA' SEGMENTS DE CLIENTS",customerText1:"Innovateurs débutants : Les personnes qui tentent de créer des startups ou des projets innovants pour la première fois.",customerText2:"Chercheurs : Professionnels de la science et de la recherche intéressés par la commercialisation de leurs recherches.",customerText3:"Innovateurs expérimentés : Les personnes ayant de l'expérience dans le développement et la mise en œuvre de projets innovants, à la recherche de soutien et de nouvelles opportunités.",searchTitle:"RECHERCHE d'innovations dans le monde",differenceTitle:"CE qui nous distingue",differenceText1:"Concept innovant : Nous travaillons avec la toute première phase d'une idée. Dès qu'elle apparaît pour la première fois à l'innovateur. Notre concept permet de travailler dès les premières étapes et d'identifier les solutions les plus innovantes.",differenceText2:"Concept innovant de création d'entreprises futures : Nous développons et achevons la création d'organisations réinventées basées sur le principe de partage de la participation, de la responsabilité et des revenus entre tous les employés, de la direction aux travailleurs de première ligne, ce qui est fondamentalement différent des entreprises existantes.",differenceText3:"Attraction des investissements : L'attention des investisseurs est focalisée sur la question de ne pas perdre d'investissements, tandis que l'attention des fondateurs est sur l'attraction de financements vitaux à tout prix. Et l'idée? L'innovation? Elle reste négligée et est transformée en fonction des circonstances. Solution : Créer un concept où toutes les parties reçoivent calmement ce dont elles ont besoin."},vd={header:"EN-TÊTE",order:"DONNER",home:"ACCUEIL",about:"PROBLÈME",project:"PROJET",rewards:"AIDE",contact:"CONTACT"},xd={menu:"Menu"},bd={footerAdditionalText:"Convoyeur d'Innovation",usefulLinks:"Liens Utiles",blog:"Blog",projects:"Projets",contactUs:"Contactez-nous",socialMedia:"RÉSEAUX SOCIAUX"},yd={language:"Langue"},Td={slide1Text:"Un projet d'envergure pour résoudre le problème mondial du mode de vie sédentaire."},Cd={mainSectionTitle:"Nous développons une technologie à grande échelle pour minimiser les effets néfastes du mode de vie sédentaire.",mainSectionDescription:"Votre description ou autre contenu ici.",card1Title:"Un mode de vie sédentaire entraîne des douleurs chroniques, une scoliose et d'autres problèmes de santé.",card2Title:"L'objectif est de développer une technologie pour minimiser les effets néfastes de la position assise prolongée.",card3Title:"Nous développons une technologie qui s'adapte individuellement aux besoins physiologiques de chaque utilisateur, réduisant ainsi les effets néfastes de la position assise prolongée."},Sd={projectTitle:"Un problème de proportions planétaires.",goalAmount:"À votre avis, combien de personnes aujourd'hui passent plus de 4 heures par jour assises ? Au travail, à la maison, en conduisant, en voyage, en vacances ?",currentAmount:"C'est un problème qui touche des milliards de personnes dans le monde entier. La position assise prolongée entraîne des douleurs chroniques, une scoliose et d'autres problèmes de santé. Les modes de vie sédentaires ont un impact négatif sur la qualité de vie et la productivité des personnes, provoquant de graves conséquences à long terme. Ce problème mondial nécessite une action immédiate.",numberOfInvestors:"NOS INVESTISSEURS",amountToCollect:"NOUS DEVONS COLLECTER",orderButton:"DONNER"},Pd={formTitle:"Besoin d'aide ? Ouvrir un ticket",formDescription:"Notre équipe de support vous répondra dès que possible par email.",namePlaceholder:"Votre nom",emailPlaceholder:"Votre email",messagePlaceholder:"Entrez votre message",submitButton:"Soumettre un ticket",sending:"Envoi...",error:"Une erreur s'est produite lors de la soumission du formulaire."},wd={subscribeTitle:"Abonnez-vous pour recevoir les futures mises à jour",namePlaceholder:"Votre nom",emailPlaceholder:"Votre email",subscribeButton:"S'abonner",sending:"Envoi...",error:"Une erreur s'est produite lors de la soumission du formulaire.",noSpam:"Garantie sans spam, alors ne nous envoyez pas de spam."},Ed={founderName:"Maksym Morenets",founderPosition:"Fondateur de Angel Systems",socialMedia:"RÉSEAUX SOCIAUX"},kd={CommingSoon:" Bientôt disponible ",ThankYou:"Notre site est actuellement en cours de développement. Nous devrions avoir terminé bientôt. Merci pour votre patience."},Ad={h2:"La technologie:",span:" 'Cura'","h2-1":" ",p:"Une chaise intelligente qui s'adapte individuellement aux besoins physiologiques de chaque utilisateur."},Id={h2:"Partenariat en développement",p:"Partenaires : Innosuisse, Swiss HealthTech Centre."},Rd={TitleH1:"Nous ne sommes pas faits pour rester assis, mais si nous le faisons, faisons-le intelligemment.",AdaptationH2:"Adaptation individuelle",AdaptationP:"La technologie offre une solution unique qui s'adapte pleinement aux caractéristiques physiologiques de chaque utilisateur. Grâce à des algorithmes avancés d'analyse de données, Cura surveille l'état actuel de votre corps et s'adapte automatiquement à vos besoins, offrant un soutien et un confort optimaux.",OptimisationH2:"Optimisation d'un mode de vie sédentaire",OptimisationP:"La technologie analyse en temps réel votre posture et votre activité, ajustant le soutien pour votre colonne vertébrale et d'autres parties vulnérables du corps. Cela aide à prévenir le développement de douleurs et d'inconforts.",InnovationH2:"Système de surveillance innovant",InnovationP:"Une caractéristique clé de Cura est la surveillance continue de l'état de votre corps. Le système collecte des données sur votre posture, votre activité et votre santé générale pour personnaliser le soutien. Cela permet au système d'être prêt à répondre à vos besoins avant même le premier contact, maximisant ainsi le confort et minimisant les effets néfastes.",UniqueH3:"Technologie unique de Cura",UniqueP:"Cura ne s'adapte pas seulement aux besoins individuels, elle interagit activement avec votre corps pour l'aider à retrouver sa position naturelle. La technologie intègre une adaptation personnalisée, une surveillance continue en temps réel et la prise en compte des besoins physiques, offrant un soutien complet et favorisant la récupération.",LargeScaleH3:"Technologie évolutive et polyvalente de Cura :",LargeScaleP:"Notre technologie n'est pas seulement une chaise intelligente, mais une solution polyvalente qui peut être intégrée dans divers environnements. Que vous soyez à la maison, au bureau, en voiture ou en avion, Cura offre un confort et un soutien constants, en s'adaptant à vos besoins physiologiques.",BoltLargeScale:"Cette technologie dépasse les solutions standard, offrant une approche globale pour maintenir la santé et le bien-être, applicable dans diverses situations et conditions. Cura est une avancée dans la création d'un environnement qui prend soin de vous partout, à tout moment.",LargeScaleBig:"Si nous devons rester assis, faisons-le intelligemment."},Md={HelpH2:"Aidez-nous",HelpP:"Pour amener la technologie au stade 'prêt'. Nous avons besoin de votre soutien.",CardTitelH3:"Merci pour votre soutien",CardTextP:"Vous êtes une personne formidable",Card2TitelH3:"Nous avons besoin d'autant d'informations que possible.",Card2TextP:"Vous êtes une personne formidable",Card3TitelH3:"Envoyez cela à votre employeur ou au développeur de votre jeu préféré. Il veut prendre soin de vous.",CopySuccess:"La lettre a été copiée 😉",CopyLink:" Copier la lettre"},jd={PartnersH2:"Entreprises qui se soucient de la santé de leurs employés",PartnersP:"Partenaires externes et donateurs corporatifs soutenant le projet."},Ld={TitelH2:"Actualités & Mises à jour",NewsP:"Réalisations récentes et développements du projet.","id-1":"Votre texte 1","id-2":"Votre texte 2","id-3":"Votre texte 3","id-4":"Votre texte 4","id-5":"Votre texte 5","id-6":"Votre texte 6","id-7":"Votre texte 7","id-8":"Votre texte 8","id-9":"Votre texte 9"},zd={TitelH2:"Retour d'information & soutien",TextP:"Avis réels des utilisateurs et endorsements de personnes et organisations bien connues.","id-1":{text:"John Doe, PDG de Tech Innovators",hashtag:"#CURA est une solution intelligente pour tout le monde. Merci pour ce grand travail !👏"},"id-2":{text:"Jane Smith, Fondatrice de Startup Hub",hashtag:"#CURA change nos vies. Super équipe et produit !🤩🤩🤩"},"id-3":{text:"Alice Johnson, Entrepreneuse Tech",hashtag:"#CURA aide les gens chaque jour. Bravo pour cette innovation !👏🫡"},"id-4":{text:"Michael Brown, Investisseur chez Future Ventures",hashtag:"#CURA est génial ! Excellent travail et potentiel !😻"},"id-5":{text:"Emily Davis, PDG de Smart Solutions",hashtag:"#CURA est un changeur de jeu. Équipe incroyable !💙💛"},"id-6":{text:"Daniel Wilson, Co-Fondateur de NextGen Startups",hashtag:"#CURA chaises sont incroyables ! Merci pour la qualité !"},"id-7":{text:"Sophia Miller, Serial Entrepreneur",hashtag:"#CURA est une idée brillante ! Excellent produit et service !😉"},"id-8":{text:"James Anderson, Investisseur Tech",hashtag:"#CURA améliore le confort. Grande innovation pour tous !"},"id-9":{text:"Linda Martinez, Fondatrice de Wellness Tech",hashtag:"#CURA est une excellente idée pour le bureau. Merci pour votre travail !"}},$d={AboutUs:gd,Header:vd,MenuButton:xd,Footer:bd,LanguageSelector:yd,Background:Td,ContentHomePage:Cd,HomeComponent:Sd,EmailTicket:Pd,Subscribe:wd,OurContacts:Ed,ErrorPage:kd,ITgame:Ad,ITswiper:Id,Project:Rd,HelpCards:Md,Partners:jd,News:Ld,Feedback:zd},Dd={en:{translation:cc},ua:{translation:Ic},de:{translation:Kc},es:{translation:hd},fr:{translation:$d}};Kt.use(wo).use(Yo).init({resources:Dd,fallbackLng:"en",interpolation:{escapeValue:!1}});const Od=[{value:"en",label:"English"},{value:"de",label:"Deutsch"},{value:"ua",label:"Українська"},{value:"es",label:"Español"},{value:"fr",label:"Français"}],Nd=48,Hd=W(qs)`
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
`,gn=()=>{const[e,t]=ye.useState(null),n=!!e,o=Kt.language,i=l=>{t(l.currentTarget)},r=()=>{t(null)},a=l=>{Kt.changeLanguage(l),r()};return s.jsxs("div",{style:{marginRight:"1%"},"data-aos":"fade-up",children:[s.jsx(Hd,{"aria-label":"language",id:"language-menu-button","aria-controls":n?"language-menu":void 0,"aria-expanded":n?"true":void 0,"aria-haspopup":"true",onClick:i,children:s.jsx(Po,{style:{fill:"white"}})}),s.jsx(xl,{id:"language-menu",anchorEl:e,open:n,onClose:r,PaperProps:{style:{maxHeight:Nd*4.5,width:"20ch"}},children:Od.map(({value:l,label:c})=>s.jsx(kl,{selected:l===o,onClick:()=>a(l),children:c},l))})]})},Bd=()=>{const{t:e}=We(),[t,n]=d.useState({top:!1}),o=(a,l)=>c=>{c&&c.type==="keydown"&&(c.key==="Tab"||c.key==="Shift")||n({...t,[a]:l})},i=[{to:"/home",text:e("Header.home"),icon:s.jsx(vo,{})},{to:"/project",text:e("Header.project"),icon:s.jsx(xo,{})},{to:"/contact",text:e("Header.contact"),icon:s.jsx(bo,{})},{to:"#",text:e(""),icon:s.jsx(gn,{})}],r=a=>s.jsxs(Bi,{sx:{bgcolor:"#000"},onClick:o(a,!1),onKeyDown:o(a,!1),children:[s.jsx(mo,{children:i.map(l=>s.jsx(Ts,{disablePadding:!0,children:s.jsxs(ls,{style:{color:"#00baff",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[s.jsx(As,{style:{color:"#00baff"},children:l.icon}),s.jsx(Ce,{to:l.to,"data-translate":l.text,children:l.text})]})},l.to))}),s.jsx(Ja,{})]});return s.jsx("div",{children:["top"].map(a=>s.jsxs(d.Fragment,{children:[s.jsx(Ha,{onClick:o(a,!0),"data-aos":"zoom-in",style:{fontSize:20,padding:0},children:e("MenuButton.menu")}),s.jsx(la,{anchor:a,open:t[a],onClose:o(a,!1),onOpen:o(a,!0),children:r(a)})]},a))})},Ud=()=>{const{t:e}=We(),t=Xt({query:"(max-width: 882px)"}),n=Ko();d.useEffect(()=>{Xn.init({duration:1e3})},[]);const o=n.pathname==="/contact",i=n.pathname==="/project";return s.jsx(Si,{style:{position:"fixed",top:0},children:s.jsxs(Pi,{children:[s.jsx(wi,{"data-aos":"zoom-in",children:s.jsx(Ce,{to:"/home",children:s.jsx(oo,{src:io,alt:"Logo"})})}),t?s.jsx(Bd,{}):s.jsxs(s.Fragment,{children:[s.jsx(gn,{})," ",s.jsx(Ce,{to:"/home","data-aos":"fade-down","data-aos-delay":"700",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"12px 16px",width:"40%"},children:e("Header.home")}),s.jsx("a",{href:"https://gofund.me/0c957ce8"}),!o&&!i&&s.jsxs(s.Fragment,{children:[s.jsx(Ce,{to:"/project","data-aos":"fade-down","data-aos-delay":"500",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"12px 16px",width:"40%"},children:e("Header.project")}),s.jsx(Ce,{to:"/contact","data-aos":"fade-down","data-aos-delay":"700",style:{fontFamily:"Right Grotesk",fontWeight:600,fontSize:20,lineHeight:"119%",color:"#1976d2",textAlign:"start",padding:"8px 16px",width:"40%"},children:e("Header.contact")})]})]})]})})},Fd=()=>s.jsxs(s.Fragment,{children:[s.jsx(Ud,{}),s.jsx(d.Suspense,{children:s.jsx(Xo,{})}),s.jsx(Mi,{})]}),Vd=oe.div`
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

`,Wd=oe.div`
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
`,qd=oe.div`
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
`,_d=oe.h1`
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
`;oe(Ce)`
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
`;const Ze=oe.div`
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
`,Gd=oe.h2`
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
`,Yd=oe.p`
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

`,Kd=oe.h2`
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
`,Xd=oe.p`
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

`,Qd=oe.section`
background: #ffffff;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
  
  } 

@media (min-width: 1439px) {

  }
`,Jd=oe.h2`
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
`,Zd=oe.p`
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
`,eu=oe.h3`
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
`,tu=oe.p`
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
`,nu=oe.h3`
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
`,ou=oe.p`
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

`,iu=oe.p`
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

`,ru=oe.p`
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
`,vt=oe.div`
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

`,au=oe.img`
max-width: 400px;
height: 400px;
border-radius: 10px;
`,su="/assets/project-dekstop-265149cd.mp4",lu="/assets/project-mobile-f8ffdffe.mp4",cu="/assets/project-innovation-6ee3152f.webm",du="/assets/Unique-f30a6798.png",uu=W.section`
width: 100%;
height: 100%;
margin: 0 auto;
background: #01cbe1;
padding: 15px;
  @media screen and (min-width: 768px){
  padding: 80px;
  }
`,pu=W.div`
text-align: center;
margin: 0 auto 2.5em;
`,fu=W.h2`
    font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
`,mu=W.p`
    font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 auto;
        color: #003755;
    height: 100%;
    padding-top: 52px;
    line-height: 1.45;
`,hu=W.ul`
display: flex;
flex-direction: column;
    padding: 100px 10px 10px;
margin: 0 auto;
    padding: 0 auto;
    // list-style: none;
    margin: -10px;
    gap: 100px;
    flex-wrap: wrap;
    align-items: center;
     @media screen and (min-width: 900px){
    display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        gap: 1%;
max-width: 1180px;
margin: 0 auto;

     }

@media screen and (min-width: 1023px){
 display: flex;

 }
`,_t=W.li`
position: relative;
    display: flex;
    padding: 70px 10px 10px;
    background: #f2f5f6;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 10px;
    max-width: 370px;
    height: 64vh;
      transition: box-shadow 0.3s ease; /* Додаємо плавний перехід для тіні */

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9); /* Додаємо тінь при ховері та фокусі */
    outline: none; /* Забираємо стандартну рамку при фокусі */
  }
`,Gt=W.div`
position: absolute;
top: -85px;
left: 50%;
overflow: hidden;
margin: 0 0 0 -75px;
font-size: 8.2rem;
color: #fff;
width: 150px;
height: 150px;
border-radius: 50%;
background: #f2f5f6;
 background: linear-gradient(45deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  border: none;
  // border-radius: 30px;
  cursor: pointer;
//  margin: 0 auto;
  // margin-top: 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;
  animation: ${Qo} 10s ease infinite;

  &:hover {
    animation: ${no} 0.6s infinite;
    background-position: 100% 0;
    box-shadow: 0 0 20px rgba(0, 186, 255, 0.7);
  }

  &:focus {
    outline: none;
  }
`,He=W.h3`
vertical-align: inherit;
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 1.15;
    text-align: center;
    color: #01cbe1;
    padding-top: 5%;

   span {
   color: red;
   display: inline-block;
    animation: ${no} 0.6s infinite;
  }
`;W.p`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 25px 25px;
    color: #003755;
     border-radius: 10px;
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    text-align: center;
    margin-top: 10%;
`;const Yt=W.a`
width: 100%;
display: flex;
flex-direction: row;
    align-items: center;
   justify-content: center;
   gap: 7%;
   padding: 10px;
   width: 80%;
    margin-top: 15%;

  transition: box-shadow 0.3s ease; 

  button,
  img {
  font-family: "Proxima Nova", sans-serif;
    font-weight: 700;
  width: 50%;
  border: 1px solid #01cbe1;
  border-radius: 18px;
  overflow: hidden;
  height: 7vh;
  object-fit: cover;
   text-transform: uppercase;
  //  background: #fff;

      transition: box-shadow 0.6s ease; 
  &:hover,
  &:focus {
   background-position: 100% 0;
    box-shadow: 0 0 20px rgba(0, 186, 255, 0.7);
  }

  
  }
`;W.p`
    color: #003755;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
`;W.div`
margin-bottom: 15px;
display: flex;
justify-content: space-between;
border-top: 1px solid #01cbe1;
width: 30vh;
padding-top: 20px;

`;W.a`
padding: 2%;
  transition: transform 0.3s ease, opacity 0.3s ease;
    &:focus,
    &:hover {
    transform: scale(2.1); /* Scale up on hover */
    opacity: 1.5; /* Reduce opacity on hover */
  }
  `;var vn={},gu=at;Object.defineProperty(vn,"__esModule",{value:!0});var Eo=vn.default=void 0,vu=gu(rt()),Yn=s;Eo=vn.default=(0,vu.default)([(0,Yn.jsx)("path",{d:"M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4z"},"0"),(0,Yn.jsx)("path",{d:"M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11H7v-7l6.5 3.33L20 12zm-6.5-5.67L7 10h13z"},"1")],"MarkAsUnreadOutlined");const xu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsBAMAAAAfmfjxAAAAHlBMVEVHcEwLuWQXu2gWuWYVvW0YvWsZumcutmYAuWMttmVHI3MlAAAACHRSTlMA4FyzNBeK9fL34q8AAAfASURBVHja7ZzPV9pYFMcjJMxWilLc+QOt7kRaBneK0tEdij86O4oV6XKmrQzLlLYn29YZOfy3k+T9SF5+QEjAJj3fz/EoDeEl39z77rvvvkclCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCUo6yaO/gFdDQ1nUEj8TqUgiFEe5V4IRlTh/Y58ULOiJBvibpp+SZbcXbrEyJk4Dz3YqsY3+5Q9ejWPkKu9K6Tj7cX5YMIyZghYCmmQqrknm8nC1HIqXENyiTQaurBRCGH5KAWz3FSoXcnRigvIRl2ZivOQ59j9PMQQh1LZzXWfUR3rtWxQtbYeTF1LXbP4jjuFsIdS1Nj2tllbhLtpb8Qz7PimVcZz7rlK2Rb8wwK8eKQ3yQfIpxCmpbYGE9SrHikPfMWkuKhLd6ZveVcLLS+Ed2omwTHEkMrjVxp8q8vrl60Gm8htphEuoAsjOHd+EcsMa812KW1B1tKLBcS4lj8xg2W6YFaudx2dqFEFCOYcy2OiQWtBOjgEXbX4y1HbE6Ec3mNdzRBHhwkQwiJTWQeq9TWO51Oe71uj86thOgwY7BRJVXWyzxM5fbqLGwtSYlBXi/qYalW0uyoe7q21E1uT0oW5281J2pbSh7nBc2DZ4nTkfLU8aRK5I1ypT7th5plHVswkn10PGGOlap6VWoncT3S2XUEYG+eKOtVzFtQIwpJ++uY/iGFg9RvIwqxTRQ92H0SgxRmIaQ5TgfNfJXLekNqzNkgEYX493TbZF1+275RFuebJYUR0rcJSWfHQyZVmcbd6905e1ZEiyiXjUtFR/9NfpxQIe3K3LJHMl/Id7JRw2+QOXHjXXtuoThDK7IXTyKkLc3NIgthV5KFPhIwg5Dq0sFchXwNI2R6i8x/OFz+VYT8ChZ5E9oi/ScV4s4IlIvjurOPTClEuZzOIub5kQa7jVI2vypdHOswRa9L/VEv946dcWwuwnzRT5Ak47RjclTHUEv/bpVztn0a8s3zXn7TJoS2r9Q67U0yVexUbJs1zm+yarYdJVqR6rK6um3VY5S3I8KeWD4zRnaZZ9wZWkyXScnWLOgM2Egm/258/vuqJWTHeNWS7/TfPWPrwFHfuoD+5GjeGGEkpCte32xC1vpUyOjlGCEpOrYQIWmxBv2efP7h0CHkzjw8PJBS5Bp05LuKXvvlmXWVC7kacYarAS0yqArLTUfs8z1RSJke/8GVNhxpcdi5uyJm1oYQZd8SMnoMaBFxvUnuj+xYQvjxLfaiZfOKKDNex9zTaDZtv4dhK5hFLIxHfDbyEeLmP+tpZrUIO4O23ULeCxf6OKVFzCbuggv5wZ6metswS16DKJ6l5gr8Lqhb9LLk70NQiwxoOde46xVykz23kF6ZeVdunws5YZY4C+1bKbb+eF5lQtLmlR42pXNySb1duWK+O7i5qfhaRA83TbaMkyJe2a5vOYUMb6Ur0uzfkrzPOmGXrSzK/4StQSzwSJNmQq55Hzy07mKBrzT5WcQ4rUrHf9LLlsQmdtjzJ5Y4oFe6l8h+LuJR1ZApHTEqmb8WqJAd5lCSYrrGJzH79bGIuQ1mm571pzkYNngTppAXrLFTdoEMtQhpct2gGnYD7ba11M0GRPOBkbRqh/iAkP36jSP21NL83L9mE6eCRYa7LP0y3k1Ri6Q0dwAPVRxZtDJ1JoQMuAvMGyZb5Jtd7o6VKS44RnZ2yBAiU4tkZlBxrFoVvgUqZIX2cDaiPIppvG+uZZNrE5L2EfKJCbmfjZBuQCFTWGSZjkQBhTzOUMh413oM1Ef8XMtHyNBlEZWX6fKhhfh29tOxfSTjsgibfp36dXZvi6Rsm2si5fAe4ffePLTPchSnEHV8H7nmEZw0McEi8gy+tXDGF4uabED8g+eKTWs0c3R2M40483UtMiC+Ept44WsRpRB9dYSM5+qtclXgKQpJ3/Wpz8qI93tHHzESI7LW4WmRDEmripe1lVEAi9hSlJLOXvhci2XQ9qTxe2nFfPHdUdeiaebeepft9HH3EYUmjX/1R6MAfYQ4+BJLNML1luqkNP6Hs0BXda4yuV3L0cRYizxyB98rbkRYuDpxCxFnRS1nXevE+QG3a9HEc4wQ0SJCjhJy83LKLUSYpz64Ko1p51U9hPhOdb37iLDW+zlKADYo8OLDYd9pELtrCQuaHyVXH/nKQ5QZ/oJYRBjbw64osE2TeascZFUfhvceJVPbiqa59crDInTSpHf3F+Ms0ucj1toMdkCYGwG0XMNW15LZnDvfsAthM54jcWerR2dnSoata7eQ3/oui1hK8hHWc+WNcq7dkGxCJGXruX6ND9aenZQx6+GT6dckBOfoAeO9ovOsVKk/+vBOko1DZiH0nL3ih5Sa/mKTtrlhtKlWZrAu3RUm/kqteOzfqFzrdNqTvmV3fDzVXemyinVpBlRj/E2ayZj2XrdG7IOkCjnhe7wzcf4mTdBy0BKLwoOk6mBVwnK5FKXuGge6P2Pv1zxo/oStX3NByJyWEyzEWvRK/P+/sJaU7wRNdC6qRN2Ukk6tUy5XIi1xAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEI7/AUCmooPv2BTAAAAAAElFTkSuQmCC",bu=()=>{const{t:e}=We(),t=o=>{navigator.clipboard.writeText(o).then(()=>{alert(e("HelpCards.CopySuccess"))}).catch(i=>{console.error("Failed to copy: ",i)})},n="https://docs.google.com/document/d/10rlJIDtPk0bWtx7vGF8-DSLv9ak1qqcB366k1vyms1I/edit?usp=sharing";return s.jsxs(uu,{id:"/help",children:[s.jsxs(pu,{children:[s.jsx(fu,{children:e("HelpCards.HelpH2")}),s.jsx(mu,{children:e("HelpCards.HelpP")})]}),s.jsxs(hu,{children:[s.jsxs(_t,{children:[s.jsx(Gt,{children:"1"}),s.jsxs(He,{children:[e("HelpCards.CardTitelH3")," ",s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs(Yt,{href:"https://www.gofundme.com/f/Angel-Systems-ch/donate?attribution_id=sl%3A265f0fa1-2e54-4bb4-9f99-ba5cc3ab04f1&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link&source=btn_donate",children:[s.jsx($t,{style:{fill:"#01cbe1",width:34,height:34}}),s.jsx(Jo,{"data-aos":"fade-right",style:{margin:0,marginRight:10,position:"static"},children:e("Header.order")})]}),s.jsxs(He,{children:[e("HelpCards.CardTextP")," ",s.jsx("span",{children:"❤️"})]})]}),s.jsxs(_t,{children:[s.jsx(Gt,{children:"2"}),s.jsx(He,{children:e("HelpCards.Card2TitelH3")}),s.jsxs(Yt,{href:"https://gofund.me/98b00315",children:[s.jsx($t,{style:{fill:"#01cbe1",width:34,height:34}}),s.jsx("img",{"data-aos":"fade-right",src:xu,alt:"Gofundme"})]}),s.jsxs(He,{children:[e("HelpCards.Card2TextP")," ",s.jsx("span",{children:"x2 ❤️"})]})]}),s.jsxs(_t,{children:[s.jsx(Gt,{children:"3"}),s.jsx(He,{style:{fontSize:"1.5rem"},children:e("HelpCards.Card3TitelH3")}),s.jsxs(Yt,{children:[" ",s.jsx($t,{style:{fill:"#01cbe1",width:34,height:34}}),s.jsxs("button",{"data-aos":"fade-right",onClick:()=>t(n),children:[e("HelpCards.CopyLink"),s.jsx(Eo,{})]})]}),s.jsxs(He,{style:{fontSize:"2.2rem"},children:[e("HelpCards.Card2TextP")," ",s.jsx("span",{children:"x3 ❤️"})]})]})]})]})},yu=()=>{const{t:e}=We(),t=Xt({query:"(max-width: 768px)"}),n=Xt({query:"(max-width: 1024px)"});return s.jsxs(Vd,{children:[s.jsx(Wd,{children:s.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,children:[t?s.jsx("source",{src:lu,type:"video/mp4"}):s.jsx("source",{src:su,type:"video/mp4"}),"Your browser does not support the video tag."]})}),s.jsx(qd,{children:s.jsx(_d,{children:e("Project.TitleH1")})}),s.jsxs(Ze,{style:{display:"flex"},children:[s.jsxs(vt,{children:[s.jsx(Gd,{children:e("Project.AdaptationH2")}),s.jsx(Yd,{children:e("Project.AdaptationP")})]})," ",n?s.jsx("div",{style:{display:"none"}}):s.jsx(Dt,{src:Zo,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(Ze,{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"nowrap"},children:[s.jsxs(vt,{style:{alignItems:"flex-end"},children:[s.jsx(Kd,{children:e("Project.OptimisationH2")}),s.jsx(Xd,{children:e("Project.OptimisationP")})]}),n?s.jsx("div",{style:{display:"none"}}):s.jsx(Dt,{src:ei,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(Qd,{children:[s.jsxs(Ze,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(Jd,{children:e("Project.InnovationH2")}),s.jsx(Zd,{children:e("Project.InnovationP")}),s.jsx(Dt,{style:{paddingTop:80},src:cu,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]}),s.jsxs(Ze,{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"nowrap",marginTop:80,alignItems:"center"},children:[s.jsxs(vt,{style:{alignItems:"flex-end",paddingTop:80},children:[s.jsx(eu,{children:e("Project.UniqueH3")}),s.jsx(tu,{children:e("Project.UniqueP")})," "]}),n?s.jsx("div",{style:{display:"none"}}):s.jsx(au,{src:du,alt:"Unique"})]}),s.jsx(Ze,{children:s.jsxs(vt,{style:{alignItems:"center",maxWidth:1e3},children:[s.jsx(nu,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleH3")}),s.jsx(ou,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleP")}),s.jsx(iu,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.BoltLargeScale")}),s.jsx(ru,{style:{alignItems:"center",maxWidth:1e3},children:e("Project.LargeScaleBig")})]})})]}),s.jsx(bu,{})]})},Tu="/assets/3249672-uhd_3840_2160_25fps-8fb65659.webm";function ko(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ao(e,t,n){return t&&Kn(e.prototype,t),n&&Kn(e,n),e}function Io(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&nn(e,t)}function St(e){return St=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},St(e)}function nn(e,t){return nn=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},nn(e,t)}function Cu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Su(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pu(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Su(e)}function Ro(e){var t=Cu();return function(){var o=St(e),i;if(t){var r=St(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return Pu(this,i)}}function wu(e){return Eu(e)||ku(e)||Au(e)||Iu()}function Eu(e){if(Array.isArray(e))return on(e)}function ku(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function Au(e,t){if(e){if(typeof e=="string")return on(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return on(e,t)}}function on(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=String(e);if(t===0)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",r=o?o[3]:"",a=o?o[2]:n,l=a.length>=t?a:(wu(Array(t)).map(function(){return"0"}).join("")+a).slice(t*-1);return"".concat(i).concat(l).concat(r)}var Mo={daysInHours:!1,zeroPadTime:2};function Ru(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.now,o=n===void 0?Date.now:n,i=t.precision,r=i===void 0?0:i,a=t.controlled,l=t.offsetTime,c=l===void 0?0:l,u=t.overtime,f;typeof e=="string"?f=new Date(e).getTime():e instanceof Date?f=e.getTime():f=e,a||(f+=c);var m=a?f:f-o(),x=Math.min(20,Math.max(0,r)),C=Math.round(parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(x))*1e3),v=Math.abs(C)/1e3;return{total:C,days:Math.floor(v/(3600*24)),hours:Math.floor(v/3600%24),minutes:Math.floor(v/60%60),seconds:Math.floor(v%60),milliseconds:Number((v%1*1e3).toFixed()),completed:C<=0}}function Mu(e,t){var n=e.days,o=e.hours,i=e.minutes,r=e.seconds,a=Object.assign(Object.assign({},Mo),t),l=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,f=u===void 0?c:u,m=Math.min(2,c),x=l?et(o+n*24,c):et(o,m);return{days:l?"":et(n,f),hours:x,minutes:et(i,m),seconds:et(r,m)}}var jo=function(e){Io(n,e);var t=Ro(n);function n(){var o;return ko(this,n),o=t.apply(this,arguments),o.state={count:o.props.count||3},o.startCountdown=function(){o.interval=window.setInterval(function(){var i=o.state.count-1;i===0?(o.stopCountdown(),o.props.onComplete&&o.props.onComplete()):o.setState(function(r){return{count:r.count-1}})},1e3)},o.stopCountdown=function(){clearInterval(o.interval)},o.addTime=function(i){o.stopCountdown(),o.setState(function(r){return{count:r.count+i}},o.startCountdown)},o}return Ao(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?d.cloneElement(this.props.children,{count:this.state.count}):null}}]),n}(d.Component);jo.propTypes={count:Z.number,children:Z.element,onComplete:Z.func};var xn=function(e){Io(n,e);var t=Ro(n);function n(o){var i;if(ko(this,n),i=t.call(this,o),i.mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=d.createRef(),i.tick=function(){var a=i.calcTimeDelta(),l=a.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(a,void 0,l)},i.start=function(){if(!i.isStarted()){var a=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=a?i.calcOffsetStartTimestamp()-a:0;var l=i.calcTimeDelta();i.setTimeDeltaState(l,"STARTED",i.props.onStart),!i.props.controlled&&(!l.completed||i.props.overtime)&&(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},o.date){var r=i.calcTimeDelta();i.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return Ao(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(i){this.legacyMode||this.props.date!==i.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var i=this.props,r=i.date,a=i.now,l=i.precision,c=i.controlled,u=i.overtime;return Ru(r,{now:a,precision:l,controlled:c,offsetTime:this.offsetTime,overtime:u})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(i){this.legacyCountdownRef.current.addTime(i)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(i){return this.state.status===i}},{key:"setTimeDeltaState",value:function(i,r,a){var l=this;if(this.mounted){var c=i.completed&&!this.state.timeDelta.completed,u=i.completed&&r==="STARTED";c&&!this.props.overtime&&this.clearTimer();var f=function(){a&&a(l.state.timeDelta),l.props.onComplete&&(c||u)&&l.props.onComplete(i,u)};return this.setState(function(m){var x=r||m.status;return i.completed&&!l.props.overtime?x="COMPLETED":!r&&x==="COMPLETED"&&(x="STOPPED"),{timeDelta:i,status:x}},f)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var i=this.props,r=i.daysInHours,a=i.zeroPadTime,l=i.zeroPadDays,c=this.state.timeDelta;return Object.assign(Object.assign({},c),{api:this.getApi(),props:this.props,formatted:Mu(c,{daysInHours:r,zeroPadTime:a,zeroPadDays:l})})}},{key:"render",value:function(){if(this.legacyMode){var i=this.props,r=i.count,a=i.children,l=i.onComplete;return d.createElement(jo,{ref:this.legacyCountdownRef,count:r,onComplete:l},a)}var c=this.props,u=c.className,f=c.overtime,m=c.children,x=c.renderer,C=this.getRenderProps();if(x)return x(C);if(m&&this.state.timeDelta.completed&&!f)return d.cloneElement(m,{countdown:C});var v=C.formatted,P=v.days,k=v.hours,y=v.minutes,j=v.seconds;return d.createElement("span",{className:u},C.total<0?"-":"",P,P?":":"",k,":",y,":",j)}}]),n}(d.Component);xn.defaultProps=Object.assign(Object.assign({},Mo),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});xn.propTypes={date:Z.oneOfType([Z.instanceOf(Date),Z.string,Z.number]),daysInHours:Z.bool,zeroPadTime:Z.number,zeroPadDays:Z.number,controlled:Z.bool,intervalDelay:Z.number,precision:Z.number,autoStart:Z.bool,overtime:Z.bool,className:Z.string,children:Z.element,renderer:Z.func,now:Z.func,onMount:Z.func,onStart:Z.func,onPause:Z.func,onStop:Z.func,onTick:Z.func,onComplete:Z.func};const ju=W.div`
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
`,xt=W.div`
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
 
`,bt=W.span`
  display: block;
  font-size: 0.75em;
  color: #ffffff;
`,Lu=({targetDate:e})=>{const t=({days:n,hours:o,minutes:i,seconds:r})=>{const a=l=>l.toString().padStart(2,"0");return s.jsxs(ju,{children:[s.jsxs(xt,{children:[a(n)," ",s.jsx(bt,{children:"Days"})]}),s.jsxs(xt,{children:[a(o)," ",s.jsx(bt,{children:"Hours"})]}),s.jsxs(xt,{children:[a(i)," ",s.jsx(bt,{children:"Minutes"})]}),s.jsxs(xt,{children:[a(r)," ",s.jsx(bt,{children:"Seconds"})]})]})};return s.jsx(xn,{date:e,renderer:t})},zu=()=>{const{t:e}=We(),t=new Date("2024-11-08T23:59:59");return s.jsxs(ti,{style:{height:"100%"},children:[s.jsx(ni,{style:{width:"100%",position:"fixed"},children:s.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,style:{objectFit:"cover",position:"fixed"},children:[s.jsx("source",{src:Tu,type:"video/mp4"}),"Your browser does not support the video tag."]})}),s.jsxs(oi,{style:{marginTop:10},children:[s.jsx(gn,{}),s.jsx("h1",{style:{fontSize:"3.5em"},children:e("ErrorPage.CommingSoon")}),s.jsx("p",{style:{fontSize:"1.5em"},children:e("ErrorPage.ThankYou")}),s.jsx(ci,{})," ",s.jsx(Lu,{targetDate:t})]})]})},$u=()=>s.jsx(xi,{children:s.jsxs(ii,{children:[s.jsx(Oe,{path:"/",element:s.jsx(ri,{to:"/home"})}),s.jsxs(Oe,{path:"/",element:s.jsx(Fd,{}),children:[s.jsx(Oe,{path:"home",element:s.jsx(ai,{})}),s.jsx(Oe,{path:"project",element:s.jsx(yu,{})}),s.jsx(Oe,{path:"contact",element:s.jsx(di,{})})]}),s.jsx(Oe,{path:"*",element:s.jsx(zu,{})})]})});Qt.createRoot(document.getElementById("root")).render(s.jsxs(ye.StrictMode,{children:[s.jsx(si,{styles:bi}),s.jsx(li,{basename:"/",children:s.jsx($u,{})})]}));
