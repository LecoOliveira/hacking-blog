/* eslint-disable max-len */
import CardPost from '@/components/cardPosts';
import Navigation from '@/components/navProgress';
import SearchForm from '@/components/searchForm';
import { colorClasses } from '@/components/tags';
import { searchPost } from '@/lib/notion';

export default async function Page(props: {
  searchParams?: Promise<{ search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const posts = await searchPost(searchParams?.search || '');

  return (
    <section
      className="pt-16 p-4 lg:w-[1000px] place-self-center 
      scroll-smooth mb-96"
    >
      <div className="flex flex-row justify-between mb-16 mt-4">
        <Navigation title="" />
        <SearchForm />
      </div>
      <h1 className="place-self-center -mb-12 text-3xl font-bold "> POSTS </h1>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 
        w-11/12 sm:w-[600px] md:w-[800px] lg:w-[1000px] mt-20 place-self-center"
      >
        {posts.map(async (post) => (
          <div
            key={post.id}
            className="relative hover:opacity-70 transition-all duration-300"
          >
            <CardPost
              key={post.slug}
              cover={
                `/images/${post.id}.webp`
                  ? `/images/${post.id}.webp`
                  : post.cover
              }
              title={post.title}
              data={post.date || ''}
              description={post.description}
              slug={post.slug}
            />
            <div
              className={`
                  border absolute hidden lg:flex space-x-2 -mt-28 end-6
                  ${post.tags ? colorClasses[post.tags.color] || 'text-gray-200' : 'text-gray-200'} 
                  ${post.tags ? colorClasses[post.tags.color] || 'bg-gray-100' : 'bg-gray-100'} 
                  text-[8px] font-semibold px-2 py-1 rounded-full 
                  cursor-pointer
              `}
            >
              {post.tags ? `#${post.tags.name}` : ''}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
