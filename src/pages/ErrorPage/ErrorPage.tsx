import React from 'react';
import { Wrapper } from '../../components/ContentHomePage/HomeComponent.styled';
import {
  ContentOverlay,
  VideoContainer,
} from '../../components/ContentHomePage/ContentHomePage.styled';
import Video from '../../assets/image/3249672-uhd_3840_2160_25fps.webm';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../../components/Timer/CountdownTimer';
import Subscribe from '../../components/EmailTicket/Subscribe';
import LanguageMenu from '../../components/LanguageSelector/LanguageSelector';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  const targetDate = new Date('2024-08-15T23:59:59');
  return (
    <Wrapper
      style={{
        height: '100%',
      }}
    >
      <VideoContainer
        style={{
          width: '100%',
          position: 'fixed',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ objectFit: 'cover', position: 'fixed' }}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      <ContentOverlay style={{ marginTop: 10 }}>
        <LanguageMenu />
        <h1 style={{ fontSize: '3.5em' }}>{t('ErrorPage.CommingSoon')}</h1>
        <p style={{ fontSize: '1.5em' }}>{t('ErrorPage.ThankYou')}</p>
        <Subscribe /> <CountdownTimer targetDate={targetDate} />
      </ContentOverlay>
    </Wrapper>
  );
};

export default ErrorPage;
