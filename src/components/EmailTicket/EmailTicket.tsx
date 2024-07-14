import React, { useEffect, useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import {
  TicketFormContainer,
  TicketForm,
  TicketLabel,
  TicketStatusMessage,
  Button,
  Input,
  TicketTextArea,
  FormTitel,
  FormText,
} from './Email.styled';
import { Message } from './Message';
import { MessageErrors } from './MessageErrors';

import AOS from 'aos';
import 'aos/dist/aos.css';

const EmailTicket: React.FC = () => {
  const [state, handleSubmit] = useForm('xgvwvayg');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      await handleSubmit(event);
    }
  };

  if (state.succeeded) {
    return <Message />;
  }

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);


  return (
    <TicketFormContainer  data-aos="zoom-in" data-aos-delay="100">
      <FormTitel>Need Help? Open a Ticket</FormTitel>
      <FormText>Our support team will get back to you ASAP via email.</FormText>
      <TicketForm
        name="email-ticket"
        method="POST"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="email-ticket" />
        <TicketLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          {formErrors.name && (
            <TicketStatusMessage>{formErrors.name}</TicketStatusMessage>
          )}
        </TicketLabel>
        <TicketLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          {formErrors.email && (
            <TicketStatusMessage>{formErrors.email}</TicketStatusMessage>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </TicketLabel>
        <TicketLabel>
          <TicketTextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter Your Message"
          />
          {formErrors.message && (
            <TicketStatusMessage>{formErrors.message}</TicketStatusMessage>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </TicketLabel>
        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Submit Ticket'}
        </Button>
        {state.submitting && (
          <TicketStatusMessage>Sending...</TicketStatusMessage>
        )}
        {state.errors &&
          (Array.isArray(state.errors) ? (
            state.errors.length > 0 ? (
              <TicketStatusMessage>
                Error occurred while submitting the form.
              </TicketStatusMessage>
            ) : null
          ) : (
            <MessageErrors />
          ))}
      </TicketForm>
    </TicketFormContainer>
  );
};

export default EmailTicket;
