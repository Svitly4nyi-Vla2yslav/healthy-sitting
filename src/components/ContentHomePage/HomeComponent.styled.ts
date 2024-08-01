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
display: block;
margin-bottom: 690px;
// border-bottom: 1px solid #00baff;
  @media (min-width: 767px) {
margin-bottom: 390px;

  }

     @media (min-width: 1024px) {
           display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        // align-items: center;
        justify-content: space-evenly;
        width: 100%;
          margin-bottom: 0px;
   }

${(props) =>
    props.background &&
    css`
    // background-image: url(${props.background});
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
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
        text-align: center;
    letter-spacing: -.035em;
    margin: 0 0 .5em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
        color: #01cbe1;
        border-top: 1px solid #01cbe1;
        padding-top: 50px;
@media (min-width: 1240px) {
width: 100vh;

z-index: -15;
}
`;

export const ContainerStatistic = styled.div`
 margin: 0 auto;
 margin-bottom: 90px;
 @media (min-width: 768px) {
display: flex;
width: 760px;
height: 200px;

}   
 @media (min-width: 767px) {   
        display: flex;
        padding: 10px;
        width: 100vh;
        height: 70vh;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-end;
        margin-bottom: 190px;
}

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
 
  border-radius: 20px;
 



   @media (min-width: 768px) {
   
   }



  
`;

export const NumberLarge = styled.p`
font-family: "Proxima Nova", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding : 15px;

    @media screen and (min-width: 1440px){
 font-size: 38px;
  font-weight: bold;
}
`;

export const TextSmoll = styled.p`
  margin: 10px 0;
  font-family: 'Roboto';
font-size: 24px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
// margin-bottom: 50px;
width: 90%;
margin: 0 auto;
 font-weight: bold;

  @media (min-width: 1240px) { 
  font-size: 27px;
  display: flex;
  padding-top: 10%;
padding: 10px;
  }
`;
