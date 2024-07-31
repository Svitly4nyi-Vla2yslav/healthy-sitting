import React from 'react';
import ContentHomePage from '../../components/ContentHomePage/ContentHomePage';
import Background from '../../components/Background/Background';
import { Container } from './HomePage.styled';
import { ITgame } from '../../components/ITsection/ITgame';
import { ITswiper } from '../../components/ITsection/ITswiper';
import HelpCards from '../../components/HelpUs/HelpCards';
import { Partners } from '../../components/Partners/Partners';

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <ContentHomePage/>
      <Container>
        <ITgame/>
        <ITswiper/>
      </Container>
      <HelpCards/>
       <Partners/>
    </>
  );
};

export default Home;
