import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import calendar from '../../public/calendar.webp';
import userIcon from '../../public/icons8-user-male-52-_1_.webp';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from './tagCard';
import ShareLink from './socialShareLinks';

export default function PostList({
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
    <div className="flex flex-col lg:w-[600px] transition-all duration-300">
      <Link className="overflow-hidden rounded-xl" href={`/blog/${slug}`}>
        <Image
          className="width-full h-[150px] lg:h-[220px] object-cover rounded-xl 
          hover:grayscale transition-all duration-300
          hover:scale-105"
          src={cover}
          alt="Imagem de capa do post"
          width={600}
          height={220}
          loading="lazy"
        />
      </Link>
      <div className="flex flex-row items-center justify-between mt-4 py-0">
        <Link
          href={`/blog/${slug}`}
          className="pointer-events-auto ml-2 text-base lg:text-xl 
          font-semibold italic after:duration-500 ease-out after:block 
          after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 
          after:bg-blue-500 after:transition-transform 
          after:hover:origin-bottom-left after:hover:scale-x-100"
        >
          {title}
        </Link>
        <TagCard tag={tag || ''} cor={cor || ''} />
      </div>
      <div
        className="font-light italic mt-1.5 text-[9px] 
        lg:text-[11px] flex flex-row items-center align-middle"
      >
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
        className="md:text-left text-sm line-clamp-2
        lg:text-base mt-6 m-2 mb-0"
      >
        {description}
      </p>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mt-6 mb-12"
      />
      <div className="m-auto -mt-14 z-10">
        <ShareLink slug={slug} />
      </div>
    </div>
  );
}
