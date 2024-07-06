import styled from '@emotion/styled';
import 'normalize.css';
import { css } from '@emotion/react';
import Grotesk from "./assets/fonts/RightGrotesk-CompactBlack.ttf"
import BiroScript from "./assets/fonts/BiroScriptPlus-Bold.ttf"
import Messina from "./assets/fonts/MessinaSansMono-Black.ttf"
import Formular from "./assets/fonts/Formular-Medium.ttf"
import Roboto from "./assets/fonts/Roboto-Regular.ttf"
// import example from './assets/image/Terminator-product-section_8-2380x850-3.jpg';

export const AppWrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
`;

export const GlobalStyles = css`

:root {
  --font-family: "Right Grotesk", sans-serif;
  --second-family: "Messina Sans Mono", sans-serif;
  --third-family: "Biro Script Plus", sans-serif;
  --font3: "Formular", sans-serif;
  --font4: "Roboto", sans-serif;
  --textColorWhite: #fff;
}
@font-face {
  font-family: 'Roboto';
  // src: url(${Roboto}) format('truetype');
}

@font-face {
  font-family: 'Right Grotesk';
  src: url(${Grotesk}) format('truetype');
}

@font-face {
  font-family: 'Messina Sans Mono';
  src: url(${Messina}) format('truetype');
}

@font-face {
  font-family: 'Biro Script Plus';
  src: url(${BiroScript}) format('truetype');
}

@font-face {
  font-family: 'Formular';
  src: url(${Formular}) format('truetype');
}

@keyframes move {
  from {
    tranform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
  }
  body {
 font-family: 'Roboto', sans-serif;
  background-color: #000;
  background-size: auto 100%;
  background-position: center center;
  background-repeat: cover;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #111111;
  width: 100%;
  margin: 0;
  transition-duration: 300ms;
  overflow: hidden;
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }
  button:focus,
  button:hover {
    // background-color: lightgray; 
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.6); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
    text-decoration: none;
    color: #FFFFFF;
  }
 

  img {
    cursor: pointer;
    transition-duration: 300ms;
  }



  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
 {
  font-family: 'Messina Sans Mono';
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  html {
    overflow-x: hidden;
    // scroll-behavior: smooth;
   
    }
 
`;