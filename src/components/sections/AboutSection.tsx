"use client";

import { FadeInSection } from "@/components/ui/fade-in-section";
import Image from "next/image";

interface AboutSectionProps {
  imageFilenames: string[];
}

export function AboutSection({ imageFilenames }: AboutSectionProps) {
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

            {/* Image Masonry */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {imageFilenames.map((filename, index) => (
                <div key={index} className="break-inside-avoid">
                  <Image
                    src={`/masonry/${filename}`}
                    alt={`Ismail Vali and Yield Sec team activities - Image ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
