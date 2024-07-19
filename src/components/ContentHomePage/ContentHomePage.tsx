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

const ContentHomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

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
            <h1 data-aos="zoom-in" data-translate="Your Content Here">
              Your Content Here
            </h1>
            <p
              data-aos="zoom-in-down"
              data-translate="Your description or other content here."
            >
              Your description or other content here.
            </p>
            <ListCard data-aos="zoom-in" data-aos-delay="500">
              <Card>
                <Image src={CardFirst} alt="Card 1" />
                <CardTitel data-translate="Card Title 1">
                  Card Title 1
                </CardTitel>
                <CardText data-translate="Card description 1">
                  Card description 1
                </CardText>
              </Card>
              <Card>
                <Image src={CardSecond} alt="Card 2" />
                <CardTitel data-translate="Card Title 2">
                  Card Title 2
                </CardTitel>
                <CardText data-translate="Card description 2">
                  Card description 2
                </CardText>
              </Card>
              <Card>
                <Image src={CardThird} alt="Card 3" />
                <CardTitel data-translate="Card Title 3">
                  Card Title 3
                </CardTitel>
                <CardText data-translate="Card description 3">
                  Card description 3
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
