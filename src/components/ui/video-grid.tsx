"use client";

import { MediaItem } from "@/types/media";
import Image from "next/image";

export function VideoGrid({ items }: Readonly<{ items: MediaItem[] }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 relative">
              <a
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full relative"
              >
                <Image
                  src={
                    item.thumbnail ||
                    `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`
                  }
                  alt={item.title}
                  fill
                  className="object-contain object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (item.thumbnail) {
                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;
                    } else {
                      target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="h-16 mt-4 flex items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
}
