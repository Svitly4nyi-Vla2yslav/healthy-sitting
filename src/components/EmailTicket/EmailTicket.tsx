import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import { TicketFormContainer, TicketForm, TicketLabel, TicketButton, TicketStatusMessage } from './Email.styled';

const EmailTicket: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Form submission successful');
        form.reset();
      } else {
        setStatus('Form submission failed');
      }
    } catch (error) {
      setStatus('Form submission failed');
    }
  };

  return (
    <TicketFormContainer>
      <TicketForm name="email-ticket" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="email-ticket" />
        <TicketLabel>
          Your Name: <Input type="text" name="name" />
        </TicketLabel>
        <TicketLabel>
          Your Email: <Input type="email" name="email" />
        </TicketLabel>
        <TicketLabel>
          Message: <TextArea name="message" />
        </TicketLabel>
        <TicketButton type="primary" htmlType="submit">Send</TicketButton>
      </TicketForm>
      {status && <TicketStatusMessage>{status}</TicketStatusMessage>}
    </TicketFormContainer>
  );
};

export default EmailTicket;
