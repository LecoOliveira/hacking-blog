import { fetchPages } from '@/lib/notion';
import { formatarDataEmPortugues } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function NextPosts(slug: { slug: string }) {
  const posts = await fetchPages();
  const nextPosts = posts.filter((post) => post.slug !== slug.slug);
  const random1 = Math.floor(Math.random() * nextPosts.length);
  const nextPost = nextPosts[random1];
  const previewsPost = nextPosts.filter((post) => post !== nextPost);
  const random2 = Math.floor(Math.random() * previewsPost.length);
  const previewPost = previewsPost[random2];

  return (
    <div
      className="h-96 md:h-48 flex flex-col gap-8 md:flex-row justify-between
    items-center p-6 mt-4"
    >
      {previewPost && (
        <div className="w-full md:w-1/2 h-full flex flex-row items-center">
          <Link
            href={`/blog/${previewPost?.slug}`}
            className="relative w-2/5 lg:w-1/4 h-4/5 flex overflow-hidden 
            rounded-xl"
          >
            <Image
              className="object-cover hover:scale-105 hover:grayscale 
              transition-all duration-300"
              src={`/images/${previewPost?.id}.webp`}
              alt="Imagem do post anterior"
              fill
            />
          </Link>
          <div className="w-3/4 pl-4 top-0 h-3/4 flex flex-col justify-between">
            <p className="text-xs pb-4 font-semibold opacity-30">
              Post Anterior
            </p>
            <Link
              href={`/blog/${previewPost?.slug}`}
              className="group text-base lg:text-lg font-medium w-4/5 italic"
            >
              <span
                className="group-hover:underline underline-offset-4 
                decoration-transparent group-hover:decoration-blue-500 
                transition-all duration-300 group-hover:decoration-solid 
                group-hover:decoration-2"
              >
                {previewPost?.title}
              </span>
            </Link>
            <p className="text-xs font-thin pt-2">
              {formatarDataEmPortugues(previewPost?.date)}
            </p>
          </div>
        </div>
      )}
      {nextPost && (
        <div className="w-full md:w-1/2 h-full flex flex-row items-center">
          <div
            className="w-3/4 pr-4 top-0 h-3/4 items-end flex flex-col 
            justify-between"
          >
            <p className="text-xs pb-4 text-right font-semibold opacity-30">
              Próximo Post
            </p>
            <Link
              href={`/blog/${nextPost?.slug}`}
              className="group text-base lg:text-lg font-medium text-right 
              w-4/5 italic"
            >
              <span
                className="group-hover:underline decoration-transparent 
                group-hover:decoration-blue-500 transition-all duration-300 
                group-hover:decoration-solid group-hover:decoration-2
                underline-offset-4"
              >
                {nextPost?.title}
              </span>
            </Link>
            <p className="text-xs font-thin pt-2 text-right">
              {formatarDataEmPortugues(nextPost?.date)}
            </p>
          </div>
          <Link
            href={`/blog/${nextPost?.slug}`}
            className="relative w-2/5 lg:w-1/4 h-4/5 flex overflow-hidden 
            rounded-xl"
          >
            <Image
              className="object-cover hover:scale-105 hover:grayscale 
              transition-all duration-300"
              src={`/images/${nextPost?.id}.webp`}
              alt="Imagem do próximo post"
              fill
            />
          </Link>
        </div>
      )}
    </div>
  );
}
