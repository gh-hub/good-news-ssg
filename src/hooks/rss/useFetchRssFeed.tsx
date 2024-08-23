// "use client";
import { useEffect, useState } from "react";
import { parseStringPromise } from "xml2js";
import { RSS_TEST_DATA, useFetch } from "..";

function useFetchRss(url: string, options?: RequestInit): UseFetchRssResult {
  const [parsedData, setParsedData] = useState<RssItem[] | null>(null);

  console.log(process.env.NEXT_PUBLIC_ENV === "local");
  console.log(process.env.NEXT_PUBLIC_ENV);

  // If NEXT_PUBLIC_ENV is local, skip the API call and use the sample data
  const {
    data: rawData,
    error,
    isLoading,
  } = process.env.NEXT_PUBLIC_ENV === "local"
    ? {
        data: RSS_TEST_DATA["https://one.goodnews2day.com/feed/"],
        error: null,
        isLoading: false,
      }
    : useFetch<string>(url, {
        ...options,
        headers: {
          ...options?.headers,
          Accept: "application/rss+xml",
        },
      });

  useEffect(() => {
    if (rawData) {
      const parseRssData = async () => {
        try {
          const parsedResult = await parseStringPromise(rawData, {
            mergeAttrs: true,
          });
          const items: RssItem[] = parsedResult.rss.channel[0].item.map(
            (item: any) => ({
              title: item.title[0],
              link: item.link[0],
              pubDate: item.pubDate[0],
              creator: item["dc:creator"][0],
              description: item.description[0],
            })
          );

          setParsedData(items);
        } catch (err) {
          console.error("Error parsing RSS feed:", err);
        }
      };

      parseRssData();
    }
  }, [rawData]);

  return { data: parsedData, error, isLoading };
}

export default useFetchRss;
