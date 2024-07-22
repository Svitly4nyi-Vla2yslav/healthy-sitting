import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import {
  HeaderContainer,
  IconWrapper,
  Navigation,
  StyledLink,
} from './Header.styled';
import Logo from '../../assets/image/logo_Systems.png';
import { ImageLogo } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { MenuButton } from './MenuButton';
import { DonatButton } from '../ContentHomePage/HomeComponent.styled';
import LanguageMenu from '../LanguageSelector/LanguageSelector';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0 }}>
      <Navigation>
        <IconWrapper data-aos="zoom-in">
          <Link to="/home">
            <ImageLogo src={Logo} alt="Logo" />
          </Link>
        </IconWrapper>
        <LanguageMenu/>
        <Link to="/contact">
          <DonatButton data-aos="fade-right" style={{ margin: 0, marginRight: 10 }}>
            {t('Header.order')}
          </DonatButton>
        </Link>
        {isMobile ? (
          <MenuButton />
        ) : (
          <>
            <StyledLink to="/home" data-aos="fade-down" data-aos-delay="300">
              {t('Header.home')}
            </StyledLink>
            <StyledLink to="/about" data-aos="fade-up" data-aos-delay="400">
              {t('Header.about')}
            </StyledLink>
            <StyledLink to="/project" data-aos="fade-down" data-aos-delay="500">
              {t('Header.project')}
            </StyledLink>
            <StyledLink to="/rewards" data-aos="fade-up" data-aos-delay="600">
              {t('Header.rewards')}
            </StyledLink>
            <StyledLink to="/contact" data-aos="fade-down" data-aos-delay="700">
              {t('Header.contact')}
            </StyledLink>
          </>
        )}
      </Navigation>
    </HeaderContainer>
  );
};
