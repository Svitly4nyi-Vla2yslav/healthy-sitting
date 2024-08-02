import React from 'react';
import ContentHomePage from '../../components/ContentHomePage/ContentHomePage';
import { Container } from './HomePage.styled';
const Background = React.lazy(
  () => import('../../components/Background/Background')
);
const ITgame = React.lazy(() => import('../../components/ITsection/ITgame'));
const ITswiper = React.lazy(
  () => import('../../components/ITsection/ITswiper')
);
const HelpCards = React.lazy(() => import('../../components/HelpUs/HelpCards'));
const Partners = React.lazy(() => import('../../components/Partners/Partners'));
const News = React.lazy(() => import('../../components/News/News'));
const Feedback = React.lazy(() => import('../../components/Feedback/Feedback'));

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <ContentHomePage />
      <Container id="/project">
        <ITgame />
        <ITswiper />
      </Container>
      <HelpCards />
      <Partners />
      <News />
      <Feedback />
    </>
  );
};

export default Home;
