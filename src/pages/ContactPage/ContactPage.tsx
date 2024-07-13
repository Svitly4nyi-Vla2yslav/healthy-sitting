import React from 'react';
import { ContactContainer, Container } from './ContactPage.styled';
import EmailTicket from '../../components/EmailTicket/EmailTicket';
import Subscribe from '../../components/EmailTicket/Subscribe';

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
