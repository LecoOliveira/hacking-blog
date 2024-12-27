import Link from 'next/link';

export default function PaginationPage({
  length,
  currentPage,
}: {
  length: number;
  currentPage: number;
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === length;

  return (
    <div className="flex justify-center mt-16">
      <nav className="inline-flex items-center p-1 rounded space-x-2">
        {isFirstPage ? (
          ''
        ) : (
          <Link
            className="opacity-65 p-1 rounded hover:text-[--background] 
            hover:bg-[--foreground] active:bg-slate-400"
            href={`/blog2?page=${currentPage - 1}`}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 
                1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </Link>
        )}
        <p className="opacity-65">{`Página ${currentPage} de ${length}`}</p>
        {isLastPage ? (
          ''
        ) : (
          <Link
            className="opacity-65 p-1 rounded hover:text-[--background] 
            hover:bg-[--foreground] active:bg-slate-400"
            href={`/blog2?page=${currentPage + 1}`}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 
                .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 
                0-.708z"
              />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  );
}
