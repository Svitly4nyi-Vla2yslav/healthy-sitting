import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Block, Container, Title } from '../ProjectPage/ProjectPage.styled';
import { ContainerAbout } from './AboutUs.styled';

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <ContainerAbout>
      <Container>
        <Block>
          <Title data-aos="zoom-in">About 😀</Title>
        </Block>
      </Container>
    </ContainerAbout>
  );
};

export default AboutUs;