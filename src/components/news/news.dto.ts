export interface MediaLinkDto {
  id: number;
  title: string;
  description: string | null;
  url: string;
  type: string; // 'IMAGE' or 'VIDEO'
}

export interface NewsAttributesDto {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string | null;
  mediaLinks: MediaLinkDto[];
}

export interface NewsItemDto {
  id: number;
  attributes: NewsAttributesDto;
}
