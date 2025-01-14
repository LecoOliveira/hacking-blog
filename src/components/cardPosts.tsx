import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import calendar from '../../public/calendar.webp';
import userIcon from '../../public/icons8-user-male-52-_1_.webp';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from './tagCard';
import ShareLink from './socialShareLinks';

export default function CardPost({
  cover,
  title,
  data,
  description,
  slug,
  tag,
  cor,
  user,
}: PostProps) {
  const dataFormatada = formatarDataEmPortugues(data);

  return (
    <div
      className="flex p-4 flex-col w-full h-[380px] md:h-[380px] mb-0
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
      <div className="flex flex-row items-start justify-between mt-4 gap-2">
        <Link
          href={`/blog/${slug}`}
          className="text-sm ml-2 font-semibold italic after:duration-500 
          ease-out after:block after:h-0.5 after:w-full 
          after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
          after:transition-transform after:hover:origin-bottom-left 
          after:hover:scale-x-100"
        >
          {title}
        </Link>
        <TagCard tag={tag || ''} cor={cor || ''} />
      </div>
      <div className="font-light items-center mt-1.5 text-[10px] flex flex-row">
        <Image
          className="mx-2 opacity-65"
          src={calendar}
          alt="Ícone de calendário"
          width={14}
          height={14}
        />
        <p>{dataFormatada}</p>
        <Image
          className="mx-2 opacity-65"
          src={userIcon}
          alt="Ícone de user"
          width={14}
          height={14}
        />
        <Link
          href={'/about'}
          className="after:duration-500 ease-out after:block after:h-0.5 
          after:w-full after:origin-bottom-right after:scale-x-0 
          after:bg-blue-500 after:transition-transform 
          after:hover:origin-bottom-left after:hover:scale-x-100"
        >
          {user}
        </Link>
      </div>
      <p
        className="w-full text-sm lg:text-base md:text-left mt-1 m-2 
        line-clamp-2"
      >
        {description}
      </p>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mt-8 md:mt-4 lg:mt-8 lg:mb-0"
      />
      <div className="m-auto -mt-2 lg:-mt-2 z-10">
        <ShareLink slug={slug} />
      </div>
    </div>
  );
}
