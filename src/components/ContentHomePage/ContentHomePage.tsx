import React, { useEffect } from 'react';
import {
  Card,
  CardText,
  CardTitel,
  ContentOverlay,
  Image,
  ListCard,
  MainSection,
  VideoContainer,
} from './ContentHomePage.styled';
import Video from '../../assets/image/airbender.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CardFirst from '../../assets/image/card-1.jpg';
import CardSecond from '../../assets/image/card-2.jpg';
import CardThird from '../../assets/image/card-3.jpg';
import HomeComponent from './HomeComponent';
import { useTranslation } from 'react-i18next';


const ContentHomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const { t } = useTranslation();

 return (
    <>
      <MainSection
        id="video"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        <VideoContainer>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ContentOverlay>
            <h1
              data-aos="zoom-in"
              data-translate="mainSectionTitle"
            >
              {t('ContentHomePage.mainSectionTitle')}
            </h1>
            <p
              data-aos="zoom-in-down"
              data-translate="mainSectionDescription"
            >
              {t('ContentHomePage.mainSectionDescription')}
            </p>
            <ListCard data-aos="zoom-in" data-aos-delay="500">
              <Card>
                <Image src={CardFirst} alt="Card 1" />
                <CardTitel data-translate="card1Title">
                  {t('ContentHomePage.card1Title')}
                </CardTitel>
                <CardText data-translate="card1Description">
                  {t('ContentHomePage.card1Description')}
                </CardText>
              </Card>
              <Card>
                <Image src={CardSecond} alt="Card 2" />
                <CardTitel data-translate="card2Title">
                  {t('ContentHomePage.card2Title')}
                </CardTitel>
                <CardText data-translate="card2Description">
                  {t('ContentHomePage.card2Description')}
                </CardText>
              </Card>
              <Card>
                <Image src={CardThird} alt="Card 3" />
                <CardTitel data-translate="card3Title">
                  {t('ContentHomePage.card3Title')}
                </CardTitel>
                <CardText data-translate="card3Description">
                  {t('ContentHomePage.card3Description')}
                </CardText>
              </Card>
            </ListCard>
          </ContentOverlay>
        </VideoContainer>
      </MainSection>
      <HomeComponent />
    </>
  );
};

export default ContentHomePage;
