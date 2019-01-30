import React from "react";
import { IAudioClip } from "../types";
import AudioListItem from "./AudioListItem";

type Props = {
  audioClips: IAudioClip[];
  playAudioClip: (index: number) => void;
};

const AudioList = ({ audioClips, playAudioClip }: Props) => {
  function audioListElements() {
    return audioClips.map((audioClip, index) => (
      <li key={index}>
        <AudioListItem audioClipIndex={index} playAudioClip={playAudioClip} />
      </li>
    ));
  }

  return (
    <div id="audio-list">
      <ul>{audioListElements()}</ul>
    </div>
  );
};

export default AudioList;
