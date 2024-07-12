import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import {
  TicketFormContainer,
  TicketForm,
  TicketLabel,
  TicketButton,
} from './Email.styled';
import { Message } from './Message';

const EmailTicket: React.FC = () => {
  const [state, handleSubmit] = useForm('xgvwvayg');
  if (state.succeeded) {
    return <Message/>;
  }

  return (
    <TicketFormContainer>
      <TicketForm
        name="email-ticket"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="email-ticket" />
        <TicketLabel>
          Your Name: <Input type="text" name="name" />
        </TicketLabel>
        <TicketLabel>
          Your Email: <Input type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </TicketLabel>
        <TicketLabel>
          Message: <TextArea id="message" name="message" />
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
          Send
        </TicketButton>
      </TicketForm>
    </TicketFormContainer>
  );
};

export default EmailTicket;
