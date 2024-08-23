import ImageComponent from "@/components/common/ImageComponent";
import VideoComponent from "@/components/common/VideoComponent";

interface NewsItemProps {
  news: NewsItem;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  const { title, description, media_links } = news.attributes;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {media_links.data.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {media_links.data.map((media, index) => (
              <div key={index} className="w-full">
                {media.attributes.type === "IMAGE" ? (
                  <ImageComponent
                    url={media.attributes.url}
                    title={media.attributes.title}
                  />
                ) : (
                  <VideoComponent
                    url={media.attributes.url}
                    title={media.attributes.title}
                  />
                )}
                <p className="text-sm text-gray-500 mt-1">
                  {media.attributes.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
