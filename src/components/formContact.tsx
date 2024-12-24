import { sendEmail } from '@/lib/sendEmail';

export default function FormContact() {
  return (
    <div className="mb-32">
      <div
        className="h-[1px] w-[200px] md:w-[400px] lg:w-[800px] self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mt-32 mb-24"
      />
      <form
        action={sendEmail}
        className="flex flex-col items-center justify-center w-[340px] 
        sm:w-[500px] md:w-[700px] lg:w-[800px]
        h-full m-auto"
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
          type="submit"
          className="w-[120px] sm:w-[200px] md:w-[300px] h-[40px] 
          bg-[#d5d5d6] text-[#0e1018] 
          font-semibold hover:bg-opacity-70
          rounded-md mt-4"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
