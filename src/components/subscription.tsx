import Image from 'next/image';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import github from '../../public/github.svg';
import linkedin from '../../public/linkedin.svg';
import Link from 'next/link';
import NewsletterForm from './newsletterForm';

export default function Subscription() {
  return (
    <div className="flex flex-col mt-10 sm:mt-32 text-center items-center">
      <h2 className="text-xs lg:text-base font-semibold italic tracking-tight">
        SIGMA-ME & SUBSCREVA
      </h2>
      <div
        className="flex flex-row gap-1 lg:gap-3 items-center 
        place-content-center mt-8"
      >
        <Link href={''}>
          <Image
            className="w-4 lg:w-6 h-6 opacity-80 hover:opacity-100"
            src={instagram}
            alt="Logotipo do instagram"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-4 lg:w-6 h-6 opacity-80 hover:opacity-100"
            src={linkedin}
            alt="Logotipo do linkedin"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-4 lg:w-6 h-6 opacity-80 hover:opacity-100"
            src={github}
            alt="Logotipo do github"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-4 lg:w-6 h-6 opacity-80 hover:opacity-100"
            src={whatsapp}
            alt="Logotipo do whatsapp"
          />
        </Link>
      </div>
      <h3 className="tracking-tight mt-6 text-xs md:w-2/4">
        Cadastre-se para receber os últimos posts
      </h3>
      <NewsletterForm />
    </div>
  );
}
