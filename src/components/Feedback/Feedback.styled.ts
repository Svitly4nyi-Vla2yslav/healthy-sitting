
import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 150px auto;
  position: relative;
  background-color: #01cbe1;
  padding-bottom: 116vh;

  .swiper-slide {
  border-radius: 24px;
  padding: 24px;

}
`;

export const TextWraper = styled.div`
  text-align: center;
  margin: 0 2.5em;
  padding: 30px;
  width: 90%;
`;

export const TitelPartners = styled.h2`
  color: white;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  letter-spacing: -.035em;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 2.8rem;
  line-height: 1.1;
  width: 90%;
`;

export const TextPartners = styled.p`
  color: #003755;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  height: 100%;
  padding-top: 52px;
  line-height: 1.45;
  width: 90%;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 24px;
background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    color: #fff;
      transition: box-shadow 0.3s ease; /* Додаємо плавний перехід для тіні */

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9); /* Додаємо тінь при ховері та фокусі */
    outline: none; /* Забираємо стандартну рамку при фокусі */
  }
  
`;

export const SlideContent = styled.div`
position: relative;
    bottom: -2%;
    left: 1%;
    width: 100%;
    height: 54%;
    font-size: 16px;
    text-align: center;
    color: #01cbe1;
    /* border-top: 1px solid #01cbe1; */
    padding-bottom: 10px;
    padding-top: 10px;
    z-index: 222;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: start;

`;

// flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-start;
//     flex-wrap: nowrap;

export const Data = styled.span`
font-size: 14px;
border-bottom: 1px solid #01cbe1;
`;

export const SlideLink = styled.a`
  display: block;
  text-decoration: none;


`;

export const SlideBackground = styled.div<{ $backgroundimage: string }>`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.$backgroundimage});
  background-size: cover !important;
  background-position: center;
  z-index: -1;
     border-radius: 17px;
`;

export const CustomPrevButton = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`;

export const CustomNextButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  color: #003755;
`;
// “”