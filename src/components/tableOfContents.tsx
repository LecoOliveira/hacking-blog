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

  return (
    <div className="hidden md:block sticky top-6 z-10">
      <h5 className="text-center lg:text-left font-semibold mb-4 leading-6">
        Conteúdo da página
      </h5>
      <div className="">
        <div className="">
          <ul className="text-xs lg:text-sm lg:leading-6">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.id}`}
                  className={`toc-item block py-1 font-normal ${
                    activeId === item.id ? 'text-blue-300' : 'text-white/50'
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
