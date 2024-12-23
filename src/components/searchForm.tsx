'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const string = event.currentTarget.value;

    if (string) {
      params.set('search', string);
    } else {
      params.delete('search');
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className=" max-w-md">
      <form className="flex items-center w-56 lg:w-72 h-4 mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div
            className="absolute inset-y-0 start-0 flex items-center ps-3 
            pointer-events-none "
          ></div>
          <input
            type="search"
            id="simple-search"
            className="bg-transparent text-slate-200 h-10
            text-sm rounded-lg block w-full p-2.5 border border-gray-500 
            placeholder-gray-400"
            placeholder="Buscar..."
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
