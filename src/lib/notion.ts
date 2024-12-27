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
      page_size: 2,
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
    const livePosts = filteredResults.filter((post) => {
      const status =
        post.properties.Status?.type === 'status'
          ? post.properties.Status.status?.name
          : '';
      return status === 'Live'; // Filtra posts com Status "Live"
    });

    results.push(...livePosts);
    hasMore = response.has_more;
    nextCursor = response.next_cursor;
  }

  const mappedResults = results.map((post) => {
    const localImagePath = `${post.id}.webp`;
    const coverUrl =
      post.cover && post.cover.type === 'file' ? post.cover.file.url : '';
    downloadImage(coverUrl, localImagePath);

    const title =
      post.properties.Title?.type === 'title'
        ? post.properties.Title.title.map((str) => str.plain_text).join('')
        : '';
    const slug =
      post.properties.slug?.type === 'rich_text'
        ? post.properties.slug.rich_text[0]?.plain_text || ''
        : '';
    const tags =
      post.properties.Tags?.type === 'multi_select'
        ? post.properties.Tags.multi_select[0] || null
        : null;
    const description =
      post.properties.Description?.type === 'rich_text'
        ? post.properties.Description.rich_text
            .map((text) => text.plain_text)
            .join('')
        : '';
    const date =
      post.properties.Date?.type === 'date'
        ? post.properties.Date.date?.start || null
        : null;

    return {
      id: post.id,
      title,
      slug,
      tags,
      cover: coverUrl,
      description,
      date,
    };
  });

  return mappedResults;
};
