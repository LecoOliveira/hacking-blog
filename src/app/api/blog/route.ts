import { NextResponse } from 'next/server';
import fecthTeste from '@/lib/pagination';
import { MultiSelect } from '@/types/notionTypes';

export async function GET(request: Request) {
  const internalToken = request.headers.get('x-internal-token');

  if (internalToken !== process.env.INTERNAL_API_TOKEN) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 },
    );
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  const response = await fecthTeste();
  const filteredResults = response.resultAllPages
    .map((page) => ({
      ...page,
      results: page.results?.filter((post) => {
        if (
          'properties' in post &&
          'Tags' in post.properties &&
          'multi_select' in post.properties.Tags &&
          Array.isArray(post.properties.Tags.multi_select)
        ) {
          return post.properties.Tags.multi_select.some(
            (tagItem: MultiSelect) =>
              tagItem.name.toLowerCase().includes(search ?? ''),
          );
        }
        return false;
      }),
    }))
    .filter((page) => page.results && page.results.length > 0);

  return NextResponse.json({
    resultAllPages: filteredResults,
  });
}
