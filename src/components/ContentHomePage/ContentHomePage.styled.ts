import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
display: flex;
margin: 0 auto;
padding: 10px;
height: 100%;
 justify-content: center;
@media (min-width: 768px) {
height: 900px;
margin: 0 auto;
}

@media (min-width: 1024px) {
height: 1200px;

}

@media (min-width: 1240px) {
padding: 100px;
gap: 19.5rem;
padding-top: 200px;
flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
}

`;

export const Wrapper = styled.div`
    position: absolute;
    top: 128%;
    left: 10%;
`;

export const Titel = styled.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 0 .5em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
        color: #01cbe1;
        border-top: 1px solid #01cbe1;
        padding-top: 50px;
@media (min-width: 1240px) {
width: 510px;
z-index: -15;
}

`;



export const Video = styled.video`
  max-width: 300px;
  height: auto;
  border-radius: 20px;
  @media (min-width: 1240px){
   max-width: 600px;
  }
`;

export const CardTitel = styled.h3`
  margin: 10px 0;
  font-family: 'Roboto';
font-size: 24px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
// margin-bottom: 50px;
width: 100%;
margin: 0 auto;
 font-weight: bold;
 padding: 10px ;
 text-align: end;
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
      // background-image: url(${props.background});
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
    z-index: 2999999;
  }
 @media (max-width: 1023px) {
 
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* рівень затемнення */
    z-index: 2999999;
  }
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
      height: 100vh;
  
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
  overflow: overlay;
 scrollbar-width: none;
       padding-top: 120%;
          margin: 0 auto;
        gap: 2%;
        max-height: 66%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        margin-top: 62%;
        padding-bottom: 9%;   
  
  
  @media (min-width: 766px) {
 width: 760px;
        display: flex;
        overflow: overlay;
       
          padding-top: 1%;
          margin: 0 auto;
        gap: 2%;
        max-height: 66%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        margin-top: 62%;
        padding-bottom: 9%;
  }
         @media (min-width: 1023px) {
        padding-top: 1%;
          margin: 0 auto;
        gap: 2%;
        max-height: 66%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        margin-top: 41%;
        padding-bottom: 9%;
         }
@media (min-width: 1240px) {
display: flex;
        width: 1240px;
        margin: 0 auto;
        gap: 2%;
        max-height: 100%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        margin-top: 1%;
        padding-bottom: 9%;
}


`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  max-width: 310px;
  padding: 5px;
  //  background-color: rgba(249, 249, 249, 0.28);
  // backdrop-filter: blur(10px);
  border-radius: 20px;

  @media (max-width: 768px) {
    // animation: ${move} 15s linear infinite; 
  }

   @media (min-width: 769px) {
height: 100vh;
     transition: background 1.9s ease-in-out;


   
   
   }
`;