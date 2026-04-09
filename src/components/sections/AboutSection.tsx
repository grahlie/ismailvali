import { FadeInSection } from "@/components/ui/fade-in-section";
import { PressGrid } from "@/components/ui/press-grid";
import { TabGrid } from "@/components/ui/tab-grid";
import { VideoGrid } from "@/components/ui/video-grid";
import { media } from "@/data/media";
import type { MediaEntry, MediaItem } from "@/types/media";
import type { PressItem } from "@/types/press";

const MEDIA_ITEMS_PER_TAB = 3;

function linkToPressItem(
  m: Extract<MediaEntry, { type: "press" }> | Extract<MediaEntry, { type: "announcement" }>,
): PressItem {
  return { id: m.id, title: m.title, url: m.url, logo: m.logo };
}

function byIdDesc(a: { id: number }, b: { id: number }) {
  return b.id - a.id;
}

export function AboutSection() {
  const videos = media
    .filter((m): m is MediaItem => m.type === "video")
    .sort(byIdDesc)
    .slice(0, MEDIA_ITEMS_PER_TAB);
  const pressItems = media
    .filter((m): m is Extract<MediaEntry, { type: "press" }> => m.type === "press")
    .sort(byIdDesc)
    .slice(0, MEDIA_ITEMS_PER_TAB)
    .map(linkToPressItem);
  const announcementItems = media
    .filter(
      (m): m is Extract<MediaEntry, { type: "announcement" }> =>
        m.type === "announcement",
    )
    .sort(byIdDesc)
    .slice(0, MEDIA_ITEMS_PER_TAB)
    .map(linkToPressItem);

  return (
    <FadeInSection>
      <section id="about" className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-16">About</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <p className="h3 leading-snug">
                Ismail Vali is the President of{" "}
                <a
                  href="https://gamingcompliance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  Gaming Compliance International (GCI)
                </a>{" "}
                and the inventor, founder and former CEO of{" "}
                <a
                  href="https://yieldsec.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  Yield Sec
                </a>
                {
                  ". He leads a global team across the operations of a technical intelligence platform that monitors, polices, enforces, and optimizes the marketplace across online gaming, streaming, crypto and consumer goods. "
                }
                From a career spanning online gaming, product development, marketing, and online operations, including multiple C-level roles across the betting and gaming industry, and with a BA and MA in Law from Brasenose College, Oxford University, Ismail created a unique solution to a long-standing online industry problem: the impact of crime on commerce, communities, and consumers. In his role as President, he drives GCI&apos;s AI-powered compliance and regulatory technology platform to deliver marketplace transparency, enhanced data capture, actionable intelligence, and transaction monitoring that helps governments, regulators, tribal nations, and operators move their online gaming marketplaces from chaos to control.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="h3 text-center">Media</h3>
              <TabGrid
                idPrefix="about"
                ariaLabel="Media categories"
                defaultTabId="news"
                tabs={[
                  {
                    id: "news",
                    label: "News",
                    panel: <PressGrid items={pressItems} />,
                  },
                  {
                    id: "videos",
                    label: "Videos",
                    panel: <VideoGrid items={videos} />,
                  },
                  {
                    id: "announcements",
                    label: "Announcements",
                    panel: <PressGrid items={announcementItems} />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
