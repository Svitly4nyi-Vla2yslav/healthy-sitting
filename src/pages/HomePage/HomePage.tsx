import React from 'react';
import { Container } from './HomePage.styled';

import ContentHomePage from '../../components/ContentHomePage/ContentHomePage';
import Background from '../../components/Background/Background';
// import HelpCards from '../../components/HelpUs/HelpCards';
import ITgame from '../../components/ITsection/ITgame';
import ITswiper from '../../components/ITsection/ITswiper';
import News from '../../components/News/News';
import Partners from '../../components/Partners/Partners';
import Feedback from '../../components/Feedback/Feedback';

// const ContentHomePage = React.lazy(() => import('../../components/ContentHomePage/ContentHomePage'));
// const Background = React.lazy(() => import('../../components/Background/Background'));
// const HelpCards = React.lazy(() => import('../../components/HelpUs/HelpCards'));
// const ITgame = React.lazy(() => import('../../components/ITsection/ITgame'));
// const ITswiper = React.lazy(() => import('../../components/ITsection/ITswiper'));
// const News = React.lazy(() => import('../../components/News/News'));
// const Partners = React.lazy(() => import('../../components/Partners/Partners'));
// const Feedback = React.lazy(() => import('../../components/Feedback/Feedback'));

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <ContentHomePage />
      <Container id="/project">
        <ITgame />
        <ITswiper />
      </Container>
      {/* <HelpCards /> */}
      <Partners />
      <News />
      <Feedback />
    </>
  );
};

export default Home;
