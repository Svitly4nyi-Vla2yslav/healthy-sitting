import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import example from "../../assets/image/Terminator-product-section_8-2380x850-3.jpg"


export const ContainerProject = styled.div`
 background-image: url(${example});
   width: 100%;
  height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;
export const Block = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const StyledLink = styled(Link)`
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
  display: block;
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