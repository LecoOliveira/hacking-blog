import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import Image from 'next/image';
import calendar from '../../public/calendar.webp';
import userIcon from '../../public/icons8-user-male-52-_1_.webp';
import Link from 'next/link';
import ShareLink from './socialShareLinks';

// import TagCard from './tagCard';

export default function Post({
  cover,
  title,
  data,
  description,
  slug,
  user,
}: PostProps) {
  const dataFormatada = formatarDataEmPortugues(data);
  return (
    <div
      className="flex transition-all 
        duration-300 flex-col w-11/12 sm:w-[500px] md:w-[600px] 
        lg:w-[1000px] place-self-center
        sm:mt-10 animate-slideUp"
    >
      <Link href={`/blog/${slug}`} className="overflow-hidden rounded-xl">
        <Image
          className="width-full lg:h-[300px] object-cover rounded-xl
          hover:grayscale hover:scale-105 
          transition-all duration-300"
          src={cover}
          alt="Imagem de capa do post"
          width={1000}
          height={300}
          loading="eager"
        />
      </Link>
      <Link
        href={`/blog/${slug}`}
        className="text-lg md:text-2xl font-semibold italic mt-4 
        after:duration-500 ease-out after:block after:h-0.5 after:w-full 
        after:origin-bottom-right after:scale-x-0 after:bg-blue-500 
        after:transition-transform after:hover:origin-bottom-left 
        after:hover:scale-x-100
        m-auto"
      >
        {title}
      </Link>
      {/* <div className="m-auto">
        <TagCard tag={tag} cor={cor} />
      </div> */}
      <p
        className="line-clamp-2 sm:line-clamp-none text-center 
        text-sm md:text-base mt-4 md:mt-8 m-2 mb-0"
      >
        {description}
      </p>
      <div
        className="h-[1px] w-full self-stretch 
          bg-gradient-to-tr from-transparent via-white to-transparent 
          opacity-25 mx-auto mt-8"
      />
      <div
        className="flex flex-row ml-2 font-light italic my-3 justify-between
        text-[9px] sm:text-[11px]"
      >
        <div className="flex flex-row items-center">
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
        <ShareLink slug={slug} />
      </div>
      <div
        className="h-[1px] w-full self-stretch 
          bg-gradient-to-tr from-transparent via-white to-transparent 
          opacity-25 mx-auto mb-16"
      />
    </div>
  );
}
