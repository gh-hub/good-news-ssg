"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageComponentProps {
  url: string;
  title: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative aspect-w-16 aspect-h-9">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
      )}
      <Image
        src={url}
        alt={title}
        layout="fill"
        objectFit="cover"
        className={`rounded-md transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        // onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageComponent;
