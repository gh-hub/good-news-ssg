import NewsItemComponent from "./NewsItem";

interface NewsProps {
  news: NewsItem[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  console.log({ news });

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-right">חדשות</h1>
      <div className="space-y-8">
        {news.map((item, index) => (
          <NewsItemComponent key={index} news={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
