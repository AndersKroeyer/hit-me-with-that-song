import { useEffect, useState } from 'react';
import styles from './Dashboard.styles';
import Word from '../Word/Word';
import Config from '../../config';
import { DashboardState } from '../types';

const initialState: DashboardState = {
  words: [],
  trivia: '',
  showTrivia: false,
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

  const classes = styles();

  if (dataFromBroadCast.showTrivia) {
    return (
      <div className={classes.triviaContainer}>
        <span className={classes.triviaText}>{dataFromBroadCast.trivia}</span>
      </div>
    );
  }

  return (
    <div className={classes.wordsContainer}>
      {dataFromBroadCast.words.map((word) => (
        <Word
          visible={word.visible}
          text={word.text}
          stopWord={word.stopWord && word.visible}
        />
      ))}
    </div>
  );
}

export default Dashboard;
