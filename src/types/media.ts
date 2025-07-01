export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  filename?: string; // for images
  youtubeId?: string; // for videos
}
