import React from 'react';
import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/home">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          HOME
        </StyledLink>
        <StyledLink to="/project">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          PROJECT 
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
