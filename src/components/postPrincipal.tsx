'use client';

import { formatarDataEmPortugues } from '@/lib/utils';
import { PostProps } from '@/types/notionTypes';
import { motion } from 'motion/react';
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
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="group flex hover:opacity-60 transition-all 
          duration-300 flex-col w-[1000px] hover:object-none place-self-center 
          mt-10 mb-20 "
      >
        <Image
          className="width-full h-[300px] object-cover rounded-xl 
          group-hover:grayscale transition-all duration-300"
          src={cover}
          alt="Imagem de capa do post"
          width={1000}
          height={300}
          loading="eager"
        />
        <h2 className="text-2xl font-semibold italic mt-4 m-auto">{title}</h2>
        <div
          className="w-[37px] border m-auto border-dashed
        border-[#d5d5d6]/70 mt-1.5"
        ></div>
        <p className="text-center font-light italic mt-1.5 text-[11px]">
          {dataFormatada}
        </p>
        <p className="text-base mt-10 m-2 mb-0">{description}</p>
        <div
          className="h-[1px] w-[800px] self-stretch bg-gradient-to-tr 
          from-transparent via-neutral-500 to-transparent opacity-25 
          dark:via-neutral-200 mx-auto my-16"
        />
      </Link>
    </motion.div>
  );
}
