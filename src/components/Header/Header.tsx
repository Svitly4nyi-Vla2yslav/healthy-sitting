import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  IconWrapper,
  Navigation,
  StyledLink,
  ImageLogo,
} from './Header.styled';
import Logo from '../../assets/image/logo_Systems.webp';
import { useMediaQuery } from 'react-responsive';
import { MenuButton } from './MenuButton';
import { DonatButton } from '../ContentHomePage/HomeComponent.styled';
import LanguageMenu from '../LanguageSelector/LanguageSelector';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 882px)' });
  const location = useLocation(); 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  const isContactPage = location.pathname === '/contact';

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0 }}>
      <Navigation>
        <IconWrapper data-aos="zoom-in">
          <Link to="/home">
            <ImageLogo src={Logo} alt="Logo" />
          </Link>
        </IconWrapper>

        {isMobile ? (
          <MenuButton />
        ) : (
          <>
            <LanguageMenu />{' '}
            <Link
              to="/home"
              data-aos="fade-down"
              data-aos-delay="700"
              style={{
                fontFamily: 'Right Grotesk',
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '119%',
                color: '#1976d2',
                textAlign: 'start',
                padding: '12px 16px',
                width: '40%',
                // paddingRight: "30%"
              }}
            >
              {t('Header.home')}
            </Link>
            {!isContactPage && (
              <>
                <a href='https://gofund.me/0c957ce8'>
                  <DonatButton
                    data-aos="fade-right"
                    style={{ margin: 0, marginRight: 10 }}
                  >
                    {t('Header.order')}
                  </DonatButton>
                </a>

                <StyledLink
                  to="/home"
                  smooth={true}
                  duration={1000}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  {t('Header.header')}
                </StyledLink>
                <StyledLink
                  to="/about"
                  smooth={true}
                  duration={1000}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {t('Header.about')}
                </StyledLink>
                <StyledLink
                  to="/project"
                  smooth={true}
                  duration={1000}
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  {t('Header.project')}
                </StyledLink>
                <StyledLink
                  to="/help"
                  smooth={true}
                  duration={1000}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  {t('Header.rewards')}
                </StyledLink>
                <Link
                  to="/contact"
                  data-aos="fade-down"
                  data-aos-delay="700"
                  style={{
                    fontFamily: 'Right Grotesk',
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: '119%',
                    color: '#1976d2',
                    textAlign: 'start',
                    padding: '8px 16px',
                    width: '40%',
                  }}
                >
                  {t('Header.contact')}
                </Link>
              </>
            )}
          </>
        )}
      </Navigation>
    </HeaderContainer>
  );
};
export default Header;