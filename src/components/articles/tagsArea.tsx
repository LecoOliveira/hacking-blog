import { NotionDatabaseResponse, Page } from '@/types/notionTypes';
import Link from 'next/link';
import { colorClasses, colorClassesBg } from './tags';

export type Arrays = Tags[][];

export interface Tags {
  id: string;
  name: string;
  color: string;
}

function filteredTags(arrays: Arrays) {
  const seen = new Set();
  const uniqueTags: Tags[] = [];

  arrays.flat().forEach((tag) => {
    if (!seen.has(tag.id)) {
      seen.add(tag.id);
      uniqueTags.push(tag);
    }
  });
  return uniqueTags;
}

export default async function TagsArea() {
  const response = await fetch('http://localhost:3000/api/blog', {
    headers: {
      Authorization: `Bearer ${process.env.INTERNAL_API_TOKEN}`
    },
  });
  const data = await response.json();
  const pages = data.resultAllPages;
  const allPosts = pages.map((page: NotionDatabaseResponse) => {
    return page.results;
  });
  const allTags = allPosts[0].map((post: Page) => {
    return post.properties.Tags.multi_select;
  });
  const tagsFiltered = filteredTags(allTags);

  return (
    <div className="mt-8">
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mt-6"
      />
      <h2 className="my-3 font-semibold text-center"> Tags </h2>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mb-12"
      />
      <div className="relative flex flex-wrap gap-2">
        {tagsFiltered?.map((tag, index) => (
          <Link
            href={`/blog?search=${tag.name.toLowerCase()}`}
            key={index}
            className={`
                      border w-max h-min py-1 px-1
                      ${colorClasses[tag.color] || 'text-gray-200'} 
                      ${colorClasses[tag.color] || 'border-gray-100'} text-[8px]
                      sm:text-[11px] font-semibold rounded-sm 
                      cursor-pointer ${colorClassesBg[tag.color]} 
                      hover:scale-110
                      hover:text-[--background] transition-all duration-200 
                  `}
          >
            {`#${tag.name.toLowerCase()}`}
          </Link>
        ))}
      </div>
    </div>
  );
}
