import { Client } from '@notionhq/client';
import { downloadImage } from './downloadImages';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionDatabaseResponse, Page } from '@/types/notionTypes';
import React from 'react';
import 'server-only';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(async () => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
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
  const typedResponse = response as unknown as NotionDatabaseResponse;

  return typedResponse.results.map((post) => {
    const localImagePath = `${post.id}.webp`;
    downloadImage(post.cover.file.url, localImagePath);

    return {
      id: post.id,
      title: post.properties.Title.title.map((str) => str.plain_text).join(''),
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.Tags.multi_select[0],
      cover: post.cover.file.url,
      description: post.properties.Description.rich_text
        .map((text) => text.plain_text)
        .join(''),
      date: post.properties.Date.date.start,
    };
  });
});

export const fetchBySlug = React.cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  const typedResponse = response.results[0] as Page;
  const cover = `/images/${typedResponse.id}.webp`;

  return {
    ...typedResponse,
    cover: cover,
  };
});

export const fetchPageBlocks = React.cache(async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });

  return response.results as BlockObjectResponse[];
});

export const getUser = React.cache(async (userId: string) => {
  return notion.users.retrieve({ user_id: userId });
});

export const searchPost = async (query: string) => {
  const results = [];
  let hasMore = true;
  let nextCursor = null;

  while (hasMore) {
    const response = await notion.search({
      query: query,
      start_cursor: nextCursor || undefined,
      page_size: 4,
      filter: {
        value: 'page',
        property: 'object',
      },
    });
    const filteredResults = response.results.filter(
      (result): result is PageObjectResponse => {
        return 'parent' in result && result.parent.type === 'database_id';
      },
    );
    results.push(...filteredResults);
    hasMore = response.has_more;
    nextCursor = response.next_cursor;
  }

  const mappedResults = results.map((post): Page => {
    const localImagePath = `${post.id}.webp`;
    downloadImage(post.cover?.file?.url || '', localImagePath);

    return {
      id: post.id,
      title: post.properties.Title.title.map((str) => str.plain_text).join(''),
      slug: post.properties.slug.rich_text[0]?.plain_text || '',
      tags: post.properties.Tags?.multi_select?.[0] || null,
      cover: post.cover?.file?.url || '',
      description: post.properties.Description.rich_text
        .map((text) => text.plain_text)
        .join(''),
      date: post.properties.Date.date?.start || null,
    };
  });

  return mappedResults;
};

// const posts = await searchPost('');
// posts.map((post) => {
//   if ('parent' in post && post.parent?.type === 'database_id') {
//     console.log(post);
//   }
// });
(async () => {
  const query = '';
  const allResults = await searchPost(query);

  // allResults.map((post) => {
  //   if (
  //     'parent' in post &&
  //     post.parent &&
  //     typeof post.parent === 'object' &&
  //     'type' in post.parent &&
  //     post.parent.type === 'database_id'
  //   ) {
  //     console.log(post);
  //   }
  // });

  console.log(`Total de resultados: ${allResults.length}`);
  // console.log(allResults);
})();
