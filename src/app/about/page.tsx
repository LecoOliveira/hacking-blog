import Image from 'next/image';
import image from '../../../public/profilePicture/IMG_20221210_151515_627.jpg';
import instagram from '../../../public/instagram-_1_.webp';
import linkedin from '../../../public/linkedin.webp';
import github from '../../../public/github.webp';
import FormContact from '@/components/formContact';
import NewsLetterFormAbout from '@/components/newsLetterFormAbout';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mb-48">
      <div className="">
        <section
          className="flex flex-col-reverse sm:grid grid-cols-2 w-[320px] 
          sm:w-[550px] md:w-[700px] lg:w-[1050px] h-[460px] sm:h-[320px] 
          md:h-[400px] lg:h-[500px] mx-auto relative mt-40
          items-center"
        >
          <article
            className="flex flex-col mt-0 sm:m-8 w-[320px] sm:w-[330px] 
            md:w-[400px] lg:w-[550px] sm:h-[200px] md:h-[250px] lg:h-[300px] 
            text-center content-center items-center sm:items-start 
            animate-slideUp"
          >
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
              Olá, Sou Alex Rocha
            </h1>
            <p
              className="text-xs sm:text-xs md:text-sm lg:text-lg 
              font-normal w-full sm:w-72 md:w-80 lg:w-full text-start 
              mx-auto opacity-75"
            >
              Apaixonado por hacking, cyber security e tecnologia. Criei este
              blog para compartilhar meus conhecimentos ao decorrer dos meus
              estudos sobre hacking. Venha aprender comigo e trocar ideias? Seja
              bem vindo! 🚀
            </p>
            <NewsLetterFormAbout />
            <nav className="flex flex-row gap-4 mt-6 ">
              <h2 className="opacity:65">Siga-me: </h2>
              <ul className="flex flex-row gap-4">
                <li>
                  <Link
                    href="https://www.instagram.com/lecooliveira_/"
                    target="_blank"
                  >
                    <Image
                      src={instagram}
                      alt="ícone do instagram"
                      width={24}
                      className="cursor-pointer opacity-65 hover:opacity-100 
                      transition-all duration-300"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/alex-rocha-23119411b/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="ícone do linkedin"
                      width={24}
                      className="cursor-pointer opacity-65 hover:opacity-100
                      transition-all duration-300"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/LecoOliveira/" target="_blank">
                    <Image
                      src={github}
                      alt="ícone do github"
                      width={24}
                      className="cursor-pointer opacity-65 hover:opacity-100
                      transition-all duration-300"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </article>
          <div className="flex justify-center items-center">
            <Image
              className="p-12 sm:p-0 sm:m-8 w-100px h-100px sm:ml-24 
              lg:w-[400px] object-cover sm:h-[200px] md:h-[250px] top-20
              lg:h-[400px] rounded-full animate-slideUp drop-shadow-xl
              sm:animate-slideLeft "
              src={image}
              alt="Imagem de perfil"
              priority
            />
          </div>
        </section>
      </div>
      <FormContact />
    </div>
  );
}
