"use client";
import { useFetch, useFetchRss } from "@/hooks";
import React from "react";

const RssFeed: React.FC = () => {
  const { data, error, isLoading } = useFetchRss(
    "https://one.goodnews2day.com/feed/"
    // "https://anchor.fm/s/ef1f5500/podcast/rss"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>RSS Feed</h2>
      <ul>
        {data?.map((item: RssItem, index: number) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>
              <strong>Author:</strong> {item.creator}
            </p>
            <p>
              <strong>Published on:</strong> {item.pubDate}
            </p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RssFeed;
