import{r as o,j as e}from"./index-f4768723.js";import{s as x}from"./styled-components.browser.esm-8ee70aa6.js";import{W as k,M as E,T as b,F as v,a as S,b as y,c,I as d,d as m,e as u,f as F,B as C,g as w,S as A}from"./Subscribe-3272bd88.js";import{u as M,A as P}from"./aos-dc2a9db9.js";import"./index-e87d6bac.js";const D="/assets/product-section-2_-2380x850-2-18a0aab3.jpg",I=x.div`
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
`,z=()=>{const{t:a}=M(),[s,g]=k("xgvwvayg"),[r,h]=o.useState({name:"",email:"",message:""}),[n,p]=o.useState({name:"",email:"",message:""}),l=t=>{const{name:i,value:T}=t.target;h({...r,[i]:T})},f=()=>{let t={name:"",email:"",message:""},i=!0;return r.name.trim()||(t.name=a("EmailTicket.nameError"),i=!1),r.email.trim()?/\S+@\S+\.\S+/.test(r.email)||(t.email=a("EmailTicket.emailInvalid"),i=!1):(t.email=a("EmailTicket.emailError"),i=!1),r.message.trim()||(t.message=a("EmailTicket.messageError"),i=!1),p(t),i},j=async t=>{t.preventDefault(),f()&&await g(t)};return o.useEffect(()=>{P.init({duration:3e3})},[]),s.succeeded?e.jsx(E,{}):e.jsxs(b,{id:"contact","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx(v,{"data-translate":!0,children:a("EmailTicket.formTitle")}),e.jsx(S,{"data-translate":!0,children:a("EmailTicket.formDescription")}),e.jsxs(y,{name:"email-ticket",method:"POST","data-netlify":"true",onSubmit:j,children:[e.jsx("input",{type:"hidden",name:"form-name",value:"email-ticket"}),e.jsxs(c,{children:[e.jsx(d,{"data-translate":!0,type:"text",name:"name",value:r.name,onChange:l,placeholder:a("EmailTicket.namePlaceholder")}),n.name&&e.jsx(m,{children:n.name})]}),e.jsxs(c,{children:[e.jsx(d,{type:"email",name:"email",value:r.email,onChange:l,placeholder:a("EmailTicket.emailPlaceholder")}),n.email&&e.jsx(m,{children:n.email}),e.jsx(u,{prefix:"Email",field:"email",errors:s.errors})]}),e.jsxs(c,{children:[e.jsx(F,{"data-translate":!0,id:"message",name:"message",value:r.message,onChange:l,placeholder:a("EmailTicket.messagePlaceholder")}),n.message&&e.jsx(m,{children:n.message}),e.jsx(u,{prefix:"Message",field:"message",errors:s.errors})]}),e.jsx(C,{"data-translate":!0,type:"submit",disabled:s.submitting,children:s.submitting?a("EmailTicket.sending"):a("EmailTicket.submitButton")}),s.submitting&&e.jsx(m,{"data-translate":!0,children:a("EmailTicket.sending")}),s.errors&&(Array.isArray(s.errors)?s.errors.length>0?e.jsx(m,{"data-translate":!0,children:a("EmailTicket.error")}):null:e.jsx(w,{}))]})]})},_=()=>e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs(B,{children:[e.jsx(z,{}),e.jsx(A,{})]})})});export{_ as default};
