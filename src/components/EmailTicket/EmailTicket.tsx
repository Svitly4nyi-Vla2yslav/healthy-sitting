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
import { useTranslation } from 'react-i18next';

const EmailTicket: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation hook
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
      errors.name = t('EmailTicket.nameError');
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = t('EmailTicket.emailError');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('EmailTicket.emailInvalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = t('EmailTicket.messageError');
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

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  if (state.succeeded) {
    return <Message />;
  }

  return (
    <TicketFormContainer id="contact" data-aos="zoom-in" data-aos-delay="100">
      <FormTitel data-translate>{t('EmailTicket.formTitle')}</FormTitel>
      <FormText data-translate>{t('EmailTicket.formDescription')}</FormText>
      <TicketForm
        name="email-ticket"
        method="POST"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="email-ticket" />
        <TicketLabel>
          <Input
            data-translate
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('EmailTicket.namePlaceholder')}
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
            placeholder={t('EmailTicket.emailPlaceholder')}
          />
          {formErrors.email && (
            <TicketStatusMessage>{formErrors.email}</TicketStatusMessage>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </TicketLabel>
        <TicketLabel>
          <TicketTextArea
            data-translate
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('EmailTicket.messagePlaceholder')}
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
        <Button data-translate type="submit" disabled={state.submitting}>
          {state.submitting ? t('EmailTicket.sending') : t('EmailTicket.submitButton')}
        </Button>
        {state.submitting && (
          <TicketStatusMessage data-translate>{t('EmailTicket.sending')}</TicketStatusMessage>
        )}
        {state.errors &&
          (Array.isArray(state.errors) ? (
            state.errors.length > 0 ? (
              <TicketStatusMessage data-translate>
                {t('EmailTicket.error')}
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
