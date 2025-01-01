import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from './tagCard';

export default function CardPost({
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
    <div
      className="flex p-4 flex-col w-full h-[350px] md:h-[355px] mb-0 
      sm:mb-12 transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="overflow-hidden rounded-xl">
        <Image
          className="width-full h-[200px] object-cover rounded-xl 
          hover:grayscale transition-all hover:scale-105 duration-300"
          src={cover}
          alt="Imagem de capa do post"
          width={600}
          height={220}
          loading="eager"
        />
      </Link>
      <div className="flex flex-row items-center justify-between mt-4">
        <Link
          href={`/blog/${slug}`}
          className="text-sm ml-2 font-semibold italic after:duration-500 
          ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
        >
          {' '}
          {title}{' '}
        </Link>
        <TagCard tag={tag || ''} cor={cor || ''} />
      </div>
      <p className="font-light ml-2 italic mt-1.5 text-[10px]">
        {dataFormatada}
      </p>
      <p className="w-full text-base md:text-left mt-4 m-2 mb-0 line-clamp-2">
        {description}
      </p>
    </div>
  );
}
