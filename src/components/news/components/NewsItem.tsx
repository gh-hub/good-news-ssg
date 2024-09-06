import ImageComponent from "@/components/common/ImageComponent";
import VideoComponent from "@/components/common/VideoComponent";
import { NewsItemDto } from "../news.dto";

interface NewsItemProps {
  news: NewsItemDto;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  const { title, description, mediaLinks } = news.attributes;
  console.log({ "news.attributes": news.attributes });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Rendering media links if present */}
        {mediaLinks.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {mediaLinks.map((mediaLink, index) => {
              const { url, type, title: mediaTitle } = mediaLink;
              return (
                <div key={index} className="w-full">
                  {type === "IMAGE" ? (
                    <ImageComponent url={url} title={mediaTitle || "Image"} />
                  ) : (
                    <VideoComponent url={url} title={mediaTitle || "Video"} />
                  )}
                  <p className="text-sm text-gray-500 mt-1">{mediaTitle}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
