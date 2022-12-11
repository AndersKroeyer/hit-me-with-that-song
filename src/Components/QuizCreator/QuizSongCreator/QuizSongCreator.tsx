/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconButton } from '@mui/material';
import { useCallback, useState } from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { v4 as uuidv4 } from 'uuid';
import SongPicker from '../../../Common/SongPicker/SongPicker';
import { Quiz, Song, TriviaState } from '../../types';
import SongEditor from '../SongEditor/SongEditor';

interface Props {
  quiz: Quiz;
  onSongsChanged: (quizKey: string, songs: Song[]) => void;
}

const styles = {
  container: css({
    display: 'flex',
    height: '100%',
  }),
  songListContainer: css({
    heigh: '100%',
    width: '300px',
    marginRight: '100px',
  }),
  songEditorContainer: css({
    marginTop: '25px',
  }),
};

export default function QuizSongCreator({ quiz, onSongsChanged }: Props) {
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  const addSongClick = useCallback(() => {
    const newSong: Song = {
      id: uuidv4(),
      title: '',
      author: '',
      playtime: 0,
      trivia: '',
      triviaAnswer: '',
      url: '',
      words: [],
      showTrivia: TriviaState.Hidden,
    };
    onSongsChanged(quiz.key, [...quiz.songs, newSong]);
  }, [onSongsChanged, quiz.key, quiz.songs]);

  const onSongEdited = useCallback(
    (song: Song) => {
      const copy = quiz.songs.slice();
      copy[selectedSongIndex] = song;
      onSongsChanged(quiz.key, copy);
    },
    [onSongsChanged, quiz.key, quiz.songs, selectedSongIndex],
  );

  return (
    <div css={styles.container}>
      <div css={styles.songListContainer}>
        <IconButton onClick={addSongClick}>
          <AddBoxRoundedIcon
            color="success"
            style={{ height: '50px', width: '50px' }}
          />
        </IconButton>
        {quiz.songs.length > 0 && (
          <SongPicker quiz={quiz} onSongClick={setSelectedSongIndex} />
        )}
      </div>
      <div css={styles.songEditorContainer}>
        <SongEditor
          song={quiz.songs[selectedSongIndex]}
          onSongEdit={onSongEdited}
        />
      </div>
    </div>
  );
}
