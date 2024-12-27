import Image from 'next/image';
import logo from '../../public/logo_blog.svg';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import github from '../../public/github.svg';
import linkedin from '../../public/linkedin.svg';
import email from '../../public/email.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center relative gap-4 inset-x-0 mt-auto
      bottom-8"
    >
      <div
        className="w-[140px] sm:w-[200px] border m-auto border-dashed 
        border-[#d5d5d6]/70 mt-1.5 opacity-40"
      />
      <Image
        className="w-32 sm:w-auto opacity-40"
        src={logo}
        alt="Logotipo do blog Hacking BLOG"
        priority
      />
      <div
        className="text-xs sm:text-base opacity-40 
        font-extralight tracking-wide"
      >
        © Copyrigth 2024 - Alex Rocha
      </div>
      <div className="group flex flex-row gap-2">
        <Link href={''}>
          <Image
            className="w-3.5 opacity-40 hover:opacity-100"
            src={instagram}
            alt="Logotipo do instagram"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-3.5 opacity-40 hover:opacity-100 transition-opacity"
            src={linkedin}
            alt="Logotipo do linkedin"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-3.5 opacity-40 hover:opacity-100"
            src={github}
            alt="Logotipo do github"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-3.5 opacity-40 hover:opacity-100"
            src={whatsapp}
            alt="Logotipo do whatsapp"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-3.5 opacity-40 hover:opacity-100"
            src={email}
            alt="Logotipo do email"
          />
        </Link>
      </div>
    </footer>
  );
}
