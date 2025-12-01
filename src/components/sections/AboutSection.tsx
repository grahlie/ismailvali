"use client";

import { FadeInSection } from "@/components/ui/fade-in-section";
import { media } from "@/data/media";
import { press } from "@/data/press";
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
              Ismail Vali is the President of <a href="https://gamingcompliance.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Gaming Compliance International (GCI)</a> and the inventor, founder and former CEO of <a href="https://yieldsec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Yield Sec™</a>. He leads a global team across the operations of a technical intelligence platform that monitors, polices, enforces, and optimizes the marketplace across online gaming, streaming, crypto and consumer goods.
              </p>

              <p className="h3 leading-snug">
                From a career spanning online gaming, product development, marketing, and online operations, including multiple C-level roles across the betting and gaming industry, and with a BA and MA in Law from Brasenose College, Oxford University, Ismail created a unique solution to a long-standing online industry problem: the impact of crime on commerce, communities, and consumers.
              </p>

              <p className="h3 leading-snug">
                 In his role as President, he drives GCI’s AI-powered compliance and regulatory technology platform to deliver marketplace transparency, enhanced data capture, actionable intelligence, and transaction monitoring that helps governments, regulators, tribal nations, and operators move their online gaming marketplaces from chaos to control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {media
              .slice()
              .sort((a, b) => b.id - a.id)
              .map((item) => (
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

            <div className="space-y-8">
              <h3 className="h3 text-center">In the News</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {press
                  .slice()
                  .sort((a, b) => b.id - a.id)
                  .map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 relative flex-shrink-0">
                        <Image
                          src={item.logo}
                          alt="Publication logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-3 leading-relaxed">
                      {item.title}
                    </h4>
                    <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      <span>Read Article</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
