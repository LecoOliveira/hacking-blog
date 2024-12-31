// import Comments from '@/components/commentsArea';
import Navigation from '@/components/navProgress';
import TableContent from '@/components/tableOfContents';
import Tags from '@/components/tags';
import { fetchBySlug, fetchPageBlocks, getUser } from '@/lib/notion';
import { processBlocks } from '@/lib/notionProcessor';
import { formatarDataEmPortugues } from '@/lib/utils';
import { DataItem } from '@/types/notionTypes';
import Image from 'next/image';
import { ResolvingMetadata } from 'next';
import clock from '../../../../public/clock.webp';
import calendar from '../../../../public/calendar.webp';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
) {
  const { slug } = await params;
  const post = await fetchBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  const titleArray = post.properties.Title.title;
  const title = (array: DataItem[] = titleArray): string => {
    return array.map((item) => item.plain_text).join('');
  };

  return {
    title: title(),
    description: post.properties.Description.rich_text[0].plain_text,
    openGraph: {
      images: [post.cover, ...previousImages],
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  const post = await fetchBySlug(slug);
  const blocks = await fetchPageBlocks(post.id);
  const { html, toc } = await processBlocks(blocks);
  const userId = post.properties['Criado por'].created_by.id;
  const user = await getUser(userId);
  const date = post.properties.Date.date.start;
  const tag = post.properties.Tags.multi_select;
  const titleArray = post.properties.Title.title;
  const title = (array: DataItem[] = titleArray): string => {
    return array.map((item) => item.plain_text).join('');
  };

  return (
    <div
      className="relative grid mt-12 min-w-min-[360px] sm:w-[600px] 
      md:w-[800px] lg:w-[1000px] mx-auto sm:p-4 mb-96"
    >
      <Navigation title={title()} />
      <h1
        className="text-center font-bold text-xl md:text-3xl lg:text-4xl 
        md:m-10"
      >
        {title()}
      </h1>
      <div className="grid grid-cols-1">
        <div
          className="relative w-screen lg:w-[1200px] place-self-center 
          h-[250px] sm:h-[400px] object-cover mt-4 mb-4 md:mb-12"
        >
          {post.cover && (
            <Image
              className="relative object-fill md:object-cover rounded-xl "
              src={post.cover}
              alt="Imagem de capa"
              priority
              fill
            />
          )}
        </div>
      </div>
      <Tags tag={tag} />
      <div className="ml-4 mb-4 flex flex-row">
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt="Avatar do Notion"
            width={64}
            height={64}
            loading="eager"
          />
        )}
        <div className="py-2 px-4">
          <h2 className="font-semibold">{user.name}</h2>
          <p className="font-thin text-sm">Ethical Hacker</p>
        </div>
      </div>
      <div
        className="flex flex-row ml-4 mb-2 text-[10px] sm:text-xs font-thin 
        tracking-wide items-center gap-2"
      >
        <Image
          className="opacity-70"
          src={calendar}
          alt="Calendário"
          width={16}
          height={16}
        />
        {formatarDataEmPortugues(date)}
        <Image
          className="opacity-70"
          src={clock}
          alt="Relógio"
          width={16}
          height={16}
        />
        <p>{`${post.properties['Read Time'].number} Minutos de leitura`}</p>
      </div>
      <div
        className="relative grid grid-cols-1 md:flex flex-row gap-8
        lg:gap-16"
      >
        <div
          className="w-11/12 max-w-min-[360px] sm:w-[600px] md:w-[800px] 
          place-self-center lg:w-full prose prose:opacity-90 prose-invert 
          prose-ul:text-sm prose-headings:mt-10 prose-p:mt-10
          lg:prose-ul:text-base prose-code:text-xs lg:prose-code:text-sm 
          prose-h2:text-2xl prose-p:text-sm lg:prose-p:text-base  
          prose-img:w-full prose-figure:text-xs prose-figure:text-center
          prose-h1:text-2xl md:prose-h1:text-4xl text-pretty prose-img:
          prose-img:rounded-lg prose-img:drop-shadow-lg prose-img:object-cover
          prose-p:text-[--foreground] prose-headings:text-[--foreground] 
          prose-li:text-base prose-h3:text-2xl prose-p:leading-6 
          lg:prose-p:leading-7 lg:prose-p:font-medium"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="relative mr-0">
          <TableContent items={toc} />
        </div>
      </div>
    </div>
  );
}
