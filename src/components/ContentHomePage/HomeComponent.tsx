import React, { useEffect } from 'react';
import {
  ContainerStatistic,
  NumberLarge,
  TitelH3,
  Wrapper,
  TextSmoll,
  CardStatistic,
  DonatButton,
} from './HomeComponent.styled';
import { ContentOverlay, VideoContainer } from './ContentHomePage.styled';
import Video from '../../assets/image/RGB-4.mp4';

import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Wrapper data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ContentOverlay>
          <TitelH3 data-aos="zoom-in">
            Bring a creative project to life.
          </TitelH3>
          <ContainerStatistic data-aos="zoom-in" data-aos-delay="300">
            <CardStatistic>
              <NumberLarge>€ 2 000 000 </NumberLarge>
              <TextSmoll>OUR GOAL</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>€ 16 547</NumberLarge>
              <TextSmoll>CURRENTLY WE HAVE</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>
                15 + <br />
              </NumberLarge>
              <TextSmoll>OUR INVESTORS</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>€ 1 983 453</NumberLarge>
              <TextSmoll>WE HAVE TO COLLECT</TextSmoll>
            </CardStatistic>
          </ContainerStatistic>
          <Link to={'/contact'}>
            <DonatButton>Order</DonatButton>
          </Link>
        </ContentOverlay>
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeComponent;
