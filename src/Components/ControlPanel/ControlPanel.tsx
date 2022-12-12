/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from 'uuid';
import { useReducer, useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
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
import SongData from '../../Data/VinVin2021';
import UserIcon from '../../Common/UserIcon/UserIcon';
import SongPicker from '../../Common/SongPicker/SongPicker';
import { GetUserQuizList } from '../../Firebase/Firebase';
import ControlButton from './ControlButton/ControlButton';

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

const defaultKey = uuidv4();

function ControlPanel() {
  const defaultQuiz: Quiz = { key: defaultKey, songs: SongData };
  const [quizKey, setQuizKey] = useState<string>(defaultKey);
  const [quizList, setQuizList] = useState<Quiz[]>([defaultQuiz]);
  const quiz = quizList.find((x) => x.key === quizKey) || defaultQuiz;
  const [activeSong, dispatch] = useReducer(reducer, quiz.songs[0]);
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [songChosen, setSongChosen] = useState(false);

  const handleSongClick = useCallback((song: Song) => {
    setSongChosen(true);
    return dispatch({ type: SET_SONG_ACTION, song });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const userQuizList = await GetUserQuizList();
      setQuizList(userQuizList);
      const initialQuizKey = searchParams.get('quiz');
      setQuizKey(initialQuizKey || defaultKey);
      // const initialQuiz = userQuizList.find((x) => x.key === initialQuizKey);
      // if (initialQuiz) handleSongClick(initialQuiz.songs[0]);
    }
    fetchData();
  }, [handleSongClick, searchParams]);

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
      <div css={styles.topLeftControls}>
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon style={{ width: '50px', height: '50px' }} />
        </IconButton>
        {/* quiz list - maybe at some point? */}
        {/* {quizList && quizList.length > 1 && (
          <div style={{ marginTop: '8px' }}>
            <QuizDropDown
              content={quizList}
              selectedQuizKey={quizKey}
              onSelectedQuizChange={setQuizKey}
            />
          </div>
        )} */}
      </div>
      <UserIcon />
      <div css={styles.controlPanelContainer}>
        {/* songpicker */}
        <div css={styles.columnContainer}>
          <SongPicker
            selectedSongIndex={
              songChosen ? quiz.songs.indexOf(activeSong) : undefined
            }
            onSongClick={(idx) => handleSongClick(quiz.songs[idx])}
            quiz={quiz}
          />
        </div>
        {/* toggle visibility  */}
        <div css={styles.wordColumnContainer}>
          {songChosen &&
            activeSong.words.length > 0 &&
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
        <div css={styles.columnContainer} style={{ gap: '14px' }}>
          <ControlButton onClick={sendIntroMusic}>Play intro</ControlButton>
          <ControlButton
            onClick={() =>
              sendStartMusic({
                url: activeSong.url,
                playtime: activeSong.playtime,
              })
            }
          >
            Play song
          </ControlButton>
          <ControlButton onClick={toggleRemainingWords}>
            Show all words
          </ControlButton>

          {(Object.keys(TriviaState) as Array<keyof typeof TriviaState>).map(
            (key) => (
              <ControlButton
                onClick={() => handleTriviaClick(TriviaState[key])}
                key={uuidv4()}
              >
                <div
                  style={{
                    color:
                      activeSong.showTrivia === TriviaState[key]
                        ? 'lightgreen'
                        : 'red',
                  }}
                >
                  {TriviaState[key]}
                </div>
              </ControlButton>
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
