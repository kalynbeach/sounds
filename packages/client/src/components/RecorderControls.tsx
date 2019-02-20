import React from "react";

type Props = {
  startRecording: () => void;
  stopRecording: () => void; // Correct?
};

const RecorderControls = ({ startRecording, stopRecording }: Props) => {
  return (
    <div id="recorder-controls">
      <button onClick={startRecording}>
        <i className="fa fa-microphone fa-2x" />
      </button>
      <button onClick={stopRecording}>
        <i className="fa fa-stop fa-2x" />
      </button>
    </div>
  );
};

export default RecorderControls;
