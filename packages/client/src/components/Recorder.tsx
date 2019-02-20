import React from "react";
import RecorderControls from "./RecorderControls";

type Props = {
  startRecording: () => void;
  stopRecording: () => void; // Correct?
  recording: boolean;
  playing: boolean;
};

const Recorder = ({
  startRecording,
  stopRecording,
  recording,
  playing
}: Props) => {
  return (
    <div id="recorder">
      <RecorderControls
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
      <div id="recorder-indicator">
        {recording ? <span>Recording</span> : null}
        {playing ? <span>Playing</span> : null}
      </div>
    </div>
  );
};

export default Recorder;
