type Localized<T = string> = { en: T; fr: T; es: T; de: T };

// type aliases, not interfaces: only aliases are assignable to Prisma's InputJsonValue
export type ProjectSwatch = {
  label: Localized;
  hex: string;
  note?: Localized;
  rgb?: string;
  cmyk?: string;
  hsv?: string;
  textColor?: string;
};

export type ProjectTile = {
  label: Localized;
  text?: Localized;
  icon?: string;
};

export interface ProjectStoryBlock {
  type: string;
  media?: (string | number)[];
  eyebrow?: Localized;
  title?: Localized;
  text?: Localized;
  tags?: Localized[];
  logos?: string[];
  tiles?: ProjectTile[];
  link?: string;
  linkLabel?: Localized;
  effect?: string;
  smalls?: 'top' | 'bottom';
  cols?: number;
  font?: string;
  fontFamily?: string;
  description?: Localized;
  secondFont?: string;
  secondFontFamily?: string;
  secondDescription?: Localized;
  swatches?: ProjectSwatch[];
}

export interface ProjectStorySection {
  title?: Localized;
  by?: string[];
  blocks: ProjectStoryBlock[];
}

// written out rather than inferred: Prisma's recursive JsonValue is too deep for svelte-check to expand
export interface ProjectEntry {
  slug: string;
  name: string;
  weeks: number;
  link?: string;
  image: string;
  video?: string;
  coverEffect?: string;
  gallery: string[];
  description: Localized;
  metaDescription: Localized;
  challenge?: Localized;
  techStack: string[];
  date: string;
  services: string[];
  team: string[];
  notes: Localized[];
  story: ProjectStorySection[];
}
