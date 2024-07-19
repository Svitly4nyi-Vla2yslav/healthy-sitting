import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Message } from './Message';
import {
  Button,
  Form,
  FormContainer,
  FormText,
  FormTitel,
  Input,
  Label,
  TicketStatusMessage,
} from './Email.styled';
import { MessageErrors } from './MessageErrors';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe: React.FC = () => {
  const [state, handleSubmit] = useForm('xkgwgjzn');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
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
    <FormContainer  data-aos="zoom-in" data-aos-delay="700">
      <FormTitel data-translate> Subscribe to receive future updates</FormTitel>
      <Form
        name="subscribe"
        method="POST"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <Label>
          {/* Your Name:{' '} */}
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder=" Your Name"
          />{' '}
          {formErrors.name && (
            <TicketStatusMessage>{formErrors.name}</TicketStatusMessage>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Label>
        <Label>
          {/* Your Email:{' '} */}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />{' '}
          {formErrors.email && (
            <TicketStatusMessage>{formErrors.email}</TicketStatusMessage>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Label>
        <Button  data-translate type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Subscribe'}
        </Button>
        {state.submitting && (
          <TicketStatusMessage  data-translate>Sending...</TicketStatusMessage>
        )}
        {state.errors &&
          (Array.isArray(state.errors) ? (
            state.errors.length > 0 ? (
              <TicketStatusMessage  data-translate>
                Error occurred while submitting the form.
              </TicketStatusMessage>
            ) : null
          ) : (
            <MessageErrors />
          ))}
      </Form>
      <FormText data-translate>
        No spam guaranteed, So please don’t send any spam mail.
      </FormText>
    </FormContainer>
  );
};

export default Subscribe;
