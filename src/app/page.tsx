import AboutMe from '@/components/aboutMe';
import Quote from '@/components/dailyQuote';
import InitialPhrase from '@/components/initialPhrase';
import PostList from '@/components/postList';
import Post from '@/components/postPrincipal';
import Subscription from '@/components/subscription';
import { fetchPages } from '@/lib/notion';
import DailyQuote from '@/lib/quotes';

export default async function Home() {
  const quote = DailyQuote();
  const posts = await fetchPages();
  const mainPost = posts[posts.length - 1];
  const listPosts = posts
    .filter((post) => post.slug !== mainPost.slug)
    .slice(0, 3);

  return (
    <section className="scroll-smooth mb-48">
      <main>
        <InitialPhrase />
        <Post
          cover={
            `/images/${mainPost.id}.webp`
              ? `/images/${mainPost.id}.webp`
              : mainPost.cover
          }
          title={mainPost.title}
          data={mainPost.date}
          description={mainPost.description}
          slug={mainPost.slug}
        />
      </main>
      <section
        className="grid-cols-1 sm:flex flex-row justify-between sm:w-[600px] 
        lg:w-[1000px] place-self-center mt-4 md:mt-20"
      >
        <nav>
          <ul className="w-[350px] lg:w-[600px]">
            {listPosts.map(async (post) => (
              <PostList
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
            ))}
          </ul>
        </nav>
        <section
          className="place-self-center sm:place-self-start 
          w-[150px] lg:w-[220px] mr-0"
        >
          <AboutMe />
          <Subscription />
          <Quote quote={quote} />
        </section>
      </section>
    </section>
  );
}
