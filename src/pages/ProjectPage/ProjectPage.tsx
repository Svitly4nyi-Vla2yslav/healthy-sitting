import React from 'react';
import {
  Block,
  Container,
  ContainerProject,
  Title,
} from './ProjectPage.styled';
import Dekstop from '../../assets/video/project-dekstop.mp4';
import Mobile from '../../assets/video/project-mobile.mp4';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const ProjectPage: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px' });

  return (
    <ContainerProject>
      <Container>
        <video autoPlay loop muted>
          {!isMobile ? (
            <source src={Dekstop} type="video/mp4" />
          ) : (
            <source src={Mobile} type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>
      </Container>
      <Block>
        <Title>{t('Project.TitleH1')}</Title>
      </Block>
    </ContainerProject>
  );
};

export default ProjectPage;
