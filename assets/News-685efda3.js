import{s as e,t as g,v as c,j as t,G as s}from"./index-e5b61c4a.js";import{S as m,P as u,A as p,a as x}from"./autoplay-5dc22bda.js";/* empty css               */import{N as f}from"./navigation-44b22e3d.js";import{d as b}from"./ArrowCircleRight-bbb1b9df.js";import{d as j}from"./ArrowCircleLeft-1cfd6b04.js";const w=e.div`
  width: 100vw;
  height: 100vh;
  background: white;
  margin: 0 auto;
  padding: 150px auto;
  position: relative;
//   background-color: #01cbe1;
`,k=e.div`
  text-align: center;
  margin: 0 2.5em;
  padding: 30px;
  width: 90%;
`,v=e.h2`
  color: #01cbe1;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  letter-spacing: -.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.8rem;
  line-height: 1.1;
  width: 90%;
`,S=e.p`
  color: #003755;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 52px;
  line-height: 1.45;
  width: 90%;
`,T=e.div`
  width: 100%;
  height: 460px;
  border-radius: 17px;
background-color: #01cbe180;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    color: #fff;

    &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .9) 118%);
    transform-origin: center bottom;
    transition: .15s transform;
`,r=e.div`
position: relative;
bottom: 36%;
    left: 1%;
    width: 100%;
    height: 69%;
 font-size: 20px;
text-align: center;
color: #01cbe1;
font-size: 1.2rem;
border-top: 1px solid #01cbe1;
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
`,Y=e.a`
  display: block;
  text-decoration: none;


`,z=e.div`
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
`,I=e.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`,L=e.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`;var o={},U=c;Object.defineProperty(o,"__esModule",{value:!0});var n=o.default=void 0,N=U(g()),P=t;n=o.default=(0,N.default)((0,P.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1.88 9.54L8.92 16.5l-1.41-1.41 4.96-4.96L10.34 8l5.65.01.01 5.65z"}),"Outbound");const R=[{id:1,imageUrl:"https://swiperjs.com/demos/images/nature-1.jpg",link:"*",text:"Your Text 1",data:"11.07.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:2,imageUrl:"https://swiperjs.com/demos/images/nature-2.jpg",link:"#",text:"Your Text 2",data:"14.06.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:3,imageUrl:"https://swiperjs.com/demos/images/nature-3.jpg",link:"#",text:"Your Text 3",data:"11.05.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:4,imageUrl:"https://swiperjs.com/demos/images/nature-4.jpg",link:"#",text:"Your Text 4",data:"18.04.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:5,imageUrl:"https://swiperjs.com/demos/images/nature-5.jpg",link:"#",text:"Your Text 5",data:"11.03.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:6,imageUrl:"https://swiperjs.com/demos/images/nature-6.jpg",link:"#",text:"Your Text 6",data:"21.02.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:7,imageUrl:"https://swiperjs.com/demos/images/nature-7.jpg",link:"#",text:"Your Text 7",data:"21.02.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:8,imageUrl:"https://swiperjs.com/demos/images/nature-8.jpg",link:"#",text:"Your Text 8",data:"21.02.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"},{id:9,imageUrl:"https://swiperjs.com/demos/images/nature-9.jpg",link:"#",text:"Your Text 9",data:"21.02.2024",hashtag:"# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇"}],E=()=>{const i=s({query:"(max-width: 400px)"}),d=s({query:"(min-width: 375px) and (max-width: 1023px)"}),l=s({query:"(min-width: 1024px)"}),h=i?1:d?2:4;return t.jsxs(w,{children:[t.jsxs(k,{children:[t.jsx(v,{children:"News & Updates"}),t.jsx(S,{children:"Recent achievements and developments of the project."})]}),t.jsx(m,{slidesPerView:h,spaceBetween:30,centeredSlides:!0,navigation:{prevEl:".custom-prev",nextEl:".custom-next"},modules:[u,f,p],className:"mySwiper",children:R.map(a=>t.jsx(x,{style:{},children:t.jsx(T,{children:t.jsxs(Y,{href:a.link,children:[t.jsx(z,{$backgroundimage:a.imageUrl}),t.jsxs(r,{style:{color:"#ccc",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"nowrap"},children:[t.jsx(y,{children:a.data}),a.hashtag]}),t.jsxs(r,{children:[t.jsx(n,{style:{marginRight:15,width:35,height:35,background:"white",borderRadius:50}}),a.text]})]})})},a.id))}),t.jsx(I,{className:"custom-prev",children:t.jsx(j,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})}),t.jsx(L,{className:"custom-next",children:t.jsx(b,{style:{width:50,height:50,fill:"#01cbe1",background:"white",borderRadius:50}})})]})};export{E as default};
