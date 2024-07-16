import styled from "styled-components";

export const OurContactsContainer = styled.div`
display: flex;
width: 100%;
margin: 0 auto;
margin-bottom: 100px;

`;

export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
`;

export const ContactImage = styled.img`
width: 300px;

`;

export const ContactImageLogo = styled.img`
min-width: 300px;
// background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(30px); /* ефект blur */
  border-radius: 100px;
  max-width: 500px;
`;

export const NameTitel = styled.h3`
font-family: 'Roboto';
font-size: 28px;
text-align: center;
border-bottom: 1px solid #00baff;
font-weight: 900;
padding-bottom: 5px;
font-weight: bold;
margin-bottom: 5px;

`
export const InfoText = styled.p`

`;

export const WrapperEmail = styled.div`
backdrop-filter: blur(30px); /* ефект blur */
  border-radius: 100px;
  padding: 20px;
`;

export const TextLinks = styled.p`
text-align: center;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding: 10px;
`;

export const WrapperSocial = styled.div`
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