import { NewsItemDto } from "../news.dto";
import NewsItemComponent from "./NewsItem";

interface NewsProps {
  news: NewsItemDto[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-right">חדשות</h1>
      <div className="space-y-8">
        {news.map((item, i) => (
          <NewsItemComponent key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
