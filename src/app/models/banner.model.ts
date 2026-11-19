export interface Banner {
  id: number;
  eyebrow: string;
  titleLines: string[];
  subtitle: string;
  cta: string;
  image: string;
  bg: string;
  accent: string;
  /** Category the "Shop now" button opens. */
  category: string;
}
