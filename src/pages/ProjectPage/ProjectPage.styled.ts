import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import example from "../../assets/image/Terminator-product-section_8-2380x850-3.jpg"


export const ContainerProject = styled.div`
 background-image: url(${example});
   width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
     padding-top: 100px;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 330px;
    margin : 0 auto;
    pading: 5px;
`;
export const Block = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  color: #ffffff;
  background: linear-gradient(90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  transition:
    color 0.3s,
     background 0.3s;
  display: block;
  &:hover,
  &:focus {
     background: linear-gradient(-90deg, #ff7f50, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  }
`;
