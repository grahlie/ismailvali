export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  filename?: string;
  youtubeId?: string;
  thumbnail?: string;
}
