import React from 'react';
import {
  HeaderContainer,
  IconWrapper,
  Navigation
} from './Header.styled';
import Logo from '../../assets/image/logo-transparent-png.png';
import MenuButton from './MenuButton';
import { ImageLogo } from './Header.styled';

export const Header: React.FC = () => {


  return (
    <HeaderContainer>
      <Navigation>
<IconWrapper>
  <ImageLogo src={Logo} alt='Logo'/>
</IconWrapper>
        <MenuButton/>
        {/* <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/project">PROJECT</StyledLink>
        <StyledLink to="/rewards">REWARDS</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink> */}
      </Navigation>
    </HeaderContainer>
  );
};
