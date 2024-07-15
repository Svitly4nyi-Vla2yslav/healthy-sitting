import React, { useEffect } from 'react';
import {
  ContactImage,
  ContactImageLogo,
  ImageContainer,
  InfoText,
  NameTitel,
  OurContactsContainer,
  SocialLink,
  TextLinks,
  WrapperEmail,
} from './OurContacts.styled';
import Maks from '../../assets/image/Maksim.png';
import Logo from '../../assets/image/logo_Systems.png';
import { WrapperSocial } from './OurContacts.styled';
import {
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
  Email,
} from '@mui/icons-material';

import AOS from 'aos';
import 'aos/dist/aos.css';

const OurContacts: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <OurContactsContainer>
      <ImageContainer>
        {' '}
          <ContactImageLogo data-aos="zoom-in" src={Logo} alt="logo" />
          <ContactImage data-aos="fade-up" src={Maks} alt="foto-schef" />
        <WrapperEmail data-aos="flip-left" data-aos-delay="300">
          <NameTitel>Maksym Morenets</NameTitel>
          <InfoText>Founder of Angel Systems</InfoText>
        </WrapperEmail>
        <TextLinks data-aos="zoom-in" data-aos-delay="700">
          SOCIAL MEDIA
        </TextLinks>
        <WrapperSocial>
          <SocialLink
            data-aos="fade-left"
            data-aos-delay="500"
            href="https://www.linkedin.com/in/maksym-morenets-aab4b1250/"
            style={{ color: '#1e90ff' }}
          >
            <LinkedIn />
          </SocialLink>
          <SocialLink data-aos="fade-left" data-aos-delay="300">
            <Instagram
              style={{
                background: 'linear-gradient(50deg, #ff7f50, #1e90ff)',
                borderRadius: 8,
              }}
            />
          </SocialLink>
          <SocialLink data-aos="zoom-in" style={{ color: '#1e90ff' }}>
            <Facebook />
          </SocialLink>

          <SocialLink
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: '#1e90ff' }}
          >
            <Twitter />
          </SocialLink>
          <SocialLink
            data-aos="fade-right"
            data-aos-delay="500"
            href="mailto:maksym.morenets.ch@gmail.com"
            style={{ color: '#1e90ff' }}
          >
            <Email />
          </SocialLink>
        </WrapperSocial>
      </ImageContainer>
    </OurContactsContainer>
  );
};

export default OurContacts;
