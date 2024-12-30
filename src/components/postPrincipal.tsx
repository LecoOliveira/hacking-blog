import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import Link from 'next/link';
// import TagCard from './tagCard';

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
        duration-300 flex-col w-11/12 sm:w-[500px] md:w-[600px] 
        lg:w-[1000px] hover:-translate-y-1 place-self-center
        sm:mt-10 sm:mb-10 md:mb-20 animate-slideUp active:scale-95"
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
      {/* <div className="m-auto">
        <TagCard tag={tag} cor={cor} />
      </div> */}
      <p
        className="text-center font-light italic mt-1.5 
        text-[9px] sm:text-[11px]"
      >
        {dataFormatada}
      </p>
      <p
        className="line-clamp-2 sm:line-clamp-none text-center 
        text-sm md:text-base mt-4 md:mt-10 m-2 mb-0"
      >
        {description}
      </p>
    </Link>
  );
}
