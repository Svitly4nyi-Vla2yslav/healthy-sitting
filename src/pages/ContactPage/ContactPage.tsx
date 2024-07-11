import React from 'react';
import { ContactContainer } from './ContactPage.styled';
import EmailTicket from '../../components/EmailTicket/EmailTicket';
import Subscribe from '../../components/EmailTicket/Subscribe';
import { Container } from '../ProjectPage/ProjectPage.styled';

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactContainer>
        <Container>
          <EmailTicket />
          <Subscribe />
        </Container>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
