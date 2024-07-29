import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div` 
padding: 20px;
 display: flex;
justify-content: flex-end;  
 border-bottom: 1px solid #00baff; 
 width: 100%;
    z-index: 999;
    background-color:  #fff;
`;

export const Navigation = styled.nav`

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-family: 'Right Grotesk';

font-weight: 600;
font-size: 20px;
line-height: 119%;
width: 40%;
    text-align: start;
  padding: 8px 16px;
  color: #1976d2; /* White text color */

  transition:
    color 0.6s,
    text-shadow 0.6s,
    filter 0.6s,
 background 0.6s;

  &:hover,
  &:focus {
    color: #00baff; 
  
filter: drop-shadow(10px 10px 15px #ff7f50);
  }
`;

export const IconWrapper = styled.div`
 position: fixed;
 background-color: #01cbe1;
    left: 0px;
    top: 0px;
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
    color: #1976d2; 
    filter: drop-shadow(0 0 5px #1976d2);
  }

 
`;
