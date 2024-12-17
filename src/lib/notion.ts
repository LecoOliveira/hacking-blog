import { Client } from "@notionhq/client";
import { downloadImage } from "./downloadImages";
import { NotionDatabaseResponse } from "@/types/notionTypes";
import React from "react";
import 'server-only';


export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const fetchPages = React.cache( async () => {
    const response = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_ID}`,
        filter: {
            property: "Status",
            status: {
                equals: "Live",
            }
        },
        sorts: [
            {
                property: "Date",
                direction: "descending"
            }
        ]
    })
    const typedResponse = (response as unknown) as NotionDatabaseResponse;
    return typedResponse.results.map((post) => {
        const localImagePath = `${post.id}.webp`;
        downloadImage(post.cover.file.url, localImagePath);

        return {
            id: post.id,
            title: post.properties.Title.title.map((str) => str.plain_text).join(''),
            slug: post.properties.slug.rich_text[0].plain_text,
            tags: post.properties.Tags.multi_select[0],
            cover: post.cover.file.url,
            description: post.properties.Description.rich_text.map((text) => text.plain_text).join(''),
            date: post.properties.Date.date.start
        };
    });
});