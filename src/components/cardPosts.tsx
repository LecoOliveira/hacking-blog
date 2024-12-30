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
    <Link
      href={`/blog/${slug}`}
      className="group flex p-4 flex-col w-full h-[350px] md:h-[355px] mb-0 
      sm:mb-12 hover:opacity-70 hover:-translate-y-1 
      transition-all duration-300 active:scale-95"
    >
      <Image
        className="width-full h-[200px] object-cover rounded-xl 
        group-hover:grayscale transition-all 
        duration-300"
        src={cover}
        alt="Imagem de capa do post"
        width={600}
        height={220}
        loading="eager"
      />
      <div className="flex flex-row items-center justify-between mt-4">
        <h2 className="text-sm ml-2 font-semibold italic "> {title} </h2>
        <TagCard tag={tag || ''} cor={cor || ''} />
      </div>
      <p className="font-light ml-2 italic mt-1.5 text-[10px]">
        {dataFormatada}
      </p>
      <p className="w-full text-base md:text-left mt-4 m-2 mb-0 line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
