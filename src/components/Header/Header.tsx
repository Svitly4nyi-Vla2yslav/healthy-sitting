import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

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

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px' });
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <HeaderContainer style={{ position: 'fixed', top: 0 }}>
      <Navigation>
        <IconWrapper data-aos="zoom-in">
          {' '}
          <Link to="/home">
            <ImageLogo src={Logo} alt="Logo" />
          </Link>
        </IconWrapper>
        <Link to="/contact">
          <DonatButton style={{ margin: 0, marginRight: 10 }}>
            Order
          </DonatButton>
        </Link>
        {isMobile ? (
          <MenuButton />
        ) : (
          <>
            <StyledLink to="/home" data-aos="fade-down" data-aos-delay="300">
              HOME
            </StyledLink>
            <StyledLink to="/about" data-aos="fade-up" data-aos-delay="400">
              ABOUT
            </StyledLink>
            <StyledLink to="/project" data-aos="fade-down" data-aos-delay="500">
              PROJECT
            </StyledLink>
            <StyledLink to="/rewards" data-aos="fade-up" data-aos-delay="600">
              REWARDS
            </StyledLink>
            <StyledLink to="/contact" data-aos="fade-down" data-aos-delay="700">
              CONTACT
            </StyledLink>
          </>
        )}
      </Navigation>
    </HeaderContainer>
  );
};
