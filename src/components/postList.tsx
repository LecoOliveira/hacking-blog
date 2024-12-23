import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function PostList({
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
      className="group hover:opacity-60 flex flex-col lg:w-[600px] 
      mb-12 hover:-translate-y-1 transition-all duration-300"
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
      <h2 className="text-base lg:text-xl font-semibold italic mt-4 m-auto">
        {' '}
        {title}{' '}
      </h2>
      <div
        className="w-[37px] border m-auto border-dashed 
        border-[#d5d5d6]/70 mt-1.5"
      />
      <p
        className="text-center font-light italic mt-1.5 text-[9px] 
        lg:text-[11px]"
      >
        {' '}
        {dataFormatada}{' '}
      </p>
      <p
        className="text-justify md:text-left text-sm 
        lg:text-base mt-6 m-2 mb-0"
      >
        {description}
      </p>
      <div
        className="h-[1px] w-[300px] lg:w-[500px] self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto my-12"
      />
    </Link>
  );
}
