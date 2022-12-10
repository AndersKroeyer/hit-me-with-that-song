import { v4 as uuidv4 } from 'uuid';
import { useReducer, useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { Quiz, Song, TriviaState, Word } from '../types';
import { styles } from './ControlPanel.styles';
import ToggleWord from './ToggleWord.tsx/ToggleWord';
import TeamPointControl from './TeamPointControl/TeamPointControl';
import {
  sendGuessMusic,
  sendIntroMusic,
  sendPoints,
  sendSong,
  sendStartMusic,
} from '../../Utilities/Broadcaster';
import PaperButton from './PaperButton/PaperButton';
import QuizPicker from './QuizPicker/QuizPicker';
import SongData from '../../Data/VinVin2021';

const TOGGLE_WORD_ACTION = 'toggleWordVisiblity';
interface toggleWordAction {
  wordIndex: number;
  type: typeof TOGGLE_WORD_ACTION;
  visibility: boolean;
}
const SET_SONG_ACTION = 'setSong';
interface setSongAction {
  type: typeof SET_SONG_ACTION;
  song: Song;
}
const TOGGLE_TRIVIA_ACTION = 'toggleTrivia';
interface toggleTriviaAction {
  type: typeof TOGGLE_TRIVIA_ACTION;
  triviaState: TriviaState;
}

type validActions = toggleWordAction | setSongAction | toggleTriviaAction;

const toggleWordVisiblity = (
  words: Word[],
  index: number,
  visibility: boolean,
) =>
  words.map((word, idx) =>
    index === idx ? { ...word, visible: visibility } : { ...word },
  );

function reducer(state: Song, action: validActions): Song {
  switch (action.type) {
    case TOGGLE_WORD_ACTION:
      return {
        ...state,
        words: toggleWordVisiblity(
          state.words,
          action.wordIndex,
          action.visibility,
        ),
      };
    case SET_SONG_ACTION:
      return action.song;
    case TOGGLE_TRIVIA_ACTION:
      return { ...state, showTrivia: action.triviaState };
    default:
      throw new Error();
  }
}

function ControlPanel() {
  const [quiz, setQuiz] = useState<Quiz>({ key: 'dummy', songs: SongData });
  const [activeSong, dispatch] = useReducer(reducer, quiz.songs[0]);
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);

  const handleSongClick = (index: number) =>
    dispatch({ type: SET_SONG_ACTION, song: quiz.songs[index] });

  const handleWordClick = (
    index: number,
    visible: boolean,
    stopWord: boolean,
    music: boolean,
  ) => {
    if (visible && music) {
      sendGuessMusic({ isStopWord: stopWord });
    }
    dispatch({
      type: TOGGLE_WORD_ACTION,
      wordIndex: index,
      visibility: visible,
    });
  };

  const handleTriviaClick = (state: TriviaState) =>
    dispatch({ type: TOGGLE_TRIVIA_ACTION, triviaState: state });

  const toggleRemainingWords = () => {
    const notVisibleWords = activeSong.words.flatMap((word, index) =>
      word.visible ? [] : [index],
    );
    notVisibleWords.forEach((wordIndex, delay) => {
      setTimeout(() => {
        handleWordClick(wordIndex, true, false, false);
      }, 500 * delay);
    });
  };

  useEffect(() => {
    sendSong(activeSong);
  }, [activeSong]);

  useEffect(() => {
    sendPoints({ team1Points, team2Points });
  }, [team1Points, team2Points]);

  return (
    <div css={styles.outerMostContainer}>
      <div css={styles.controlPanelContainer}>
        {/* songpicker */}
        <div css={styles.columnContainer}>
          <QuizPicker quizChanged={(newQuiz: Quiz) => setQuiz(newQuiz)} />
          <div css={styles.columnScrollContainer}>
            {quiz &&
              quiz.songs.map((song, idx) => (
                <Paper
                  elevation={1}
                  css={styles.pickSong}
                  onClick={() => handleSongClick(idx)}
                  key={song.title}
                  style={{
                    borderLeft:
                      song.title === activeSong.title ? '5px solid green' : '',
                  }}
                >
                  <span css={styles.songTitle}>{song.author}</span>
                  <span>{song.title}</span>
                  <i>{song.words.flatMap((x) => [x.text, ' '])}</i>
                </Paper>
              ))}
          </div>
        </div>

        {/* toggle visibility  */}
        <div css={styles.wordColumnContainer}>
          {activeSong.words.length > 0 &&
            activeSong.words.map((word, idx) => (
              <ToggleWord
                idx={idx}
                handleWordClick={() =>
                  handleWordClick(idx, !word.visible, word.stopWord, true)
                }
                stopWord={word.stopWord}
                visible={word.visible}
                text={word.text}
                key={uuidv4()}
              />
            ))}
        </div>

        <div css={styles.columnContainer}>
          <PaperButton onClick={sendIntroMusic}>
            <div>Play intro</div>
          </PaperButton>
          <PaperButton
            onClick={() =>
              sendStartMusic({
                url: activeSong.url,
                playtime: activeSong.playtime,
              })
            }
          >
            <div>Play song</div>
          </PaperButton>
          <PaperButton onClick={toggleRemainingWords}>
            <div>Show all words</div>
          </PaperButton>

          {(Object.keys(TriviaState) as Array<keyof typeof TriviaState>).map(
            (key) => (
              <PaperButton
                onClick={() => handleTriviaClick(TriviaState[key])}
                key={uuidv4()}
              >
                <div
                  style={{
                    color:
                      activeSong.showTrivia === TriviaState[key]
                        ? 'green'
                        : 'red',
                  }}
                >
                  {TriviaState[key]}
                </div>
              </PaperButton>
            ),
          )}
        </div>

        <div css={styles.columnContainer}>
          <TeamPointControl
            name="Sasha Dupont"
            points={team1Points}
            handlePointChange={(amount) => setTeam1Points(team1Points + amount)}
          />
          <TeamPointControl
            name="Sigurd Barrett"
            points={team2Points}
            handlePointChange={(amount) => setTeam2Points(team2Points + amount)}
          />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
