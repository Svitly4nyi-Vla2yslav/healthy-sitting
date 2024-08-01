import React from 'react';
import {
  CardContainer,
  CardHelpUs,
  CardText,
  CardTitel,
  IconText,
  IconWrapper,
  Image,
  SectionHelp,
  SocialLink,
  TextHelp,
  TextWrapper,
  TitelHelp,
  WrapperSocialLink,
} from './HelpCards.styled';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Help1 from "../../assets/image/example.png"

import {
  LinkedIn,
  Instagram,
  Facebook,
  YouTube,
  Twitter,
} from '@mui/icons-material';

const HelpCards: React.FC = () => {
  return (
    <SectionHelp id='/help'>
      <TextWrapper>
        <TitelHelp>Help Us</TitelHelp>
        <TextHelp>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis
          vel odit eaque consequatur dolorum?
        </TextHelp>
      </TextWrapper>
      <CardContainer>
        <CardHelpUs>
          <Image src={Help1} />
          <CardTitel>Help Us</CardTitel>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            alias? Incidunt omnis nesciunt repudiandae possimus.
          </CardText>
          <IconWrapper>
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <IconText>Lorem, ipsum.</IconText>
          </IconWrapper>
          <IconWrapper>
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <IconText>Lorem, ipsum.</IconText>
          </IconWrapper>
          <IconWrapper>
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <IconText>Lorem, ipsum.</IconText>
          </IconWrapper>
        </CardHelpUs>
        <CardHelpUs>
          <Image src={Help1} />
          <CardTitel>Help Us</CardTitel>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            alias? Incidunt omnis nesciunt repudiandae possimus.
          </CardText>
          <IconWrapper>
            <ArrowCircleRightIcon
              style={{ fill: '#01cbe1', width: 34, height: 34 }}
            />
            <IconText>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </IconText>
          </IconWrapper>
        </CardHelpUs>
        <CardHelpUs>
          <Image src={Help1} />
          <CardTitel>Help Us</CardTitel>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            alias? Incidunt omnis nesciunt repudiandae possimus.
          </CardText>
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
        </CardHelpUs>
      </CardContainer>
    </SectionHelp>
  );
};

export default HelpCards;
