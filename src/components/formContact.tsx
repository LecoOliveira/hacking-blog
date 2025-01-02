'use client';

import { sendEmail } from '@/lib/sendEmail';
import { useRef, useState } from 'react';
import AlertComponent from './alert';

export default function FormContact() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (formData: FormData) => {
    setIsPending(true);
    const response = await sendEmail(null, formData);
    setResult(response);
    setIsPending(false);
  };

  const handleCloseAlert = () => {
    setResult(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await handleSendEmail(formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="mb-32">
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-10 mx-auto mt-24 mb-12"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-[340px] 
        sm:w-[500px] md:w-[700px] lg:w-[800px] mt-24
        h-full m-auto"
        ref={formRef}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Entre em contato
        </h1>
        <p className="text-center w-full font-thin mb-12 text-xs sm:text-sm">
          Sinta-se à vontade para entrar em contato! Se você tiver uma pergunta,
          feedback ou uma proposta de colaboração, adoraria ouvir de você.
        </p>
        <div
          className="flex flex-col sm:flex-row w-full items-center 
          justify-between"
        >
          <input
            name="nome"
            type="text"
            placeholder="Nome"
            className="w-full sm:w-[245px] md:w-[345px] lg:w-[395px] h-[40px] 
            border border-white/10 rounded-md p-2 mb-4 bg-transparent 
            focus:outline-none placeholder:text-white/50 placeholder:text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full sm:w-[245px] md:w-[345px] lg:w-[395px] 
            h-[40px] border border-white/10
            rounded-md p-2 mb-4 bg-transparent focus:outline-none 
            placeholder:text-white/50 placeholder:text-sm"
          />
        </div>
        <textarea
          placeholder="Mensagem"
          name="texto"
          className="w-full h-[250px] border border-white/10 
          rounded-md p-2 mb-4 bg-transparent focus:outline-none 
          placeholder:text-white/50 placeholder:text-sm"
          required
        />
        <button
          disabled={isPending}
          type="submit"
          className="w-[120px] sm:w-[200px] md:w-[300px] h-[40px] 
          bg-[--foreground] text-[--background] transition-all duration-300
          font-semibold hover:bg-blue-500 hover:text-white active:opacity-55
          rounded-md mt-4"
        >
          {isPending ? 'Enviando...' : 'Enviar'}
        </button>
        {result !== null && result !== undefined && (
          <div className="mt-4 animate-fadeIn">
            <AlertComponent
              message={result.message}
              severity={result.success ? 'success' : 'error'}
              onClose={handleCloseAlert}
            />
          </div>
        )}
      </form>
    </div>
  );
}
