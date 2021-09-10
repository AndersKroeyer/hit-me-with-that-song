import { createStyles, Paper, withStyles } from '@material-ui/core';
import { useState } from 'react';
import Config from '../../config';
import { Song, Word } from '../types';
import styles from './ControlPanel.styles';

const buildWords = (words: string[]): Word[] =>
  words.map((w) => ({ text: w, visible: false }));

const songData: Song[] = [
  {
    author: 'Some woman',
    title: 'This is a title',
    words: buildWords(['Pas', 'på', 'den', 'knald', 'røde', 'gummibåd']),
  },
  {
    author: 'Rollo & King',
    title: 'Der står et billede af dig på mit bord',
    words: buildWords(['Der', 'står', 'et', 'billede', 'af', 'dig']),
  },
];

function ControlPanel() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const onclick = () => {
    const bc = new BroadcastChannel(Config.broadcastChannelId);
    bc.postMessage({ song: songData[currentSongIndex] });
    bc.close();
  };

  const classes = styles();

  return (
    <div className={classes.controlPanelContainer}>
      {/* songpicker */}
      <div className={classes.columnContainer}>
        {songData.map((song) => (
          <Paper elevation={1} className={classes.pickSong}>
            {/* <div className={pickSong}> */}
            <span className={classes.songTitle}>{song.author}</span>
            <span>{song.title}</span>
            {/* </div> */}
          </Paper>
        ))}
      </div>

      {/* toggle visibility  */}
      <div className={classes.columnContainer}>
        <button type="button" onClick={onclick}>
          Send song
        </button>
      </div>

      {/* pick winner */}
      <div className={classes.columnContainer}>pick a winner!</div>
    </div>
  );
}

export default ControlPanel;
