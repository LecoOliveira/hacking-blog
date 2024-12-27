import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function fecthTeste() {
  const resultAllPages = [];
  let hasMore = true;
  let nextCursor = null;
  let page = 1;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: `${process.env.NOTION_DATABASE_ID}`,
      start_cursor: nextCursor || undefined,
      page_size: 4,
      filter: {
        property: 'Status',
        status: {
          equals: 'Live',
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    hasMore = response.has_more;
    nextCursor = response.next_cursor;
    resultAllPages.push({ page, ...response });
    page++;
  }

  return { resultAllPages };
}
