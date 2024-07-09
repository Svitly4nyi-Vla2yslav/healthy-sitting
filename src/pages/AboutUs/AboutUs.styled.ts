import styled from "styled-components";
import palett from "../../palette/palette"

export const ContainerAbout = styled.div`
text-align: center;
// padding: 90px 20px 30px 20px; 
`;

export const ContainerPage = styled.div`
text-align: center;
 width: 100%;
margin: 0 auto;
margin-bottom: 70px;
max-width: 768px;
padding: 90px 20px 30px 20px; 

`;

// ! 1 page >>>>>>>>>>>>>>>
export const AboutContainerLogo = styled.div`

`;

export const ImageAngel = styled.img`
// margin-top: 50px;
max-width: 280px;
`;

export const AboutTitel = styled.h2`
color: ${palett.colors.white};
font-family: 'Roboto';
font-size: 20px;
text-align: center;
font-weight: bold;
  background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

`;



// ! 2 page  >>>>>>>>>>>>>>>

export const TitleProblem = styled.h3`
color: ${palett.colors.white};
font-family: 'Roboto';
font-size: 18px;
text-align: center;
padding-top: 50px;
font-weight: bold;
  background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  max-width: 660px;
  margin: 0 auto;
`;

export const ProblemContainer = styled.div`
padding: 30px 20px; 
//  width: 100%;
max-width: 768px;
margin: 0 auto;

`;

export const ProblemText = styled.p`
color: ${palett.colors.white};
font-family: 'Roboto';
font-size: 12px;
text-align: center;
padding: 20px;
border: 1px solid #00baff;
margin: 20px;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
transition: box-shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  box-shadow: 0 0 20px #00baff;
  color: #00baff;
  }
`;

export const IconProblem = styled.img`
width: 120px;
`;
// ! 3 page >>>>>>>>>>>>>>>>>>

export const TitleSolution = styled.h3`
font-family: 'Roboto';
font-size: 28px;
text-align: center;
padding-bottom: 20px;
font-weight: 900;
font-weight: bold;
  background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TextSolution = styled.p`
font-family: 'Roboto';
font-weight: 600;
font-size: 16px;
text-align: center;
line-height: 1.1875;
 font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TextSolutionSmall = styled.p`
font-family: 'Roboto';
font-size: 12px;
text-align: start;
padding: 5px;
 font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TextSolutionContainer = styled.div`
padding-top: 10px;
// margin-bottom: 50px;
`;

// ! 4 page >>>>>>>>>>>>>>>>>>

export const TitleFeatures = styled.h3`
font-family: 'Roboto';
font-size: 28px;
text-align: center;
padding-bottom: 20px;
font-weight: 900;
margin-top: 70px;
font-weight: bold;
  background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ImageFeatures = styled.img`

`;

export const ContainerFeatures = styled.div`

`;

export const TextFeatures = styled.p`
font-family: 'Roboto';
font-weight: 600;
font-size: 16px;
text-align: center;
line-height: 1.1875;
padding: 10px;
border-bottom: 1px solid #00baff;
max-width: 320px;
    margin: 0 auto;
     font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TextFeaturesLarge = styled.p`
font-family: 'Roboto';
font-size: 19px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
margin-bottom: 50px;
max-width: 320px;
margin: 0 auto;
 font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

// ! 5 page >>>>>>>>>>>>>>>>>>>>>>>

export const NumberTitle = styled.p`
font-family: 'Roboto';
  font-size: 58px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  padding : 15px;
`;

export const TextBenefits = styled.p`
font-family: 'Roboto';
text-align: start;
 font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ContainerBenefits = styled.div`
display: flex;
align-items: center;
max-width: 768px;
border-bottom: 1px solid #00baff;
margin: 0 auto;
padding: 20px;
`;

export const ImageBenefits = styled.img`
width: 280px;
display: flex;
    padding: 20px 0 20px 0;
`;

export const ImageContainer = styled.div`
display: flex;
margin: 0 auto;
width: 100%;
flex-direction: column;
    align-items: center;

`;

// ! 6 page >>>>>>>>>>>>>>>>>>>>>>>

export const CustomerImage = styled.img`
width: 58px;
margin-right: 30px;
`;



