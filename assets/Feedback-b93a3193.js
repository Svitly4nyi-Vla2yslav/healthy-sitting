import{j as t}from"./index-f4768723.js";import{S as l,P as p,A as h,a as c}from"./HomePage-89c8b676.js";import{N as x}from"./navigation-bb16e3ce.js";import{d as m}from"./ArrowCircleRight-22abfb58.js";import{d as u}from"./ArrowCircleLeft-ee1bf608.js";import{s as e}from"./styled-components.browser.esm-8ee70aa6.js";import{u as a}from"./index-132eeb55.js";import"./ContentHomePage.styled-9402d448.js";import"./aos-dc2a9db9.js";import"./HomeComponent.styled-472929cf.js";import"./createSvgIcon-bf3e360f.js";import"./createSvgIcon-58492d81.js";import"./index-e87d6bac.js";const f=e.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 150px auto;
  position: relative;
  background-color: #01cbe1;
  padding-bottom: 116vh;

  .swiper-slide {
  border-radius: 24px;
  padding: 24px;

}
`,g=e.div`
  text-align: center;
  margin: 0 2.5em;
  padding: 30px;
  width: 90%;
`,b=e.h2`
  color: white;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  letter-spacing: -.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.8rem;
  line-height: 1.1;
  width: 90%;
`,w=e.p`
  color: #003755;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 52px;
  line-height: 1.45;
  width: 90%;
`,v=e.div`
  width: 100%;
  height: 460px;
  border-radius: 24px;
background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    color: #fff;
      transition: box-shadow 0.3s ease; /* Додаємо плавний перехід для тіні */

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9); /* Додаємо тінь при ховері та фокусі */
    outline: none; /* Забираємо стандартну рамку при фокусі */
  }
  
`,r=e.div`
position: relative;
    bottom: -2%;
    left: 1%;
    width: 100%;
    height: 54%;
    font-size: 16px;
    text-align: center;
    color: #01cbe1;
    /* border-top: 1px solid #01cbe1; */
    padding-bottom: 10px;
    padding-top: 10px;
    z-index: 222;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: start;

`,y=e.span`
font-size: 14px;
border-bottom: 1px solid #01cbe1;
`;e.a`
  display: block;
  text-decoration: none;


`;e.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${i=>i.$backgroundimage});
  background-size: cover !important;
  background-position: center;
  z-index: -1;
     border-radius: 17px;
`;const k=e.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`,j=e.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`,C=[{id:1,text:"John Doe, CEO of Tech Innovators",data:"11.07.2024",hashtag:"#CURA is a smart solution for everyone. Thanks for the great work!👏"},{id:2,text:"Jane Smith, Founder of Startup Hub",data:"14.06.2024",hashtag:"#CURA is changing our lives. Great team and product!🤩🤩🤩"},{id:3,text:"Alice Johnson, Tech Entrepreneur",data:"11.05.2024",hashtag:"#CURA helps people every day. Bravo for such innovation!👏🫡"},{id:4,text:"Michael Brown, Investor at Future Ventures",data:"18.04.2024",hashtag:"#CURA is awesome! Great work and potential!😻"},{id:5,text:"Emily Davis, CEO of Smart Solutions",data:"11.03.2024",hashtag:"#CURA is a game-changer. Amazing team!💙💛"},{id:6,text:"Daniel Wilson, Co-Founder of NextGen Startups",data:"21.02.2024",hashtag:"#CURA chairs are incredible! Thanks for the quality!"},{id:7,text:"Sophia Miller, Serial Entrepreneur",data:"21.02.2024",hashtag:"#CURA is a brilliant idea! Excellent product and service!😉"},{id:8,text:"James Anderson, Tech Investor",data:"21.02.2024",hashtag:"#CURA enhances comfort. Great innovation for all!"},{id:9,text:"Linda Martinez, Founder of Wellness Tech",data:"21.02.2024",hashtag:"#CURA is a great idea for the office. Thanks for your work!"}],q=()=>{const i=a({query:"(max-width: 400px)"}),n=a({query:"(min-width: 400px) and (max-width: 768px)"}),s=a({query:"(min-width: 769px)"}),d=i||n?1:3;return t.jsxs(f,{children:[t.jsxs(g,{children:[t.jsx(b,{children:"Feedback & support"}),t.jsx(w,{children:"Real user reviews and endorsements from well-known individuals and organisations."})]}),t.jsx(l,{style:{margin:"0 50px"},slidesPerView:d,spaceBetween:30,navigation:{prevEl:".custom-prev",nextEl:".custom-next"},modules:[p,x,h],className:"mySwiper",children:C.map(o=>t.jsx(c,{style:{},children:t.jsxs(v,{children:[t.jsxs(r,{style:{color:"black",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"nowrap",fontSize:30,height:"100%"},children:[t.jsx(y,{children:o.data}),o.hashtag]}),t.jsx(r,{style:{borderTop:"1px solid #01cbe1",height:"15%",marginTop:"30%"},children:o.text})]})},o.id))}),t.jsx(k,{className:"custom-prev",children:t.jsx(u,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})}),t.jsx(j,{className:"custom-next",children:t.jsx(m,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})})]})};export{q as default};
