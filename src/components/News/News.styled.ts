// News.styled.tsx

import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  margin: 0 auto;
  padding: 150px auto;
  position: relative;
//   background-color: #01cbe1;
`;

export const TextWraper = styled.div`
  text-align: center;
  margin: 0 2.5em;
  padding: 30px;
  width: 90%;
`;

export const TitelPartners = styled.h2`
  color: #01cbe1;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  letter-spacing: -.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.8rem;
  line-height: 1.1;
  width: 90%;
`;

export const TextPartners = styled.p`
  color: #003755;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 52px;
  line-height: 1.45;
  width: 90%;
`;

export const SlideContainer = styled.div`
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
`;

export const SlideContent = styled.div`
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

`;

// flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-start;
//     flex-wrap: nowrap;

export const Data = styled.span`
font-size: 14px;
`;

export const SlideLink = styled.a`
  display: block;
  text-decoration: none;


`;

export const SlideBackground = styled.div<{ $backgroundimage: string }>`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.$backgroundimage});
  background-size: cover !important;
  background-position: center;
  z-index: -1;
     border-radius: 17px;
`;

export const CustomPrevButton = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`;

export const CustomNextButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`;
