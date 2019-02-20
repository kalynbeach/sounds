export interface IAudioClipMetaData {
  title: string;
  duration: number;
  createdOn: string;
}

export interface IAudioClip {
  audio: HTMLAudioElement;
  blob: Blob;
  meta: IAudioClipMetaData;
  url: string;
  play(): void;
}

export type IAudioClipsState = Array<IAudioClip>;

export interface IRecorder {
  start(): void;
  stop(): Promise<IAudioClip>;
}
