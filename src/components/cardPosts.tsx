import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function CardPost({
  cover,
  title,
  data,
  description,
  slug,
}: PostProps) {
  const dataFormatada = formatarDataEmPortugues(data);

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex p-4 flex-col w-full h-[350px] md:h-[355px] mb-12"
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
      <h2 className="text-sm ml-2 font-semibold italic mt-4 "> {title} </h2>
      <p className="font-light ml-2 italic mt-1.5 text-[10px]">
        {dataFormatada}
      </p>
      <p className="w-full text-sm md:text-left mt-4 m-2 mb-0 line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
