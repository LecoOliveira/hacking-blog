import { Client } from '@notionhq/client';
import { downloadImage } from './downloadImages';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
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
