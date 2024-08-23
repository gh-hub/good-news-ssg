import News from "@/components/news";
import { GraphQLClient } from "graphql-request";

const NEWS_URL = `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL}`;

const fetchNewsData = async (): Promise<NewsApiResponse | null> => {
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
    return data as NewsApiResponse; // Process the data as needed
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Page = async () => {
  const newsApiRes = await fetchNewsData();
  console.log(JSON.stringify(newsApiRes, undefined, 2));

  if (!newsApiRes) return <>ERROR</>;

  return (
    <>
      {/* <pre>{JSON.stringify(newsApiRes.news, undefined, 2)}</pre> */}
      <News news={newsApiRes.news.data} />
    </>
  );
};
export default Page;

// import Link from "next/link";
// import { GraphQLClient, gql, request } from "graphql-request";
// const NEWS_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql/`;
// const client = new GraphQLClient(NEWS_URL);

// const document = gql`
//   {
//     news	{
//         data{
//           attributes{
//             title
//             description
//             media_links {
//               data{
//                 attributes{
//                   url
//                   title
//                   type
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const query = `
// query {
//     news	{
//       data{
//         attributes{
//           title
//           description
//           media_links {
//             data{
//               attributes{
//                 url
//                 title
//                 type
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

// export const getNews = async () => {
//   console.log("---- START normal ----");

//   const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/news`);
//   const result = await resulting.json();
//   console.log(JSON.stringify(result, undefined, 2));
//   console.log("---- END normal ----");
//   return {
//     items: result.data,
//   };
// };
// const Page = async () => {
//   try {
//     // const news1 = await client.request(document);
//     // console.log(JSON.stringify(news1));
//     const res2 = await request(NEWS_URL, document);
//     console.log(JSON.stringify(res2, undefined, 2));
//   } catch (error) {
//     console.error(error);
//   }

//   const news = await getNews();
//   //   console.log(JSON.stringify(news));

//   if (!news) return <>no news</>;
//   return (
//     <div>
//       <h1>New!!!s</h1>
//       {/* <ul>
//         {news.map((item) => (
//           <li key={item.id}>
//             <Link href={`/news/${item.slug}`}>{item.title}</Link>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };
// export default Page;
