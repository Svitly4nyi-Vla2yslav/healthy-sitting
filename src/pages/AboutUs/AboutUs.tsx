import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  AboutTitel,
  ContainerAbout,
  ContainerBenefits,
  ContainerFeatures,
  ContainerPage,
  CustomerImage,
  FlexContainer,
  IconProblem,
  ImageAngel,
  ImageBenefits,
  ImageContainer,
  ImageFeatures,
  NumberTitle,
  ProblemContainer,
  ProblemText,
  TextBenefits,
  TextFeatures,
  TextFeaturesLarge,
  TextSolution,
  TextSolutionContainer,
  TextSolutionSmall,
  TitleFeatures,
  TitleProblem,
  TitleSolution,
} from './AboutUs.styled';

import Angel from '../../assets/image/angel.png';
import IconFirst from '../../assets/image/iconProblem-1.png';
import IconSecond from '../../assets/image/iconProblem-2.png';
import IconThird from '../../assets/image/iconProblem-3.png';
import Benefits from '../../assets/image/image-benefits.png';
import CustomerFirst from '../../assets/image/customer-1.png';
import CustomerSecond from '../../assets/image/customer-2.png';
import CustomerThird from '../../assets/image/customer-3.png';
import CustomerPeople from '../../assets/image/customer-people.png';
import SearchImage from '../../assets/image/image_search.png';
import Different from '../../assets/image/image-different.png';
import Features from '../../assets/image/features.png';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px' });

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <ContainerAbout>
        <ContainerPage>
          <ImageContainer>
            <ImageAngel src={Angel} alt="👼" data-aos="fade-right" />
          </ImageContainer>

          <AboutTitel data-aos="fade-left">{t('AboutUs.title')}</AboutTitel>
        </ContainerPage>
        <ContainerPage>
          <TitleProblem data-aos="zoom-in" data-aos-delay="700">
            {t('AboutUs.problemTitle')}
          </TitleProblem>
          <ProblemContainer>
            <ProblemText data-aos="flip-left" data-aos-delay="300">
              <IconProblem src={IconFirst} alt="🤔" />
              {t('AboutUs.problemText1')}
            </ProblemText>
            <ProblemText data-aos="flip-right" data-aos-delay="500">
              <IconProblem src={IconSecond} alt="⏸️" />
              {t('AboutUs.problemText2')}
            </ProblemText>
            <ProblemText data-aos="flip-left" data-aos-delay="700">
              <IconProblem src={IconThird} alt="⏲️" />
              {t('AboutUs.problemText3')}
            </ProblemText>
          </ProblemContainer>
        </ContainerPage>
        <ContainerPage>
          <TitleSolution data-aos="zoom-in">{t('AboutUs.solutionTitle')}</TitleSolution>
          <TextSolution data-aos="fade-up">
            <strong style={{ fontSize: 26 }}>{t('AboutUs.solutionStrong')}</strong>{' '}
            {t('AboutUs.solutionText')}
          </TextSolution>
          <TextSolutionContainer style={{ marginBottom: 50 }}>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="100">
              ✔ {t('AboutUs.solutionPoint1')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="200">
              ✔ {t('AboutUs.solutionPoint2')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
              ✔ {t('AboutUs.solutionPoint3')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
              ✔ {t('AboutUs.solutionPoint4')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
              ✔ {t('AboutUs.solutionPoint5')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
              ✔ {t('AboutUs.solutionPoint6')}
            </TextSolutionSmall>
            <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
              ✔ {t('AboutUs.solutionPoint7')}
            </TextSolutionSmall>
          </TextSolutionContainer>
        </ContainerPage>
        <ContainerFeatures>
          <TitleFeatures data-aos="fade-up" data-aos-delay="100">
            {t('AboutUs.featuresTitle')}
          </TitleFeatures>
          <ContainerFeatures>
            <TextFeatures data-aos="fade-up" data-aos-delay="100">
              {t('AboutUs.featuresText1')}
            </TextFeatures>
            <ImageFeatures data-aos="zoom-in" src={Features} alt="icon-🕵️‍♀️" />
            <TextFeatures data-aos="fade-up" data-aos-delay="100">
              {t('AboutUs.featuresText2')}
            </TextFeatures>
            <TextFeatures data-aos="fade-up" data-aos-delay="100">
              {t('AboutUs.featuresText3')}
            </TextFeatures>
            <TextFeatures data-aos="fade-up" data-aos-delay="100">
              {t('AboutUs.featuresText4')}
            </TextFeatures>
            <TextFeaturesLarge data-aos="fade-up" data-aos-delay="100">
              {t('AboutUs.featuresText5')}
            </TextFeaturesLarge>
          </ContainerFeatures>
        </ContainerFeatures>
        <ContainerPage>
          <TitleFeatures data-aos="zoom-in">{t('AboutUs.benefitsTitle')}</TitleFeatures>
          <FlexContainer>
            {' '}
            <ContainerPage>
              <ContainerBenefits data-aos="zoom-out-right">
                <NumberTitle data-aos="zoom-out-right">01</NumberTitle>{' '}
                <TextBenefits data-aos="zoom-out-right">
                  {t('AboutUs.benefitsText1')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-out-right">
                <NumberTitle data-aos="zoom-out-right">02</NumberTitle>{' '}
                <TextBenefits data-aos="zoom-out-right">
                  {t('AboutUs.benefitsText2')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-out-right">
                <NumberTitle data-aos="zoom-out-right">03</NumberTitle>{' '}
                <TextBenefits data-aos="zoom-out-right">
                  {t('AboutUs.benefitsText3')}
                </TextBenefits>
              </ContainerBenefits>
            </ContainerPage>
            <ImageContainer>
              <ImageBenefits src={Benefits} alt="💸" data-aos="zoom-out-right" />
            </ImageContainer>
          </FlexContainer>
        </ContainerPage>
        <ContainerPage>
          <TitleFeatures data-aos="zoom-in">{t('AboutUs.customerSegmentsTitle')}</TitleFeatures>
          <FlexContainer>
            <ContainerPage>
              <ContainerBenefits data-aos="zoom-out-left">
                <CustomerImage
                  src={CustomerFirst}
                  alt="Icon-🪔"
                  data-aos="zoom-out-left"
                />{' '}
                <TextBenefits data-aos="zoom-out-left">
                  {t('AboutUs.customerText1')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-out-left">
                <CustomerImage
                  src={CustomerSecond}
                  alt="icon-😕"
                  data-aos="zoom-out-left"
                />{' '}
                <TextBenefits data-aos="zoom-out-left">
                  {t('AboutUs.customerText2')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-out-left">
                <CustomerImage
                  src={CustomerThird}
                  alt="icon-🗣️"
                  data-aos="zoom-out-left"
                />{' '}
                <TextBenefits data-aos="zoom-out-left">
                  {t('AboutUs.customerText3')}
                </TextBenefits>
              </ContainerBenefits>
            </ContainerPage>

            <ImageContainer data-aos="zoom-out-left">
              <ImageBenefits
                data-aos="zoom-out-left"
                src={CustomerPeople}
                alt="icon🫂"
              />{' '}
            </ImageContainer>
          </FlexContainer>
        </ContainerPage>
        <ContainerPage>
          <FlexContainer>
            <TitleFeatures
              style={{ paddingRight: 130 }}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              {t('AboutUs.searchTitle')}
            </TitleFeatures>
            <ImageContainer
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <ImageBenefits src={SearchImage} alt="icon-🌎" />
            </ImageContainer>
          </FlexContainer>
        </ContainerPage>
        <ContainerPage>
          <TitleFeatures data-aos="zoom-in">
            {t('AboutUs.differenceTitle')}
          </TitleFeatures>
          <FlexContainer>
            {' '}
            <ContainerPage>
              <ContainerBenefits data-aos="zoom-in-down">
                <NumberTitle data-aos="zoom-in-down">01</NumberTitle>
                <TextBenefits data-aos="zoom-in-down">
                  {t('AboutUs.differenceText1')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-in-down">
                <NumberTitle data-aos="zoom-in-down">02</NumberTitle>
                <TextBenefits data-aos="zoom-in-down">
                  {t('AboutUs.differenceText2')}
                </TextBenefits>
              </ContainerBenefits>
              <ContainerBenefits data-aos="zoom-in-down">
                <NumberTitle data-aos="zoom-in-down">03</NumberTitle>
                <TextBenefits data-aos="zoom-in-down">
                  {t('AboutUs.differenceText3')}
                </TextBenefits>
              </ContainerBenefits>{' '}
            </ContainerPage>
            <ImageContainer>
              {isMobile ? (
                'display: none'
              ) : (
                <ImageBenefits
                  data-aos="zoom-in-down"
                  src={Different}
                  alt="Different-🥸"
                />
              )}
            </ImageContainer>
          </FlexContainer>
        </ContainerPage>
      </ContainerAbout>
    </>
  );
};

export default AboutUs;
