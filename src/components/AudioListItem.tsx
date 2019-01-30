import React from "react";

type Props = {
  audioClipIndex: number;
  playAudioClip: (index: number) => void;
};

const AudioListItem = ({ audioClipIndex, playAudioClip }: Props) => {
  function handlePlayClick() {
    playAudioClip(audioClipIndex);
  }

  return (
    <div className="audio-list-item">
      <span>{audioClipIndex}</span>
      <button onClick={handlePlayClick}>
        <i className="fa fa-play fa-2x" />
      </button>
    </div>
  );
};

export default AudioListItem;
