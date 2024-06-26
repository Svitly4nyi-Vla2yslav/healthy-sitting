import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import React from 'react';

const FirstPage: React.FC = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
