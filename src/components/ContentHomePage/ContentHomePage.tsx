import React, { useEffect } from 'react';
import { CardTitel, Image, ListCard } from './ContentHomePage.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CardFirst from '../../assets/image/card-1.jpg';
import CardSecond from '../../assets/image/card-2.jpg';
import CardThird from '../../assets/image/card-3.jpg';
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
        <Wrapper data-aos="fade-up"
        >
          <Titel>{t('ContentHomePage.mainSectionTitle')}</Titel>
        </Wrapper>
        <ListCard  data-aos="flip-left">
          <Card>
            <Image src={CardFirst} alt="1" />
            <CardTitel>{t('ContentHomePage.card1Title')}</CardTitel>
          </Card>
          <Card>
            <Image src={CardSecond} alt="2" />
            <CardTitel>{t('ContentHomePage.card2Title')}</CardTitel>
          </Card>
          <Card>
            <Image src={CardThird} alt="3" />
            <CardTitel>{t('ContentHomePage.card3Title')}</CardTitel>
          </Card>
        </ListCard>
      </Container>

      <HomeComponent />
    </>
  );
};

export default ContentHomePage;

{
  /* <MainSection
        id="video"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        <ContentOverlay>
          <h1 data-aos="zoom-in" data-translate="mainSectionTitle">
            {t('ContentHomePage.mainSectionTitle')}
          </h1>
        
          <ListCard data-aos="zoom-in" data-aos-delay="500">
            <Card>
              <Image src={CardFirst} alt="Card 1" />
              <CardTitel data-translate="card1Title">
                {t('ContentHomePage.card1Title')}
              </CardTitel>
            
            </Card>
            <Card>
              <Image src={CardSecond} alt="Card 2" />
              <CardTitel data-translate="card2Title">
                {t('ContentHomePage.card2Title')}
              </CardTitel>
           
            </Card>
            <Card>
              <Image src={CardThird} alt="Card 3" />
              <CardTitel data-translate="card3Title">
                {t('ContentHomePage.card3Title')}
              </CardTitel>
             
            </Card>
          </ListCard>
        </ContentOverlay>
      </MainSection> */
}
