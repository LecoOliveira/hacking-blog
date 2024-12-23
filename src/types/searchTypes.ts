export interface TitleProperty {
  type: 'title';
  title: { plain_text: string }[];
}

export interface RichTextProperty {
  type: 'rich_text';
  rich_text: { plain_text: string }[];
}

export interface MultiSelectProperty {
  type: 'multi_select';
  multi_select: { name: string }[];
}

export interface DateProperty {
  type: 'date';
  date: { start: string };
}

export interface CoverProperty {
  type: 'file' | 'external';
  file?: { url: string };
  external?: { url: string };
}

export interface PostProperties {
  Title: TitleProperty;
  slug: RichTextProperty;
  Tags: MultiSelectProperty;
  Description: RichTextProperty;
  Date: DateProperty;
}

export interface Post {
  id: string;
  cover?: CoverProperty;
  properties: PostProperties;
}
