export interface Video {
  slug: string;
}

export interface CdnVideo extends Video {
  mp4: string;
  webm: string;
  placeholder: string;
}
