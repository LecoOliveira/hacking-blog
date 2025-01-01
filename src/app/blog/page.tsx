import CardPost from '@/components/cardPosts';
import Navigation from '@/components/navProgress';
import PaginationPage from '@/components/pagination';
import SearchForm from '@/components/searchForm';
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
        <h1 className="-mb-12 text-5xl font-semibold "> POSTS </h1>
      </div>
      <div className="grid grid-cols-1">
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-10
          w-11/12 sm:w-[600px] md:w-[800px] lg:w-[1100px] mt-28 
          place-self-center"
        >
          {posts.map(async (post) => (
            <div key={post.id} className="relative">
              <CardPost
                tag={post.properties.Tags.multi_select[0].name}
                cor={post.properties.Tags.multi_select[0].color || 'gray'}
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
