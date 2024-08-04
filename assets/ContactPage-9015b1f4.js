import{s as x,u as k,W as E,r as o,A as b,j as e,M as v,T as S,F as y,a as F,b as C,c,I as d,d as l,e as u,f as w,B as A,g as M,S as P}from"./index-e5e17d59.js";const D="/assets/product-section-2_-2380x850-2-18a0aab3.jpg",I=x.div`
//  background-image: url(${D});
   width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
   background-attachment: fixed; 
  @media screen and (min-width: 768px){
  // height: 100vh;
  }
`,B=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
     padding-top: 100px;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 300px;
    margin : 0 auto;
    pading: 5px;
`,z=()=>{const{t:a}=k(),[s,g]=E("xgvwvayg"),[r,h]=o.useState({name:"",email:"",message:""}),[n,p]=o.useState({name:"",email:"",message:""}),m=t=>{const{name:i,value:T}=t.target;h({...r,[i]:T})},f=()=>{let t={name:"",email:"",message:""},i=!0;return r.name.trim()||(t.name=a("EmailTicket.nameError"),i=!1),r.email.trim()?/\S+@\S+\.\S+/.test(r.email)||(t.email=a("EmailTicket.emailInvalid"),i=!1):(t.email=a("EmailTicket.emailError"),i=!1),r.message.trim()||(t.message=a("EmailTicket.messageError"),i=!1),p(t),i},j=async t=>{t.preventDefault(),f()&&await g(t)};return o.useEffect(()=>{b.init({duration:3e3})},[]),s.succeeded?e.jsx(v,{}):e.jsxs(S,{id:"contact","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx(y,{"data-translate":!0,children:a("EmailTicket.formTitle")}),e.jsx(F,{"data-translate":!0,children:a("EmailTicket.formDescription")}),e.jsxs(C,{name:"email-ticket",method:"POST","data-netlify":"true",onSubmit:j,children:[e.jsx("input",{type:"hidden",name:"form-name",value:"email-ticket"}),e.jsxs(c,{children:[e.jsx(d,{"data-translate":!0,type:"text",name:"name",value:r.name,onChange:m,placeholder:a("EmailTicket.namePlaceholder")}),n.name&&e.jsx(l,{children:n.name})]}),e.jsxs(c,{children:[e.jsx(d,{type:"email",name:"email",value:r.email,onChange:m,placeholder:a("EmailTicket.emailPlaceholder")}),n.email&&e.jsx(l,{children:n.email}),e.jsx(u,{prefix:"Email",field:"email",errors:s.errors})]}),e.jsxs(c,{children:[e.jsx(w,{"data-translate":!0,id:"message",name:"message",value:r.message,onChange:m,placeholder:a("EmailTicket.messagePlaceholder")}),n.message&&e.jsx(l,{children:n.message}),e.jsx(u,{prefix:"Message",field:"message",errors:s.errors})]}),e.jsx(A,{"data-translate":!0,type:"submit",disabled:s.submitting,children:s.submitting?a("EmailTicket.sending"):a("EmailTicket.submitButton")}),s.submitting&&e.jsx(l,{"data-translate":!0,children:a("EmailTicket.sending")}),s.errors&&(Array.isArray(s.errors)?s.errors.length>0?e.jsx(l,{"data-translate":!0,children:a("EmailTicket.error")}):null:e.jsx(M,{}))]})]})},L=()=>e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs(B,{children:[e.jsx(z,{}),e.jsx(P,{})]})})});export{L as default};
