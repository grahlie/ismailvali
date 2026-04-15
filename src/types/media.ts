/** Single registry entry for site media (news, videos, announcements). */
export type MediaEntry =
  | {
      id: number;
      type: "video";
      title: string;
      youtubeId: string;
      thumbnail?: string;
      highlighted?: boolean;
    }
  | {
      id: number;
      type: "press";
      title: string;
      url: string;
      logo: string;
      highlighted?: boolean;
    }
  | {
      id: number;
      type: "announcement";
      title: string;
      url: string;
      logo: string;
      highlighted?: boolean;
    };

/** Video rows only — used by `VideoGrid`. */
export type MediaItem = Extract<MediaEntry, { type: "video" }>;
