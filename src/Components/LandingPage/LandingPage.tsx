/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import UserIcon from '../../Common/UserIcon/UserIcon';
import { GetUserQuizList, SaveUserQuizList } from '../../Firebase/Firebase';
import QuizCreator from '../QuizCreator/QuizCreator';
import QuizSongCreator from '../QuizCreator/QuizSongCreator/QuizSongCreator';
import { Quiz, Song } from '../types';
import PlayGameButton from './PlayGameButton/PlayGameButton';

const styles = {
  outerContainer: css({
    height: '100vh',
  }),
  topBar: css({
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderBottom: '1px solid #E7EBF0',
  }),
  songList: css({
    marginLeft: '15px',
    height: '80%',
  }),
};

function Landingpage() {
  const [selectedQuizKey, setSelectedQuizKey] = useState('');
  const [quizList, setQuizList] = useState<Quiz[]>([]);

  useEffect(() => {
    async function fetchData() {
      const userQuizList = await GetUserQuizList();
      setQuizList(userQuizList);
    }
    fetchData();
  }, [setQuizList]);

  const onSongsChanged = useCallback(
    (key: string, songs: Song[]) => {
      const newQuizList = quizList.slice();

      const editedQuiz = newQuizList.find((x) => x.key === key);
      if (!editedQuiz) return;

      editedQuiz.songs = songs;
      setQuizList(newQuizList);
    },
    [quizList],
  );

  const saveEverything = useCallback(() => {
    SaveUserQuizList(quizList)
      .then((x) => console.log('data saved'))
      .catch((x) => console.log('save failed', x));
  }, [quizList]);

  const selectedQuiz = quizList.find((x) => x.key === selectedQuizKey);

  return (
    <div css={styles.outerContainer}>
      <div css={styles.topBar}>
        <QuizCreator
          selectedQuizKey={selectedQuizKey}
          onSelectedQuizChanged={setSelectedQuizKey}
          quizList={quizList}
          onQuizListChanged={setQuizList}
        />
        <Button
          style={{ height: '56px', marginLeft: '120px' }}
          variant="outlined"
          onClick={saveEverything}
        >
          Save everything!
        </Button>
        <PlayGameButton />
        <UserIcon />
      </div>
      <div css={styles.songList}>
        {selectedQuiz && (
          <QuizSongCreator
            quiz={selectedQuiz}
            onSongsChanged={onSongsChanged}
          />
        )}
      </div>
    </div>
  );
}

export default Landingpage;
