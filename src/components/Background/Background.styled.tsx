import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 52%;
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
    height: 70%;
    background: linear-gradient(to bottom, transparent, 60%, #01283c);
  }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  bottom: 7%;
  left: 4%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  transform: none;
  opacity: 1;

  h1 {
    // font-size: 3em;
    // margin-bottom: 20px;
  }

  p {
    // font-size: 1.5em;
  }

  @media (min-width: 768px) {
    bottom: 6%;
    // transform: translate(-50%, -50%);
  }
  @media (min-width: 1439px) {
   bottom: -1%;
  }
`;

export const TitleHome = styled.h1`
  font-family: 'Proxima', sans-serif;
  text-align: start;
  display: flex;
  font-weight: 100;
  letter-spacing: -0.035em;
  margin: 0 0 0.5em;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1;

  @media (min-width: 767px) {
    font-size: 3.5rem;
    max-width: 80%;
  }
  @media (min-width: 1439px) {
    font-size: 4.5rem;
  }
`;

// export const TextHome = styled.p`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: 'Right Grotesk';
//   font-weight: 900;
//   font-size: 16px;
//   line-height: 1.1875;
//   color: #1976d2;
//   padding: 5px 20px 10px 5px;
//   text-align: center;
//   flex-direction: column;
// `;

export const ButtonDown = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  transition-delay: 0.8s;
  text-align: center;
  font-weight: bold;
  background: #1e90ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ArrowWrapper = styled.div`
  display: block;
  -webkit-animation: ${pulse} 2s infinite;
  animation: ${pulse} 2s infinite;
  transition-timing-function: ease;
  cubic-bezier(.175,.885,.32,1.275);
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const TextHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SlideText = styled.div`
  position: absolute;
  bottom: 90px;
  left: 40px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  width: 300px;

  @media screen and (min-width: 769px) {
    bottom: 32px;
    left: 400px;
    font-size: 24px;
  }

  @media screen and (min-width: 1240px) {
    bottom: 132px;
    left: 400px;
    font-size: 24px;
  }
`;

export const SlideTitel = styled.div`
  position: absolute;
  bottom: 170px;
  left: 40px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;

  @media screen and (min-width: 769px) {
    bottom: 70px;
    left: 40px;
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    bottom: 170px;
    left: 400px;
    font-size: 34px;
  }

  @media screen and (min-width: 1240px) {
    bottom: 270px;
    left: 400px;
    font-size: 34px;
  }
`;
