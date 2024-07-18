import styled, { css, keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-250%);
  }
`;

export const Wrapper = styled.section<{ background?: string }>`
width: 100%;
height: 100vh;
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

export const DonatButton = styled.a`

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
width: 100%;
margin: 0 auto;
 font-weight: bold;
`;

export const ContainerStatistic = styled.div`

`;

export const CardStatistic = styled.div`
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
//   box-shadow: 0 0 20px #00baff;
  color: #00baff;
  border-bottom:  4px solid #00baff;
   border-top:  4px solid #00baff;
  }

  @media (max-width: 768px) {
    // animation: ${move} 15s linear infinite; 
  }

   @media (min-width: 768px) {

     transition: background 1.9s ease-in-out;

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
`;
