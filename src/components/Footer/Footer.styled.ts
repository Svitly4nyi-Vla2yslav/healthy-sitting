import styled from "styled-components";
import example from '../../assets/image/Terminator-product-section_8-2380x850-3.jpg';

export const FooterContainer = styled.div`
border-top: 1px solid #00baff;
padding: 0 ;
margin: 0 auto;
width: 100%;
height: 100%;
background-image: url(${example});
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  text-align: start;

  @media screen and (min-width: 768px){
    text-align: center;
    display: flex;
        flex-direction: row;
        justify-content: space-between;
  }
`;

export const FooterList = styled.div`
padding: 20px 20px 50px 20px; 

`;

export const FooterItemTitel = styled.h2`
font-family: 'Roboto';
font-size: 20px;
text-align: start;
font-weight: bold;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
transition: shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  shadow: 0 0 20px #00baff;
  color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`;

export const FooterItemText = styled.p`
text-align: center;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding-bottom: 10px;
`;

export const FooterLink = styled.p`
font-family: 'Roboto';
font-size: 12px;
text-align: start;
padding: 5px 5px;
display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    

    transition: shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  shadow: 0 0 20px #00baff;
  color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #ff7f50,
      0 0 20px #ff7f50,
      0 0 40px #ff7f50,
      0 0 80px #ff7f50;
  }
`;
export const WrapperSocialLink = styled.div`
margin-bottom: 30px;
display: flex;
justify-content: center;
`;

export const SocialLink = styled.a`
margin: 5px;
padding: 15px;
  transition: transform 0.3s ease, opacity 0.3s ease;
    &:focus,
    &:hover {
    transform: scale(2.1); /* Scale up on hover */
    opacity: 1.8; /* Reduce opacity on hover */
  }
  `;
export const CopyrightContainer = styled.div`

`;

export const CopyText = styled.p`

`;

export const CopyLink = styled.a`

`;