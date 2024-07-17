import React, { useEffect} from 'react';
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

const ContentHomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
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
          <h1 data-aos="zoom-in">Your Content Here</h1>
          <p data-aos="zoom-in-down">Your description or other content here.</p>
          <ListCard>
            <Card data-aos="zoom-in-right">
              <Image src={CardFirst} alt="card-1" />
              <CardTitel> Titel-1</CardTitel>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                nemo.
              </CardText>
            </Card>
            <Card data-aos="zoom-out">
              <Image src={CardSecond} alt="Card-2" />
              <CardTitel> Titel-2</CardTitel>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                velit?
              </CardText>
            </Card>
            <Card data-aos="zoom-in-left">
              <Image src={CardThird} alt="Card-3" />
              <CardTitel> Titel-3</CardTitel>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, odio.
              </CardText>
            </Card>
        
          </ListCard>
        </ContentOverlay>
      </VideoContainer>
    </MainSection>
  );
};

export default ContentHomePage;
