/** @jsxImportSource @emotion/react */
import { css, IconButton, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import QuizDropDown from '../../Common/QuizDropdown/QuizDropDown';
import { Quiz } from '../types';

interface Props {
  quizList: Quiz[];
  onQuizListChanged: (quizList: Quiz[]) => void;
  selectedQuizKey: string;
  onSelectedQuizChanged: (quizKey: string) => void;
}

export default function QuizCreator({
  quizList,
  onQuizListChanged,
  selectedQuizKey,
  onSelectedQuizChanged,
}: Props) {
  const [newQuizName, setNewQuizName] = useState('');

  const styles = {
    container: css({
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    }),
  };

  let validQuizName = false;
  if (newQuizName.length > 0 && !quizList.find((x) => x.key === newQuizName))
    validQuizName = true;

  const addQuizClick = useCallback(() => {
    if (!validQuizName) return;
    const newQuiz: Quiz = { key: newQuizName, songs: [] };
    onQuizListChanged([...quizList, newQuiz]);
    setNewQuizName('');
    onSelectedQuizChanged(newQuiz.key);
  }, [
    newQuizName,
    onQuizListChanged,
    onSelectedQuizChanged,
    quizList,
    validQuizName,
  ]);

  //   console.log('sel quiz', selectedQuiz);
  //   console.log('sel key', selectedQuizKey);
  //   console.log('list', quizList);
  return (
    <div css={styles.container}>
      {quizList.length > 0 && (
        <QuizDropDown
          content={quizList}
          selectedQuizKey={selectedQuizKey}
          onSelectedQuizChange={onSelectedQuizChanged}
        />
      )}
      <TextField
        label="Quiz name"
        onChange={(x) => setNewQuizName(x.target.value)}
        value={newQuizName}
        style={{ marginLeft: '15px' }}
      />
      <IconButton disabled={!validQuizName} onClick={addQuizClick}>
        <AddBoxRoundedIcon
          color={validQuizName ? 'success' : 'disabled'}
          style={{ height: '50px', width: '50px' }}
        />
      </IconButton>
    </div>
  );
}
