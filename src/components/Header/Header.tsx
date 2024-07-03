import React from 'react';
import {
  HeaderContainer,
  IconWrapper,
  Navigation,
  StyledLink,
} from './Header.styled';
import Logo from '../../assets/image/logo-transparent-png.png';
import MenuButton from './MenuButton';
import { ImageLogo } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px' });

  return (
    <HeaderContainer>
      <Navigation>
        <IconWrapper> <Link to="/home">
          <ImageLogo src={Logo} alt="Logo" /></Link>
        </IconWrapper>
       {isMobile ? ( <MenuButton />) : (
        <>
          <StyledLink to="/home">HOME</StyledLink>
          <StyledLink to="/project">PROJECT</StyledLink>
          <StyledLink to="/rewards">REWARDS</StyledLink>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </>)}
      </Navigation>
    </HeaderContainer>
  );
};
