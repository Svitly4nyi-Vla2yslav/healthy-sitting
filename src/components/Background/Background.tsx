import React, { useEffect } from 'react';

import Video from '../../assets/image/bg1.webm';

import { Link } from 'react-scroll';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// Import required modules

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from 'react-i18next';
import {
  ArrowWrapper,
  ButtonDown,
  ContentOverlay,
  TextHomeContainer,
  TitleHome,
  VideoContainer,
} from './Background.styled';

const Background: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div
      id="/home"
      // data-aos="fade-right"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      style={{ marginTop: 76 }}
    >
      <VideoContainer
        style={{
          width: '100%',
        }}
      >
        <video autoPlay loop muted style={{}}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      <ContentOverlay>
        <TitleHome>{t('Background.slide1Text')}</TitleHome>
        <TextHomeContainer>
          <Link to="video" smooth={true} duration={1000}>
            <ButtonDown>
              <ArrowWrapper>
                <KeyboardDoubleArrowDownIcon style={{ fontSize: 50 }} />
              </ArrowWrapper>
            </ButtonDown>
          </Link>
        </TextHomeContainer>
      </ContentOverlay>
    </div>
  );
};

export default Background;
