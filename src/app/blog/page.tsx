import CardPost from '@/components/cardPosts';
import Navigation from '@/components/navProgress';
import PaginationPage from '@/components/pagination';
import SearchForm from '@/components/searchForm';
import { colorClasses } from '@/components/tags';
import { Page } from '@/types/notionTypes';
import axios from 'axios';

export default async function HomePage(props: {
  searchParams?: Promise<{ page?: string | undefined; search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const response = await axios('http://localhost:3000/api/blog', {
    params: {
      search: searchParams?.search,
    },
  });
  const data = await response.data;
  const pages = data.resultAllPages;
  const pageIndex = searchParams?.page
    ? parseInt(searchParams?.page, 10) - 1
    : 0;
  const lengthPages = pages.length;
  const posts: Page[] = pages[pageIndex]?.results || [];

  return (
    <section className="pt-16 p-4 lg:w-[1000px] mx-auto scroll-smooth mb-60">
      <div
        className="flex flex-row justify-between mb-16 mt-4 w-10/12 lg:w-auto 
        mx-auto"
      >
        <Navigation title="" />
        <SearchForm />
      </div>
      <div className="flex justify-center">
        <h1 className="-mb-12 text-3xl font-medium "> BLOG </h1>
      </div>
      <div className="grid grid-cols-1">
        <section
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20
          w-11/12 sm:w-[600px] md:w-[800px] lg:w-[1000px] mt-28 
          place-self-center"
        >
          {posts.map(async (post) => (
            <div
              key={post.id}
              className="relative hover:opacity-70 hover:-translate-y-1 
              transition-all duration-300 active:scale-95"
            >
              <CardPost
                key={post.id}
                cover={
                  `/images/${post.id}.webp`
                    ? `/images/${post.id}.webp`
                    : typeof post.cover === 'string'
                      ? post.cover
                      : ''
                }
                title={post.properties.Title.title
                  .map((str) => str.plain_text)
                  .join('')}
                data={post.properties.Date.date.start || ''}
                description={
                  post.properties.Description.rich_text[0].plain_text
                }
                slug={post.properties.slug.rich_text[0].plain_text}
              />
              <div
                className="h-[1px] sm:hidden w-[200px] md:w-[400px] 
                lg:w-[800px] self-stretch bg-gradient-to-tr from-transparent 
                via-white to-transparent opacity-25 mx-auto my-16 "
              />
              <div
                className={`
                    border absolute hidden lg:flex space-x-2 -mt-44 end-6 ${
                      post.properties.Tags.multi_select
                        ? colorClasses[
                            post.properties.Tags.multi_select[0].color
                          ] || 'text-gray-200'
                        : 'text-gray-200'
                    } ${
                      post.properties.Tags.multi_select
                        ? colorClasses[
                            post.properties.Tags.multi_select[0].color
                          ] || 'bg-gray-100'
                        : 'bg-gray-100'
                    } 
                    text-[8px] font-semibold px-2 py-1 rounded-full 
                    cursor-pointer
                `}
              >
                {post.properties.Tags.multi_select
                  ? `#${post.properties.Tags.multi_select[0].name}`
                  : ''}
              </div>
            </div>
          ))}
        </section>
      </div>
      <div>
        <PaginationPage
          length={lengthPages}
          currentPage={Number.isInteger(pageIndex) ? pageIndex + 1 : 1}
        />
      </div>
    </section>
  );
}
