import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
      display: flex;
    justify-content: flex-end;

    
       border-bottom: 1px solid #00baff; 
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
width: 40%;
    text-align: start;
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;

export const IconWrapper = styled.div`
 position: fixed;
    left: 10px;
    top: 10px;
      &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
  
     
  }
}
`;

export const ButtonMenuContainer = styled.div`
:where(.css-dev-only-do-not-override-m4timi).ant-menu-inline-collapsed {
    width: 50px;
}

:where(.css-dev-only-do-not-override-m4timi).ant-menu-dark, :where(.css-dev-only-do-not-override-m4timi).ant-menu-dark>.ant-menu {
    color: rgba(255, 255, 255, 0.65);
    background: #00152900;
}
`;

export const ImageLogo = styled.img`
width: 200px;
transition:
    color 0.3s,
    filter 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    filter: drop-shadow(0 0 5px #00baff);
  }

 
`;
