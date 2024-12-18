import { NotionRenderer, createBlockRenderer } from '@notion-render/client';
import {
  BlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import hljsPlugin from '@notion-render/hljs-plugin';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { Item } from '@/components/tableOfContents';
import { notion } from '@/lib/notion';

export async function processBlocks(
  blocks: BlockObjectResponse[],
): Promise<{ html: string; toc: Item[] }> {
  const renderer = new NotionRenderer({ client: notion });
  const tableOfContents: Item[] = [];

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));
  renderer.use({
    renderers: [
      createBlockRenderer<Heading1BlockObjectResponse>(
        'heading_1',
        async (block) => {
          const id = block.id;
          const content = block.heading_1.rich_text
            .map((rt) => rt.plain_text)
            .join('');
          tableOfContents.push({ id, text: content });
          return `<h1 id="${id}" class="heading-1">${content}</h1>`;
        },
      ),
      createBlockRenderer<Heading2BlockObjectResponse>(
        'heading_2',
        async (block) => {
          const id = block.id;
          const content = block.heading_2.rich_text
            .map((rt) => rt.plain_text)
            .join('');
          tableOfContents.push({ id, text: content });
          return `<h2 id="${id}" class="heading-2">${content}</h2>`;
        },
      ),
      createBlockRenderer<Heading3BlockObjectResponse>(
        'heading_3',
        async (block) => {
          const id = block.id;
          const content = block.heading_3.rich_text
            .map((rt) => rt.plain_text)
            .join('');
          tableOfContents.push({ id, text: content });
          return `<h3 id="${id}" class="heading-3">${content}</h3>`;
        },
      ),
    ],
    extensions: [],
  });

  const html = await renderer.render(...blocks);
  return { html, toc: tableOfContents };
}
