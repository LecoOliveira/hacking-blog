'use server';

import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_TOKEN);

export async function sendEmail(formData: FormData) {
  const firstName = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const texto = formData.get('texto') as string;

  if (!firstName || !email || !texto) {
    throw new Error('Todos os campos são obrigatórios!');
  }

  try {
    await resend.emails.send({
      from: `Hacking BLOG <${process.env.EMAIL}>`,
      to: `${process.env.EMAIL_TO}`,
      subject: `Email recebido de ${firstName}`,
      react: EmailTemplate({ firstName, email, texto }),
    });
    console.log({ success: true, message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Erro ao enviar o email.');
  }
}
