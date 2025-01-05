export interface NotionDatabaseResponse {
  object: string;
  results: Page[];
  next_cursor: unknown;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  request_id: string;
}

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: LastEditedBy;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: Cover;
  icon: unknown;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: unknown;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Cover {
  type: string;
  file: File;
}

export interface File {
  url: string;
  expiry_time: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  slug: Slug;
  Date: Date;
  Description: Description;
  'Criado por': CriadoPor;
  Tags: Tags;
  'Read Time': ReadTime;
  Status: Status;
  Title: Title;
}

export interface CriadoPor {
  id: string;
  type: string;
  created_by: User;
}

export interface User {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: object;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface Status {
  id: string;
  type: string;
  status: unknown;
}

export interface Date {
  id: string;
  type: string;
  date: {
    start: string;
    end: unknown;
    time_zone: unknown;
  };
}

export interface Description {
  id: string;
  type: string;
  rich_text: [
    {
      type: string;
      text: object;
      annotations: object;
      plain_text: string;
      href: null;
    },
  ];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: unknown;
}

export interface Text {
  content: string;
  link: unknown;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  id: string;
  type: string;
  title: DataItem[];
}

export interface Title2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: unknown;
}

export interface Text2 {
  content: string;
  link: unknown;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PostProps {
  cover: string;
  title: string;
  data: string;
  description: string;
  slug: string;
  tag?: string;
  cor?: string;
  user: string;
}

export interface ReadTime {
  id: string;
  type: string;
  number: number;
}

export type DataItem = {
  type: string;
  text: object;
  annotations: object;
  plain_text: string;
  href: string | null;
};
export type Tag = {
  name: string;
  color: string;
};

export type TagsProps = {
  tag: Tag[] | undefined;
};

export type PageOrDatabase = object;
