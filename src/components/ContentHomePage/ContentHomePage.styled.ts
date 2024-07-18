import styled, { css, keyframes } from 'styled-components';

const move = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-250%);
  }
`;

export const MainSection = styled.section<{ background?: string }>`
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

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* рівень затемнення */
    z-index: 2;
  }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  
  h1 {
    // font-size: 3em;
    margin-bottom: 20px;
  }

  p {
    // font-size: 1.5em;
  }

  @media (max-width: 768px) {
    top: 1%; /* or other value that fits your design */
    transform: translate(-50%, 0);
  }
`;

export const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 20%;
  overflow-y: hidden;

  
  
  @media (min-width: 769px) {
 width: 760px;
        overflow-y: visible;
        display: flex;
        overflow-y: visible;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 1%;
  }
@media (min-width: 1240px) {
display: flex;
        width: 1240px;
        margin: 0 auto;
        gap: 2%;
        justify-content: center;


}

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding-botton: 20px;
  max-width: 310px;
  padding: 5px;
   background-color: rgba(249, 249, 249, 0.28);
  backdrop-filter: blur(10px);
  border-radius: 20px;

  @media (max-width: 768px) {
    animation: ${move} 15s linear infinite; 
  }

   @media (min-width: 769px) {

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

export const Image = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 20px;
`;

export const CardTitel = styled.h3`
  margin: 10px 0;
  font-family: 'Roboto';
font-size: 24px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
margin-bottom: 50px;
width: 50%;
margin: 0 auto;
 font-weight: bold;
`;

export const CardText = styled.p`
 font-family: 'Roboto';
font-size: 14px;
text-align: center;
padding: 15px;
font-weight: 600;
margin-bottom: 50px;
max-width: 320px;
margin: 0 auto;
 font-weight: bold;
`;
