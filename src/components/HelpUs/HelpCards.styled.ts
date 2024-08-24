import styled from "styled-components";
import { gradientAnimation, pulse } from "../ContentHomePage/HomeComponent.styled";

export const SectionHelp = styled.section`
width: 100%;
height: 100%;
margin: 0 auto;
background: #01cbe1;
padding: 15px;
  @media screen and (min-width: 768px){
  padding: 80px;
  }
`;

export const TextWrapper = styled.div`
text-align: center;
margin: 0 auto 2.5em;
`;
export const TitelHelp = styled.h2`
    font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
`;

export const TextHelp = styled.p`
    font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 auto;
        color: #003755;
    height: 100%;
    padding-top: 52px;
    line-height: 1.45;
`;

export const CardContainer = styled.ul`
display: flex;
flex-direction: column;
    padding: 100px 10px 10px;
margin: 0 auto;
    padding: 0 auto;
    // list-style: none;
    margin: -10px;
    gap: 100px;
    flex-wrap: wrap;
    align-items: center;
     @media screen and (min-width: 900px){
    display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        gap: 1%;
max-width: 1180px;
margin: 0 auto;

     }

@media screen and (min-width: 1023px){
 display: flex;

 }
`;

export const CardHelpUs = styled.li`
position: relative;
    display: flex;
    padding: 70px 10px 10px;
    background: #f2f5f6;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border-radius: 10px;
    max-width: 370px;
    height: 64vh;
      transition: box-shadow 0.3s ease; /* Додаємо плавний перехід для тіні */

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9); /* Додаємо тінь при ховері та фокусі */
    outline: none; /* Забираємо стандартну рамку при фокусі */
  }
`;

export const Image = styled.div`
position: absolute;
top: -85px;
left: 50%;
overflow: hidden;
margin: 0 0 0 -75px;
font-size: 8.2rem;
color: #fff;
width: 150px;
height: 150px;
border-radius: 50%;
background: #f2f5f6;
 background: linear-gradient(45deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  border: none;
  // border-radius: 30px;
  cursor: pointer;
//  margin: 0 auto;
  // margin-top: 20px;
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
`;



export const CardTitel = styled.h3`
vertical-align: inherit;
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 1.15;
    text-align: center;
    color: #01cbe1;
    padding-top: 5%;

   span {
   color: red;
   display: inline-block;
    animation: ${pulse} 0.6s infinite;
  }
`;

export const CardText = styled.p`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 25px 25px;
    color: #003755;
     border-radius: 10px;
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    text-align: center;
    margin-top: 10%;
`;

export const IconWrapper = styled.a`
width: 100%;
display: flex;
flex-direction: row;
    align-items: center;
   justify-content: center;
   gap: 7%;
   padding: 10px;
   width: 80%;
    margin-top: 15%;

  transition: box-shadow 0.3s ease; 

  button,
  img {
  font-family: "Proxima Nova", sans-serif;
    font-weight: 700;
  width: 50%;
  border: 1px solid #01cbe1;
  border-radius: 18px;
  overflow: hidden;
  height: 7vh;
  object-fit: cover;
   text-transform: uppercase;
  //  background: #fff;

      transition: box-shadow 0.6s ease; 
  &:hover,
  &:focus {
   background-position: 100% 0;
    box-shadow: 0 0 20px rgba(0, 186, 255, 0.7);
  }

  
  }
`;
export const IconText = styled.p`
    color: #003755;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
`;

export const WrapperSocialLink = styled.div`
margin-bottom: 15px;
display: flex;
justify-content: space-between;
border-top: 1px solid #01cbe1;
width: 30vh;
padding-top: 20px;

`;

export const SocialLink = styled.a`
padding: 2%;
  transition: transform 0.3s ease, opacity 0.3s ease;
    &:focus,
    &:hover {
    transform: scale(2.1); /* Scale up on hover */
    opacity: 1.5; /* Reduce opacity on hover */
  }
  `;
