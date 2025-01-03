import Link from 'next/link';

export default function Navigation({ title }: { title: string }) {
  return (
    <nav
      className="place-self-center md:place-self-start flex mb-4 lg:mb-0"
      aria-label="Breadcrumb"
    >
      <ol
        className="inline-flex items-center space-x-1 md:space-x-2 
        rtl:space-x-reverse"
      >
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium 
            text-gray-400 hover:text-white after:duration-500 ease-out 
            after:block after:h-0.5 after:w-full after:origin-bottom-right 
            after:scale-x-0 after:bg-blue-500 after:transition-transform 
            after:hover:origin-bottom-left after:hover:scale-x-100"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              href="/blog"
              className="ms-1 text-xs sm:text-sm font-medium 
              md:ms-2 text-gray-400 hover:text-white after:duration-500 
              ease-out after:block after:h-0.5 after:w-full 
              after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
              after:transition-transform after:hover:origin-bottom-left 
              after:hover:scale-x-100"
            >
              Blog
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              className="ms-1 text-xs sm:text-sm font-medium 
              text-gray-500 md:ms-2"
            >
              {`${title}`}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
