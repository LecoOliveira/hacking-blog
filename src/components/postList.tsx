import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from './tagCard';

export default function PostList({
  cover,
  title,
  data,
  description,
  slug,
  tag,
  cor,
}: PostProps) {
  const dataFormatada = formatarDataEmPortugues(data);
  return (
    <Link
      href={`/blog/${slug}`}
      className="group hover:opacity-60 flex flex-col lg:w-[600px] 
      sm:mb-12 hover:-translate-y-1 transition-all duration-300 active:scale-95"
    >
      <Image
        className="width-full h-[150px] lg:h-[220px] object-cover rounded-xl 
        group-hover:grayscale transition-all duration-300"
        src={cover}
        alt="Imagem de capa do post"
        width={600}
        height={220}
        loading="lazy"
      />
      <div className="flex flex-row items-center justify-between mt-4 py-0">
        <h2 className="ml-2 text-base lg:text-xl font-semibold italic">
          {title}
        </h2>
        <TagCard tag={tag || ''} cor={cor || ''} />
      </div>
      <p
        className="ml-2 font-light italic mt-1.5 text-[9px] 
        lg:text-[11px]"
      >
        {dataFormatada}
      </p>
      <p
        className="md:text-left text-sm line-clamp-2
        lg:text-base mt-6 m-2 mb-0"
      >
        {description}
      </p>
    </Link>
  );
}
