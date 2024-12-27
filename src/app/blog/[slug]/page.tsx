// import Comments from '@/components/commentsArea';
import Navigation from '@/components/navProgress';
import TableContent from '@/components/tableOfContents';
import Tags from '@/components/tags';
import { fetchBySlug, fetchPageBlocks, getUser } from '@/lib/notion';
import { processBlocks } from '@/lib/notionProcessor';
import { formatarDataEmPortugues } from '@/lib/utils';
import { DataItem } from '@/types/notionTypes';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
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
      className="relative mt-12 min-w-min-[360px] sm:w-[600px] 
      md:w-[800px] lg:w-[1000px] place-self-center sm:p-4 mb-96"
    >
      <Navigation title={title()} />
      <h1
        className="text-center font-bold text-xl md:text-3xl lg:text-4xl 
        md:m-10"
      >
        {title()}
      </h1>
      <div
        className="relative w-screen lg:w-[1200px] place-self-center 
        h-[250px] sm:h-[400px] object-cover mt-4 mb-4 md:mb-16"
      >
        <Image
          className="relative object-fill md:object-cover rounded-xl "
          src={`${post.cover}`}
          alt="Imagem de capa"
          priority
          fill
        />
      </div>
      <Tags tag={tag} />
      <div className="ml-4 mb-4 flex flex-row">
        <Image
          src={`${user.avatar_url}`}
          alt="Avatar do Notion"
          width={64}
          height={64}
          loading="eager"
        />
        <div className="py-2 px-4">
          <h2 className="font-semibold">{user.name}</h2>
          <p className="font-thin text-sm">Ethical Hacker</p>
        </div>
      </div>
      <p className="ml-6 mb-2 text-[10px] sm:text-xs font-thin tracking-wide">
        {`- ${formatarDataEmPortugues(date)} - 
          ${post.properties['Read Time'].number} Minutos de leitura -`}
      </p>
      <div
        className="relative grid grid-cols-1 md:flex flex-row gap-8
        lg:gap-16"
      >
        <div
          className="w-11/12 max-w-min-[360px] sm:w-[600px] md:w-[800px] 
          place-self-center lg:w-full prose prose-invert prose-ul:text-sm 
          lg:prose-ul:text-base prose-code:text-xs lg:prose-code:text-sm 
          prose-h2:text-base prose-p:text-sm lg:prose-p:text-base 
          prose-img:w-full prose-figure:text-xs prose-figure:text-center
          prose-h1:text-xl md:prose-h1:text-2xl text-pretty prose-img:"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="relative mr-0">
          <TableContent items={toc} />
        </div>
      </div>
    </div>
  );
}
