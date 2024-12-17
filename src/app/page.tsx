import InitialPhrase from "@/components/initialPhrase";
import PostList from "@/components/postList";
import Post from "@/components/postPrincipal";
import { fetchPages } from "@/lib/notion";

export default async function Home() {
  const posts = await fetchPages();
  const mainPost = posts[posts.length -1];
  const listPosts = posts.filter((post) => post.slug !== mainPost.slug).slice(0, 3);

  return (
    <section className="scroll-smooth">
      <InitialPhrase />
      <Post 
        cover={`/images/${mainPost.id}.webp`? `/images/${mainPost.id}.webp` : mainPost.cover} 
        title={mainPost.title} 
        data={mainPost.date}
        description={mainPost.description}
        slug={mainPost.slug}
      />
      <article className="w-[1000px] place-self-center flex flex-row justify-between mt-20">
        <ul className="w-[600px]">
          {listPosts.map(async (post) => (
            <PostList 
              key={post.slug}
              cover={`/images/${post.id}.webp` ? `/images/${post.id}.webp` : post.cover} 
              title={post.title}
              data={post.date}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}
