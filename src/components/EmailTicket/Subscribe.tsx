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
import { useTranslation } from 'react-i18next';

const Subscribe: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation hook
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
      errors.name = t('Subscribe.nameError');
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = t('Subscribe.emailError');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('Subscribe.emailInvalid');
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
    <FormContainer data-aos="zoom-in" data-aos-delay="100">
      <FormTitel data-translate>{t('Subscribe.subscribeTitle')}</FormTitel>
      <Form
        name="subscribe"
        method="POST"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('Subscribe.namePlaceholder')}
          />
          {formErrors.name && (
            <TicketStatusMessage>{formErrors.name}</TicketStatusMessage>
          )}
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('Subscribe.emailPlaceholder')}
          />
          {formErrors.email && (
            <TicketStatusMessage>{formErrors.email}</TicketStatusMessage>
          )}
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </Label>
        <Button data-translate type="submit" disabled={state.submitting}>
          {state.submitting ? t('Subscribe.sending') : t('Subscribe.subscribeButton')}
        </Button>
        {state.submitting && (
          <TicketStatusMessage data-translate>{t('Subscribe.sending')}</TicketStatusMessage>
        )}
        {state.errors &&
          (Array.isArray(state.errors) ? (
            state.errors.length > 0 ? (
              <TicketStatusMessage data-translate>
                {t('Subscribe.error')}
              </TicketStatusMessage>
            ) : null
          ) : (
            <MessageErrors />
          ))}
      </Form>
      <FormText data-translate>
        {t('Subscribe.noSpam')}
      </FormText>
    </FormContainer>
  );
};

export default Subscribe;
