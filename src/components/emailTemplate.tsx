import * as React from 'react';

export interface EmailTemplateProps {
  firstName: string;
  email: string;
  texto: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  texto,
}) => (
  <div>
    <h1>
      Email recebido de {firstName}, do email {email}!
    </h1>
    <p>{texto}</p>
  </div>
);
