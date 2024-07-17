import styled, { keyframes } from 'styled-components';
import bg from '../../assets/image/product-section-4_-2380x850-2.jpg';
// Define the keyframes for the pulse animation
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

export const TitleHome = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1976d2;
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 44px;
  letter-spacing: 0.01em;
`;

export const TextHome = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 16px;
  line-height: 1.1875;
  color: #1976d2;
  padding: 5px 20px 10px 5px;
  text-align: center;
  flex-direction: column;
`;

export const ButtonDown = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  transition-delay: 0.8s;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
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
  color: #ff7f50;
`;

export const TextHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-bottom: 40px;
  // padding-top: 30px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 20vh;
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
