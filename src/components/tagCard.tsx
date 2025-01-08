import Link from 'next/link';
import { colorClasses, colorClassesBg } from './articles/tags';

export default function TagCard({ tag, cor }: { tag: string; cor: string }) {
  return (
    <Link
      href={`/blog?search=${tag.toLowerCase()}`}
      className={`
        border ${colorClassesBg[cor]} hover:text-[--background] mr-2 
        hover:scale-110 transition-all duration-200 ${
          cor
            ? colorClasses[cor] || 'border-gray-200 text-gray-200'
            : 'border-gray-200 text-gray-200'
        } px-2 py-1 rounded-lg text-[10px] font-semibold w-min
      `}
    >
      {tag ? `#${tag}` : ''}
    </Link>
  );
}
