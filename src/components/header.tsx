'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo_blog.svg';
import HeaderItem, { HeaderItemsType } from './headerItems';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const items: HeaderItemsType[] = [
    {
      url: '/blog',
      item: 'Posts',
    },
    {
      url: '/writeups',
      item: 'Writeups',
    },
    {
      url: '/about',
      item: 'Sobre',
    },
  ];
  console.log(pathName);
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
      <ul className="hidden sm:flex flex-row gap-2 lg:gap-3 items-center">
        {items.map(({ item, url }, index) => (
          <HeaderItem
            url={url}
            item={item}
            key={index}
            isActive={pathName === url}
          />
        ))}
      </ul>
    </header>
  );
}
