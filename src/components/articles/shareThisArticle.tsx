import ShareLinkPost from '../socialShareLinksPost';

export default function ShareArticle({ slug }: { slug: string }) {
  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="text-xl font-medium"> Compartilhe este Artigo </h2>
      <div
        className="h-[1px] w-full self-stretch 
          bg-gradient-to-tr from-transparent via-white to-transparent 
          opacity-25 mx-auto mt-8"
      />
      <div className="mt-4">
        <ShareLinkPost slug={slug} />
      </div>
      <div
        className="h-[1px] w-full self-stretch 
          bg-gradient-to-tr from-transparent via-white to-transparent 
          opacity-25 mx-auto mt-6"
      />
    </div>
  );
}
