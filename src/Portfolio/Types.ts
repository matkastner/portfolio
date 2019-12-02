export enum PortfolioItemType {
  OwnProject,
  Collaboration,
  Contracted,
  Contribution
}

export interface PortfolioItem {
  date: Date;
  name: string;
  summary: string;
  description: string;
  caseStudy?: string;
  images?: ReadonlyArray<string>;
  repo?: string;
  link?: string;
  type: PortfolioItemType;
}
