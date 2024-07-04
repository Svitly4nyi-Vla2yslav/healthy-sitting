import React from 'react';
import { Container, Block, Title } from '../ProjectPage/ProjectPage.styled';
import { ContactContainer } from './ContactPage.styled';

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>
      <Container>
        <Block>
          <Title> Contact 📱</Title>
        </Block>
      </Container>
    </ContactContainer>
  );
};

export default ContactPage;
