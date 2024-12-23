'use client';

import { Input } from '@material-tailwind/react';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchForm() {
  // const searchParams = useSearchParams();
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
    <div className=" max-w-md">
      <form action="" className="relative mx-auto w-72">
        <Input
          className=""
          color="white"
          type="search"
          onChange={handleChange}
          variant="standard"
          label="Busque por nome"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          crossOrigin=""
        />
        {/* <input
          type="search"
          className="bg-transparent border"
          onChange={handleChange}
        /> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-5 lg:h-8 w-12 px-1 lg:px-3"
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
        </svg> */}
      </form>
    </div>
  );
}
