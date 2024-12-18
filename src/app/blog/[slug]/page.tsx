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
  console.log(user);

  return (
    <div className="relative mt-12 w-[1000px] place-self-center">
      <Navigation title={title()} />
      <h1 className="text-center font-extrabold text-4xl m-10">{title()}</h1>
      <div
        className="relative w-[1200px] place-self-center h-[400px] 
        object-cover mb-16"
      >
        <Image
          className="relative object-cover rounded-xl "
          src={`${post.cover}`}
          alt="Imagem de capa"
          priority
          loading="eager"
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
      <p className="ml-6 mb-2 text-xs font-thin">
        {`- ${formatarDataEmPortugues(date)} - 
          ${post.properties['Read Time'].number} Minutos de leitura`}
      </p>
      <div className="relative flex flex-row gap-16">
        <div
          className="prose prose-invert text-pretty text-[#d5d5d6]"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="relative mr-0 w-full">
          <TableContent items={toc} />
        </div>
      </div>
    </div>
  );
}
