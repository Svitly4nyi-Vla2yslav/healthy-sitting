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
          <TitelH3 data-aos="zoom-in" data-translate="Creative Project">
            Bring a creative project to life.
          </TitelH3>
          <ContainerStatistic data-aos="zoom-in" data-aos-delay="300">
            <CardStatistic>
              <NumberLarge data-translate="Goal Amount">
                € 2 000 000
              </NumberLarge>
              <TextSmoll data-translate="Our Goal">OUR GOAL</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="Current Amount">
                € 16 547
              </NumberLarge>
              <TextSmoll data-translate="Currently We Have">
                CURRENTLY WE HAVE
              </TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="Number of Investors">
                15 + <br />
              </NumberLarge>
              <TextSmoll data-translate="Our Investors">
                OUR INVESTORS
              </TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="Amount to Collect">
                € 1 983 453
              </NumberLarge>
              <TextSmoll data-translate="We Have to Collect">
                WE HAVE TO COLLECT
              </TextSmoll>
            </CardStatistic>
          </ContainerStatistic>
          <Link to={'/contact'}>
            <DonatButton data-translate="Order Button">Order</DonatButton>
          </Link>
        </ContentOverlay>
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeComponent;
