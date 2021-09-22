import { Music, Song, TeamPoints } from '../Components/types';
import Config from '../config';

export const sendSong = (song: Song) => {
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.postMessage({ song });
  bc.close();
};

export const sendPoints = (points: TeamPoints) => {
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.postMessage({ points });
  bc.close();
};

export const sendStartMusic = (music: Music) => {
  console.log('start music', music);
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.postMessage({ music });
  bc.close();
};

interface sendGuessMusicProps {
  isStopWord: boolean;
}
export const sendGuessMusic = ({ isStopWord }: sendGuessMusicProps) => {
  const soundToPlay = isStopWord
    ? 'Sound/wrong_guess.mp3'
    : 'Sound/correct_guess.mp3';
  sendStartMusic({ url: soundToPlay, playtime: 2 });
};

export const sendIntroMusic = () =>
  sendStartMusic({ url: 'Sound/intro.mp3', playtime: 30 });

export const subscribeToBroadcast = (
  songUpdate: (song: Song) => void,
  pointUpdate: (points: TeamPoints) => void,
  onStartMusic: (music: Music) => void,
): (() => void) => {
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.onmessage = ({ data }) => {
    console.log('got some broadcast data', data);
    if (data.song) {
      songUpdate(data.song);
    }
    if (data.points) {
      pointUpdate(data.points);
    }
    if (data.music) {
      onStartMusic(data.music);
    }
  };
  return () => bc.close();
};
