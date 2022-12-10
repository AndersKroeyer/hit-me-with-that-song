import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import styles from './QuizPicker.style';
import { Quiz } from '../../types';
import SongData from '../../../Data/VinVin2021';
import PaperButton from '../PaperButton/PaperButton';

interface SongPickerProps {
  quizChanged: (data: Quiz) => void;
}

function SongPicker({ quizChanged }: SongPickerProps) {
  const [quizKey, setQuizKey] = useState('');

  const fetchQuiz = async () => {};

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
}
export default SongPicker;
