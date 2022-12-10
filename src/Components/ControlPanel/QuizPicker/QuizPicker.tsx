import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import styles from './QuizPicker.style';
import {
  getQuiz,
  getQuizzes,
  saveQuiz,
} from '../../../Utilities/PersistentStore';
import { Quiz } from '../../types';
import SongData from '../../../Data/VinVin2021';
import PaperButton from '../PaperButton/PaperButton';

interface SongPickerProps {
  quizChanged: (data: Quiz) => void;
}

const SongPicker = ({ quizChanged }: SongPickerProps) => {
  const classes = styles();

  // const [quizzes, setQuizzes] = useState<Quiz>();
  const [quizKey, setQuizKey] = useState<string>('');

  const fetchQuiz = async () => {
    const quiz = await getQuiz(quizKey);
    console.log('fetched quiz', quiz);
    quizChanged(quiz);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '17px',
      }}
    >
      <TextField
        label="Quiz key"
        variant="filled"
        onChange={(e) => setQuizKey(e.target.value)}
      />

      <PaperButton
        onClick={fetchQuiz}
        customStyles={{ height: '53px', width: '90px' }}
      >
        <div>Load</div>
      </PaperButton>
    </div>
  );
};
export default SongPicker;
