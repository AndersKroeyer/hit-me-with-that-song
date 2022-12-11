/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider, IconButton, TextField, Tooltip } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import HelpTooltip from '../../../Common/HelpTooltip/HelpTooltip';
import { Song, Word } from '../../types';

interface Props {
  song: Song;
  onSongEdit: (song: Song) => void;
}

const styles = {
  row: css({
    display: 'flex',
    gap: '40px',
  }),
  column: css({
    height: '100%',
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
  }),
};

export default function SongEditor({ song, onSongEdit }: Props) {
  const wordsEdited = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newWords: Word[] = e.target.value
        .split(' ')
        .map((s) => ({ text: s, visible: false, stopWord: false }));

      onSongEdit({ ...song, words: newWords });
    },
    [onSongEdit, song],
  );

  if (!song) return <div> </div>;

  return (
    <div css={styles.column}>
      <div css={styles.row}>
        <TextField
          label="Artist"
          variant="standard"
          value={song.author}
          onChange={(event) =>
            onSongEdit({ ...song, author: event.target.value })
          }
        />
        <TextField
          label="Song title"
          variant="standard"
          value={song.title}
          onChange={(event) =>
            onSongEdit({ ...song, title: event.target.value })
          }
        />
      </div>
      <div css={styles.column}>
        <TextField
          label="Lyrics from the song which will be used as hints in the game"
          variant="standard"
          value={song.words.map((x) => x.text).join(' ')}
          onChange={wordsEdited}
        />
        <div css={styles.row}>
          <TextField
            style={{ flexGrow: 2 }}
            label="Youtube song link"
            variant="standard"
            value={song.url}
            onChange={(event) =>
              onSongEdit({ ...song, url: event.target.value })
            }
          />
          <HelpTooltip
            hintText={
              "Pause the youtube video before the part containing the lyrics above, then right click the video and choose 'Copy video URL at current time'"
            }
          />
        </div>
        <TextField
          label="Song duration - for how many seconds shound the song play?"
          variant="standard"
          value={song.playtime}
          inputProps={{ pattern: '[0-9]*' }}
          onChange={(event) =>
            onSongEdit({
              ...song,
              playtime: Number(event.target.value) || 0,
            })
          }
        />
        <TextField
          label="Trivia question about the artist or song"
          variant="standard"
          value={song.trivia}
          onChange={(event) =>
            onSongEdit({ ...song, trivia: event.target.value })
          }
        />
        <TextField
          label="Trivia answer"
          variant="standard"
          value={song.triviaAnswer}
          onChange={(event) =>
            onSongEdit({ ...song, triviaAnswer: event.target.value })
          }
        />
      </div>
    </div>
  );
}
