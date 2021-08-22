import type { Article } from './Article';
import type { Tag } from './JoplinData';
import { DEFAULT_THEME_NAME, Theme } from './Theme';

interface MenuItem {
  label: string;
  link: string;
}

interface MenuItemGroup {
  label: string;
  items: MenuItem;
}

type Menu = Array<MenuItem | MenuItemGroup>;

export interface Site {
  name: string;
  themeName: string;
  themeConfig: Theme | null;
  description: string;
  language: string;
  icon: ArrayBuffer | null;
  RSSMode: 'full' | 'digest' | 'none';
  RSSLength: number;
  menu: Menu;
  footer: string;
  generatedAt?: number;
  tags?: Array<Tag['title']>;
  articles?: Article[];
}

export const defaultSite: Site = {
  name: 'Blog by Joplin',
  description: 'Generated by Joplin Notes Publisher',
  themeName: DEFAULT_THEME_NAME,
  themeConfig: null,
  language: '',
  icon: null,
  RSSMode: 'none',
  RSSLength: 10,
  menu: [],
  footer: '',
  articles: [],
  tags: [],
};
