import{j as e}from"./index-f4768723.js";import{S as p,A as d,P as g,a as l}from"./HomePage-89c8b676.js";import{s as t}from"./styled-components.browser.esm-8ee70aa6.js";import{u as s}from"./index-132eeb55.js";import"./ContentHomePage.styled-9402d448.js";import"./aos-dc2a9db9.js";import"./HomeComponent.styled-472929cf.js";import"./index-e87d6bac.js";const c=t.div`
  width: 100vw;
  height: 60%;
  background: white;
  margin: 0px auto;
  padding: 150px auto;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
  }
`,h=t.div`
text-align: center;
margin: 0 2.5em;
color: #01cbe1;
padding: 30px;
    width: 90%;
`,u=t.h2`
color: #01cbe1;
 font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
        width: 90%;
`,j=t.p`
color: #01cbe1;
 font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 auto;
        color: #003755;
    height: 100%;
    padding-top: 52px;
    line-height: 1.45;
     width: 90%;
`;t.div`

`;t.img`

`;const w=[{id:1,imageUrl:"https://swiperjs.com/demos/images/nature-1.jpg"},{id:2,imageUrl:"https://swiperjs.com/demos/images/nature-2.jpg"},{id:3,imageUrl:"https://swiperjs.com/demos/images/nature-3.jpg"},{id:4,imageUrl:"https://swiperjs.com/demos/images/nature-4.jpg"},{id:5,imageUrl:"https://swiperjs.com/demos/images/nature-5.jpg"},{id:6,imageUrl:"https://swiperjs.com/demos/images/nature-6.jpg"},{id:7,imageUrl:"https://swiperjs.com/demos/images/nature-7.jpg"},{id:8,imageUrl:"https://swiperjs.com/demos/images/nature-8.jpg"},{id:9,imageUrl:"https://swiperjs.com/demos/images/nature-9.jpg"}],T=()=>{const r=s({query:"(max-width: 375px)"}),a=s({query:"(min-width: 375px) and (max-width: 1023px)"}),o=s({query:"(min-width: 1024px)"}),n=r?2:a?4:7;return e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(u,{children:"Companies that care about the health of their employees"}),e.jsx(j,{children:"External partners and corporate donors supporting the project."})]}),e.jsx(p,{loop:!0,slidesPerView:n,spaceBetween:20,navigation:!1,autoplay:{delay:1,disableOnInteraction:!1},pagination:!1,grabCursor:!0,speed:4e3,modules:[d,g],className:"mySwiper",children:Array.from({length:2}).map((x,m)=>w.map(i=>e.jsx(l,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"20vh",fontSize:36,paddingBottom:50},children:e.jsx("img",{src:i.imageUrl,alt:`Slide ${i.id}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},`${i.id}-${m}`)))})]})};export{T as default};
