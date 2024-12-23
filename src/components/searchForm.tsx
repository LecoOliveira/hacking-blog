'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams();
    const string = event.currentTarget.value;

    if (string) {
      params.set('search', string);
    } else {
      params.delete('search');
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-md">
      <form action="" className="relative mx-auto w-max">
        <input
          type="search"
          className="peer cursor-pointer relative z-10 h-8 w-7 
          rounded-full focus:border ease-in-out focus:duration-500 
          focus:mr-0 focus:w-[160px] lg:focus:mr-48 lg:focus:w-full 
          bg-transparent pl-12 outline-none focus:cursor-text focus:pl-10 
          focus:pr-2 lg:focus:pr-4 text-xs lg:text-sm"
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-5 lg:h-8 w-12 border-r 
          border-transparent px-1 lg:px-3"
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
  );
}
