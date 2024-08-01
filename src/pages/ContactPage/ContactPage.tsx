import React from 'react';
import { ContactContainer, Container } from './ContactPage.styled';
import EmailTicket from '../../components/EmailTicket/EmailTicket';
import Subscribe from '../../components/EmailTicket/Subscribe';
import OurContacts from '../../components/OurContacts/OurContacts';

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactContainer>
        <Container>
        
          <EmailTicket />
          <Subscribe />
            <OurContacts/>
        </Container>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
