import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


export const ContainerProject = styled.div`
  //  width: 100%;
  // height: 100vh;

margin: 0 auto;
margin-top: 76px;

  @media (min-width: 768px) {
padding: 0, 30px, 0, 30px;
  }
  @media (min-width: 1439px) {
padding: 0, 80px, 0, 80px;
  }

`

export const Container = styled.div`
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
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
   height: 60%;
    background: linear-gradient(to bottom,
     transparent, 15%, #01283c);
  }
`;
export const Block = styled.div`
  position: absolute;
  bottom: 1%;
  left: 4%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  transform: none;
  opacity: 1;


  @media (min-width: 768px) {
    bottom: 2%;
    // transform: translate(-50%, -50%);
  }
  @media (min-width: 1439px) {
   bottom: 6%;
  }
`;
export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Proxima', sans-serif;
  text-align: start;
  display: flex;
  font-weight: 100;
  letter-spacing: -0.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1;
  border-radius: 10px;
    backdrop-filter: blur(20px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (min-width: 767px) {
    font-size: 3.5rem;
    max-width: 80%;
  }
  @media (min-width: 1439px) {
    font-size: 4.5rem;
  }
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  transition:
    color 0.3s,
     background 0.3s;
  display: block;
  &:hover,
  &:focus {
     background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  }
`;

export const SectionProject = styled.div`
//  width: 100%;
 
margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;

      @media (min-width: 768px) {
padding-left: 30px;
padding-right: 30px;
  }

    @media (min-width: 1024px) {
    height: 90vh;
  } 

  @media (min-width: 1439px) {
padding-left: 90px;
padding-right: 90px;
  }
`;

export const TitleAdaptation = styled.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    max-width: 450px;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 2px;
    background: currentcolor;
    width: 60%;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`;

export const TextAdaptation = styled.p`
font-size: 18px;
line-height: 1.4;
color: #fff;
font-family: "Proxima Nova", sans-serif;
    max-width: 450px;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`;

export const TitleOptimisation = styled.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: end;
    max-width: 450px;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: 2px;
    background: currentcolor;
    width: 60%;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`;

export const TextOptimisation = styled.p`
font-size: 18px;
line-height: 1.4;
color: #fff;
font-family: "Proxima Nova", sans-serif;
text-align: end;
max-width: 450px;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`;

export const InnovationSection = styled.section`
background: #ffffff;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
  
  } 

@media (min-width: 1439px) {

  }
`;

export const InnovationTitle = styled.h2`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: center;

       &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: currentcolor;
    text-align: center;
}

@media (min-width: 768px) {
font-size: 4.1rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`;

export const InnovationText = styled.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }
`;

export const TitleUnique = styled.h3`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    max-width: 450px;
    text-align: end;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 60%;
    height: 2px;
    background: currentcolor;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`;

export const TextUnique = styled.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
    max-width: 450px;
    text-align: end;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }
`;

export const TitleLargeScale = styled.h3`
font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    text-transform: uppercase;
    font-size: 2.8rem;
    line-height: 1.1;
    color: #01cbe1;
    position: relative;
    padding-top: 20px;
    text-align: center;
    // max-width: 450px;


       &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: currentcolor;
}

@media (min-width: 768px) {
font-size: 3.9rem;
  }

@media (min-width: 1024px) {
  padding-bottom: 30px;
  } 

@media (min-width: 1439px) {

  }
`;

export const TextLargeScale = styled.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`;

export const TextBoltLargeScale = styled.p`
font-size: 18px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
font-weight: 800;
text-align: center;
  
@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
  }

`;

export const TextLargeScaleBig = styled.p`
font-size: 20px;
line-height: 1.4;
color: #000;
font-family: "Proxima Nova", sans-serif;
font-weight: 900;
text-decoration: underline;
text-align: center;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
font-size: 20px;
  line-height: 1.6;
  text-align: center;
  } 

@media (min-width: 1439px) {
font-size: 24px;
line-height: 1.7;
 max-width: 650px;
 text-align: center;
  }
`;

export const WrapperText = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

@media (min-width: 768px) {

  }

@media (min-width: 1024px) {
  
  } 

@media (min-width: 1439px) {

  }

`;

export const VideoSchadow = styled.div`

`;
