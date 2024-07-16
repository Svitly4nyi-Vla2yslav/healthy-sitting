import styled, { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Chelsea+Market&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: black;
    font-weight: 400;
    font-style: normal;
    font-family: "Chelsea Market", system-ui;
    font-size: 34px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Intro = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
  bottom: auto;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0000;
`;

export const IntroH1 = styled.h1`
  font-size: 40px;
  font-family: "Beth Ellen", cursive;
`;

export const IntroP = styled.p`
  font-size: 60px;
  font-family: "Chelsea Market", system-ui;
  font-weight: bolder;
`;

export const Content = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Section = styled.section<{ background?: string }>`
  width: 100%;
  height: 100vh;
  ${(props) => props.background && css`
    background-image: url(${props.background});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: opacity 0.5s ease;
  `}
`;

export const GradientSection = styled(Section)`
  height: 50vh;
`;

export const Test = styled.div`
  position: relative;
  color: white;
  top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 45px;
  color: #ff9605c4;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  position: relative;
  z-index: 1;
`;
