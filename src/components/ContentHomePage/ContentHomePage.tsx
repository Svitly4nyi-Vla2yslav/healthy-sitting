import React, { useEffect } from 'react';
import { MainSection, VideoContainer } from './ContentHomePage.styled';
import Video from "../../assets/image/airbender.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContentHomePage: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <MainSection id='video'  data-aos="fade-up"  data-aos-easing="ease" data-aos-delay="800">
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </MainSection>
  );
};

export default ContentHomePage;
