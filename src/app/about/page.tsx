import Image from 'next/image';
import image from '../../../public/profilePicture/IMG_20221210_151515_627.jpg';
import FormContact from '@/components/formContact';

export default function Page() {
  return (
    <div className="mb-48">
      <div className="">
        <section
          className="flex flex-col sm:grid grid-cols-2 w-[280px] sm:w-[550px] 
          md:w-[700px] lg:w-[900px] h-[460px] sm:h-[320px] md:h-[400px] 
          lg:h-[500px] mx-auto relative sm:right-9 mt-12 sm:mt-40 bg-white/5 
          rounded-2xl rounded-t-full sm:rounded-r-none sm:rounded-l-full 
          items-center"
        >
          <article
            className="mt-16 sm:m-8 w-[220px] sm:w-[330px] md:w-[400px] 
            lg:w-[500px] sm:h-[200px] md:h-[250px] lg:h-[300px] text-center 
            animate-fadeIn"
          >
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4">Olá!</h1>
            <p
              className="text-xs sm:text-xs md:text-sm lg:text-base 
              font-extralight w-full sm:w-72 md:w-80 lg:w-96 justify-center 
              mx-auto"
            >
              E aí! Sou Alex Rocha, apaixonado por hacking e cyber security e
              tecnologia no geral. Criei este blog para compartilhar meus
              conhecimentos ao decorrer dos meus estudos sobre hacking. Aqui
              você vai encontrar conteúdos práticos e diretos e com linguagem de
              fácil entendimento. Venha aprender comigo e trocar ideias? Fique à
              vontade! 🚀
            </p>
          </article>
          <Image
            className="p-12 sm:p-0 sm:m-8 w-100px h-100px sm:ml-24 lg:w-[430px] 
            lg:h-[430px] rounded-full animate-slideUp
            sm:animate-slideLeft"
            src={image}
            alt="Imagem de perfil"
            priority
          />
        </section>
      </div>
      <FormContact />
    </div>
  );
}
