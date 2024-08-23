interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  description: string;
}

interface UseFetchRssResult {
  data: RssItem[] | null;
  error: string | null;
  isLoading: boolean;
}
