import React, { useEffect } from 'react';
import {
  ContainerStatistic,
  NumberLarge,
  TitelH3,
  Wrapper,
  TextSmoll
} from './HomeComponent.styled';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { SwiperCub } from './Swiper';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation(); // Use the translation hook

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Wrapper data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
      <ContainerStatistic data-aos="zoom-in" data-aos-delay="300">
        <TitelH3 data-aos="zoom-in" data-translate="projectTitle">
          {t('HomeComponent.projectTitle')}
        </TitelH3>

        <NumberLarge data-translate="Our Goal">
          {t('HomeComponent.goalAmount')}
        </NumberLarge>

        <TextSmoll data-translate="Currently We Have">
          {t('HomeComponent.currentAmount')}
        </TextSmoll>
      </ContainerStatistic>
  <SwiperCub/>
    </Wrapper>
  );
};

export default HomeComponent;
 

{/* <Link to={'/contact'}>
        <DonatButton data-translate="orderButton">
          {t('HomeComponent.orderButton')}
        </DonatButton>
      </Link> */}