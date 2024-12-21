import CardPost from '@/components/cardPosts';
import { colorClasses } from '@/components/tags';
import { fetchPages } from '@/lib/notion';

export default async function Page() {
  const posts = await fetchPages();

  return (
    <section>
      <h1 className="place-self-center mt-16 -mb-12 text-3xl font-bold italic">
        {' '}
        BLOG{' '}
      </h1>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 
        w-11/12 sm:w-[600px] md:w-[800px] lg:w-[1000px] mx-auto mt-20"
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
              data={post.date}
              description={post.description}
              slug={post.slug}
            />
            <div
              className={`
                  border absolute hidden lg:flex space-x-2 -mt-28 end-4
                  ${colorClasses[post.tags.color] || 'text-gray-200'} 
                  ${colorClasses[post.tags.color] || 'bg-gray-100'} 
                  text-[8px] font-semibold px-2 py-1 rounded-full 
                  cursor-pointer
              `}
            >
              {`#${post.tags.name}`}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
