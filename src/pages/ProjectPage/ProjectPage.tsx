import React from 'react';
import { Block, Container, ContainerProject, Title } from './ProjectPage.styled';
import Video from "../../assets/video/webm-project (1).webm"
import { useTranslation } from 'react-i18next';

const ProjectPage: React.FC = () => {

  const { t } = useTranslation();


  return (
    <ContainerProject>
       <Container>
       <video autoPlay loop muted style={{}}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Block>
          <Title>{t("Project.TitleH1")}</Title>
        </Block>
      </Container>
    </ContainerProject>
  );
};

export default ProjectPage;
