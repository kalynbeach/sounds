import { IAudioClip } from "../types";

export interface AudioClipAction {
  type: "ADD_AUDIO_CLIP" | "DELETE_AUDIO_CLIP";
  audioClip: IAudioClip;
}
