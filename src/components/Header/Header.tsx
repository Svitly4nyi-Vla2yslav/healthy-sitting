import React from 'react';
import {
  HeaderContainer,
  ImageLogo,
  Navigation,
  // StyledLink,
  // IconWrapper,
} from './Header.styled';
// import sprite from '../../assets/sprite.svg';
import MenuButton from './MunuButton';

export const Header: React.FC = () => {


  return (
    <HeaderContainer>
      <Navigation>
<ImageLogo />
        <MenuButton/>
        {/* <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/project">PROJECT</StyledLink>
        <StyledLink to="/rewards">REWARDS</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink> */}
      </Navigation>
    </HeaderContainer>
  );
};
