import Link from 'next/link';
export interface HeaderItemsType {
  item: string;
  url: string;
}

export default function HeaderItem({ item, url }: HeaderItemsType) {
  return (
    <li
      className="hover:text-white text-sm lg:text-base font-medium 
          after:duration-500 ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
    >
      <Link href={url}>{item}</Link>
    </li>
  );
}
