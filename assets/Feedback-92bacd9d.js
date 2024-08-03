import{s as t,G as a,j as e}from"./index-e5b61c4a.js";import{S as l,P as h,A as c,a as p}from"./autoplay-5dc22bda.js";/* empty css               */import{N as x}from"./navigation-44b22e3d.js";import{d as u}from"./ArrowCircleRight-bbb1b9df.js";import{d as m}from"./ArrowCircleLeft-1cfd6b04.js";const g=t.div`
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
`,f=t.div`
  text-align: center;
  margin: 0 2.5em;
  padding: 30px;
  width: 90%;
`,b=t.h2`
  color: white;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  letter-spacing: -.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.8rem;
  line-height: 1.1;
  width: 90%;
`,w=t.p`
  color: #003755;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 52px;
  line-height: 1.45;
  width: 90%;
`,v=t.div`
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
  
`,n=t.div`
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

`,y=t.span`
font-size: 14px;
border-bottom: 1px solid #01cbe1;
`;t.a`
  display: block;
  text-decoration: none;


`;t.div`
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
`;const k=t.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`,j=t.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`,C=[{id:1,text:"John Doe, CEO of Tech Innovators",data:"11.07.2024",hashtag:"#CURA is a smart solution for everyone. Thanks for the great work!👏"},{id:2,text:"Jane Smith, Founder of Startup Hub",data:"14.06.2024",hashtag:"#CURA is changing our lives. Great team and product!🤩🤩🤩"},{id:3,text:"Alice Johnson, Tech Entrepreneur",data:"11.05.2024",hashtag:"#CURA helps people every day. Bravo for such innovation!👏🫡"},{id:4,text:"Michael Brown, Investor at Future Ventures",data:"18.04.2024",hashtag:"#CURA is awesome! Great work and potential!😻"},{id:5,text:"Emily Davis, CEO of Smart Solutions",data:"11.03.2024",hashtag:"#CURA is a game-changer. Amazing team!💙💛"},{id:6,text:"Daniel Wilson, Co-Founder of NextGen Startups",data:"21.02.2024",hashtag:"#CURA chairs are incredible! Thanks for the quality!"},{id:7,text:"Sophia Miller, Serial Entrepreneur",data:"21.02.2024",hashtag:"#CURA is a brilliant idea! Excellent product and service!😉"},{id:8,text:"James Anderson, Tech Investor",data:"21.02.2024",hashtag:"#CURA enhances comfort. Great innovation for all!"},{id:9,text:"Linda Martinez, Founder of Wellness Tech",data:"21.02.2024",hashtag:"#CURA is a great idea for the office. Thanks for your work!"}],N=()=>{const i=a({query:"(max-width: 400px)"}),r=a({query:"(min-width: 400px) and (max-width: 768px)"}),s=a({query:"(min-width: 769px)"}),d=i||r?1:3;return e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(b,{children:"Feedback & support"}),e.jsx(w,{children:"Real user reviews and endorsements from well-known individuals and organisations."})]}),e.jsx(l,{style:{margin:"0 50px"},slidesPerView:d,spaceBetween:30,navigation:{prevEl:".custom-prev",nextEl:".custom-next"},modules:[h,x,c],className:"mySwiper",children:C.map(o=>e.jsx(p,{style:{},children:e.jsxs(v,{children:[e.jsxs(n,{style:{color:"black",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"nowrap",fontSize:30,height:"100%"},children:[e.jsx(y,{children:o.data}),o.hashtag]}),e.jsx(n,{style:{borderTop:"1px solid #01cbe1",height:"15%",marginTop:"30%"},children:o.text})]})},o.id))}),e.jsx(k,{className:"custom-prev",children:e.jsx(m,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})}),e.jsx(j,{className:"custom-next",children:e.jsx(u,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})})]})};export{N as default};
