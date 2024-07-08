import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  AboutTitel,
  ContainerAbout,
  ContainerBenefits,
  ContainerPage,
  CustomerImage,
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

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <ContainerAbout
    // data-aos="fade-zoom-in"
    // data-aos-easing="ease-in-back"
    // data-aos-offset="0"
    >
      <ContainerPage>
        <ImageAngel src={Angel} alt="👼" data-aos="fade-right" />
        <AboutTitel data-aos="fade-left">Innovation Conveyor</AboutTitel>
      </ContainerPage>
      <ContainerPage>
        <TitleProblem data-aos="zoom-in" data-aos-delay="700">
          THE PROBLEM: Our world loses up to 70% of innovative ideas and
          solutions that don't even survive to proof of concept
        </TitleProblem>
        <ProblemContainer>
          <ProblemText data-aos="flip-left" data-aos-delay="300">
            <IconProblem src={IconFirst} alt="🤔" />
            Psychological difficulties at different levels: Internal and
            external psychological barriers and dimensions
          </ProblemText>
          <ProblemText data-aos="flip-right" data-aos-delay="500">
            <IconProblem src={IconSecond} alt="⏸️" />
            Multidisciplinary challenges: Lack of expertise in key areas,
            marketing, legal, finance. Lack of competencies is a barrier for
            innovators.
          </ProblemText>
          <ProblemText data-aos="flip-left" data-aos-delay="700">
            <IconProblem src={IconThird} alt="⏲️" />
            Conceptual jam: The long and difficult journey from idea inception
            to proof of concept, creating serious challenges.
          </ProblemText>
        </ProblemContainer>
      </ContainerPage>
      <ContainerPage>
        <TitleSolution data-aos="zoom-in">Solution </TitleSolution>
        <TextSolution data-aos="fade-up">
          <strong style={{ fontSize: 20 }}>
            Angelic Innovation Conveyor "AIC":
          </strong>{' '}
          A platform designed to accumulate and test innovations at the Pre-seed
          stage as quickly as possible. On the one hand, the solution is
          individualized and at the same time the principle of the conveyor belt
          is applied.
        </TextSolution>
        <TextSolutionContainer style={{ marginBottom: 50 }}>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="100">
            ✔ Creating a psychologically safe environment
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="200">
            ✔ Adapted templates
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
            ✔ Full support
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
            ✔ Speedy proof of concept
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
            ✔ Innovative filtering
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
            ✔ Fast and in-depth analysis{' '}
          </TextSolutionSmall>
          <TextSolutionSmall data-aos="fade-up" data-aos-delay="300">
            ✔ Building into the DNA of a startup
          </TextSolutionSmall>
        </TextSolutionContainer>
      </ContainerPage>
      <ContainerPage>
        <TitleFeatures data-aos="fade-up" data-aos-delay="100">
          PRODUCT AND FEATURES{' '}
        </TitleFeatures>
        <TextFeatures data-aos="fade-up" data-aos-delay="200">
          Idea pitch: The innovator delivers the idea on the platform using
          customized templates in a psychologically safe environment.
        </TextFeatures>
        <ImageFeatures />
        <TextFeatures data-aos="fade-up" data-aos-delay="200">
          Lightning-fast innovation validation: After signing the NDA and
          adaptive presentation, the innovation is subjected to rapid pipeline
          validation and filtering.
        </TextFeatures>
        <TextFeatures data-aos="fade-up" data-aos-delay="200">
          Full and in-depth validation: Once the concept has been validated, a
          comprehensive analysis of the innovation is carried out and a final
          report is prepared.
        </TextFeatures>
        <TextFeatures data-aos="fade-up" data-aos-delay="200">
          Multi-level assessment: Information is sent to specialized departments
          for a comprehensive assessment
        </TextFeatures>
        <TextFeaturesLarge data-aos="fade-up" data-aos-delay="200">
          Psychological safety + Conveyr approach = “AIC”
        </TextFeaturesLarge>
      </ContainerPage>
      <ContainerPage>
        <TitleFeatures data-aos="zoom-in">BENEFITS innovators</TitleFeatures>
        <ContainerBenefits data-aos="zoom-out-right">
          <NumberTitle data-aos="zoom-out-right">01</NumberTitle>{' '}
          <TextBenefits data-aos="zoom-out-right">
            Psychological comfort: Innovators will have access to a
            psychologically safe environment where their emotional needs are
            taken into account and stress levels are reduced when presenting
            their ideas and allowing them to focus on innovation
          </TextBenefits>
        </ContainerBenefits>
        <ContainerBenefits data-aos="zoom-out-right">
          <NumberTitle data-aos="zoom-out-right">02</NumberTitle>{' '}
          <TextBenefits data-aos="zoom-out-right">
            Accelerated optimization of processes and resources: With
            lightning-fast innovation validation and built-in templates for
            presentations and videos, innovators save time and resources by
            gaining quick access to evaluate their ideas and potential
            investors.
          </TextBenefits>
        </ContainerBenefits>
        <ContainerBenefits data-aos="zoom-out-right">
          <NumberTitle data-aos="zoom-out-right">03</NumberTitle>{' '}
          <TextBenefits data-aos="zoom-out-right">
            Effective Support and Development: Innovators can concentrate as
            much as possible on their innovative solutions. The parent company
            will take care of procedural issues.
          </TextBenefits>
        </ContainerBenefits>
        <ImageContainer>
          <ImageBenefits src={Benefits} alt="💸" data-aos="zoom-out-right" />
        </ImageContainer>
      </ContainerPage>
      <ContainerPage>
        <TitleFeatures>“AIC” CUSTOMER SEGMENTS</TitleFeatures>
        <ContainerBenefits>
          <CustomerImage src={CustomerFirst} alt="Icon-🪔" />{' '}
          <TextBenefits>
            Beginning Innovators: People who are trying their hand at creating
            startups or innovative projects for the first time.
          </TextBenefits>
        </ContainerBenefits>
        <ContainerBenefits>
          <CustomerImage src={CustomerSecond} alt="icon-😕" />{' '}
          <TextBenefits>
            Researchers: Science and research professionals interested in
            commercializing their research.
          </TextBenefits>
        </ContainerBenefits>
        <ContainerBenefits>
          <CustomerImage src={CustomerThird} alt="icon-🗣️" />{' '}
          <TextBenefits>
            Experienced Innovators: People with experience in developing and
            implementing innovative projects, looking for support and new
            opportunities.
          </TextBenefits>
        </ContainerBenefits>
        <ImageContainer>
          <ImageBenefits src={CustomerPeople} alt="icon🫂" />{' '}
        </ImageContainer>
      </ContainerPage>
    </ContainerAbout>
  );
};

export default AboutUs;
