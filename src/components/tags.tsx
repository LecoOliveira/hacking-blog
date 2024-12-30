import Link from 'next/link';

type Tag = {
  name: string;
  color: string;
};

type TagsProps = {
  tag: Tag[];
};

export const colorClasses: Record<string, string> = {
  blue: 'border-blue-200 text-blue-200',
  yellow: 'border-yellow-200 text-yellow-200',
  red: 'border-red-200 text-red-200',
  green: 'border-green-200 text-green-200',
  orange: 'border-orange-200 text-orange-200',
  gray: 'border-gray-200 text-gray-200',
  default: 'border-gray-200 text-gray-200',
  pink: 'border-pink-200 text-pink-200',
  brown: 'border-orange-200 text-yellow-200',
};

export const colorClassesBg: Record<string, string> = {
  blue: 'hover:bg-blue-200',
  yellow: 'hover:bg-yellow-200',
  red: 'hover:bg-red-200',
  green: 'hover:bg-green-200',
  orange: 'hover:bg-orange-200',
  gray: 'hover:bg-gray-200',
  default: 'hover:bg-gray-200',
  pink: 'hover:bg-pink-200',
  brown: 'hover:bg-orange-200',
};

export default async function Tags({ tag }: TagsProps) {
  return (
    <div className="relative flex space-x-2 ml-4 mb-4">
      {tag?.map((t, index) => (
        <Link
          href={`/blog?search=${t.name.toLowerCase()}`}
          key={index}
          className={`
                      border
                      ${colorClasses[t.color] || 'text-gray-200'} 
                      ${colorClasses[t.color] || 'border-gray-100'} text-[8px]
                      sm:text-[9px] font-semibold px-2 py-1 rounded-lg 
                      cursor-pointer ${colorClassesBg[t.color]} hover:scale-110
                      hover:text-[--background] transition-all duration-200 
                  `}
        >
          {`#${t.name}`}
        </Link>
      ))}
    </div>
  );
}
