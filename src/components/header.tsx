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
          className="hover:text-white text-sm lg:text-base font-medium 
          after:duration-500 ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
          href="/blog"
        >
          Posts
        </Link>
        <a
          className="hover:text-white text-sm lg:text-base font-medium 
          after:duration-500 ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          :transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
          href="/writeups"
        >
          WriteUps
        </a>
        <a
          className="hover:text-white text-sm lg:text-base font-medium 
          after:duration-500 ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
          href="/about"
        >
          Sobre
        </a>
      </div>
    </header>
  );
}
