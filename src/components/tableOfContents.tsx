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
    <div className="sticky top-6 z-10 shadow-md">
      <h5
        className="text-slate-900 font-bold italic mb-4 leading-6 
        dark:text-slate-100"
      >
        Conteúdo da página
      </h5>
      <div className="">
        <div className="">
          <ul className="text-slate-100 text-sm leading-6">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.id}`}
                  className={`toc-item block py-1 font-medium  ${
                    activeId === item.id
                      ? ' dark:text-blue-500'
                      : 'dark:text-slate-300/60'
                  } 
                    hover:text-slate-900  dark:hover:text-slate-100 `}
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
