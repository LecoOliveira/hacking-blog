import { NextResponse } from 'next/server';
// import { fetchPages2 } from '../../../lib/notion';
import fecthTeste from '@/lib/pagination';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  const response = await fecthTeste();
  const filteredResults = response.resultAllPages
    .map((page) => ({
      ...page,
      results: page.results?.filter(
        (post) =>
          'properties' in post &&
          'slug' in post.properties &&
          'rich_text' in post.properties.slug &&
          post.properties.slug.rich_text.some(
            (slugItem: RichTextItemResponse) =>
              slugItem.plain_text.includes(search ?? ''),
          ),
      ),
    }))
    .filter((page) => page.results && page.results.length > 0);

  return NextResponse.json({
    resultAllPages: filteredResults,
  });
}
