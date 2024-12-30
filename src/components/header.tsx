import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo_blog.svg';

export default function Header() {
  return (
    <header
      className="flex flex-row items-center md:w-[600px] lg:w-[1000px]
      mt-8 mx-auto justify-center md:justify-between"
    >
      <Link href={'/'}>
        <Image
          className="w-48 lg:w-56"
          src={logo}
          alt="Logotipo do blog"
          priority
        />
      </Link>
      <div className="hidden sm:flex flex-row gap-2 lg:gap-3 items-center">
        <Link
          className="hover:text-white text-sm lg:text-base font-medium"
          href="/blog"
        >
          Posts
        </Link>
        <a
          className="hover:text-white text-sm lg:text-base font-medium"
          href="/writeups"
        >
          WriteUps
        </a>
        <a
          className="hover:text-white text-sm lg:text-base font-medium"
          href="/about"
        >
          Sobre
        </a>
      </div>
    </header>
  );
}
