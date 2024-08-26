import News from "@/components/news";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const NEWS_URL = `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL}`;

export const getStaticProps = async () => {
  const endpoint = NEWS_URL; // Your GraphQL endpoint
  const client = new GraphQLClient(endpoint);

  const query = `
  query New {
    news {
      data {
        attributes {
          title
          description
          media_links {
            data {
              attributes {
                url
                title
                type
              }
            }
          }
        }
      }
    }
  }
    `;

  try {
    const data = await client.request(query);
    // return data as NewsApiResponse; // Process the data as needed
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {
          news: {
            data: [],
          },
        },
      },
    };
  }
};

export default function Home({ data }: { data: NewsApiResponse }) {
  return (
    <>
      <Head>
        <title>החדשות הטובות</title>
        <meta title="description" content="החדשות הטובות" />
      </Head>
      <News news={data.news.data} />
    </>
  );
}
