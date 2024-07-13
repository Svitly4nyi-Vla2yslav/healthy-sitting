import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import {
  TicketFormContainer,
  TicketForm,
  TicketLabel,
  TicketButton,
  TicketStatusMessage,
} from './Email.styled';
import { Message } from './Message';
import { MessageErrors } from './MessageErrors';


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

  return (
    <TicketFormContainer>
      <TicketForm
        name="email-ticket"
        method="POST"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="email-ticket" />
        <TicketLabel>
          Your Name:{' '}
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && (
            <TicketStatusMessage>{formErrors.name}</TicketStatusMessage>
          )}
        </TicketLabel>
        <TicketLabel>
          Your Email:{' '}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <TicketStatusMessage>{formErrors.email}</TicketStatusMessage>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </TicketLabel>
        <TicketLabel>
          Message:{' '}
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
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
        <TicketButton
          type="primary"
          htmlType="submit"
          disabled={state.submitting}
        >
          {state.submitting ? 'Sending...' : 'Send'}
        </TicketButton>
        {state.submitting && (
          <TicketStatusMessage>Sending...</TicketStatusMessage>
        )}
        {state.errors && (
  Array.isArray(state.errors) ? (
    state.errors.length > 0 ? (
      <TicketStatusMessage>Error occurred while submitting the form.</TicketStatusMessage>
    ) : null
  ) : (
    <MessageErrors/>
  )
)}
      </TicketForm>
    </TicketFormContainer>
  );
};

export default EmailTicket;
