import { GetStaticProps } from "next";
import Head from "next/head";
import News from "@/components/news";
import { NewsItemDto } from "@/components/news/news.dto";

interface HomeProps {
  newsItems: NewsItemDto[]; // Define the expected props type
}

export default function Home({ newsItems }: HomeProps) {
  return (
    <>
      <Head>
        <title>החדשות הטובות</title>
        <meta title="description" content="החדשות הטובות" />
      </Head>
      {/* Pass the fetched news items as props to the News component */}
      <News news={newsItems} />
    </>
  );
}

// Fetch data at build time for SSG
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/news?populate%5B0%5D=mediaLinks`
  );
  const newsData = await res.json();
  console.log(JSON.stringify(newsData));

  return {
    props: {
      newsItems: newsData.data, // Send the data as props to the Home component
    },
    revalidate: 60, // Revalidate every 60 seconds (optional)
  };
};
