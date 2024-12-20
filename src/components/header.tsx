import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo_blog.svg';

export default function Header() {
  return (
    <header
      className="flex flex-row items-center w-[1000px] mt-8 
      m-auto justify-between"
    >
      <Link href={'/'}>
        <Image className="w-56" src={logo} alt="Logotipo do blog" />
      </Link>
      <div className="flex flex-row gap-3 items-center">
        <div className="mx-auto max-w-md">
          <form action="" className="relative mx-auto w-max">
            <input
              type="search"
              className="peer cursor-pointer relative z-10 h-8 w-7 
              rounded-full focus:border ease-in-out focus:duration-500 
              focus:mr-48 focus:w-full bg-transparent pl-12 outline-none 
              focus:cursor-text focus:pl-10 focus:pr-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12 border-r 
              border-transparent px-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
        <Link className="hover:text-white" href="/blog">
          Posts
        </Link>
        <a className="hover:text-white" href="">
          Categorias
        </a>
        <a className="hover:text-white" href="">
          WriteUps
        </a>
        <a className="hover:text-white" href="">
          Sobre
        </a>
      </div>
    </header>
  );
}
