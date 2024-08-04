import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  WrapperSocial,
} from './OurContacts.styled';
import Maks from '../../assets/image/Maksim.webp';
import Logo from '../../assets/image/logo_Systems.webp';
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
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <OurContactsContainer>
      <ImageContainer>
        <ContactImageLogo data-aos="zoom-in" src={Logo} alt="logo" />
        <ContactImage data-aos="fade-up" src={Maks} alt="foto-schef" />
        <WrapperEmail data-aos="flip-left" data-aos-delay="300">
          <NameTitel data-translate>{t('OurContacts.founderName')}</NameTitel>
          <InfoText data-translate>{t('OurContacts.founderPosition')}</InfoText>
        </WrapperEmail>
        <TextLinks data-aos="zoom-in" data-aos-delay="700" data-translate>
          {t('OurContacts.socialMedia')}
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
