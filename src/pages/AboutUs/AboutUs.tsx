import React from 'react';
// import { Container } from '../HomePage/HomePage.styled'
import { Block, Container, Title } from '../ProjectPage/ProjectPage.styled';
import { ContainerAbout } from './AboutUs.styled';

const AboutUs: React.FC = () => {
  return (
    <ContainerAbout>
      <Container>
        <Block>
          <Title>About 😀</Title>
        </Block>
      </Container>
    </ContainerAbout>
  );
};

export default AboutUs;
