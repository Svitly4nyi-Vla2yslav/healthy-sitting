import { Container, Title, StyledImage } from './HomePage.styled';
import example from '../../assets/example.png';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Home Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default Home;
