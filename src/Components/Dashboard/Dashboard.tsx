import { useEffect, useState } from 'react';
import styles from './Dashboard.module.scss';
import Word from '../Word/Word';
import Config from '../../config';
import { DashboardState } from '../types';

const initialState: DashboardState = {
  words: [],
};

function Dashboard() {
  const [dataFromBroadCast, setDataFromBroadCast] =
    useState<DashboardState>(initialState);

  useEffect(() => {
    const bc = new BroadcastChannel(Config.broadcastChannelId);
    bc.onmessage = ({ data }) => {
      console.log('got some broadcast data', data);

      if (data.song) {
        setDataFromBroadCast(data.song);
      }
    };
    return () => {
      bc.close();
    };
  }, []);

  return (
    <div className={styles.wordsContainer}>
      {dataFromBroadCast.words.map((word) => (
        <Word visible={word.visible} text={word.text} />
      ))}
    </div>
  );
}

export default Dashboard;
