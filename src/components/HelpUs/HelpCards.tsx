import React from 'react';
import {
  CardContainer,
  CardHelpUs,
  CardTitel,
  IconWrapper,
  Image,
  SectionHelp,
  TextHelp,
  TextWrapper,
  TitelHelp,
} from './HelpCards.styled';

import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import GofundmeIcon from '../../assets/image/gofundme.png';

import { useTranslation } from 'react-i18next';
import { DonatButton } from '../ContentHomePage/HomeComponent.styled';

const HelpCards: React.FC = () => {
  const { t } = useTranslation();

  const handleCopyLink = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert(t('HelpCards.CopySuccess')); // Повідомлення про успішне копіювання
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const donationLink =
    'https://docs.google.com/document/d/10rlJIDtPk0bWtx7vGF8-DSLv9ak1qqcB366k1vyms1I/edit?usp=sharing';

  return (
    <SectionHelp id="/help">
      <TextWrapper>
        <TitelHelp>{t('HelpCards.HelpH2')}</TitelHelp>
        <TextHelp>{t('HelpCards.HelpP')}</TextHelp>
      </TextWrapper>
      <CardContainer>
        <CardHelpUs>
          <Image>1</Image>
          <CardTitel>
            {t('HelpCards.CardTitelH3')} <br/><br/>
          </CardTitel>

          <IconWrapper href="https://www.gofundme.com/f/Angel-Systems-ch/donate?attribution_id=sl%3A265f0fa1-2e54-4bb4-9f99-ba5cc3ab04f1&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link&source=btn_donate">
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <DonatButton
              data-aos="fade-right"
              style={{ margin: 0, marginRight: 10, position: 'static' }}
            >
              {t('Header.order')}
            </DonatButton>
          </IconWrapper>

          <CardTitel>
            {t('HelpCards.CardTextP')} <span>❤️</span>
          </CardTitel>
        </CardHelpUs>
        <CardHelpUs>
          <Image>2</Image>
          <CardTitel>{t('HelpCards.Card2TitelH3')}</CardTitel>
          {/* <CardText>{t('HelpCards.')}</CardText> */}
          <IconWrapper>
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <img data-aos="fade-right" src={GofundmeIcon} alt="Gofundme" />
          </IconWrapper>
          <CardTitel>
            {t('HelpCards.Card2TextP')} <span>x2 ❤️</span>
          </CardTitel>
        </CardHelpUs>
        <CardHelpUs>
          <Image>3</Image>
          <CardTitel style={{ fontSize: '1.5rem' }}>
            {t('HelpCards.Card3TitelH3')}
          </CardTitel>
          <IconWrapper> <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <button  data-aos="fade-right" onClick={() => handleCopyLink(donationLink)}>
              {t('HelpCards.CopyLink')}<MarkAsUnreadOutlinedIcon/>
            </button>
          </IconWrapper>
          <CardTitel style={{ fontSize: '2.2rem' }}>
            {t('HelpCards.Card2TextP')} <span>x3 ❤️</span>
          </CardTitel>
        </CardHelpUs>
      </CardContainer>
    </SectionHelp>
  );
};

export default HelpCards;
