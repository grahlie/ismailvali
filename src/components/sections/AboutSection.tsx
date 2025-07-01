"use client";

import { FadeInSection } from "@/components/ui/fade-in-section";
import { media } from "@/data/media";
import Image from "next/image";

export function AboutSection() {
  return (
    <FadeInSection>
      <section id="about" className="px-6 py-24">
        <div className="w-full">
          <h2 className="section-title mb-16">About</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <p className="h3 leading-snug">
                Ismail Vali is the inventor, founder and CEO of Yield Sec, and leads a team of experts in the creation of a technical intelligence platform that helps monitor, police, enforce, and optimize the licensed marketplace across online betting, gaming, and lottery activity.
              </p>

              <p className="h3 leading-snug">
                Yield Sec&apos;s mission focuses on removing black-market threats to revenue, taxation, and consumer protection, benefiting the ecosystem overall. As a technical intelligence platform for online marketplaces, Yield Sec provides comprehensive data, analytics and advisory products and services that allow clients to decrease costs, mitigate risks, increase revenues or taxation receipts and achieve certainty.
              </p>

              <p className="h3 leading-snug">
                Under Ismail Vali&apos;s leadership, Yield Sec has become a trusted partner for organizations seeking to understand their total marketplace audience, activity and opportunity, and secure an optimized online future across gambling, streaming, crypto, and consumer markets.
              </p>
            </div>

            {/* Unified Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {media.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="h-64 rounded-lg overflow-hidden bg-gray-200 relative">
                    {item.type === "image" && item.filename && (
                      <Image
                        src={`/masonry/${item.filename}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    {item.type === "video" && item.youtubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group h-full"
                      >
                        <Image
                          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                  <div className="h-16 mt-4 flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
