type MediaType = "VIDEO" | "IMAGE";

interface MediaAttributes {
  url: string;
  title: string;
  type: MediaType;
}

interface MediaLink {
  attributes: MediaAttributes;
}

interface MediaLinks {
  data: MediaLink[];
}

interface NewsAttributes {
  title: string;
  description: string;
  media_links: MediaLinks;
}

interface NewsItem {
  attributes: NewsAttributes;
}

// interface NewsData {
//   data: NewsItem[];
// }

// interface News {
//   data: NewsItem[];
// }

interface NewsApiResponse {
  news: { data: NewsItem[] };
}
