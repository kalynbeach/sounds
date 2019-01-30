import { IAudioClip, IAudioClipMetaData, IRecorder } from "../types";

//
// recordAudio():
// - returns a Promise that resolves an object that contains the audio recording API
//
// API consists of two functions:
//   - start(): starts recording
//   - stop(): stops recording and returns a Promise that resolves into { element, metaData, blob, url, play }
//

const recordAudio = (): Promise<IRecorder> => {
  return new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks: BlobPart[] = [];
    mediaRecorder.ondataavailable = function(event) {
      audioChunks.push(event.data);
    };
    const start = () => {
      mediaRecorder.start();
    };
    const stop = (): Promise<IAudioClip> => {
      return new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const blob = new Blob(audioChunks);
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          const play = (): void => {
            audio.play();
          };
          const meta: IAudioClipMetaData = {
            title: audio.title,
            duration: audio.duration,
            createdOn: new Date().toTimeString()
          };
          const audioClip: IAudioClip = {
            audio,
            meta,
            blob,
            url,
            play
          };
          resolve(audioClip);
        });
        mediaRecorder.stop();
      });
    };
    const recorder: IRecorder = { start, stop };
    resolve(recorder);
  });
};

export default recordAudio;
