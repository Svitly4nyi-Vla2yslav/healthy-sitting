import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterItemText,
  FooterItemTitel,
  FooterLink,
  FooterList,
  SocialLink,
  WrapperSocialLink,
} from './Footer.styled';
import { Link } from 'react-router-dom';
import { ImageLogo } from '../Header/Header.styled';
import Logo from '../../assets/image/logo-transparent-png.png';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <FooterContainer>
      <FooterList>
        <Link to="/home">
          <ImageLogo src={Logo} alt="Logo" />
        </Link>
        <FooterItemText data-translate="footerAdditionalText">
          {t('Footer.footerAdditionalText')}
        </FooterItemText>
      </FooterList>
      <FooterList>
        <FooterItemTitel data-translate="usefulLinks">
          {t('Footer.usefulLinks')}
        </FooterItemTitel>
        <Link to={'/*'}>
          <FooterLink data-translate="blog">
            {t('Footer.blog')}
          </FooterLink>
        </Link>
        <Link to="/project">
          <FooterLink data-translate="projects">
            {t('Footer.projects')}
          </FooterLink>
        </Link>
        <Link to="/contact">
          <FooterLink data-translate="contactUs">
            {t('Footer.contactUs')}
          </FooterLink>
        </Link>
      </FooterList>
      <FooterList>
        <FooterItemText
          style={{ borderBottom: '1px solid #00baff', width: 140 }}
          data-translate="socialMedia"
        >
          {t('Footer.socialMedia')}
        </FooterItemText>
        <WrapperSocialLink>
          <SocialLink style={{ color: '#1e90ff' }}>
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
          <SocialLink style={{ color: 'red' }}>
            <YouTube />
          </SocialLink>
          <SocialLink style={{ color: '#1e90ff' }}>
            <Twitter />
          </SocialLink>
        </WrapperSocialLink>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
