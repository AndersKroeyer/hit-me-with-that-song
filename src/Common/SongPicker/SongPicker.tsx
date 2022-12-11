/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Paper } from '@mui/material';
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Quiz, Song } from '../../Components/types';

const styles = {
  columnScrollContainer: css({
    overflowY: 'auto',
    height: '100%',
    width: '100%',
    boxSizing: 'content-box',
    overflowX: 'hidden',
    paddingRight: '17px',
  }),
  pickSong: css({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    padding: '15px',
    borderLeft: '5px solid white',
    marginLeft: '1px',
    marginTop: '5px',
  }),
  songTitle: css({
    fontWeight: 'bolder',
    fontSize: '18px',
  }),
};

interface SongPickerProps {
  quiz: Quiz;
  onSongClick: (idx: number) => void;
}

function SongPicker({ quiz, onSongClick }: SongPickerProps) {
  const [activeSong, setActiveSong] = useState<Song>();

  const internalOnClick = useCallback(
    (idx: number) => {
      setActiveSong(quiz.songs[idx]);
      onSongClick(idx);
    },
    [onSongClick, quiz.songs],
  );

  return (
    <div css={styles.columnScrollContainer}>
      {quiz &&
        quiz.songs.map((song, idx) => (
          <Paper
            elevation={1}
            css={styles.pickSong}
            onClick={() => internalOnClick(idx)}
            key={uuidv4()}
            style={{
              borderLeft:
                song.title === activeSong?.title ? '5px solid green' : '',
            }}
          >
            <span css={styles.songTitle}>
              {song.author || 'Unknown artist'}
            </span>
            <span>{song.title || `Song ${idx}`}</span>
            <i>{song.words.flatMap((x) => [x.text, ' '])}</i>
          </Paper>
        ))}
    </div>
  );
}

export default SongPicker;
