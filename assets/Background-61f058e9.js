import{j as t,r as s}from"./index-f4768723.js";import{L as d}from"./index-c37af6dc.js";import{n as l}from"./createSvgIcon-bf3e360f.js";import{r as p}from"./createSvgIcon-58492d81.js";import{u as m,A as c}from"./aos-dc2a9db9.js";import{c as x,s as e}from"./styled-components.browser.esm-8ee70aa6.js";import"./index-e87d6bac.js";const f="/assets/bgVideo-4eb892d0.webm";var o={},u=l;Object.defineProperty(o,"__esModule",{value:!0});var r=o.default=void 0,h=u(p()),i=t;r=o.default=(0,h.default)([(0,i.jsx)("path",{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},"0"),(0,i.jsx)("path",{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},"1")],"KeyboardDoubleArrowDown");const n=x`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`,b=e.div`
  width: 100%;
  height: 90vh;
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
   height: 100%;
    background: linear-gradient(to bottom, transparent, 30%, #01283c);
  }
`,g=e.div`
  position: absolute;
  bottom: 7%;
  left: 4%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  transform: none;
  opacity: 1;

  h1 {
    // font-size: 3em;
    // margin-bottom: 20px;
  }

  p {
    // font-size: 1.5em;
  }

  @media (min-width: 768px) {
    bottom: 6%;
    // transform: translate(-50%, -50%);
  }
  @media (min-width: 1439px) {
   bottom: -1%;
  }
`,w=e.h1`
  font-family: 'Proxima', sans-serif;
  text-align: start;
  display: flex;
  font-weight: 100;
  letter-spacing: -0.035em;
  margin: 0 0 0.5em;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1;

  @media (min-width: 767px) {
    font-size: 3.5rem;
    max-width: 80%;
  }
  @media (min-width: 1439px) {
    font-size: 4.5rem;
  }
`,v=e.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  transition-delay: 0.8s;
  text-align: center;
  font-weight: bold;
  background: #1e90ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`,z=e.div`
  display: block;
  -webkit-animation: ${n} 2s infinite;
  animation: ${n} 2s infinite;
  transition-timing-function: ease;
  cubic-bezier(.175,.885,.32,1.275);
  text-align: center;
  font-weight: bold;
  color: #fff;
`,j=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  position: relative;
`;e.div`
  position: relative;
  width: 100%;
  height: 100%;
`;e.img`
  width: 100%;
  height: auto;
`;e.div`
  position: absolute;
  bottom: 90px;
  left: 40px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  width: 300px;

  @media screen and (min-width: 769px) {
    bottom: 32px;
    left: 400px;
    font-size: 24px;
  }

  @media screen and (min-width: 1240px) {
    bottom: 132px;
    left: 400px;
    font-size: 24px;
  }
`;e.div`
  position: absolute;
  bottom: 170px;
  left: 40px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;

  @media screen and (min-width: 769px) {
    bottom: 70px;
    left: 40px;
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    bottom: 170px;
    left: 400px;
    font-size: 34px;
  }

  @media screen and (min-width: 1240px) {
    bottom: 270px;
    left: 400px;
    font-size: 34px;
  }
`;const E=()=>{const{t:a}=m();return s.useEffect(()=>{c.init({duration:3e3})},[]),t.jsxs("div",{id:"/home",style:{marginTop:76},children:[t.jsx(b,{style:{width:"100%"},children:t.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,style:{},children:[t.jsx("source",{src:f,type:"video/mp4"}),"Your browser does not support the video tag."]})}),t.jsxs(g,{children:[t.jsx(w,{children:a("Background.slide1Text")}),t.jsx(j,{children:t.jsx(d,{to:"video",smooth:!0,duration:1e3,children:t.jsx(v,{children:t.jsx(z,{children:t.jsx(r,{style:{fontSize:50}})})})})})]})]})};export{E as default};
