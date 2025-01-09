'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface Item {
  id: string;
  text: string;
}

export interface TableContentProps {
  items: Item[];
}

export default function TableContent({ items }: TableContentProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1,
      },
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Margem superior desejada
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetPosition = rect.top + scrollTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="">
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto"
      />
      <h5 className="text-center font-semibold my-3 leading-6">
        Conteúdo da página
      </h5>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mb-4"
      />
      <div className="">
        <div className="">
          <ul className="text-xs lg:text-sm lg:leading-6 text-start ">
            {items.map((item, index) => (
              <li key={index} className="text-sm ml-4">
                <Link
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`toc-item block py-1 font-normal ${
                    activeId === item.id ? 'text-blue-500' : 'text-white/50'
                  } 
                    hover:text-white`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
