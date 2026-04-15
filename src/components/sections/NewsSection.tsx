import { FadeInSection } from "@/components/ui/fade-in-section";
import { PressGrid } from "@/components/ui/press-grid";
import { TabGrid } from "@/components/ui/tab-grid";
import { VideoGrid } from "@/components/ui/video-grid";
import { media } from "@/data/media";
import type { MediaEntry, MediaItem } from "@/types/media";
import type { PressItem } from "@/types/press";

const MEDIA_ITEMS_PER_TAB = 3;

function linkToPressItem(
  m:
    | Extract<MediaEntry, { type: "press" }>
    | Extract<MediaEntry, { type: "announcement" }>,
): PressItem {
  return { id: m.id, title: m.title, url: m.url, logo: m.logo };
}

function byIdDesc(a: { id: number }, b: { id: number }) {
  return b.id - a.id;
}

export function NewsSection() {
  const videos = media
    .filter((m): m is MediaItem => m.type === "video")
    .sort(byIdDesc)
    .slice(0, MEDIA_ITEMS_PER_TAB);
  const pressItems = media
    .filter(
      (m): m is Extract<MediaEntry, { type: "press" }> => m.type === "press",
    )
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

  const highlightedItem = media.find((m) => m.highlighted);

  return (
    <FadeInSection>
      <section id="news" className="py-24">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <TabGrid
              idPrefix="news"
              ariaLabel="Media categories"
              defaultTabId="news"
              tabs={[
                {
                  id: "news",
                  label: "Press Hits",
                  panel: <PressGrid items={pressItems} />,
                },
                {
                  id: "announcements",
                  label: "Press Realeses",
                  panel: <PressGrid items={announcementItems} />,
                },
                {
                  id: "videos",
                  label: "Video Content",
                  panel: <VideoGrid items={videos} />,
                },
              ]}
            />

            {highlightedItem && (
              <div className="pt-8 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Latest
                </p>
                {"url" in highlightedItem ? (
                  <a
                    href={highlightedItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="section-title-small !text-center !left-0 group-hover:text-blue-700 transition-colors">
                      {highlightedItem.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="section-title-small !text-center !left-0">{highlightedItem.title}</h3>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
