"use client";

import { FadeInSection } from "@/components/ui/fade-in-section";
import { media } from "@/data/media";
import Image from "next/image";

export function AboutSection() {
  return (
    <FadeInSection>
      <section id="about" className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-16">About</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <p className="h3 leading-snug">
                Ismail Vali is the inventor, founder and CEO of Yield Sec, and leads a team of experts across the operations of a technical intelligence platform that helps monitor, police, enforce, and optimize the marketplace across online gambling, streaming, crypto and consumer goods.
              </p>

              <p className="h3 leading-snug">
                Yield Sec’s mission focuses on removing black-market threats to revenue, taxation, and consumer protection, benefiting the ecosystem overall.
              </p>

              <p className="h3 leading-snug">
                Ismail’s background in online gambling, product development, marketing, and online operations, with numerous C-level operator positions in the betting and gaming industry, coupled with his academic legal background - including a BA and MA in Law from Brasenose College, Oxford University - led to the invention of a unique solution to restrict and remove the harm caused by what has long been an endemic online industry problem: crime and its impact upon commerce, consumers, and the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {media.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 relative">
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
                          src={item.thumbnail || `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                          alt={item.title}
                          fill
                          className="object-contain object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (item.thumbnail) {
                              // If custom thumbnail fails, fall back to YouTube thumbnail
                              target.src = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;
                            } else {
                              // If YouTube maxresdefault fails, fall back to mqdefault
                              target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
                            }
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
