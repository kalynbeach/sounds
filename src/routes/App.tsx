import React, { useEffect, useReducer, useState } from "react";
import { AudioClipAction } from "../actions";
import recordAudio from "../api/recordAudio";
import AudioList from "../components/AudioList";
import Nav from "../components/Nav";
import Recorder from "../components/Recorder";
import { IAudioClip, IRecorder } from "../types";

const initialRecorder: IRecorder = {
  start: function() {
    return;
  },
  stop: function() {
    return new Promise(resolve => {
      resolve();
    });
  }
};

const initialAudioClips: IAudioClip[] = [];

function audioClipsReducer(audioClips: IAudioClip[], action: AudioClipAction) {
  switch (action.type) {
    case "ADD_AUDIO_CLIP":
      // TODO: Figure out how to make immer draftState work here (if needed)
      // return produce(initialAudioClips, draftState => {
      //   draftState.push(action.audioClip);
      // });
      return [...audioClips, action.audioClip];
    default:
      return initialAudioClips;
  }
}

const App = () => {
  const [recorder, setRecorder] = useState<IRecorder>(initialRecorder);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioClips, dispatch] = useReducer(audioClipsReducer, []);

  // Set up recordAudio API on component mount
  useEffect(() => {
    async function initRecorder() {
      const newRecorder: IRecorder = await recordAudio();
      setRecorder(newRecorder);
    }
    initRecorder();
  }, []);

  function startRecording(): void {
    if (!recording) {
      recorder.start();
      setRecording(true);
    }
  }

  async function stopRecording() {
    if (recording) {
      const audioClip: IAudioClip = await recorder.stop();
      const newRecorder: IRecorder = await recordAudio();
      setRecording(false);
      setRecorder(newRecorder);
      dispatch({ type: "ADD_AUDIO_CLIP", audioClip });
    }
  }

  function playAudioClip(index: number): void {
    if (audioClips[index]) {
      audioClips[index].audio.addEventListener("ended", () => {
        setPlaying(false);
      });
      audioClips[index].play();
      setPlaying(true);
    }
  }

  return (
    <div className="page app">
      <Nav />
      <Recorder
        startRecording={startRecording}
        stopRecording={stopRecording}
        recording={recording}
        playing={playing}
      />
      <AudioList audioClips={audioClips} playAudioClip={playAudioClip} />
    </div>
  );
};

export default App;
