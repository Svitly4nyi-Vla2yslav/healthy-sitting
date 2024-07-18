import React from 'react';
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

const HomeComponent: React.FC = () => {
  return (
    <Wrapper>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ContentOverlay>
          <TitelH3>Bring a creative project to life.</TitelH3>
          <ContainerStatistic>
            <CardStatistic>
              <NumberLarge>€ 2 000 000 </NumberLarge>
              <TextSmoll>OUR GOAL</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>€ 16 547</NumberLarge>
              <TextSmoll>CURRENTLY WE HAVE</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>15+</NumberLarge>
              <TextSmoll>OUR INVESTORS</TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge>€ 1 983 453</NumberLarge>
              <TextSmoll>WE HAVE TO COLLECT</TextSmoll>
            </CardStatistic>
          </ContainerStatistic>
          <DonatButton>Order</DonatButton>
        </ContentOverlay>
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeComponent;
