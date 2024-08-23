import RssFeed from "@/components/RssFeed";

const Home = () => {
  console.log(process.env.ENV);
  console.log("ddd");

  return (
    <>
      <RssFeed />
    </>
  );
};

export default Home;
