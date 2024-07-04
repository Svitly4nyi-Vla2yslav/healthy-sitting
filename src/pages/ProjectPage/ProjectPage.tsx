import React from 'react';
import { Block, Container, ContainerProject, Title } from './ProjectPage.styled';

const ProjectPage: React.FC = () => {
  return (
    <ContainerProject>
       <Container>
        <Block>
          <Title>Projects 😀</Title>
        </Block>
      </Container>
    </ContainerProject>
  );
};

export default ProjectPage;
