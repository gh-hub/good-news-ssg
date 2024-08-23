"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoComponentProps {
  url: string;
  title: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setIsLoading(false);
      };

      videoElement.addEventListener("canplay", handleCanPlay);

      // Check if the video is already loaded
      if (videoElement.readyState >= 3) {
        setIsLoading(false);
      }

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="relative aspect-w-16 aspect-h-9">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
      <video
        ref={videoRef}
        src={url}
        title={title}
        controls
        className={`w-full h-full rounded-md transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        preload="metadata"
      />
    </div>
  );
};

export default VideoComponent;
