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
import { useTranslation } from 'react-i18next';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();  // Use the translation hook

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
          <TitelH3 data-aos="zoom-in" data-translate="projectTitle">
            {t('HomeComponent.projectTitle')}
          </TitelH3>
          <ContainerStatistic data-aos="zoom-in" data-aos-delay="300">
            <CardStatistic>
              <NumberLarge data-translate="goalAmount">
              € 2 000 000
              </NumberLarge>
              <TextSmoll data-translate="Our Goal">
                {t('HomeComponent.goalAmount')}
              </TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="currentAmount">
              € 16 547
              </NumberLarge>
              <TextSmoll data-translate="Currently We Have">
                {t('HomeComponent.currentAmount')}
              </TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="numberOfInvestors">
              15 + <br />
              </NumberLarge>
              <TextSmoll data-translate="Our Investors">
                {t('HomeComponent.numberOfInvestors')}
              </TextSmoll>
            </CardStatistic>
            <CardStatistic>
              <NumberLarge data-translate="amountToCollect">
              € 1 983 453
              </NumberLarge>
              <TextSmoll data-translate="We Have to Collect">
                {t('HomeComponent.amountToCollect')}
              </TextSmoll>
            </CardStatistic>
          </ContainerStatistic>
          <Link to={'/contact'}>
            <DonatButton data-translate="orderButton">
              {t('HomeComponent.orderButton')}
            </DonatButton>
          </Link>
        </ContentOverlay>
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeComponent;
