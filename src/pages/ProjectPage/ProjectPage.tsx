import React from 'react';
import {
  Block,
  Container,
  ContainerProject,
  ImageUnique,
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
  WrapperText,
} from './ProjectPage.styled';
import Dekstop from '../../assets/video/project-dekstop.mp4';
import Mobile from '../../assets/video/project-mobile.mp4';

import VideoFirst from '../../assets/video/painBack.webm';
import VideoSecond from '../../assets/video/technology.webm';
import VideoThird from '../../assets/video/project-innovation.webm';

import Unique from '../../assets/image/Unique.png';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
// import HelpCards from '../../components/HelpUs/HelpCards';
import { Video } from '../../components/ContentHomePage/ContentHomePage.styled';

const ProjectPage: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
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

      <SectionProject style={{ display: 'flex' }}>
        <WrapperText>
          <TitleAdaptation>{t('Project.AdaptationH2')}</TitleAdaptation>
          <TextAdaptation>{t('Project.AdaptationP')}</TextAdaptation>
        </WrapperText>{' '}
        {!isTablet ? (
          <Video src={VideoSecond} autoPlay loop muted playsInline />
        ) : (
          <div style={{ display: 'none' }}></div>
        )}
      </SectionProject>
      <SectionProject
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          flexWrap: 'nowrap',
        }}
      >
        <WrapperText style={{ alignItems: 'flex-end' }}>
          <TitleOptimisation>{t('Project.OptimisationH2')}</TitleOptimisation>
          <TextOptimisation>{t('Project.OptimisationP')}</TextOptimisation>
        </WrapperText>
        {!isTablet ? (
          <Video src={VideoFirst} autoPlay loop muted playsInline />
        ) : (
          <div style={{ display: 'none' }}></div>
        )}
      </SectionProject>
      <InnovationSection>
        <SectionProject
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <InnovationTitle>{t('Project.InnovationH2')}</InnovationTitle>
          <InnovationText>{t('Project.InnovationP')}</InnovationText>

          <Video
            style={{ paddingTop: 80 }}
            src={VideoThird}
            autoPlay
            loop
            muted
            playsInline
          />
        </SectionProject>
        <SectionProject
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexWrap: 'nowrap',
            marginTop: 80,
            alignItems: 'center',
          }}
        >
          <WrapperText style={{ alignItems: 'flex-end', paddingTop: 80 }}>
            <TitleUnique>{t('Project.UniqueH3')}</TitleUnique>
            <TextUnique>{t('Project.UniqueP')}</TextUnique>{' '}
          </WrapperText>
          {!isTablet ? (
            <ImageUnique src={Unique} alt="Unique" />
          ) : (
            <div style={{ display: 'none' }}></div>
          )}
        </SectionProject>
        <SectionProject>
          <WrapperText style={{ alignItems: 'center', maxWidth: 1000 }}>
            <TitleLargeScale style={{ alignItems: 'center', maxWidth: 1000 }}>
              {t('Project.LargeScaleH3')}
            </TitleLargeScale>
            <TextLargeScale style={{ alignItems: 'center', maxWidth: 1000 }}>
              {t('Project.LargeScaleP')}
            </TextLargeScale>
            <TextBoltLargeScale
              style={{ alignItems: 'center', maxWidth: 1000 }}
            >
              {t('Project.BoltLargeScale')}
            </TextBoltLargeScale>
            <TextLargeScaleBig style={{ alignItems: 'center', maxWidth: 1000 }}>
              {t('Project.LargeScaleBig')}
            </TextLargeScaleBig>
          </WrapperText>
        </SectionProject>
      </InnovationSection>
      {/* <HelpCards /> */}
    </ContainerProject>
  );
};

export default ProjectPage;
