'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const emailSchema = z.object({
  email: z
    .string()
    .nonempty('Preencha com um email válido')
    .email('Email inválido'),
});

type FormData = z.infer<typeof emailSchema>;

export default function NewsLetterFormAbout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
  });

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
      flex flex-col items-start gap-2 relative z-0 w-[360px] lg:w-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="flex flex-row items-center justify-start gap-1 
      lg:gap-2 w-full"
      >
        <input
          className="block w-80 h-11 bg-transparent border 
          border-white/20 appearance-none p-4 rounded-md
          focus:outline-none focus:border-slate-500 text-[10.5px] lg:text-sm"
          type="email"
          id="bd-email"
          placeholder="Seu melhor Email"
          {...register('email')}
        />
        <button
          className="relative w-[130px] lg:w-[120px] h-11 text-[10px] 
          lg:text-[14px] md:px-4 md:py-1 border-none bg-[--foreground] 
          text-[--background] rounded-md hover:bg-blue-500 font-semibold 
          active:opacity-65 transition-all duration-300 hover:text-white"
          type="submit"
        >
          Inscreva-se
        </button>
      </div>
      {errors.email && (
        <span className="error text-[9px] lg:text-xs">
          {errors.email.message}
        </span>
      )}
    </form>
  );
}
