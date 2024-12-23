import Image from 'next/image';
import image from '../../../public/profilePicture/IMG_20221210_151515_627.jpg';
import FormContact from '@/components/formContact';

export default function Page() {
  return (
    <div className="mb-48">
      <div className="h-screen">
        <section
          className="grid grid-cols-2 w-[900px] h-[500px] mx-auto mt-40 
          bg-white/5 rounded-2xl rounded-l-full items-center"
        >
          <article
            className="m-8 w-[500px] h-[300px] text-center 
            animate-fadeIn"
          >
            <h1 className="text-6xl font-semibold mb-4"> Olá! </h1>
            <p
              className="text-pretty font-extralight w-96 justify-center 
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
            className="m-8 ml-24 w-[430px] h-[430px] rounded-full 
            animate-slideLeft"
            quality={100}
            src={image}
            alt="Imagem de perfil"
          />
        </section>
      </div>
      <FormContact />
    </div>
  );
}
