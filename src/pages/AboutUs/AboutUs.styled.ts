import styled from "styled-components";
import palett from "../../palette/palette"

export const ContainerAbout = styled.div`
padding: 90px 20px 30px 20px; 
`;

export const ContainerPage = styled.div`
padding-bot
 width: 100%;
margin: 0 auto;

`;

// ! 1 page >>>>>>>>>>>>>>>
export const AboutContainerLogo = styled.div`

`;

export const ImageAngel = styled.img`
// margin-top: 50px;
`;

export const AboutTitel = styled.h2`
color: ${palett.colors.white};
font-family: 'Roboto';
font-size: 20px;
text-align: center;

`;



// ! 2 page  >>>>>>>>>>>>>>>

export const TitleProblem = styled.h3`
color: ${palett.colors.white};
font-family: 'Roboto';
font-size: 18px;
text-align: center;
padding-top: 50px;
`;

export const ProblemContainer = styled.div`
padding: 30px 20px; 
 width: 100%;
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
transition: box-shadow 0.9s ease,
  color 0.9s,
text-shadow 0.9s;

 &:hover,
  &:focus {
  box-shadow: 0 0 20px #00baff;
  color: #00baff;}
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
`;

export const TextSolution = styled.p`
font-family: 'Roboto';
font-weight: 600;
font-size: 16px;
text-align: center;
line-height: 1.1875;
`;

export const TextSolutionSmall = styled.p`
font-family: 'Roboto';
font-size: 12px;
text-align: start;
padding: 5px;
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

`;

export const TextFeaturesLarge = styled.p`
font-family: 'Roboto';
font-size: 19px;
text-align: start;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
margin-bottom: 500px;
`;

// ! 5 page >>>>>>>>>>>>>>>>>>>>>>>

export const NumberTitle = styled.p`

`;

export const TextBenefits = styled.p`

`;

export const ContainerBenefits = styled.div`

`;

export const ImageBenefits = styled.img`

`;

export const Border = styled.span`

`;

// ! 6 page >>>>>>>>>>>>>>>>>>>>>>>



