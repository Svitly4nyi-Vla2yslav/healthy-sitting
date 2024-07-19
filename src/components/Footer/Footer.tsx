import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
// import Translator from '../LanguageSelector/Translater';

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <FooterContainer>
      <FooterList>
        <Link to="/home">
          <ImageLogo src={Logo} alt="Logo" />
        </Link>
        <FooterItemText data-translate="Footer additional text"></FooterItemText>
      </FooterList>
      <FooterList>
        <FooterItemTitel data-translate="Useful Links">
          Useful Links
        </FooterItemTitel>
        <Link to={'/*'}>
          <FooterLink data-translate="Blog">Blog</FooterLink>
        </Link>
        <Link to="/project">
          <FooterLink data-translate="Projects">Projects</FooterLink>
        </Link>
        <Link to="/contact">
          <FooterLink data-translate="Contact Us">Contact Us</FooterLink>
        </Link>
      </FooterList>
      {/* <Translator/> */}
      <FooterList>
        <FooterItemText
          style={{ borderBottom: '1px solid #00baff', width: 140 }}
          data-translate="Social Media"
        >
          SOCIAL MEDIA
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
