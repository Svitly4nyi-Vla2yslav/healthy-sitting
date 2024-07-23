import styled, { css, keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.section<{ background?: string }>`
width: 100%;
height: 100vh;
margin: 0 auto; 
${(props) =>
    props.background &&
    css`
    background-image: url(${props.background});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
    transition: opacity 0.5s ease;
  `}
`;

export const DonatButton = styled.button`
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  border: none;
  border-radius: 30px;
  cursor: pointer;
 margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;
  animation: ${gradientAnimation} 10s ease infinite;

  &:hover {
    animation: ${pulse} 0.6s infinite;
    background-position: 100% 0;
    box-shadow: 0 0 20px rgba(0, 186, 255, 0.7);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
  display: flex;
  margin-top: 50px;
   padding: 15px 30px;
  }
`;

export const TitelH3 = styled.h3`
  margin: 10px 0;
  font-family: 'Roboto';
font-size: 28px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
margin-bottom: 50px;
width: 80%;
margin: 0 auto;
 font-weight: bold;

 @media (min-width: 1024px) {
 font-size: 48px;
 width: 100%;
 margin-bottom: 40px;
 padding-bottom: 40px;
 }
`;

export const ContainerStatistic = styled.div`
 margin: 0 auto;
 @media (min-width: 768px) {
display: flex;
width: 760px;
height: 200px;
}   
 @media (min-width: 1240px) {   
 padding: 10px;
 width: 1200px;
 height: 50vh;

`;

export const CardStatistic = styled.div`
 margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-botton: 20px;
  max-width: 310px;
  padding: 5px;
   background-color: rgba(249, 249, 249, 0.28);
  backdrop-filter: blur(10px);
  border-radius: 20px;
   border-bottom:  1px solid #00baff;
   border-top:  1px solid #00baff;

transition: box-shadow 0.9s ease,
  color 0.9s,
  border-bottom 0.9s,
  border-top 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  box-shadow: 0 0 20px #00baff;
  color: #00baff;
  border-bottom:  4px solid #00baff;
   border-top:  4px solid #00baff;
  }

  @media (max-width: 768px) {

  }

   @media (min-width: 768px) {

    //  transition: background 1.9s ease-in-out;

  &:hover,
  &:focus {
    // background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;
  }
`;

export const NumberLarge = styled.p`
font-family: 'Roboto';
  font-size: 38px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  padding : 15px;

    @media screen and (min-width: 1440px){
 font-size: 78px;
  font-weight: bold;
}
`;

export const TextSmoll = styled.p`
 font-family: 'Roboto';
font-size: 10px;
text-align: center;
font-weight: 400;
max-width: 320px;
margin: 0 auto;
 font-weight: bold;

  @media (min-width: 1240px) { 
  font-size: 20px;
  display: flex;
  padding-top: 10%;
padding: 10px;
  }
`;
