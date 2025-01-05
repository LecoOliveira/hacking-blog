import Link from 'next/link';
export interface HeaderItemsType {
  item: string;
  url: string;
  isActive?: boolean;
}

export default function HeaderItem({ item, url, isActive }: HeaderItemsType) {
  return (
    <li
      className="hover:text-white text-sm lg:text-base font-medium 
          after:duration-500 ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
    >
      <Link
        href={url}
        className={`
          ${
            isActive
              ? 'underline decoration-2 decoration-blue-500 underline-offset-8'
              : ''
          }
          `}
      >
        {item}
      </Link>
    </li>
  );
}
