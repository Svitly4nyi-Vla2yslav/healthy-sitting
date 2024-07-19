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
        <ContactImageLogo data-aos="zoom-in" src={Logo} alt="logo" />
        <ContactImage data-aos="fade-up" src={Maks} alt="foto-schef" />
        <WrapperEmail data-aos="flip-left" data-aos-delay="300">
          <NameTitel data-translate="Founder Name">Maksym Morenets</NameTitel>
          <InfoText data-translate="Founder Position">
            Founder of Angel Systems
          </InfoText>
        </WrapperEmail>
        <TextLinks
          data-aos="zoom-in"
          data-aos-delay="700"
          data-translate="Social Media"
        >
          SOCIAL MEDIA
        </TextLinks>
        <WrapperSocial data-aos="fade-left" data-aos-delay="300">
          <SocialLink
            href="https://www.linkedin.com/in/maksym-morenets-aab4b1250/"
            style={{ color: '#1e90ff' }}
           
          >
            <LinkedIn />
          </SocialLink>
          <SocialLink>
            <Instagram
              style={{
                background: 'linear-gradient(50deg, #ff7f50, #1e90ff)',
                borderRadius: 8,
              }}
            />
          </SocialLink>
          <SocialLink style={{ color: '#1e90ff' }}>
            <Facebook />
          </SocialLink>
          <SocialLink style={{ color: '#1e90ff' }}>
            <Twitter />
          </SocialLink>
          <SocialLink
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
