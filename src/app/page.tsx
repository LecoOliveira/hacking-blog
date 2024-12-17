import { fetchPages } from "@/lib/notion";

export default async function Home() {
  const posts = await fetchPages();
  console.log(posts)

  return (
    <h1>teste</h1>
  );
}
