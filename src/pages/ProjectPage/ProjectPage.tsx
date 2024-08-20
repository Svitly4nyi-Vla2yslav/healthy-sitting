import React from 'react';
import {
  Block,
  Container,
  ContainerProject,
  InnovationSection,
  InnovationText,
  InnovationTitle,
  SectionProject,
  TextAdaptation,
  TextBoltLargeScale,
  TextLargeScale,
  TextLargeScaleBig,
  TextOptimisation,
  TextUnique,
  Title,
  TitleAdaptation,
  TitleLargeScale,
  TitleOptimisation,
  TitleUnique,
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

      <SectionProject>
        <TitleAdaptation>{t("Project.AdaptationH2")}</TitleAdaptation>
        <TextAdaptation>{t("Project.AdaptationP")}</TextAdaptation>
      </SectionProject>
      <SectionProject>
        <TitleOptimisation>{t("Project.OptimisationH2")}</TitleOptimisation>
        <TextOptimisation>{t("Project.OptimisationP")}</TextOptimisation>
      </SectionProject>
      <InnovationSection>
        <SectionProject>
          <InnovationTitle>{t("Project.InnovationH2")}</InnovationTitle>
          <InnovationText>{t("Project.InnovationP")}</InnovationText>
        </SectionProject>
        <SectionProject>
          <TitleUnique>{t("Project.UniqueH3")}</TitleUnique>
          <TextUnique>{t("Project.UniqueP")}</TextUnique>
        </SectionProject>
        <SectionProject>
          <TitleLargeScale>{t("Project.LargeScaleH3")}</TitleLargeScale>
          <TextLargeScale>{t("Project.LargeScaleP")}</TextLargeScale>
          <TextBoltLargeScale>{t("Project.BoltLargeScale")}</TextBoltLargeScale>
          <TextLargeScaleBig>{t("Project.LargeScaleBig")}</TextLargeScaleBig>
        </SectionProject>
      </InnovationSection>
    </ContainerProject>
  );
};

export default ProjectPage;
