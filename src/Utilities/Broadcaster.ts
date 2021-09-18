import { Song, TeamPoints } from '../Components/types';
import Config from '../config';

export const sendSong = (song: Song) => {
  console.log('sending song', song);
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.postMessage({ song });
  bc.close();
};

export const sendPoints = (points: TeamPoints) => {
  console.log('sending points', points);
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.postMessage({ points });
  bc.close();
};

export const subscribeToBroadcast = (
  songUpdate: (song: Song) => void,
  pointUpdate: (points: TeamPoints) => void,
): (() => void) => {
  const bc = new BroadcastChannel(Config.broadcastChannelId);
  bc.onmessage = ({ data }) => {
    console.log('got some broadcast data', data);
    if (data.song) {
      const broadcastSong: Song = data.song as Song;
      songUpdate(broadcastSong);
    }
    if (data.points) {
      pointUpdate(data.points);
    }
  };
  return () => bc.close();
};
