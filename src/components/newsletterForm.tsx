'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

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
      className="embeddable-buttondown-form mt-8 w-full
      flex flex-col items-center gap-2 relative z-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row items-center gap-1 lg:gap-2 w-full">
        <input
          className="block bg-transparent border border-white/20  
          rounded-md
          p-3 text-[10.5px] lg:text-sm w-full outline-none"
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
        <span className="error text-[9px] lg:text-xs">
          {errors.email.message}
        </span>
      )}

      <button
        className="relative mt-2 w-[100px] lg:w-full text-[10px] 
        lg:text-[14px] px-4 py-2 lg:py-3 bg-[--foreground] text-[--background] 
        hover:bg-blue-500 rounded-md font-semibold hover:text-white
        active:opacity-65 transition-all duration-300 "
        type="submit"
      >
        Inscreva-se
      </button>
    </form>
  );
};

export default NewsletterForm;
