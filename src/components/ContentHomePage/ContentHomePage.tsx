import React, { useEffect } from 'react';
import { CardTitel, Video, ListCard } from './ContentHomePage.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

import VideoFirst from '../../assets/video/painBack.webm';
import VideoSecond from '../../assets/video/technology.webm';
import VideoThird from '../../assets/video/developer.webm';
import HomeComponent from './HomeComponent';
import { useTranslation } from 'react-i18next';
import { Card, Container, Titel, Wrapper } from './ContentHomePage.styled';

const ContentHomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const { t } = useTranslation();

  return (
    <>
        <Container id='video'>
        <Wrapper data-aos="fade-up">
          <Titel>{t('ContentHomePage.mainSectionTitle')}</Titel>
        </Wrapper>
        <ListCard data-aos="flip-left">
          <Card>
            <Video src={VideoFirst}  autoPlay loop muted playsInline />
            <CardTitel>{t('ContentHomePage.card1Title')}</CardTitel>
          </Card>
          <Card>
            <Video src={VideoSecond} autoPlay loop muted playsInline />
            <CardTitel>{t('ContentHomePage.card2Title')}</CardTitel>
          </Card>
          <Card>
            <Video src={VideoThird}  autoPlay loop muted playsInline />
            <CardTitel>{t('ContentHomePage.card3Title')}</CardTitel>
          </Card>
        </ListCard>
      </Container>

      <HomeComponent />
    </>
  );
};

export default ContentHomePage;

