import AboutMe from '@/components/homePage/aboutMe';
import Quote from '@/components/homePage/dailyQuote';
import FormContact from '@/components/forms/formContact';
import InitialPhrase from '@/components/homePage/initialPhrase';
import PostList from '@/components/homePage/postList';
import Post from '@/components/homePage/postPrincipal';
import Subscription from '@/components/homePage/subscription';
import { fetchPages } from '@/lib/notion';
import DailyQuote from '@/lib/quotes';
import Link from 'next/link';

export default async function Home() {
  const quote = DailyQuote();
  const posts = await fetchPages();
  const mainPost = posts[posts.length - 1];
  const listPosts = posts
    .filter((post) => post.slug !== mainPost.slug)
    .slice(0, 4);

  return (
    <section className="scroll-smooth mb-48">
      <main className="grid">
        <InitialPhrase />
        {mainPost && (
          <Post
            cor={mainPost?.tags.color}
            tag={mainPost?.tags.name}
            cover={
              `/images/${mainPost?.id}.webp`
                ? `/images/${mainPost?.id}.webp`
                : mainPost?.cover
            }
            title={mainPost?.title}
            data={mainPost?.date}
            description={mainPost?.description}
            slug={mainPost?.slug}
            user={mainPost?.user}
          />
        )}
      </main>
      <section
        className="grid-cols-1 md:flex flex-row justify-between sm:w-[650px] 
        md:w-[700px] lg:w-[1000px] mx-auto mt-4 md:mt-20"
      >
        <nav className="place-self-center md:place-self-start">
          <ul
            className="mx-auto w-[350px] sm:w-[450px] md:w-[420px] 
            lg:w-[600px]"
          >
            {listPosts.map(async (post) => (
              <li key={post?.slug} className="mb-16">
                <PostList
                  cor={post?.tags.color}
                  tag={post?.tags.name}
                  cover={
                    `/images/${post?.id}.webp`
                      ? `/images/${post?.id}.webp`
                      : post?.cover
                  }
                  title={post?.title}
                  data={post?.date}
                  description={post?.description}
                  slug={post?.slug}
                  user={post?.user}
                />
              </li>
            ))}
          </ul>
          <div className="m-auto w-[250px] -mt-3 flex flex-col items-center">
            <div
              className="h-[1px] w-[250px] self-stretch 
                bg-gradient-to-tr from-transparent via-white to-transparent 
                opacity-25 mb-12"
            ></div>
            <Link
              href="/blog"
              className="-mt-[60px] bg-[--background] px-4 z-10 
                after:duration-500 ease-out after:block after:h-0.5 
                after:w-full after:origin-bottom-right after:scale-x-0 
                after:bg-blue-500 after:transition-transform 
                after:hover:origin-bottom-left after:hover:scale-x-100"
            >
              Mais Posts
            </Link>
          </div>
        </nav>
        <section
          className="place-self-center sticky top-24 z-10 md:place-self-start 
          w-[250px] sm:w-[200px] lg:w-[280px] mr-0"
        >
          <AboutMe />
          <Subscription />
          <Quote quote={quote} />
        </section>
      </section>
      <FormContact />
    </section>
  );
}
