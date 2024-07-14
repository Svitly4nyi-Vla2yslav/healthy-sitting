import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundHeader from "../../assets/image/Terminator-product-section_8-2380x850-3.jpg"

export const HeaderContainer = styled.div` 
background-image: url(${backgroundHeader});
padding: 20px;
 display: flex;
justify-content: flex-end;  
 border-bottom: 1px solid #00baff; 
 width: 100%;
//  position: fixed;
    z-index: 999;
    // background-color: black;
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
  color: #ffffff; /* White text color */
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition:
    color 0.6s,
    text-shadow 0.6s,
    filter 0.6s,
 background 0.6s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
     background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
filter: drop-shadow(10px 10px 15px #ff7f50);
  }
`;

export const IconWrapper = styled.div`
 position: fixed;
    left: 10px;
    top: px;
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
