'use server';

import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_TOKEN);

const formDataSchema = z.object({
  nome: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  texto: z.string().nonempty('Texto é obrigatório'),
});

export async function sendEmail(
  _: unknown,
  formData: FormData,
): Promise<{ success: boolean; message: string } | null> {
  const parsedData = formDataSchema.safeParse({
    nome: formData.get('nome'),
    email: formData.get('email'),
    texto: formData.get('texto'),
  });

  if (!parsedData.success) {
    return {
      success: false,
      message: parsedData.error.errors.map((e) => e.message).join(', '),
    };
  }
  const { nome, email, texto } = parsedData.data;

  try {
    await resend.emails.send({
      from: `Hacking BLOG <${process.env.EMAIL}>`,
      to: `${process.env.EMAIL_TO}`,
      subject: `Email recebido de ${nome}`,
      react: EmailTemplate({ firstName: nome, email, texto }),
    });
    console.log({ success: true, message: 'Email enviado com sucesso!' });

    return { success: true, message: 'Email enviado com sucesso!' };
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    return { success: false, message: 'Erro ao enviar email!' };
  }
}
