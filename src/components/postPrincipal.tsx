import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({
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
      className="group flex hover:opacity-60 transition-all 
        duration-300 flex-col w-[360px] sm:w-[500px] md:w-[600px] 
        lg:w-[1000px] hover:-translate-y-1 place-self-center
        mt-10 mb-10 md:mb-20 animate-slideUp"
    >
      <Image
        className="width-full lg:h-[300px] object-cover rounded-xl 
        group-hover:grayscale transition-all duration-300"
        src={cover}
        alt="Imagem de capa do post"
        width={1000}
        height={300}
        loading="eager"
      />
      <h2 className="text-lg md:text-2xl font-semibold italic mt-4 m-auto">
        {title}
      </h2>
      <div
        className="w-[37px] border m-auto border-dashed
      border-[#d5d5d6]/70 mt-1.5"
      ></div>
      <p
        className="text-center font-light italic mt-1.5 
        text-[9px] sm:text-[11px]"
      >
        {dataFormatada}
      </p>
      <p
        className="text-justify md:text-left text-sm md:text-base 
        mt-4 md:mt-10 m-2 mb-0"
      >
        {description}
      </p>
      <div
        className="h-[1px] w-[200px] md:w-[400px] lg:w-[800px] self-stretch 
        bg-gradient-to-tr from-transparent via-neutral-500 to-transparent 
        opacity-25 dark:via-neutral-200 mx-auto my-16"
      />
    </Link>
  );
}
