import React from 'react';
import { useForm } from 'react-hook-form';
import email from '../../public/mail.svg';
import Image from 'next/image';

type FormData = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    window.open('https://buttondown.com/AlexRocha', 'popupwindow');
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://buttondown.com/api/emails/embed-subscribe/AlexRocha';
    form.target = 'popupwindow';

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = data.email;
    form.appendChild(emailInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    reset();
  };

  return (
    <form
      className="embeddable-buttondown-form mt-8 
      flex flex-col items-center gap-2 relative z-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <label htmlFor="bd-email">Enter your email</label> */}
      <div className="flex flex-row items-center gap-2">
        <Image className="w-10" src={email} alt="" />
        <input
          className="block bg-transparent border-b-2 appearance-none 
          focus:outline-none text-sm"
          type="email"
          id="bd-email"
          placeholder="Seu melhor Email"
          {...register('email', {
            required: 'Preencha com um email válido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email inválido',
            },
          })}
        />
      </div>
      {errors.email && (
        <span className="error text-xs">{errors.email.message}</span>
      )}

      <button
        className="relative mt-4 w-[120px] text-[12px] px-4 py-1 
        border bg-[#d5d5d6] text-[#0e1018] rounded-lg
        hover:bg-white font-semibold active:opacity-65"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
