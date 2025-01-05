import Image from 'next/image';
import logo from '../../public/logo_blog.svg';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col items-center relative gap-4 inset-x-0 mt-auto
      bottom-8"
    >
      <Image
        className="w-32 sm:w-auto opacity-40"
        src={logo}
        alt="Logotipo do blog Hacking BLOG"
        priority
      />
      <div
        className="text-base sm:text-lg opacity-40 
        font-extralight tracking-wide"
      >
        © Copyrigth {year} - hackingblog.online
      </div>
      <div>
        <Link
          href={'/privacy'}
          className="text-[9px] sm:text-xs opacity-40 
          hover:opacity-100 transition-all duration-300"
        >
          Políticas de Privacidade
        </Link>
        <span className="opacity-40"> - </span>
        <Link
          href={'/terms'}
          className="text-[9px] sm:text-xs opacity-40 
          hover:opacity-100 transition-all duration-300"
        >
          Termos e Condições
        </Link>
      </div>
    </footer>
  );
}
