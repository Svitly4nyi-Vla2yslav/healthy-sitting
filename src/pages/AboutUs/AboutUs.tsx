import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  AboutTitel,
  ContainerAbout,
  ContainerPage,
  IconProblem,
  ImageAngel,
  ProblemContainer,
  ProblemText,
  TitleProblem,
} from './AboutUs.styled';

import Angel from '../../assets/image/angel.png';
import IconFirst from "../../assets/image/iconProblem-1.png"
import IconSecond from "../../assets/image/iconProblem-2.png"
import IconThird from "../../assets/image/iconProblem-3.png"

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
          solutions that don't even survive to proof of concept</TitleProblem>
          <ProblemContainer>
            <ProblemText data-aos="flip-left" data-aos-delay="300">
              <IconProblem src={IconFirst} alt='🤔' />
              Psychological difficulties at different levels: Internal and
              external psychological barriers and dimensions
            </ProblemText>
            <ProblemText data-aos="flip-right" data-aos-delay="500">
            <IconProblem src={IconSecond} alt='⏸️' />
              Multidisciplinary challenges: Lack of expertise in key areas,
              marketing, legal, finance. Lack of competencies is a barrier for
              innovators.
            </ProblemText>
            <ProblemText data-aos="flip-left" data-aos-delay="700">
            <IconProblem  src={IconThird} alt='⏲️'/>
              Conceptual jam: The long and difficult journey from idea inception
              to proof of concept, creating serious challenges.
            </ProblemText>
          </ProblemContainer>
        
      </ContainerPage>
    </ContainerAbout>
  );
};

export default AboutUs;

{
  /* <Container>
        <Block>
          <Title data-aos="zoom-in" data-aos-delay="900">
            About 😀
          </Title>
        </Block>
      </Container> */
}
