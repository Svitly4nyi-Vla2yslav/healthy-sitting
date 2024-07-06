import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  HeaderContainer,
  IconWrapper,
  Navigation,
  StyledLink,
} from './Header.styled';
import Logo from '../../assets/image/logo-transparent-png.png';
import { ImageLogo } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { MenuButton } from './MenuButton';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px' });
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <HeaderContainer>
      <Navigation>
        <IconWrapper data-aos="zoom-in"> <Link to="/home">
          <ImageLogo src={Logo} alt="Logo" /></Link>
        </IconWrapper>
       {isMobile ? ( <MenuButton />) : (
        <>
          <StyledLink to="/home" data-aos="fade-down">HOME</StyledLink>
          <StyledLink to="/about" data-aos="fade-up">ABOUT</StyledLink>
          <StyledLink to="/project" data-aos="fade-down">PROJECT</StyledLink>
          <StyledLink to="/rewards" data-aos="fade-up">REWARDS</StyledLink>
          <StyledLink to="/contact" data-aos="fade-down">CONTACT</StyledLink>
        </>)}
      </Navigation>
    </HeaderContainer>
  );
};
