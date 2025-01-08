'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/Hack1ng-BL0G.webp';
import HeaderItem, { HeaderItemsType } from './headerItems';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    {
      url: '/about#contato',
      item: 'Contato',
    },
  ];

  return (
    <header
      className="lg:block backdrop-blur-3xl sticky top-0 z-50 h-20 
    bg-[#0e1018]/70"
    >
      <div
        className="flex flex-row items-center w-11/12 md:w-[600px] 
        lg:w-[1000px] mt-6 mx-auto justify-between gap-4"
      >
        <Link href={'/'}>
          <Image
            className="w-48 lg:w-56"
            src={logo}
            alt="Logotipo do blog"
            priority
          />
        </Link>
        <nav>
          <section className="flex sm:hidden">
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-[--foreground]"></span>
              <span className="block h-0.5 w-8 bg-[--foreground]"></span>
              <span className="block h-0.5 w-8 bg-[--foreground]"></span>
            </div>

            <div
              className={`
              absolute w-full h-screen z-20 flex flex-col justify-evenly 
              items-center left-0 top-0 bg-[--background]
              transform transition-all duration-700 ease-in-out ${
                isNavOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-[--foreground]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul
                className="flex flex-col items-center justify-between 
              min-h-[250px]"
              >
                {items.map(({ item, url }, index) => (
                  <HeaderItem
                    onClick={() => setIsNavOpen(false)}
                    url={url}
                    item={item.toUpperCase()}
                    key={index}
                    isActive={pathName === url}
                  />
                ))}
              </ul>
            </div>
          </section>
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
        </nav>
      </div>
    </header>
  );
}
