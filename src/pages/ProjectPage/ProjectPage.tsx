import React from 'react';
import { Container, Block, Title, StyledLink } from './ProjectPage.styled';

const ProjectPage: React.FC = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default ProjectPage;
