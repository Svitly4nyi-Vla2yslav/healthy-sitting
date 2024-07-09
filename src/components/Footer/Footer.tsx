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
        <FooterItemText></FooterItemText>
      </FooterList>
      <FooterList>
        <FooterItemTitel>Useful Links</FooterItemTitel>
        <FooterLink>Blog</FooterLink>
        <FooterLink>Projects</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </FooterList>
      <WrapperSocialLink>
        <SocialLink style={{ color: '#1e90ff' }}>
          <LinkedIn />
        </SocialLink>
        <SocialLink
          style={{
            backdropFilter: 'linear-gradient(-90deg, #ff7f50, #1e90ff)',
          }}
        >
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
    </FooterContainer>
  );
};

export default Footer;
